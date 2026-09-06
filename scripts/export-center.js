/* ============================================================
   EXPORT-CENTER.JS
   Phase 6F. Getting your pipeline out of Power Board.

   WHY PRIVATE NOTES ARE OFF BY DEFAULT

   The Account page already has an export: a JSON file with every row
   the account owns, which is the portability copy the Privacy Policy
   promises. That one is FOR YOU, and it includes everything.

   This is a different thing with a different destination. A pipeline
   spreadsheet gets sent to a co-founder, attached to a board update,
   or dropped in a shared drive. A note saying "partner was lukewarm,
   probably a no" is the founder's private judgement and it should
   not travel by accident inside a file whose obvious purpose is a
   list of investors and stages.

   So the export has a shareable core, and four groups that are each
   off until switched on, with what they contain written next to
   them. Nothing is hidden; it is just not the default.

   WHAT AUTHORISES THE READ

   Row Level Security, and nothing in this file. Every Phase 4 table
   carries a policy of user_id = auth.uid(), so the export issues
   plain selects and the database returns only rows belonging to the
   signed-in account. No filter here is load-bearing: this code could
   not read another founder's pipeline if it tried, and it does not
   try. The anon key is in the page source, so client-side filtering
   would be decoration.

   WHAT IS NOT IN HERE

   There are no investor email addresses or phone numbers, because
   the product never stored any. pipeline_contacts holds a partner
   slug, which is a public identifier that resolves to a name already
   on the site. So this export cannot leak an investor's personal
   contact details, and it does not claim to carry them.
   ============================================================ */

const XP_GROUPS = [
  {
    key: 'notes', label: 'Private notes',
    what: 'The full text of every note you have written about an investor.',
    why: 'This is your own judgement about people, written for yourself.'
  },
  {
    key: 'actions', label: 'Next actions',
    what: 'Your to-do text against each investor, with due and completed dates.',
    why: 'Reads as a running commentary on how each conversation is going.'
  },
  {
    key: 'amounts', label: 'Commitment amounts',
    what: 'How much each committed investor has committed, and in what currency.',
    why: 'Your position in the round, investor by investor.'
  },
  {
    key: 'passed', label: 'Pass reasons',
    what: 'Why each investor is recorded as passed.',
    why: 'Sometimes your read on them rather than what they told you.'
  }
];

let xpState = {
  include: { notes: false, actions: false, amounts: false, passed: false },
  format: 'csv',
  busy: false
};

function xpEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function xpClient() {
  return (typeof plClient === 'function') ? plClient()
       : (typeof sbClient === 'function') ? sbClient() : null;
}

/* The public display name for a target. Firms and angels resolve
   through the same registries the rest of the site uses, so an export
   and a page never disagree about what an investor is called. */
function xpTargetName(t) {
  if (t.targetType === 'FIRM') {
    const f = (typeof ptFirm === 'function') ? ptFirm(t.firmSlug) : null;
    return f ? f.name : (t.firmSlug || '');
  }
  if (typeof CAPITAL_SOURCES !== 'undefined' && t.personId && CAPITAL_SOURCES[t.personId]) {
    return CAPITAL_SOURCES[t.personId].name || t.personId;
  }
  return t.personId || '';
}

function xpPartnerName(slug) {
  if (typeof partnerProfiles !== 'undefined' && partnerProfiles[slug]) {
    return partnerProfiles[slug].name || slug;
  }
  return slug;
}

function xpLabel(list, key) {
  return (typeof plLabel === 'function' && list) ? plLabel(list, key) : key;
}

/* ------------------------------------------------------------
   BUILD THE SHEETS
   ------------------------------------------------------------ */

async function xpGather(raise, include) {
  const c = xpClient();
  const out = { targets: [], contacts: [], notes: [], actions: [], tags: {}, failed: [] };
  if (!c || !raise) return out;

  out.targets = (typeof ptTargets === 'function') ? (await ptTargets(raise.id)) || [] : [];

  async function grab(table, cols, key) {
    try {
      const { data, error } = await c.from(table).select(cols).eq('fundraise_id', raise.id);
      if (error) throw error;
      return data || [];
    } catch (e) {
      /* A group that could not be read is named in the file, never
         silently dropped. A missing column in an export reads as "I
         have no notes", which is a different statement. */
      out.failed.push(key);
      return [];
    }
  }

  /* contacts have no fundraise_id, so they are fetched by target */
  try {
    const ids = out.targets.map(function (t) { return t.id; });
    if (ids.length) {
      const { data, error } = await c.from('pipeline_contacts')
        .select('target_id,partner_slug,is_primary,role_note').in('target_id', ids);
      if (error) throw error;
      out.contacts = data || [];
    }
  } catch (e) { out.failed.push('contacts'); }

  if (include.notes)   out.notes   = await grab('pipeline_notes', 'target_id,body,created_at', 'notes');
  if (include.actions) out.actions = await grab('pipeline_next_actions',
    'target_id,body,due_at,completed_at,created_at', 'actions');

  try {
    const { data } = await c.from('pipeline_target_tags').select('target_id,tag_id');
    const { data: tags } = await c.from('pipeline_tags').select('id,label');
    const byId = {};
    (tags || []).forEach(function (t) { byId[t.id] = t.label; });
    (data || []).forEach(function (r) {
      (out.tags[r.target_id] = out.tags[r.target_id] || []).push(byId[r.tag_id] || r.tag_id);
    });
  } catch (e) { /* tags are decoration on this sheet, not a group */ }

  return out;
}

function xpPipelineSheet(data, include) {
  const head = ['Investor', 'Type', 'Identifier', 'Stage', 'Relationship', 'Priority',
                'Partners', 'Tags', 'Added from', 'Added on', 'Last updated'];
  if (include.amounts) head.push('Committed amount', 'Currency', 'Committed on');
  if (include.passed)  head.push('Pass reason');

  const byTarget = {};
  data.contacts.forEach(function (c) {
    (byTarget[c.target_id] = byTarget[c.target_id] || []).push(
      xpPartnerName(c.partner_slug) + (c.is_primary ? ' (primary)' : ''));
  });

  const rows = [head];
  data.targets.forEach(function (t) {
    const row = [
      xpTargetName(t),
      t.targetType === 'FIRM' ? 'Firm' : 'Angel',
      t.firmSlug || t.personId || '',
      xpLabel(typeof PL_STAGES !== 'undefined' ? PL_STAGES : null, t.stage),
      xpLabel(typeof PL_RELATIONSHIPS !== 'undefined' ? PL_RELATIONSHIPS : null, t.relationship),
      t.priority || '',
      (byTarget[t.id] || []).join('; '),
      (data.tags[t.id] || []).join('; '),
      t.addedFrom || '',
      t.createdAt || '',
      t.updatedAt || ''
    ];
    if (include.amounts) {
      /* Blank is not zero. An investor who committed without an
         amount recorded gets an empty cell, and a reader who sums the
         column gets a total over the amounts that exist rather than a
         total that silently treats unknowns as nothing. */
      row.push(t.committedAmount == null ? '' : t.committedAmount,
               t.committedAmount == null ? '' : (t.committedCurrency || 'USD'),
               t.committedAt || '');
    }
    if (include.passed) {
      row.push(t.passedReason
        ? xpLabel(typeof PL_PASSED_REASONS !== 'undefined' ? PL_PASSED_REASONS : null, t.passedReason)
        : '');
    }
    rows.push(row);
  });
  return { name: 'Pipeline', rows: rows };
}

function xpNotesSheet(data) {
  const names = {};
  data.targets.forEach(function (t) { names[t.id] = xpTargetName(t); });
  const rows = [['Investor', 'Note', 'Written on']];
  data.notes.forEach(function (n) {
    rows.push([names[n.target_id] || n.target_id || '', n.body || '', n.created_at || '']);
  });
  return { name: 'Private notes', rows: rows };
}

function xpActionsSheet(data) {
  const names = {};
  data.targets.forEach(function (t) { names[t.id] = xpTargetName(t); });
  const rows = [['Investor', 'Next action', 'Due', 'Completed', 'Created']];
  data.actions.forEach(function (a) {
    rows.push([names[a.target_id] || a.target_id || '', a.body || '',
               a.due_at || '', a.completed_at || '', a.created_at || '']);
  });
  return { name: 'Next actions', rows: rows };
}

/* Every export carries this. A spreadsheet outlives the page it came
   from, and six months later nobody remembers whether the file was
   the whole pipeline or a filtered view. */
function xpAboutSheet(data, include, raise) {
  const rows = [['Field', 'Value']];
  rows.push(['Exported from', 'The VC Power Board']);
  rows.push(['Exported at', new Date().toISOString()]);
  rows.push(['Investors in this file', String(data.targets.length)]);
  rows.push(['Scope', 'One raise. Every investor in it, not a filtered view.']);
  XP_GROUPS.forEach(function (g) {
    /* A group that was asked for and could not be read says so on its
       own line. Plain "Yes" beside a separate failure note reads as
       "the notes are in here", which is the opposite of true. */
    const asked = include[g.key];
    const broke = data.failed.indexOf(g.key) !== -1;
    rows.push([g.label + ' included',
      !asked ? 'No' : (broke ? 'Requested, but could not be read. Not in this file.' : 'Yes')]);
  });
  if (data.failed.length) {
    rows.push(['Could not be read', data.failed.join(', ') +
      '. These are missing because the read failed, not because they are empty.']);
  }
  rows.push(['Note', 'This file contains only data from your own account.']);
  return { name: 'About this export', rows: rows };
}

function xpBuildSheets(data, include, raise) {
  const sheets = [xpPipelineSheet(data, include)];
  if (include.notes)   sheets.push(xpNotesSheet(data));
  if (include.actions) sheets.push(xpActionsSheet(data));
  sheets.push(xpAboutSheet(data, include, raise));
  return sheets;
}

/* ------------------------------------------------------------
   RUN
   ------------------------------------------------------------ */

async function xpRun() {
  if (xpState.busy) return;
  const btn = document.getElementById('xpGo');
  const status = document.getElementById('xpStatus');
  xpState.busy = true;
  if (btn) { btn.disabled = true; btn.textContent = 'Preparing'; }

  try {
    const raise = (typeof frActive === 'function') ? await frActive() : null;
    if (!raise) {
      if (status) status.textContent = 'No active raise to export.';
      return;
    }
    const data = await xpGather(raise, xpState.include);
    if (!data.targets.length) {
      if (status) status.textContent = 'This raise has no investors in it yet.';
      return;
    }
    const sheets = xpBuildSheets(data, xpState.include, raise);
    const base = 'power-board-pipeline-' + new Date().toISOString().slice(0, 10);

    if (xpState.format === 'xlsx') {
      xcDownloadXlsx(base, sheets);
    } else {
      /* CSV is one table by definition. Exporting the pipeline sheet
         alone and saying so beats writing several files, or worse,
         stacking sheets into one csv with blank rows between them,
         which no spreadsheet reads back correctly. */
      xcDownloadCsv(base, sheets[0].rows);
    }

    if (status) {
      status.textContent = data.failed.length
        ? 'Exported ' + data.targets.length + ' investors. Some data could not be read and is named in the file.'
        : 'Exported ' + data.targets.length + ' investors.';
    }
    if (typeof pbTrack === 'function') {
      pbTrack('pipeline_exported');
      /* That a sensitive group was included is recorded; which
         investors, what the notes say and how much was committed
         never leave the browser. */
      if (xpState.include.notes) pbTrack('export_included_private_notes');
    }
  } catch (e) {
    if (status) status.textContent = 'The export could not be completed. Nothing was downloaded.';
  } finally {
    xpState.busy = false;
    if (btn) { btn.disabled = false; btn.textContent = 'Download export'; }
  }
}

/* ------------------------------------------------------------
   RENDER
   ------------------------------------------------------------ */

async function renderExportCenter() {
  const host = document.getElementById('exportView');
  if (!host) return;

  if (typeof isSignedIn !== 'function' || !isSignedIn()) {
    host.innerHTML = xpShell(
      '<p class="xp-empty">Exporting reads your own pipeline, so it needs you signed in.</p>' +
      '<p class="xp-empty"><a class="ds-btn" href="#signin">Sign in</a></p>');
    return;
  }

  const on = XP_GROUPS.filter(function (g) { return xpState.include[g.key]; });

  let h = '<h2 class="xp-h">What goes in the file</h2>' +
    '<p class="xp-sub">Every investor in your active raise is included, with the stage, ' +
    'relationship, partners, tags and dates. The four groups below are the ones worth ' +
    'thinking about before you send the file to anyone.</p>' +

    '<div class="xp-groups">' + XP_GROUPS.map(function (g) {
      const checked = xpState.include[g.key];
      return '<label class="xp-group' + (checked ? ' is-on' : '') + '">' +
        '<input type="checkbox" data-xp-group="' + g.key + '"' + (checked ? ' checked' : '') + '>' +
        '<span class="xp-group-body">' +
          '<span class="xp-group-label">' + xpEsc(g.label) + '</span>' +
          '<span class="xp-group-what">' + xpEsc(g.what) + '</span>' +
          '<span class="xp-group-why">' + xpEsc(g.why) + '</span>' +
        '</span></label>';
    }).join('') + '</div>';

  /* The warning appears only once something sensitive is on, and it
     names what is on rather than warning in general. A banner that is
     always there is furniture and stops being read. */
  if (on.length) {
    h += '<p class="xp-warn"><strong>This file will contain ' +
      xpEsc(on.map(function (g) { return g.label.toLowerCase(); }).join(', ')) +
      '.</strong> Worth a second look before it goes to anyone outside your company.</p>';
  }

  h += '<h2 class="xp-h">Format</h2>' +
    '<div class="xp-fmt">' +
      '<label class="xp-radio"><input type="radio" name="xpfmt" value="csv"' +
        (xpState.format === 'csv' ? ' checked' : '') + '> ' +
        '<span>CSV<em>One table. Opens anywhere.</em></span></label>' +
      '<label class="xp-radio"><input type="radio" name="xpfmt" value="xlsx"' +
        (xpState.format === 'xlsx' ? ' checked' : '') + '> ' +
        '<span>Excel<em>Separate tabs for notes and actions.</em></span></label>' +
    '</div>';

  if (xpState.format === 'csv' && (xpState.include.notes || xpState.include.actions)) {
    h += '<p class="xp-note">A CSV is a single table, so notes and next actions cannot have ' +
      'their own tabs in it. Choose Excel to get them, or export the pipeline as CSV and ' +
      'accept that those two groups will not be in the file.</p>';
  }

  h += '<p class="xp-actions"><button type="button" class="ds-btn" id="xpGo">Download export</button>' +
    '<span class="xp-status" id="xpStatus" role="status"></span></p>' +

    '<p class="xp-note">Values are written as text, including anything that looks like a ' +
    'number or a date, so a firm called 3i stays 3i and a date is not rewritten by your ' +
    'spreadsheet. A cell beginning with an equals sign is prefixed with an apostrophe so ' +
    'that a note you typed cannot run as a formula on someone else\'s machine.</p>' +

    '<p class="xp-note">Looking for a copy of everything in your account rather than one ' +
    'raise? <a href="#account">Account settings</a> has a full JSON export, and it includes ' +
    'every group above.</p>';

  host.innerHTML = xpShell(h);
  xpBind(host);
  if (typeof pbTrack === 'function') pbTrack('export_center_opened');
}

function xpShell(inner) {
  return '<div class="ds-wrap xp-wrap">' +
    '<div class="ds-kicker">Export</div>' +
    '<h1 class="ds-h1">Take your pipeline with you.</h1>' +
    '<p class="ds-sub">Your active raise, as a spreadsheet. Your data is yours and there is ' +
    'no limit on taking it out.</p>' +
    '<div class="xp-scope"><strong>Private notes are not included unless you switch them on.</strong> ' +
    'A pipeline file tends to get forwarded, and your own notes about people are the part ' +
    'you are least likely to have meant to send. Everything else about each investor is ' +
    'included by default.</div>' +
    inner + '</div>';
}

function xpBind(host) {
  if (host.dataset.xpBound) return;
  host.dataset.xpBound = '1';

  host.addEventListener('change', function (e) {
    const g = e.target.getAttribute && e.target.getAttribute('data-xp-group');
    if (g) {
      xpState.include[g] = !!e.target.checked;
      renderExportCenter();
      return;
    }
    if (e.target.name === 'xpfmt') {
      xpState.format = e.target.value;
      renderExportCenter();
    }
  });

  host.addEventListener('click', function (e) {
    if (e.target.id === 'xpGo') xpRun();
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    XP_GROUPS: XP_GROUPS, xpPipelineSheet: xpPipelineSheet, xpNotesSheet: xpNotesSheet,
    xpActionsSheet: xpActionsSheet, xpAboutSheet: xpAboutSheet, xpBuildSheets: xpBuildSheets
  };
}
