/* ============================================================
   PIPELINE-ACTIONS.JS
   Phase 4E. What happened, and what happens next.

   ONE NEXT ACTION, NOT A TASK LIST

   A founder does not need a backlog per investor. They need to know
   the single next thing, for each of forty firms, and to see which of
   those are late. Postgres enforces one open action per target, so
   creating another replaces it - which is what "next" means. A tool
   that lets four next actions pile up on one firm has stopped
   answering the question it exists to answer.

   OVERDUE IS COMPUTED, AND CHANGES NOTHING ELSE

   Overdue is due_at in the past and not yet completed. Deriving it
   means it is always right; a stored flag would need a nightly job
   and would be wrong between midnight and whenever that job ran.

   And an overdue action never moves a stage. A missed follow-up is a
   missed follow-up, not evidence that an investor passed. Inferring
   the second from the first would write a fiction into the founder's
   own record.

   MANUAL ACTIVITIES ARE CLAIMS THE FOUNDER MAKES

   "Contacted", "Meeting", "Call" are logged because the founder says
   they happened. Nothing here infers them. Opening a profile is not
   contacting someone, a search is not outreach, and a timeline that
   pretends otherwise is worse than no timeline, because the founder
   will act on it.

   NO SEPARATE REMINDER ENGINE

   Overdue and due-soon actions surface in the pipeline and on My
   Power Board. Phase 3's alert infrastructure watches research
   changes arriving through commits, which is a different thing from a
   date passing, and there is no mail sender in this product. So
   reminders are in-app, where the founder already is.
   ============================================================ */

const PA_MANUAL_TYPES = [
  { key: 'CONTACTED',       label: 'Contacted them' },
  { key: 'MEETING',         label: 'Meeting' },
  { key: 'CALL',            label: 'Call' },
  { key: 'INTRO_REQUESTED', label: 'Requested an intro' },
  { key: 'INTRO_RECEIVED',  label: 'Intro was made' },
  { key: 'FOLLOW_UP',       label: 'Followed up' },
  { key: 'OTHER',           label: 'Something else' }
];

const PA_ACTIVITY_LABELS = {
  TARGET_ADDED: 'Added to raise',
  TARGET_REMOVED: 'Removed',
  STAGE_CHANGED: 'Stage changed',
  RELATIONSHIP_CHANGED: 'Relationship changed',
  PARTNER_ADDED: 'Contact added',
  PARTNER_REMOVED: 'Contact removed',
  NOTE_ADDED: 'Note added',
  COMMITTED: 'Committed',
  PASSED: 'Passed',
  CONTACTED: 'Contacted',
  MEETING: 'Meeting',
  CALL: 'Call',
  INTRO_REQUESTED: 'Intro requested',
  INTRO_RECEIVED: 'Intro made',
  FOLLOW_UP: 'Follow-up',
  NEXT_ACTION_COMPLETED: 'Next action completed',
  MESSAGE_SENT: 'Message sent',
  OTHER: 'Activity'
};

let paByTarget = {};   // targetId -> open next action

function paClient() {
  return (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null;
}

function paEsc(s) { return (typeof ptEsc === 'function') ? ptEsc(s) : String(s == null ? '' : s); }

function paId(p) {
  return (p || 'na') + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

/* ------------------------------------------------------------
   NEXT ACTIONS
   ------------------------------------------------------------ */

/* Every open action for the raise in ONE query. The pipeline table
   shows a next action per row, and fetching them individually would
   be one request per investor. */
async function paLoadForRaise(fundraiseId) {
  const c = paClient();
  if (!c || !fundraiseId) { paByTarget = {}; return {}; }
  try {
    const { data, error } = await c.from('pipeline_next_actions')
      .select('*').eq('fundraise_id', fundraiseId).is('completed_at', null);
    if (error) throw error;
    const by = {};
    (data || []).forEach(function (r) { by[r.target_id] = r; });
    paByTarget = by;
    return by;
  } catch (e) { paByTarget = {}; return {}; }
}

function paOpenFor(targetId) { return paByTarget[targetId] || null; }

/* Overdue is a question about now, so it is asked now. */
function paIsOverdue(action) {
  if (!action || action.completed_at || !action.due_at) return false;
  const due = new Date(action.due_at).getTime();
  return !isNaN(due) && due < Date.now();
}

function paDueSoon(action, withinDays) {
  if (!action || action.completed_at || !action.due_at) return false;
  const due = new Date(action.due_at).getTime();
  if (isNaN(due)) return false;
  const now = Date.now();
  return due >= now && due <= now + (withinDays || 7) * 86400000;
}

function paDueLabel(action) {
  if (!action) return null;
  if (!action.due_at) return 'No date';
  const due = new Date(action.due_at);
  if (isNaN(due.getTime())) return null;
  const days = Math.round((due.getTime() - Date.now()) / 86400000);
  if (days < -1) return Math.abs(days) + 'd overdue';
  if (days === -1) return 'Due yesterday';
  if (days === 0) return 'Due today';
  if (days === 1) return 'Due tomorrow';
  if (days <= 14) return 'In ' + days + 'd';
  return due.toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
}

/* Creating an action while one is open replaces it. The old one is
   deleted rather than completed: it was never done, and marking it
   complete would put a false "finished" into the history. */
async function paSetNextAction(target, body, dueAt) {
  const clean = String(body || '').trim();
  if (!clean) return { error: 'Write what needs doing.' };
  const c = paClient();
  if (!c) return { error: 'Not signed in.' };

  const existing = paOpenFor(target.id);
  if (existing) {
    try { await c.from('pipeline_next_actions').delete().eq('id', existing.id); } catch (e) {}
  }

  const row = {
    id: paId('na'),
    fundraise_id: target.fundraiseId,
    target_id: target.id,
    body: clean.slice(0, 300),
    due_at: dueAt || null
  };
  try {
    const { error } = await c.from('pipeline_next_actions').insert(row);
    if (error) throw error;
  } catch (e) {
    if (/pipeline_next_actions_one_open|duplicate key/.test(String(e.message || e))) {
      return { error: 'Another next action is already open for this investor. Refresh and try again.' };
    }
    return { error: 'Could not save that.' };
  }
  paByTarget[target.id] = row;
  if (typeof pbTrack === 'function') pbTrack('pipeline_next_action_created');
  return { ok: true, id: row.id };
}

async function paCompleteAction(target, actionId) {
  const c = paClient();
  if (!c) return { error: 'Not signed in.' };
  const action = paOpenFor(target.id);
  try {
    const { error } = await c.from('pipeline_next_actions')
      .update({ completed_at: new Date().toISOString(), updated_at: new Date().toISOString() })
      .eq('id', actionId);
    if (error) throw error;
  } catch (e) { return { error: 'Could not complete that.' }; }

  delete paByTarget[target.id];

  /* Completing an action IS a real event, so it earns a line in the
     timeline. The action's own words go in the summary because the
     founder wrote them about this target - unlike a note, which is
     prose that stays in its own row. */
  if (typeof plLogActivity === 'function') {
    await plLogActivity(target.fundraiseId, target.id, 'NEXT_ACTION_COMPLETED',
      action && action.body ? 'Done: ' + String(action.body).slice(0, 240) : 'Next action completed',
      {}, { source: 'manual' });
  }
  if (typeof pbTrack === 'function') pbTrack('pipeline_next_action_completed');
  return { ok: true };
}

async function paClearAction(target, actionId) {
  const c = paClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.from('pipeline_next_actions').delete().eq('id', actionId);
    if (error) throw error;
  } catch (e) { return { error: 'Could not clear that.' }; }
  delete paByTarget[target.id];
  if (typeof pbTrack === 'function') pbTrack('pipeline_next_action_cleared');
  return { ok: true };
}

/* ------------------------------------------------------------
   MANUAL ACTIVITY

   The founder states what happened. occurredAt defaults to now but is
   editable, because people log Tuesday's meeting on Thursday and the
   timeline should say Tuesday.
   ------------------------------------------------------------ */

async function paLogManual(target, type, opts) {
  opts = opts || {};
  const c = paClient();
  if (!c) return { error: 'Not signed in.' };
  const valid = PA_MANUAL_TYPES.some(function (t) { return t.key === type; });
  if (!valid) return { error: 'Unknown activity type.' };

  const name = (typeof ptDisplayName === 'function') ? ptDisplayName(target) : '';
  const label = (PA_ACTIVITY_LABELS[type] || 'Activity');
  const title = String(opts.title || '').trim().slice(0, 200);
  const summary = title
    ? label + ': ' + title
    : (name ? label + ' with ' + name : label);

  const row = {
    id: paId('pa'),
    fundraise_id: target.fundraiseId,
    target_id: target.id,
    activity_type: type,
    summary: summary.slice(0, 300),
    attendees: opts.attendees ? String(opts.attendees).slice(0, 300) : null,
    metadata: {},
    source: 'manual',
    occurred_at: opts.occurredAt || new Date().toISOString()
  };

  try {
    const { error } = await c.from('pipeline_activities').insert(row);
    if (error) throw error;
  } catch (e) { return { error: 'Could not log that.' }; }

  if (typeof pbTrack === 'function') {
    pbTrack(type === 'MEETING' ? 'pipeline_meeting_logged' : 'pipeline_activity_logged');
  }
  return { ok: true, id: row.id };
}

/* ------------------------------------------------------------
   RENDERING HELPERS
   ------------------------------------------------------------ */

function paActivityLabel(type) { return PA_ACTIVITY_LABELS[type] || 'Activity'; }

function paWhen(iso) {
  return (typeof pdWhen === 'function') ? pdWhen(iso) : String(iso || '');
}

function paTimelineHtml(rows) {
  if (rows === null) {
    return '<p class="pd-empty">Could not load the timeline right now.</p>';
  }
  if (!rows || !rows.length) {
    return '<p class="pd-empty">Nothing recorded yet. Stage changes appear here ' +
      'automatically, and you can log meetings and calls above.</p>';
  }
  return '<ul class="pa-timeline">' + rows.map(function (r) {
    return '<li class="pa-item' + (r.source === 'manual' ? ' is-manual' : '') + '">' +
      '<span class="pa-kind">' + paEsc(paActivityLabel(r.activity_type)) + '</span>' +
      '<span class="pa-sum">' + paEsc(r.summary || '') + '</span>' +
      (r.attendees ? '<span class="pa-att">With ' + paEsc(r.attendees) + '</span>' : '') +
      '<span class="pa-when">' + paEsc(paWhen(r.occurred_at)) + '</span>' +
    '</li>';
  }).join('') + '</ul>';
}

/* The next-action block, used in the detail panel. Shows the open
   action with its state, or an empty form. */
function paEditorHtml(target) {
  const a = paOpenFor(target.id);
  if (a) {
    const overdue = paIsOverdue(a);
    return '<div class="pa-open' + (overdue ? ' is-overdue' : '') + '">' +
      '<div class="pa-open-body">' + paEsc(a.body) + '</div>' +
      '<div class="pa-open-foot">' +
        '<span class="pa-due' + (overdue ? ' is-overdue' : '') + '">' +
          paEsc(paDueLabel(a) || '') + '</span>' +
        '<button type="button" class="ac-act" data-pa-complete="' + paEsc(a.id) + '">Mark done</button>' +
        '<button type="button" class="ac-act ac-act-quiet" data-pa-clear="' + paEsc(a.id) + '">Clear</button>' +
      '</div></div>';
  }
  return '<div class="pa-new">' +
    '<input class="scr-text" data-pa-body type="text" maxlength="300" ' +
      'placeholder="Send the deck, request an intro, check back in March">' +
    '<input class="scr-text pa-date" data-pa-due type="date" aria-label="Due date">' +
    '<button type="button" class="scr-tool" data-pa-save="1">Set</button>' +
  '</div>';
}

function paLogFormHtml() {
  return '<div class="pa-log">' +
    '<select class="scr-text" data-pa-type aria-label="What happened">' +
      PA_MANUAL_TYPES.map(function (t) {
        return '<option value="' + t.key + '">' + paEsc(t.label) + '</option>';
      }).join('') + '</select>' +
    '<input class="scr-text" data-pa-title type="text" maxlength="200" ' +
      'placeholder="Optional detail, e.g. partner meeting">' +
    '<input class="scr-text pa-date" data-pa-date type="date" aria-label="When it happened" value="' +
      new Date().toISOString().slice(0, 10) + '">' +
    '<button type="button" class="scr-tool" data-pa-log="1">Log</button>' +
  '</div>' +
  '<input class="scr-text pa-att-in" data-pa-attendees type="text" maxlength="300" ' +
    'placeholder="Who was there (optional)">';
}

/* Turns a date input into an end-of-day timestamp. A task due "the
   3rd" is not late at one minute past midnight on the 3rd. */
function paDueFromInput(value) {
  if (!value) return null;
  const d = new Date(value + 'T23:59:59');
  return isNaN(d.getTime()) ? null : d.toISOString();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PA_MANUAL_TYPES: PA_MANUAL_TYPES, PA_ACTIVITY_LABELS: PA_ACTIVITY_LABELS,
    paIsOverdue: paIsOverdue, paDueSoon: paDueSoon, paDueLabel: paDueLabel,
    paActivityLabel: paActivityLabel, paTimelineHtml: paTimelineHtml,
    paDueFromInput: paDueFromInput
  };
}
