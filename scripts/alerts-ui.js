/* ============================================================
   ALERTS-UI.JS  —  Power Alerts rendering layer

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
function paChangeChip(a) {
  if (a.absoluteChange !== null && a.unit === 'percentage points') {
    const sign = a.absoluteChange > 0 ? '+' : '';
    const cls = a.absoluteChange > 0 ? 'pa-up' : 'pa-down';
    return '<span class="pa-delta ' + cls + '">' + sign + a.absoluteChange + ' pts</span>';
  }
  // Fund steps read as a multiple or a fall, not a raw dollar delta.
  if (a.unit === 'USD' && a.previousValue) {
    const mult = a.currentValue / a.previousValue;
    const cls = mult >= 1 ? 'pa-up' : 'pa-down';
    const label = mult >= 1 ? (Math.round(mult * 10) / 10) + '\u00D7'
                            : '\u2212' + Math.round((1 - mult) * 100) + '%';
    return '<span class="pa-delta ' + cls + '">' + label + '</span>';
  }
  // Signed counts (team-page arrivals and departures) must show the
  // CHANGE, not the roster size - "+3 people", never "16 people".
  if (a.absoluteChange !== null && a.direction !== 'flat') {
    const n = a.absoluteChange;
    const cls = n > 0 ? 'pa-up' : 'pa-down';
    return '<span class="pa-delta ' + cls + '">' + (n > 0 ? '+' : '−') +
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
  if (e.capturedOn) rows.push(['Captured on', e.capturedOn.join('  and  ')]);
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

function paCardHtml(a) {
  return '<article class="pa-card" data-alert-id="' + paEsc(a.id) + '" data-type="' + paEsc(a.type) + '">' +
    '<header class="pa-card-head">' +
      '<span class="pa-badge">&#128276; Power Alert</span>' +
      '<button class="pa-dismiss" type="button" aria-label="Dismiss this alert">&times;</button>' +
    '</header>' +
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

  el.innerHTML = header +
    '<div class="pa-grid">' + live.map(paCardHtml).join('') + '</div>' +
    '<footer class="pa-meta">' +
      '<span>' + live.length + ' of ' + result.computed + ' computed signals shown</span>' +
      '<span class="pa-meta-sep">&middot;</span>' +
      '<span>' + result.coverage.firms + ' firms, ' + result.coverage.profilesWithJoinYear +
        ' dated partner records, ' + result.coverage.datedTimelineEvents + ' dated events</span>' +
      '<span class="pa-meta-sep">&middot;</span>' +
      '<button class="pa-reset" type="button">Restore dismissed</button>' +
    '</footer>';

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
    }
  };
}
