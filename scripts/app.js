/* ============================================================
   APP.JS
   Site bootstrap and routing: homepage renderers that run on
   first load (featured firm, scale bar, hero top 5, news), the
   ticker tape builder, the prices.json fetch that kicks off the
   initial render pass, and the router() that decides which page
   to show based on the URL hash (plus its hashchange listener).
   Load this LAST - it's what starts everything else running.
   ============================================================ */
// Renders the "Live Top 5" widget in the hero - the same real
// firms array used everywhere else on the site, just showing the
// top 5 by AUM (firms are already ordered by rank, so this is
// simply the first 5 entries).
// Renders the credibility stat strip below the hero - every number
// computed live from the real firms data, never hardcoded, so it
// can never drift out of sync with what the site actually tracks.
// Renders the Featured Firm spotlight - looks up the real firm data
// by slug from the featuredFirm object above, so Peter only ever
// has to edit one slug and one sentence, never firm data itself.
function renderFeaturedFirm() {
  const firm = firms.find(f => f.slug === featuredFirm.slug);
  if (!firm) return; // bad slug typo - fail quietly rather than crash the page

  document.getElementById('featuredFirmContainer').innerHTML = `
    <div class="featured-firm">
      <div class="featured-firm-label">⭐ Featured Firm</div>
      <div class="featured-firm-head">
        <div class="featured-firm-name"><a href="#${firm.slug}">${firm.name}</a></div>
        <div class="featured-firm-meta">${firm.aum} AUM · Founded ${firm.founded} · ${firm.hq}</div>
      </div>
      <p class="featured-firm-reason">${featuredFirm.reason}</p>
      <a href="#${firm.slug}" class="featured-firm-link">View Full Firm Profile →</a>
    </div>
  `;
}

function renderScaleBar() {
  const totalFirms = firms.length;
  const totalPartners = Object.keys(partnerProfiles).length;
  const countryCount = new Set(firms.map(f => getCountryFromHQ(f.hq))).size;
  const avgFoundedYear = Math.round(firms.reduce((sum, f) => sum + f.founded, 0) / totalFirms);

  // firms is already sorted by AUM descending (see utilities.js), so the
  // largest fund is simply the first entry - no separate max() pass needed.
  const largestAumFirm = firms[0];

  // Counts how many firms list each sector, then takes the highest count -
  // the real "most active" sector by firm coverage, not a hardcoded guess.
  const sectorCounts = {};
  firms.forEach(f => (f.sectors || []).forEach(s => {
    sectorCounts[s] = (sectorCounts[s] || 0) + 1;
  }));
  const topSectorEntry = Object.entries(sectorCounts).sort((a, b) => b[1] - a[1])[0];
  const topSector = topSectorEntry ? topSectorEntry[0] : '—';

  document.getElementById('scaleBar').innerHTML = `
    <div class="stat-card"><span class="stat-card-num">${totalFirms}</span><span class="stat-card-label">Total Firms</span></div>
    <div class="stat-card"><span class="stat-card-num">${totalPartners}</span><span class="stat-card-label">Partners</span></div>
    <div class="stat-card"><span class="stat-card-num">${countryCount}</span><span class="stat-card-label">Countries</span></div>
    <div class="stat-card"><span class="stat-card-num">${avgFoundedYear}</span><span class="stat-card-label">Avg. Founded Year</span></div>
    <div class="stat-card"><span class="stat-card-num">${largestAumFirm.aum}</span><span class="stat-card-label">Largest AUM — ${largestAumFirm.short}</span></div>
    <div class="stat-card"><span class="stat-card-num">${topSector}</span><span class="stat-card-label">Most Active Sector</span></div>
  `;

  const seeAllLink = document.getElementById('heroSeeAllLink');
  if (seeAllLink) seeAllLink.textContent = `See All ${totalFirms} Firms →`;
}
function renderHeroTop5() {
  const top5 = firms.slice(0, 5);
  document.getElementById('heroTop5List').innerHTML = top5.map(f => `
    <a href="#${f.slug}" class="hero-widget-row">
      <span class="hero-widget-rank">${String(f.rank).padStart(2, '0')}</span>
      <span class="hero-widget-name">${f.short}</span>
      <span class="hero-widget-aum">${f.aum}</span>
    </a>
  `).join('');
}

function renderNews() {
  // Render the news feed: newest item as the big featured box,
  // everything else as a compact dated list underneath.
  const newsContainer = document.getElementById('newsContainer');
  if (newsItems.length > 0) {
    const [latest, ...older] = newsItems;

    let html = `
      <div class="highlight">
        <div class="tag">${latest.tag} — ${latest.date}</div>
        <p>${latest.text}</p>
      </div>`;

    if (older.length > 0) {
      html += `<div class="news-archive"><div class="news-archive-label">Earlier Updates</div>`;
      older.forEach(item => {
        html += `
          <div class="news-item">
            <div class="date">${item.date}</div>
            <p>${item.text}</p>
          </div>`;
      });
      html += `</div>`;
    }

    newsContainer.innerHTML = html;
  }
}

function router() {
 const slug = window.location.hash.replace('#', '');
  const firm = firms.find(f => f.slug === slug);
  const partnerMatch = slug.match(/^partner\/(.+)$/);
  const companyMatch = slug.match(/^company\/(.+)$/);
  const reportMatch = slug.match(/^reports\/(.+)$/);

  document.getElementById('listView').style.display = 'none';
  document.getElementById('detailView').style.display = 'none';
  document.getElementById('compareView').style.display = 'none';
  document.getElementById('dashboardView').style.display = 'none';
  document.getElementById('partnerView').style.display = 'none';
  document.getElementById('findInvestorsView').style.display = 'none';
  document.getElementById('pricingView').style.display = 'none';
  document.getElementById('peopleView').style.display = 'none';
document.getElementById('portfolioView').style.display = 'none';
  document.getElementById('companyView').style.display = 'none';
document.getElementById('shortlistView').style.display = 'none';
  document.getElementById('worldMapView').style.display = 'none';
  document.getElementById('comparePartnersView').style.display = 'none';
document.getElementById('reportsHubView').style.display = 'none';
  document.getElementById('sectorReportView').style.display = 'none';
document.getElementById('familyTreeView').style.display = 'none';
document.getElementById('ecosystemGraphView').style.display = 'none';
  document.getElementById('relationshipGraphView').style.display = 'none';
  document.getElementById('historicalSnapshotView').style.display = 'none';

  if (slug === 'historical-snapshot') {
    document.getElementById('historicalSnapshotView').style.display = 'block';
    renderHistoricalSnapshot();
    window.scrollTo(0, 0);
  } else if (slug === 'ecosystem-graph') {
    document.getElementById('ecosystemGraphView').style.display = 'block';
    renderEcosystemGraph();
    window.scrollTo(0, 0);
} else if (slug === 'relationship-graph' || slug.startsWith('relationship-graph/')) {
    document.getElementById('relationshipGraphView').style.display = 'block';
    const rgMatch = slug.match(/^relationship-graph\/(firm|partner|company)\/(.+)$/);
    if (rgMatch) {
      renderRelationshipGraph(rgMatch[1], decodeURIComponent(rgMatch[2]));
    } else {
      renderRelationshipGraph(null, null);
    }
    window.scrollTo(0, 0);
  } else if (slug === 'family-tree') {
    document.getElementById('familyTreeView').style.display = 'block';
    renderFamilyTree();
    window.scrollTo(0, 0);
  } else if (slug === 'reports') {
    document.getElementById('reportsHubView').style.display = 'block';
    renderReportsHub();
    window.scrollTo(0, 0);
  } else if (reportMatch) {
    document.getElementById('sectorReportView').style.display = 'block';
    renderSectorReport(reportMatch[1]);
    window.scrollTo(0, 0);
  } else if (slug === 'compare-partners') {
    document.getElementById('comparePartnersView').style.display = 'block';
    renderPartnerComparison();
    window.scrollTo(0, 0);
  } else if (slug === 'world-map') {
    document.getElementById('worldMapView').style.display = 'block';
    renderWorldMap();
    window.scrollTo(0, 0);
  } else if (slug === 'compare') {
    document.getElementById('compareView').style.display = 'block';
    renderComparison();
    window.scrollTo(0, 0);
  } else if (slug === 'analytics') {
    document.getElementById('dashboardView').style.display = 'block';
    renderDashboard();
    window.scrollTo(0, 0);
  } else if (slug === 'find-investors') {
    document.getElementById('findInvestorsView').style.display = 'block';
    renderFindInvestors();
    window.scrollTo(0, 0);
  } else if (slug === 'pricing') {
    document.getElementById('pricingView').style.display = 'block';
    renderPricing();
    window.scrollTo(0, 0);
  } else if (slug === 'people') {
    document.getElementById('peopleView').style.display = 'block';
    renderPeople();
    window.scrollTo(0, 0);
 } else if (slug === 'portfolio') {
    document.getElementById('portfolioView').style.display = 'block';
    renderPortfolioExplorer();
    window.scrollTo(0, 0);
  } else if (slug === 'shortlist') {
    document.getElementById('shortlistView').style.display = 'block';
    renderShortlistBuilder();
    window.scrollTo(0, 0);
  } else if (companyMatch) {
    document.getElementById('companyView').style.display = 'block';
    renderCompanyProfile(companyMatch[1]);
    window.scrollTo(0, 0);
} else if (partnerMatch && partnerProfiles[partnerMatch[1]]) {
    document.getElementById('partnerView').style.display = 'block';
    renderPartnerProfile(partnerMatch[1]);
    window.scrollTo(0, 0);
  } else if (firm) {
    document.getElementById('detailView').style.display = 'block';
    renderDetail(firm);
    window.scrollTo(0, 0);
} else {
    document.getElementById('listView').style.display = 'block';
    renderFirms();
  }
  renderCompareBar();
  renderComparePartnersBar();
}

window.addEventListener('hashchange', router);

// Ticker tape at top — pulls every unique ticker + whatever price is set
function buildTicker() {
  const track = document.getElementById('tickerTrack');
  const seen = new Map();
  firms.forEach(f => f.holdings.forEach(h => {
    if (!seen.has(h.ticker)) seen.set(h.ticker, h.price);
  }));
  const parts = [];
  seen.forEach((price, ticker) => {
    const priceStr = price !== null ? `$${price.toFixed(2)}` : '—';
    parts.push(`<span>${ticker} <span class="up">${priceStr}</span></span>`);
  });
  const line = parts.join('');
  track.innerHTML = line + line; // duplicate for seamless scroll
}

// Try to load real, automatically-updated prices from prices.json
// (built daily by a GitHub Action). If it's missing or fails to
// load, the site just falls back to the prices written in the code.
fetch('prices.json')
  .then(res => res.json())
  .then(data => {
    firms.forEach(f => f.holdings.forEach(h => {
      if (data[h.ticker] !== undefined) h.price = data[h.ticker];
    }));
    const noteEl = document.querySelector('.section-label .note');
    if (noteEl && data.last_updated) {
      noteEl.textContent = `Prices auto-updated daily · Last: ${data.last_updated}`;
    }
  })
  .catch(err => {
    console.log('Could not load live prices, using built-in defaults.', err);
  })
  .finally(() => {
    renderNews();
    renderHeroTop5();
    renderScaleBar();
    renderFeaturedFirm();
    renderSectorFilterChips();
    renderAnalytics();
    router();
  });
