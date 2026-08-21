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
      <div class="featured-firm-label"> Featured Firm</div>
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
  // Firms with no HQ on file resolve to null and are excluded, so the
  // country count stays a count of known countries rather than gaining a
  // phantom entry for "unknown".
  const countryCount = new Set(firms.map(f => getCountryFromHQ(f.hq)).filter(Boolean)).size;
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
  const topSector = topSectorEntry ? topSectorEntry[0] : '-';

  document.getElementById('scaleBar').innerHTML = `
    <div class="stat-card"><span class="stat-card-num">${totalFirms}</span><span class="stat-card-label">Total Firms</span></div>
    <div class="stat-card"><span class="stat-card-num">${totalPartners}</span><span class="stat-card-label">Partners</span></div>
    <div class="stat-card"><span class="stat-card-num">${countryCount}</span><span class="stat-card-label">Countries</span></div>
    <div class="stat-card"><span class="stat-card-num">${avgFoundedYear}</span><span class="stat-card-label">Avg. Founded Year</span></div>
    <div class="stat-card"><span class="stat-card-num">${largestAumFirm.aum}</span><span class="stat-card-label">Largest AUM - ${largestAumFirm.short}</span></div>
    <div class="stat-card"><span class="stat-card-num">${topSector}</span><span class="stat-card-label">Most Active Sector</span></div>
  `;

  const seeAllLink = document.getElementById('heroSeeAllLink');
  if (seeAllLink) seeAllLink.textContent = `See All ${totalFirms} Firms →`;
}
/* Hero badge counts, computed from the dataset rather than typed
   in. A hardcoded count goes stale the moment a firm is added or
   removed - this one already had, reading 308/313 against a
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
      <div class="tag">${latest.tag} - ${latest.date}</div>
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
        <div class="tag">${latest.tag} - ${latest.date}</div>
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
  // Three separate destinations where there used to be one homepage.
  // Legacy #rankings / #firmsContainer land on Firms.
  const isHome   = (slug === '' || slug === 'home');
  const isFirms  = (slug === 'firms' || slug === 'rankings' || slug === 'firmsContainer');
  const isAlerts = (slug === 'powerAlerts');
  const isHomepage = isHome;
  const homeIntroEl = document.getElementById('homeIntro');
  if (homeIntroEl) homeIntroEl.style.display = isHomepage ? '' : 'none';
  // "By the Numbers" is homepage-flavored summary content, same
  // category as the hero/feature-grid above - it was never gated
  // by router() at all, so it's been rendering underneath every
  // single route (Relationship Graph, Family Tree, etc.) this
  // whole time, same root cause as the original homeIntro bug.
  const byTheNumbersEl = document.getElementById('personalityDistSection');
  if (byTheNumbersEl) byTheNumbersEl.style.display = isHomepage ? '' : 'none';
   const powerAlertsEl = document.getElementById('powerAlerts');
  if (powerAlertsEl) powerAlertsEl.style.display = isAlerts ? '' : 'none';
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
  // .style, and takes the whole router - and so the whole site -
  // down with it.
  /* Conflict Check. The container is created by ensureConflictCheckView()
     below rather than living in index.html, so this must stay null-guarded
     for exactly the reason the comment above describes. */
  const conflictViewEl = document.getElementById('conflictCheckView');
  if (conflictViewEl) conflictViewEl.style.display = 'none';

  const signinViewEl = document.getElementById('signinView');
  if (signinViewEl) signinViewEl.style.display = 'none';
  const accountViewEl = document.getElementById('accountView');
  if (accountViewEl) accountViewEl.style.display = 'none';

 if (slug === 'conflict-check') {
    const el = ensureConflictCheckView();
    if (el) {
      el.style.display = 'block';
      if (typeof renderConflictCheck === 'function') renderConflictCheck();
    }
    window.scrollTo(0, 0);
  } else if (slug === 'signin') {
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
} else if (isAlerts) {
    // The board was populated once at load; this just reveals it.
    // renderFirms() is deliberately NOT called here.
    window.scrollTo(0, 0);
  } else if (isFirms) {
    document.getElementById('listView').style.display = 'block';
    renderFirms();
    window.scrollTo(0, 0);
  } else if (isHome) {
    window.scrollTo(0, 0);
  } else {
    // Unknown slug falls back to Home rather than a bare firm list.
    if (homeIntroEl) homeIntroEl.style.display = '';
    if (byTheNumbersEl) byTheNumbersEl.style.display = '';
    window.scrollTo(0, 0);
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
// Ticker tape at top - pulls every unique ticker + whatever price is set
function buildTicker() {
  // The ticker tape was removed from the homepage. firm-cards.js
  // still calls this on render and on every price edit, so it
  // returns quietly rather than throwing on a missing element.
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  const seen = new Map();
  firms.forEach(f => f.holdings.forEach(h => {
    if (!seen.has(h.ticker)) seen.set(h.ticker, h);
  }));
  const parts = [];
  /* Every ticker price used to render with class "up", which painted the
     whole tape green regardless of which way anything had actually moved.
     A green number reads as a gain, so the tape was making a directional
     claim it had not checked. Direction now comes from historicalPrice
     where one exists; where it does not, the price is neutral rather than
     optimistic. */
  seen.forEach((h, ticker) => {
    const price = h.price;
    const priceStr = price !== null ? `$${price.toFixed(2)}` : '\u2014';
    let cls = 'flat', mark = '';
    if (price !== null && h.historicalPrice !== null && h.historicalPrice !== 0) {
      const pct = Number((((price - h.historicalPrice) / h.historicalPrice) * 100).toFixed(1));
      cls = pct > 0 ? 'up' : pct < 0 ? 'down' : 'flat';
      mark = typeof directionMark === 'function' ? directionMark(pct)
           : (pct > 0 ? '\u2191' : pct < 0 ? '\u2193' : '\u2192');
      mark = '<span class="dir-mark" aria-hidden="true">' + mark + '</span>';
    }
    parts.push(`<span>${ticker} <span class="${cls}">${mark}${priceStr}</span></span>`);
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


/* ============================================================
   COLLAPSE THE METHODOLOGY SECTION
   Methodology is 3,171px - 45% of the homepage after the exits
   list was compacted. It is also the section that earns trust,
   so none of it is removed: the heading and the opening
   paragraph stay visible, and everything after is moved into a
   collapsible container.

   Done here in JS rather than by restructuring 144 lines of
   markup, so index.html keeps its existing methodology block
   untouched and there is nothing to re-paste if that copy
   changes later.
   ============================================================ */
function collapseMethodology() {
  const sec = document.getElementById('methodologyAnchor');
  if (!sec || sec.dataset.collapsed === '1') return;

  const kids = Array.from(sec.children);
  // Keep the <h2> and the first paragraph as the visible summary.
  let keep = 0;
  for (let i = 0; i < kids.length; i++) {
    keep = i + 1;
    if (kids[i].tagName === 'P') break;
  }
  const rest = kids.slice(keep);
  if (!rest.length) return;

  const wrap = document.createElement('div');
  wrap.className = 'methodology-rest';
  wrap.id = 'methodologyRest';
  wrap.hidden = true;
  rest.forEach(function (el) { wrap.appendChild(el); });

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'methodology-toggle';
  btn.id = 'methodologyToggle';
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'methodologyRest');
  btn.textContent = 'Read the full methodology';

  sec.appendChild(btn);
  sec.appendChild(wrap);
  sec.dataset.collapsed = '1';

  const setOpen = (open) => {
    wrap.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Hide methodology' : 'Read the full methodology';
  };
  btn.addEventListener('click', function () { setOpen(wrap.hidden); });

  /* The nav has a Methodology link pointing at this anchor. Landing on
     a collapsed section from that link would be a dead end, so arriving
     via the anchor opens it. */
  const openIfTargeted = () => {
    if (location.hash === '#methodologyAnchor') {
      setOpen(true);
      sec.scrollIntoView({ block: 'start' });
    }
  };
  window.addEventListener('hashchange', openIfTargeted);
  openIfTargeted();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', collapseMethodology);
} else {
  collapseMethodology();
}


/* ============================================================
   CONFLICT CHECK VIEW CONTAINER
   Created here rather than added to index.html so the feature
   ships as script + stylesheet only. Inserted next to the other
   view divs so it inherits the same layout context.
   ============================================================ */
function ensureConflictCheckView() {
  let el = document.getElementById('conflictCheckView');
  if (el) return el;
  const anchor = document.getElementById('findInvestorsView')
              || document.getElementById('detailView');
  if (!anchor || !anchor.parentNode) return null;
  el = document.createElement('div');
  el.id = 'conflictCheckView';
  el.style.display = 'none';
  anchor.parentNode.insertBefore(el, anchor.nextSibling);
  return el;
}


/* ============================================================
   ACCENT THEME SWITCHER
   Writes one attribute - data-theme on <html> - and lets CSS do
   the rest. Persisted in localStorage under 'pb-theme'.

   index.html carries a one-line inline script in <head> that
   applies the stored value before first paint. Without it the
   page renders in the default accent and then flips, which is
   visible on every load. This function only builds the control.
   ============================================================ */
const PB_THEMES = ['navy', 'blue', 'amber'];
const PB_THEME_KEY = 'pb-theme';

function pbGetTheme() {
  try {
    const t = localStorage.getItem(PB_THEME_KEY);
    return PB_THEMES.indexOf(t) !== -1 ? t : 'blue';
  } catch (e) { return 'blue'; }
}

function pbSetTheme(name) {
  if (PB_THEMES.indexOf(name) === -1) return;
  const root = document.documentElement;

  /* Transitions are suppressed for the duration of the swap.

     Two reasons. First a correctness one: when a custom property changes
     on an ancestor, elements with a transition on a property that READS
     that custom property do not reliably re-interpolate - they hold the
     old value until something else invalidates them. The header CTA
     stayed blue after switching to amber until you hovered it. Second, a
     200ms colour animation running across every themed element at once
     looks like a glitch rather than a choice. */
  root.classList.add('pb-theming');
  root.setAttribute('data-theme', name);
  void root.offsetWidth;  // force the recalc while transitions are off
  if (typeof requestAnimationFrame === 'function') {
    requestAnimationFrame(function () { root.classList.remove('pb-theming'); });
  } else {
    root.classList.remove('pb-theming');
  }
  try { localStorage.setItem(PB_THEME_KEY, name); } catch (e) { /* private mode */ }
  const dots = document.querySelectorAll('.pb-theme-dot');
  for (let i = 0; i < dots.length; i++) {
    dots[i].setAttribute('aria-pressed', String(dots[i].dataset.themeSet === name));
  }
}

function renderThemeSwitcher() {
  const host = document.querySelector('.pb-header-actions');
  if (!host || document.querySelector('.pb-theme')) return;

  const current = pbGetTheme();
  const wrap = document.createElement('div');
  wrap.className = 'pb-theme';
  wrap.setAttribute('role', 'group');
  wrap.setAttribute('aria-label', 'Accent colour');

  PB_THEMES.forEach(function (name) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'pb-theme-dot';
    b.dataset.themeSet = name;
    b.title = name.charAt(0).toUpperCase() + name.slice(1) + ' accent';
    b.setAttribute('aria-label', b.title);
    b.setAttribute('aria-pressed', String(name === current));
    b.addEventListener('click', function () { pbSetTheme(name); });
    wrap.appendChild(b);
  });

  host.insertBefore(wrap, host.firstChild);
  // Re-assert on load: the inline head script set the attribute, this
  // makes the control agree with it.
  pbSetTheme(current);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderThemeSwitcher);
} else {
  renderThemeSwitcher();
}


/* ============================================================
   MOTION
   Two effects: numbers counting into place, and sections fading
   in as they arrive. Both are opt-in enhancements layered onto a
   page that is already complete and readable without them.

   THE RULE: if reduced motion is set, neither runs at all - the
   counter never starts (so the final value is what renders, not
   a zero that gets animated), and no section is ever hidden. The
   CSS half of this lives in animations.css.
   ============================================================ */
function pbPrefersReducedMotion() {
  return typeof matchMedia === 'function' &&
         matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* Splits "  $1,234M+ " into prefix / number / suffix so only the numeric
   part animates and the formatting survives. Returns null when there is
   nothing sensible to count - a sector name, an empty cell, a year. */
function pbParseCountable(text) {
  const raw = String(text == null ? '' : text).trim();
  if (!raw) return null;
  const m = raw.match(/^([^0-9-]*)(-?[0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/);
  if (!m) return null;
  const digits = m[2].replace(/,/g, '');
  const value = parseFloat(digits);
  if (!isFinite(value)) return null;

  /* A year must not count up from zero - watching "Avg. Founded Year"
     sprint from 0 to 2001 is a gag, not a data product. Detected as a
     bare 4-digit number in a plausible year range with no prefix or
     suffix attached. */
  const bareFourDigit = !m[1] && !m[3] && /^[0-9]{4}$/.test(digits);
  if (bareFourDigit && value >= 1900 && value <= 2100) return null;

  /* Nothing to watch below ~8 - it lands before the eye registers it.
     Unless a magnitude suffix is attached: "$1.223T+" is numerically
     small but is a headline figure, and counting it up reads correctly. */
  const hasMagnitude = /[TBMK]/.test(m[3] || '');
  if (!hasMagnitude && Math.abs(value) < 8) return null;

  const decimals = (digits.split('.')[1] || '').length;
  const grouped = m[2].indexOf(',') !== -1;
  return { prefix: m[1], suffix: m[3], value, decimals, grouped };
}

function pbFormatCount(n, spec) {
  let s = spec.decimals ? n.toFixed(spec.decimals) : String(Math.round(n));
  if (spec.grouped) {
    const parts = s.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    s = parts.join('.');
  }
  return spec.prefix + s + spec.suffix;
}

function pbAnimateCount(el) {
  if (el.dataset.counted === '1') return;
  const spec = pbParseCountable(el.textContent);
  if (!spec) { el.dataset.counted = '1'; return; }
  el.dataset.counted = '1';

  const DURATION = 620;
  const start = (typeof performance !== 'undefined' ? performance.now() : Date.now());
  // easeOutCubic: quick to start, settles rather than stopping dead
  const ease = t => 1 - Math.pow(1 - t, 3);

  const step = (now) => {
    const t = Math.min(1, ((now || Date.now()) - start) / DURATION);
    el.textContent = pbFormatCount(spec.value * ease(t), spec);
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = pbFormatCount(spec.value, spec);  // exact final value
  };
  requestAnimationFrame(step);
}

const PB_COUNT_SELECTOR = '.stat-card-num, .stat-box .num, .coverage-pct, .worldmap-stat-num';
const PB_REVEAL_SELECTOR = '#personalityDistSection, .feature-grid-section, .below-hero, .coverage-block, #methodologyAnchor';

function pbInView(el) {
  const r = el.getBoundingClientRect();
  if (r.width === 0 && r.height === 0) return false;   // display:none
  return r.top < (window.innerHeight || 0) && r.bottom > 0;
}

/* One pass over everything waiting on motion: reveal what has scrolled
   into view, start any counter that has. Idempotent, so it is safe to
   call from several triggers at once.

   `force` reveals everything regardless of position. It is the safety
   net: content is never allowed to stay hidden because an observer did
   not fire, and this runs on a timer whether or not anything else works. */
function pbSweep(force) {
  const reveals = document.querySelectorAll('.pb-reveal:not(.is-visible)');
  for (let i = 0; i < reveals.length; i++) {
    if (force || pbInView(reveals[i])) reveals[i].classList.add('is-visible');
  }
  const counters = document.querySelectorAll(PB_COUNT_SELECTOR);
  for (let i = 0; i < counters.length; i++) {
    const el = counters[i];
    if (el.dataset.counted === '1') continue;
    if (force) { el.dataset.counted = '1'; continue; }  // leave the real value alone
    if (pbInView(el)) pbAnimateCount(el);
  }
}

let pbSweepQueued = false;
function pbQueueSweep() {
  if (pbSweepQueued) return;
  pbSweepQueued = true;
  requestAnimationFrame(function () { pbSweepQueued = false; pbSweep(false); });
}

function pbInitMotion() {
  if (pbPrefersReducedMotion()) return;   // nothing hidden, nothing animated

  const sections = document.querySelectorAll(PB_REVEAL_SELECTOR);
  for (let i = 0; i < sections.length; i++) {
    // Anything already on screen is left alone rather than hidden and
    // faded back in - that reads as a flash on load.
    if (!pbInView(sections[i])) sections[i].classList.add('pb-reveal');
  }

  /* THREE triggers, deliberately redundant.

     IntersectionObserver is the efficient one, but it cannot be the only
     one: if it is unavailable, throttled, or silently fails to deliver
     (which it does in some embedded and headless contexts), every
     .pb-reveal section would stay at opacity 0 forever - the page would
     ship with its content invisible. Scroll covers that, and the timer
     covers the case where the user never scrolls at all. */
  if (typeof IntersectionObserver === 'function') {
    const io = new IntersectionObserver(function (entries) {
      let any = false;
      for (let i = 0; i < entries.length; i++) if (entries[i].isIntersecting) any = true;
      if (any) pbSweep(false);
    }, { threshold: 0.05 });
    const watched = document.querySelectorAll('.pb-reveal, ' + PB_COUNT_SELECTOR);
    for (let i = 0; i < watched.length; i++) io.observe(watched[i]);
  }

  window.addEventListener('scroll', pbQueueSweep, { passive: true });
  window.addEventListener('resize', pbQueueSweep, { passive: true });

  pbSweep(false);                          // whatever is already on screen
  setTimeout(function () { pbSweep(false); }, 400);   // after late renders
  setTimeout(function () { pbSweep(true); }, 2500);   // hard safety net
}

/* Re-run after a route change: the router swaps views, so a section that
   was not in the DOM on first load still gets its counters. */
function pbRefreshMotion() {
  if (pbPrefersReducedMotion()) return;
  pbSweep(false);
}
window.addEventListener('hashchange', function () { setTimeout(pbRefreshMotion, 60); });

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', pbInitMotion);
} else {
  pbInitMotion();
}


/* ============================================================
   POWER PERSONALITY HOSTS
   Created here rather than added to index.html, so the feature
   ships as script + stylesheet with no markup to paste. Both are
   inserted next to the elements they belong beside.
   ============================================================ */
function ensurePersonalityHosts() {
  // distribution, at the end of By the Numbers
  const analytics = document.getElementById('personalityDistSection') ||
                    document.getElementById('byTheNumbersSection');
  if (analytics && !document.getElementById('personalityDistribution')) {
    const d = document.createElement('div');
    d.id = 'personalityDistribution';
    d.className = 'pp-dist-block';
    analytics.appendChild(d);
  }
  // discovery chips, directly under the sector chips
  const sector = document.getElementById('sectorFilterChips');
  if (sector && !document.getElementById('personalityChips')) {
    const wrap = document.createElement('div');
    wrap.className = 'pp-chip-group';
    wrap.innerHTML = '<div class="pp-chip-label">Power Personality</div>' +
                     '<div class="filter-chips" id="personalityChips"></div>';
    sector.parentNode.insertBefore(wrap, sector.nextSibling);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ensurePersonalityHosts);
} else {
  ensurePersonalityHosts();
}
