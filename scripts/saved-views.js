/* ============================================================
   SAVED-VIEWS.JS
   Phase 2E. Persists a Screener configuration so a founder can
   return to a line of research instead of rebuilding it.

   A VIEW IS CONFIGURATION, NEVER RESULTS. It stores the entity
   type, the filters, the sort and the visible columns, and nothing
   else. Loading one re-runs it against current data, so a view
   saved last week reflects this week's research rather than a
   frozen snapshot. That is also why this is not Saved Search
   Alerts: nothing here watches for change, notifies, or runs on a
   schedule. That is Phase 3 and is deliberately absent.

   LOCAL FIRST, ACCOUNT SECOND. Views are written to localStorage
   immediately for everyone, and mirrored to Supabase when the
   viewer is signed in and the table exists. Requiring an account
   to name a filter set would be a worse product than losing the
   name on a new device, and the Screener itself is public.

   If the saved_views table has not been created, the mirror
   silently no-ops and local storage keeps working. The feature
   degrades to single-device rather than breaking.
   ============================================================ */

const SV_KEY = 'pbSavedViews';
const SV_MAX = 40;

let _svRemoteOk = null;      // null = untested, true/false = known

function svEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function svId() {
  return 'v' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/* ---------- local store ---------- */

function svLocalAll() {
  try {
    const raw = JSON.parse(localStorage.getItem(SV_KEY) || '[]');
    return Array.isArray(raw) ? raw : [];
  } catch (e) { return []; }
}

function svLocalWrite(list) {
  try { localStorage.setItem(SV_KEY, JSON.stringify(list.slice(0, SV_MAX))); }
  catch (e) { /* private mode: the session still works, nothing persists */ }
}

/* ---------- remote mirror ---------- */

function svClient() {
  if (typeof pbnClient === 'function') { try { return pbnClient(); } catch (e) { return null; } }
  if (typeof supabaseClient !== 'undefined' && supabaseClient) return supabaseClient;
  return null;
}

async function svRemotePull() {
  const c = svClient();
  if (!c) return null;
  try {
    const { data, error } = await c.from('saved_views')
      .select('id, name, entity_type, config, updated_at')
      .order('updated_at', { ascending: false })
      .limit(SV_MAX);
    if (error) throw error;
    _svRemoteOk = true;
    return (data || []).map(function (r) {
      return { id: r.id, name: r.name, type: r.entity_type,
               config: r.config || {}, updated: r.updated_at, remote: true };
    });
  } catch (e) {
    _svRemoteOk = false;                  // table missing or not permitted
    return null;
  }
}

async function svRemoteUpsert(v) {
  const c = svClient();
  if (!c || _svRemoteOk === false) return;
  try {
    await c.from('saved_views').upsert({
      id: v.id, name: v.name, entity_type: v.type,
      config: v.config, updated_at: new Date().toISOString()
    });
  } catch (e) { _svRemoteOk = false; }
}

async function svRemoteDelete(id) {
  const c = svClient();
  if (!c || _svRemoteOk === false) return;
  try { await c.from('saved_views').delete().eq('id', id); }
  catch (e) { _svRemoteOk = false; }
}

/* ---------- public API ---------- */

async function svAll() {
  const local = svLocalAll();
  const remote = await svRemotePull();
  if (!remote) return local;
  /* remote wins on id collision; local-only views are kept so a
     view made signed-out is not lost on sign-in */
  const byId = {};
  local.forEach(function (v) { byId[v.id] = v; });
  remote.forEach(function (v) { byId[v.id] = v; });
  return Object.keys(byId).map(function (k) { return byId[k]; })
    .sort(function (a, b) { return String(b.updated || '').localeCompare(String(a.updated || '')); });
}

/* Captures the CURRENT screener state, including the column choice,
   which lives in its own preference store rather than in the URL. */
function svCapture(name) {
  const st = (typeof scrReadState === 'function') ? scrReadState() : null;
  if (!st) return null;
  let cols = null;
  try { cols = JSON.parse(localStorage.getItem('pbScrCols:' + st.type) || 'null'); } catch (e) {}
  return {
    id: svId(), name: String(name || 'Untitled view').slice(0, 80),
    type: st.type,
    config: { filters: st.filters, sort: st.sort, dir: st.dir,
              density: st.density, columns: cols ? cols.order : null },
    updated: new Date().toISOString()
  };
}

async function svSave(name) {
  const v = svCapture(name);
  if (!v) return null;
  const list = svLocalAll();
  list.unshift(v);
  svLocalWrite(list);
  await svRemoteUpsert(v);
  if (typeof pbTrack === 'function') pbTrack('saved_view_created');
  return v;
}

async function svUpdate(id) {
  const list = svLocalAll();
  const i = list.findIndex(function (v) { return v.id === id; });
  const fresh = svCapture(i >= 0 ? list[i].name : 'Untitled view');
  if (!fresh) return;
  fresh.id = id;
  if (i >= 0) list[i] = fresh; else list.unshift(fresh);
  svLocalWrite(list);
  await svRemoteUpsert(fresh);
}

async function svRename(id, name) {
  const list = svLocalAll();
  const i = list.findIndex(function (v) { return v.id === id; });
  if (i < 0) return;
  list[i].name = String(name || '').slice(0, 80) || list[i].name;
  list[i].updated = new Date().toISOString();
  svLocalWrite(list);
  await svRemoteUpsert(list[i]);
}

async function svDelete(id) {
  svLocalWrite(svLocalAll().filter(function (v) { return v.id !== id; }));
  await svRemoteDelete(id);
}

/* Rebuilds the URL from the stored config and navigates. Columns
   are restored into their own preference key, because that is where
   the table reads them from. */
function svLoad(v) {
  if (!v) return;
  const cfg = v.config || {};
  if (cfg.columns && cfg.columns.length) {
    try { localStorage.setItem('pbScrCols:' + v.type, JSON.stringify({ order: cfg.columns })); }
    catch (e) {}
  }
  const out = { type: v.type };
  if (cfg.sort) { out.sort = cfg.sort; out.dir = cfg.dir || 'asc'; }
  if (cfg.density && cfg.density !== 'compact') out.density = cfg.density;
  Object.keys(cfg.filters || {}).forEach(function (k) {
    const val = cfg.filters[k];
    if (val == null || val === '' || (Array.isArray(val) && !val.length)) return;
    out['f_' + k] = val;
  });
  if (typeof pbTrack === 'function') pbTrack('saved_view_loaded');
  window.location.hash = 'screener?' + dscEncodeState(out);
}

/* ---------- UI ---------- */

/* Injected into the Screener toolbar after it renders, so
   power-screener.js does not need to know this file exists. */
function svInstall() {
  const tools = document.querySelector('#screenerView .scr-tools');
  if (!tools || tools.querySelector('[data-sv-open]')) return;
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'scr-tool';
  b.setAttribute('data-sv-open', '1');
  b.textContent = 'Views';
  tools.insertBefore(b, tools.firstChild);
}

async function svOpenPanel() {
  const list = await svAll();
  const el = document.createElement('div');
  el.className = 'scr-modal';
  el.innerHTML = '<div class="scr-modal-bd" data-sv-close="1"></div>' +
    '<div class="scr-modal-panel" role="dialog" aria-modal="true" aria-label="Saved views">' +
    '<div class="scr-modal-head">Saved views<button type="button" class="scr-esc" data-sv-close="1">Esc</button></div>' +
    '<div class="scr-modal-body">' +
      '<div class="sv-newrow">' +
        '<input id="svName" class="scr-text" type="text" placeholder="Name this view" maxlength="80">' +
        '<button type="button" class="ds-btn" data-sv-save="1">Save current</button>' +
      '</div>' +
      (list.length
        ? list.map(function (v) {
            const n = Object.keys((v.config && v.config.filters) || {}).length;
            return '<div class="sv-row" data-sv-id="' + svEsc(v.id) + '">' +
              '<button type="button" class="sv-load" data-sv-load="' + svEsc(v.id) + '">' +
                '<span class="sv-name">' + svEsc(v.name) + '</span>' +
                '<span class="sv-meta">' + svEsc(DSC_TYPE_LABEL[v.type] || v.type) +
                  ' · ' + n + ' filter' + (n === 1 ? '' : 's') +
                  (v.remote ? '' : ' · this device') + '</span>' +
              '</button>' +
              '<span class="sv-acts">' +
                '<button type="button" data-sv-update="' + svEsc(v.id) + '" title="Replace with the current view">Update</button>' +
                '<button type="button" data-sv-rename="' + svEsc(v.id) + '">Rename</button>' +
                '<button type="button" data-sv-del="' + svEsc(v.id) + '">Delete</button>' +
              '</span></div>';
          }).join('')
        : '<div class="sv-none">No saved views yet. Set up filters on the Screener, then save them here. ' +
          'A view stores the filters, not the results, so it re-runs against current data every time.</div>') +
    '</div></div>';
  document.body.appendChild(el);

  el.addEventListener('click', async function (e) {
    if (e.target.closest('[data-sv-close]')) { el.remove(); return; }
    if (e.target.closest('[data-sv-save]')) {
      const nm = (document.getElementById('svName').value || '').trim();
      if (!nm) { document.getElementById('svName').focus(); return; }
      await svSave(nm); el.remove(); svOpenPanel(); return;
    }
    const load = e.target.closest('[data-sv-load]');
    if (load) {
      const v = (await svAll()).find(function (x) { return x.id === load.getAttribute('data-sv-load'); });
      el.remove(); svLoad(v); return;
    }
    const up = e.target.closest('[data-sv-update]');
    if (up) { await svUpdate(up.getAttribute('data-sv-update')); el.remove(); svOpenPanel(); return; }
    const rn = e.target.closest('[data-sv-rename]');
    if (rn) {
      const id = rn.getAttribute('data-sv-rename');
      const cur = (await svAll()).find(function (x) { return x.id === id; });
      const nm = window.prompt('Rename this view', cur ? cur.name : '');
      if (nm != null) { await svRename(id, nm); el.remove(); svOpenPanel(); }
      return;
    }
    const del = e.target.closest('[data-sv-del]');
    if (del) {
      const id = del.getAttribute('data-sv-del');
      const row = el.querySelector('[data-sv-id="' + id + '"]');
      if (row && !row.classList.contains('is-confirm')) {
        row.classList.add('is-confirm');
        del.textContent = 'Confirm';
        return;
      }
      await svDelete(id); el.remove(); svOpenPanel(); return;
    }
  });
}

/* The hook power-screener.js already calls from its click handler. */
function scrSavedViewClick(e) {
  if (e.target.closest('[data-sv-open]')) { svOpenPanel(); return true; }
  return false;
}

window.addEventListener('hashchange', function () { setTimeout(svInstall, 30); });
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () { setTimeout(svInstall, 30); });
} else {
  setTimeout(svInstall, 30);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { svCapture: svCapture, svLocalAll: svLocalAll, svLoad: svLoad };
}
