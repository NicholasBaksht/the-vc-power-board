#!/usr/bin/env node
/* ============================================================
   SYNC-RESEARCH.JS
   Phase 7E. Projects the research files into Postgres for the API.

   Goes in tools/. Runs in GitHub Actions, never locally and never in
   a browser. Needs two secrets in the environment:

       SUPABASE_URL
       SUPABASE_SERVICE_ROLE_KEY

   THE REPO IS THE SOURCE OF TRUTH AND THIS ONLY EVER READS IT

   One direction. This script reads data-*.js and writes Postgres. It
   never writes a repo file, and nothing in Postgres can change the
   research. If the two disagree, the repo is right and this is stale.

   A FAILED SYNC MUST LEAVE THE PREVIOUS COPY INTACT

   The obvious shape is DELETE then INSERT. That has a window where
   the table is empty, and if the insert fails the API serves nothing
   until someone notices.

   So each table is replaced by: upsert every current record, then
   delete only the keys that are no longer present. At no point is the
   table empty, and a crash midway leaves a superset of the truth
   rather than a hole. The verify block's count invariant catches the
   superset case on the next run.

   DRIFT IS MEASURED, NOT ASSUMED

   Every table records a content hash over its source records and a
   row count. Comparing the hash the repo produces now against the one
   stored last time is how "is the API serving current research?"
   becomes a question with an answer.
   ============================================================ */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const vm = require('vm');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SOURCE_REF = process.env.GITHUB_SHA || 'local';

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
  process.exit(1);
}

const SCRIPTS = path.join(__dirname, '..', 'scripts');

/* ------------------------------------------------------------
   LOADING THE RESEARCH

   The data files are plain scripts that declare globals. They are
   evaluated in a vm sandbox with no require, no process and no fs,
   so a syntax error is caught here rather than shipped, and a data
   file cannot reach the filesystem or the network even by accident.
   ------------------------------------------------------------ */

function loadResearch(files) {
  const sandbox = {
    console: { log() {}, warn() {}, error() {} },
    document: { addEventListener() {}, getElementById: () => null,
                querySelectorAll: () => [], readyState: 'complete' },
    window: { addEventListener() {} },
    setTimeout() {}, localStorage: { getItem: () => null, setItem() {} },
    module: undefined
  };
  const ctx = vm.createContext(sandbox);
  for (const f of files) {
    const p = path.join(SCRIPTS, f);
    if (!fs.existsSync(p)) { console.warn('  skip (absent): ' + f); continue; }
    try {
      new vm.Script(fs.readFileSync(p, 'utf8'), { filename: f }).runInContext(ctx, { timeout: 30000 });
    } catch (e) {
      console.error('  FAILED to evaluate ' + f + ': ' + e.message);
      process.exit(1);
    }
  }
  return ctx;
}

/* Stable hash of the records themselves, with keys ordered, so the
   same research always produces the same hash regardless of how the
   object happened to be built. */
function hashRecords(rows, keyField) {
  const h = crypto.createHash('sha256');
  const sorted = rows.slice().sort(function (a, b) {
    return String(a[keyField]).localeCompare(String(b[keyField]));
  });
  for (const r of sorted) h.update(JSON.stringify(r, Object.keys(r).sort()));
  return h.digest('hex');
}

/* ------------------------------------------------------------
   POSTGREST
   ------------------------------------------------------------ */

async function rest(pathAndQuery, opts) {
  opts = opts || {};
  const res = await fetch(SUPABASE_URL + '/rest/v1/' + pathAndQuery, {
    method: opts.method || 'GET',
    headers: {
      apikey: SERVICE_KEY,
      Authorization: 'Bearer ' + SERVICE_KEY,
      'content-type': 'application/json',
      Prefer: opts.prefer || 'return=minimal'
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(res.status + ' ' + pathAndQuery.split('?')[0] + ' ' + text.slice(0, 300));
  }
  const ct = res.headers.get('content-type') || '';
  return ct.includes('json') ? res.json() : null;
}

/* Upsert in batches. One request per 500 rows keeps each payload
   small enough to be retried cheaply and well under any body limit. */
async function upsertAll(table, rows, key) {
  const SIZE = 500;
  for (let i = 0; i < rows.length; i += SIZE) {
    const chunk = rows.slice(i, i + SIZE);
    await rest(table + '?on_conflict=' + key, {
      method: 'POST', body: chunk, prefer: 'resolution=merge-duplicates,return=minimal'
    });
    process.stdout.write('    upserted ' + Math.min(i + SIZE, rows.length) + '/' + rows.length + '\r');
  }
  process.stdout.write('\n');
}

/* Delete only what is genuinely gone. Never a blanket delete: if the
   loader returned an empty set because a data file failed to parse,
   a blanket delete would empty the API. */
async function deleteMissing(table, key, presentKeys) {
  const existing = await rest(table + '?select=' + key, { prefer: 'return=representation' });
  const have = new Set(presentKeys.map(String));
  const gone = (existing || []).map(function (r) { return String(r[key]); })
                               .filter(function (k) { return !have.has(k); });
  if (!gone.length) return 0;

  if (gone.length > presentKeys.length) {
    /* Deleting more than remains means the source almost certainly
       failed to load. Refuse rather than empty the table. */
    console.error('    REFUSING to delete ' + gone.length + ' rows while keeping only ' +
                  presentKeys.length + '. That looks like a failed load, not a deletion.');
    process.exit(1);
  }
  const SIZE = 200;
  for (let i = 0; i < gone.length; i += SIZE) {
    const batch = gone.slice(i, i + SIZE).map(encodeURIComponent).join(',');
    await rest(table + '?' + key + '=in.(' + batch + ')', { method: 'DELETE' });
  }
  return gone.length;
}

async function syncTable(table, key, rows, sourceFiles) {
  console.log('  ' + table + ': ' + rows.length + ' records');
  if (!rows.length) {
    console.warn('    no records produced; leaving the existing copy alone');
    return;
  }
  await upsertAll(table, rows, key);
  const removed = await deleteMissing(table, key, rows.map(function (r) { return r[key]; }));
  if (removed) console.log('    removed ' + removed + ' rows no longer in the research');

  await rest('research_sync?on_conflict=table_name', {
    method: 'POST',
    body: [{
      table_name: table, row_count: rows.length,
      content_hash: hashRecords(rows, key),
      source_files: sourceFiles, source_ref: SOURCE_REF,
      synced_at: new Date().toISOString()
    }],
    prefer: 'resolution=merge-duplicates,return=minimal'
  });
}

/* ------------------------------------------------------------
   PROJECTIONS

   Only the fields the API filters, sorts or searches on become
   columns. Everything else rides in data, so a new research field
   reaches the API with no migration.
   ------------------------------------------------------------ */

function countryOf(hq) {
  if (!hq) return null;
  const parts = String(hq).split(',');
  return parts[parts.length - 1].trim() || null;
}

async function main() {
  console.log('Power Board research sync');
  console.log('  source ref: ' + SOURCE_REF);

  const firmFiles = ['taxonomy.js', 'data-firms.js'];
  const ctx = loadResearch([
    'taxonomy.js', 'data-firms.js',
    'data-companies.js', 'data-companies-1.js', 'data-companies-2.js',
    'data-partners.js', 'data-partners-1.js', 'data-partners-2.js',
    'data-partners-3.js', 'data-partners-4.js', 'data-partners-5.js', 'data-partners-6.js',
    'data-funds.js', 'data-deals.js'
  ]);

  if (Array.isArray(ctx.firms) && ctx.firms.length) {
    await syncTable('research_firms', 'slug', ctx.firms.map(function (f) {
      return {
        slug: f.slug, name: f.name,
        hq: f.hq || null, hq_country: countryOf(f.hq),
        founded_year: Number.isFinite(f.founded) ? f.founded : null,
        sectors: Array.isArray(f.sectors) ? f.sectors : [],
        data: f, synced_at: new Date().toISOString()
      };
    }), firmFiles);
  } else {
    console.error('  firms did not load; aborting before anything is written');
    process.exit(1);
  }

  if (ctx.partnerProfiles && typeof ctx.partnerProfiles === 'object') {
    const rows = Object.keys(ctx.partnerProfiles).map(function (slug) {
      const p = ctx.partnerProfiles[slug] || {};
      return {
        slug: slug, name: p.name || slug,
        firm_slug: p.firmSlug || p.firm_slug || null,
        role: p.role || null,
        data: p, synced_at: new Date().toISOString()
      };
    });
    await syncTable('research_partners', 'slug', rows, ['data-partners-*.js']);
  }

  if (ctx.COMPANIES && typeof ctx.COMPANIES === 'object') {
    const rows = Object.keys(ctx.COMPANIES).map(function (id) {
      const c = ctx.COMPANIES[id] || {};
      return {
        id: id, name: c.name || id,
        hq_country: c.hqCountry || null, sector: c.sector || null,
        data: c, synced_at: new Date().toISOString()
      };
    });
    await syncTable('research_companies', 'id', rows, ['data-companies*.js']);
  }

  if (ctx.FIRM_FUNDS && typeof ctx.FIRM_FUNDS === 'object') {
    const rows = [];
    Object.keys(ctx.FIRM_FUNDS).forEach(function (firmSlug) {
      (ctx.FIRM_FUNDS[firmSlug] || []).forEach(function (f) {
        rows.push({
          /* Firm-scoped id, because 22 firms have a "Fund III" and a
             bare fund name is not an identity. */
          id: firmSlug + '::' + String(f.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          firm_slug: firmSlug, name: f.name || '',
          vintage_year: Number.isFinite(f.vintageYear) ? f.vintageYear : null,
          size_usd: Number.isFinite(f.sizeUSD) ? f.sizeUSD : null,
          size_basis: f.sizeBasis || null,
          data: f, synced_at: new Date().toISOString()
        });
      });
    });
    if (rows.length) await syncTable('research_funds', 'id', rows, ['data-funds.js']);
  }

  if (Array.isArray(ctx.FIRM_DEALS) && ctx.FIRM_DEALS.length) {
    const rows = ctx.FIRM_DEALS.map(function (d, i) {
      return {
        /* Deterministic id from the deal's own identity, so re-running
           updates the same row instead of appending a duplicate. */
        id: crypto.createHash('sha1')
              .update([d.firmSlug, d.company, d.announcedDate, d.round].join('|'))
              .digest('hex').slice(0, 24),
        firm_slug: d.firmSlug, company: d.company,
        announced_date: d.announcedDate || null,
        round: d.round || null, sector: d.sector || null,
        data: d, synced_at: new Date().toISOString()
      };
    });
    await syncTable('research_deals', 'id', rows, ['data-deals.js']);
  }

  console.log('done');
}

main().catch(function (e) {
  console.error('sync failed: ' + e.message);
  process.exit(1);
});
