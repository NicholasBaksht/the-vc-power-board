/* ============================================================
   ANALYTICS.JS  -  first-party product measurement

   Records a small, fixed set of product events so it is possible to
   tell whether Power Board actually helps a founder find investors.
   There is no third-party provider: rows go to the project's own
   Supabase table, which has an INSERT policy and no SELECT policy,
   so nothing here can read the funnel back out.

   WHAT THE PRIVACY POLICY NOW PROMISES, AND THIS FILE HAS TO KEEP
     1. A Do Not Track or Global Privacy Control signal switches
        measurement off entirely - not reduced, off - and stores no
        identifier on the device.
     2. Power Match answers, search text and note text never enter a
        row. Only ids, enums, small integers and timestamps do.
     3. Nothing is shared with any other company.

   Those are commitments in a published document, so every one of
   them is enforced here rather than left to the caller. pbTrack()
   drops anything it is handed that does not fit the shape.

   Load after auth.js (it needs supabaseClient) and before the
   feature files that call pbTrack().
   ============================================================ */

const PBA_ANON_KEY    = 'pb_anon_id';
const PBA_SESSION_KEY = 'pb_session';
const PBA_RUN_KEY     = 'pb_match_run';
const PBA_SESSION_MS  = 30 * 60 * 1000;   // 30 minutes idle ends a session

/* The allowlist is duplicated from the database constraint on
   purpose. The database is the authority; this copy exists so a typo
   fails silently in the console during development rather than
   generating a round trip that is always rejected. */
const PBA_EVENTS = [
  /* Strategic Angels in Power Match. The Postgres CHECK constraint
     on product_events must list these too - the array and the
     constraint are two gates and a name absent from either is
     silently dropped. */
  'strategic_angel_results_viewed',
  'strategic_angel_recommended',
  'strategic_angel_opened',
  'strategic_angel_saved',
  'strategic_angel_follow_clicked',
  'strategic_angel_message_clicked',
  'strategic_angel_message_sent',
  'strategic_angel_conflict_viewed',
  'strategic_angel_explanation_viewed',
  'strategic_angel_no_match',
  'founder_need_selected',
  'homepage_view',
  'power_match_cta_clicked',
  'power_match_started',
  'power_match_step_completed',
  'power_match_completed',
  'power_match_results_viewed',
  'power_match_result_opened',
  'power_match_feedback_given',
  'firm_profile_viewed',
  'firm_saved',
  'firm_unsaved',
  'firm_followed',
  'firm_unfollowed',
  'firm_outcome_set',
  'power_capabilities_viewed',
  'power_personality_viewed',
  'conflict_check_started',
  'conflict_check_completed',
  'power_alert_opened',
  'signup_started',
  'signup_completed',
  /* Phase 3: Saved Searches and Power Alerts. Behaviour only - a
     saved search's name, query and filter values are never sent.
     What is measured is whether alerts get opened and acted on,
     because an alert nobody clicks is noise regardless of how
     correct it was. */
  'saved_search_created',
  'saved_search_updated',
  'saved_search_deleted',
  'saved_search_run',
  'alert_generated',
  'alert_opened',
  'alert_marked_read',
  'alert_entity_clicked',
  'alert_search_clicked',
  'alert_subscription_paused',
  'alert_subscription_resumed',
  /* Phase 3F quality signals. Only explicit verdicts are recorded.
     An unread alert is not evidence of a bad alert. */
  'alert_muted',
  'alert_unmuted',
  'alert_marked_not_useful',
  /* Phase 4A: the Raise itself. Behaviour only - no raise name, no
     target amount, no description and no company name is ever sent as
     a property. What is measured is whether founders create and keep
     using a raise, not what they are raising. */
  'fundraise_created',
  'fundraise_updated',
  'fundraise_archived',
  'fundraise_restored',
  'fundraise_activated',
  /* Phase 4B: investor targets. Slugs, firm names and partner names
     are never sent - only that a target was added, and from which
     surface, so it is possible to tell which discovery product
     actually produces pipeline. */
  'pipeline_target_added',
  'pipeline_target_removed',
  'pipeline_partner_added',
  'pipeline_partner_removed',
  'pipeline_duplicate_prevented',
  /* Phase 4C: the pipeline itself. Stage and relationship changes are
     counted, never the investor they applied to, and never a
     commitment amount or a pass reason. */
  'pipeline_viewed',
  'pipeline_stage_changed',
  'pipeline_relationship_changed',
  'pipeline_target_committed',
  'pipeline_target_passed',
  'pipeline_filtered',
  /* Phase 4D: private workflow context. Note bodies, tag labels and
     intro-source names are NEVER sent. Only that a note was written,
     a tag applied, a priority set. */
  'pipeline_note_created',
  'pipeline_note_updated',
  'pipeline_note_deleted',
  'pipeline_tag_created',
  'pipeline_tag_applied',
  'pipeline_tag_removed',
  'pipeline_priority_set',
  'pipeline_intro_source_set',
  'pipeline_target_opened',
  /* Phase 4E: activities and next actions. Action text, meeting
     titles and attendee names are NEVER sent - only that a meeting
     was logged, an action created, an action completed. */
  'pipeline_next_action_created',
  'pipeline_next_action_completed',
  'pipeline_next_action_cleared',
  'pipeline_meeting_logged',
  'pipeline_activity_logged',
  /* Phase 4F: the workspace home. Counts only - never a raise name,
     a target amount, or which investors are in the pipeline. */
  'my_power_board_viewed',
  /* Phase 4G: which discovery surface actually produces pipeline.
     The surface is recorded, never the investor added from it. */
  'add_to_raise_from_search',
  'add_to_raise_from_screener',
  'add_to_raise_from_power_match',
  'add_to_raise_from_shortlist',
  /* Phase 5: fund intelligence. Which fund was opened is never sent -
     only that a fund page was viewed. */
  'fund_profile_viewed',
  /* Phase 5G. Which fund or filter is never sent, only that fund
     discovery was used. */
  'fund_search_result_clicked',
  'fund_screener_opened',
  'firm_fund_opened',
  'outcome_context_viewed',
  /* Phase 6. Which section was opened is recorded, never any figure
     or filter value. */
  'analytics_opened',
  'analytics_filter_changed',
  'analytics_entity_clicked',
  /* Phase 6D. That the co-investment map was opened, and that a pair
     was drilled into. Which firms are never sent: a founder mapping
     a specific investor is exactly the thing not to record. */
  'power_map_opened',
  'coinvestor_evidence_opened',
  /* Phase 6E. That the founder opened their own raise analytics and
     moved between sections. Never the raise, the amount, the stage
     counts, or any investor: this page is about one person's private
     pipeline and none of it leaves the browser. */
  'raise_analytics_opened',
  'raise_analytics_section_changed',
  /* Phase 6F. That an export happened, and whether private notes were
     included. Never the raise, the investors, the note text, the
     amounts, or the file. The second name exists so the default can
     be checked against reality: if most exports include notes, the
     default is wrong. */
  'export_center_opened',
  'pipeline_exported',
  'export_included_private_notes',
  /* Phase 7A. Workspaces. The workspace name, its members, the
     startup it is raising for and anything inside it are never sent.
     These record that the collaboration layer is being used, not who
     is collaborating with whom. */
  'workspaces_opened',
  'workspace_created',
  'workspace_switched',
  'workspace_archived',
  'workspace_restored',
  /* Phase 7B. Membership. No email address, no member name, no
     workspace name and no role of any identifiable person is sent.
     These say the collaboration layer is being administered, and
     nothing about who by or to whom. */
  'workspace_members_opened',
  'workspace_invite_sent',
  'workspace_member_joined',
  'workspace_member_removed',
  'workspace_role_changed',
  'workspace_ownership_transferred',
  /* Power Network. This array is the client half of the allowlist;
     the other half is the CHECK constraint on product_events, and
     both must list a name for it to be recorded. No message body,
     search text or profile field is ever sent as a property. */
  'people_page_viewed',
  'people_search_started',
  'people_search_completed',
  'people_result_opened',
  'people_profile_viewed',
  'person_followed',
  'person_unfollowed',
  'message_clicked',
  'message_request_sent',
  'message_request_accepted',
  'message_sent',
  'network_post_created',
  'linkedin_post_added',
  'following_feed_viewed',
  'profile_edit_started',
  'profile_updated',

  /* Phase 2 discovery. Same two-gate rule as the note above: these
     must also be listed in the product_events CHECK constraint in
     Postgres, or the insert is rejected and the event is lost. */
  'global_search_started',
  'global_search_result_clicked',
  'search_zero_results',
  'screener_opened',
  'screener_filter_applied',
  'screener_filter_removed',
  'screener_result_opened',
  'screener_shortlist_saved',
  'saved_view_created',
  'saved_view_loaded',
];

/* ---------- opt out ---------- */

/* Checked on every call rather than cached, because a person can
   turn the signal on mid-session and the next event must respect it. */
function pbaOptedOut() {
  try {
    if (navigator.globalPrivacyControl === true) return true;
    const dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
    if (dnt === '1' || dnt === 'yes' || dnt === true) return true;
  } catch (e) { /* treat an unreadable signal as opted out */ return true; }
  return false;
}

/* The policy says no identifier is stored when the signal is set, so
   an identifier from an earlier visit is removed rather than merely
   ignored. */
function pbaPurge() {
  try {
    localStorage.removeItem(PBA_ANON_KEY);
    sessionStorage.removeItem(PBA_SESSION_KEY);
    sessionStorage.removeItem(PBA_RUN_KEY);
  } catch (e) { /* private mode */ }
}

/* ---------- identity ---------- */

function pbaUuid() {
  try {
    if (window.crypto && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
    const b = new Uint8Array(16);
    crypto.getRandomValues(b);
    b[6] = (b[6] & 0x0f) | 0x40;
    b[8] = (b[8] & 0x3f) | 0x80;
    const h = Array.from(b, function (x) { return x.toString(16).padStart(2, '0'); }).join('');
    return h.slice(0,8)+'-'+h.slice(8,12)+'-'+h.slice(12,16)+'-'+h.slice(16,20)+'-'+h.slice(20);
  } catch (e) { return null; }
}

/* Random and local. Not derived from the person, the device, the
   screen, the fonts, or anything else that would make it a
   fingerprint. It exists only so one visit counts once. */
function pbaAnonId() {
  if (pbaOptedOut()) return null;
  try {
    let id = localStorage.getItem(PBA_ANON_KEY);
    if (!id) { id = pbaUuid(); if (id) localStorage.setItem(PBA_ANON_KEY, id); }
    return id;
  } catch (e) { return null; }
}

/* A visit. Rotates after 30 minutes of inactivity so that leaving a
   tab open overnight does not make tomorrow look like today. */
function pbaSessionId() {
  if (pbaOptedOut()) return null;
  try {
    const now = Date.now();
    let raw = null;
    try { raw = JSON.parse(sessionStorage.getItem(PBA_SESSION_KEY) || 'null'); } catch (e) { raw = null; }
    if (!raw || !raw.id || (now - raw.seen) > PBA_SESSION_MS) {
      raw = { id: pbaUuid(), seen: now };
    } else {
      raw.seen = now;
    }
    sessionStorage.setItem(PBA_SESSION_KEY, JSON.stringify(raw));
    return raw.id;
  } catch (e) { return null; }
}

/* ---------- Power Match runs ---------- */

/* One run of the questionnaire. Held in sessionStorage so that
   refreshing the results page stays the SAME run: that is what makes
   "completed matches" a count of matches rather than a count of
   reloads. The database enforces the same thing independently. */
function pbaStartRun() {
  const id = pbaUuid();
  try { if (id) sessionStorage.setItem(PBA_RUN_KEY, id); } catch (e) { /* ignore */ }
  return id;
}

function pbaRunId() {
  try { return sessionStorage.getItem(PBA_RUN_KEY); } catch (e) { return null; }
}

/* ---------- sending ---------- */

/* Suppresses repeats within the page before they reach the network.
   The unique indexes in Postgres are the real guarantee; this just
   avoids obviously pointless requests. */
const pbaSeen = Object.create(null);

function pbaClient() {
  return (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null;
}

/* Strips anything that is not an id, an enum, a small number or a
   flag. A caller cannot accidentally put founder text into a row,
   because non-primitive and long values are dropped here rather than
   trusted. */
function pbaCleanProps(props) {
  const out = {};
  if (!props || typeof props !== 'object') return out;
  Object.keys(props).slice(0, 8).forEach(function (k) {
    const v = props[k];
    if (typeof v === 'boolean') { out[k] = v; return; }
    if (typeof v === 'number' && isFinite(v)) { out[k] = Math.round(v); return; }
    if (typeof v === 'string' && v.length <= 40 && /^[A-Za-z0-9_.-]+$/.test(v)) { out[k] = v; return; }
    /* anything else - sentences, objects, arrays - is discarded */
  });
  return out;
}

/**
 * Record a product event. Never throws, never blocks, never returns
 * anything the caller has to handle.
 *
 * @param {string} name  one of PBA_EVENTS
 * @param {object} [o]   { firmSlug, runId, rank, score, route, props, dedupe }
 */
function pbTrack(name, o) {
  try {
    if (pbaOptedOut()) { pbaPurge(); return; }
    if (PBA_EVENTS.indexOf(name) === -1) {
      if (window.console && console.warn) console.warn('pbTrack: unknown event', name);
      return;
    }
    const client = pbaClient();
    if (!client) return;

    o = o || {};
    const anon = pbaAnonId();
    const session = pbaSessionId();
    if (!anon || !session) return;

    /* In-page suppression key. Mirrors the database's unique indexes
       so the common repeat never leaves the browser. */
    const key = [name, o.dedupe || '', o.runId || pbaRunId() || '', o.firmSlug || '', session].join('|');
    if (pbaSeen[key]) return;
    pbaSeen[key] = true;

    const uid = (typeof currentUser !== 'undefined' && currentUser) ? currentUser.id : null;

    const row = {
      anon_id: anon,
      session_id: session,
      user_id: uid,
      event_name: name,
      route: (o.route || location.hash || '#home').split('?')[0].slice(0, 64),
      firm_slug: o.firmSlug || null,
      run_id: o.runId || pbaRunId() || null,
      rank: (typeof o.rank === 'number' && o.rank >= 1) ? Math.min(500, Math.round(o.rank)) : null,
      score: (typeof o.score === 'number') ? Math.max(0, Math.min(100, Math.round(o.score))) : null,
      props: pbaCleanProps(o.props)
    };

    /* Fire and forget. A duplicate is rejected by one of the partial
       unique indexes with SQLSTATE 23505, which is the system working
       correctly, not an error worth surfacing. */
    client.from('product_events').insert(row).then(function (res) {
      if (res && res.error && res.error.code !== '23505') {
        if (window.console && console.debug) console.debug('pbTrack failed:', res.error.message);
      }
    }, function () { /* network - ignore */ });
  } catch (e) { /* measurement must never break a page */ }
}

/* ---------- identity stitching ---------- */

/* Written once per session when a session appears, so an anonymous
   funnel can be joined to the account it became. The email address is
   never written next to the anon id; the link is uuid to uuid, and no
   client can read the table back. */
let pbaLinked = false;
function pbaLinkIdentity() {
  try {
    if (pbaOptedOut() || pbaLinked) return;
    const client = pbaClient();
    const uid = (typeof currentUser !== 'undefined' && currentUser) ? currentUser.id : null;
    const anon = pbaAnonId();
    if (!client || !uid || !anon) return;
    pbaLinked = true;
    client.from('identity_links').insert({ anon_id: anon, user_id: uid })
      .then(function () {}, function () {});
  } catch (e) { /* ignore */ }
}

/* ---------- route level events ---------- */

/* Derived from the hash rather than instrumented into every view, so
   adding a page does not mean remembering to add a tracking call. */
function pbaRouteEvent() {
  try {
    const hash = (location.hash || '').split('?')[0];
    const slug = hash.replace('#', '').split('/')[0];

    if (!slug || slug === 'home') { pbTrack('homepage_view'); return; }
    if (slug === 'find-investors') { pbTrack('power_match_cta_clicked'); return; }
    if (slug === 'conflict-check') { pbTrack('conflict_check_started'); return; }
    if (slug === 'powerAlerts') { pbTrack('power_alert_opened'); return; }
    if (slug === 'signin') { pbTrack('signup_started'); return; }

    /* A firm profile is any hash that matches a firm slug. Checking
       against the dataset is what keeps #compare and #shortlist from
       being recorded as firms. */
    if (typeof firms !== 'undefined' && Array.isArray(firms)) {
      const hit = firms.some(function (f) { return f.slug === slug; });
      if (hit) pbTrack('firm_profile_viewed', { firmSlug: slug });
    }
  } catch (e) { /* ignore */ }
}

/* ---------- wiring ---------- */

function pbaInit() {
  if (pbaOptedOut()) { pbaPurge(); return; }

  pbaRouteEvent();
  window.addEventListener('hashchange', pbaRouteEvent);

  /* Follows already broadcast their own state change, so this needs
     no edit to power-follows.js. */
  document.addEventListener('pb:follows-changed', function (ev) {
    const d = (ev && ev.detail) || {};
    if (!d.slug) return;
    pbTrack(d.following ? 'firm_followed' : 'firm_unfollowed', {
      firmSlug: d.slug,
      dedupe: String(Date.now())   // a follow can legitimately repeat
    });
  });

  if (typeof onAuthChange === 'function') {
    onAuthChange(function () {
      pbaLinkIdentity();
      if (typeof isSignedIn === 'function' && isSignedIn()) {
        pbTrack('signup_completed');
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', pbaInit);
} else {
  pbaInit();
}


/* ============================================================
   INTERNAL ANALYTICS  (#internal)
   ------------------------------------------------------------
   Reads one RPC, pb_admin_metrics(), which is SECURITY DEFINER and
   refuses anyone not in the admins table. Nothing here can reach
   product_events directly, because that table still has no SELECT
   policy and this code holds only the public anon key.

   THE RULE THIS VIEW EXISTS UNDER: no fabricated numbers. A metric
   with no data shows a dash and says so. Retention says
   "Insufficient data" until the history is genuinely long enough,
   because a 30 day rate from six days of traffic is not a small
   number, it is a wrong one. Nothing is padded to make the page
   look busier than the evidence.

   Lives in analytics.js rather than its own file so that adding it
   needs no change to index.html: the container and stylesheet are
   created here, and router() leaves an unknown hash blank, which is
   exactly the space this fills.
   ============================================================ */

const PBI_STYLE_ID = 'pbi-style';

function pbiStyles() {
  if (document.getElementById(PBI_STYLE_ID)) return;
  const css = `
  /* A full-surface panel rather than a section in the page flow.
     router() does not know this route, and an unrecognised hash falls
     through to a branch that re-shows the homepage chrome, which left
     the dashboard sitting three thousand pixels below the hero. Taking
     it out of the flow entirely is self-contained and needs no change
     to app.js or index.html. */
  #internalView { position: fixed; inset: 0; z-index: 400; overflow-y: auto;
                  background: var(--bg); padding: 26px 22px 70px; }
  #internalView .pbi-inner { max-width: 1000px; margin: 0 auto; }
  .pbi-back { display: inline-block; font-family: var(--mono); font-size: 11px;
              letter-spacing: .08em; text-transform: uppercase; color: var(--ink-dim);
              text-decoration: none; margin-bottom: 16px; }
  .pbi-back:hover { color: var(--accent-bright); }
  .pbi-head { border-bottom: 1px solid var(--hairline); padding-bottom: 14px; margin-bottom: 22px; }
  .pbi-kicker { font-family: var(--mono); font-size: 11px; letter-spacing: .16em;
                text-transform: uppercase; color: var(--accent); margin-bottom: 7px; }
  .pbi-title { font-size: 24px; font-weight: 600; letter-spacing: -.01em; margin: 0 0 6px; }
  .pbi-sub { font-size: 13px; color: var(--ink-dim); margin: 0; max-width: 68ch; line-height: 1.6; }
  .pbi-sec { margin-bottom: 26px; }
  .pbi-h { font-family: var(--mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase;
           color: var(--ink-dim); margin: 0 0 9px; padding-bottom: 6px;
           border-bottom: 1px solid var(--hairline); }
  .pbi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
              gap: 1px; background: var(--hairline); border: 1px solid var(--hairline); border-radius: 3px; }
  .pbi-cell { background: var(--surface); padding: 13px 15px; display: flex; flex-direction: column; gap: 5px; }
  .pbi-n { font-family: var(--mono); font-size: 21px; font-weight: 500; color: var(--ink);
           line-height: 1.1; font-variant-numeric: tabular-nums; }
  .pbi-n.is-empty { color: var(--ink-dim); font-size: 15px; }
  .pbi-l { font-family: var(--mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
           color: var(--ink-dim); }
  .pbi-table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .pbi-table th { font-family: var(--mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
                  color: var(--ink-dim); text-align: left; font-weight: 500;
                  padding: 6px 10px 6px 0; border-bottom: 1px solid var(--hairline); }
  .pbi-table td { padding: 7px 10px 7px 0; border-bottom: 1px solid var(--hairline); color: var(--ink); }
  .pbi-table td.n { font-family: var(--mono); text-align: right; font-variant-numeric: tabular-nums;
                    color: var(--ink-dim); }
  .pbi-empty { font-size: 13px; color: var(--ink-dim); padding: 10px 0; }
  .pbi-foot { margin-top: 26px; padding-top: 12px; border-top: 1px solid var(--hairline);
              font-family: var(--mono); font-size: 11px; color: var(--ink-dim); }
  @media (max-width: 640px) { .pbi-grid { grid-template-columns: 1fr 1fr; } }
  `;
  const el = document.createElement('style');
  el.id = PBI_STYLE_ID;
  el.textContent = css;
  document.head.appendChild(el);
}

function pbiHost() {
  let el = document.getElementById('internalView');
  if (el) return el;
  el = document.createElement('section');
  el.id = 'internalView';
  el.style.display = 'none';
  document.body.appendChild(el);
  return el;
}

/* A number that does not exist yet renders as a dash with a reason,
   never as a zero that implies a measured result. */
function pbiNum(v, suffix, emptyLabel) {
  if (v === null || v === undefined) {
    return '<span class="pbi-n is-empty">' + (emptyLabel || 'No data yet') + '</span>';
  }
  return '<span class="pbi-n">' + v + (suffix || '') + '</span>';
}

function pbiCell(value, label, suffix, emptyLabel) {
  return '<div class="pbi-cell">' + pbiNum(value, suffix, emptyLabel) +
         '<span class="pbi-l">' + label + '</span></div>';
}

function pbiRows(list, cols, emptyMsg) {
  if (!list || !list.length) return '<p class="pbi-empty">' + emptyMsg + '</p>';
  return '<table class="pbi-table"><thead><tr>' +
    cols.map(function (c, i) { return '<th' + (i ? ' style="text-align:right"' : '') + '>' + c[0] + '</th>'; }).join('') +
    '</tr></thead><tbody>' +
    list.map(function (row) {
      return '<tr>' + cols.map(function (c, i) {
        const v = c[1](row);
        return i ? '<td class="n">' + v + '</td>' : '<td>' + v + '</td>';
      }).join('') + '</tr>';
    }).join('') +
    '</tbody></table>';
}

const PBI_OUTCOME_LABELS = {
  not_contacted: 'Not contacted', contacted: 'Contacted', replied: 'Replied',
  meeting: 'Meeting booked', invested: 'Invested', passed: 'Passed'
};
const PBI_REASON_LABELS = {
  wrong_stage: 'Wrong stage', wrong_sector: 'Wrong sector', check_size: 'Check size',
  geography: 'Geography', conflict: 'Conflict concern', already_knew: 'Already knew them',
  other: 'Other', 'no reason given': 'No reason given'
};

function pbiRender(m) {
  const host = pbiHost();
  const outcomes = m.outcomes || {};
  const q = m.quality || {};
  const r = m.retention || {};
  const res = m.research || {};
  const match = m.match || {};

  const outcomeOrder = ['not_contacted', 'contacted', 'replied', 'meeting', 'invested', 'passed'];
  const anyOutcome = outcomeOrder.some(function (k) { return outcomes[k]; });

  host.innerHTML = '<div class="pbi-inner">' +
    '<a class="pbi-back" href="#home">&larr; Back to the board</a>' +
    '<div class="pbi-head">' +
      '<div class="pbi-kicker">Internal</div>' +
      '<h1 class="pbi-title">Founder funnel</h1>' +
      '<p class="pbi-sub">Every figure is a real count from recorded events. Where a number does not exist yet ' +
        'it says so rather than showing a zero, and retention stays withheld until the history covers the window.</p>' +
    '</div>' +

    '<section class="pbi-sec"><h2 class="pbi-h">Power Match</h2><div class="pbi-grid">' +
      pbiCell(match.started, 'Started') +
      pbiCell(match.completed, 'Completed') +
      pbiCell(match.completion_rate, 'Completion rate', '%', 'No runs yet') +
    '</div>' +
    '<p class="pbi-sub" style="margin-top:9px">Completed means all five questions answered. ' +
      'The table below is where runs stopped.</p>' +
    pbiRows(match.abandoned_at, [
      ['Questions answered', function (x) { return x.groups + ' of 5'; }],
      ['Runs', function (x) { return x.runs; }]
    ], 'No runs recorded yet.') +
    '</section>' +

    '<section class="pbi-sec"><h2 class="pbi-h">Research</h2><div class="pbi-grid">' +
      pbiCell(res.recommendations_opened, 'Recommendations opened') +
      pbiCell(res.opens_per_completed_run, 'Opens per completed run', '', 'No completed runs') +
      pbiCell(res.firms_saved, 'Firms saved') +
      pbiCell(res.firms_followed, 'Firms followed') +
      pbiCell(res.profiles_viewed, 'Profiles viewed') +
    '</div></section>' +

    '<section class="pbi-sec"><h2 class="pbi-h">Outcomes</h2>' +
      (anyOutcome
        ? '<div class="pbi-grid">' + outcomeOrder.map(function (k) {
            return pbiCell(outcomes[k] || 0, PBI_OUTCOME_LABELS[k]);
          }).join('') + '</div>' +
          '<p class="pbi-sub" style="margin-top:9px">Set by ' + (m.outcome_founders || 0) +
          ' founder' + ((m.outcome_founders === 1) ? '' : 's') + '. Which founder set which status is never returned by this view.</p>'
        : '<p class="pbi-empty">No founder has recorded an investor outcome yet.</p>') +
    '</section>' +

    '<section class="pbi-sec"><h2 class="pbi-h">Match quality</h2><div class="pbi-grid">' +
      pbiCell(q.useful, 'Useful') +
      pbiCell(q.not_useful, 'Not useful') +
    '</div>' +
    pbiRows(q.reasons, [
      ['Reason given', function (x) { return PBI_REASON_LABELS[x.reason] || x.reason; }],
      ['Count', function (x) { return x.n; }]
    ], 'No recommendation has been marked not useful yet.') +
    (q.by_rank && q.by_rank.length
      ? '<div style="margin-top:14px">' + pbiRows(q.by_rank, [
          ['Rank band', function (x) { return x.band; }],
          ['Useful', function (x) { return x.useful; }],
          ['Not useful', function (x) { return x.not_useful; }]
        ], '') + '</div>'
      : '') +
    '</section>' +

    '<section class="pbi-sec"><h2 class="pbi-h">Retention</h2><div class="pbi-grid">' +
      pbiCell(r.people, 'People seen') +
      pbiCell(r.return_7d, 'Returned within 7 days', '%', 'Insufficient data') +
      pbiCell(r.return_30d, 'Returned within 30 days', '%', 'Insufficient data') +
    '</div>' +
    '<p class="pbi-sub" style="margin-top:9px">' + (m.history_days || 0) +
      ' days of history recorded. A window is only reported once the history covers it.</p>' +
    '</section>' +

    '<section class="pbi-sec"><h2 class="pbi-h">What is used</h2>' +
      pbiRows(m.usage, [
        ['Event', function (x) { return x.event; }],
        ['Sessions', function (x) { return x.sessions; }],
        ['Events', function (x) { return x.events; }]
      ], 'Nothing recorded yet.') +
    '</section>' +

    '<p class="pbi-foot">Generated ' + String(m.generated_at || '').slice(0, 19).replace('T', ' ') +
      ' &middot; visible only to accounts in the admins table</p>' +
    '</div>';
}

function pbiMessage(title, body) {
  const host = pbiHost();
  host.innerHTML = '<div class="pbi-inner">' +
    '<a class="pbi-back" href="#home">&larr; Back to the board</a>' +
    '<div class="pbi-head"><div class="pbi-kicker">Internal</div>' +
    '<h1 class="pbi-title">' + title + '</h1>' +
    '<p class="pbi-sub">' + body + '</p></div></div>';
}

let pbiLoading = false;
function pbiLoad() {
  const client = pbaClient();
  if (!client) { pbiMessage('Unavailable', 'The database client is not loaded on this page.'); return; }
  if (typeof isSignedIn === 'function' && !isSignedIn()) {
    pbiMessage('Sign in required', 'This view is limited to accounts listed in the admins table. ' +
      '<a href="#signin">Sign in</a> and try again.');
    return;
  }
  if (pbiLoading) return;
  pbiLoading = true;
  pbiMessage('Loading', 'Reading the funnel.');

  client.rpc('pb_admin_metrics').then(function (res) {
    pbiLoading = false;
    if (res.error) {
      /* 42501 is the function refusing a caller who is not an admin.
         Said plainly rather than dressed up as a generic failure. */
      const denied = /not authorised/i.test(res.error.message || '') || res.error.code === '42501';
      pbiMessage(denied ? 'Not available for this account'
                        : 'Could not load',
                 denied ? 'This account is not in the admins table.'
                        : 'The metrics query failed: ' + paEscLike(res.error.message));
      return;
    }
    pbiRender(res.data || {});
  }, function () {
    pbiLoading = false;
    pbiMessage('Could not load', 'The request did not complete.');
  });
}

/* paEsc lives in alerts-ui.js, which may not be loaded on every page,
   so this view carries its own rather than depending on load order. */
function paEscLike(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function pbiRoute() {
  const on = (location.hash || '').split('?')[0] === '#internal';
  const host = pbiHost();
  host.style.display = on ? '' : 'none';
  if (on) { pbiStyles(); pbiLoad(); }
}

window.addEventListener('hashchange', pbiRoute);
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', pbiRoute);
} else {
  pbiRoute();
}
