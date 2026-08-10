/* ============================================================
   FIRM-CARDS.JS
   The main rankings list renderer (renderFirms) and the live
   price-input editing feature on each firm card's holdings table.
   ============================================================ */
function renderFirms() {
  const container = document.getElementById('firmsContainer');
  const noResults = document.getElementById('noResults');
  container.innerHTML = '';

  scrollToResultsIfNeeded();

  const visibleFirms = firms.filter(f => matchesFilter(f) && matchesSearch(f));

  noResults.style.display = visibleFirms.length === 0 ? 'block' : 'none';

  visibleFirms.forEach(firm => {
    const card = document.createElement('div');
    card.className = 'firm';

    const holdingsHTML = firm.holdings.map(h => {
      const val = h.price !== null ? h.price.toFixed(2) : '';
      const placeholderCls = h.price === null ? 'placeholder-empty' : '';
      return `
        <div class="holding-row">
          <div class="holding-name">${h.name}</div>
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

    card.innerHTML = `
      <div class="firm-head">
        <div>
      <div class="firm-rank">NO. ${String(firm.rank).padStart(2, '0')} <span class="power-score">· POWER SCORE™ ${computePowerScore(firm)}</span></div>
                          <div class="firm-name">${firm.website ? `<a href="${firm.website}" target="_blank" rel="noopener noreferrer" class="firm-link">${firm.name} ↗</a>` : firm.name}</div>
        <div class="firm-meta">Founded ${firm.founded} · ${firm.hq}</div>
          <div class="firm-personality">${computeInvestmentPersonality(firm).sentence}</div>
        </div>
        <div class="firm-aum">
          <div class="num">${firm.aum}</div>
          <div class="lbl">Assets Managed</div>
        </div>
      </div>
      <div class="firm-thesis">${firm.thesis}</div>
      <div class="holdings">
        <div class="holdings-label">Notable Public Portfolio Companies</div>
        ${holdingsHTML}
      </div>
    <div class="card-footer">
        <a href="#${firm.slug}" class="firm-page-link">View Firm Page →</a>
        ${firm.seoPage ? `<a href="${firm.seoPage}" class="seo-page-link">Standalone Profile ↗</a>` : ''}
        <button class="shortlist-btn ${getShortlist().has(firm.slug) ? 'saved' : ''}" data-slug="${firm.slug}">
          ${getShortlist().has(firm.slug) ? '★ Saved' : '☆ Save'}
        </button>
        <label class="compare-check">
          <input type="checkbox" class="compare-checkbox" data-slug="${firm.slug}" ${compareSet.has(firm.slug) ? 'checked' : ''}>
          Compare
        </label>
      </div>
    `;
    container.appendChild(card);
  });

  buildTicker();
}

// Live-update the ticker tape when someone edits a price field
document.addEventListener('input', (e) => {
  if (e.target.classList.contains('price-input')) {
    const ticker = e.target.dataset.ticker;
    const newVal = parseFloat(e.target.value);
    firms.forEach(f => f.holdings.forEach(h => {
      if (h.ticker === ticker) h.price = isNaN(newVal) ? null : newVal;
    }));
    buildTicker();
  }

if (e.target.classList.contains('compare-checkbox')) {
    const slug = e.target.dataset.slug;
    if (e.target.checked) {
      if (compareSet.size >= 3) {
        // Cap at 3 - undo this check, don't let a 4th get added
        e.target.checked = false;
        return;
      }
      compareSet.add(slug);
    } else {
      compareSet.delete(slug);
    }
 renderCompareBar();
  }

  if (e.target.classList.contains('compare-partner-checkbox')) {
    const slug = e.target.dataset.slug;
    if (e.target.checked) {
      if (comparePartnerSet.size >= 3) {
        e.target.checked = false;
        return;
      }
      comparePartnerSet.add(slug);
    } else {
      comparePartnerSet.delete(slug);
    }
    renderComparePartnersBar();
  }
});

// Auto-scrolls the results into view whenever a search or filter
// interaction happens - but only if they're not already visible.
// Checking first avoids repeatedly yanking the page on every
// keystroke once the user has already scrolled down once.
function scrollToResultsIfNeeded() {
  const controls = document.querySelector('.controls');
  if (!controls) return;
  const rect = controls.getBoundingClientRect();
  const alreadyVisible = rect.top >= 0 && rect.top < window.innerHeight * 0.5;
  if (!alreadyVisible) {
    controls.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
