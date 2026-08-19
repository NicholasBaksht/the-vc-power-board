/* ============================================================
   FIRM-CLAIMS.JS
   "Represent this firm?" - claiming a listing and suggesting
   corrections to it.

   WHAT THIS FILE CANNOT DO, BY CONSTRUCTION:
   it cannot change a firm. Every path here writes to
   firm_claims / firm_update_requests, which are staging tables
   with no update or delete policy and no link to data-firms.js.
   A submission is a request for a human to look at something.

   The independence boundary is enforced in the DATABASE, not
   here: firm_update_requests.field_key has a CHECK constraint
   listing only factual fields, so a crafted request naming
   'power_capabilities' or 'power_score' is rejected by Postgres.
   The field list below mirrors that constraint for the UI's
   sake; the constraint is what actually holds.
   ============================================================ */

const FC_CLAIM_TABLE  = 'firm_claims';
const FC_UPDATE_TABLE = 'firm_update_requests';

/* Fields a firm legitimately owns the facts about. Deliberately
   excludes everything Power Board concludes on its own. */
const FC_FIELDS = [
  { key: 'website',        label: 'Website',                read: function (f) { return f.website; } },
  { key: 'linkedin',       label: 'LinkedIn',               read: function () { return null; } },
  { key: 'hq',             label: 'Headquarters',           read: function (f) { return f.hq; } },
  { key: 'founded',        label: 'Founded',                read: function (f) { return f.founded; } },
  { key: 'aum',            label: 'Assets under management', read: function (f) { return f.aum; } },
  { key: 'sectors',        label: 'Sectors',                read: function (f) { return (f.sectors || []).join(', '); } },
  { key: 'stages',         label: 'Investment stages',      read: function (f) {
      return (typeof firmStages !== 'undefined' && firmStages[f.slug]) ? firmStages[f.slug].join(', ') : null; } },
  { key: 'check_size',     label: 'Typical check size',     read: function () { return null; } },
  { key: 'thesis',         label: 'Description / thesis',   read: function (f) { return f.thesis; } },
  { key: 'leadership',     label: 'Team',                   read: function (f) {
      return (f.leadership || []).map(function (l) { return l.name + ' (' + l.role + ')'; }).join('; '); } },
  { key: 'signature_exit', label: 'Signature exit',         read: function (f) { return f.signatureExit; } },
  { key: 'portfolio',      label: 'Portfolio',              read: function (f) { return (f.holdings || []).map(function (h) { return h.name; }).join(', '); } },
  { key: 'other',          label: 'Something else',         read: function () { return null; } }
];

const FC_SOURCE_TYPES = [
  ['official_website', 'Official website'], ['team_page', 'Official team page'],
  ['portfolio_page', 'Official portfolio page'], ['linkedin', 'LinkedIn'],
  ['fund_announcement', 'Fund announcement'], ['press_release', 'Press release'],
  ['other', 'Other source']
];

function fcClient() { return (typeof supabaseClient !== 'undefined' && supabaseClient) ? supabaseClient : null; }
function fcUid() { return (typeof currentUser !== 'undefined' && currentUser) ? currentUser.id : null; }
function fcEsc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ---------- duplicate detection ----------
   Run BEFORE anyone fills in a listing request. Someone typing
   "Sequoia" should be sent to the existing profile to claim, not
   invited to create a second record of a firm we already track. */
function fcNormalise(s) {
  return String(s || '').toLowerCase()
    .replace(/\b(ventures?|capital|partners?|management|group|fund|llc|lp|ltd|inc)\b/g, '')
    .replace(/[^a-z0-9]+/g, '').trim();
}
function fcDomain(url) {
  const m = String(url || '').match(/^https?:\/\/(?:www\.)?([^\/\s:]+)/i);
  return m ? m[1].toLowerCase() : null;
}
function findLikelyExistingFirm(name, website) {
  if (typeof firms === 'undefined') return null;
  const n = fcNormalise(name);
  const d = fcDomain(website);
  if (!n && !d) return null;
  let best = null;
  firms.forEach(function (f) {
    if (best) return;
    if (d && fcDomain(f.website) === d) { best = { firm: f, on: 'website domain' }; return; }
    const fn = fcNormalise(f.name);
    if (!n || !fn) return;
    if (fn === n) { best = { firm: f, on: 'firm name' }; return; }
    // one containing the other, but only when the shorter is substantial -
    // "peak" inside "peakspan" is not a match worth acting on.
    if (n.length >= 5 && (fn.indexOf(n) === 0 || n.indexOf(fn) === 0)) {
      best = { firm: f, on: 'a very similar name' };
    }
  });
  return best;
}

/* ---------- submission ---------- */
function fcSubmitClaim(payload) {
  const c = fcClient();
  if (!c) return Promise.resolve({ ok: false, message: 'Submissions are unavailable right now. Please try again later.' });

  const email = String(payload.email || '').trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return Promise.resolve({ ok: false, message: 'Enter a valid professional email address.' });
  }
  if (String(payload.name || '').trim().length < 2) {
    return Promise.resolve({ ok: false, message: 'Enter your name.' });
  }

  /* Domain hint only. Whether the email domain matches the firm's website
     is useful triage, but a matching domain is not proof of authority and
     the column is named so nobody downstream mistakes it for verification. */
  const firm = (typeof firms !== 'undefined') ? firms.find(function (f) { return f.slug === payload.firmSlug; }) : null;
  const firmDomain = firm ? fcDomain(firm.website) : null;
  const emailDomain = email.split('@')[1] || '';
  const hint = !firmDomain ? 'unknown'
             : (emailDomain === firmDomain || firmDomain.indexOf('.' + emailDomain) !== -1
                || emailDomain.indexOf(firmDomain) !== -1) ? 'match' : 'mismatch';

  return c.from(FC_CLAIM_TABLE).insert({
    firm_slug: payload.firmSlug,
    claimant_id: fcUid(),
    contact_name: String(payload.name).trim().slice(0, 120),
    contact_role: (payload.role || '').trim().slice(0, 120) || null,
    contact_email: email.slice(0, 320),
    linkedin_url: (payload.linkedin || '').trim() || null,
    evidence_url: (payload.evidence || '').trim() || null,
    note: (payload.note || '').trim().slice(0, 1000) || null,
    domain_hint: hint
  }).select('id').then(function (res) {
    if (res.error) {
      if (typeof console !== 'undefined') console.warn('claim insert failed:', res.error);
      const dupe = /duplicate key/i.test(res.error.message || '');
      return { ok: false, message: dupe
        ? 'A claim for this firm has already been submitted from that email address.'
        : 'That did not save. Please try again in a moment.' };
    }
    return { ok: true, claimId: (res.data && res.data[0]) ? res.data[0].id : null, hint: hint };
  }).catch(function () {
    return { ok: false, message: 'That did not save. Please check your connection and try again.' };
  });
}

function fcSubmitUpdates(firmSlug, claimId, rows) {
  const c = fcClient();
  if (!c) return Promise.resolve({ ok: false, message: 'Submissions are unavailable right now.' });
  const clean = rows.filter(function (r) { return String(r.proposed || '').trim().length; });
  if (!clean.length) return Promise.resolve({ ok: false, message: 'Add at least one correction before submitting.' });

  const allowed = FC_FIELDS.map(function (f) { return f.key; });
  const payload = clean.filter(function (r) { return allowed.indexOf(r.field) !== -1; }).map(function (r) {
    return {
      firm_slug: firmSlug,
      claim_id: claimId || null,
      submitted_by: fcUid(),
      field_key: r.field,
      current_value: r.current == null ? null : String(r.current).slice(0, 2000),
      proposed_value: String(r.proposed).trim().slice(0, 2000),
      source_url: (r.sourceUrl || '').trim() || null,
      source_type: r.sourceType || null,
      note: (r.note || '').trim().slice(0, 1000) || null
    };
  });
  if (!payload.length) return Promise.resolve({ ok: false, message: 'None of those fields can be submitted.' });

  return c.from(FC_UPDATE_TABLE).insert(payload).then(function (res) {
    if (res.error) {
      if (typeof console !== 'undefined') console.warn('update insert failed:', res.error);
      return { ok: false, message: 'That did not save. Please try again in a moment.' };
    }
    return { ok: true, count: payload.length };
  }).catch(function () {
    return { ok: false, message: 'That did not save. Please check your connection and try again.' };
  });
}

/* ==================================================================
   UI - a two-step drawer on the firm profile.
   Step 1 establishes who you are. Step 2 is the correction form,
   which only appears once step 1 is submitted, so nobody proposes
   changes without leaving a way to check who proposed them.
   ================================================================== */
let fcOpenSlug = null;
let fcClaimId = null;

function renderClaimLink(firm) {
  if (!firm) return '';
  return '<button type="button" class="fc-open" data-claim-slug="' + fcEsc(firm.slug) + '">' +
    'Represent this firm? Claim this listing' +
    '</button>';
}

function fcClaimFormHtml(firm) {
  return '<div class="fc-panel" id="fcPanel">' +
    '<div class="fc-head">' +
      '<div class="fc-eyebrow">Claim this listing</div>' +
      '<button type="button" class="fc-close" aria-label="Close">&times;</button>' +
    '</div>' +
    '<p class="fc-intro">Tell us who you are at ' + fcEsc(firm.name) + '. ' +
    'Once submitted you can suggest corrections to the factual parts of this profile. ' +
    'Everything is reviewed before anything on the public page changes.</p>' +

    '<div class="fc-grid">' +
      '<label class="fc-field"><span>Your name</span>' +
        '<input type="text" id="fcName" maxlength="120" autocomplete="name"></label>' +
      '<label class="fc-field"><span>Your role</span>' +
        '<input type="text" id="fcRole" maxlength="120" placeholder="e.g. Partner, Head of Platform"></label>' +
      '<label class="fc-field"><span>Professional email</span>' +
        '<input type="email" id="fcEmail" maxlength="320" autocomplete="email" placeholder="you@' +
          fcEsc((fcDomain(firm.website) || 'yourfirm.com')) + '"></label>' +
      '<label class="fc-field"><span>Your LinkedIn <em>optional</em></span>' +
        '<input type="url" id="fcLinkedin" maxlength="300" placeholder="https://linkedin.com/in/…"></label>' +
      '<label class="fc-field fc-wide"><span>A page that shows your role <em>optional</em></span>' +
        '<input type="url" id="fcEvidence" maxlength="300" placeholder="https://… team page, announcement"></label>' +
      '<label class="fc-field fc-wide"><span>Anything else <em>optional</em></span>' +
        '<textarea id="fcNote" rows="2" maxlength="1000"></textarea></label>' +
    '</div>' +

    '<div class="fc-actions">' +
      '<button type="button" class="fc-btn" id="fcSubmitClaim">Submit claim</button>' +
      '<span class="fc-status" role="status" aria-live="polite"></span>' +
    '</div>' +

    '<p class="fc-note"><strong>What claiming does and does not do.</strong> ' +
    'It lets you send us verified facts about your firm - website, headquarters, team, ' +
    'fund size, sectors, check size. It does not change Power Board’s own analysis. ' +
    'Power Personality, Power Capabilities, Power Score, Power Match ranking and Conflict Check ' +
    'are produced independently from the data we hold, and a firm cannot edit its own conclusions. ' +
    'Better facts can move them - but only through the same computation every other firm gets.</p>' +
    '</div>';
}

function fcUpdateFormHtml(firm) {
  const rows = FC_FIELDS.map(function (f, i) {
    const cur = f.read(firm);
    return '<div class="fc-row" data-field="' + f.key + '">' +
      '<div class="fc-row-head">' +
        '<span class="fc-row-label">' + fcEsc(f.label) + '</span>' +
        '<button type="button" class="fc-row-toggle" aria-expanded="false">Suggest a correction</button>' +
      '</div>' +
      '<div class="fc-row-body" hidden>' +
        '<div class="fc-compare">' +
          '<div class="fc-compare-col"><span class="fc-compare-k">Power Board has</span>' +
            '<div class="fc-compare-v' + (cur ? '' : ' is-empty') + '">' +
              (cur ? fcEsc(String(cur).slice(0, 300)) : 'Nothing on file') + '</div></div>' +
          '<div class="fc-compare-col"><span class="fc-compare-k">You propose</span>' +
            '<textarea class="fc-proposed" rows="2" maxlength="2000"></textarea></div>' +
        '</div>' +
        '<div class="fc-src">' +
          '<select class="fc-src-type"><option value="">Source type…</option>' +
            FC_SOURCE_TYPES.map(function (s) { return '<option value="' + s[0] + '">' + s[1] + '</option>'; }).join('') +
          '</select>' +
          '<input type="url" class="fc-src-url" maxlength="300" placeholder="https://… link that shows this">' +
        '</div>' +
      '</div></div>';
  }).join('');

  return '<div class="fc-updates">' +
    '<div class="fc-eyebrow">Suggest corrections</div>' +
    '<p class="fc-intro">Open any field you want to correct. Each correction is reviewed on its own, ' +
    'so a change we can verify is not held up by one we cannot. A source makes review much faster.</p>' +
    rows +
    '<div class="fc-actions">' +
      '<button type="button" class="fc-btn" id="fcSubmitUpdates">Submit corrections</button>' +
      '<span class="fc-status fc-status-updates" role="status" aria-live="polite"></span>' +
    '</div></div>';
}

function fcMount(firm) {
  let host = document.getElementById('fcHost');
  if (!host) {
    const anchor = document.querySelector('#detailView .detail-card') || document.getElementById('detailView');
    if (!anchor) return;
    host = document.createElement('div');
    host.id = 'fcHost';
    anchor.appendChild(host);
  }
  host.innerHTML = fcClaimFormHtml(firm);
  host.scrollIntoView({ block: 'nearest' });
}

document.addEventListener('click', function (e) {
  const open = e.target.closest ? e.target.closest('[data-claim-slug]') : null;
  if (open) {
    const slug = open.dataset.claimSlug;
    const firm = (typeof firms !== 'undefined') ? firms.find(function (f) { return f.slug === slug; }) : null;
    if (!firm) return;
    fcOpenSlug = slug; fcClaimId = null;
    fcMount(firm);
    return;
  }
  if (e.target.closest && e.target.closest('.fc-close')) {
    const h = document.getElementById('fcHost'); if (h) h.innerHTML = '';
    fcOpenSlug = null; return;
  }
  const toggle = e.target.closest ? e.target.closest('.fc-row-toggle') : null;
  if (toggle) {
    const body = toggle.closest('.fc-row').querySelector('.fc-row-body');
    const shown = !body.hidden;
    body.hidden = shown;
    toggle.setAttribute('aria-expanded', String(!shown));
    toggle.textContent = shown ? 'Suggest a correction' : 'Cancel';
    return;
  }
  if (e.target.id === 'fcSubmitClaim') {
    const btn = e.target;
    const host = document.getElementById('fcHost');
    const status = host.querySelector('.fc-status');
    const v = function (id) { const el = document.getElementById(id); return el ? el.value : ''; };
    btn.disabled = true; status.textContent = 'Sending…';
    fcSubmitClaim({
      firmSlug: fcOpenSlug, name: v('fcName'), role: v('fcRole'), email: v('fcEmail'),
      linkedin: v('fcLinkedin'), evidence: v('fcEvidence'), note: v('fcNote')
    }).then(function (res) {
      btn.disabled = false;
      if (!res.ok) { status.textContent = res.message; return; }
      fcClaimId = res.claimId;
      const firm = firms.find(function (f) { return f.slug === fcOpenSlug; });
      document.getElementById('fcPanel').innerHTML =
        '<div class="fc-head"><div class="fc-eyebrow">Claim received</div></div>' +
        '<p class="fc-intro"><strong>Thank you - that is logged for review.</strong> ' +
        'We check claims against the firm’s own published sources before marking one verified. ' +
        'We cannot promise a turnaround time, and a claim is not a commitment to change anything. ' +
        'You can suggest corrections now.</p>' + fcUpdateFormHtml(firm);
      return;
    });
    return;
  }
  if (e.target.id === 'fcSubmitUpdates') {
    const btn = e.target;
    const status = document.querySelector('.fc-status-updates');
    const firm = firms.find(function (f) { return f.slug === fcOpenSlug; });
    const rows = Array.from(document.querySelectorAll('.fc-row')).map(function (r) {
      const def = FC_FIELDS.find(function (f) { return f.key === r.dataset.field; });
      return {
        field: r.dataset.field,
        current: def ? def.read(firm) : null,
        proposed: (r.querySelector('.fc-proposed') || {}).value || '',
        sourceUrl: (r.querySelector('.fc-src-url') || {}).value || '',
        sourceType: (r.querySelector('.fc-src-type') || {}).value || ''
      };
    });
    btn.disabled = true; status.textContent = 'Sending…';
    fcSubmitUpdates(fcOpenSlug, fcClaimId, rows).then(function (res) {
      btn.disabled = false;
      if (!res.ok) { status.textContent = res.message; return; }
      document.querySelector('.fc-updates').innerHTML =
        '<div class="fc-eyebrow">Corrections received</div>' +
        '<p class="fc-intro"><strong>' + res.count + ' correction' + (res.count === 1 ? '' : 's') +
        ' logged.</strong> Each is reviewed against its source before anything on this page changes. ' +
        'Nothing you submitted has altered the public profile.</p>';
    });
  }
});
