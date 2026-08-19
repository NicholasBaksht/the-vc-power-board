/**
 * FAMILY-TREE.JS
 * The VC Family Tree - an interactive, firm-centered relationship
 * graph built entirely on relationship-graph.js's real data layer.
 * Progressive expansion: starts with one firm's immediate real
 * relationships, and reveals more only as the user clicks through -
 * never renders the whole network at once.
 */

let ftState = {
  centerSlug: null,
  nodes: [],
  edges: [],
  expandedIds: new Set(),
  selectedNode: null,
  simulation: null
};

const FT_REL_STYLE = {
  current_partner:      { color: '#E8C34A', dash: 'none',  width: 2 },
  former_partner:        { color: '#E8C34A', dash: '4,3',   width: 1.5 },
  previously_at:          { color: '#8B93A6', dash: '4,3',   width: 1.5 },
  joined:                 { color: '#E8C34A', dash: 'none',  width: 2 },
  founded:                { color: '#a78bfa', dash: 'none',  width: 2 },
  invested_in:            { color: '#4ade80', dash: 'none',  width: 1.2 },
  portfolio_connection:   { color: '#4ade80', dash: '2,3',   width: 1.2 },
  spinout:                { color: '#a78bfa', dash: 'none',  width: 2.5 }
};

const FT_REL_LABELS = {
  current_partner: 'Current Partner',
  former_partner: 'Former Partner',
  previously_at: 'Previously At',
  joined: 'Joined',
  founded: 'Founded',
  invested_in: 'Invested In',
  portfolio_connection: 'Portfolio Connection',
  spinout: 'Spinout'
};

function renderFamilyTree() {
  const defaultSlug = ftState.centerSlug || featuredFirm.slug;

  document.getElementById('familyTreeView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">VC Family Tree</div>
    <div class="reports-intro">
      <p>Trace how firms, partners, and portfolio companies really connect - click any node to reveal its real relationships. Every connection here is backed by verified data already on this site; nothing is inferred.</p>
    </div>

    <div class="ft-controls">
      <input type="text" id="ftFirmSearch" class="ft-search-input" placeholder="Search for a firm to center the tree on..." autocomplete="off">
      <div id="ftSearchResults" class="ft-search-results"></div>
    </div>

    <div class="ft-legend">
      ${Object.entries(FT_REL_LABELS).map(([key, label]) => `
        <span class="ft-legend-item">
          <span class="ft-legend-line" style="background:${FT_REL_STYLE[key].color}; ${FT_REL_STYLE[key].dash !== 'none' ? 'background-image: repeating-linear-gradient(90deg,' + FT_REL_STYLE[key].color + ' 0 4px, transparent 4px 7px); background-color: transparent;' : ''}"></span>
          ${label}
        </span>
      `).join('')}
    </div>

    <div class="ft-layout">
      <div class="ft-canvas-wrap">
        <svg id="ftSvg"></svg>
        <div class="ft-canvas-hint">Scroll to zoom · Drag to pan · Click a node to expand it</div>
      </div>
      <div id="ftSidePanel" class="ft-side-panel">
        <div class="ft-panel-empty">Click any node in the tree to see why it's connected.</div>
      </div>
    </div>
  `;

  setupFtSearch();
  selectFamilyTreeFirm(defaultSlug);
}

function setupFtSearch() {
  const input = document.getElementById('ftFirmSearch');
  const results = document.getElementById('ftSearchResults');

  input.addEventListener('input', () => {
    const term = input.value.trim().toLowerCase();
    if (term.length < 2) { results.innerHTML = ''; results.style.display = 'none'; return; }
    const matches = firms.filter(f => f.name.toLowerCase().includes(term)).slice(0, 8);
    if (matches.length === 0) { results.innerHTML = '<div class="ft-search-empty">No firms found.</div>'; results.style.display = 'block'; return; }
    results.innerHTML = matches.map(f => `<div class="ft-search-result" data-slug="${f.slug}">${f.name}</div>`).join('');
    results.style.display = 'block';
    results.querySelectorAll('.ft-search-result').forEach(el => {
      el.addEventListener('click', () => {
        input.value = '';
        results.style.display = 'none';
        selectFamilyTreeFirm(el.dataset.slug);
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !results.contains(e.target)) results.style.display = 'none';
  });
}

function selectFamilyTreeFirm(slug) {
  const firm = firms.find(f => f.slug === slug);
  if (!firm) {
    document.getElementById('ftSidePanel').innerHTML = `<div class="ft-panel-empty">Firm not found.</div>`;
    return;
  }
  ftState.centerSlug = slug;
  ftState.expandedIds = new Set([slug]);
  const graph = buildInitialGraph(slug);
  ftState.nodes = graph.nodes;
  ftState.edges = graph.edges;
  ftState.selectedNode = null;
  drawFamilyTreeGraph();
  renderFtSidePanel(null);
}
function drawFamilyTreeGraph() {
  const wrap = document.querySelector('.ft-canvas-wrap');
  const width = wrap.clientWidth;
  const height = 560;

  const svg = d3.select('#ftSvg')
    .attr('viewBox', [0, 0, width, height])
    .attr('width', '100%')
    .attr('height', height);
  svg.selectAll('*').remove();

  const container = svg.append('g');
  svg.call(d3.zoom().scaleExtent([0.3, 3]).on('zoom', (event) => {
    container.attr('transform', event.transform);
  }));

  const nodes = ftState.nodes.map(n => ({ ...n }));
  const edges = ftState.edges.map(e => ({ ...e }));

  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(edges).id(d => d.id).distance(d => d.relType === 'invested_in' ? 70 : 110).strength(0.5))
    .force('charge', d3.forceManyBody().strength(-220))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collide', d3.forceCollide().radius(d => ftNodeRadius(d) + 8));
  ftState.simulation = simulation;

  const link = container.append('g')
    .selectAll('line')
    .data(edges)
    .join('line')
    .attr('stroke', d => (FT_REL_STYLE[d.relType] || {}).color || '#666')
    .attr('stroke-width', d => (FT_REL_STYLE[d.relType] || {}).width || 1)
    .attr('stroke-dasharray', d => {
      const dash = (FT_REL_STYLE[d.relType] || {}).dash;
      return dash && dash !== 'none' ? dash : null;
    })
    .attr('stroke-opacity', 0.6);

  const node = container.append('g')
    .selectAll('g')
    .data(nodes)
    .join('g')
    .attr('class', 'ft-node')
    .call(d3.drag()
      .on('start', (event, d) => { if (!event.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
      .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y; })
      .on('end', (event, d) => { if (!event.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; }))
    .on('click', (event, d) => handleFtNodeClick(d));

  node.append('circle')
    .attr('r', d => ftNodeRadius(d))
    .attr('fill', d => ftNodeFill(d))
    .attr('stroke', d => d.center ? '#E8C34A' : ftNodeStroke(d))
    .attr('stroke-width', d => d.center ? 3 : 1.5);

  node.append('text')
    .attr('class', 'ft-node-label')
    .attr('dy', d => -ftNodeRadius(d) - 6)
    .attr('text-anchor', 'middle')
    .text(d => d.label.length > 22 ? d.label.slice(0, 20) + '…' : d.label);

  simulation.on('tick', () => {
    link.attr('x1', d => d.source.x).attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
    node.attr('transform', d => `translate(${d.x},${d.y})`);
  });
}

function ftNodeRadius(d) {
  if (d.center) return 24;
  if (d.type === 'firm') return 16;
  if (d.type === 'partner') return 11;
  return 8; // company
}

function ftNodeFill(d) {
  if (d.type === 'firm') return '#0C0F14';
  if (d.type === 'partner') return '#1a1d24';
  return '#0C0F14';
}

function ftNodeStroke(d) {
  if (d.type === 'firm') return '#E8C34A';
  if (d.type === 'partner') return '#8B93A6';
  return '#4ade80';
}

// Clicking a node does two things: expands it (revealing its real
// relationships progressively, per the constitution's requirement)
// and shows the "why is this connected" explanation in the side panel.
function handleFtNodeClick(d) {
  ftState.selectedNode = d;
  renderFtSidePanel(d);

  if (!ftState.expandedIds.has(d.id)) {
    ftState.expandedIds.add(d.id);
    const newGraph = expandNode(d);
    if (newGraph.nodes.length === 0 && newGraph.edges.length === 0) {
      renderFtSidePanel(d, true); // flag: nothing new to expand
      return;
    }
    const existingIds = new Set(ftState.nodes.map(n => n.id));
    const trulyNewNodes = newGraph.nodes.filter(n => !existingIds.has(n.id));
    ftState.nodes = [...ftState.nodes, ...trulyNewNodes];
    const existingEdgeKeys = new Set(ftState.edges.map(e => `${e.source}|${e.target}|${e.relType}`));
    const trulyNewEdges = newGraph.edges.filter(e => !existingEdgeKeys.has(`${e.source}|${e.target}|${e.relType}`));
    ftState.edges = [...ftState.edges, ...trulyNewEdges];
    drawFamilyTreeGraph();
  }
}

function renderFtSidePanel(node, noExpansion = false) {
  const panel = document.getElementById('ftSidePanel');
  if (!node) {
    panel.innerHTML = `<div class="ft-panel-empty">Click any node in the tree to see why it's connected.</div>`;
    return;
  }

  const relevantEdges = ftState.edges.filter(e => {
    const s = e.source.id || e.source, t = e.target.id || e.target;
    return s === node.id || t === node.id;
  });

  const rowsHTML = relevantEdges.map(e => {
    const s = e.source.id || e.source, t = e.target.id || e.target;
    const otherId = s === node.id ? t : s;
    const otherNode = ftState.nodes.find(n => n.id === otherId);
    if (!otherNode) return '';
    const style = FT_REL_STYLE[e.relType] || {};
    return `
      <div class="ft-panel-row">
        <span class="ft-panel-dot" style="background:${style.color}"></span>
        <div class="ft-panel-row-text">
          <span class="ft-panel-row-name">${otherNode.label}</span>
          <span class="ft-panel-row-type">${FT_REL_LABELS[e.relType]}</span>
          <span class="ft-panel-row-label">${e.label || ''}</span>
        </div>
      </div>
    `;
  }).join('');

  const profileLink = node.profileSlug ? `#partner/${node.profileSlug}`
    : node.type === 'firm' ? `#${node.id}`
    : null;

  panel.innerHTML = `
    <div class="ft-panel-header">
      <span class="ft-panel-type-badge">${node.type}</span>
      <div class="ft-panel-name">${node.label}</div>
      ${node.role ? `<div class="ft-panel-role">${node.role}</div>` : ''}
      ${profileLink ? `<a href="${profileLink}" class="ft-panel-link">View Full Profile →</a>` : ''}
    </div>
    <div class="ft-panel-connections-label">${relevantEdges.length} real connection${relevantEdges.length === 1 ? '' : 's'}</div>
    ${rowsHTML || '<div class="ft-panel-empty-small">No further connections found in the data.</div>'}
    ${noExpansion ? '<div class="ft-panel-note">This node has no additional real relationships to expand.</div>' : ''}
  `;
}
