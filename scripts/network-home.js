/* ============================================================
   NETWORK-HOME.JS - the Power Network homepage (#network)

   The page answers one question: WHO SHOULD I KNOW RIGHT NOW, AND
   WHY. Everything here serves the loop need -> person -> reason ->
   profile -> follow/message.

   WHAT THIS FILE WILL NOT DO
   - No match percentage. There is no calibrated methodology for a
     person match, so a number would be the same fabrication as a
     firm-fit score. People are ranked and every one carries the
     concrete reasons it surfaced.
   - No popularity anywhere. Followers, follower counts, post counts,
     profile views and activity volume are never read and never
     ranked on. A profile with zero followers and the right stated
     expertise outranks a well-followed generalist.
   - No invented activity. There is no posts table in this schema, so
     "From your network" reports what the people you follow have
     THEMSELVES declared they are looking for, sourced from their
     profile fields. It is not a feed and does not pretend to be one.
     A real activity stream needs the Phase 3 posts table first.
   - No filler. Every section returns nothing rather than something
     when the data is not there, the same rule the signal ticker and
     Best-Fit Partner already follow.

   RELEVANCE INPUTS
   Only structured, self-declared profile fields, each of which
   produces a reason string a person can read and disagree with:
     their help_with   vs  my looking_for      they can help me
     their looking_for vs  my help_with        I can help them
     their expertise   vs  my expertise        shared ground
     their roles       vs  roles my needs imply
     their uses_for                            open to this contact
   Power Match context is folded in when a real search exists.
   ============================================================ */

const PBNH_MIN_SIGNALS = 2;    // same floor as network-relevance.js
const PBNH_MAX_RELEVANT = 8;
const PBNH_MAX_ACTIVITY = 6;
const PBNH_PROFILE_FETCH = 200;

/* Need-first discovery. The left side is what a person would say they
   need; the right side is the stated fields that actually answer it.
   This is the differentiator: LinkedIn discovery starts from a job
   title, this starts from a need. */
const PBNH_NEEDS = [
  ['Technical Help',        { roles: ['CTO', 'Engineer'], uses: ['Offering Expertise'], exp: ['Software Engineering', 'AI / ML', 'Developer Infrastructure'] }],
  ['Fundraising Help',      { roles: ['VC', 'Angel', 'Advisor'], uses: ['Angel Investing', 'Finding Investors'], exp: ['Fundraising'] }],
  ['GTM / Sales',           { roles: ['Sales', 'Operator'], uses: ['Offering Expertise'], exp: ['Enterprise GTM', 'Sales'] }],
  ['Marketing / Growth',    { roles: ['Marketing'], uses: ['Offering Expertise'], exp: ['Marketing', 'Growth', 'Brand'] }],
  ['Hiring',                { roles: ['Operator'], uses: ['Hiring', 'Finding Technical Talent', 'Finding GTM Talent'], exp: ['Hiring'] }],
  ['Advisors',              { roles: ['Advisor'], uses: ['Finding Advisors', 'Offering Expertise', 'Board Opportunities'], exp: [] }],
  ['Cofounders',            { roles: ['Founder', 'CTO'], uses: ['Finding a Cofounder'], exp: [] }],
  ['Customers / Partners',  { roles: ['Operator', 'Founder'], uses: ['Finding Customers', 'Finding Partnerships'], exp: ['Partnerships'] }],
  ['Other Founders',        { roles: ['Founder', 'CEO'], uses: ['Meeting Founders'], exp: [] }],
  ['Investors',             { roles: ['VC', 'Angel'], uses: ['Angel Investing'], exp: [] }]
];

/* The quick filters along the top. Deliberately fewer than the need
   list: these are coarse cuts, the need list is the real instrument. */
const PBNH_QUICK = [
  ['Founders',        { roles: ['Founder', 'CEO'] }],
  ['Technical',       { roles: ['CTO', 'Engineer'] }],
  ['GTM',             { roles: ['Sales', 'Marketing'] }],
  ['Investors',       { roles: ['VC', 'Angel'] }],
  ['Advisors',        { roles: ['Advisor'] }],
  ['Hiring',          { uses: ['Hiring', 'Finding Technical Talent', 'Finding GTM Talent'] }],
  ['Raising Capital', { uses: ['Raising Capital', 'Finding Investors'] }]
];

/* Fields that actually drive recommendations. Missing ones are what
   the completion prompt asks for - and only those, because asking for
   a field that changes nothing is busywork. */
const PBNH_SIGNAL_FIELDS = [
  ['looking_for', 'Add what you are looking for', 'Nothing can be matched to your needs without this.'],
  ['help_with',   'Add what you can help with',   'This is how other people find you.'],
  ['expertise',   'Add your expertise',           'Used to find shared ground.'],
  ['roles',       'Add your role',                'Used to match complementary people.'],
  ['uses_for',    'Add what you use Power Board for', 'Signals what contact you welcome.']
];

let pbnhQuick = null;      // active quick filter label
let pbnhNeed = null;       // active need label

function pbnhC() { return (typeof supabaseClient !== 'undefined') ? supabaseClient : null; }
function pbnhMe() { return (typeof pbnUid === 'function') ? pbnUid() : null; }
function pbnhEsc(v) { return (typeof pbnEsc === 'function') ? pbnEsc(v) : String(v == null ? '' : v); }
function pbnhUrl(v) { return (typeof pbnUrl === 'function') ? pbnUrl(v) : encodeURIComponent(String(v || '')); }

function pbnhArr(v) { return Array.isArray(v) ? v : []; }

function pbnhOverlap(a, b) {
  const B = new Set(pbnhArr(b).map(function (x) { return String(x).toLowerCase(); }));
  return pbnhArr(a).filter(function (x) { return B.has(String(x).toLowerCase()); });
}

/* ---------- my side of the comparison ----------
   Built from my own published profile, plus Power Match state when a
   real search exists. Returns hasAny:false when there is nothing to
   compare against, which is what drives the honest empty state rather
   than a page of arbitrary people. */
function pbnhMyContext() {
  const p = (typeof pbnMyProfile !== 'undefined' && pbnMyProfile) ? pbnMyProfile : null;
  const ctx = {
    myLookingFor: pbnhArr(p && p.looking_for),
    myHelpWith:   pbnhArr(p && p.help_with),
    myExpertise:  pbnhArr(p && p.expertise),
    myRoles:      pbnhArr(p && p.roles),
    myUsesFor:    pbnhArr(p && p.uses_for),
    matchSectors: [],
    matchLabel:   null
  };

  /* Power Match context, only when the user has actually run one.
     finderSectors is the live selection on the Power Match view. */
  try {
    if (typeof finderSectors !== 'undefined' && finderSectors && finderSectors.size) {
      ctx.matchSectors = [...finderSectors];
    }
  } catch (e) {}
  if (ctx.matchSectors.length && typeof PBR_SECTOR_TO_EXPERTISE !== 'undefined') {
    const add = [];
    ctx.matchSectors.forEach(function (s) {
      (PBR_SECTOR_TO_EXPERTISE[s] || []).forEach(function (x) {
        if (add.indexOf(x) < 0) add.push(x);
      });
    });
    ctx.matchExpertise = add;
    ctx.matchLabel = ctx.matchSectors.slice(0, 2).join(' and ');
  } else {
    ctx.matchExpertise = [];
  }

  ctx.hasAny = !!(ctx.myLookingFor.length || ctx.myHelpWith.length ||
                  ctx.myExpertise.length || ctx.myRoles.length || ctx.matchExpertise.length);
  return ctx;
}

/* ---------- why one person is relevant ----------
   Returns null below the signal floor so a single loose hit can never
   put someone in front of anyone. Every branch appends a sentence
   that names the actual overlapping values. */
function pbnhReasons(p, ctx) {
  const reasons = [];
  let signals = 0, weight = 0;

  const helpsMe = pbnhOverlap(p.help_with, ctx.myLookingFor);
  if (helpsMe.length) {
    signals++; weight += 5 * helpsMe.length;
    reasons.push('Can help with ' + helpsMe.slice(0, 2).join(' and ') +
                 ', which you said you are looking for');
  }

  const iHelpThem = pbnhOverlap(p.looking_for, ctx.myHelpWith);
  if (iHelpThem.length) {
    signals++; weight += 4 * iHelpThem.length;
    reasons.push('Looking for ' + iHelpThem.slice(0, 2).join(' and ') +
                 ', which you said you can help with');
  }

  const sharedExp = pbnhOverlap(p.expertise, ctx.myExpertise);
  if (sharedExp.length) {
    signals++; weight += 2 * sharedExp.length;
    reasons.push('Shared expertise in ' + sharedExp.slice(0, 2).join(' and '));
  }

  const matchExp = pbnhOverlap(p.expertise, ctx.matchExpertise);
  if (matchExp.length && ctx.matchLabel) {
    signals++; weight += 3;
    reasons.push(matchExp.slice(0, 2).join(' and ') +
                 ' expertise, relevant to your ' + ctx.matchLabel + ' search');
  }

  /* Role complement: a founder wanting technical help and a CTO
     offering expertise are complementary, and the reason says so
     rather than asserting a generic "recommended for you". */
  const openUses = (typeof PBR_OPEN_USES !== 'undefined') ? PBR_OPEN_USES
    : ['Offering Expertise', 'Meeting Founders', 'Finding Advisors',
       'Angel Investing', 'Exploring Startups', 'Networking', 'Board Opportunities'];
  const open = pbnhOverlap(p.uses_for, openUses);
  if (open.length) {
    signals++; weight += 1;
    reasons.push('Uses Power Board for ' + open.slice(0, 2).join(' and ').toLowerCase());
  }

  if (signals < PBNH_MIN_SIGNALS) return null;
  return { profile: p, weight: weight, signals: signals, reasons: reasons.slice(0, 3) };
}

/* ---------- data ---------- */
async function pbnhFetchProfiles() {
  const c = pbnhC();
  if (!c) return { rows: [], error: 'Network needs a session to load.' };
  const { data, error } = await c.from('profiles')
    .select('id, username, full_name, headline, current_company, current_title, ' +
            'location, photo_url, uses_for, help_with, looking_for, expertise, ' +
            'roles, show_location, dm_policy')
    .eq('is_published', true).eq('moderation_state', 'active')
    .limit(PBNH_PROFILE_FETCH);
  if (error) return { rows: [], error: (error.code ? error.code + ' ' : '') + error.message };
  return { rows: data || [], error: null };
}

async function pbnhFollowedIds() {
  const c = pbnhC(), me = pbnhMe();
  if (!c || !me) return [];
  const { data, error } = await c.from('network_follows')
    .select('followee_id').eq('follower_id', me);
  if (error) return [];
  return (data || []).map(function (r) { return r.followee_id; });
}

/* ---------- the signature person row ----------
   Compact editorial row, not a card: photo, identity, why, what they
   can help with, what they want, then the three actions. The labels
   are the Power Network vocabulary and are deliberately identical
   everywhere they appear. */
function pbnhPersonRow(entry, opts) {
  const p = entry.profile || entry;
  const reasons = entry.reasons || null;
  const o = opts || {};
  const name = p.full_name || p.username || 'Unnamed';
  const roleBits = [p.current_title, p.current_company].filter(Boolean).join(' · ');
  const expLine = pbnhArr(p.expertise).slice(0, 3).join(' · ');
  const help = pbnhArr(p.help_with).slice(0, 3);
  const want = pbnhArr(p.looking_for).slice(0, 3);
  const loc = (p.show_location && p.location) ? p.location : '';

  let h = '<article class="pbnh-person">';
  h += '<a class="pbnh-person-photo" href="#network/' + pbnhUrl(p.username) + '" aria-hidden="true" tabindex="-1">' +
       ((typeof pbnPhoto === 'function') ? pbnPhoto(p) : '') + '</a>';
  h += '<div class="pbnh-person-body">';
  h += '<div class="pbnh-person-id">' +
       '<a class="pbnh-person-name" href="#network/' + pbnhUrl(p.username) + '">' + pbnhEsc(name) + '</a>' +
       (roleBits ? '<span class="pbnh-person-role">' + pbnhEsc(roleBits) + '</span>' : '') +
       (loc ? '<span class="pbnh-person-loc">' + pbnhEsc(loc) + '</span>' : '') +
       '</div>';
  if (expLine) h += '<div class="pbnh-person-exp">' + pbnhEsc(expLine) + '</div>';

  if (reasons && reasons.length) {
    h += '<div class="pbnh-why">' +
         '<div class="pbnh-label">Why ' + pbnhEsc((name.split(/\s+/)[0]) || 'they') + ' may be relevant</div>' +
         '<ul class="pbnh-why-list">' +
         reasons.map(function (r) { return '<li>' + pbnhEsc(r) + '</li>'; }).join('') +
         '</ul></div>';
  }

  if (help.length || want.length) {
    h += '<div class="pbnh-states">';
    if (help.length) {
      h += '<div class="pbnh-state"><div class="pbnh-label">Can help with</div>' +
           '<div class="pbnh-state-v">' + pbnhEsc(help.join(' · ')) + '</div></div>';
    }
    if (want.length) {
      h += '<div class="pbnh-state"><div class="pbnh-label">Looking for</div>' +
           '<div class="pbnh-state-v">' + pbnhEsc(want.join(' · ')) + '</div></div>';
    }
    h += '</div>';
  }

  h += '<div class="pbnh-person-actions">' +
       '<a class="pbnh-act pbnh-act-p" href="#network/' + pbnhUrl(p.username) + '">View profile &rarr;</a>';
  if (!o.hideFollow && typeof pbnToggleFollow === 'function') {
    h += '<button class="pbnh-act" type="button" data-follow="' + pbnhEsc(p.id) + '">Follow</button>';
  }
  if ((p.dm_policy || 'requests') !== 'nobody') {
    h += '<button class="pbnh-act" type="button" data-msg="' + pbnhEsc(p.id) +
         '" data-policy="' + pbnhEsc(p.dm_policy || 'requests') + '">Message</button>';
  }
  h += '</div></div></article>';
  return h;
}

/* ---------- sections ---------- */

function pbnhSection(id, title, sub, body, more) {
  if (!body) return '';
  return '<section class="pbnh-sec" id="' + id + '">' +
    '<div class="pbnh-sec-head">' +
      '<h2 class="pbnh-h2">' + pbnhEsc(title) + '</h2>' +
      (sub ? '<p class="pbnh-sec-sub">' + pbnhEsc(sub) + '</p>' : '') +
    '</div>' + body +
    (more ? '<div class="pbnh-more">' + more + '</div>' : '') +
    '</section>';
}

/* Profile completion. No percentage and no progress ring: it names
   the fields that actually change recommendations and stops appearing
   once they are set. */
function pbnhCompletionBlock() {
  const me = pbnhMe();
  if (!me) return '';
  const p = (typeof pbnMyProfile !== 'undefined' && pbnMyProfile) ? pbnMyProfile : null;
  if (!p) return '';
  const missing = PBNH_SIGNAL_FIELDS.filter(function (f) {
    return !pbnhArr(p[f[0]]).length;
  });
  if (!missing.length) return '';
  return pbnhSection('pbnhComplete', 'Help Power Board recommend better people',
    'These are the fields recommendations are built from. Nothing else is used.',
    '<ul class="pbnh-missing">' + missing.map(function (f) {
      return '<li><span class="pbnh-missing-t">' + pbnhEsc(f[1]) + '</span>' +
             '<span class="pbnh-missing-d">' + pbnhEsc(f[2]) + '</span></li>';
    }).join('') + '</ul>',
    '<a class="pbnh-link" href="#network/edit">Update profile &rarr;</a>');
}

function pbnhUtilities() {
  const me = pbnhMe();
  if (!me) return '';
  /* Actions, not counts. A follower number on your own homepage is a
     vanity metric and changes no decision. */
  return pbnhSection('pbnhYou', 'Your network', null,
    '<ul class="pbnh-util">' +
      '<li><a href="#network/messages">Messages &rarr;</a></li>' +
      '<li><a href="#network/requests">Message requests &rarr;</a></li>' +
      '<li><a href="#network/notifications">Notifications &rarr;</a></li>' +
      '<li><a href="#network/edit">Edit what you are looking for &rarr;</a></li>' +
    '</ul>', '');
}

/* ---------- the page ---------- */
async function renderNetworkHome() {
  if (typeof pbnEnsureCss === 'function') pbnEnsureCss();
  pbnhEnsureCss();
  const host = document.getElementById('networkView');
  if (!host) return;
  if (typeof pbnLoadMe === 'function') await pbnLoadMe();
  if (typeof pbTrack === 'function') pbTrack('people_page_viewed');

  const me = pbnhMe();
  const myProfile = (typeof pbnMyProfile !== 'undefined') ? pbnMyProfile : null;

  host.innerHTML =
    '<div class="pbnh"><div class="pbn-shell">' +
      '<header class="pbnh-head">' +
        '<div class="pbnh-eyebrow">Power Network</div>' +
        '<h1 class="pbnh-h1">Find people worth knowing.</h1>' +
        '<p class="pbnh-lede">Discover founders, operators, investors, engineers, marketers ' +
        'and advisors based on what they can help with and what they are looking for.</p>' +
      '</header>' +

      '<div class="pbnh-searchbar">' +
        '<input id="pbnhSearch" class="pbnh-search" type="search" autocomplete="off" ' +
          'placeholder="Search people, roles, companies, expertise, or needs" ' +
          'aria-label="Search people">' +
      '</div>' +
      '<nav class="pbnh-quick" id="pbnhQuick" aria-label="Quick filters">' +
        PBNH_QUICK.map(function (q) {
          return '<button type="button" class="pbnh-chip" data-quick="' + pbnhEsc(q[0]) + '">' +
                 pbnhEsc(q[0]) + '</button>';
        }).join('') +
        '<button type="button" class="pbnh-chip pbnh-chip-clear" data-quick="">Clear</button>' +
      '</nav>' +

      '<div id="pbnhResults" class="pbnh-results"></div>' +
      '<div id="pbnhSections"><div class="pbnh-loading">Loading Network&hellip;</div></div>' +

      (me ? '' :
        '<div class="pbnh-cta">' +
          '<a class="pbnh-link" href="#signin">Create your profile &rarr;</a>' +
          '<span class="pbnh-cta-note">Browsing is open. Following and messaging need an account.</span>' +
        '</div>') +
    '</div></div>';

  pbnhWireSearch();
  pbnhWireActions(host);

  const fetched = await pbnhFetchProfiles();
  const box = document.getElementById('pbnhSections');
  if (!box) return;

  if (fetched.error) {
    box.innerHTML = '<div class="pbnh-empty">Could not load Network.<br>' +
      '<span class="pbnh-hint">' + pbnhEsc(fetched.error) + '</span></div>';
    return;
  }

  const others = fetched.rows.filter(function (p) { return p.id !== me; });
  pbnhAll = others;

  let html = '';

  /* --- Relevant to you --- */
  const ctx = pbnhMyContext();
  if (me && ctx.hasAny) {
    const ranked = others.map(function (p) { return pbnhReasons(p, ctx); })
      .filter(Boolean)
      .sort(function (a, b) { return b.weight - a.weight || b.signals - a.signals; })
      .slice(0, PBNH_MAX_RELEVANT);
    if (ranked.length) {
      html += pbnhSection('pbnhRelevant', 'Relevant to you',
        ctx.matchLabel
          ? 'People whose stated expertise, goals or offers overlap with your profile and your ' + ctx.matchLabel + ' search.'
          : 'People whose stated experience, goals or expertise overlap with what you are looking for.',
        '<div class="pbnh-people">' + ranked.map(function (r) { return pbnhPersonRow(r); }).join('') + '</div>');
    } else {
      html += pbnhSection('pbnhRelevant', 'Relevant to you', null,
        '<div class="pbnh-empty">No published profile overlaps your stated needs yet. ' +
        'Nothing is shown rather than filling the space with people picked at random.</div>');
    }
  } else if (me) {
    /* Signed in, but nothing to match on. Ask for the inputs rather
       than inventing recommendations. */
    html += pbnhSection('pbnhRelevant', 'Tell Power Board what you are looking for',
      'Recommendations are built from what you say you need, what you can help with, and your expertise. Without those there is nothing honest to rank on.',
      '<div class="pbnh-empty">' +
      '<a class="pbnh-link" href="#network/edit">Add what you are looking for &rarr;</a></div>');
  }

  /* --- Browse by what you need --- */
  html += pbnhSection('pbnhNeeds', 'What are you looking for?',
    'Start from the need rather than the job title.',
    '<div class="pbnh-needs">' + PBNH_NEEDS.map(function (n) {
      return '<button type="button" class="pbnh-need" data-need="' + pbnhEsc(n[0]) + '">' +
             pbnhEsc(n[0]) + '</button>';
    }).join('') + '</div>');

  /* --- From your network --- */
  if (me) {
    const followed = await pbnhFollowedIds();
    const fset = new Set(followed);
    const fRows = others.filter(function (p) { return fset.has(p.id); });
    if (fRows.length) {
      const items = fRows.filter(function (p) {
        return pbnhArr(p.looking_for).length || pbnhArr(p.uses_for).length;
      }).slice(0, PBNH_MAX_ACTIVITY);
      if (items.length) {
        html += pbnhSection('pbnhFollowing', 'From your network',
          'What the people you follow say they are looking for.',
          '<div class="pbnh-activity">' + items.map(function (p) {
            const line = pbnhArr(p.looking_for).length
              ? 'Looking for ' + pbnhArr(p.looking_for).slice(0, 3).join(' · ')
              : 'Using Power Board for ' + pbnhArr(p.uses_for).slice(0, 3).join(' · ');
            return '<div class="pbnh-act-row">' +
              '<div class="pbnh-act-id">' +
                '<a href="#network/' + pbnhUrl(p.username) + '">' + pbnhEsc(p.full_name || p.username) + '</a>' +
                '<span>' + pbnhEsc([p.current_title, p.current_company].filter(Boolean).join(' · ')) + '</span>' +
              '</div>' +
              '<div class="pbnh-act-line">' + pbnhEsc(line) + '</div>' +
              '<a class="pbnh-act-link" href="#network/' + pbnhUrl(p.username) + '">View profile &rarr;</a>' +
            '</div>';
          }).join('') + '</div>',
          /* No "view all" link: there is no #network/following route and
             no activity archive to point at. Advertising a page that has
             still to be built is the one thing the footer rule forbids,
             and it applies here too. */
          '');
      }
    }
  }

  html += pbnhUtilities();
  html += pbnhCompletionBlock();

  /* Nothing above produced anything: say so honestly rather than
     rendering a page of headings over empty boxes. */
  if (!html) {
    html = '<div class="pbnh-empty">Network is new. Profiles appear here once people publish them.</div>';
  }
  box.innerHTML = html;
  pbnhWireActions(box);
}

let pbnhAll = [];

/* ---------- filtering ---------- */
function pbnhMatchesQuick(p, def) {
  if (def.roles && pbnhOverlap(p.roles, def.roles).length) return true;
  if (def.uses && pbnhOverlap(p.uses_for, def.uses).length) return true;
  if (def.exp && pbnhOverlap(p.expertise, def.exp).length) return true;
  return false;
}

/* A need match also explains itself, so results from "Fundraising
   Help" carry the same WHY treatment as personalised ones. */
function pbnhNeedReasons(p, label, def) {
  const out = [];
  const r = pbnhOverlap(p.roles, def.roles || []);
  if (r.length) out.push(r[0] + ', a role that fits ' + label.toLowerCase());
  const u = pbnhOverlap(p.uses_for, def.uses || []);
  if (u.length) out.push('Uses Power Board for ' + u.slice(0, 2).join(' and ').toLowerCase());
  const e = pbnhOverlap(p.expertise, def.exp || []);
  if (e.length) out.push(e.slice(0, 2).join(' and ') + ' expertise');
  const h = pbnhArr(p.help_with);
  if (h.length && out.length < 3) out.push('Can help with ' + h.slice(0, 2).join(' and '));
  return out.slice(0, 3);
}

function pbnhRenderFiltered(title, list, sub) {
  const box = document.getElementById('pbnhResults');
  const sections = document.getElementById('pbnhSections');
  if (!box) return;
  if (!title) {
    box.innerHTML = '';
    if (sections) sections.style.display = '';
    return;
  }
  if (sections) sections.style.display = 'none';
  box.innerHTML = pbnhSection('pbnhFiltered', title, sub,
    list.length
      ? '<div class="pbnh-people">' + list.map(function (e) { return pbnhPersonRow(e); }).join('') + '</div>'
      : '<div class="pbnh-empty">No published profile matches that yet.</div>',
    '<button type="button" class="pbnh-link pbnh-reset">Back to Network &rarr;</button>');
  pbnhWireActions(box);
}

function pbnhApplyNeed(label) {
  const def = (PBNH_NEEDS.filter(function (n) { return n[0] === label; })[0] || [])[1];
  if (!def) return;
  pbnhNeed = label; pbnhQuick = null;
  const list = pbnhAll.filter(function (p) { return pbnhMatchesQuick(p, def); })
    .map(function (p) { return { profile: p, reasons: pbnhNeedReasons(p, label, def) }; });
  pbnhRenderFiltered(label, list, 'People whose stated roles, expertise or intent answer this need.');
}

function pbnhApplyQuick(label) {
  if (!label) { pbnhQuick = null; pbnhNeed = null; pbnhRenderFiltered(null); pbnhSyncChips(); return; }
  const def = (PBNH_QUICK.filter(function (q) { return q[0] === label; })[0] || [])[1];
  if (!def) return;
  pbnhQuick = label; pbnhNeed = null;
  const list = pbnhAll.filter(function (p) { return pbnhMatchesQuick(p, def); })
    .map(function (p) { return { profile: p, reasons: pbnhNeedReasons(p, label, def) }; });
  pbnhRenderFiltered(label, list, null);
  pbnhSyncChips();
}

function pbnhSyncChips() {
  [].slice.call(document.querySelectorAll('.pbnh-chip')).forEach(function (b) {
    b.classList.toggle('is-on', !!b.dataset.quick && b.dataset.quick === pbnhQuick);
  });
}

/* Free-text search across every field the brief names, run in memory
   over the already-fetched set so typing does not issue a query per
   keystroke. */
function pbnhSearch(term) {
  const t = term.trim().toLowerCase();
  if (!t) { pbnhRenderFiltered(null); return; }
  const hit = pbnhAll.filter(function (p) {
    const hay = [p.full_name, p.username, p.headline, p.current_company, p.current_title,
                 (p.show_location ? p.location : ''),
                 pbnhArr(p.expertise).join(' '), pbnhArr(p.help_with).join(' '),
                 pbnhArr(p.looking_for).join(' '), pbnhArr(p.uses_for).join(' '),
                 pbnhArr(p.roles).join(' ')].join(' ').toLowerCase();
    return hay.indexOf(t) >= 0;
  }).map(function (p) { return { profile: p, reasons: null }; });
  pbnhRenderFiltered('Results for "' + term.trim() + '"', hit, null);
}

function pbnhWireSearch() {
  const s = document.getElementById('pbnhSearch');
  if (!s) return;
  let t = null;
  s.addEventListener('input', function () {
    clearTimeout(t);
    t = setTimeout(function () {
      if (typeof pbTrack === 'function' && s.value.trim()) pbTrack('people_search_started');
      pbnhSearch(s.value);
    }, 220);
  });
}

/* One delegated handler per container. Follow and Message reuse the
   existing implementations rather than duplicating their rules; the
   sign-in redirect and the after-auth return are theirs already. */
function pbnhWireActions(root) {
  if (!root || root.dataset.pbnhWired === '1') return;
  root.dataset.pbnhWired = '1';
  root.addEventListener('click', function (e) {
    const q = e.target.closest('[data-quick]');
    if (q) { pbnhApplyQuick(q.dataset.quick); return; }
    const n = e.target.closest('[data-need]');
    if (n) { pbnhApplyNeed(n.dataset.need); return; }
    if (e.target.closest('.pbnh-reset')) {
      const s = document.getElementById('pbnhSearch'); if (s) s.value = '';
      pbnhQuick = null; pbnhNeed = null; pbnhRenderFiltered(null); pbnhSyncChips();
      return;
    }
    const f = e.target.closest('[data-follow]');
    if (f && typeof pbnToggleFollow === 'function') { pbnToggleFollow(f.dataset.follow, f); return; }
    const m = e.target.closest('[data-msg]');
    if (m && typeof pbmOpenOrStart === 'function') { pbmOpenOrStart(m.dataset.msg, m.dataset.policy); }
  });
}

/* network.css is injected by network.js; this adds only the homepage
   rules, in its own tag so neither file has to know about the other. */
function pbnhEnsureCss() {
  if (document.getElementById('pbnhCss')) return;
  const l = document.createElement('link');
  l.id = 'pbnhCss'; l.rel = 'stylesheet'; l.href = 'styles/network-home.css';
  document.head.appendChild(l);
}
