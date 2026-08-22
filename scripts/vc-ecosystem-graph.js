/**
 * VC-ECOSYSTEM-GRAPH.JS
 * An interactive D3 force-directed graph connecting firms by three
 * real, verifiable relationship types: firm lineage (reusing
 * FAMILY_TREE), shared public portfolio holdings, and shared board
 * seats across different firms' partners. Deliberately excludes
 * "co-investment history" (would just duplicate portfolio overlap
 * given the data actually tracked here) and "competitor firms"
 * (nothing in the data model supports that claim honestly).
 */

function buildEcosystemGraph() {
  let edges = [];

  FAMILY_TREE.forEach(group => {
    group.children.forEach(child => {
      edges.push({
        source: group.parentSlug,
        target: child.slug,
        type: 'lineage',
        label: `${child.founders.join(', ')} left to found this firm (${child.year})`
      });
    });
  });

  const companyHolders = {};
  firms.forEach(f => f.holdings.forEach(h => {
    if (!companyHolders[h.name]) companyHolders[h.name] = [];
    companyHolders[h.name].push(f.slug);
  }));
  const overlapPairs = {};
  Object.entries(companyHolders).forEach(([company, slugs]) => {
    if (slugs.length < 2) return;
    for (let i = 0; i < slugs.length; i++) {
      for (let j = i + 1; j < slugs.length; j++) {
        const key = [slugs[i], slugs[j]].sort().join('|');
        if (!overlapPairs[key]) overlapPairs[key] = [];
        overlapPairs[key].push(company);
      }
    }
  });
  Object.entries(overlapPairs).forEach(([key, companies]) => {
    const [source, target] = key.split('|');
    edges.push({
      source, target, type: 'portfolio',
      label: `Both hold: ${companies.slice(0, 3).join(', ')}${companies.length > 3 ? ` +${companies.length - 3} more` : ''}`
    });
  });

  const boardHolders = {};
  Object.entries(partnerProfiles).forEach(([slug, p]) => {
    (p.boardSeats || []).forEach(seat => {
      const normalized = seat.split('(')[0].trim();
      if (!normalized) return;
      if (!boardHolders[normalized]) boardHolders[normalized] = [];
      boardHolders[normalized].push({ firmSlug: p.firmSlug, partnerName: p.name });
    });
  });
  const boardPairs = {};
  Object.entries(boardHolders).forEach(([company, holders]) => {
    for (let i = 0; i < holders.length; i++) {
      for (let j = i + 1; j < holders.length; j++) {
        if (holders[i].firmSlug === holders[j].firmSlug) continue;
        const key = [holders[i].firmSlug, holders[j].firmSlug].sort().join('|');
        if (!boardPairs[key]) boardPairs[key] = [];
        boardPairs[key].push(`${company} (${holders[i].partnerName} & ${holders[j].partnerName})`);
      }
    }
  });
  Object.entries(boardPairs).forEach(([key, seats]) => {
    const [source, target] = key.split('|');
    edges.push({
      source, target, type: 'board',
      label: `Shared board seat: ${seats[0]}`
    });
  });

  /* Drop any edge whose endpoint is not a firm in the dataset.

     d3.forceLink().id() THROWS ("node not found: <id>") the moment an
     edge names a node that was never added, and that exception aborts
     graph construction entirely - the SVG renders with zero nodes and
     zero links while the heading above it still claims a map.

     family-tree-data.js records a TCV spinout to 'iconiq-growth', a
     firm not tracked here, which was enough to blank the whole graph.
     Filtering by the real firm list keeps a dangling lineage entry from
     taking the visualisation down, and means a future entry added ahead
     of its firm degrades to a missing edge instead of a missing page. */
  const firmSlugs = new Set(firms.map(f => f.slug));
  const dropped = edges.filter(e => !firmSlugs.has(e.source) || !firmSlugs.has(e.target));
  if (dropped.length && typeof console !== 'undefined') {
    console.warn('Ecosystem graph: skipped ' + dropped.length +
      ' edge(s) referencing untracked firms:',
      Array.from(new Set(dropped.flatMap(e => [e.source, e.target]).filter(s => !firmSlugs.has(s)))));
  }
  edges = edges.filter(e => firmSlugs.has(e.source) && firmSlugs.has(e.target));

  const connectedSlugs = new Set(edges.flatMap(e => [e.source, e.target]));
  const nodes = firms
    .filter(f => connectedSlugs.has(f.slug))
    .map(f => ({ id: f.slug, name: f.name, aum: parseAumNumber(f.aum) }));

  return { nodes, edges };
}

const EDGE_COLORS = { lineage: '#a78bfa', portfolio: '#2F6FED', board: '#4ade80' };
const EDGE_LABELS = { lineage: 'Firm Lineage', portfolio: 'Portfolio Overlap', board: 'Shared Board Seat' };

let selectedNodeId = null;

function renderEcosystemGraph() {
  const { nodes, edges } = buildEcosystemGraph();

  document.getElementById('ecosystemGraphView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">VC Ecosystem Graph</div>
    <div class="reports-intro">
      <p>An interactive map of how firms on this page actually connect - click any firm to see its real relationships. Only three verified connection types are shown: firms that spun out of one another, firms that hold the same public company in their portfolio, and firms whose partners sit on the same real board together.</p>
    </div>

    <div class="graph-legend">
      <span class="graph-legend-item"><span class="graph-legend-dot" style="background:${EDGE_COLORS.lineage}"></span>Firm Lineage</span>
      <span class="graph-legend-item"><span class="graph-legend-dot" style="background:${EDGE_COLORS.portfolio}"></span>Portfolio Overlap</span>
      <span class="graph-legend-item"><span class="graph-legend-dot" style="background:${EDGE_COLORS.board}"></span>Shared Board Seat</span>
      <span class="graph-legend-meta">${nodes.length} connected firms · ${edges.length} relationships</span>
    </div>

    <div class="graph-canvas-wrap">
      <svg id="ecosystemSvg"></svg>
    </div>

    <div id="graphSelectionPanel" class="graph-selection-panel">
      <div class="graph-selection-empty">Click any firm in the graph to see its real connections.</div>
    </div>
  `;

  drawGraph(nodes, edges);
}

function drawGraph(nodes, edges) {
  const wrap = document.querySelector('.graph-canvas-wrap');
  const width = wrap.clientWidth;
  const height = 560;

  const svg = d3.select('#ecosystemSvg')
    .attr('viewBox', [0, 0, width, height])
    .attr('width', '100%')
    .attr('height', height);

  const container = svg.append('g');

  svg.call(d3.zoom().scaleExtent([0.3, 3]).on('zoom', (event) => {
    container.attr('transform', event.transform);
  }));

  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(edges).id(d => d.id).distance(90).strength(0.4))
    .force('charge', d3.forceManyBody().strength(-180))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collide', d3.forceCollide().radius(d => nodeRadius(d) + 6));

  const link = container.append('g')
    .selectAll('line')
    .data(edges)
    .join('line')
    .attr('class', 'graph-link')
    .attr('stroke', d => EDGE_COLORS[d.type])
    .attr('stroke-width', 1.2)
    .attr('stroke-opacity', 0.35);

  const node = container.append('g')
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .attr('class', 'graph-node')
    .attr('r', d => nodeRadius(d))
    .attr('fill', '#070B14')
    .attr('stroke', '#6389C4')
    .attr('stroke-width', 1.5)
    .call(d3.drag()
      .on('start', (event, d) => { if (!event.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
      .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y; })
      .on('end', (event, d) => { if (!event.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; }))
    .on('click', (event, d) => {
      selectedNodeId = d.id;
      highlightNode(d.id, nodes, edges, link, node);
      renderGraphSelection(d.id, edges);
    });

  const labels = container.append('g')
    .selectAll('text')
    .data(nodes)
    .join('text')
    .attr('class', 'graph-node-label')
    .attr('dy', d => -nodeRadius(d) - 6)
    .attr('text-anchor', 'middle')
    .text(d => d.name);

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x).attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
    node.attr('cx', d => d.x).attr('cy', d => d.y);
    labels.attr('x', d => d.x).attr('y', d => d.y);
  });
}

function nodeRadius(d) {
  return Math.max(6, Math.min(22, Math.sqrt(d.aum || 0.1) * 3));
}

function highlightNode(selectedId, nodes, edges, linkSel, nodeSel) {
  const connectedIds = new Set([selectedId]);
  edges.forEach(e => {
    const s = e.source.id || e.source, t = e.target.id || e.target;
    if (s === selectedId) connectedIds.add(t);
    if (t === selectedId) connectedIds.add(s);
  });

  nodeSel.attr('opacity', d => connectedIds.has(d.id) ? 1 : 0.15)
    .attr('stroke-width', d => d.id === selectedId ? 3 : 1.5);
  linkSel.attr('stroke-opacity', d => {
    const s = d.source.id || d.source, t = d.target.id || d.target;
    return (s === selectedId || t === selectedId) ? 0.9 : 0.05;
  });
}

function renderGraphSelection(selectedId, edges) {
  const panel = document.getElementById('graphSelectionPanel');
  const firm = firms.find(f => f.slug === selectedId);
  if (!firm) return;

  const relevant = edges.filter(e => {
    const s = e.source.id || e.source, t = e.target.id || e.target;
    return s === selectedId || t === selectedId;
  });

  const rowsHTML = relevant.map(e => {
    const s = e.source.id || e.source, t = e.target.id || e.target;
    const otherSlug = s === selectedId ? t : s;
    const other = firms.find(f => f.slug === otherSlug);
    if (!other) return '';
    return `
      <div class="graph-connection-row">
        <span class="graph-connection-dot" style="background:${EDGE_COLORS[e.type]}"></span>
        <a href="#${other.slug}" class="graph-connection-firm">${other.name}</a>
        <span class="graph-connection-type">${EDGE_LABELS[e.type]}</span>
        <span class="graph-connection-label">${e.label}</span>
      </div>
    `;
  }).join('');

  panel.innerHTML = `
    <div class="graph-selection-label">${firm.name} - ${relevant.length} real connection${relevant.length === 1 ? '' : 's'}</div>
    ${rowsHTML}
  `;
}
