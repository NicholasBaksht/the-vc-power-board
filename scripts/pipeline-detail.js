/* ============================================================
   PIPELINE-DETAIL.JS
   Phase 4D. One investor, opened: notes, tags, priority, intro
   source and the contacts you are actually talking to.

   WHY A PANEL AND NOT MORE COLUMNS

   The pipeline table answers "where does everything stand". This
   answers "what do I know about this one". Putting notes and tags and
   intro paths into the table would destroy the density that makes the
   table useful, and still not have room for the note.

   RELATIONSHIP IS DECLARED, NEVER INFERRED

   Nothing here upgrades a relationship on the founder's behalf. Two
   people being in Network is not warmth. A follow is not an intro.
   Recording an intro source does not move the relationship to
   INTRO_MADE - the founder says when an intro was actually made,
   because only they know whether the email was sent. A system that
   guesses this is worse than one that asks, because a founder acting
   on a false "warm" wastes the one shot they had.

   PRIVATE TEXT IS PRIVATE TEXT

   Notes live in their own owner-only table. They are never copied
   into the activity feed, never indexed by Global Search or the
   Screener, never attached to a public profile, and never sent to
   analytics. The feed records THAT a note was written; the words stay
   here.

   AND TYPING A NAME DOES NOT CREATE A PERSON

   An intro source can link to someone already in the research or
   Network datasets. Everyone else is private free text. Writing
   "my old boss Dana" into a private field must never put a Dana into
   the canonical person dataset.
   ============================================================ */

const PD_PRIORITIES = [
  { key: '',       label: 'None' },
  { key: 'HIGH',   label: 'High' },
  { key: 'MEDIUM', label: 'Medium' },
  { key: 'LOW',    label: 'Low' }
];

let pdTagCache = null;      // the user's whole tag vocabulary
let pdTagsByTarget = {};    // targetId -> [tagId]

function pdClient() {
  return (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null;
}

function pdEsc(s) { return (typeof ptEsc === 'function') ? ptEsc(s) : String(s == null ? '' : s); }

function pdId(p) {
  return (p || 'pd') + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function pdWhen(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }) +
    ' ' + d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
}

/* ------------------------------------------------------------
   TAGS
   ------------------------------------------------------------ */

async function pdAllTags(force) {
  if (pdTagCache && !force) return pdTagCache;
  const c = pdClient();
  if (!c) return [];
  try {
    const { data, error } = await c.from('pipeline_tags')
      .select('*').order('label', { ascending: true });
    if (error) throw error;
    pdTagCache = (data || []).map(function (r) { return { id: r.id, label: r.label }; });
  } catch (e) { pdTagCache = []; }
  return pdTagCache;
}

/* One query for the whole raise, not one per row. */
async function pdTagsForRaise(targetIds) {
  const c = pdClient();
  if (!c || !targetIds || !targetIds.length) return {};
  try {
    const { data, error } = await c.from('pipeline_target_tags')
      .select('target_id, tag_id').in('target_id', targetIds);
    if (error) throw error;
    const by = {};
    (data || []).forEach(function (r) {
      (by[r.target_id] = by[r.target_id] || []).push(r.tag_id);
    });
    pdTagsByTarget = by;
    return by;
  } catch (e) { return {}; }
}

/* Creates the tag if the founder has not used that word before,
   otherwise reuses it. Matching is case-insensitive so "NYC" and
   "nyc" do not become two tags that look identical and filter
   differently. */
async function pdEnsureTag(label) {
  const clean = String(label || '').trim().slice(0, 40);
  if (!clean) return { error: 'Give the tag a name.' };
  const all = await pdAllTags(true);
  const hit = all.filter(function (t) {
    return t.label.toLowerCase() === clean.toLowerCase();
  })[0];
  if (hit) return { id: hit.id, label: hit.label, created: false };

  const c = pdClient();
  const row = { id: pdId('tg'), label: clean };
  try {
    const { error } = await c.from('pipeline_tags').insert(row);
    if (error) throw error;
  } catch (e) {
    /* The unique index fired: another tab created the same word
       first. Re-read and use theirs rather than reporting an error
       for something that already worked out. */
    const again = await pdAllTags(true);
    const found = again.filter(function (t) {
      return t.label.toLowerCase() === clean.toLowerCase();
    })[0];
    if (found) return { id: found.id, label: found.label, created: false };
    return { error: 'Could not create that tag.' };
  }
  pdTagCache = null;
  if (typeof pbTrack === 'function') pbTrack('pipeline_tag_created');
  return { id: row.id, label: clean, created: true };
}

async function pdApplyTag(targetId, tagId) {
  const c = pdClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.from('pipeline_target_tags')
      .insert({ target_id: targetId, tag_id: tagId });
    if (error && !/duplicate key/.test(error.message || '')) throw error;
  } catch (e) { return { error: 'Could not apply that tag.' }; }
  (pdTagsByTarget[targetId] = pdTagsByTarget[targetId] || []);
  if (pdTagsByTarget[targetId].indexOf(tagId) === -1) pdTagsByTarget[targetId].push(tagId);
  if (typeof pbTrack === 'function') pbTrack('pipeline_tag_applied');
  return { ok: true };
}

async function pdRemoveTag(targetId, tagId) {
  const c = pdClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.from('pipeline_target_tags')
      .delete().eq('target_id', targetId).eq('tag_id', tagId);
    if (error) throw error;
  } catch (e) { return { error: 'Could not remove that tag.' }; }
  if (pdTagsByTarget[targetId]) {
    pdTagsByTarget[targetId] = pdTagsByTarget[targetId].filter(function (x) { return x !== tagId; });
  }
  if (typeof pbTrack === 'function') pbTrack('pipeline_tag_removed');
  return { ok: true };
}

function pdTagLabel(tagId) {
  const hit = (pdTagCache || []).filter(function (t) { return t.id === tagId; })[0];
  return hit ? hit.label : null;
}

/* ------------------------------------------------------------
   NOTES
   ------------------------------------------------------------ */

async function pdNotes(targetId) {
  const c = pdClient();
  if (!c) return [];
  try {
    const { data, error } = await c.from('pipeline_notes')
      .select('*').eq('target_id', targetId).order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  } catch (e) { return null; }
}

async function pdAddNote(fundraiseId, targetId, body) {
  const clean = String(body || '').trim();
  if (!clean) return { error: 'Write something first.' };
  const c = pdClient();
  if (!c) return { error: 'Not signed in.' };
  const row = { id: pdId('nt'), fundraise_id: fundraiseId, target_id: targetId, body: clean.slice(0, 5000) };
  try {
    const { error } = await c.from('pipeline_notes').insert(row);
    if (error) throw error;
  } catch (e) { return { error: 'Could not save that note.' }; }

  /* The feed records that a note exists. It does NOT carry the words:
     private prose does not belong in a structured event stream, and
     duplicating it buys nothing. */
  if (typeof plLogActivity === 'function') {
    const t = (typeof plFind === 'function') ? plFind(targetId) : null;
    const name = (t && typeof ptDisplayName === 'function') ? ptDisplayName(t) : '';
    await plLogActivity(fundraiseId, targetId, 'NOTE_ADDED',
      name ? 'Note added on ' + name : 'Note added', {});
  }
  if (typeof pbTrack === 'function') pbTrack('pipeline_note_created');
  return { ok: true, id: row.id };
}

async function pdUpdateNote(noteId, body) {
  const clean = String(body || '').trim();
  if (!clean) return { error: 'A note cannot be empty. Delete it instead.' };
  const c = pdClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.from('pipeline_notes')
      .update({ body: clean.slice(0, 5000), updated_at: new Date().toISOString() })
      .eq('id', noteId);
    if (error) throw error;
  } catch (e) { return { error: 'Could not save that note.' }; }
  if (typeof pbTrack === 'function') pbTrack('pipeline_note_updated');
  return { ok: true };
}

async function pdDeleteNote(noteId) {
  const c = pdClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.from('pipeline_notes').delete().eq('id', noteId);
    if (error) throw error;
  } catch (e) { return { error: 'Could not delete that note.' }; }
  if (typeof pbTrack === 'function') pbTrack('pipeline_note_deleted');
  return { ok: true };
}

/* ------------------------------------------------------------
   PRIORITY AND INTRO SOURCE
   ------------------------------------------------------------ */

async function pdSetPriority(target, priority) {
  const c = pdClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.from('pipeline_targets')
      .update({ priority: priority || null, updated_at: new Date().toISOString() })
      .eq('id', target.id);
    if (error) throw error;
  } catch (e) { return { error: 'Could not set priority.' }; }
  if (typeof ptInvalidate === 'function') ptInvalidate(target.fundraiseId);
  if (typeof pbTrack === 'function') pbTrack('pipeline_priority_set');
  return { ok: true };
}

/* Stores the name as private text, and a canonical id only when the
   founder picked someone the product already knows. Never writes a
   person into the research dataset. */
async function pdSetIntroSource(target, name, personId) {
  const c = pdClient();
  if (!c) return { error: 'Not signed in.' };
  const clean = String(name || '').trim().slice(0, 200);
  try {
    const { error } = await c.from('pipeline_targets').update({
      intro_source_name: clean || null,
      intro_source_person_id: personId || null,
      updated_at: new Date().toISOString()
    }).eq('id', target.id);
    if (error) throw error;
  } catch (e) { return { error: 'Could not save the intro source.' }; }
  if (typeof ptInvalidate === 'function') ptInvalidate(target.fundraiseId);
  if (typeof pbTrack === 'function') pbTrack('pipeline_intro_source_set');
  return { ok: true };
}

/* ------------------------------------------------------------
   THE PANEL
   ------------------------------------------------------------ */

async function pdOpen(targetId) {
  const target = (typeof plFind === 'function') ? plFind(targetId) : null;
  if (!target) return;
  if (typeof pbTrack === 'function') pbTrack('pipeline_target_opened');

  const el = document.createElement('div');
  el.className = 'scr-modal pd-modal';
  el.innerHTML = '<div class="scr-modal-bd" data-pd-close="1"></div>' +
    '<div class="scr-modal-panel pd-panel" role="dialog" aria-modal="true" aria-label="Investor detail">' +
    '<div class="scr-modal-head">Loading' +
      '<button type="button" class="scr-esc" data-pd-close="1">Esc</button></div>' +
    '<div class="scr-modal-body">Loading...</div></div>';
  /* The document-level change and blur handlers below need to know
     which target this panel is for, and reading it off the element is
     what keeps those handlers from having to guess. */
  el.__target = target;
  document.body.appendChild(el);

  const [notes, tags] = [await pdNotes(targetId), await pdAllTags(true)];
  pdPaint(el, target, notes, tags);

  el.addEventListener('click', function (e) { pdClick(e, el, target); });
}

function pdPaint(el, target, notes, allTags) {
  const name = (typeof ptDisplayName === 'function') ? ptDisplayName(target) : target.id;
  const contacts = (typeof plState !== 'undefined' && plState.contacts[target.id]) || [];
  const applied = pdTagsByTarget[target.id] || [];

  const body =
    /* ---- context strip: what the product knows, read only ---- */
    '<div class="pd-head">' +
      '<span class="pd-type">' + (target.targetType === 'FIRM' ? 'Firm' : 'Angel') + '</span>' +
      '<span class="pd-stage">' +
        pdEsc(typeof plLabel === 'function' ? plLabel(PL_STAGES, target.stage) : target.stage) +
      '</span>' +
    '</div>' +

    /* ---- contacts ---- */
    (target.targetType === 'FIRM'
      ? '<section class="pd-sec"><h3 class="pd-h">Contacts</h3>' +
        (contacts.length
          ? '<ul class="pd-contacts">' + contacts.map(function (ct) {
              const cn = (typeof ptContactName === 'function') ? ptContactName(ct.partnerSlug) : ct.partnerSlug;
              const ti = (typeof ptContactTitle === 'function') ? ptContactTitle(ct.partnerSlug) : null;
              return '<li>' +
                '<a href="#partner/' + pdEsc(ct.partnerSlug) + '">' + pdEsc(cn) + '</a>' +
                (ti ? '<span class="pd-title">' + pdEsc(ti) + '</span>' : '') +
                (ct.isPrimary ? '<span class="pd-primary">Primary</span>' :
                  '<button type="button" class="ac-act" data-pd-primary="' + pdEsc(ct.id) + '">Make primary</button>') +
                '<button type="button" class="ac-act ac-act-quiet" data-pd-rmcontact="' +
                  pdEsc(ct.id) + '">Remove</button>' +
              '</li>';
            }).join('') + '</ul>'
          : '<p class="pd-empty">No partner contacts yet. Add one from a partner profile.</p>') +
        '</section>'
      : '') +

    /* ---- relationship, priority, intro source ---- */
    '<section class="pd-sec"><h3 class="pd-h">Relationship</h3>' +
      '<div class="fr-row">' +
        '<label class="fr-field"><span class="fr-label">Status</span>' +
          '<select class="scr-text" data-pd-rel>' +
            PL_RELATIONSHIPS.map(function (r) {
              return '<option value="' + r.key + '"' +
                (target.relationship === r.key ? ' selected' : '') + '>' + r.label + '</option>';
            }).join('') + '</select></label>' +
        '<label class="fr-field"><span class="fr-label">Priority</span>' +
          '<select class="scr-text" data-pd-priority>' +
            PD_PRIORITIES.map(function (p) {
              return '<option value="' + p.key + '"' +
                ((target.priority || '') === p.key ? ' selected' : '') + '>' + p.label + '</option>';
            }).join('') + '</select></label>' +
      '</div>' +
      '<label class="fr-field"><span class="fr-label">Intro source ' +
        '<span class="fr-optional">optional</span></span>' +
        '<input class="scr-text" data-pd-intro type="text" maxlength="200" ' +
        'placeholder="Who can make the introduction" value="' +
        pdEsc(target.introSourceName || '') + '"></label>' +
      '<p class="fr-note">Private to you. Naming someone here does not add them to Power Board, ' +
      'and does not change the relationship status - you decide when an intro has actually been made.</p>' +
    '</section>' +

    /* ---- tags ---- */
    '<section class="pd-sec"><h3 class="pd-h">Tags</h3>' +
      '<div class="pd-tags">' +
        (applied.length
          ? applied.map(function (tid) {
              const lb = pdTagLabel(tid);
              return lb ? '<span class="pd-tag">' + pdEsc(lb) +
                '<button type="button" data-pd-untag="' + pdEsc(tid) + '" ' +
                'aria-label="Remove tag ' + pdEsc(lb) + '">x</button></span>' : '';
            }).join('')
          : '<span class="pd-empty">No tags yet.</span>') +
      '</div>' +
      '<div class="pd-tagadd">' +
        '<input class="scr-text" data-pd-newtag type="text" maxlength="40" ' +
        'placeholder="Add a tag" list="pdTagList">' +
        '<datalist id="pdTagList">' +
          (allTags || []).map(function (t) {
            return '<option value="' + pdEsc(t.label) + '"></option>';
          }).join('') + '</datalist>' +
        '<button type="button" class="scr-tool" data-pd-addtag="1">Add</button>' +
      '</div>' +
    '</section>' +

    /* ---- notes ---- */
    '<section class="pd-sec"><h3 class="pd-h">Notes</h3>' +
      '<textarea class="scr-text fr-textarea" data-pd-notebody rows="3" maxlength="5000" ' +
      'placeholder="What was said, what they asked for, what you promised"></textarea>' +
      '<div class="fr-form-actions"><button type="button" class="ds-btn" data-pd-addnote="1">Add note</button></div>' +
      (notes === null
        ? '<p class="pd-empty">Could not load notes right now. Nothing has been lost.</p>'
        : (notes.length
            ? '<ul class="pd-notes">' + notes.map(pdNoteRow).join('') + '</ul>'
            : '<p class="pd-empty">No notes yet. These are private to you and never appear in ' +
              'search or on any public page.</p>')) +
    '</section>' +
    '<div class="pd-err" data-pd-err role="alert"></div>';

  el.querySelector('.scr-modal-head').innerHTML = pdEsc(name) +
    '<button type="button" class="scr-esc" data-pd-close="1">Esc</button>';
  el.querySelector('.scr-modal-body').innerHTML = body;
}

function pdNoteRow(n) {
  const edited = n.updated_at && n.updated_at !== n.created_at;
  return '<li class="pd-note" data-pd-note="' + pdEsc(n.id) + '">' +
    '<div class="pd-note-body">' + pdEsc(n.body) + '</div>' +
    '<div class="pd-note-foot">' +
      '<span>' + pdEsc(pdWhen(n.created_at)) + (edited ? ' (edited)' : '') + '</span>' +
      '<button type="button" class="ac-act" data-pd-editnote="' + pdEsc(n.id) + '">Edit</button>' +
      '<button type="button" class="ac-act ac-act-quiet" data-pd-delnote="' + pdEsc(n.id) + '">Delete</button>' +
    '</div>' +
  '</li>';
}

async function pdRefresh(el, target) {
  const notes = await pdNotes(target.id);
  const tags = await pdAllTags();
  pdPaint(el, target, notes, tags);
}

function pdErr(el, msg) {
  const e = el.querySelector('[data-pd-err]');
  if (e) e.textContent = msg || '';
}

async function pdClick(e, el, target) {
  if (e.target.closest('[data-pd-close]')) {
    el.remove();
    if (typeof renderPipeline === 'function') renderPipeline();
    return;
  }

  const addTag = e.target.closest('[data-pd-addtag]');
  if (addTag) {
    const input = el.querySelector('[data-pd-newtag]');
    const res = await pdEnsureTag(input.value);
    if (res.error) { pdErr(el, res.error); return; }
    const ap = await pdApplyTag(target.id, res.id);
    if (ap.error) { pdErr(el, ap.error); return; }
    input.value = '';
    pdErr(el, '');
    await pdRefresh(el, target);
    return;
  }

  const untag = e.target.closest('[data-pd-untag]');
  if (untag) {
    await pdRemoveTag(target.id, untag.getAttribute('data-pd-untag'));
    await pdRefresh(el, target);
    return;
  }

  if (e.target.closest('[data-pd-addnote]')) {
    const ta = el.querySelector('[data-pd-notebody]');
    const res = await pdAddNote(target.fundraiseId, target.id, ta.value);
    if (res.error) { pdErr(el, res.error); return; }
    ta.value = '';
    pdErr(el, '');
    await pdRefresh(el, target);
    return;
  }

  const ed = e.target.closest('[data-pd-editnote]');
  if (ed) {
    const li = ed.closest('[data-pd-note]');
    const bodyEl = li.querySelector('.pd-note-body');
    const current = bodyEl.textContent;
    bodyEl.innerHTML = '<textarea class="scr-text fr-textarea" data-pd-editbody rows="3" ' +
      'maxlength="5000"></textarea>' +
      '<div class="fr-form-actions">' +
      '<button type="button" class="ds-btn" data-pd-savenote="' + pdEsc(ed.getAttribute('data-pd-editnote')) + '">Save</button>' +
      '<button type="button" class="ac-act ac-act-quiet" data-pd-canceledit="1">Cancel</button></div>';
    li.querySelector('[data-pd-editbody]').value = current;
    return;
  }

  const save = e.target.closest('[data-pd-savenote]');
  if (save) {
    const li = save.closest('[data-pd-note]');
    const val = li.querySelector('[data-pd-editbody]').value;
    const res = await pdUpdateNote(save.getAttribute('data-pd-savenote'), val);
    if (res.error) { pdErr(el, res.error); return; }
    await pdRefresh(el, target);
    return;
  }

  if (e.target.closest('[data-pd-canceledit]')) { await pdRefresh(el, target); return; }

  const del = e.target.closest('[data-pd-delnote]');
  if (del) {
    if (!window.confirm('Delete this note? This cannot be undone.')) return;
    await pdDeleteNote(del.getAttribute('data-pd-delnote'));
    await pdRefresh(el, target);
    return;
  }

  const prim = e.target.closest('[data-pd-primary]');
  if (prim && typeof ptSetPrimaryContact === 'function') {
    await ptSetPrimaryContact(target.id, prim.getAttribute('data-pd-primary'));
    if (typeof ptContactsForRaise === 'function' && typeof plState !== 'undefined') {
      plState.contacts = await ptContactsForRaise(target.fundraiseId);
    }
    await pdRefresh(el, target);
    return;
  }

  const rmc = e.target.closest('[data-pd-rmcontact]');
  if (rmc && typeof ptRemoveContact === 'function') {
    await ptRemoveContact(target.id, rmc.getAttribute('data-pd-rmcontact'));
    if (typeof ptContactsForRaise === 'function' && typeof plState !== 'undefined') {
      plState.contacts = await ptContactsForRaise(target.fundraiseId);
    }
    await pdRefresh(el, target);
    return;
  }
}

/* Selects and the intro field save on change/blur rather than needing
   a save button, so a founder editing one field is never left
   wondering whether it took. */
document.addEventListener('change', async function (e) {
  const panel = e.target.closest ? e.target.closest('.pd-modal') : null;
  if (!panel) return;
  const target = panel.__target;
  if (!target) return;
  if (e.target.matches('[data-pd-rel]') && typeof plSetRelationship === 'function') {
    await plSetRelationship(target, e.target.value);
  } else if (e.target.matches('[data-pd-priority]')) {
    await pdSetPriority(target, e.target.value);
  }
});

document.addEventListener('blur', async function (e) {
  if (!e.target.matches || !e.target.matches('[data-pd-intro]')) return;
  const panel = e.target.closest('.pd-modal');
  if (!panel || !panel.__target) return;
  await pdSetIntroSource(panel.__target, e.target.value, null);
}, true);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PD_PRIORITIES: PD_PRIORITIES, pdWhen: pdWhen, pdNoteRow: pdNoteRow, pdTagLabel: pdTagLabel
  };
}
