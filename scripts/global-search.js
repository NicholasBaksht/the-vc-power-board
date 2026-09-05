/* ============================================================
   GLOBAL-SEARCH.JS
   Phase 2B. One search across Firms, Partners, Angels, Companies
   and Network People.

   It owns no matching, no ranking and no identity logic. All of
   that is discovery-core.js, which Power Screener reads from too -
   the point of 2A was that these are not two search engines.

   ENTRY POINT is a command palette rather than a header input.
   The header measured 74px of spare width at 1440 signed in, and
   an always-visible input would have spent all of it and pushed the
   nav back onto a second row. A trigger button costs 34px, and
   Cmd+K works from anywhere, which is what this kind of research
   tool is used with anyway.

   NETWORK RESULTS ARE FETCHED, NEVER INDEXED. Profiles are private
   until published and can be moderated at any moment, so baking
   them into a shared client index would be a stale permission
   decision. They are queried per search under exactly the filters
   the Network directory itself uses - is_published, active
   moderation, and the public column projection - and only for a
   signed-in viewer. Nothing else can appear.
   ============================================================ */

const GS_DEBOUNCE_MS = 150;
const GS_QUICK_PER_TYPE = 4;

let gsTimer = null;
let gsLastQuery = '';
let gsActiveIndex = -1;
let gsFlatResults = [];
let gsNetworkCache = { q: null, docs: [] };

/* ---------- open / close ---------- */

function gsOpen(prefill) {
  let el = document.getElementById('gsOverlay');
  if (!el) { gsInstall(); el = document.getElementById('gsOverlay'); }
  if (!el) return;
  el.hidden = false;
  document.body.classList.add('gs-open');
  const input = document.getElementById('gsInput');
  if (input) {
    if (prefill != null) input.value = prefill;
    input.focus();
    input.select();
    gsRun(input.value);
  }
  if (typeof pbTrack === 'function') pbTrack('global_search_started');
}

function gsClose() {
  const el = document.getElementById('gsOverlay');
  if (!el) return;
  el.hidden = true;
  document.body.classList.remove('gs-open');
  gsActiveIndex = -1;
}

/* ---------- markup ---------- */

function gsEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function gsInstall() {
  if (document.getElementById('gsOverlay')) return;
  const el = document.createElement('div');
  el.id = 'gsOverlay';
  el.className = 'gs-overlay';
  el.hidden = true;
  el.innerHTML =
    '<div class="gs-backdrop" data-gs-dismiss="1"></div>' +
    '<div class="gs-panel" role="dialog" aria-modal="true" aria-label="Search Power Board">' +
      '<div class="gs-inputrow">' +
        '<svg class="gs-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
          '<circle cx="11" cy="11" r="7"></circle><line x1="16.5" y1="16.5" x2="21" y2="21"></line></svg>' +
        '<input id="gsInput" class="gs-input" type="search" autocomplete="off" spellcheck="false" ' +
               'placeholder="Search Power Board..." aria-label="Search Power Board" ' +
               'role="combobox" aria-expanded="true" aria-controls="gsResults" aria-autocomplete="list">' +
        '<button type="button" class="gs-esc" data-gs-dismiss="1" aria-label="Close search">Esc</button>' +
      '</div>' +
      '<div id="gsResults" class="gs-results" role="listbox" aria-label="Search results"></div>' +
      '<div class="gs-foot">' +
        '<span><kbd>&uarr;</kbd><kbd>&darr;</kbd> move</span>' +
        '<span><kbd>Enter</kbd> open</span>' +
        '<span><kbd>Esc</kbd> close</span>' +
      '</div>' +
    '</div>';
  document.body.appendChild(el);

  el.addEventListener('click', function (e) {
    if (e.target.closest('[data-gs-dismiss]')) { gsClose(); return; }
    const row = e.target.closest('[data-gs-href]');
    if (row) gsGo(row.getAttribute('data-gs-href'), row.getAttribute('data-gs-type'));
  });

  const input = document.getElementById('gsInput');
  input.addEventListener('input', function () {
    clearTimeout(gsTimer);
    const v = this.value;
    gsTimer = setTimeout(function () { gsRun(v); }, GS_DEBOUNCE_MS);
  });
  input.addEventListener('keydown', gsKeydown);
}

/* ---------- keyboard ---------- */

function gsKeydown(e) {
  if (e.key === 'Escape') { e.preventDefault(); gsClose(); return; }
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (!gsFlatResults.length) return;
    gsActiveIndex += (e.key === 'ArrowDown' ? 1 : -1);
    if (gsActiveIndex < 0) gsActiveIndex = gsFlatResults.length - 1;
    if (gsActiveIndex >= gsFlatResults.length) gsActiveIndex = 0;
    gsPaintActive();
    return;
  }
  if (e.key === 'Enter') {
    e.preventDefault();
    if (gsActiveIndex >= 0 && gsFlatResults[gsActiveIndex]) {
      const r = gsFlatResults[gsActiveIndex];
      gsGo(r.href, r.type);
    } else {
      const q = document.getElementById('gsInput').value.trim();
      if (q) { gsClose(); gsGoAll(q); }
    }
  }
}

function gsPaintActive() {
  const rows = document.querySelectorAll('#gsResults [data-gs-href]');
  rows.forEach(function (r, i) {
    const on = (i === gsActiveIndex);
    r.classList.toggle('is-active', on);
    r.setAttribute('aria-selected', on ? 'true' : 'false');
    if (on && r.scrollIntoView) r.scrollIntoView({ block: 'nearest' });
  });
}

function gsGo(href, type) {
  if (typeof pbTrack === 'function') pbTrack('global_search_result_clicked');
  gsClose();
  if (/^https?:|^\//.test(href)) window.location.href = href;
  else window.location.hash = href.replace(/^#/, '');
}

function gsGoAll(q) {
  window.location.hash = 'search?' + dscEncodeState({ q: q });
}

/* ---------- network results, permission-safe ---------- */

async function gsNetworkDocs(q) {
  if (!q || q.length < 2) return [];
  if (gsNetworkCache.q === q) return gsNetworkCache.docs;
  const c = (typeof pbnClient === 'function') ? pbnClient() : null;
  if (!c) return [];                      // signed out: no network results, by design
  try {
    const like = '%' + q.replace(/[%_,]/g, ' ') + '%';
    const { data, error } = await c.from('profiles')
      .select('id, username, full_name, headline, current_company, current_title, location, photo_url, uses_for, help_with, looking_for, expertise, roles, show_location')
      .eq('is_published', true)
      .eq('moderation_state', 'active')
      .or('full_name.ilike.' + like + ',headline.ilike.' + like +
          ',current_company.ilike.' + like + ',current_title.ilike.' + like)
      .limit(20);
    if (error) throw error;
    const docs = (data || []).map(dscNetworkDoc);
    gsNetworkCache = { q: q, docs: docs };
    return docs;
  } catch (e) {
    return [];                            // network unavailable degrades to the static index
  }
}

/* ---------- run ---------- */

async function gsRun(raw) {
  const q = String(raw || '').trim();
  gsLastQuery = q;
  const box = document.getElementById('gsResults');
  if (!box) return;

  if (q.length < 2) { box.innerHTML = gsEmptyState(); gsFlatResults = []; gsActiveIndex = -1; return; }

  const net = await gsNetworkDocs(q);
  if (gsLastQuery !== q) return;          // a newer keystroke won
  const res = dscSearch(q, { networkDocs: net });

  if (!res.total) {
    if (typeof pbTrack === 'function') pbTrack('search_zero_results');
    box.innerHTML = gsZeroState(q);
    gsFlatResults = []; gsActiveIndex = -1;
    return;
  }
  box.innerHTML = gsQuickHtml(res, q);
  gsFlatResults = Array.prototype.slice.call(box.querySelectorAll('[data-gs-href]'))
    .map(function (r) { return { href: r.getAttribute('data-gs-href'), type: r.getAttribute('data-gs-type') }; });
  gsActiveIndex = gsFlatResults.length ? 0 : -1;
  gsPaintActive();
}

function gsEmptyState() {
  return '<div class="gs-hint">' +
    '<div class="gs-hint-label">Search across</div>' +
    '<div class="gs-hint-row">' +
      DSC_TYPE_ORDER.map(function (t) {
        return '<span class="gs-chip">' + gsEsc(DSC_TYPE_LABEL[t]) + '</span>';
      }).join('') +
    '</div>' +
    '<p class="gs-hint-note">Type at least two characters. Company searches understand former names, ' +
    'so Square finds Block.</p>' +
    '</div>';
}

function gsZeroState(q) {
  return '<div class="gs-hint">' +
    '<div class="gs-zero">No result matches <strong>' + gsEsc(q) + '</strong>.</div>' +
    '<p class="gs-hint-note">Try fewer words, or a company or person name. ' +
    'Nothing approximate is shown here rather than guessing at what you meant.</p>' +
    '</div>';
}

/* One compact line per result. Grouped by type, not merged, so a
   person and a company of the same name stay legible. */
function gsQuickHtml(res, q) {
  const groups = {};
  res.results.forEach(function (h) {
    (groups[h.doc.entityType] = groups[h.doc.entityType] || []).push(h);
  });
  let html = '';
  DSC_TYPE_ORDER.forEach(function (type) {
    const list = groups[type];
    if (!list || !list.length) return;
    const shown = list.slice(0, GS_QUICK_PER_TYPE);
    html += '<div class="gs-group">' +
      '<div class="gs-group-head">' + gsEsc(DSC_TYPE_LABEL[type]) +
        '<span class="gs-group-n">' + list.length + '</span></div>';
    shown.forEach(function (h) {
      const d = h.doc;
      html += '<div class="gs-row" role="option" aria-selected="false" tabindex="-1" ' +
              'data-gs-href="' + gsEsc(d.primaryRoute) + '" data-gs-type="' + gsEsc(type) + '">' +
        '<div class="gs-row-main">' +
          '<span class="gs-row-name">' + gsEsc(d.displayName) + '</span>' +
          (h.match === 'EXACT_ALIAS' && d.aliases.length
            ? '<span class="gs-row-alias">' + gsEsc(gsAliasNote(d, q)) + '</span>' : '') +
        '</div>' +
        (d.subtitle ? '<div class="gs-row-sub">' + gsEsc(d.subtitle) + '</div>' : '') +
        (h.match === 'EXACT_COMPANY_ASSOCIATION' && h.detail
          ? '<div class="gs-row-why">Invested in ' + gsEsc(h.detail) + '</div>' : '') +
      '</div>';
    });
    if (list.length > shown.length) {
      html += '<div class="gs-more" data-gs-href="#search?' +
        gsEsc(dscEncodeState({ q: q, type: type })) + '" data-gs-type="' + gsEsc(type) + '">' +
        'All ' + list.length + ' ' + gsEsc(DSC_TYPE_LABEL[type].toLowerCase()) + '</div>';
    }
    html += '</div>';
  });
  html += '<div class="gs-viewall" data-gs-href="#search?' + gsEsc(dscEncodeState({ q: q })) +
          '" data-gs-type="all">View all ' + res.total + ' results' +
          (res.fuzzy ? ' <span class="gs-fuzzy">closest spelling</span>' : '') + '</div>';
  return html;
}

/* Says WHY an alias matched, rather than silently swapping the name. */
function gsAliasNote(doc, q) {
  const qn = dscNorm(q);
  const hit = doc.aliases.filter(function (a) { return dscNorm(a).indexOf(qn) === 0; })[0] || doc.aliases[0];
  return 'formerly ' + hit;
}

/* ---------- full results page ---------- */

function renderSearchResults() {
  const host = document.getElementById('searchView');
  if (!host) return;
  const state = dscDecodeState((window.location.hash.split('?')[1] || ''));
  const q = String(state.q || '');
  const type = String(state.type || 'all');

  if (!q) {
    host.innerHTML = '<div class="ds-wrap"><div class="ds-kicker">Search</div>' +
      '<h1 class="ds-h1">Search Power Board.</h1>' +
      '<p class="ds-sub">Firms, partners, angels, companies and people, in one query. ' +
      'Press <kbd>Cmd</kbd> <kbd>K</kbd> anywhere to open search.</p>' +
      '<button type="button" class="ds-btn" onclick="gsOpen(\'\')">Open search</button></div>';
    return;
  }

  gsRenderResultsPage(host, q, type, []);
  /* network results arrive asynchronously; repaint when they do */
  gsNetworkDocs(q).then(function (net) {
    if (!net.length) return;
    const cur = dscDecodeState((window.location.hash.split('?')[1] || ''));
    if (String(cur.q || '') !== q) return;
    gsRenderResultsPage(host, q, String(cur.type || 'all'), net);
  });
}

function gsRenderResultsPage(host, q, type, net) {
  const all = dscSearch(q, { networkDocs: net });
  const shown = (type === 'all') ? all.results
    : all.results.filter(function (h) { return h.doc.entityType === type; });

  let html = '<div class="ds-wrap">' +
    '<div class="ds-kicker">Search</div>' +
    '<h1 class="ds-h1">' + gsEsc(q) + '</h1>' +
    '<p class="ds-sub">' + all.total + ' result' + (all.total === 1 ? '' : 's') +
      (all.fuzzy ? ' for the closest spelling found' : '') +
      '. Ranked by how directly each one matches: an exact name always outranks a mention in a description.</p>';

  html += '<div class="ds-tabs" role="tablist">' +
    gsTab('all', 'All', all.total, type);
  DSC_TYPE_ORDER.forEach(function (t) {
    if (!all.byType[t]) return;
    html += gsTab(t, DSC_TYPE_LABEL[t], all.byType[t], type);
  });
  html += '</div>';

  if (!shown.length) {
    html += '<div class="ds-empty">No ' + gsEsc(DSC_TYPE_LABEL[type] || 'result') +
            ' matches this query. Other tabs may still have results.</div>';
  } else {
    html += '<div class="ds-list">' + shown.map(function (h) {
      const d = h.doc;
      return '<a class="ds-item" href="' + gsEsc(d.primaryRoute) + '">' +
        '<div class="ds-item-top">' +
          '<span class="ds-item-name">' + gsEsc(d.displayName) + '</span>' +
          '<span class="ds-item-type">' + gsEsc(DSC_TYPE_LABEL[d.entityType]) + '</span>' +
        '</div>' +
        (d.subtitle ? '<div class="ds-item-sub">' + gsEsc(d.subtitle) + '</div>' : '') +
        '<div class="ds-item-why">' + gsEsc(DSC_MATCH_LABEL[h.match] || '') +
          (h.detail ? ': ' + gsEsc(h.detail) : '') +
          (h.match === 'EXACT_ALIAS' && d.aliases.length ? ' - ' + gsEsc(gsAliasNote(d, q)) : '') +
        '</div>' +
      '</a>';
    }).join('') + '</div>';
  }
  html += '</div>';
  host.innerHTML = html;
}

function gsTab(id, label, n, active) {
  return '<a class="ds-tab' + (id === active ? ' is-active' : '') + '" role="tab" ' +
    'aria-selected="' + (id === active ? 'true' : 'false') + '" ' +
    'href="#search?' + gsEsc(dscEncodeState({ q: gsCurrentQuery(), type: id === 'all' ? '' : id })) + '">' +
    gsEsc(label) + '<span class="ds-tab-n">' + n + '</span></a>';
}

function gsCurrentQuery() {
  return String(dscDecodeState((window.location.hash.split('?')[1] || '')).q || '');
}

/* ---------- global shortcuts ---------- */

document.addEventListener('keydown', function (e) {
  const k = e.key ? e.key.toLowerCase() : '';
  if ((e.metaKey || e.ctrlKey) && k === 'k') { e.preventDefault(); gsOpen(); return; }
  /* "/" opens search, but never while the user is typing somewhere */
  if (k === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) {
    const t = e.target;
    const typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
    if (!typing) { e.preventDefault(); gsOpen(); }
  }
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', gsInstall);
} else {
  gsInstall();
}
