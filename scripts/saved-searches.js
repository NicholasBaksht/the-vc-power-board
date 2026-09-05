/* ============================================================
   SAVED-SEARCHES.JS
   Phase 3A. A Saved Search is a watched definition, not a stored
   answer.

   SAVED VIEW vs SAVED SEARCH - the distinction the whole phase
   rests on:

     Saved View (Phase 2)    how a Screener is configured.
                             Local-first, no account, never alerts.

     Saved Search (Phase 3)  a definition Power Board re-evaluates
                             and can alert on. Requires an account,
                             because there is nowhere to deliver an
                             alert without one.

   A Saved View is never silently promoted into a Saved Search.
   Converting one is an explicit action, because turning a filter
   set into a monitoring subscription is a decision the user makes,
   not a side effect of having used the Screener.

   RESULTS ARE NEVER STORED AS THE SEARCH. The definition is the
   entity type, the query and the filters; running it always
   re-evaluates against current data. What IS remembered is
   last_member_ids - the set of entity ids the search matched when
   it was last evaluated. That is a diff baseline and nothing else:
   without it there is no way to know that something ENTERED the
   result set rather than having always been there. It is written
   only by an evaluation, never read as an answer.

   AUTH INTENT IS PRESERVED. A signed-out user who asks to save a
   search has their definition parked in sessionStorage and offered
   back the moment they return signed in, so the filters they built
   are not lost to a login round trip.
   ============================================================ */

const SS_PENDING_KEY = 'pbPendingSavedSearch';

function ssEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function ssId() {
  return 's' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function ssClient() {
  if (typeof pbnClient === 'function') { try { return pbnClient(); } catch (e) { return null; } }
  if (typeof supabaseClient !== 'undefined' && supabaseClient) return supabaseClient;
  return null;
}

/* A Supabase client existing is NOT a session. The anon client is
   constructed for every visitor, so testing for it reported everyone
   as signed in: the signed-out path never ran, the user's filters
   were never parked, and the save fell through to a database call
   that failed with a schema error instead of an invitation to sign
   in. accounts.js already owns this question - ask it. */
function ssSignedIn() {
  if (typeof isSignedIn === 'function') { try { return !!isSignedIn(); } catch (e) { return false; } }
  return false;
}

/* ---------- capture a definition from wherever the user is ---------- */

/* From the Screener: entity type plus the structured filters. Sort is
   captured but is explicitly NOT part of membership - reordering a
   result set does not change who is in it, so a sort change must
   never produce an entered/exited alert. */
function ssFromScreener(name) {
  if (typeof scrReadState !== 'function') return null;
  const st = scrReadState();
  return {
    id: ssId(),
    name: String(name || '').slice(0, 80) || 'Untitled search',
    entityType: st.type,
    query: null,
    filters: st.filters || {},
    sort: st.sort || null,
    sortDir: st.dir || null,
    alertsEnabled: true
  };
}

/* From Global Search: a text query, optionally narrowed to one type.
   A bare name lookup is a poor subscription, so the caller is
   expected to have asked deliberately - nothing here auto-subscribes
   a query someone merely typed. */
function ssFromSearch(name, query, entityType) {
  const q = String(query || '').trim();
  if (!q) return null;
  return {
    id: ssId(),
    name: String(name || q).slice(0, 80),
    entityType: entityType || 'firm',
    query: q,
    filters: {},
    sort: null, sortDir: null,
    alertsEnabled: true
  };
}

/* ---------- evaluation: always against current data ---------- */

/* Returns the ids matching the definition right now. This is the
   single place membership is decided, so the Screener, the alert
   matcher and the "run now" button can never disagree about what a
   search means. */
function ssEvaluate(def) {
  if (!def) return [];
  const type = def.entityType;

  if (def.query) {
    if (typeof dscSearch !== 'function') return [];
    const res = dscSearch(def.query, { types: [type] });
    return res.results.map(function (h) { return h.doc.entityId; });
  }

  if (typeof scrRows !== 'function' || typeof scrApply !== 'function') return [];
  /* network rows are fetched per viewer and are not evaluable from a
     static index, so a network search reports nothing rather than
     guessing at a membership it cannot see */
  if (type === 'network') return [];
  const rows = scrRows(type);
  return scrApply(rows, type, def.filters || {}).map(function (r) { return r.entityId; });
}

/* Human-readable description of what is being watched, used in the
   list and in alert text so a user can tell two searches apart. */
function ssDescribe(def) {
  if (def.query) return '"' + def.query + '" in ' + (DSC_TYPE_LABEL[def.entityType] || def.entityType);
  const defs = (typeof SCR_FILTERS !== 'undefined' && SCR_FILTERS[def.entityType]) || [];
  const parts = [];
  defs.forEach(function (f) {
    const v = (def.filters || {})[f.key];
    if (v == null || v === '' || (Array.isArray(v) && !v.length)) return;
    parts.push(f.label + ': ' + (Array.isArray(v) ? v.join(' or ') : (f.kind === 'bool' ? 'yes' : v)));
  });
  const label = DSC_TYPE_LABEL[def.entityType] || def.entityType;
  return parts.length ? label + ' where ' + parts.join(', ') : 'All ' + label.toLowerCase();
}

/* ---------- persistence ---------- */

function ssRowToDef(r) {
  return {
    id: r.id, name: r.name, entityType: r.entity_type, query: r.query,
    filters: r.filters || {}, sort: r.sort, sortDir: r.sort_dir,
    alertsEnabled: r.alerts_enabled !== false,
    lastMemberIds: r.last_member_ids || [],
    lastEvaluatedAt: r.last_evaluated_at,
    updatedAt: r.updated_at
  };
}

async function ssAll() {
  if (!ssSignedIn()) return [];
  const c = ssClient();
  if (!c) return [];
  try {
    const { data, error } = await c.from('saved_searches')
      .select('*').order('updated_at', { ascending: false }).limit(60);
    if (error) throw error;
    return (data || []).map(ssRowToDef);
  } catch (e) { return []; }
}

async function ssCreate(def) {
  /* Auth is checked before the client, so an anonymous visitor parks
     their definition and is sent to sign in rather than being handed
     a database error they cannot act on. */
  if (!ssSignedIn()) { ssParkPending(def); return { needsAuth: true }; }
  const c = ssClient();
  if (!c) { ssParkPending(def); return { needsAuth: true }; }
  /* Evaluate once at creation so the first alert is a genuine change
     rather than the entire starting result set arriving as news. */
  const members = ssEvaluate(def);
  try {
    const { error } = await c.from('saved_searches').insert({
      id: def.id, name: def.name, entity_type: def.entityType,
      query: def.query, filters: def.filters,
      sort: def.sort, sort_dir: def.sortDir,
      alerts_enabled: def.alertsEnabled !== false,
      last_member_ids: members,
      last_evaluated_at: new Date().toISOString()
    });
    if (error) throw error;
    if (typeof pbTrack === 'function') pbTrack('saved_search_created');
    return { ok: true, memberCount: members.length };
  } catch (e) {
    const msg = (e && e.message) || '';
    if (/saved_searches/.test(msg) && /schema|not find|does not exist/i.test(msg)) {
      return { error: 'Saved searches are not set up on this project yet.' };
    }
    return { error: 'Could not save right now.' };
  }
}

async function ssUpdate(id, patch) {
  const c = ssClient();
  if (!c) return { needsAuth: true };
  const row = { updated_at: new Date().toISOString() };
  if (patch.name != null) row.name = String(patch.name).slice(0, 80);
  if (patch.filters != null) row.filters = patch.filters;
  if (patch.alertsEnabled != null) row.alerts_enabled = !!patch.alertsEnabled;
  if (patch.sort !== undefined) row.sort = patch.sort;
  if (patch.sortDir !== undefined) row.sort_dir = patch.sortDir;
  try {
    const { error } = await c.from('saved_searches').update(row).eq('id', id);
    if (error) throw error;
    if (typeof pbTrack === 'function') {
      if (patch.alertsEnabled === false) pbTrack('alert_subscription_paused');
      else if (patch.alertsEnabled === true) pbTrack('alert_subscription_resumed');
      else pbTrack('saved_search_updated');
    }
    return { ok: true };
  } catch (e) { return { error: 'Could not update.' }; }
}

async function ssDelete(id) {
  const c = ssClient();
  if (!c) return { needsAuth: true };
  try {
    const { error } = await c.from('saved_searches').delete().eq('id', id);
    if (error) throw error;
    if (typeof pbTrack === 'function') pbTrack('saved_search_deleted');
    return { ok: true };
  } catch (e) { return { error: 'Could not delete.' }; }
}

/* Re-runs and records the new membership. Returns the diff so the
   caller can show it; generating alerts from that diff is 3C's job,
   not this file's. */
async function ssRun(def) {
  const members = ssEvaluate(def);
  const before = def.lastMemberIds || [];
  const beforeSet = {};
  before.forEach(function (x) { beforeSet[x] = 1; });
  const afterSet = {};
  members.forEach(function (x) { afterSet[x] = 1; });
  const entered = members.filter(function (x) { return !beforeSet[x]; });
  const exited = before.filter(function (x) { return !afterSet[x]; });

  const c = ssClient();
  if (c) {
    try {
      await c.from('saved_searches').update({
        last_member_ids: members,
        last_evaluated_at: new Date().toISOString()
      }).eq('id', def.id);
    } catch (e) { /* evaluation still returns; the baseline just is not advanced */ }
  }
  if (typeof pbTrack === 'function') pbTrack('saved_search_run');
  return { members: members, entered: entered, exited: exited, count: members.length };
}

/* ---------- auth intent ---------- */

function ssParkPending(def) {
  try { sessionStorage.setItem(SS_PENDING_KEY, JSON.stringify(def)); } catch (e) {}
}

function ssTakePending() {
  try {
    const raw = sessionStorage.getItem(SS_PENDING_KEY);
    if (!raw) return null;
    sessionStorage.removeItem(SS_PENDING_KEY);
    return JSON.parse(raw);
  } catch (e) { return null; }
}

/* Called after a session appears. If the user asked to save a search
   before signing in, the definition they built is still here. */
async function ssResumePending() {
  if (!ssSignedIn()) return;
  const def = ssTakePending();
  if (!def) return;
  const res = await ssCreate(def);
  if (res && res.ok && typeof ssToast === 'function') {
    ssToast('Saved search created: ' + def.name);
  }
}

/* ---------- UI ---------- */

function ssToast(msg) {
  let el = document.getElementById('ssToast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'ssToast';
    el.className = 'ss-toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('is-on');
  clearTimeout(el._t);
  el._t = setTimeout(function () { el.classList.remove('is-on'); }, 3200);
}

/* Injected into the Screener toolbar beside Views, so power-screener.js
   needs no knowledge of this file. */
function ssInstall() {
  const tools = document.querySelector('#screenerView .scr-tools');
  if (!tools || tools.querySelector('[data-ss-open]')) return;
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'scr-tool';
  b.setAttribute('data-ss-open', '1');
  b.textContent = 'Saved searches';
  tools.insertBefore(b, tools.firstChild);
}

async function ssOpenPanel() {
  const signedIn = ssSignedIn();
  const list = signedIn ? await ssAll() : [];
  const el = document.createElement('div');
  el.className = 'scr-modal';
  el.innerHTML = '<div class="scr-modal-bd" data-ss-close="1"></div>' +
    '<div class="scr-modal-panel" role="dialog" aria-modal="true" aria-label="Saved searches">' +
    '<div class="scr-modal-head">Saved searches' +
      '<button type="button" class="scr-esc" data-ss-close="1">Esc</button></div>' +
    '<div class="scr-modal-body">' +
      '<p class="ss-explain">A saved search is watched. Power Board re-runs it against current ' +
      'research and tells you when something enters it or changes inside it. ' +
      'A saved <em>view</em> only remembers how the table was set up.</p>' +
      '<div class="sv-newrow">' +
        '<input id="ssName" class="scr-text" type="text" placeholder="Name this search" maxlength="80">' +
        '<button type="button" class="ds-btn" data-ss-save="1">Watch current filters</button>' +
      '</div>' +
      (!signedIn
        ? '<div class="ss-none"><strong>Saving requires an account.</strong> Alerts need somewhere to ' +
          'go. Your filters are kept while you sign in, so nothing you set up is lost.</div>'
        : (list.length
            ? list.map(ssRowHtml).join('')
            : '<div class="ss-none">No saved searches yet. Set filters on the Screener, name them ' +
              'above, and Power Board will watch them.</div>')) +
    '</div></div>';
  document.body.appendChild(el);
  el.addEventListener('click', function (e) { ssPanelClick(e, el); });
}

function ssRowHtml(s) {
  const n = (s.lastMemberIds || []).length;
  return '<div class="sv-row" data-ss-id="' + ssEsc(s.id) + '">' +
    '<button type="button" class="sv-load" data-ss-open-results="' + ssEsc(s.id) + '">' +
      '<span class="sv-name">' + ssEsc(s.name) +
        (s.alertsEnabled ? '' : ' <span class="ss-paused">paused</span>') + '</span>' +
      '<span class="sv-meta">' + ssEsc(ssDescribe(s)) + ' · ' + n + ' match' + (n === 1 ? '' : 'es') +
        (s.lastEvaluatedAt ? ' · checked ' + String(s.lastEvaluatedAt).slice(0, 10) : '') +
      '</span>' +
    '</button>' +
    '<span class="sv-acts">' +
      '<button type="button" data-ss-run="' + ssEsc(s.id) + '">Run now</button>' +
      '<button type="button" data-ss-toggle="' + ssEsc(s.id) + '">' +
        (s.alertsEnabled ? 'Pause' : 'Resume') + '</button>' +
      '<button type="button" data-ss-rename="' + ssEsc(s.id) + '">Rename</button>' +
      '<button type="button" data-ss-del="' + ssEsc(s.id) + '">Delete</button>' +
    '</span></div>';
}

async function ssPanelClick(e, el) {
  if (e.target.closest('[data-ss-close]')) { el.remove(); return; }

  if (e.target.closest('[data-ss-save]')) {
    const nm = (document.getElementById('ssName').value || '').trim();
    if (!nm) { document.getElementById('ssName').focus(); return; }
    const def = ssFromScreener(nm);
    if (!def) return;
    const res = await ssCreate(def);
    el.remove();
    if (res && res.needsAuth) {
      ssToast('Sign in to finish saving. Your filters are kept.');
      window.location.hash = 'signin';
      return;
    }
    if (res && res.error) { ssToast(res.error); return; }
    ssToast('Watching ' + def.name + ' - ' + res.memberCount + ' current matches');
    ssOpenPanel();
    return;
  }

  const open = e.target.closest('[data-ss-open-results]');
  if (open) {
    const s = (await ssAll()).find(function (x) { return x.id === open.getAttribute('data-ss-open-results'); });
    el.remove();
    if (s) ssShowResults(s);
    return;
  }

  const run = e.target.closest('[data-ss-run]');
  if (run) {
    const s = (await ssAll()).find(function (x) { return x.id === run.getAttribute('data-ss-run'); });
    if (!s) return;
    const r = await ssRun(s);
    ssToast(s.name + ': ' + r.count + ' matches' +
      (r.entered.length ? ', ' + r.entered.length + ' new since last check' : ', nothing new'));
    el.remove(); ssOpenPanel();
    return;
  }

  const tog = e.target.closest('[data-ss-toggle]');
  if (tog) {
    const id = tog.getAttribute('data-ss-toggle');
    const s = (await ssAll()).find(function (x) { return x.id === id; });
    if (!s) return;
    await ssUpdate(id, { alertsEnabled: !s.alertsEnabled });
    el.remove(); ssOpenPanel();
    return;
  }

  const rn = e.target.closest('[data-ss-rename]');
  if (rn) {
    const id = rn.getAttribute('data-ss-rename');
    const s = (await ssAll()).find(function (x) { return x.id === id; });
    const nm = window.prompt('Rename this saved search', s ? s.name : '');
    if (nm != null && nm.trim()) { await ssUpdate(id, { name: nm.trim() }); el.remove(); ssOpenPanel(); }
    return;
  }

  const del = e.target.closest('[data-ss-del]');
  if (del) {
    const id = del.getAttribute('data-ss-del');
    const row = el.querySelector('[data-ss-id="' + id + '"]');
    if (row && !row.classList.contains('is-confirm')) {
      row.classList.add('is-confirm');
      del.textContent = 'Confirm';
      return;
    }
    await ssDelete(id); el.remove(); ssOpenPanel();
    return;
  }
}

/* Opening a saved search puts the user back on the Screener with its
   filters applied - the definition rebuilt, not a stored result set. */
function ssShowResults(s) {
  if (s.query) {
    window.location.hash = 'search?' + dscEncodeState({ q: s.query, type: s.entityType });
    return;
  }
  const out = { type: s.entityType };
  if (s.sort) { out.sort = s.sort; out.dir = s.sortDir || 'asc'; }
  Object.keys(s.filters || {}).forEach(function (k) {
    const v = s.filters[k];
    if (v == null || v === '' || (Array.isArray(v) && !v.length)) return;
    out['f_' + k] = v;
  });
  window.location.hash = 'screener?' + dscEncodeState(out);
}

/* The hook power-screener.js already calls. saved-views.js owns the
   Views button; this owns the Saved searches one. */
const _ssPrevHook = (typeof scrSavedViewClick === 'function') ? scrSavedViewClick : null;
function scrSavedViewClick(e, st) {
  if (e.target.closest('[data-ss-open]')) { ssOpenPanel(); return true; }
  return _ssPrevHook ? _ssPrevHook(e, st) : false;
}

window.addEventListener('hashchange', function () { setTimeout(ssInstall, 40); });
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () { setTimeout(ssInstall, 40); ssResumePending(); });
} else {
  setTimeout(ssInstall, 40); ssResumePending();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ssEvaluate: ssEvaluate, ssDescribe: ssDescribe,
                     ssFromScreener: ssFromScreener, ssFromSearch: ssFromSearch };
}
