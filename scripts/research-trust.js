/* ============================================================
   RESEARCH-TRUST.JS
   ------------------------------------------------------------
   The trust and research-quality layer. Two audiences, one file:

   PUBLIC (firm profiles)
     - a small provenance line under a fact when, and only when,
       evidence for that fact is on file in RESEARCH_EVIDENCE
     - a "Research & Sources" panel listing the evidence itself:
       source links, source types, and the date each was checked,
       plus the dated team-page crawl and deals-coverage windows
       that already existed elsewhere in the codebase

   ADMIN (#research)
     - a research-quality queue over all firms: which profiles are
       weak, stale, unsourced, or missing required fields, so the
       next research pass goes where it is needed. Gated by the
       same admins-table RPC as #internal. The data it reads is
       already public (it ships in the site's own data files); the
       gate keeps the WORKFLOW private, not the facts.

   PRINCIPLES, enforced in code rather than asserted:
     - No fabricated provenance. Every rendered claim traces to a
       record in RESEARCH_EVIDENCE, TEAM_SNAPSHOTS, DEAL_COVERAGE,
       or prices.json - all of which exist independently of this
       feature. A fact with no evidence renders NO badge: absence
       of a claim, never a fake one.
     - last-checked dates are research events recorded in the data
       files. Nothing in this file ever writes or bumps one.
     - Health is categorical, not numeric. The inputs are mostly
       booleans (field present, crawl succeeded, evidence on file);
       arithmetic on booleans dressed up as a 0-100 score would be
       false precision. Categories with stated rules are auditable.
     - This file writes nothing anywhere: no localStorage, no
       network writes. Founders cannot alter research metadata
       because there is no code path that alters it - the only
       writes are commits to the data files themselves.
     - alerts-engine.js does not read RESEARCH_EVIDENCE, so no
       research-metadata change can ever generate a user alert.
       Alerts continue to fire only off canonical data changes.
   ============================================================ */

/* ---------- freshness policy ----------
   Different information decays at different speeds. These are
   expectations used by the health rules and the queue, chosen per
   information type rather than one arbitrary global number:
     - roster: partners move; the crawler exists precisely because
       this churns. 45 days ~ the crawler's real cadence headroom.
     - deals: recent-investment coverage goes stale in a quarter.
     - aum: funds close on multi-month cycles; a year-old figure is
       usable but due a re-check.
     - founded / hq: effectively stable; they change on rename or
       relocation, which the normal research process catches.
     - timeline / historical holdings: history does not rot. A 2014
       fund close is not "stale" in 2026; horizon: null means the
       age of the record is never, by itself, a reason to flag. */
const RT_FRESHNESS_POLICY = {
  roster:   { kind: 'volatile',    horizonDays: 45,   basis: 'team-page crawl cadence' },
  deals:    { kind: 'volatile',    horizonDays: 90,   basis: 'quarterly deal sweeps' },
  prices:   { kind: 'daily-job',   horizonDays: 5,    basis: 'weekday CI price refresh' },
  aum:      { kind: 'semi-stable', horizonDays: 400,  basis: 'fund-close cycles' },
  leadership:{ kind: 'semi-stable', horizonDays: 180, basis: 'team pages change slowly' },
  founded:  { kind: 'stable',      horizonDays: null, basis: 'changes only on restatement' },
  hq:       { kind: 'stable',      horizonDays: null, basis: 'changes only on relocation' },
  timeline: { kind: 'historical',  horizonDays: null, basis: 'history does not rot' },
  holdings: { kind: 'historical',  horizonDays: null, basis: 'positions verified at entry; prices refresh daily' }
};

/* DEAL_COVERAGE in data-deals.js is keyed by the site's own firm slugs
   (sequoia, a16z, nea, ...). Verified against the live firms array on
   2026-08-23: all 24 keys resolve directly. No alias map needed. */

/* ---------- tiny utilities ---------- */
function rtEsc(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;').replace(/"/g, '&quot;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function rtFmtDate(iso) {
  if (!iso) return '';
  const m = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return rtEsc(iso);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return months[+m[2] - 1] + ' ' + (+m[3]) + ', ' + m[1];
}
function rtDaysSince(iso) {
  const m = String(iso || '').match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return null;
  return Math.floor((Date.now() - new Date(+m[1], +m[2] - 1, +m[3]).getTime()) / 86400000);
}
function rtEvidence(slug) {
  return (typeof RESEARCH_EVIDENCE !== 'undefined' && RESEARCH_EVIDENCE[slug]) || null;
}
const RT_STATE_LABEL = { verified: 'Verified', reported: 'Reported', derived: 'Derived' };
const RT_TYPE_LABEL = {
  'own-site': "firm's own site", 'regulatory': 'regulatory filing',
  'firm-release': 'firm press release', 'government': 'government source',
  'press': 'press', 'firm-submitted': 'firm-submitted (unreviewed)'
};

/* ---------- roster crawl freshness (reads TEAM_SNAPSHOTS) ---------- */
function rtRosterCrawl(slug) {
  if (typeof TEAM_SNAPSHOTS === 'undefined' || !TEAM_SNAPSHOTS.length) return null;
  let lastOk = null, lastTry = null;
  TEAM_SNAPSHOTS.forEach(function (snap) {
    const r = snap.rosters && snap.rosters[slug];
    if (!r) return;
    lastTry = { date: snap.date, ok: r.capture === 'ok' };
    if (r.capture === 'ok') lastOk = { date: snap.date, people: (r.people || []).length };
  });
  if (!lastTry) return null;                    // firm not in the crawl set at all
  return { lastOk: lastOk, lastTry: lastTry };
}

/* ---------- deals coverage ---------- */
function rtDealCoverage(slug) {
  return (typeof DEAL_COVERAGE !== 'undefined' && DEAL_COVERAGE[slug]) || null;
}

/* ============================================================
   PUBLIC UI
   ============================================================ */

/* One quiet line under a stat, rendered ONLY when evidence exists.
   "Verified - checked Aug 23, 2026 - 2 sources" */
function rtStatMeta(slug, field) {
  const ev = rtEvidence(slug);
  const d = ev && ev[field];
  if (!d || !d.sources || !d.sources.length) return '';
  const n = d.sources.length;
  return '<div class="rt-fact rt-' + rtEsc(d.status) + '">' +
    rtEsc(RT_STATE_LABEL[d.status] || d.status) +
    ' · checked ' + rtFmtDate(d.checked) +
    ' · <a href="#" class="rt-fact-jump" onclick="var p=document.getElementById(\'rtPanel\');if(p)p.scrollIntoView({behavior:\'smooth\'});return false;">' +
    n + (n === 1 ? ' source' : ' sources') + '</a></div>';
}

/* The Research & Sources panel on a firm profile. Renders only when
   at least one real item exists; an empty decorated panel would be
   noise pretending to be diligence. */
function rtResearchPanel(firm) {
  if (!firm || !firm.slug) return '';
  const items = [];
  const ev = rtEvidence(firm.slug);

  if (ev) {
    const ORDER = ['founded', 'hq', 'aum', 'thesis', 'leadership', 'timeline', 'signatureExit', 'holdings', 'sectors', 'website'];
    const LABEL = { founded: 'Founded', hq: 'Headquarters', aum: 'Assets under management',
                    thesis: 'Investment thesis', leadership: 'Leadership team', timeline: 'Firm milestones',
                    signatureExit: 'Signature exit', holdings: 'Public holdings', sectors: 'Sector focus',
                    website: 'Website' };
    ORDER.forEach(function (f) {
      const d = ev[f];
      if (!d || !d.sources || !d.sources.length) return;
      const srcs = d.sources.map(function (s) {
        let host = '';
        try { host = s.url.split('/')[2].replace(/^www\./, ''); } catch (e) {}
        return '<a class="rt-src" href="' + rtEsc(s.url) + '" target="_blank" rel="noopener noreferrer">' +
               rtEsc(host) + ' ↗</a><span class="rt-src-type">' + rtEsc(RT_TYPE_LABEL[s.type] || s.type) + '</span>';
      }).join('');
      items.push('<div class="rt-row"><div class="rt-row-head"><span class="rt-row-field">' +
        rtEsc(LABEL[f] || f) + '</span><span class="rt-state rt-' + rtEsc(d.status) + '">' +
        rtEsc(RT_STATE_LABEL[d.status] || d.status) + '</span><span class="rt-checked">checked ' +
        rtFmtDate(d.checked) + '</span></div><div class="rt-row-srcs">' + srcs + '</div></div>');
    });
  }

  const crawl = rtRosterCrawl(firm.slug);
  if (crawl && crawl.lastOk) {
    items.push('<div class="rt-row"><div class="rt-row-head"><span class="rt-row-field">Team roster</span>' +
      '<span class="rt-state rt-verified">Verified</span>' +
      '<span class="rt-checked">captured from the firm\'s own team page, ' + rtFmtDate(crawl.lastOk.date) +
      ' (' + crawl.lastOk.people + ' people)</span></div></div>');
  } else if (crawl && crawl.lastTry && !crawl.lastTry.ok) {
    items.push('<div class="rt-row"><div class="rt-row-head"><span class="rt-row-field">Team roster</span>' +
      '<span class="rt-state rt-none">Capture failed</span>' +
      '<span class="rt-checked">last crawl attempt ' + rtFmtDate(crawl.lastTry.date) +
      ' could not read the firm\'s team page</span></div></div>');
  }

  const cov = rtDealCoverage(firm.slug);
  if (cov && (cov.completeTo || cov.extendedTo)) {
    let txt = 'deal activity researched';
    if (cov.completeFrom && cov.completeTo)
      txt += ' in full for ' + rtFmtDate(cov.completeFrom) + ' to ' + rtFmtDate(cov.completeTo);
    if (cov.extendedTo) txt += ', partial coverage to ' + rtFmtDate(cov.extendedTo);
    if (cov.checkedOn) txt += '; checked ' + rtFmtDate(cov.checkedOn);
    items.push('<div class="rt-row"><div class="rt-row-head"><span class="rt-row-field">Recent deals</span>' +
      '<span class="rt-state rt-verified">Dated coverage</span>' +
      '<span class="rt-checked">' + txt + '</span></div></div>');
  }

  if ((firm.holdings || []).length) {
    items.push('<div class="rt-row"><div class="rt-row-head"><span class="rt-row-field">Holding prices</span>' +
      '<span class="rt-state rt-verified">Automated</span>' +
      '<span class="rt-checked">refreshed each weekday from public tickers; positions verified at research time</span></div></div>');
  }

  if (!items.length) return '';

  return '<div class="rt-panel" id="rtPanel">' +
    '<div class="rt-panel-label">Research &amp; Sources</div>' +
    '<p class="rt-panel-intro">What Power Board knows about this firm, where it came from, and when it was checked. ' +
    'Facts without an entry here have no source on file yet; they are research in progress, not verified claims.</p>' +
    items.join('') +
    '<div class="rt-legend">Verified: stated by the firm itself (own site, filing, or firm-issued release) and checked by Power Board on the date shown. ' +
    'Reported: credible third-party reporting. Derived metrics (Power Score, Personality, Capabilities) are computed from data on this page and label their own confidence.</div>' +
    '</div>';
}

/* ============================================================
   RESEARCH HEALTH - deterministic, categorical, admin-facing.

   Measures ONLY how complete and well-supported Power Board's
   research on a firm is. It says nothing about whether the firm
   is good, and it is never shown to founders.

   THE RULES (all of them, in order - there are no hidden weights):
     core fields  = founded, hq, aum, sectors, thesis, leadership,
                    timeline, signatureExit            (8 total)
     evidence     = # core fields with sources on file
     crawl        = team-page crawl state for this firm

     WEAK          3+ core fields missing
     NEEDS REVIEW  1-2 core fields missing,
                   OR complete but zero evidence AND zero crawl
                   coverage (nothing verifies anything),
                   OR the roster crawl is stale beyond the
                   45-day roster horizon with no field evidence
     ADEQUATE      complete, with exactly one pillar of support:
                   field evidence OR a fresh roster crawl
     STRONG        complete, AND field evidence on 4+ fields,
                   OR complete with evidence on 1-3 fields plus a
                   fresh roster crawl

   Why categories: most inputs are booleans. Summing booleans into
   "87/100" manufactures precision the data does not contain.
   ============================================================ */
function rtHealth(firm) {
  const missing = [];
  if (!firm.founded) missing.push('founded');
  if (!firm.hq) missing.push('hq');
  if (!firm.aum) missing.push('aum');
  if (!(firm.sectors || []).length) missing.push('sectors');
  if (!firm.thesis) missing.push('thesis');
  if (!(firm.leadership || []).length) missing.push('leadership');
  if (!(firm.timeline || []).length) missing.push('timeline');
  if (!firm.signatureExit) missing.push('signatureExit');

  const ev = rtEvidence(firm.slug);
  const CORE = ['founded', 'hq', 'aum', 'sectors', 'thesis', 'leadership', 'timeline', 'signatureExit'];
  const evFields = ev ? CORE.filter(function (f) { return ev[f] && ev[f].sources && ev[f].sources.length; }).length : 0;

  const crawl = rtRosterCrawl(firm.slug);
  const crawlAge = crawl && crawl.lastOk ? rtDaysSince(crawl.lastOk.date) : null;
  const crawlFresh = crawlAge !== null && crawlAge <= RT_FRESHNESS_POLICY.roster.horizonDays;

  const reasons = [];
  missing.forEach(function (m) { reasons.push('missing ' + m); });
  if (evFields === 0) reasons.push('no field evidence on file');
  if (!crawl) reasons.push('not in the team-crawl set');
  else if (crawl.lastTry && !crawl.lastTry.ok && !crawlFresh) reasons.push('last roster crawl failed (' + crawl.lastTry.date + ')');
  else if (crawlAge !== null && !crawlFresh) reasons.push('roster crawl ' + crawlAge + ' days old');

  let category;
  if (missing.length >= 3) category = 'weak';
  else if (missing.length >= 1) category = 'needs-review';
  else if (evFields === 0 && !crawl) category = 'needs-review';
  else if (evFields === 0 && crawlAge !== null && !crawlFresh) category = 'needs-review';
  else if (evFields >= 4) category = 'strong';
  else if (evFields >= 1 && crawlFresh) category = 'strong';
  else category = 'adequate';

  return { category: category, missing: missing, evidenceFields: evFields,
           crawl: crawl, crawlAgeDays: crawlAge, reasons: reasons };
}

/* ============================================================
   ADMIN RESEARCH QUEUE  (#research)
   Same gate as #internal: the pb_admin_metrics RPC refuses any
   caller not in the admins table, server-side. The queue itself
   is computed client-side from the public data files.
   ============================================================ */
let rtQLoading = false, rtQAuthed = false;
const RT_CAT_LABEL = { 'weak': 'Weak coverage', 'needs-review': 'Needs review',
                       'adequate': 'Adequate', 'strong': 'Strong' };
const RT_CAT_RANK = { 'weak': 0, 'needs-review': 1, 'adequate': 2, 'strong': 3 };

function rtQStyles() {
  if (document.getElementById('rtQStyles')) return;
  const s = document.createElement('style');
  s.id = 'rtQStyles';
  s.textContent = `
  #researchView { position: fixed; inset: 0; z-index: 400; overflow-y: auto;
    background: var(--bg); padding: 48px 24px 80px; font-family: var(--sans); }
  #researchView .rtq-inner { max-width: 1080px; margin: 0 auto; }
  #researchView .rtq-kicker { font-family: var(--mono); font-size: 11px; letter-spacing: .1em;
    text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
  #researchView h1 { font-size: 26px; color: var(--ink); margin: 0 0 4px; }
  #researchView .rtq-sub { font-size: 13px; color: var(--ink-dim); max-width: 640px; line-height: 1.5; }
  #researchView .rtq-close { position: absolute; top: 18px; right: 22px; font-family: var(--mono);
    font-size: 12px; color: var(--ink-dim); text-decoration: none; border: 1px solid var(--hairline);
    padding: 5px 10px; border-radius: 3px; }
  #researchView .rtq-tabs { display: flex; gap: 8px; margin: 12px 0 2px; }
  #researchView .rtq-tab { font-family: var(--mono); font-size: 11px; letter-spacing: .06em;
    text-transform: uppercase; color: var(--ink-dim); text-decoration: none;
    border: 1px solid var(--hairline); border-radius: 3px; padding: 5px 12px; }
  #researchView .rtq-tab.active { color: var(--accent-bright); border-color: var(--accent); }
  #researchView .rtq-summary { display: flex; gap: 10px; margin: 18px 0; flex-wrap: wrap; }
  #researchView .rtq-sum { border: 1px solid var(--hairline); border-radius: 4px; padding: 10px 16px;
    background: var(--surface); min-width: 110px; }
  #researchView .rtq-sum .n { font-family: var(--mono); font-size: 20px; font-weight: 600; color: var(--ink); }
  #researchView .rtq-sum .l { font-family: var(--mono); font-size: 10px; letter-spacing: .07em;
    text-transform: uppercase; color: var(--ink-dim); margin-top: 2px; }
  #researchView .rtq-controls { display: flex; gap: 14px; align-items: center; flex-wrap: wrap;
    margin: 6px 0 14px; font-family: var(--mono); font-size: 11.5px; color: var(--ink-dim); }
  #researchView .rtq-controls select, #researchView .rtq-controls input[type=text] {
    background: var(--surface); color: var(--ink); border: 1px solid var(--hairline);
    border-radius: 3px; padding: 5px 8px; font-family: var(--mono); font-size: 11.5px; }
  #researchView .rtq-controls label { display: inline-flex; gap: 5px; align-items: center; cursor: pointer; }
  #researchView table { width: 100%; border-collapse: collapse; font-size: 12.5px; }
  #researchView th { font-family: var(--mono); font-size: 10px; letter-spacing: .07em; text-transform: uppercase;
    color: var(--ink-dim); text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--hairline); }
  #researchView td { padding: 8px 10px; border-bottom: 1px solid var(--hairline);
    color: var(--ink); vertical-align: top; }
  #researchView td a { color: var(--ink); text-decoration: none; border-bottom: 1px solid var(--hairline); }
  #researchView .rtq-cat { font-family: var(--mono); font-size: 10.5px; letter-spacing: .05em;
    text-transform: uppercase; white-space: nowrap; }
  #researchView .rtq-cat.weak { color: #C96A5A; }
  #researchView .rtq-cat.needs-review { color: #C9A25A; }
  #researchView .rtq-cat.adequate { color: var(--ink-dim); }
  #researchView .rtq-cat.strong { color: var(--accent-bright); }
  #researchView .rtq-reasons { color: var(--ink-dim); font-size: 11.5px; line-height: 1.5; }
  #researchView .rtq-msg { border: 1px solid var(--hairline); border-radius: 4px; background: var(--surface);
    padding: 26px; max-width: 460px; margin: 60px auto; text-align: center; color: var(--ink-dim); font-size: 13.5px; }
  #researchView .rtq-msg b { display: block; color: var(--ink); font-size: 15px; margin-bottom: 6px; }`;
  document.head.appendChild(s);
}

function rtQHost() {
  let el = document.getElementById('researchView');
  if (!el) {
    el = document.createElement('div');
    el.id = 'researchView';
    el.style.display = 'none';
    document.body.appendChild(el);
  }
  return el;
}
function rtQMessage(title, body) {
  rtQHost().innerHTML = '<div class="rtq-inner"><a class="rtq-close" href="#">close</a>' +
    '<div class="rtq-msg"><b>' + title + '</b>' + body + '</div></div>';
}

/* ============================================================
   PARTNER RESEARCH HEALTH - same philosophy as firm health:
   categorical, rule-based, admin-only, measuring only Power
   Board's research coverage of the person. Never public.

   THE RULES (in order):
     WEAK          no biography AND no attributable investments
     NEEDS REVIEW  zero profile sources, OR zero attributable
                   investments (nothing verifies an investing
                   record either way)
     ADEQUATE      1-5 attributable investments with sources
     STRONG        6+ attributable investments, sources and a
                   biography on file
   A departure on record is surfaced as context, not a penalty:
   a departed partner's research can still be complete. */
function rtPartnerHealth(slug) {
  const p = partnerProfiles[slug];
  const ni = (p.notableInvestments || []).length;
  const src = (p.sources || []).length;
  const reasons = [];
  if (!p.biography) reasons.push('missing biography');
  if (!(p.sectors || []).length) reasons.push('missing sectors');
  if (!p.title) reasons.push('missing title');
  if (!src) reasons.push('no profile sources');
  if (!ni) reasons.push('no attributable investments');
  if (!(p.boardSeats || []).length) reasons.push('no board data');
  if (p.departedNote || p.departedYear != null) reasons.push('departure on record');
  /* same-period comparison readiness (partner-behavior.js supplies the
     diagnosis; guarded because script order does not matter at call time) */
  if (typeof pbehComparisonFlags === 'function') {
    pbehComparisonFlags(slug).forEach(function (f) { reasons.push(f); });
  }

  let category;
  if (!p.biography && ni === 0) category = 'weak';
  else if (src === 0 || ni === 0) category = 'needs-review';
  else if (ni >= 6 && p.biography) category = 'strong';
  else category = 'adequate';
  return { category: category, ni: ni, src: src,
           boards: (p.boardSeats || []).length, reasons: reasons };
}

let rtQMode = 'firms';

/* The CoWork enrichment prompt shipped with each packet. Encodes the
   never-guess rules, taxonomies, evidence typing and deliverables so a
   research pass can run without any other context. */
const RTQ_COMPANY_PROMPT = [
'TASK: COMPANY SECTOR VERIFICATION FOR THE VC POWER BOARD',
'',
'The attached JSON lists company names that appear in partners\' attributed',
'investments but have no verified sector yet. For each company, find ONE',
'authoritative URL that states what the company does (its own site, a',
'financing announcement describing it, or an encyclopedia article), and',
'return: { "name", "sector", "subsector", "url" }.',
'',
'RULES:',
'- "holders" shows which partner/firm lists the company. Use it to',
'  DISAMBIGUATE: generic names (Neon, Kin, Unit, Front, Decade...) may',
'  refer to several real companies. Only answer when the URL clearly',
'  matches the company those investors actually backed. If you cannot be',
'  certain which company is meant, SKIP IT - a skipped row is correct,',
'  a mislabeled row is not.',
'- sector: a broad label such as Fintech, Consumer, Enterprise Software,',
'  AI, Cybersecurity, Healthcare, Biotech, EdTech, Climate & Energy,',
'  Mobility, Space, Deep Tech, Gaming, Hardware, Robotics, Ecommerce.',
'- subsector: a short specific phrase from the source itself.',
'- Sector describes the COMPANY. Do not return stages, years, or amounts.',
'- Return strict JSON: an array of the objects described above.',
].join('\n');

const RTQ_ENRICH_PROMPT = [
'TASK: PARTNER INVESTMENT ENRICHMENT FOR THE VC POWER BOARD',
'',
'The attached JSON packet lists partners and their publicly attributable',
'investments. For every investment, fill the null fields FROM REAL SOURCES',
'or leave them null. Never estimate, infer, or guess. Unknown stays null.',
'',
'FIELDS PER INVESTMENT:',
'  year      four-digit NUMBER: the financing/investment announcement year',
'            for the round this person is associated with. Never a company',
'            founding date, never invented.',
'  stage     one of: Pre-Seed, Seed, Series A, Series B, Series C,',
'            Series D, Series E, Series F, Series G. Map source wording',
'            onto this list; if the source names no round, null.',
'  sector    reuse the site vocabulary (Fintech, Enterprise Software, AI,',
'            Healthcare, Consumer, Deep Tech, Cybersecurity, Climate,',
'            SaaS, Marketplaces, Crypto, Biotech, Robotics, Mobility,',
'            Defense Tech, Digital Health, Edtech, Logistics, Industrial',
'            Tech, Energy, Life Sciences, Space, ...). One label.',
'  orgAtTime the firmSlug the person worked at WHEN this investment was',
'            made, ONLY if a source establishes it and it differs from',
'            their current firm. Otherwise null.',
'  evidence  array of { url, type, checked: "YYYY-MM-DD" } where type is',
'            one of: deal-announcement, firm-announcement, partner-bio,',
'            portfolio-page, regulatory, press. Prefer, in order: company',
'            financing announcement; investor announcement; partner bio;',
'            portfolio page; regulatory; reliable press. Search snippets,',
'            aggregator databases and unsourced model output are NOT',
'            evidence. Every non-null field you fill must be supported by',
'            at least one evidence entry on that investment.',
'',
'ATTRIBUTION RULE: a source must name THIS PERSON against THIS COMPANY.',
'The firm having invested is not partner attribution. If you cannot tie',
'the person to the deal, fill nothing and note it in gaps.md.',
'',
'Also fill partner-level joinedYear where null, with a source, and note',
'in gaps.md anyone who appears to have left their firm.',
'',
'DELIVERABLES:',
'  1. enriched.json - the same packet with nulls filled where sourced',
'  2. sources.csv   - slug, company, field, value, source_url',
'  3. gaps.md       - every field left null and why, one line each',
''].join('\n');

function rtQCopyPacket(list) {
  const slugs = list.slice(0, 25).map(function (r) { return r.slug; });
  const packet = (typeof pbehResearchPacket === 'function') ? pbehResearchPacket(slugs) : [];
  const text = RTQ_ENRICH_PROMPT + '\nPACKET (' + packet.length + ' partners):\n\n' +
               JSON.stringify(packet, null, 1);
  const ta = document.createElement('textarea');
  ta.value = text; document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(ta);
  alert('Research packet for ' + packet.length + ' partners copied to the clipboard.\n' +
        'Paste it into a CoWork research session. Returned batches are validated before any merge.');
}

const RTQ_PRIO_RANK = { high: 0, medium: 1, low: 2 };

function rtQRenderPeople() {
  const slugs = Object.keys(partnerProfiles);
  const rows = slugs.map(function (s) {
    return { slug: s, p: partnerProfiles[s], h: rtPartnerHealth(s),
             e: (typeof pbehEnrichment === 'function') ? pbehEnrichment(s) : null };
  });
  const counts = { 'weak': 0, 'needs-review': 0, 'adequate': 0, 'strong': 0 };
  rows.forEach(function (r) { counts[r.h.category]++; });

  /* Rollout levels, one pass for the whole database.
       L0  no attribution rows at all
       L1  attributions exist, but no chart can render
       L2  a stage or sector distribution renders
       L3  the same-period Partner vs. Firm comparison renders
       L4  the comparison also yields a printed insight
     A level is derived, never stored: enriching the data is the only
     way to move a person up. */
  const levelOf = {};
  const lvlCount = [0, 0, 0, 0, 0];
  let fhNi = 0, fhStage = 0, fhSector = 0, fhCmp = 0, fhDirect = 0;
  if (typeof pbehCompute === 'function') {
    slugs.forEach(function (s2) {
      const c = pbehCompute(s2);
      let L = 0;
      if (c && c.n) {
        fhNi++; L = 1;
        if (c.stageDist) fhStage++;
        if (c.sectorDist) fhSector++;
        if (c.stageDist || c.sectorDist) L = 2;
        if (c.rows.some(function (r2) { return r2.dealSource; })) fhDirect++;
        const cmp = (typeof pbehComparison === 'function') ? pbehComparison(s2) : null;
        if (cmp) {
          fhCmp++; L = 3;
          if (typeof pbehInsight === 'function' && pbehInsight(c, cmp)) L = 4;
        }
      }
      levelOf[s2] = L; lvlCount[L]++;
    });
  }

  const host = rtQHost();
  host.innerHTML = '<div class="rtq-inner"><a class="rtq-close" href="#">close</a>' +
    '<div class="rtq-kicker">Internal · Research Quality</div>' +
    '<h1>Research Queue</h1>' + rtQTabs('people') +
    '<p class="rtq-sub">Coverage of Power Board\'s research on every tracked person. ' +
    '"No attributable investments" means none are sourced yet - never that the person has made none.</p>' +
    '<div class="rtq-summary">' +
      ['weak', 'needs-review', 'adequate', 'strong'].map(function (c) {
        return '<div class="rtq-sum"><div class="n">' + counts[c] + '</div><div class="l">' + RT_CAT_LABEL[c] + '</div></div>';
      }).join('') +
      '<div class="rtq-sum"><div class="n">' + rows.length + '</div><div class="l">People</div></div>' +
    '</div>' +
    (typeof pbehCompute !== 'function' ? '' :
      '<div class="rtq-sub" style="margin:2px 0 4px">Feature health · ' + fhNi + ' with attributions · ' +
        fhStage + ' can show Observed Stage · ' + fhSector + ' Sector Concentration · ' +
        fhCmp + ' Partner vs. Firm · ' + fhDirect + ' with direct deal evidence</div>' +
      '<div class="rtq-sub" style="margin:2px 0 10px">Rollout levels · ' +
        'L0 nothing yet: ' + lvlCount[0] + ' · L1 attributions: ' + lvlCount[1] +
        ' · L2 bars render: ' + lvlCount[2] + ' · L3 comparison: ' + lvlCount[3] +
        ' · L4 insight: ' + lvlCount[4] + '</div>') +
    '<div class="rtq-controls">' +
      '<input type="text" id="rtqSearch" placeholder="filter by name or firm...">' +
      '<select id="rtqSort">' +
        '<option value="priority">sort: research priority</option>' +
        '<option value="health">sort: worst health first</option>' +
        '<option value="ni">sort: most attributions</option>' +
        '<option value="level">sort: highest level first</option>' +
        '<option value="name">sort: name</option>' +
      '</select>' +
      '<a href="#" id="rtqPacket" class="rtq-tab">Copy research packet (top 25 shown)</a>' +
      '<a href="#" id="rtqCompanyPacket" class="rtq-tab">Copy company-sector packet</a>' +
      '<a href="#" id="rtqByFirm" class="rtq-tab">By firm</a>' +
      '<label><input type="checkbox" class="rtqF" value="no attributable investments"> no attribution</label>' +
      '<label><input type="checkbox" class="rtqF" value="no profile sources"> no sources</label>' +
      '<label><input type="checkbox" class="rtqF" value="missing biography"> no bio</label>' +
      '<label><input type="checkbox" class="rtqF" value="missing sectors"> no sectors</label>' +
      '<label><input type="checkbox" class="rtqF" value="departure on record"> departed</label>' +
      '<label><input type="checkbox" class="rtqF" value="join year missing"> no join year</label>' +
      '<label><input type="checkbox" class="rtqF" value="insufficient dated attributions for comparison"> no comparison</label>' +
      '<label><input type="checkbox" id="rtqExh"> research exhausted</label>' +
    '</div>' +
    '<table><thead id="rtqHead"></thead>' +
    '<tbody id="rtqBody"></tbody></table></div>';

  let byFirm = false;

  function drawByFirm() {
    /* Per-firm rollout progress: how far Observed Behavior has been
       taken at each firm, from the same derived numbers as the
       per-person view - nothing here is stored anywhere. */
    const firms = {};
    rows.forEach(function (r) {
      const key = r.p.firm || '(no firm)';
      const f = firms[key] || (firms[key] = { firm: key, people: 0, withNi: 0,
                                              bars: 0, cmp: 0, high: 0 });
      f.people++;
      const L = levelOf[r.slug] || 0;
      if (L >= 1) f.withNi++;
      if (L >= 2) f.bars++;
      if (L >= 3) f.cmp++;
      if (r.e && r.e.priority === 'high') f.high++;
    });
    const term = (document.getElementById('rtqSearch').value || '').toLowerCase();
    const list = Object.keys(firms).map(function (k) { return firms[k]; })
      .filter(function (f) { return !term || f.firm.toLowerCase().indexOf(term) >= 0; })
      .sort(function (a, b) { return b.bars - a.bars || b.withNi - a.withNi || b.people - a.people || a.firm.localeCompare(b.firm); });
    document.getElementById('rtqHead').innerHTML =
      '<tr><th>Firm</th><th>People</th><th>With attributions</th><th>Bars render (L2+)</th>' +
      '<th>Comparison-ready (L3+)</th><th>High-priority queue</th></tr>';
    document.getElementById('rtqBody').innerHTML = list.slice(0, 250).map(function (f) {
      return '<tr><td>' + rtEsc(f.firm) + '</td><td>' + f.people + '</td><td>' + f.withNi + '</td>' +
        '<td>' + f.bars + '</td><td>' + f.cmp + '</td><td>' + (f.high || '—') + '</td></tr>';
    }).join('') || '<tr><td colspan="6" class="rtq-reasons">No firms match.</td></tr>';
  }

  function draw() {
    if (byFirm) { drawByFirm(); return; }
    document.getElementById('rtqHead').innerHTML =
      '<tr><th>Person</th><th>Firm</th><th>Priority</th><th>Level</th><th>Attributed</th><th>Missing</th><th>Unlocks</th></tr>';
    const term = (document.getElementById('rtqSearch').value || '').toLowerCase();
    const sort = document.getElementById('rtqSort').value;
    const filters = Array.prototype.slice.call(document.querySelectorAll('.rtqF:checked')).map(function (c) { return c.value; });
    const exhOnly = !!(document.getElementById('rtqExh') || {}).checked;
    let list = rows.filter(function (r) {
      if (term && (r.p.name + ' ' + (r.p.firm || '')).toLowerCase().indexOf(term) < 0) return false;
      if (exhOnly && r.p.researchState !== 'exhausted') return false;
      return filters.every(function (f) { return r.h.reasons.indexOf(f) >= 0; });
    });
    list.sort(function (a, b) {
      if (sort === 'name') return a.p.name.localeCompare(b.p.name);
      if (sort === 'ni') return b.h.ni - a.h.ni || a.p.name.localeCompare(b.p.name);
      if (sort === 'level') return (levelOf[b.slug] || 0) - (levelOf[a.slug] || 0) ||
                                   b.h.ni - a.h.ni || a.p.name.localeCompare(b.p.name);
      if (sort === 'priority') {
        const ap = a.e ? RTQ_PRIO_RANK[a.e.priority] : 3;
        const bp = b.e ? RTQ_PRIO_RANK[b.e.priority] : 3;
        return ap - bp || (b.e ? b.e.n : 0) - (a.e ? a.e.n : 0) || a.p.name.localeCompare(b.p.name);
      }
      return RT_CAT_RANK[a.h.category] - RT_CAT_RANK[b.h.category] || a.p.name.localeCompare(b.p.name);
    });
    const pk = document.getElementById('rtqPacket');
    if (pk) pk.onclick = function (ev) { ev.preventDefault(); rtQCopyPacket(list.filter(function (r) { return r.e; })); };
    // 1,048 rows would make an unusable page; the queue is for working
    // the worst first, so it pages in slices under the active sort.
    const LIMIT = 250;
    const PRIO_LABEL = { high: 'High', medium: 'Medium', low: 'Low' };
    const PRIO_CLASS = { high: 'weak', medium: 'needs-review', low: 'adequate' };
    document.getElementById('rtqBody').innerHTML = list.slice(0, LIMIT).map(function (r) {
      const e = r.e;
      const missing = e ? [
        e.missing.dates ? e.missing.dates + ' dates' : null,
        e.missing.stages ? e.missing.stages + ' stages' : null,
        e.missing.sectors ? e.missing.sectors + ' sectors' : null,
        e.missing.dealEvidence ? e.missing.dealEvidence + ' deal-level sources' : null,
        e.missing.joinYear ? 'join year' : null
      ].filter(Boolean).join(' · ') : '';
      return '<tr><td><a href="#partner/' + rtEsc(r.slug) + '">' + rtEsc(r.p.name) + '</a></td>' +
        '<td>' + rtEsc(r.p.firm || '—') + '</td>' +
        '<td>' + (e ? '<span class="rtq-cat ' + PRIO_CLASS[e.priority] + '">' + PRIO_LABEL[e.priority] + '</span>'
                    : '<span class="rtq-cat adequate">—</span>') + '</td>' +
        '<td>L' + (levelOf[r.slug] || 0) + '</td>' +
        '<td>' + (r.h.ni || '—') + '</td>' +
        '<td class="rtq-reasons">' + (r.p.researchState === 'exhausted' ? 'exhausted · ' : '') +
          (e ? rtEsc(missing || 'complete') : rtEsc(r.h.reasons.join('; ') || '—')) + '</td>' +
        '<td class="rtq-reasons">' + (e && e.unlocks.length ? rtEsc(e.unlocks.join(' · ')) : '—') + '</td></tr>';
    }).join('') +
    (list.length > LIMIT ? '<tr><td colspan="7" class="rtq-reasons">Showing the first ' + LIMIT + ' of ' +
      list.length + ' under this sort - narrow with filters or search.</td></tr>' : '') ||
    '<tr><td colspan="7" class="rtq-reasons">No people match the current filters.</td></tr>';
  }
  document.getElementById('rtqSearch').addEventListener('input', draw);
  document.getElementById('rtqSort').addEventListener('change', draw);
  Array.prototype.forEach.call(document.querySelectorAll('.rtqF'), function (c) { c.addEventListener('change', draw); });
  const ex = document.getElementById('rtqExh');
  if (ex) ex.addEventListener('change', draw);
  const bf = document.getElementById('rtqByFirm');
  if (bf) bf.onclick = function (ev) {
    ev.preventDefault();
    byFirm = !byFirm;
    bf.textContent = byFirm ? 'By person' : 'By firm';
    draw();
  };
  const cp = document.getElementById('rtqCompanyPacket');
  if (cp) cp.onclick = function (ev) {
    ev.preventDefault();
    if (typeof pbehCompute !== 'function') return;
    /* companies still lacking a verified sector, ranked by how many
       floor-eligible partners they would help - one verified company
       fills the sector on every row naming it */
    const freq = {};
    Object.keys(partnerProfiles).forEach(function (s2) {
      const c = pbehCompute(s2);
      if (!c || c.n < 5) return;
      c.rows.forEach(function (r) {
        if (r.sector) return;
        const k = r.name;
        const f = freq[k] || (freq[k] = { name: k, rows: 0, holders: [] });
        f.rows++;
        if (f.holders.length < 4)
          f.holders.push(c.partner.name + ' (' + (c.partner.firm || '?') + ')');
      });
    });
    const list = Object.keys(freq).map(function (k) { return freq[k]; })
      .sort(function (a, b) { return b.rows - a.rows || a.name.localeCompare(b.name); })
      .slice(0, 150);
    const text = RTQ_COMPANY_PROMPT + '\n\nCOMPANIES (' + list.length + '):\n\n' +
                 JSON.stringify(list, null, 1);
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    alert('Company-sector packet (' + list.length + ' companies) copied to the clipboard.\n' +
          'Paste it into a CoWork research session. Returned entries are verified before any merge.');
  };
  draw();
}

function rtQTabs(active) {
  return '<div class="rtq-tabs">' +
    '<a href="#" class="rtq-tab' + (active === 'firms' ? ' active' : '') +
      '" onclick="rtQMode=\'firms\';rtQRender();return false;">Firms</a>' +
    '<a href="#" class="rtq-tab' + (active === 'people' ? ' active' : '') +
      '" onclick="rtQMode=\'people\';rtQRenderPeople();return false;">People</a></div>';
}

function rtQRender() {
  const rows = firms.map(function (f) {
    const h = rtHealth(f);
    return { firm: f, h: h };
  });

  const counts = { 'weak': 0, 'needs-review': 0, 'adequate': 0, 'strong': 0 };
  rows.forEach(function (r) { counts[r.h.category]++; });

  const host = rtQHost();
  host.innerHTML = '<div class="rtq-inner"><a class="rtq-close" href="#">close</a>' +
    '<div class="rtq-kicker">Internal · Research Quality</div>' +
    '<h1>Research Queue</h1>' + rtQTabs('firms') +
    '<p class="rtq-sub">Coverage and support for Power Board\'s research on every firm. This measures the ' +
    'research, never the firm. Rules are deterministic and documented in research-trust.js; there is no score, ' +
    'because arithmetic on booleans would be false precision.</p>' +
    '<div class="rtq-summary">' +
      ['weak', 'needs-review', 'adequate', 'strong'].map(function (c) {
        return '<div class="rtq-sum"><div class="n">' + counts[c] + '</div><div class="l">' + RT_CAT_LABEL[c] + '</div></div>';
      }).join('') +
      '<div class="rtq-sum"><div class="n">' + rows.length + '</div><div class="l">Firms</div></div>' +
    '</div>' +
    '<div class="rtq-controls">' +
      '<input type="text" id="rtqSearch" placeholder="filter by name...">' +
      '<select id="rtqSort">' +
        '<option value="health">sort: worst health first</option>' +
        '<option value="crawl">sort: oldest roster crawl</option>' +
        '<option value="name">sort: name</option>' +
      '</select>' +
      '<label><input type="checkbox" class="rtqF" value="missing aum"> missing AUM</label>' +
      '<label><input type="checkbox" class="rtqF" value="missing founded"> missing founded</label>' +
      '<label><input type="checkbox" class="rtqF" value="missing signatureExit"> missing exit</label>' +
      '<label><input type="checkbox" class="rtqF" value="missing leadership"> missing leadership</label>' +
      '<label><input type="checkbox" class="rtqF" value="no field evidence on file"> no evidence</label>' +
      '<label><input type="checkbox" class="rtqF" value="not in the team-crawl set"> no crawl</label>' +
    '</div>' +
    '<table><thead><tr><th>Firm</th><th>Health</th><th>Evidence</th><th>Roster crawl</th><th>Why</th></tr></thead>' +
    '<tbody id="rtqBody"></tbody></table></div>';

  function draw() {
    const term = (document.getElementById('rtqSearch').value || '').toLowerCase();
    const sort = document.getElementById('rtqSort').value;
    const filters = Array.prototype.slice.call(document.querySelectorAll('.rtqF:checked')).map(function (c) { return c.value; });
    let list = rows.filter(function (r) {
      if (term && r.firm.name.toLowerCase().indexOf(term) < 0) return false;
      return filters.every(function (f) { return r.h.reasons.indexOf(f) >= 0; });
    });
    list.sort(function (a, b) {
      if (sort === 'name') return a.firm.name.localeCompare(b.firm.name);
      if (sort === 'crawl') {
        const av = a.h.crawlAgeDays === null ? 1e9 : -a.h.crawlAgeDays;
        const bv = b.h.crawlAgeDays === null ? 1e9 : -b.h.crawlAgeDays;
        return bv - av || a.firm.name.localeCompare(b.firm.name);
      }
      return RT_CAT_RANK[a.h.category] - RT_CAT_RANK[b.h.category] || a.firm.name.localeCompare(b.firm.name);
    });
    document.getElementById('rtqBody').innerHTML = list.map(function (r) {
      const c = r.h.crawl;
      const crawlTxt = !c ? '—'
        : c.lastOk ? rtEsc(c.lastOk.date) + ' (' + r.h.crawlAgeDays + 'd)'
        : 'failed ' + rtEsc(c.lastTry.date);
      return '<tr><td><a href="#' + rtEsc(r.firm.slug) + '">' + rtEsc(r.firm.name) + '</a></td>' +
        '<td><span class="rtq-cat ' + r.h.category + '">' + RT_CAT_LABEL[r.h.category] + '</span></td>' +
        '<td>' + (r.h.evidenceFields ? r.h.evidenceFields + ' fields' : '—') + '</td>' +
        '<td>' + crawlTxt + '</td>' +
        '<td class="rtq-reasons">' + (r.h.reasons.length ? rtEsc(r.h.reasons.join('; ')) : 'complete and supported') + '</td></tr>';
    }).join('') || '<tr><td colspan="5" class="rtq-reasons">No firms match the current filters.</td></tr>';
  }
  document.getElementById('rtqSearch').addEventListener('input', draw);
  document.getElementById('rtqSort').addEventListener('change', draw);
  Array.prototype.forEach.call(document.querySelectorAll('.rtqF'), function (c) { c.addEventListener('change', draw); });
  draw();
}

function rtQLoad() {
  if (rtQAuthed) { rtQRender(); return; }
  const client = (typeof pbaClient === 'function') ? pbaClient() : null;
  if (!client) { rtQMessage('Unavailable', 'The database client is not loaded on this page.'); return; }
  if (typeof isSignedIn === 'function' && !isSignedIn()) {
    rtQMessage('Sign in required', 'This view is limited to accounts listed in the admins table. <a href="#signin">Sign in</a> and try again.');
    return;
  }
  if (rtQLoading) return;
  rtQLoading = true;
  rtQMessage('Checking access', 'Confirming admin status.');
  client.rpc('pb_admin_metrics').then(function (res) {
    rtQLoading = false;
    if (res.error) {
      const denied = /not authorised/i.test(res.error.message || '') || res.error.code === '42501';
      rtQMessage(denied ? 'Not available for this account' : 'Could not load',
                 denied ? 'This account is not in the admins table.' : 'Access check failed.');
      return;
    }
    rtQAuthed = true;
    rtQRender();
  }, function () { rtQLoading = false; rtQMessage('Could not load', 'The request did not complete.'); });
}

function rtQRoute() {
  const on = (location.hash || '').split('?')[0] === '#research';
  const host = rtQHost();
  host.style.display = on ? '' : 'none';
  if (on) { rtQStyles(); rtQLoad(); }
}
window.addEventListener('hashchange', rtQRoute);
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', rtQRoute);
} else {
  rtQRoute();
}
