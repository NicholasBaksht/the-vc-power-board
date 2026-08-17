/* ============================================================
   CONFLICT-CHECK ENGINE
   Matches a founder's description of their company against the
   portfolio companies already recorded on this site.

   WHAT IT MATCHES AGAINST - and what it cannot:
     - 136 private deals carry a real written description
       (sectorEvidence). These are the only records that support
       genuine "similar market" matching.
     - ~700 further companies (public holdings, partner notable
       investments) are recorded by NAME ONLY. For those the
       engine can confirm a name mention but must not claim a
       market similarity it has no text to judge.
   That asymmetry is surfaced to the user rather than hidden.

   NOTHING IS INVENTED. Every result names a company that exists
   in the dataset, attached to the firm the dataset attaches it
   to. If no evidence exists, the engine returns nothing and says
   so - it never manufactures a plausible-sounding conflict.
   ============================================================ */

const CC_STOPWORDS = new Set(('a about all also an and any are as at be been but by can co com company '
+ 'could do does for from get had has have help helps here how i if in into is it its just like make makes '
+ 'many may me more most my new no not of on one only or other our out over own platform product products '
+ 'said same see should since so software solution solutions some startup startups such than that the their '
+ 'them then there these they this those through to too under up us use used uses using very via was way we '
+ 'were what when where which while who will with within would you your business businesses build building '
+ 'builds first world global based technology tech data teams team customers customer users user market '
+ 'markets industry across every '
/* Generic English that survived the first pass. In a corpus of only 136
   descriptions a merely UNCOMMON word scores as high as a meaningful one,
   so words like "offering", "small" and "local" were each enough to pair a
   founder with a company in an unrelated market. They carry no domain
   signal and are removed rather than down-weighted. */
+ 'offering offer offers small large local owners owner connecting connect '
+ 'gives give giving automates automate automating designed describes described '
+ 'provides provide providing including include includes various multiple several '
+ 'increasingly sophisticated real time control focused focus range wide full '
+ 'better faster cheaper easier best top leading major key core direct directly '
+ 'people person work working works need needs want wants find finds help helping '
+ 'run runs running lets let allow allows enable enables offer set sets both each '
+ 'well without between during before after around near local area areas'
).split(' ').filter(Boolean));

/* Terms at or above this IDF are treated as evidence. Calibrated
   against the live corpus: noise words measured 2.8-3.6, while the
   terms that carry a real market signal sat at 4.2-4.9. */
const CC_DISTINCTIVE_IDF = 4.0;

function ccTokens(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9+#. ]+/g, ' ')
    .split(/\s+/)
    .map(t => t.replace(/^[.]+|[.]+$/g, ''))
    .filter(t => t.length > 2 && t.length < 30 && !CC_STOPWORDS.has(t) && !/^\d+$/.test(t));
}

/* One record per portfolio company per firm. `described` marks whether
   there is real text to compare against, which decides how strong a
   claim the result is allowed to make. */
function ccBuildIndex() {
  const recs = [];
  const push = (r) => { if (r.company && r.firmSlug) recs.push(r); };

  if (typeof FIRM_DEALS !== 'undefined' && FIRM_DEALS) {
    Object.keys(FIRM_DEALS).forEach(k => {
      const d = FIRM_DEALS[k];
      if (!d || !d.company) return;
      push({ company: d.company, firmSlug: d.firmSlug, source: 'deal',
             sector: d.sector || null, round: d.round || null, date: d.announcedDate || null,
             text: [d.company, d.sector, d.sectorEvidence].filter(Boolean).join(' '),
             described: !!(d.sectorEvidence && d.sectorEvidence.length > 40) });
    });
  }
  if (typeof firms !== 'undefined' && Array.isArray(firms)) {
    firms.forEach(f => (f.holdings || []).forEach(h => {
      push({ company: h.name, firmSlug: f.slug, source: 'public-holding',
             ticker: h.ticker || null, sector: null, text: h.name, described: false });
    }));
  }
  if (typeof partnerProfiles !== 'undefined' && partnerProfiles) {
    Object.keys(partnerProfiles).forEach(k => {
      const p = partnerProfiles[k];
      (p.notableInvestments || []).forEach(inv => {
        if (!inv || !inv.name) return;
        push({ company: inv.name, firmSlug: p.firmSlug, source: 'partner-investment',
               via: p.name, sector: null, text: inv.name, described: false });
      });
    });
  }

  // IDF over described records only - the name-only rows would other-
  // wise flood the statistics with single-word documents.
  const described = recs.filter(r => r.described);
  const df = {};
  described.forEach(r => {
    const seen = {};
    ccTokens(r.text).forEach(t => { if (!seen[t]) { seen[t] = 1; df[t] = (df[t] || 0) + 1; } });
  });
  const N = Math.max(described.length, 1);
  const idf = {};
  Object.keys(df).forEach(t => { idf[t] = Math.log(1 + N / df[t]); });

  return { recs, idf, describedCount: described.length };
}

/* Scores the founder's text against every record. Returns ranked
   matches with an explicit tier and a reason built from the terms that
   actually overlapped - never a generated rationale. */
function ccAnalyze(text, index, opts) {
  opts = opts || {};
  const limit = opts.limit || 12;
  const terms = ccTokens(text);
  if (!terms.length) return { ok: false, reason: 'empty', matches: [] };

  const termSet = {};
  terms.forEach(t => { termSet[t] = 1; });
  const uniqueTerms = Object.keys(termSet);
  const lowerText = ' ' + String(text).toLowerCase() + ' ';

  const scored = [];
  index.recs.forEach(r => {
    const nameLower = String(r.company).toLowerCase();
    // Direct name mention: only count names distinctive enough to be
    // meaningful. "Frame" or "Ramp" inside prose is not a mention.
    const namedDirectly = nameLower.length >= 5 &&
      lowerText.indexOf(' ' + nameLower + ' ') !== -1;

    let overlap = [];
    let distinctive = [];
    let score = 0;
    if (r.described) {
      const recTerms = {};
      ccTokens(r.text).forEach(t => { recTerms[t] = 1; });
      uniqueTerms.forEach(t => {
        if (!recTerms[t]) return;
        const w = index.idf[t] || 0.5;
        overlap.push(t);
        score += w;
        // A term only counts as evidence if it is actually rare in the
        // corpus. Without this, "real", "time" and "control" - which
        // appear in a large share of descriptions - were enough to
        // produce a MEDIUM against companies in unrelated markets.
        if (w >= CC_DISTINCTIVE_IDF) distinctive.push(t);
      });
    }
    if (namedDirectly) score += 12;
    if (score <= 0) return;
    scored.push({ rec: r, score, overlap, distinctive, namedDirectly });
  });

  scored.sort((a, b) => b.score - a.score);

  // Thresholds are relative to the best score in THIS run, so a vague
  // description does not get promoted to "high" just for being the
  // least-bad match available.
  const top = scored.length ? scored[0].score : 0;
  const out = [];
  const seen = {};
  for (let i = 0; i < scored.length && out.length < limit; i++) {
    const s = scored[i];
    const key = s.rec.firmSlug + '|' + s.rec.company;
    if (seen[key]) continue;
    seen[key] = 1;

    let tier;
    if (s.namedDirectly) tier = 'high';
    else if (s.distinctive.length >= 2 && s.score >= Math.max(6, top * 0.55)) tier = 'high';
    else if (s.distinctive.length >= 1 && s.score >= Math.max(4, top * 0.3)) tier = 'medium';
    else continue;

    out.push({
      firmSlug: s.rec.firmSlug, company: s.rec.company, tier,
      source: s.rec.source, sector: s.rec.sector || null,
      round: s.rec.round || null, date: s.rec.date || null,
      ticker: s.rec.ticker || null, via: s.rec.via || null,
      described: s.rec.described,
      overlap: (s.distinctive.length ? s.distinctive : s.overlap).slice(0, 6),
      score: Math.round(s.score * 10) / 10
    });
  }
  return { ok: true, matches: out, termCount: uniqueTerms.length };
}

/* Corporate parents are a separate kind of exposure: the parent may be
   a competitor, a customer or an acquirer in its own right. Reported
   apart from portfolio overlap rather than mixed into it. */
function ccParentMatches(text) {
  if (typeof PARENT_ALIAS_INDEX === 'undefined') return [];
  const lower = ' ' + String(text).toLowerCase() + ' ';
  const hits = {};
  PARENT_ALIAS_INDEX.forEach(e => {
    const a = String(e.alias).toLowerCase();
    if (a.length < 3) return;
    if (lower.indexOf(' ' + a + ' ') !== -1 || lower.indexOf(' ' + a + "'s ") !== -1) {
      const k = e.slug + '|' + e.parent;
      if (!hits[k]) hits[k] = { firmSlug: e.slug, parent: e.parent, alias: e.alias, type: e.type };
    }
  });
  return Object.keys(hits).map(k => hits[k]);
}

/* ------------------------------------------------------------------
   SECTOR EXPOSURE - the weakest signal, labelled as such.

   Only 136 portfolio records carry a description, so most founders
   will match nothing above. Sector exposure covers all 361 firms and
   answers a different, weaker question: does this firm invest in your
   space at all? That is NOT a conflict, and the UI never calls it one.
   ------------------------------------------------------------------ */
function ccDetectSectors(text) {
  if (typeof SECTOR_MAP === 'undefined') return [];
  const lower = ' ' + String(text).toLowerCase() + ' ';
  const hits = [];
  Object.keys(SECTOR_MAP).forEach(slug => {
    const cfg = SECTOR_MAP[slug];
    const needles = [cfg.label].concat(cfg.rawTags || []);
    let matched = null;
    for (let i = 0; i < needles.length; i++) {
      const n = String(needles[i]).toLowerCase();
      if (n.length < 3) continue;
      if (lower.indexOf(' ' + n + ' ') !== -1 || lower.indexOf(' ' + n + 's ') !== -1) { matched = needles[i]; break; }
    }
    if (matched) hits.push({ slug, label: cfg.label, matchedOn: matched });
  });
  return hits;
}

function ccFirmsInSector(slug) {
  if (typeof firms === 'undefined' || typeof canonicalSectorsFor !== 'function') return [];
  return firms.filter(f => canonicalSectorsFor(f).indexOf(slug) !== -1);
}

/* ------------------------------------------------------------------
   LOCAL DECK READING

   Everything here runs against a File object in the browser. There is
   no fetch, no XHR, no FormData and no server on this site to receive
   one - the deck is read by FileReader and the text never leaves the
   tab. PDFs are decoded with the browser's own DecompressionStream so
   no third-party parser is loaded either.
   ------------------------------------------------------------------ */
function ccReadDeck(file) {
  const name = (file.name || '').toLowerCase();

  if (/\.(txt|md|markdown|csv)$/.test(name)) {
    return file.text().then(t => ({ ok: true, text: t, how: 'read as plain text' }));
  }

  if (/\.pdf$/.test(name)) {
    return file.arrayBuffer().then(buf => ccExtractPdfText(buf));
  }

  return Promise.resolve({
    ok: false,
    reason: 'That file type cannot be read in the browser. Export the deck as PDF or paste the text instead.'
  });
}

/* Pulls text out of a PDF without any library: walk the raw bytes for
   stream objects, inflate the FlateDecode ones with DecompressionStream,
   then take the strings inside text-showing operators. Handles the
   common case; when it cannot, it says so instead of returning noise. */
function ccExtractPdfText(buf) {
  const bytes = new Uint8Array(buf);
  const latin = new TextDecoder('latin1').decode(bytes);
  const chunks = [];
  const re = /stream\r?\n?/g;
  let m;
  const jobs = [];

  while ((m = re.exec(latin)) !== null) {
    const start = m.index + m[0].length;
    const end = latin.indexOf('endstream', start);
    if (end === -1) continue;
    const slice = bytes.subarray(start, end);
    if (slice.length < 8) continue;
    // zlib header check - 0x78 is the overwhelmingly common first byte
    if (slice[0] === 0x78) {
      jobs.push(
        new Response(new Blob([slice]).stream().pipeThrough(new DecompressionStream('deflate')))
          .text().catch(() => '')
      );
    } else {
      chunks.push(new TextDecoder('latin1').decode(slice));
    }
    re.lastIndex = end;
  }

  return Promise.all(jobs).then(inflated => {
    const all = chunks.concat(inflated).join('\n');
    const words = [];
    // (text) Tj   and   [(a) -2 (b)] TJ
    const tj = /\((?:\\.|[^\\()])*\)/g;
    let t;
    while ((t = tj.exec(all)) !== null) {
      const s = t[0].slice(1, -1)
        .replace(/\\([nrt])/g, ' ')
        .replace(/\\(.)/g, '$1');
      if (s.trim()) words.push(s);
    }
    const text = words.join(' ').replace(/\s+/g, ' ').trim();
    if (text.length < 40) {
      return { ok: false, reason: 'This PDF has no extractable text layer - it is probably image-only or uses an embedded subset font. Paste the text instead.' };
    }
    return { ok: true, text, how: 'parsed in your browser, ' + text.length.toLocaleString() + ' characters of text' };
  }).catch(() => ({
    ok: false,
    reason: 'That PDF could not be read in the browser. Paste the text instead.'
  }));
}

/* ==================================================================
   UI
   ================================================================== */
let CC_INDEX = null;

function ccFirmName(slug) {
  if (typeof firms === 'undefined') return slug;
  const f = firms.find(x => x.slug === slug);
  return f ? f.name : slug;
}

function renderConflictCheck() {
  const view = document.getElementById('conflictCheckView');
  if (!view) return;
  if (!CC_INDEX) CC_INDEX = ccBuildIndex();

  const described = CC_INDEX.describedCount;
  const total = CC_INDEX.recs.length;
  const coveredFirms = (function () {
    const s = {};
    CC_INDEX.recs.forEach(r => { s[r.firmSlug] = 1; });
    return Object.keys(s).length;
  })();
  const totalFirms = (typeof canonicalFirmCount === 'function' && canonicalFirmCount()) ||
                     (typeof firms !== 'undefined' ? firms.length : 0);

  view.innerHTML = `
    <div class="cc-wrap">
      <div class="cc-head">
        <h2>Conflict Check</h2>
        <p class="cc-sub">Describe what you are building. This compares it against the portfolio
        companies recorded on this site and shows where a firm may already have exposure worth
        raising before you take a meeting.</p>
      </div>

      <div class="cc-privacy">
        <span class="cc-privacy-icon" aria-hidden="true">&#9679;</span>
        <div>
          <strong>Your deck is analysed in your browser and is never uploaded.</strong>
          <span>This site is static and has no server to receive a file. The text is read locally,
          used to run the comparison below, and discarded when you close the tab.</span>
        </div>
      </div>

      <form class="cc-form" id="ccForm" onsubmit="return false;">
        <label class="cc-label" for="ccText">Describe your company</label>
        <textarea id="ccText" class="cc-textarea" rows="5"
          placeholder="e.g. We build an AI copilot for construction field teams that automates quality control and gives workers real-time guidance on site."></textarea>

        <div class="cc-actions">
          <button type="button" class="cc-btn cc-btn-primary" id="ccRun">Check for conflicts</button>
          <label class="cc-btn cc-btn-ghost" for="ccFile">Analyse pitch deck
            <input type="file" id="ccFile" accept=".pdf,.txt,.md,.markdown,.csv" hidden>
          </label>
          <span class="cc-file-status" id="ccFileStatus" role="status"></span>
        </div>
      </form>

      <div class="cc-results" id="ccResults"></div>

      <p class="cc-disclaimer">
        This is an informational matching tool, not legal advice and not a determination that a
        conflict exists. It can only compare against what is recorded here:
        <strong>${total.toLocaleString()} portfolio records across ${coveredFirms} of ${totalFirms} firms</strong>,
        of which <strong>${described}</strong> carry a written description detailed enough to compare
        a market against. A firm not shown may still hold a competing position that is not public or
        not yet recorded. Always confirm directly with the firm.
      </p>
    </div>`;

  const runBtn = document.getElementById('ccRun');
  const textEl = document.getElementById('ccText');
  const fileEl = document.getElementById('ccFile');
  const statusEl = document.getElementById('ccFileStatus');

  if (runBtn) runBtn.addEventListener('click', () => ccRun(textEl.value));
  if (textEl) textEl.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') ccRun(textEl.value);
  });

  if (fileEl) fileEl.addEventListener('change', function () {
    const file = this.files && this.files[0];
    if (!file) return;
    statusEl.textContent = 'Reading ' + file.name + ' in your browser…';
    ccReadDeck(file).then(res => {
      if (!res.ok) { statusEl.textContent = res.reason; return; }
      textEl.value = res.text.slice(0, 20000);
      statusEl.textContent = file.name + ' — ' + res.how + '. Nothing was uploaded.';
      ccRun(textEl.value);
    });
  });
}

function ccRun(text) {
  const out = document.getElementById('ccResults');
  if (!out) return;
  const clean = String(text || '').trim();

  if (clean.length < 15) {
    out.innerHTML = `<div class="cc-empty">Add a sentence or two about what you are building —
      the more specific the product and market, the more usable the comparison.</div>`;
    return;
  }

  const res = ccAnalyze(clean, CC_INDEX);
  const parents = ccParentMatches(clean);
  const sectors = ccDetectSectors(clean);

  const high = res.matches.filter(m => m.tier === 'high');
  const med = res.matches.filter(m => m.tier === 'medium');

  const card = (m) => {
    const via = m.source === 'partner-investment' && m.via ? ' &middot; via ' + m.via : '';
    const src = m.source === 'deal' ? (m.round ? m.round + (m.date ? ', ' + m.date : '') : 'disclosed investment')
              : m.source === 'public-holding' ? 'public holding' + (m.ticker ? ' (' + m.ticker + ')' : '')
              : 'partner notable investment' + via;
    const reason = m.described && m.overlap.length
      ? 'Shared language with this company&rsquo;s own description: <em>' + m.overlap.join(', ') + '</em>.'
      : 'You named this company. It is recorded in this firm&rsquo;s portfolio — the comparison is the name itself, not a market judgement.';
    return `
      <div class="cc-card cc-${m.tier}">
        <div class="cc-card-top">
          <span class="cc-tier">${m.tier === 'high' ? 'HIGH OVERLAP' : 'MEDIUM OVERLAP'}</span>
          <a class="cc-firm" href="#${m.firmSlug}">${ccFirmName(m.firmSlug)}</a>
        </div>
        <div class="cc-company">Portfolio company: <strong>${m.company}</strong></div>
        <div class="cc-meta">${src}</div>
        <div class="cc-reason">${reason}</div>
      </div>`;
  };

  let html = '';

  if (high.length || med.length) {
    html += '<div class="cc-section-label">Possible portfolio overlap</div>';
    html += high.map(card).join('') + med.map(card).join('');
  } else {
    html += `<div class="cc-none">
      <strong>No portfolio overlap found in the recorded data.</strong>
      That is not a clean bill of health. Most portfolio companies on this site are recorded by name
      only, and only ${CC_INDEX.describedCount} carry a description detailed enough to compare a
      market against — so an overlap can easily exist without being visible here.
    </div>`;
  }

  if (parents.length) {
    html += '<div class="cc-section-label">Corporate parent exposure</div>';
    html += parents.map(p => `
      <div class="cc-card cc-parent">
        <div class="cc-card-top">
          <span class="cc-tier">PARENT COMPANY</span>
          <a class="cc-firm" href="#${p.firmSlug}">${ccFirmName(p.firmSlug)}</a>
        </div>
        <div class="cc-company">Parent: <strong>${p.parent}</strong></div>
        <div class="cc-reason">You mentioned <em>${p.alias}</em>. This firm is the venture arm of
        ${p.parent}, so the parent may itself be a competitor, a customer or an acquirer —
        a different kind of exposure from a portfolio clash.</div>
      </div>`).join('');
  }

  if (sectors.length) {
    html += '<div class="cc-section-label">Sector exposure <span class="cc-weak">weakest signal</span></div>';
    html += '<div class="cc-sectors">';
    html += sectors.slice(0, 4).map(s => {
      const n = ccFirmsInSector(s.slug).length;
      return `<a class="cc-sector-pill" href="#firms">${s.label}<span>${n} firms</span></a>`;
    }).join('');
    html += '</div>';
    html += `<p class="cc-sector-note">Your description mentions
      ${sectors.slice(0, 4).map(s => s.label).join(', ')}. These firms invest in that space —
      that is <strong>not</strong> a conflict, just where to look harder.</p>`;
  }

  out.innerHTML = html;
}
