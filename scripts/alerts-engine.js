/* ============================================================
   ALERTS-ENGINE.JS  -  Power Alerts computation layer

   DATA -> METRIC -> THRESHOLD -> SCORE -> ALERT.

   This file contains no alert text and no hardcoded numbers.
   Every figure in every alert is computed from data-firms.js,
   data-partners.js and data-meta.js at page load, and every
   alert carries the underlying rows that produced it in its
   `evidence` array so the UI can show its working.

   Pure computation: no DOM, no globals written. Safe to load
   anywhere after the data files and taxonomy.js.

   WHY THE COMPARISONS ARE COHORT-BASED, NOT 30/90-DAY:
   the dataset has no dated per-investment records. The only
   reliably-populated date fields are firm `founded` (344/344),
   partner `joinedYear` (331/341) and the `year` on firm
   timeline events (1243 dated events). So the engine compares
   founding cohorts and hiring years - real, dated, checkable
   periods - rather than inventing a 30/90-day activity feed
   that the data cannot support. See UNSUPPORTED_ALERTS below.
   ============================================================ */

const POWER_ALERT_CONFIG = {
  // --- cohort comparison windows (firm.founded) ---
  recentCohortFrom: 2015,      // "current period"
  priorCohortFrom: 2005,       // "previous period"
  priorCohortTo: 2014,

  // --- minimum sample sizes (spec §5: no misleading small-n alerts) ---
  minCohortSize: 40,           // both cohorts must have at least this many firms
  minSectorFirms: 8,           // a sector needs this many firms in the recent cohort
  minCoHolders: 4,             // a ticker needs this many distinct holders
  minPartnerHires: 2,          // a firm needs this many dated hires in the window
  minSectorPartners: 2,        // partners sharing a published sector focus at one firm
  minFirmTimelineEvents: 3,    // dated milestones in the recent window

  // --- team-snapshot diffing ---
  minArrivals: 2,              // new faces needed before an arrival alert
  minDepartures: 2,            // names gone before a departure alert
  minRosterRetention: 0.4,     // if a roster keeps less than this share of its
                               // previous members, treat the capture as suspect
                               // and emit nothing. A site rewrite or a partial
                               // render must never read as a mass exodus.

  // --- fund history ---
  minFundStepRatio: 1.5,       // fund-over-fund growth worth reporting
  minFundsForYearAlert: 3,     // firms closing in a year before it is a signal
  fundAnnouncementDays: 365,   // a fund close stays news for a year. Firms
                               // raise every 2-4 years, so a 90-day window
                               // like the deals one would report almost
                               // nothing and then go silent for months.
  fundYearWindowFrom: 2023,

  // --- deal-level data ---
  minFirmsForSectorBreadth: 3, // firms with a disclosed deal in one sector
                               // before that sector is worth reporting
  maxSectorBreadthShare: 0.9,  // a sector nearly every covered firm touches is
                               // not news. 11 of 12 firms invested in AI - true,
                               // and far too obvious to occupy a board slot.

  // --- deal recency (new_investments) ---
  newInvestmentWindowDays: 90, // lookback for "recently announced"
  minNewInvestments: 4,        // disclosed rounds in the window before it is news
  minCoinvestorReach: 6,       // other covered firms a firm must have co-invested
                               // with before its syndicate reach is worth an alert
  maxDealDataAgeDays: 30,      // if the newest deal on file is older than this, the
                               // whole alert type is withheld. A recency claim built
                               // on stale data does not degrade gracefully - it
                               // quietly reports every firm as dormant. Withholding
                               // is the only safe failure mode.

  // --- sector exposure, per firm, inside a researched deal window ---
  minDealsPerExposurePeriod: 10, // deals needed in EACH half before a share is
                                 // worth computing. At 10, one deal moves the
                                 // number 10 points, which is why the shift
                                 // threshold below sits well above that.
  minExposureShiftPoints: 15,    // percentage-point move to report
  minExposureConfidence: 0.9,    // two-proportion confidence floor

  // --- effect-size thresholds ---
  minPointChange: 3,           // percentage-point move to be worth an alert
  partnerHireWindowFrom: 2015, // hires counted from this year
  timelineWindowFrom: 2024,

  // --- surfacing ---
  minScore: 45,                // alerts below this are computed but not shown
  maxAlerts: 16,
  maxPerType: 2             // with 128 alerts computed and one board, a low
                            // per-type cap is what stops any single type from
                            // crowding every other one off the page
};

/* Alert types the dataset CANNOT currently support. Declared in
   code rather than only in documentation so that the absence is
   auditable, and so nothing silently invents them later. */
const UNSUPPORTED_ALERTS = {
  /* FIRM_DEALS now carries a dated sector on every row, so the original
     reason here (no history at all) is obsolete. It stays unsupported for
     a harder one: the median firm has 6 recorded deals, so splitting into
     two periods compares about 3 against 3, and one deal landing either
     side of the cut moves the figure by 33 points. */
  /* sector_exposure_change is IMPLEMENTED as of the windowed deal sweep
     in data-deals.js (rule 11). It required two things the old dataset
     could not give: a dated sector on every row, and a declared window
     whose collection effort is even across both halves. It fires only
     for firms clearing 10 deals in each half, which today is a
     handful of them, and stays silent for the rest rather than
     computing a share from three deals.

     investment_activity_30d stays unsupported, but for a new reason.
     The recency bias is fixed INSIDE the researched window; the window
     simply ends before today. A trailing-30-day claim needs coverage
     running to the present, and DEAL_COVERAGE currently stops at
     2026-06-30. Extend the sweep to the current month and this becomes
     computable. Until then new_investments reports the raw count. */
  investment_activity_30d: 'a trailing-30-day rate needs deal coverage running to the present; DEAL_COVERAGE ends 2026-06-30, so the last 30 days are outside every researched window. new_investments reports the raw count as a floor.',
  // partner_departures is IMPLEMENTED as of the team-snapshot crawler
  // (see snapshot_partner_departure below). It stays listed here until a
  // second capture exists, because one snapshot cannot be diffed.
  // partner_sector_focus is IMPLEMENTED as of the partner-sector research
  // pass (see rule 5b). It fires only for firms that publish a per-person
  // investment focus; most publish none, and those profiles hold
  // sectors:null rather than inheriting their firm's sector list.
  // fund_announcements is IMPLEMENTED as of data-funds.js, which promoted
  // the free-text timeline prose into structured, sourced records (rule 9).
  // Unlike the deals file its dates show no collection bias: closes run
  // 2007 to 2026 and peak in 2023, not in the month the research ran.
  portfolio_returns: 'no holdings row carries investedYear plus both an entry and a current price; 40 of 283 have the year, 0 have both prices.'
};

/* ---------- small statistical helpers ---------- */

// Abramowitz & Stegun 7.1.26 error-function approximation, used
// for the two-proportion z-test that backs `confidence`.
function pa_erf(x) {
  const s = x < 0 ? -1 : 1;
  x = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * x);
  const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return s * y;
}
function pa_normalCdf(z) { return 0.5 * (1 + pa_erf(z / Math.SQRT2)); }

// Two-proportion z-test. Returns confidence = 1 - p (two-tailed).
// Null or tiny samples return 0 rather than a flattering number.
function pa_proportionConfidence(x1, n1, x2, n2) {
  if (!n1 || !n2) return 0;
  const p1 = x1 / n1, p2 = x2 / n2;
  const p = (x1 + x2) / (n1 + n2);
  const se = Math.sqrt(p * (1 - p) * (1 / n1 + 1 / n2));
  if (!se) return 0;
  const z = Math.abs(p1 - p2) / se;
  return Math.max(0, Math.min(1, 2 * pa_normalCdf(z) - 1));
}

function pa_round(n, dp) { const m = Math.pow(10, dp || 0); return Math.round(n * m) / m; }

// Deterministic fingerprint (spec §10). Same underlying event =
// same id on every page load, so duplicates can be suppressed.
function pa_fingerprint(parts) {
  const s = parts.filter(function (p) { return p !== null && p !== undefined; }).join('|');
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return 'pa_' + (h >>> 0).toString(36);
}


/* Parses a fund's ordinal from its name: roman ("Fund VIII"), arabic
   ("Fund 5") or written ("Addition Three"). Returns null when the name
   carries no number, which is common and not an error. */
function pa_fundOrdinal(name) {
  if (!name) return null;
  const words = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };
  const w = name.toLowerCase().match(/\b(one|two|three|four|five|six|seven|eight|nine|ten)\b/);
  if (w) return words[w[1]];
  const a = name.match(/\b(\d{1,2})\b/);
  if (a) return parseInt(a[1], 10);
  const r = name.toUpperCase().match(/\b([IVX]{1,6})\b/);
  if (!r) return null;
  const map = { I: 1, V: 5, X: 10 };
  let n = 0, prev = 0;
  for (let i = r[1].length - 1; i >= 0; i--) {
    const v = map[r[1][i]];
    n += v < prev ? -v : v;
    prev = Math.max(prev, v);
  }
  return n || null;
}

/* ---------- scoring (spec §6) ---------- */
// Blends effect magnitude, sample size, statistical confidence and
// recency into 0-100. Weights are config, not magic constants.
function pa_score(o) {
  const magnitude = Math.min(1, (o.magnitude || 0) / (o.magnitudeCeiling || 1));
  const sample = Math.min(1, Math.log10(1 + (o.sample || 0)) / Math.log10(1 + (o.sampleCeiling || 100)));
  const confidence = o.confidence || 0;
  const recency = o.recency === undefined ? 0.5 : o.recency;
  return Math.round(100 * (0.40 * magnitude + 0.25 * confidence + 0.20 * sample + 0.15 * recency));
}

/* ============================================================
   THE ENGINE
   ============================================================ */
function computePowerAlerts(options) {
  const cfg = Object.assign({}, POWER_ALERT_CONFIG, options || {});
  const generatedAt = new Date().toISOString();

  // Resolve inputs from globals, but never assume they exist.
  const FIRMS = typeof firms !== 'undefined' && Array.isArray(firms) ? firms : [];
  const PROFILES = typeof partnerProfiles !== 'undefined' && partnerProfiles ? partnerProfiles : {};
  const SECTORS = typeof SECTOR_MAP !== 'undefined' ? SECTOR_MAP : null;
  const LOCATIONS = typeof LOCATION_MAP !== 'undefined' ? LOCATION_MAP : null;
  const STAGES = typeof firmStages !== 'undefined' ? firmStages : null;

  const alerts = [];
  const skipped = [];
  function skip(type, reason) { skipped.push({ type: type, reason: reason }); }

  // Cohorts are the "periods". Both must clear minCohortSize or
  // every cohort-based alert is withheld (spec §14).
  const recent = FIRMS.filter(function (f) { return f.founded >= cfg.recentCohortFrom; });
  const prior = FIRMS.filter(function (f) { return f.founded >= cfg.priorCohortFrom && f.founded <= cfg.priorCohortTo; });
  const periodLabel = 'firms founded ' + cfg.recentCohortFrom + '+ vs ' + cfg.priorCohortFrom + '–' + cfg.priorCohortTo;
  const cohortsUsable = recent.length >= cfg.minCohortSize && prior.length >= cfg.minCohortSize;
  if (!cohortsUsable) {
    skip('cohort_*', 'cohort sizes ' + recent.length + '/' + prior.length + ' below minCohortSize ' + cfg.minCohortSize);
  }

  // Total tag mentions per cohort, for the normalisation below.
  function mentionTotal(cohort, getTags, isKnown) {
    return cohort.reduce(function (n, f) {
      return n + getTags(f).filter(isKnown).length;
    }, 0);
  }

  /* Generic cohort comparison.
     `mode: 'composition'` measures a category's share of all tag
     MENTIONS in the cohort. This matters: firms founded 2015+
     carry fewer tags on average than the 2005-2014 cohort
     (3.34 vs 3.85 sectors, 2.33 vs 2.89 stages), so a plain
     share-of-firms comparison drags every category downward as
     an artefact of list length rather than a real shift.
     Normalising by mentions removes that bias.

     `mode: 'firmshare'` is used where the field is single-valued
     per firm (hq), so no such bias exists and the share of firms
     is the correct - and statistically cleaner - measure. */
  function cohortShift(type, key, label, matcher, opts) {
    opts = opts || {};
    let rHit, pHit, rBase, pBase, unitNote, approxTest;
    if (opts.mode === 'composition') {
      rHit = recent.reduce(function (n, f) { return n + opts.getTags(f).filter(matcher).length; }, 0);
      pHit = prior.reduce(function (n, f) { return n + opts.getTags(f).filter(matcher).length; }, 0);
      rBase = opts.recentTotal; pBase = opts.priorTotal;
      unitNote = 'share of all ' + opts.tagNoun + ' mentions in the cohort';
      approxTest = true;
    } else {
      rHit = recent.filter(matcher).length;
      pHit = prior.filter(matcher).length;
      rBase = recent.length; pBase = prior.length;
      unitNote = 'share of firms in the cohort';
      approxTest = false;
    }
    if (!rBase || !pBase) return null;
    // Firm-level counts are always carried as evidence, whichever
    // measure produced the headline number.
    const rFirms = recent.filter(opts.mode === 'composition'
      ? function (f) { return opts.getTags(f).some(matcher); } : matcher);
    const pFirms = prior.filter(opts.mode === 'composition'
      ? function (f) { return opts.getTags(f).some(matcher); } : matcher);
    if (rFirms.length < cfg.minSectorFirms) return null;
    const rPct = (rHit / rBase) * 100;
    const pPct = (pHit / pBase) * 100;
    const delta = rPct - pPct;
    if (Math.abs(delta) < cfg.minPointChange) return null;
    const confidence = pa_proportionConfidence(rHit, rBase, pHit, pBase);
    return {
      id: pa_fingerprint([type, key, cfg.recentCohortFrom, cfg.priorCohortFrom, pa_round(rPct, 1), pa_round(pPct, 1)]),
      type: type,
      firmId: null,
      sector: type === 'cohort_sector_shift' ? label : null,
      subject: label,
      metric: unitNote,
      previousValue: pa_round(pPct, 1),
      currentValue: pa_round(rPct, 1),
      absoluteChange: pa_round(delta, 1),
      percentChange: pPct > 0 ? pa_round((delta / pPct) * 100, 1) : null,
      unit: 'percentage points',
      period: periodLabel,
      direction: delta > 0 ? 'up' : 'down',
      generatedAt: generatedAt,
      confidence: pa_round(confidence, 3),
      score: pa_score({
        magnitude: Math.abs(delta), magnitudeCeiling: 10,
        sample: rFirms.length + pFirms.length, sampleCeiling: 200,
        confidence: confidence, recency: 0.7
      }),
      evidence: {
        measure: unitNote,
        recentCohort: { from: cfg.recentCohortFrom, matching: rHit, base: rBase, firms: rFirms.length, cohortFirms: recent.length },
        priorCohort: { from: cfg.priorCohortFrom, to: cfg.priorCohortTo, matching: pHit, base: pBase, firms: pFirms.length, cohortFirms: prior.length },
        test: approxTest
          ? 'two-proportion z-test on tag mentions (approximate: tags within one firm are not independent)'
          : 'two-proportion z-test on firm counts',
        normalisation: approxTest
          ? 'Measured as a share of tag mentions, not of firms, because the two cohorts carry different average tag counts.'
          : 'Field is single-valued per firm, so no normalisation is needed.',
        sampleFirms: rFirms.slice(0, 8).map(function (f) { return { slug: f.slug, name: f.name, founded: f.founded }; })
      }
    };
  }

  /* --- 1. SECTOR SHIFT BY FOUNDING COHORT (composition-normalised) --- */
  if (cohortsUsable && SECTORS) {
    const getSectors = function (f) { return f.sectors || []; };
    const known = function (t) {
      return Object.keys(SECTORS).some(function (k) { return SECTORS[k].rawTags.indexOf(t) !== -1; });
    };
    const rTot = mentionTotal(recent, getSectors, known);
    const pTot = mentionTotal(prior, getSectors, known);
    Object.keys(SECTORS).forEach(function (key) {
      const tags = SECTORS[key].rawTags;
      const a = cohortShift('cohort_sector_shift', key, SECTORS[key].label,
        function (s) { return tags.indexOf(s) !== -1; },
        { mode: 'composition', getTags: getSectors, recentTotal: rTot, priorTotal: pTot, tagNoun: 'sector' });
      if (a) alerts.push(a);
    });
  } else if (!SECTORS) { skip('cohort_sector_shift', 'SECTOR_MAP not loaded'); }

  /* --- 2. GEOGRAPHIC SHIFT BY FOUNDING COHORT (hq is single-valued) --- */
  if (cohortsUsable && LOCATIONS) {
    Object.keys(LOCATIONS).forEach(function (key) {
      const hqs = LOCATIONS[key].rawHQs;
      const a = cohortShift('cohort_geography_shift', key, LOCATIONS[key].label, function (f) {
        return hqs.indexOf(f.hq) !== -1;
      }, { mode: 'firmshare' });
      if (a) alerts.push(a);
    });
  } else if (!LOCATIONS) { skip('cohort_geography_shift', 'LOCATION_MAP not loaded'); }

  /* --- 3. STAGE COVERAGE SHIFT BY FOUNDING COHORT (composition-normalised) --- */
  if (cohortsUsable && STAGES) {
    const getStages = function (f) { return STAGES[f.slug] || []; };
    const allStages = {};
    Object.keys(STAGES).forEach(function (s) { (STAGES[s] || []).forEach(function (st) { allStages[st] = 1; }); });
    const rTotS = mentionTotal(recent, getStages, function () { return true; });
    const pTotS = mentionTotal(prior, getStages, function () { return true; });
    Object.keys(allStages).forEach(function (stage) {
      const a = cohortShift('cohort_stage_shift', stage, stage,
        function (s) { return s === stage; },
        { mode: 'composition', getTags: getStages, recentTotal: rTotS, priorTotal: pTotS, tagNoun: 'stage' });
      if (a) alerts.push(a);
    });
  } else if (!STAGES) { skip('cohort_stage_shift', 'firmStages not loaded'); }

  /* --- 4. PORTFOLIO OVERLAP (co-held public positions) --- */
  const byTicker = {};
  FIRMS.forEach(function (f) {
    (f.holdings || []).forEach(function (h) {
      if (!h || !h.ticker) return;
      if (!byTicker[h.ticker]) byTicker[h.ticker] = { name: h.name, holders: [] };
      byTicker[h.ticker].holders.push({ slug: f.slug, name: f.name });
    });
  });
  const tickerKeys = Object.keys(byTicker);
  if (!tickerKeys.length) skip('portfolio_overlap', 'no holdings rows with tickers');
  tickerKeys.forEach(function (t) {
    const rec = byTicker[t];
    const n = rec.holders.length;
    if (n < cfg.minCoHolders) return;
    alerts.push({
      id: pa_fingerprint(['portfolio_overlap', t, n]),
      type: 'portfolio_overlap',
      firmId: null,
      sector: null,
      subject: rec.name + ' (' + t + ')',
      metric: 'distinct firms holding this position',
      previousValue: null,
      currentValue: n,
      absoluteChange: null,
      percentChange: null,
      unit: 'firms',
      period: 'current dataset snapshot',
      direction: 'flat',
      generatedAt: generatedAt,
      confidence: pa_round(Math.min(1, n / (cfg.minCoHolders * 3)), 3),
      score: pa_score({
        magnitude: n, magnitudeCeiling: 15,
        sample: n, sampleCeiling: 20,
        confidence: Math.min(1, n / (cfg.minCoHolders * 3)), recency: 0.4
      }),
      evidence: {
        ticker: t,
        holderCount: n,
        holders: rec.holders,
        note: 'Counted from firm.holdings entries carrying this ticker.'
      }
    });
  });

  /* --- 5. PARTNER MOMENTUM (dated hires per firm) --- */
  const hiresByFirm = {};
  Object.keys(PROFILES).forEach(function (k) {
    const p = PROFILES[k];
    if (!p || !p.firmSlug || p.joinedYear == null) return;
    if (p.joinedYear < cfg.partnerHireWindowFrom) return;
    // A partner who has left is not part of the firm's current bench.
    // Counting them would report a hire the firm no longer has.
    if (p.departedYear != null) return;
    (hiresByFirm[p.firmSlug] = hiresByFirm[p.firmSlug] || []).push({ slug: k, name: p.name, title: p.title, joinedYear: p.joinedYear });
  });
  const firmBySlug = {};
  FIRMS.forEach(function (f) { firmBySlug[f.slug] = f; });
  const nowYear = new Date().getFullYear();
  Object.keys(hiresByFirm).forEach(function (slug) {
    const hires = hiresByFirm[slug];
    if (hires.length < cfg.minPartnerHires) return;
    const firm = firmBySlug[slug];
    if (!firm) return;
    const latest = Math.max.apply(null, hires.map(function (h) { return h.joinedYear; }));
    const recency = Math.max(0, Math.min(1, 1 - (nowYear - latest) / 12));
    alerts.push({
      id: pa_fingerprint(['partner_momentum', slug, hires.length, latest]),
      type: 'partner_momentum',
      firmId: slug,
      sector: null,
      subject: firm.name,
      metric: 'partners with a recorded join year in the window',
      previousValue: null,
      currentValue: hires.length,
      absoluteChange: hires.length,
      percentChange: null,
      unit: 'partners',
      period: cfg.partnerHireWindowFrom + '–' + nowYear,
      direction: 'up',
      generatedAt: generatedAt,
      confidence: pa_round(Math.min(1, hires.length / (cfg.minPartnerHires * 3)), 3),
      score: pa_score({
        magnitude: hires.length, magnitudeCeiling: 6,
        sample: hires.length, sampleCeiling: 10,
        confidence: Math.min(1, hires.length / (cfg.minPartnerHires * 3)), recency: recency
      }),
      evidence: {
        firm: firm.name,
        windowFrom: cfg.partnerHireWindowFrom,
        partners: hires.sort(function (a, b) { return b.joinedYear - a.joinedYear; }),
        note: 'Counted from partnerProfiles joinedYear. Reflects profiles present in the dataset, not a complete hiring record.'
      }
    });
  });

  /* --- 5b. PARTNER SECTOR FOCUS ---
     "Firm X added N partners focused on robotics." Needs the sectors
     field on partner profiles, which only exists where a firm actually
     publishes a per-person specialty - most do not, and those profiles
     carry sectors:null rather than their firm's overall sector list.

     Only ONE alert per firm, for its strongest shared sector: a firm
     like Playground Global tags every partner with an investment focus,
     which would otherwise emit four near-identical alerts and drown out
     every other firm. */
  const sectorPartnersByFirm = {};
  Object.keys(PROFILES).forEach(function (k) {
    const p = PROFILES[k];
    if (!p || !p.firmSlug || p.joinedYear == null) return;
    if (p.joinedYear < cfg.partnerHireWindowFrom) return;
    if (p.departedYear != null) return;
    if (!Array.isArray(p.sectors) || !p.sectors.length) return;
    (sectorPartnersByFirm[p.firmSlug] = sectorPartnersByFirm[p.firmSlug] || [])
      .push({ slug: k, name: p.name, title: p.title, joinedYear: p.joinedYear, sectors: p.sectors });
  });
  Object.keys(sectorPartnersByFirm).forEach(function (slug) {
    const people = sectorPartnersByFirm[slug];
    const firm = firmBySlug[slug];
    if (!firm) return;
    const bySector = {};
    people.forEach(function (p) {
      p.sectors.forEach(function (s) { (bySector[s] = bySector[s] || []).push(p); });
    });
    let best = null;
    Object.keys(bySector).forEach(function (s) {
      if (bySector[s].length < cfg.minSectorPartners) return;
      if (!best || bySector[s].length > bySector[best].length) best = s;
    });
    if (!best) return;
    const matched = bySector[best];
    const latest = Math.max.apply(null, matched.map(function (p) { return p.joinedYear; }));
    const conf = Math.min(1, matched.length / (cfg.minSectorPartners * 2));
    alerts.push({
      id: pa_fingerprint(['partner_sector_focus', slug, best, matched.length, latest]),
      type: 'partner_sector_focus',
      firmId: slug,
      sector: best,
      subject: firm.name,
      metric: 'partners with a published focus in this sector who joined in the window',
      previousValue: null,
      currentValue: matched.length,
      absoluteChange: matched.length,
      percentChange: null,
      unit: 'partners',
      period: cfg.partnerHireWindowFrom + '–' + nowYear,
      direction: 'up',
      generatedAt: generatedAt,
      confidence: pa_round(conf, 3),
      score: pa_score({
        magnitude: matched.length, magnitudeCeiling: 4,
        sample: matched.length, sampleCeiling: 8,
        confidence: conf,
        recency: Math.max(0, Math.min(1, 1 - (nowYear - latest) / 12))
      }),
      evidence: {
        firm: firm.name,
        sector: best,
        windowFrom: cfg.partnerHireWindowFrom,
        partners: matched.map(function (p) {
          return { name: p.name, title: p.title, joinedYear: p.joinedYear, sectors: p.sectors.join(', ') };
        }).sort(function (a, b) { return b.joinedYear - a.joinedYear; }),
        otherSectorsAtFirm: Object.keys(bySector).filter(function (s) { return s !== best; }),
        note: 'Counts only partners whose own firm publishes a per-person investment focus. ' +
              'A firm\'s overall sector list is never used as a stand-in, so firms that do ' +
              'not publish individual specialisms are absent here rather than assumed generalist.'
      }
    });
  });

  /* --- 6. FIRM MILESTONE ACTIVITY (dated timeline events) --- */
  FIRMS.forEach(function (f) {
    const ev = (f.timeline || []).filter(function (e) {
      return /^\d{4}$/.test(String(e.year)) && Number(e.year) >= cfg.timelineWindowFrom;
    });
    if (ev.length < cfg.minFirmTimelineEvents) return;
    const latest = Math.max.apply(null, ev.map(function (e) { return Number(e.year); }));
    alerts.push({
      id: pa_fingerprint(['firm_milestone_activity', f.slug, ev.length, latest]),
      type: 'firm_milestone_activity',
      firmId: f.slug,
      sector: null,
      subject: f.name,
      metric: 'dated milestone events recorded',
      previousValue: null,
      currentValue: ev.length,
      absoluteChange: ev.length,
      percentChange: null,
      unit: 'events',
      period: cfg.timelineWindowFrom + '–' + nowYear,
      direction: 'up',
      generatedAt: generatedAt,
      confidence: pa_round(Math.min(1, ev.length / (cfg.minFirmTimelineEvents * 2)), 3),
      score: pa_score({
        magnitude: ev.length, magnitudeCeiling: 6,
        sample: ev.length, sampleCeiling: 10,
        confidence: Math.min(1, ev.length / (cfg.minFirmTimelineEvents * 2)),
        recency: Math.max(0, Math.min(1, 1 - (nowYear - latest) / 6))
      }),
      evidence: { firm: f.name, windowFrom: cfg.timelineWindowFrom, events: ev }
    });
  });

  /* --- 7. PARTNER ARRIVALS / DEPARTURES from team snapshots ---
     The only true observed time-series in the dataset: the same
     page, read twice, on two known dates.

     Three guards, all of which withhold rather than guess:
       1. fewer than two snapshots  -> nothing to diff
       2. either capture not "ok"   -> skip that firm entirely
       3. roster collapsed below minRosterRetention -> treat as a
          broken capture, not an exodus
  */
  const SNAPS = typeof TEAM_SNAPSHOTS !== 'undefined' && Array.isArray(TEAM_SNAPSHOTS) ? TEAM_SNAPSHOTS : null;
  if (!SNAPS || SNAPS.length < 2) {
    skip('snapshot_partner_change', !SNAPS
      ? 'TEAM_SNAPSHOTS not loaded'
      : 'only ' + SNAPS.length + ' snapshot captured; a diff needs two');
  } else {
    const sorted = SNAPS.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; });
    const before = sorted[sorted.length - 2];
    const after = sorted[sorted.length - 1];
    const norm = function (n) { return String(n).toLowerCase().replace(/[^a-z]/g, ''); };

    Object.keys(after.rosters || {}).forEach(function (slug) {
      const a = after.rosters[slug];
      const b = (before.rosters || {})[slug];
      // Guard 2: only diff two clean captures.
      if (!a || !b || a.capture !== 'ok' || b.capture !== 'ok') return;
      if (!Array.isArray(a.people) || !Array.isArray(b.people)) return;
      if (!b.people.length) return;

      const prevIdx = {};
      b.people.forEach(function (p) { prevIdx[norm(p.name)] = p; });
      const nowIdx = {};
      a.people.forEach(function (p) { nowIdx[norm(p.name)] = p; });

      const retained = b.people.filter(function (p) { return nowIdx[norm(p.name)]; }).length;
      // Guard 3: a capture that lost most of the roster is suspect.
      if (retained / b.people.length < cfg.minRosterRetention) return;

      const arrivals = a.people.filter(function (p) { return !prevIdx[norm(p.name)]; });
      const departures = b.people.filter(function (p) { return !nowIdx[norm(p.name)]; });
      const firm = firmBySlug[slug];
      if (!firm) return;
      const window = before.date + ' to ' + after.date;

      function push(kind, people, verb) {
        const min = kind === 'arrival' ? cfg.minArrivals : cfg.minDepartures;
        if (people.length < min) return;
        const type = 'snapshot_partner_' + kind;
        alerts.push({
          id: pa_fingerprint([type, slug, before.date, after.date, people.length]),
          type: type,
          firmId: slug,
          sector: null,
          subject: firm.name,
          metric: 'people ' + verb + ' the published team page between two captures',
          previousValue: b.people.length,
          currentValue: a.people.length,
          absoluteChange: kind === 'arrival' ? people.length : -people.length,
          percentChange: null,
          unit: 'people',
          period: window,
          direction: kind === 'arrival' ? 'up' : 'down',
          generatedAt: generatedAt,
          confidence: pa_round(Math.min(1, retained / b.people.length), 3),
          score: pa_score({
            magnitude: people.length, magnitudeCeiling: 5,
            sample: b.people.length, sampleCeiling: 40,
            confidence: Math.min(1, retained / b.people.length),
            recency: 1
          }),
          evidence: {
            firm: firm.name,
            teamPage: a.url || null,
            capturedOn: [before.date, after.date],
            rosterSize: { before: b.people.length, after: a.people.length, retained: retained },
            people: people,
            note: 'Observed by comparing the firm\'s own team page on two dates. ' +
                  'Absence from the later capture is not confirmation of a departure ' +
                  'announcement - only that the name is no longer published.'
          }
        });
      }
      push('arrival', arrivals, 'added to');
      push('departure', departures, 'removed from');
    });
  }

  /* --- 8. FUND-OVER-FUND STEP UP / DOWN ---
     Compares a firm's two most recent SIZED, DATED, single-vehicle
     funds. Deliberately narrow, because the fund records are honest
     about their own gaps:
       - combinedVehicles records cover two funds behind one total,
         so a step ratio against them is meaningless
       - a null sizeUSD or vintageYear cannot be compared at all
       - a firm flagged complete:false may be missing the fund that
         actually sits between the two being compared, so the copy
         says "most recent recorded", never "its last two funds"
  */
  const FUNDS = typeof FIRM_FUNDS !== 'undefined' && FIRM_FUNDS ? FIRM_FUNDS : null;
  if (!FUNDS) {
    skip('fund_step', 'FIRM_FUNDS not loaded');
  } else {
    Object.keys(FUNDS).forEach(function (slug) {
      const firm = firmBySlug[slug];
      const rec = FUNDS[slug];
      if (!firm || !rec || !Array.isArray(rec.funds)) return;
      const usable = rec.funds.filter(function (f) {
        // status must be "closed": a fund still being raised has no final
        // size, so comparing a target against a closed fund is not a step.
        // "disputed" marks a record whose size sources genuinely conflict.
        return f.sizeUSD !== null && f.vintageYear !== null &&
               !f.combinedVehicles && f.status === 'closed' && !f.disputed;
      }).sort(function (a, b) { return a.vintageYear - b.vintageYear; });
      if (usable.length < 2) return;
      // Only compare within the same fund SERIES. Stripping the numeral
      // leaves the family name, so "Sinovation Fund V" pairs with
      // "Sinovation Fund IV" and not with "RMB Fund III", and NEA's
      // flagship is never measured against its opportunity vehicle.
      const family = {};
      usable.forEach(function (f) {
        // Prefer the series stated in the data. The name-stripping below is
        // only a fallback for records captured before that field existed.
        const key = f.series ? String(f.series).toLowerCase() : f.name
          .replace(/\(\s*\d{4}[^)]*\)/gi, ' ')
          .replace(/\b(19|20)\d{2}\b/g, ' ')
          .replace(/\b[IVXLC]+\b/g, ' ')
          .replace(/\b\d+\b/g, ' ')
          .replace(/\b(one|two|three|four|five|six|seven|eight|nine|ten)\b/gi, ' ')
          .replace(/\s+/g, ' ').trim().toLowerCase();
        (family[key] = family[key] || []).push(f);
      });
      // Check EVERY series with 2+ usable funds, not just whichever is
      // most recent. A firm running several concurrent fund families
      // (a16z alone has flagship, growth, crypto, bio-health, American
      // Dynamism and Games) has a real, comparable step in each one -
      // picking only the newest family silently discarded the rest.
      Object.keys(family).forEach(function (seriesKey) {
        const series = family[seriesKey];
        if (series.length < 2) return;
        const latest = series[series.length - 1];
        const prev = series[series.length - 2];
        if (latest.vintageYear === prev.vintageYear) return; // same vintage, not a step
        // Only compare CONSECUTIVE funds. monashees has Fund I (2011) and
        // Fund VIII (2018) on record with II-VII missing; "Fund VIII is 4.7x
        // Fund I" reads as a step between successive funds and is not one.
        // When both ordinals are known and differ by more than one, the
        // funds in between are missing and the comparison is withheld.
        const nA = pa_fundOrdinal(prev.name), nB = pa_fundOrdinal(latest.name);
        if (nA !== null && nB !== null && Math.abs(nB - nA) > 1) return;
        const ratio = latest.sizeUSD / prev.sizeUSD;
        if (ratio < cfg.minFundStepRatio && ratio > 1 / cfg.minFundStepRatio) return;
        const up = ratio > 1;
        const lowConf = latest.confidence === 'low' || prev.confidence === 'low';
        alerts.push({
          id: pa_fingerprint(['fund_step', slug, prev.name, latest.name, Math.round(ratio * 100)]),
          type: 'fund_step',
          firmId: slug,
          sector: null,
          subject: firm.name,
          metric: 'size of the most recent recorded fund against the one before it, within the same fund family',
          previousValue: prev.sizeUSD,
          currentValue: latest.sizeUSD,
          absoluteChange: latest.sizeUSD - prev.sizeUSD,
          percentChange: pa_round((ratio - 1) * 100, 1),
          unit: 'USD',
          period: prev.vintageYear + ' to ' + latest.vintageYear,
          direction: up ? 'up' : 'down',
          generatedAt: generatedAt,
          confidence: pa_round(lowConf ? 0.4 : (rec.complete ? 0.9 : 0.65), 3),
          score: pa_score({
            magnitude: up ? ratio : 1 / ratio, magnitudeCeiling: 4,
            sample: usable.length, sampleCeiling: 10,
            confidence: lowConf ? 0.4 : (rec.complete ? 0.9 : 0.65),
            recency: Math.max(0, Math.min(1, 1 - (nowYear - latest.vintageYear) / 8))
          }),
          evidence: {
            firm: firm.name,
            series: seriesKey,
            from: { name: prev.name, vintageYear: prev.vintageYear, sizeUSD: prev.sizeUSD, source: prev.source },
            to: { name: latest.name, vintageYear: latest.vintageYear, sizeUSD: latest.sizeUSD, source: latest.source },
            recordedFunds: rec.funds.length,
            listComplete: rec.complete,
            note: (rec.complete
              ? 'Compares the two most recent sized, single-vehicle funds on record in the "' + seriesKey + '" family.'
              : 'This firm\'s recorded fund list is known to be incomplete, so an intervening fund in the "' + seriesKey + '" family may exist that is not counted here.') +
              (lowConf ? ' At least one figure rests on a single secondary source.' : '')
          }
        });
      });
    });

    /* --- 9. FUND ANNOUNCEMENTS ---
       One firm, one recently announced fund, at the size it actually
       published. This is an EVENT, not a comparison. fund_step already
       reports fund-over-fund growth and fund_year_activity counts closes
       per year across the board; neither tells a founder "this firm just
       raised and has capital to deploy now", which is the thing that
       changes whether they should be in the room.

       previousValue stays null deliberately. A fund close has no "before" -
       inventing one would turn an event into a trend. */
    Object.keys(FUNDS).forEach(function (slug) {
      const firm = firmBySlug[slug];
      const rec = FUNDS[slug];
      if (!firm || !rec || !Array.isArray(rec.funds)) return;

      /* announcedDate is "YYYY-MM" or "YYYY-MM-DD". Month precision
         resolves to the first of the month, which can only make a fund
         look older than it is - never newer, and so never pulls one into
         the window that belongs outside it. */
      const dated = rec.funds.filter(function (f) {
        return f.announcedDate && f.sizeUSD !== null &&
               f.status === 'closed' && !f.disputed && !f.combinedVehicles &&
               f.confidence !== 'low';
      }).map(function (f) {
        const iso = f.announcedDate.length === 7 ? f.announcedDate + '-01' : f.announcedDate;
        return { fund: f, ms: Date.parse(iso + 'T00:00:00Z') };
      }).filter(function (x) { return !isNaN(x.ms); });

      if (!dated.length) return;
      dated.sort(function (a, b) { return b.ms - a.ms; });

      const newest = dated[0];
      const ageDays = Math.floor((Date.parse(generatedAt) - newest.ms) / 86400000);
      if (ageDays < 0 || ageDays > cfg.fundAnnouncementDays) return;

      const f = newest.fund;
      const conf = f.confidence === 'high' ? (rec.complete ? 0.95 : 0.85) : 0.65;

      alerts.push({
        id: pa_fingerprint(['fund_announcements', slug, f.name || f.series, f.sizeUSD]),
        type: 'fund_announcements',
        firmId: slug,
        sector: null,
        subject: firm.name,
        metric: 'size of the most recently announced fund on record',
        previousValue: null,
        currentValue: f.sizeUSD,
        absoluteChange: null,
        percentChange: null,
        unit: 'USD',
        period: f.announcedDate,
        direction: 'flat',
        generatedAt: generatedAt,
        confidence: pa_round(conf, 3),
        score: pa_score({
          // $2B is a ceiling, not a maximum: past it, one fund being larger
          // than another stops changing what it means for a founder.
          magnitude: f.sizeUSD / 1e9, magnitudeCeiling: 2,
          sample: 1, sampleCeiling: 1,
          confidence: conf,
          recency: Math.max(0, 1 - ageDays / cfg.fundAnnouncementDays)
        }),
        evidence: {
          firm: firm.name,
          fundName: f.name,
          series: f.series,
          vintageYear: f.vintageYear,
          announcedDate: f.announcedDate,
          sizeUSD: f.sizeUSD,
          originalCurrency: f.originalCurrency,
          sizeOriginal: f.sizeOriginal,
          vehicleType: f.vehicleType,
          sourceConfidence: f.confidence,
          source: f.source,
          listComplete: rec.complete,
          note: 'Announced ' + f.announcedDate + ', ' + ageDays + ' days ago. Size as published; ' +
                (f.originalCurrency
                  ? 'reported in ' + f.originalCurrency + ', shown here as the published USD figure.'
                  : 'no currency conversion was performed.') +
                (rec.complete ? '' : ' This firm\'s recorded fund list is known to be incomplete, so a more recent close may exist that is not on record.')
        }
      });
    });

    /* --- 10. FUNDRAISING ACTIVITY BY YEAR ---
       A floor, not a total: counts firms with a RECORDED close, across
       the 17 firms that have fund records at all. Never presented as
       market-wide. */
    const byYear = {};
    Object.keys(FUNDS).forEach(function (slug) {
      (FUNDS[slug].funds || []).forEach(function (f) {
        if (f.vintageYear === null || f.vintageYear < cfg.fundYearWindowFrom) return;
        (byYear[f.vintageYear] = byYear[f.vintageYear] || {})[slug] = 1;
      });
    });
    const coveredFirms = Object.keys(FUNDS).length;
    Object.keys(byYear).forEach(function (year) {
      const slugsIn = Object.keys(byYear[year]);
      if (slugsIn.length < cfg.minFundsForYearAlert) return;
      alerts.push({
        id: pa_fingerprint(['fund_year_activity', year, slugsIn.length]),
        type: 'fund_year_activity',
        firmId: null,
        sector: null,
        subject: year,
        metric: 'firms with a recorded fund close in the year',
        previousValue: null,
        currentValue: slugsIn.length,
        absoluteChange: null,
        percentChange: null,
        unit: 'firms',
        period: String(year),
        direction: 'flat',
        generatedAt: generatedAt,
        confidence: pa_round(Math.min(1, slugsIn.length / coveredFirms), 3),
        score: pa_score({
          magnitude: slugsIn.length, magnitudeCeiling: 10,
          sample: slugsIn.length, sampleCeiling: coveredFirms,
          confidence: Math.min(1, slugsIn.length / coveredFirms),
          recency: Math.max(0, Math.min(1, 1 - (nowYear - Number(year)) / 6))
        }),
        evidence: {
          year: Number(year),
          firms: slugsIn.map(function (s) { return (firmBySlug[s] || {}).name || s; }),
          coverage: coveredFirms + ' firms currently have any fund history recorded',
          note: 'A floor across firms with recorded fund history, not a market-wide count. ' +
                'Firms without fund records cannot contribute to this number.'
        }
      });
    });
  }

  /* --- 10. SECTOR BREADTH ACROSS FIRMS WITH DEAL COVERAGE ---
     "N of the M firms with deal coverage have a disclosed investment
     in sector X."

     This is the ONLY safe shape for the current deal sample. Deals
     were collected as each firm's most recent N, which forbids two
     things this alert therefore never does:
       - it does not compare periods (the recency skew is an artifact
         of the sampling rule, not a trend in the market)
       - it does not compare firms by volume (every firm contributed
         the same cap, so counting rows per firm measures the cap)

     What survives is a presence claim over an explicit denominator,
     counting each firm at most once per sector no matter how many
     deals it did there. It is a floor: a firm with no deal coverage
     cannot contribute, and an unannounced deal cannot either. */
  const DEALS = typeof FIRM_DEALS !== 'undefined' && Array.isArray(FIRM_DEALS) ? FIRM_DEALS : null;
  const DMAP = typeof DEAL_SECTOR_MAP !== 'undefined' && DEAL_SECTOR_MAP ? DEAL_SECTOR_MAP : {};
  const TAX = typeof SECTOR_MAP !== 'undefined' && SECTOR_MAP ? SECTOR_MAP : {};
  if (!DEALS || !DEALS.length) {
    skip('sector_breadth', 'FIRM_DEALS not loaded');
  } else {
    const coveredSlugs = {};
    DEALS.forEach(function (d) { if (d.firmSlug) coveredSlugs[d.firmSlug] = 1; });
    const dealFirmCount = Object.keys(coveredSlugs).length;

    // firm -> sector presence, deduped. One firm, one vote per sector.
    const firmsBySector = {};
    const companiesBySector = {};
    DEALS.forEach(function (d) {
      const buckets = DMAP[d.sector];
      if (!Array.isArray(buckets) || !buckets.length) return;
      // An undated row cannot support a dated claim, and would render
      // the period as "null to null". Drop it rather than print it.
      if (!d.announcedDate || !/^\d{4}/.test(String(d.announcedDate))) return;
      if (!d.firmSlug) return;
      buckets.forEach(function (b) {
        (firmsBySector[b] = firmsBySector[b] || {})[d.firmSlug] = 1;
        (companiesBySector[b] = companiesBySector[b] || []).push(d);
      });
    });

    Object.keys(firmsBySector).forEach(function (bucket) {
      const slugsIn = Object.keys(firmsBySector[bucket]);
      if (slugsIn.length < cfg.minFirmsForSectorBreadth) return;
      // Guard: near-universal sectors are true but not informative.
      if (slugsIn.length / dealFirmCount > cfg.maxSectorBreadthShare) return;

      const label = (TAX[bucket] && TAX[bucket].label) || bucket;
      const rows = companiesBySector[bucket];
      const dates = rows.map(function (r) { return r.announcedDate; }).sort();
      const share = slugsIn.length / dealFirmCount;

      alerts.push({
        id: pa_fingerprint(['sector_breadth', bucket, slugsIn.length, dealFirmCount]),
        type: 'sector_breadth',
        firmId: null,
        sector: label,
        subject: label,
        metric: 'firms with a disclosed investment in the sector',
        previousValue: null,
        currentValue: slugsIn.length,
        absoluteChange: null,
        percentChange: null,
        unit: 'firms',
        period: dates[0] + ' to ' + dates[dates.length - 1],
        direction: 'flat',
        generatedAt: generatedAt,
        confidence: pa_round(share, 3),
        score: pa_score({
          magnitude: slugsIn.length, magnitudeCeiling: 8,
          sample: dealFirmCount, sampleCeiling: 40,
          confidence: share,
          recency: 1
        }),
        evidence: {
          sector: label,
          firms: slugsIn.map(function (s) { return (firmBySlug[s] || {}).name || s; }),
          deals: rows.map(function (r) {
            return {
              firm: (firmBySlug[r.firmSlug] || {}).name || r.firmSlug,
              company: r.company,
              date: r.announcedDate,
              role: r.role,
              rawSector: r.sector,
              source: r.sourceUrl
            };
          }),
          coverage: dealFirmCount + ' firms currently have any deal records',
          note: 'A floor, not a total. Counts each firm once regardless of how ' +
                'many deals it did in the sector, and only firms with deal ' +
                'coverage can contribute. Deals were sampled as each firm\'s most ' +
                'recent disclosed rounds, so this number must not be read as a ' +
                'rate, a trend, or a market share.'
        }
      });
    });
  }

  /* --- 11. RECENTLY DISCLOSED INVESTMENTS ---
     "Firm X has at least N disclosed investments announced in the
     last 90 days."

     Two properties make this safe despite the sampling caps:

       1. IT IS A FLOOR, AND THE COPY SAYS SO. Each firm contributed
          at most a fixed number of most-recent deals, so a firm whose
          entire sample lands inside the window is CENSORED - its true
          count is unknown and higher. atCap flags exactly that.

       2. THE BIAS RUNS IN THE SAFE DIRECTION. A firm that publishes
          no news is under-counted and simply fails the threshold. Poor
          press coverage can only hide a firm from this alert, never
          invent activity for one. Every counted round carries its own
          source URL.

     The staleness guard is the load-bearing part. Deal data arrives in
     hand-assembled batches, so "the last 90 days" silently becomes a
     lie as the file ages: counts collapse toward zero and the busiest
     firms read as dormant. Rather than degrade, the type withholds
     entirely once the newest deal on file passes maxDealDataAgeDays. */
  if (!DEALS || !DEALS.length) {
    skip('new_investments', 'FIRM_DEALS not loaded');
  } else {
    // Only full ISO dates can support a day-precision window. A
    // month-precision row cannot say which side of a cutoff it falls on.
    // Future dates are dropped rather than trusted: a typo'd year would
    // both inflate the count AND push asOf forward, which would make
    // ageDays negative and silently disable the staleness guard below.
    const nowMs = Date.parse(generatedAt);
    const dated = DEALS.filter(function (d) {
      if (!d.firmSlug || !d.announcedDate) return false;
      if (!/^\d{4}-\d{2}-\d{2}$/.test(String(d.announcedDate))) return false;
      return Date.parse(d.announcedDate + 'T00:00:00Z') <= nowMs;
    });
    const asOf = dated.reduce(function (m, d) {
      return !m || d.announcedDate > m ? d.announcedDate : m;
    }, null);
    const ageDays = asOf
      ? Math.floor((Date.parse(generatedAt) - Date.parse(asOf + 'T00:00:00Z')) / 86400000)
      : null;

    if (!dated.length) {
      skip('new_investments', 'no deal rows carry a full day-precision date');
    } else if (ageDays > cfg.maxDealDataAgeDays) {
      skip('new_investments', 'deal data is ' + ageDays + ' days stale (newest ' + asOf +
        '); a ' + cfg.newInvestmentWindowDays + '-day recency claim needs data no older than ' +
        cfg.maxDealDataAgeDays + ' days');
    } else {
      const cutoffMs = Date.parse(generatedAt) - cfg.newInvestmentWindowDays * 86400000;
      const totalBySlug = {};
      DEALS.forEach(function (d) {
        if (d.firmSlug) totalBySlug[d.firmSlug] = (totalBySlug[d.firmSlug] || 0) + 1;
      });
      const inWindow = {};
      dated.forEach(function (d) {
        if (Date.parse(d.announcedDate + 'T00:00:00Z') >= cutoffMs) {
          (inWindow[d.firmSlug] = inWindow[d.firmSlug] || []).push(d);
        }
      });

      Object.keys(inWindow).forEach(function (slug) {
        const rows = inWindow[slug];
        if (rows.length < cfg.minNewInvestments) return;
        const firm = firmBySlug[slug];
        if (!firm) return;
        // Censored: the window swallowed every row this firm has, so the
        // cap - not the firm - decided the number.
        const atCap = rows.length >= (totalBySlug[slug] || 0);

        /* The 90-day window can reach past the end of the uniformly swept
           window and into the extension, which was searched at a different
           intensity - measured per firm as extensionRateRatio, median about
           1.8 and as high as 7. The count stays a true floor either way,
           but a reader comparing two firms deserves to know when part of
           one firm's count comes from a period that was worked harder. */
        const cvg = (typeof DEAL_COVERAGE !== 'undefined' && DEAL_COVERAGE)
          ? DEAL_COVERAGE[slug] : null;
        const mixedEffort = !!(cvg && cvg.completeTo &&
          rows.some(function (d) { return d.announcedDate > cvg.completeTo; }));
        const effortRatio = cvg ? cvg.extensionRateRatio : null;
        rows.sort(function (a, b) { return a.announcedDate < b.announcedDate ? 1 : -1; });

        alerts.push({
          id: pa_fingerprint(['new_investments', slug, cfg.newInvestmentWindowDays, rows.length]),
          type: 'new_investments',
          firmId: slug,
          sector: null,
          subject: firm.name,
          metric: 'disclosed investments announced in the last ' + cfg.newInvestmentWindowDays + ' days',
          previousValue: null,
          currentValue: rows.length,
          absoluteChange: null,
          percentChange: null,
          unit: 'investments',
          period: 'last ' + cfg.newInvestmentWindowDays + ' days',
          direction: 'up',
          generatedAt: generatedAt,
          // A censored count is a weaker statement about the firm, not a
          // less reliable one - every row is still individually sourced.
          confidence: atCap ? 0.6 : 0.9,
          score: pa_score({
            magnitude: rows.length, magnitudeCeiling: 6,
            sample: totalBySlug[slug] || rows.length, sampleCeiling: 6,
            confidence: atCap ? 0.6 : 0.9,
            recency: 1
          }),
          evidence: {
            firm: firm.name,
            windowDays: cfg.newInvestmentWindowDays,
            dataAsOf: asOf,
            dataAgeDays: ageDays,
            atCap: atCap,
            mixedEffort: mixedEffort,
            effortRatio: effortRatio,
            comparableThrough: cvg ? cvg.completeTo : null,
            deals: rows.map(function (r) {
              return {
                firm: firm.name,
                company: r.company,
                date: r.announcedDate,
                role: r.role,
                rawSector: r.sector,
                source: r.sourceUrl
              };
            }),
            note: (mixedEffort
              ? 'MIXED COVERAGE: part of this window falls after ' + cvg.completeTo +
                ', in a research pass that returned deals at ' +
                (effortRatio ? 'about ' + effortRatio + 'x' : 'a different') +
                " this firm's earlier rate. Same sources, more attention per day. " +
                'The count remains a floor, but do not rank firms on it across that boundary. '
              : '') +
              (atCap
              ? 'AT CAP: every deal on file for this firm falls inside the window, so ' +
                'the true count is higher than shown and cannot be determined from this ' +
                'dataset. Read it as "at least ' + rows.length + '". '
              : '') +
              'A floor, not a total. Only disclosed, dated and individually sourced ' +
              'rounds are counted; unannounced rounds and rounds this firm did not ' +
              'publicise are invisible here. Deal data as of ' + asOf + '.'
          }
        });
      });
    }
  }

  /* --- SECTOR EXPOSURE CHANGE (per firm) ---
     How a firm's sector mix moved between the first and second half
     of a window that was actually swept for it.

     Three things had to be true before this could exist, and all
     three are properties of DEAL_COVERAGE rather than of row count:

       1. Every deal carries a dated sector.
       2. The window was researched with ONE method throughout, so a
          difference between halves is not a difference in effort.
          This is why the gate is the declared window and not
          complete:true, which no venture firm's public record can
          support - see the header of data-deals.js.
       3. Enough deals in BOTH halves. A share computed from three
          deals moves 33 points when one lands either side of the
          cut, which is why minDealsPerExposurePeriod exists.

     The denominator is DEALS, not sector mentions. One deal tagged
     "AI Drug Discovery" touches both ai and healthcare; counting
     mentions would let a single deal move two buckets and inflate
     every share. Each bucket is scored as "share of this firm's
     deals that touched it", which is a proper proportion even
     though the buckets do not sum to 100. */
  const COVERAGE = typeof DEAL_COVERAGE !== 'undefined' && DEAL_COVERAGE ? DEAL_COVERAGE : null;
  if (!DEALS) {
    skip('sector_exposure_change', 'FIRM_DEALS not loaded');
  } else if (!COVERAGE) {
    skip('sector_exposure_change', 'DEAL_COVERAGE not loaded - a window cannot be established');
  } else if (!DMAP || !Object.keys(DMAP).length) {
    skip('sector_exposure_change', 'DEAL_SECTOR_MAP not loaded');
  } else {
    Object.keys(COVERAGE).forEach(function (slug) {
      const rec = COVERAGE[slug];
      const firm = firmBySlug[slug];
      if (!firm || !rec || !rec.completeFrom || !rec.completeTo) return;

      const fromMs = Date.parse(rec.completeFrom + 'T00:00:00Z');
      const toMs = Date.parse(rec.completeTo + 'T00:00:00Z');
      if (isNaN(fromMs) || isNaN(toMs) || toMs <= fromMs) return;
      const midMs = fromMs + Math.floor((toMs - fromMs) / 2);

      const mine = DEALS.filter(function (d) {
        if (d.firmSlug !== slug || !d.announcedDate) return false;
        const t = Date.parse(d.announcedDate + 'T00:00:00Z');
        return !isNaN(t) && t >= fromMs && t <= toMs;
      });

      const early = mine.filter(function (d) { return Date.parse(d.announcedDate + 'T00:00:00Z') < midMs; });
      const late = mine.filter(function (d) { return Date.parse(d.announcedDate + 'T00:00:00Z') >= midMs; });
      if (early.length < cfg.minDealsPerExposurePeriod) return;
      if (late.length < cfg.minDealsPerExposurePeriod) return;

      /* A deal counts once per bucket it touches, never twice for the
         same bucket even when two of its labels map there. */
      function buckets(list) {
        const counts = {};
        list.forEach(function (d) {
          const mapped = d.sector ? (DMAP[d.sector] || []) : [];
          const seen = {};
          mapped.forEach(function (b) {
            if (seen[b]) return;
            seen[b] = 1;
            counts[b] = (counts[b] || 0) + 1;
          });
        });
        return counts;
      }
      const eC = buckets(early), lC = buckets(late);
      const allBuckets = {};
      Object.keys(eC).forEach(function (b) { allBuckets[b] = 1; });
      Object.keys(lC).forEach(function (b) { allBuckets[b] = 1; });

      Object.keys(allBuckets).forEach(function (b) {
        const x1 = eC[b] || 0, n1 = early.length;
        const x2 = lC[b] || 0, n2 = late.length;
        const p1 = (x1 / n1) * 100, p2 = (x2 / n2) * 100;
        const delta = p2 - p1;
        if (Math.abs(delta) < cfg.minExposureShiftPoints) return;
        /* pa_proportionConfidence is a normal approximation, valid only
           when the expected counts are big enough. At 3-of-17 against
           0-of-19 the pooled expectation is about 1.5 per half, and the
           test cheerfully returns 0.94 for what is a three-deal move.
           The textbook floor is an expected count of 5 on BOTH sides of
           BOTH halves. Without it this rule reports noise with a
           confident number bolted to it, which is worse than silence. */
        const pooled = (x1 + x2) / (n1 + n2);
        if (n1 * pooled < 5 || n2 * pooled < 5) return;
        if (n1 * (1 - pooled) < 5 || n2 * (1 - pooled) < 5) return;

        const conf = pa_proportionConfidence(x1, n1, x2, n2);
        if (conf < cfg.minExposureConfidence) return;

        const label = (TAX && TAX[b] && TAX[b].label) ? SECTORS[b].label : b;
        const halfOne = rec.completeFrom + ' to ' + new Date(midMs - 86400000).toISOString().slice(0, 10);
        const halfTwo = new Date(midMs).toISOString().slice(0, 10) + ' to ' + rec.completeTo;

        alerts.push({
          id: pa_fingerprint(['sector_exposure_change', slug, b, pa_round(p1, 1), pa_round(p2, 1)]),
          type: 'sector_exposure_change',
          firmId: slug,
          sector: label,
          subject: firm.name,
          metric: 'share of this firm\'s disclosed deals that touched ' + label,
          previousValue: pa_round(p1, 1),
          currentValue: pa_round(p2, 1),
          absoluteChange: pa_round(delta, 1),
          percentChange: p1 > 0 ? pa_round((delta / p1) * 100, 1) : null,
          unit: 'percentage points',
          period: halfOne + ' vs ' + halfTwo,
          direction: delta > 0 ? 'up' : 'down',
          generatedAt: generatedAt,
          confidence: pa_round(conf, 3),
          score: pa_score({
            magnitude: Math.abs(delta), magnitudeCeiling: 40,
            sample: Math.min(n1, n2), sampleCeiling: 25,
            confidence: conf,
            recency: 1
          }),
          evidence: {
            firm: firm.name,
            bucket: b,
            firstHalf: { window: halfOne, deals: n1, touching: x1, share: pa_round(p1, 1) },
            secondHalf: { window: halfTwo, deals: n2, touching: x2, share: pa_round(p2, 1) },
            coverageMethod: rec.method || null,
            coverageComplete: rec.complete === true,
            note: 'Both halves sit inside one researched window swept with a single method, which is what makes them comparable. ' +
                  'Counts are floors: no venture firm publishes an enumerable log of every round it joins, so ' +
                  (rec.complete === true ? '' : 'this coverage is explicitly not exhaustive, and ') +
                  'undisclosed rounds are absent from both halves alike.'
          }
        });
      });
    });
  }


  /* --- 12. CO-INVESTOR NETWORK REACH ---
     "Firm X has co-invested with N of the other M firms that have
     deal coverage."

     Built from coInvestors[], which stores names exactly as each
     source wrote them ("Nvidia" / "NVIDIA" / "Nvidia Ventures").
     COINVESTOR_ALIASES is the only sanctioned bridge from those raw
     strings to firm slugs, and it maps ONLY firms that have deal
     rows of their own - so every edge is checkable from both sides
     and the denominator stays honest.

     Reach is a SET of firms, which is what makes this safe where a
     pairwise count would not be. The same round is frequently
     recorded twice, once under each participating firm, and a naive
     pair counter double-counts it; set membership collapses that
     automatically. (Measured: naive pair counts overstated by ~40%
     on this data.)

     It is a floor. An edge exists only where a source actually named
     the other firm, so a quiet syndicate partner is invisible, and
     firms without deal coverage cannot contribute at all. */
  const ALIASES = typeof COINVESTOR_ALIASES !== 'undefined' && COINVESTOR_ALIASES ? COINVESTOR_ALIASES : null;
  if (!DEALS || !DEALS.length) {
    skip('coinvestor_network', 'FIRM_DEALS not loaded');
  } else if (!ALIASES || !Object.keys(ALIASES).length) {
    skip('coinvestor_network', 'COINVESTOR_ALIASES not loaded; raw co-investor strings cannot be joined');
  } else {
    const coveredSet = {};
    DEALS.forEach(function (d) { if (d.firmSlug) coveredSet[d.firmSlug] = 1; });
    const coveredCount = Object.keys(coveredSet).length;

    const reach = {};      // slug -> { otherSlug: 1 }
    const viaRound = {};   // slug -> { otherSlug: [ {company, date} ] }
    DEALS.forEach(function (d) {
      if (!d.firmSlug || !Array.isArray(d.coInvestors)) return;
      d.coInvestors.forEach(function (raw) {
        if (typeof raw !== 'string') return;
        const other = ALIASES[raw.trim().toLowerCase()];
        // Both endpoints must have deal coverage, and self-edges are
        // dropped (a firm naming its own vehicle, e.g. "DCVC Bio").
        if (!other || other === d.firmSlug || !coveredSet[other]) return;
        (reach[d.firmSlug] = reach[d.firmSlug] || {})[other] = 1;
        (reach[other] = reach[other] || {})[d.firmSlug] = 1;
        const rec = { company: d.company, date: d.announcedDate, source: d.sourceUrl };
        ((viaRound[d.firmSlug] = viaRound[d.firmSlug] || {})[other] =
          (viaRound[d.firmSlug][other] || [])).push(rec);
        ((viaRound[other] = viaRound[other] || {})[d.firmSlug] =
          (viaRound[other][d.firmSlug] || [])).push(rec);
      });
    });

    Object.keys(reach).forEach(function (slug) {
      const partners = Object.keys(reach[slug]);
      if (partners.length < cfg.minCoinvestorReach) return;
      const firm = firmBySlug[slug];
      if (!firm) return;
      // Denominator excludes the firm itself.
      const denom = Math.max(1, coveredCount - 1);
      const share = Math.min(1, partners.length / denom);

      alerts.push({
        id: pa_fingerprint(['coinvestor_network', slug, partners.length, coveredCount]),
        type: 'coinvestor_network',
        firmId: slug,
        sector: null,
        subject: firm.name,
        metric: 'other covered firms this firm has co-invested with',
        previousValue: null,
        currentValue: partners.length,
        absoluteChange: null,
        percentChange: null,
        unit: 'firms',
        period: 'all recorded deals',
        direction: 'flat',
        generatedAt: generatedAt,
        confidence: pa_round(share, 3),
        score: pa_score({
          magnitude: partners.length, magnitudeCeiling: 12,
          sample: coveredCount, sampleCeiling: 40,
          confidence: share,
          recency: 1
        }),
        evidence: {
          firm: firm.name,
          // NOT `partners` - alerts-ui.js already owns that key for
          // people objects ({name,title,joinedYear}) and would render
          // this list of firm-name strings as a row of empty fields.
          coinvestors: partners.map(function (s) { return (firmBySlug[s] || {}).name || s; }).sort(),
          coverage: coveredCount + ' firms currently have any deal records',
          // One representative round per partner - not a slice, so the
          // rendered list always accounts for every firm in the count.
          deals: partners.map(function (s) {
            const r = (viaRound[slug][s] || [])[0] || {};
            return {
              firm: (firmBySlug[s] || {}).name || s,
              company: r.company,
              date: r.date,
              role: null,
              source: r.source
            };
          }),
          note: 'A floor, not a total. An edge exists only where a source explicitly ' +
                'named the other firm in the same round, and only firms that have deal ' +
                'records of their own can be counted - so this understates real syndicate ' +
                'breadth. Co-investor names are stored verbatim and joined through an ' +
                'alias table; unmapped names are excluded rather than guessed.'
        }
      });
    });
  }

  /* ---------- copy generation (spec §8) ----------
     Templates interpolate computed values only. No template
     asserts a cause, an intention or a trend beyond the number. */
  alerts.forEach(function (a) {
    const dir = a.direction === 'up' ? 'rose' : 'fell';
    if (a.type === 'sector_exposure_change') {
      const dir = a.absoluteChange > 0 ? 'rose' : 'fell';
      const e = a.evidence;
      a.headline = a.subject + "'s " + a.sector + ' exposure ' + dir + ' ' +
        Math.abs(a.absoluteChange) + ' points';
      /* State both denominators. "24% to 48%" invites the reader to
         assume a large book; "5 of 21 deals, then 10 of 21" shows what
         the number actually rests on. */
      a.description = e.firstHalf.touching + ' of ' + e.firstHalf.deals + ' disclosed deals touched ' +
        a.sector + ' in ' + e.firstHalf.window + ' (' + a.previousValue + '%), against ' +
        e.secondHalf.touching + ' of ' + e.secondHalf.deals + ' in ' + e.secondHalf.window +
        ' (' + a.currentValue + '%). Both halves come from one researched window, so this is a ' +
        'change in the firm, not a change in how hard anyone looked. Counts are floors.';
    } else if (a.type === 'cohort_sector_shift' || a.type === 'cohort_geography_shift' || a.type === 'cohort_stage_shift') {
      const what = a.type === 'cohort_sector_shift' ? a.subject
        : a.type === 'cohort_geography_shift' ? a.subject + ' headquarters'
          : a.subject + ' investing';
      a.title = what + ' ' + dir + ' ' + Math.abs(a.absoluteChange) + ' points among newer firms';
      a.description = a.type === 'cohort_geography_shift'
        ? a.currentValue + '% of firms founded ' + cfg.recentCohortFrom + ' or later are based in ' + a.subject +
          ', against ' + a.previousValue + '% of those founded ' + cfg.priorCohortFrom + '–' + cfg.priorCohortTo + '.'
        : a.subject + ' accounts for ' + a.currentValue + '% of all ' +
          (a.type === 'cohort_sector_shift' ? 'sector' : 'stage') + ' tags among firms founded ' +
          cfg.recentCohortFrom + ' or later, against ' + a.previousValue + '% among those founded ' +
          cfg.priorCohortFrom + '–' + cfg.priorCohortTo + '.';
    } else if (a.type === 'portfolio_overlap') {
      a.title = a.currentValue + ' firms hold ' + a.subject;
      a.description = a.subject + ' appears in the recorded public holdings of ' + a.currentValue + ' firms in the dataset.';
    } else if (a.type === 'partner_momentum') {
      a.title = a.subject + ' has ' + a.currentValue + ' partners who joined since ' + cfg.partnerHireWindowFrom;
      a.description = a.currentValue + ' of the tracked partner profiles at ' + a.subject +
        ' record a join year of ' + cfg.partnerHireWindowFrom + ' or later.';
    } else if (a.type === 'snapshot_partner_arrival') {
      const n = Math.abs(a.absoluteChange);
      a.title = a.subject + ' added ' + n + ' ' + (n === 1 ? 'person' : 'people') + ' to its team page';
      a.description = n + ' ' + (n === 1 ? 'name' : 'names') + ' appear on ' + a.subject +
        '’s team page that were not there on ' + a.evidence.capturedOn[0] + '.';
    } else if (a.type === 'snapshot_partner_departure') {
      const n = Math.abs(a.absoluteChange);
      a.title = a.subject + ' removed ' + n + ' ' + (n === 1 ? 'person' : 'people') + ' from its team page';
      a.description = n + ' ' + (n === 1 ? 'name' : 'names') + ' listed on ' + a.subject +
        '’s team page on ' + a.evidence.capturedOn[0] + ' are no longer published.';
    } else if (a.type === 'fund_step') {
      const usd = function (n) {
        return n >= 1e9 ? '$' + pa_round(n / 1e9, 2) + 'B' : '$' + Math.round(n / 1e6) + 'M';
      };
      const mult = a.currentValue / a.previousValue;
      // Don't say "Sinovation Ventures's Sinovation Fund V" - if the fund
      // name already carries the firm name, drop the possessive. And a
      // firm ending in s takes a bare apostrophe.
      // Some funds are sized and dated but were never publicly named
      // (Third Rock's 2013/2016/2019 vintages). Fall back to the year
      // rather than printing "null".
      const label = function (f) { return f.name || ('its ' + f.vintageYear + ' fund'); };
      a.evidence.from.displayName = label(a.evidence.from);
      a.evidence.to.displayName = label(a.evidence.to);
      const firstWord = a.subject.split(' ')[0].toLowerCase();
      const owns = !!a.evidence.to.name && a.evidence.to.name.toLowerCase().indexOf(firstWord) === 0;
      const prefix = owns ? '' : a.subject + (/s$/i.test(a.subject) ? '’ ' : '’s ');
      // A fall must never be phrased as a multiple of growth.
      a.title = prefix + a.evidence.to.displayName + (mult >= 1
        ? ' is ' + pa_round(mult, 1) + '× the size of ' + a.evidence.from.displayName
        : ' is ' + Math.round((1 - mult) * 100) + '% smaller than ' + a.evidence.from.displayName);
      if (owns) a.title = a.subject + ': ' + a.title;
      a.description = a.evidence.from.displayName + ' closed at ' + usd(a.previousValue) + ' in ' +
        a.evidence.from.vintageYear + '; ' + a.evidence.to.displayName + ' closed at ' + usd(a.currentValue) +
        ' in ' + a.evidence.to.vintageYear + '.';
    } else if (a.type === 'fund_announcements') {
      const usd = a.currentValue >= 1e9
        ? '$' + pa_round(a.currentValue / 1e9, 2) + 'B'
        : '$' + Math.round(a.currentValue / 1e6) + 'M';
      const named = a.evidence.fundName || null;
      /* "Eclipse Ventures closed Eclipse Fund VI" repeats itself. Matching
         the FULL firm name misses it, because the fund starts with only the
         first word - so compare on that, and let the fund name lead the
         sentence instead. The fund's real name is never shortened to avoid
         the repetition: "Eclipse Fund VI" is what it is called. Words under
         three characters are ignored, since a firm like 3one4 would
         otherwise match far too much. */
      const firmWord = a.subject.split(/[\s,.]+/)[0].toLowerCase();
      const carriesFirm = !!named && firmWord.length >= 3 &&
                          named.toLowerCase().indexOf(firmWord) === 0;
      a.headline = (named
        ? (carriesFirm ? named + ' closed' : a.subject + ' closed ' + named)
        : a.subject + ' closed a new fund') + ' at ' + usd;
      a.description = a.subject + ' announced ' + (named || 'a new fund') + ' at ' + usd +
        ' in ' + a.evidence.announcedDate + '. That is the figure published at close, not an estimate' +
        (a.evidence.listComplete ? '.' : ", and this firm's recorded fund list is known to be incomplete.");
    } else if (a.type === 'fund_year_activity') {
      a.title = a.currentValue + ' firms recorded a fund close in ' + a.subject;
      a.description = a.currentValue + ' of the ' + Object.keys(FUNDS || {}).length +
        ' firms with fund history on file closed at least one vehicle in ' + a.subject + '.';
    } else if (a.type === 'new_investments') {
      // "at least" is not hedging here - it is the literal reading of a
      // capped sample, and the title must not imply a complete count.
      a.title = a.subject + ' announced at least ' + a.currentValue +
        ' investments in ' + a.evidence.windowDays + ' days';
      a.description = 'At least ' + a.currentValue + ' disclosed investments by ' +
        a.subject + ' were announced in the last ' + a.evidence.windowDays + ' days' +
        (a.evidence.atCap
          ? ', which is every deal on file for this firm - the real number is higher.'
          : '.') +
        ' Each is individually sourced; unannounced rounds are not counted.';
    } else if (a.type === 'coinvestor_network') {
      const total = (a.evidence.coverage || '').split(' ')[0];
      a.title = a.subject + ' has co-invested with ' + a.currentValue + ' tracked firms';
      a.description = a.subject + ' appears in the same round as ' + a.currentValue +
        ' of the other ' + (Number(total) - 1) + ' firms with deal records on file. ' +
        'Counted once per firm pair, from rounds where a source named both.';
    } else if (a.type === 'sector_breadth') {
      // Deliberately says "have a disclosed investment", never "are
      // moving into" or "increased activity" - the sample cannot
      // support a claim about direction.
      const total = (a.evidence.coverage || '').split(' ')[0];
      a.title = a.currentValue + ' firms have a disclosed ' + a.sector + ' investment';
      a.description = a.currentValue + ' of the ' + total + ' firms with deal records on file ' +
        'have at least one disclosed investment in ' + a.sector + ', across ' +
        a.evidence.deals.length + ' rounds announced ' + a.period + '. ' +
        'A floor: firms without deal coverage cannot contribute.';
    } else if (a.type === 'partner_sector_focus') {
      a.title = a.subject + ' has ' + a.currentValue + ' partners focused on ' + a.sector;
      a.description = a.currentValue + ' partners at ' + a.subject +
        ' publish an investment focus that includes ' + a.sector +
        ', among those who joined since ' + cfg.partnerHireWindowFrom + '.';
    } else if (a.type === 'firm_milestone_activity') {
      a.title = a.subject + ' recorded ' + a.currentValue + ' milestones since ' + cfg.timelineWindowFrom;
      a.description = a.subject + ' has ' + a.currentValue + ' dated timeline events from ' +
        cfg.timelineWindowFrom + ' onward.';
    }
  });

  /* ---------- threshold, dedupe, rank (spec §11) ---------- */
  const seen = {};
  const ranked = alerts
    .filter(function (a) { return a.score >= cfg.minScore; })
    .filter(function (a) { if (seen[a.id]) return false; seen[a.id] = 1; return true; })
    .sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      if (b.confidence !== a.confidence) return b.confidence - a.confidence;
      return Math.abs(b.absoluteChange || 0) - Math.abs(a.absoluteChange || 0);
    });

  const perType = {};
  const capped = ranked.filter(function (a) {
    perType[a.type] = (perType[a.type] || 0) + 1;
    return perType[a.type] <= cfg.maxPerType;
  }).slice(0, cfg.maxAlerts);

  return {
    generatedAt: generatedAt,
    config: cfg,
    alerts: capped,
    computed: alerts.length,
    surfaced: capped.length,
    skipped: skipped,
    unsupported: UNSUPPORTED_ALERTS,
    coverage: {
      firms: FIRMS.length,
      partnerProfiles: Object.keys(PROFILES).length,
      profilesWithJoinYear: Object.keys(PROFILES).filter(function (k) { return PROFILES[k].joinedYear != null; }).length,
      holdingsRows: FIRMS.reduce(function (n, f) { return n + (f.holdings || []).length; }, 0),
      datedTimelineEvents: FIRMS.reduce(function (n, f) {
        return n + (f.timeline || []).filter(function (e) { return /^\d{4}$/.test(String(e.year)); }).length;
      }, 0),
      recentCohort: recent.length,
      priorCohort: prior.length,
      dealRows: DEALS ? DEALS.length : 0,
      dealFirms: DEALS
        ? Object.keys(DEALS.reduce(function (m, d) { if (d.firmSlug) m[d.firmSlug] = 1; return m; }, {})).length
        : 0
    }
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { computePowerAlerts: computePowerAlerts, POWER_ALERT_CONFIG: POWER_ALERT_CONFIG, UNSUPPORTED_ALERTS: UNSUPPORTED_ALERTS };
}
