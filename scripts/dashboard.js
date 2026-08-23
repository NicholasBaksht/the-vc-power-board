/* ============================================================
   DASHBOARD.JS
   Every analytical/data-viz widget: the Philosophy Scorecard,
   Geographic Investment Heatmap, VC Genome, Similar Firms,
   Investment Personality tagline, "Why This VC" callout, the
   Investment Performance Dashboard, the full Analytics Dashboard
   page (AUM bars + leaderboard), and the "By the Numbers" section.
   ============================================================ */
// ============================================================
// INVESTMENT PHILOSOPHY SCORECARD - every score below is computed
// DETERMINISTICALLY from data already researched and sourced
// elsewhere on this page (firm.sectors, firmStages). Nothing here
// is a subjective judgment call: 5 stars means "this is one of the
// firm's own stated focus areas," 1 star means "not a stated
// focus." Categories like "Founder Friendly" or "Hands-on Support"
// are deliberately excluded - there's no objective, sourced way to
// score those without dedicated per-firm qualitative research.
// Adding a category later just means adding one entry to this
// array; the renderer handles the rest automatically.
// ============================================================
const philosophyCategories = [
  { key: 'ai', label: 'AI Focus', icon: '', sectorMatches: ['AI', 'AI Infrastructure'] },
  { key: 'enterprise', label: 'Enterprise Focus', icon: '', sectorMatches: ['Enterprise', 'Enterprise Infrastructure', 'Enterprise Software'] },
  { key: 'consumer', label: 'Consumer Focus', icon: '', sectorMatches: ['Consumer', 'Consumer Internet', 'Consumer Tech'] },
  { key: 'fintech', label: 'Fintech Focus', icon: '', sectorMatches: ['Fintech'] },
  { key: 'healthcare', label: 'Healthcare Focus', icon: '', sectorMatches: ['Healthcare', 'Life Sciences'] },
  { key: 'climate', label: 'Climate Focus', icon: '', sectorMatches: ['Clean Energy'] },
  { key: 'marketplace', label: 'Marketplace Focus', icon: '', sectorMatches: ['Marketplaces'] },
  { key: 'devtools', label: 'Dev Tools & Infrastructure', icon: '', sectorMatches: ['Cloud Infrastructure', 'Cloud Software', 'Cybersecurity', 'Security', 'SaaS'] },
  { key: 'earlyStage', label: 'Early-Stage Focus', icon: '', stageMatches: ['Pre-Seed', 'Seed'] },
  { key: 'growthStage', label: 'Growth Investing', icon: '', stageMatches: ['Growth', 'Late Stage'] }
];

// Score is binary by design (5 = stated focus, 1 = not) rather than
// invented intermediate values - see comment block above.
function computePhilosophyScores(firm) {
  const stages = firmStages[firm.slug] || [];
  return philosophyCategories.map(cat => {
    let matched = false;
    if (cat.sectorMatches) {
      matched = firm.sectors.some(s => cat.sectorMatches.includes(s));
    } else if (cat.stageMatches) {
matched = stages.some(s => cat.stageMatches.includes(s));
    }
    return { ...cat, score: matched ? 5 : 1 };
  });
}

// ============================================================
// GEOGRAPHIC INVESTMENT HEATMAP - like the philosophy scorecard,
// every region score here is derived from real, sourced data
// rather than invented. Two tiers, deliberately not a fake 1-5
// precision scale:
//   - Primary region (score 5): derived automatically from the
//     firm's real headquarters address (firm.hq) - always
//     available, zero new research needed.
//   - Secondary regions (score 3): only added via firmGeography
//     below, and only for firms where a specific additional
//     office or market was explicitly confirmed during that
//     firm's research (see its thesis/timeline for the same
//     facts in prose) - e.g. Battery Ventures' Tel Aviv and
//     London offices, GV's London office, IVP's 2023 London
//     office, Index Ventures' San Francisco office.
// Every other firm shows a single, honest, HQ-derived region
// until dedicated geography research is done for it - exactly
// the same "gracefully handle missing data" pattern used by the
// performance dashboard and philosophy scorecard.
// ============================================================
function getRegionFromHQ(hq) {
  // Same guard as getCountryFromHQ: hq is null for firms that publish none.
  if (typeof hq !== 'string' || !hq) return null;
  if (hq.includes(', UK') || hq.includes('London')) return 'United Kingdom';
  // Every other firm's HQ in this dataset is a US city/state
  return 'United States';
}

function computeGeography(firm) {
  const primary = getRegionFromHQ(firm.hq);
  const secondary = (firmGeography[firm.slug] && firmGeography[firm.slug].secondary) || [];
  // No HQ on file means no primary region to plot - the firm still gets any
  // secondary regions its own research recorded, rather than a fabricated one.
  const regions = primary ? [{ region: primary, score: 5 }] : [];
  secondary.forEach(r => {
    if (r !== primary) regions.push({ region: r, score: 3 });
  });
  return regions;
}

// ============================================================
// VC GENOME - synthesizes everything already computed elsewhere
// on the page (sectors, stages, geography, philosophy, Power
// Score, AUM, years active, tracked holdings) into one visual
// signature per firm. Every dimension is a real percentile or
// ratio computed against the current dataset - nothing is
// hand-picked per firm, and every score automatically recalculates
// as more firms are added, so the whole database's genomes shift
// together rather than needing custom tuning. That's what makes
// each firm's genome genuinely different: it's a direct visual
// fingerprint of its actual data relative to its peers.
// ============================================================
function computeGenomeScores(firm) {
  const currentYear = new Date().getFullYear();
  const maxHoldings = Math.max(...firms.map(f => f.holdings.length));
  const maxAUM = Math.max(...firms.map(f => parseAumNumber(f.aum)));
  const maxYearsActive = Math.max(...firms.map(f => currentYear - f.founded));
  const maxSectors = Math.max(...firms.map(f => f.sectors.length));
  const maxRegions = Math.max(...firms.map(f => computeGeography(f).length));

  const philScores = computePhilosophyScores(firm);
  const philIntensity = (philScores.reduce((sum, c) => sum + c.score, 0) / (philScores.length * 5)) * 100;

  // Fund Size uses the same log+sqrt curve as computePowerScore's
  // Capital Scale component, not a straight linear ratio. A linear
  // ratio against the single largest fund on the page punishes any
  // firm that isn't literally #1 - a16z at ~$45B was landing around
  // 51 purely because a bigger fund exists, despite being globally
  // elite. This keeps the Genome's fund-size bar consistent with
  // how Power Score already treats the same real AUM number.
  const fundSizeRatio = maxAUM > 0 ? Math.log10(parseAumNumber(firm.aum) + 1) / Math.log10(maxAUM + 1) : 0;
  const fundSizeScore = Math.round(Math.sqrt(fundSizeRatio) * 100);

const dimensions = [
    { key: 'fundSize', label: 'Fund Size', value: fundSizeScore, color: '#2F6FED' },
    { key: 'portfolio', label: 'Portfolio Breadth', value: Math.round((firm.holdings.length / maxHoldings) * 100), color: '#6389C4' },
    { key: 'stageBreadth', label: 'Stage Breadth', value: Math.round(((firmStages[firm.slug] || []).length / 6) * 100), color: '#7CA8F7' },
    { key: 'sectorBreadth', label: 'Sector Breadth', value: Math.round((firm.sectors.length / maxSectors) * 100), color: '#1E4FBF' },
    { key: 'geoReach', label: 'Geographic Reach', value: Math.round((computeGeography(firm).length / maxRegions) * 100), color: '#4DD2E8' },
    { key: 'longevity', label: 'Years Active', value: Math.round(((currentYear - firm.founded) / maxYearsActive) * 100), color: '#6C8CB8' },
  { key: 'powerScore', label: 'Power Score™', value: computePowerScore(firm), color: '#2F6FED' },
{ key: 'philosophy', label: 'Focus Intensity', value: Math.round(philIntensity), color: '#8B5CF6' }
  ];
  return dimensions;
}

// ============================================================
// SIMILAR FIRMS - finds the firms with the closest overall
// investment profile to a given firm, using straight-line
// (Euclidean) distance across the same 8 real, already-computed
// Genome dimensions (fund size, portfolio breadth, stage breadth,
// sector breadth, geographic reach, years active, Power Score,
// philosophy intensity). No new data, no separate "similarity"
// scoring logic to maintain - two firms are "similar" here purely
// because their real Genomes are numerically close, and results
// automatically shift as more firms are added or existing data
// is refined, with zero code changes needed.
// ============================================================
function computeSimilarFirms(firm, count = 3) {
  const targetVector = computeGenomeScores(firm).map(d => d.value);

  const distances = firms
    .filter(f => f.slug !== firm.slug)
    .map(f => {
      const vector = computeGenomeScores(f).map(d => d.value);
      const distance = Math.sqrt(vector.reduce((sum, v, i) => sum + Math.pow(v - targetVector[i], 2), 0));
      return { firm: f, distance };
    });

  distances.sort((a, b) => a.distance - b.distance);
  return distances.slice(0, count);
}

// ============================================================
// INVESTMENT PERSONALITY - a one-line, plain-English description
// of each firm's investing style, assembled entirely from simple
// rules against real data already computed elsewhere on this page
// (firmStages, sectors, computeGeography, computePhilosophyScores,
// firm.aum, computePowerScore). No AI, no invented text - every
// word is chosen by a deterministic rule against a real number.
//
// Rather than one giant if/else per possible combination (which
// would need hundreds of branches to cover every stage x sector x
// concentration x geography combination), this picks one
// descriptor independently per axis, then assembles them into a
// sentence - the same "small number of rules, many combinations"
// pattern used by the Philosophy Scorecard and Genome above.
// ============================================================
/* computeInvestmentPersonality() lived here. It assembled a sentence
   from adjectives picked off the Power Score, stage list and sector
   count, which produced confident-sounding filler that fit almost any
   firm. Power Personality (power-personality.js) does the same job from
   the firm's own tags, states its evidence, and declines to classify
   the 32 firms that do not clear the floor. Both were rendering on the
   firm page, one directly under the other. */

// ============================================================
// WHY THIS VC - four persuasive, plain-English bullets per firm,
// entirely rule-based from real data already computed elsewhere
// on this page (rank, AUM, the firm's own sourced signatureExit
// text, the Philosophy Scorecard's real 5-star categories, and
// firmStages). No AI, no invented claims. Deliberately excludes
// anything unverifiable like "founder-friendly" or "hands-on
// support" - same reasoning as the Philosophy Scorecard's excluded
// categories - and substitutes the firm's own real signature exit
// as an equally compelling, honestly-sourced highlight instead.
// ============================================================
function computeWhyThisVC(firm) {
  const bullets = [];
  /* aum and signatureExit are honestly null on firms where no sourced
     figure exists (never-guess policy). This function assumed strings
     and produced a crashed page for null aum and a rendered
     "Signature win: undefined." for null exits. Every bullet now
     requires its underlying fact to exist - a missing fact means a
     missing bullet, not a fabricated or broken one. */
  const cleanAum = firm.aum ? firm.aum.replace(/\s*\(.*?\)/, '') : null;

  function listJoin(arr) {
    if (arr.length <= 1) return arr.join('');
    if (arr.length === 2) return arr.join(' and ');
    return arr.slice(0, -1).join(', ') + ', and ' + arr[arr.length - 1];
  }

  // --- Scale bullet, from real rank + AUM (only when AUM is on file) ---
  if (cleanAum) {
    if (firm.rank != null && firm.rank <= 3) {
      bullets.push(`One of the largest venture capital firms in the world, ranked #${firm.rank} by assets under management (${cleanAum}).`);
    } else if (firm.rank != null && firm.rank <= 10) {
      bullets.push(`A top-10 firm by assets under management, with ${cleanAum} in committed capital.`);
    } else {
      bullets.push(`Manages ${cleanAum} in assets, with a real track record across market cycles.`);
    }
  }

  // --- Signature exit bullet, only when the firm actually has one on file ---
  if (firm.signatureExit) {
    bullets.push(`Signature win: ${firm.signatureExit}.`);
  }

  // --- Sector focus bullet, from the Philosophy Scorecard's real 5-star categories ---
  const philScores = computePhilosophyScores(firm);
  const topSectors = philScores.filter(p => p.score === 5 && !['earlyStage', 'growthStage'].includes(p.key)).map(p => p.label.replace(' Focus', ''));
  if (topSectors.length >= 3) {
    bullets.push(`Broad sector coverage spanning ${topSectors.length} focus areas, including ${listJoin(topSectors.slice(0, 3))}.`);
  } else if (topSectors.length > 0) {
    bullets.push(`Concentrated focus on ${listJoin(topSectors)}.`);
  } else {
    bullets.push(`Sector-agnostic approach across ${firm.sectors.length} tracked industries.`);
  }

  // --- Stage bullet, from firmStages ---
  const stages = firmStages[firm.slug] || [];
  if (stages.length >= 5) {
    bullets.push(`Invests across nearly every stage, from ${stages[0]} through ${stages[stages.length - 1]}.`);
  } else if (stages.length > 0) {
    bullets.push(`Specializes in ${listJoin(stages)} investing.`);
  } else {
    bullets.push(`Stage focus not yet researched for this firm.`);
  }

  return bullets;
}

// Renders one firm's full detail page into #detailView
  // Builds the Investment Performance Dashboard for a firm's detail
// page. Combines two kinds of metrics:
//   1. Computed live from data already on the page (Power Score,
//      years active, tracked public holdings, most valuable
//      holding, current fund size) - always available, zero risk
//      of being wrong or stale.
//   2. Looked up from firmPerformance (total portfolio, unicorns,
//      IPO exits, acquisitions) - real sourced figures where
//      research turned them up, genuinely absent otherwise. Cards
//      for missing fields are skipped entirely, never shown as
//      "N/A" or a placeholder.
// This is the reusable foundation: adding a new metric for more
// firms later just means adding a key to firmPerformance above -
// no changes needed here or to the rendering logic.
function renderPerformanceDashboard(firm) {
  const perf = firmPerformance[firm.slug] || {};
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - firm.founded;

  // Find the most valuable currently-priced holding, if any
  const pricedHoldings = firm.holdings.filter(h => h.price !== null);
  const mostValuable = pricedHoldings.length > 0
    ? pricedHoldings.reduce((a, b) => (b.price > a.price ? b : a))
    : null;

  // Build the metric list - order matters for visual hierarchy.
  // Each entry is skipped automatically if its value is null/undefined.
  const metrics = [
    { label: 'Total Portfolio Companies', value: perf.totalPortfolio ? `${perf.totalPortfolio}+` : null },
    { label: 'Public Companies Tracked', value: firm.holdings.length },
    { label: 'Unicorns', value: perf.unicorns ? `${perf.unicorns}+` : null },
    { label: 'IPO Exits', value: perf.ipoExits ? `${perf.ipoExits}+` : null },
    { label: 'Acquisitions', value: perf.acquisitions ? `${perf.acquisitions}+` : null },
  { label: 'Power Score™', value: computePowerScore(firm) },
    { label: 'Years Active', value: yearsActive },
    { label: 'Current Fund Size', value: firm.aum, isText: true },
    { label: 'Most Valuable Holding', value: mostValuable ? `${mostValuable.name} (${mostValuable.ticker})` : null, isText: true }
  ].filter(m => m.value !== null && m.value !== undefined);

  const cardsHTML = metrics.map((m, i) => `
    <div class="perf-stat-card" style="animation-delay: ${i * 0.05}s;">
      <div class="perf-stat-value ${m.isText ? 'text-value' : ''}">${m.value}</div>
      <div class="perf-stat-label">${m.label}</div>
    </div>
  `).join('');

  const hasResearchedStats = Object.keys(perf).length > 0;

  return `
    <div class="performance-dashboard">
      <div class="performance-dashboard-label">Investment Performance</div>
      <div class="performance-dashboard-sub">Real, sourced metrics - figures with a "+" are approximate, gathered from the firm's own reporting or reputable coverage.</div>
      <div class="perf-stat-grid">${cardsHTML}</div>
      ${!hasResearchedStats ? '<div class="performance-dashboard-note">Total portfolio, unicorn, IPO, and acquisition counts for this firm haven\'t been researched yet - shown here are only the metrics already verified on this page.</div>' : ''}
    </div>
  `;
}

// Builds the Investment Philosophy Scorecard for a firm's detail
// page. Every score comes from computePhilosophyScores(), which
// derives them deterministically from the firm's real, sourced
// sectors and investment stages - nothing here is hand-picked per
// firm. Adding a category later means adding one entry to
// philosophyCategories above; this function needs no changes.
/* renderPhilosophyScorecard() lived here. The scorecard showed the same
   sector and stage tags the profile already lists, redrawn as five-step
   bars, so it restated what was directly above it without adding a fact.

   computePhilosophyScores() below it stays: the Genome's Focus Intensity
   axis and the Compare view's top-focus list both read it. Deleting the
   panel is a display change, not a data one. */
// Simple flag lookup for the regions currently in use. Falls back
// to a globe icon for any future region without a specific flag,
// so adding new regions never requires touching this function.
const regionFlags = {
  'United States': '',
  'United Kingdom': '',
  'Israel': '',
  'Canada': '',
  'Europe': '',
  'India': '',
  'Australia & New Zealand': '',
  'Latin America': '',
  'Southeast Asia': '',
  'East Asia': '',
  'Middle East': '',
  'Africa': ''
};

// Builds the Geographic Investment Heatmap for a firm's detail
// page. Regions come from computeGeography(), which derives them
// from the firm's real headquarters plus any specifically
// verified secondary offices in firmGeography above - see the
// comment block near that data for the honesty rationale.
function renderGeographicHeatmap(firm) {
  const regions = computeGeography(firm);
  const hasSecondary = regions.length > 1;

  const rowsHTML = regions.map((r, i) => {
    const tier = r.score === 5 ? 'primary' : 'secondary';
    const tierLabel = r.score === 5 ? 'Headquarters Region' : 'Confirmed Office';
    const flag = regionFlags[r.region] || '';
    const fillPct = r.score * 20;
    return `
      <div class="geo-row ${tier}">
        <div class="geo-row-header">
          <span class="geo-flag">${flag}</span>
          <span class="geo-region-name">${r.region}</span>
          <span class="geo-tier-label">${tierLabel}</span>
        </div>
        <div class="geo-bar-track">
          <div class="geo-bar-fill" style="width: ${fillPct}%; animation-delay: ${i * 0.06}s;"></div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="geo-heatmap">
      <div class="geo-heatmap-label">Geographic Investment</div>
      <div class="geo-heatmap-sub">Headquarters region is confirmed for every firm; additional regions are shown only where a specific office or market was verified during research.</div>
      ${rowsHTML}
      ${!hasSecondary ? '<div class="geo-heatmap-note">No additional regions have been researched for this firm yet - shown here is its confirmed headquarters region only.</div>' : ''}
    </div>
  `;
}

// Builds the VC Genome visual signature for a firm's detail page.
// Every bar height comes straight from computeGenomeScores() - a
// direct, unedited visualization of real data computed relative
// to the current dataset. The "Strongest In" line is purely
// mechanical too: it just names the top 2 dimensions by score,
// no editorial judgment involved.
function renderGenome(firm) {
  const dims = computeGenomeScores(firm);
  const barsHTML = dims.map((d, i) => `
    <div class="genome-bar-col">
      <div class="genome-bar-value">${d.value}</div>
      <div class="genome-bar-track">
        <div class="genome-bar-fill" style="height: ${d.value}%; background: ${d.color}; animation-delay: ${i * 0.05}s;"></div>
      </div>
      <div class="genome-bar-label">${d.label}</div>
    </div>
  `).join('');

  const strongest = [...dims].sort((a, b) => b.value - a.value).slice(0, 2).map(d => d.label);

  return `
    <div class="genome-panel">
      <div class="genome-panel-label">VC Genome</div>
      <div class="genome-panel-sub">A visual signature of this firm relative to every other firm tracked on the page - computed live from its real sector, stage, geographic, and performance data.</div>
      <div class="genome-strip">${barsHTML}</div>
      <div class="genome-strongest">Strongest in: <strong>${strongest.join('</strong> and <strong>')}</strong></div>
    </div>
  `;
}

// Builds the "Why This VC?" card for a firm's detail page. Every
// bullet comes straight from computeWhyThisVC() - a direct,
// unedited list of real, rule-derived facts, not persuasive copy
// written separately from the data.
function renderWhyThisVC(firm) {
  const bullets = computeWhyThisVC(firm);
  const itemsHTML = bullets.map(b => `
    <li class="why-this-vc-item">
      <span class="why-this-vc-bullet">•</span>
      <span>${b}</span>
    </li>
  `).join('');

  return `
    <div class="why-this-vc">
      <div class="why-this-vc-title">Why ${firm.short}?</div>
      <ul class="why-this-vc-list">${itemsHTML}</ul>
    </div>
  `;
}

// Builds the Similar Firms section for a firm's detail page.
// Match % is the Euclidean distance from computeSimilarFirms(),
// normalized against the maximum possible distance across 8
// dimensions each 0-100 (sqrt(8 * 100^2) ≈ 282.8) - a real,
// deterministic conversion of the same real distance number, not
// a separately invented score.
const MAX_GENOME_DISTANCE = Math.sqrt(8 * 100 ** 2);

function renderSimilarFirms(firm) {
  const similar = computeSimilarFirms(firm, 3);
  const cardsHTML = similar.map(({ firm: f, distance }) => {
    const matchPct = Math.round((1 - distance / MAX_GENOME_DISTANCE) * 100);
    return `
      <a href="#${f.slug}" class="similar-firm-card">
        <div class="similar-firm-name">${f.name}</div>
        <div class="similar-firm-aum">${f.aum || ''}</div>
        <div class="similar-firm-match">${matchPct}% profile match</div>
      </a>
    `;
  }).join('');

  return `
    <div class="similar-firms">
      <div class="similar-firms-label">Similar Firms</div>
      <div class="similar-firms-sub">Firms with the closest overall investment profile to ${firm.short}, based on real fund size, portfolio breadth, stage, sector, and geographic data.</div>
      <div class="similar-firms-grid">${cardsHTML}</div>
    </div>
  `;
}

// Renders the dedicated Analytics Dashboard page into #dashboardView:
// a visual AUM bar chart for all 63 firms, and a performance
// leaderboard built from every holding that has real historical
// price data on file (see historicalPrice field on each holding).
function renderDashboard() {
  const maxAUM = Math.max(...firms.map(f => parseAumNumber(f.aum)));

  /* A bar chart of AUM cannot honestly include a firm whose AUM is
     not on file; those firms are omitted rather than shown as "null"
     with a zero-width bar. */
  const aumRows = firms.filter(f => f.aum).map(f => {
    const val = parseAumNumber(f.aum);
    return `
      <div class="aum-bar-row">
        <div class="aum-bar-name">${f.short}</div>
        <div class="aum-bar-track">
          <div class="aum-bar-fill" style="width: ${(val / maxAUM) * 100}%"></div>
        </div>
        <div class="aum-bar-value">${f.aum}</div>
      </div>`;
  }).join('');

  // Build a de-duplicated leaderboard: one entry per unique ticker
  // that has a real historicalPrice, even if several firms hold it.
  const seen = new Map();
  firms.forEach(f => f.holdings.forEach(h => {
    if (h.historicalPrice !== null && h.price !== null && !seen.has(h.ticker)) {
      const pct = ((h.price - h.historicalPrice) / h.historicalPrice) * 100;
      seen.set(h.ticker, { name: h.name, ticker: h.ticker, pct });
    }
  }));
  const leaderboard = [...seen.values()].sort((a, b) => b.pct - a.pct);

  const leaderboardHTML = leaderboard.length > 0 ? leaderboard.map((item, i) => {
    const r = Number(item.pct.toFixed(1));
    const cls = r > 0 ? 'positive' : r < 0 ? 'negative' : 'flat';
    const sign = item.pct >= 0 ? '+' : '';
    return `
      <div class="leaderboard-row">
        <div class="leaderboard-rank">${i + 1}</div>
        <div class="leaderboard-name">${item.name}<span class="ticker">${item.ticker}</span></div>
        <span class="return-badge ${cls}">${typeof directionLabel === 'function' ? directionLabel(r) : ''}${sign}${r.toFixed(1)}%</span>
      </div>`;
  }).join('') : `<p class="leaderboard-note">No holdings with verified historical prices yet.</p>`;

  document.getElementById('dashboardView').innerHTML = `
    <a href="#" class="detail-back" id="backFromDashboard">← Back to all firms</a>
    <div class="dashboard-title">Analytics Dashboard</div>
<p class="dashboard-sub">Two real views into the data already on this page: how the ${firms.length} tracked firms stack up by assets managed, and how their public portfolio companies have actually performed since January 2, 2025.</p>

    <div class="dashboard-section">
      <div class="analytics-subhead">Firms Ranked by AUM</div>
      ${aumRows}
    </div>

    <div class="dashboard-section">
      <div class="analytics-subhead">Portfolio Performance Leaderboard (Since Jan '25)</div>
      <p class="leaderboard-note" style="margin-bottom: 12px;">Only companies with a verified historical starting price are included - see the Methodology section for how the rest get filled in over time.</p>
      ${leaderboardHTML}
    </div>
  `;

  document.getElementById('backFromDashboard').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '';
  });
}

// Computes and renders "By the Numbers" - real stats derived from
// the firms array itself, not hardcoded, so it stays accurate as
// firms get added or edited.
function renderAnalytics() {
  const totalFirms = firms.length;
  const totalHoldings = firms.reduce((sum, f) => sum + f.holdings.length, 0);

 const combinedAUM = Math.round(firms.reduce((sum, f) => sum + parseAumNumber(f.aum), 0));

  const oldestFirm = firms.reduce((a, b) => (a.founded < b.founded ? a : b));
  const newestFirm = firms.reduce((a, b) => (a.founded > b.founded ? a : b));

  /* The By the Numbers markup was removed from index.html, so these two
     targets no longer exist. They were written to unguarded, which threw
     and stopped the function before it reached the Power Personality
     distribution at the end - the block simply vanished from the
     homepage with no error visible on the page. Guarded, the function
     now skips what is gone and still runs what is not. */
  const statRowEl = document.getElementById('statRow');
  if (statRowEl) statRowEl.innerHTML = `
    <div class="stat-box">
      <div class="num">${totalFirms}</div>
      <div class="lbl">Firms Tracked</div>
    </div>
    <div class="stat-box">
      <div class="num">${totalHoldings}</div>
      <div class="lbl">Portfolio Companies</div>
    </div>
 <div class="stat-box">
      <div class="num">${formatCombinedAUM(combinedAUM)}</div>
      <div class="lbl">Combined AUM (approx.)</div>
    </div>
    <div class="stat-box">
      <div class="num">${oldestFirm.founded}</div>
      <div class="lbl">Oldest: ${oldestFirm.short}</div>
    </div>
    <div class="stat-box">
      <div class="num">${newestFirm.founded}</div>
      <div class="lbl">Newest: ${newestFirm.short}</div>
    </div>
  `;

  /* Sector coverage, counted in CANONICAL buckets rather than raw tags.

     The raw `sectors` strings are each firm's own wording - there are
     157 of them, and charting all 157 produced a 5,585px column that
     trailed off into dozens of one-firm rows ("Sensor Technology 1",
     "Cloud Computing 1"). Rolling them up through taxonomy.js gives 21
     real categories and the same information in a readable block.

     No raw tag is discarded: every firm still shows its own wording on
     its profile, and the rollup is the same SECTOR_MAP the filter chips
     and the /companies/ pages already use, so the three always agree. */
  const useCanonical = typeof sectorFirmCounts === 'function' && typeof SECTOR_MAP !== 'undefined';
  let sortedSectors;
  if (useCanonical) {
    const counts = sectorFirmCounts(firms);
    sortedSectors = Object.keys(counts)
      .filter(k => counts[k] > 0)
      .map(k => [k === '__generalist' ? 'Generalist' : SECTOR_MAP[k].label, counts[k]])
      .sort((a, b) => b[1] - a[1]);
  } else {
    // taxonomy.js absent - fall back to the raw tally rather than blank
    const sectorCounts = {};
    firms.forEach(f => (f.sectors || []).forEach(s => {
      sectorCounts[s] = (sectorCounts[s] || 0) + 1;
    }));
    sortedSectors = Object.entries(sectorCounts).sort((a, b) => b[1] - a[1]);
  }
  const maxCount = sortedSectors.length ? sortedSectors[0][1] : 1;

  const sectorChartEl = document.getElementById('sectorChart');
  if (sectorChartEl) sectorChartEl.innerHTML = sortedSectors.map(([sector, count]) => `
    <div class="sector-row">
      <div class="sector-name">${sector}</div>
      <div class="sector-bar-track">
        <div class="sector-bar-fill" style="width: ${(count / maxCount) * 100}%"></div>
      </div>
      <div class="sector-count">${count}</div>
    </div>
  `).join('');

  /* Signature exits.

     TWO fixes here. First, this mapped over every firm, but only 300 of
     361 have a signatureExit - so 71 rows rendered the literal string
     "undefined" on the homepage (Vy Capital, Sutter Hill, Alven and 68
     others). Filtering first is the actual bug fix.

     Second, printing 300 rows down the homepage produced a 41,273px
     block - 72% of the entire page. The full list is still built and
     still in the DOM; it is just collapsed behind a control, so the
     data is complete but the page is readable. Nothing is dropped. */
  const EXIT_PREVIEW = 8;
  const withExits = firms.filter(f => f.signatureExit);
  const exitRow = f => `
    <div class="exit-row">
      <div class="exit-firm">${f.name}</div>
      <div class="exit-detail">${f.signatureExit}</div>
    </div>`;

  const exitsEl = document.getElementById('exitsList');
  if (exitsEl) {
    exitsEl.innerHTML =
      `<div class="exits-preview">${withExits.slice(0, EXIT_PREVIEW).map(exitRow).join('')}</div>` +
      `<div class="exits-rest" id="exitsRest" hidden>${withExits.slice(EXIT_PREVIEW).map(exitRow).join('')}</div>` +
      `<button type="button" class="exits-toggle" id="exitsToggle"
               aria-expanded="false" aria-controls="exitsRest">
         Show all ${withExits.length} signature exits
       </button>` +
      `<p class="exits-note">${withExits.length} of ${firms.length} tracked firms have a
       verified signature exit on file. The remaining ${firms.length - withExits.length}
       have none recorded - shown as absent rather than guessed.</p>`;

    const toggle = document.getElementById('exitsToggle');
    const rest = document.getElementById('exitsRest');
    if (toggle && rest) {
      toggle.addEventListener('click', () => {
        const open = !rest.hidden;
        rest.hidden = open;
        toggle.setAttribute('aria-expanded', String(!open));
        toggle.textContent = open
          ? `Show all ${withExits.length} signature exits`
          : 'Show fewer';
      });
    }
  }

  renderDataCoverage();
  if (typeof renderPersonalityDistribution === 'function') renderPersonalityDistribution();
}
// ============================================================
// PEER FIRMS BY CATEGORY / LOCATION / STAGE - a second, distinct
// form of "similar firms" alongside computeSimilarFirms() above.
// That function finds statistically similar firms across 8 Genome
// dimensions; this one finds EXPLICIT shared-criteria peers (same
// canonical sector, same HQ region, same investment stage) using
// the exact same taxonomy.js mapping that builds the /companies/,
// /locations/, and /stages/ static pages - so a firm's peer list
// here always agrees with which hub pages it actually appears on.
// ============================================================

// Maps a firm's raw sectors[] tags to canonical category slugs from
// taxonomy.js, in SECTOR_MAP's declared priority order. A firm can
// span multiple categories (e.g. "AI Security" -> both ai and
// cybersecurity); this returns all of them.
function getFirmCanonicalSectors(firm) {
  if (typeof SECTOR_MAP === 'undefined') return [];
  const matched = [];
  Object.entries(SECTOR_MAP).forEach(([slug, cfg]) => {
    if ((firm.sectors || []).some(raw => cfg.rawTags.includes(raw))) {
      matched.push(slug);
    }
  });
  return matched;
}

function getFirmCanonicalLocation(firm) {
  if (typeof LOCATION_MAP === 'undefined') return null;
  const entry = Object.entries(LOCATION_MAP).find(([slug, cfg]) => cfg.rawHQs.includes(firm.hq));
  return entry ? entry[0] : null;
}

// Returns up to `count` other firms sharing the firm's PRIMARY
// canonical sector (the first one matched, in SECTOR_MAP order),
// sorted by Power Score so the strongest peers show first.
function computeSectorPeers(firm, count = 4) {
  const sectors = getFirmCanonicalSectors(firm);
  if (sectors.length === 0) return { categorySlug: null, categoryLabel: null, peers: [] };
  const primary = sectors[0];
  const cfg = SECTOR_MAP[primary];
  const peers = firms
    .filter(f => f.slug !== firm.slug && getFirmCanonicalSectors(f).includes(primary))
    .sort((a, b) => computePowerScore(b) - computePowerScore(a))
    .slice(0, count);
  return { categorySlug: primary, categoryLabel: cfg.label, peers };
}

function computeLocationPeers(firm, count = 4) {
  const locationSlug = getFirmCanonicalLocation(firm);
  if (!locationSlug) return { locationSlug: null, locationLabel: null, peers: [] };
  const cfg = LOCATION_MAP[locationSlug];
  const peers = firms
    .filter(f => f.slug !== firm.slug && getFirmCanonicalLocation(f) === locationSlug)
    .sort((a, b) => computePowerScore(b) - computePowerScore(a))
    .slice(0, count);
  return { locationSlug, locationLabel: cfg.label, peers };
}

function computeStagePeers(firm, count = 4) {
  const stages = firmStages[firm.slug] || [];
  if (stages.length === 0) return { stageSlug: null, stageLabel: null, peers: [] };
  // Use the firm's most specific (least common) stage as the shared
  // link, preferring earlier-stage tags since those are usually the
  // more differentiating signal for a firm's identity.
  const primaryStage = stages[0];
  const stageSlugMap = { 'Pre-Seed': 'pre-seed', 'Seed': 'seed', 'Series A': 'series-a', 'Series B': 'series-b', 'Growth': 'growth', 'Late Stage': 'late-stage' };
  const slug = stageSlugMap[primaryStage];
  if (!slug) return { stageSlug: null, stageLabel: null, peers: [] };
  const peers = firms
    .filter(f => f.slug !== firm.slug && (firmStages[f.slug] || []).includes(primaryStage))
    .sort((a, b) => computePowerScore(b) - computePowerScore(a))
    .slice(0, count);
  return { stageSlug: slug, stageLabel: primaryStage, peers };
}

// Renders the full "Explore Related Firms" section for a firm's
// detail page - reuses the existing .similar-firm-card styling from
// computeSimilarFirms()/renderSimilarFirms() above so it looks like
// a native part of the page, not a bolted-on addition. Each group
// (category/location/stage) that has real peers gets its own row,
// with a link back to that group's static hub page - the same page
// generate-seo-pages.js builds - so browsing flows naturally in
// both directions between the SPA and the static SEO layer.
function renderPeerFirmLinks(firm) {
  const sectorResult = computeSectorPeers(firm);
  const locationResult = computeLocationPeers(firm);
  const stageResult = computeStagePeers(firm);

  const groups = [];
  if (sectorResult.peers.length > 0) {
    groups.push({
      label: `More ${sectorResult.categoryLabel} Firms`,
      hubLink: `companies/${sectorResult.categorySlug}/`,
      hubLinkText: `See all ${sectorResult.categoryLabel} firms →`,
      peers: sectorResult.peers,
    });
  }
  if (locationResult.peers.length > 0) {
    groups.push({
      label: `More Firms in ${locationResult.locationLabel}`,
      hubLink: `locations/${locationResult.locationSlug}/`,
      hubLinkText: `See all ${locationResult.locationLabel} firms →`,
      peers: locationResult.peers,
    });
  }
  if (stageResult.peers.length > 0) {
    groups.push({
      label: `More ${stageResult.stageLabel} Investors`,
      hubLink: `stages/${stageResult.stageSlug}/`,
      hubLinkText: `See all ${stageResult.stageLabel} investors →`,
      peers: stageResult.peers,
    });
  }

  if (groups.length === 0) return '';

  const groupsHtml = groups.map(g => `
    <div class="similar-firms" style="margin-bottom: 28px;">
      <div class="similar-firms-label">${g.label}</div>
      <div class="similar-firms-grid">
        ${g.peers.map(p => `
          <a href="#${p.slug}" class="similar-firm-card">
            <div class="similar-firm-name">${p.name}</div>
            <div class="similar-firm-aum">${p.aum}</div>
          </a>
        `).join('')}
      </div>
      <a href="${g.hubLink}" class="firm-page-link" style="margin-top: 10px; display: inline-block;">${g.hubLinkText}</a>
    </div>
  `).join('');

  return `
    <div class="detail-subhead">Explore Related Firms</div>
    ${groupsHtml}
  `;
}


/* ============================================================
   DATA COVERAGE
   How complete the dataset actually is, counted from the dataset
   itself. Every number below is computed at render time - there
   are no stored percentages, so a firm added tomorrow moves these
   bars without anyone editing this file.

   The point is not to look finished. Portfolio pricing in
   particular is thin, and saying so plainly is worth more than a
   bar quietly rounded up. Where a figure is low it is shown low.
   ============================================================ */
function computeDataCoverage() {
  const num = v => typeof v === 'number' && isFinite(v);
  const F = typeof firms !== 'undefined' && Array.isArray(firms) ? firms : [];
  const P = (typeof partnerProfiles !== 'undefined' && partnerProfiles)
    ? Object.keys(partnerProfiles).map(k => partnerProfiles[k]) : [];

  // flatten every holding row once
  const H = [];
  F.forEach(f => (f.holdings || []).forEach(h => H.push(h)));

  const firmHas = fn => F.filter(fn).length;
  const holdHas = fn => H.filter(fn).length;

  return {
    groups: [
      {
        label: 'Firm records',
        denom: F.length,
        denomLabel: 'firms',
        rows: [
          { label: 'Founding year on file',   n: firmHas(f => num(f.founded)) },
          { label: 'Leadership listed',       n: firmHas(f => (f.leadership || []).length > 0) },
          { label: 'Firm timeline',           n: firmHas(f => (f.timeline || []).length > 0) },
          { label: 'Signature exit recorded', n: firmHas(f => !!f.signatureExit) }
        ]
      },
      {
        label: 'Portfolio pricing',
        denom: F.length,
        denomLabel: 'firms',
        rows: [
          { label: 'Has tracked holdings',    n: firmHas(f => (f.holdings || []).length > 0) },
          { label: 'Has a current price',     n: firmHas(f => (f.holdings || []).some(h => num(h.price))) },
          { label: 'Has a buy-in price',      n: firmHas(f => (f.holdings || []).some(h => num(h.historicalPrice))) },
          { label: 'Has both, same holding',  n: firmHas(f => (f.holdings || []).some(h => num(h.price) && num(h.historicalPrice))) }
        ]
      },
      {
        label: 'Partner profiles',
        denom: P.length,
        denomLabel: 'partners',
        rows: [
          { label: 'At least one source',     n: P.filter(p => (p.sources || []).length > 0).length },
          { label: 'Career timeline',         n: P.filter(p => (p.careerTimeline || []).length > 0).length },
          { label: 'Education on file',       n: P.filter(p => (p.education || []).length > 0).length },
          { label: 'Notable investments',     n: P.filter(p => (p.notableInvestments || []).length > 0).length }
        ]
      }
    ],
    holdingRows: H.length,
    holdingsPriced: holdHas(h => num(h.price)),
    holdingsWithBuy: holdHas(h => num(h.historicalPrice))
  };
}

function renderDataCoverage() {
  const host = document.getElementById('byTheNumbersSection');
  if (!host) return;

  let el = document.getElementById('dataCoverage');
  if (!el) {
    el = document.createElement('div');
    el.id = 'dataCoverage';
    el.className = 'coverage-block';
    host.appendChild(el);
  }

  const c = computeDataCoverage();
  const pct = (n, d) => (d ? Math.round((n / d) * 100) : 0);

  // Bars below 25% are marked so a thin figure reads as thin rather
  // than as a short bar someone might not look at twice.
  const bar = (row, denom) => {
    const p = pct(row.n, denom);
    const thin = p < 25 ? ' is-thin' : '';
    return `
      <div class="coverage-row">
        <div class="coverage-label">${row.label}</div>
        <div class="coverage-track">
          <div class="coverage-fill${thin}" style="width: ${p}%"></div>
        </div>
        <div class="coverage-figure"><span class="coverage-pct">${p}%</span>
          <span class="coverage-count">${row.n} of ${denom}</span></div>
      </div>`;
  };

  el.innerHTML = `
    <div class="analytics-subhead">Data Coverage</div>
    <p class="coverage-intro">How complete this dataset actually is, counted from the data on this
       page rather than claimed. Where a field is thinly covered, the bar shows it.</p>
    ${c.groups.map(g => `
      <div class="coverage-group">
        <div class="coverage-group-label">${g.label}
          <span class="coverage-group-denom">${g.denom} ${g.denomLabel}</span></div>
        ${g.rows.map(r => bar(r, g.denom)).join('')}
      </div>`).join('')}
    <p class="coverage-note">Pricing is the thinnest part of the dataset:
       ${c.holdingsPriced} of ${c.holdingRows} tracked holdings carry a current price, but only
       ${c.holdingsWithBuy} carry a buy-in price, so a return can be computed for a minority of
       positions. Holdings are public-market positions only - private portfolio companies are not
       priced here, and a firm with no tracked holdings is one we have not verified holdings for,
       not one without a portfolio.</p>`;
}
