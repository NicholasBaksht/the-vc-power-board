/**
 * WORLD-MAP.JS
 * The World Map page: projects every firm's real HQ onto a simple
 * lat/long dot-grid background, clusters firms sharing the same HQ
 * into a single sized pin, and computes the stats bar + region
 * breakdown live from the real firms array - same "never hardcode
 * a number that could drift" principle as renderScaleBar.
 */

// Simple equirectangular projection: converts real lat/long into an
// x/y percentage position within the map container. Works with any
// background (a dot grid here, or a real image later) since pins
// are positioned by percentage, not fixed pixels.
function projectLatLng(lat, lng) {
  const x = ((lng + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { x, y };
}

// Groups firms by their exact HQ string into one cluster per unique
// location, since several firms often share a city (e.g. 42 firms
// in San Francisco) and should render as a single sized pin rather
// than 42 overlapping markers.
function getMapClusters() {
  const groups = new Map();
  firms.forEach(f => {
    if (!groups.has(f.hq)) groups.set(f.hq, []);
    groups.get(f.hq).push(f);
  });

  return [...groups.entries()].map(([hq, groupFirms]) => {
    const coords = CITY_COORDS[hq];
    if (!coords) return null; // fails quietly rather than crash on a future unmapped HQ
    const { x, y } = projectLatLng(coords.lat, coords.lng);
    return { hq, firms: groupFirms, x, y, count: groupFirms.length };
  }).filter(Boolean).sort((a, b) => b.count - a.count);
}

// Real region breakdown for the sidebar - counts firms per region
// using classifyRegion, sorted largest first.
function getRegionBreakdown() {
  const counts = {};
  firms.forEach(f => {
    const region = classifyRegion(f.hq);
    // A firm with no HQ on file belongs to no region. Counting it would
    // create a literal "null" row in the sidebar breakdown.
    if (!region) return;
    counts[region] = (counts[region] || 0) + 1;
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

let selectedCluster = null; // which pin's firm list is currently shown, if any

function renderWorldMap() {
  const clusters = getMapClusters();
  const totalFirms = firms.length;
  const combinedAUM = Math.round(firms.reduce((sum, f) => sum + parseAumNumber(f.aum), 0));
  // Firms with no HQ on file resolve to null and are excluded, so the
  // country count stays a count of known countries rather than gaining a
  // phantom entry for "unknown".
  const countryCount = new Set(firms.map(f => getCountryFromHQ(f.hq)).filter(Boolean)).size;
  const sectorCount = new Set(firms.flatMap(f => f.sectors || [])).size;
  const portfolioCompanyCount = new Set(firms.flatMap(f => f.holdings.map(h => h.name))).size;
  const regions = getRegionBreakdown();

  document.getElementById('worldMapView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">World Map</div>
    <div class="worldmap-intro">
      <p>Every firm on this page, plotted by real headquarters location. Click a marker to see which firms are based there.</p>
    </div>

    <div class="worldmap-stats">
      <div class="worldmap-stat"><span class="worldmap-stat-num">${totalFirms}</span><span class="worldmap-stat-label">VC Firms</span></div>
      <div class="worldmap-stat"><span class="worldmap-stat-num">${formatCombinedAUM(combinedAUM)}</span><span class="worldmap-stat-label">Combined AUM</span></div>
      <div class="worldmap-stat"><span class="worldmap-stat-num">${countryCount}</span><span class="worldmap-stat-label">Countries</span></div>
      <div class="worldmap-stat"><span class="worldmap-stat-num">${sectorCount}</span><span class="worldmap-stat-label">Sectors</span></div>
      <div class="worldmap-stat"><span class="worldmap-stat-num">${portfolioCompanyCount}</span><span class="worldmap-stat-label">Portfolio Companies</span></div>
    </div>

    <div class="worldmap-layout">
    <div class="worldmap-canvas-wrap">
     <svg class="worldmap-canvas" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
          ${buildDotGrid()}
       ${clusters.map(c => {
            const r = pinRadius(c.count);
            return `
            <g class="worldmap-pin" data-hq="${encodeURIComponent(c.hq)}" transform="translate(${c.x}, ${c.y * 0.6})">
              <circle r="${r}" class="worldmap-pin-circle" />
              <text class="worldmap-pin-label" font-size="${r * 0.9}" dy="0.35em" text-anchor="middle">${c.count}</text>
            </g>
          `;
          }).join('')}
        </svg>
      </div>

      <div class="worldmap-sidebar">
        <div class="worldmap-sidebar-label">Region Breakdown</div>
        ${regions.map(([region, count]) => `
          <div class="worldmap-region-row">
            <span>${region}</span>
            <span class="worldmap-region-count">${count} firm${count === 1 ? '' : 's'}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div id="worldMapSelection"></div>
  `;

  document.querySelectorAll('.worldmap-pin').forEach(pin => {
    pin.addEventListener('click', () => {
      selectedCluster = decodeURIComponent(pin.dataset.hq);
      renderWorldMapSelection();
    });
  });

  renderWorldMapSelection();
}

function pinRadius(count) {
  // Square-root scaling so a 42-firm cluster isn't literally 42x the
  // visual area of a 1-firm cluster - keeps the map readable.
  return Math.max(1.2, Math.min(4, Math.sqrt(count) * 0.9));
}

// Renders the currently-selected pin's firm list below the map.
function renderWorldMapSelection() {
  const container = document.getElementById('worldMapSelection');
  if (!container) return;

  if (!selectedCluster) {
    container.innerHTML = `<div class="worldmap-selection-empty">Click a marker on the map to see which firms are based there.</div>`;
    return;
  }

  const cluster = getMapClusters().find(c => c.hq === selectedCluster);
  if (!cluster) return;

  container.innerHTML = `
    <div class="worldmap-selection-label">${cluster.hq} — ${cluster.count} firm${cluster.count === 1 ? '' : 's'}</div>
    <div class="worldmap-selection-grid">
      ${cluster.firms.map(f => `
        <a href="#${f.slug}" class="worldmap-firm-card">
          <div class="worldmap-firm-name">${f.name}</div>
          <div class="worldmap-firm-aum">${f.aum}</div>
        </a>
      `).join('')}
    </div>
  `;
}

// Builds a light lat/long reference grid as the map's background -
// deliberately simple rather than precise country borders (see
// conversation notes on why a hand-transcribed border SVG was too
// risky to embed accurately).
function buildDotGrid() {
  let dots = '';
  for (let lat = -80; lat <= 80; lat += 20) {
    for (let lng = -170; lng <= 170; lng += 20) {
      const { x, y } = projectLatLng(lat, lng);
      dots += `<circle cx="${x}" cy="${y * 0.6}" r="0.15" class="worldmap-grid-dot" />`;
    }
  }
  return dots;
}

// Simplified continent silhouettes - deliberately not precise country
// borders (too risky to hand-transcribe accurately, see conversation
// notes), just recognizable continent-scale shapes so the background
// reads as an actual map rather than abstract reference dots. Each
// shape is built from real lat/long points converted through the
// same projectLatLng() function used for pins, so everything stays
// correctly aligned no matter how the map is resized.
function buildContinents() {
  const continents = {
    'North America': [
      [70,-165],[70,-140],[60,-95],[49,-95],[45,-83],[45,-75],[47,-60],
      [25,-80],[25,-97],[15,-92],[15,-105],[32,-117],[48,-125],[60,-140],[70,-165]
    ],
    'South America': [
      [12,-72],[10,-62],[5,-52],[-5,-35],[-23,-43],[-34,-58],[-55,-68],
      [-40,-73],[-18,-70],[-5,-81],[5,-77],[12,-72]
    ],
    'Europe': [
      [71,25],[60,30],[55,40],[45,40],[36,28],[38,15],[45,10],
      [43,3],[51,2],[58,10],[71,25]
    ],
    'Africa': [
      [37,10],[32,32],[12,43],[-2,42],[-26,33],[-35,20],[-20,12],
      [5,9],[10,-15],[20,-17],[33,-10],[37,10]
    ],
    'Asia': [
      [77,60],[70,140],[55,163],[35,140],[20,110],[8,98],[8,78],
      [20,68],[35,50],[45,40],[55,40],[60,50],[77,60]
    ],
    'Australia': [
      [-11,142],[-17,146],[-28,153],[-38,147],[-35,137],[-32,115],
      [-20,113],[-14,127],[-11,142]
    ]
  };

  return Object.entries(continents).map(([name, points]) => {
    const pathPoints = points.map(([lat, lng]) => {
      const { x, y } = projectLatLng(lat, lng);
      return `${x},${y * 0.6}`;
    }).join(' ');
    return `<polygon points="${pathPoints}" class="worldmap-continent" />`;
  }).join('');
}
