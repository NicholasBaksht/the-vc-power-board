/* ============================================================
   FUND-ATTRIBUTION.JS
   Phase 5C. Which fund made which investment - and, right now, the
   honest answer that Power Board does not know for any of them.

   THE MEASURED STARTING POINT

   573 tracked investment participations exist. ZERO carry a fund
   reference. 112 of them are at firms that do have fund research, so
   the temptation is obvious: a16z raised Fund III in 2019, a16z
   invested in something in 2020, therefore Fund III made it.

   That inference is wrong and this file will not make it. Firms
   invest from multiple live vehicles at once, growth deals come from
   growth funds, opportunity vehicles follow on into existing
   positions, and a 2020 cheque may well have come from Fund II
   finishing its reserves. A date proves nothing about a vehicle.

   So attribution comes from ONE place: an explicit evidence record
   tying a named fund to a named investment, sourced. Until research
   produces those, every participation keeps firmSlug and partner
   attribution exactly as before, and its fund is null.

   NULL IS THE ANSWER, NOT A GAP TO FILL

   An unattributed investment is not broken data. Power Board knows
   the firm invested; it does not know from which vehicle. Recording
   that honestly is the whole point, and "we do not know" is a more
   useful thing to tell a founder than a plausible guess they cannot
   check.

   OBSERVED FUND BEHAVIOUR IS GATED ON DENOMINATOR

   Sector and stage patterns computed from three investments are
   noise wearing the costume of analysis. The gate below requires a
   real denominator before any pattern is reported, and today no fund
   clears it - which is why no fund page shows observed behaviour.
   ============================================================ */

/* The attribution store. Populated by research, never by inference.
   Shape, once entries exist:

     'firmSlug|Company|2020-03-04': {
        fundId: 'a16z::fund-iii',
        sourceUrl: 'https://...',
        sourceType: 'firm-release',
        checked: '2026-09-06'
     }

   The key is the participation's own identity, so an entry can only
   ever attach to an investment that actually exists. */
const FUND_ATTRIBUTION = {};

/* Below this, a pattern is not a pattern. Chosen so a fund needs a
   real body of attributed work before Power Board describes what it
   does, rather than describing three cheques. */
const FUND_OBSERVED_MIN = 8;

/* How much of a fund's attributed set must be classified before a
   share is worth stating. */
const FUND_OBSERVED_MIN_CLASSIFIED = 0.6;

function fundPartKey(p) {
  if (!p || !p.firmSlug || !p.company) return null;
  return p.firmSlug + '|' + p.company + '|' + (p.announcedDate || '');
}

/* The ONLY way a participation gets a fund. There is deliberately no
   date argument, no firm-fundraising lookup and no fallback: this
   function cannot infer even if a caller wanted it to. */
function fundAttributionFor(participation) {
  const key = fundPartKey(participation);
  if (!key) return null;
  const rec = FUND_ATTRIBUTION[key];
  if (!rec || !rec.fundId) return null;
  /* An attribution to a fund that is not in the registry is a
     research error, not something to render. */
  if (typeof fundById === 'function' && !fundById(rec.fundId)) return null;
  return rec;
}

function fundAttributedFundId(participation) {
  const rec = fundAttributionFor(participation);
  return rec ? rec.fundId : null;
}

/* ------------------------------------------------------------
   FUND INVESTMENT HISTORY
   ------------------------------------------------------------ */

function fundAllParticipations() {
  if (typeof FIRM_DEALS === 'undefined') return [];
  return Array.isArray(FIRM_DEALS) ? FIRM_DEALS : [];
}

/* Investments attributed to one fund. Named "tracked" everywhere it
   surfaces, because even a populated list is what Power Board has
   sourced, never a claim of the fund's whole portfolio. */
function fundInvestments(fundId) {
  if (!fundId) return [];
  return fundAllParticipations().filter(function (p) {
    return fundAttributedFundId(p) === fundId;
  });
}

function fundInvestmentCount(fundId) {
  return fundInvestments(fundId).length;
}

/* ------------------------------------------------------------
   OBSERVED FUND BEHAVIOUR

   Uses ONLY fund-attributed investments. Using the firm's whole deal
   history would describe the firm and label it the fund, which is
   the exact confusion this phase exists to prevent.
   ------------------------------------------------------------ */

function fundObservedBehavior(fundId) {
  const inv = fundInvestments(fundId);
  if (inv.length < FUND_OBSERVED_MIN) {
    /* Returns the reason rather than null so the UI can say why
       nothing is shown instead of rendering an unexplained blank. */
    return { available: false, reason: 'insufficient', tracked: inv.length,
             needed: FUND_OBSERVED_MIN };
  }

  const sectors = {}, stages = {};
  let sectorKnown = 0, stageKnown = 0;
  inv.forEach(function (p) {
    if (p.sector) { sectors[p.sector] = (sectors[p.sector] || 0) + 1; sectorKnown++; }
    if (p.round) { stages[p.round] = (stages[p.round] || 0) + 1; stageKnown++; }
  });

  const out = { available: true, tracked: inv.length,
                sectorKnown: sectorKnown, stageKnown: stageKnown,
                sectors: null, stages: null };

  /* A share of a mostly-unclassified set is not a share of anything.
     Each dimension is reported only if its own coverage holds up. */
  if (sectorKnown / inv.length >= FUND_OBSERVED_MIN_CLASSIFIED) {
    out.sectors = Object.keys(sectors).map(function (k) {
      return { label: k, n: sectors[k], of: sectorKnown };
    }).sort(function (a, b) { return b.n - a.n; });
  }
  if (stageKnown / inv.length >= FUND_OBSERVED_MIN_CLASSIFIED) {
    out.stages = Object.keys(stages).map(function (k) {
      return { label: k, n: stages[k], of: stageKnown };
    }).sort(function (a, b) { return b.n - a.n; });
  }
  return out;
}

/* Every share carries its denominator. "7 of 11 fund-attributed
   investments" is checkable; "64 per cent AI" is not. */
function fundObservedLine(entry) {
  if (!entry) return null;
  return entry.n + ' of ' + entry.of + ' classified';
}

/* ------------------------------------------------------------
   COVERAGE

   Stated plainly wherever fund investments would appear. Zero is a
   real answer and is reported as one.
   ------------------------------------------------------------ */

function fundAttributionCoverage() {
  const all = fundAllParticipations();
  const attributed = all.filter(function (p) { return fundAttributedFundId(p) != null; });

  let atFundFirms = 0;
  if (typeof fundsForFirm === 'function') {
    atFundFirms = all.filter(function (p) {
      return fundsForFirm(p.firmSlug).length > 0;
    }).length;
  }

  return {
    participations: all.length,
    attributed: attributed.length,
    unattributed: all.length - attributed.length,
    atFirmsWithFundResearch: atFundFirms,
    fundsWithInvestments: Object.keys(attributed.reduce(function (a, p) {
      a[fundAttributedFundId(p)] = 1; return a;
    }, {})).length
  };
}

function fundCoverageSentence(fundId) {
  const n = fundInvestmentCount(fundId);
  if (n === 0) {
    return 'No investments are attributed to this fund yet. Power Board attributes an ' +
      'investment to a specific fund only when a source names both, and does not infer it ' +
      'from the date of the investment.';
  }
  return n + (n === 1 ? ' tracked investment is' : ' tracked investments are') +
    ' attributed to this fund. This is what Power Board has sourced, not the ' +
    'fund\'s full portfolio.';
}

/* ------------------------------------------------------------
   RESEARCH QUEUE

   Which funds to attribute first. Ranked by how much real work each
   would unlock: firms whose tracked investments overlap a fund's
   likely active window, weighted by how many investments the firm
   has at all.

   THIS RANKS RESEARCH PRIORITY. IT DOES NOT ATTRIBUTE ANYTHING. The
   window is used to decide where a researcher should look, never to
   assert that a fund made an investment - which is precisely the
   inference the rest of this file refuses.
   ------------------------------------------------------------ */

function fundResearchQueue(limit) {
  if (typeof fundsForFirm !== 'function' || typeof FIRM_FUNDS === 'undefined') return [];
  const all = fundAllParticipations();

  const byFirm = {};
  all.forEach(function (p) {
    (byFirm[p.firmSlug] = byFirm[p.firmSlug] || []).push(p);
  });

  const rows = [];
  Object.keys(FIRM_FUNDS).forEach(function (firmSlug) {
    const parts = byFirm[firmSlug] || [];
    if (!parts.length) return;
    const funds = fundsForFirm(firmSlug);
    if (!funds.length) return;
    const attributed = parts.filter(function (p) {
      return fundAttributedFundId(p) != null;
    }).length;
    rows.push({
      firmSlug: firmSlug,
      trackedInvestments: parts.length,
      funds: funds.length,
      attributed: attributed,
      unattributed: parts.length - attributed
    });
  });

  rows.sort(function (a, b) {
    if (b.unattributed !== a.unattributed) return b.unattributed - a.unattributed;
    return b.funds - a.funds;
  });
  return limit ? rows.slice(0, limit) : rows;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FUND_ATTRIBUTION: FUND_ATTRIBUTION,
    fundAttributionFor: fundAttributionFor,
    fundAttributedFundId: fundAttributedFundId,
    fundInvestments: fundInvestments,
    fundObservedBehavior: fundObservedBehavior,
    fundAttributionCoverage: fundAttributionCoverage,
    fundResearchQueue: fundResearchQueue,
    fundCoverageSentence: fundCoverageSentence
  };
}
