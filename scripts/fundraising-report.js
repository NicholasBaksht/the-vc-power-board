/* ============================================================
   FUNDRAISING-REPORT.JS
   The Founder Fundraising Report generated from the Find Investors
   questionnaire: confidence level, concerns, outreach tips,
   fundraising tier assignment, and the full report renderer.
   ============================================================ */
// A distinct, slightly more premium-toned label scale for the
// report's Executive Summary, kept separate from the per-card
// getMatchQualityLabel() above so existing usages elsewhere are
// never affected by this change.
function getReportMatchQuality(score) {
  if (score >= 90) return 'Exceptional Match';
  if (score >= 75) return 'Excellent Match';
  if (score >= 60) return 'Strong Match';
  if (score >= 40) return 'Moderate Match';
  return 'Weak Match';
}

// Confidence is a real, computable proxy: how many of the 6 finder
// questions the founder actually answered, versus left at their
// default/unspecified state. More real signal in -> more reliable
// match out. Never a fabricated "confidence score."
function getConfidenceLevel() {
  const answered = [
    finderSectors.size > 0,
    finderRaise !== 'any',
    finderStages.size > 0,
    finderRegion !== 'any',
    finderFocus !== 'any',
    finderAI
  ].filter(Boolean).length;
  if (answered >= 5) return { label: 'High Confidence', answered, total: 6 };
  if (answered >= 3) return { label: 'Medium Confidence', answered, total: 6 };
  return { label: 'Low Confidence', answered, total: 6 };
}

// Concerns only fire when a real, computed condition is actually
// true for this specific firm - never a generic disclaimer list.
function getConcerns(firm, reasons) {
  const concerns = [];
  reasons.forEach(r => {
    if (r.passed === false) {
      if (r.label === 'Strong track record') {
        concerns.push(`Below-average track record on this site's own scoring - ${r.detail}`);
      } else {
        concerns.push(r.detail);
      }
    }
  });
  const num = parseAumNumber(firm.aum);
  if (num >= 20) concerns.push(`Large fund (${firm.aum}) - typically writes bigger checks and may be more competitive to access`);
  const regions = computeGeography(firm);
  if (regions.length === 1) concerns.push(`Limited confirmed international presence - primarily active in ${regions[0].region}`);
  const power = computePowerScore(firm);
  if (power >= 70) concerns.push(`High Power Score (${power}/100) reflects a highly sought-after firm - expect real competition for allocation`);
  if (firm.sectors.length <= 2) concerns.push(`Concentrated sector focus (${firm.sectors.join(', ')}) - may not fit adjacent industries well`);
  return concerns;
}

// Outreach tips: each one only appears when a real, computed
// condition about this specific firm justifies it.
function getOutreachTips(firm) {
  const tips = [];
  const num = parseAumNumber(firm.aum);
  if (num >= 20) {
    tips.push('A warm introduction will likely carry more weight than cold outreach at a firm this size.');
  } else if (num < 0.5) {
    tips.push('Direct outreach can work well at smaller, founder-accessible firms like this one.');
  }
  const philScores = computePhilosophyScores(firm);
  const aiScore = philScores.find(p => p.key === 'ai').score;
  const enterpriseScore = philScores.find(p => p.key === 'enterprise').score;
  if (aiScore === 5) tips.push('Lead with your technical differentiation - this firm has a stated focus on AI.');
  if (enterpriseScore === 5) tips.push('Highlight enterprise traction and revenue metrics - a stated focus area for this firm.');
  const partnerWithProfile = (firm.leadership || []).find(l => l.profileSlug);
  if (partnerWithProfile) tips.push(`Research ${partnerWithProfile.name} specifically before reaching out - see their full profile on this site.`);
  tips.push("Reference relevant portfolio companies below to show you understand the firm's real investment pattern.");
  return tips;
}

// Buckets a matched firm into a fundraising priority tier, using
// only its real compatibility score and real fund-size tier - both
// already computed above.
function getFundraisingTier(firm, score) {
  const num = parseAumNumber(firm.aum);
  if (score < 60) return 'Reach Later';
  if (num >= 20) return 'Stretch Targets';
  return 'Start Here';
}

// ============================================================
// FOUNDER FUNDRAISING REPORT - the flagship feature. Assembles a
// premium research-report-style view entirely from real,
// already-computed data: computeFinderMatches for scoring,
// computeSimilarFirms for alternatives, firm.holdings for
// portfolio comparables, and the rule-based functions above for
// concerns, outreach tips, and check-size ranges. Nothing here is
// generated freeform - every sentence is template text filled in
// with real values, so it stays accurate even as firms are added
// or founder answers change.
// ============================================================
function renderFundraisingReport() {
  const allMatches = computeFinderMatches();
  const topMatches = allMatches.slice(0, 8);
  const topScore = topMatches[0] ? topMatches[0].score : 0;
  const confidence = getConfidenceLevel();

  // --- Executive Summary narrative, assembled from the founder's
  // own real selections - never invented, just echoed back. ---
  const narrativeParts = [];
  if (finderSectors.size > 0) narrativeParts.push(`focused on ${[...finderSectors].join(' and ')}`);
  if (finderStages.size > 0) narrativeParts.push(`at the ${[...finderStages].join('/')} stage`);
  if (finderRegion !== 'any') narrativeParts.push(`based in ${finderRegion}`);
  const profileDesc = narrativeParts.length > 0 ? narrativeParts.join(', ') : 'your startup';
  const topFirmNames = topMatches.slice(0, 3).map(m => m.firm.short).join(', ');
  const narrative = `Based on a founder ${profileDesc}, the strongest fits on this page are led by ${topFirmNames}. ${confidence.answered < 3 ? 'Answer more questions above for a more precise match - this summary is based on limited input so far.' : `This assessment draws on ${confidence.answered} of ${confidence.total} possible signals you provided.`}`;

  const execHTML = `
    <div class="fr-exec-summary">
      <div class="fr-exec-eyebrow">Executive Summary</div>
      <div class="fr-exec-grid">
        <div class="fr-exec-stat">
          <div class="fr-exec-stat-value">${getReportMatchQuality(topScore)}</div>
          <div class="fr-exec-stat-label">Overall Match Quality</div>
        </div>
        <div class="fr-exec-stat">
          <div class="fr-exec-stat-value">${confidence.label}</div>
          <div class="fr-exec-stat-label">Based on ${confidence.answered}/${confidence.total} signals</div>
        </div>
        <div class="fr-exec-stat">
          <div class="fr-exec-stat-value">${topScore}%</div>
          <div class="fr-exec-stat-label">Top Compatibility Score</div>
        </div>
      </div>
      <p class="fr-exec-narrative">${narrative}</p>
    </div>
  `;

  // --- Per-firm investor cards: sections 2-7 of the spec, nested
  // inside each firm's own card, since they're all firm-specific. ---
  const cardsHTML = topMatches.map(({ firm, score, reasons }, i) => {
    const whyFits = reasons.filter(r => r.passed === true);
    const concerns = getConcerns(firm, reasons);
    const outreachTips = getOutreachTips(firm);
    const alternatives = computeSimilarFirms(firm, 3);
    const tier = getFundraisingTier(firm, score);
    const sectorOverlap = firm.sectors.filter(s => finderSectors.has(s));
    const stages = firmStages[firm.slug] || [];
    const stageOverlap = stages.filter(s => finderStages.has(s));
    const regions = computeGeography(firm).map(r => r.region);

    return `
      <div class="fr-investor-card">
        <div class="fr-card-header">
          <div class="fr-card-rank">#${i + 1}</div>
          <div class="fr-card-titleblock">
            <div class="fr-card-name"><a href="#${firm.slug}">${firm.name}</a></div>
            <div class="fr-card-tier fr-tier-${tier.replace(/\s+/g, '-').toLowerCase()}">${tier}</div>
          </div>
          <div class="fr-card-score">
            <div class="fr-card-score-pct">${score}%</div>
            <div class="fr-card-score-label">${getReportMatchQuality(score)}</div>
          </div>
        </div>

        <div class="fr-card-stats-grid">
<div class="fr-card-stat"><div class="fr-card-stat-label">Power Score™</div><div class="fr-card-stat-value">${computePowerScore(firm)}/100</div></div>
          <div class="fr-card-stat"><div class="fr-card-stat-label">Assets Under Management</div><div class="fr-card-stat-value">${firm.aum || ' - '}</div></div>
          <div class="fr-card-stat"><div class="fr-card-stat-label">Typical Check Range</div><div class="fr-card-stat-value">${getTypicalCheckRange(firm)}</div></div>
          <div class="fr-card-stat"><div class="fr-card-stat-label">Stage Fit</div><div class="fr-card-stat-value">${stageOverlap.length > 0 ? stageOverlap.join(', ') : (stages.length > 0 ? stages.join(', ') : 'Not on file')}</div></div>
          <div class="fr-card-stat"><div class="fr-card-stat-label">Industry Fit</div><div class="fr-card-stat-value">${sectorOverlap.length > 0 ? sectorOverlap.join(', ') : firm.sectors.slice(0, 2).join(', ')}</div></div>
          <div class="fr-card-stat"><div class="fr-card-stat-label">Geography Fit</div><div class="fr-card-stat-value">${regions.join(', ')}</div></div>
        </div>

        <p class="fr-card-thesis">${firm.thesis}</p>

        <div class="fr-card-breakdown">
          ${reasons.map(b => `
            <div class="fr-breakdown-row">
              <span class="fr-breakdown-label">${b.label}</span>
              <div class="fr-breakdown-track"><div class="fr-breakdown-fill" style="width: ${(b.points / b.maxPoints) * 100}%"></div></div>
              <span class="fr-breakdown-pts">${Math.round(b.points)}/${b.maxPoints}</span>
            </div>
          `).join('')}
        </div>

        <div class="fr-card-columns">
          <div class="fr-card-col">
            <div class="fr-card-col-label fr-col-positive">Why This VC Fits</div>
            ${whyFits.length > 0
              ? whyFits.map(r => `<div class="fr-fit-item fr-fit-positive"> ${r.label} - ${r.detail}</div>`).join('')
              : `<div class="fr-fit-empty">Answer more questions above for specific fit reasons.</div>`}
          </div>
          <div class="fr-card-col">
            <div class="fr-card-col-label fr-col-concern">Potential Concerns</div>
            ${concerns.length > 0
              ? concerns.map(c => `<div class="fr-fit-item fr-fit-concern"> ${c}</div>`).join('')
              : `<div class="fr-fit-empty">No significant concerns flagged for this firm.</div>`}
          </div>
        </div>

        ${firm.holdings.length > 0 ? `
          <div class="fr-card-section-label">Best Portfolio Comparables</div>
          <div class="fr-comparables-row">
            ${firm.holdings.map(h => `<a href="#company/${slugifyCompany(h.name)}" class="fr-comparable-chip">${h.name} <span class="fr-comparable-ticker">${h.ticker}</span></a>`).join('')}
          </div>
          <div class="fr-comparables-caveat">Shown as evidence of ${firm.short}'s real sector focus - individual portfolio companies aren't tagged by sector on this site, so this isn't a claim that each one matches your specific industry.</div>
        ` : ''}

        <div class="fr-card-section-label">Suggested Outreach Strategy</div>
        <ul class="fr-outreach-list">
          ${outreachTips.map(t => `<li>${t}</li>`).join('')}
        </ul>

        ${alternatives.length > 0 ? `
          <div class="fr-card-section-label">Best Alternatives</div>
          <div class="fr-alternatives-row">
            ${alternatives.map(({ firm: alt }) => `<a href="#${alt.slug}" class="fr-alternative-chip">${alt.short}</a>`).join('')}
          </div>
        ` : ''}

        <div class="fr-card-actions">
          <a href="#${firm.slug}" class="fr-action-btn fr-action-primary">View Firm</a>
          <a href="#compare" class="fr-action-btn">Compare</a>
          <a href="#portfolio" class="fr-action-btn">Portfolio Explorer</a>
        </div>
      </div>
    `;
  }).join('');

  // --- Fundraising Strategy: same firms, grouped by real tier ---
  const tiers = ['Start Here', 'Stretch Targets', 'Reach Later'];
  const tierDescriptions = {
    'Start Here': 'Strong compatibility and a fund size where founders typically have real access. Prioritize these first.',
    'Stretch Targets': 'Strong compatibility, but a larger, more competitive fund - worth pursuing, expect more competition for allocation.',
    'Reach Later': 'Lower current compatibility - often a better fit after more traction, a later round, or a sharper pitch.'
  };
  const tiersHTML = tiers.map(tier => {
    const inTier = topMatches.filter(({ firm, score }) => getFundraisingTier(firm, score) === tier);
    if (inTier.length === 0) return '';
    return `
      <div class="fr-tier-block">
        <div class="fr-tier-title fr-tier-${tier.replace(/\s+/g, '-').toLowerCase()}">${tier}</div>
        <div class="fr-tier-desc">${tierDescriptions[tier]}</div>
        <div class="fr-tier-firms">
          ${inTier.map(({ firm, score }) => `<a href="#${firm.slug}" class="fr-tier-firm-chip">${firm.short} <span>${score}%</span></a>`).join('')}
        </div>
      </div>
    `;
  }).join('');

  const strategyHTML = `
    <div class="fr-section">
      <div class="fr-section-title">Fundraising Strategy</div>
      <p class="fr-section-intro">A prioritized action plan based on the ${topMatches.length} firms above - sequenced by realistic access, not just raw score.</p>
      <div class="fr-tiers-grid">${tiersHTML}</div>
    </div>
  `;

  document.getElementById('fundraisingReportContainer').innerHTML = `
    <div class="fr-report">
      ${execHTML}
      <div class="fr-section">
        <div class="fr-section-title">Top Recommended Investors</div>
        <p class="fr-section-intro">Ranked by real compatibility score, computed the same way as the matches above - this is the same engine, just presented as a full research report.</p>
        <div class="fr-cards-list">${cardsHTML}</div>
      </div>
      ${strategyHTML}
    </div>
  `;
  document.getElementById('fundraisingReportContainer').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
