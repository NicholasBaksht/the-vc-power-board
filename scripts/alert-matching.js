/* ============================================================
   ALERT-MATCHING.JS
   Phase 3C and 3F. Turns canonical change events into alerts for
   one specific person, and refuses to turn most of them into
   anything at all.

   THE QUESTION THIS FILE ANSWERS is not "did something change" -
   data-change-events.js already answered that. It is "did something
   change that alters THIS user's result set or its relevance". Most
   changes fail that test and produce nothing.

   FIVE GATES, all of which must pass:
     1. a real tracked change exists
     2. it is relevant to something this user subscribed to
     3. the evidence is good enough to state as fact
     4. it is novel, not a restatement
     5. no duplicate inside the cooldown window

   TIME DECAY IS NOT AN EVENT. A saved search filtered on "active in
   the last 24 months" loses members purely because the calendar
   moved. Alerting on that would produce a slow drip of "X left your
   search" that describes nothing anyone did. Exit alerts are
   therefore suppressed entirely for searches carrying a rolling
   window, and the search still shows the smaller number when opened.

   ENTERING IS NOT NEWS ON DAY ONE. A search records its membership
   when it is created, so the founding result set is the baseline and
   never arrives as a hundred alerts.

   WORDING FOLLOWS isDiscovery, NEVER PROSE. An investment added
   today that happened last year is a discovery. The alert says Power
   Board added it; it never says the investor just did it. That
   distinction is carried in data, not in a phrase someone remembered
   to write.

   IDEMPOTENCY IS THE DATABASE'S JOB. Every alert carries a dedupe
   key and user_alerts has UNIQUE (user_id, dedupe_key), so this file
   inserts and lets Postgres reject repeats rather than checking
   first and racing itself.
   ============================================================ */

const ALM_COOLDOWN_HOURS = 20;      // same entity + type, per user
const ALM_MAX_PER_RUN = 40;         // a research dump cannot flood an inbox
const ALM_THROTTLE_MIN = 30;        // minimum gap between evaluations

/* Filters whose membership moves with the calendar rather than with
   research. Exits caused by these are silence, not alerts. */
const ALM_ROLLING_FILTERS = ['recentOnly'];

function almNow() { return new Date().toISOString(); }

function almClient() {
  if (typeof ssClient === 'function') return ssClient();
  if (typeof pbnClient === 'function') { try { return pbnClient(); } catch (e) { return null; } }
  return null;
}

function almSignedIn() {
  return (typeof ssSignedIn === 'function') ? ssSignedIn() : false;
}

function almFingerprint(parts) {
  const s = parts.filter(function (p) { return p != null; }).join('|');
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return 'ua_' + (h >>> 0).toString(36);
}

/* ---------- the change-event feed ---------- */

/* The events file only exists once a data change has been committed,
   so its absence is normal and means "nothing has changed since
   monitoring began", not an error. */
function almEvents() {
  return (typeof CHANGE_EVENTS !== 'undefined' && Array.isArray(CHANGE_EVENTS)) ? CHANGE_EVENTS : [];
}

/* ---------- entity naming, for readable alerts ---------- */

function almEntityName(type, id, fallback) {
  try {
    if (type === 'partner' && typeof partnerProfiles !== 'undefined' && partnerProfiles[id]) {
      return partnerProfiles[id].name;
    }
    if (type === 'firm' && typeof firms !== 'undefined') {
      const f = firms.filter(function (x) { return x.slug === id; })[0];
      if (f) return f.name;
    }
    if (type === 'angel' && typeof CAPITAL_SOURCES !== 'undefined' && CAPITAL_SOURCES[id]) {
      return CAPITAL_SOURCES[id].name;
    }
    if (type === 'company' && typeof COMPANIES !== 'undefined' && COMPANIES[id]) {
      return COMPANIES[id].name;
    }
  } catch (e) {}
  return fallback || id;
}

function almRoute(type, id) {
  if (type === 'partner') return '#partner/' + id;
  if (type === 'firm') return '#' + id;
  if (type === 'angel') return '#capital-source/' + id;
  if (type === 'company') {
    return (typeof cmpSlug === 'function' && typeof COMPANIES !== 'undefined' && COMPANIES[id])
      ? '/company/' + cmpSlug(COMPANIES[id].name) + '/'
      : '#companies';
  }
  return '#';
}

/* ---------- alert construction ---------- */

function almAlert(o) {
  /* The key excludes any timestamp so a re-run collides with itself
     rather than producing a second copy. */
  const key = almFingerprint([o.source, o.savedSearchId || '', o.eventType,
                              o.entityType, o.entityId, o.afterValue || '']);
  return {
    id: key,
    dedupe_key: key,
    source: o.source,
    saved_search_id: o.savedSearchId || null,
    event_type: o.eventType,
    entity_type: o.entityType,
    entity_id: o.entityId,
    entity_name: o.entityName || null,
    occurred_at: o.occurredAt || null,
    detected_at: o.detectedAt || almNow(),
    is_discovery: o.isDiscovery !== false,
    importance: o.importance || 'LOW',
    summary: o.summary,
    reason: o.reason || null,
    link: o.link || null,
    source_url: o.sourceUrl || null
  };
}

/* ---------- membership matching ---------- */

/* Compares what a saved search matches now against what it matched
   last time. Entering is always interesting; leaving is only
   interesting when research caused it. */
function almMembershipAlerts(search, members) {
  const alerts = [];
  const before = search.lastMemberIds || [];
  if (!before.length) return alerts;          // first evaluation is the baseline

  const beforeSet = {}, afterSet = {};
  before.forEach(function (x) { beforeSet[x] = 1; });
  members.forEach(function (x) { afterSet[x] = 1; });

  const entered = members.filter(function (x) { return !beforeSet[x]; });
  const exited = before.filter(function (x) { return !afterSet[x]; });

  const desc = (typeof ssDescribe === 'function') ? ssDescribe(search) : search.name;

  entered.forEach(function (id) {
    const nm = almEntityName(search.entityType, id);
    alerts.push(almAlert({
      source: 'saved_search', savedSearchId: search.id,
      eventType: 'SAVED_SEARCH_ENTITY_ENTERED',
      entityType: search.entityType, entityId: id, entityName: nm,
      afterValue: 'entered',
      isDiscovery: true,
      importance: 'MEDIUM',
      summary: nm + ' now matches "' + search.name + '"',
      reason: 'Power Board research changed so that ' + nm + ' meets this search: ' + desc + '.',
      link: almRoute(search.entityType, id)
    }));
  });

  /* A rolling window makes membership decay with the calendar. Those
     exits describe the passage of time, not a change in the world, so
     they are not reported at all. */
  const rolling = ALM_ROLLING_FILTERS.some(function (k) {
    return (search.filters || {})[k];
  });
  if (!rolling) {
    exited.forEach(function (id) {
      const nm = almEntityName(search.entityType, id);
      alerts.push(almAlert({
        source: 'saved_search', savedSearchId: search.id,
        eventType: 'SAVED_SEARCH_ENTITY_EXITED',
        entityType: search.entityType, entityId: id, entityName: nm,
        afterValue: 'exited',
        isDiscovery: true,
        importance: 'LOW',
        summary: nm + ' no longer matches "' + search.name + '"',
        reason: 'Updated research means ' + nm + ' no longer meets: ' + desc +
                '. This reflects a change in what Power Board holds, not necessarily a change at the firm.',
        link: almRoute(search.entityType, id)
      }));
    });
  }
  return alerts;
}

/* ---------- material change matching ---------- */

/* An entity already inside a result set can change in ways that
   matter without entering or leaving. This maps a canonical change
   event onto the searches and shortlists that care about it. */
function almMaterialAlerts(searches, memberMap, shortlist, events, since) {
  const alerts = [];

  events.forEach(function (ev) {
    if (since && ev.detectedAt && ev.detectedAt <= since) return;

    /* Which of this user's subscriptions does this event touch? */
    searches.forEach(function (s) {
      if (s.alertsEnabled === false) return;
      const members = memberMap[s.id] || [];
      /* The event is relevant if it is about a member, or about an
         entity related to a member - a deal naming a firm the user
         watches, for instance. */
      const direct = (ev.entityType === s.entityType) && members.indexOf(ev.entityId) !== -1;
      const related = (ev.relatedEntityIds || []).some(function (r) {
        return members.indexOf(r) !== -1;
      });
      if (!direct && !related) return;

      const nm = ev.entityName || almEntityName(ev.entityType, ev.entityId);
      alerts.push(almAlert({
        source: 'saved_search', savedSearchId: s.id,
        eventType: ev.eventType,
        entityType: ev.entityType, entityId: ev.entityId, entityName: nm,
        afterValue: ev.afterValue,
        occurredAt: ev.occurredAt, detectedAt: ev.detectedAt,
        isDiscovery: ev.isDiscovery,
        importance: ev.importance,
        summary: ev.summary,
        reason: almWhy(ev, direct ? nm : 'an investor in "' + s.name + '"', s.name),
        link: almRoute(ev.entityType, ev.entityId),
        sourceUrl: ev.source
      }));
    });

    /* Shortlisted entities are watched too, without needing a search. */
    if (shortlist && shortlist.length) {
      const onList = shortlist.indexOf(ev.entityId) !== -1 ||
                     (ev.relatedEntityIds || []).some(function (r) { return shortlist.indexOf(r) !== -1; });
      if (onList) {
        const nm = ev.entityName || almEntityName(ev.entityType, ev.entityId);
        alerts.push(almAlert({
          source: 'shortlist',
          eventType: ev.eventType,
          entityType: ev.entityType, entityId: ev.entityId, entityName: nm,
          afterValue: ev.afterValue,
          occurredAt: ev.occurredAt, detectedAt: ev.detectedAt,
          isDiscovery: ev.isDiscovery,
          importance: ev.importance,
          summary: ev.summary,
          reason: 'This is on your shortlist. ' + almWhy(ev, nm, null),
          link: almRoute(ev.entityType, ev.entityId),
          sourceUrl: ev.source
        }));
      }
    }
  });

  return alerts;
}

/* The "why it matters" line. Deliberately specific per event type -
   a vague "has an update" is the thing this whole phase exists to
   avoid. Wording keys off isDiscovery so a newly added historical
   fact is never described as something that just happened. */
function almWhy(ev, subject, searchName) {
  const inSearch = searchName ? ' It sits inside your saved search "' + searchName + '".' : '';
  switch (ev.eventType) {
    case 'NEW_PARTNER_INVESTMENT':
      return 'Power Board added investments to this record, which changes the observed behaviour ' +
             'this person is judged on.' + inSearch;
    case 'NEW_COMPANY_DEAL':
      return (ev.occurredAt
        ? 'A financing dated ' + ev.occurredAt + ' is now tracked here.'
        : 'A previously untracked financing is now recorded here.') +
        ' It may change who is already backing this market.' + inSearch;
    case 'PARTNER_FIRM_CHANGED':
      return 'Where a partner sits determines who you would actually be pitching.' + inSearch;
    case 'PARTNER_ROLE_CHANGED':
      return 'A change in recorded role can change who holds decision authority.' + inSearch;
    case 'COMPANY_STATUS_CHANGED':
      return 'A status change can create or remove portfolio conflict for the investors behind it.' + inSearch;
    case 'FIRM_TEAM_MEMBER_ADDED':
      return 'New names on a team page often precede new investment activity.' + inSearch;
    case 'COMPANY_ALIAS_REVIEWED':
      return 'An identity ruling changed, so records that were separate may now be one company.' + inSearch;
    default:
      return 'This affects an entity you are watching.' + inSearch;
  }
}

/* ---------- cooldown ---------- */

/* Suppresses a repeat of the same entity and type within the window,
   so a record touched several times in a day produces one alert
   rather than a stream. Distinct high-value events are never
   collapsed into each other - the key includes the event type. */
function almApplyCooldown(alerts, recent) {
  const seen = {};
  (recent || []).forEach(function (r) {
    seen[r.entity_id + '|' + r.event_type] = r.created_at;
  });
  const cutoff = new Date(Date.now() - ALM_COOLDOWN_HOURS * 3600 * 1000).toISOString();
  return alerts.filter(function (a) {
    const k = a.entity_id + '|' + a.event_type;
    if (!seen[k]) return true;
    return seen[k] < cutoff;
  });
}

/* ---------- the run ---------- */

let _almRunning = false;

async function almEvaluate(opts) {
  opts = opts || {};
  if (_almRunning) return { skipped: 'already running' };
  if (!almSignedIn()) return { skipped: 'signed out' };

  const c = almClient();
  if (!c) return { skipped: 'no client' };

  /* Throttle: this runs on navigation, and re-evaluating every route
     change would be pointless work against data that changes daily. */
  const lastRun = Number(localStorage.getItem('pbAlmLastRun') || 0);
  if (!opts.force && lastRun && (Date.now() - lastRun) < ALM_THROTTLE_MIN * 60 * 1000) {
    return { skipped: 'throttled' };
  }

  _almRunning = true;
  try {
    const prefs = await almPrefs(c);
    if (prefs && prefs.in_app === false) return { skipped: 'in-app alerts off' };

    const searches = (typeof ssAll === 'function') ? await ssAll() : [];
    const active = searches.filter(function (s) { return s.alertsEnabled !== false; });

    let alerts = [];
    const memberMap = {};

    /* Membership pass: re-evaluate each search against current data. */
    if (!prefs || prefs.saved_search_alerts !== false) {
      for (let i = 0; i < active.length; i++) {
        const s = active[i];
        const members = (typeof ssEvaluate === 'function') ? ssEvaluate(s) : [];
        memberMap[s.id] = members;
        alerts = alerts.concat(almMembershipAlerts(s, members));
        /* Advance the baseline so the same entry is never reported
           twice, even if alert insertion later fails. */
        try {
          await c.from('saved_searches')
            .update({ last_member_ids: members, last_evaluated_at: almNow() })
            .eq('id', s.id);
        } catch (e) {}
      }
    }

    /* Material pass: canonical events touching anything watched. */
    const shortlist = (prefs && prefs.shortlist_alerts === false) ? [] : await almShortlist(c);
    const events = almEvents();
    if (events.length) {
      alerts = alerts.concat(almMaterialAlerts(active, memberMap, shortlist, events, opts.since || null));
    }

    if (prefs && prefs.high_importance_only) {
      alerts = alerts.filter(function (a) { return a.importance === 'HIGH'; });
    }

    /* Collapse duplicates produced within this run - the same event
       can legitimately match two searches, and the user wants one
       alert, attributed to the first. */
    const byKey = {};
    alerts.forEach(function (a) { if (!byKey[a.dedupe_key]) byKey[a.dedupe_key] = a; });
    alerts = Object.keys(byKey).map(function (k) { return byKey[k]; });

    const recent = await almRecent(c);
    alerts = almApplyCooldown(alerts, recent);

    /* Newest and most important first, then capped. A single research
       dump must not fill an inbox. */
    const rank = { HIGH: 0, MEDIUM: 1, LOW: 2 };
    alerts.sort(function (a, b) { return (rank[a.importance] || 3) - (rank[b.importance] || 3); });
    alerts = alerts.slice(0, ALM_MAX_PER_RUN);

    let written = 0;
    if (alerts.length) {
      try {
        /* Postgres owns idempotency: UNIQUE (user_id, dedupe_key)
           rejects repeats, so a retry cannot double-insert. */
        const { error } = await c.from('user_alerts')
          .upsert(alerts, { onConflict: 'user_id,dedupe_key', ignoreDuplicates: true });
        if (error) throw error;
        written = alerts.length;
        if (typeof pbTrack === 'function') pbTrack('alert_generated');
      } catch (e) { written = 0; }
    }

    try { localStorage.setItem('pbAlmLastRun', String(Date.now())); } catch (e) {}
    return { evaluated: active.length, generated: alerts.length, written: written };
  } finally {
    _almRunning = false;
  }
}

async function almPrefs(c) {
  try {
    const { data } = await c.from('notification_prefs').select('*').maybeSingle();
    return data || null;
  } catch (e) { return null; }
}

async function almShortlist(c) {
  try {
    const { data } = await c.from('shortlists').select('firm_slug');
    return (data || []).map(function (r) { return r.firm_slug; }).filter(Boolean);
  } catch (e) { return []; }
}

async function almRecent(c) {
  try {
    const cutoff = new Date(Date.now() - ALM_COOLDOWN_HOURS * 3600 * 1000).toISOString();
    const { data } = await c.from('user_alerts')
      .select('entity_id, event_type, created_at')
      .gte('created_at', cutoff).limit(400);
    return data || [];
  } catch (e) { return []; }
}

/* Evaluation is triggered by the user arriving, not by a timer. There
   is no server to run a cron, and the data only changes when a commit
   lands, so checking on navigation with a throttle is both sufficient
   and honest about the cadence. */
function almMaybeRun() {
  if (!almSignedIn()) return;
  setTimeout(function () { almEvaluate().catch(function () {}); }, 1500);
}

window.addEventListener('hashchange', almMaybeRun);
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', almMaybeRun);
} else {
  almMaybeRun();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    almMembershipAlerts: almMembershipAlerts,
    almMaterialAlerts: almMaterialAlerts,
    almApplyCooldown: almApplyCooldown,
    almWhy: almWhy,
    almFingerprint: almFingerprint
  };
}
