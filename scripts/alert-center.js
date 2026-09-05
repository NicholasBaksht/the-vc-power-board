/* ============================================================
   ALERT-CENTER.JS
   Phase 3D and the in-app half of 3E.

   A MONITORING INBOX, NOT A NOTIFICATION FEED. Every row answers
   three questions in order: what changed, why it matters to you,
   and what you can do next. There are no streaks, no badges beyond
   an unread count, no celebration, and no "someone has an update".
   If a row cannot say what changed, it does not belong here.

   HISTORY IS IMMUTABLE. An alert stores its own summary and reason
   at the moment it was generated rather than re-deriving them from
   current data. An alert from three weeks ago has to still read
   correctly even after the underlying record has moved on again.

   TWO DATES, SHOWN HONESTLY. Where a real-world date exists it
   leads, and the detection date is shown as secondary. Where it
   does not, the row says Power Board ADDED the fact rather than
   implying it happened. The UI reads is_discovery; it never guesses
   from the wording.

   EMAIL IS ABSENT ON PURPOSE. This product has no mail
   infrastructure - no Edge Functions, no sender, no queue - so
   there is nothing to deliver a digest with. The preference is
   stored and shown as unavailable rather than offered as a switch
   that silently does nothing.
   ============================================================ */

const AC_PAGE = 40;

let acState = { filter: 'all', alerts: [], loaded: false, prefs: null };

function acEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function acClient() {
  if (typeof almClient === 'function') return almClient();
  if (typeof pbnClient === 'function') { try { return pbnClient(); } catch (e) { return null; } }
  return null;
}

function acSignedIn() {
  return (typeof ssSignedIn === 'function') ? ssSignedIn() : false;
}

/* ---------- dates ---------- */

function acWhen(a) {
  /* A discovery has no real-world date, so only the detection date
     exists and it is labelled as such. Anything else leads with when
     it actually happened. */
  if (a.is_discovery || !a.occurred_at) {
    return { lead: 'Added ' + acShortDate(a.detected_at), sub: null };
  }
  const added = acShortDate(a.detected_at);
  const happened = acShortDate(a.occurred_at);
  return {
    lead: happened,
    sub: (added !== happened) ? 'tracked ' + added : null
  };
}

/* Formatted in UTC, deliberately. These are calendar dates on
   record - a financing announced on 2026-06-03 was announced on the
   3rd for everyone - so they must not drift with the reader's
   timezone. Parsing "2026-06-03" as UTC midnight and then formatting
   in local time renders "Jun 2" for every reader west of UTC, which
   silently misstates the record. */
function acShortDate(v) {
  if (!v) return 'unknown';
  const s = String(v).slice(0, 10);
  const d = new Date(s + 'T00:00:00Z');
  if (isNaN(d.getTime())) return s;
  return d.toLocaleDateString(undefined, {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'
  });
}

/* ---------- data ---------- */

async function acLoad() {
  const c = acClient();
  if (!c || !acSignedIn()) { acState.alerts = []; acState.loaded = true; return; }
  try {
    const { data, error } = await c.from('user_alerts')
      .select('*').order('created_at', { ascending: false }).limit(300);
    if (error) throw error;
    acState.alerts = data || [];
  } catch (e) {
    acState.alerts = null;              // null distinguishes failure from empty
  }
  try {
    const { data } = await c.from('notification_prefs').select('*').maybeSingle();
    acState.prefs = data || null;
  } catch (e) { acState.prefs = null; }
  acState.loaded = true;
}

function acUnreadCount() {
  if (!Array.isArray(acState.alerts)) return 0;
  return acState.alerts.filter(function (a) { return !a.read_at; }).length;
}

async function acMarkRead(ids) {
  const c = acClient();
  if (!c || !ids.length) return;
  const now = new Date().toISOString();
  ids.forEach(function (id) {
    const a = acState.alerts.filter(function (x) { return x.id === id; })[0];
    if (a) a.read_at = now;
  });
  try { await c.from('user_alerts').update({ read_at: now }).in('id', ids); } catch (e) {}
  if (typeof pbTrack === 'function') pbTrack('alert_marked_read');
  acPaintBadge();
}

async function acSetPref(key, value) {
  const c = acClient();
  if (!c) return;
  const row = {};
  row[key] = value;
  row.updated_at = new Date().toISOString();
  acState.prefs = Object.assign({}, acState.prefs || {}, row);
  try { await c.from('notification_prefs').upsert(Object.assign({}, row)); } catch (e) {}
}

/* ---------- filtering ---------- */

const AC_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'unread', label: 'Unread' },
  { key: 'saved_search', label: 'Saved searches' },
  { key: 'shortlist', label: 'Shortlist' },
  { key: 'firm', label: 'Firms' },
  { key: 'partner', label: 'Partners' },
  { key: 'angel', label: 'Angels' },
  { key: 'company', label: 'Companies' }
];

function acFiltered() {
  const list = Array.isArray(acState.alerts) ? acState.alerts : [];
  const f = acState.filter;
  if (f === 'all') return list;
  if (f === 'unread') return list.filter(function (a) { return !a.read_at; });
  if (f === 'saved_search' || f === 'shortlist') {
    return list.filter(function (a) { return a.source === f; });
  }
  return list.filter(function (a) { return a.entity_type === f; });
}

function acCount(key) {
  const list = Array.isArray(acState.alerts) ? acState.alerts : [];
  if (key === 'all') return list.length;
  if (key === 'unread') return list.filter(function (a) { return !a.read_at; }).length;
  if (key === 'saved_search' || key === 'shortlist') {
    return list.filter(function (a) { return a.source === key; }).length;
  }
  return list.filter(function (a) { return a.entity_type === key; }).length;
}

/* ---------- render ---------- */

async function renderAlertCenter() {
  const host = document.getElementById('alertsView');
  if (!host) return;

  if (!acSignedIn()) {
    host.innerHTML = '<div class="ds-wrap"><div class="ds-kicker">Power Alerts</div>' +
      '<h1 class="ds-h1">What changed while you were away.</h1>' +
      '<div class="ds-empty"><strong>Alerts need an account.</strong> ' +
      'Power Board watches your saved searches and shortlist and records what changed. ' +
      'There is nowhere to keep that without somewhere to sign in to.</div>' +
      '<p style="margin-top:14px"><a class="ds-btn" href="#signin">Sign in</a></p></div>';
    return;
  }

  host.innerHTML = '<div class="ds-wrap"><div class="ds-kicker">Power Alerts</div>' +
    '<h1 class="ds-h1">What changed while you were away.</h1>' +
    '<div class="ds-empty">Checking for changes...</div></div>';

  await acLoad();
  acPaint(host);
  if (typeof pbTrack === 'function') pbTrack('alert_opened');
}

function acPaint(host) {
  const list = acFiltered();

  let h = '<div class="ds-wrap ac-wrap">' +
    '<div class="ds-kicker">Power Alerts</div>' +
    '<h1 class="ds-h1">What changed while you were away.</h1>' +
    '<p class="ds-sub">Changes to the saved searches and shortlisted investors you asked Power Board ' +
    'to watch. Every row says what changed and why it matters. Where Power Board added a fact that ' +
    'happened earlier, it says so rather than presenting old research as news.</p>';

  if (acState.alerts === null) {
    h += '<div class="ds-empty"><strong>Could not load alerts right now.</strong> ' +
         'Nothing has been lost - they are stored against your account.</div></div>';
    host.innerHTML = h;
    return;
  }

  h += '<div class="ac-bar">' +
    '<div class="ac-filters" role="tablist">' +
      AC_FILTERS.map(function (f) {
        const n = acCount(f.key);
        if (!n && f.key !== 'all' && f.key !== 'unread') return '';
        return '<button type="button" role="tab" class="ac-filter' +
          (acState.filter === f.key ? ' is-active' : '') + '" ' +
          'aria-selected="' + (acState.filter === f.key ? 'true' : 'false') + '" ' +
          'data-ac-filter="' + acEsc(f.key) + '">' + acEsc(f.label) +
          '<span class="ac-filter-n">' + n + '</span></button>';
      }).join('') +
    '</div>' +
    '<div class="ac-tools">' +
      (acUnreadCount() ? '<button type="button" class="scr-tool" data-ac-readall="1">Mark all read</button>' : '') +
      '<button type="button" class="scr-tool" data-ac-prefs="1">Preferences</button>' +
    '</div></div>';

  if (!list.length) {
    h += '<div class="ds-empty">' +
      (acState.filter === 'all'
        ? '<strong>Nothing has changed yet.</strong> Power Board records a change only when the ' +
          'underlying research actually moves, so quiet here means quiet in the data. ' +
          'Save a search from the Screener to start watching something.'
        : '<strong>No alerts match this filter.</strong> Other filters may still have some.') +
      '</div>';
  } else {
    h += '<ul class="ac-list">' + list.slice(0, AC_PAGE).map(acRow).join('') + '</ul>';
    if (list.length > AC_PAGE) {
      h += '<p class="ac-more">Showing ' + AC_PAGE + ' of ' + list.length + '.</p>';
    }
  }
  h += '</div>';
  host.innerHTML = h;
  acBind(host);
  acPaintBadge();
}

function acRow(a) {
  const when = acWhen(a);
  const imp = String(a.importance || 'LOW').toLowerCase();
  return '<li class="ac-item' + (a.read_at ? '' : ' is-unread') + '" data-ac-id="' + acEsc(a.id) + '">' +
    '<div class="ac-item-head">' +
      '<span class="ac-imp ac-imp-' + imp + '">' + acEsc(a.importance || 'LOW') + '</span>' +
      '<span class="ac-when">' + acEsc(when.lead) +
        (when.sub ? ' <span class="ac-when-sub">' + acEsc(when.sub) + '</span>' : '') + '</span>' +
      '<span class="ac-kind">' + acEsc(acKindLabel(a.event_type)) + '</span>' +
      (a.read_at ? '' : '<span class="ac-dot" aria-label="Unread"></span>') +
    '</div>' +
    '<div class="ac-summary">' + acEsc(a.summary) + '</div>' +
    (a.reason ? '<div class="ac-reason">' + acEsc(a.reason) + '</div>' : '') +
    '<div class="ac-actions">' +
      (a.link ? '<a class="ac-act" href="' + acEsc(a.link) + '" data-ac-open="' + acEsc(a.id) + '">' +
        acEsc(acOpenLabel(a.entity_type)) + '</a>' : '') +
      (a.saved_search_id
        ? '<button type="button" class="ac-act" data-ac-search="' + acEsc(a.saved_search_id) + '">View search</button>'
        : '') +
      (a.source_url
        ? '<a class="ac-act" href="' + acEsc(a.source_url) + '" target="_blank" rel="noopener nofollow">Evidence</a>'
        : '') +
      (a.read_at ? '' : '<button type="button" class="ac-act ac-act-quiet" data-ac-read="' +
        acEsc(a.id) + '">Mark read</button>') +
    '</div>' +
  '</li>';
}

function acKindLabel(t) {
  const map = {
    SAVED_SEARCH_ENTITY_ENTERED: 'Entered your search',
    SAVED_SEARCH_ENTITY_EXITED: 'Left your search',
    NEW_PARTNER_INVESTMENT: 'Investments added',
    NEW_COMPANY_DEAL: 'Tracked financing',
    PARTNER_FIRM_CHANGED: 'Moved firm',
    PARTNER_ROLE_CHANGED: 'Role changed',
    COMPANY_STATUS_CHANGED: 'Status changed',
    FIRM_TEAM_MEMBER_ADDED: 'Team change',
    COMPANY_ALIAS_REVIEWED: 'Identity reviewed'
  };
  return map[t] || String(t || '').toLowerCase().replace(/_/g, ' ');
}

function acOpenLabel(t) {
  return t === 'partner' ? 'Open partner intelligence'
    : t === 'firm' ? 'Open firm'
    : t === 'angel' ? 'Open angel'
    : t === 'company' ? 'Open company'
    : 'Open';
}

/* The header control lives beside search rather than in the main nav.
   The nav lists what the product covers and is the same for everyone;
   this is a personal inbox that only exists once you have an account,
   so it sits with the other account-scoped controls. It also keeps the
   content nav on one row, which was a deliberate earlier fix.

   Hidden entirely when signed out: an empty inbox you cannot open is
   not a feature, it is a dead control. */
function acPaintBadge() {
  const btns = document.querySelectorAll('a[href="#alerts"]');
  const signedIn = acSignedIn();
  const n = acUnreadCount();
  btns.forEach(function (a) {
    if (a.classList.contains('pb-alerts-btn')) {
      a.style.display = signedIn ? '' : 'none';
    }
    let b = a.querySelector('.ac-badge');
    if (!n) { if (b) b.remove(); a.removeAttribute('data-unread'); return; }
    if (!b) {
      b = document.createElement('span');
      b.className = 'ac-badge';
      a.appendChild(b);
    }
    b.textContent = n > 99 ? '99+' : String(n);
    a.setAttribute('data-unread', String(n));
    a.setAttribute('aria-label', n === 1 ? '1 unread alert' : n + ' unread alerts');
  });
}

/* ---------- events ---------- */

function acBind(host) {
  host.addEventListener('click', async function (e) {
    const f = e.target.closest('[data-ac-filter]');
    if (f) { acState.filter = f.getAttribute('data-ac-filter'); acPaint(host); return; }

    const r = e.target.closest('[data-ac-read]');
    if (r) { await acMarkRead([r.getAttribute('data-ac-read')]); acPaint(host); return; }

    if (e.target.closest('[data-ac-readall]')) {
      const ids = (acState.alerts || []).filter(function (a) { return !a.read_at; })
        .map(function (a) { return a.id; });
      await acMarkRead(ids); acPaint(host); return;
    }

    if (e.target.closest('[data-ac-prefs]')) { acOpenPrefs(); return; }

    const open = e.target.closest('[data-ac-open]');
    if (open) {
      /* Opening an alert marks it read: acting on it IS reading it. */
      await acMarkRead([open.getAttribute('data-ac-open')]);
      if (typeof pbTrack === 'function') pbTrack('alert_entity_clicked');
      return;
    }

    const srch = e.target.closest('[data-ac-search]');
    if (srch) {
      if (typeof pbTrack === 'function') pbTrack('alert_search_clicked');
      const id = srch.getAttribute('data-ac-search');
      const all = (typeof ssAll === 'function') ? await ssAll() : [];
      const s = all.filter(function (x) { return x.id === id; })[0];
      if (s && typeof ssShowResults === 'function') ssShowResults(s);
      else window.location.hash = 'screener';
      return;
    }
  });
}

/* ---------- preferences (3E, in-app) ---------- */

function acOpenPrefs() {
  const p = acState.prefs || {};
  const el = document.createElement('div');
  el.className = 'scr-modal';
  el.innerHTML = '<div class="scr-modal-bd" data-ac-close="1"></div>' +
    '<div class="scr-modal-panel" role="dialog" aria-modal="true" aria-label="Alert preferences">' +
    '<div class="scr-modal-head">Alert preferences' +
      '<button type="button" class="scr-esc" data-ac-close="1">Esc</button></div>' +
    '<div class="scr-modal-body">' +
      acToggle('in_app', 'In-app alerts', p.in_app !== false,
               'Show changes in this inbox.') +
      acToggle('saved_search_alerts', 'Saved search alerts', p.saved_search_alerts !== false,
               'Tell me when something enters or changes inside a saved search.') +
      acToggle('shortlist_alerts', 'Shortlist alerts', p.shortlist_alerts !== false,
               'Tell me when a shortlisted investor changes.') +
      acToggle('high_importance_only', 'Only important changes', p.high_importance_only === true,
               'Suppress smaller research updates and keep firm moves, status changes and conflicts.') +
      '<div class="ac-pref is-off">' +
        '<div class="ac-pref-main"><span class="ac-pref-name">Email digest</span>' +
        '<span class="ac-pref-note">Unavailable. This product has no mail infrastructure, so a ' +
        'digest switch here would do nothing. The preference is kept for when one exists.</span></div>' +
      '</div>' +
    '</div></div>';
  document.body.appendChild(el);
  el.addEventListener('click', async function (e) {
    if (e.target.closest('[data-ac-close]')) { el.remove(); acPaint(document.getElementById('alertsView')); return; }
    const t = e.target.closest('[data-ac-pref]');
    if (t) {
      const key = t.getAttribute('data-ac-pref');
      await acSetPref(key, t.checked);
    }
  });
}

function acToggle(key, label, on, note) {
  return '<label class="ac-pref">' +
    '<input type="checkbox" data-ac-pref="' + acEsc(key) + '"' + (on ? ' checked' : '') + '>' +
    '<span class="ac-pref-main"><span class="ac-pref-name">' + acEsc(label) + '</span>' +
    '<span class="ac-pref-note">' + acEsc(note) + '</span></span></label>';
}

/* Keep the badge current wherever the user is, without loading the
   whole inbox on every route. */
async function acRefreshBadge() {
  if (!acSignedIn()) return;
  if (acState.loaded) { acPaintBadge(); return; }
  await acLoad();
  acPaintBadge();
}

window.addEventListener('hashchange', function () { setTimeout(acPaintBadge, 60); });
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () { setTimeout(acRefreshBadge, 2000); });
} else {
  setTimeout(acRefreshBadge, 2000);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { acWhen: acWhen, acKindLabel: acKindLabel, acFiltered: acFiltered };
}
