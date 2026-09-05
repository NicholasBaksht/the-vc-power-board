/* ============================================================
   FUNDRAISE.JS
   Phase 4A. The Raise itself: the container every pipeline target,
   note, activity and next action will hang off.

   WHY A RAISE IS A ROW AND NOT A FLAG

   A founder raises, closes, and raises again eighteen months later.
   If "the pipeline" were a permanent property of the account, the
   Series A would inherit the Seed's stages and the Seed's history
   would be overwritten by it. Making the round a first-class record
   keeps them separate: separate targets, separate stages, separate
   history, and closing one leaves the other untouched.

   THIS DATA IS PRIVATE, AND MORE SENSITIVE THAN ANYTHING BEFORE IT.
   What someone is raising, how much, and by when is damaging in both
   directions if it leaks. So it is authenticated only, never written
   to localStorage, never rendered for anyone but the owner, and never
   joined into the research dataset. RLS refuses it regardless, but
   the client should not be the thing standing between two founders.

   STARTUP CONTEXT IS REUSED, NOT REINVENTED. Power Match already
   asks a founder what they are building and what they are raising,
   but keeps those answers in memory for the length of a visit. The
   Raise stores them in Power Match's own vocabulary, which makes this
   their first durable home rather than a second, competing profile.

   WHAT THIS FILE DELIBERATELY DOES NOT DO: create a canonical
   Company. If a founder's startup is already tracked, the Raise links
   to that slug. If it is not, the name is kept as private text.
   Writing an unreviewed, unsourced company into the research dataset
   because somebody filled in a private form is exactly the
   fabrication this product refuses everywhere else.
   ============================================================ */

/* Power Match's own option values, matched deliberately so the two
   surfaces can hand context back and forth without translating. */
const FR_STAGES = ['Pre-Seed', 'Seed', 'Series A', 'Series B', 'Growth', 'Late Stage'];

const FR_CURRENCIES = ['USD', 'GBP', 'EUR', 'CAD', 'AUD', 'SGD', 'CHF', 'SEK', 'INR', 'JPY'];

let frCache = null;
let frLoaded = false;

function frClient() {
  return (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null;
}

function frSignedIn() {
  return (typeof isSignedIn === 'function') ? isSignedIn() : false;
}

function frId() {
  return 'fr' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function frEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ---------- money ----------
   Formatted from a known amount or not shown at all. A target that
   was never entered is unknown, and rendering it as $0 would state
   something the founder did not say. */

function frMoney(amount, currency) {
  if (amount == null || amount === '') return null;
  const n = Number(amount);
  if (!isFinite(n)) return null;
  const cur = currency || 'USD';
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency', currency: cur,
      maximumFractionDigits: n >= 1000 ? 0 : 2
    }).format(n);
  } catch (e) {
    return cur + ' ' + n.toLocaleString();
  }
}

function frDate(v) {
  if (!v) return null;
  const d = new Date(String(v).slice(0, 10) + 'T00:00:00Z');
  if (isNaN(d.getTime())) return String(v);
  /* UTC, like every other date on the site: a close date is a calendar
     date on record and must not shift for a reader in another zone. */
  return d.toLocaleDateString(undefined, {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'
  });
}

/* ---------- persistence ---------- */

function frRowToDef(r) {
  return {
    id: r.id,
    name: r.name,
    roundStage: r.round_stage || null,
    targetAmount: r.target_amount,
    currency: r.currency || 'USD',
    targetCloseDate: r.target_close_date || null,
    description: r.description || null,
    geography: r.geography || null,
    companySlug: r.company_slug || null,
    companyName: r.company_name || null,
    startupContext: r.startup_context || {},
    status: r.status || 'ACTIVE',
    isDefault: r.is_default === true,
    createdAt: r.created_at,
    updatedAt: r.updated_at,
    archivedAt: r.archived_at || null
  };
}

function frDefToRow(d) {
  const row = {
    id: d.id,
    name: String(d.name || '').slice(0, 120),
    round_stage: d.roundStage || null,
    target_amount: (d.targetAmount === '' || d.targetAmount == null) ? null : Number(d.targetAmount),
    currency: d.currency || 'USD',
    target_close_date: d.targetCloseDate || null,
    description: d.description || null,
    geography: d.geography || null,
    company_slug: d.companySlug || null,
    company_name: d.companyName || null,
    startup_context: d.startupContext || {},
    updated_at: new Date().toISOString()
  };
  if (d.status) row.status = d.status;
  return row;
}

async function frAll(opts) {
  opts = opts || {};
  if (frLoaded && frCache && !opts.force) return frCache;
  const c = frClient();
  if (!c || !frSignedIn()) { frCache = []; frLoaded = true; return frCache; }
  try {
    const { data, error } = await c.from('fundraises')
      .select('*').order('updated_at', { ascending: false });
    if (error) throw error;
    frCache = (data || []).map(frRowToDef);
  } catch (e) {
    frCache = null;                 // null is a failure, [] is genuinely empty
  }
  frLoaded = true;
  return frCache || [];
}

/* The raise the workspace opens on. Explicitly flagged rather than
   guessed from recency: a founder glancing at an old round should not
   silently make it the one everything gets added to. */
async function frActive() {
  const all = await frAll();
  const active = all.filter(function (r) { return r.status === 'ACTIVE'; });
  if (!active.length) return null;
  return active.filter(function (r) { return r.isDefault; })[0] || active[0];
}

async function frGet(id) {
  const all = await frAll();
  return all.filter(function (r) { return r.id === id; })[0] || null;
}

async function frCreate(def) {
  const c = frClient();
  if (!c || !frSignedIn()) return { needsAuth: true };
  const row = frDefToRow(Object.assign({ id: frId() }, def));

  /* The first raise becomes the default. Later ones do not take that
     over: someone opening a raise to sketch a future round should not
     have their live one quietly replaced underneath them. */
  const existing = await frAll({ force: true });
  const hasDefault = (existing || []).some(function (r) { return r.isDefault; });
  row.is_default = !hasDefault;

  try {
    const { error } = await c.from('fundraises').insert(row);
    if (error) throw error;
  } catch (e) {
    return { error: frFriendlyError(e) };
  }
  frLoaded = false;
  if (typeof pbTrack === 'function') pbTrack('fundraise_created');
  return { id: row.id };
}

async function frUpdate(id, patch) {
  const c = frClient();
  if (!c || !frSignedIn()) return { needsAuth: true };
  const row = frDefToRow(Object.assign({ id: id }, patch));
  delete row.id;
  try {
    const { error } = await c.from('fundraises').update(row).eq('id', id);
    if (error) throw error;
  } catch (e) {
    return { error: frFriendlyError(e) };
  }
  frLoaded = false;
  if (typeof pbTrack === 'function') pbTrack('fundraise_updated');
  return { id: id };
}

/* Archiving preserves everything. A finished round is the most useful
   record a founder has when starting the next one: who passed, who
   never replied, who committed and how fast. Deleting it to tidy the
   list would throw that away. */
async function frArchive(id) {
  const c = frClient();
  if (!c) return { error: 'Not signed in.' };
  const now = new Date().toISOString();
  try {
    const { error } = await c.from('fundraises')
      .update({ status: 'ARCHIVED', archived_at: now, is_default: false, updated_at: now })
      .eq('id', id);
    if (error) throw error;
  } catch (e) { return { error: frFriendlyError(e) }; }
  frLoaded = false;
  if (typeof pbTrack === 'function') pbTrack('fundraise_archived');
  return { ok: true };
}

async function frRestore(id) {
  const c = frClient();
  if (!c) return { error: 'Not signed in.' };
  const now = new Date().toISOString();
  try {
    const { error } = await c.from('fundraises')
      .update({ status: 'ACTIVE', archived_at: null, updated_at: now })
      .eq('id', id);
    if (error) throw error;
  } catch (e) { return { error: frFriendlyError(e) }; }
  frLoaded = false;
  if (typeof pbTrack === 'function') pbTrack('fundraise_restored');
  return { ok: true };
}

/* Exactly one default, enforced in Postgres by a partial unique
   index. Clearing the old one first keeps the two writes from
   colliding with that index mid-flight. */
async function frSetActive(id) {
  const c = frClient();
  if (!c) return { error: 'Not signed in.' };
  try {
    await c.from('fundraises').update({ is_default: false }).eq('is_default', true);
    const { error } = await c.from('fundraises')
      .update({ is_default: true, updated_at: new Date().toISOString() }).eq('id', id);
    if (error) throw error;
  } catch (e) { return { error: frFriendlyError(e) }; }
  frLoaded = false;
  if (typeof pbTrack === 'function') pbTrack('fundraise_activated');
  return { ok: true };
}

function frFriendlyError(e) {
  const msg = (e && e.message) ? e.message : String(e);
  if (/fundraises_one_default_idx/.test(msg)) {
    return 'Another raise is already set as active. Refresh and try again.';
  }
  if (/fundraises_archive_consistent/.test(msg)) {
    return 'That raise is in an inconsistent archive state. Refresh and try again.';
  }
  if (/char_length|check constraint/.test(msg)) {
    return 'One of those fields is too long. Shorten it and try again.';
  }
  return 'Could not save that. ' + msg;
}

/* ---------- startup context ----------
   Read from Power Match if the founder has answered there this
   session, so creating a Raise straight after a match run does not
   ask the same questions twice. Nothing is invented when they have
   not answered. */

function frContextFromPowerMatch() {
  const ctx = {};
  try {
    if (typeof finderSectors !== 'undefined' && finderSectors && finderSectors.size) {
      ctx.sectors = Array.from(finderSectors);
    }
    if (typeof finderStages !== 'undefined' && finderStages && finderStages.size) {
      ctx.stages = Array.from(finderStages);
    }
    if (typeof finderRaise !== 'undefined' && finderRaise && finderRaise !== 'any') {
      ctx.raiseBand = finderRaise;
    }
    if (typeof finderRegion !== 'undefined' && finderRegion && finderRegion !== 'any') {
      ctx.region = finderRegion;
    }
    if (typeof finderFocus !== 'undefined' && finderFocus && finderFocus !== 'any') {
      ctx.focus = finderFocus;
    }
  } catch (e) {}
  return ctx;
}

function frContextSummary(ctx) {
  if (!ctx) return null;
  const bits = [];
  if (ctx.sectors && ctx.sectors.length) bits.push(ctx.sectors.slice(0, 3).join(', '));
  if (ctx.stages && ctx.stages.length) bits.push(ctx.stages.join(', '));
  if (ctx.region) bits.push(ctx.region);
  return bits.length ? bits.join(' - ') : null;
}

/* ---------- rendering ---------- */

async function renderFundraise() {
  const host = document.getElementById('raiseView');
  if (!host) return;

  if (!frSignedIn()) {
    host.innerHTML = '<div class="ds-wrap"><div class="ds-kicker">My Raise</div>' +
      '<h1 class="ds-h1">Run your raise where the research is.</h1>' +
      '<div class="ds-empty"><strong>A raise needs an account.</strong> ' +
      'What you are raising, who you are pursuing and what was said are private to you, ' +
      'so there is nowhere to keep them without somewhere to sign in to.</div>' +
      '<p style="margin-top:14px"><a class="ds-btn" href="#signin">Sign in</a></p></div>';
    return;
  }

  host.innerHTML = '<div class="ds-wrap"><div class="ds-kicker">My Raise</div>' +
    '<h1 class="ds-h1">Run your raise where the research is.</h1>' +
    '<div class="ds-empty">Loading your raises...</div></div>';

  const all = await frAll({ force: true });
  frPaint(host, all);
}

function frPaint(host, all) {
  if (all === null) {
    host.innerHTML = '<div class="ds-wrap"><div class="ds-kicker">My Raise</div>' +
      '<h1 class="ds-h1">Run your raise where the research is.</h1>' +
      '<div class="ds-empty"><strong>Could not load your raises right now.</strong> ' +
      'Nothing has been lost - they are stored against your account.</div></div>';
    return;
  }

  const active = all.filter(function (r) { return r.status === 'ACTIVE'; });
  const archived = all.filter(function (r) { return r.status === 'ARCHIVED'; });

  let h = '<div class="ds-wrap fr-wrap">' +
    '<div class="ds-kicker">My Raise</div>' +
    '<h1 class="ds-h1">Run your raise where the research is.</h1>';

  if (!all.length) {
    h += '<p class="ds-sub">A raise is the container for everything that follows: the investors ' +
      'you are pursuing, where each conversation stands, what was said and what happens next. ' +
      'Research becomes a process you can actually run.</p>' +
      '<div class="fr-empty">' +
        '<strong>Start with the round you are raising now.</strong>' +
        '<p>Name it, and add the rest when you know it. Nothing here is required, and none of ' +
        'it is visible to anyone but you.</p>' +
        '<button type="button" class="ds-btn" data-fr-new="1">Create a raise</button>' +
      '</div></div>';
    host.innerHTML = h;
    frBind(host);
    return;
  }

  h += '<p class="ds-sub">Everything on this page is private to your account. It is never part of ' +
    'Power Board research, never appears in search, and is never visible to another user.</p>';

  h += '<div class="fr-bar">' +
    '<span class="fr-bar-count">' + active.length + ' active' +
      (archived.length ? ' - ' + archived.length + ' archived' : '') + '</span>' +
    '<button type="button" class="scr-tool" data-fr-new="1">New raise</button>' +
  '</div>';

  if (active.length) {
    h += '<ul class="fr-list">' + active.map(frCard).join('') + '</ul>';
  } else {
    h += '<div class="ds-empty"><strong>No active raise.</strong> ' +
      'Your archived rounds are below and stay exactly as you left them. ' +
      'Create a new raise when you start the next round.</div>';
  }

  if (archived.length) {
    h += '<div class="fr-archived">' +
      '<h2 class="fr-sub">Archived</h2>' +
      '<p class="fr-sub-note">Finished rounds keep their targets, stages, notes and history. ' +
      'They are the most useful thing you have when starting the next one.</p>' +
      '<ul class="fr-list">' + archived.map(frCard).join('') + '</ul></div>';
  }

  h += '</div>';
  host.innerHTML = h;
  frBind(host);
}

function frCard(r) {
  const money = frMoney(r.targetAmount, r.currency);
  const close = frDate(r.targetCloseDate);
  const ctx = frContextSummary(r.startupContext);
  const facts = [];
  if (r.roundStage) facts.push(['Stage', r.roundStage]);
  if (money) facts.push(['Target', money]);
  if (close) facts.push(['Close', close]);
  if (r.geography) facts.push(['Geography', r.geography]);

  return '<li class="fr-card' + (r.isDefault ? ' is-active' : '') +
      (r.status === 'ARCHIVED' ? ' is-archived' : '') + '" data-fr-id="' + frEsc(r.id) + '">' +
    '<div class="fr-card-head">' +
      '<span class="fr-name">' + frEsc(r.name) + '</span>' +
      (r.isDefault ? '<span class="fr-flag">Active</span>' : '') +
      (r.status === 'ARCHIVED'
        ? '<span class="fr-flag fr-flag-quiet">Archived ' + frEsc(frDate(r.archivedAt) || '') + '</span>'
        : '') +
    '</div>' +
    (r.companyName || r.companySlug
      ? '<div class="fr-company">' + frEsc(r.companyName || r.companySlug) +
        (r.companySlug ? '<span class="fr-linked" title="Linked to a tracked company">tracked</span>' : '') +
        '</div>'
      : '') +
    (facts.length
      ? '<dl class="fr-facts">' + facts.map(function (f) {
          return '<div><dt>' + frEsc(f[0]) + '</dt><dd>' + frEsc(f[1]) + '</dd></div>';
        }).join('') + '</dl>'
      : '<div class="fr-facts-none">No target or close date set. Add them whenever you want to.</div>') +
    (r.description ? '<p class="fr-desc">' + frEsc(r.description) + '</p>' : '') +
    (ctx ? '<div class="fr-ctx">' + frEsc(ctx) + '</div>' : '') +
    '<div class="fr-actions">' +
      (r.status === 'ACTIVE' && !r.isDefault
        ? '<button type="button" class="ac-act" data-fr-activate="' + frEsc(r.id) + '">Make active</button>'
        : '') +
      '<button type="button" class="ac-act" data-fr-edit="' + frEsc(r.id) + '">Edit</button>' +
      (r.status === 'ACTIVE'
        ? '<button type="button" class="ac-act ac-act-quiet" data-fr-archive="' + frEsc(r.id) + '">Archive</button>'
        : '<button type="button" class="ac-act" data-fr-restore="' + frEsc(r.id) + '">Reopen</button>') +
    '</div>' +
  '</li>';
}

/* ---------- create / edit ---------- */

function frOpenForm(existing) {
  const r = existing || {};
  const ctx = existing ? (r.startupContext || {}) : frContextFromPowerMatch();
  const ctxSummary = frContextSummary(ctx);

  const el = document.createElement('div');
  el.className = 'scr-modal';
  el.innerHTML = '<div class="scr-modal-bd" data-fr-close="1"></div>' +
    '<div class="scr-modal-panel" role="dialog" aria-modal="true" aria-label="' +
      (existing ? 'Edit raise' : 'Create a raise') + '">' +
    '<div class="scr-modal-head">' + (existing ? 'Edit raise' : 'Create a raise') +
      '<button type="button" class="scr-esc" data-fr-close="1">Esc</button></div>' +
    '<div class="scr-modal-body">' +
      '<p class="ss-explain">Only a name is required. Everything else can be filled in later, ' +
      'or left out entirely. None of it is shared, indexed or visible to anyone else.</p>' +

      '<label class="fr-field"><span class="fr-label">Raise name</span>' +
        '<input id="frName" class="scr-text" type="text" maxlength="120" ' +
        'placeholder="Seed round" value="' + frEsc(r.name || '') + '"></label>' +

      '<div class="fr-row">' +
        '<label class="fr-field"><span class="fr-label">Round stage</span>' +
          '<select id="frStage" class="scr-text">' +
            '<option value="">Not set</option>' +
            FR_STAGES.map(function (s) {
              return '<option value="' + frEsc(s) + '"' +
                (r.roundStage === s ? ' selected' : '') + '>' + frEsc(s) + '</option>';
            }).join('') +
          '</select></label>' +
        '<label class="fr-field"><span class="fr-label">Target close</span>' +
          '<input id="frClose" class="scr-text" type="date" value="' +
          frEsc(r.targetCloseDate || '') + '"></label>' +
      '</div>' +

      '<div class="fr-row">' +
        '<label class="fr-field fr-field-wide"><span class="fr-label">Target amount ' +
          '<span class="fr-optional">optional</span></span>' +
          '<input id="frAmount" class="scr-text" type="number" min="0" step="any" ' +
          'inputmode="decimal" placeholder="3000000" value="' +
          frEsc(r.targetAmount == null ? '' : r.targetAmount) + '"></label>' +
        '<label class="fr-field"><span class="fr-label">Currency</span>' +
          '<select id="frCurrency" class="scr-text">' +
            FR_CURRENCIES.map(function (c) {
              return '<option value="' + c + '"' +
                ((r.currency || 'USD') === c ? ' selected' : '') + '>' + c + '</option>';
            }).join('') +
          '</select></label>' +
      '</div>' +

      '<label class="fr-field"><span class="fr-label">Your company ' +
        '<span class="fr-optional">optional</span></span>' +
        '<input id="frCompany" class="scr-text" type="text" maxlength="200" ' +
        'placeholder="Your startup" value="' + frEsc(r.companyName || '') + '"></label>' +
      '<p class="fr-note">Typing your company here does not add it to Power Board research. ' +
      'Research records are sourced and reviewed; this is private context for your own raise.</p>' +

      '<label class="fr-field"><span class="fr-label">Geography ' +
        '<span class="fr-optional">optional</span></span>' +
        '<input id="frGeo" class="scr-text" type="text" maxlength="120" ' +
        'placeholder="US, Europe, remote" value="' + frEsc(r.geography || '') + '"></label>' +

      '<label class="fr-field"><span class="fr-label">Description ' +
        '<span class="fr-optional">optional</span></span>' +
        '<textarea id="frDesc" class="scr-text fr-textarea" rows="3" maxlength="2000" ' +
        'placeholder="What you are building and what this round is for">' +
        frEsc(r.description || '') + '</textarea></label>' +

      (ctxSummary
        ? '<div class="fr-ctx-box"><span class="fr-label">Startup context</span>' +
          '<div class="fr-ctx-val">' + frEsc(ctxSummary) + '</div>' +
          '<p class="fr-note">' + (existing
            ? 'Saved with this raise.'
            : 'Carried over from your Power Match answers so you do not repeat them.') +
          '</p></div>'
        : '') +

      '<div class="fr-form-actions">' +
        '<button type="button" class="ds-btn" data-fr-save="' + frEsc(r.id || '') + '">' +
          (existing ? 'Save changes' : 'Create raise') + '</button>' +
        '<button type="button" class="ac-act ac-act-quiet" data-fr-close="1">Cancel</button>' +
      '</div>' +
      '<div class="fr-form-err" id="frErr" role="alert"></div>' +
    '</div></div>';

  document.body.appendChild(el);
  const nameEl = document.getElementById('frName');
  if (nameEl) nameEl.focus();

  el.addEventListener('click', async function (e) {
    if (e.target.closest('[data-fr-close]')) { el.remove(); return; }
    const save = e.target.closest('[data-fr-save]');
    if (!save) return;

    const name = (document.getElementById('frName').value || '').trim();
    const err = document.getElementById('frErr');
    if (!name) {
      err.textContent = 'Give the raise a name so you can tell it apart later.';
      document.getElementById('frName').focus();
      return;
    }

    const def = {
      name: name,
      roundStage: document.getElementById('frStage').value || null,
      targetAmount: document.getElementById('frAmount').value || null,
      currency: document.getElementById('frCurrency').value || 'USD',
      targetCloseDate: document.getElementById('frClose').value || null,
      description: (document.getElementById('frDesc').value || '').trim() || null,
      geography: (document.getElementById('frGeo').value || '').trim() || null,
      companyName: (document.getElementById('frCompany').value || '').trim() || null,
      companySlug: r.companySlug || null,
      startupContext: ctx
    };

    save.disabled = true;
    save.textContent = 'Saving...';
    const res = existing ? await frUpdate(r.id, def) : await frCreate(def);
    if (res && res.error) {
      save.disabled = false;
      save.textContent = existing ? 'Save changes' : 'Create raise';
      err.textContent = res.error;
      return;
    }
    el.remove();
    renderFundraise();
  });
}

/* ---------- events ---------- */

function frBind(host) {
  if (host.dataset.frBound) return;
  host.dataset.frBound = '1';

  host.addEventListener('click', async function (e) {
    if (e.target.closest('[data-fr-new]')) { frOpenForm(null); return; }

    const edit = e.target.closest('[data-fr-edit]');
    if (edit) { frOpenForm(await frGet(edit.getAttribute('data-fr-edit'))); return; }

    const act = e.target.closest('[data-fr-activate]');
    if (act) { await frSetActive(act.getAttribute('data-fr-activate')); renderFundraise(); return; }

    const arch = e.target.closest('[data-fr-archive]');
    if (arch) {
      const r = await frGet(arch.getAttribute('data-fr-archive'));
      /* Confirmed because it changes what the workspace opens on, but
         worded honestly: nothing is destroyed, so it should not read
         like a delete. */
      const ok = window.confirm(
        'Archive "' + (r ? r.name : 'this raise') + '"?\n\n' +
        'Its targets, stages, notes and history are all kept and you can reopen it at any time. ' +
        'It just stops being the raise your workspace opens on.'
      );
      if (!ok) return;
      await frArchive(arch.getAttribute('data-fr-archive'));
      renderFundraise();
      return;
    }

    const res = e.target.closest('[data-fr-restore]');
    if (res) { await frRestore(res.getAttribute('data-fr-restore')); renderFundraise(); return; }
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    frMoney: frMoney, frDate: frDate, frRowToDef: frRowToDef, frDefToRow: frDefToRow,
    frContextSummary: frContextSummary, frCard: frCard
  };
}
