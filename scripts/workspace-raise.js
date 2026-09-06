/* ============================================================
   WORKSPACE-RAISE.JS
   Phase 7C. The shared raise.

   THE MIGRATION DID MOST OF THIS

   Every Phase 4 loader queries without a user filter and lets RLS
   decide what comes back. So once a raise carries a workspace_id and
   the policies accept a member, frAll returns it, ptTargets returns
   its targets, and stages, notes, activities and next actions all
   work between teammates with no change to those files at all.

   That is the payoff of putting the scope on the raise and deriving
   everything else from it, and it is why this file is small.

   THE ONE BUG IT CREATES, AND FIXES

   frAll now returns personal AND workspace raises in one list, and
   frActive picks the first active one. A founder sitting in Personal
   could therefore be handed a teammate's shared raise, and every
   "add to raise" would land in the wrong scope.

   So frAll is wrapped to return only raises belonging to the CURRENT
   workspace: personal raises when personal, that workspace's raises
   when inside one. The wrapper is ASSIGNED rather than declared,
   because a function declaration hoists above the const that captured
   the original and the wrapper would call itself forever. That
   happened once already, in Phase 4, and took a while to find.

   SHARING IS AN ACT

   A raise is created personal and stays personal until somebody moves
   it, through one confirmation that lists what becomes visible.
   Notes do not travel: they default to PERSONAL in the database and
   sharing one is a separate, per-note decision.
   ============================================================ */

let wrState = { assignees: [], assigneesFor: null };

function wrEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function wrClient() {
  return (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null;
}

function wrWs() {
  return (typeof wsCurrentId === 'function') ? wsCurrentId() : null;
}

/* ------------------------------------------------------------
   SCOPE THE RAISE LIST TO THE CURRENT WORKSPACE
   ------------------------------------------------------------ */

/* THE MAPPERS ARE WHITELISTS, WHICH IS THE TRAP HERE.
   frRowToDef and ptRowToDef build a NEW object listing each field by
   hand, so a column added by a migration is silently dropped before
   any of this file sees it. A first draft filtered on r.workspaceId,
   got undefined for every raise, and would have shown personal
   raises inside a workspace and hidden shared ones. It looked like it
   worked, because the filter still ran.

   Wrapping the mappers rather than editing them keeps the Phase 4
   files untouched. Both are global function declarations, so the
   internal calls inside frAll and ptTargets resolve to the wrapper at
   call time. */

if (typeof frRowToDef === 'function') {
  const _wrPrevFrRow = frRowToDef;
  frRowToDef = function (r) {
    const def = _wrPrevFrRow(r);
    if (def && typeof def === 'object') {
      def.workspaceId = (r && r.workspace_id) || null;
    }
    return def;
  };
}

if (typeof ptRowToDef === 'function') {
  const _wrPrevPtRow = ptRowToDef;
  ptRowToDef = function (r) {
    const def = _wrPrevPtRow(r);
    if (def && typeof def === 'object') {
      def.assigneeUserId = (r && r.assignee_user_id) || null;
    }
    return def;
  };
}

if (typeof frAll === 'function') {
  const _wrPrevFrAll = frAll;
  /* Assigned, never declared. See the header. */
  frAll = async function (opts) {
    const rows = await _wrPrevFrAll(opts);
    if (!Array.isArray(rows)) return rows;   /* null means load failure */
    const ws = wrWs();
    return rows.filter(function (r) {
      const rws = r.workspaceId || r.workspace_id || null;
      return ws ? rws === ws : !rws;
    });
  };
}

/* frActive calls frAll through the same late-bound global, so scoping
   frAll scopes frActive too, and with it every caller: add-to-raise,
   My Power Board, the pipeline, raise analytics and the exporter. */

/* Switching scope invalidates every Phase 4 cache. Without this a
   founder switches to their team and still sees their own pipeline,
   which is the most confusing possible outcome. */
if (typeof window !== 'undefined' && window.addEventListener) {
  window.addEventListener('pb:workspace-changed', function () {
    try { if (typeof frInvalidate === 'function') frInvalidate(); } catch (e) {}
    try { if (typeof ptInvalidate === 'function') ptInvalidate(); } catch (e) {}
    try { if (typeof frCache !== 'undefined') { frCache = null; frLoaded = false; } } catch (e) {}
    try { if (typeof ptCache !== 'undefined') { for (const k in ptCache) delete ptCache[k]; } } catch (e) {}
    wrState.assignees = []; wrState.assigneesFor = null;
  });
}

/* ------------------------------------------------------------
   ASSIGNEES
   ------------------------------------------------------------ */

async function wrAssignees(ws) {
  if (!ws) return [];
  if (wrState.assigneesFor === ws) return wrState.assignees;
  const c = wrClient();
  if (!c) return [];
  try {
    const { data, error } = await c.rpc('pb_ws_assignees', { p_ws: ws });
    if (error) throw error;
    wrState.assignees = data || [];
    wrState.assigneesFor = ws;
  } catch (e) { wrState.assignees = []; }
  return wrState.assignees;
}

function wrAssigneeName(userId) {
  const a = wrState.assignees.filter(function (x) { return x.user_id === userId; })[0];
  if (!a) return null;
  /* The local part only. A full address in a pipeline row is noise,
     and the roster on the people page carries the real thing. */
  return String(a.email || '').split('@')[0] || a.email;
}

function wrAssigneeSelect(current, name) {
  if (!wrState.assignees.length) return '';
  return '<select class="wr-assignee" name="' + wrEsc(name || 'assignee') + '" ' +
    'aria-label="Assign to">' +
    '<option value="">Unassigned</option>' +
    wrState.assignees.map(function (a) {
      return '<option value="' + wrEsc(a.user_id) + '"' +
        (a.user_id === current ? ' selected' : '') + '>' +
        wrEsc(String(a.email).split('@')[0]) + '</option>';
    }).join('') + '</select>';
}

async function wrAssignTarget(targetId, userId) {
  const c = wrClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.from('pipeline_targets')
      .update({ assignee_user_id: userId || null, updated_at: new Date().toISOString() })
      .eq('id', targetId);
    if (error) throw error;
  } catch (e) { return { error: 'Could not assign. ' + (e.message || '') }; }
  if (typeof pbTrack === 'function') pbTrack('workspace_target_assigned');
  return { ok: true };
}

async function wrAssignAction(actionId, userId) {
  const c = wrClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.from('pipeline_next_actions')
      .update({ assignee_user_id: userId || null, updated_at: new Date().toISOString() })
      .eq('id', actionId);
    if (error) throw error;
  } catch (e) { return { error: 'Could not assign. ' + (e.message || '') }; }
  if (typeof pbTrack === 'function') pbTrack('workspace_action_assigned');
  return { ok: true };
}

/* ------------------------------------------------------------
   NOTE VISIBILITY

   Only offered inside a shared raise. In a personal raise there is
   nobody to share with, and a toggle that does nothing is worse than
   no toggle.
   ------------------------------------------------------------ */

function wrNoteVisibilityControl(ws) {
  if (!ws) return '';
  return '<label class="wr-vis">' +
    '<input type="checkbox" name="wrNoteShared" checked> ' +
    '<span>Visible to the workspace. Uncheck to keep this note to yourself.</span>' +
  '</label>';
}

async function wrSetNoteVisibility(noteId, shared) {
  const c = wrClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.from('pipeline_notes')
      .update({ visibility: shared ? 'WORKSPACE' : 'PERSONAL',
                updated_at: new Date().toISOString() })
      .eq('id', noteId);
    if (error) throw error;
  } catch (e) { return { error: 'Could not change who can see this note.' }; }
  return { ok: true };
}

function wrNoteBadge(note) {
  const v = note.visibility || 'PERSONAL';
  /* Said in words on the note itself. The whole risk this phase
     introduces is a founder mistaking one for the other. */
  return v === 'WORKSPACE'
    ? '<span class="wr-note-vis">Shared with the workspace</span>'
    : '<span class="wr-note-vis is-private">Only you</span>';
}

/* ------------------------------------------------------------
   ACTIVITY ATTRIBUTION

   pipeline_activities.user_id is the actor, set by the insert that
   recorded it, so attribution needs no new column. This turns it into
   a name where one is known.
   ------------------------------------------------------------ */

function wrActor(activity) {
  if (!activity || !activity.user_id) return null;
  const me = (typeof currentUser !== 'undefined' && currentUser) ? currentUser.id : null;
  if (activity.user_id === me) return 'You';
  return wrAssigneeName(activity.user_id) || 'A teammate';
}

/* ------------------------------------------------------------
   MOVING A RAISE

   The confirmation lists what becomes visible and what does not,
   because "share this raise?" is not enough information to answer.
   ------------------------------------------------------------ */

async function wrMoveRaise(raiseId, ws, wsName) {
  const c = wrClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.rpc('pb_raise_move', { p_raise: raiseId, p_ws: ws || null });
    if (error) throw error;
  } catch (e) {
    const m = (e && e.message) ? String(e.message).replace(/^.*?:\s*/, '') : '';
    return { error: m || 'Could not move the raise.' };
  }
  if (typeof pbTrack === 'function') {
    pbTrack(ws ? 'workspace_raise_shared' : 'workspace_raise_unshared');
  }
  try { if (typeof frCache !== 'undefined') { frCache = null; frLoaded = false; } } catch (e) {}
  return { ok: true };
}

function wrMoveConfirmText(wsName, targetCount) {
  return 'Share this raise with ' + wsName + '?\n\n' +
    'Everyone in the workspace will be able to see and work on:\n' +
    '  the ' + targetCount + ' investors in it, their stages and relationships\n' +
    '  partner contacts, tags, activity history and next actions\n' +
    '  commitment amounts and pass reasons\n\n' +
    'They will NOT see your existing notes. Every note you have written stays\n' +
    'private to you, and you choose individually which ones to share.\n\n' +
    'You can move it back to personal at any time.';
}

function wrUnshareConfirmText(wsName) {
  return 'Move this raise out of ' + wsName + ' and back to personal?\n\n' +
    'Your teammates lose access to it immediately. Nothing is deleted, and the\n' +
    'activity history of what they did stays recorded.';
}

/* ------------------------------------------------------------
   THE SCOPE BANNER

   Rendered above the pipeline so the answer to "who can see this"
   is never more than a glance away. This is the single most
   important piece of UI in the phase.
   ------------------------------------------------------------ */

function wrScopeBanner(raise) {
  if (!raise) return '';
  const rws = raise.workspaceId || raise.workspace_id || null;
  if (!rws) {
    return '<div class="wr-scope is-personal">' +
      '<strong>Personal raise.</strong> Only you can see this. ' +
      'Nobody in any workspace has access to it.</div>';
  }
  const ws = (typeof wsState !== 'undefined' && wsState.memberships)
    ? wsState.memberships.filter(function (m) { return m.id === rws; })[0] : null;
  const role = (typeof wsRole === 'function') ? wsRole(rws) : null;
  const canWrite = (typeof wsCanWrite === 'function') ? wsCanWrite(rws) : true;
  return '<div class="wr-scope">' +
    '<strong>Shared with ' + wrEsc(ws ? ws.name : 'your workspace') + '.</strong> ' +
    'Everyone in the workspace can see this pipeline. ' +
    (canWrite ? 'Your notes stay private unless you share them individually.'
              : 'You are a viewer here, so you can read it but not change it.') +
    '</div>';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    wrAssigneeName: wrAssigneeName, wrActor: wrActor, wrNoteBadge: wrNoteBadge,
    wrMoveConfirmText: wrMoveConfirmText, wrUnshareConfirmText: wrUnshareConfirmText,
    wrScopeBanner: wrScopeBanner, wrState: wrState
  };
}
