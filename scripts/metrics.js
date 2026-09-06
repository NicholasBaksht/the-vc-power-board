/* ============================================================
   METRICS.JS
   Phase 6A. One place that says what every number means.

   THIS FILE DEFINES METRICS. IT DOES NOT COMPUTE THEM.

   Power Board already computes observed behaviour in
   partner-behavior.js, fund behaviour in fund-attribution.js, and
   outcome counts in outcome-context.js. Each has been tested and
   frozen, and each already gets the hard parts right: sample floors,
   same-period comparison, denominators that count classified rows
   rather than all rows.

   Reimplementing any of that here would create a second answer to
   the same question, and the two would drift. So the registry names
   a metric, states its definition in words a reader can check, and
   DELEGATES to the function that already owns it.

   THE THREE RULES EVERY METRIC OBEYS

   1. UNKNOWN IS NOT ZERO. A partner with 10 investments and 6
      classified by stage has a stage denominator of 6. The four
      unknowns are not "other" and not zero - they are absent, and
      the denominator says so.

   2. A SHARE WITHOUT ITS DENOMINATOR IS NOT A FINDING. Every share
      returns n and of together. "64 per cent" is not a value this
      file can produce on its own.

   3. TRACKED IS NOT COMPLETE. Power Board researches 441 firms and
      1,483 partners; it does not hold every firm and partner in the
      world. Every metric carries a universe string, and the UI is
      expected to use it. "Among investments tracked by Power Board"
      is honest. "32 per cent of all VC investments" is not.

   MINIMUM COVERAGE IS A PROPERTY OF THE METRIC

   Each definition declares the smallest denominator at which it may
   be reported. Below that, metGet returns a result with
   sufficient:false and the reason, so the caller renders an
   explanation instead of a misleading number. No caller gets to
   decide that three rows is enough.
   ============================================================ */

/* Shared windows. Declared once so no two surfaces can quietly use
   different periods and present the results side by side. */
const MET_WINDOWS = {
  ALL:  { key: 'ALL',  label: 'All tracked time', years: null },
  M12:  { key: 'M12',  label: 'Last 12 months',   years: 1 },
  M24:  { key: 'M24',  label: 'Last 24 months',   years: 2 },
  M36:  { key: 'M36',  label: 'Last 36 months',   years: 3 }
};

const MET_UNIVERSE = {
  research: 'tracked by Power Board',
  privateRaise: 'in your raise'
};

function metNowYear() { return new Date().getFullYear(); }

/* A row is in-window when it is DATED and falls inside it. An
   undated row is never silently counted as recent: it is excluded
   from windowed metrics and reported as unknown-date coverage. */
function metInWindow(year, win) {
  const w = MET_WINDOWS[win] || MET_WINDOWS.ALL;
  if (!w.years) return year != null;
  if (year == null) return false;
  return (metNowYear() - year) < w.years;
}

/* ------------------------------------------------------------
   THE REGISTRY

   definition is written for a person to check against the numbers.
   If the words and the code ever disagree, the words are the spec
   and the code is the bug.
   ------------------------------------------------------------ */

const MET_REGISTRY = {

  partner_attributed_investments: {
    name: 'Attributed investments',
    scope: 'partner',
    definition: 'Investments a source names this specific person against. ' +
                'Firm employment is never partner attribution.',
    numerator: 'person-attributed investments',
    denominator: null,
    universe: 'research',
    minCoverage: 1,
    nullBehavior: 'A partner with no sourced attribution returns no value, not zero.'
  },

  partner_observed_sector_share: {
    name: 'Observed sector share',
    scope: 'partner',
    definition: 'Share of a partner\'s attributed investments in one sector, ' +
                'counted only against investments whose sector is classified.',
    numerator: 'person-attributed investments classified to the sector',
    denominator: 'person-attributed investments with a KNOWN sector',
    universe: 'research',
    minCoverage: 5,
    nullBehavior: 'Unclassified investments are excluded from the denominator, ' +
                  'never counted as "other".'
  },

  partner_observed_stage_share: {
    name: 'Observed stage share',
    scope: 'partner',
    definition: 'Share of a partner\'s attributed investments at one stage, ' +
                'counted only against investments whose stage is classified.',
    numerator: 'person-attributed investments at the stage',
    denominator: 'person-attributed investments with a KNOWN stage',
    universe: 'research',
    minCoverage: 5,
    nullBehavior: 'Unclassified investments are excluded from the denominator.'
  },

  partner_vs_firm: {
    name: 'Partner versus firm',
    scope: 'partner',
    definition: 'Compares a partner\'s observed behaviour with their firm\'s over ' +
                'the SAME period, clipped to the firm\'s tracked coverage.',
    numerator: 'partner rows in window',
    denominator: 'firm rows in the same window',
    universe: 'research',
    minCoverage: 5,
    nullBehavior: 'Returns nothing unless both sides clear the floor in the same window.',
    owner: 'pbehComparison'
  },

  angel_attributed_investments: {
    name: 'Attributed investments',
    scope: 'angel',
    definition: 'Investments a source names this person against.',
    numerator: 'person-attributed investments',
    denominator: null,
    universe: 'research',
    minCoverage: 1,
    nullBehavior: 'No sourced attribution returns no value, not zero.'
  },

  firm_tracked_participations: {
    name: 'Tracked participations',
    scope: 'firm',
    definition: 'Financings Power Board records this firm participating in. ' +
                'Not a claim of the firm\'s full portfolio.',
    numerator: 'firm participations',
    denominator: null,
    universe: 'research',
    minCoverage: 1,
    nullBehavior: 'Absent research returns no value, not zero.'
  },

  fund_observed_sector_share: {
    name: 'Observed fund sector share',
    scope: 'fund',
    definition: 'Share of a fund\'s attributed investments in one sector. Uses ONLY ' +
                'investments sourced to this specific fund, never the firm\'s wider history.',
    numerator: 'fund-attributed investments classified to the sector',
    denominator: 'fund-attributed investments with a KNOWN sector',
    universe: 'research',
    minCoverage: 8,
    nullBehavior: 'No fund currently clears this floor: fund attribution coverage is zero.',
    owner: 'fundObservedBehavior'
  },

  outcome_counts: {
    name: 'Tracked portfolio outcomes',
    scope: 'partner|angel|firm|fund',
    definition: 'Counts of acquisitions, public listings, closures and bankruptcies ' +
                'among attributed companies whose current outcome is known.',
    numerator: 'attributed companies with an outcome of that type',
    denominator: 'attributed companies with a KNOWN outcome',
    universe: 'research',
    minCoverage: 3,
    nullBehavior: 'Companies with unknown outcomes are excluded from the denominator ' +
                  'and never counted as still-private.',
    warning: 'These are company outcomes. They are NOT investor returns and imply ' +
             'nothing about what anyone was paid.',
    owner: 'occFromRows'
  },

  fund_vintage_distribution: {
    name: 'Funds by vintage',
    scope: 'market',
    definition: 'Count of tracked funds per vintage year.',
    numerator: 'funds with that vintage',
    denominator: 'funds with a KNOWN vintage',
    universe: 'research',
    minCoverage: 1,
    nullBehavior: 'Funds without a vintage are excluded and reported separately.'
  },

  fund_strategy_distribution: {
    name: 'Funds by stated strategy',
    scope: 'market',
    definition: 'Count of tracked funds per stated strategy. Strategy comes from the ' +
                'firm\'s own naming, never inferred from portfolio behaviour.',
    numerator: 'funds with that strategy',
    denominator: 'funds with a STATED strategy',
    universe: 'research',
    minCoverage: 1,
    nullBehavior: 'Funds with no stated strategy are excluded, not bucketed as "other".'
  },

  market_outcomes_by_year: {
    name: 'Tracked outcomes by year',
    scope: 'market',
    definition: 'Count of tracked outcome events per year.',
    numerator: 'outcome events in the year',
    denominator: 'outcome events with a KNOWN year',
    universe: 'research',
    minCoverage: 1,
    nullBehavior: 'Events with no reliable year are excluded and counted separately.',
    warning: 'Counts of events, never a rate and never a measure of performance.'
  },

  raise_pipeline_funnel: {
    name: 'Pipeline funnel',
    scope: 'raise',
    definition: 'Counts of targets the founder has placed at each stage. Entirely ' +
                'their own entered data.',
    numerator: 'targets at the stage',
    denominator: 'targets in the raise',
    universe: 'privateRaise',
    minCoverage: 1,
    nullBehavior: 'A stage nobody used shows zero, which is a real answer here: the ' +
                  'founder knows their own pipeline.',
    warning: 'Never compared against other users. Power Board holds no benchmark.'
  }
};

/* ------------------------------------------------------------
   SHARES AND COVERAGE
   ------------------------------------------------------------ */

/* The only way this file produces a share. Returns n and of, and a
   percent ONLY when the denominator clears the metric's floor -
   so a caller cannot render "67 per cent" off two rows. */
function metShare(metricId, n, of) {
  const def = MET_REGISTRY[metricId];
  const min = def ? (def.minCoverage || 1) : 1;
  if (of == null || of <= 0) {
    return { n: n || 0, of: 0, pct: null, sufficient: false, reason: 'no denominator' };
  }
  const sufficient = of >= min;
  return {
    n: n, of: of,
    /* Rounded only when reportable. Null otherwise, so a template
       that prints it unguarded shows nothing rather than NaN. */
    pct: sufficient ? Math.round((n / of) * 100) : null,
    sufficient: sufficient,
    reason: sufficient ? null : ('needs ' + min + ' classified, has ' + of),
    label: n + ' of ' + of
  };
}

/* The sentence that makes a number checkable. Always states the
   denominator and the universe. */
function metCoverageLine(metricId, of, totalAttributed) {
  const def = MET_REGISTRY[metricId];
  if (!def) return null;
  const universe = MET_UNIVERSE[def.universe] || MET_UNIVERSE.research;
  if (totalAttributed != null && totalAttributed !== of) {
    return of + ' of ' + totalAttributed + ' ' + universe +
      ' are classified for this measure. The remaining ' + (totalAttributed - of) +
      ' are not, and are excluded rather than counted as unknown values.';
  }
  return of + ' ' + universe + '.';
}

function metDefinition(metricId) {
  const d = MET_REGISTRY[metricId];
  if (!d) return null;
  return {
    id: metricId, name: d.name, scope: d.scope,
    definition: d.definition,
    numerator: d.numerator, denominator: d.denominator,
    universe: MET_UNIVERSE[d.universe] || MET_UNIVERSE.research,
    minCoverage: d.minCoverage,
    nullBehavior: d.nullBehavior,
    warning: d.warning || null,
    owner: d.owner || null
  };
}

/* ------------------------------------------------------------
   DISTRIBUTIONS

   One counter used by every categorical metric, so unknown handling
   cannot differ between sectors, stages and strategies.
   ------------------------------------------------------------ */

function metDistribution(metricId, rows, fieldFn, opts) {
  opts = opts || {};
  const win = opts.window || 'ALL';
  const counts = {};
  let known = 0, unknown = 0, outOfWindow = 0, total = 0;

  (rows || []).forEach(function (r) {
    total++;
    if (opts.yearFn && win !== 'ALL') {
      if (!metInWindow(opts.yearFn(r), win)) { outOfWindow++; return; }
    }
    const v = fieldFn(r);
    /* Blank, null and undefined are all UNKNOWN. None of them
       becomes a bucket, and none is counted in the denominator. */
    if (v == null || v === '') { unknown++; return; }
    known++;
    counts[v] = (counts[v] || 0) + 1;
  });

  const entries = Object.keys(counts).map(function (k) {
    return Object.assign({ label: k }, metShare(metricId, counts[k], known));
  }).sort(function (a, b) { return b.n - a.n; });

  const def = MET_REGISTRY[metricId];
  const min = def ? (def.minCoverage || 1) : 1;

  return {
    metricId: metricId,
    window: win,
    entries: entries,
    known: known,
    unknown: unknown,
    outOfWindow: outOfWindow,
    total: total,
    sufficient: known >= min,
    reason: known >= min ? null : ('needs ' + min + ' classified, has ' + known),
    coverage: metCoverageLine(metricId, known, total)
  };
}

/* ------------------------------------------------------------
   DELEGATING ACCESSORS

   Each returns the shape the registry promises, computed by the
   function that already owns the definition.
   ------------------------------------------------------------ */

function metPartnerSectors(slug, win) {
  if (typeof pbehCompute !== 'function') return null;
  const c = pbehCompute(slug);
  if (!c) return null;
  return metDistribution('partner_observed_sector_share', c.careerRows,
    function (r) { return r.sector || null; },
    { window: win, yearFn: function (r) { return r.year; } });
}

function metPartnerStages(slug, win) {
  if (typeof pbehCompute !== 'function') return null;
  const c = pbehCompute(slug);
  if (!c) return null;
  return metDistribution('partner_observed_stage_share', c.careerRows,
    function (r) { return r.stage || null; },
    { window: win, yearFn: function (r) { return r.year; } });
}

/* Delegates entirely. pbehComparison owns same-period logic,
   including clipping to the firm's tracked coverage, and this file
   does not second-guess it. */
function metPartnerVsFirm(slug) {
  return (typeof pbehComparison === 'function') ? pbehComparison(slug) : null;
}

function metFundVintages() {
  if (typeof fundBuild !== 'function') return null;
  return metDistribution('fund_vintage_distribution', fundBuild(),
    function (f) { return f.vintageYear != null ? String(f.vintageYear) : null; });
}

function metFundStrategies() {
  if (typeof fundBuild !== 'function') return null;
  return metDistribution('fund_strategy_distribution', fundBuild(),
    function (f) {
      /* UNKNOWN is genuinely unknown and must not become a bucket
         called "Unknown" that then gets a percentage. */
      return (f.strategy && f.strategy !== 'UNKNOWN')
        ? (typeof FUND_STRATEGIES !== 'undefined' ? FUND_STRATEGIES[f.strategy] : f.strategy)
        : null;
    });
}

function metOutcomesByYear() {
  if (typeof ocBuild !== 'function') return null;
  return metDistribution('market_outcomes_by_year', ocBuild(),
    function (o) { return o.year != null ? String(o.year) : null; });
}

function metOutcomeTypes() {
  if (typeof ocBuild !== 'function') return null;
  return metDistribution('market_outcomes_by_year', ocBuild(),
    function (o) {
      return (typeof ocTypeLabel === 'function') ? ocTypeLabel(o) : o.type;
    });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MET_REGISTRY: MET_REGISTRY, MET_WINDOWS: MET_WINDOWS,
    metShare: metShare, metDistribution: metDistribution,
    metCoverageLine: metCoverageLine, metDefinition: metDefinition,
    metInWindow: metInWindow, metPartnerSectors: metPartnerSectors,
    metPartnerStages: metPartnerStages, metFundVintages: metFundVintages,
    metFundStrategies: metFundStrategies, metOutcomesByYear: metOutcomesByYear
  };
}
