/**
 * FIRM-INTELLIGENCE.JS
 * Real co-investment patterns for a firm - other firms that hold
 * at least one of the same public company, ranked by how many
 * companies they share. This is the one genuinely new signal not
 * already shown elsewhere on the firm detail page (sectors already
 * appear in the "For Founders" callout, and similar firms are
 * already handled by renderSimilarFirms) - see conversation notes
 * for why the other originally-planned dimensions were skipped.
 */
function getCoInvestors(firm) {
  const counts = {};
  firm.holdings.forEach(h => {
    firms.forEach(other => {
      if (other.slug === firm.slug) return;
      if (other.holdings.some(oh => oh.name === h.name)) {
        if (!counts[other.slug]) counts[other.slug] = { firm: other, shared: [] };
        counts[other.slug].shared.push(h.name);
      }
    });
  });
  return Object.values(counts).sort((a, b) => b.shared.length - a.shared.length).slice(0, 6);
}

function renderFirmIntelligence(firm) {
  const coInvestors = getCoInvestors(firm);
  if (coInvestors.length === 0) return ''; // nothing to show, skip the section entirely

  const rowsHTML = coInvestors.map(c => `
    <a href="#${c.firm.slug}" class="fi-row">
      <span class="fi-row-name">${c.firm.name}</span>
      <span class="fi-row-meta">${c.shared.length} shared holding${c.shared.length === 1 ? '' : 's'}: ${c.shared.slice(0, 2).join(', ')}${c.shared.length > 2 ? '…' : ''}</span>
    </a>
  `).join('');

  return `
    <div class="detail-subhead">Frequent Co-Investors</div>
    <div class="fi-list">${rowsHTML}</div>
  `;
}
const INTEL_FOLLOW_KEY = 'vcpb_follows';
const INTEL_FOLLOW_DEFAULTS = { firms: [], partners: [], sectors: [], companies: [], geographies: [] };

function getFollows() {
  try {
    const raw = localStorage.getItem(INTEL_FOLLOW_KEY);
    if (!raw) return Object.assign({}, INTEL_FOLLOW_DEFAULTS);
    return Object.assign({}, INTEL_FOLLOW_DEFAULTS, JSON.parse(raw));
  } catch (err) {
    return Object.assign({}, INTEL_FOLLOW_DEFAULTS);
  }
}
function saveFollows(follows) {
  try { localStorage.setItem(INTEL_FOLLOW_KEY, JSON.stringify(follows)); } catch (err) { /* storage unavailable */ }
}
function isFollowing(kind, id) { return getFollows()[kind].includes(id); }
function toggleFollow(kind, id) {
  const follows = getFollows();
  const idx = follows[kind].indexOf(id);
  if (idx === -1) follows[kind].push(id); else follows[kind].splice(idx, 1);
  saveFollows(follows);
  return follows;
}
function computeFollowScore(card, follows) {
  let score = 0;
  if (card.relatedEntities.firmSlugs.some(s => follows.firms.includes(s))) score++;
  if (card.relatedEntities.partnerSlugs.some(s => follows.partners.includes(s))) score++;
  if (card.relatedEntities.sectorSlugs.some(s => follows.sectors.includes(s))) score++;
  if (card.relatedEntities.locationSlugs.some(s => follows.geographies.includes(s))) score++;
  if (card.relatedEntities.companyNames.some(c => follows.companies.includes(c))) score++;
  return score;
}

function buildFollowSearchIndex() {
  const idx = [];
  firms.forEach(f => idx.push({ kind: 'firms', id: f.slug, label: f.name, meta: 'Firm' }));
  Object.entries(partnerProfiles).forEach(([slug, p]) => idx.push({ kind: 'partners', id: slug, label: p.name, meta: 'Partner' }));
  if (typeof SECTOR_MAP !== 'undefined') Object.entries(SECTOR_MAP).forEach(([slug, cfg]) => idx.push({ kind: 'sectors', id: slug, label: cfg.label, meta: 'Sector' }));
  if (typeof LOCATION_MAP !== 'undefined') Object.entries(LOCATION_MAP).forEach(([slug, cfg]) => idx.push({ kind: 'geographies', id: slug, label: cfg.label, meta: 'Geography' }));
  const companyNames = new Set();
  firms.forEach(f => f.holdings.forEach(h => companyNames.add(h.name)));
  companyNames.forEach(name => idx.push({ kind: 'companies', id: name, label: name, meta: 'Company' }));
  return idx;
}

let INTEL_SEARCH_INDEX = null;
let intelFilters = { types: new Set(), sector: '', geo: '', firmSlug: '', partnerSlug: '', yearMin: null, yearMax: null };
let intelAllCards = [];

function renderIntelligenceFeed() {
  INTEL_SEARCH_INDEX = INTEL_SEARCH_INDEX || buildFollowSearchIndex();
  intelFilters = { types: new Set(), sector: '', geo: '', firmSlug: '', partnerSlug: '', yearMin: null, yearMax: null };

  document.getElementById('intelligenceFeedView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">VC Intelligence Feed</div>
    <div class="reports-intro">
      <p>What changed in the tracked VC ecosystem - partner moves with real career and portfolio context, spinouts, fund milestones, and a computed activity signal. Every card is built from real, dated data already on this page; nothing here is invented. Follow firms, partners, sectors, companies, or geographies to bring their events to the top.</p>
    </div>

    <div class="intel-follow-panel">
      <div class="intel-follow-header" id="intelFollowToggle">
        <span class="intel-follow-title">Manage Follows</span>
        <span class="intel-follow-count" id="intelFollowCount"></span>
      </div>
      <div class="intel-follow-body" id="intelFollowBody" style="display:none;">
        <div class="ft-controls">
          <input type="text" id="intelFollowSearch" class="ft-search-input" placeholder="Search firms, partners, sectors, companies, or geographies to follow...">
          <div id="intelFollowResults" class="ft-search-results"></div>
        </div>
        <div id="intelFollowChips" class="intel-follow-chips"></div>
      </div>
    </div>

    <div id="intelLoading" class="intel-loading">Building feed from real, dated events on file…</div>
    <div id="intelBody" style="display:none;"></div>
  `;

  document.getElementById('intelFollowToggle').addEventListener('click', () => {
    const body = document.getElementById('intelFollowBody');
    body.style.display = body.style.display === 'none' ? 'block' : 'none';
  });
  wireFollowSearch();
  renderFollowChips();

  setTimeout(() => {
    try {
      intelAllCards = buildIntelFeed();
      document.getElementById('intelLoading').style.display = 'none';
      document.getElementById('intelBody').style.display = 'block';
      renderIntelFilterBar();
      renderIntelResults();
    } catch (err) {
      document.getElementById('intelLoading').style.display = 'none';
      document.getElementById('intelBody').style.display = 'block';
      document.getElementById('intelBody').innerHTML = `
        <div class="intel-error">
          <div class="intel-error-title">Couldn't build the feed</div>
          <div class="intel-error-detail">${err.message || 'An unexpected error occurred while reading feed data.'}</div>
        </div>
      `;
      console.error('Intelligence Feed build error:', err);
    }
  }, 0);
}

function wireFollowSearch() {
  const input = document.getElementById('intelFollowSearch');
  const results = document.getElementById('intelFollowResults');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.style.display = 'none'; results.innerHTML = ''; return; }
    const matches = INTEL_SEARCH_INDEX.filter(e => e.label.toLowerCase().includes(q)).slice(0, 20);
    results.innerHTML = matches.length
      ? matches.map(m => `<div class="ft-search-result" data-kind="${m.kind}" data-id="${m.id}">${m.label} <span style="color:var(--ink-dim); font-size:11.5px;">- ${m.meta}</span></div>`).join('')
      : `<div class="ft-search-empty">No matches.</div>`;
    results.style.display = 'block';
  });
  results.addEventListener('click', (e) => {
    const row = e.target.closest('.ft-search-result');
    if (!row) return;
    toggleFollow(row.dataset.kind, row.dataset.id);
    input.value = '';
    results.style.display = 'none';
    renderFollowChips();
    if (intelAllCards.length > 0) renderIntelResults();
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.intel-follow-body')) results.style.display = 'none';
  });
}

function renderFollowChips() {
  const follows = getFollows();
  const total = Object.values(follows).reduce((sum, arr) => sum + arr.length, 0);
  document.getElementById('intelFollowCount').textContent = total > 0 ? `${total} followed` : 'None yet';

  const labelFor = (kind, id) => {
    if (kind === 'firms') return (firms.find(f => f.slug === id) || {}).name || id;
    if (kind === 'partners') return (partnerProfiles[id] || {}).name || id;
    if (kind === 'sectors') return (typeof SECTOR_MAP !== 'undefined' && SECTOR_MAP[id]) ? SECTOR_MAP[id].label : id;
    if (kind === 'geographies') return (typeof LOCATION_MAP !== 'undefined' && LOCATION_MAP[id]) ? LOCATION_MAP[id].label : id;
    return id;
  };

  const chips = [];
  Object.entries(follows).forEach(([kind, ids]) => {
    ids.forEach(id => chips.push({ kind, id, label: labelFor(kind, id) }));
  });

  const chipsEl = document.getElementById('intelFollowChips');
  chipsEl.innerHTML = chips.length > 0
    ? chips.map(c => `<span class="intel-follow-chip">${c.label} <button class="intel-unfollow-btn" data-kind="${c.kind}" data-id="${c.id}">×</button></span>`).join('')
    : `<div class="intel-follow-empty">Nothing followed yet - search above to prioritize firms, partners, sectors, companies, or geographies in your feed.</div>`;

  chipsEl.querySelectorAll('.intel-unfollow-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleFollow(btn.dataset.kind, btn.dataset.id);
      renderFollowChips();
      if (intelAllCards.length > 0) renderIntelResults();
    });
  });
}

function renderIntelFilterBar() {
  const typesPresent = Array.from(new Set(intelAllCards.map(c => c.type)));
  const sectorsPresent = Array.from(new Set(intelAllCards.flatMap(c => c.relatedEntities.sectorSlugs)));
  const geosPresent = Array.from(new Set(intelAllCards.flatMap(c => c.relatedEntities.locationSlugs)));
  const firmsPresent = Array.from(new Set(intelAllCards.flatMap(c => c.relatedEntities.firmSlugs)))
    .map(slug => firms.find(f => f.slug === slug)).filter(Boolean).sort((a, b) => a.name.localeCompare(b.name));
  const partnersPresent = Array.from(new Set(intelAllCards.flatMap(c => c.relatedEntities.partnerSlugs)))
    .map(slug => ({ slug, name: (partnerProfiles[slug] || {}).name })).filter(p => p.name).sort((a, b) => a.name.localeCompare(b.name));
  const years = intelAllCards.map(c => c.year);
  const dataMin = Math.min(...years), dataMax = Math.max(...years);
  if (intelFilters.yearMin === null) intelFilters.yearMin = dataMin;
  if (intelFilters.yearMax === null) intelFilters.yearMax = dataMax;

  document.getElementById('intelBody').insertAdjacentHTML('afterbegin', `
    <div class="tl-filter-bar intel-filter-bar" id="intelFilterBar">
      <div class="tl-filter-group">
        <div class="tl-filter-label">Event Type</div>
        <div class="tl-type-chips">
          ${typesPresent.map(t => `<button class="snapshot-type-chip intel-type-chip ${intelFilters.types.has(t) ? 'active' : ''}" data-type="${t}" style="--chip-color:${INTEL_TYPE_COLORS[t]}">${INTEL_TYPE_LABELS[t]}</button>`).join('')}
        </div>
      </div>
      ${sectorsPresent.length ? `
      <div class="tl-filter-group">
        <div class="tl-filter-label">Sector</div>
        <select id="intelSectorFilter" class="snapshot-select">
          <option value="">All Sectors</option>
          ${sectorsPresent.map(s => `<option value="${s}" ${intelFilters.sector === s ? 'selected' : ''}>${SECTOR_MAP[s].label}</option>`).join('')}
        </select>
      </div>` : ''}
      ${geosPresent.length ? `
      <div class="tl-filter-group">
        <div class="tl-filter-label">Geography</div>
        <select id="intelGeoFilter" class="snapshot-select">
          <option value="">All Geographies</option>
          ${geosPresent.map(g => `<option value="${g}" ${intelFilters.geo === g ? 'selected' : ''}>${LOCATION_MAP[g].label}</option>`).join('')}
        </select>
      </div>` : ''}
      <div class="tl-filter-group">
        <div class="tl-filter-label">Firm</div>
        <select id="intelFirmFilter" class="snapshot-select">
          <option value="">All Firms</option>
          ${firmsPresent.map(f => `<option value="${f.slug}" ${intelFilters.firmSlug === f.slug ? 'selected' : ''}>${f.name}</option>`).join('')}
        </select>
      </div>
      ${partnersPresent.length ? `
      <div class="tl-filter-group">
        <div class="tl-filter-label">Partner</div>
        <select id="intelPartnerFilter" class="snapshot-select">
          <option value="">All Partners</option>
          ${partnersPresent.map(p => `<option value="${p.slug}" ${intelFilters.partnerSlug === p.slug ? 'selected' : ''}>${p.name}</option>`).join('')}
        </select>
      </div>` : ''}
      <div class="tl-filter-group">
        <div class="tl-filter-label">Time Period (${dataMin}–${dataMax} on file)</div>
        <div class="tl-year-range">
          <input type="number" id="intelYearMin" class="tl-year-input" value="${intelFilters.yearMin}" min="${dataMin}" max="${dataMax}">
          <span class="tl-year-sep">to</span>
          <input type="number" id="intelYearMax" class="tl-year-input" value="${intelFilters.yearMax}" min="${dataMin}" max="${dataMax}">
        </div>
      </div>
    </div>
    <div class="tl-disabled-filters-note">Not shown here: discrete investment/funding-round dates, partner promotions, and dated office openings - none of these are tracked with real dates anywhere on this site.</div>
  `);

  document.querySelectorAll('.intel-type-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const t = chip.dataset.type;
      if (intelFilters.types.has(t)) intelFilters.types.delete(t); else intelFilters.types.add(t);
      renderIntelResults();
    });
  });
  const sectorSel = document.getElementById('intelSectorFilter');
  if (sectorSel) sectorSel.addEventListener('change', (e) => { intelFilters.sector = e.target.value; renderIntelResults(); });
  const geoSel = document.getElementById('intelGeoFilter');
  if (geoSel) geoSel.addEventListener('change', (e) => { intelFilters.geo = e.target.value; renderIntelResults(); });
  document.getElementById('intelFirmFilter').addEventListener('change', (e) => { intelFilters.firmSlug = e.target.value; renderIntelResults(); });
  const partnerSel = document.getElementById('intelPartnerFilter');
  if (partnerSel) partnerSel.addEventListener('change', (e) => { intelFilters.partnerSlug = e.target.value; renderIntelResults(); });
  document.getElementById('intelYearMin').addEventListener('change', (e) => { intelFilters.yearMin = parseInt(e.target.value, 10); renderIntelResults(); });
  document.getElementById('intelYearMax').addEventListener('change', (e) => { intelFilters.yearMax = parseInt(e.target.value, 10); renderIntelResults(); });
}

function renderIntelResults() {
  let existing = document.getElementById('intelResultsList');
  if (!existing) {
    document.getElementById('intelBody').insertAdjacentHTML('beforeend', `<div class="intel-results-label" id="intelResultsLabel"></div><div id="intelResultsList"></div>`);
    existing = document.getElementById('intelResultsList');
  }

  const follows = getFollows();
  const hasFollows = Object.values(follows).some(arr => arr.length > 0);

  const filtered = intelAllCards.filter(c => {
    if (intelFilters.types.size > 0 && !intelFilters.types.has(c.type)) return false;
    if (intelFilters.sector && !c.relatedEntities.sectorSlugs.includes(intelFilters.sector)) return false;
    if (intelFilters.geo && !c.relatedEntities.locationSlugs.includes(intelFilters.geo)) return false;
    if (intelFilters.firmSlug && !c.relatedEntities.firmSlugs.includes(intelFilters.firmSlug)) return false;
    if (intelFilters.partnerSlug && !c.relatedEntities.partnerSlugs.includes(intelFilters.partnerSlug)) return false;
    if (c.year < intelFilters.yearMin || c.year > intelFilters.yearMax) return false;
    return true;
  });

  const withScores = filtered.map(c => ({ card: c, followScore: computeFollowScore(c, follows) }));
  withScores.sort((a, b) => hasFollows ? (b.followScore - a.followScore) || (b.card.year - a.card.year) : b.card.year - a.card.year);

  document.getElementById('intelResultsLabel').textContent = `${filtered.length} Event${filtered.length === 1 ? '' : 's'}${hasFollows ? ' · Followed Prioritized' : ''}`;

  if (filtered.length === 0) {
    document.getElementById('intelResultsList').innerHTML = `
      <div class="intel-empty">
        No events match the current filters. ${intelAllCards.length === 0 ? 'There are no dated events on file yet at all.' : 'Try widening the time period or clearing a filter.'}
      </div>
    `;
    return;
  }

  document.getElementById('intelResultsList').innerHTML = withScores.map(({ card, followScore }) => renderIntelCard(card, followScore)).join('');

  document.querySelectorAll('.intel-follow-inline-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleFollow(btn.dataset.kind, btn.dataset.id);
      renderFollowChips();
      renderIntelResults();
    });
  });
}

function renderIntelCard(card, followScore) {
  const follows = getFollows();
  const isFollowingFirm = follows.firms.includes(card.firm.slug);
  const primaryPartnerSlug = card.relatedEntities.partnerSlugs[0] || null;
  const isFollowingPartner = primaryPartnerSlug ? follows.partners.includes(primaryPartnerSlug) : false;

  const supportingHTML = card.supportingData.length > 0
    ? `<div class="intel-supporting">${card.supportingData.map(s => `<div class="intel-supporting-row">${s}</div>`).join('')}</div>`
    : '';

  const linksHTML = card.links.map(l => `<a href="${l.href}" class="disc-link">${l.label}</a>`).join('');

  return `
    <div class="intel-card ${followScore > 0 ? 'intel-card-followed' : ''}">
      <div class="intel-card-head">
        <span class="intel-type-badge" style="--chip-color:${INTEL_TYPE_COLORS[card.type]}">${INTEL_TYPE_LABELS[card.type]}</span>
        <span class="intel-card-year">${card.year}</span>
        ${followScore > 0 ? `<span class="intel-followed-badge"> Followed</span>` : ''}
      </div>
      <div class="intel-card-headline">${card.headline}</div>
      ${card.context ? `<div class="intel-card-context">${card.context}</div>` : ''}
      ${supportingHTML}
      <div class="intel-card-footer">
        <div class="disc-links intel-card-links">${linksHTML}</div>
        <div class="intel-follow-inline">
          <button class="intel-follow-inline-btn" data-kind="firms" data-id="${card.firm.slug}">${isFollowingFirm ? ' Following ' + card.firm.short : ' Follow ' + card.firm.short}</button>
          ${primaryPartnerSlug ? `<button class="intel-follow-inline-btn" data-kind="partners" data-id="${primaryPartnerSlug}">${isFollowingPartner ? ' Following ' + partnerProfiles[primaryPartnerSlug].name : ' Follow ' + partnerProfiles[primaryPartnerSlug].name}</button>` : ''}
        </div>
      </div>
    </div>
  `;
}
