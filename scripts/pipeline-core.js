/* ============================================================
   PIPELINE-CORE.JS
   Phase 4B. Investor Targets: the objects a Raise is made of, and
   the single resolution path every "Add to Raise" button goes
   through.

   ONE FIRM IS ONE OPPORTUNITY

   A founder pursuing Sequoia through two partners is running one
   conversation with Sequoia. Giving each partner its own pipeline row
   would double-count the raise, inflate every stage total, and leave
   two rows to keep in sync by hand. So a Firm target holds the
   opportunity and partners attach to it as contacts. Adding a partner
   whose firm is already in the raise attaches them to the existing
   target rather than creating a second one.

   IDENTITY IS CANONICAL, NEVER A DISPLAY NAME

   The dataset contains victor-wang AND victor-wang-zhenfund: two
   different people who happen to share a name. It also contains firms
   that have renamed themselves. A target keyed on what something is
   currently called would merge the first pair and split the second.
   So every target is keyed on the slug the research dataset itself
   uses, and display names are looked up for rendering only.

   ADDING IS ALWAYS EXPLICIT

   Nothing in this file adds a target on its own. Shortlisting is not
   pursuing, a saved search is not a pipeline, and opening a profile
   is not interest. Every function here runs because someone pressed
   a button that said what it would do.

   DUPLICATES ARE REFUSED BY POSTGRES, NOT BY A CHECK-THEN-WRITE

   Unique indexes on (fundraise_id, firm_slug) and (fundraise_id,
   person_id) mean two tabs, a double-click and a retried request all
   collide in the database instead of quietly producing two rows for
   one firm. The pre-check here exists to give a useful answer, not to
   be the guarantee.
   ============================================================ */

const PT_SOURCES = ['search', 'screener', 'power_match', 'shortlist',
                    'partner_profile', 'angel_profile', 'firm_profile',
                    'saved_view', 'alert', 'manual'];

let ptCache = {};        // fundraiseId -> targets
let ptContactCache = {}; // targetId -> contacts

function ptClient() {
  return (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null;
}

function ptSignedIn() {
  return (typeof isSignedIn === 'function') ? isSignedIn() : false;
}

function ptId(prefix) {
  return (prefix || 'pt') + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function ptEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ------------------------------------------------------------
   CANONICAL RESOLUTION

   Every lookup goes through here so there is one place that knows how
   an entity is identified, and one place to fix if that ever changes.
   Each returns null rather than a guess when the slug is not in the
   dataset - an unresolvable target is a bug to surface, not a row to
   invent a name for.
   ------------------------------------------------------------ */

function ptFirm(slug) {
  if (!slug || typeof firms === 'undefined') return null;
  for (let i = 0; i < firms.length; i++) {
    if (firms[i].slug === slug) return firms[i];
  }
  return null;
}

function ptPartner(slug) {
  if (!slug || typeof partnerProfiles === 'undefined') return null;
  return partnerProfiles[slug] || null;
}

function ptAngel(slug) {
  if (!slug || typeof CAPITAL_SOURCES === 'undefined') return null;
  return CAPITAL_SOURCES[slug] || null;
}

/* The firm a partner belongs to. Every partner in the dataset carries
   a firmSlug that resolves, which is what makes Partner -> Firm target
   reliable rather than best-effort. If that ever stops being true the
   caller gets null and refuses, rather than inventing a firm. */
function ptFirmOfPartner(partnerSlug) {
  const p = ptPartner(partnerSlug);
  if (!p || !p.firmSlug) return null;
  return ptFirm(p.firmSlug) ? p.firmSlug : null;
}

function ptDisplayName(target) {
  if (!target) return null;
  if (target.targetType === 'FIRM') {
    const f = ptFirm(target.firmSlug);
    return f ? f.name : target.firmSlug;
  }
  const a = ptAngel(target.personId);
  return a ? a.name : target.personId;
}

function ptContactName(partnerSlug) {
  const p = ptPartner(partnerSlug);
  return p ? p.name : partnerSlug;
}

function ptContactTitle(partnerSlug) {
  const p = ptPartner(partnerSlug);
  return p && p.title ? p.title : null;
}

/* ------------------------------------------------------------
   PERSISTENCE
   ------------------------------------------------------------ */

function ptRowToDef(r) {
  return {
    id: r.id,
    fundraiseId: r.fundraise_id,
    targetType: r.target_type,
    firmSlug: r.firm_slug || null,
    personId: r.person_id || null,
    stage: r.stage || 'RESEARCHING',
    relationship: r.relationship || 'UNKNOWN',
    priority: r.priority || null,
    addedFrom: r.added_from || null,
    createdAt: r.created_at,
    updatedAt: r.updated_at
  };
}

function ptContactRowToDef(r) {
  return {
    id: r.id,
    targetId: r.target_id,
    partnerSlug: r.partner_slug,
    isPrimary: r.is_primary === true,
    roleNote: r.role_note || null,
    addedFrom: r.added_from || null,
    createdAt: r.created_at
  };
}

async function ptTargets(fundraiseId, opts) {
  opts = opts || {};
  if (!fundraiseId) return [];
  if (ptCache[fundraiseId] && !opts.force) return ptCache[fundraiseId];
  const c = ptClient();
  if (!c || !ptSignedIn()) return [];
  try {
    const { data, error } = await c.from('pipeline_targets')
      .select('*').eq('fundraise_id', fundraiseId).order('created_at', { ascending: false });
    if (error) throw error;
    ptCache[fundraiseId] = (data || []).map(ptRowToDef);
  } catch (e) {
    return null;                    // null is a failure, [] is genuinely empty
  }
  return ptCache[fundraiseId];
}

async function ptContacts(targetId, opts) {
  opts = opts || {};
  if (!targetId) return [];
  if (ptContactCache[targetId] && !opts.force) return ptContactCache[targetId];
  const c = ptClient();
  if (!c) return [];
  try {
    const { data, error } = await c.from('pipeline_contacts')
      .select('*').eq('target_id', targetId).order('created_at', { ascending: true });
    if (error) throw error;
    ptContactCache[targetId] = (data || []).map(ptContactRowToDef);
  } catch (e) { return []; }
  return ptContactCache[targetId];
}

/* All contacts for a whole raise in ONE query.

   The pipeline table shows a primary contact per row, and fetching
   them per target would issue one request per firm - the N+1 that
   makes a 60-target pipeline feel broken. */
async function ptContactsForRaise(fundraiseId) {
  const targets = await ptTargets(fundraiseId);
  if (!targets || !targets.length) return {};
  const ids = targets.map(function (t) { return t.id; });
  const c = ptClient();
  if (!c) return {};
  try {
    const { data, error } = await c.from('pipeline_contacts')
      .select('*').in('target_id', ids).order('created_at', { ascending: true });
    if (error) throw error;
    const by = {};
    (data || []).forEach(function (r) {
      const d = ptContactRowToDef(r);
      (by[d.targetId] = by[d.targetId] || []).push(d);
      ptContactCache[d.targetId] = by[d.targetId];
    });
    return by;
  } catch (e) { return {}; }
}

function ptInvalidate(fundraiseId) {
  if (fundraiseId) delete ptCache[fundraiseId];
  else ptCache = {};
  ptContactCache = {};
}

/* ------------------------------------------------------------
   DUPLICATE DETECTION

   Answers "is this already here" so the caller can say so and offer
   to open it. The database is what guarantees it; this is what makes
   the guarantee legible.
   ------------------------------------------------------------ */

async function ptFindExisting(fundraiseId, kind, slug) {
  const targets = await ptTargets(fundraiseId);
  if (!targets) return null;
  if (kind === 'firm') {
    return targets.filter(function (t) { return t.firmSlug === slug; })[0] || null;
  }
  if (kind === 'angel') {
    return targets.filter(function (t) { return t.personId === slug; })[0] || null;
  }
  if (kind === 'partner') {
    /* A partner is not itself a target. What matters is whether their
       firm is already being pursued. */
    const firmSlug = ptFirmOfPartner(slug);
    if (!firmSlug) return null;
    return targets.filter(function (t) { return t.firmSlug === firmSlug; })[0] || null;
  }
  return null;
}

/* ------------------------------------------------------------
   THE DECISION, AS A PURE FUNCTION

   Every rule that makes this phase correct lives here: one firm is
   one opportunity, a partner means their firm, an angel is anchored
   on the person, and nothing is ever added twice. Separating it from
   the reads and writes means the rules can be checked directly
   against the real dataset rather than only observed through a
   database round trip.

   Takes the current targets and contacts, returns what should happen.
   Touches nothing.
   ------------------------------------------------------------ */

function ptPlanAdd(kind, slug, targets, contactsByTarget) {
  targets = targets || [];
  contactsByTarget = contactsByTarget || {};

  if (kind === 'firm') {
    const firm = ptFirm(slug);
    if (!firm) return { action: 'ERROR', message: 'That firm is not in Power Board research.' };
    const hit = targets.filter(function (t) { return t.firmSlug === slug; })[0];
    if (hit) {
      return { action: 'DUPLICATE_TARGET', targetId: hit.id, name: firm.name,
               message: firm.name + ' is already in this raise.' };
    }
    return { action: 'CREATE_FIRM', firmSlug: slug, name: firm.name,
             message: firm.name + ' added to your raise.' };
  }

  if (kind === 'angel') {
    const angel = ptAngel(slug);
    if (!angel) return { action: 'ERROR', message: 'That angel is not in Power Board research.' };
    const hit = targets.filter(function (t) { return t.personId === slug; })[0];
    if (hit) {
      return { action: 'DUPLICATE_TARGET', targetId: hit.id, name: angel.name,
               message: angel.name + ' is already in this raise.' };
    }
    /* Anchored on the person. An angel invests their own money, so
       there is no firm, and inventing one to fit the schema would put
       a fictional organisation in the pipeline. */
    return { action: 'CREATE_ANGEL', personId: slug, name: angel.name,
             message: angel.name + ' added to your raise.' };
  }

  if (kind === 'partner') {
    const partner = ptPartner(slug);
    if (!partner) return { action: 'ERROR', message: 'That partner is not in Power Board research.' };
    const firmSlug = ptFirmOfPartner(slug);
    if (!firmSlug) {
      return { action: 'ERROR',
               message: partner.name + ' has no tracked firm, so there is no firm target to add them to.' };
    }
    const firm = ptFirm(firmSlug);
    const hit = targets.filter(function (t) { return t.firmSlug === firmSlug; })[0];

    if (!hit) {
      /* The firm is not being pursued yet, so pursuing this partner
         means pursuing the firm. One target, with them on it. */
      return { action: 'CREATE_FIRM_WITH_CONTACT', firmSlug: firmSlug, partnerSlug: slug,
               name: partner.name,
               message: firm.name + ' added, with ' + partner.name + ' as the contact.' };
    }

    const existing = contactsByTarget[hit.id] || [];
    if (existing.some(function (x) { return x.partnerSlug === slug; })) {
      return { action: 'DUPLICATE_CONTACT', targetId: hit.id, name: partner.name,
               message: partner.name + ' is already a contact on ' + firm.name + ' in this raise.' };
    }

    /* THE RULE THIS PHASE EXISTS FOR. The firm is already in the
       raise, so the partner joins it rather than creating a second
       opportunity for the same firm. */
    return { action: 'ATTACH_CONTACT', targetId: hit.id, partnerSlug: slug, firmSlug: firmSlug,
             name: partner.name, isFirst: existing.length === 0,
             message: partner.name + ' added to ' + firm.name + ', already in this raise.' };
  }

  return { action: 'ERROR', message: 'Unknown target type.' };
}

/* ------------------------------------------------------------
   THE SINGLE ENTRY POINT

   Every surface - Search, Screener, Power Match, Shortlist, a partner
   profile, an angel profile - calls this. One resolution path means
   one place where the Firm-versus-Partner rule lives, and one place
   that decides what a duplicate is.

   Returns one of:
     { ok, targetId, created, contactAdded, name }
     { duplicate, targetId, name, message }
     { error }
     { needsAuth }
   ------------------------------------------------------------ */

async function ptAddToRaise(kind, slug, opts) {
  opts = opts || {};
  if (!ptSignedIn()) return { needsAuth: true };
  const c = ptClient();
  if (!c) return { error: 'Not signed in.' };

  const fundraiseId = opts.fundraiseId ||
    (typeof frActive === 'function' ? (await frActive() || {}).id : null);
  if (!fundraiseId) return { noRaise: true };

  const source = (PT_SOURCES.indexOf(opts.source) > -1) ? opts.source : 'manual';

  const targets = await ptTargets(fundraiseId, { force: true });
  if (targets === null) return { error: 'Could not read your pipeline. Nothing was changed.' };
  const contactsByTarget = await ptContactsForRaise(fundraiseId);

  const plan = ptPlanAdd(kind, slug, targets, contactsByTarget);
  return ptExecutePlan(fundraiseId, plan, source);
}

/* Carries out what ptPlanAdd decided. All the I/O, none of the rules. */
async function ptExecutePlan(fundraiseId, plan, source) {
  if (plan.action === 'ERROR') return { error: plan.message };

  if (plan.action === 'DUPLICATE_TARGET' || plan.action === 'DUPLICATE_CONTACT') {
    if (typeof pbTrack === 'function') pbTrack('pipeline_duplicate_prevented');
    return { duplicate: true, targetId: plan.targetId, name: plan.name, message: plan.message };
  }

  if (plan.action === 'CREATE_FIRM') {
    const r = await ptAddFirm(fundraiseId, plan.firmSlug, source, true);
    return r.error ? r
      : { ok: true, targetId: r.targetId, created: r.created, name: plan.name, message: plan.message };
  }

  if (plan.action === 'CREATE_ANGEL') {
    const r = await ptAddAngel(fundraiseId, plan.personId, source);
    return r.error ? r : Object.assign({}, r, { message: plan.message });
  }

  if (plan.action === 'CREATE_FIRM_WITH_CONTACT') {
    const r = await ptAddFirm(fundraiseId, plan.firmSlug, source, true);
    if (r.error) return r;
    const added = await ptAddContact(r.targetId, plan.partnerSlug,
      { source: source, primaryIfFirst: true });
    if (added.error) return added;
    return { ok: true, targetId: r.targetId, created: true, contactAdded: true,
             name: plan.name, message: plan.message };
  }

  if (plan.action === 'ATTACH_CONTACT') {
    const added = await ptAddContact(plan.targetId, plan.partnerSlug,
      { source: source, primaryIfFirst: true });
    if (added.error) return added;
    if (added.duplicate) {
      if (typeof pbTrack === 'function') pbTrack('pipeline_duplicate_prevented');
      return { duplicate: true, targetId: plan.targetId, name: plan.name, message: plan.message };
    }
    return { ok: true, targetId: plan.targetId, created: false, contactAdded: true,
             name: plan.name, message: plan.message };
  }

  return { error: 'Unknown plan.' };
}

async function ptAddFirm(fundraiseId, firmSlug, source, silentIfExists) {
  const firm = ptFirm(firmSlug);
  if (!firm) return { error: 'That firm is not in Power Board research.' };

  const existing = await ptFindExisting(fundraiseId, 'firm', firmSlug);
  if (existing) {
    if (silentIfExists) return { ok: true, targetId: existing.id, created: false, name: firm.name };
    if (typeof pbTrack === 'function') pbTrack('pipeline_duplicate_prevented');
    return {
      duplicate: true, targetId: existing.id, name: firm.name,
      message: firm.name + ' is already in this raise.'
    };
  }

  const row = {
    id: ptId('pt'), fundraise_id: fundraiseId, target_type: 'FIRM',
    firm_slug: firmSlug, person_id: null, added_from: source
  };
  const c = ptClient();
  try {
    const { error } = await c.from('pipeline_targets').insert(row);
    if (error) throw error;
  } catch (e) {
    /* The unique index fired, which means another tab or a double
       click won the race. That is not an error to show anyone - the
       firm is in the raise, which is what was asked for. */
    if (/pipeline_targets_firm_uniq|duplicate key/.test(String(e.message || e))) {
      ptInvalidate(fundraiseId);
      const now = await ptFindExisting(fundraiseId, 'firm', firmSlug);
      return now
        ? { ok: true, targetId: now.id, created: false, name: firm.name }
        : { error: 'Could not add that firm. Try again.' };
    }
    return { error: 'Could not add that firm. ' + (e.message || '') };
  }

  ptInvalidate(fundraiseId);
  if (typeof pbTrack === 'function') pbTrack('pipeline_target_added');
  return { ok: true, targetId: row.id, created: true, name: firm.name };
}

/* Adding a partner means pursuing their firm. If the firm is already
   in the raise the partner joins it as a contact; if not, the firm
   target is created first and the partner attached. Either way the
   founder ends up with one Sequoia, not two. */
async function ptAddPartner(fundraiseId, partnerSlug, source) {
  const partner = ptPartner(partnerSlug);
  if (!partner) return { error: 'That partner is not in Power Board research.' };

  const firmSlug = ptFirmOfPartner(partnerSlug);
  if (!firmSlug) {
    return { error: partner.name + ' has no tracked firm, so there is no firm target to add them to.' };
  }
  const firm = ptFirm(firmSlug);

  const before = await ptFindExisting(fundraiseId, 'firm', firmSlug);
  const res = await ptAddFirm(fundraiseId, firmSlug, source, true);
  if (res.error) return res;

  const added = await ptAddContact(res.targetId, partnerSlug, {
    source: source,
    primaryIfFirst: true
  });

  if (added.duplicate) {
    if (typeof pbTrack === 'function') pbTrack('pipeline_duplicate_prevented');
    return {
      duplicate: true, targetId: res.targetId, name: partner.name,
      message: partner.name + ' is already a contact on ' + firm.name + ' in this raise.'
    };
  }

  return {
    ok: true, targetId: res.targetId, created: !before, contactAdded: true,
    name: partner.name,
    message: before
      ? partner.name + ' added to ' + firm.name + ', already in this raise.'
      : firm.name + ' added, with ' + partner.name + ' as the contact.'
  };
}

async function ptAddAngel(fundraiseId, personId, source) {
  const angel = ptAngel(personId);
  if (!angel) return { error: 'That angel is not in Power Board research.' };

  const existing = await ptFindExisting(fundraiseId, 'angel', personId);
  if (existing) {
    if (typeof pbTrack === 'function') pbTrack('pipeline_duplicate_prevented');
    return {
      duplicate: true, targetId: existing.id, name: angel.name,
      message: angel.name + ' is already in this raise.'
    };
  }

  /* An angel invests their own money, so there is no firm to anchor
     to and inventing one to fit the schema would put a fictional
     organisation in the pipeline. The row is anchored on the person. */
  const row = {
    id: ptId('pt'), fundraise_id: fundraiseId, target_type: 'ANGEL',
    firm_slug: null, person_id: personId, added_from: source
  };
  const c = ptClient();
  try {
    const { error } = await c.from('pipeline_targets').insert(row);
    if (error) throw error;
  } catch (e) {
    if (/pipeline_targets_person_uniq|duplicate key/.test(String(e.message || e))) {
      ptInvalidate(fundraiseId);
      const now = await ptFindExisting(fundraiseId, 'angel', personId);
      return now
        ? { ok: true, targetId: now.id, created: false, name: angel.name }
        : { error: 'Could not add that angel. Try again.' };
    }
    return { error: 'Could not add that angel. ' + (e.message || '') };
  }

  ptInvalidate(fundraiseId);
  if (typeof pbTrack === 'function') pbTrack('pipeline_target_added');
  return { ok: true, targetId: row.id, created: true, name: angel.name };
}

/* ------------------------------------------------------------
   CONTACTS
   ------------------------------------------------------------ */

async function ptAddContact(targetId, partnerSlug, opts) {
  opts = opts || {};
  const c = ptClient();
  if (!c) return { error: 'Not signed in.' };
  if (!ptPartner(partnerSlug)) return { error: 'That partner is not in Power Board research.' };

  const current = await ptContacts(targetId, { force: true });
  if (current.some(function (x) { return x.partnerSlug === partnerSlug; })) {
    return { duplicate: true };
  }

  const row = {
    id: ptId('pc'), target_id: targetId, partner_slug: partnerSlug,
    is_primary: opts.primaryIfFirst ? current.length === 0 : !!opts.isPrimary,
    role_note: opts.roleNote || null,
    added_from: opts.source || null
  };

  try {
    const { error } = await c.from('pipeline_contacts').insert(row);
    if (error) throw error;
  } catch (e) {
    if (/pipeline_contacts_uniq|duplicate key/.test(String(e.message || e))) {
      return { duplicate: true };
    }
    return { error: 'Could not add that contact. ' + (e.message || '') };
  }

  delete ptContactCache[targetId];
  if (typeof pbTrack === 'function') pbTrack('pipeline_partner_added');
  return { ok: true, id: row.id };
}

async function ptRemoveContact(targetId, contactId) {
  const c = ptClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.from('pipeline_contacts').delete().eq('id', contactId);
    if (error) throw error;
  } catch (e) { return { error: 'Could not remove that contact.' }; }
  delete ptContactCache[targetId];
  if (typeof pbTrack === 'function') pbTrack('pipeline_partner_removed');
  return { ok: true };
}

/* Clearing the old primary first keeps the two writes from colliding
   with the one-primary-per-target index mid-flight. */
async function ptSetPrimaryContact(targetId, contactId) {
  const c = ptClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    await c.from('pipeline_contacts').update({ is_primary: false })
      .eq('target_id', targetId).eq('is_primary', true);
    const { error } = await c.from('pipeline_contacts')
      .update({ is_primary: true }).eq('id', contactId);
    if (error) throw error;
  } catch (e) { return { error: 'Could not set the primary contact.' }; }
  delete ptContactCache[targetId];
  return { ok: true };
}

function ptPrimaryOf(contacts) {
  if (!contacts || !contacts.length) return null;
  return contacts.filter(function (x) { return x.isPrimary; })[0] || contacts[0];
}

/* ------------------------------------------------------------
   REMOVAL

   Removing a target deletes the founder's own workflow row. It does
   not touch the Shortlist, any Saved Search, or anything in the
   research dataset - those are separate subscriptions the founder
   made separately.
   ------------------------------------------------------------ */

async function ptRemoveTarget(fundraiseId, targetId) {
  const c = ptClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    const { error } = await c.from('pipeline_targets').delete().eq('id', targetId);
    if (error) throw error;
  } catch (e) { return { error: 'Could not remove that target.' }; }
  ptInvalidate(fundraiseId);
  if (typeof pbTrack === 'function') pbTrack('pipeline_target_removed');
  return { ok: true };
}

/* ------------------------------------------------------------
   SHARED "ADD TO RAISE" RESULT HANDLING

   Every surface in Phase 4G will call ptAddToRaise and then this, so
   the founder gets the same wording and the same offer to open an
   existing target wherever they added from.
   ------------------------------------------------------------ */

function ptToast(msg, actionLabel, actionHref) {
  const t = document.createElement('div');
  t.className = 'ss-toast';
  t.setAttribute('role', 'status');
  t.textContent = msg;
  if (actionLabel && actionHref) {
    const a = document.createElement('a');
    a.href = actionHref;
    a.textContent = actionLabel;
    a.className = 'ss-toast-act';
    t.appendChild(a);
  }
  document.body.appendChild(t);
  setTimeout(function () { t.classList.add('is-on'); }, 10);
  setTimeout(function () { t.classList.remove('is-on'); }, 5200);
  setTimeout(function () { t.remove(); }, 5800);
}

function ptHandleResult(res) {
  if (!res) return;
  if (res.needsAuth) {
    ptToast('Sign in to build a raise pipeline.', 'Sign in', '#signin');
    return;
  }
  if (res.noRaise) {
    ptToast('Create a raise first, then add investors to it.', 'Create a raise', '#raise');
    return;
  }
  if (res.error) { ptToast(res.error); return; }
  if (res.duplicate) {
    ptToast(res.message, 'Open it', '#pipeline');
    return;
  }
  ptToast(res.message || ((res.name || 'Added') + ' added to your raise.'), 'View pipeline', '#pipeline');
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ptFirm: ptFirm, ptPartner: ptPartner, ptAngel: ptAngel,
    ptFirmOfPartner: ptFirmOfPartner, ptDisplayName: ptDisplayName,
    ptPlanAdd: ptPlanAdd,
    ptRowToDef: ptRowToDef, ptPrimaryOf: ptPrimaryOf
  };
}
