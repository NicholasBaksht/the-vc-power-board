/**
 * RELATIONSHIP-GRAPH-EXPLORER.JS
 * The rendered "Relationship Graph" product surface: a progressive,
 * entity-centered network view built entirely on top of the data
 * layer in relationship-graph.js (buildGraphFor / expandNode /
 * dedupeGraph). This file owns rendering, D3 zoom/pan/drag/force
 * layout (same approach already proven in vc-ecosystem-graph.js),
 * search, filters, expand/collapse, focus, reset, and full-screen.
 *
 * Deliberately does NOT render the whole 270-firm ecosystem at once -
 * that's what the Ecosystem Graph page is for. This page always
 * starts from one entity and grows only when the user asks it to.
 */

const RG_NODE_COLORS = {
  firm: '#E8C34A',
  partner: '#7dd3fc',
  company: '#4ade80',
  sector: '#a78bfa',
  geo: '#f472b6'
};
const RG_NODE_LABELS = { firm: 'Firm', partner: 'Partner', company: 'Company', sector: 'Sector', geo: 'Geography' };
const RG_REL_LABELS = {
  current_partner: 'Current Partner',
  former_partner: 'Former Partner Bridge',
  previously_at: 'Previously At',
  invested_in: 'Investment',
  portfolio_connection: 'Portfolio Overlap',
  board_seat: 'Board Seat',
  spinout: 'Spinout Lineage',
  sector_peer: 'Sector',
  geo_peer: 'Geography'
};

let rg = {
  graph: { nodes: [], edges: [] },
  centerType: null,
  centerId: null,
  selectedId: null,
  expansionLog: [],   // [{ nodeId, addedNodeIds: Set, addedEdgeKeys: Set }]
  filters: { relTypes: null, entityTypes: null, sector: null, geo: null, yearFrom: null, yearTo: null },
  fullscreen: false
};

function rgEdgeKey(e) {
  return `${e.source.id || e.source}|${e.target.id || e.target}|${e.relType}`;
}

// Builds a flat, searchable list of every firm, partner, and distinct
// portfolio/notable/board company already tracked - real entities
// only, nothing synthesized just to populate search results.
function rgBuildSearchIndex() {
  const index = [];
  firms.forEach(f => index.push({ type: NODE_TYPES.FIRM, id: f.slug, label: f.name, meta: f.aum || '' }));
  Object.entries(partnerProfiles).forEach(([slug, p]) => {
    index.push({ type: NODE_TYPES.PARTNER, id: slug, label: p.name, meta: p.firm || '' });
  });
  const companyNames = new Set();
  firms.forEach(f => f.holdings.forEach(h => companyNames.add(h.name)));
  Object.values(partnerProfiles).forEach(p => (p.notableInvestments || []).forEach(inv => companyNames.add(inv.name)));
  companyNames.forEach(name => index.push({ type: NODE_TYPES.COMPANY, id: `company:${name}`, label: name, meta: 'Company' }));
  return index;
}

let RG_SEARCH_INDEX = null;

function renderRelationshipGraph(entityType, entityId) {
  RG_SEARCH_INDEX = RG_SEARCH_INDEX || rgBuildSearchIndex();
  rg.filters = { relTypes: null, entityTypes: null, sector: null, geo: null, yearFrom: null, yearTo: null };
  rg.expansionLog = [];
  rg.selectedId = null;

  document.getElementById('relationshipGraphView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">Relationship Graph</div>
    <div class="reports-intro">
      <p>Search for a firm, partner, or company to see how it really connects to everything else tracked on this page. Every line is a real, explained relationship — click any node to expand it, and click any connection to see exactly what backs it.</p>
    </div>

    <div class="ft-controls">
      <input type="text" id="rgSearchInput" class="ft-search-input" placeholder="Search firms, partners, or companies...">
      <div id="rgSearchResults" class="ft-search-results"></div>
    </div>

    <div class="rg-toolbar" id="rgToolbar">
      <button class="rg-btn" id="rgFocusBtn" disabled>Focus</button>
      <button class="rg-btn" id="rgExpandBtn" disabled>Expand</button>
      <button class="rg-btn" id="rgCollapseBtn" disabled>Collapse</button>
      <button class="rg-btn" id="rgResetBtn" disabled>Reset</button>
      <button class="rg-btn" id="rgFullscreenBtn" disabled>Full Screen</button>
      <button class="rg-btn" id="rgFiltersBtn" disabled>Filters</button>
    </div>

    <div class="rg-filters" id="rgFiltersPanel" style="display:none;"></div>

    <div class="ft-legend">
      ${Object.keys(RG_NODE_COLORS).map(t => `
        <span class="ft-legend-item"><span class="ft-legend-line" style="background:${RG_NODE_COLORS[t]}"></span>${RG_NODE_LABELS[t]}</span>
      `).join('')}
    </div>

    <div class="ft-layout">
      <div class="ft-canvas-wrap" id="rgCanvasWrap">
        <svg id="rgSvg"></svg>
        <div class="ft-canvas-hint">Scroll to zoom · Drag to pan · Drag a node to reposition</div>
      </div>
      <div class="ft-side-panel" id="rgSidePanel">
        <div class="ft-panel-empty">Search above to start exploring a firm, partner, or company.</div>
      </div>
    </div>
  `;

  rgWireSearch();
  rgWireToolbar();

  if (entityType && entityId) {
    rgLoadEntity(entityType, entityId);
  }
}

function rgWireSearch() {
  const input = document.getElementById('rgSearchInput');
  const results = document.getElementById('rgSearchResults');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.style.display = 'none'; results.innerHTML = ''; return; }
    const matches = RG_SEARCH_INDEX.filter(e => e.label.toLowerCase().includes(q)).slice(0, 20);
    results.innerHTML = matches.length
      ? matches.map(m => `
          <div class="ft-search-result" data-type="${m.type}" data-id="${m.id}">
            ${m.label} <span style="color:var(--ink-dim); font-size:11.5px;">— ${RG_NODE_LABELS[m.type]}${m.meta ? ' · ' + m.meta : ''}</span>
          </div>
        `).join('')
      : `<div class="ft-search-empty">No matches.</div>`;
    results.style.display = 'block';
  });

  results.addEventListener('click', (e) => {
    const row = e.target.closest('.ft-search-result');
    if (!row) return;
    input.value = '';
    results.style.display = 'none';
    rgLoadEntity(row.dataset.type, row.dataset.id);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.ft-controls')) results.style.display = 'none';
  });
}

function rgWireToolbar() {
  document.getElementById('rgFocusBtn').addEventListener('click', () => {
    if (!rg.selectedId) return;
    rgHighlight(rg.selectedId);
  });
  document.getElementById('rgExpandBtn').addEventListener('click', () => rgExpandSelected());
  document.getElementById('rgCollapseBtn').addEventListener('click', () => rgCollapseSelected());
  document.getElementById('rgResetBtn').addEventListener('click', () => {
    if (!rg.centerType || !rg.centerId) return;
    rgLoadEntity(rg.centerType, rg.centerId);
  });
  document.getElementById('rgFullscreenBtn').addEventListener('click', () => rgToggleFullscreen());
  document.getElementById('rgFiltersBtn').addEventListener('click', () => {
    const panel = document.getElementById('rgFiltersPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  });
}

function rgLoadEntity(entityType, entityId) {
  const rawId = entityType === NODE_TYPES.COMPANY ? entityId.replace(/^company:/, '') : entityId;
  rg.graph = buildGraphFor(entityType, rawId);
  rg.centerType = entityType;
  rg.centerId = rawId;
  rg.selectedId = entityType === NODE_TYPES.COMPANY ? `company:${rawId}` : rawId;
  rg.expansionLog = [];

  ['rgFocusBtn', 'rgExpandBtn', 'rgCollapseBtn', 'rgResetBtn', 'rgFullscreenBtn', 'rgFiltersBtn'].forEach(id => {
    document.getElementById(id).disabled = false;
  });

  rgRenderFilterOptions();
  rgDraw();
  const centerNode = rg.graph.nodes.find(n => n.id === rg.selectedId);
  if (centerNode) rgRenderSidePanel(centerNode);
}

// ---------- Filters ----------

function rgRenderFilterOptions() {
  const relTypesPresent = Array.from(new Set(rg.graph.edges.map(e => e.relType)));
  const entityTypesPresent = Array.from(new Set(rg.graph.nodes.map(n => n.type)));
  const sectorsPresent = Array.from(new Set(
    rg.graph.nodes.filter(n => n.type === NODE_TYPES.FIRM)
      .flatMap(n => (firms.find(f => f.slug === n.id) || {}).sectors || [])
  ));
  const geosPresent = Array.from(new Set(
    rg.graph.nodes.filter(n => n.type === NODE_TYPES.FIRM)
      .map(n => getCountryFromHQ((firms.find(f => f.slug === n.id) || {}).hq)).filter(Boolean)
  ));
  const yearsPresent = rg.graph.edges.map(e => e.startYear || (e.people ? Math.min(...e.people.map(p => p.startYear).filter(Boolean)) : null)).filter(Boolean);

  document.getElementById('rgFiltersPanel').innerHTML = `
    <div class="rg-filter-group">
      <div class="rg-filter-label">Relationship Type</div>
      ${relTypesPresent.map(t => `
        <label class="rg-filter-check"><input type="checkbox" class="rg-rel-filter" value="${t}" checked> ${RG_REL_LABELS[t] || t}</label>
      `).join('')}
    </div>
    <div class="rg-filter-group">
      <div class="rg-filter-label">Entity Type</div>
      ${entityTypesPresent.map(t => `
        <label class="rg-filter-check"><input type="checkbox" class="rg-entity-filter" value="${t}" checked> ${RG_NODE_LABELS[t]}</label>
      `).join('')}
    </div>
    ${sectorsPresent.length ? `
    <div class="rg-filter-group">
      <div class="rg-filter-label">Sector</div>
      <select id="rgSectorFilter" class="rg-select">
        <option value="">All Sectors</option>
        ${sectorsPresent.map(s => `<option value="${s}">${s}</option>`).join('')}
      </select>
    </div>` : ''}
    ${geosPresent.length ? `
    <div class="rg-filter-group">
      <div class="rg-filter-label">Geography</div>
      <select id="rgGeoFilter" class="rg-select">
        <option value="">All Countries</option>
        ${geosPresent.map(g => `<option value="${g}">${g}</option>`).join('')}
      </select>
    </div>` : ''}
    ${yearsPresent.length ? `
    <div class="rg-filter-group">
      <div class="rg-filter-label">Time Period (relationships with a known start year)</div>
      <select id="rgYearFilter" class="rg-select">
        <option value="">Any Time</option>
        <option value="5">Started in last 5 years</option>
        <option value="10">Started in last 10 years</option>
        <option value="20">Started in last 20 years</option>
      </select>
    </div>` : `
    <div class="rg-filter-group">
      <div class="rg-filter-note">No relationships in this view carry a known start year to filter by yet.</div>
    </div>`}
    <div class="rg-filter-note">Investment-stage filtering isn't wired in here yet — it depends on the stage classification already used on the homepage's stage cards, which this file doesn't have access to.</div>
  `;

  document.querySelectorAll('.rg-rel-filter, .rg-entity-filter').forEach(el => el.addEventListener('change', rgApplyFilters));
  const sectorSel = document.getElementById('rgSectorFilter');
  if (sectorSel) sectorSel.addEventListener('change', rgApplyFilters);
  const geoSel = document.getElementById('rgGeoFilter');
  if (geoSel) geoSel.addEventListener('change', rgApplyFilters);
  const yearSel = document.getElementById('rgYearFilter');
  if (yearSel) yearSel.addEventListener('change', rgApplyFilters);
}

function rgApplyFilters() {
  const checkedRel = new Set(Array.from(document.querySelectorAll('.rg-rel-filter:checked')).map(el => el.value));
  const checkedEntity = new Set(Array.from(document.querySelectorAll('.rg-entity-filter:checked')).map(el => el.value));
  const sectorSel = document.getElementById('rgSectorFilter');
  const geoSel = document.getElementById('rgGeoFilter');
  const yearSel = document.getElementById('rgYearFilter');
  const sector = sectorSel ? sectorSel.value : '';
  const geo = geoSel ? geoSel.value : '';
  const yearsBack = yearSel && yearSel.value ? parseInt(yearSel.value, 10) : null;
  const currentYear = new Date().getFullYear();

  const svg = d3.select('#rgSvg');

  svg.selectAll('.rg-node').style('display', d => {
    if (!checkedEntity.has(d.type)) return 'none';
    if (sector && d.type === NODE_TYPES.FIRM) {
      const f = firms.find(x => x.slug === d.id);
      if (!f || !(f.sectors || []).includes(sector)) return 'none';
    }
    if (geo && d.type === NODE_TYPES.FIRM) {
      const f = firms.find(x => x.slug === d.id);
      if (!f || getCountryFromHQ(f.hq) !== geo) return 'none';
    }
    return null;
  });
  svg.selectAll('.rg-node-label').style('display', function () {
    const d = d3.select(this).datum();
    return checkedEntity.has(d.type) ? null : 'none';
  });

  svg.selectAll('.rg-link').style('display', d => {
    if (!checkedRel.has(d.relType)) return 'none';
    const sId = d.source.id || d.source, tId = d.target.id || d.target;
    const sNode = rg.graph.nodes.find(n => n.id === sId);
    const tNode = rg.graph.nodes.find(n => n.id === tId);
    if (sNode && !checkedEntity.has(sNode.type)) return 'none';
    if (tNode && !checkedEntity.has(tNode.type)) return 'none';
    if (yearsBack) {
      const y = d.startYear || (d.people ? Math.max(...d.people.map(p => p.startYear).filter(Boolean)) : null);
      if (y && (currentYear - y) > yearsBack) return 'none';
    }
    return null;
  });
}

// ---------- D3 render ----------

function rgDraw() {
  const wrap = document.getElementById('rgCanvasWrap');
  const width = wrap.clientWidth || 800;
  const height = rg.fullscreen ? window.innerHeight - 60 : 560;

  const svg = d3.select('#rgSvg')
    .attr('viewBox', [0, 0, width, height])
    .attr('width', '100%')
    .attr('height', height);
  svg.selectAll('*').remove();

  const container = svg.append('g');
  svg.call(d3.zoom().scaleExtent([0.2, 4]).on('zoom', (event) => {
    container.attr('transform', event.transform);
  }));

  const nodes = rg.graph.nodes.map(n => Object.assign({}, n));
  const edges = rg.graph.edges.map(e => Object.assign({}, e));

  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(edges).id(d => d.id).distance(85).strength(0.4))
    .force('charge', d3.forceManyBody().strength(-200))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collide', d3.forceCollide().radius(d => rgNodeRadius(d) + 8));

  const link = container.append('g').selectAll('line')
    .data(edges).join('line')
    .attr('class', 'rg-link')
    .attr('stroke', d => RG_NODE_COLORS[rgEdgeDominantColor(d)])
    .attr('stroke-width', 1.2)
    .attr('stroke-opacity', 0.35)
    .style('cursor', 'pointer')
    .on('click', (event, d) => rgRenderEdgePanel(d));

  const node = container.append('g').selectAll('circle')
    .data(nodes).join('circle')
    .attr('class', 'rg-node ft-node')
    .attr('r', d => rgNodeRadius(d))
    .attr('fill', '#0C0F14')
    .attr('stroke', d => RG_NODE_COLORS[d.type])
    .attr('stroke-width', d => d.id === rg.selectedId ? 3 : 1.5)
    .call(d3.drag()
      .on('start', (event, d) => { if (!event.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
      .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y; })
      .on('end', (event, d) => { if (!event.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; }))
    .on('click', (event, d) => {
      rg.selectedId = d.id;
      node.attr('stroke-width', n => n.id === rg.selectedId ? 3 : 1.5);
      rgRenderSidePanel(d);
    })
    .on('dblclick', (event, d) => {
      rg.selectedId = d.id;
      rgExpandSelected();
    });

  const labels = container.append('g').selectAll('text')
    .data(nodes).join('text')
    .attr('class', 'rg-node-label ft-node-label')
    .attr('dy', d => -rgNodeRadius(d) - 6)
    .attr('text-anchor', 'middle')
    .text(d => d.label);

  simulation.on('tick', () => {
    link.attr('x1', d => d.source.x).attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
    node.attr('cx', d => d.x).attr('cy', d => d.y);
    labels.attr('x', d => d.x).attr('y', d => d.y);
  });
}

function rgNodeRadius(d) {
  if (d.type === NODE_TYPES.FIRM) {
    const aumNum = typeof parseAumNumber === 'function' ? parseAumNumber(d.aum) : 1;
    return Math.max(7, Math.min(20, Math.sqrt(aumNum || 0.5) * 2.6));
  }
  if (d.id === rg.selectedId) return 11;
  return 7;
}

function rgEdgeDominantColor(edge) {
  const t = edge.target.type || (rg.graph.nodes.find(n => n.id === (edge.target.id || edge.target)) || {}).type;
  return t || 'firm';
}

// ---------- Selection / side panel ----------

function rgRenderSidePanel(nodeDatum) {
  const panel = document.getElementById('rgSidePanel');
  const connections = rg.graph.edges.filter(e => {
    const s = e.source.id || e.source, t = e.target.id || e.target;
    return s === nodeDatum.id || t === nodeDatum.id;
  });

  const profileLink = rgProfileLink(nodeDatum);

  const rowsHTML = connections.map(e => {
    const s = e.source.id || e.source, t = e.target.id || e.target;
    const otherId = s === nodeDatum.id ? t : s;
    const other = rg.graph.nodes.find(n => n.id === otherId);
    if (!other) return '';
    const extra = (e.companies || e.people)
      ? `<div class="rg-connection-detail">${rgConnectionDetailHTML(e)}</div>`
      : '';
    return `
      <div class="ft-panel-row">
        <span class="ft-panel-dot" style="background:${RG_NODE_COLORS[other.type]}"></span>
        <div class="ft-panel-row-text">
          <span class="ft-panel-row-name">${other.label}</span>
          <span class="ft-panel-row-type">${RG_REL_LABELS[e.relType] || e.relType}</span>
          <span class="ft-panel-row-label">${e.label}</span>
          ${extra}
        </div>
      </div>
    `;
  }).join('');

  panel.innerHTML = `
    <div class="ft-panel-header">
      <div class="ft-panel-type-badge">${RG_NODE_LABELS[nodeDatum.type]}</div>
      <div class="ft-panel-name">${nodeDatum.label}</div>
      ${nodeDatum.role ? `<div class="ft-panel-role">${nodeDatum.role}</div>` : ''}
      ${profileLink}
    </div>
    <div class="ft-panel-connections-label">${connections.length} Real Connection${connections.length === 1 ? '' : 's'} In This View</div>
    ${rowsHTML || '<div class="ft-panel-empty-small">No connections in the current view — try Expand to pull in more.</div>'}
    <div class="ft-panel-note">Double-click a node (or select it and hit Expand) to reveal its own real connections.</div>
  `;

  panel.querySelectorAll('.rg-detail-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const list = btn.nextElementSibling;
      const open = list.style.display !== 'none';
      list.style.display = open ? 'none' : 'block';
      btn.textContent = open ? btn.dataset.showLabel : btn.dataset.hideLabel;
    });
  });
}

// Companies/people that back an aggregated edge (portfolio overlap,
// former-partner bridges) are hidden behind a toggle so the panel
// stays scannable, but the full real list is always one click away -
// never truncated silently.
function rgConnectionDetailHTML(e) {
  if (e.companies) {
    const items = e.companies.map(name => `<a href="#company/${encodeURIComponent(name)}" class="rg-detail-link">${name}</a>`).join('');
    return `
      <button class="rg-detail-toggle" data-show-label="Show ${e.companies.length} companies" data-hide-label="Hide companies">Show ${e.companies.length} companies</button>
      <div class="rg-detail-list" style="display:none;">${items}</div>
    `;
  }
  if (e.people) {
    const items = e.people.map(p => `<span class="rg-detail-link">${p.name}${p.role ? ' — ' + p.role : ''}</span>`).join('');
    return `
      <button class="rg-detail-toggle" data-show-label="Show ${e.people.length} people" data-hide-label="Hide people">Show ${e.people.length} people</button>
      <div class="rg-detail-list" style="display:none;">${items}</div>
    `;
  }
  return '';
}

function rgRenderEdgePanel(edgeDatum) {
  const s = edgeDatum.source, t = edgeDatum.target;
  const sourceNode = typeof s === 'object' ? s : rg.graph.nodes.find(n => n.id === s);
  rgRenderSidePanel(sourceNode);
}

function rgProfileLink(nodeDatum) {
  if (nodeDatum.type === NODE_TYPES.FIRM) {
    return `<a href="#${nodeDatum.id}" class="ft-panel-link">View Firm Profile →</a>`;
  }
  if (nodeDatum.type === NODE_TYPES.PARTNER && nodeDatum.profileSlug) {
    return `<a href="#partner/${nodeDatum.profileSlug}" class="ft-panel-link">View Partner Profile →</a>`;
  }
  if (nodeDatum.type === NODE_TYPES.COMPANY) {
    return `<a href="#company/${encodeURIComponent(nodeDatum.label)}" class="ft-panel-link">View Company Profile →</a>`;
  }
  return '';
}

// ---------- Expand / collapse / focus / reset / fullscreen ----------

function rgExpandSelected() {
  if (!rg.selectedId) return;
  const node = rg.graph.nodes.find(n => n.id === rg.selectedId);
  if (!node) return;

  const before = new Set(rg.graph.nodes.map(n => n.id));
  const beforeEdgeKeys = new Set(rg.graph.edges.map(rgEdgeKey));

  const addition = expandNode(node);
  const merged = dedupeGraph({ nodes: [...rg.graph.nodes, ...addition.nodes], edges: [...rg.graph.edges, ...addition.edges] });

  const addedNodeIds = new Set(merged.nodes.map(n => n.id).filter(id => !before.has(id)));
  const addedEdgeKeys = new Set(merged.edges.map(rgEdgeKey).filter(k => !beforeEdgeKeys.has(k)));

  if (addedNodeIds.size === 0 && addedEdgeKeys.size === 0) return; // nothing new - don't log a no-op

  rg.graph = merged;
  rg.expansionLog.push({ nodeId: node.id, addedNodeIds, addedEdgeKeys });
  rgRenderFilterOptions();
  rgDraw();
  rgRenderSidePanel(node);
}

// Reverses the MOST RECENT expansion that this node caused. A node
// added by that expansion only gets removed if nothing else still
// references it - so collapsing one branch never breaks another.
function rgCollapseSelected() {
  if (!rg.selectedId) return;
  const logIndex = rg.expansionLog.map(l => l.nodeId).lastIndexOf(rg.selectedId);
  if (logIndex === -1) return;
  const entry = rg.expansionLog[logIndex];

  const remainingEdges = rg.graph.edges.filter(e => !entry.addedEdgeKeys.has(rgEdgeKey(e)));
  const stillReferenced = new Set(remainingEdges.flatMap(e => [e.source.id || e.source, e.target.id || e.target]));
  const remainingNodes = rg.graph.nodes.filter(n => !entry.addedNodeIds.has(n.id) || stillReferenced.has(n.id) || n.id === rg.centerId);

  rg.graph = { nodes: remainingNodes, edges: remainingEdges };
  rg.expansionLog.splice(logIndex, 1);
  rgRenderFilterOptions();
  rgDraw();
  const stillSelected = rg.graph.nodes.find(n => n.id === rg.selectedId);
  if (stillSelected) rgRenderSidePanel(stillSelected);
}

function rgHighlight(selectedId) {
  const connected = new Set([selectedId]);
  rg.graph.edges.forEach(e => {
    const s = e.source.id || e.source, t = e.target.id || e.target;
    if (s === selectedId) connected.add(t);
    if (t === selectedId) connected.add(s);
  });
  const svg = d3.select('#rgSvg');
  svg.selectAll('.rg-node').attr('opacity', d => connected.has(d.id) ? 1 : 0.15);
  svg.selectAll('.rg-node-label').attr('opacity', d => connected.has(d.id) ? 1 : 0.15);
  svg.selectAll('.rg-link').attr('stroke-opacity', d => {
    const s = d.source.id || d.source, t = d.target.id || d.target;
    return (s === selectedId || t === selectedId) ? 0.9 : 0.05;
  });
}

function rgToggleFullscreen() {
  const wrap = document.getElementById('rgCanvasWrap');
  rg.fullscreen = !rg.fullscreen;
  wrap.classList.toggle('rg-fullscreen', rg.fullscreen);
  document.getElementById('rgFullscreenBtn').textContent = rg.fullscreen ? 'Exit Full Screen' : 'Full Screen';
  rgDraw();
}
