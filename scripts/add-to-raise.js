/* ============================================================
   ADD-TO-RAISE.JS
   Phase 4G. The one control that turns research into a pipeline,
   placed on every surface where a founder decides to pursue someone.

   WHY THIS IS AN INJECTOR AND NOT EIGHT EDITS

   The Screener, Global Search, Power Match, the profiles and the
   Shortlist are all shipped, frozen products. Adding a button to each
   would mean editing eight files that already work, and every one of
   those edits is a chance to break something a founder relies on.

   Instead this file reads what those surfaces already render. Every
   one of them links to its entity using the same route conventions
   the router defines, so the LINK IS THE IDENTITY:

     #sequoia               a firm
     #partner/alfred-lin    a partner
     #capital-source/x      an angel

   A firm slug is verified against the research dataset before it is
   treated as one, so #screener and #alerts can never be mistaken for
   firms. Anything unrecognised gets no button rather than a guess.

   NOTHING IS EVER ADDED AUTOMATICALLY

   Every path here runs because somebody pressed a button that said
   what it would do. Shortlisting is not pursuing, a filter returning
   forty firms is not a decision to chase forty firms, and a Power
   Match result is a suggestion. The Screener supports adding several
   at once, but only ones the founder ticked - there is no "add
   everything this filter returned", by design.

   AND ADDING SOMEWHERE DOES NOT REMOVE IT ANYWHERE

   A firm can be shortlisted and in the raise at the same time. Those
   are different statements: one is "worth a look", the other is "I am
   raising from these people". Nothing here quietly moves an entity
   from one to the other.
   ============================================================ */

/* Routes that identify a pursuable entity. Companies and network
   people are deliberately absent: neither is an investor target. */
const AR_PARTNER_RE = /^#partner\/(.+)$/;
const AR_ANGEL_RE   = /^#capital-source\/(.+)$/;

let arSelected = {};        // "kind:slug" -> {kind, slug, name}
let arObserver = null;

function arSignedIn() {
  return (typeof isSignedIn === 'function') ? isSignedIn() : false;
}

function arEsc(s) { return (typeof ptEsc === 'function') ? ptEsc(s) : String(s == null ? '' : s); }

/* ------------------------------------------------------------
   THE RESOLVER

   Pure, so the rule that decides what counts as a target can be
   checked directly rather than only observed through the DOM.
   ------------------------------------------------------------ */

function arResolve(href) {
  if (!href) return null;
  const h = String(href).trim();

  const p = h.match(AR_PARTNER_RE);
  if (p && p[1]) {
    return (typeof ptPartner === 'function' && ptPartner(p[1]))
      ? { kind: 'partner', slug: p[1] } : null;
  }

  const a = h.match(AR_ANGEL_RE);
  if (a && a[1]) {
    return (typeof ptAngel === 'function' && ptAngel(a[1]))
      ? { kind: 'angel', slug: a[1] } : null;
  }

  /* A bare hash could be a firm or could be a route like #screener.
     The only way to tell is to ask the dataset, which is also what
     stops a future route name from silently becoming a fake firm. */
  if (h.charAt(0) === '#' && h.indexOf('/') === -1) {
    const slug = h.slice(1);
    if (!slug) return null;
    if (typeof ptFirm === 'function' && ptFirm(slug)) return { kind: 'firm', slug: slug };
  }
  return null;
}

function arKey(r) { return r.kind + ':' + r.slug; }

function arName(r) {
  if (r.kind === 'firm') { const f = ptFirm(r.slug); return f ? f.name : r.slug; }
  if (r.kind === 'partner') { const p = ptPartner(r.slug); return p ? p.name : r.slug; }
  const a = ptAngel(r.slug); return a ? a.name : r.slug;
}

/* ------------------------------------------------------------
   THE BUTTON
   ------------------------------------------------------------ */

function arButton(r, source, cls) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'ar-btn' + (cls ? ' ' + cls : '');
  b.setAttribute('data-ar-add', r.kind + ':' + r.slug);
  b.setAttribute('data-ar-source', source);
  b.setAttribute('aria-label', 'Add ' + arName(r) + ' to your raise');
  b.textContent = 'Add to raise';
  return b;
}

async function arAdd(kind, slug, source, btn) {
  if (typeof ptAddToRaise !== 'function') return;
  if (btn) { btn.disabled = true; btn.textContent = 'Adding...'; }
  const res = await ptAddToRaise(kind, slug, { source: source });
  if (btn) {
    btn.disabled = false;
    /* The button states the outcome rather than silently resetting,
       because "did that work" is the question a founder has straight
       after pressing it. */
    if (res && (res.ok || res.duplicate)) {
      btn.textContent = res.duplicate ? 'Already in raise' : 'In your raise';
      btn.classList.add('is-done');
    } else {
      btn.textContent = 'Add to raise';
    }
  }
  if (typeof ptHandleResult === 'function') ptHandleResult(res);
  if (res && res.ok && typeof pbTrack === 'function') {
    const ev = {
      search: 'add_to_raise_from_search',
      screener: 'add_to_raise_from_screener',
      power_match: 'add_to_raise_from_power_match',
      shortlist: 'add_to_raise_from_shortlist'
    }[source];
    if (ev) pbTrack(ev);
  }
}

/* ------------------------------------------------------------
   INJECTION

   Every injector is idempotent and silent when its anchor is not
   there. A surface that changes shape loses its button; it does not
   throw, and nothing else on the page is affected.
   ------------------------------------------------------------ */

function arInjectAll() {
  if (!arSignedIn()) return;
  if (typeof ptFirm !== 'function') return;      // pipeline-core not loaded yet
  arInjectScreener();
  arInjectPowerMatch();
  arInjectLinkRows('#searchView .ds-list .ds-item', 'search');
  arInjectLinkRows('#shortlistView a[href^="#"]', 'shortlist');
  arInjectProfile();
}

/* Screener: a checkbox column plus a bulk bar. Selection is explicit,
   which is the whole point - a filter returning forty firms is not a
   decision to pursue forty firms. */
function arInjectScreener() {
  const table = document.querySelector('#screenerView .scr-table');
  if (!table) { arClearSelection(); return; }

  const head = table.querySelector('thead tr');
  if (head && !head.querySelector('.ar-th')) {
    const th = document.createElement('th');
    th.className = 'ar-th';
    th.setAttribute('scope', 'col');
    th.innerHTML = '<span class="pl-sr">Select</span>';
    head.insertBefore(th, head.firstChild);
  }

  const rows = table.querySelectorAll('tbody tr');
  rows.forEach(function (tr) {
    if (tr.querySelector('.ar-td')) return;
    const link = tr.querySelector('.scr-name');
    const r = link ? arResolve(link.getAttribute('href')) : null;
    const td = document.createElement('td');
    td.className = 'ar-td';
    if (r) {
      const key = arKey(r);
      td.innerHTML = '<input type="checkbox" class="ar-check" data-ar-pick="' +
        arEsc(key) + '" aria-label="Select ' + arEsc(arName(r)) + '"' +
        (arSelected[key] ? ' checked' : '') + '>';
    } else {
      /* Companies and network people appear in the Screener but are
         not investor targets, so the cell stays empty rather than
         offering something that would fail. */
      td.innerHTML = '';
    }
    tr.insertBefore(td, tr.firstChild);
  });

  arPaintBulkBar();
}

function arInjectPowerMatch() {
  const cards = document.querySelectorAll('#findInvestorsView .finder-result-card[data-pm-slug]');
  cards.forEach(function (card) {
    if (card.querySelector('[data-ar-add]')) return;
    const slug = card.getAttribute('data-pm-slug');
    if (!slug || typeof ptFirm !== 'function' || !ptFirm(slug)) return;
    const wrap = document.createElement('div');
    wrap.className = 'ar-inline';
    wrap.appendChild(arButton({ kind: 'firm', slug: slug }, 'power_match'));
    card.appendChild(wrap);
  });
}

/* Rows that are themselves links. A button cannot live inside an
   anchor, so the row is wrapped and the two sit side by side. */
function arInjectLinkRows(selector, source) {
  const items = document.querySelectorAll(selector);
  items.forEach(function (a) {
    if (!a.parentNode || a.parentNode.classList.contains('ar-row')) return;
    const r = arResolve(a.getAttribute('href'));
    if (!r) return;
    const wrap = document.createElement('div');
    wrap.className = 'ar-row';
    a.parentNode.insertBefore(wrap, a);
    wrap.appendChild(a);
    wrap.appendChild(arButton(r, source, 'ar-btn-quiet'));
  });
}

/* Firm, partner and angel profiles. The entity is whatever the route
   says, so no markup assumption is needed beyond the container. */
function arInjectProfile() {
  const views = [
    ['detailView', 'firm_profile'],
    ['partnerView', 'partner_profile'],
    ['capitalSourceDetailView', 'angel_profile']
  ];
  const hash = window.location.hash || '';
  const r = arResolve(hash.split('?')[0]);
  if (!r) return;

  for (let i = 0; i < views.length; i++) {
    const host = document.getElementById(views[i][0]);
    if (!host || host.style.display === 'none' || !host.firstChild) continue;
    if (host.querySelector('[data-ar-add]')) return;
    const bar = document.createElement('div');
    bar.className = 'ar-bar';
    bar.appendChild(arButton(r, views[i][1], 'ar-btn-primary'));
    host.insertBefore(bar, host.firstChild);
    return;
  }
}

/* ------------------------------------------------------------
   BULK SELECTION
   ------------------------------------------------------------ */

function arClearSelection() {
  arSelected = {};
  const bar = document.getElementById('arBulkBar');
  if (bar) bar.remove();
}

function arPaintBulkBar() {
  const keys = Object.keys(arSelected);
  let bar = document.getElementById('arBulkBar');
  if (!keys.length) { if (bar) bar.remove(); return; }
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'arBulkBar';
    bar.className = 'ar-bulk';
    document.body.appendChild(bar);
  }
  bar.innerHTML =
    '<span class="ar-bulk-n">' + keys.length +
      (keys.length === 1 ? ' selected' : ' selected') + '</span>' +
    '<button type="button" class="ds-btn" data-ar-bulk="1">Add to raise</button>' +
    '<button type="button" class="ac-act ac-act-quiet" data-ar-cancel="1">Clear</button>';
}

async function arBulkAdd() {
  const items = Object.keys(arSelected).map(function (k) { return arSelected[k]; });
  if (!items.length) return;
  const bar = document.getElementById('arBulkBar');
  const btn = bar ? bar.querySelector('[data-ar-bulk]') : null;
  if (btn) { btn.disabled = true; btn.textContent = 'Adding...'; }

  let added = 0, dupes = 0, failed = 0, firstErr = null;
  for (let i = 0; i < items.length; i++) {
    const res = await ptAddToRaise(items[i].kind, items[i].slug, { source: 'screener' });
    if (res && res.ok) added++;
    else if (res && res.duplicate) dupes++;
    else { failed++; if (!firstErr && res && res.error) firstErr = res.error; }
    /* Stop on a blocking condition rather than repeating the same
       failure forty times. */
    if (res && (res.needsAuth || res.noRaise)) {
      if (typeof ptHandleResult === 'function') ptHandleResult(res);
      break;
    }
  }

  arClearSelection();
  document.querySelectorAll('.ar-check').forEach(function (c) { c.checked = false; });

  if (added && typeof pbTrack === 'function') pbTrack('add_to_raise_from_screener');

  /* One summary, stating each outcome separately. "40 added" when 12
     were already there would be a number the founder cannot trust. */
  const bits = [];
  if (added) bits.push(added + ' added');
  if (dupes) bits.push(dupes + ' already in the raise');
  if (failed) bits.push(failed + ' could not be added');
  if (typeof ptToast === 'function' && bits.length) {
    ptToast(bits.join(', ') + '.' + (firstErr ? ' ' + firstErr : ''), 'View pipeline', '#pipeline');
  }
}

/* ------------------------------------------------------------
   EVENTS
   ------------------------------------------------------------ */

document.addEventListener('click', function (e) {
  const add = e.target.closest ? e.target.closest('[data-ar-add]') : null;
  if (add) {
    e.preventDefault();
    e.stopPropagation();
    const parts = (add.getAttribute('data-ar-add') || '').split(':');
    arAdd(parts[0], parts.slice(1).join(':'), add.getAttribute('data-ar-source'), add);
    return;
  }
  if (e.target.closest && e.target.closest('[data-ar-bulk]')) { arBulkAdd(); return; }
  if (e.target.closest && e.target.closest('[data-ar-cancel]')) {
    arClearSelection();
    document.querySelectorAll('.ar-check').forEach(function (c) { c.checked = false; });
    return;
  }
});

document.addEventListener('change', function (e) {
  const pick = e.target.closest ? e.target.closest('[data-ar-pick]') : null;
  if (!pick) return;
  const key = pick.getAttribute('data-ar-pick');
  const parts = key.split(':');
  if (e.target.checked) {
    arSelected[key] = { kind: parts[0], slug: parts.slice(1).join(':') };
  } else {
    delete arSelected[key];
  }
  arPaintBulkBar();
});

/* These surfaces re-render on every filter change, sort and search
   keystroke, so a one-off pass at load would last until the first
   interaction. Observing is what keeps the button there. */
function arStartObserver() {
  if (arObserver || typeof MutationObserver === 'undefined') return;
  const wrap = document.querySelector('.wrap') || document.body;
  let queued = false;
  arObserver = new MutationObserver(function () {
    if (queued) return;
    queued = true;
    setTimeout(function () { queued = false; try { arInjectAll(); } catch (e) {} }, 120);
  });
  arObserver.observe(wrap, { childList: true, subtree: true });
}

window.addEventListener('hashchange', function () {
  /* A new route means a different result set, so a stale selection
     would apply to rows nobody can see. */
  arClearSelection();
  setTimeout(arInjectAll, 200);
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () { arInjectAll(); arStartObserver(); }, 900);
  });
} else {
  setTimeout(function () { arInjectAll(); arStartObserver(); }, 900);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { arResolve: arResolve, arKey: arKey };
}
