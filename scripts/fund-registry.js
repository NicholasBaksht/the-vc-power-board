/* ============================================================
   FUND-REGISTRY.JS
   Phase 5A. Canonical Fund identity, built on top of the fund
   research that already exists in data-funds.js.

   THIS FILE ADDS IDENTITY, NOT DATA. FIRM_FUNDS already holds 287
   sourced funds across 65 firms, every one with a source URL. What it
   does not have is a stable way to refer to one. This layer gives
   each fund a canonical id, states what is known and unknown about
   it, and refuses to invent the rest.

   A FIRM IS NOT A FUND

   A firm is an organisation; a fund is a vehicle it raised. The
   firm's `aum` field and a fund's size are different quantities and
   are never rendered as each other. Nothing here reads firm.aum.

   IDENTITY IS FIRM-SCOPED, ALWAYS

   "Fund III" exists at 22 different firms in this dataset. Resolving
   that name without a firm is meaningless, so every lookup takes a
   firm slug and there is no global name index.

   Ten funds have NO NAME AT ALL - unnamed vehicles at Sapphire,
   Third Rock, Techstars, Airbus and the Alexa Fund. Sapphire has two
   from the same vintage year. Their identity comes from the firm's
   own series label plus vintage, which was verified unique for every
   one of them. That is also the plainest possible argument for why a
   display name can never be identity.

   SIZE HAS A BASIS, AND THE BASIS IS PART OF THE FACT

   The research records a fundraising status: targeting, announced, or
   closed. A number attached to a fund still "targeting" is a TARGET,
   and calling it a fund size would state something the source did
   not. Every size carries its basis so the UI cannot misreport it.

   DEPLOYMENT STATUS IS NOT IN THIS DATA

   The existing `status` describes FUNDRAISING - whether the vehicle
   finished raising. Whether a firm is still writing cheques out of it
   is a different question, and nothing in the dataset answers it. So
   deployment status is UNKNOWN for every fund, and a recent vintage
   is never treated as evidence of deploying.

   STRATEGY IS STATED, NEVER INFERRED

   Strategy comes from the firm's own vehicle naming where that naming
   states a strategy: a "Growth Fund" is a growth fund because the
   firm called it one. "Flagship" is NOT a strategy - it says which
   vehicle is the main one, and a flagship fund may be seed or
   multistage. Those get UNKNOWN, and a separate isFlagship flag that
   answers the question flagship actually answers.
   ============================================================ */

const FUND_STRATEGIES = {
  VENTURE:         'Venture',
  SEED:            'Seed',
  EARLY_STAGE:     'Early stage',
  GROWTH:          'Growth',
  OPPORTUNITY:     'Opportunity',
  SECTOR_SPECIFIC: 'Sector specific',
  REGIONAL:        'Regional',
  MULTISTAGE:      'Multistage',
  OTHER:           'Other',
  UNKNOWN:         'Unknown'
};

/* Fundraising status, which is what the research actually records. */
const FUND_RAISE_STATUS = {
  TARGETING: 'Targeting',
  ANNOUNCED: 'Announced',
  CLOSED:    'Closed',
  UNKNOWN:   'Unknown'
};

/* Deployment status, which it does not. Kept as a separate axis so
   the two can never be confused for one another. */
const FUND_DEPLOYMENT_STATUS = {
  DEPLOYING:      'Deploying',
  FULLY_DEPLOYED: 'Fully deployed',
  HISTORICAL:     'Historical',
  UNKNOWN:        'Unknown'
};

const FUND_RESEARCH_STATUS = {
  IDENTITY_CONFIRMED:     'Identity confirmed',
  NEEDS_ENRICHMENT:       'Needs enrichment',
  IDENTITY_NEEDS_REVIEW:  'Identity needs review',
  UNRESOLVED:             'Unresolved'
};

/* Series labels that STATE a strategy, because the firm chose that
   word for the vehicle. Everything absent from this map resolves to
   UNKNOWN rather than being guessed from portfolio behaviour. */
const FUND_SERIES_STRATEGY = {
  'growth': 'GROWTH',
  'opportunity': 'OPPORTUNITY',
  'acceleration': 'GROWTH',
  'seed': 'SEED',
  'crypto': 'SECTOR_SPECIFIC',
  'bio-health': 'SECTOR_SPECIFIC',
  'games': 'SECTOR_SPECIFIC',
  'infrastructure': 'SECTOR_SPECIFIC',
  'american-dynamism': 'SECTOR_SPECIFIC',
  'rmb fund': 'REGIONAL'
};

let _fundCache = null;
let _fundByFirm = null;
let _fundById = null;

function fundNorm(s) {
  return String(s == null ? '' : s).toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/* Roman and Arabic numerals are the one alias family worth handling:
   "Fund III" and "Fund 3" are the same vehicle written two ways.
   Nothing else is fuzzy-merged. */
const FUND_ROMAN = { i:1, ii:2, iii:3, iv:4, v:5, vi:6, vii:7, viii:8, ix:9, x:10,
                     xi:11, xii:12, xiii:13, xiv:14, xv:15 };

function fundNumberOf(name) {
  const n = String(name || '').toLowerCase().trim();
  const roman = n.match(/\b([ivx]+)\b\s*$/);
  if (roman && FUND_ROMAN[roman[1]] != null) return FUND_ROMAN[roman[1]];
  const arabic = n.match(/\b(\d{1,2})\b\s*$/);
  if (arabic) return parseInt(arabic[1], 10);
  return null;
}

/* The canonical key. Named funds key on their normalised name;
   unnamed ones key on the firm's own series label plus vintage,
   which was checked unique across all ten of them. */
function fundKeyFor(firmSlug, f) {
  if (f.name) return firmSlug + '::' + fundNorm(f.name);
  const series = fundNorm(f.series || 'unnamed');
  return firmSlug + '::' + series + (f.vintageYear != null ? '-' + f.vintageYear : '');
}

/* Fundraising status governs what a size figure MEANS. A number on a
   fund that is still targeting is a target, and saying otherwise
   would report an ambition as an achievement. */
function fundSizeBasis(raiseStatus) {
  if (raiseStatus === 'CLOSED') return 'FINAL_CLOSE';
  if (raiseStatus === 'TARGETING') return 'TARGET';
  if (raiseStatus === 'ANNOUNCED') return 'ANNOUNCED';
  return 'UNKNOWN';
}

function fundRaiseStatusOf(raw) {
  const s = String(raw || '').toLowerCase();
  if (s === 'closed') return 'CLOSED';
  if (s === 'targeting') return 'TARGETING';
  if (s === 'announced') return 'ANNOUNCED';
  return 'UNKNOWN';
}

function fundStrategyOf(f) {
  const series = String(f.series || '').toLowerCase().trim();
  if (FUND_SERIES_STRATEGY[series]) return FUND_SERIES_STRATEGY[series];

  /* The firm's own name for the vehicle counts as a statement. A
     "Growth Fund" is growth because they called it that. */
  const n = String(f.name || '').toLowerCase();
  if (/\bgrowth\b/.test(n)) return 'GROWTH';
  if (/\bopportunit/.test(n)) return 'OPPORTUNITY';
  if (/\bseed\b/.test(n)) return 'SEED';
  if (/\bearly[- ]stage\b/.test(n)) return 'EARLY_STAGE';

  /* vehicleType is about the wrapper, not the strategy, with one
     exception: a corporate venture vehicle is a genuinely different
     kind of thing and the research says so explicitly. */
  if (f.vehicleType === 'corporate') return 'OTHER';
  return 'UNKNOWN';
}

/* Enrichment and identity are separate. A fund with a confirmed
   identity and no size is a valid canonical record; it is just one
   that needs more research. */
function fundResearchStatusOf(f, hasName) {
  if (!hasName) return 'IDENTITY_NEEDS_REVIEW';
  if (f.confidence === 'low') return 'NEEDS_ENRICHMENT';
  if (f.sizeUSD == null || f.vintageYear == null) return 'NEEDS_ENRICHMENT';
  return 'IDENTITY_CONFIRMED';
}

function fundBuild() {
  if (_fundCache) return _fundCache;
  const out = [];
  if (typeof FIRM_FUNDS === 'undefined') { _fundCache = out; return out; }

  Object.keys(FIRM_FUNDS).forEach(function (firmSlug) {
    const rec = FIRM_FUNDS[firmSlug] || {};
    const list = rec.funds || [];
    const seen = {};

    list.forEach(function (f, idx) {
      let key = fundKeyFor(firmSlug, f);
      /* Two records that still collide would be an identity problem,
         not something to silently merge. Suffix and flag it. */
      if (seen[key]) key = key + '-' + idx;
      seen[key] = true;

      const raiseStatus = fundRaiseStatusOf(f.status);
      const hasName = !!f.name;

      out.push({
        fundId: key,
        firmSlug: firmSlug,
        name: f.name || null,
        /* Never a fabricated name. The UI decides how to render an
           unnamed vehicle; the record does not invent one. */
        displayName: f.name || null,
        series: f.series || null,
        isFlagship: String(f.series || '').toLowerCase() === 'flagship',
        fundNumber: f.name ? fundNumberOf(f.name) : null,

        strategy: fundStrategyOf(f),
        vehicleType: f.vehicleType || null,

        vintageYear: f.vintageYear != null ? f.vintageYear : null,
        announcedDate: f.announcedDate || null,

        sizeUSD: f.sizeUSD != null ? f.sizeUSD : null,
        sizeBasis: f.sizeUSD != null ? fundSizeBasis(raiseStatus) : null,
        originalCurrency: f.originalCurrency || null,
        sizeOriginal: f.sizeOriginal != null ? f.sizeOriginal : null,

        raiseStatus: raiseStatus,
        /* Nothing in this dataset speaks to deployment. A 2024 fund
           is not evidence that anyone is writing cheques today. */
        deploymentStatus: 'UNKNOWN',

        combinedVehicles: f.combinedVehicles === true,
        confidence: f.confidence || null,
        source: f.source || null,

        researchStatus: fundResearchStatusOf(f, hasName),
        firmCoverageComplete: rec.complete === true,
        firmCoverageNote: rec.note || null
      });
    });
  });

  _fundCache = out;
  return out;
}

function fundIndex() {
  if (_fundByFirm) return { byFirm: _fundByFirm, byId: _fundById };
  const all = fundBuild();
  _fundByFirm = {};
  _fundById = {};
  all.forEach(function (f) {
    (_fundByFirm[f.firmSlug] = _fundByFirm[f.firmSlug] || []).push(f);
    _fundById[f.fundId] = f;
  });
  /* Newest first: a founder asking about a firm's funds wants the
     current one at the top, not the 2009 one. */
  Object.keys(_fundByFirm).forEach(function (k) {
    _fundByFirm[k].sort(function (a, b) {
      const av = a.vintageYear == null ? -1 : a.vintageYear;
      const bv = b.vintageYear == null ? -1 : b.vintageYear;
      return bv - av;
    });
  });
  return { byFirm: _fundByFirm, byId: _fundById };
}

function fundsForFirm(firmSlug) {
  if (!firmSlug) return [];
  return fundIndex().byFirm[firmSlug] || [];
}

function fundById(id) {
  if (!id) return null;
  return fundIndex().byId[id] || null;
}

/* Firm-scoped by design. There is no global "Fund III" lookup
   because 22 firms have one. */
function fundResolve(name, firmSlug) {
  if (!firmSlug) return null;
  const list = fundsForFirm(firmSlug);
  if (!list.length) return null;
  const want = fundNorm(name);
  if (!want) return null;

  const exact = list.filter(function (f) { return fundNorm(f.name) === want; })[0];
  if (exact) return exact;

  /* Numeral variants only: "Fund III" and "Fund 3". The stem before
     the numeral must match too, so "Growth Fund II" never resolves to
     "Fund II". */
  const wantNum = fundNumberOf(name);
  if (wantNum == null) return null;
  const stem = fundNorm(String(name).replace(/\b([ivx]+|\d{1,2})\b\s*$/i, ''));
  const alias = list.filter(function (f) {
    if (!f.name || f.fundNumber !== wantNum) return false;
    return fundNorm(String(f.name).replace(/\b([ivx]+|\d{1,2})\b\s*$/i, '')) === stem;
  });
  return alias.length === 1 ? alias[0] : null;
}

/* ------------------------------------------------------------
   DISPLAY HELPERS

   Every one of these refuses to state more than is known. They exist
   so no calling surface has to remember the rules.
   ------------------------------------------------------------ */

function fundDisplayName(f) {
  if (!f) return null;
  if (f.name) return f.name;
  /* An unnamed vehicle is described, not named. "Sapphire Ventures
     2019 fund" is a description the reader can verify; inventing
     "Fund II" would be a claim about a name nobody published. */
  const firm = (typeof ptFirm === 'function') ? ptFirm(f.firmSlug) : null;
  const who = firm ? firm.name : f.firmSlug;
  return who + (f.vintageYear ? ' ' + f.vintageYear : '') + ' fund';
}

function fundSizeLabel(f) {
  if (!f || f.sizeUSD == null) return null;
  const n = f.sizeUSD;
  let amount;
  if (n >= 1e9) amount = '$' + (n / 1e9).toFixed(n % 1e9 === 0 ? 0 : 1) + 'B';
  else if (n >= 1e6) amount = '$' + Math.round(n / 1e6) + 'M';
  else amount = '$' + n.toLocaleString();
  return amount;
}

/* The basis is part of the fact, so it travels with the number.
   "Targeting $500M" and "$500M fund" are different claims. */
function fundSizeWithBasis(f) {
  const amt = fundSizeLabel(f);
  if (!amt) return null;
  if (f.sizeBasis === 'TARGET') return 'Targeting ' + amt;
  if (f.sizeBasis === 'ANNOUNCED') return amt + ' announced';
  return amt;
}

function fundSizeBasisLabel(f) {
  if (!f || !f.sizeBasis) return null;
  return { FINAL_CLOSE: 'Final close', TARGET: 'Target', ANNOUNCED: 'Announced' }[f.sizeBasis] || null;
}

function fundStrategyLabel(f) {
  return f ? (FUND_STRATEGIES[f.strategy] || 'Unknown') : null;
}

function fundRaiseStatusLabel(f) {
  return f ? (FUND_RAISE_STATUS[f.raiseStatus] || 'Unknown') : null;
}

/* Coverage stated honestly. 43 of the 65 firms with fund research are
   explicitly marked incomplete, and a list that looks exhaustive when
   it is not would be the most misleading thing this feature could
   do. */
function fundCoverageNote(firmSlug) {
  const list = fundsForFirm(firmSlug);
  if (!list.length) return null;
  const complete = list[0].firmCoverageComplete;
  const note = list[0].firmCoverageNote;
  if (complete) {
    return list.length + (list.length === 1 ? ' fund tracked' : ' funds tracked') +
      ' by Power Board.';
  }
  return list.length + (list.length === 1 ? ' fund tracked' : ' funds tracked') +
    ' by Power Board. This firm has other funds that are not recorded here.' +
    (note ? ' ' + note : '');
}

function fundStats() {
  const all = fundBuild();
  const withSize = all.filter(function (f) { return f.sizeUSD != null; }).length;
  const withVintage = all.filter(function (f) { return f.vintageYear != null; }).length;
  const byStatus = {};
  all.forEach(function (f) { byStatus[f.researchStatus] = (byStatus[f.researchStatus] || 0) + 1; });
  return {
    funds: all.length,
    firms: Object.keys(fundIndex().byFirm).length,
    withSize: withSize,
    withVintage: withVintage,
    byResearchStatus: byStatus
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    fundBuild: fundBuild, fundsForFirm: fundsForFirm, fundById: fundById,
    fundResolve: fundResolve, fundDisplayName: fundDisplayName,
    fundSizeWithBasis: fundSizeWithBasis, fundStrategyOf: fundStrategyOf,
    fundNumberOf: fundNumberOf, fundStats: fundStats, fundCoverageNote: fundCoverageNote
  };
}
