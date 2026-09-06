/* ============================================================
   POWER-BOARD.JS
   Phase 4F. My Power Board: the founder's private home.

   IT ANSWERS FIVE QUESTIONS, IN THIS ORDER

     What am I raising?
     Who am I pursuing?
     What needs my attention?
     What changed?
     What should I do next?

   Anything that does not answer one of those does not belong here.
   This is not an analytics dashboard, and a founder opening it at
   9am should be able to act within about ten seconds.

   THE COMMITMENT NUMBER IS THE MOST DANGEROUS THING ON THE PAGE

   If five investors have committed and only two recorded an amount,
   showing "$400k of $3M" is a lie by omission - the founder reads it
   as their real position and it is not. So the page always states
   both: the known amount, and how many of the committed investors it
   actually covers. Amounts in different currencies are never added
   together, because a sum of dollars and pounds is not a number.

   A missing amount is missing, never zero. Nothing here fabricates a
   figure to make a total look complete.

   IT DOES NOT REBUILD WHAT ALREADY EXISTS

   The Alert Center, the Screener, Saved Views and the Shortlist are
   all products in their own right. This page shows a compact,
   honest count and a link. Reimplementing them here would be two
   codebases telling the founder two different things.
   ============================================================ */

let mbState = { raise: null, targets: null, actions: {}, alerts: [], counts: {} };

function mbClient() {
  return (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null;
}

function mbEsc(s) { return (typeof ptEsc === 'function') ? ptEsc(s) : String(s == null ? '' : s); }

/* ------------------------------------------------------------
   COMMITMENTS

   Grouped by currency and counted honestly. Returns null when there
   is nothing committed at all, so the section can be absent rather
   than showing a row of zeroes.
   ------------------------------------------------------------ */

function mbCommitments(targets, raise) {
  const committed = (targets || []).filter(function (t) { return t.stage === 'COMMITTED'; });
  if (!committed.length) return null;

  const withAmount = committed.filter(function (t) {
    return t.committedAmount != null && t.committedAmount !== '';
  });

  /* Never add different currencies together. Two dollars plus two
     pounds is not four of anything. */
  const byCurrency = {};
  withAmount.forEach(function (t) {
    const cur = t.committedCurrency || (raise && raise.currency) || 'USD';
    byCurrency[cur] = (byCurrency[cur] || 0) + Number(t.committedAmount);
  });

  return {
    investors: committed.length,
    counted: withAmount.length,
    missing: committed.length - withAmount.length,
    byCurrency: byCurrency,
    currencies: Object.keys(byCurrency)
  };
}

/* Progress against target only where the comparison is honest: the
   raise has a target, the committed amounts are in the same currency,
   and every committed investor recorded an amount. Otherwise the
   fraction would be measuring something other than what it appears
   to. */
function mbProgress(commit, raise) {
  if (!commit || !raise || raise.targetAmount == null) return null;

  /* THE BAR REQUIRES COMPLETE DATA, and this is the strictest rule on
     the page. A bar sitting at 13 per cent while three of five
     committed investors have no amount recorded reads as "you are 13
     per cent of the way there" when the founder might be at 60. A
     caption underneath does not undo what the bar itself says, and a
     founder who believes they are further behind than they are makes
     worse decisions about terms and timing.

     So progress appears only when the comparison is actually valid:
     a target exists, every committed investor recorded an amount, and
     they are all in the raise's own currency. Otherwise the counts
     above stand on their own, which is honest. */
  if (commit.missing > 0) return null;

  const cur = raise.currency || 'USD';
  if (commit.currencies.length !== 1 || commit.currencies[0] !== cur) return null;
  const total = commit.byCurrency[cur];
  const target = Number(raise.targetAmount);
  if (!isFinite(total) || !isFinite(target) || target <= 0) return null;
  return {
    pct: Math.min(100, Math.round((total / target) * 100)),
    total: total, target: target, currency: cur,
    complete: true
  };
}

/* ------------------------------------------------------------
   ATTENTION

   Three buckets, computed rather than stored, and deliberately kept
   apart: overdue is a different feeling from upcoming, and merging
   them into one "tasks" list loses the only distinction that
   matters.
   ------------------------------------------------------------ */

function mbAttention(targets) {
  const out = { overdue: [], soon: [], later: [] };
  (targets || []).forEach(function (t) {
    if (t.stage === 'PASSED') return;         // no chasing a closed conversation
    const a = (typeof paOpenFor === 'function') ? paOpenFor(t.id) : null;
    if (!a) return;
    const row = { target: t, action: a };
    if (typeof paIsOverdue === 'function' && paIsOverdue(a)) out.overdue.push(row);
    else if (typeof paDueSoon === 'function' && paDueSoon(a, 7)) out.soon.push(row);
    else out.later.push(row);
  });
  const byDue = function (x, y) {
    const a = x.action.due_at || '9999', b = y.action.due_at || '9999';
    return a < b ? -1 : a > b ? 1 : 0;
  };
  out.overdue.sort(byDue); out.soon.sort(byDue); out.later.sort(byDue);
  return out;
}

/* ------------------------------------------------------------
   LOADING
   ------------------------------------------------------------ */

async function mbLoadCounts() {
  const c = mbClient();
  const counts = { views: null, searches: null, shortlist: null, unread: null };
  if (!c) return counts;
  const one = async function (table, extra) {
    try {
      let q = c.from(table).select('*', { count: 'exact', head: true });
      if (extra) q = extra(q);
      const { count, error } = await q;
      return error ? null : (count || 0);
    } catch (e) { return null; }
  };
  counts.views = await one('saved_views');
  counts.searches = await one('saved_searches');
  counts.shortlist = await one('shortlists');
  counts.unread = await one('user_alerts', function (q) { return q.is('read_at', null); });
  return counts;
}

/* Alerts that touch something in the raise. The Alert Center is the
   product; this is a nudge toward it, so it stays at three. */
async function mbRelevantAlerts(targets) {
  const c = mbClient();
  if (!c) return [];
  const ids = {};
  (targets || []).forEach(function (t) {
    if (t.firmSlug) ids[t.firmSlug] = t;
    if (t.personId) ids[t.personId] = t;
  });
  try {
    const { data, error } = await c.from('user_alerts')
      .select('*').order('created_at', { ascending: false }).limit(60);
    if (error) throw error;
    return (data || []).filter(function (a) { return ids[a.entity_id]; }).slice(0, 3);
  } catch (e) { return []; }
}

/* ------------------------------------------------------------
   RENDER
   ------------------------------------------------------------ */

async function renderPowerBoard() {
  const host = document.getElementById('myBoardView');
  if (!host) return;

  if (typeof isSignedIn !== 'function' || !isSignedIn()) {
    host.innerHTML = '<div class="ds-wrap"><div class="ds-kicker">My Power Board</div>' +
      '<h1 class="ds-h1">Your raise, in one place.</h1>' +
      '<div class="ds-empty"><strong>This is your private workspace.</strong> ' +
      'What you are raising, who you are pursuing and what was said are visible only to you.</div>' +
      '<p style="margin-top:14px"><a class="ds-btn" href="#signin">Sign in</a></p></div>';
    return;
  }

  host.innerHTML = '<div class="ds-wrap"><div class="ds-kicker">My Power Board</div>' +
    '<h1 class="ds-h1">Your raise, in one place.</h1>' +
    '<div class="ds-empty">Loading...</div></div>';

  const raise = (typeof frActive === 'function') ? await frActive() : null;
  mbState.raise = raise;

  if (!raise) {
    mbPaintEmpty(host);
    return;
  }

  const targets = (typeof ptTargets === 'function') ? await ptTargets(raise.id, { force: true }) : [];
  mbState.targets = targets === null ? [] : targets;
  if (typeof paLoadForRaise === 'function') await paLoadForRaise(raise.id);
  mbState.alerts = await mbRelevantAlerts(mbState.targets);
  mbState.counts = await mbLoadCounts();
  mbState.activities = await mbRecentActivity(raise.id);

  mbPaint(host);
  if (typeof pbTrack === 'function') pbTrack('my_power_board_viewed');
}

async function mbRecentActivity(fundraiseId) {
  const c = mbClient();
  if (!c) return [];
  try {
    const { data, error } = await c.from('pipeline_activities')
      .select('*').eq('fundraise_id', fundraiseId)
      .order('occurred_at', { ascending: false }).limit(8);
    if (error) throw error;
    return data || [];
  } catch (e) { return []; }
}

function mbPaintEmpty(host) {
  host.innerHTML = '<div class="ds-wrap mb-wrap">' +
    '<div class="ds-kicker">My Power Board</div>' +
    '<h1 class="ds-h1">Your raise, in one place.</h1>' +
    '<div class="fr-empty">' +
      '<strong>Start by creating a raise.</strong>' +
      '<p>A raise is the container for the round you are running. Once it exists you can add ' +
      'investors to it from anywhere in Power Board, track where each conversation stands, ' +
      'and see what needs doing next.</p>' +
      '<a class="ds-btn" href="#raise">Create a raise</a>' +
    '</div>' +
    '<ol class="mb-steps">' +
      '<li><strong>Create a raise</strong> with the round you are running now.</li>' +
      '<li><strong>Find investors</strong> using Power Match, the Screener or search.</li>' +
      '<li><strong>Add them to the raise</strong> when you decide to pursue them.</li>' +
      '<li><strong>Track the process</strong> as conversations move, and see what is next.</li>' +
    '</ol></div>';
}

function mbPaint(host) {
  const raise = mbState.raise;
  const targets = mbState.targets || [];
  const commit = mbCommitments(targets, raise);
  const progress = mbProgress(commit, raise);
  const att = mbAttention(targets);
  const c = mbState.counts || {};

  const counts = {};
  (typeof PL_STAGES !== 'undefined' ? PL_STAGES : []).forEach(function (s) { counts[s.key] = 0; });
  targets.forEach(function (t) { counts[t.stage] = (counts[t.stage] || 0) + 1; });
  const active = targets.filter(function (t) { return t.stage !== 'PASSED'; }).length;

  let h = '<div class="ds-wrap mb-wrap">' +
    '<div class="ds-kicker">My Power Board</div>' +
    '<h1 class="ds-h1">Your raise, in one place.</h1>';

  /* ---- 1. what am I raising ---- */
  h += '<section class="mb-raise">' +
    '<div class="mb-raise-top">' +
      '<h2 class="mb-raise-name">' + mbEsc(raise.name) + '</h2>' +
      '<a class="ac-act" href="#raise">Manage raises</a>' +
    '</div>' +
    '<dl class="fr-facts">' +
      (raise.roundStage ? '<div><dt>Stage</dt><dd>' + mbEsc(raise.roundStage) + '</dd></div>' : '') +
      (raise.targetAmount != null && typeof frMoney === 'function'
        ? '<div><dt>Target</dt><dd>' + mbEsc(frMoney(raise.targetAmount, raise.currency)) + '</dd></div>'
        : '') +
      (raise.targetCloseDate && typeof frDate === 'function'
        ? '<div><dt>Close</dt><dd>' + mbEsc(frDate(raise.targetCloseDate)) + '</dd></div>'
        : '') +
      '<div><dt>Investors</dt><dd>' + active + '</dd></div>' +
    '</dl>' +
    mbCommitHtml(commit, progress, raise) +
  '</section>';

  /* ---- 2. who am I pursuing ---- */
  h += '<section class="mb-sec"><div class="mb-sec-head">' +
    '<h2 class="mb-h">Pipeline</h2><a class="ac-act" href="#pipeline">Open pipeline</a></div>';
  if (!targets.length) {
    h += '<p class="mb-empty">No investors yet. Add them from Power Match, the Screener, ' +
      'a firm profile or your Shortlist. Nothing is ever added automatically.</p>';
  } else {
    h += '<div class="pl-summary mb-summary">' +
      (typeof PL_STAGES !== 'undefined' ? PL_STAGES : []).map(function (s) {
        return '<a class="pl-stat" href="#pipeline">' +
          '<span class="pl-stat-n">' + (counts[s.key] || 0) + '</span>' +
          '<span class="pl-stat-l">' + mbEsc(s.label) + '</span></a>';
      }).join('') + '</div>';
  }
  h += '</section>';

  /* ---- 3. what needs my attention ---- */
  h += '<section class="mb-sec"><div class="mb-sec-head">' +
    '<h2 class="mb-h">Needs attention</h2>' +
    (att.overdue.length ? '<span class="mb-overdue-n">' + att.overdue.length + ' overdue</span>' : '') +
    '</div>' +
    mbAttentionHtml(att) + '</section>';

  /* ---- 4. what changed ---- */
  h += '<section class="mb-sec"><div class="mb-sec-head">' +
    '<h2 class="mb-h">Recent activity</h2></div>' +
    mbActivityHtml(mbState.activities) + '</section>';

  /* ---- alerts: a nudge to the Alert Center, not a copy of it ---- */
  h += '<section class="mb-sec"><div class="mb-sec-head">' +
    '<h2 class="mb-h">Power Alerts</h2><a class="ac-act" href="#alerts">Open Alert Center</a></div>' +
    mbAlertsHtml(mbState.alerts, c.unread) + '</section>';

  /* ---- saved discovery: counts and links, not a second implementation ---- */
  h += '<section class="mb-sec"><div class="mb-sec-head">' +
    '<h2 class="mb-h">Saved research</h2></div>' +
    '<div class="mb-links">' +
      mbLinkCard('#screener', 'Saved views', c.views, 'Table setups you kept.') +
      mbLinkCard('#screener', 'Saved searches', c.searches, 'Searches Power Board watches for you.') +
      mbLinkCard('#shortlist', 'Shortlist', c.shortlist, 'Investors you flagged as interesting.') +
    '</div></section>';

  h += '</div>';
  host.innerHTML = h;
}

/* The honest commitment block. */
function mbCommitHtml(commit, progress, raise) {
  if (!commit) return '';

  const parts = commit.currencies.map(function (cur) {
    return (typeof frMoney === 'function') ? frMoney(commit.byCurrency[cur], cur) : (cur + ' ' + commit.byCurrency[cur]);
  }).filter(Boolean);

  let h = '<div class="mb-commit">';

  h += '<div class="mb-commit-row">' +
    '<span class="mb-commit-label">Committed</span>' +
    '<span class="mb-commit-n">' + commit.investors +
      (commit.investors === 1 ? ' investor' : ' investors') + '</span>' +
  '</div>';

  if (parts.length) {
    h += '<div class="mb-commit-row">' +
      '<span class="mb-commit-label">Amount recorded</span>' +
      '<span class="mb-commit-amt">' + mbEsc(parts.join(' + ')) + '</span>' +
    '</div>';
  }

  /* The sentence that stops the number being read as the whole
     position. It is stated whenever any amount is missing, and never
     softened. */
  if (commit.missing > 0) {
    h += '<p class="mb-commit-note">' +
      (parts.length
        ? 'That total covers ' + commit.counted + ' of ' + commit.investors +
          ' committed investors. ' + commit.missing +
          (commit.missing === 1 ? ' has no amount recorded' : ' have no amount recorded') +
          ', so the real total is higher.'
        : 'None of the ' + commit.investors + ' committed investors has an amount recorded yet.') +
      '</p>';
  }

  if (commit.currencies.length > 1) {
    h += '<p class="mb-commit-note">Amounts are in different currencies and are not added together.</p>';
  }

  if (progress) {
    h += '<div class="mb-bar" role="img" aria-label="' + progress.pct +
      ' per cent of target committed"><span style="width:' + progress.pct + '%"></span></div>' +
      '<p class="mb-commit-note">' + progress.pct + ' per cent of the ' +
      mbEsc((typeof frMoney === 'function') ? frMoney(progress.target, progress.currency) : '') +
      ' target.</p>';
  }

  return h + '</div>';
}

function mbAttentionHtml(att) {
  const total = att.overdue.length + att.soon.length + att.later.length;
  if (!total) {
    return '<p class="mb-empty">Nothing scheduled. Open an investor in the pipeline and set ' +
      'a next action to keep the round moving.</p>';
  }
  let h = '';
  const group = function (rows, label, cls) {
    if (!rows.length) return '';
    return '<div class="mb-att-group ' + cls + '">' +
      '<div class="mb-att-label">' + label + '</div>' +
      '<ul class="mb-att-list">' + rows.slice(0, 6).map(function (r) {
        const name = (typeof ptDisplayName === 'function') ? ptDisplayName(r.target) : r.target.id;
        const due = (typeof paDueLabel === 'function') ? paDueLabel(r.action) : '';
        return '<li><a href="#pipeline"><span class="mb-att-who">' + mbEsc(name) + '</span>' +
          '<span class="mb-att-what">' + mbEsc(r.action.body) + '</span></a>' +
          '<span class="mb-att-due">' + mbEsc(due || '') + '</span></li>';
      }).join('') +
      (rows.length > 6 ? '<li class="mb-att-more">and ' + (rows.length - 6) + ' more</li>' : '') +
      '</ul></div>';
  };
  h += group(att.overdue, 'Overdue', 'is-overdue');
  h += group(att.soon, 'Due this week', 'is-soon');
  h += group(att.later, 'Later', 'is-later');
  return h;
}

function mbActivityHtml(rows) {
  if (!rows || !rows.length) {
    return '<p class="mb-empty">Nothing yet. Stage changes and logged meetings appear here.</p>';
  }
  return '<ul class="mb-activity">' + rows.map(function (r) {
    const when = (typeof plRelativeDate === 'function') ? plRelativeDate(r.occurred_at) : '';
    return '<li><span class="mb-act-sum">' + mbEsc(r.summary || '') + '</span>' +
      '<span class="mb-act-when">' + mbEsc(when || '') + '</span></li>';
  }).join('') + '</ul>';
}

function mbAlertsHtml(alerts, unread) {
  if (!alerts || !alerts.length) {
    return '<p class="mb-empty">' +
      (unread ? unread + ' unread ' + (unread === 1 ? 'alert' : 'alerts') +
        ', none about investors in this raise.'
      : 'No alerts about investors in this raise.') + '</p>';
  }
  return '<ul class="mb-alerts">' + alerts.map(function (a) {
    return '<li><a href="#alerts">' +
      '<span class="mb-alert-sum">' + mbEsc(a.summary || '') + '</span>' +
      '<span class="mb-alert-tag">In this raise</span></a></li>';
  }).join('') + '</ul>';
}

function mbLinkCard(href, label, count, help) {
  return '<a class="mb-link" href="' + href + '">' +
    '<span class="mb-link-n">' + (count == null ? '-' : count) + '</span>' +
    '<span class="mb-link-l">' + mbEsc(label) + '</span>' +
    '<span class="mb-link-h">' + mbEsc(help) + '</span></a>';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    mbCommitments: mbCommitments, mbProgress: mbProgress, mbAttention: mbAttention,
    mbCommitHtml: mbCommitHtml, mbAttentionHtml: mbAttentionHtml
  };
}
