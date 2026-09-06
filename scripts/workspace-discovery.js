/* ============================================================
   WORKSPACE-DISCOVERY.JS
   Phase 7D. Saved Views, Saved Searches and Shortlists in a team.

   THE SAME THREE MOVES AS 7C

   1. Wrap the row mappers, because they are whitelists and drop a
      column added by a migration without saying so.
   2. Wrap the loaders to scope results to the current workspace,
      assigning rather than declaring so the wrapper cannot capture
      itself.
   3. Share through an RPC, because a policy gates the row and not
      the column, so workspace_id must not be client-writable.

   WHAT IS DELIBERATELY NOT SHARED

   A shortlist and a pipeline are different things and stay different.
   Shortlist means "interesting". Pipeline means "we are actually
   pursuing this". Merging them would lose the distinction a founder
   is actually keeping, so a shared shortlist is still a shortlist.

   THE NOTIFICATION RULE

   Sharing a search does not sign anybody up. The person who shared it
   keeps receiving what they already received; everyone else starts at
   silence and opts in for themselves. Nobody can subscribe anybody
   else, which is enforced in the policy rather than here.
   ============================================================ */

let wdState = { subs: null };

function wdEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function wdClient() {
  return (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null;
}

function wdWs() {
  return (typeof wsCurrentId === 'function') ? wsCurrentId() : null;
}

function wdScopeOf(row) {
  if (!row) return null;
  return row.workspaceId || row.workspace_id || null;
}

/* Shared by every loader wrapper: keep rows whose scope matches the
   scope the founder is currently looking at. */
function wdInScope(row) {
  const ws = wdWs();
  const rws = wdScopeOf(row);
  return ws ? rws === ws : !rws;
}

/* ------------------------------------------------------------
   MAPPERS

   ssRowToDef is a whitelist, exactly like frRowToDef in 7C. Without
   this the filter below reads undefined on every row and quietly
   shows the wrong set in both directions.
   ------------------------------------------------------------ */

if (typeof ssRowToDef === 'function') {
  const _wdPrevSsRow = ssRowToDef;
  ssRowToDef = function (r) {
    const def = _wdPrevSsRow(r);
    if (def && typeof def === 'object') {
      def.workspaceId = (r && r.workspace_id) || null;
    }
    return def;
  };
}

/* ------------------------------------------------------------
   LOADERS
   ------------------------------------------------------------ */

if (typeof ssAll === 'function') {
  const _wdPrevSsAll = ssAll;
  ssAll = async function () {
    const rows = await _wdPrevSsAll.apply(null, arguments);
    if (!Array.isArray(rows)) return rows;
    return rows.filter(wdInScope);
  };
}

if (typeof svRemotePull === 'function') {
  const _wdPrevSvPull = svRemotePull;
  svRemotePull = async function () {
    const rows = await _wdPrevSvPull.apply(null, arguments);
    if (!Array.isArray(rows)) return rows;
    return rows.filter(wdInScope);
  };
}

/* Saved Views also keep a local copy for signed-out use. That copy is
   personal by definition, so it is left alone: filtering it by a
   workspace it never belonged to would empty the list for a founder
   who is simply not signed in. */

if (typeof window !== 'undefined' && window.addEventListener) {
  window.addEventListener('pb:workspace-changed', function () {
    wdState.subs = null;
    try { if (typeof svInvalidate === 'function') svInvalidate(); } catch (e) {}
    try { if (typeof ssInvalidate === 'function') ssInvalidate(); } catch (e) {}
  });
}

/* ------------------------------------------------------------
   SHARING
   ------------------------------------------------------------ */

async function wdShareView(id, ws) {
  const c = wdClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.rpc('pb_view_share', { p_id: id, p_ws: ws || null });
    if (error) throw error;
  } catch (e) {
    return { error: String((e && e.message) || '').replace(/^.*?:\s*/, '') || 'Could not share this view.' };
  }
  if (typeof pbTrack === 'function') {
    pbTrack(ws ? 'workspace_view_shared' : 'workspace_view_unshared');
  }
  return { ok: true };
}

async function wdShareSearch(id, ws) {
  const c = wdClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.rpc('pb_search_share', { p_id: id, p_ws: ws || null });
    if (error) throw error;
  } catch (e) {
    return { error: String((e && e.message) || '').replace(/^.*?:\s*/, '') || 'Could not share this search.' };
  }
  wdState.subs = null;
  if (typeof pbTrack === 'function') {
    pbTrack(ws ? 'workspace_search_shared' : 'workspace_search_unshared');
  }
  return { ok: true };
}

function wdShareViewConfirm(name, wsName) {
  return 'Share "' + name + '" with ' + wsName + '?\n\n' +
    'Everyone in the workspace will see this screener configuration and can\n' +
    'edit it. It contains your filters and sort order, not any private notes.';
}

function wdShareSearchConfirm(name, wsName) {
  return 'Share "' + name + '" with ' + wsName + '?\n\n' +
    'Everyone in the workspace will be able to see and run this search.\n\n' +
    'Nobody is signed up for alerts by it. You keep the alerts you already\n' +
    'had, and each teammate chooses for themselves whether to be notified.';
}

/* ------------------------------------------------------------
   SUBSCRIPTIONS
   ------------------------------------------------------------ */

async function wdMySubs(force) {
  if (wdState.subs && !force) return wdState.subs;
  const c = wdClient();
  if (!c) return {};
  try {
    const { data, error } = await c.from('saved_search_subs').select('saved_search_id');
    if (error) throw error;
    const map = {};
    (data || []).forEach(function (r) { map[r.saved_search_id] = true; });
    wdState.subs = map;
  } catch (e) { wdState.subs = {}; }
  return wdState.subs;
}

async function wdSetSubscribed(searchId, on) {
  const c = wdClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    if (on) {
      const { error } = await c.from('saved_search_subs').insert({ saved_search_id: searchId });
      /* A duplicate is the state we wanted, not a failure. */
      if (error && !/duplicate|conflict/i.test(error.message || '')) throw error;
    } else {
      const { error } = await c.from('saved_search_subs')
        .delete().eq('saved_search_id', searchId);
      if (error) throw error;
    }
  } catch (e) {
    return { error: 'Could not change your alert setting for this search.' };
  }
  if (wdState.subs) wdState.subs[searchId] = on ? true : undefined;
  if (typeof pbTrack === 'function') {
    pbTrack(on ? 'workspace_search_subscribed' : 'workspace_search_unsubscribed');
  }
  return { ok: true };
}

/* ------------------------------------------------------------
   LABELS

   A shared object has to say so wherever it appears. The failure mode
   this phase risks is a founder editing something they think is
   theirs and changing it for four other people.
   ------------------------------------------------------------ */

function wdScopeLabel(row) {
  const ws = wdScopeOf(row);
  if (!ws) return '<span class="wd-scope is-personal">Only you</span>';
  const m = (typeof wsState !== 'undefined' && wsState.memberships)
    ? wsState.memberships.filter(function (x) { return x.id === ws; })[0] : null;
  return '<span class="wd-scope">Shared with ' +
    wdEsc(m ? m.name : 'your workspace') + '</span>';
}

function wdSubToggle(row, subscribed) {
  if (!wdScopeOf(row)) return '';
  return '<label class="wd-sub">' +
    '<input type="checkbox" data-wd-sub="' + wdEsc(row.id) + '"' +
      (subscribed ? ' checked' : '') + '> ' +
    '<span>Alert me about changes to this search</span></label>';
}

/* Who this search will actually notify, said plainly. A count is
   enough: naming the teammates who are and are not watching invites
   reading something into it. */
function wdSubSummary(row, count) {
  if (!wdScopeOf(row)) return '';
  if (!count) return '<span class="wd-note">Nobody is being alerted by this search yet.</span>';
  return '<span class="wd-note">' + count +
    (count === 1 ? ' person is' : ' people are') + ' being alerted by this search.</span>';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    wdScopeOf: wdScopeOf, wdInScope: wdInScope, wdScopeLabel: wdScopeLabel,
    wdSubToggle: wdSubToggle, wdSubSummary: wdSubSummary,
    wdShareViewConfirm: wdShareViewConfirm, wdShareSearchConfirm: wdShareSearchConfirm,
    wdState: wdState
  };
}
