/* ============================================================
   PIPELINE.JS
   Phase 4C. The Raise Pipeline: an institutional table of who you are
   pursuing and where each conversation stands.

   A TABLE, NOT A BOARD. A founder with forty investors needs to scan
   forty rows and sort them, not drag cards between columns. The table
   is the primary view because density is the point: stage, contact,
   relationship and last activity all readable at once, in one row per
   opportunity.

   STAGES ARE NOT A WORKFLOW ENGINE. Real fundraising is messy. A
   founder meets someone at a dinner and goes straight from TARGET to
   MEETING with no CONTACTED in between; a promising conversation goes
   quiet and moves backwards. Any stage can move to any stage, and
   nothing is blocked because the sequence looks wrong. What the
   system does is RECORD the move, so the history is accurate even
   when the path was not tidy.

   FIT CONTEXT IS BORROWED, NOT INVENTED. Where the pipeline shows why
   an investor is a fit, it calls the same Best-Fit Partner evaluation
   the rest of the product uses, with the founder's own raise context
   as the ask. There is no pipeline-specific score, no percentage, and
   nothing shown at all when the founder has not said what they are
   building - an empty cell is honest, a made-up score is not.

   EVERYTHING HERE IS PRIVATE. Stage, relationship, commitment amounts
   and pass reasons are owner-only, never joined into research, never
   indexed, and never visible to another user.
   ============================================================ */

const PL_STAGES = [
  { key: 'RESEARCHING', label: 'Researching',
    help: 'Still deciding whether this investor belongs in the raise.' },
  { key: 'TARGET',      label: 'Target',
    help: 'You have decided to pursue them.' },
  { key: 'CONTACTED',   label: 'Contacted',
    help: 'You or an intermediary has reached out.' },
  { key: 'MEETING',     label: 'Meeting',
    help: 'At least one real fundraising conversation has happened.' },
  { key: 'DILIGENCE',   label: 'Diligence',
    help: 'They are evaluating the company beyond a first meeting.' },
  { key: 'COMMITTED',   label: 'Committed',
    help: 'They have committed to the round.' },
  { key: 'PASSED',      label: 'Passed',
    help: 'No longer active. Kept, because who passed and why is useful next time.' }
];

const PL_RELATIONSHIPS = [
  { key: 'UNKNOWN',               label: 'Unknown' },
  { key: 'COLD',                  label: 'Cold' },
  { key: 'WARM_PATH',             label: 'Warm path' },
  { key: 'INTRO_REQUESTED',       label: 'Intro requested' },
  { key: 'INTRO_MADE',            label: 'Intro made' },
  { key: 'EXISTING_RELATIONSHIP', label: 'Existing relationship' }
];

const PL_PASSED_REASONS = [
  { key: 'INVESTOR_PASSED', label: 'Investor passed' },
  { key: 'FOUNDER_PASSED',  label: 'We passed' },
  { key: 'NO_RESPONSE',     label: 'No response' },
  { key: 'TIMING',          label: 'Timing' },
  { key: 'STAGE_MISMATCH',  label: 'Stage mismatch' },
  { key: 'SECTOR_MISMATCH', label: 'Sector mismatch' },
  { key: 'CONFLICT',        label: 'Conflict' },
  { key: 'ROUND_FILLED',    label: 'Round filled' },
  { key: 'OTHER',           label: 'Other' }
];

let plState = {
  raise: null, targets: null, contacts: {}, activities: {},
  filters: { stage: '', type: '', relationship: '', q: '', tag: '', action: '' },
  sort: 'added', dir: 'desc', showPassed: false
};

function plLabel(list, key) {
  const hit = list.filter(function (x) { return x.key === key; })[0];
  return hit ? hit.label : key;
}

function plEsc(s) { return (typeof ptEsc === 'function') ? ptEsc(s) : String(s == null ? '' : s); }

function plClient() {
  return (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null;
}

/* ------------------------------------------------------------
   ACTIVITY

   Written by the action that caused it, never inferred. Failure to
   write an activity must not fail the action itself: losing a line of
   history is bad, but refusing a stage change because the history
   write failed would be worse.
   ------------------------------------------------------------ */

async function plLogActivity(fundraiseId, targetId, type, summary, metadata, opts) {
  opts = opts || {};
  const c = plClient();
  if (!c) return;
  try {
    await c.from('pipeline_activities').insert({
      id: 'pa' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      fundraise_id: fundraiseId,
      target_id: targetId || null,
      activity_type: type,
      summary: summary ? String(summary).slice(0, 300) : null,
      /* Structured payload only. Note text, message bodies and meeting
         notes never come through here - they have their own private
         rows and are not duplicated into the feed. */
      metadata: metadata || {},
      source: opts.source === 'manual' ? 'manual' : 'system',
      occurred_at: opts.occurredAt || new Date().toISOString()
    });
  } catch (e) { /* history is best-effort; the action already happened */ }
}

async function plActivitiesForRaise(fundraiseId) {
  const c = plClient();
  if (!c) return {};
  try {
    /* One query for the whole raise. Fetching per target would be one
       request per row, which is what makes a big pipeline feel slow. */
    const { data, error } = await c.from('pipeline_activities')
      .select('*').eq('fundraise_id', fundraiseId)
      .order('occurred_at', { ascending: false }).limit(500);
    if (error) throw error;
    const by = {};
    (data || []).forEach(function (r) {
      if (!r.target_id) return;
      (by[r.target_id] = by[r.target_id] || []).push(r);
    });
    return by;
  } catch (e) { return {}; }
}

/* ------------------------------------------------------------
   STAGE AND RELATIONSHIP CHANGES
   ------------------------------------------------------------ */

async function plSetStage(target, nextStage, extra) {
  extra = extra || {};
  const c = plClient();
  if (!c) return { error: 'Not signed in.' };
  if (target.stage === nextStage && !extra.force) return { ok: true, unchanged: true };

  const patch = { stage: nextStage, updated_at: new Date().toISOString() };

  /* Leaving PASSED clears the reason: a target that is active again
     has no pass reason, and leaving the old one behind would make the
     row contradict itself. Same for commitment fields on leaving
     COMMITTED. */
  if (nextStage !== 'PASSED') patch.passed_reason = null;
  else if (extra.passedReason !== undefined) patch.passed_reason = extra.passedReason || null;

  if (nextStage !== 'COMMITTED') {
    patch.committed_amount = null;
    patch.committed_currency = null;
    patch.committed_at = null;
  } else if (extra.committedAmount !== undefined) {
    patch.committed_amount = (extra.committedAmount === '' || extra.committedAmount == null)
      ? null : Number(extra.committedAmount);
    patch.committed_currency = extra.committedCurrency || 'USD';
    patch.committed_at = extra.committedAt || new Date().toISOString().slice(0, 10);
  }

  try {
    const { error } = await c.from('pipeline_targets').update(patch).eq('id', target.id);
    if (error) throw error;
  } catch (e) {
    return { error: 'Could not change the stage. ' + (e.message || '') };
  }

  const name = (typeof ptDisplayName === 'function') ? ptDisplayName(target) : target.id;
  await plLogActivity(target.fundraiseId, target.id, 'STAGE_CHANGED',
    name + ': ' + plLabel(PL_STAGES, target.stage) + ' to ' + plLabel(PL_STAGES, nextStage),
    { from: target.stage, to: nextStage });

  if (nextStage === 'COMMITTED') {
    await plLogActivity(target.fundraiseId, target.id, 'COMMITTED', name + ' committed', {});
    if (typeof pbTrack === 'function') pbTrack('pipeline_target_committed');
  }
  if (nextStage === 'PASSED') {
    await plLogActivity(target.fundraiseId, target.id, 'PASSED', name + ' passed',
      extra.passedReason ? { reason: extra.passedReason } : {});
    if (typeof pbTrack === 'function') pbTrack('pipeline_target_passed');
  }
  if (typeof pbTrack === 'function') pbTrack('pipeline_stage_changed');

  if (typeof ptInvalidate === 'function') ptInvalidate(target.fundraiseId);
  return { ok: true };
}

async function plSetRelationship(target, next) {
  const c = plClient();
  if (!c) return { error: 'Not signed in.' };
  if (target.relationship === next) return { ok: true, unchanged: true };
  try {
    const { error } = await c.from('pipeline_targets')
      .update({ relationship: next, updated_at: new Date().toISOString() }).eq('id', target.id);
    if (error) throw error;
  } catch (e) { return { error: 'Could not change that.' }; }

  const name = (typeof ptDisplayName === 'function') ? ptDisplayName(target) : target.id;
  await plLogActivity(target.fundraiseId, target.id, 'RELATIONSHIP_CHANGED',
    name + ': relationship set to ' + plLabel(PL_RELATIONSHIPS, next),
    { from: target.relationship, to: next });
  if (typeof pbTrack === 'function') pbTrack('pipeline_relationship_changed');
  if (typeof ptInvalidate === 'function') ptInvalidate(target.fundraiseId);
  return { ok: true };
}

/* ------------------------------------------------------------
   FIT CONTEXT

   Calls the product's existing Best-Fit Partner evaluation. The ask
   comes from the raise's own startup context, which is stored in
   Power Match's vocabulary precisely so this works without a second
   algorithm.

   The globals are only filled in when Power Match has not been used
   this session, so a founder who just answered there is never
   overridden by an older raise record. Returns null when there is no
   ask to match on, and the column renders empty.
   ------------------------------------------------------------ */

function plHydrateAsk(raise) {
  const ctx = (raise && raise.startupContext) || {};
  try {
    if (typeof finderSectors !== 'undefined' && finderSectors && !finderSectors.size &&
        Array.isArray(ctx.sectors)) {
      ctx.sectors.forEach(function (s) { finderSectors.add(s); });
    }
    if (typeof finderStages !== 'undefined' && finderStages && !finderStages.size &&
        Array.isArray(ctx.stages)) {
      ctx.stages.forEach(function (s) { finderStages.add(s); });
    }
    if (typeof finderRaise !== 'undefined' && finderRaise === 'any' && ctx.raiseBand) {
      finderRaise = ctx.raiseBand;
    }
  } catch (e) {}
}

let plFitCache = {};

function plFitFor(target) {
  if (target.targetType !== 'FIRM' || !target.firmSlug) return null;
  if (plFitCache[target.firmSlug] !== undefined) return plFitCache[target.firmSlug];
  let out = null;
  try {
    if (typeof bfpEvaluate === 'function') {
      const r = bfpEvaluate(target.firmSlug);
      if (r && r.primary) {
        out = { partnerName: r.primary.name || null, partnerSlug: r.primary.slug || null };
      }
    }
  } catch (e) { out = null; }
  plFitCache[target.firmSlug] = out;
  return out;
}

/* ------------------------------------------------------------
   FILTERING AND SORTING
   ------------------------------------------------------------ */

function plVisible(targets) {
  const f = plState.filters;
  const q = (f.q || '').trim().toLowerCase();
  return (targets || []).filter(function (t) {
    /* Passed targets stay in the raise but are out of the way by
       default. They are history, not clutter to delete. */
    if (!plState.showPassed && t.stage === 'PASSED' && f.stage !== 'PASSED') return false;
    if (f.stage && t.stage !== f.stage) return false;
    if (f.type && t.targetType !== f.type) return false;
    if (f.relationship && t.relationship !== f.relationship) return false;
    /* "Needs attention" filters. Overdue is computed, so this is
       always current without a job keeping a flag true. */
    if (f.action === 'overdue' && !(typeof paIsOverdue === 'function' &&
        paIsOverdue(paOpenFor(t.id)))) return false;
    if (f.action === 'has' && !(typeof paOpenFor === 'function' && paOpenFor(t.id))) return false;
    if (f.action === 'none' && (typeof paOpenFor === 'function' && paOpenFor(t.id))) return false;
    if (f.tag) {
      const applied = (typeof pdTagsByTarget !== 'undefined' && pdTagsByTarget[t.id]) || [];
      if (applied.indexOf(f.tag) === -1) return false;
    }
    if (q) {
      const name = ((typeof ptDisplayName === 'function') ? ptDisplayName(t) : '') || '';
      const contacts = (plState.contacts[t.id] || [])
        .map(function (c) { return (typeof ptContactName === 'function') ? ptContactName(c.partnerSlug) : ''; })
        .join(' ');
      if ((name + ' ' + contacts).toLowerCase().indexOf(q) === -1) return false;
    }
    return true;
  });
}

function plStageRank(s) {
  for (let i = 0; i < PL_STAGES.length; i++) if (PL_STAGES[i].key === s) return i;
  return 99;
}

function plLastActivityAt(targetId) {
  const list = plState.activities[targetId];
  if (!list || !list.length) return null;
  return list[0].occurred_at || null;
}

function plSorted(rows) {
  const s = plState.sort, dir = plState.dir === 'asc' ? 1 : -1;
  const copy = rows.slice();
  copy.sort(function (a, b) {
    let av, bv;
    if (s === 'stage') { av = plStageRank(a.stage); bv = plStageRank(b.stage); }
    else if (s === 'name') {
      av = (ptDisplayName(a) || '').toLowerCase(); bv = (ptDisplayName(b) || '').toLowerCase();
      return av < bv ? -dir : av > bv ? dir : 0;
    }
    else if (s === 'activity') {
      av = plLastActivityAt(a.id) || ''; bv = plLastActivityAt(b.id) || '';
      return av < bv ? -dir : av > bv ? dir : 0;
    }
    else { av = a.createdAt || ''; bv = b.createdAt || ''; return av < bv ? -dir : av > bv ? dir : 0; }
    return (av - bv) * dir;
  });
  return copy;
}

function plRelativeDate(iso) {
  if (!iso) return null;
  const then = new Date(iso).getTime();
  if (isNaN(then)) return null;
  const days = Math.floor((Date.now() - then) / 86400000);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return days + 'd ago';
  if (days < 365) return Math.floor(days / 30) + 'mo ago';
  return Math.floor(days / 365) + 'y ago';
}

/* ------------------------------------------------------------
   RENDER
   ------------------------------------------------------------ */

async function renderPipeline() {
  const host = document.getElementById('pipelineView');
  if (!host) return;

  if (typeof isSignedIn !== 'function' || !isSignedIn()) {
    host.innerHTML = '<div class="ds-wrap"><div class="ds-kicker">Raise Pipeline</div>' +
      '<h1 class="ds-h1">Every investor, and where each one stands.</h1>' +
      '<div class="ds-empty"><strong>A pipeline needs an account.</strong> ' +
      'Who you are pursuing and what was said is private to you.</div>' +
      '<p style="margin-top:14px"><a class="ds-btn" href="#signin">Sign in</a></p></div>';
    return;
  }

  host.innerHTML = '<div class="ds-wrap"><div class="ds-kicker">Raise Pipeline</div>' +
    '<h1 class="ds-h1">Every investor, and where each one stands.</h1>' +
    '<div class="ds-empty">Loading your pipeline...</div></div>';

  const raise = (typeof frActive === 'function') ? await frActive() : null;
  if (!raise) {
    host.innerHTML = '<div class="ds-wrap"><div class="ds-kicker">Raise Pipeline</div>' +
      '<h1 class="ds-h1">Every investor, and where each one stands.</h1>' +
      '<div class="fr-empty"><strong>You do not have an active raise yet.</strong>' +
      '<p>A pipeline belongs to a round. Create one, then add investors to it from ' +
      'anywhere in Power Board.</p>' +
      '<a class="ds-btn" href="#raise">Create a raise</a></div></div>';
    return;
  }

  plState.raise = raise;
  plHydrateAsk(raise);
  plFitCache = {};

  const targets = (typeof ptTargets === 'function') ? await ptTargets(raise.id, { force: true }) : [];
  plState.targets = targets;
  if (targets === null) {
    host.innerHTML = '<div class="ds-wrap"><div class="ds-kicker">Raise Pipeline</div>' +
      '<h1 class="ds-h1">Every investor, and where each one stands.</h1>' +
      '<div class="ds-empty"><strong>Could not load your pipeline right now.</strong> ' +
      'Nothing has been lost.</div></div>';
    return;
  }

  plState.contacts = (typeof ptContactsForRaise === 'function')
    ? await ptContactsForRaise(raise.id) : {};
  plState.activities = await plActivitiesForRaise(raise.id);
  /* Tags for the whole raise in one query, and the tag vocabulary
     once. Per-row lookups here would be the N+1 that makes a large
     pipeline crawl. */
  if (typeof pdTagsForRaise === 'function') {
    await pdTagsForRaise((targets || []).map(function (t) { return t.id; }));
    await pdAllTags(true);
  }
  if (typeof paLoadForRaise === 'function') await paLoadForRaise(raise.id);

  plPaint(host);
  if (typeof pbTrack === 'function') pbTrack('pipeline_viewed');
}

function plPaint(host) {
  const raise = plState.raise;
  const all = plState.targets || [];
  const rows = plSorted(plVisible(all));

  const counts = {};
  PL_STAGES.forEach(function (s) { counts[s.key] = 0; });
  all.forEach(function (t) { counts[t.stage] = (counts[t.stage] || 0) + 1; });
  const passedCount = counts.PASSED || 0;
  const activeCount = all.length - passedCount;

  let h = '<div class="ds-wrap pl-wrap">' +
    '<div class="ds-kicker">Raise Pipeline</div>' +
    '<h1 class="ds-h1">Every investor, and where each one stands.</h1>' +
    '<p class="pl-raise-line">' + plEsc(raise.name) +
      (raise.roundStage ? ' <span class="pl-dot">-</span> ' + plEsc(raise.roundStage) : '') +
      ' <a class="ac-act" href="#raise">Change raise</a></p>';

  if (!all.length) {
    h += '<div class="fr-empty"><strong>No investors in this raise yet.</strong>' +
      '<p>Add them from a firm profile, Partner Intelligence, Power Match, the Screener ' +
      'or your Shortlist. Nothing is ever added automatically, so the pipeline only ' +
      'contains investors you chose to pursue.</p>' +
      '<a class="ds-btn" href="#screener">Find investors</a></div></div>';
    host.innerHTML = h;
    plBind(host);
    return;
  }

  /* Stage counts, as a plain row of numbers. A founder wants to know
     how many are in Diligence, not to look at a chart of it. */
  h += '<div class="pl-summary">' + PL_STAGES.map(function (s) {
    const n = counts[s.key] || 0;
    return '<button type="button" class="pl-stat' +
      (plState.filters.stage === s.key ? ' is-on' : '') + '" ' +
      'data-pl-stage-filter="' + s.key + '" title="' + plEsc(s.help) + '">' +
      '<span class="pl-stat-n">' + n + '</span>' +
      '<span class="pl-stat-l">' + plEsc(s.label) + '</span></button>';
  }).join('') + '</div>';

  h += '<div class="pl-bar">' +
    '<input type="search" class="scr-text pl-search" id="plSearch" placeholder="Search this raise" ' +
      'value="' + plEsc(plState.filters.q) + '" aria-label="Search this raise">' +
    '<select class="scr-text pl-sel" data-pl-filter="type" aria-label="Investor type">' +
      '<option value="">All types</option>' +
      '<option value="FIRM"' + (plState.filters.type === 'FIRM' ? ' selected' : '') + '>Firms</option>' +
      '<option value="ANGEL"' + (plState.filters.type === 'ANGEL' ? ' selected' : '') + '>Angels</option>' +
    '</select>' +
    '<select class="scr-text pl-sel" data-pl-filter="relationship" aria-label="Relationship">' +
      '<option value="">Any relationship</option>' +
      PL_RELATIONSHIPS.map(function (r) {
        return '<option value="' + r.key + '"' +
          (plState.filters.relationship === r.key ? ' selected' : '') + '>' + r.label + '</option>';
      }).join('') +
    '</select>' +
    plTagFilter() +
    '<select class="scr-text pl-sel" data-pl-filter="action" aria-label="Next action">' +
      '<option value="">Any next action</option>' +
      '<option value="overdue"' + (plState.filters.action === 'overdue' ? ' selected' : '') + '>Overdue</option>' +
      '<option value="has"' + (plState.filters.action === 'has' ? ' selected' : '') + '>Has one</option>' +
      '<option value="none"' + (plState.filters.action === 'none' ? ' selected' : '') + '>Needs one</option>' +
    '</select>' +
    (passedCount
      ? '<label class="pl-toggle"><input type="checkbox" data-pl-showpassed' +
        (plState.showPassed ? ' checked' : '') + '> Show passed (' + passedCount + ')</label>'
      : '') +
    '<span class="pl-count">' + rows.length + ' of ' + activeCount + ' active</span>' +
  '</div>';

  if (!rows.length) {
    h += '<div class="ds-empty"><strong>Nothing matches those filters.</strong> ' +
      'Clear them to see the rest of the raise.</div></div>';
    host.innerHTML = h;
    plBind(host);
    return;
  }

  h += '<div class="pl-tablewrap"><table class="pl-table"><thead><tr>' +
    plTh('name', 'Investor') +
    '<th scope="col">Type</th>' +
    '<th scope="col">Primary contact</th>' +
    plTh('stage', 'Stage') +
    '<th scope="col">Relationship</th>' +
    '<th scope="col">Best-fit partner</th>' +
    '<th scope="col">Tags</th>' +
    '<th scope="col">Next action</th>' +
    plTh('activity', 'Last activity') +
    '<th scope="col"><span class="pl-sr">Actions</span></th>' +
  '</tr></thead><tbody>' + rows.map(plRow).join('') + '</tbody></table></div>';

  h += '</div>';
  host.innerHTML = h;
  plBind(host);
}

/* Only offers tags the founder has actually created. An empty
   vocabulary shows no control rather than an empty dropdown. */
function plTagFilter() {
  const tags = (typeof pdTagCache !== 'undefined' && pdTagCache) ? pdTagCache : [];
  if (!tags.length) return '';
  return '<select class="scr-text pl-sel" data-pl-filter="tag" aria-label="Tag">' +
    '<option value="">Any tag</option>' +
    tags.map(function (t) {
      return '<option value="' + plEsc(t.id) + '"' +
        (plState.filters.tag === t.id ? ' selected' : '') + '>' + plEsc(t.label) + '</option>';
    }).join('') + '</select>';
}

/* The one thing a founder scans this column for is what is late, so
   overdue is the only state that gets a colour. Everything else is
   plain text. */
function plNextCell(t) {
  if (typeof paOpenFor !== 'function') return '<span class="pl-none">-</span>';
  const a = paOpenFor(t.id);
  if (!a) return '<span class="pl-none">-</span>';
  const overdue = paIsOverdue(a);
  const due = paDueLabel(a);
  return '<span class="pl-next-body">' + plEsc(a.body) + '</span>' +
    (due ? '<span class="pl-next-due' + (overdue ? ' is-overdue' : '') + '">' +
      plEsc(due) + '</span>' : '');
}

function plTagCells(t) {
  const ids = (typeof pdTagsByTarget !== 'undefined' && pdTagsByTarget[t.id]) || [];
  if (!ids.length) return '<span class="pl-none">-</span>';
  return ids.map(function (id) {
    const lb = (typeof pdTagLabel === 'function') ? pdTagLabel(id) : null;
    return lb ? '<span class="pl-tag">' + plEsc(lb) + '</span>' : '';
  }).join('');
}

function plTh(key, label) {
  const on = plState.sort === key;
  const next = (on && plState.dir === 'desc') ? 'asc' : 'desc';
  return '<th scope="col"><button type="button" class="pl-sort' + (on ? ' is-on' : '') + '" ' +
    'data-pl-sort="' + key + '" data-pl-dir="' + next + '" ' +
    'aria-sort="' + (on ? (plState.dir === 'asc' ? 'ascending' : 'descending') : 'none') + '">' +
    plEsc(label) + '</button></th>';
}

function plRow(t) {
  const name = (typeof ptDisplayName === 'function') ? ptDisplayName(t) : t.id;
  const contacts = plState.contacts[t.id] || [];
  const primary = (typeof ptPrimaryOf === 'function') ? ptPrimaryOf(contacts) : contacts[0];
  const fit = plFitFor(t);
  const last = plLastActivityAt(t.id);
  const lastLabel = plRelativeDate(last);
  const money = (t.committedAmount != null && typeof frMoney === 'function')
    ? frMoney(t.committedAmount, t.committedCurrency) : null;

  const href = t.targetType === 'FIRM'
    ? '#' + plEsc(t.firmSlug)
    : '#capital-source/' + plEsc(t.personId);

  return '<tr class="pl-row' + (t.stage === 'PASSED' ? ' is-passed' : '') + '" data-pl-id="' + plEsc(t.id) + '">' +
    '<td class="pl-name">' +
      (t.priority ? '<span class="pl-pri pl-pri-' + plEsc(t.priority.toLowerCase()) +
        '" title="' + plEsc(t.priority) + ' priority" aria-label="' +
        plEsc(t.priority) + ' priority"></span>' : '') +
      '<a href="' + href + '">' + plEsc(name) + '</a>' +
      (money ? '<span class="pl-committed">' + plEsc(money) + '</span>' : '') +
      (t.stage === 'PASSED' && t.passedReason
        ? '<span class="pl-reason">' + plEsc(plLabel(PL_PASSED_REASONS, t.passedReason)) + '</span>'
        : '') +
    '</td>' +
    '<td class="pl-type">' + (t.targetType === 'FIRM' ? 'Firm' : 'Angel') + '</td>' +
    '<td class="pl-contact">' +
      (primary
        ? plEsc((typeof ptContactName === 'function') ? ptContactName(primary.partnerSlug) : primary.partnerSlug) +
          (contacts.length > 1 ? '<span class="pl-more">+' + (contacts.length - 1) + '</span>' : '')
        : (t.targetType === 'FIRM' ? '<span class="pl-none">None yet</span>' : '<span class="pl-none">-</span>')) +
    '</td>' +
    '<td class="pl-stagecell">' + plStageSelect(t) + '</td>' +
    '<td class="pl-relcell">' + plRelSelect(t) + '</td>' +
    '<td class="pl-fit">' +
      (fit && fit.partnerName ? plEsc(fit.partnerName) : '<span class="pl-none">-</span>') +
    '</td>' +
    '<td class="pl-tags">' + plTagCells(t) + '</td>' +
    '<td class="pl-next">' + plNextCell(t) + '</td>' +
    '<td class="pl-last">' + (lastLabel ? plEsc(lastLabel) : '<span class="pl-none">-</span>') + '</td>' +
    '<td class="pl-actions">' +
      '<button type="button" class="ac-act" data-pl-open="' + plEsc(t.id) + '">Open</button>' +
      '<button type="button" class="ac-act ac-act-quiet" data-pl-remove="' + plEsc(t.id) + '">Remove</button>' +
    '</td>' +
  '</tr>';
}

/* A select, not a drag target. It is operable by keyboard, works on a
   phone, states the current stage in text, and needs no separate
   accessible alternative because it is already the accessible one. */
function plStageSelect(t) {
  return '<select class="pl-stage-sel" data-pl-stage="' + plEsc(t.id) + '" ' +
    'aria-label="Stage for ' + plEsc(ptDisplayName(t) || '') + '">' +
    PL_STAGES.map(function (s) {
      return '<option value="' + s.key + '"' + (t.stage === s.key ? ' selected' : '') + '>' +
        plEsc(s.label) + '</option>';
    }).join('') + '</select>';
}

function plRelSelect(t) {
  return '<select class="pl-rel-sel" data-pl-rel="' + plEsc(t.id) + '" ' +
    'aria-label="Relationship with ' + plEsc(ptDisplayName(t) || '') + '">' +
    PL_RELATIONSHIPS.map(function (r) {
      return '<option value="' + r.key + '"' + (t.relationship === r.key ? ' selected' : '') + '>' +
        plEsc(r.label) + '</option>';
    }).join('') + '</select>';
}

/* ------------------------------------------------------------
   EVENTS
   ------------------------------------------------------------ */

function plFind(id) {
  return (plState.targets || []).filter(function (t) { return t.id === id; })[0] || null;
}

function plBind(host) {
  if (host.dataset.plBound) return;
  host.dataset.plBound = '1';

  host.addEventListener('change', async function (e) {
    const st = e.target.closest('[data-pl-stage]');
    if (st) {
      const t = plFind(st.getAttribute('data-pl-stage'));
      if (!t) return;
      const next = st.value;
      if (next === 'PASSED' || next === 'COMMITTED') { plOpenOutcome(t, next); return; }
      const r = await plSetStage(t, next);
      if (r.error) { if (typeof ptToast === 'function') ptToast(r.error); }
      renderPipeline();
      return;
    }
    const rel = e.target.closest('[data-pl-rel]');
    if (rel) {
      const t = plFind(rel.getAttribute('data-pl-rel'));
      if (!t) return;
      const r = await plSetRelationship(t, rel.value);
      if (r.error && typeof ptToast === 'function') ptToast(r.error);
      renderPipeline();
      return;
    }
    const f = e.target.closest('[data-pl-filter]');
    if (f) {
      plState.filters[f.getAttribute('data-pl-filter')] = f.value;
      if (typeof pbTrack === 'function') pbTrack('pipeline_filtered');
      plPaint(host);
      return;
    }
    if (e.target.closest('[data-pl-showpassed]')) {
      plState.showPassed = e.target.checked;
      plPaint(host);
      return;
    }
  });

  host.addEventListener('input', function (e) {
    if (e.target.id === 'plSearch') {
      plState.filters.q = e.target.value;
      plPaint(host);
      const el = document.getElementById('plSearch');
      if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); }
    }
  });

  host.addEventListener('click', async function (e) {
    const sf = e.target.closest('[data-pl-stage-filter]');
    if (sf) {
      const k = sf.getAttribute('data-pl-stage-filter');
      plState.filters.stage = (plState.filters.stage === k) ? '' : k;
      if (typeof pbTrack === 'function') pbTrack('pipeline_filtered');
      plPaint(host);
      return;
    }
    const so = e.target.closest('[data-pl-sort]');
    if (so) {
      plState.sort = so.getAttribute('data-pl-sort');
      plState.dir = so.getAttribute('data-pl-dir');
      plPaint(host);
      return;
    }
    const op = e.target.closest('[data-pl-open]');
    if (op && typeof pdOpen === 'function') { pdOpen(op.getAttribute('data-pl-open')); return; }

    const rm = e.target.closest('[data-pl-remove]');
    if (rm) {
      const t = plFind(rm.getAttribute('data-pl-remove'));
      if (!t) return;
      const name = ptDisplayName(t) || 'this investor';
      const ok = window.confirm(
        'Remove ' + name + ' from this raise?\n\n' +
        'Their stage, contacts and history in this raise are deleted. This does not ' +
        'touch your Shortlist, your saved searches, or anything in Power Board research.'
      );
      if (!ok) return;
      const r = await ptRemoveTarget(plState.raise.id, t.id);
      if (r.error && typeof ptToast === 'function') ptToast(r.error);
      renderPipeline();
      return;
    }
  });
}

/* ------------------------------------------------------------
   OUTCOME PANEL

   Committing and passing are the two transitions worth a moment of
   friction, because both carry optional detail that is very hard to
   reconstruct later. Both fields are optional, and skipping them
   still records the stage change.
   ------------------------------------------------------------ */

function plOpenOutcome(target, stage) {
  const isCommit = stage === 'COMMITTED';
  const name = ptDisplayName(target) || '';
  const el = document.createElement('div');
  el.className = 'scr-modal';
  el.innerHTML = '<div class="scr-modal-bd" data-pl-close="1"></div>' +
    '<div class="scr-modal-panel" role="dialog" aria-modal="true" aria-label="' +
      (isCommit ? 'Record commitment' : 'Record pass') + '">' +
    '<div class="scr-modal-head">' + (isCommit ? 'Committed' : 'Passed') +
      '<button type="button" class="scr-esc" data-pl-close="1">Esc</button></div>' +
    '<div class="scr-modal-body">' +
      '<p class="ss-explain">' + plEsc(name) + ' moves to ' +
        (isCommit ? 'Committed' : 'Passed') + '. Everything below is optional - ' +
        'the stage change is recorded either way.</p>' +
      (isCommit
        ? '<div class="fr-row">' +
            '<label class="fr-field"><span class="fr-label">Amount</span>' +
              '<input id="plAmt" class="scr-text" type="number" min="0" step="any" ' +
              'inputmode="decimal" placeholder="Leave blank if not agreed"></label>' +
            '<label class="fr-field"><span class="fr-label">Currency</span>' +
              '<select id="plCur" class="scr-text">' +
              (typeof FR_CURRENCIES !== 'undefined' ? FR_CURRENCIES : ['USD']).map(function (c) {
                return '<option value="' + c + '"' +
                  ((plState.raise && plState.raise.currency) === c ? ' selected' : '') + '>' + c + '</option>';
              }).join('') + '</select></label>' +
          '</div>' +
          '<label class="fr-field"><span class="fr-label">Date</span>' +
            '<input id="plDate" class="scr-text" type="date" value="' +
            new Date().toISOString().slice(0, 10) + '"></label>' +
          '<p class="fr-note">Amounts are private to you. Nothing here is published, ' +
          'aggregated for anyone else, or added to Power Board research.</p>'
        : '<label class="fr-field"><span class="fr-label">Reason ' +
            '<span class="fr-optional">optional</span></span>' +
            '<select id="plReason" class="scr-text">' +
              '<option value="">Not recorded</option>' +
              PL_PASSED_REASONS.map(function (r) {
                return '<option value="' + r.key + '">' + r.label + '</option>';
              }).join('') + '</select></label>' +
          '<p class="fr-note">Passed investors stay in the raise. Who passed and why is ' +
          'the most useful thing you have when you raise again.</p>') +
      '<div class="fr-form-actions">' +
        '<button type="button" class="ds-btn" data-pl-confirm="1">' +
          (isCommit ? 'Record commitment' : 'Record pass') + '</button>' +
        '<button type="button" class="ac-act ac-act-quiet" data-pl-close="1">Cancel</button>' +
      '</div>' +
    '</div></div>';
  document.body.appendChild(el);

  el.addEventListener('click', async function (e) {
    if (e.target.closest('[data-pl-close]')) {
      el.remove();
      renderPipeline();          // put the select back to the real stage
      return;
    }
    if (!e.target.closest('[data-pl-confirm]')) return;
    const extra = isCommit
      ? {
          committedAmount: (document.getElementById('plAmt').value || '').trim(),
          committedCurrency: document.getElementById('plCur').value,
          committedAt: document.getElementById('plDate').value || null
        }
      : { passedReason: document.getElementById('plReason').value || null };
    const r = await plSetStage(target, stage, extra);
    el.remove();
    if (r.error && typeof ptToast === 'function') ptToast(r.error);
    renderPipeline();
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PL_STAGES: PL_STAGES, PL_RELATIONSHIPS: PL_RELATIONSHIPS,
    plVisible: plVisible, plSorted: plSorted, plRelativeDate: plRelativeDate,
    plStageRank: plStageRank, plLabel: plLabel
  };
}
