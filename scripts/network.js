/* ============================================================
   NETWORK.JS - POWER NETWORK (Phase 1 + Follow)

   Nav label "People", route #network. The route is not #people
   because that already resolves to Partner Intelligence.

   WHAT THIS FILE WILL NOT DO
   - It never writes a profile field the user did not type. There is
     no import, no enrichment, no scrape. The LinkedIn affordance is
     a paste box into an editable textarea, nothing more.
   - It never merges a user's self-description with Power Board's
     sourced research. A partner's observed behaviour and a partner's
     self-written "what I can help with" are different claims and are
     rendered in different places with different labels.
   - It shows no match score. There is no methodology for one yet, so
     inventing a number here would be the same mistake as a fake
     firm-fit percentage.

   SECURITY POSTURE
   Every read and write goes through Supabase with RLS on. The client
   does not decide what is visible; the policies do. Buttons are
   hidden for signed-out users as a courtesy, not as protection.
   ============================================================ */

const PBN_USES_FOR = [
  'Raising Capital','Finding Investors','Meeting Founders','Finding a Cofounder',
  'Hiring','Finding Technical Talent','Finding GTM Talent','Looking for a Startup Role',
  'Finding Advisors','Offering Expertise','Angel Investing','Finding Customers',
  'Finding Partnerships','Board Opportunities','Exploring Startups','Networking'
];

const PBN_ROLES = ['Founder','CEO','CTO','Engineer','Product','Design','Marketing',
  'Sales','Operator','Advisor','Angel','VC','Other'];

const PBN_EXPERTISE = ['AI / ML','Software Engineering','Developer Infrastructure',
  'Cybersecurity','Product','Design','Enterprise GTM','Sales','Marketing','Growth',
  'Brand','Fundraising','Hiring','Operations','Finance','Strategy','Partnerships',
  'Legal','Regulatory','Fintech','Healthcare','Biotech','Climate','Energy',
  'Manufacturing','Hardware','Robotics','Supply Chain','Logistics','Consumer',
  'Commerce','Media','Gaming','Sports','Defense','Space','Education','PropTech'];

function pbnEsc(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function pbnClient() { return (typeof supabaseClient !== 'undefined') ? supabaseClient : null; }
function pbnUid() {
  try { return (typeof isSignedIn === 'function' && isSignedIn() && pbnCurrentUser) ? pbnCurrentUser.id : null; }
  catch (e) { return null; }
}
let pbnCurrentUser = null;
let pbnMyProfile = null;

/* The stylesheet is attached from here rather than from index.html,
   which is not hand-edited in this project. */
function pbnEnsureCss() {
  if (document.getElementById('pbnCss')) return;
  const l = document.createElement('link');
  l.id = 'pbnCss'; l.rel = 'stylesheet'; l.href = 'styles/network.css';
  document.head.appendChild(l);
}

async function pbnLoadMe() {
  const c = pbnClient();
  if (!c) return null;
  try {
    const { data: { user } } = await c.auth.getUser();
    pbnCurrentUser = user || null;
    if (!user) { pbnMyProfile = null; return null; }
    const { data } = await c.from('profiles').select('*').eq('id', user.id).maybeSingle();
    pbnMyProfile = data || null;
    return pbnMyProfile;
  } catch (e) { return null; }
}

/* ---------- shared pieces ---------- */

function pbnTags(items, cls) {
  const list = (items || []).filter(Boolean);
  if (!list.length) return '';
  return '<div class="pbn-tags">' + list.map(function (t) {
    return '<span class="pbn-tag' + (cls ? ' ' + cls : '') + '">' + pbnEsc(t) + '</span>';
  }).join('') + '</div>';
}

function pbnPhoto(p, size) {
  const cls = 'pbn-photo' + (size ? ' pbn-photo-' + size : '');
  if (p && p.photo_url) {
    return '<img class="' + cls + '" src="' + pbnEsc(p.photo_url) +
           '" alt="" loading="lazy">';
  }
  const name = (p && (p.full_name || p.username)) || '';
  const initials = name.trim().split(/\s+/).slice(0, 2)
    .map(function (w) { return w[0] || ''; }).join('').toUpperCase();
  return '<span class="' + cls + ' pbn-photo-empty" aria-hidden="true">' +
         pbnEsc(initials || '·') + '</span>';
}

function pbnRoleLine(p) {
  const bits = [];
  if (p.current_title) bits.push(p.current_title);
  if (p.current_company) bits.push(p.current_company);
  return bits.join(' · ');
}

/* ---------- follow ---------- */

async function pbnIsFollowing(targetId) {
  const c = pbnClient(), me = pbnUid();
  if (!c || !me || !targetId) return false;
  const { data } = await c.from('network_follows').select('followee_id')
    .eq('follower_id', me).eq('followee_id', targetId).maybeSingle();
  return !!data;
}

async function pbnToggleFollow(targetId, btn) {
  const c = pbnClient(), me = pbnUid();
  if (!me) { location.hash = '#signin'; return; }
  const following = btn.dataset.following === '1';
  btn.disabled = true;
  try {
    if (following) {
      await c.from('network_follows').delete()
        .eq('follower_id', me).eq('followee_id', targetId);
      btn.dataset.following = '0'; btn.textContent = 'Follow';
      if (typeof pbTrack === 'function') pbTrack('person_unfollowed');
    } else {
      const { error } = await c.from('network_follows')
        .insert({ follower_id: me, followee_id: targetId });
      if (error) throw error;
      btn.dataset.following = '1'; btn.textContent = 'Following';
      if (typeof pbTrack === 'function') pbTrack('person_followed');
    }
  } catch (e) {
    /* A blocked pair is rejected by the policy, not by the button. */
    btn.textContent = 'Unavailable';
  } finally { btn.disabled = false; }
}

/* ---------- people discovery ---------- */

let pbnQuery = '';
let pbnFilterRole = '';
let pbnFilterUses = '';
let pbnFilterExp = '';

async function renderPeopleDiscovery() {
  pbnEnsureCss();
  const host = document.getElementById('networkView');
  if (!host) return;
  await pbnLoadMe();
  if (typeof pbTrack === 'function') pbTrack('people_page_viewed');

  host.innerHTML =
    '<div class="pbn"><div class="pbn-shell">' +
      '<div class="pbn-head">' +
        '<div class="pbn-kicker">Power Network</div>' +
        '<h1 class="pbn-h1">Find people worth knowing.</h1>' +
        '<p class="pbn-lede">Founders, operators, engineers and investors building in the ' +
        'startup ecosystem. Profiles are written by the people themselves, and say what ' +
        'they can help with and what they are looking for.</p>' +
        (pbnUid()
          ? '<div class="pbn-actions">' +
              '<a class="pbn-btn pbn-btn-p" href="#network/edit">' +
              (pbnMyProfile && pbnMyProfile.is_published ? 'Edit my profile' : 'Create my profile') +
              '</a>' +
              (pbnMyProfile && pbnMyProfile.username
                ? '<a class="pbn-btn pbn-btn-s" href="#network/' + pbnEsc(pbnMyProfile.username) + '">View my profile</a>'
                : '') +
            '</div>'
          : '<div class="pbn-actions"><a class="pbn-btn pbn-btn-p" href="#signin">Sign in to create a profile</a></div>') +
      '</div>' +
      '<div class="pbn-controls">' +
        '<input id="pbnSearch" class="pbn-search" type="search" ' +
          'placeholder="Search by name, company, role, expertise or what someone is looking for" ' +
          'aria-label="Search people" value="' + pbnEsc(pbnQuery) + '">' +
        '<div class="pbn-filters">' +
          pbnSelect('pbnFRole', 'Role', PBN_ROLES, pbnFilterRole) +
          pbnSelect('pbnFUses', 'Uses Power Board for', PBN_USES_FOR, pbnFilterUses) +
          pbnSelect('pbnFExp', 'Expertise', PBN_EXPERTISE, pbnFilterExp) +
        '</div>' +
      '</div>' +
      '<div id="pbnResults" class="pbn-results"><div class="pbn-empty">Loading&hellip;</div></div>' +
    '</div></div>';

  const s = document.getElementById('pbnSearch');
  let t = null;
  s.addEventListener('input', function () {
    clearTimeout(t);
    t = setTimeout(function () { pbnQuery = s.value.trim(); pbnRunSearch(); }, 250);
  });
  [['pbnFRole', 'pbnFilterRole'], ['pbnFUses', 'pbnFilterUses'], ['pbnFExp', 'pbnFilterExp']]
    .forEach(function (pair) {
      document.getElementById(pair[0]).addEventListener('change', function (e) {
        if (pair[1] === 'pbnFilterRole') pbnFilterRole = e.target.value;
        if (pair[1] === 'pbnFilterUses') pbnFilterUses = e.target.value;
        if (pair[1] === 'pbnFilterExp') pbnFilterExp = e.target.value;
        pbnRunSearch();
      });
    });
  pbnRunSearch();
}

function pbnSelect(id, label, opts, val) {
  return '<label class="pbn-sel"><span>' + label + '</span>' +
    '<select id="' + id + '"><option value="">Any</option>' +
    opts.map(function (o) {
      return '<option value="' + pbnEsc(o) + '"' + (o === val ? ' selected' : '') + '>' +
             pbnEsc(o) + '</option>';
    }).join('') + '</select></label>';
}

async function pbnRunSearch() {
  const box = document.getElementById('pbnResults');
  const c = pbnClient();
  if (!box) return;
  if (!c) { box.innerHTML = '<div class="pbn-empty">Power Network needs a signed-in session to load.</div>'; return; }
  if (typeof pbTrack === 'function') pbTrack('people_search_started');

  let q = c.from('profiles')
    .select('id, username, full_name, headline, current_company, current_title, location, photo_url, uses_for, help_with, looking_for, expertise, roles, show_location')
    .eq('is_published', true)
    .eq('moderation_state', 'active')
    .limit(60);

  if (pbnFilterRole) q = q.contains('roles', [pbnFilterRole]);
  if (pbnFilterUses) q = q.contains('uses_for', [pbnFilterUses]);
  if (pbnFilterExp)  q = q.contains('expertise', [pbnFilterExp]);
  if (pbnQuery) {
    const like = '%' + pbnQuery.replace(/[%_,]/g, ' ') + '%';
    q = q.or('full_name.ilike.' + like + ',headline.ilike.' + like +
             ',current_company.ilike.' + like + ',current_title.ilike.' + like);
  }

  let rows = [];
  try {
    const { data, error } = await q;
    if (error) throw error;
    rows = data || [];
  } catch (e) {
    box.innerHTML = '<div class="pbn-empty">Could not load people right now.</div>';
    return;
  }
  if (typeof pbTrack === 'function') pbTrack('people_search_completed', { props: { results: rows.length } });

  if (!rows.length) {
    box.innerHTML = '<div class="pbn-empty">' +
      (pbnQuery || pbnFilterRole || pbnFilterUses || pbnFilterExp
        ? 'No published profiles match that search yet.'
        : 'No published profiles yet. Power Network is new, and profiles appear here ' +
          'once people publish them.') +
      '</div>';
    return;
  }

  box.innerHTML = '<div class="pbn-count">' + rows.length + ' ' +
    (rows.length === 1 ? 'person' : 'people') + '</div>' +
    rows.map(function (p) {
      const loc = (p.show_location && p.location) ? p.location : '';
      return '<a class="pbn-row" href="#network/' + pbnEsc(p.username || p.id) + '">' +
        pbnPhoto(p) +
        '<span class="pbn-row-main">' +
          '<span class="pbn-row-name">' + pbnEsc(p.full_name || p.username || 'Unnamed') + '</span>' +
          (pbnRoleLine(p) ? '<span class="pbn-row-role">' + pbnEsc(pbnRoleLine(p)) + '</span>' : '') +
          (p.headline ? '<span class="pbn-row-head">' + pbnEsc(p.headline) + '</span>' : '') +
          ((p.expertise || []).length
            ? '<span class="pbn-row-meta">' + pbnEsc((p.expertise || []).slice(0, 4).join(' · ')) + '</span>' : '') +
          ((p.uses_for || []).length
            ? '<span class="pbn-row-uses"><em>Uses Power Board for</em> ' +
              pbnEsc((p.uses_for || []).slice(0, 3).join(' · ')) + '</span>' : '') +
        '</span>' +
        (loc ? '<span class="pbn-row-loc">' + pbnEsc(loc) + '</span>' : '') +
        '</a>';
    }).join('');
}

/* ---------- profile ---------- */

async function renderNetworkProfile(handle) {
  pbnEnsureCss();
  const host = document.getElementById('networkView');
  if (!host) return;
  if (handle === 'edit') return renderNetworkProfileEdit();

  await pbnLoadMe();
  const c = pbnClient();
  if (!c) { host.innerHTML = '<div class="pbn"><div class="pbn-shell"><div class="pbn-empty">Unavailable.</div></div></div>'; return; }

  let p = null;
  try {
    const { data } = await c.from('profiles').select('*').eq('username', handle).maybeSingle();
    p = data;
  } catch (e) { p = null; }

  if (!p) {
    host.innerHTML = '<div class="pbn"><div class="pbn-shell">' +
      '<a class="pbn-back" href="#network">&larr; People</a>' +
      '<div class="pbn-empty">No published profile for that name.</div></div></div>';
    return;
  }
  if (typeof pbTrack === 'function') pbTrack('people_profile_viewed');

  const me = pbnUid();
  const isMe = me && me === p.id;
  const links = p.links || {};
  const linkRow = Object.keys(links).filter(function (k) { return links[k]; })
    .map(function (k) {
      return '<a class="pbn-link" href="' + pbnEsc(links[k]) + '" target="_blank" rel="noopener">' +
             pbnEsc(k) + ' &#8599;</a>';
    }).join('');

  const [exp, edu] = await Promise.all([
    c.from('network_experience').select('*').eq('user_id', p.id).order('sort_order'),
    p.show_education
      ? c.from('network_education').select('*').eq('user_id', p.id).order('sort_order')
      : Promise.resolve({ data: [] })
  ]);

  const sec = function (title, body) {
    if (!body) return '';
    return '<section class="pbn-sec"><h2 class="pbn-sec-h">' + title + '</h2>' + body + '</section>';
  };

  host.innerHTML =
    '<div class="pbn"><div class="pbn-shell">' +
      '<a class="pbn-back" href="#network">&larr; People</a>' +

      '<header class="pbn-id">' +
        pbnPhoto(p, 'lg') +
        '<div class="pbn-id-main">' +
          '<h1 class="pbn-name">' + pbnEsc(p.full_name || p.username) + '</h1>' +
          (pbnRoleLine(p) ? '<div class="pbn-role">' + pbnEsc(pbnRoleLine(p)) + '</div>' : '') +
          (p.headline ? '<p class="pbn-headline">' + pbnEsc(p.headline) + '</p>' : '') +
          '<div class="pbn-meta">' +
            ((p.show_location && p.location) ? '<span>' + pbnEsc(p.location) + '</span>' : '') +
            linkRow +
          '</div>' +
        '</div>' +
        '<div class="pbn-id-actions">' +
          (isMe
            ? '<a class="pbn-btn pbn-btn-s" href="#network/edit">Edit profile</a>'
            : '<button type="button" class="pbn-btn pbn-btn-p" id="pbnFollowBtn" ' +
              'data-target="' + pbnEsc(p.id) + '" data-following="0">Follow</button>') +
        '</div>' +
      '</header>' +

      sec('Uses Power Board for', pbnTags(p.uses_for, 'pbn-tag-strong')) +

      ((p.help_with || []).length || (p.looking_for || []).length
        ? '<section class="pbn-sec pbn-two">' +
            '<div><h2 class="pbn-sec-h">What I can help with</h2>' +
              pbnListOrNone(p.help_with) + '</div>' +
            '<div><h2 class="pbn-sec-h">What I am looking for</h2>' +
              pbnListOrNone(p.looking_for) + '</div>' +
          '</section>'
        : '') +

      sec('Expertise', pbnTags(p.expertise)) +
      sec('About', p.about ? '<p class="pbn-about">' + pbnEsc(p.about).replace(/\n+/g, '</p><p class="pbn-about">') + '</p>' : '') +

      sec('Experience', (exp.data || []).length
        ? '<ul class="pbn-hist">' + exp.data.map(function (r) {
            const yrs = [r.start_year, r.end_year || (r.start_year ? 'Present' : '')].filter(Boolean).join(' – ');
            return '<li><span class="pbn-hist-t">' + pbnEsc(r.title) + '</span>' +
              '<span class="pbn-hist-c">' + pbnEsc(r.company) + '</span>' +
              (yrs ? '<span class="pbn-hist-y">' + pbnEsc(yrs) + '</span>' : '') +
              (r.description ? '<p class="pbn-hist-d">' + pbnEsc(r.description) + '</p>' : '') +
              '</li>';
          }).join('') + '</ul>'
        : '') +

      sec('Education', (edu.data || []).length
        ? '<ul class="pbn-hist">' + edu.data.map(function (r) {
            return '<li><span class="pbn-hist-t">' + pbnEsc(r.school) + '</span>' +
              (r.field ? '<span class="pbn-hist-c">' + pbnEsc(r.field) + '</span>' : '') +
              (r.end_year ? '<span class="pbn-hist-y">' + pbnEsc(r.end_year) + '</span>' : '') +
              '</li>';
          }).join('') + '</ul>'
        : '') +

      '<p class="pbn-note">This profile is written by the person themselves. It is not ' +
      'Power Board research, and nothing on it is source-verified by us.</p>' +
    '</div></div>';

  const fb = document.getElementById('pbnFollowBtn');
  if (fb && me) {
    pbnIsFollowing(p.id).then(function (yes) {
      if (yes) { fb.dataset.following = '1'; fb.textContent = 'Following'; }
    });
    fb.addEventListener('click', function () { pbnToggleFollow(p.id, fb); });
  } else if (fb) {
    fb.addEventListener('click', function () {
      /* Preserve the intent: come back here after signing in. */
      try { sessionStorage.setItem('pbnAfterAuth', location.hash); } catch (e) {}
      location.hash = '#signin';
    });
  }
}

function pbnListOrNone(list) {
  const l = (list || []).filter(Boolean);
  if (!l.length) return '<p class="pbn-none">Not specified.</p>';
  return '<ul class="pbn-list">' + l.map(function (t) {
    return '<li>' + pbnEsc(t) + '</li>';
  }).join('') + '</ul>';
}

/* ---------- profile editing ----------
   Grouped into named steps rather than one long form. Each group
   saves on its own, so a half-finished profile is a normal state
   rather than a lost one. Nothing publishes until the user says so:
   is_published stays false until the toggle in Visibility. */

const PBN_EDIT_GROUPS = ['Basics','Current role','Goals','Expertise','About','Links','Visibility'];
let pbnEditGroup = 'Basics';

async function renderNetworkProfileEdit() {
  pbnEnsureCss();
  const host = document.getElementById('networkView');
  if (!host) return;
  await pbnLoadMe();

  if (!pbnUid()) {
    try { sessionStorage.setItem('pbnAfterAuth', '#network/edit'); } catch (e) {}
    host.innerHTML = '<div class="pbn"><div class="pbn-shell">' +
      '<a class="pbn-back" href="#network">&larr; People</a>' +
      '<div class="pbn-gate"><h1 class="pbn-h1">Create an account to build your profile.</h1>' +
      '<p class="pbn-lede">Your profile is what lets the right people find you. ' +
      'It takes a few minutes and you choose what is visible.</p>' +
      '<div class="pbn-actions"><a class="pbn-btn pbn-btn-p" href="#signin">Create account</a>' +
      '<a class="pbn-btn pbn-btn-s" href="#signin">Sign in</a></div></div></div></div>';
    return;
  }
  if (typeof pbTrack === 'function') pbTrack('profile_edit_started');

  const p = pbnMyProfile || {};
  const val = function (k) { return pbnEsc(p[k] == null ? '' : p[k]); };
  const arr = function (k) { return Array.isArray(p[k]) ? p[k] : []; };
  const links = p.links || {};

  const groupNav = PBN_EDIT_GROUPS.map(function (g) {
    return '<button type="button" class="pbn-step' + (g === pbnEditGroup ? ' is-on' : '') +
           '" data-group="' + pbnEsc(g) + '">' + pbnEsc(g) + '</button>';
  }).join('');

  let body = '';
  if (pbnEditGroup === 'Basics') {
    body =
      pbnField('Full name', '<input id="f_full_name" maxlength="120" value="' + val('full_name') + '">') +
      pbnField('Public handle', '<input id="f_username" maxlength="40" value="' + val('username') + '">',
        'Used in your profile address. Letters, numbers and dashes.') +
      pbnField('Headline', '<input id="f_headline" maxlength="200" value="' + val('headline') + '">',
        'One line on what you are building or working on.') +
      pbnField('Location', '<input id="f_location" maxlength="120" value="' + val('location') + '">') +
      pbnField('Photo',
        '<span class="pbn-photo-edit">' +
          '<span id="pbnPhotoPrev">' + pbnPhoto(p, 'lg') + '</span>' +
          '<span class="pbn-photo-ctl">' +
            '<input type="file" id="pbnPhotoFile" accept="image/*" class="pbn-file">' +
            '<label for="pbnPhotoFile" class="pbn-btn pbn-btn-s">Choose or take a photo</label>' +
            (p.photo_url ? '<button type="button" id="pbnPhotoClear" class="pbn-btn pbn-btn-s">Remove</button>' : '') +
            '<span id="pbnPhotoMsg" class="pbn-f-h" role="status" aria-live="polite"></span>' +
          '</span>' +
          '<input type="hidden" id="f_photo_url" value="' + val('photo_url') + '">' +
        '</span>',
        'On a phone this offers the camera as well as your library. ' +
        'JPG, PNG or WebP up to 5MB.');
  } else if (pbnEditGroup === 'Current role') {
    body =
      pbnField('Company', '<input id="f_current_company" maxlength="120" value="' + val('current_company') + '">') +
      pbnField('Title', '<input id="f_current_title" maxlength="120" value="' + val('current_title') + '">') +
      pbnField('Since (year)', '<input id="f_current_since" type="number" min="1950" max="2100" value="' + val('current_since') + '">') +
      pbnField('Role type', pbnChecks('roles', PBN_ROLES, arr('roles')),
        'How you want to be found in People search.');
  } else if (pbnEditGroup === 'Goals') {
    body =
      pbnField('Uses Power Board for', pbnChecks('uses_for', PBN_USES_FOR, arr('uses_for')),
        'Pick up to eight. This is the strongest signal in People search.') +
      pbnField('What I can help with', pbnLines('help_with', arr('help_with')),
        'One per line. Concrete beats broad: "hiring first engineers" over "engineering".') +
      pbnField('What I am looking for', pbnLines('looking_for', arr('looking_for')),
        'One per line.');
  } else if (pbnEditGroup === 'Expertise') {
    body = pbnField('Expertise', pbnChecks('expertise', PBN_EXPERTISE, arr('expertise')));
  } else if (pbnEditGroup === 'About') {
    body = pbnField('About',
      '<textarea id="f_about" rows="10" maxlength="4000">' + val('about') + '</textarea>',
      'Write it yourself, or paste your own LinkedIn About text and edit it here. ' +
      'Power Board does not read or import anything from LinkedIn.');
  } else if (pbnEditGroup === 'Links') {
    body = ['LinkedIn','Website','GitHub','X','Other'].map(function (k) {
      return pbnField(k, '<input id="lnk_' + k + '" value="' +
        pbnEsc(links[k] || '') + '" placeholder="https://">');
    }).join('');
  } else if (pbnEditGroup === 'Visibility') {
    body =
      pbnToggle('f_is_published', 'Publish my profile', p.is_published,
        'Until this is on, only you can see it and it stays out of People search.') +
      pbnToggle('f_show_location', 'Show my location', p.show_location !== false) +
      pbnToggle('f_show_education', 'Show my education', p.show_education !== false) +
      pbnToggle('f_show_activity', 'Show my activity', p.show_activity !== false) +
      pbnField('Who can message me',
        '<select id="f_dm_policy">' +
        [['requests','Anyone, as a request I approve'],['following','People I follow'],
         ['mutual','Mutual follows only'],['anyone','Anyone, directly'],['nobody','Nobody']]
          .map(function (o) {
            return '<option value="' + o[0] + '"' +
              ((p.dm_policy || 'requests') === o[0] ? ' selected' : '') + '>' + o[1] + '</option>';
          }).join('') + '</select>',
        'Messaging is not switched on yet. This setting is stored now so it applies the day it is.');
  }

  host.innerHTML =
    '<div class="pbn"><div class="pbn-shell pbn-edit">' +
      '<a class="pbn-back" href="#network">&larr; People</a>' +
      '<h1 class="pbn-h1">Your profile</h1>' +
      '<p class="pbn-lede">' +
        (p.is_published
          ? 'Your profile is published and can appear in People search.'
          : 'Your profile is a draft. It stays private until you publish it under Visibility.') +
      '</p>' +
      '<div class="pbn-steps">' + groupNav + '</div>' +
      '<form id="pbnForm" class="pbn-form" autocomplete="off">' + body +
        '<div class="pbn-save-row">' +
          '<button type="submit" class="pbn-btn pbn-btn-p">Save ' + pbnEsc(pbnEditGroup.toLowerCase()) + '</button>' +
          '<span id="pbnSaveMsg" class="pbn-save-msg" role="status" aria-live="polite"></span>' +
        '</div>' +
      '</form>' +
    '</div></div>';

  host.querySelectorAll('[data-group]').forEach(function (b) {
    b.addEventListener('click', function () { pbnEditGroup = b.dataset.group; renderNetworkProfileEdit(); });
  });
  document.getElementById('pbnForm').addEventListener('submit', function (e) {
    e.preventDefault(); pbnSaveGroup();
  });
  pbnWirePhoto();
}

/* Uploads straight to the avatars bucket. The storage policy only
   accepts a write inside a folder named after the user's own uid, so
   the path is built from the session rather than from anything the
   form supplies. */
function pbnWirePhoto() {
  const file = document.getElementById('pbnPhotoFile');
  if (!file) return;
  const msg  = document.getElementById('pbnPhotoMsg');
  const prev = document.getElementById('pbnPhotoPrev');
  const hid  = document.getElementById('f_photo_url');
  const clear = document.getElementById('pbnPhotoClear');

  if (clear) clear.addEventListener('click', function () {
    hid.value = ''; prev.innerHTML = pbnPhoto({ full_name: pbnMyProfile && pbnMyProfile.full_name }, 'lg');
    msg.textContent = 'Removed. Save basics to confirm.';
  });

  file.addEventListener('change', async function () {
    const f = file.files && file.files[0];
    if (!f) return;
    if (!/^image\/(jpeg|png|webp|heic|heif)$/i.test(f.type)) {
      msg.textContent = 'That file is not a JPG, PNG or WebP image.'; return;
    }
    if (f.size > 5 * 1024 * 1024) {
      msg.textContent = 'That image is larger than 5MB.'; return;
    }
    const c = pbnClient(), me = pbnUid();
    if (!c || !me) { location.hash = '#signin'; return; }

    msg.textContent = 'Uploading...';
    try {
      const ext = (f.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '');
      const path = me + '/' + Date.now() + '.' + ext;
      const { error: upErr } = await c.storage.from('avatars')
        .upload(path, f, { cacheControl: '3600', upsert: true, contentType: f.type });
      if (upErr) throw upErr;
      const { data: pub } = c.storage.from('avatars').getPublicUrl(path);
      hid.value = pub.publicUrl;
      prev.innerHTML = '<img class="pbn-photo pbn-photo-lg" src="' + pbnEsc(pub.publicUrl) + '" alt="">';
      msg.textContent = 'Uploaded. Save basics to keep it.';
    } catch (e) {
      msg.textContent = (e && e.message) ? e.message : 'Upload failed.';
    }
  });
}

function pbnField(label, control, hint) {
  return '<label class="pbn-f"><span class="pbn-f-l">' + pbnEsc(label) + '</span>' +
    control + (hint ? '<span class="pbn-f-h">' + hint + '</span>' : '') + '</label>';
}
function pbnToggle(id, label, on, hint) {
  return '<label class="pbn-f pbn-f-toggle"><input type="checkbox" id="' + id + '"' +
    (on ? ' checked' : '') + '><span class="pbn-f-l">' + pbnEsc(label) + '</span>' +
    (hint ? '<span class="pbn-f-h">' + hint + '</span>' : '') + '</label>';
}
function pbnChecks(name, opts, selected) {
  return '<span class="pbn-checks" data-multi="' + name + '">' + opts.map(function (o) {
    const on = selected.indexOf(o) >= 0;
    return '<label class="pbn-check' + (on ? ' is-on' : '') + '">' +
      '<input type="checkbox" value="' + pbnEsc(o) + '"' + (on ? ' checked' : '') + '>' +
      pbnEsc(o) + '</label>';
  }).join('') + '</span>';
}
function pbnLines(name, list) {
  return '<textarea class="pbn-lines" data-lines="' + name + '" rows="5">' +
    pbnEsc((list || []).join('\n')) + '</textarea>';
}

async function pbnSaveGroup() {
  const c = pbnClient(), me = pbnUid();
  const msg = document.getElementById('pbnSaveMsg');
  if (!c || !me) { location.hash = '#signin'; return; }
  const patch = { id: me, updated_at: new Date().toISOString() };

  document.querySelectorAll('#pbnForm input[id^="f_"], #pbnForm textarea[id^="f_"], #pbnForm select[id^="f_"]')
    .forEach(function (el) {
      const key = el.id.slice(2);
      if (el.type === 'checkbox') patch[key] = el.checked;
      else if (el.type === 'number') patch[key] = el.value ? parseInt(el.value, 10) : null;
      else patch[key] = el.value.trim() === '' ? null : el.value.trim();
    });

  document.querySelectorAll('#pbnForm [data-multi]').forEach(function (g) {
    patch[g.dataset.multi] = [...g.querySelectorAll('input:checked')].map(function (i) { return i.value; });
  });
  document.querySelectorAll('#pbnForm [data-lines]').forEach(function (t) {
    patch[t.dataset.lines] = t.value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
  });

  const linkInputs = document.querySelectorAll('#pbnForm input[id^="lnk_"]');
  if (linkInputs.length) {
    const links = {};
    linkInputs.forEach(function (el) { if (el.value.trim()) links[el.id.slice(4)] = el.value.trim(); });
    patch.links = links;
  }
  if (patch.username) patch.username = patch.username.toLowerCase().replace(/[^a-z0-9-]/g, '-');

  msg.textContent = 'Saving…';
  try {
    const { error } = await c.from('profiles').upsert(patch, { onConflict: 'id' });
    if (error) throw error;
    if (typeof pbTrack === 'function') pbTrack('profile_updated');
    await pbnLoadMe();
    msg.textContent = 'Saved.';
    setTimeout(function () { msg.textContent = ''; }, 2500);
  } catch (e) {
    /* Surface the database's own words: a length or enum constraint
       rejecting a value is information, not a generic failure. */
    msg.textContent = (e && e.message) ? e.message : 'Could not save.';
  }
}

/* ---------- post sign-in prompt ----------
   When someone signs in without a profile, offer to build one. It is
   an offer, not a wall: it is dismissible, it remembers the dismissal,
   and it never blocks the page underneath. It also stays out of the
   way during the sign-in flow itself and on the profile editor. */

function pbnProfileIsEmpty(p) {
  if (!p) return true;
  return !p.full_name && !p.headline && !p.current_company;
}

function pbnDismissed() {
  try { return localStorage.getItem('pbnProfilePromptDismissed') === '1'; }
  catch (e) { return false; }
}

async function pbnMaybePromptProfile() {
  if (document.getElementById('pbnPrompt') || pbnDismissed()) return;
  const hash = (location.hash || '').replace('#', '');
  if (hash === 'signin' || hash.indexOf('network/edit') === 0) return;
  if (typeof isSignedIn !== 'function' || !isSignedIn()) return;

  await pbnLoadMe();
  if (!pbnUid()) return;
  /* Someone who already has a profile does not need to be asked. */
  if (!pbnProfileIsEmpty(pbnMyProfile)) return;

  pbnEnsureCss();
  const wrap = document.createElement('div');
  wrap.id = 'pbnPrompt';
  wrap.className = 'pbn-prompt';
  wrap.setAttribute('role', 'dialog');
  wrap.setAttribute('aria-modal', 'false');
  wrap.setAttribute('aria-labelledby', 'pbnPromptTitle');
  wrap.innerHTML =
    '<div class="pbn-prompt-in">' +
      '<div class="pbn-prompt-body">' +
        '<div class="pbn-kicker">Power Network</div>' +
        '<h2 class="pbn-prompt-h" id="pbnPromptTitle">Set up your profile</h2>' +
        '<p class="pbn-prompt-p">Say what you are working on, what you can help with and ' +
        'what you are looking for, so the right people can find you. ' +
        'It stays private until you publish it.</p>' +
        '<div class="pbn-prompt-actions">' +
          '<a class="pbn-btn pbn-btn-p" href="#network/edit" id="pbnPromptGo">Set up profile</a>' +
          '<button type="button" class="pbn-btn pbn-btn-s" id="pbnPromptLater">Not now</button>' +
        '</div>' +
      '</div>' +
      '<button type="button" class="pbn-prompt-x" id="pbnPromptX" aria-label="Dismiss">&times;</button>' +
    '</div>';
  document.body.appendChild(wrap);

  const close = function (remember) {
    if (remember) { try { localStorage.setItem('pbnProfilePromptDismissed', '1'); } catch (e) {} }
    wrap.remove();
  };
  document.getElementById('pbnPromptLater').addEventListener('click', function () { close(true); });
  document.getElementById('pbnPromptX').addEventListener('click', function () { close(true); });
  document.getElementById('pbnPromptGo').addEventListener('click', function () { close(false); });
  wrap.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(true); });
  const go = document.getElementById('pbnPromptGo');
  if (go) go.focus();
}

/* Fires on sign-in, and once on load for a session that already
   exists. onAuthChange is the app's own listener, so no second auth
   system is introduced here. */
if (typeof onAuthChange === 'function') {
  onAuthChange(function () { setTimeout(pbnMaybePromptProfile, 400); });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () { setTimeout(pbnMaybePromptProfile, 900); });
} else {
  setTimeout(pbnMaybePromptProfile, 900);
}
