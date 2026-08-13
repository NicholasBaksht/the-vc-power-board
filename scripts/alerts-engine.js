/* ============================================================
   ALERTS-ENGINE.JS  —  Power Alerts computation layer

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
  fundYearWindowFrom: 2023,

  // --- effect-size thresholds ---
  minPointChange: 3,           // percentage-point move to be worth an alert
  partnerHireWindowFrom: 2015, // hires counted from this year
  timelineWindowFrom: 2024,

  // --- surfacing ---
  minScore: 45,                // alerts below this are computed but not shown
  maxAlerts: 12,
  maxPerType: 4
};

/* Alert types the dataset CANNOT currently support. Declared in
   code rather than only in documentation so that the absence is
   auditable, and so nothing silently invents them later. */
const UNSUPPORTED_ALERTS = {
  sector_exposure_change: 'firm.sectors is a single current list with no history - a 31% -> 42% exposure change cannot be derived.',
  investment_activity_30d: 'no dated per-investment records exist; holdings carry investedYear on only 40 of 283 rows.',
  new_investments: 'no deal-level feed in the dataset.',
  // partner_departures is IMPLEMENTED as of the team-snapshot crawler
  // (see snapshot_partner_departure below). It stays listed here until a
  // second capture exists, because one snapshot cannot be diffed.
  partner_sector_focus: 'partner profiles carry no sector field, so "added N partners focused on robotics" is not derivable.',
  coinvestor_network: 'no co-investor field exists.',
  fund_announcements: 'fund closes appear only as free-text timeline prose; parsing amounts would be inference, not data.',
  portfolio_returns: 'only 8 holdings rows carry investedYear plus both prices - not enough to compute returns.'
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
      // Use the series whose most recent fund is newest.
      let series = null;
      Object.keys(family).forEach(function (k) {
        if (family[k].length < 2) return;
        const last = family[k][family[k].length - 1];
        if (!series || last.vintageYear > series[series.length - 1].vintageYear) series = family[k];
      });
      if (!series) return;
      const latest = series[series.length - 1];
      const prev = series[series.length - 2];
      if (latest.vintageYear === prev.vintageYear) return; // same vintage, not a step
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
        metric: 'size of the most recent recorded fund against the one before it',
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
          from: { name: prev.name, vintageYear: prev.vintageYear, sizeUSD: prev.sizeUSD, source: prev.source },
          to: { name: latest.name, vintageYear: latest.vintageYear, sizeUSD: latest.sizeUSD, source: latest.source },
          recordedFunds: rec.funds.length,
          listComplete: rec.complete,
          note: (rec.complete
            ? 'Compares the two most recent sized, single-vehicle funds on record.'
            : 'This firm\'s recorded fund list is known to be incomplete, so an intervening fund may exist that is not counted here.') +
            (lowConf ? ' At least one figure rests on a single secondary source.' : '')
        }
      });
    });

    /* --- 9. FUNDRAISING ACTIVITY BY YEAR ---
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

  /* ---------- copy generation (spec §8) ----------
     Templates interpolate computed values only. No template
     asserts a cause, an intention or a trend beyond the number. */
  alerts.forEach(function (a) {
    const dir = a.direction === 'up' ? 'rose' : 'fell';
    if (a.type === 'cohort_sector_shift' || a.type === 'cohort_geography_shift' || a.type === 'cohort_stage_shift') {
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
      const firstWord = a.subject.split(' ')[0].toLowerCase();
      const owns = a.evidence.to.name.toLowerCase().indexOf(firstWord) === 0;
      const prefix = owns ? '' : a.subject + (/s$/i.test(a.subject) ? '’ ' : '’s ');
      // A fall must never be phrased as a multiple of growth.
      a.title = prefix + a.evidence.to.name + (mult >= 1
        ? ' is ' + pa_round(mult, 1) + '× the size of ' + a.evidence.from.name
        : ' is ' + Math.round((1 - mult) * 100) + '% smaller than ' + a.evidence.from.name);
      if (owns) a.title = a.subject + ': ' + a.title;
      a.description = a.evidence.from.name + ' closed at ' + usd(a.previousValue) + ' in ' +
        a.evidence.from.vintageYear + '; ' + a.evidence.to.name + ' closed at ' + usd(a.currentValue) +
        ' in ' + a.evidence.to.vintageYear + '.';
    } else if (a.type === 'fund_year_activity') {
      a.title = a.currentValue + ' firms recorded a fund close in ' + a.subject;
      a.description = a.currentValue + ' of the ' + Object.keys(FUNDS || {}).length +
        ' firms with fund history on file closed at least one vehicle in ' + a.subject + '.';
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
      priorCohort: prior.length
    }
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { computePowerAlerts: computePowerAlerts, POWER_ALERT_CONFIG: POWER_ALERT_CONFIG, UNSUPPORTED_ALERTS: UNSUPPORTED_ALERTS };
}
