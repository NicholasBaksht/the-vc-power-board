/* ============================================================
   FIND-INVESTORS.JS
   POWER MATCH - the founder questionnaire: all its answer state,
   the match-scoring engine (computeFinderMatches and its
   supporting label/range helpers), and the results renderer.

   "Power Match" is the user-facing brand. Every identifier in
   this file - the route #find-investors, findInvestorsView,
   renderFindInvestors, computeFinderMatches, the finder-* CSS
   classes - deliberately keeps its original name. A rebrand is
   not a reason to rename working internals, and the route stays
   put so existing links and bookmarks keep resolving.

   Not to be confused with discovery-engine.js, which is the
   separate free-text search feature branded "VC Discovery
   Engine". Two different features, two different names.
   ============================================================ */
// Renders a full partner profile page into #partnerView, using the
// data in partnerProfiles keyed by slug.
  // ============================================================
// FIND MY INVESTORS - a founder-facing questionnaire that matches
// against three real data points already on this page: sector
// focus, firm scale (AUM tier), and firm maturity (founding era).
// No invented "check size" or "stage" data - just what's real.
// ============================================================
let finderSectors = new Set();

let finderRaise = 'any';

let finderStages = new Set();

let finderRegion = 'any';

let finderFocus = 'any';

 // 'enterprise' | 'consumer' | 'any'
let finderAI = false;

// Maps a founder's real funding-round ask to the Investment Stage(s)
// that typically correspond to it - used to match against
// firmStages (real, already-sourced data), NOT against fund AUM
// tiers. A founder's own raise amount has nothing to do with how
// large the FUND is; it corresponds to what stage they're raising
// at, which is what founders actually mean by this question.
const RAISE_TO_STAGES = {
  under500k: ['Pre-Seed'],
  '500kto1m': ['Pre-Seed', 'Seed'],
  '1mto3m': ['Seed'],
  '3mto10m': ['Seed', 'Series A'],
  '10mto25m': ['Series A'],
  '25mto50m': ['Series A', 'Series B'],
  '50mto100m': ['Series B', 'Growth'],
  '100mplus': ['Growth', 'Late Stage']
};

// Scores every firm 0-100 against the founder's answers, using a
// transparent weighted formula built entirely from real data
// already computed elsewhere on the page - firmStages, sectors,
// computeGeography, and the Philosophy Scorecard's AI/Enterprise/
// Consumer scores. Nothing here is a new invented signal.
// Weights: 25% Sector Fit, 20% Investment Stage, 15% Fund Scale,
// 15% Geographic Region, 10% Enterprise/Consumer Fit, 10% AI
// Focus, 5% Track Record (Power Score).
// A question the founder skips contributes half-credit rather than
// zero, so skipping never unfairly tanks a firm's score - and if
// NO questions are answered, the score naturally reduces to a
// ranking by real Power Score alone, since that's the only signal
// left to differentiate firms. Each criterion also produces a
// pass/fail "reason" for the checklist shown in the results.
function computeFinderMatches() {
  const results = firms.map(firm => {
    const reasons = [];
    const stages = firmStages[firm.slug] || [];
    const regions = computeGeography(firm).map(r => r.region);
    const philScores = computePhilosophyScores(firm);
    const aiScore = philScores.find(p => p.key === 'ai').score;
    const enterpriseScore = philScores.find(p => p.key === 'enterprise').score;
    const consumerScore = philScores.find(p => p.key === 'consumer').score;

    // Sector Fit - 25 points max
    let sectorPts;
    if (finderSectors.size > 0) {
      const overlap = firm.sectors.filter(s => finderSectors.has(s));
      sectorPts = (overlap.length / finderSectors.size) * 25;
      reasons.push({ label: `Invests in your industry`, passed: overlap.length > 0, points: sectorPts, maxPoints: 25,
        detail: overlap.length > 0 ? `Active in ${overlap.join(', ')}` : `No tracked activity in ${[...finderSectors].join(', ')}` });
    } else {
      sectorPts = 12.5;
      reasons.push({ label: 'Industry fit', passed: null, points: sectorPts, maxPoints: 25, detail: 'Not specified' });
    }

    // Investment Stage - 20 points max
    let stagePts;
    if (finderStages.size > 0) {
      const overlap = stages.filter(s => finderStages.has(s));
      stagePts = (overlap.length / finderStages.size) * 20;
      reasons.push({ label: 'Invests at your stage', passed: overlap.length > 0, points: stagePts, maxPoints: 20,
        detail: overlap.length > 0 ? `Invests at ${overlap.join(', ')}` : `Doesn't invest at ${[...finderStages].join(', ')}` });
    } else {
      stagePts = 10;
      reasons.push({ label: 'Stage fit', passed: null, points: stagePts, maxPoints: 20, detail: 'Not specified' });
    }

 // Funding Round Ask - 15 points max. Matched against real
    // investment stage data (the same firmStages used above),
    // since a founder's raise amount corresponds to a funding
    // stage, not a fund's AUM tier.
    let raisePts;
    if (finderRaise !== 'any') {
      const targetStages = RAISE_TO_STAGES[finderRaise] || [];
      const raiseMatch = stages.some(s => targetStages.includes(s));
      raisePts = raiseMatch ? 15 : 0;
      reasons.push({ label: 'Invests at your funding stage', passed: raiseMatch, points: raisePts, maxPoints: 15,
        detail: raiseMatch ? `Active at the stage that typically matches this raise size` : `Not typically active at the stage this raise size implies` });
    } else {
      raisePts = 7.5;
      reasons.push({ label: 'Funding stage fit', passed: null, points: raisePts, maxPoints: 15, detail: 'Not specified' });
    }

    // Geographic Region - 15 points max
    let regionPts;
    if (finderRegion !== 'any') {
      const regionMatch = regions.includes(finderRegion);
      regionPts = regionMatch ? 15 : 0;
      reasons.push({ label: `Active in ${finderRegion}`, passed: regionMatch, points: regionPts, maxPoints: 15,
        detail: regionMatch ? `Confirmed presence in ${finderRegion}` : `No confirmed presence in ${finderRegion}` });
    } else {
      regionPts = 7.5;
      reasons.push({ label: 'Geographic fit', passed: null, points: regionPts, maxPoints: 15, detail: 'Not specified' });
    }

    // Enterprise / Consumer Focus - 10 points max
    let focusPts;
    if (finderFocus !== 'any') {
      const focusMatch = finderFocus === 'enterprise' ? enterpriseScore === 5 : consumerScore === 5;
      focusPts = focusMatch ? 10 : 0;
      reasons.push({ label: `Strong ${finderFocus} focus`, passed: focusMatch, points: focusPts, maxPoints: 10,
        detail: focusMatch ? `Stated ${finderFocus} focus firm` : `Not a stated ${finderFocus}-focused firm` });
    } else {
      focusPts = 5;
      reasons.push({ label: 'Enterprise/Consumer fit', passed: null, points: focusPts, maxPoints: 10, detail: 'Not specified' });
    }

    // AI Focus - 10 points max
    let aiPts;
    if (finderAI) {
      const aiMatch = aiScore === 5;
      aiPts = aiMatch ? 10 : 0;
      reasons.push({ label: 'Invests in AI', passed: aiMatch, points: aiPts, maxPoints: 10,
        detail: aiMatch ? 'Stated AI focus firm' : 'Not a stated AI-focused firm' });
    } else {
      aiPts = 5;
      reasons.push({ label: 'AI focus', passed: null, points: aiPts, maxPoints: 10, detail: 'Not specified' });
    }

    // Track Record - 5 points max, drawn from the firm's real,
    // already-computed Power Score (transparent, not invented here)
    const trackPts = (computePowerScore(firm) / 100) * 5;
    reasons.push({ label: 'Strong track record', passed: computePowerScore(firm) >= 50, points: trackPts, maxPoints: 5,
      detail: `Power Score of ${computePowerScore(firm)}/100` });

  const score = Math.round(sectorPts + stagePts + raisePts + regionPts + focusPts + aiPts + trackPts);
    return { firm, score, reasons };
  });

  return results.sort((a, b) => b.score - a.score);
}

function getMatchQualityLabel(score) {
  if (score >= 90) return 'Excellent Match';
  if (score >= 75) return 'Strong Match';
  if (score >= 60) return 'Good Match';
  if (score >= 40) return 'Moderate Match';
  return 'Limited Match';
}

// ============================================================
// FOUNDER FUNDRAISING REPORT - every function below is a pure
// derivation from data already computed elsewhere on this page
// (computeFinderMatches, firmStages, computeGeography,
// computePowerScore, computePhilosophyScores, computeSimilarFirms,
// RAISE_TO_STAGES). Nothing here is a new claim about any firm -
// each function either reads a real field directly or applies a
// stated, deterministic rule to real fields. Two fields founders
// often expect - a specific "typical check size" dollar figure and
// a per-investment "stage" or "valuation" - are not tracked
// anywhere on this site, so rather than invent them, the check
// size is honestly derived by inverting the same RAISE_TO_STAGES
// map already used to match founders to firms, and no valuation or
// per-deal stage field is shown at all.
// ============================================================

// Same 8 buckets as the "How much are you raising?" question,
// reused here in reverse: given a firm's real stage list, find the
// full span of raise sizes typically associated with those stages.
const RAISE_BUCKET_ORDER = [
  { key: 'under500k', label: 'Under $500K' },
  { key: '500kto1m', label: '$500K–$1M' },
  { key: '1mto3m', label: '$1M–$3M' },
  { key: '3mto10m', label: '$3M–$10M' },
  { key: '10mto25m', label: '$10M–$25M' },
  { key: '25mto50m', label: '$25M–$50M' },
  { key: '50mto100m', label: '$50M–$100M' },
  { key: '100mplus', label: '$100M+' }
];

function getTypicalCheckRange(firm) {
  const stages = firmStages[firm.slug] || [];
  if (stages.length === 0) return 'Not enough stage data on file';
  const matchingIndices = RAISE_BUCKET_ORDER
    .map((b, i) => RAISE_TO_STAGES[b.key].some(s => stages.includes(s)) ? i : -1)
    .filter(i => i !== -1);
  if (matchingIndices.length === 0) return 'Not enough stage data on file';
  const minIdx = Math.min(...matchingIndices);
  const maxIdx = Math.max(...matchingIndices);
  if (minIdx === maxIdx) return RAISE_BUCKET_ORDER[minIdx].label;
  return `${RAISE_BUCKET_ORDER[minIdx].label.split('–')[0].replace('Under ', '')} – ${RAISE_BUCKET_ORDER[maxIdx].label.split('–').pop()}`;
}

// Numeric companion to getTypicalCheckRange above, used only for
// averaging across a shortlist (the Shortlist Builder's "Average
// Check" stat). Returns the midpoint, in $M, of the same real
// stage-derived range - never a per-firm number shown on its own,
// since it's an estimate, not a reported figure.
const CHECK_BUCKET_BOUNDS_M = [
  [0, 0.5], [0.5, 1], [1, 3], [3, 10], [10, 25], [25, 50], [50, 100], [100, 150]
];

function getTypicalCheckMidpointM(firm) {
  const stages = firmStages[firm.slug] || [];
  if (stages.length === 0) return null;
  const matchingIndices = RAISE_BUCKET_ORDER
    .map((b, i) => RAISE_TO_STAGES[b.key].some(s => stages.includes(s)) ? i : -1)
    .filter(i => i !== -1);
  if (matchingIndices.length === 0) return null;
  const minIdx = Math.min(...matchingIndices);
  const maxIdx = Math.max(...matchingIndices);
  return (CHECK_BUCKET_BOUNDS_M[minIdx][0] + CHECK_BUCKET_BOUNDS_M[maxIdx][1]) / 2;
}

function formatCheckM(m) {
  if (m === null) return 'N/A';
  if (m < 1) return '$' + Math.round(m * 1000) + 'K';
  return '$' + (m % 1 === 0 ? m : m.toFixed(1)) + 'M';
}

/* ============================================================
   POWER MATCH MEASUREMENT AND FEEDBACK
   ------------------------------------------------------------
   Every chip handler already calls renderFinderResults(), so the
   whole funnel is instrumented from that one place rather than from
   five separate listeners that could drift apart.

   WHAT "COMPLETED" MEANS HERE, precisely, because the number is
   meaningless without the definition: this questionnaire filters
   live and has no submit button, so completion is defined as having
   answered all five question groups - sector, stage, raise, region
   and focus. A founder who answers three and leaves is a started run
   that did not complete, which is exactly the abandonment the funnel
   is meant to expose.

   No answer VALUE is ever recorded. Only how many groups carry one.
   ============================================================ */
function pmAnsweredGroups() {
  let n = 0;
  if (finderSectors && finderSectors.size) n++;
  if (finderStages && finderStages.size) n++;
  if (finderRaise && finderRaise !== 'any') n++;
  if (finderRegion && finderRegion !== 'any') n++;
  if (finderFocus && finderFocus !== 'any') n++;
  return n;
}

function pmTelemetry(matches) {
  if (typeof pbTrack !== 'function') return;
  const answered = pmAnsweredGroups();
  if (!answered) return;   // an untouched form is not a started run

  if (typeof pbaRunId === 'function' && !pbaRunId() && typeof pbaStartRun === 'function') {
    pbaStartRun();
    pbTrack('power_match_started');
  }
  pbTrack('power_match_step_completed', {
    dedupe: 'groups' + answered,
    props: { groups: answered }
  });
  pbTrack('power_match_results_viewed', {
    props: { results: Math.min(999, matches.length) }
  });
  if (answered === 5) {
    pbTrack('power_match_completed', {
      props: { groups: 5, top: matches.length ? Math.round(matches[0].score) : 0 }
    });
  }
}

/* ---------- recommendation feedback ----------
   Feedback on the QUALITY OF THE RECOMMENDATION, never a rating of
   the firm. It is never shown on a firm profile and never aggregated
   into anything public. Deliberately two buttons and no stars: a
   five-point scale on a VC would read as a public rating no matter
   how it was labelled. */
const PMF_REASONS = [
  ['wrong_stage',  'Wrong stage'],
  ['wrong_sector', 'Wrong sector'],
  ['check_size',   'Check size'],
  ['geography',    'Geography'],
  ['conflict',     'Conflict concern'],
  ['already_knew', 'Already knew them'],
  ['other',        'Other']
];

function pmFeedbackHtml(slug) {
  return '<div class="pmf" data-pmf-slug="' + slug + '">' +
    '<span class="pmf-q">Useful recommendation?</span>' +
    '<button type="button" class="pmf-btn" data-pmf="useful">Yes</button>' +
    '<button type="button" class="pmf-btn" data-pmf="not_useful">No</button>' +
    '</div>';
}

function pmReasonsHtml() {
  return '<div class="pmf-reasons">' +
    '<span class="pmf-q">What was off?</span>' +
    PMF_REASONS.map(function (r) {
      return '<button type="button" class="pmf-reason" data-pmf-reason="' + r[0] + '">' + r[1] + '</button>';
    }).join('') +
    '<button type="button" class="pmf-skip" data-pmf-reason="">Skip</button>' +
    '</div>';
}

/* Writes the verdict. The row carries the rank and score it was given
   at, which is what makes "are highly ranked results actually useful"
   answerable later without re-running the matcher. */
function pmSaveFeedback(slug, verdict, reason, rank, score) {
  try {
    if (typeof pbTrack === 'function') {
      pbTrack('power_match_feedback_given', {
        firmSlug: slug, rank: rank, score: score,
        props: { verdict: verdict, reason: reason || 'none' }
      });
    }
    const client = (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null;
    const anon = (typeof pbaAnonId === 'function') ? pbaAnonId() : null;
    const run = (typeof pbaRunId === 'function') ? pbaRunId() : null;
    if (!client || !anon || !run) return;
    client.from('power_match_feedback').insert({
      run_id: run,
      anon_id: anon,
      user_id: (typeof currentUser !== 'undefined' && currentUser) ? currentUser.id : null,
      firm_slug: slug,
      rank: rank || null,
      score: (typeof score === 'number') ? score : null,
      verdict: verdict,
      reason: reason || null
    }).then(function () {}, function () {});
  } catch (e) { /* feedback must never break the results list */ }
}

function renderFinderResults() {
  const matches = computeFinderMatches();
  const container = document.getElementById('finderResultsList');
  if (!container) return;
  /* People worth knowing renders under the firms. It is async and
     self-hiding: if nothing clears the relevance floor it writes
     nothing at all, so a thin Network never leaves an empty heading
     on the results page. */
  if (typeof pbrRenderPeopleSection === 'function') pbrRenderPeopleSection();
  if (typeof bfpResetShown === 'function') bfpResetShown();

  container.innerHTML = matches.map(({ firm, score, reasons }, i) => {
    const passedReasons = reasons.filter(r => r.passed === true);
    return `
    <div class="finder-result-card" data-pm-slug="${firm.slug}" data-pm-rank="${i + 1}" data-pm-score="${score}">
      <div class="finder-result-head">
        <div class="finder-score-block">
          <div class="finder-score-pct">${score}%</div>
          <div class="finder-score-quality">${getMatchQualityLabel(score)}</div>
        </div>
        <div class="finder-result-name"><a href="#${firm.slug}">${firm.name}</a></div>
      </div>
      ${typeof renderOutcomeControl === 'function' ? renderOutcomeControl(firm.slug, 'power_match') : ''}
      ${pmFeedbackHtml(firm.slug)}
      ${passedReasons.length > 0 ? `
        <div class="finder-reasons">
          <div class="finder-reasons-label">Reason:</div>
          ${passedReasons.map(r => `<div class="finder-reason-check"> ${r.label}</div>`).join('')}
        </div>
      ` : `<div class="finder-reasons-empty">Add more preferences above to see specific reasons this firm fits.</div>`}
      ${typeof bfpModuleHtml === 'function' ? bfpModuleHtml(firm.slug) : ''}
      <div class="finder-breakdown">
        ${reasons.map(b => `
          <div class="finder-breakdown-row">
            <span class="finder-breakdown-label">${b.label}</span>
            <div class="finder-breakdown-track">
              <div class="finder-breakdown-fill" style="width: ${(b.points / b.maxPoints) * 100}%"></div>
            </div>
            <span class="finder-breakdown-pts">${Math.round(b.points)}/${b.maxPoints}</span>
 </div>
          <div class="finder-breakdown-detail">${b.detail}</div>
        `).join('')}
      </div>
    </div>
  `;
  }).join('');

  pmTelemetry(matches);
  if (typeof bfpFlushShown === 'function') bfpFlushShown();
  pmBindResultHandlers(container);
}

/* One delegated listener per render. Covers opening a recommendation
   and the two feedback paths, so no per-card listeners accumulate. */
let pmBound = null;
function pmBindResultHandlers(container) {
  if (pmBound === container) return;
  pmBound = container;

  container.addEventListener('click', function (ev) {
    const card = ev.target.closest ? ev.target.closest('.finder-result-card') : null;
    if (!card) return;
    const slug = card.dataset.pmSlug;
    const rank = parseInt(card.dataset.pmRank, 10) || null;
    const score = parseInt(card.dataset.pmScore, 10);

    /* Best-Fit Partner interactions (module rendered by
       best-fit-partner.js; analytics reuse the same pbTrack rail) */
    const bfpLink = ev.target.closest('.bfp-view');
    if (bfpLink) {
      if (typeof pbTrack === 'function') {
        pbTrack(bfpLink.dataset.alt === '1' ? 'alternative_partner_opened' : 'best_fit_partner_opened',
          { firmSlug: slug, rank: rank, props: { partner: bfpLink.dataset.partner } });
      }
      return;   // href navigates to the partner profile
    }
    const bfpV = ev.target.closest('[data-bfpf]');
    if (bfpV) {
      const box = card.querySelector('.bfp-fb');
      const partner = box ? box.getAttribute('data-bfp-partner') : null;
      if (bfpV.getAttribute('data-bfpf') === 'useful') {
        if (typeof pbTrack === 'function') {
          pbTrack('best_fit_partner_feedback_given',
            { firmSlug: slug, props: { partner: partner, verdict: 'useful', reason: 'none' } });
        }
        if (box) box.innerHTML = '<span class="pmf-done">Thanks, noted.</span>';
      } else if (box && typeof bfpReasonsFbHtml === 'function') {
        box.innerHTML = bfpReasonsFbHtml();
      }
      return;
    }
    const bfpR = ev.target.closest('[data-bfpf-reason]');
    if (bfpR) {
      const box = card.querySelector('.bfp-fb');
      const partner = box ? box.getAttribute('data-bfp-partner') : null;
      if (typeof pbTrack === 'function') {
        pbTrack('best_fit_partner_feedback_given',
          { firmSlug: slug, props: { partner: partner, verdict: 'not_useful',
            reason: bfpR.getAttribute('data-bfpf-reason') || 'none' } });
      }
      if (box) box.innerHTML = '<span class="pmf-done">Thanks, noted.</span>';
      return;
    }

    // opening the recommendation
    const link = ev.target.closest('.finder-result-name a');
    if (link && typeof pbTrack === 'function') {
      pbTrack('power_match_result_opened', { firmSlug: slug, rank: rank, score: score });
      return;
    }

    // verdict
    const verdictBtn = ev.target.closest('[data-pmf]');
    if (verdictBtn) {
      const verdict = verdictBtn.getAttribute('data-pmf');
      const box = card.querySelector('.pmf');
      if (verdict === 'useful') {
        pmSaveFeedback(slug, 'useful', null, rank, score);
        box.innerHTML = '<span class="pmf-done">Thanks, noted.</span>';
      } else {
        /* The reason is optional on purpose. Forcing it would buy a
           slightly richer row at the cost of the verdict itself. */
        box.innerHTML = pmReasonsHtml();
      }
      return;
    }

    const reasonBtn = ev.target.closest('[data-pmf-reason]');
    if (reasonBtn) {
      const reason = reasonBtn.getAttribute('data-pmf-reason') || null;
      pmSaveFeedback(slug, 'not_useful', reason, rank, score);
      const box = card.querySelector('.pmf-reasons');
      if (box) box.innerHTML = '<span class="pmf-done">Thanks, noted.</span>';
    }
  });
}

function renderFindInvestors() {
  const allSectors = [...new Set(firms.flatMap(f => f.sectors))].sort();
  const allStages = ['Pre-Seed', 'Seed', 'Series A', 'Series B', 'Growth', 'Late Stage'];
  const allRegions = [...new Set(firms.flatMap(f => computeGeography(f).map(r => r.region)))].sort();

  document.getElementById('findInvestorsView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="pm-header">
      <div class="pm-eyebrow">Power Match</div>
      <h1 class="pm-title">Find the investors that fit your startup.</h1>
      <p class="pm-sub">Answer a few questions and Power Match scores every one of the ${firms.length} firms
      tracked here against your answers - using only data already on this page, never guesses. Each result
      shows which of your criteria it actually met. Skip anything you are not sure about.</p>
    </div>

    <div class="finder-question">
      <div class="finder-question-title">What sector is your startup in?</div>
      <div class="finder-question-hint">Select any that apply - leave blank to skip</div>
      <div class="filter-chips" id="finderSectorChips">
        ${allSectors.map(s => `<button class="chip ${finderSectors.has(s) ? 'active' : ''}" data-sector="${s}">${s}</button>`).join('')}
      </div>
    </div>

    <div class="finder-question">
      <div class="finder-question-title">What stage is your startup at?</div>
      <div class="finder-question-hint">Select any that apply - leave blank to skip</div>
      <div class="filter-chips" id="finderStageChips">
        ${allStages.map(s => `<button class="chip ${finderStages.has(s) ? 'active' : ''}" data-stage="${s}">${s}</button>`).join('')}
      </div>
    </div>

   <div class="finder-question">
      <div class="finder-question-title">How much are you looking to raise?</div>
      <div class="finder-question-hint">Matched against firms active at the stage this size typically implies</div>
      <div class="filter-chips" id="finderRaiseChips">
        <button class="chip ${finderRaise === 'any' ? 'active' : ''}" data-raise="any">No preference</button>
        <button class="chip ${finderRaise === 'under500k' ? 'active' : ''}" data-raise="under500k">Under $500K</button>
        <button class="chip ${finderRaise === '500kto1m' ? 'active' : ''}" data-raise="500kto1m">$500K – $1M</button>
        <button class="chip ${finderRaise === '1mto3m' ? 'active' : ''}" data-raise="1mto3m">$1M – $3M</button>
        <button class="chip ${finderRaise === '3mto10m' ? 'active' : ''}" data-raise="3mto10m">$3M – $10M</button>
        <button class="chip ${finderRaise === '10mto25m' ? 'active' : ''}" data-raise="10mto25m">$10M – $25M</button>
        <button class="chip ${finderRaise === '25mto50m' ? 'active' : ''}" data-raise="25mto50m">$25M – $50M</button>
        <button class="chip ${finderRaise === '50mto100m' ? 'active' : ''}" data-raise="50mto100m">$50M – $100M</button>
        <button class="chip ${finderRaise === '100mplus' ? 'active' : ''}" data-raise="100mplus">$100M+</button>
      </div>
    </div>

    <div class="finder-question">
      <div class="finder-question-title">Where is your startup based?</div>
      <div class="finder-question-hint">Matches firms with confirmed presence in that region</div>
      <div class="filter-chips" id="finderRegionChips">
        <button class="chip ${finderRegion === 'any' ? 'active' : ''}" data-region="any">No preference</button>
        ${allRegions.map(r => `<button class="chip ${finderRegion === r ? 'active' : ''}" data-region="${r}">${r}</button>`).join('')}
      </div>
    </div>

    <div class="finder-question">
      <div class="finder-question-title">Enterprise or consumer?</div>
      <div class="finder-question-hint">Which best describes your business model</div>
      <div class="filter-chips" id="finderFocusChips">
        <button class="chip ${finderFocus === 'any' ? 'active' : ''}" data-focus="any">No preference</button>
        <button class="chip ${finderFocus === 'enterprise' ? 'active' : ''}" data-focus="enterprise">Enterprise</button>
        <button class="chip ${finderFocus === 'consumer' ? 'active' : ''}" data-focus="consumer">Consumer</button>
      </div>
    </div>

    <div class="finder-question">
      <div class="finder-question-title">Is AI core to your product?</div>
      <div class="finder-question-hint">Matches firms with a stated AI investment focus</div>
      <div class="filter-chips" id="finderAIChips">
        <button class="chip ${!finderAI ? 'active' : ''}" data-ai="no">No / not specified</button>
        <button class="chip ${finderAI ? 'active' : ''}" data-ai="yes">Yes</button>
      </div>
    </div>

   <div class="finder-results">
      <div class="finder-results-label">Your Power Matches</div>
      <div id="finderResultsList"></div>
      <div id="pbrPeopleSection"></div>
    </div>

    <div class="fr-cta-block">
      <button class="fr-cta-button" id="generateReportBtn"> Generate My Fundraising Report</button>
      <div class="fr-cta-hint">A full research-report breakdown of your top matches - why each fits, what to watch for, and what to do next.</div>
    </div>
    <div id="fundraisingReportContainer"></div>
  `;

 document.querySelector('#findInvestorsView .detail-back').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '';
  });

  document.getElementById('generateReportBtn').addEventListener('click', () => {
    renderFundraisingReport();
  });

  document.getElementById('finderSectorChips').addEventListener('click', (e) => {
    if (!e.target.classList.contains('chip')) return;
    const sector = e.target.dataset.sector;
    if (finderSectors.has(sector)) {
      finderSectors.delete(sector);
      e.target.classList.remove('active');
    } else {
      finderSectors.add(sector);
      e.target.classList.add('active');
    }
    renderFinderResults();
  });

  document.getElementById('finderStageChips').addEventListener('click', (e) => {
    if (!e.target.classList.contains('chip')) return;
    const stage = e.target.dataset.stage;
    if (finderStages.has(stage)) {
      finderStages.delete(stage);
      e.target.classList.remove('active');
    } else {
      finderStages.add(stage);
      e.target.classList.add('active');
    }
    renderFinderResults();
  });

 document.getElementById('finderRaiseChips').addEventListener('click', (e) => {
    if (!e.target.classList.contains('chip')) return;
    document.querySelectorAll('#finderRaiseChips .chip').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    finderRaise = e.target.dataset.raise;
    renderFinderResults();
  });

  document.getElementById('finderRegionChips').addEventListener('click', (e) => {
    if (!e.target.classList.contains('chip')) return;
    document.querySelectorAll('#finderRegionChips .chip').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    finderRegion = e.target.dataset.region;
    renderFinderResults();
  });

  document.getElementById('finderFocusChips').addEventListener('click', (e) => {
    if (!e.target.classList.contains('chip')) return;
    document.querySelectorAll('#finderFocusChips .chip').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    finderFocus = e.target.dataset.focus;
    renderFinderResults();
  });

  document.getElementById('finderAIChips').addEventListener('click', (e) => {
    if (!e.target.classList.contains('chip')) return;
    document.querySelectorAll('#finderAIChips .chip').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    finderAI = e.target.dataset.ai === 'yes';
    renderFinderResults();
  });

  renderFinderResults();
}
