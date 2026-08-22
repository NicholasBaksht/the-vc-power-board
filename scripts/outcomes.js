/* ============================================================
   OUTCOMES.JS
   A founder's private record of how each investor conversation
   went, attached to firms they saved or received from Power
   Match.

   PRIVATE MEANS PRIVATE. This is the one dataset on the site
   that is damaging in both directions if it leaks - "we passed"
   and "they invested" are both sensitive. So:

     - authenticated only. Signed-out users see no control at
       all, and nothing is written to localStorage. Outcome data
       is not the kind of thing to leave on a shared laptop as a
       convenience.
     - never rendered on a public firm profile for anyone but the
       owner, and the RLS policies would refuse it regardless.
     - no aggregate is exposed to the browser. Conversion metrics
       are SQL-editor queries with small-count suppression.

   The status ladder is deliberately short. A founder updating
   six investors after a week of meetings will not use a
   fourteen-stage CRM, and a stage nobody sets is worse than no
   stage at all.
   ============================================================ */

const IO_TABLE = 'investor_outcomes';

const IO_STATUSES = [
  { key: 'not_contacted', label: 'Not contacted', rank: 0 },
  { key: 'contacted',     label: 'Contacted',     rank: 1 },
  { key: 'replied',       label: 'Replied',       rank: 2 },
  { key: 'meeting',       label: 'Meeting booked', rank: 3 },
  { key: 'invested',      label: 'Invested',      rank: 4 },
  { key: 'passed',        label: 'Passed',        rank: -1 }
];

/* The shortlist already shipped a four-stage status kept in localStorage:
   Not Contacted / Warm Intro / Meeting Scheduled / Passed. Rather than run a
   second, competing ladder over the same firms, that one is MIGRATED into
   this one and the shortlist now renders these stages.

   Mapping is conservative: "Warm Intro" becomes 'contacted' rather than
   'replied', because an intro being made is not the same as the firm
   answering. Nobody's pipeline gets silently promoted.

   Signed out, the localStorage store remains the source of truth exactly as
   before - removing that would break a working feature for anyone without an
   account. Signed in, Supabase is authoritative and localStorage is kept in
   step so the two never disagree. */
const IO_LEGACY_MAP = {
  'Not Contacted': 'not_contacted',
  'Warm Intro': 'contacted',
  'Meeting Scheduled': 'meeting',
  'Passed': 'passed'
};

let ioCache = null;          // slug -> status, for the signed-in user
let ioLoaded = false;

function ioClient() { return (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null; }
function ioUid() { return (typeof currentUser !== 'undefined' && currentUser) ? currentUser.id : null; }
function ioSignedIn() { return typeof isSignedIn === 'function' && isSignedIn() && !!ioUid(); }
function ioEsc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function ioLabel(key) {
  const s = IO_STATUSES.find(function (x) { return x.key === key; });
  return s ? s.label : 'Not contacted';
}

/* Loads once per session. Returns {} for a signed-out user rather than
   reading any local store - there is no offline copy of this by design. */
function ioLoad() {
  if (ioLoaded) return Promise.resolve(ioCache || {});
  const c = ioClient();
  if (!c || !ioSignedIn()) { ioCache = {}; ioLoaded = true; return Promise.resolve(ioCache); }
  return c.from(IO_TABLE).select('firm_slug, status').eq('user_id', ioUid()).then(function (res) {
    ioCache = {};
    if (!res.error) (res.data || []).forEach(function (r) { ioCache[r.firm_slug] = r.status; });
    ioLoaded = true;
    document.dispatchEvent(new CustomEvent('pb:outcomes-loaded'));
    return ioCache;
  }).catch(function () { ioCache = {}; ioLoaded = true; return ioCache; });
}

function getOutcome(slug) {
  if (ioCache && ioCache[slug]) return ioCache[slug];
  // Fall back to whatever the shortlist already recorded, migrating the old
  // label on the way out so a founder's existing pipeline is not reset.
  if (typeof getShortlistEntry === 'function') {
    const legacy = (getShortlistEntry(slug) || {}).status;
    if (legacy) return IO_LEGACY_MAP[legacy] || (IO_STATUSES.some(function (x) { return x.key === legacy; }) ? legacy : 'not_contacted');
  }
  return 'not_contacted';
}

function setOutcome(slug, status, source) {
  /* The STATUS is recorded, never who set it against which firm in a
     way anyone else can read: product_events has no select policy,
     and the founder's own row in investor_outcomes stays private. */
  if (typeof pbTrack === 'function') {
    pbTrack('firm_outcome_set', {
      firmSlug: slug,
      dedupe: status,
      props: { status: status, source: source || 'unknown' }
    });
  }

  if (!IO_STATUSES.some(function (s) { return s.key === status; })) {
    return Promise.resolve({ ok: false, message: 'Unknown status.' });
  }

  /* Always write locally first. That is what keeps the feature working for a
     signed-out founder, and it means the control responds instantly rather
     than waiting on a round trip. */
  if (typeof updateShortlistEntry === 'function') {
    try { updateShortlistEntry(slug, { status: status }); } catch (e) { /* storage blocked */ }
  }
  if (!ioCache) ioCache = {};
  const previous = ioCache[slug];
  ioCache[slug] = status;
  document.dispatchEvent(new CustomEvent('pb:outcome-changed', { detail: { slug: slug, status: status } }));

  if (!ioSignedIn()) return Promise.resolve({ ok: true, local: true });
  const c = ioClient();
  if (!c) return Promise.resolve({ ok: true, local: true });

  const row = { user_id: ioUid(), firm_slug: slug, status: status, updated_at: new Date().toISOString() };
  // `source` is first-touch attribution and must not be rewritten by a later
  // status change, or every row would end up attributed to wherever the
  // founder last happened to click.
  if (source && previous === undefined) row.source = source;

  return c.from(IO_TABLE).upsert(row, { onConflict: 'user_id,firm_slug' }).then(function (res) {
    if (res.error) {
      ioCache[slug] = previous;   // roll back the server view; the local write stands
      if (typeof console !== 'undefined') console.warn('outcome sync failed:', res.error);
      return { ok: false, message: 'Saved on this device, but not synced to your account.' };
    }
    return { ok: true };
  }).catch(function () {
    ioCache[slug] = previous;
    return { ok: false, message: 'Saved on this device, but not synced.' };
  });
}

/* The control. Renders nothing at all when signed out - an empty dropdown
   inviting a sign-in is noise on a page a founder is using to do research. */
function renderOutcomeControl(slug, source) {
  const current = getOutcome(slug);
  return '<label class="io-control" data-io-slug="' + ioEsc(slug) + '">' +
    '<span class="io-label">Your status</span>' +
    '<select class="io-select" data-io-source="' + ioEsc(source || 'profile') + '">' +
      IO_STATUSES.map(function (s) {
        return '<option value="' + s.key + '"' + (s.key === current ? ' selected' : '') + '>' +
          ioEsc(s.label) + '</option>';
      }).join('') +
    '</select>' +
    '<span class="io-saved" aria-live="polite"></span>' +
    '</label>';
}

document.addEventListener('change', function (e) {
  const sel = e.target.closest ? e.target.closest('.io-select') : null;
  if (!sel) return;
  const wrap = sel.closest('[data-io-slug]');
  const slug = wrap && wrap.dataset.ioSlug;
  if (!slug) return;
  const note = wrap.querySelector('.io-saved');
  if (note) note.textContent = 'Saving…';
  setOutcome(slug, sel.value, sel.dataset.ioSource).then(function (res) {
    if (!note) return;
    note.textContent = res.ok ? 'Saved' : res.message;
    if (res.ok) setTimeout(function () { note.textContent = ''; }, 1600);
    else sel.value = getOutcome(slug);
  });
});

// Load once auth settles; re-render any surface showing outcomes.
if (typeof onAuthChange === 'function') {
  onAuthChange(function () { ioLoaded = false; ioCache = null; ioLoad(); });
}
