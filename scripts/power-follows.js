/* ============================================================
   POWER-FOLLOWS.JS
   Following a firm, and the per-user alert state that Power
   Alerts 2.0 reads.

   TWO-TIER PERSISTENCE, deliberately.
     signed in  -> Supabase (firm_follows / alert_state), so it
                   follows the user across devices
     signed out -> localStorage, so the feature still works for
                   someone who has not made an account yet
   On sign-in, anything followed anonymously is merged upward
   rather than discarded - a founder who followed six firms
   before signing up keeps them.

   This file stores RELATIONSHIPS ONLY - which firms a user
   follows, which alert ids they have read. Alert content is
   never stored: alerts-engine.js recomputes every alert from the
   dataset on load and each carries a deterministic fingerprint,
   so read state keyed on that id survives recomputation without
   duplicating any data.
   ============================================================ */

const PF_FOLLOW_KEY = 'powerboard_following';
const PF_READ_KEY   = 'powerboard_alerts_read';
const PF_MUTED_KEY  = 'powerboard_alerts_muted';
const PF_DIGEST_KEY = 'powerboard_alerts_digest';

let pfFollows = null;      // Set of slugs, lazily loaded
let pfRead = null;         // Set of alert ids
let pfMuted = null;        // Set of alert types
let pfSyncing = false;

function pfClient() {
  return (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null;
}
function pfSignedIn() {
  return typeof isSignedIn === 'function' ? isSignedIn() : false;
}
function pfLocalGet(key) {
  try { const r = localStorage.getItem(key); return r ? new Set(JSON.parse(r)) : new Set(); }
  catch (e) { return new Set(); }
}
function pfLocalSet(key, set) {
  try { localStorage.setItem(key, JSON.stringify([...set])); } catch (e) { /* private mode */ }
}

/* ---------- follows ---------- */
function getFollowedFirms() {
  if (!pfFollows) pfFollows = pfLocalGet(PF_FOLLOW_KEY);
  return pfFollows;
}
function isFollowing(slug) { return getFollowedFirms().has(slug); }

function toggleFollow(slug) {
  const set = getFollowedFirms();
  const nowFollowing = !set.has(slug);
  if (nowFollowing) set.add(slug); else set.delete(slug);
  pfLocalSet(PF_FOLLOW_KEY, set);

  // Fire-and-forget upstream write. The UI has already updated from
  // local state, so a slow or failed network call never blocks a click.
  const c = pfClient();
  if (c && pfSignedIn()) {
    const uid = (typeof currentUser !== 'undefined' && currentUser) ? currentUser.id : null;
    if (uid) {
      const p = nowFollowing
        ? c.from('firm_follows').insert({ user_id: uid, firm_slug: slug })
        : c.from('firm_follows').delete().eq('user_id', uid).eq('firm_slug', slug);
      Promise.resolve(p).catch(function (e) { if (typeof console !== 'undefined') console.warn('follow sync failed', e); });
    }
  }
  document.dispatchEvent(new CustomEvent('pb:follows-changed', { detail: { slug: slug, following: nowFollowing } }));
  return nowFollowing;
}

/* Pulls server state and merges anything followed while signed out.
   Union, never replace: a local follow made before signing in is a
   real intent and should not be lost to a server row that predates it. */
function pfSyncFollows() {
  const c = pfClient();
  if (!c || !pfSignedIn() || pfSyncing) return Promise.resolve();
  const uid = (typeof currentUser !== 'undefined' && currentUser) ? currentUser.id : null;
  if (!uid) return Promise.resolve();
  pfSyncing = true;

  return c.from('firm_follows').select('firm_slug').eq('user_id', uid).then(function (res) {
    if (res.error) throw res.error;
    const server = new Set((res.data || []).map(function (r) { return r.firm_slug; }));
    const local = getFollowedFirms();
    const onlyLocal = [...local].filter(function (s) { return !server.has(s); });
    onlyLocal.forEach(function (s) { server.add(s); });
    pfFollows = server;
    pfLocalSet(PF_FOLLOW_KEY, server);
    if (onlyLocal.length) {
      return c.from('firm_follows').insert(onlyLocal.map(function (s) { return { user_id: uid, firm_slug: s }; }));
    }
  }).then(function () {
    pfSyncing = false;
    document.dispatchEvent(new CustomEvent('pb:follows-changed', { detail: { synced: true } }));
  }).catch(function (e) {
    pfSyncing = false;
    if (typeof console !== 'undefined') console.warn('follow sync failed', e);
  });
}

/* ---------- alert read state and preferences ---------- */
function getReadAlertIds() { if (!pfRead) pfRead = pfLocalGet(PF_READ_KEY); return pfRead; }
function isAlertRead(id) { return getReadAlertIds().has(id); }

function markAlertRead(id) {
  const set = getReadAlertIds();
  if (set.has(id)) return;
  set.add(id);
  pfLocalSet(PF_READ_KEY, set);
  pfPushAlertState();
}
function markAllAlertsRead(ids) {
  const set = getReadAlertIds();
  ids.forEach(function (i) { set.add(i); });
  pfLocalSet(PF_READ_KEY, set);
  pfPushAlertState();
  document.dispatchEvent(new CustomEvent('pb:alerts-changed'));
}

function getMutedTypes() { if (!pfMuted) pfMuted = pfLocalGet(PF_MUTED_KEY); return pfMuted; }
function toggleMutedType(type) {
  const set = getMutedTypes();
  if (set.has(type)) set.delete(type); else set.add(type);
  pfLocalSet(PF_MUTED_KEY, set);
  pfPushAlertState();
  document.dispatchEvent(new CustomEvent('pb:alerts-changed'));
  return !set.has(type);
}

function getDigestFrequency() {
  try { return localStorage.getItem(PF_DIGEST_KEY) || 'realtime'; } catch (e) { return 'realtime'; }
}
function setDigestFrequency(v) {
  if (['realtime', 'daily', 'weekly', 'off'].indexOf(v) === -1) return;
  try { localStorage.setItem(PF_DIGEST_KEY, v); } catch (e) {}
  pfPushAlertState();
}

/* Read ids are capped before they are written. An unbounded array
   would grow with every alert the dataset ever produces, and the
   oldest ids refer to alerts that can no longer be regenerated. */
function pfPushAlertState() {
  const c = pfClient();
  if (!c || !pfSignedIn()) return;
  const uid = (typeof currentUser !== 'undefined' && currentUser) ? currentUser.id : null;
  if (!uid) return;
  const read = [...getReadAlertIds()].slice(-500);
  Promise.resolve(
    c.from('alert_state').upsert({
      user_id: uid,
      read_ids: read,
      muted_types: [...getMutedTypes()],
      digest_frequency: getDigestFrequency(),
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id' })
  ).catch(function (e) { if (typeof console !== 'undefined') console.warn('alert state sync failed', e); });
}

function pfSyncAlertState() {
  const c = pfClient();
  if (!c || !pfSignedIn()) return Promise.resolve();
  const uid = (typeof currentUser !== 'undefined' && currentUser) ? currentUser.id : null;
  if (!uid) return Promise.resolve();
  return c.from('alert_state').select('read_ids, muted_types, digest_frequency')
    .eq('user_id', uid).maybeSingle().then(function (res) {
      if (res.error || !res.data) return;
      const local = getReadAlertIds();
      (res.data.read_ids || []).forEach(function (i) { local.add(i); });
      pfRead = local; pfLocalSet(PF_READ_KEY, local);
      pfMuted = new Set(res.data.muted_types || []); pfLocalSet(PF_MUTED_KEY, pfMuted);
      try { localStorage.setItem(PF_DIGEST_KEY, res.data.digest_frequency || 'realtime'); } catch (e) {}
      document.dispatchEvent(new CustomEvent('pb:alerts-changed'));
    }).catch(function () { /* signed-out or offline - local state stands */ });
}

/* ---------- the Follow control on a firm profile ---------- */
function renderFollowButton(firm) {
  if (!firm) return '';
  const on = isFollowing(firm.slug);
  return '<button type="button" class="pf-follow' + (on ? ' is-following' : '') + '" ' +
    'data-follow-slug="' + firm.slug + '" aria-pressed="' + on + '">' +
    '<span class="pf-follow-icon" aria-hidden="true">' + (on ? '' : '+') + '</span>' +
    '<span class="pf-follow-label">' + (on ? 'Following' : 'Follow firm') + '</span>' +
    '</button>';
}

document.addEventListener('click', function (e) {
  const btn = e.target.closest ? e.target.closest('[data-follow-slug]') : null;
  if (!btn) return;
  const slug = btn.dataset.followSlug;
  const now = toggleFollow(slug);
  btn.classList.toggle('is-following', now);
  btn.setAttribute('aria-pressed', String(now));
  const icon = btn.querySelector('.pf-follow-icon');
  const label = btn.querySelector('.pf-follow-label');
  if (icon) icon.textContent = now ? '' : '+';
  if (label) label.textContent = now ? 'Following' : 'Follow firm';
});

// Pull server state once auth settles, and again on any auth change.
if (typeof onAuthChange === 'function') {
  onAuthChange(function () { pfSyncFollows(); pfSyncAlertState(); });
}
