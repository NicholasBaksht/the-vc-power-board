/* ============================================================
   NETWORK-MESSAGES.JS
   Inbox, requests, conversations, blocking, reporting.

   VERIFIED BEFORE THIS WAS WRITTEN
   The isolation test in power-network-schema-2.sql was run against
   the live database and returned "PASS - outsider sees nothing": a
   user who is not a participant reads zero rows from
   network_messages. That is the whole safety argument for putting a
   DM interface on a static site whose anon key is public, so it was
   proven in Postgres before any of this UI existed.

   WHERE THE RULES ACTUALLY LIVE
   Nothing here is a security control. The client hides a Message
   button when dm_policy says nobody, but the database is what
   refuses the write:
     - a pending conversation accepts exactly ONE message, so a
       cold approach cannot become a stream (trigger)
     - 30 messages/hour/sender, 10 new conversations/day (trigger)
     - a blocked pair cannot become participants (policy)
     - only participants can read or insert messages (policy)
   If this file were deleted, none of those protections would change.
   ============================================================ */

/* Handles may contain spaces and dots, so anything placed in an
   href is percent-encoded as well as HTML-escaped. */
function pbmUrl(v) {
  return pbmEsc(encodeURIComponent(String(v == null ? '' : v)));
}

function pbmEsc(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function pbmC() { return (typeof supabaseClient !== 'undefined') ? supabaseClient : null; }
function pbmMe() { return (typeof pbnUid === 'function') ? pbnUid() : null; }

function pbmWhen(ts) {
  if (!ts) return '';
  const d = new Date(ts), now = new Date();
  const mins = Math.round((now - d) / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return mins + 'm';
  if (mins < 1440) return Math.round(mins / 60) + 'h';
  if (mins < 10080) return Math.round(mins / 1440) + 'd';
  return d.toLocaleDateString();
}

/* Decides whether a first message lands as a request or straight in.
   The database does not care what this returns - it caps a pending
   thread at one message either way - but getting it right means the
   recipient's stated preference is honoured rather than overridden. */
async function pbmResolveState(targetId, targetPolicy) {
  const c = pbmC(), me = pbmMe();
  const policy = targetPolicy || 'requests';
  if (policy === 'nobody') return null;
  if (policy === 'anyone') return 'accepted';
  if (policy === 'requests') return 'pending';
  try {
    const { data: theyFollowMe } = await c.from('network_follows')
      .select('follower_id').eq('follower_id', targetId).eq('followee_id', me).maybeSingle();
    if (policy === 'following') return theyFollowMe ? 'accepted' : 'pending';
    if (policy === 'mutual') {
      const { data: iFollowThem } = await c.from('network_follows')
        .select('follower_id').eq('follower_id', me).eq('followee_id', targetId).maybeSingle();
      return (theyFollowMe && iFollowThem) ? 'accepted' : 'pending';
    }
  } catch (e) {}
  return 'pending';
}

async function pbmFindConversation(targetId) {
  const c = pbmC(), me = pbmMe();
  const { data: mine } = await c.from('network_participants')
    .select('conversation_id').eq('user_id', me);
  if (!mine || !mine.length) return null;
  const ids = mine.map(function (r) { return r.conversation_id; });
  const { data: shared } = await c.from('network_participants')
    .select('conversation_id').eq('user_id', targetId).in('conversation_id', ids);
  return (shared && shared.length) ? shared[0].conversation_id : null;
}

async function pbmOpenOrStart(targetId, targetPolicy) {
  const c = pbmC(), me = pbmMe();
  if (!me) {
    try { sessionStorage.setItem('pbnAfterAuth', location.hash); } catch (e) {}
    location.hash = '#signin'; return;
  }
  if (typeof pbTrack === 'function') pbTrack('network_message_clicked');

  const existing = await pbmFindConversation(targetId);
  if (existing) { location.hash = '#network/messages/' + existing; return; }

  const state = await pbmResolveState(targetId, targetPolicy);
  if (!state) { alert('This person is not accepting messages.'); return; }

  try {
    /* The id is generated here rather than read back from the insert.
       A RETURNING clause is still subject to the SELECT policy, and
       for the instant between creating a conversation and adding its
       participants the creator does not yet satisfy is_participant().
       Choosing the id up front removes the dependency entirely. */
    const convId = (window.crypto && crypto.randomUUID)
      ? crypto.randomUUID()
      : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (ch) {
          const r = Math.random() * 16 | 0;
          return (ch === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });

    const { error: e1 } = await c.from('network_conversations')
      .insert({ id: convId, created_by: me, state: state });
    if (e1) throw e1;
    const { error: e2 } = await c.from('network_participants')
      .insert([{ conversation_id: convId, user_id: me },
               { conversation_id: convId, user_id: targetId }]);
    if (e2) throw e2;
    location.hash = '#network/messages/' + convId;
  } catch (err) {
    /* The daily conversation cap and the block policy both surface
       here. The database's wording is more useful than ours. */
    alert(err.message || 'Could not start that conversation.');
  }
}

/* The Supabase client returns { data, error } and does NOT throw, so a
   read that destructures only `data` turns every policy failure into
   data:null. The inbox then rendered "No conversations yet", which is
   the same screen as a genuinely empty inbox - a delivered message and
   a blocked read were indistinguishable, which is how a real message
   was reported missing. Unwrapping here pushes the failure into the
   caller's catch, where it can say what actually broke. */
function pbmUnwrap(res, what) {
  if (res && res.error) {
    const e = res.error;
    throw new Error((e.code ? e.code + ' ' : '') +
                    (e.message || 'query failed') + ' [' + what + ']');
  }
  return res ? res.data : null;
}

/* ---------- inbox ---------- */

/* Writes the counts into the tab labels after the data lands. The tabs
   are painted before the query returns, so this updates them in place
   rather than delaying the whole view on a count. A zero count renders
   nothing: "Requests" is the resting state, not "Requests (0)". */
function pbmPaintTabCounts(requests, unread) {
  const set = function (href, label, n) {
    const el = document.querySelector('.pbm-tab[href="' + href + '"]');
    if (!el) return;
    el.textContent = n > 0 ? label + ' (' + n + ')' : label;
    el.classList.toggle('has-count', n > 0);
  };
  set('#network/messages', 'Inbox', unread);
  set('#network/requests', 'Requests', requests);
}

async function renderNetworkInbox(filter) {
  pbnEnsureCss();
  const host = document.getElementById('networkView');
  if (!host) return;
  await pbnLoadMe();
  const c = pbmC(), me = pbmMe();
  if (!me) {
    try { sessionStorage.setItem('pbnAfterAuth', '#network/messages'); } catch (e) {}
    host.innerHTML = '<div class="pbn"><div class="pbn-shell">' +
      '<a class="pbn-back" href="#network">&larr; Network</a>' +
      '<div class="pbn-gate"><h1 class="pbn-h1">Sign in to see your messages.</h1>' +
      '<div class="pbn-actions"><a class="pbn-btn pbn-btn-p" href="#signin">Sign in</a></div>' +
      '</div></div></div>';
    return;
  }

  const mode = filter === 'requests' ? 'requests' : 'inbox';
  host.innerHTML = '<div class="pbn"><div class="pbn-shell">' +
    '<a class="pbn-back" href="#network">&larr; Network</a>' +
    '<h1 class="pbn-h1">Message</h1>' +
    '<div class="pbm-tabs">' +
      '<a class="pbm-tab' + (mode === 'inbox' ? ' is-on' : '') + '" href="#network/messages">Inbox</a>' +
      '<a class="pbm-tab' + (mode === 'requests' ? ' is-on' : '') + '" href="#network/requests">Requests</a>' +
    '</div>' +
    '<div id="pbmList" class="pbm-list"><div class="pbn-empty">Loading...</div></div>' +
    '</div></div>';

  const box = document.getElementById('pbmList');
  let rows = [];
  try {
    const parts = pbmUnwrap(await c.from('network_participants')
      .select('conversation_id, last_read_at, archived').eq('user_id', me), 'participants');
    if (!parts || !parts.length) { rows = []; }
    else {
      const ids = parts.filter(function (p) { return !p.archived; })
                       .map(function (p) { return p.conversation_id; });
      if (ids.length) {
        const convs = pbmUnwrap(await c.from('network_conversations')
          .select('id, state, created_by, created_at').in('id', ids), 'conversations');
        const msgs = pbmUnwrap(await c.from('network_messages')
          .select('conversation_id, sender_id, body, created_at')
          .in('conversation_id', ids).order('created_at', { ascending: false }), 'messages');
        const others = pbmUnwrap(await c.from('network_participants')
          .select('conversation_id, user_id').in('conversation_id', ids).neq('user_id', me), 'counterparties');
        const otherIds = [...new Set((others || []).map(function (o) { return o.user_id; }))];
        const profs = otherIds.length
          ? pbmUnwrap(await c.from('profiles').select('id, username, full_name, photo_url, current_title, current_company').in('id', otherIds), 'profiles')
          : [];
        const pmap = {}; (profs || []).forEach(function (p) { pmap[p.id] = p; });
        const omap = {}; (others || []).forEach(function (o) { omap[o.conversation_id] = o.user_id; });
        const lastMap = {};
        (msgs || []).forEach(function (m) { if (!lastMap[m.conversation_id]) lastMap[m.conversation_id] = m; });
        const readMap = {}; parts.forEach(function (p) { readMap[p.conversation_id] = p.last_read_at; });

        const all = (convs || []).map(function (cv) {
          const last = lastMap[cv.id];
          const lastRead = readMap[cv.id];
          return { conv: cv, other: pmap[omap[cv.id]] || null, last: last,
                   unread: !!(last && last.sender_id !== me && (!lastRead || new Date(last.created_at) > new Date(lastRead))),
                   incomingRequest: cv.state === 'pending' && cv.created_by !== me };
        });

        /* A first message from someone who is not already connected
           arrives as a request, so it is filtered OUT of the inbox by
           design. Without a count on the other tab that is
           indistinguishable from the message never arriving, which is
           exactly how it was read in testing. Count both sides here,
           before the mode filter throws the other half away. */
        pbmPaintTabCounts(
          all.filter(function (r) { return r.incomingRequest; }).length,
          all.filter(function (r) { return !r.incomingRequest && r.unread; }).length
        );

        rows = all.filter(function (r) {
          return mode === 'requests' ? r.incomingRequest : !r.incomingRequest;
        }).sort(function (a, b) {
          return new Date((b.last && b.last.created_at) || b.conv.created_at) -
                 new Date((a.last && a.last.created_at) || a.conv.created_at);
        });
      }
    }
  } catch (e) {
    /* Name the failure. "Could not load messages" sent us looking at
       the wrong layer for a whole debugging round; the Postgres code
       is the thing that identifies the cause. */
    box.innerHTML = '<div class="pbn-empty">Could not load messages.<br>' +
      '<span class="pbm-hint">' + pbmEsc(e.message || String(e)) + '</span></div>';
    return;
  }

  if (!rows.length) {
    box.innerHTML = '<div class="pbn-empty">' +
      (mode === 'requests' ? 'No message requests.' : 'No conversations yet.') + '</div>';
    return;
  }
  box.innerHTML = rows.map(function (r) {
    const o = r.other || {};
    return '<a class="pbm-row' + (r.unread ? ' is-unread' : '') + '" href="#network/messages/' + pbmEsc(r.conv.id) + '">' +
      pbnPhoto(o) +
      '<span class="pbm-row-main">' +
        '<span class="pbm-row-top">' +
          '<span class="pbm-row-name">' + pbmEsc(o.full_name || o.username || 'Unknown') + '</span>' +
          '<span class="pbm-row-when">' + pbmEsc(pbmWhen(r.last && r.last.created_at)) + '</span>' +
        '</span>' +
        '<span class="pbm-row-last">' + pbmEsc((r.last && r.last.body) || 'No messages yet') + '</span>' +
      '</span>' +
      (r.unread ? '<span class="pbm-dot" aria-label="Unread"></span>' : '') +
      '</a>';
  }).join('');
}

/* ---------- one conversation ---------- */

async function renderNetworkConversation(convId) {
  pbnEnsureCss();
  const host = document.getElementById('networkView');
  if (!host) return;
  await pbnLoadMe();
  const c = pbmC(), me = pbmMe();
  if (!me) {
    /* Same treatment as the inbox: keep the destination so signing in
       returns to this conversation rather than dumping them at Network. */
    try { sessionStorage.setItem('pbnAfterAuth', '#network/messages/' + convId); } catch (e) {}
    host.innerHTML = '<div class="pbn"><div class="pbn-shell">' +
      '<a class="pbn-back" href="#network">&larr; Network</a>' +
      '<div class="pbn-gate"><h1 class="pbn-h1">Sign in to read this conversation.</h1>' +
      '<div class="pbn-actions"><a class="pbn-btn pbn-btn-p" href="#signin">Sign in</a></div>' +
      '</div></div></div>';
    return;
  }

  let conv = null, other = null, msgs = [];
  try {
    const cv = pbmUnwrap(await c.from('network_conversations')
      .select('id, state, created_by').eq('id', convId).maybeSingle(), 'conversation');
    conv = cv;
    /* A genuine non-participant also lands here with zero rows, which
       is correct and is handled below. This only separates that case
       from a policy that failed outright. */
    if (!conv) throw new Error('not found');
    const { data: op } = await c.from('network_participants')
      .select('user_id').eq('conversation_id', convId).neq('user_id', me).maybeSingle();
    if (op) {
      const { data: pr } = await c.from('profiles')
        .select('id, username, full_name, photo_url, current_title, current_company, dm_policy')
        .eq('id', op.user_id).maybeSingle();
      other = pr;
    }
    const ms = pbmUnwrap(await c.from('network_messages')
      .select('id, sender_id, body, created_at').eq('conversation_id', convId)
      .order('created_at', { ascending: true }), 'thread');
    msgs = ms || [];
  } catch (e) {
    /* A non-participant gets zero rows from the policy, so this is
       also what an attempt to open someone else's thread looks like.
       A policy that ERRORS is a different thing entirely and now says
       so, rather than hiding behind the same sentence. */
    const why = (e && e.message && e.message !== 'not found') ? e.message : '';
    host.innerHTML = '<div class="pbn"><div class="pbn-shell">' +
      '<a class="pbn-back" href="#network/messages">&larr; Message</a>' +
      '<div class="pbn-empty">That conversation is not available.' +
      (why ? '<br><span class="pbm-hint">' + pbmEsc(why) + '</span>' : '') +
      '</div></div></div>';
    return;
  }

  const isIncomingRequest = conv.state === 'pending' && conv.created_by !== me;
  const awaitingReply = conv.state === 'pending' && conv.created_by === me;
  const canSend = conv.state === 'accepted' || (conv.state === 'pending' && conv.created_by === me && !msgs.length);

  host.innerHTML = '<div class="pbn"><div class="pbn-shell pbm-thread">' +
    '<a class="pbn-back" href="#network/messages">&larr; Message</a>' +
    '<header class="pbm-head">' +
      pbnPhoto(other || {}) +
      '<div class="pbm-head-main">' +
        '<a class="pbm-head-name" href="#network/' + pbmUrl((other && other.username) || '') + '">' +
          pbmEsc((other && (other.full_name || other.username)) || 'Unknown') + '</a>' +
        ((other && (other.current_title || other.current_company))
          ? '<div class="pbm-head-role">' +
            pbmEsc([other.current_title, other.current_company].filter(Boolean).join(' · ')) + '</div>' : '') +
      '</div>' +
      '<div class="pbm-head-actions">' +
        '<button type="button" class="pbn-btn pbn-btn-s pbm-small" data-pbm-block="' + pbmEsc(other && other.id) + '">Block</button>' +
        '<button type="button" class="pbn-btn pbn-btn-s pbm-small" data-pbm-report="' + pbmEsc(convId) + '">Report</button>' +
      '</div>' +
    '</header>' +

    (isIncomingRequest
      ? '<div class="pbm-request">' +
          '<p class="pbm-request-t">This is a message request. They cannot send you anything else until you accept.</p>' +
          '<div class="pbm-request-a">' +
            '<button type="button" class="pbn-btn pbn-btn-p" data-pbm-accept="' + pbmEsc(convId) + '">Accept</button>' +
            '<button type="button" class="pbn-btn pbn-btn-s" data-pbm-decline="' + pbmEsc(convId) + '">Decline</button>' +
          '</div>' +
        '</div>'
      : '') +

    '<div class="pbm-msgs">' + (msgs.length
      ? msgs.map(function (m) {
          return '<div class="pbm-msg' + (m.sender_id === me ? ' is-me' : '') + '">' +
            '<div class="pbm-bubble">' + pbmEsc(m.body).replace(/\n/g, '<br>') + '</div>' +
            '<div class="pbm-time">' + pbmEsc(pbmWhen(m.created_at)) + '</div>' +
            '</div>';
        }).join('')
      : '<div class="pbn-empty">No messages yet.</div>') + '</div>' +

    (canSend
      ? '<form class="pbm-compose" id="pbmForm">' +
          '<textarea id="pbmBody" rows="3" maxlength="5000" placeholder="' +
            (awaitingReply || !msgs.length ? 'Write your first message. Keep it specific.' : 'Write a message') +
            '" aria-label="Message"></textarea>' +
          '<div class="pbm-compose-row">' +
            '<span class="pbm-hint">' +
              (conv.state === 'pending'
                ? 'Sent as a request. One message until they accept.'
                : '') + '</span>' +
            '<button type="submit" class="pbn-btn pbn-btn-p">Send</button>' +
          '</div>' +
        '</form>'
      : '<div class="pbm-locked">' +
          (awaitingReply ? 'Request sent. You can send more once they accept.'
                         : 'You cannot send messages in this conversation.') +
        '</div>') +
    '</div></div>';

  /* Mark read for this participant only. */
  try { await c.from('network_participants').update({ last_read_at: new Date().toISOString() })
    .eq('conversation_id', convId).eq('user_id', me); } catch (e) {}

  const form = document.getElementById('pbmForm');
  if (form) form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const ta = document.getElementById('pbmBody');
    const body = ta.value.trim();
    if (!body) return;
    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true;
    try {
      const { error } = await c.from('network_messages')
        .insert({ conversation_id: convId, sender_id: me, body: body });
      if (error) throw error;
      if (typeof pbTrack === 'function') {
        pbTrack(conv.state === 'pending' ? 'network_message_request_sent' : 'network_message_sent');
      }
      ta.value = '';
      renderNetworkConversation(convId);
    } catch (err) {
      /* Rate limits and the one-message request cap arrive here as
         database exceptions. Show what it actually said. */
      const hint = form.querySelector('.pbm-hint');
      if (hint) hint.textContent = err.message || 'Could not send.';
      btn.disabled = false;
    }
  });

  host.querySelectorAll('[data-pbm-accept]').forEach(function (b) {
    b.addEventListener('click', async function () {
      await c.from('network_conversations').update({ state: 'accepted' }).eq('id', convId);
      if (typeof pbTrack === 'function') pbTrack('message_request_accepted');
      renderNetworkConversation(convId);
    });
  });
  host.querySelectorAll('[data-pbm-decline]').forEach(function (b) {
    b.addEventListener('click', async function () {
      await c.from('network_conversations').update({ state: 'declined' }).eq('id', convId);
      location.hash = '#network/requests';
    });
  });
  host.querySelectorAll('[data-pbm-block]').forEach(function (b) {
    b.addEventListener('click', async function () {
      if (!b.dataset.pbmBlock) return;
      if (!confirm('Block this person? They will not be able to message or follow you.')) return;
      await c.from('network_blocks').insert({ blocker_id: me, blocked_id: b.dataset.pbmBlock });
      await c.from('network_conversations').update({ state: 'blocked' }).eq('id', convId);
      location.hash = '#network/messages';
    });
  });
  host.querySelectorAll('[data-pbm-report]').forEach(function (b) {
    b.addEventListener('click', async function () {
      const reason = prompt('What is wrong with this conversation?');
      if (!reason) return;
      await c.from('network_reports').insert({ reporter_id: me, target_type: 'conversation',
        target_id: convId, reason: reason });
      b.textContent = 'Reported';
      b.disabled = true;
    });
  });
}

/* ---------- unread indicator ---------- */

async function pbmUnreadCount() {
  const c = pbmC(), me = pbmMe();
  if (!c || !me) return 0;
  try {
    const { data } = await c.from('network_notifications')
      .select('id').is('read_at', null).limit(50);
    return (data || []).length;
  } catch (e) { return 0; }
}

/* A small marker on the account control, not a red social badge. */
async function pbmDecorateAccount() {
  const link = document.querySelector('.pb-signin.is-account');
  if (!link) return;
  const n = await pbmUnreadCount();
  link.classList.toggle('has-unread', n > 0);
  link.setAttribute('title', n > 0 ? n + ' unread' : 'Your account');
}

/* ---------- notifications inbox ----------
   Written by database triggers on real events, never by the client:
   the insert policy on network_notifications is `with check (false)`,
   so a browser cannot manufacture one. Read policy is owner-only, so
   this list is private by construction rather than by filtering. */

const PBM_NOTIF_TEXT = {
  follower:        'started following you',
  message_request: 'sent you a message request',
  message:         'sent you a message',
  post:            'posted an update'
};

async function renderNetworkNotifications() {
  pbnEnsureCss();
  const host = document.getElementById('networkView');
  if (!host) return;
  await pbnLoadMe();
  const c = pbmC(), me = pbmMe();

  if (!me) {
    try { sessionStorage.setItem('pbnAfterAuth', '#network/notifications'); } catch (e) {}
    host.innerHTML = '<div class="pbn"><div class="pbn-shell">' +
      '<a class="pbn-back" href="#network">&larr; Network</a>' +
      '<div class="pbn-gate"><h1 class="pbn-h1">Sign in to see your notifications.</h1>' +
      '<div class="pbn-actions"><a class="pbn-btn pbn-btn-p" href="#signin">Sign in</a></div>' +
      '</div></div></div>';
    return;
  }
  if (typeof pbTrack === 'function') pbTrack('network_notifications_viewed');

  host.innerHTML = '<div class="pbn"><div class="pbn-shell">' +
    '<a class="pbn-back" href="#network">&larr; Network</a>' +
    '<div class="pbm-notif-head">' +
      '<h1 class="pbn-h1">Notifications</h1>' +
      '<button type="button" class="pbn-btn pbn-btn-s pbm-small" id="pbmMarkAll">Mark all read</button>' +
    '</div>' +
    '<div class="pbm-tabs">' +
      '<a class="pbm-tab" href="#network/messages">Inbox</a>' +
      '<a class="pbm-tab" href="#network/requests">Requests</a>' +
      '<a class="pbm-tab is-on" href="#network/notifications">Notifications</a>' +
    '</div>' +
    '<div id="pbmNotifList" class="pbm-list"><div class="pbn-empty">Loading...</div></div>' +
    '</div></div>';

  const box = document.getElementById('pbmNotifList');
  let rows = [], actors = {};
  try {
    const { data, error } = await c.from('network_notifications')
      .select('id, kind, actor_id, ref_id, read_at, created_at')
      .order('created_at', { ascending: false }).limit(60);
    if (error) throw error;
    rows = data || [];
    const ids = [...new Set(rows.map(function (r) { return r.actor_id; }).filter(Boolean))];
    if (ids.length) {
      const { data: profs } = await c.from('profiles')
        .select('id, username, full_name, photo_url, current_title, current_company').in('id', ids);
      (profs || []).forEach(function (p) { actors[p.id] = p; });
    }
  } catch (e) {
    box.innerHTML = '<div class="pbn-empty">Could not load notifications.</div>';
    return;
  }

  if (!rows.length) {
    box.innerHTML = '<div class="pbn-empty">Nothing yet. Follows, message requests and ' +
      'messages will appear here.</div>';
    return;
  }

  box.innerHTML = rows.map(function (n) {
    const a = actors[n.actor_id] || {};
    const who = a.full_name || a.username || 'Someone';
    /* A notification about a message links to that conversation; one
       about a person links to the person. */
    const href = (n.kind === 'message' || n.kind === 'message_request')
      ? (n.ref_id ? '#network/messages/' + pbmEsc(n.ref_id) : '#network/messages')
      : (a.username ? '#network/' + pbmUrl(a.username) : '#network');
    return '<a class="pbm-row pbm-notif' + (n.read_at ? '' : ' is-unread') + '" href="' + href + '">' +
      pbnPhoto(a) +
      '<span class="pbm-row-main">' +
        '<span class="pbm-row-top">' +
          '<span class="pbm-row-name">' + pbmEsc(who) + '</span>' +
          '<span class="pbm-row-when">' + pbmEsc(pbmWhen(n.created_at)) + '</span>' +
        '</span>' +
        '<span class="pbm-row-last">' + pbmEsc(PBM_NOTIF_TEXT[n.kind] || n.kind) + '</span>' +
      '</span>' +
      (n.read_at ? '' : '<span class="pbm-dot" aria-label="Unread"></span>') +
      '</a>';
  }).join('');

  /* Marking read happens on view, one round trip, and only for rows
     this user owns - the policy would refuse anything else. */
  const unread = rows.filter(function (n) { return !n.read_at; }).map(function (n) { return n.id; });
  const markAll = async function () {
    if (!unread.length) return;
    try {
      await c.from('network_notifications')
        .update({ read_at: new Date().toISOString() }).in('id', unread);
      box.querySelectorAll('.is-unread').forEach(function (el) { el.classList.remove('is-unread'); });
      box.querySelectorAll('.pbm-dot').forEach(function (el) { el.remove(); });
      if (typeof pbmDecorateAccount === 'function') pbmDecorateAccount();
    } catch (e) {}
  };
  const btn = document.getElementById('pbmMarkAll');
  if (btn) btn.addEventListener('click', markAll);
}
