/* ============================================================
   SEARCH.JS
   The firm search: search term state, the matchesSearch()
   predicate, and the input listeners.

   There is ONE search system. The hero box and the explorer box
   are two views of the same searchTerm and the same predicate -
   not a second implementation. They mirror each other, so a term
   typed in the hero is already in the explorer box on arrival.

   (People-directory and Portfolio-Explorer search boxes live in
   people-portfolio.js instead, since they're page-specific and
   tightly coupled to those renderers - see the Phase 2 summary.)
   ============================================================ */
// Current search text and active filters - all start "empty"/off
let searchTerm = '';

function matchesSearch(firm) {
  if (searchTerm === '') return true;
  const term = searchTerm.toLowerCase();
  if (firm.name.toLowerCase().includes(term)) return true;
  return firm.holdings.some(h =>
    h.name.toLowerCase().includes(term) || h.ticker.toLowerCase().includes(term)
  );
}

// Every id that drives the firm search. Adding a third box later
// means adding its id here and nothing else.
const SEARCH_INPUT_IDS = ['searchInput', 'heroSearchInput'];

/* Single writer for searchTerm. Mirrors the value into every other
   search box so the two never disagree, then re-renders once. */
function setSearchTerm(value, sourceEl) {
  searchTerm = value;
  SEARCH_INPUT_IDS.forEach(function (id) {
    const el = document.getElementById(id);
    if (el && el !== sourceEl && el.value !== value) el.value = value;
  });
  if (typeof renderFirms === 'function') renderFirms();
}

/* The hero and the firm grid live on different routes - the hero is
   the homepage, the grid is #firms. So typing in the hero has to move
   the user to the grid, carrying the term with it. We switch on the
   first non-empty keystroke and then keep filtering in place, and hand
   focus to the explorer box with the caret at the end so it reads as
   one continuous search rather than a jump. */
function wireHeroSearch() {
  const hero = document.getElementById('heroSearchInput');
  if (!hero) return;

  const goToFirms = () => {
    if (location.hash === '#firms') return;
    location.hash = '#firms';
    // after the router swaps views, move the caret into the explorer box
    setTimeout(function () {
      const box = document.getElementById('searchInput');
      if (!box) return;
      box.focus();
      const n = box.value.length;
      try { box.setSelectionRange(n, n); } catch (e) { /* not all inputs support it */ }
    }, 0);
  };

  hero.addEventListener('input', function (e) {
    setSearchTerm(e.target.value, e.target);
    if (e.target.value.trim() !== '') goToFirms();
  });

  // Enter should work even if the field is empty - it means "show me the board"
  const form = hero.closest('form');
  if (form) form.addEventListener('submit', function (e) { e.preventDefault(); goToFirms(); });
}

/* Placeholder text carries the firm count, so it must come from the
   dataset rather than being typed into the HTML - same rule as every
   other count on the site. */
function applySearchPlaceholders() {
  const n = (typeof canonicalFirmCount === 'function' && canonicalFirmCount()) || null;
  if (!n) return;
  const hero = document.getElementById('heroSearchInput');
  if (hero) hero.placeholder = 'Search ' + n + ' VC firms, portfolio companies, or tickers…';
  const box = document.getElementById('searchInput');
  if (box) box.placeholder = 'Search ' + n + ' firms by name, company, or ticker…';
}

// Explorer search box - filters live as you type
(function () {
  const box = document.getElementById('searchInput');
  if (box) box.addEventListener('input', function (e) { setSearchTerm(e.target.value, e.target); });
  wireHeroSearch();
  applySearchPlaceholders();
})();
