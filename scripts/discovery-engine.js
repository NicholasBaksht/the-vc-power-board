/**
 * DISCOVERY-ENGINE.JS
 * Free-text firm search: parses a typed query into real, existing
 * criteria (canonical sectors from taxonomy.js, canonical HQ
 * locations from taxonomy.js, investment stages from firmStages,
 * fund size from AUM, network relationships from
 * relationship-graph.js) and scores every firm against them using
 * the same transparent, weighted, reason-per-criterion approach
 * already proven in Find Investors' computeFinderMatches(). This
 * file is deliberately separate from find-investors.js - it reuses
 * the same real underlying data functions rather than sharing code
 * with a working, differently-shaped feature, so nothing here can
 * break the existing questionnaire.
 *
 * The parser is plain keyword/phrase matching against real
 * vocabularies already in the app - there's no AI/LLM call (this is
 * a static site with no backend). It only recognizes phrasings that
 * map onto real data; anything it can't confidently parse is
 * reported to the user rather than silently ignored or guessed at.
 */

const DISCOVERY_STAGE_VOCAB = ['Pre-Seed', 'Seed', 'Series A', 'Series B', 'Series C', 'Growth', 'Late Stage'];

// Real, already-tracked company names - used both to recognize a
// specific portfolio company mentioned in a query, and to avoid
// matching tiny/ambiguous names (4+ characters only).
function getAllTrackedCompanyNames() {
  const names = new Set();
  firms.forEach(f => f.holdings.forEach(h => { if (h.name && h.name.length >= 4) names.add(h.name); }));
  return Array.from(names);
}

/**
 * Parses free text into a structured criteria object. Every field
 * is either populated from a real match against real vocabulary, or
 * left null/empty - never guessed. `notes` collects human-readable
 * explanations of anything ambiguous or unmatched, shown directly
 * to the user rather than hidden.
 */
function parseDiscoveryQuery(text) {
  const raw = text.trim();
  const lower = ' ' + raw.toLowerCase() + ' ';
  const criteria = {
    sectors: [], sectorMode: 'any',
    locations: [], stages: [],
    focus: null, fundTier: null,
    connectedToFirmSlug: null, connectedToFirmName: null,
    companyNames: [],
    notes: []
  };

  // --- Sectors, via taxonomy.js's SECTOR_MAP (same canonical
  // buckets the /companies/ hub pages and Peer Firm Links use) ---
  if (typeof SECTOR_MAP !== 'undefined') {
    Object.entries(SECTOR_MAP).forEach(([slug, cfg]) => {
      const candidates = [cfg.label, ...cfg.rawTags];
      const found = candidates.some(c => {
        const needle = c.toLowerCase();
        return needle.length <= 3
          ? new RegExp(`\\b${needle}\\b`).test(lower)
          : lower.includes(` ${needle} `) || lower.includes(needle);
      });
      if (found) criteria.sectors.push(slug);
    });
  }
  if (/\bboth\b/.test(lower) && criteria.sectors.length >= 2) criteria.sectorMode = 'all';

  // --- Locations, via taxonomy.js's LOCATION_MAP (city/region
  // granularity - e.g. "New York" - rather than the coarse
  // US/UK-only regions used by the Geographic Heatmap) ---
  if (typeof LOCATION_MAP !== 'undefined') {
    Object.entries(LOCATION_MAP).forEach(([slug, cfg]) => {
      const cities = cfg.rawHQs.map(hq => hq.split(',')[0].toLowerCase());
      const candidates = [cfg.label.toLowerCase(), ...cities];
      if (candidates.some(c => lower.includes(c))) criteria.locations.push(slug);
    });
  }

  // --- Investment stages ---
  DISCOVERY_STAGE_VOCAB.forEach(stage => {
    const needle = stage.toLowerCase();
    if (new RegExp(`\\b${needle}\\b`).test(lower)) criteria.stages.push(stage);
  });
  if (/\bearly[- ]stage\b/.test(lower) && !criteria.stages.length) {
    criteria.stages.push('Pre-Seed', 'Seed');
  }

  // --- Enterprise / Consumer focus ---
  if (/\benterprise\b/.test(lower)) criteria.focus = 'enterprise';
  if (/\bconsumer\b/.test(lower)) criteria.focus = 'consumer';

  // --- Fund size, mapped to the same tiers as getScaleLabel() ---
  if (/\bmega[- ]?fund\b/.test(lower)) criteria.fundTier = 'mega';
  else if (/\blarge fund\b/.test(lower)) criteria.fundTier = 'large';
  else if (/\bboutique\b|\bsmall fund\b|\bemerging fund\b/.test(lower)) criteria.fundTier = 'small';

  // --- Network relationships: "connected to <firm>", reusing the
  // exact same real relationship data as the Relationship Graph ---
  const connMatch = raw.match(/connected to ([A-Za-z0-9&.,'\- ]+?)(?:\s+through|\s+via|\s*$)/i);
  if (connMatch) {
    const candidate = connMatch[1].trim().toLowerCase();
    const target = firms.find(f => f.name.toLowerCase() === candidate || f.short.toLowerCase() === candidate)
      || firms.find(f => f.name.toLowerCase().includes(candidate) || candidate.includes(f.short.toLowerCase()));
    if (target) {
      criteria.connectedToFirmSlug = target.slug;
      criteria.connectedToFirmName = target.name;
    } else {
      criteria.notes.push(`Couldn't find a tracked firm matching "${connMatch[1].trim()}" to check network connections against.`);
    }
  }

  // --- Specific portfolio company mentioned by name ---
  getAllTrackedCompanyNames().forEach(name => {
    if (lower.includes(name.toLowerCase())) criteria.companyNames.push(name);
  });

  if (criteria.sectors.length === 0 && criteria.locations.length === 0 && criteria.stages.length === 0
      && !criteria.focus && !criteria.fundTier && !criteria.connectedToFirmSlug && criteria.companyNames.length === 0) {
    criteria.notes.push(`Couldn't confidently parse a sector, stage, location, fund size, or firm connection from this query. Try mentioning something specific and real, like "AI", "seed", "New York", or "connected to Sequoia".`);
  }

  return criteria;
}

const DISCOVERY_FUND_TIER_CHECK = {
  mega: num => num >= 50,
  large: num => num >= 20 && num < 50,
  small: num => num > 0 && num < 5
};
const DISCOVERY_FUND_TIER_LABEL = { mega: 'Mega Fund ($50B+)', large: 'Large Fund ($20B–$50B)', small: 'Boutique / Small Fund (Under $5B)' };

/**
 * Scores every firm against parsed criteria. Same philosophy as
 * computeFinderMatches(): an unspecified criterion contributes half
 * credit (never zero, never full), so it never unfairly tanks or
 * inflates a score, and every criterion produces a real, inspectable
 * reason. Weights sum to 100 when every criterion is specified:
 * Sector 25, Stage 20, Location 15, Fund Size 10, Network 10,
 * Focus 10, Portfolio Company 5, Track Record 5.
 */
function computeDiscoveryMatches(criteria) {
  const results = firms
    .filter(f => f.slug !== criteria.connectedToFirmSlug)
    .map(firm => {
      const checks = [];
      let score = 0;

      // Sector
      const canonSectors = getFirmCanonicalSectors(firm);
      if (criteria.sectors.length > 0) {
        const overlap = criteria.sectors.filter(s => canonSectors.includes(s));
        const denom = criteria.sectorMode === 'all' ? criteria.sectors.length : criteria.sectors.length;
        const pts = (overlap.length / denom) * 25;
        score += pts;
        overlap.forEach(s => checks.push({ label: SECTOR_MAP[s].label, kind: 'sector' }));
        if (criteria.sectorMode === 'all' && overlap.length < criteria.sectors.length) {
          const missing = criteria.sectors.filter(s => !canonSectors.includes(s)).map(s => SECTOR_MAP[s].label);
          checks.push({ label: `Missing: ${missing.join(', ')}`, kind: 'miss' });
        }
      } else {
        score += 12.5;
      }

      // Stage
      const firmStageList = firmStages[firm.slug] || [];
      if (criteria.stages.length > 0) {
        const overlap = criteria.stages.filter(s => firmStageList.includes(s));
        score += (overlap.length / criteria.stages.length) * 20;
        overlap.forEach(s => checks.push({ label: s, kind: 'stage' }));
      } else {
        score += 10;
      }

      // Location (canonical HQ city/region)
      const locSlug = getFirmCanonicalLocation(firm);
      if (criteria.locations.length > 0) {
        const pass = locSlug && criteria.locations.includes(locSlug);
        score += pass ? 15 : 0;
        if (pass) checks.push({ label: LOCATION_MAP[locSlug].label, kind: 'location' });
      } else {
        score += 7.5;
      }

      // Fund size
      if (criteria.fundTier) {
        const num = parseAumNumber(firm.aum);
        const pass = DISCOVERY_FUND_TIER_CHECK[criteria.fundTier](num);
        score += pass ? 10 : 0;
        if (pass) checks.push({ label: DISCOVERY_FUND_TIER_LABEL[criteria.fundTier], kind: 'fund' });
      } else {
        score += 5;
      }

      // Network relationship - reuses relationship-graph.js's real,
      // already-verified overlap/bridge/spinout functions directly.
      let networkDetail = null;
      if (criteria.connectedToFirmSlug) {
        const overlap = getPortfolioOverlap(criteria.connectedToFirmSlug).find(o => o.firmSlug === firm.slug);
        const bridge = getFormerPartnerBridges(criteria.connectedToFirmSlug).find(b => b.firmSlug === firm.slug);
        const spinouts = getSpinoutRelations(criteria.connectedToFirmSlug).filter(r => r.firmSlug === firm.slug);
        if (overlap) {
          networkDetail = { type: 'portfolio', companies: overlap.companies };
          checks.push({ label: `Connected to ${criteria.connectedToFirmName} via ${overlap.companies.length} shared portfolio compan${overlap.companies.length === 1 ? 'y' : 'ies'}`, kind: 'network' });
          score += 10;
        } else if (bridge) {
          networkDetail = { type: 'partner', people: bridge.people };
          checks.push({ label: `Connected to ${criteria.connectedToFirmName} via ${bridge.people.length} former partner${bridge.people.length === 1 ? '' : 's'}`, kind: 'network' });
          score += 10;
        } else if (spinouts.length > 0) {
          networkDetail = { type: 'spinout', spinouts };
          checks.push({ label: `Connected to ${criteria.connectedToFirmName} via spinout lineage`, kind: 'network' });
          score += 10;
        }
      } else {
        score += 5;
      }

      // Focus
      if (criteria.focus) {
        const philScores = computePhilosophyScores(firm);
        const pass = philScores.find(p => p.key === criteria.focus)?.score === 5;
        score += pass ? 10 : 0;
        if (pass) checks.push({ label: `${criteria.focus === 'enterprise' ? 'Enterprise' : 'Consumer'} focus`, kind: 'focus' });
      } else {
        score += 5;
      }

      // Specific portfolio company mentioned
      let matchingHoldings = [];
      if (criteria.companyNames.length > 0) {
        matchingHoldings = firm.holdings.filter(h => criteria.companyNames.includes(h.name));
        score += matchingHoldings.length > 0 ? 5 : 0;
        matchingHoldings.forEach(h => checks.push({ label: `Holds ${h.name}`, kind: 'company' }));
      } else {
        score += 2.5;
      }

      // Track record - real Power Score, always included
      const power = computePowerScore(firm);
      score += (power / 100) * 5;

      return {
        firm, score: Math.round(score), checks,
        networkDetail, matchingHoldings,
        relevantSectors: canonSectors.map(s => SECTOR_MAP[s].label),
        relevantStages: firmStageList,
        relevantLocation: locSlug ? LOCATION_MAP[locSlug].label : firm.hq,
        holdingsCount: firm.holdings.length
      };
    });

  return results.sort((a, b) => b.score - a.score);
}

function getDiscoveryMatchLabel(score) {
  if (score >= 80) return 'Strong Match';
  if (score >= 60) return 'Good Match';
  if (score >= 40) return 'Partial Match';
  return 'Weak Match';
}

// ---------- Rendering ----------

const DISCOVERY_EXAMPLE_QUERIES = [
  'Early-stage AI investors in New York',
  'European fintech VCs',
  'Investors that have backed both AI and fintech',
  'Firms connected to Sequoia'
];

let discoveryQuery = '';
let discoveryCriteria = null;

// Best-effort, informational only (never scored): a firm's current
// partners whose real title/role text happens to mention a matched
// sector by name. Often empty, since most titles are generic (e.g.
// "General Partner") - that's an honest sparse result, not a bug.
function getRelevantPartnersForQuery(firm, criteria) {
  if (!firm.leadership || criteria.sectors.length === 0) return [];
  const sectorWords = criteria.sectors.map(s => SECTOR_MAP[s].label.toLowerCase());
  return firm.leadership.filter(l => sectorWords.some(w => (l.role || '').toLowerCase().includes(w)));
}

function renderDiscoveryEngine() {
  document.getElementById('discoveryView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">VC Discovery Engine</div>
    <div class="reports-intro">
      <p>Describe the kind of investor you're looking for in plain English. This reads your query for real, existing signals — sector, stage, location, fund size, and network relationships already tracked on this page — and explains exactly why each firm matched. It can't understand arbitrary language, so it tells you plainly when it couldn't parse something.</p>
    </div>

    <div class="disc-search-bar">
      <input type="text" id="discoveryInput" class="disc-search-input" placeholder="e.g. Early-stage AI investors in New York" value="${discoveryQuery}">
      <button class="disc-search-btn" id="discoverySearchBtn">Search</button>
    </div>
    <div class="disc-examples">
      ${DISCOVERY_EXAMPLE_QUERIES.map(q => `<button class="disc-example-chip" data-query="${q}">${q}</button>`).join('')}
    </div>

    <div id="discoveryResults"></div>
  `;

  document.getElementById('discoverySearchBtn').addEventListener('click', runDiscoverySearch);
  document.getElementById('discoveryInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') runDiscoverySearch();
  });
  document.querySelectorAll('.disc-example-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      discoveryQuery = chip.dataset.query;
      document.getElementById('discoveryInput').value = discoveryQuery;
      runDiscoverySearch();
    });
  });

  if (discoveryQuery) runDiscoverySearch();
}

function runDiscoverySearch() {
  discoveryQuery = document.getElementById('discoveryInput').value.trim();
  const resultsEl = document.getElementById('discoveryResults');
  if (!discoveryQuery) {
    resultsEl.innerHTML = '';
    return;
  }

  discoveryCriteria = parseDiscoveryQuery(discoveryQuery);
  const matches = computeDiscoveryMatches(discoveryCriteria);

  const notesHTML = discoveryCriteria.notes.length > 0
    ? `<div class="disc-notes">${discoveryCriteria.notes.map(n => `<div class="disc-note">⚠ ${n}</div>`).join('')}</div>`
    : '';

  const parsedSummary = [];
  if (discoveryCriteria.sectors.length) parsedSummary.push(`Sector: ${discoveryCriteria.sectors.map(s => SECTOR_MAP[s].label).join(discoveryCriteria.sectorMode === 'all' ? ' AND ' : ', ')}`);
  if (discoveryCriteria.stages.length) parsedSummary.push(`Stage: ${discoveryCriteria.stages.join(', ')}`);
  if (discoveryCriteria.locations.length) parsedSummary.push(`Location: ${discoveryCriteria.locations.map(l => LOCATION_MAP[l].label).join(', ')}`);
  if (discoveryCriteria.fundTier) parsedSummary.push(`Fund Size: ${DISCOVERY_FUND_TIER_LABEL[discoveryCriteria.fundTier]}`);
  if (discoveryCriteria.focus) parsedSummary.push(`Focus: ${discoveryCriteria.focus === 'enterprise' ? 'Enterprise' : 'Consumer'}`);
  if (discoveryCriteria.connectedToFirmName) parsedSummary.push(`Connected to: ${discoveryCriteria.connectedToFirmName}`);
  if (discoveryCriteria.companyNames.length) parsedSummary.push(`Mentions: ${discoveryCriteria.companyNames.join(', ')}`);

  const parsedHTML = parsedSummary.length > 0
    ? `<div class="disc-parsed"><span class="disc-parsed-label">Understood as:</span> ${parsedSummary.map(p => `<span class="disc-parsed-tag">${p}</span>`).join('')}</div>`
    : '';

  const refineHTML = (discoveryCriteria.sectors.length > 0 || discoveryCriteria.stages.length > 0)
    ? `<button class="disc-refine-btn" id="discRefineBtn">Refine These Results in Full Rankings →</button>`
    : '';

  const topScore = matches.length > 0 ? matches[0].score : 0;
  const lowConfidenceNote = topScore < 40
    ? `<div class="disc-note">⚠ No firm in the dataset strongly matches every part of this query — showing the closest real matches below.</div>`
    : '';

  resultsEl.innerHTML = `
    ${notesHTML}
    ${parsedHTML}
    ${refineHTML}
    ${lowConfidenceNote}
    <div class="disc-results-label">${matches.length} Firms, Ranked by Real Match Strength</div>
    <div id="discResultsList">${matches.slice(0, 30).map(m => renderDiscoveryCard(m, discoveryCriteria)).join('')}</div>
  `;

  const refineBtn = document.getElementById('discRefineBtn');
  if (refineBtn) refineBtn.addEventListener('click', () => applyDiscoveryToRankings(discoveryCriteria));
}

function renderDiscoveryCard(m, criteria) {
  const { firm, score, checks, networkDetail, matchingHoldings, holdingsCount } = m;
  const relevantPartners = getRelevantPartnersForQuery(firm, criteria);

  const checksHTML = checks.filter(c => c.kind !== 'miss').map(c => `<span class="disc-check disc-check-${c.kind}">✓ ${c.label}</span>`).join('');
  const missesHTML = checks.filter(c => c.kind === 'miss').map(c => `<span class="disc-check disc-check-miss">✗ ${c.label}</span>`).join('');

  const networkHTML = networkDetail ? `
    <div class="disc-network-detail">
      ${networkDetail.type === 'portfolio' ? `Shared: ${networkDetail.companies.join(', ')}` : ''}
      ${networkDetail.type === 'partner' ? `Via: ${networkDetail.people.map(p => p.name).join(', ')}` : ''}
      ${networkDetail.type === 'spinout' ? `Spinout lineage connection` : ''}
    </div>` : '';

  const partnersHTML = relevantPartners.length > 0 ? `
    <div class="disc-relevant-row"><span class="disc-relevant-label">Relevant Partners:</span> ${relevantPartners.map(p => p.profileSlug ? `<a href="#partner/${p.profileSlug}" class="disc-relevant-link">${p.name}</a>` : p.name).join(', ')}</div>
  ` : '';

  const companiesHTML = matchingHoldings.length > 0 ? `
    <div class="disc-relevant-row"><span class="disc-relevant-label">Matched Companies:</span> ${matchingHoldings.map(h => h.name).join(', ')}</div>
  ` : `
    <div class="disc-relevant-row"><span class="disc-relevant-label">Portfolio:</span> ${holdingsCount} tracked compan${holdingsCount === 1 ? 'y' : 'ies'} on file${criteria.sectors.length > 0 ? ' (sector is tracked at the firm level, not per company, so this count is not sector-filtered)' : ''}</div>
  `;

  return `
    <div class="disc-result-card">
      <div class="disc-result-head">
        <div class="disc-score-block">
          <div class="disc-score-pct">${score}%</div>
          <div class="disc-score-quality">${getDiscoveryMatchLabel(score)}</div>
        </div>
        <div class="disc-result-main">
          <div class="disc-result-name"><a href="#${firm.slug}">${firm.name}</a></div>
          <div class="disc-result-meta">${firm.aum} · ${firm.hq}</div>
          <div class="disc-checks">${checksHTML}${missesHTML}</div>
          ${networkHTML}
        </div>
      </div>
      ${partnersHTML}
      ${companiesHTML}
      <div class="disc-links">
        <a href="#${firm.slug}" class="disc-link">Firm Profile</a>
        <a href="#relationship-graph/firm/${firm.slug}" class="disc-link">Relationship Graph</a>
        <a href="#historical-snapshot/${firm.slug}" class="disc-link">Timeline</a>
        <a href="#family-tree" class="disc-link">Family Tree</a>
      </div>
    </div>
  `;
}

// Hands the parsed sectors/stages off to the exact same filter
// state filters.js already reads (activeSectors/activeStages),
// then re-syncs the homepage chip UI to match before navigating
// there - reuses the existing filtering system rather than
// building a second one.
function applyDiscoveryToRankings(criteria) {
  activeSectors = new Set();
  criteria.sectors.forEach(slug => {
    (SECTOR_MAP[slug].rawTags || []).forEach(tag => activeSectors.add(tag));
  });
  activeStages = new Set(criteria.stages);

  window.location.hash = '';
  setTimeout(() => {
    document.querySelectorAll('#sectorFilterChips .chip').forEach(chip => {
      chip.classList.toggle('active', activeSectors.has(chip.dataset.sector));
    });
    document.querySelectorAll('#stageCardGrid .stage-card').forEach(card => {
      card.classList.toggle('active', activeStages.has(card.dataset.stage));
    });
    renderFirms();
  }, 0);
}
