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
  'signup_completed'
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
