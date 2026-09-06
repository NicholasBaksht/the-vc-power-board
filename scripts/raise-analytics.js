/* ============================================================
   RAISE-ANALYTICS.JS
   Phase 6E. What the founder's own raise is actually doing.

   THIS IS THE ONE PLACE IN POWER BOARD WHERE THE DATA IS COMPLETE

   Everywhere else, a count is a floor: deal research covers 24 firms
   of 441, so a missing round means missing evidence. Here the
   population is the founder's own pipeline, and their pipeline is
   exactly what they entered. Twenty targets means twenty. So this
   page can say "8 of 20" and mean it.

   That makes the ONE incompleteness worth naming loudly, because it
   is the only one:

     plLogActivity swallows its own errors on purpose - the stage
     change already happened, and failing the action because the
     history write failed would be worse. So a transition can be
     missing from history while the target's stage moved anyway.

   The funnel is built to survive that and the velocity is not, which
   is why they are computed differently:

     REACHED   union of recorded transitions AND the target's current
               stage. The current stage is on the row itself, so it
               cannot be lost. Complete.
     VELOCITY  only pairs of recorded transitions, because a duration
               needs two timestamps. A subset, and it states its own
               denominator every time.

   SKIPPED STAGES ARE NOT BACKFILLED

   A target that went straight from Target to Meeting never reached
   Contacted, and this page does not pretend it did. Inferring the
   intermediate steps would invent events that never happened and
   would make every funnel look like a clean staircase.

   WHAT THIS PAGE REFUSES TO DO

   No health score. There is no calibrated model of what a healthy
   raise looks like, so a number out of 100 would be decoration with
   a founder's confidence resting on it.

   No benchmark against other founders. Power Board holds other
   people's private pipelines and will not read them to tell you that
   you are behind. No cohort, no consent, no comparison.

   No predicted close date and no probability of closing. A
   conversion rate over a founder's own twenty targets is a
   description of what happened, not a forecast, and dressing it as
   one would be the most expensive false number on the site.
   ============================================================ */

/* Stage keys in ladder order. PASSED is deliberately not in the
   ladder: it is an exit that can happen from anywhere, not a step
   that comes after Committed. */
const RA_LADDER = ['RESEARCHING', 'TARGET', 'CONTACTED', 'MEETING', 'DILIGENCE', 'COMMITTED'];

/* Read cap. A transition-only query is a small slice of the activity
   feed, but a cap with no truncation check is how a funnel silently
   loses its oldest half, so the count is compared against it. */
const RA_MAX_TRANSITIONS = 2000;

const RA_SECTIONS = [
  { key: 'funnel',   label: 'Funnel' },
  { key: 'velocity', label: 'Velocity' },
  { key: 'sources',  label: 'Where it came from' },
  { key: 'outcomes', label: 'Outcomes' }
];

let raState = { section: 'funnel', raiseId: null };

function raEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function raClient() {
  return (typeof plClient === 'function') ? plClient()
       : (typeof sbClient === 'function') ? sbClient() : null;
}

function raStageLabel(key) {
  return (typeof plLabel === 'function' && typeof PL_STAGES !== 'undefined')
    ? plLabel(PL_STAGES, key) : key;
}

/* ------------------------------------------------------------
   READ

   One query, only the two activity types a funnel needs, only the
   four columns it reads. The whole activity feed is not fetched.
   ------------------------------------------------------------ */

async function raTransitions(fundraiseId) {
  const c = raClient();
  if (!c || !fundraiseId) return { rows: [], truncated: false, failed: !c };
  try {
    const { data, error } = await c.from('pipeline_activities')
      .select('target_id,activity_type,metadata,occurred_at')
      .eq('fundraise_id', fundraiseId)
      .in('activity_type', ['TARGET_ADDED', 'STAGE_CHANGED'])
      .order('occurred_at', { ascending: true })
      .limit(RA_MAX_TRANSITIONS);
    if (error) throw error;
    const rows = data || [];
    return { rows: rows, truncated: rows.length >= RA_MAX_TRANSITIONS, failed: false };
  } catch (e) {
    /* A read failure is not an empty funnel. Saying "no activity"
       when the query broke would tell a founder their raise is dead. */
    return { rows: [], truncated: false, failed: true };
  }
}

/* ------------------------------------------------------------
   COMPUTE
   ------------------------------------------------------------ */

function raBuild(targets, trans) {
  const byTarget = {};
  targets.forEach(function (t) {
    byTarget[t.id] = { target: t, reached: {}, stamps: {}, addedAt: t.createdAt || null };
    /* The current stage is on the row, so it is reached whether or
       not its transition survived. */
    if (t.stage) byTarget[t.id].reached[t.stage] = true;
  });

  trans.forEach(function (r) {
    const rec = byTarget[r.target_id];
    if (!rec) return;                       /* target deleted since */
    if (r.activity_type === 'TARGET_ADDED') {
      if (!rec.addedAt) rec.addedAt = r.occurred_at;
      return;
    }
    const md = r.metadata || {};
    if (!md.to) return;
    rec.reached[md.to] = true;
    /* First arrival wins. A target moved back and forth reached the
       stage when it first got there, and using the latest stamp
       would make re-entry look instant. */
    if (!rec.stamps[md.to]) rec.stamps[md.to] = r.occurred_at;
  });

  return byTarget;
}

/* Reached counts, plus how many of those have a timestamp. The gap
   between the two is exactly the best-effort history loss, and it is
   shown rather than hidden. */
function raFunnel(byTarget) {
  const ids = Object.keys(byTarget);
  const total = ids.length;
  return RA_LADDER.map(function (stage) {
    let n = 0, dated = 0;
    ids.forEach(function (id) {
      const rec = byTarget[id];
      if (!rec.reached[stage]) return;
      n++;
      if (rec.stamps[stage]) dated++;
    });
    return {
      stage: stage, label: raStageLabel(stage), n: n, of: total, dated: dated,
      pct: total ? Math.round((n / total) * 100) : null
    };
  });
}

function raMedian(xs) {
  if (!xs.length) return null;
  const s = xs.slice().sort(function (a, b) { return a - b; });
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2);
}

function raDays(a, b) {
  const x = Date.parse(a), y = Date.parse(b);
  if (!isFinite(x) || !isFinite(y)) return null;
  return Math.round((y - x) / 86400000);
}

/* Median days between two stages, over targets that recorded BOTH.
   Consecutive ladder steps only: "Contacted to Committed" would mix
   targets that took four steps with targets that took one. */
function raVelocity(byTarget) {
  const out = [];
  for (let i = 0; i < RA_LADDER.length - 1; i++) {
    const from = RA_LADDER[i], to = RA_LADDER[i + 1];
    const gaps = [];
    let bothReached = 0;
    Object.keys(byTarget).forEach(function (id) {
      const rec = byTarget[id];
      if (!rec.reached[from] || !rec.reached[to]) return;
      bothReached++;
      const a = rec.stamps[from] || (from === RA_LADDER[0] ? rec.addedAt : null);
      const b = rec.stamps[to];
      if (!a || !b) return;
      const d = raDays(a, b);
      /* A negative gap means the founder backdated a logged meeting
         to before the stage change that recorded it. That is real
         data entry, not corruption, but it is not a duration. */
      if (d == null || d < 0) return;
      gaps.push(d);
    });
    out.push({
      from: from, to: to,
      fromLabel: raStageLabel(from), toLabel: raStageLabel(to),
      median: raMedian(gaps), n: gaps.length, of: bothReached
    });
  }
  return out;
}

/* added_from is set only by the action that created the row, never
   inferred, so this is a real attribution. Rows with nothing recorded
   are counted as unrecorded rather than dropped, because dropping
   them would inflate every share. */
function raSources(targets) {
  const counts = {};
  let unrecorded = 0;
  targets.forEach(function (t) {
    const k = t.addedFrom || t.added_from;
    if (!k) { unrecorded++; return; }
    counts[k] = (counts[k] || 0) + 1;
  });
  /* Exactly the four sources the add actions write, matching the four
     add_to_raise_from_* events. No speculative entries: a label for a
     source nothing writes would tell a future reader that surface
     exists. An unrecognised key falls through as itself. */
  const labels = {
    search: 'Global search', screener: 'Power Screener',
    power_match: 'Power Match', shortlist: 'Shortlist'
  };
  const rows = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; })
    .map(function (k) {
      return { key: k, label: labels[k] || k, n: counts[k], of: targets.length };
    });
  return { rows: rows, unrecorded: unrecorded, total: targets.length };
}

/* ------------------------------------------------------------
   RENDER
   ------------------------------------------------------------ */

async function renderRaiseAnalytics() {
  const host = document.getElementById('raiseAnalyticsView');
  if (!host) return;

  if (typeof frActive !== 'function' || typeof ptTargets !== 'function') {
    host.innerHTML = raShell('<p class="ra-empty">Fundraise data is not loaded.</p>');
    return;
  }

  /* Signed out is its own state, checked before anything is read.
     frActive returns null when not signed in, so without this the
     page would tell a visitor they have no raise yet, which is a
     statement about their account it has no basis for. */
  if (typeof isSignedIn !== 'function' || !isSignedIn()) {
    host.innerHTML = raShell(
      '<p class="ra-empty">This page reads your own raise, so it needs you signed in. ' +
      'Nothing here is visible to anyone else.</p>' +
      '<p class="ra-empty"><a class="ds-btn" href="#signin">Sign in</a></p>');
    return;
  }

  host.innerHTML = raShell('<p class="ra-empty">Reading your raise.</p>');

  const raise = await frActive();
  if (!raise) {
    host.innerHTML = raShell(
      '<p class="ra-empty">You do not have an active raise yet. ' +
      '<a href="#raise">Start one</a>, and this page fills in as you work the pipeline.</p>');
    return;
  }
  raState.raiseId = raise.id;

  const targets = await ptTargets(raise.id);
  if (targets === null) {
    host.innerHTML = raShell(
      '<p class="ra-empty">Your pipeline could not be loaded, so nothing is shown here. ' +
      'This is a loading problem, not an empty pipeline.</p>');
    return;
  }
  if (!targets.length) {
    host.innerHTML = raShell(
      '<p class="ra-empty">No investors in this raise yet. ' +
      '<a href="#screener">Find some</a> and this page starts working.</p>');
    return;
  }

  const t = await raTransitions(raise.id);
  const byTarget = raBuild(targets, t.rows);

  let h = '<div class="ra-tabs" role="tablist">' + RA_SECTIONS.map(function (s) {
    return '<button type="button" role="tab" class="ra-tab' +
      (raState.section === s.key ? ' is-on' : '') + '" ' +
      'aria-selected="' + (raState.section === s.key ? 'true' : 'false') + '" ' +
      'data-ra-tab="' + s.key + '">' + raEsc(s.label) + '</button>';
  }).join('') + '</div>';

  if (t.failed) {
    h += '<p class="ra-warn">Your stage history could not be read, so the funnel below ' +
      'shows only where each investor stands right now, and velocity is unavailable. ' +
      'Nothing here is a statement that the history is empty.</p>';
  }
  if (t.truncated) {
    h += '<p class="ra-warn">This raise has more recorded stage changes than this page ' +
      'reads at once, so the oldest are not included. Counts below are floors.</p>';
  }

  h += '<div class="ra-body">' + raSection(raState.section, byTarget, targets, t) + '</div>';

  host.innerHTML = raShell(h, targets.length);
  raBind(host);
  if (typeof pbTrack === 'function') pbTrack('raise_analytics_opened');
}

/* The raise NAME is never printed here and never sent anywhere. The
   page belongs to one signed-in founder who already knows what they
   are raising. */
function raShell(inner, n) {
  return '<div class="ds-wrap ra-wrap">' +
    '<div class="ds-kicker">Raise analytics</div>' +
    '<h1 class="ds-h1">How your raise is moving.</h1>' +
    '<p class="ds-sub">Your own pipeline only. ' +
    (n ? n + ' investors tracked. ' : '') +
    'Nothing here is compared with any other founder.</p>' +
    '<div class="ra-scope"><strong>This is a record, not a forecast.</strong> ' +
    'Every figure below describes what has already happened in your pipeline. ' +
    'There is no health score, no predicted close date, and no benchmark against ' +
    'other founders, because Power Board has no calibrated model of a healthy raise ' +
    'and will not read anyone else\'s private pipeline to build one.</div>' +
    inner + '</div>';
}

function raSection(key, byTarget, targets, t) {
  if (key === 'funnel')   return raFunnelHtml(byTarget, targets, t);
  if (key === 'velocity') return raVelocityHtml(byTarget, t);
  if (key === 'sources')  return raSourcesHtml(targets);
  if (key === 'outcomes') return raOutcomesHtml(byTarget, targets);
  return '';
}

function raBar(n, of, label, extra) {
  const w = of ? Math.max(1, Math.round((n / of) * 100)) : 1;
  return '<tr>' +
    '<th scope="row" class="ra-bar-label">' + raEsc(label) + '</th>' +
    '<td class="ra-bar-cell"><span class="ra-bar" style="width:' + w + '%"></span></td>' +
    /* The spaces before each span are real text nodes. CSS margin and
       flex gap separate the boxes but not the text, so without them
       this reads out as "1 of 1010%1 without a recorded date". */
    '<td class="ra-bar-n">' + n + ' of ' + of +
      (of ? ' <span class="ra-pct">' + Math.round((n / of) * 100) + '%</span>' : '') +
      (extra ? ' <span class="ra-sub-n">' + raEsc(extra) + '</span>' : '') +
    '</td></tr>';
}

function raFunnelHtml(byTarget, targets, t) {
  const rows = raFunnel(byTarget);
  const lostHistory = rows.reduce(function (a, r) { return a + (r.n - r.dated); }, 0);

  return '<h2 class="ra-h">Funnel</h2>' +
    '<p class="ra-sub">How many of your ' + targets.length + ' investors have reached each ' +
    'stage. An investor counts as having reached a stage if a recorded stage change put ' +
    'them there, or if that is where they stand now.</p>' +

    '<table class="ra-bars"><caption class="pl-sr">Investors reaching each stage</caption>' +
    '<thead><tr><th scope="col">Stage</th><th scope="col">Share of pipeline</th>' +
    '<th scope="col">Count</th></tr></thead><tbody>' +
    rows.map(function (r) {
      return raBar(r.n, r.of, r.label,
        r.n && r.dated < r.n ? (r.n - r.dated) + ' without a recorded date' : '');
    }).join('') + '</tbody></table>' +

    '<p class="ra-note">Stages you skipped are not filled in. An investor you took ' +
    'straight from Target to Meeting never reached Contacted, and this page does not ' +
    'invent the step.</p>' +
    (lostHistory
      ? '<p class="ra-note">' + lostHistory + ' of these arrivals have no recorded date. ' +
        'Stage history is written after the stage change succeeds, so a failed history ' +
        'write leaves the investor in the right stage with no timestamp. They are counted ' +
        'in the funnel and left out of velocity.</p>'
      : '') +
    (t.failed ? '' :
      '<p class="ra-note">This is your own pipeline, so these counts are complete. ' +
      'They are not a share of investors in the market.</p>');
}

function raVelocityHtml(byTarget, t) {
  if (t.failed) {
    return '<h2 class="ra-h">Velocity</h2>' +
      '<p class="ra-empty">Velocity needs stage history, and it could not be read.</p>';
  }
  const rows = raVelocity(byTarget);
  const any = rows.some(function (r) { return r.n > 0; });

  let h = '<h2 class="ra-h">Velocity</h2>' +
    '<p class="ra-sub">Median days between one stage and the next, over the investors ' +
    'that recorded a date for both. Consecutive steps only.</p>';

  if (!any) {
    return h + '<p class="ra-empty">No investor has yet recorded dates for two consecutive ' +
      'stages, so there is nothing to measure. This fills in as the raise moves.</p>';
  }

  h += '<table class="ra-tbl"><thead><tr>' +
    '<th scope="col">Step</th><th scope="col">Median days</th><th scope="col">Measured over</th>' +
    '</tr></thead><tbody>' +
    rows.map(function (r) {
      return '<tr>' +
        '<td>' + raEsc(r.fromLabel) + ' to ' + raEsc(r.toLabel) + '</td>' +
        /* A median of one observation is that one observation. It is
           labelled so, rather than printed as though it were typical. */
        '<td>' + (r.n
          ? r.median + (r.n === 1 ? ' <span class="ra-unk">(a single investor)</span>' : '')
          : '<span class="ra-unk">not enough dated moves</span>') + '</td>' +
        '<td>' + r.n + ' of ' + r.of + ' that reached both</td>' +
      '</tr>';
    }).join('') + '</tbody></table>' +

    '<p class="ra-note">A median is not a prediction. It says what has happened so far in ' +
    'this raise, over the number of investors named in the last column, and an investor ' +
    'who has not moved yet is not in it.</p>';
  return h;
}

function raSourcesHtml(targets) {
  const s = raSources(targets);
  let h = '<h2 class="ra-h">Where your pipeline came from</h2>' +
    '<p class="ra-sub">Which part of Power Board you were using when you added each ' +
    'investor. Recorded by the action itself, never worked out afterwards.</p>';

  if (!s.rows.length) {
    return h + '<p class="ra-empty">None of your investors recorded where they were added ' +
      'from. Ones you add from now on will.</p>';
  }

  h += '<table class="ra-bars"><caption class="pl-sr">Pipeline by source</caption>' +
    '<thead><tr><th scope="col">Source</th><th scope="col">Share of pipeline</th>' +
    '<th scope="col">Count</th></tr></thead><tbody>' +
    s.rows.map(function (r) { return raBar(r.n, r.of, r.label, ''); }).join('') +
    '</tbody></table>';

  if (s.unrecorded) {
    h += '<p class="ra-note">' + s.unrecorded + ' of ' + s.total + ' have no source recorded, ' +
      'most likely added before this was tracked. They are counted in the denominator rather ' +
      'than dropped, so the shares above stay honest.</p>';
  }
  h += '<p class="ra-note">This says where an investor entered your pipeline. It says nothing ' +
    'about which source produces better investors, and no such claim is made anywhere.</p>';
  return h;
}

function raOutcomesHtml(byTarget, targets) {
  let committed = 0, passed = 0, active = 0;
  const reasons = {};
  targets.forEach(function (t) {
    if (t.stage === 'COMMITTED') committed++;
    else if (t.stage === 'PASSED') { passed++; if (t.passedReason) reasons[t.passedReason] = (reasons[t.passedReason] || 0) + 1; }
    else active++;
  });

  /* The 4F commitment rule, restated because this page can be read
     on its own: amounts are only summed when every committed
     investor has one, and currencies are never mixed. */
  let amountLine = '';
  const withAmt = targets.filter(function (t) {
    return t.stage === 'COMMITTED' && t.committedAmount != null && t.committedAmount !== '';
  });
  if (committed && withAmt.length === committed) {
    const cur = {};
    withAmt.forEach(function (t) {
      const k = t.committedCurrency || 'USD';
      cur[k] = (cur[k] || 0) + Number(t.committedAmount);
    });
    amountLine = Object.keys(cur).map(function (k) {
      return k + ' ' + cur[k].toLocaleString();
    }).join(' and ');
  }

  let h = '<h2 class="ra-h">Outcomes</h2>' +
    '<p class="ra-sub">Where your ' + targets.length + ' investors stand.</p>' +
    '<table class="ra-bars"><caption class="pl-sr">Outcomes</caption>' +
    '<thead><tr><th scope="col">Outcome</th><th scope="col">Share of pipeline</th>' +
    '<th scope="col">Count</th></tr></thead><tbody>' +
    raBar(committed, targets.length, 'Committed', '') +
    raBar(passed, targets.length, 'Passed', '') +
    raBar(active, targets.length, 'Still active', '') +
    '</tbody></table>';

  if (committed) {
    h += amountLine
      ? '<p class="ra-note">Committed amounts total ' + raEsc(amountLine) + ', covering all ' +
        committed + ' committed investors. Currencies are listed separately and never added.</p>'
      : '<p class="ra-note">' + withAmt.length + ' of ' + committed + ' committed investors have ' +
        'an amount recorded, so no total is shown. A partial total reads as your real position ' +
        'and would understate it.</p>';
  }

  const rk = Object.keys(reasons);
  if (rk.length) {
    h += '<h3 class="ra-h3">Why investors passed</h3>' +
      '<table class="ra-tbl"><thead><tr><th scope="col">Reason</th><th scope="col">Count</th>' +
      '</tr></thead><tbody>' +
      rk.sort(function (a, b) { return reasons[b] - reasons[a]; }).map(function (k) {
        const lbl = (typeof plLabel === 'function' && typeof PL_PASSED_REASONS !== 'undefined')
          ? plLabel(PL_PASSED_REASONS, k) : k;
        return '<tr><td>' + raEsc(lbl) + '</td><td>' + reasons[k] + '</td></tr>';
      }).join('') + '</tbody></table>' +
      '<p class="ra-note">Reasons are the ones you recorded. "No response" is not the same as ' +
      'a decision, and it is not counted as one.</p>';
  }

  h += '<p class="ra-note">A pass is not a verdict on the company, and this page does not turn ' +
    'these counts into a rate of success or a chance of closing.</p>';
  return h;
}

function raBind(host) {
  if (host.dataset.raBound) return;
  host.dataset.raBound = '1';
  host.addEventListener('click', function (e) {
    const t = e.target.closest('[data-ra-tab]');
    if (!t) return;
    raState.section = t.getAttribute('data-ra-tab');
    if (typeof pbTrack === 'function') pbTrack('raise_analytics_section_changed');
    renderRaiseAnalytics();
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    RA_LADDER: RA_LADDER, raBuild: raBuild, raFunnel: raFunnel,
    raVelocity: raVelocity, raSources: raSources, raMedian: raMedian, raDays: raDays
  };
}
