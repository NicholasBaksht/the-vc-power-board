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

/* ============================================================
   POWER ALERTS REPORT
   ------------------------------------------------------------
   The same computed signals, written as a report rather than
   listed as data. The cards state a number and leave the reader
   to work out what it means; a report says what happened, to
   whom, and against what baseline, in the order that matters.

   Every sentence is built from the alert's own structured
   fields. Nothing is characterised beyond what the engine
   measured: no "surged", no "signals a shift", no adjective the
   data does not support. Where a count is a floor, the sentence
   says at least.

   House style, applied deliberately:
     - the subject leads the sentence, never the number
     - figures carry their comparison inline
     - no em dashes; commas, semicolons and full stops instead
     - no exclamation, no emoji, no second person
   ============================================================ */

const PA_REPORT_SECTIONS = [
  { key: 'fundraising', title: 'Fundraising',
    types: ['fund_announcements', 'fund_step', 'fund_year_activity'] },
  { key: 'people', title: 'People',
    types: ['snapshot_partner_arrival', 'snapshot_partner_departure',
            'partner_momentum', 'partner_sector_focus'] },
  { key: 'positioning', title: 'Sector and stage positioning',
    types: ['cohort_sector_shift', 'cohort_geography_shift', 'cohort_stage_shift',
            'sector_exposure_change', 'sector_breadth'] },
  { key: 'activity', title: 'Deal activity and networks',
    types: ['new_investments', 'coinvestor_network', 'portfolio_overlap',
            'firm_milestone_activity'] }
];

function paRepUsd(n) {
  if (n == null) return null;
  const v = Math.abs(n);
  if (v >= 1e9) return '$' + (Math.round(v / 1e8) / 10) + ' billion';
  if (v >= 1e6) return '$' + Math.round(v / 1e6) + ' million';
  return '$' + v.toLocaleString();
}

/* "August 14" reads; "2026-08-14" is a database field on a page that
   is trying to be prose. The year is dropped when it is the current
   one, the way a dateline works. */
function paRepDay(iso) {
  if (!iso) return null;
  const p = String(iso).split('-');
  if (p.length < 3) return paRepMonth(iso);
  const names = ['January','February','March','April','May','June',
                 'July','August','September','October','November','December'];
  const m = names[parseInt(p[1], 10) - 1];
  if (!m) return iso;
  const y = parseInt(p[0], 10);
  return m + ' ' + parseInt(p[2], 10) + (y === new Date().getFullYear() ? '' : ', ' + y);
}

function paRepMonth(iso) {
  if (!iso) return null;
  const parts = String(iso).split('-');
  const names = ['January', 'February', 'March', 'April', 'May', 'June',
                 'July', 'August', 'September', 'October', 'November', 'December'];
  const m = names[parseInt(parts[1], 10) - 1];
  return m ? (m + ' ' + parts[0]) : parts[0];
}

/* One alert, one sentence. Returns null when a type has no report
   voice yet, so an unknown type is silently omitted from the prose
   rather than rendered as a stub. */
function paReportSentence(a) {
  const e = a.evidence || {};
  const n = Math.abs(a.absoluteChange == null ? a.currentValue : a.absoluteChange);

  switch (a.type) {
    case 'fund_announcements': {
      const size = paRepUsd(a.currentValue);
      const when = paRepMonth(a.period);
      const named = e.fundName && e.fundName !== a.subject;
      return { text: a.subject + ' closed ' + (named ? e.fundName : 'a new fund') +
        ' at ' + size + ' in ' + when + '.',
        caveat: e.listComplete ? null : 'Recorded fund histories are incomplete for some firms, so a more recent close may not be captured.' };
    }
    case 'fund_step': {
      const mult = a.previousValue ? a.currentValue / a.previousValue : null;
      const dir = a.currentValue > a.previousValue ? 'larger than' : 'smaller than';
      const pct = Math.abs(Math.round((mult - 1) * 100));
      return a.subject + ' raised ' + paRepUsd(a.currentValue) + ' for its most recent fund, ' +
        pct + ' per cent ' + dir + ' the one before it, across vintages ' + a.period + '.';
    }
    case 'fund_year_activity':
      return a.currentValue + ' tracked firms recorded a fund close in ' + a.subject + '.';

    case 'snapshot_partner_arrival':
      return a.subject + ' added ' + n + ' ' + (n === 1 ? 'name' : 'names') +
        ' to its team page between ' + (e.capturedOn ? e.capturedOn.map(paRepDay).join(' and ') : a.period) + '.';
    case 'snapshot_partner_departure':
      return a.subject + ' removed ' + n + ' ' + (n === 1 ? 'name' : 'names') +
        ' from its team page between ' + (e.capturedOn ? e.capturedOn.map(paRepDay).join(' and ') : a.period) +
        ', taking the published roster from ' + a.previousValue + ' to ' + a.currentValue + '.';
    case 'partner_momentum':
      return a.currentValue + ' of the partners listed at ' + a.subject +
        ' record a joining year of 2015 or later.';
    case 'partner_sector_focus':
      return a.currentValue + ' partners at ' + a.subject +
        ' publish an investment focus that includes ' + a.sector + '.';

    case 'cohort_sector_shift':
      return a.subject + ' accounts for ' + a.currentValue + ' per cent of sector tags among firms founded 2015 or later, against ' +
        a.previousValue + ' per cent among those founded 2005 to 2014, a gap of ' +
        Math.abs(a.absoluteChange) + ' points.';
    case 'cohort_geography_shift':
    case 'cohort_stage_shift':
      return a.subject + ' moved from ' + a.previousValue + ' per cent to ' + a.currentValue +
        ' per cent between the two founding cohorts.';
    case 'sector_exposure_change':
      return a.subject + ' put ' + e.secondHalf.touching + ' of ' + e.secondHalf.deals +
        ' disclosed deals into ' + a.sector + ' in the second half of the researched window, against ' +
        e.firstHalf.touching + ' of ' + e.firstHalf.deals + ' in the first.';
    case 'sector_breadth':
      return a.currentValue + ' of the firms with deal coverage have at least one disclosed ' +
        a.subject + ' investment.';

    case 'new_investments':
      return { text: a.subject + ' disclosed at least ' + a.currentValue +
        ' investments in the past ' + (a.period || '90 days').replace('last ', '') + '.',
        caveat: e.mixedEffort ? 'Part of that window was researched more intensively than the rest, so these counts are floors and are not comparable with earlier periods.' : null };
    case 'coinvestor_network':
      return a.subject + ' has appeared alongside ' + a.currentValue +
        ' other tracked firms in disclosed rounds.';
    case 'portfolio_overlap':
      return a.currentValue + ' tracked firms hold ' + a.subject + '.';
    case 'firm_milestone_activity':
      return a.subject + ' recorded ' + a.currentValue + ' dated milestones since ' +
        String(a.period || '2024').slice(0, 4) + '.';
    default:
      return null;
  }
}

/* Joins sentences into a paragraph.

   Two things this must not do. It must not lowercase the first word
   to fit a connective: firm names lead most of these sentences, and
   "andreessen Horowitz" or "bDC Capital" is worse than no connective
   at all. Connectives therefore end in a comma and the sentence
   keeps its own capitalisation, which is correct English anyway.

   And it must not repeat a caveat. Two firms can share the same
   coverage warning; stating it twice in one paragraph reads as a
   stutter, so caveats are collected and appended once. */
function paReportParagraph(list) {
  const connect = ['', 'Separately, ', 'Elsewhere, ', 'In the same period, ', 'Also, '];
  const caveats = [];
  const out = [];
  list.forEach(function (a, i) {
    const r = paReportSentence(a);
    if (!r) return;
    const text = (typeof r === 'string') ? r : r.text;
    const caveat = (typeof r === 'string') ? null : r.caveat;
    if (caveat && caveats.indexOf(caveat) === -1) caveats.push(caveat);
    /* Past the connective list, sentences simply follow one another.
       A fifth "Also," is worse than a full stop. */
    out.push((i < connect.length ? connect[i] : '') + text);
  });
  if (!out.length) return null;
  /* Caveats come back separately rather than tacked onto the last
     sentence. Appended inline they attach themselves to whichever
     fact happens to be last, which put a deal-coverage warning
     immediately after a milestone count that it had nothing to do
     with. A footnote under the paragraph belongs to the paragraph. */
  return { body: out.join(' '), notes: caveats };
}

function paReportDate() {
  const d = new Date();
  const names = ['January', 'February', 'March', 'April', 'May', 'June',
                 'July', 'August', 'September', 'October', 'November', 'December'];
  return names[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

/* The lede takes the highest-scoring signal. If the reader follows
   firms and one of those is in the report, it leads instead: the
   most important thing on the page is the thing about them. */
function paReportLede(list) {
  const followed = (typeof getFollowedFirms === 'function') ? getFollowedFirms() : new Set();
  const mine = list.filter(function (a) { return a.firmId && followed.has(a.firmId); });
  const pick = (mine.length ? mine : list).slice().sort(function (x, y) { return y.score - x.score; })[0];
  if (!pick) return null;
  return { alert: pick, personal: mine.length > 0 };
}

function renderAlertsReport(live) {
  if (!live.length) return '';
  const lede = paReportLede(live);
  const ledeRaw = lede ? paReportSentence(lede.alert) : null;
  const ledeSentence = ledeRaw ? ((typeof ledeRaw === 'string') ? ledeRaw : ledeRaw.text) : null;

  const sections = PA_REPORT_SECTIONS.map(function (sec) {
    const items = live
      .filter(function (a) { return sec.types.indexOf(a.type) !== -1; })
      /* The lede already said this one. A short report that opens and
         then repeats itself two paragraphs later reads as a bug. */
      .filter(function (a) { return !lede || a.id !== lede.alert.id; })
      .sort(function (x, y) { return y.score - x.score; });
    if (!items.length) return '';
    const para = paReportParagraph(items);
    if (!para) return '';
    return '<section class="par-section">' +
      '<h3 class="par-h">' + sec.title + '</h3>' +
      '<p class="par-p">' + para.body + '</p>' +
      (para.notes.length ? '<p class="par-note">' + para.notes.join(' ') + '</p>' : '') +
      '</section>';
  }).join('');

  return '<article class="par">' +
    '<header class="par-head">' +
      '<div class="par-kicker">Power Board Intelligence Report</div>' +
      '<div class="par-date">' + paReportDate() + '</div>' +
    '</header>' +
    (ledeSentence
      ? '<p class="par-lede">' + (lede.personal ? 'Among the firms you follow: ' + ledeSentence : ledeSentence) + '</p>'
      : '') +
    sections +
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

  /* The report leads. The cards still exist because they carry the
     evidence panel and the per-alert sources, which a paragraph
     cannot, but they sit behind a toggle: a reader who wants the
     working can open it, and one who wants the story does not have
     to read a grid of numbers to get it. */
  el.innerHTML = header +
    renderAlertsReport(live) +
    '<div class="pa2-bar">' +
      '<span class="pa2-unread-count">' + unread + ' unread</span>' +
      '<button class="pa2-mark-all" type="button"' + (unread ? '' : ' disabled') + '>Mark all read</button>' +
      '<button class="pa2-toggle-data" type="button" aria-expanded="false">Show the underlying signals</button>' +
    '</div>' +
    '<div class="pa2-data" hidden>' +
    pa2FilterBar(live) +
    forYouBlock +
    section('All signals', null, part.rest) +
    '</div>' +
    '<footer class="pa-meta">' +
      '<span>' + part.visible.length + ' of ' + result.computed + ' computed signals shown</span>' +
      '<span class="pa-meta-sep">&middot;</span>' +
      '<span>' + result.coverage.firms + ' firms, ' + result.coverage.profilesWithJoinYear +
        ' dated partner records, ' + result.coverage.datedTimelineEvents + ' dated events</span>' +
      '<span class="pa-meta-sep">&middot;</span>' +
      '<button class="pa-reset" type="button">Restore dismissed</button>' +
    '</footer>' +
    '<p class="pa2-roadmap">In-app alerts and follow notifications are live. Email and push digests are not yet delivered; ' +
    'the preference is stored but nothing is sent. Match and conflict alerts need saved fundraising ' +
    'criteria, which Power Board does not store per user yet.</p>';

  // Delegated handlers - one listener for the whole section.
  el.onclick = function (ev) {
    const toggle = ev.target.closest('.pa2-toggle-data');
    if (toggle) {
      const box = el.querySelector('.pa2-data');
      const open = !box.hidden;
      box.hidden = open;
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.textContent = open ? 'Show the underlying signals' : 'Hide the underlying signals';
      return;
    }

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

/* ============================================================
   FOLLOWED-FIRM NOTIFICATION
   ------------------------------------------------------------
   Following a firm is a request to be told when something
   happens to it. Before this, the feed only reordered itself
   and the reader had to visit the page to find that out.

   Two surfaces, both quiet:
     - a count on the Power Alerts nav link, always visible
     - a dismissible bar naming the firms, once per session

   computePowerAlerts() walks 401 firms and 914 partner records,
   so it is computed once per page load and cached here. The
   badge waits for an idle moment rather than blocking paint,
   because nothing about it is urgent.
   ============================================================ */

let paAlertCache = null;
function paComputeOnce() {
  if (paAlertCache) return paAlertCache;
  if (typeof computePowerAlerts !== 'function') return null;
  try { paAlertCache = computePowerAlerts(); } catch (e) { paAlertCache = null; }
  return paAlertCache;
}

/* Unread, undismissed alerts about firms this reader follows.
   An alert with no firmId is board-wide and belongs to nobody, so
   it never counts towards a personal notification. */
function paFollowedUnread() {
  const res = paComputeOnce();
  const empty = { count: 0, firms: [], list: [] };
  if (!res) return empty;
  const followed = (typeof getFollowedFirms === 'function') ? getFollowedFirms() : null;
  if (!followed || !followed.size) return empty;
  const dismissed = paLoadDismissed();
  const list = res.alerts.filter(function (a) {
    return a.firmId && followed.has(a.firmId) &&
           dismissed.indexOf(a.id) === -1 &&
           !pa2IsRead(a.id);
  });
  const firms = [];
  list.forEach(function (a) { if (firms.indexOf(a.subject) === -1) firms.push(a.subject); });
  return { count: list.length, firms: firms, list: list };
}

const PA_BANNER_KEY = 'pb_alert_banner_seen';

/* Keyed on the alert ids themselves, not a boolean. Dismissing the
   bar hides THESE alerts; a genuinely new one brings it back. */
function paBannerSignature(list) {
  return list.map(function (a) { return a.id; }).sort().join(',');
}

function paBannerDismissed(sig) {
  try { return localStorage.getItem(PA_BANNER_KEY) === sig; } catch (e) { return false; }
}

function paDismissBanner(sig) {
  try { localStorage.setItem(PA_BANNER_KEY, sig); } catch (e) { /* private mode */ }
}

function renderAlertNotification() {
  const info = paFollowedUnread();

  // ---- badge on the nav link ----
  const link = document.querySelector('.pb-nav a[href="#powerAlerts"]');
  if (link) {
    const existing = link.querySelector('.pa-navbadge');
    if (existing) existing.remove();
    if (info.count) {
      const b = document.createElement('span');
      b.className = 'pa-navbadge';
      b.textContent = info.count > 99 ? '99+' : String(info.count);
      b.setAttribute('aria-label', info.count + ' unread alerts on firms you follow');
      link.appendChild(b);
    }
  }

  // ---- the bar ----
  const old = document.getElementById('paNotifyBar');
  if (old) old.remove();
  if (!info.count) return;

  const sig = paBannerSignature(info.list);
  if (paBannerDismissed(sig)) return;
  if (location.hash === '#powerAlerts') return;   // already looking at them

  const names = info.firms.slice(0, 3).join(', ');
  const more = info.firms.length > 3 ? ' and ' + (info.firms.length - 3) + ' more' : '';
  const bar = document.createElement('div');
  bar.id = 'paNotifyBar';
  bar.className = 'pa-notify';
  bar.innerHTML =
    '<span class="pa-notify-dot" aria-hidden="true"></span>' +
    '<span class="pa-notify-text">' +
      '<strong>' + info.count + ' new ' + (info.count === 1 ? 'signal' : 'signals') + '</strong> on ' +
      paEsc(names) + paEsc(more) + '.' +
    '</span>' +
    '<a class="pa-notify-go" href="#powerAlerts">Read the report</a>' +
    '<button class="pa-notify-x" type="button" aria-label="Dismiss">&times;</button>';

  const header = document.querySelector('header.pb-header');
  if (header && header.parentNode) header.parentNode.insertBefore(bar, header.nextSibling);
  else document.body.insertBefore(bar, document.body.firstChild);

  bar.querySelector('.pa-notify-x').addEventListener('click', function () {
    paDismissBanner(sig);
    bar.remove();
  });
}

/* Recompute when the reader follows or unfollows something, and
   when a session starts, since follows sync from Supabase then. */
function paNotifyInit() {
  const run = function () { try { renderAlertNotification(); } catch (e) { /* never block the page */ } };
  if (typeof requestIdleCallback === 'function') requestIdleCallback(run, { timeout: 2500 });
  else setTimeout(run, 900);
  document.addEventListener('pb:follows-changed', run);
  document.addEventListener('pb:alerts-changed', run);
  if (typeof onAuthChange === 'function') onAuthChange(run);
  window.addEventListener('hashchange', function () {
    const b = document.getElementById('paNotifyBar');
    if (b && location.hash === '#powerAlerts') b.remove();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', paNotifyInit);
} else {
  paNotifyInit();
}
