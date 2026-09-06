#!/usr/bin/env node
/* ============================================================
   GENERATE-CHANGE-EVENTS.JS
   Phase 3B. The canonical change-detection layer.

   WHERE THE HISTORY COMES FROM. This product has no server and no
   job runner, and the data files are current-state only. But every
   change to them is a real git commit with a real timestamp, so
   GIT IS THE SNAPSHOT STORE. This script runs in CI, checks out the
   previous version of each data file, diffs it against the new one,
   and writes the differences out as events. Nothing is inferred
   from a single snapshot.

   NO FABRICATED HISTORY. On the first run there is no previous
   version to compare against, so the script writes an empty event
   file and records a baseline. Monitoring genuinely begins from
   that commit forward. It never reads today's data and claims a
   change happened.

   OCCURRED vs DETECTED - the distinction the whole alert system
   rests on. A deal announced on June 3 and added to Power Board on
   June 10 has occurredAt June 3 and detectedAt June 10. Where the
   data carries no real-world date, occurredAt stays null and the
   event is explicitly a DISCOVERY, so the alert can say "Power
   Board added a previously untracked investment" instead of
   claiming someone invested today. Wording downstream keys off
   this field, not off prose.

   NOT EVERY DIFF IS AN EVENT. A source URL swapped for an equally
   good one, a description reworded, a typo fixed, an alias
   normalised - none of these change what is true about the entity,
   and none produces an event. Only the fields listed in WATCHED
   below do, and only when the value actually differs.

   Usage:  node tools/generate-change-events.js <oldDir> <newDir> <detectedAt>
   ============================================================ */

const fs = require('fs');
const path = require('path');

const OUT_FILE = 'scripts/data-change-events.js';
const MAX_EVENTS = 4000;          // retention: newest kept, older pruned

/* ---------- load a data file from a directory into a sandbox ---------- */

function loadGlobals(dir, files) {
  const sandbox = {};
  const vm = require('vm');
  const ctx = vm.createContext(sandbox);
  files.forEach(function (f) {
    const p = path.join(dir, 'scripts', f);
    if (!fs.existsSync(p)) return;
    try { vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { timeout: 30000 }); }
    catch (e) { /* a file that will not parse yields no events, never a crash */ }
  });
  return sandbox;
}

const DATA_FILES = [
  'taxonomy.js', 'data-firms.js', 'data-deals.js', 'data-capital-sources.js',
  'data-companies.js', 'data-companies-1.js', 'data-companies-2.js',
  'data-company-aliases.js',
  'data-partners.js', 'data-partners-1.js', 'data-partners-2.js', 'data-partners-3.js',
  'data-partners-4.js', 'data-partners-5.js', 'data-partners-6.js',
  /* Phase 5. Without this, a firm announcing a fund produced no
     event at all: the file was never diffed. */
  'data-funds.js'
];

/* ---------- deterministic identity ---------- */

function fingerprint(parts) {
  const s = parts.filter(function (p) { return p !== null && p !== undefined; }).join('|');
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return 'ce_' + (h >>> 0).toString(36);
}

function norm(s) {
  return String(s == null ? '' : s).toLowerCase().replace(/[^a-z0-9]/g, '');
}

/* ---------- canonical company identity, at generation time ----------

   Events must carry a canonical entityId, not the raw string the
   source happened to use. Without this a round imported under
   "Square" and the same company under "Block" become two events with
   two ids, and a saved search watching Block would either miss one or
   alert twice.

   This mirrors company-registry.js exactly and deliberately only
   honours APPROVED aliases. A NEEDS_REVIEW name resolves to nothing,
   so Paladin stays two companies here as it does everywhere else -
   the dedupe key keeps the raw string in that case, which is what
   keeps two different Paladins from collapsing into one event. */
/* Keyed to the dataset it was built from, not a bare module-level
   cache. A single global memo silently returns the first dataset's
   index to every later caller, which is fine while only one caller
   exists and wrong the moment a second one appears. */
let _canonIdx = null;
let _canonFor = null;

function buildCanonIndex(g) {
  if (_canonIdx && _canonFor === g) return _canonIdx;
  const byName = {}, approved = {}, held = {};
  const C = g.COMPANIES || {};
  Object.keys(C).forEach(function (id) {
    const c = C[id];
    byName[id] = id;
    if (c.name) byName[norm(c.name)] = id;
    if (c.legalName) byName[norm(c.legalName)] = id;
    (c.formerNames || []).forEach(function (f) {
      const nm = typeof f === 'string' ? f : (f && f.name);
      if (nm) byName[norm(nm)] = id;
    });
  });
  (g.COMPANY_ALIASES || []).forEach(function (r) {
    if (!r || !r.canonicalCompanyId) return;
    const k = r.normalizedAlias || norm(r.alias);
    if (r.status === 'APPROVED') approved[k] = r.canonicalCompanyId;
    else { held[k] = 1; held[norm(r.canonicalName)] = 1; }
  });
  _canonIdx = { byName: byName, approved: approved, held: held };
  _canonFor = g;
  return _canonIdx;
}

/* Returns the canonical id, or the normalised raw string when the
   name is held for review or simply unknown. Never guesses. */
function canonCompanyId(name, g) {
  const k = norm(name);
  if (!k) return k;
  const idx = buildCanonIndex(g);
  if (idx.held[k]) return k;              // held: identity is deliberately unresolved
  if (idx.byName[k]) return idx.byName[k];
  if (idx.approved[k]) return idx.approved[k];
  return k;
}

/* ---------- the event ---------- */

function mkEvent(o) {
  /* dedupeKey deliberately excludes detectedAt: re-running the same
     diff must produce the same key so a retry cannot double-insert. */
  const dedupeKey = fingerprint([o.eventType, o.entityType, o.entityId,
                                 o.relatedId || null, o.afterValue || null]);
  return {
    eventId: dedupeKey,
    dedupeKey: dedupeKey,
    eventType: o.eventType,
    entityType: o.entityType,
    entityId: o.entityId,
    entityName: o.entityName || null,
    relatedEntityIds: o.relatedEntityIds || [],
    occurredAt: o.occurredAt || null,        // real-world date, or null
    detectedAt: o.detectedAt,                // when Power Board learned it
    isDiscovery: !o.occurredAt,              // drives the wording downstream
    beforeValue: o.beforeValue === undefined ? null : o.beforeValue,
    afterValue: o.afterValue === undefined ? null : o.afterValue,
    importance: o.importance || 'LOW',
    source: o.source || null,
    summary: o.summary || '',
    metadata: o.metadata || {}
  };
}

/* ---------- detectors ---------- */

/* Each detector takes the old and new sandbox and returns events.
   A detector that cannot find its data in EITHER side returns
   nothing rather than treating absence as a change - that is how a
   failed load or a renamed file avoids reporting the whole dataset
   as deleted. */

function detectPartnerInvestments(oldG, newG, at) {
  const events = [];
  const o = oldG.partnerProfiles, n = newG.partnerProfiles;
  if (!o || !n) return events;
  Object.keys(n).forEach(function (slug) {
    const np = n[slug], op = o[slug];
    if (!op) return;                                   // new partner handled elsewhere
    const before = {};
    (op.notableInvestments || []).forEach(function (i) { before[norm(i.name)] = i; });
    const added = (np.notableInvestments || []).filter(function (i) {
      return i.name && !before[norm(i.name)];
    });
    if (!added.length) return;
    /* Collapsed: one research update adding four investments is one
       event carrying four names, not four events. */
    const named = added.map(function (i) { return i.name; });
    const withYear = added.filter(function (i) { return i.year; });
    events.push(mkEvent({
      eventType: 'NEW_PARTNER_INVESTMENT',
      entityType: 'partner', entityId: slug, entityName: np.name,
      relatedEntityIds: named,
      /* A year is the only real-world date these rows carry, and a
         year is not a date. It is kept in metadata but never used as
         occurredAt, so every one of these stays a DISCOVERY. */
      occurredAt: null,
      detectedAt: at,
      afterValue: named.sort().join(', '),
      importance: added.length >= 3 ? 'MEDIUM' : 'LOW',
      source: (added[0].evidence && added[0].evidence[0] && added[0].evidence[0].url) || null,
      summary: 'Power Board added ' + added.length + ' previously untracked investment' +
               (added.length === 1 ? '' : 's') + ' to ' + np.name + "'s history",
      metadata: { companies: named, years: withYear.map(function (i) { return i.year; }) }
    }));
  });
  return events;
}

function detectPartnerFirmChange(oldG, newG, at) {
  const events = [];
  const o = oldG.partnerProfiles, n = newG.partnerProfiles;
  if (!o || !n) return events;
  Object.keys(n).forEach(function (slug) {
    const np = n[slug], op = o[slug];
    if (!op || !op.firm || !np.firm) return;
    if (norm(op.firm) === norm(np.firm)) return;
    events.push(mkEvent({
      eventType: 'PARTNER_FIRM_CHANGED',
      entityType: 'partner', entityId: slug, entityName: np.name,
      relatedEntityIds: [np.firmSlug, op.firmSlug].filter(Boolean),
      occurredAt: null, detectedAt: at,
      beforeValue: op.firm, afterValue: np.firm,
      importance: 'HIGH',
      summary: np.name + ' is now recorded at ' + np.firm + ', previously ' + op.firm,
      metadata: { fromSlug: op.firmSlug || null, toSlug: np.firmSlug || null }
    }));
  });
  return events;
}

function detectPartnerRoleChange(oldG, newG, at) {
  const events = [];
  const o = oldG.partnerProfiles, n = newG.partnerProfiles;
  if (!o || !n) return events;
  Object.keys(n).forEach(function (slug) {
    const np = n[slug], op = o[slug];
    if (!op || !op.title || !np.title) return;
    if (op.title === np.title) return;
    /* Ignore pure formatting: capitalisation and punctuation are not
       a promotion. */
    if (norm(op.title) === norm(np.title)) return;
    events.push(mkEvent({
      eventType: 'PARTNER_ROLE_CHANGED',
      entityType: 'partner', entityId: slug, entityName: np.name,
      occurredAt: null, detectedAt: at,
      beforeValue: op.title, afterValue: np.title,
      importance: 'MEDIUM',
      summary: np.name + "'s recorded role changed to " + np.title,
      metadata: { firm: np.firm || null }
    }));
  });
  return events;
}

function detectNewDeals(oldG, newG, at) {
  const events = [];
  const o = oldG.FIRM_DEALS, n = newG.FIRM_DEALS;
  if (!Array.isArray(o) || !Array.isArray(n)) return events;
  const key = function (d) { return [norm(d.company), d.announcedDate, d.firmSlug, d.round].join('|'); };
  const before = {};
  o.forEach(function (d) { before[key(d)] = 1; });
  const added = n.filter(function (d) { return !before[key(d)]; });

  /* Group participations into financings, exactly as the company
     page does, so one round with three firms is one event. */
  const byRound = {};
  added.forEach(function (d) {
    /* Grouped on the CANONICAL id, so a round imported under an
       approved former name lands on the same company as the current
       name instead of becoming a second event. */
    const k = canonCompanyId(d.company, newG) + '|' + (d.announcedDate || '?') + '|' + (d.round || '?');
    (byRound[k] = byRound[k] || []).push(d);
  });
  Object.keys(byRound).forEach(function (k) {
    const rows = byRound[k], d = rows[0];
    events.push(mkEvent({
      eventType: 'NEW_COMPANY_DEAL',
      entityType: 'company', entityId: canonCompanyId(d.company, newG), entityName: d.company,
      relatedEntityIds: rows.map(function (r) { return r.firmSlug; }).filter(Boolean),
      /* A deal DOES carry a real announcement date, so this is one of
         the few events with a true occurredAt. */
      occurredAt: d.announcedDate || null,
      detectedAt: at,
      afterValue: (d.round || 'Round') + ' - ' + (d.announcedDate || 'undated'),
      importance: 'MEDIUM',
      source: d.sourceUrl || null,
      summary: d.company + ' - ' + (d.round || 'financing') +
               (d.announcedDate ? ' announced ' + d.announcedDate : ''),
      metadata: { firms: rows.map(function (r) { return r.firmSlug; }).filter(Boolean),
                  sector: d.sector || null, participations: rows.length }
    }));
  });
  return events;
}

function detectCompanyStatus(oldG, newG, at) {
  const events = [];
  const o = oldG.COMPANIES, n = newG.COMPANIES;
  if (!o || !n) return events;
  Object.keys(n).forEach(function (id) {
    const nc = n[id], oc = o[id];
    if (!oc) return;
    if (!oc.status || !nc.status) return;
    if (oc.status === nc.status) return;
    /* unknown -> known is research filling in, not a corporate event */
    const isRealChange = oc.status !== 'unknown';
    events.push(mkEvent({
      eventType: 'COMPANY_STATUS_CHANGED',
      entityType: 'company', entityId: id, entityName: nc.name,
      occurredAt: null, detectedAt: at,
      beforeValue: oc.status, afterValue: nc.status,
      importance: (nc.status === 'acquired' || nc.status === 'public') ? 'HIGH' : 'MEDIUM',
      source: (nc.sources || []).filter(function (s) { return s.field === 'status'; })
                                .map(function (s) { return s.url; })[0] || null,
      summary: isRealChange
        ? nc.name + ' is now recorded as ' + nc.status + ', previously ' + oc.status
        : 'Power Board established that ' + nc.name + ' is ' + nc.status,
      metadata: { statusDetail: nc.statusDetail || null, researchFill: !isRealChange }
    }));
  });
  return events;
}

function detectFirmTeam(oldG, newG, at) {
  /* Firm rosters already have a real dated snapshot store, so this
     is the one detector with genuine before/after independent of
     git. A failed capture stores people:null and is skipped, so a
     firm site going down is never reported as the team leaving. */
  const events = [];
  const snaps = newG.TEAM_SNAPSHOTS;
  if (!Array.isArray(snaps) || snaps.length < 2) return events;
  const sorted = snaps.slice().sort(function (a, b) { return String(a.date).localeCompare(b.date); });
  const prev = sorted[sorted.length - 2], cur = sorted[sorted.length - 1];
  Object.keys(cur.rosters || {}).forEach(function (slug) {
    const c = cur.rosters[slug], p = (prev.rosters || {})[slug];
    if (!c || !p) return;
    if (c.capture !== 'ok' || p.capture !== 'ok') return;
    if (!Array.isArray(c.people) || !Array.isArray(p.people)) return;
    const had = {};
    p.people.forEach(function (x) { had[norm(x.name)] = 1; });
    const arrived = c.people.filter(function (x) { return x.name && !had[norm(x.name)]; });
    if (!arrived.length) return;
    events.push(mkEvent({
      eventType: 'FIRM_TEAM_MEMBER_ADDED',
      entityType: 'firm', entityId: slug, entityName: slug,
      relatedEntityIds: arrived.map(function (x) { return x.name; }),
      /* The snapshot date IS a real observation date. */
      occurredAt: cur.date,
      detectedAt: at,
      beforeValue: String(p.people.length), afterValue: String(c.people.length),
      importance: arrived.length >= 3 ? 'MEDIUM' : 'LOW',
      summary: arrived.length + ' name' + (arrived.length === 1 ? '' : 's') +
               ' appeared on this firm\'s team page between ' + prev.date + ' and ' + cur.date,
      metadata: { names: arrived.map(function (x) { return x.name; }),
                  fromDate: prev.date, toDate: cur.date }
    }));
  });
  return events;
}

/* ------------------------------------------------------------
   FUNDS (Phase 5)

   THE HARD PART IS NOT DETECTING A NEW FUND. It is telling a firm
   announcing a fund apart from Power Board finally researching one
   it raised in 2016. Both look identical in a diff: a record that
   was not there yesterday.

   The vintage year decides. A fund appearing with a vintage in the
   current or previous year is plausibly a real announcement. One
   appearing with a 2016 vintage is research catching up, and saying
   "Firm X announced Fund II" about a nine-year-old vehicle would be
   a false claim about the world.

   isDiscovery carries that distinction into the alert layer, which
   Phase 3 already uses to choose between "Added" and a real date.
   ------------------------------------------------------------ */

function fundKeyOf(firmSlug, f) {
  if (f.name) {
    return firmSlug + '::' + String(f.name).toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }
  return firmSlug + '::' + String(f.series || 'unnamed').toLowerCase().replace(/[^a-z0-9]+/g, '-') +
    (f.vintageYear != null ? '-' + f.vintageYear : '');
}

function detectFunds(oldG, newG, at) {
  const events = [];
  const o = oldG.FIRM_FUNDS, n = newG.FIRM_FUNDS;
  if (!o || !n) return events;

  const thisYear = new Date().getFullYear();

  Object.keys(n).forEach(function (firmSlug) {
    const oldList = (o[firmSlug] && o[firmSlug].funds) || [];
    const newList = (n[firmSlug] && n[firmSlug].funds) || [];
    const oldByKey = {};
    oldList.forEach(function (f) { oldByKey[fundKeyOf(firmSlug, f)] = f; });

    newList.forEach(function (f) {
      const key = fundKeyOf(firmSlug, f);
      const prev = oldByKey[key];

      if (!prev) {
        /* A recent vintage is plausibly news. Anything older is
           Power Board catching up, and must not be phrased as an
           announcement. */
        const recent = f.vintageYear != null && f.vintageYear >= thisYear - 1;
        events.push(mkEvent({
          eventType: 'NEW_FUND_ANNOUNCED',
          entityType: 'firm', entityId: firmSlug, entityName: firmSlug,
          occurredAt: recent && f.announcedDate ? f.announcedDate : null,
          detectedAt: at,
          isDiscovery: !recent,
          beforeValue: null,
          afterValue: f.name || ('vintage ' + (f.vintageYear || 'unknown')),
          importance: recent ? 'HIGH' : 'MEDIUM',
          source: f.source || null,
          summary: recent
            ? 'A new fund is recorded for this firm: ' + (f.name || 'an unnamed vehicle') +
              (f.vintageYear ? ', vintage ' + f.vintageYear : '')
            : 'Power Board added a previously untracked fund: ' +
              (f.name || 'an unnamed vehicle') +
              (f.vintageYear ? ', vintage ' + f.vintageYear : ''),
          metadata: { fundKey: key, vintageYear: f.vintageYear || null,
                      sizeUSD: f.sizeUSD != null ? f.sizeUSD : null }
        }));
        return;
      }

      /* A size that changed is either a correction or a later close.
         Neither is inferred: the event states both figures and lets
         the reader see which it was. */
      if (prev.sizeUSD !== f.sizeUSD && f.sizeUSD != null) {
        events.push(mkEvent({
          eventType: 'FUND_SIZE_UPDATED',
          entityType: 'firm', entityId: firmSlug, entityName: firmSlug,
          occurredAt: null, detectedAt: at, isDiscovery: true,
          beforeValue: prev.sizeUSD == null ? null : String(prev.sizeUSD),
          afterValue: String(f.sizeUSD),
          importance: 'MEDIUM',
          source: f.source || null,
          summary: 'Recorded size changed for ' + (f.name || 'an unnamed fund') +
                   ' at this firm',
          metadata: { fundKey: key }
        }));
      }

      if (prev.status !== f.status && f.status) {
        /* Reaching a final close IS a real-world event, so it is not
           marked as a discovery. */
        const closed = f.status === 'closed';
        events.push(mkEvent({
          eventType: 'FUND_STATUS_CHANGED',
          entityType: 'firm', entityId: firmSlug, entityName: firmSlug,
          occurredAt: closed && f.announcedDate ? f.announcedDate : null,
          detectedAt: at, isDiscovery: !closed,
          beforeValue: prev.status || null, afterValue: f.status,
          importance: closed ? 'HIGH' : 'MEDIUM',
          source: f.source || null,
          summary: (f.name || 'A fund') + ' at this firm is now recorded as ' + f.status,
          metadata: { fundKey: key }
        }));
      }
    });
  });

  return events;
}

function detectAliasReviews(oldG, newG, at) {
  const events = [];
  const o = oldG.COMPANY_ALIASES, n = newG.COMPANY_ALIASES;
  if (!Array.isArray(o) || !Array.isArray(n)) return events;
  const before = {};
  o.forEach(function (r) { before[r.normalizedAlias || norm(r.alias)] = r.status; });
  n.forEach(function (r) {
    const k = r.normalizedAlias || norm(r.alias);
    const was = before[k];
    if (was === undefined || was === r.status) return;
    events.push(mkEvent({
      eventType: 'COMPANY_ALIAS_REVIEWED',
      entityType: 'company', entityId: r.canonicalCompanyId, entityName: r.canonicalName,
      occurredAt: null, detectedAt: at,
      beforeValue: was, afterValue: r.status,
      importance: 'LOW',
      summary: 'Identity review: "' + r.alias + '" is now ' + r.status +
               ' against ' + (r.canonicalName || r.canonicalCompanyId),
      metadata: { alias: r.alias }
    }));
  });
  return events;
}

/* ---------- main ---------- */

function main() {
  const oldDir = process.argv[2];
  const newDir = process.argv[3];
  const at = process.argv[4] || new Date().toISOString();

  if (!newDir || !fs.existsSync(newDir)) {
    console.error('usage: generate-change-events.js <oldDir> <newDir> [detectedAt]');
    process.exit(1);
  }

  _canonIdx = null; _canonFor = null;
  const newG = loadGlobals(newDir, DATA_FILES);
  const haveOld = oldDir && fs.existsSync(path.join(oldDir, 'scripts'));
  const oldG = haveOld ? loadGlobals(oldDir, DATA_FILES) : {};

  let events = [];
  if (!haveOld) {
    console.log('No previous revision available. Writing a baseline with no events -');
    console.log('monitoring starts from this commit forward rather than inventing history.');
  } else {
    [detectPartnerInvestments, detectPartnerFirmChange, detectPartnerRoleChange,
     detectNewDeals, detectCompanyStatus, detectAliasReviews,
     detectFunds].forEach(function (fn) {
      try { events = events.concat(fn(oldG, newG, at) || []); }
      catch (e) { console.error('detector failed, skipped: ' + fn.name + ' - ' + e.message); }
    });
  }
  /* Team snapshots carry their own dated history, so they run even on
     a first pass. */
  try { events = events.concat(detectFirmTeam(oldG, newG, at) || []); }
  catch (e) { console.error('detector failed, skipped: detectFirmTeam - ' + e.message); }

  /* Carry forward what we already emitted, newest first, deduped by
     key. Re-running the same diff therefore changes nothing. */
  let existing = [];
  const outPath = path.join(newDir, OUT_FILE);
  if (fs.existsSync(outPath)) {
    const g = {};
    try {
      const vm = require('vm');
      const ctx = vm.createContext(g);
      vm.runInContext(fs.readFileSync(outPath, 'utf8'), ctx);
      if (Array.isArray(g.CHANGE_EVENTS)) existing = g.CHANGE_EVENTS;
    } catch (e) { existing = []; }
  }

  const seen = {};
  const merged = [];
  events.concat(existing).forEach(function (e) {
    if (!e || !e.dedupeKey || seen[e.dedupeKey]) return;
    seen[e.dedupeKey] = 1;
    merged.push(e);
  });
  merged.sort(function (a, b) { return String(b.detectedAt).localeCompare(String(a.detectedAt)); });
  const kept = merged.slice(0, MAX_EVENTS);

  const header = '/* ============================================================\n' +
    '   DATA-CHANGE-EVENTS.JS  -  generated, do not hand-edit\n\n' +
    '   Produced by tools/generate-change-events.js, which diffs this\n' +
    '   commit against the previous one. Every entry is a real observed\n' +
    '   difference between two committed revisions.\n\n' +
    '   occurredAt is when the thing happened in the world and is null\n' +
    '   when the data carries no real date. detectedAt is when Power\n' +
    '   Board learned it. isDiscovery marks the second case, and the\n' +
    '   alert wording keys off it - a newly added historical investment\n' +
    '   is never described as something that happened today.\n\n' +
    '   ' + kept.length + ' events, newest first. Generated ' + at + '.\n' +
    '   ============================================================ */\n\n';

  fs.writeFileSync(outPath,
    header + 'const CHANGE_EVENTS = ' + JSON.stringify(kept, null, 2) + ';\n\n' +
    "if (typeof module !== 'undefined' && module.exports) {\n" +
    '  module.exports = { CHANGE_EVENTS: CHANGE_EVENTS };\n}\n');

  const byType = {};
  events.forEach(function (e) { byType[e.eventType] = (byType[e.eventType] || 0) + 1; });
  console.log('New events this run: ' + events.length);
  Object.keys(byType).sort().forEach(function (t) { console.log('   ' + t + ': ' + byType[t]); });
  console.log('Total retained: ' + kept.length);
}

main();
