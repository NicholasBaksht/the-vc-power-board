/* ============================================================
   COMPANIES-INDEX.JS
   The browsable list of companies behind the #companies route.

   WHY THIS EXISTS
   Power Board has held canonical Company records for a while and
   generates a static page for each qualifying one at
   /company/<slug>/. Nothing linked to them. There was no nav item,
   no index, and the only way into a company was to already be
   looking at a firm, a partner or the relationship graph. This is
   the missing front door.

   WHAT IT LINKS TO, AND WHY NOT THE IN-APP ROUTE
   Cards link to the STATIC page at /company/<slug>/, not to the
   in-app #company/<slug> route. The in-app route is served by
   renderCompanyProfile(), which reads getAllTrackedCompanies() -
   firms' PUBLIC HOLDINGS only. Point it at a private company and
   it renders "Company not found". The static page is built from
   cmpBuildBackIndex() and carries the deals, holdings, partner and
   angel attributions, so it is the real profile.

   ELIGIBILITY IS COPIED FROM THE GENERATOR ON PURPOSE
   ciEligible() reproduces generate-seo-pages.js exactly: skip
   review: keys, require cmpEvidenceCount >= 2, sort by name, and
   apply the same collision suffix when two names slugify the same
   way. If the two ever drift, this index links to pages that 404 -
   so they are written to be read side by side.

   HELD NAMES ARE LISTED BUT NOT LINKED. Nine strings are two
   different companies each and are held in data-company-aliases.js.
   They have no page and must not get one, but hiding them would
   misrepresent what is in the data, so they are shown, unlinked,
   with the reason.
   ============================================================ */

function ciEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* The companies that have a static page, with the slug that page
   actually lives at. Mirrors generate-seo-pages.js. */
function ciEligible() {
  if (typeof cmpBuildBackIndex !== 'function' || typeof cmpEvidenceCount !== 'function') return [];
  const backIdx = cmpBuildBackIndex();
  const eligible = Object.keys(backIdx)
    .filter(k => k.indexOf('review:') !== 0)
    .map(k => backIdx[k])
    .filter(c => cmpEvidenceCount(c) >= 2)
    .sort((a, b) => a.name.localeCompare(b.name));

  const usedSlugs = {};
  const out = [];
  eligible.forEach(c => {
    let slug = cmpSlug(c.name);
    if (!slug) return;
    if (usedSlugs[slug]) {
      slug = slug + '-' + c.id.slice(0, 8);
      if (usedSlugs[slug]) return;
    }
    usedSlugs[slug] = c.id;
    out.push({ c: c, slug: slug });
  });
  return out;
}

/* Names our own data holds that are two different companies.

   Driven off COMPANY_ALIASES rather than off the back index, because
   the back index keys held names by RAW STRING - deliberately, so two
   firms holding two different Enigmas never merge. Reading it directly
   would list "BEGIN" and "Begin", or "EDGE" and "Edge", as if they
   were separate rulings. One ruling, one chip.

   The row count is summed across every spelling of that name, and a
   held name with nothing pointing at it is not shown at all. */
function ciHeld() {
  if (typeof COMPANY_ALIASES === 'undefined' || !COMPANY_ALIASES) return [];
  if (typeof cmpBuildBackIndex !== 'function' || typeof cmpNorm !== 'function') return [];
  const backIdx = cmpBuildBackIndex();

  const rowsByKey = {};
  Object.keys(backIdx).filter(k => k.indexOf('review:') === 0).forEach(k => {
    const c = backIdx[k];
    const norm = k.split(':')[1];
    if (!norm) return;
    rowsByKey[norm] = (rowsByKey[norm] || 0) +
      c.deals.length + c.holdings.length + c.partners.length + c.angels.length;
  });

  const seen = {};
  return COMPANY_ALIASES
    .filter(r => r && r.status === 'NEEDS_REVIEW')
    .map(r => ({ name: r.canonicalName || r.alias, key: r.normalizedAlias || cmpNorm(r.alias) }))
    .filter(x => {
      if (!x.key || seen[x.key] || !rowsByKey[x.key]) return false;
      seen[x.key] = 1;
      return true;
    })
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(x => ({ name: x.name, rows: rowsByKey[x.key] }));
}

/* Sector and status come from the canonical record when there is
   one. Neither is inferred: a company with no entity yet shows
   neither rather than a guess. */
function ciFacts(entry) {
  const rec = (typeof COMPANIES !== 'undefined' && COMPANIES) ? COMPANIES[entry.c.id] : null;
  let sector = rec && rec.sector ? rec.sector : null;
  if (!sector && typeof COMPANY_SECTORS !== 'undefined' && COMPANY_SECTORS[entry.c.id]) {
    sector = COMPANY_SECTORS[entry.c.id].sector || null;
  }
  return {
    sector: sector,
    status: rec && rec.status && rec.status !== 'unknown' ? rec.status : null,
    hasRecord: !!rec
  };
}

/* What the site can actually show about this company, in the order
   a reader cares about. Counts only, never a claim about the
   company itself. */
function ciEvidenceLine(c) {
  const bits = [];
  if (c.deals.length) bits.push(c.deals.length + ' round' + (c.deals.length === 1 ? '' : 's'));
  if (c.holdings.length) bits.push(c.holdings.length + ' public holding' + (c.holdings.length === 1 ? '' : 's'));
  if (c.partners.length) bits.push(c.partners.length + ' partner' + (c.partners.length === 1 ? '' : 's'));
  if (c.angels.length) bits.push(c.angels.length + ' angel' + (c.angels.length === 1 ? '' : 's'));
  return bits.join(' &middot; ');
}

let _ciAll = null;
let _ciHeld = null;
let ciSearchTerm = '';

function ciCards(list) {
  if (!list.length) {
    return '<div class="ci-empty">No company matches that search. ' +
           'The index covers companies with at least two kinds of evidence on this site, ' +
           'so a company can be in the data without appearing here.</div>';
  }
  return '<div class="ci-grid">' + list.map(function (entry) {
    const c = entry.c;
    const f = ciFacts(entry);
    return '<a class="ci-card" href="/company/' + ciEsc(entry.slug) + '/">' +
      (f.sector ? '<div class="ci-card-sector">' + ciEsc(f.sector) + '</div>' : '<div class="ci-card-sector">&nbsp;</div>') +
      '<div class="ci-card-name">' + ciEsc(c.name) + '</div>' +
      '<div class="ci-card-meta">' + ciEvidenceLine(c) + '</div>' +
      (f.status ? '<div class="ci-card-status">' + ciEsc(f.status) + '</div>' : '') +
      '</a>';
  }).join('') + '</div>';
}

function ciApplyFilter() {
  const grid = document.getElementById('ciResults');
  if (!grid || !_ciAll) return;
  const q = ciSearchTerm.trim().toLowerCase();
  const list = !q ? _ciAll : _ciAll.filter(function (entry) {
    const f = ciFacts(entry);
    return entry.c.name.toLowerCase().indexOf(q) !== -1 ||
           (f.sector && f.sector.toLowerCase().indexOf(q) !== -1);
  });
  const countEl = document.getElementById('ciCount');
  if (countEl) {
    countEl.textContent = q
      ? list.length + ' of ' + _ciAll.length + ' companies'
      : _ciAll.length + ' companies';
  }
  grid.innerHTML = ciCards(list);
}

function renderCompaniesIndex() {
  const host = document.getElementById('companiesIndexView');
  if (!host) return;

  _ciAll = ciEligible();
  _ciHeld = ciHeld();

  const totalEntities = (typeof COMPANIES !== 'undefined' && COMPANIES)
    ? Object.keys(COMPANIES).length : 0;
  /* Distinct firms reachable through these companies. Every eligible
     company carries a researched record today, so counting those
     instead would print the same number twice. */
  const firmSet = {};
  _ciAll.forEach(function (e) { (e.c.firms || []).forEach(function (f) { firmSet[f] = 1; }); });
  const firmCount = Object.keys(firmSet).length;

  let h = '<div class="ci-wrap">' +
    '<div class="ci-kicker">Companies</div>' +
    '<h1 class="ci-h1">Every company the evidence reaches.</h1>' +
    '<p class="ci-sub">A company appears here when at least two different kinds of ' +
    'evidence on this site point at it - a tracked round, a disclosed public holding, ' +
    'a named partner attribution or a named angel attribution. One mention is not a ' +
    'profile. That gate is why this list is shorter than the number of companies ' +
    'named across the site.</p>' +
    '<p class="ci-sub">Power Board holds <strong>' + totalEntities + '</strong> researched ' +
    'company records in total. The rest are named once, or are companies we researched ' +
    'before the evidence caught up with them.</p>';

  h += '<div class="ci-stats">' +
    '<div class="ci-stat"><div class="n">' + _ciAll.length + '</div><div class="l">With a profile</div></div>' +
    '<div class="ci-stat"><div class="n">' + totalEntities + '</div><div class="l">Company records</div></div>' +
    '<div class="ci-stat"><div class="n">' + firmCount + '</div><div class="l">Firms represented</div></div>' +
    (_ciHeld.length
      ? '<div class="ci-stat"><div class="n">' + _ciHeld.length + '</div><div class="l">Names held</div></div>'
      : '') +
    '</div>';

  h += '<div class="ci-toolbar">' +
    '<input type="search" id="ciSearch" class="ci-search" ' +
    'placeholder="Search by company or sector" aria-label="Search companies">' +
    '<span class="ci-count" id="ciCount">' + _ciAll.length + ' companies</span>' +
    '</div>';

  h += '<div id="ciResults">' + ciCards(_ciAll) + '</div>';

  if (_ciHeld.length) {
    h += '<h2 class="ci-h2">Names we will not resolve</h2>' +
      '<p class="ci-sub">Each of these is used by two different companies in our own ' +
      'sources, and which one a given firm backed has not been established. Merging them ' +
      'would combine two unrelated investor lists, so they are listed without a profile ' +
      'rather than guessed at.</p>' +
      '<div class="ci-held">' + _ciHeld.map(function (x) {
        return '<span class="ci-held-item">' + ciEsc(x.name) +
          '<span class="ci-held-n">' + x.rows + ' record' + (x.rows === 1 ? '' : 's') +
          '</span></span>';
      }).join('') + '</div>';
  }

  h += '</div>';
  host.innerHTML = h;

  const searchEl = document.getElementById('ciSearch');
  if (searchEl) {
    searchEl.addEventListener('input', function () {
      ciSearchTerm = this.value;
      ciApplyFilter();
    });
  }
}
