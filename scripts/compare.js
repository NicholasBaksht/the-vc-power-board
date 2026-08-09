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
