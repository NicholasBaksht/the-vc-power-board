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
/* Hero badge counts, computed from the dataset rather than typed
   in. A hardcoded count goes stale the moment a firm is added or
   removed — this one already had, reading 308/313 against a
   dataset of 293/293. */
function renderHeroBadge() {
  const firmEl = document.getElementById('heroFirmCount');
  const betEl = document.getElementById('heroBetCount');
  if (!firmEl && !betEl) return;

  if (firmEl) firmEl.textContent = firms.length;

  if (betEl) {
    // "Verified bets" = holdings with a real ticker, which is the
    // only claim the data actually supports.
    const bets = firms.reduce(function (n, f) {
      return n + (f.holdings || []).filter(function (h) { return h.ticker; }).length;
    }, 0);
    betEl.textContent = bets;
  }
}

function renderHeroTop5() {
  // The redesigned hero has no Top 5 widget. Guarded rather than
  // deleted so this stays safe if the widget ever comes back.
  const listEl = document.getElementById('heroTop5List');
  if (!listEl) return;
  const top5 = firms.slice(0, 5);
  listEl.innerHTML = top5.map(f => `
    <a href="#${f.slug}" class="hero-widget-row">
      <span class="hero-widget-rank">${String(f.rank).padStart(2, '0')}</span>
      <span class="hero-widget-name">${f.short}</span>
      <span class="hero-widget-aum">${f.aum}</span>
    </a>
  `).join('');
}

function renderNews() {
  // Homepage widget version: the latest item plus up to 2 more for
  // context, then a link out to the full News page - the full
  // archive used to render entirely on the homepage, which is
  // exactly the "everything stacked vertically" pattern the site
  // overhaul was meant to move away from.
  const newsContainer = document.getElementById('newsContainer');
  if (newsItems.length === 0) return;

  const [latest, ...older] = newsItems;
  const preview = older.slice(0, 2);

  let html = `
    <div class="news-widget-label">Latest Update</div>
    <div class="highlight">
      <div class="tag">${latest.tag} — ${latest.date}</div>
      <p>${latest.text}</p>
    </div>`;

  if (preview.length > 0) {
    html += `<div class="news-archive">`;
    preview.forEach(item => {
      html += `
        <div class="news-item">
          <div class="date">${item.date}</div>
          <p>${item.text}</p>
        </div>`;
    });
    html += `</div>`;
  }

  html += `<a href="#news" class="news-view-all">View All Updates →</a>`;
  newsContainer.innerHTML = html;
}

// Full News page - every item, newest first, no truncation. Reuses
// the exact same .highlight/.news-archive/.news-item CSS as the
// homepage widget so it feels like the same feature, just complete.
function renderNewsPage() {
  document.getElementById('newsView').innerHTML = `
    <a href="#" class="detail-back" id="backFromNews">← Back to all firms</a>
    <div class="dashboard-title">News &amp; Updates</div>
    <p class="dashboard-sub">Every update posted about The VC Power Board's data and features, newest first.</p>
    <div id="newsPageList"></div>
  `;

  const listEl = document.getElementById('newsPageList');
  if (newsItems.length === 0) {
    listEl.innerHTML = `<div class="intel-empty">No updates yet.</div>`;
  } else {
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
    listEl.innerHTML = html;
  }

  document.getElementById('backFromNews').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '';
  });
}

function router() {
 const slug = window.location.hash.replace('#', '');
  const firm = firms.find(f => f.slug === slug);
  const partnerMatch = slug.match(/^partner\/(.+)$/);
  const companyMatch = slug.match(/^company\/(.+)$/);
  const reportMatch = slug.match(/^reports\/(.+)$/);

  // The hero, feature-grid, and below-hero content is homepage-only
  // chrome, not something every route should carry - it was
  // previously always rendered regardless of page, which is the
  // real reason navigating anywhere felt like "one long page."
  // Shown only for the true homepage/Rankings route.
// #powerAlerts is an in-page anchor, not a view of its own. It has to
  // count as the homepage: the section lives INSIDE #homeIntro, so any
  // slug failing this test hides the very thing the link points at.
  const powerAlertsEl = document.getElementById('powerAlerts');
  if (powerAlertsEl) powerAlertsEl.style.display = isAlerts ? '' : 'none';
  document.getElementById('listView').style.display = 'none';
  const homeIntroEl = document.getElementById('homeIntro');
  if (homeIntroEl) homeIntroEl.style.display = isHomepage ? '' : 'none';
  // "By the Numbers" is homepage-flavored summary content, same
  // category as the hero/feature-grid above - it was never gated
  // by router() at all, so it's been rendering underneath every
  // single route (Relationship Graph, Family Tree, etc.) this
  // whole time, same root cause as the original homeIntro bug.
  const byTheNumbersEl = document.getElementById('byTheNumbersSection');
  if (byTheNumbersEl) byTheNumbersEl.style.display = isHomepage ? '' : 'none';
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
document.getElementById('discoveryView').style.display = 'none';
document.getElementById('intelligenceFeedView').style.display = 'none';
document.getElementById('powerSignalsView').style.display = 'none';
  document.getElementById('historicalSnapshotView').style.display = 'none';
  document.getElementById('newsView').style.display = 'none';

  // Null-guarded on purpose. These two views were added after the
  // original router was written; an unguarded getElementById on a
  // div that isn't in index.html yet returns null, throws on
  // .style, and takes the whole router — and so the whole site —
  // down with it.
  const signinViewEl = document.getElementById('signinView');
  if (signinViewEl) signinViewEl.style.display = 'none';
  const accountViewEl = document.getElementById('accountView');
  if (accountViewEl) accountViewEl.style.display = 'none';

 if (slug === 'signin') {
    if (signinViewEl) signinViewEl.style.display = 'block';
    if (typeof renderSignIn === 'function') renderSignIn();
    window.scrollTo(0, 0);
  } else if (slug === 'account') {
    if (accountViewEl) accountViewEl.style.display = 'block';
    if (typeof renderAccount === 'function') renderAccount();
    window.scrollTo(0, 0);
  } else if (slug === 'historical-snapshot' || slug.startsWith('historical-snapshot/')) {
    document.getElementById('historicalSnapshotView').style.display = 'block';
    const snapshotDeepLink = slug.match(/^historical-snapshot\/(.+)$/);
    renderHistoricalSnapshot(snapshotDeepLink ? snapshotDeepLink[1] : null);
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
} else if (slug === 'market-signals') {
    document.getElementById('powerSignalsView').style.display = 'block';
    renderMarketSignals();
    window.scrollTo(0, 0);
} else if (slug === 'news') {
    document.getElementById('newsView').style.display = 'block';
    renderNewsPage();
    window.scrollTo(0, 0);
  } else if (slug === 'feed') {
    document.getElementById('intelligenceFeedView').style.display = 'block';
    renderIntelligenceFeed();
    window.scrollTo(0, 0);
  } else if (slug === 'discover') {
    document.getElementById('discoveryView').style.display = 'block';
    renderDiscoveryEngine();
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
} else if (slug === 'rankings') {
    document.getElementById('listView').style.display = 'block';
    renderFirms();
    window.scrollTo(0, 0);
} else if (slug === 'powerAlerts') {
    // Homepage chrome stays visible (see isHomepage above); the list is
    // still rendered so everything below the alerts is intact. The scroll
    // waits a frame because renderFirms() changes the page height.
    document.getElementById('listView').style.display = 'block';
    renderFirms();
    const paEl = document.getElementById('powerAlerts');
    if (paEl) {
      requestAnimationFrame(function () {
        window.scrollTo({ top: paEl.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      });
    }
  } else {
    document.getElementById('listView').style.display = 'block';
    renderFirms();
  }
 renderCompareBar();
  renderComparePartnersBar();
  syncActiveNav();
}

// Highlights whichever nav link matches the current top-level
// section, so the nav gives real "where am I" feedback instead of
// only reacting during the click itself.
function syncActiveNav() {
  const topSlug = window.location.hash.replace('#', '').split('/')[0];
  document.querySelectorAll('.nav-link, .nav-dropdown-item').forEach(link => {
    const linkSlug = (link.getAttribute('href') || '').replace('#', '').split('/')[0];
    link.classList.toggle('active', linkSlug !== '' && linkSlug === topSlug);
  });
  // If the active route lives inside a dropdown, highlight that
  // dropdown's own trigger button too, so "where am I" still works
  // when the matching link itself is hidden inside a closed menu.
  document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const hasActiveChild = dropdown.querySelector('.nav-dropdown-item.active');
    dropdown.querySelector('.nav-dropdown-trigger')?.classList.toggle('active', !!hasActiveChild);
  });
}
window.addEventListener('hashchange', router);

// Dropdown open/close for the Insights/Explore/Data nav menus.
// Click the trigger to toggle; click anywhere else to close;
// clicking a real link inside just navigates normally (router()
// handles hiding the menu implicitly via syncActiveNav's re-render,
// but we also close it explicitly so it doesn't stay open after
// navigating).
document.querySelectorAll('.nav-dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = trigger.closest('.nav-dropdown');
    const wasOpen = dropdown.classList.contains('open');
    document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
    if (!wasOpen) dropdown.classList.add('open');
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
});
document.querySelectorAll('.nav-dropdown-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
  });
});
// Ticker tape at top — pulls every unique ticker + whatever price is set
function buildTicker() {
  // The ticker tape was removed from the homepage. firm-cards.js
  // still calls this on render and on every price edit, so it
  // returns quietly rather than throwing on a missing element.
  const track = document.getElementById('tickerTrack');
  if (!track) return;
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
      renderHeroBadge();
    renderHeroTop5();
    renderScaleBar();
    renderFeaturedFirm();
    renderSectorFilterChips();
    renderAnalytics();
    renderPowerAlerts();
    router();
  });
