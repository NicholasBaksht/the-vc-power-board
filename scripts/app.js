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

  const scaleEl = document.getElementById('scaleBar');
  if (!scaleEl) return; // stats now live in the homepage strip
  scaleEl.innerHTML = `
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
  /* Scopes the white/green palette to the homepage. Every other route
     keeps the dark product theme, which 31 stylesheets depend on. */
  document.body.classList.toggle('is-home', !!isHomepage);
  if (isHomepage && typeof renderHomepage === 'function') renderHomepage();
  // "By the Numbers" is homepage-flavored summary content, same
  // category as the hero/feature-grid above - it was never gated
  // by router() at all, so it's been rendering underneath every
  // single route (Relationship Graph, Family Tree, etc.) this
  // whole time, same root cause as the original homeIntro bug.
  /* "By the Numbers" was the old homepage's stats block. The rebuilt
     homepage carries its own statistics strip, so leaving this one in
     place would show two different stat sections on the same page. It
     is hidden on every route, not just the non-home ones. */
  const byTheNumbersEl = document.getElementById('personalityDistSection');
  if (byTheNumbersEl) byTheNumbersEl.style.display = 'none';
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
  const netView = document.getElementById('networkView');
  if (netView) netView.style.display = 'none';
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

  /* Broader Capital Sources. Added after the original router, so
     null-guarded for the same reason as the views above. */
  const csListEl = document.getElementById('capitalSourcesView');
  if (csListEl) csListEl.style.display = 'none';
  const csDetailEl = document.getElementById('capitalSourceDetailView');
  if (csDetailEl) csDetailEl.style.display = 'none';

  const signinViewEl = document.getElementById('signinView');
  if (signinViewEl) signinViewEl.style.display = 'none';
  const accountViewEl = document.getElementById('accountView');
  if (accountViewEl) accountViewEl.style.display = 'none';

 if (slug === 'network' || slug.startsWith('network/')) {
    const nv = document.getElementById('networkView');
    if (nv) {
      nv.style.display = 'block';
      if (slug === 'network') {
        if (typeof renderPeopleDiscovery === 'function') renderPeopleDiscovery();
      } else if (typeof renderNetworkProfile === 'function') {
        renderNetworkProfile(decodeURIComponent(slug.slice('network/'.length)));
      }
    }
  } else if (slug === 'capital-sources') {
    if (csListEl) {
      csListEl.style.display = 'block';
      if (typeof renderCapitalSources === 'function') renderCapitalSources();
    }
    window.scrollTo(0, 0);
  } else if (slug.startsWith('capital-source/')) {
    if (csDetailEl) {
      csDetailEl.style.display = 'block';
      if (typeof renderCapitalSource === 'function') {
        renderCapitalSource(decodeURIComponent(slug.slice('capital-source/'.length)));
      }
    }
    window.scrollTo(0, 0);
  } else if (slug === 'conflict-check') {
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
    document.body.classList.add('is-home');
    if (typeof renderHomepage === 'function') renderHomepage();
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


/* ============================================================
   HOMEPAGE - merged into app.js on purpose.

   It used to be scripts/homepage.js, which meant index.html needed a
   new <script> tag before this file. That edit did not get made, so
   renderHomepage() never ran: the old hero markup stayed in the page
   while the stylesheet that used to paint it had already been
   replaced, and the homepage rendered as unstyled text. Living inside
   app.js removes that failure mode - there is no load order left to
   get wrong.

   Two consequences worth knowing:
   - renderHomepage() assigns to #homeIntro.innerHTML, so whatever
     legacy markup sits inside that div (old hero, orbit, scale bar,
     featured firm, stamp, feature grid) is replaced automatically.
     No hand edit of index.html is needed to remove it.
   - pbhInstallNav() rewrites the header links for the same reason.
   ============================================================ */

/* The seven destinations, each an existing route. Rewritten from here
   rather than from markup so the header cannot drift out of sync with
   the homepage that depends on it. */
const PBH_NAV = [
  ['#firms', 'Firms'],
  ['#people', 'Partner Intelligence'],
  ['#capital-sources', 'Angels'],
  /* The route stays #network: #people already resolves to Partner
     Intelligence, and re-pointing it would break every existing link. */
  ['#network', 'Network'],
  ['#find-investors', 'Power Match'],
  ['#conflict-check', 'Conflict Check'],
  ['#pricing', 'Pricing'],
  ['#methodologyAnchor', 'Methodology']
];

function pbhInstallNav() {
  const nav = document.querySelector('.pb-nav');
  if (nav && !nav.dataset.pbhInstalled) {
    nav.innerHTML = PBH_NAV.map(function (n) {
      return '<a href="' + n[0] + '" class="nav-link">' + n[1] + '</a>';
    }).join('');
    nav.dataset.pbhInstalled = '1';
  }
  /* The primary action becomes Get Started. accounts.js owns the
     sign-in link's text and swaps it for the account name once signed
     in, so that one is left exactly as it is. */
  /* "Get Started" is the wrong ask once someone has an account. The
     destination is the saved-firms view, which is the authenticated
     surface that already exists and already persists to Supabase - no
     new behaviour is invented here. */
  const cta = document.querySelector('.pb-cta');
  if (cta) {
    const signedIn = typeof isSignedIn === 'function' && isSignedIn();
    cta.setAttribute('href', signedIn ? '#shortlist' : '#signin');
    cta.textContent = signedIn ? 'My shortlist' : 'Get Started';
  }
  if (typeof syncActiveNav === 'function') syncActiveNav();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', pbhInstallNav);
} else {
  pbhInstallNav();
}

function pbhEsc(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* The firm and partner the preview is built around. Both are real
   records; changing these two slugs re-points the whole preview
   without touching any copy, and if either slug ever stops
   resolving the block omits itself rather than inventing a stand-in. */
const PBH_EXAMPLE = {
  firmSlug: 'bain-capital-ventures',
  partnerSlug: 'ajay-agarwal',
  query: { sectors: ['Enterprise Software'], stages: ['Series B'], focus: 'enterprise' }
};

/* ---------- real numbers ---------- */

function pbhStats() {
  if (typeof firms === 'undefined') return null;
  const out = [{ n: firms.length, l: 'Firms tracked' }];

  if (typeof partnerProfiles !== 'undefined') {
    out.push({ n: Object.keys(partnerProfiles).length, l: 'Partners' });
  }
  if (typeof getCountryFromHQ === 'function') {
    const c = new Set(firms.map(function (f) { return getCountryFromHQ(f.hq); }).filter(Boolean));
    out.push({ n: c.size, l: 'Countries' });
  }
  /* Angels are only counted once the section actually holds any, so
     the strip never carries a zero to look symmetrical. */
  if (typeof CAPITAL_SOURCES !== 'undefined') {
    const all = Object.values(CAPITAL_SOURCES);
    const n = all.length;
    /* Label by what the records actually are. If the mix ever stops
       being purely angels, fall back to the section's own name rather
       than claiming a category the data does not support. */
    const allAngels = n > 0 && all.every(function (e) { return e.type === 'angel'; });
    if (n > 0) out.push({ n: n, l: allAngels ? 'Angels' : 'Capital sources' });
  }
  return out;
}

/* Runs the live scorer against the example query. The finder holds
   its inputs in module-level state that the real questionnaire also
   writes, so every value is saved and restored - otherwise loading
   the homepage would silently pre-fill a founder's Power Match. */
function pbhMatchExample() {
  if (typeof computeFinderMatches !== 'function' || typeof firms === 'undefined') return null;

  const saved = {
    sectors: typeof finderSectors !== 'undefined' ? finderSectors : null,
    stages: typeof finderStages !== 'undefined' ? finderStages : null,
    raise: typeof finderRaise !== 'undefined' ? finderRaise : null,
    region: typeof finderRegion !== 'undefined' ? finderRegion : null,
    focus: typeof finderFocus !== 'undefined' ? finderFocus : null,
    ai: typeof finderAI !== 'undefined' ? finderAI : null
  };

  let result = null;
  try {
    finderSectors = new Set(PBH_EXAMPLE.query.sectors);
    finderStages = new Set(PBH_EXAMPLE.query.stages);
    finderRaise = 'any';
    finderRegion = 'any';
    finderFocus = PBH_EXAMPLE.query.focus;
    finderAI = false;

    const all = computeFinderMatches();
    const hit = all.filter(function (m) { return m.firm.slug === PBH_EXAMPLE.firmSlug; })[0];
    if (hit) {
      result = {
        firm: hit.firm,
        score: hit.score,
        label: typeof getMatchQualityLabel === 'function'
          ? getMatchQualityLabel(hit.score) : null,
        reasons: (hit.reasons || []).filter(function (r) {
          return r.detail && r.detail !== 'Not specified';
        })
      };
    }
  } catch (err) {
    result = null;
  } finally {
    if (saved.sectors) finderSectors = saved.sectors;
    if (saved.stages) finderStages = saved.stages;
    if (saved.raise !== null) finderRaise = saved.raise;
    if (saved.region !== null) finderRegion = saved.region;
    if (saved.focus !== null) finderFocus = saved.focus;
    if (saved.ai !== null) finderAI = saved.ai;
  }
  return result;
}

function pbhPartnerExample() {
  if (typeof pbehCompute !== 'function' || typeof partnerProfiles === 'undefined') return null;
  const p = partnerProfiles[PBH_EXAMPLE.partnerSlug];
  if (!p) return null;
  let b = null;
  try { b = pbehCompute(PBH_EXAMPLE.partnerSlug); } catch (err) { return null; }
  if (!b) return null;
  return {
    slug: PBH_EXAMPLE.partnerSlug,
    name: p.name,
    title: p.title,
    total: b.n,
    sector: (b.sectorDist && b.sectorDist.length) ? b.sectorDist : null,
    stage: (b.stageDist && b.stageDist.length) ? b.stageDist : null,
    sectorN: (b.rows || []).filter(function (r) { return r.sector; }).length,
    stageN: (b.rows || []).filter(function (r) { return r.stage; }).length
  };
}

/* ---------- small pieces ---------- */

function pbhBar(label, pct, n) {
  return '<div class="pbh-bar">' +
    '<span class="pbh-bar-l">' + pbhEsc(label) + '</span>' +
    '<span class="pbh-bar-t"><span class="pbh-bar-f" style="width:' + pct + '%"></span></span>' +
    '<span class="pbh-bar-p">' + pct + '%</span>' +
    '</div>';
}

/* Four line icons, drawn rather than imported: a crosshair, a person,
   a bar chart and a shield. Deliberately literal - each one names the
   step it sits beside instead of decorating it. */
const PBH_ICONS = {
  target: '<circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="2.5"/><line x1="12" y1="1.5" x2="12" y2="4.5"/><line x1="12" y1="19.5" x2="12" y2="22.5"/><line x1="1.5" y1="12" x2="4.5" y2="12"/><line x1="19.5" y1="12" x2="22.5" y2="12"/>',
  person: '<circle cx="12" cy="8" r="3.75"/><path d="M4.5 20.5c0-3.9 3.4-6.5 7.5-6.5s7.5 2.6 7.5 6.5"/>',
  bars: '<line x1="3.5" y1="20.5" x2="20.5" y2="20.5"/><rect x="6" y="12" width="3.5" height="6"/><rect x="12" y="7.5" width="3.5" height="10.5"/><rect x="17" y="14" width="3.5" height="4"/>',
  shield: '<path d="M12 2.5 4.5 5.75v5.5c0 4.6 3.1 8.9 7.5 10.25 4.4-1.35 7.5-5.65 7.5-10.25v-5.5Z"/><line x1="12" y1="8.5" x2="12" y2="13"/><circle cx="12" cy="16" r="0.9"/>'
};

function pbhIcon(k) {
  return '<svg class="pbh-ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    PBH_ICONS[k] + '</svg>';
}


/* The signal strip. Rendered ONLY when computePowerAlerts() actually
   surfaces something, so the bar is never decoration waiting for
   content - on a quiet day the page simply starts at the hero.
   The alert engine already applies its own confidence and support
   thresholds; nothing is re-scored or re-worded here. */
function pbhSignalStrip() {
  if (typeof computePowerAlerts !== 'function') return '';
  let res = null;
  try { res = computePowerAlerts(); } catch (err) { return ''; }
  const alerts = (res && res.alerts) || [];
  if (!alerts.length) return '';
  const top = alerts[0];
  if (!top || !top.title) return '';
  const n = res.surfaced || alerts.length;
  /* Dismissal is remembered per signal, not per session: a new top
     alert brings the bar back, the same one stays gone. */
  let seen = null;
  try { seen = window.sessionStorage.getItem('pbhSignalDismissed'); } catch (err) {}
  if (seen && seen === top.id) return '';

  return '<div class="pbh-signal-row" data-signal-id="' + pbhEsc(top.id) + '">' +
    '<a class="pbh-signal" href="#powerAlerts">' +
      '<span class="pbh-signal-dot" aria-hidden="true"></span>' +
      '<span class="pbh-signal-n">' + n + ' signal' + (n === 1 ? '' : 's') + '</span>' +
      '<span class="pbh-signal-t">' + pbhEsc(top.title) + '</span>' +
      '<span class="pbh-signal-a">Read report &rarr;</span>' +
    '</a>' +
    '<button type="button" class="pbh-signal-x" aria-label="Dismiss this signal">&times;</button>' +
    '</div>';
}

/* ---------- sections ---------- */

function pbhHero() {
  const m = pbhMatchExample();
  const p = pbhPartnerExample();

  let h = '<section class="pbh-hero pbh-shell">' +
    '<div class="pbh-hero-l">' +
      '<div class="pbh-eyebrow">Data-backed &middot; Source-verified &middot; Founder-focused</div>' +
      '<h1 class="pbh-h1">Find the right VC firm.<br>Find the right partner.</h1>' +
      '<p class="pbh-sub">Power Board analyzes firms and individual investors using observed ' +
      'investment behavior, stage, sector, capabilities, and conflicts - so you can raise smarter.</p>' +
      '<div class="pbh-ctas">' +
        '<a href="#find-investors" class="pbh-btn pbh-btn-p" data-pbh-cta="power-match">Find My Investors</a>' +
        '<a href="#people" class="pbh-btn pbh-btn-s" data-pbh-cta="partner-intel">Explore Partner Intelligence</a>' +
      '</div>' +
      pbhStatsLine() +
    '</div>';

  h += '<div class="pbh-hero-r">';

  if (m) {
    /* The query is printed on the card so the score below it can be
       checked. A fit number with no visible question behind it is
       decoration; this one is a result. */
    h += '<div class="pbh-panel">' +
      '<div class="pbh-panel-bar">' +
        '<span class="pbh-panel-t">Your Power Match</span>' +
        '<span class="pbh-panel-q">Example search &middot; Enterprise Software &middot; Series B</span>' +
      '</div>' +
      '<div class="pbh-firm">' +
        '<div class="pbh-firm-top">' +
          '<div>' +
            '<a class="pbh-firm-n" href="#' + pbhEsc(m.firm.slug) + '">' + pbhEsc(m.firm.name) + '</a>' +
            (m.label ? '<div class="pbh-firm-q">' + pbhEsc(m.label) + '</div>' : '') +
          '</div>' +
          '<div class="pbh-score"><span class="pbh-score-n">' + m.score + '</span>' +
            '<span class="pbh-score-l">Firm fit</span></div>' +
        '</div>' +
        '<dl class="pbh-kv">' +
          (m.firm.hq ? '<div><dt>Headquarters</dt><dd>' + pbhEsc(m.firm.hq) + '</dd></div>' : '') +
          ((m.firm.sectors || []).length
            ? '<div><dt>Top sector</dt><dd>' + pbhEsc(m.firm.sectors[0]) + '</dd></div>' : '') +
          (m.firm.founded ? '<div><dt>Founded</dt><dd>' + pbhEsc(m.firm.founded) + '</dd></div>' : '') +
          (m.firm.aum ? '<div><dt>AUM</dt><dd>' + pbhEsc(m.firm.aum) + '</dd></div>' : '') +
        '</dl>' +
      '</div>';

    if (p) {
      const topSec = p.sector ? p.sector[0] : null;
      const topStg = p.stage ? p.stage[0] : null;
      h += '<div class="pbh-partner">' +
        '<div class="pbh-partner-h">Best-fit partner</div>' +
        '<div class="pbh-partner-top">' +
          '<a class="pbh-partner-n" href="#partner/' + pbhEsc(p.slug) + '">' + pbhEsc(p.name) + '</a>' +
          (p.title ? '<span class="pbh-partner-r">' + pbhEsc(p.title) + '</span>' : '') +
        '</div>' +
        '<div class="pbh-partner-facts">' +
          (topSec ? '<div><span>Observed sector</span><strong>' + pbhEsc(topSec.label) +
                    ' &middot; ' + topSec.pct + '%</strong></div>' : '') +
          (topStg ? '<div><span>Observed stage</span><strong>' + pbhEsc(topStg.label) +
                    ' &middot; ' + topStg.pct + '%</strong></div>' : '') +
          '<div><span>Attributed investments</span><strong>' + p.total + '</strong></div>' +
        '</div>' +
        '<a class="pbh-partner-link" href="#partner/' + pbhEsc(p.slug) + '">View Partner Intelligence &rarr;</a>' +
        '</div>';
    }
    h += '</div>';
  }

  h += '</div></section>';
  return h;
}

/* Stated focus and observed behaviour side by side. The whole point
   of the section is that the two columns can disagree, so they are
   never merged and the right-hand side always carries its denominator. */
function pbhBehavior() {
  const p = pbhPartnerExample();
  if (!p || (!p.sector && !p.stage)) return '';
  const firm = (typeof firms !== 'undefined')
    ? firms.filter(function (f) { return f.slug === PBH_EXAMPLE.firmSlug; })[0] : null;
  const stated = firm && (firm.sectors || []).length ? firm.sectors : null;

  let h = '<section class="pbh-sec pbh-beh pbh-shell">' +
    '<div class="pbh-sec-h">' +
      '<h2 class="pbh-h2">Stated focus is not observed behavior.</h2>' +
      '<p class="pbh-sec-p">What a firm says it invests in and what its partners have actually ' +
      'been sourced doing are different claims, so Power Board never merges them.</p>' +
    '</div>' +
    '<div class="pbh-beh-grid">';

  h += '<div class="pbh-col">' +
    '<div class="pbh-col-h">Stated focus</div>' +
    '<div class="pbh-col-s">' + pbhEsc(firm ? firm.name : '') + ', self-described</div>';
  if (stated) {
    h += '<ul class="pbh-stated">' + stated.map(function (s) {
      return '<li>' + pbhEsc(s) + '</li>';
    }).join('') + '</ul>';
  }
  h += '<div class="pbh-note">Taken from the firm&rsquo;s own material. Not derived from any deal.</div>' +
    '</div>';

  h += '<div class="pbh-col">' +
    '<div class="pbh-col-h">Observed behavior</div>' +
    '<div class="pbh-col-s">' + pbhEsc(p.name) + ', from sourced investments</div>';
  if (p.sector) {
    h += '<div class="pbh-bar-set">' +
      p.sector.slice(0, 3).map(function (d) { return pbhBar(d.label, d.pct, d.n); }).join('') +
      '<div class="pbh-basis">Based on ' + p.sectorN + ' of ' + p.total +
      ' attributable investments with a known sector</div></div>';
  }
  if (p.stage) {
    h += '<div class="pbh-bar-set">' +
      p.stage.slice(0, 3).map(function (d) { return pbhBar(d.label, d.pct, d.n); }).join('') +
      '<div class="pbh-basis">Based on ' + p.stageN + ' of ' + p.total +
      ' attributable investments with a known stage</div></div>';
  }
  h += '</div></div></section>';
  return h;
}

/* The statistics used to be their own full-width band. They are one
   line of context, not a section, so they now sit under the hero CTAs
   where they qualify the claim above them instead of interrupting the
   page with a fourth horizontal rule. */
function pbhStatsLine() {
  const s = pbhStats();
  if (!s || !s.length) return '';
  return '<div class="pbh-stats">' + s.map(function (x) {
    return '<span class="pbh-stat"><strong>' +
      String(x.n).replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
      '</strong> ' + x.l.toLowerCase() + '</span>';
  }).join('') + '</div>';
}

function pbhHow() {
  const steps = [
    ['target', 'Find the firm',
     'Power Match identifies firms whose observed behavior aligns with your startup.', '#find-investors'],
    ['person', 'Find the person',
     'Best-Fit Partner identifies the individuals inside those firms most relevant to your company.', '#people'],
    ['bars', 'Understand why',
     'Observed Investment Behavior and source-backed research explain the match.', '#methodologyAnchor'],
    ['shield', 'Avoid mistakes',
     'Conflict Check surfaces relevant portfolio and relationship risks.', '#conflict-check']
  ];
  return '<section class="pbh-sec pbh-how pbh-shell">' +
    '<div class="pbh-sec-h"><h2 class="pbh-h2">How Power Board works</h2></div>' +
    '<div class="pbh-how-grid">' + steps.map(function (s, i) {
      return '<a class="pbh-step" href="' + s[3] + '">' +
        '<div class="pbh-step-top">' + pbhIcon(s[0]) +
          '<span class="pbh-step-n">' + (i + 1) + '</span></div>' +
        '<div class="pbh-step-t">' + s[1] + '</div>' +
        '<p class="pbh-step-d">' + s[2] + '</p>' +
        '</a>';
    }).join('') + '</div></section>';
}

function pbhFinalCta() {
  return '<section class="pbh-final pbh-shell">' +
    '<h2 class="pbh-h2">Find the investors actually worth your time.</h2>' +
    '<p class="pbh-sec-p">Start your search and connect with the right investors inside the right firms.</p>' +
    '<div class="pbh-ctas">' +
      '<a href="#find-investors" class="pbh-btn pbh-btn-p" data-pbh-cta="power-match-final">Find My Investors</a>' +
    '</div></section>';
}

/* ---------- entry point ---------- */

function renderHomepage() {
  const host = document.getElementById('homeIntro');
  if (!host) return;
  const strip = pbhSignalStrip();
  host.innerHTML =
    '<div class="pbh">' +
      (strip ? '<div class="pbh-shell">' + strip + '</div>' : '') +
      pbhHero() +
      pbhBehavior() +
      pbhHow() +
      pbhFinalCta() +
    '</div>';

  /* Reuses the existing funnel event rather than inventing one. The
     event-name CHECK constraint in Postgres rejects unknown names, so
     a new event here would be dropped silently at the database. */
  if (typeof pbTrack === 'function') {
    host.querySelectorAll('[data-pbh-cta]').forEach(function (a) {
      a.addEventListener('click', function () {
        pbTrack('power_match_cta_clicked', { props: { source: a.dataset.pbhCta } });
      });
    });
  }
}


/* Strips two leftovers from the footer that index.html still carries:
   the "How to use this" operating note and the "Built by a future VC"
   signature line. Done here rather than in the markup so no hand edit
   of index.html is required.

   The Terms of Service and Privacy Policy links are deliberately kept.
   Power Board publishes a dated privacy policy that the analytics code
   is written to keep true, so removing the site-wide link to it would
   be a compliance regression, not a tidy-up. */

/* Rebuilds the footer as a real index of the product. Every href below
   is a route that already resolves - Terms and Privacy are the two
   legal pages that genuinely exist and their links are carried over
   rather than reinvented. Account row follows the session. */
function pbhBuildFooter() {
  const foot = document.getElementById('siteFooter');
  if (!foot) return;
  const signedIn = typeof isSignedIn === 'function' && isSignedIn();
  const col = function (title, links) {
    return '<div><div class="pbh-foot-h">' + title + '</div><ul>' +
      links.map(function (l) {
        return '<li><a href="' + l[0] + '">' + l[1] + '</a></li>';
      }).join('') + '</ul></div>';
  };
  foot.className = 'pbh-foot';
  foot.innerHTML =
    '<div class="pbh-shell">' +
      '<div class="pbh-foot-in">' +
        '<div>' +
          '<div class="pbh-foot-brand">Power Board</div>' +
          '<p class="pbh-foot-note">Firm and partner research for founders raising ' +
          'venture capital. Every claim on the board is traced to a public source.</p>' +
        '</div>' +
        col('Product', [
          ['#firms', 'Firms'],
          ['#people', 'Partner Intelligence'],
          ['#capital-sources', 'Angels'],
          ['#network', 'Network'],
          ['#find-investors', 'Power Match'],
          ['#conflict-check', 'Conflict Check']
        ]) +
        col('Research', [
          ['#methodologyAnchor', 'Methodology'],
          ['#pricing', 'Pricing']
        ]) +
        col('Account', signedIn
          ? [['#account', 'Your account'], ['#shortlist', 'Saved firms']]
          : [['#signin', 'Sign in'], ['#signin', 'Create account']]) +
      '</div>' +
      '<div class="pbh-foot-base">' +
        '<span>&copy; ' + new Date().getFullYear() + ' The VC Power Board</span>' +
        '<span class="pbh-foot-legal">' +
          '<a href="terms/">Terms of Service</a>' +
          '<a href="privacy/">Privacy Policy</a>' +
        '</span>' +
      '</div>' +
    '</div>';
}

/* Dismissing a signal removes the row and remembers which one, so it
   does not reappear on the next route change within the session. */
document.addEventListener('click', function (e) {
  const btn = e.target.closest && e.target.closest('.pbh-signal-x');
  if (!btn) return;
  e.preventDefault();
  const row = btn.closest('.pbh-signal-row');
  if (!row) return;
  try { window.sessionStorage.setItem('pbhSignalDismissed', row.dataset.signalId || '1'); } catch (err) {}
  row.remove();
});

function pbhCleanFooter() {
  const foot = document.getElementById('siteFooter');
  if (!foot || foot.dataset.pbhCleaned) return;
  foot.querySelectorAll('p, .sig').forEach(function (el) { el.remove(); });
  foot.dataset.pbhCleaned = '1';
}

/* Removes the Power Personalities distribution block outright.

   It was previously only hidden, from inside router(). That is a
   weaker guarantee than it looks: the hide depends on router()
   reaching that line on every path, and ensurePersonalityHosts()
   still appends a live host into the section afterwards. Deleting
   the node ends the question - renderPersonalityDistribution()
   already returns early when its host is missing, so nothing
   downstream needs a matching change.

   The personality DATA is untouched. It still drives the Power
   Personality filter chips on Firms and the personality card on each
   firm's own profile; only the aggregate chart is gone. */
/* Network needs a view container. index.html is not hand-edited
   in this project, so it is created next to the other view divs on
   first load rather than added to the markup. */
/* network.js carries the Network section. index.html is not hand-edited in
   this project, so the script is attached here on first load. */
function pbhEnsureNetworkScript() {
  if (document.getElementById('pbnJs')) return;
  const t = document.createElement('script');
  t.id = 'pbnJs'; t.src = 'scripts/network.js';
  /* The script loads asynchronously, so a direct hit on #network runs
     the router before these functions exist. Re-dispatch the current
     route once the file is in. */
  t.onload = function () {
    const slug = (window.location.hash || '').replace('#', '');
    if (slug === 'network' && typeof renderPeopleDiscovery === 'function') {
      renderPeopleDiscovery();
    } else if (slug.indexOf('network/') === 0 && typeof renderNetworkProfile === 'function') {
      renderNetworkProfile(decodeURIComponent(slug.slice('network/'.length)));
    }
  };
  document.head.appendChild(t);
}

function pbhEnsureNetworkHost() {
  if (document.getElementById('networkView')) return;
  const anchor = document.getElementById('capitalSourcesView');
  if (!anchor || !anchor.parentNode) return;
  const d = document.createElement('div');
  d.id = 'networkView';
  d.style.display = 'none';
  anchor.parentNode.insertBefore(d, anchor);
}

function pbhRemoveLegacyBlocks() {
  const dist = document.getElementById('personalityDistSection');
  if (dist) dist.remove();
}

function pbhCleanChrome() {
  pbhEnsureNetworkScript();
  pbhEnsureNetworkHost();
  pbhRemoveLegacyBlocks();
  pbhBuildFooter();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', pbhCleanChrome);
} else {
  pbhCleanChrome();
}
/* Re-run per route: both blocks live outside the view containers, so
   a later render could otherwise reintroduce them. */
window.addEventListener('hashchange', pbhCleanChrome);
