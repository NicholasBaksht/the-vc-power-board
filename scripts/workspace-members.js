/* ============================================================
   WORKSPACE-MEMBERS.JS
   Phase 7B. Who is in a workspace, and what they may do.

   NOTHING HERE IS A PERMISSION CHECK

   Every function in this file calls an RPC. The database decides. The
   role this file reads is used only to choose what to draw, and a
   viewer who edits the page to reveal the remove button gets an error
   from Postgres rather than a removed teammate.

   That is not a stylistic preference. The anon key ships in the page
   source, so anything enforced here is enforced nowhere.

   FOUR ROLES, WRITTEN IN WORDS

   Owner, Admin, Member, Viewer. Each one is described in a sentence
   next to the control that sets it, because a founder inviting an
   advisor at 11pm should not have to guess whether Viewer can edit
   the pipeline. A coloured badge would have to be learned; the
   sentence does not.

   THE LAST OWNER CANNOT LEAVE

   Enforced in the database, inside the same transaction that would
   remove them. This file also declines to draw the control, which is
   a courtesy rather than a safeguard.
   ============================================================ */

const WM_ROLES = [
  { key: 'ADMIN',  label: 'Admin',
    what: 'Everything a member can do, plus inviting people and changing roles.' },
  { key: 'MEMBER', label: 'Member',
    what: 'Works the raise: adds investors, moves stages, writes notes and actions.' },
  { key: 'VIEWER', label: 'Viewer',
    what: 'Reads the shared raise. Cannot change anything.' }
];

let wmState = { roster: [], invites: [], audit: [], busy: false };

function wmEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function wmClient() {
  return (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null;
}

function wmRoleLabel(r) {
  return (typeof wsRoleLabel === 'function') ? wsRoleLabel(r) : r;
}

/* Every call goes through here, so an error from Postgres reaches the
   founder as a sentence rather than as a silent no-op. The messages
   the functions raise are already written for a person. */
async function wmCall(fn, args) {
  const c = wmClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { data, error } = await c.rpc(fn, args || {});
    if (error) throw error;
    return { ok: true, data: data };
  } catch (e) {
    const m = (e && e.message) ? String(e.message) : '';
    return { error: m.replace(/^.*?:\s*/, '') || 'That did not work.' };
  }
}

/* ------------------------------------------------------------
   LOAD
   ------------------------------------------------------------ */

async function wmLoadInvites() {
  const r = await wmCall('pb_ws_my_invites');
  wmState.invites = r.ok ? (r.data || []) : [];
  return wmState.invites;
}

async function wmLoadRoster(ws) {
  const r = await wmCall('pb_ws_roster', { p_ws: ws });
  wmState.roster = r.ok ? (r.data || []) : [];
  return wmState.roster;
}

async function wmLoadAudit(ws) {
  const c = wmClient();
  if (!c) return [];
  try {
    const { data, error } = await c.from('workspace_audit')
      .select('action,target_email,target_user_id,meta,created_at')
      .eq('workspace_id', ws).order('created_at', { ascending: false }).limit(40);
    if (error) throw error;
    wmState.audit = data || [];
  } catch (e) { wmState.audit = []; }
  return wmState.audit;
}

/* ------------------------------------------------------------
   PENDING INVITATIONS

   Rendered at the top of the workspaces page for whoever has one. A
   pending invitation shows the workspace name and nothing else: no
   member list, no raise, no notes. Accepting is what grants access.
   ------------------------------------------------------------ */

function wmInvitesHtml() {
  if (!wmState.invites.length) return '';
  return '<h2 class="ws-h">Invitations</h2>' +
    '<div class="ws-list">' + wmState.invites.map(function (i) {
      return '<div class="ws-row">' +
        '<div class="ws-row-main">' +
          '<span class="ws-row-name">' + wmEsc(i.workspace_name) + '</span>' +
          '<span class="ws-row-meta">Invited as ' + wmEsc(wmRoleLabel(i.role)) +
            '. You will see this team\'s shared raise. Your own private work stays private.</span>' +
        '</div>' +
        '<div class="ws-row-acts">' +
          '<button type="button" class="ws-mini" data-wm-accept="' + wmEsc(i.membership_id) + '">Accept</button>' +
          '<button type="button" class="ws-mini" data-wm-decline="' + wmEsc(i.membership_id) + '">Decline</button>' +
        '</div></div>';
    }).join('') + '</div>';
}

/* ------------------------------------------------------------
   THE PEOPLE PAGE
   ------------------------------------------------------------ */

async function renderWorkspaceMembers() {
  const host = document.getElementById('membersView');
  if (!host) return;

  if (typeof isSignedIn !== 'function' || !isSignedIn()) {
    host.innerHTML = wmShell('<p class="ws-empty">This needs you signed in.</p>' +
      '<p class="ws-empty"><a class="ds-btn" href="#signin">Sign in</a></p>', null);
    return;
  }

  if (typeof wsLoad === 'function') await wsLoad();
  const ws = (typeof wsCurrent === 'function') ? wsCurrent() : null;

  if (!ws) {
    host.innerHTML = wmShell(
      '<p class="ws-empty">You are in your personal workspace, which has no members ' +
      'by definition. Switch to a team, or ' +
      '<a href="#workspaces">create one</a>.</p>', null);
    return;
  }

  const isAdmin = (typeof wsCanAdmin === 'function') && wsCanAdmin(ws.id);
  host.innerHTML = wmShell('<p class="ws-empty">Loading.</p>', ws);

  if (isAdmin) { await wmLoadRoster(ws.id); await wmLoadAudit(ws.id); }

  let h = '';

  if (!isAdmin) {
    /* A member sees who is in the room, from the members table their
       own read policy already covers. Emails are admin-only, so this
       list carries roles and nothing else. */
    h += '<p class="ws-sub">You are a ' + wmEsc(wmRoleLabel(wsRole(ws.id)).toLowerCase()) +
      ' in this workspace. Only an owner or admin can invite people or change roles.</p>';
    host.innerHTML = wmShell(h, ws);
    return;
  }

  const active = wmState.roster.filter(function (r) { return r.status === 'ACTIVE'; });
  const pending = wmState.roster.filter(function (r) { return r.status === 'PENDING'; });
  const owners = active.filter(function (r) { return r.role === 'OWNER'; }).length;
  const meIsOwner = wsRole(ws.id) === 'OWNER';

  h += '<h2 class="ws-h">People</h2><div class="ws-list">' +
    active.map(function (r) {
      const isLastOwner = r.role === 'OWNER' && owners <= 1;
      return '<div class="ws-row"><div class="ws-row-main">' +
        '<span class="ws-row-name">' + wmEsc(r.email || 'Unknown') + '</span>' +
        '<span class="ws-row-meta">' + wmEsc(wmRoleLabel(r.role)) +
          (isLastOwner ? ' &middot; the only owner' : '') + '</span>' +
        '</div><div class="ws-row-acts">' +
        (r.role === 'OWNER'
          ? (isLastOwner
              ? '<span class="ws-row-meta">Transfer ownership before removing</span>'
              : '')
          : '<select class="wm-role" data-wm-role="' + wmEsc(r.membership_id) + '" ' +
            'aria-label="Role for ' + wmEsc(r.email || '') + '">' +
            WM_ROLES.map(function (o) {
              return '<option value="' + o.key + '"' + (o.key === r.role ? ' selected' : '') + '>' +
                wmEsc(o.label) + '</option>';
            }).join('') + '</select>' +
            (meIsOwner
              ? '<button type="button" class="ws-mini" data-wm-transfer="' +
                wmEsc(r.membership_id) + '">Make owner</button>' : '') +
            '<button type="button" class="ws-mini" data-wm-remove="' +
              wmEsc(r.membership_id) + '">Remove</button>') +
        '</div></div>';
    }).join('') + '</div>';

  if (pending.length) {
    h += '<h2 class="ws-h">Invited, not yet joined</h2><div class="ws-list">' +
      pending.map(function (r) {
        return '<div class="ws-row"><div class="ws-row-main">' +
          '<span class="ws-row-name">' + wmEsc(r.email) + '</span>' +
          '<span class="ws-row-meta">Invited as ' + wmEsc(wmRoleLabel(r.role)) +
            '. They can see nothing in this workspace until they accept.</span>' +
        '</div><div class="ws-row-acts">' +
          '<button type="button" class="ws-mini" data-wm-revoke="' +
            wmEsc(r.membership_id) + '">Revoke</button>' +
        '</div></div>';
      }).join('') + '</div>';
  }

  h += '<h2 class="ws-h">Invite someone</h2>' +
    '<form class="ws-form" id="wmInviteForm">' +
      '<label class="ws-label" for="wmEmail">Their email address</label>' +
      '<input class="ws-input" id="wmEmail" type="email" autocomplete="off" required ' +
        'placeholder="cofounder@example.com">' +
      '<label class="pl-sr" for="wmRole">Role</label>' +
      '<select class="wm-role" id="wmRole">' +
        WM_ROLES.map(function (o) {
          return '<option value="' + o.key + '"' + (o.key === 'MEMBER' ? ' selected' : '') + '>' +
            wmEsc(o.label) + '</option>';
        }).join('') + '</select>' +
      '<button type="submit" class="ds-btn" id="wmInviteBtn">Send invitation</button>' +
      '<span class="ws-status" id="wmStatus" role="status"></span>' +
    '</form>' +
    '<dl class="wm-roles">' + WM_ROLES.map(function (o) {
      return '<dt>' + wmEsc(o.label) + '</dt><dd>' + wmEsc(o.what) + '</dd>';
    }).join('') + '<dt>Owner</dt><dd>Everything, including transferring the workspace. ' +
    'There is always exactly one.</dd></dl>' +
    '<p class="ws-note">An invitation grants nothing until it is accepted, and it only ' +
    'ever covers this workspace. Nobody gains access to your personal raise, notes or ' +
    'searches.</p>';

  if (wmState.audit.length) {
    h += '<h2 class="ws-h">Administrative history</h2>' +
      '<p class="ws-sub">Membership, roles and ownership. Written by the database and ' +
      'not editable by anyone, including you.</p>' +
      '<table class="wm-audit"><thead><tr><th scope="col">When</th>' +
      '<th scope="col">What</th><th scope="col">Who</th></tr></thead><tbody>' +
      wmState.audit.map(function (a) {
        return '<tr><td>' + wmEsc(String(a.created_at || '').slice(0, 10)) + '</td>' +
          '<td>' + wmEsc(wmAuditLabel(a)) + '</td>' +
          '<td>' + wmEsc(a.target_email || '') + '</td></tr>';
      }).join('') + '</tbody></table>';
  }

  host.innerHTML = wmShell(h, ws);
  wmBind(host, ws);
  if (typeof pbTrack === 'function') pbTrack('workspace_members_opened');
}

function wmAuditLabel(a) {
  const m = a.meta || {};
  const map = {
    member_invited: 'Invited as ' + (m.role || ''),
    member_joined: 'Joined as ' + (m.role || ''),
    member_declined: 'Declined the invitation',
    invite_revoked: 'Invitation revoked',
    member_removed: 'Removed from the workspace',
    member_left: 'Left the workspace',
    role_changed: 'Role changed from ' + (m.from || '') + ' to ' + (m.to || ''),
    ownership_transferred: 'Ownership transferred'
  };
  return map[a.action] || a.action;
}

function wmShell(inner, ws) {
  return '<div class="ds-wrap ws-wrap">' +
    '<div class="ds-kicker">' + (ws ? wmEsc(ws.name) : 'Workspace') + '</div>' +
    '<h1 class="ds-h1">People and permissions.</h1>' +
    '<p class="ds-sub">Who can see this workspace, and what each of them can change.</p>' +
    inner + '</div>';
}

function wmBind(host, ws) {
  if (host.dataset.wmBound) return;
  host.dataset.wmBound = '1';

  host.addEventListener('submit', async function (e) {
    if (!e.target.closest('#wmInviteForm')) return;
    e.preventDefault();
    const email = document.getElementById('wmEmail');
    const role = document.getElementById('wmRole');
    const btn = document.getElementById('wmInviteBtn');
    const st = document.getElementById('wmStatus');
    if (!email) return;
    if (btn) { btn.disabled = true; btn.textContent = 'Sending'; }
    const r = await wmCall('pb_ws_invite',
      { p_ws: ws.id, p_email: email.value, p_role: role ? role.value : 'MEMBER' });
    if (btn) { btn.disabled = false; btn.textContent = 'Send invitation'; }
    if (r.error) { if (st) st.textContent = r.error; return; }
    if (typeof pbTrack === 'function') pbTrack('workspace_invite_sent');
    renderWorkspaceMembers();
  });

  host.addEventListener('change', async function (e) {
    const sel = e.target.closest('[data-wm-role]');
    if (!sel) return;
    const r = await wmCall('pb_ws_set_role',
      { p_id: sel.getAttribute('data-wm-role'), p_role: sel.value });
    if (r.error) window.alert(r.error);
    if (typeof pbTrack === 'function') pbTrack('workspace_role_changed');
    renderWorkspaceMembers();
  });

  host.addEventListener('click', async function (e) {
    const rem = e.target.closest('[data-wm-remove]');
    if (rem) {
      const row = rem.closest('.ws-row');
      const who = row ? (row.querySelector('.ws-row-name') || {}).textContent : 'this person';
      if (!window.confirm('Remove ' + who + ' from this workspace?\n\n' +
        'They lose access immediately. Work they already did stays recorded against them.')) return;
      const r = await wmCall('pb_ws_remove', { p_id: rem.getAttribute('data-wm-remove') });
      if (r.error) window.alert(r.error);
      if (typeof pbTrack === 'function') pbTrack('workspace_member_removed');
      renderWorkspaceMembers();
      return;
    }

    const rev = e.target.closest('[data-wm-revoke]');
    if (rev) {
      const r = await wmCall('pb_ws_revoke', { p_id: rev.getAttribute('data-wm-revoke') });
      if (r.error) window.alert(r.error);
      renderWorkspaceMembers();
      return;
    }

    const tr = e.target.closest('[data-wm-transfer]');
    if (tr) {
      const row = tr.closest('.ws-row');
      const who = row ? (row.querySelector('.ws-row-name') || {}).textContent : 'them';
      /* Spelled out, because this is the one action the person taking
         it cannot undo on their own. */
      if (!window.confirm('Make ' + who + ' the owner of this workspace?\n\n' +
        'You become an admin. Only they will be able to transfer ownership back.')) return;
      const r = await wmCall('pb_ws_transfer_owner',
        { p_ws: ws.id, p_to_member: tr.getAttribute('data-wm-transfer') });
      if (r.error) window.alert(r.error);
      if (typeof pbTrack === 'function') pbTrack('workspace_ownership_transferred');
      if (typeof wsLoad === 'function') await wsLoad({ force: true });
      renderWorkspaceMembers();
    }
  });
}

/* Accept and decline live on the workspaces page, because that is
   where an invitation is seen. */
function wmBindInvites(host) {
  if (!host || host.dataset.wmInvBound) return;
  host.dataset.wmInvBound = '1';
  host.addEventListener('click', async function (e) {
    const acc = e.target.closest('[data-wm-accept]');
    if (acc) {
      const r = await wmCall('pb_ws_accept', { p_id: acc.getAttribute('data-wm-accept') });
      if (r.error) { window.alert(r.error); return; }
      if (typeof pbTrack === 'function') pbTrack('workspace_member_joined');
      if (typeof wsLoad === 'function') await wsLoad({ force: true });
      if (typeof wsSwitch === 'function' && r.data) wsSwitch(r.data);
      await wmLoadInvites();
      if (typeof renderWorkspaces === 'function') renderWorkspaces();
      return;
    }
    const dec = e.target.closest('[data-wm-decline]');
    if (dec) {
      await wmCall('pb_ws_decline', { p_id: dec.getAttribute('data-wm-decline') });
      await wmLoadInvites();
      if (typeof renderWorkspaces === 'function') renderWorkspaces();
    }
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    WM_ROLES: WM_ROLES, wmAuditLabel: wmAuditLabel, wmInvitesHtml: wmInvitesHtml,
    wmState: wmState
  };
}
