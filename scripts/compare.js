/* ============================================================
   COMPARE.JS
   The firm comparison tool: the compare-set state, the sticky
   compare bar, and the side-by-side comparison table renderer.
   ============================================================ */
let compareSet = new Set();

// Decides what to show based on the URL - a firm slug shows its
// detail page, anything else (or nothing) shows the full list.
// Shows/hides the sticky bottom bar based on how many firms are
// currently picked for comparison.
function renderCompareBar() {
  const bar = document.getElementById('compareBar');

  if (compareSet.size === 0) {
    bar.style.display = 'none';
    return;
  }

  bar.style.display = 'flex';
  const chips = [...compareSet].map(slug => {
    const firm = firms.find(f => f.slug === slug);
    return `<span class="compare-chip">${firm.short}</span>`;
  }).join('');

  const canCompare = compareSet.size >= 2;

  bar.innerHTML = `
    <div class="compare-bar-chips">
      <span class="compare-bar-label">Comparing (${compareSet.size}/3):</span>
      ${chips}
    </div>
    <div class="compare-bar-actions">
      <button class="compare-btn secondary" id="clearCompareBtn">Clear</button>
      <button class="compare-btn primary" id="goCompareBtn" ${canCompare ? '' : 'disabled'}>Compare →</button>
    </div>
  `;

  document.getElementById('clearCompareBtn').addEventListener('click', () => {
    compareSet.clear();
    renderCompareBar();
    renderFirms();
  });

  document.getElementById('goCompareBtn').addEventListener('click', () => {
    if (compareSet.size >= 2) window.location.hash = 'compare';
  });
}

// Renders the side-by-side comparison table into #compareView
function renderComparison() {
  const selected = firms.filter(f => compareSet.has(f.slug));

  if (selected.length < 2) {
    document.getElementById('compareView').innerHTML = `
      <a href="#" class="detail-back" id="backFromCompare">← Back to all firms</a>
      <p style="color: var(--ink-dim); font-size: 14px;">Pick at least 2 firms from the list to compare them.</p>
    `;
    document.getElementById('backFromCompare').addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '';
    });
    return;
  }

  const rows = [
 { label: 'Power Score™', render: f => `<strong style="color: var(--gold-bright); font-family: var(--mono); font-size: 16px;">${computePowerScore(f)}</strong>` },
    { label: 'Assets Managed', render: f => f.aum },
    { label: 'Founded', render: f => f.founded },
    { label: 'Headquarters', render: f => f.hq },
    { label: 'Sectors', render: f => f.sectors.map(s => `<span class="compare-sector-tag">${s}</span>`).join('') },
    { label: 'Signature Exit', render: f => f.signatureExit },
    { label: 'Tracked Holdings', render: f => f.holdings.map(h => h.name).join(', ') },
    { label: 'Website', render: f => `<a href="${f.website}" target="_blank" rel="noopener noreferrer" class="firm-link">${f.website.replace('https://', '')} ↗</a>` }
  ];

  const headerCells = selected.map(f => `<th class="firm-col-name">${f.name}</th>`).join('');
  const bodyRows = rows.map(row => `
    <tr>
      <td class="row-label">${row.label}</td>
      ${selected.map(f => `<td>${row.render(f)}</td>`).join('')}
    </tr>
  `).join('');

 document.getElementById('compareView').innerHTML = `
    <a href="#" class="detail-back" id="backFromCompare">← Back to all firms</a>
    <div class="scroll-hint">← Swipe to see all firms →</div>
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead><tr><th></th>${headerCells}</tr></thead>
        <tbody>${bodyRows}</tbody>
      </table>
    </div>
    ${renderDnaComparison(selected)}
  `;
  document.getElementById('backFromCompare').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '';
  });
}
// ============================================================
// VC DNA COMPARISON — reuses the exact same real, already-computed
// functions that power each firm's own profile page (Genome,
// Philosophy Scorecard, Geographic Heatmap, Investment Personality
// from dashboard.js) and places them side by side for 2-3 selected
// firms. No new calculations, no new data - this is purely a
// different view of numbers already live and sourced elsewhere.
// computeDnaComparisonData is intentionally DOM-free so Search,
// Rankings, and Discovery can call it too, the same way
// computeGenomeScores/computeSimilarFirms already get reused
// beyond the firm detail page.
// ============================================================
const DNA_FIRM_COLORS = ['#2F6FED', '#7dd3fc', '#4ade80'];

function computeDnaComparisonData(selected) {
  return selected.map((f, i) => ({
    firm: f,
    color: DNA_FIRM_COLORS[i % DNA_FIRM_COLORS.length],
    personality: computeInvestmentPersonality(f),
    genome: computeGenomeScores(f),
    geography: computeGeography(f),
    topFocus: computePhilosophyScores(f).filter(p => p.score === 5)
  }));
}

function renderDnaComparison(selected) {
  const data = computeDnaComparisonData(selected);

  const legendHTML = data.map(d => `
    <span class="dna-legend-item"><span class="dna-legend-dot" style="background:${d.color}"></span>${d.firm.short}</span>
  `).join('');

  const personalityHTML = data.map(d => `
    <div class="dna-personality-card" style="border-color:${d.color}">
      <div class="dna-personality-firm" style="color:${d.color}">${d.firm.short}</div>
      <div class="dna-personality-sentence">${d.personality.sentence}</div>
    </div>
  `).join('');

  // One row per real Genome dimension, one bar per firm within it -
  // same 8 dimensions from computeGenomeScores(), just grouped by
  // dimension instead of by firm so differences jump out immediately.
  const dimensionKeys = data[0].genome.map(g => g.key);
  const dimensionLabels = {};
  data[0].genome.forEach(g => { dimensionLabels[g.key] = g.label; });

  const genomeRowsHTML = dimensionKeys.map(key => {
    const barsHTML = data.map(d => {
      const dim = d.genome.find(g => g.key === key);
      const val = dim ? dim.value : 0;
      return `
        <div class="dna-genome-bar-row">
          <span class="dna-genome-bar-firm" style="color:${d.color}">${d.firm.short}</span>
          <div class="dna-genome-bar-track">
            <div class="dna-genome-bar-fill" style="width:${val}%; background:${d.color};"></div>
          </div>
          <span class="dna-genome-bar-value">${val}</span>
        </div>
      `;
    }).join('');
    return `
      <div class="dna-genome-dimension">
        <div class="dna-genome-dimension-label">${dimensionLabels[key]}</div>
        ${barsHTML}
      </div>
    `;
  }).join('');

  const focusHTML = data.map(d => `
    <div class="dna-focus-col">
      <div class="dna-focus-firm" style="color:${d.color}">${d.firm.short}</div>
      ${d.topFocus.length > 0
        ? d.topFocus.map(p => `<span class="compare-sector-tag">${p.icon} ${p.label.replace(' Focus', '')}</span>`).join('')
        : `<span class="dna-focus-empty">Generalist — no single standout focus area</span>`}
    </div>
  `).join('');

  const geoHTML = data.map(d => `
    <div class="dna-geo-col">
      <div class="dna-geo-firm" style="color:${d.color}">${d.firm.short}</div>
      ${d.geography.map(r => `<div class="dna-geo-region">${regionFlags[r.region] || '🌐'} ${r.region}${r.score === 5 ? ' (HQ)' : ''}</div>`).join('')}
    </div>
  `).join('');

  return `
    <div class="dna-comparison">
      <div class="detail-subhead">VC DNA Comparison</div>
      <div class="dna-comparison-sub">The same real Genome, Philosophy, and Geography data shown on each firm's own profile page — placed side by side. Nothing here is calculated separately; every number is pulled from the same functions already live elsewhere on the site.</div>

      <div class="dna-legend">${legendHTML}</div>

      <div class="dna-personality-row">${personalityHTML}</div>

      <div class="dna-section-label">Genome — Relative to Every Tracked Firm</div>
      <div class="dna-genome-grid">${genomeRowsHTML}</div>

      <div class="dna-section-label">Top Stated Focus Areas</div>
      <div class="dna-focus-row">${focusHTML}</div>

      <div class="dna-section-label">Geographic Presence</div>
      <div class="dna-geo-row">${geoHTML}</div>
    </div>
  `;
}
