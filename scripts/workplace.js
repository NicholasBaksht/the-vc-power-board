/* ============================================================
   WORKSPACE.JS
   Phase 7A. Workspaces, and the switch between them.

   PERSONAL IS NOT A WORKSPACE

   The current workspace is either a workspace id or null, and null
   means personal. There is no personal workspace row, no personal
   membership, and nothing was migrated to create one.

   That is the whole migration strategy. Every Phase 4 row still has
   workspace_id NULL, still matches the owner-only policy it always
   did, and a founder who never creates a team sees exactly what they
   saw before this file existed. There is no version of this where a
   bad migration hands somebody's pipeline to somebody else, because
   there was no migration.

   THE SWITCH IS VALIDATED, NOT TRUSTED

   The current workspace is remembered in localStorage, which is a
   note to self and not a credential. On load it is checked against
   the memberships the database actually returns, and anything that
   does not match falls back to personal. Being removed from a team
   therefore drops you out of it on the next load rather than leaving
   you pointed at a workspace you can no longer read.

   That check is a correctness measure, not a security one. Security
   is the RLS policies: a stale id in localStorage grants nothing,
   because every query for workspace content is filtered server-side
   by membership.

   ACTIONS CANNOT LAND IN THE WRONG WORKSPACE

   Writes take the workspace id explicitly rather than reading the
   global at the moment they run. A switch that happens while a form
   is open cannot redirect the save, because the save already holds
   the id it was opened with.
   ============================================================ */

const WS_CURRENT_KEY = 'pb_ws_current';

let wsState = {
  loaded: false,
  memberships: [],     /* ACTIVE memberships, newest first */
  current: null,       /* workspace id, or null for personal */
  loadError: false
};

function wsClient() {
  return (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null;
}

function wsSignedIn() {
  return typeof isSignedIn === 'function' && isSignedIn();
}

function wsEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function wsId() {
  return 'ws' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

/* Lowercase, hyphenated, and matched to the CHECK constraint in the
   migration. Generated here so a name with punctuation still produces
   a valid slug, and rejected by the database if this ever drifts. */
function wsSlugify(name) {
  let s = String(name || '').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40);
  if (s.length < 3) s = (s ? s + '-' : 'team-') + Math.random().toString(36).slice(2, 6);
  return s.replace(/^-+|-+$/g, '');
}

/* ------------------------------------------------------------
   LOAD
   ------------------------------------------------------------ */

async function wsLoad(opts) {
  opts = opts || {};
  if (wsState.loaded && !opts.force) return wsState;

  wsState.loadError = false;
  if (!wsSignedIn()) {
    wsState.memberships = [];
    wsState.current = null;
    wsState.loaded = true;
    return wsState;
  }

  const c = wsClient();
  if (!c) { wsState.loadError = true; return wsState; }

  try {
    /* One query. The join returns the workspace with the membership,
       so a team list does not become one request per team. */
    const { data, error } = await c
      .from('workspace_members')
      .select('id,role,status,joined_at,workspace_id,' +
              'workspaces(id,name,slug,owner_user_id,company_slug,company_name,archived_at,created_at)')
      .eq('status', 'ACTIVE')
      .order('joined_at', { ascending: false });
    if (error) throw error;

    wsState.memberships = (data || [])
      .filter(function (r) { return r.workspaces; })
      .map(function (r) {
        return {
          membershipId: r.id, role: r.role, joinedAt: r.joined_at,
          id: r.workspaces.id, name: r.workspaces.name, slug: r.workspaces.slug,
          ownerUserId: r.workspaces.owner_user_id,
          companySlug: r.workspaces.company_slug, companyName: r.workspaces.company_name,
          archivedAt: r.workspaces.archived_at, createdAt: r.workspaces.created_at
        };
      });
  } catch (e) {
    /* A failed read is not "you have no workspaces". Saying that
       would drop someone into personal and make their team look
       deleted. */
    wsState.loadError = true;
    wsState.memberships = [];
    wsState.current = null;
    wsState.loaded = true;
    return wsState;
  }

  let saved = null;
  try { saved = localStorage.getItem(WS_CURRENT_KEY); } catch (e) { saved = null; }
  wsState.current = wsResolve(saved);
  wsState.loaded = true;
  return wsState;
}

/* Falls back to personal for anything not in the active, unarchived
   list. Covers a removed member, an archived workspace, a stale id
   from another account on a shared browser, and a hand-edited value. */
function wsResolve(id) {
  if (!id) return null;
  const hit = wsState.memberships.filter(function (m) {
    return m.id === id && !m.archivedAt;
  })[0];
  return hit ? hit.id : null;
}

function wsCurrent() {
  if (!wsState.current) return null;
  return wsState.memberships.filter(function (m) { return m.id === wsState.current; })[0] || null;
}

function wsCurrentId() { return wsState.current || null; }
function wsIsPersonal() { return !wsState.current; }

function wsRole(id) {
  const m = wsState.memberships.filter(function (x) { return x.id === (id || wsState.current); })[0];
  return m ? m.role : null;
}

/* The client-side mirror of pb_ws_can_write. Used only to decide what
   to draw. The database decides what is allowed. */
function wsCanWrite(id) {
  const r = wsRole(id);
  return r === 'OWNER' || r === 'ADMIN' || r === 'MEMBER';
}
function wsCanAdmin(id) {
  const r = wsRole(id);
  return r === 'OWNER' || r === 'ADMIN';
}

/* ------------------------------------------------------------
   SWITCH
   ------------------------------------------------------------ */

function wsSwitch(id) {
  const next = wsResolve(id);
  if (next === wsState.current) return next;
  wsState.current = next;
  try {
    if (next) localStorage.setItem(WS_CURRENT_KEY, next);
    else localStorage.removeItem(WS_CURRENT_KEY);
  } catch (e) { /* private browsing; the switch still holds in memory */ }

  if (typeof pbTrack === 'function') pbTrack('workspace_switched');
  /* Caches keyed by nothing are wrong once the scope changes. The
     event lets each feature clear its own rather than this file
     knowing about all of them. */
  try {
    window.dispatchEvent(new CustomEvent('pb:workspace-changed', { detail: { workspaceId: next } }));
  } catch (e) { /* older engines */ }
  wsPaintSwitcher();
  return next;
}

/* ------------------------------------------------------------
   CREATE, RENAME, ARCHIVE
   ------------------------------------------------------------ */

async function wsCreate(name, opts) {
  opts = opts || {};
  const c = wsClient();
  if (!c || !wsSignedIn()) return { error: 'Not signed in.' };
  const clean = String(name || '').trim();
  if (!clean) return { error: 'A workspace needs a name.' };
  if (clean.length > 80) return { error: 'That name is too long.' };

  const id = wsId();
  try {
    /* One RPC, not two inserts. A workspace whose owner row failed to
       insert is unreadable by everyone including its creator, so the
       two writes have to be one transaction. */
    const { error } = await c.rpc('pb_ws_create', {
      p_id: id,
      p_name: clean,
      p_slug: wsSlugify(clean) + '-' + id.slice(-4),
      p_company_slug: opts.companySlug || null,
      p_company_name: opts.companyName || null
    });
    if (error) throw error;
  } catch (e) {
    return { error: 'Could not create the workspace. ' + (e.message || '') };
  }

  if (typeof pbTrack === 'function') pbTrack('workspace_created');
  await wsLoad({ force: true });
  wsSwitch(id);
  return { ok: true, id: id };
}

async function wsRename(id, name) {
  const c = wsClient();
  if (!c) return { error: 'Not signed in.' };
  const clean = String(name || '').trim();
  if (!clean) return { error: 'A workspace needs a name.' };
  try {
    const { error } = await c.from('workspaces')
      .update({ name: clean, updated_at: new Date().toISOString() }).eq('id', id);
    if (error) throw error;
  } catch (e) {
    return { error: 'Could not rename. ' + (e.message || '') };
  }
  await wsLoad({ force: true });
  wsPaintSwitcher();
  return { ok: true };
}

/* Archive, never delete. The migration deliberately has no DELETE
   policy, so this is the only removal the product offers and the
   fundraising history stays intact behind it. */
async function wsArchive(id, undo) {
  const c = wsClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.from('workspaces')
      .update({ archived_at: undo ? null : new Date().toISOString(),
                updated_at: new Date().toISOString() })
      .eq('id', id);
    if (error) throw error;
  } catch (e) {
    return { error: 'Could not archive. ' + (e.message || '') };
  }
  await wsLoad({ force: true });
  /* Leaving someone inside a workspace they just archived would show
     them a scope that no longer accepts work. */
  if (!undo && wsState.current === id) wsSwitch(null);
  else wsPaintSwitcher();
  if (typeof pbTrack === 'function') pbTrack(undo ? 'workspace_restored' : 'workspace_archived');
  return { ok: true };
}

/* ------------------------------------------------------------
   THE SWITCHER

   Rendered into the header only when the user actually has a team.
   A solo founder never sees a workspace control, is never asked to
   create one, and the product does not acquire a team-first shape it
   has not earned.
   ------------------------------------------------------------ */

function wsPaintSwitcher() {
  const host = document.getElementById('wsSwitcher');
  if (!host) return;

  const teams = wsState.memberships.filter(function (m) { return !m.archivedAt; });
  if (!wsSignedIn() || !teams.length) { host.innerHTML = ''; host.hidden = true; return; }
  host.hidden = false;

  const cur = wsCurrent();
  const label = cur ? cur.name : 'Personal';

  host.innerHTML =
    '<button type="button" class="ws-btn" id="wsBtn" aria-haspopup="true" aria-expanded="false">' +
      '<span class="ws-btn-kicker">Workspace</span>' +
      '<span class="ws-btn-name">' + wsEsc(label) + '</span>' +
    '</button>' +
    '<div class="ws-menu" id="wsMenu" role="menu" hidden>' +
      '<div class="ws-menu-head">Switch workspace</div>' +
      '<button type="button" role="menuitem" class="ws-item' + (!cur ? ' is-on' : '') + '" data-ws="">' +
        '<span class="ws-item-name">Personal</span>' +
        '<span class="ws-item-meta">Only you. Nothing here is shared.</span>' +
      '</button>' +
      teams.map(function (m) {
        return '<button type="button" role="menuitem" class="ws-item' +
          (cur && cur.id === m.id ? ' is-on' : '') + '" data-ws="' + wsEsc(m.id) + '">' +
          '<span class="ws-item-name">' + wsEsc(m.name) + '</span>' +
          '<span class="ws-item-meta">' + wsEsc(wsRoleLabel(m.role)) + '</span>' +
        '</button>';
      }).join('') +
      '<div class="ws-menu-foot"><a href="#workspaces">Manage workspaces</a></div>' +
    '</div>';

  wsBindSwitcher(host);
}

function wsRoleLabel(role) {
  return { OWNER: 'Owner', ADMIN: 'Admin', MEMBER: 'Member', VIEWER: 'Viewer, read only' }[role] || role;
}

function wsBindSwitcher(host) {
  if (host.dataset.wsBound) return;
  host.dataset.wsBound = '1';

  host.addEventListener('click', function (e) {
    const btn = e.target.closest('#wsBtn');
    const menu = document.getElementById('wsMenu');
    if (btn && menu) {
      const open = !menu.hidden;
      menu.hidden = open;
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      return;
    }
    const item = e.target.closest('[data-ws]');
    if (item) {
      wsSwitch(item.getAttribute('data-ws') || null);
      const m = document.getElementById('wsMenu');
      if (m) m.hidden = true;
    }
  });

  /* Escape closes it, and focus goes back to the button rather than
     nowhere. Every other modal on the site does this since Phase 3. */
  host.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    const menu = document.getElementById('wsMenu');
    if (menu && !menu.hidden) {
      menu.hidden = true;
      const b = document.getElementById('wsBtn');
      if (b) { b.setAttribute('aria-expanded', 'false'); b.focus(); }
    }
  });

  document.addEventListener('click', function (e) {
    if (host.contains(e.target)) return;
    const menu = document.getElementById('wsMenu');
    if (menu && !menu.hidden) {
      menu.hidden = true;
      const b = document.getElementById('wsBtn');
      if (b) b.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ------------------------------------------------------------
   THE WORKSPACES PAGE
   ------------------------------------------------------------ */

async function renderWorkspaces() {
  const host = document.getElementById('workspacesView');
  if (!host) return;

  if (!wsSignedIn()) {
    host.innerHTML = wsShell(
      '<p class="ws-empty">Workspaces are how a team shares a raise, so this needs you ' +
      'signed in.</p><p class="ws-empty"><a class="ds-btn" href="#signin">Sign in</a></p>');
    return;
  }

  host.innerHTML = wsShell('<p class="ws-empty">Loading your workspaces.</p>');
  await wsLoad({ force: true });

  if (wsState.loadError) {
    host.innerHTML = wsShell(
      '<p class="ws-empty">Your workspaces could not be loaded. This is a loading problem, ' +
      'not an empty list, and nothing has been changed.</p>');
    return;
  }

  const teams = wsState.memberships.filter(function (m) { return !m.archivedAt; });
  const archived = wsState.memberships.filter(function (m) { return m.archivedAt; });
  const cur = wsCurrent();

  let h = '<div class="ws-scope"><strong>Personal stays personal.</strong> ' +
    'Your existing raise, pipeline, notes, saved searches and shortlist belong to you and ' +
    'were not moved anywhere. Creating a workspace does not share them. Nothing becomes ' +
    'visible to a teammate until you explicitly put it in a workspace.</div>';

  h += '<h2 class="ws-h">Your workspaces</h2>' +
    '<div class="ws-list">' +
      '<div class="ws-row' + (!cur ? ' is-current' : '') + '">' +
        '<div class="ws-row-main">' +
          '<span class="ws-row-name">Personal</span>' +
          '<span class="ws-row-meta">Only you. This is where everything you already had lives.</span>' +
        '</div>' +
        (cur ? '<button type="button" class="ws-mini" data-ws-go="">Switch to</button>'
             : '<span class="ws-current-tag">Current</span>') +
      '</div>' +
      teams.map(function (m) {
        const isCur = cur && cur.id === m.id;
        return '<div class="ws-row' + (isCur ? ' is-current' : '') + '">' +
          '<div class="ws-row-main">' +
            '<span class="ws-row-name">' + wsEsc(m.name) + '</span>' +
            '<span class="ws-row-meta">' + wsEsc(wsRoleLabel(m.role)) +
              (m.companyName ? ' &middot; ' + wsEsc(m.companyName) : '') + '</span>' +
          '</div>' +
          '<div class="ws-row-acts">' +
            (isCur ? '<span class="ws-current-tag">Current</span>'
                   : '<button type="button" class="ws-mini" data-ws-go="' + wsEsc(m.id) + '">Switch to</button>') +
            (wsCanAdmin(m.id)
              ? '<button type="button" class="ws-mini" data-ws-rename="' + wsEsc(m.id) + '">Rename</button>' +
                '<button type="button" class="ws-mini" data-ws-archive="' + wsEsc(m.id) + '">Archive</button>'
              : '') +
          '</div></div>';
      }).join('') +
    '</div>';

  h += '<h2 class="ws-h">Create a workspace</h2>' +
    '<p class="ws-sub">A workspace is a shared space for one team. Everything in it is ' +
    'visible to the people you invite, and nothing outside it is.</p>' +
    '<form class="ws-form" id="wsCreateForm">' +
      '<label class="ws-label" for="wsName">Workspace name</label>' +
      '<input class="ws-input" id="wsName" name="wsName" type="text" maxlength="80" ' +
        'placeholder="Acme, Seed round" autocomplete="off" required>' +
      '<button type="submit" class="ds-btn" id="wsCreateBtn">Create workspace</button>' +
      '<span class="ws-status" id="wsStatus" role="status"></span>' +
    '</form>' +
    '<p class="ws-note">You become the owner. Nothing is shared until you invite someone ' +
    'and put a raise in it.</p>';

  if (archived.length) {
    h += '<h2 class="ws-h">Archived</h2>' +
      '<p class="ws-sub">Archived workspaces are hidden from the switcher. Nothing in them ' +
      'is deleted.</p><div class="ws-list">' +
      archived.map(function (m) {
        return '<div class="ws-row is-archived"><div class="ws-row-main">' +
          '<span class="ws-row-name">' + wsEsc(m.name) + '</span>' +
          '<span class="ws-row-meta">Archived</span></div>' +
          (wsCanAdmin(m.id)
            ? '<button type="button" class="ws-mini" data-ws-restore="' + wsEsc(m.id) + '">Restore</button>'
            : '') +
        '</div>';
      }).join('') + '</div>';
  }

  host.innerHTML = wsShell(h);
  wsBindPage(host);
  if (typeof pbTrack === 'function') pbTrack('workspaces_opened');
}

function wsShell(inner) {
  return '<div class="ds-wrap ws-wrap">' +
    '<div class="ds-kicker">Workspaces</div>' +
    '<h1 class="ds-h1">Who you are raising with.</h1>' +
    '<p class="ds-sub">A workspace lets a founding team work one raise together. ' +
    'Using Power Board on your own needs none of this.</p>' + inner + '</div>';
}

function wsBindPage(host) {
  if (host.dataset.wsPageBound) return;
  host.dataset.wsPageBound = '1';

  host.addEventListener('submit', async function (e) {
    if (!e.target.closest('#wsCreateForm')) return;
    e.preventDefault();
    const input = document.getElementById('wsName');
    const btn = document.getElementById('wsCreateBtn');
    const status = document.getElementById('wsStatus');
    if (!input) return;
    if (btn) { btn.disabled = true; btn.textContent = 'Creating'; }
    const res = await wsCreate(input.value);
    if (btn) { btn.disabled = false; btn.textContent = 'Create workspace'; }
    if (res.error) { if (status) status.textContent = res.error; return; }
    renderWorkspaces();
  });

  host.addEventListener('click', async function (e) {
    const go = e.target.closest('[data-ws-go]');
    if (go) { wsSwitch(go.getAttribute('data-ws-go') || null); renderWorkspaces(); return; }

    const ren = e.target.closest('[data-ws-rename]');
    if (ren) {
      const id = ren.getAttribute('data-ws-rename');
      const m = wsState.memberships.filter(function (x) { return x.id === id; })[0];
      const name = window.prompt('Rename this workspace', m ? m.name : '');
      if (name == null) return;
      const r = await wsRename(id, name);
      if (r.error) window.alert(r.error);
      renderWorkspaces();
      return;
    }

    const arc = e.target.closest('[data-ws-archive]');
    if (arc) {
      const id = arc.getAttribute('data-ws-archive');
      const m = wsState.memberships.filter(function (x) { return x.id === id; })[0];
      /* Named in the confirmation, because "are you sure" beside a
         list of similar rows is how the wrong one gets archived. */
      if (!window.confirm('Archive "' + (m ? m.name : 'this workspace') + '"?\n\n' +
          'It disappears from the switcher for everyone in it. Nothing is deleted and ' +
          'you can restore it.')) return;
      const r = await wsArchive(id, false);
      if (r.error) window.alert(r.error);
      renderWorkspaces();
      return;
    }

    const res = e.target.closest('[data-ws-restore]');
    if (res) {
      const r = await wsArchive(res.getAttribute('data-ws-restore'), true);
      if (r.error) window.alert(r.error);
      renderWorkspaces();
    }
  });
}

/* ------------------------------------------------------------
   BOOT
   ------------------------------------------------------------ */

async function wsBoot() {
  if (!wsSignedIn()) { wsPaintSwitcher(); return; }
  await wsLoad({ force: true });
  wsPaintSwitcher();
}

if (typeof document !== 'undefined' && document.addEventListener) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(wsBoot, 1200); });
  } else {
    setTimeout(wsBoot, 1200);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    wsSlugify: wsSlugify, wsResolve: wsResolve, wsRoleLabel: wsRoleLabel,
    wsCanWrite: wsCanWrite, wsCanAdmin: wsCanAdmin, wsState: wsState,
    WS_CURRENT_KEY: WS_CURRENT_KEY
  };
}
