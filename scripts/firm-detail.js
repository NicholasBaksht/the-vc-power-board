/* ============================================================
   FIRM-DETAIL.JS
   Renders a single firm's full detail page.
   ============================================================ */
function renderDetail(firm) {
  const totalHoldings = firm.holdings.length;
  const pricedHoldings = firm.holdings.filter(h => h.price !== null).length;

const holdingsHTML = firm.holdings.map(h => {
    const val = h.price !== null ? h.price.toFixed(2) : '';
    const placeholderCls = h.price === null ? 'placeholder-empty' : '';
    return `
      <div class="holding-row">
        <a href="#company/${slugifyCompany(h.name)}" class="holding-name holding-name-link">${h.name}</a>
        <div class="holding-ticker">${h.ticker}</div>
        <div class="price-input-wrap">
          <span class="dollar">$</span>
          <input class="price-input ${placeholderCls}" type="text" inputmode="decimal"
                 value="${val}" placeholder="type price"
                 data-ticker="${h.ticker}">
        </div>
        <div class="price-hint">per share</div>
        ${buildReturnBadge(h)}
        <a href="https://finance.yahoo.com/quote/${h.ticker}" target="_blank" rel="noopener noreferrer" class="source-link-small">Verify Price ↗</a>
      </div>`;
  }).join('');

  const leadershipHTML = firm.leadership ? `
    <div class="detail-subhead">Key Partners &amp; Leadership</div>
    <div class="leadership-grid">
      ${firm.leadership.map(l => `
        <div class="leader-card ${l.profileSlug ? 'has-profile' : ''}" ${l.profileSlug ? `onclick="window.location.hash='partner/${l.profileSlug}'"` : ''}>
          <div class="leader-name">${l.name}</div>
          <div class="leader-role">${l.role}</div>
          ${l.profileSlug ? '<div class="leader-view-profile">View Full Profile →</div>' : ''}
        </div>
      `).join('')}
    </div>
  ` : '';

  const timelineHTML = firm.timeline ? `
    <div class="detail-subhead">Firm Timeline</div>
    <div class="timeline">
      ${firm.timeline.map(t => `
        <div class="timeline-item">
          <div class="timeline-year">${t.year}</div>
          <div class="timeline-event">${t.event}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  document.getElementById('detailView').innerHTML = `
    <a href="#" class="detail-back" id="backToList">← Back to all firms</a>
    <div class="detail-card">
      <div class="detail-rank">NO. ${String(firm.rank).padStart(2, '0')} BY AUM</div>
<div class="detail-name">${firm.name}</div>
      <div class="detail-personality">${computeInvestmentPersonality(firm).sentence}</div>
     <div class="detail-meta">
        <a href="${firm.website}" target="_blank" rel="noopener noreferrer" class="firm-link">${firm.website.replace('https://', '')} ↗</a>
        ${firm.seoPage ? ` · <a href="${firm.seoPage}" class="firm-link">Standalone Profile Page ↗</a>` : ''}
     ${TEAM_PAGES[firm.slug] ? ` · <a href="${TEAM_PAGES[firm.slug]}" target="_blank" rel="noopener noreferrer" class="firm-link">Team Page ↗</a>` : ''}
        · <a href="#historical-snapshot/${firm.slug}" class="firm-link">View Historical Timeline →</a>
      </div>
      <div class="detail-stats">
        <div class="detail-stat">
          <div class="num">${firm.aum}</div>
          <div class="lbl">Assets Managed</div>
        </div>
        <div class="detail-stat">
          <div class="num">${firm.founded}</div>
          <div class="lbl">Founded</div>
        </div>
        <div class="detail-stat">
          <div class="num">${firm.hq}</div>
          <div class="lbl">Headquarters</div>
        </div>
        <div class="detail-stat">
          <div class="num">${totalHoldings}</div>
          <div class="lbl">Tracked Holdings</div>
        </div>
      <div class="detail-stat">
          <div class="num" style="color: var(--gold-bright);">${computePowerScore(firm)}</div>
          <div class="lbl">Power Score™</div>
        </div>
      </div>
      <p class="detail-about">${firm.thesis}</p>
      <div class="founder-callout">
        <div class="founder-callout-label">For Founders</div>
    <div class="founder-callout-row">
          <div class="founder-callout-tags">
            ${firm.sectors.map(s => `<span class="compare-sector-tag">${s}</span>`).join('')}
          </div>
          <div class="founder-callout-scale">${getScaleLabel(firm)}</div>
          <a href="#find-investors" class="founder-callout-cta">Check Your Fit →</a>
        </div>
      </div>
${renderWhyThisVC(firm)}
      ${renderGenome(firm)}
      ${renderPerformanceDashboard(firm)}
      ${renderGeographicHeatmap(firm)}
      ${renderPhilosophyScorecard(firm)}
      ${leadershipHTML}
      ${timelineHTML}
   <div class="holdings">
        <div class="holdings-label">All Notable Public Portfolio Companies</div>
        ${holdingsHTML}
      </div>
 ${renderFirmIntelligence(firm)}
      ${renderSimilarFirms(firm)}
      ${renderPeerFirmLinks(firm)}
    </div>
  `;
  document.getElementById('backToList').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '';
  });

  buildTicker();
}
