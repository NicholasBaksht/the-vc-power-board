/* ============================================================
   ALERTS-UI.JS  -  Power Alerts rendering layer

   Reads the output of computePowerAlerts() and renders it.
   Contains no analysis of its own: if the engine returns
   nothing, this renders an empty state rather than filling
   the gap with anything.

   Every card exposes "View data", which prints the actual
   counts, bases and sample rows the engine used (spec §9).
   ============================================================ */

const PA_DISMISS_KEY = 'vcpb_dismissed_alerts_v1';

function paLoadDismissed() {
  try { return JSON.parse(localStorage.getItem(PA_DISMISS_KEY) || '[]'); }
  catch (e) { return []; }
}
function paSaveDismissed(ids) {
  try { localStorage.setItem(PA_DISMISS_KEY, JSON.stringify(ids.slice(-300))); }
  catch (e) { /* private mode - dedupe simply won't persist */ }
}
function paDismiss(id) {
  const d = paLoadDismissed();
  if (d.indexOf(id) === -1) { d.push(id); paSaveDismissed(d); }
}

function paEsc(s) {
  return String(s === null || s === undefined ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Money needs compacting: an alert must never render a raw
// "+3250000000 USD".
function paUsd(n) {
  const v = Math.abs(n);
  if (v >= 1e9) return '$' + (Math.round(v / 1e8) / 10) + 'B';
  if (v >= 1e6) return '$' + Math.round(v / 1e6) + 'M';
  return '$' + v.toLocaleString();
}

// The change chip: signed points for cohort shifts, a plain
// count for the count-based alert types.
/* Arrow for a change chip. Falls back to a bare glyph if utilities.js
   has not loaded, so an alert never renders a direction-free number. */
function paDir(value) {
  if (typeof directionLabel === 'function') return directionLabel(value);
  if (value === null || value === undefined) return '';
  return '<span class="dir-mark" aria-hidden="true">' +
    (value > 0 ? '\u2191' : value < 0 ? '\u2193' : '\u2192') + '</span>';
}

function paChangeChip(a) {
  if (a.absoluteChange !== null && a.unit === 'percentage points') {
    const sign = a.absoluteChange > 0 ? '+' : '';
    const cls = a.absoluteChange > 0 ? 'pa-up' : a.absoluteChange < 0 ? 'pa-down' : 'pa-flat';
    return '<span class="pa-delta ' + cls + '">' + paDir(a.absoluteChange) + sign + a.absoluteChange + ' pts</span>';
  }
  // Fund steps read as a multiple or a fall, not a raw dollar delta.
  if (a.unit === 'USD' && a.previousValue) {
    const mult = a.currentValue / a.previousValue;
    const cls = mult > 1 ? 'pa-up' : mult < 1 ? 'pa-down' : 'pa-flat';
    const label = mult >= 1 ? (Math.round(mult * 10) / 10) + '\u00D7'
                            : '\u2212' + Math.round((1 - mult) * 100) + '%';
    return '<span class="pa-delta ' + cls + '">' + paDir(mult - 1) + label + '</span>';
  }
  /* A USD figure with no previous value is an event, not a change: a
     fund close has nothing to compare against. Without this it fell to
     the generic branch and rendered "2200000000 USD". Deliberately no
     arrow and no colour - there is no direction to state. */
  if (a.unit === 'USD' && !a.previousValue && a.currentValue) {
    return '<span class="pa-delta pa-flat">' + paEsc(paUsd(a.currentValue)) + '</span>';
  }
  // Signed counts (team-page arrivals and departures) must show the
  // CHANGE, not the roster size - "+3 people", never "16 people".
  if (a.absoluteChange !== null && a.direction !== 'flat') {
    const n = a.absoluteChange;
    const cls = n > 0 ? 'pa-up' : n < 0 ? 'pa-down' : 'pa-flat';
    return '<span class="pa-delta ' + cls + '">' + paDir(n) + (n > 0 ? '+' : '−') +
      Math.abs(n) + ' ' + paEsc(a.unit) + '</span>';
  }
  return '<span class="pa-delta pa-flat">' + paEsc(a.currentValue) + ' ' + paEsc(a.unit) + '</span>';
}

// "31% -> 42%" basis line. Percentage alerts only: for a roster diff
// the two values are head counts, and rendering them as percentages
// would state something the data never said.
function paBasisLine(a) {
  if (a.previousValue === null || a.currentValue === null) return '';
  if (a.unit === 'percentage points') {
    return '<div class="pa-basis"><span>' + a.previousValue + '%</span><span class="pa-arrow">&rarr;</span><span>' + a.currentValue + '%</span></div>';
  }
  if (a.unit === 'USD') {
    return '<div class="pa-basis"><span>' + paUsd(a.previousValue) + '</span><span class="pa-arrow">&rarr;</span><span>' +
      paUsd(a.currentValue) + '</span></div>';
  }
  if (a.unit === 'people') {
    return '<div class="pa-basis"><span>' + a.previousValue + '</span><span class="pa-arrow">&rarr;</span><span>' +
      a.currentValue + '</span><span class="pa-basis-label">on the team page</span></div>';
  }
  return '';
}

function paEvidenceHtml(a) {
  const e = a.evidence || {};
  const rows = [];
  rows.push(['Metric', a.metric]);
  rows.push(['Comparison period', a.period]);
  if (e.measure) rows.push(['Measured as', e.measure]);
  if (e.recentCohort) {
    rows.push(['Current cohort', e.recentCohort.matching + ' of ' + e.recentCohort.base +
      ' (' + e.recentCohort.firms + ' firms of ' + e.recentCohort.cohortFirms + ')']);
    rows.push(['Previous cohort', e.priorCohort.matching + ' of ' + e.priorCohort.base +
      ' (' + e.priorCohort.firms + ' firms of ' + e.priorCohort.cohortFirms + ')']);
  }
  if (e.holderCount) rows.push(['Holders counted', e.holderCount]);
  if (e.from && e.to) {
    rows.push([e.from.displayName || e.from.name || 'Earlier fund', paUsd(e.from.sizeUSD) + '  (' + e.from.vintageYear + ')']);
    rows.push([e.to.displayName || e.to.name || 'Later fund', paUsd(e.to.sizeUSD) + '  (' + e.to.vintageYear + ')']);
    rows.push(['Funds on record', e.recordedFunds + (e.listComplete ? '' : ' (list known incomplete)')]);
  }
  if (e.coverage) rows.push(['Coverage', e.coverage]);
  if (e.capturedOn) rows.push(['Captured on', e.capturedOn.join(' and  ')]);
  if (e.rosterSize) rows.push(['Roster size', e.rosterSize.before + ' \u2192 ' + e.rosterSize.after +
    ' (' + e.rosterSize.retained + ' retained)']);
  if (e.teamPage) rows.push(['Team page', e.teamPage]);
  if (e.windowFrom) rows.push(['Window opens', e.windowFrom]);
  if (e.test) rows.push(['Test', e.test]);
  rows.push(['Confidence', Math.round(a.confidence * 100) + '%']);
  rows.push(['Score', a.score + ' / 100']);
  rows.push(['Alert ID', a.id]);

  let list = '';
  if (e.holders && e.holders.length) {
    list = '<div class="pa-ev-list"><div class="pa-ev-label">Firms holding this position</div><ul>' +
      e.holders.map(function (h) { return '<li>' + paEsc(h.name) + '</li>'; }).join('') + '</ul></div>';
  } else if (e.partners && e.partners.length) {
    list = '<div class="pa-ev-list"><div class="pa-ev-label">Partners counted</div><ul>' +
      e.partners.map(function (p) { return '<li>' + paEsc(p.name) + ' &middot; ' + paEsc(p.title) + ' &middot; joined ' + paEsc(p.joinedYear) + '</li>'; }).join('') + '</ul></div>';
  } else if (e.events && e.events.length) {
    list = '<div class="pa-ev-list"><div class="pa-ev-label">Milestones counted</div><ul>' +
      e.events.map(function (v) { return '<li><strong>' + paEsc(v.year) + '</strong> ' + paEsc(v.event) + '</li>'; }).join('') + '</ul></div>';
  } else if (e.rosterSize) {
    list = '<div class="pa-ev-list"><div class="pa-ev-label">Names changed between captures</div><ul>' +
      e.people.map(function (p) { return '<li>' + paEsc(p.name) + ' &middot; ' + paEsc(p.title) + '</li>'; }).join('') +
      '</ul></div>';
  } else if (e.deals && e.deals.length) {
    // Every row carries its own source. The link is what makes a deal
    // claim checkable, so it is rendered before the plain firm list.
    list = '<div class="pa-ev-list"><div class="pa-ev-label">Disclosed rounds counted</div><ul>' +
      e.deals.map(function (d) {
        const who = paEsc(d.firm) + ' &rarr; ' + paEsc(d.company);
        const when = d.date ? ' &middot; ' + paEsc(d.date) : '';
        const role = d.role ? ' &middot; ' + paEsc(d.role) : '';
        const safe = typeof d.source === 'string' && /^https?:\/\//i.test(d.source);
        const src = safe
          ? ' &middot; <a href="' + paEsc(d.source) + '" target="_blank" rel="noopener noreferrer">source</a>'
          : '';
        return '<li>' + who + when + role + src + '</li>';
      }).join('') + '</ul></div>';
  } else if (e.firms && e.firms.length) {
    list = '<div class="pa-ev-list"><div class="pa-ev-label">Firms counted</div><ul>' +
      e.firms.map(function (f) { return '<li>' + paEsc(f) + '</li>'; }).join('') + '</ul></div>';
  } else if (e.sampleFirms && e.sampleFirms.length) {
    list = '<div class="pa-ev-list"><div class="pa-ev-label">Sample of matching firms in the current cohort</div><ul>' +
      e.sampleFirms.map(function (f) { return '<li>' + paEsc(f.name) + ' &middot; founded ' + paEsc(f.founded) + '</li>'; }).join('') + '</ul></div>';
  }

  const caveat = (e.normalisation || e.note)
    ? '<p class="pa-ev-note">' + paEsc(e.normalisation || e.note) + '</p>' : '';

  return '<div class="pa-evidence" hidden>' +
    '<table class="pa-ev-table"><tbody>' +
    rows.map(function (r) { return '<tr><th>' + paEsc(r[0]) + '</th><td>' + paEsc(r[1]) + '</td></tr>'; }).join('') +
    '</tbody></table>' + list + caveat + '</div>';
}

/* ============================================================
   POWER ALERTS 2.0
   Everything below EXTENDS the renderer above rather than
   replacing it: the same computePowerAlerts() output, the same
   card markup, the same evidence tables and dismiss behaviour.
   What is added is who an alert is FOR, how urgent it is, and
   whether this user has already seen it.
   ============================================================ */

/* Priority is derived, not assigned. It reads the score and
   confidence the engine already produced plus the alert type, so
   the same alert always lands in the same band and the reasoning
   can be shown to the user.

   The weighting says: an alert about a firm you follow matters more
   than the same alert about a firm you do not. That is the entire
   premise of Power Alerts 2.0. */
const PA2_TYPE_WEIGHT = {
  sector_exposure_change: 0.85, // where a firm is actually moving its
                                // money, measured inside one swept window
  fund_announcements: 0.95,  // fresh capital, deployable now - the most
                             // actionable single fact about a firm
  fund_step: 0.9,            // a new fund changes what a firm can do for you
  new_investments: 0.8,      // fresh deployment, and a possible conflict
  partner_momentum: 0.6,
  partner_sector_focus: 0.5,
  coinvestor_network: 0.5,
  sector_breadth: 0.4,
  portfolio_overlap: 0.4,
  firm_milestone_activity: 0.35,
  fund_year_activity: 0.35
};

function pa2Priority(a) {
  const followed = (typeof isFollowing === 'function' && a.firmId) ? isFollowing(a.firmId) : false;
  const base = (PA2_TYPE_WEIGHT[a.type] || 0.4);
  /* The engine scores 0-100, not 0-1. Reading it raw put every surfaced
     alert past the Critical threshold, which made the badge meaningless.
     Normalise before weighting. */
  const score = typeof a.score === 'number' ? Math.min(1, a.score / 100) : 0.5;
  const conf = typeof a.confidence === 'number' ? a.confidence : 0.5;
  let v = base * 0.4 + score * 0.35 + conf * 0.25;
  if (followed) v += 0.28;                 // relevance is the dominant term

  /* Thresholds calibrated against the live distribution. The engine only
     surfaces its top signals, so raw scores cluster at 0.72-0.97 and a
     naive cutoff bands everything the same. Critical is reserved for a
     strong signal on a firm the user actually follows. */
  const label = v >= 0.92 ? 'Critical' : v >= 0.70 ? 'High' : 'Standard';
  return {
    label: label,
    followed: followed,
    why: (followed ? 'You follow this firm. ' : '') +
         'Type weight ' + base.toFixed(2) + ', signal score ' +
         score.toFixed(2) + ', confidence ' + conf.toFixed(2) + '.'
  };
}

function pa2IsRead(id) { return typeof isAlertRead === 'function' ? isAlertRead(id) : false; }
function pa2Muted() { return typeof getMutedTypes === 'function' ? getMutedTypes() : new Set(); }

/* Splits the engine's output into the two sections that actually mean
   something with the data available: alerts about firms this user
   follows, and everything else. Sections that would need saved
   fundraising criteria - Match and Conflict - are deliberately absent
   rather than shown empty; see the note in the footer. */
function pa2Partition(alerts) {
  const muted = pa2Muted();
  const visible = alerts.filter(function (a) { return !muted.has(a.type); });
  const forYou = visible.filter(function (a) {
    return a.firmId && typeof isFollowing === 'function' && isFollowing(a.firmId);
  });
  const rest = visible.filter(function (a) { return forYou.indexOf(a) === -1; });
  const rank = function (x, y) {
    const px = pa2Priority(x), py = pa2Priority(y);
    const order = { Critical: 0, High: 1, Standard: 2 };
    if (order[px.label] !== order[py.label]) return order[px.label] - order[py.label];
    return (y.score || 0) - (x.score || 0);
  };
  return { forYou: forYou.sort(rank), rest: rest.sort(rank), visible: visible };
}

function pa2FilterBar(alerts) {
  const muted = pa2Muted();
  const types = {};
  alerts.forEach(function (a) { types[a.type] = (types[a.type] || 0) + 1; });
  const chips = Object.keys(types).sort().map(function (t) {
    const off = muted.has(t);
    return '<button type="button" class="pa2-chip' + (off ? ' is-off' : '') +
      '" data-mute-type="' + paEsc(t) + '" aria-pressed="' + (!off) + '">' +
      paEsc(t.replace(/_/g, ' ')) + ' <span class="pa2-chip-n">' + types[t] + '</span></button>';
  }).join('');
  return '<div class="pa2-filters"><span class="pa2-filters-label">Alert types</span>' +
    '<div class="pa2-chips">' + chips + '</div></div>';
}

function paCardHtml(a) {
  const pr = pa2Priority(a);
  const read = pa2IsRead(a.id);
  const firmLink = (a.firmId && typeof firms !== 'undefined')
    ? (function () {
        const f = firms.find(function (x) { return x.slug === a.firmId; });
        return f ? '<a class="pa2-firm" href="#' + paEsc(f.slug) + '">' + paEsc(f.name) + ' &rarr;</a>' : '';
      })()
    : '';
  return '<article class="pa-card pa2-p-' + pr.label.toLowerCase() +
      (read ? ' is-read' : '') + (pr.followed ? ' is-followed' : '') +
      '" data-alert-id="' + paEsc(a.id) + '" data-type="' + paEsc(a.type) + '">' +
    '<header class="pa-card-head">' +
      '<span class="pa-badge"> Power Alert</span>' +
      '<span class="pa2-priority" title="' + paEsc(pr.why) + '">' + pr.label + '</span>' +
      (pr.followed ? '<span class="pa2-following">Following</span>' : '') +
      (read ? '' : '<span class="pa2-unread" aria-label="Unread">&bull;</span>') +
      '<button class="pa-dismiss" type="button" aria-label="Dismiss this alert">&times;</button>' +
    '</header>' + firmLink +
    '<h3 class="pa-title">' + paEsc(a.title) + '</h3>' +
    '<p class="pa-desc">' + paEsc(a.description) + '</p>' +
    '<div class="pa-metrics">' + paChangeChip(a) + paBasisLine(a) + '</div>' +
    '<div class="pa-foot">' +
      '<span class="pa-period">' + paEsc(a.period) + '</span>' +
      '<button class="pa-view" type="button" aria-expanded="false">View data &rarr;</button>' +
    '</div>' +
    paEvidenceHtml(a) +
  '</article>';
}

function renderPowerAlerts() {
  const el = document.getElementById('powerAlerts');
  if (!el) return; // section not on this view - do nothing, never throw
  if (typeof computePowerAlerts !== 'function') {
    el.innerHTML = '';
    return;
  }

  const result = computePowerAlerts();
  const dismissed = paLoadDismissed();
  const live = result.alerts.filter(function (a) { return dismissed.indexOf(a.id) === -1; });

  const header =
    '<div class="pa-head">' +
      '<h2 class="pa-heading">Power Alerts</h2>' +
      '<p class="pa-sub">Signals computed from the dataset. Every figure below is calculated at page load and shows its working.</p>' +
    '</div>';

  if (!live.length) {
    el.innerHTML = header +
      '<div class="pa-empty">' +
        '<p>No alerts currently clear the significance threshold.</p>' +
        '<p class="pa-empty-sub">' + result.computed + ' candidate signals were computed across ' +
        result.coverage.firms + ' firms; none are above the configured score of ' +
        result.config.minScore + ' and undismissed.</p>' +
      '</div>';
    return;
  }

  const part = pa2Partition(live);
  const unread = part.visible.filter(function (a) { return !pa2IsRead(a.id); }).length;
  const followCount = (typeof getFollowedFirms === 'function') ? getFollowedFirms().size : 0;

  const section = function (title, note, list) {
    if (!list.length) return '';
    return '<div class="pa2-section">' +
      '<div class="pa2-section-head"><h3>' + title + '</h3>' +
      '<span class="pa2-section-n">' + list.length + '</span></div>' +
      (note ? '<p class="pa2-section-note">' + note + '</p>' : '') +
      '<div class="pa-grid">' + list.map(paCardHtml).join('') + '</div></div>';
  };

  /* FOR YOU only appears once the user follows something. An empty
     personalised section with a prompt in it is the same nagging
     pattern this feature is meant to replace. */
  const forYouBlock = followCount
    ? section('For you', 'Signals on the ' + followCount + ' firm' + (followCount === 1 ? '' : 's') +
        ' you follow, ranked by priority.', part.forYou) ||
      '<div class="pa2-section"><div class="pa2-section-head"><h3>For you</h3></div>' +
      '<p class="pa2-empty-inline">Nothing new on the firms you follow right now.</p></div>'
    : '<div class="pa2-onboard">' +
        '<strong>Follow a firm to personalise this feed.</strong> ' +
        'Open any firm profile and use Follow - alerts about those firms will surface here first.' +
      '</div>';

  el.innerHTML = header +
    '<div class="pa2-bar">' +
      '<span class="pa2-unread-count">' + unread + ' unread</span>' +
      '<button class="pa2-mark-all" type="button"' + (unread ? '' : ' disabled') + '>Mark all read</button>' +
    '</div>' +
    pa2FilterBar(live) +
    forYouBlock +
    section('All signals', null, part.rest) +
    '<footer class="pa-meta">' +
      '<span>' + part.visible.length + ' of ' + result.computed + ' computed signals shown</span>' +
      '<span class="pa-meta-sep">&middot;</span>' +
      '<span>' + result.coverage.firms + ' firms, ' + result.coverage.profilesWithJoinYear +
        ' dated partner records, ' + result.coverage.datedTimelineEvents + ' dated events</span>' +
      '<span class="pa-meta-sep">&middot;</span>' +
      '<button class="pa-reset" type="button">Restore dismissed</button>' +
    '</footer>' +
    '<p class="pa2-roadmap">In-app alerts are live. Email and push digests are not yet delivered - ' +
    'the preference is stored but nothing is sent. Match and conflict alerts need saved fundraising ' +
    'criteria, which Power Board does not store per user yet.</p>';

  // Delegated handlers - one listener for the whole section.
  el.onclick = function (ev) {
    const view = ev.target.closest('.pa-view');
    if (view) {
      const card = view.closest('.pa-card');
      const panel = card.querySelector('.pa-evidence');
      const open = !panel.hidden;
      panel.hidden = open;
      view.setAttribute('aria-expanded', String(!open));
      view.innerHTML = open ? 'View data &rarr;' : 'Hide data';

      /* Opening the evidence is what counts as reading an alert - not
         rendering it, which would empty the unread badge before anyone
         looked. This lives inside the branch because the branch returns;
         appending it further down meant it never ran. */
      if (!open && card.dataset.alertId && typeof markAlertRead === 'function'
          && !card.classList.contains('is-read')) {
        markAlertRead(card.dataset.alertId);
        card.classList.add('is-read');
        const dot = card.querySelector('.pa2-unread');
        if (dot) dot.remove();
        const counter = el.querySelector('.pa2-unread-count');
        if (counter) {
          const n = Math.max(0, parseInt(counter.textContent, 10) - 1);
          counter.textContent = n + ' unread';
          const mark = el.querySelector('.pa2-mark-all');
          if (mark && n === 0) mark.disabled = true;
        }
      }
      return;
    }
    const kill = ev.target.closest('.pa-dismiss');
    if (kill) {
      const card = kill.closest('.pa-card');
      paDismiss(card.dataset.alertId);
      card.remove();
      if (!el.querySelector('.pa-card')) renderPowerAlerts();
      return;
    }
    if (ev.target.closest('.pa-reset')) {
      paSaveDismissed([]);
      renderPowerAlerts();
      return;
    }
    const mute = ev.target.closest('[data-mute-type]');
    if (mute) {
      if (typeof toggleMutedType === 'function') toggleMutedType(mute.dataset.muteType);
      renderPowerAlerts();
      return;
    }
    if (ev.target.closest('.pa2-mark-all')) {
      if (typeof markAllAlertsRead === 'function') {
        markAllAlertsRead(part.visible.map(function (a) { return a.id; }));
      }
      renderPowerAlerts();
      return;
    }
  };
}

/* Following a firm from a profile page re-ranks this feed, so the
   section listens rather than waiting for a reload. */
document.addEventListener('pb:follows-changed', function () {
  if (document.getElementById('powerAlerts')) renderPowerAlerts();
});
document.addEventListener('pb:alerts-changed', function () {
  if (document.getElementById('powerAlerts')) renderPowerAlerts();
});
