/* ============================================================
   PEOPLE-PORTFOLIO.JS
   The People directory (partner search), the Portfolio Explorer
   (tracked public companies), and individual Company detail pages
   - including their own page-specific search-term state.
   ============================================================ */
// Reverse-index: for a given company name, finds every tracked firm
// that holds it as a public portfolio company. This is the core of
// Portfolio Explorer - a straight lookup against the same real
// holdings data already used everywhere else on the site, nothing
// new or invented. Also surfaces any firm's signatureExit text that
// specifically names this company, since that's real sourced
// narrative already on the page - not a fabricated per-company
// "IPO" or "valuation" field, which this site has no real data for.
function getCompanyHolders(companyName) {
  const holders = firms
    .filter(f => f.holdings.some(h => h.name === companyName))
    .map(f => ({ firm: f, holding: f.holdings.find(h => h.name === companyName) }));

  const stories = firms
    .filter(f => f.signatureExit.includes(companyName))
    .map(f => ({ firm: f, text: f.signatureExit }));

  return { holders, stories };
}

// Returns every unique company name tracked across all firms'
// holdings, alphabetized, for the Portfolio Explorer list view.
function getAllTrackedCompanies() {
  const seen = new Map();
  firms.forEach(f => f.holdings.forEach(h => {
    if (!seen.has(h.name)) seen.set(h.name, h);
  }));
  return [...seen.entries()].map(([name, holding]) => ({ name, holding })).sort((a, b) => a.name.localeCompare(b.name));
}
let peopleSearchTerm = '';
let comparePartnerSet = new Set();

let portfolioSearchTerm = '';

// Builds a searchable directory of every partner profile on the
// site - real people already profiled on their firm's detail page,
// just made directly searchable without clicking into a firm card
// first. The search input is built once and left alone on
// re-render (only the results grid updates), so focus and cursor
// position are never lost while typing.
function renderPeople() {
  document.getElementById('peopleView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">People</div>
    <div class="people-intro">
      <p>Every partner profiled on this page, in one searchable place. Search by name, firm, or title - no need to click into a firm card first.</p>
    </div>
    <div class="people-search-wrap">
      <input type="text" id="peopleSearchInput" class="search-input" placeholder="Search by name, firm, or title...">
    </div>
    <div class="people-count" id="peopleCount"></div>
    <div class="people-grid" id="peopleGrid"></div>
  `;

  document.getElementById('peopleSearchInput').value = peopleSearchTerm;
  document.getElementById('peopleSearchInput').addEventListener('input', (e) => {
    peopleSearchTerm = e.target.value;
    renderPeopleResults();
  });

  renderPeopleResults();
}

function renderPeopleResults() {
  const allPeople = Object.keys(partnerProfiles).map(slug => ({ slug, ...partnerProfiles[slug] }));
  const term = peopleSearchTerm.trim().toLowerCase();
  const filtered = term === '' ? allPeople : allPeople.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.firm.toLowerCase().includes(term) ||
    p.title.toLowerCase().includes(term)
  );
  filtered.sort((a, b) => a.name.localeCompare(b.name));

  document.getElementById('peopleCount').textContent = `${filtered.length} of ${allPeople.length} profiles`;

 document.getElementById('peopleGrid').innerHTML = filtered.length > 0
    ? filtered.map(p => `
      <div class="person-card">
        <a href="#partner/${p.slug}" class="person-card-link">
          <div class="person-card-name">${p.name}</div>
          <div class="person-card-title">${p.title}</div>
          <div class="person-card-firm">${p.firm}</div>
        </a>
        <label class="compare-check">
          <input type="checkbox" class="compare-partner-checkbox" data-slug="${p.slug}" ${comparePartnerSet.has(p.slug) ? 'checked' : ''}>
          Compare
        </label>
      </div>
    `).join('')
    : `<div class="people-empty">No profiles match "${peopleSearchTerm}".</div>`;
}

// Builds the Portfolio Explorer list - every unique public company
// held by any tracked firm, click through to see who invested. The
// search input is left alone on re-render, same pattern as People.
function renderPortfolioExplorer() {
  document.getElementById('portfolioView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">Portfolio Explorer</div>
    <div class="portfolio-intro">
      <p>Click any company to see every firm tracked on this page that invested in it, plus real public stock performance since Jan 2, 2025. This reflects only what's already sourced elsewhere on the site - no invented valuations or investment stages.</p>
    </div>
    <div class="portfolio-search-wrap">
      <input type="text" id="portfolioSearchInput" class="search-input" placeholder="Search by company or ticker...">
    </div>
    <div class="portfolio-count" id="portfolioCount"></div>
    <div class="company-grid" id="portfolioGrid"></div>
  `;

  document.getElementById('portfolioSearchInput').value = portfolioSearchTerm;
  document.getElementById('portfolioSearchInput').addEventListener('input', (e) => {
    portfolioSearchTerm = e.target.value;
    renderPortfolioResults();
  });

  renderPortfolioResults();
}

function renderPortfolioResults() {
  const all = getAllTrackedCompanies();
  const term = portfolioSearchTerm.trim().toLowerCase();
  const filtered = term === '' ? all : all.filter(c =>
    c.name.toLowerCase().includes(term) || (c.holding.ticker || '').toLowerCase().includes(term)
  );

  document.getElementById('portfolioCount').textContent = `${filtered.length} of ${all.length} companies`;

  document.getElementById('portfolioGrid').innerHTML = filtered.length > 0
    ? filtered.map(c => {
        let returnCls = 'return-unknown', returnText = '-';
        if (c.holding.historicalPrice !== null && c.holding.price !== null) {
          const pct = ((c.holding.price - c.holding.historicalPrice) / c.holding.historicalPrice) * 100;
          const r1 = Number(pct.toFixed(1));
          returnCls = r1 > 0 ? 'return-positive' : r1 < 0 ? 'return-negative' : 'return-flat';
          returnText = `${typeof directionLabel === 'function' ? directionLabel(r1) : ''}${r1 > 0 ? '+' : ''}${r1.toFixed(1)}%`;
        }
      const priceText = c.holding.price !== null ? `$${c.holding.price.toFixed(2)}` : '-';
        return `
          <a href="#company/${slugifyCompany(c.name)}" class="company-card">
            <div class="company-card-name">${c.name}</div>
            <div class="company-card-row">
              <span class="company-card-ticker">${c.holding.ticker}</span>
              <span class="company-card-price">${priceText}</span>
              <span class="company-card-return ${returnCls}">${returnText}</span>
            </div>
          </a>
        `;
      }).join('')
    : `<div class="people-empty">No companies match "${portfolioSearchTerm}".</div>`;
}

// Builds a single company's detail page: real ticker/price/return
// data (the same fields already used on every firm's holdings
// list), the real list of every tracked firm that holds it, and
// any firm's real, already-sourced signatureExit text that
// specifically names this company. Deliberately does not show a
// per-firm "stage" or "valuation" field - that data isn't tracked
// anywhere on this site, and inventing it here would be dishonest.
function renderCompanyProfile(companySlug) {
  const all = getAllTrackedCompanies();
  const company = all.find(c => slugifyCompany(c.name) === companySlug);

  if (!company) {
    document.getElementById('companyView').innerHTML = `
      <a href="#portfolio" class="detail-back">← Back to Portfolio Explorer</a>
      <div class="dashboard-title">Company not found</div>
    `;
    return;
  }

  const { holders, stories } = getCompanyHolders(company.name);
  const h = company.holding;

  let priceHTML = '<span class="return-unknown">Price not on file</span>';
  let returnHTML = '';
  if (h.price !== null) {
    priceHTML = `$${h.price.toFixed(2)}`;
    if (h.historicalPrice !== null) {
      const pct = ((h.price - h.historicalPrice) / h.historicalPrice) * 100;
      const r2 = Number(pct.toFixed(1));
      const cls = r2 > 0 ? 'return-positive' : r2 < 0 ? 'return-negative' : 'return-flat';
      returnHTML = `<div class="company-detail-return ${cls}">${typeof directionLabel === 'function' ? directionLabel(r2) : ''}${r2 > 0 ? '+' : ''}${r2.toFixed(1)}% since Jan 2, 2025</div>`;
    }
  }

  const storiesHTML = stories.map(s => `
    <div class="company-story">
      <div class="company-story-label">Notable Story</div>
      <div>${s.text}.</div>
      <div class="company-story-firm">- as told on ${s.firm.name}'s page</div>
    </div>
  `).join('');

  const holdersHTML = holders.map(({ firm }) => `
    <a href="#${firm.slug}" class="company-holder-card">
      <div class="company-holder-name">${firm.name}</div>
      <div class="company-holder-aum">${firm.aum}</div>
    </a>
  `).join('');

  document.getElementById('companyView').innerHTML = `
    <a href="#portfolio" class="detail-back">← Back to Portfolio Explorer</a>
    <div class="company-detail-header">
      <div>
        <span class="company-detail-name">${company.name}</span>
     <div class="company-detail-price-block">
        <div class="company-detail-price">${priceHTML}</div>
        ${returnHTML}
        <a href="https://finance.yahoo.com/quote/${h.ticker}" target="_blank" rel="noopener noreferrer" class="company-detail-yahoo-link">View on Yahoo Finance →</a>
      </div>
        ${returnHTML}
      </div>
    </div>
<div class="company-caveat">Price and return are the same figures already shown on each investing firm's page - editable, and sourced from the firm's actual holdings data. No investment stage or valuation is shown here, since that data isn't tracked on this site.</div>
    ${storiesHTML}
    <div class="company-holders-label">Tracked Firms That Invested (${holders.length})</div>
    <div class="company-holders-grid">${holdersHTML}</div>
  `;
}
// Shows/hides the sticky bottom bar for partner comparison - mirrors
// renderCompareBar() in compare.js exactly, just pointed at
// partnerProfiles/comparePartnerSet instead of firms/compareSet.
function renderComparePartnersBar() {
  const bar = document.getElementById('comparePartnersBar');
  if (!bar) return;
  if (comparePartnerSet.size === 0) {
    bar.style.display = 'none';
    return;
  }
  bar.style.display = 'flex';
  const chips = [...comparePartnerSet].map(slug => {
    const p = partnerProfiles[slug];
    return `<span class="compare-chip">${p.name}</span>`;
  }).join('');
  const canCompare = comparePartnerSet.size >= 2;
  bar.innerHTML = `
    <div class="compare-bar-chips">
      <span class="compare-bar-label">Comparing (${comparePartnerSet.size}/3):</span>
      ${chips}
    </div>
    <div class="compare-bar-actions">
      <button class="compare-btn secondary" id="clearComparePartnersBtn">Clear</button>
      <button class="compare-btn primary" id="goComparePartnersBtn" ${canCompare ? '' : 'disabled'}>Compare →</button>
    </div>
  `;
  document.getElementById('clearComparePartnersBtn').addEventListener('click', () => {
    comparePartnerSet.clear();
    renderComparePartnersBar();
    renderPeopleResults();
  });
  document.getElementById('goComparePartnersBtn').addEventListener('click', () => {
    if (comparePartnerSet.size >= 2) window.location.hash = 'compare-partners';
  });
}

// Renders the side-by-side partner comparison table - mirrors
// renderComparison() in compare.js exactly, just with partner-shaped
// rows (title, firm, education, investment focus, etc.) instead of
// firm-shaped ones.
function renderPartnerComparison() {
  const selected = [...comparePartnerSet].map(slug => ({ slug, ...partnerProfiles[slug] }));
  if (selected.length < 2) {
    document.getElementById('comparePartnersView').innerHTML = `
      <a href="#" class="detail-back" id="backFromComparePartners">← Back to all firms</a>
      <p style="color: var(--ink-dim); font-size: 14px;">Pick at least 2 partners from the People page to compare them.</p>
    `;
    document.getElementById('backFromComparePartners').addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = 'people';
    });
    return;
  }

  const rows = [
    { label: 'Title', render: p => p.title },
    { label: 'Firm', render: p => p.firm },
    { label: 'Joined', render: p => p.joinedYear || '-' },
    { label: 'Education', render: p => (p.education || []).join(', ') || '-' },
    { label: 'Investment Focus', render: p => (p.investmentFocus || []).map(s => `<span class="compare-sector-tag">${s}</span>`).join('') },
    { label: 'Notable Investments', render: p => (p.notableInvestments || []).map(i => i.name).join(', ') || '-' },
    { label: 'IPOs / Major Exits', render: p => `${p.ipoCount || 0} IPOs · ${p.majorExits || 0} exits` },
    { label: 'Biography', render: p => p.biography }
  ];
  const headerCells = selected.map(p => `<th class="firm-col-name">${p.name}</th>`).join('');
  const bodyRows = rows.map(row => `
    <tr>
      <td class="row-label">${row.label}</td>
      ${selected.map(p => `<td>${row.render(p)}</td>`).join('')}
    </tr>
  `).join('');
  document.getElementById('comparePartnersView').innerHTML = `
    <a href="#" class="detail-back" id="backFromComparePartners">← Back to all firms</a>
    <div class="scroll-hint">← Swipe to see all partners →</div>
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead><tr><th></th>${headerCells}</tr></thead>
        <tbody>${bodyRows}</tbody>
      </table>
    </div>
  `;
  document.getElementById('backFromComparePartners').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = 'people';
  });
}
