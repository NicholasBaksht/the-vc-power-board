/* ============================================================
   FIRM-CARDS.JS
   The main rankings list renderer (renderFirms) and the live
   price-input editing feature on each firm card's holdings table.
   ============================================================ */
/* An AUM value is usually "<figure> (<qualifier>)". Rendering the whole
   string in .num sets a sentence in 20px mono, which is what made the
   NVentures cell 742px wide and blew the page out horizontally.

   Splitting keeps every character of the data - the qualifier moves to
   a small line underneath instead of being deleted. Values with no
   parenthetical are returned unchanged. */
function splitAum(aum) {
  const raw = String(aum == null ? '' : aum);
  const m = raw.match(/^([^(]+?)\s*\((.+)\)\s*$/);
  if (!m) return '<div class="num">' + raw + '</div>';
  return '<div class="num">' + m[1].trim() + '</div>' +
         '<div class="qual">' + m[2].trim() + '</div>';
}

/* Builds one tile. The whole card links to the firm profile, except
   the Save / Compare controls, which sit OUTSIDE the anchor - a
   <button> nested inside an <a> is invalid HTML and swallows clicks. */
function firmTileHtml(firm) {
  const logo = (typeof FIRM_LOGOS !== 'undefined' && FIRM_LOGOS) ? FIRM_LOGOS[firm.slug] : null;
  let art;
  if (logo) {
    // darkInk logos get a light chip; without it they vanish into the
    // tile. 133 of 273 need this, so it is the common path, not an edge.
    const chip = logo[1] ? ' is-dark-ink' : '';
    art = '<div class="firm-tile-art' + chip + '">' +
            '<img src="assets/logos/' + firm.slug + '.' + logo[0] + '" alt="" loading="lazy" decoding="async">' +
          '</div>';
  } else {
    // No logo published by this firm. A wordmark reads as designed;
    // an empty box reads as broken.
    art = '<div class="firm-tile-art firm-tile-art-mark">' +
            '<span class="firm-tile-mark">' + (firm.short || firm.name) + '</span>' +
          '</div>';
  }

  const saved = getShortlist().has(firm.slug);
  return '<article class="firm-tile" data-slug="' + firm.slug + '">' +
    '<a class="firm-tile-link" href="#' + firm.slug + '">' +
      art +
      '<span class="firm-tile-rank">' + String(firm.rank).padStart(2, '0') + '</span>' +
      '<div class="firm-tile-body">' +
        '<div class="firm-tile-name">' + firm.name + '</div>' +
        '<div class="firm-tile-meta">' + splitAumShort(firm.aum) + ' &middot; ' + firm.hq + '</div>' +
        '<div class="firm-tile-org">' + orgTileLine(firm) + '</div>' +
      '</div>' +
    '</a>' +
    '<div class="firm-tile-actions">' +
      '<button class="shortlist-btn' + (saved ? ' saved' : '') + '" data-slug="' + firm.slug + '" ' +
              'title="' + (saved ? 'Saved to shortlist' : 'Save to shortlist') + '">' +
        (saved ? '' : '') +
      '</button>' +
      '<label class="compare-check">' +
        '<input type="checkbox" class="compare-checkbox" data-slug="' + firm.slug + '"' +
          (compareSet.has(firm.slug) ? ' checked' : '') + '> Compare' +
      '</label>' +
    '</div>' +
  '</article>';
}

/* The tile shows only the headline figure. The full AUM string, with
   its qualifier, still appears in full on the firm profile. */
function splitAumShort(aum) {
  const raw = String(aum == null ? '' : aum);
  const m = raw.match(/^([^(]+?)\s*\(.+\)\s*$/);
  const head = (m ? m[1] : raw).trim();
  return head.length > 26 ? head.slice(0, 25) + '\u2026' : head;
}

/* The tile's corporate/government/affiliate line. Reads data-orgs.js;
   no firm or parent name is written here. The wrapper div renders on
   EVERY tile, even when empty, so that badged and unbadged tiles keep
   identical heights and the grid stays on a single baseline. */
function orgTileLine(firm) {
  if (typeof orgBadge !== 'function') return '';
  const b = orgBadge(firm);
  if (!b) return '';
  return '<span class="org-chip org-chip-' + b.kind + '">' + b.label + '</span>' +
         '<span class="org-chip-parent">' + b.parent + '</span>';
}

function renderFirms() {
  const container = document.getElementById('firmsContainer');
  const noResults = document.getElementById('noResults');

  scrollToResultsIfNeeded();

  const visibleFirms = firms.filter(f => matchesFilter(f) && matchesSearch(f));
  const empty = visibleFirms.length === 0;
  noResults.style.display = empty ? 'block' : 'none';

  /* An empty search is a signal, not a dead end: it tells us which firm
     someone expected to find. Rather than "no results", ask them. */
  if (empty && typeof frRenderNoResults === 'function') {
    frRenderNoResults(noResults, typeof searchTerm === 'string' ? searchTerm : '');
  }

  // The standing "request to be listed" entry point, built once.
  if (typeof frRenderListingCta === 'function') {
    let cta = document.getElementById('frListingCta');
    if (!cta && container && container.parentNode) {
      cta = document.createElement('div');
      cta.id = 'frListingCta';
      cta.className = 'fr-cta-wrap';
      container.parentNode.insertBefore(cta, container.nextSibling);
    }
    frRenderListingCta(cta);
  }

  // One innerHTML write rather than 344 appendChild calls.
  container.className = 'firm-tile-grid';
  container.innerHTML = visibleFirms.map(firmTileHtml).join('');

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
