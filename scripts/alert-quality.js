/* ============================================================
   ALERT-QUALITY.JS
   Phase 3F. The layer that decides what NOT to send.

   Phase 3C already guarantees correctness: an alert exists only if
   the underlying research really moved, and UNIQUE (user_id,
   dedupe_key) guarantees it is never sent twice. Correct and useful
   are different things. A correct alert can still be worthless -
   six separate rows about one firm, a saved search so broad it
   matches a third of the database, or a change type this particular
   user has never once clicked.

   FOUR LEVERS, IN THE ORDER THEY FIRE:

   1. MUTES. The user's own off switch, per entity and per change
      type. Applied first because a muted thing should not compete
      for the run budget.
   2. ROLLUP. Several changes to one entity inside one run collapse
      into a single row. Six rows about one firm is not six times the
      information, it is one story told badly.
   3. BREADTH GUARD. A saved search matching an enormous slice of the
      database is a badly scoped search, not news. Silently truncating
      it hides the real problem, so it says so once and pauses.
   4. FEEDBACK. "Not useful" is recorded per change type and, once a
      type is consistently dismissed, that type is auto-muted with an
      explanation the user can undo.

   WHAT THIS FILE DELIBERATELY DOES NOT DO: score alerts with a
   percentage. There is no ground truth for "82 per cent relevant"
   and inventing one would be the same fabrication this product
   refuses everywhere else. Ranking is by importance, which is set by
   the change type, and that is all it claims to be.
   ============================================================ */

/* Below 3 changes to one entity, separate rows read better. At 3 and
   above the entity is the story and the changes are its detail. */
const AQ_ROLLUP_MIN = 3;

/* A saved search whose result set moves by more than this in one run
   is too broad to be a watch list. Not a cap - a signal. */
const AQ_BREADTH_MAX = 25;

/* Dismissals of one change type before it is auto-muted. Set high
   enough that it is a pattern, not a bad afternoon. */
const AQ_DISMISS_MUTE = 4;

const AQ_LS_MUTES = 'pbAqMutes';
const AQ_LS_FEEDBACK = 'pbAqFeedback';

function aqClient() {
  return (typeof almClient === 'function') ? almClient() : null;
}

function aqLoadLocal(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}

function aqSaveLocal(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

/* ------------------------------------------------------------
   1. MUTES

   Local-first so the switch is instant and works signed out, then
   mirrored to Supabase so it follows the account. A mute is never
   inferred from silence - only from an explicit action or from the
   dismissal threshold below, which announces itself.
   ------------------------------------------------------------ */

let aqMuteCache = null;

function aqMutes() {
  if (aqMuteCache) return aqMuteCache;
  aqMuteCache = aqLoadLocal(AQ_LS_MUTES, { entities: [], types: [] });
  if (!Array.isArray(aqMuteCache.entities)) aqMuteCache.entities = [];
  if (!Array.isArray(aqMuteCache.types)) aqMuteCache.types = [];
  return aqMuteCache;
}

async function aqLoadMutes() {
  const c = aqClient();
  if (!c || (typeof almSignedIn === 'function' && !almSignedIn())) return aqMutes();
  try {
    const { data, error } = await c.from('alert_mutes').select('*');
    if (error) throw error;
    const m = { entities: [], types: [] };
    (data || []).forEach(function (r) {
      if (r.mute_type === 'entity' && r.target) m.entities.push(r.target);
      else if (r.mute_type === 'event_type' && r.target) m.types.push(r.target);
    });
    aqMuteCache = m;
    aqSaveLocal(AQ_LS_MUTES, m);
  } catch (e) {}
  return aqMutes();
}

async function aqMute(kind, target, reason) {
  const m = aqMutes();
  const bucket = (kind === 'entity') ? m.entities : m.types;
  if (bucket.indexOf(target) === -1) bucket.push(target);
  aqSaveLocal(AQ_LS_MUTES, m);
  const c = aqClient();
  if (c) {
    try {
      await c.from('alert_mutes').upsert({
        id: (kind === 'entity' ? 'e:' : 't:') + target,
        mute_type: (kind === 'entity') ? 'entity' : 'event_type',
        target: target,
        reason: reason || 'user',
        created_at: new Date().toISOString()
      }, { onConflict: 'user_id,id', ignoreDuplicates: false });
    } catch (e) {}
  }
  if (typeof pbTrack === 'function') pbTrack('alert_muted');
}

async function aqUnmute(kind, target) {
  const m = aqMutes();
  const bucket = (kind === 'entity') ? m.entities : m.types;
  const i = bucket.indexOf(target);
  if (i > -1) bucket.splice(i, 1);
  aqSaveLocal(AQ_LS_MUTES, m);
  const c = aqClient();
  if (c) {
    try {
      await c.from('alert_mutes').delete().eq('id', (kind === 'entity' ? 'e:' : 't:') + target);
    } catch (e) {}
  }
  if (typeof pbTrack === 'function') pbTrack('alert_unmuted');
}

function aqIsMuted(a) {
  const m = aqMutes();
  if (m.types.indexOf(a.event_type) > -1) return true;
  if (m.entities.indexOf(a.entity_id) > -1) return true;
  return false;
}

function aqApplyMutes(alerts) {
  return alerts.filter(function (a) { return !aqIsMuted(a); });
}

/* ------------------------------------------------------------
   2. ROLLUP

   Groups by entity, not by change type: the reader thinks "what
   happened at Sequoia", not "what NEW_PARTNER_INVESTMENT events
   occurred". HIGH importance changes are never rolled up - a partner
   moving firm is the thing you opened the inbox for, and burying it
   inside "5 changes" would be a quality regression dressed as one.
   ------------------------------------------------------------ */

function aqRollup(alerts) {
  const groups = {};
  const passthrough = [];

  alerts.forEach(function (a) {
    if (a.importance === 'HIGH') { passthrough.push(a); return; }
    const k = a.entity_type + ':' + a.entity_id;
    (groups[k] = groups[k] || []).push(a);
  });

  const out = passthrough.slice();

  Object.keys(groups).forEach(function (k) {
    const g = groups[k];
    if (g.length < AQ_ROLLUP_MIN) { g.forEach(function (a) { out.push(a); }); return; }

    /* One row, and it must still say what changed. A rollup that
       reads "5 updates" and nothing else is exactly the vague
       notification this product refuses to send, so every collapsed
       change is carried in rollup_items and rendered as a list. */
    const first = g[0];
    const name = first.entity_name || first.entity_id;
    const kinds = {};
    g.forEach(function (a) { kinds[a.event_type] = (kinds[a.event_type] || 0) + 1; });
    const discovery = g.every(function (a) { return a.is_discovery; });

    out.push(Object.assign({}, first, {
      id: (typeof almFingerprint === 'function')
        ? almFingerprint(['rollup', k, g.map(function (a) { return a.dedupe_key; }).sort().join('|')])
        : 'rollup-' + k,
      dedupe_key: (typeof almFingerprint === 'function')
        ? almFingerprint(['rollup', k, g.map(function (a) { return a.dedupe_key; }).sort().join('|')])
        : 'rollup-' + k,
      event_type: 'ENTITY_MULTI_CHANGE',
      importance: 'MEDIUM',
      is_discovery: discovery,
      summary: g.length + ' changes recorded for ' + name,
      reason: aqRollupReason(g.length, name, Object.keys(kinds).length, discovery),
      rollup_count: g.length,
      rollup_items: g.map(function (a) {
        return { summary: a.summary, link: a.link || null, event_type: a.event_type };
      })
    }));
  });

  return out;
}

function aqRollupReason(n, name, kindCount, discovery) {
  const base = discovery
    ? 'Power Board added ' + n + ' facts to this record in one update. They describe things that ' +
      'happened earlier, not events from today.'
    : n + ' separate changes were recorded here in one update.';
  return base + (kindCount > 1
    ? ' They span ' + kindCount + ' different kinds of change, listed below.'
    : ' Each one is listed below.');
}

/* ------------------------------------------------------------
   3. BREADTH GUARD

   A search matching half the database will churn on every research
   commit and drown everything else. Truncating it silently would
   leave the user believing they are watching something precise. So
   the run reports the problem once, in the inbox, and pauses that
   search's alerts until it is narrowed. It is never deleted and the
   membership baseline is kept, so re-enabling loses nothing.
   ------------------------------------------------------------ */

function aqBreadthCheck(search, entered, exited) {
  const moved = (entered || 0) + (exited || 0);
  if (moved <= AQ_BREADTH_MAX) return null;
  return {
    search: search,
    moved: moved,
    alert: (typeof almAlert === 'function') ? almAlert({
      key: ['breadth', search.id, String(moved)],
      source: 'saved_search',
      savedSearchId: search.id,
      eventType: 'SAVED_SEARCH_TOO_BROAD',
      entityType: search.entityType || 'partner',
      entityId: search.id,
      entityName: search.name,
      occurredAt: null,
      isDiscovery: false,
      importance: 'MEDIUM',
      summary: '"' + search.name + '" matched ' + moved + ' changes at once',
      reason: 'A search this broad will move on almost every research update, which buries the ' +
              'changes you actually care about. Alerts for it are paused until you narrow it. ' +
              'Nothing has been deleted and its history is intact.',
      link: '#screener'
    }) : null
  };
}

async function aqPauseSearch(searchId) {
  const c = aqClient();
  if (!c) return;
  try {
    await c.from('saved_searches')
      .update({ alerts_enabled: false, updated_at: new Date().toISOString() })
      .eq('id', searchId);
  } catch (e) {}
  if (typeof pbTrack === 'function') pbTrack('alert_subscription_paused');
}

/* ------------------------------------------------------------
   4. FEEDBACK

   One signal, recorded honestly: the user said this was not useful.
   It is counted per change type. Past the threshold that type is
   muted and the user is told, rather than the system quietly
   deciding on their behalf and leaving them wondering why alerts
   stopped.
   ------------------------------------------------------------ */

function aqFeedbackCounts() {
  return aqLoadLocal(AQ_LS_FEEDBACK, {});
}

async function aqNotUseful(alert) {
  const counts = aqFeedbackCounts();
  const t = alert.event_type;
  counts[t] = (counts[t] || 0) + 1;
  aqSaveLocal(AQ_LS_FEEDBACK, counts);

  const c = aqClient();
  if (c) {
    try {
      await c.from('alert_feedback').upsert({
        alert_id: alert.id,
        event_type: t,
        verdict: 'not_useful',
        created_at: new Date().toISOString()
      }, { onConflict: 'user_id,alert_id', ignoreDuplicates: true });
    } catch (e) {}
  }
  if (typeof pbTrack === 'function') pbTrack('alert_marked_not_useful');

  /* The verdict is computed before the mute is applied, so the
     "already muted" check still sees the pre-change state. */
  const verdict = aqDismissVerdict(counts[t], t);
  if (verdict.autoMuted) await aqMute('event_type', t, 'auto_dismissed');
  return verdict;
}

/* Pure, so the threshold rule can be tested without touching storage
   or the network. The decision to stop showing someone a whole class
   of change is significant enough that it should be verifiable on its
   own, not only as a side effect of an async write. */
function aqDismissVerdict(count, type) {
  const already = aqMutes().types.indexOf(type) > -1;
  if (count >= AQ_DISMISS_MUTE && !already) {
    return {
      autoMuted: true,
      message: 'You have dismissed ' + count + ' of these. ' +
               'Power Board has stopped sending this kind of change. You can turn it back on in preferences.'
    };
  }
  return { autoMuted: false };
}

/* ------------------------------------------------------------
   QUALITY MEASUREMENT

   Quality has to be observable or it is just a claim. These are the
   three numbers that actually indicate whether alerts are working,
   computed from the user's own inbox: how many get opened, how many
   lead to a click, and how many get dismissed. No benchmark is
   invented to compare them against.
   ------------------------------------------------------------ */

function aqQualityStats(alerts) {
  const list = Array.isArray(alerts) ? alerts : [];
  if (!list.length) return null;
  const read = list.filter(function (a) { return a.read_at; }).length;
  const counts = aqFeedbackCounts();
  let dismissed = 0;
  Object.keys(counts).forEach(function (k) { dismissed += counts[k]; });
  return {
    total: list.length,
    read: read,
    unread: list.length - read,
    dismissed: dismissed,
    /* Deliberately a fraction of a known denominator, not a score. */
    readShare: Math.round((read / list.length) * 100)
  };
}

/* ------------------------------------------------------------
   PIPELINE ENTRY

   Called by almEvaluate between dedupe and cooldown. Ordering
   matters: mutes first so muted noise never consumes the run
   budget, rollup second so the cap counts stories rather than rows.
   ------------------------------------------------------------ */

function aqRefine(alerts) {
  let out = aqApplyMutes(alerts || []);
  out = aqRollup(out);
  return out;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    aqRollup: aqRollup, aqApplyMutes: aqApplyMutes, aqRefine: aqRefine,
    aqBreadthCheck: aqBreadthCheck, aqQualityStats: aqQualityStats,
    aqDismissVerdict: aqDismissVerdict
  };
}
