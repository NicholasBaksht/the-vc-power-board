/* ============================================================
   ACCOUNT - the #signin and #account views
   ------------------------------------------------------------
   Renders sign-in (magic link, no password field) and the
   account page. The account page is not decoration: Privacy
   Policy §8 commits, in a published legal document, to letting
   a user see, export, correct and permanently delete everything
   held about them without contacting anyone. Every control here
   exists to make one of those sentences true. Removing one
   silently makes the policy false.

   The account page is also the activity hub: the one place that
   answers "what have I actually done on this board". Follows,
   pipeline outcomes and submissions each live in their own
   feature file and their own table, so before this page existed
   there was no single view of them.

   Depends on auth.js (supabaseClient, currentUser, isSignedIn,
   signInWithEmail, signOut, deleteOwnAccount, onAuthChange).
   Reads, when present, outcomes.js, power-follows.js,
   shortlist.js and alerts-engine.js - all optional, all guarded,
   because index.html's script order is load-bearing and this
   file must not be the thing that breaks when one is missing.
   Load after auth.js, before app.js.
   ============================================================ */

let accountListenerBound = false;

/* auth.js resolves its session asynchronously, so router() can run
   before we know who the user is. Rather than guess, each view
   registers once for auth changes and re-renders itself if it is
   still the visible view. */
function bindAccountAuthListener() {
  if (accountListenerBound) return;
  if (typeof onAuthChange !== 'function') return;
  accountListenerBound = true;

  onAuthChange(function () {
    const signinEl = document.getElementById('signinView');
    const accountEl = document.getElementById('accountView');
    if (accountEl && accountEl.style.display !== 'none') renderAccount();
    if (signinEl && signinEl.style.display !== 'none') renderSignIn();
  });
}

function authUnavailableMarkup() {
  return `
    <div class="acct-card">
      <h1 class="acct-title">Accounts are unavailable</h1>
      <p class="acct-lead">Sign-in isn't reachable right now. Everything on the board is public and works without an account - rankings, firms, partners and scores are all still available.</p>
      <a href="#rankings" class="acct-btn acct-btn-ghost">Back to the rankings</a>
    </div>`;
}

/* ---------- SIGN IN ----------
   Three steps in one view, swapped by re-rendering rather than by
   routing, so a half-finished sign-in can never be deep-linked to
   or restored by the back button:

     1. email     ask for the address, send a one-time code
     2. code      verify it; this is what creates the session
     3. username  only if the account has not claimed one yet
*/
function signinShell(inner) {
  return `
    <div class="acct-card">
      <div class="acct-kicker">The VC Power Board</div>
      ${inner}
      <div class="acct-note">
        <p><strong>An account only does one thing:</strong> it saves your Shortlist so it follows you between devices instead of living in one browser.</p>
        <p>Everything else on the board - every firm, partner, ranking and score - is public and needs no account. Your email is never sold, shared, or used for marketing. See the <a href="privacy/">Privacy Policy</a>.</p>
      </div>
    </div>`;
}

function renderSignIn() {
  const el = document.getElementById('signinView');
  if (!el) return;
  bindAccountAuthListener();

  if (typeof supabaseClient === 'undefined' || !supabaseClient) {
    el.innerHTML = authUnavailableMarkup();
    return;
  }

  // Already signed in but never picked a username - finish that
  // rather than showing "you're already signed in" and stranding them.
  if (typeof isSignedIn === 'function' && isSignedIn()) {
    if (typeof hasUsername === 'function' && !hasUsername()) {
      renderUsernameStep(el);
      return;
    }
    el.innerHTML = `
      <div class="acct-card">
        <h1 class="acct-title">You're already signed in</h1>
        <p class="acct-lead">Signed in as <span class="acct-email">${getUserEmail()}</span>.</p>
        <a href="#account" class="acct-btn acct-btn-primary">Go to your account</a>
      </div>`;
    return;
  }

  renderEmailStep(el);
}

/* Step 1 - email */
function renderEmailStep(el) {
  el.innerHTML = signinShell(`
    <h1 class="acct-title">Sign in</h1>
    <p class="acct-lead">Enter your email and we'll send you a one-time code. There is no password to create or remember.</p>

    <form id="signinForm" class="acct-form" novalidate>
      <label class="acct-label" for="signinEmail">Email address</label>
      <input class="acct-input" type="email" id="signinEmail" name="email"
             autocomplete="email" placeholder="you@firm.com" required>
      <button class="acct-btn acct-btn-primary" type="submit" id="signinSubmit">Send my code</button>
    </form>

    <div class="acct-status" id="signinStatus" role="status" aria-live="polite"></div>
  `);

  const form = document.getElementById('signinForm');
  const status = document.getElementById('signinStatus');
  const button = document.getElementById('signinSubmit');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('signinEmail');
    const email = input ? input.value.trim() : '';

    button.disabled = true;
    button.textContent = 'Sending…';
    status.className = 'acct-status';
    status.textContent = '';

    signInWithEmail(email).then(function (res) {
      button.disabled = false;
      button.textContent = 'Send my code';

      if (res.ok) {
        renderCodeStep(el, email);
      } else {
        status.className = 'acct-status acct-status-err';
        status.textContent = res.error;
      }
    });
  });
}

/* Step 2 - code */
function renderCodeStep(el, email) {
  el.innerHTML = signinShell(`
    <h1 class="acct-title">Enter your code</h1>
    <p class="acct-lead">We sent a code to <span class="acct-email">${email}</span>. It expires shortly and can only be used once.</p>

    <form id="codeForm" class="acct-form" novalidate>
      <label class="acct-label" for="signinCode">Verification code</label>
      <input class="acct-input" type="text" id="signinCode" name="code"
             inputmode="numeric" autocomplete="one-time-code" maxlength="10"
             placeholder="123456" required>
      <button class="acct-btn acct-btn-primary" type="submit" id="codeSubmit">Verify code</button>
    </form>

    <div class="acct-status" id="codeStatus" role="status" aria-live="polite"></div>

    <p class="acct-lead">
      <a href="#" id="codeResend">Send a new code</a> ·
      <a href="#" id="codeBack">Use a different email</a>
    </p>
  `);

  const form = document.getElementById('codeForm');
  const status = document.getElementById('codeStatus');
  const button = document.getElementById('codeSubmit');
  const input = document.getElementById('signinCode');
  if (input) input.focus();

  // Digits only, so a pasted "123 456" still verifies.
  if (input) {
    input.addEventListener('input', function () {
      const cleaned = input.value.replace(/\D/g, '').slice(0, 10);
      if (cleaned !== input.value) input.value = cleaned;
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    button.disabled = true;
    button.textContent = 'Verifying…';
    status.className = 'acct-status';
    status.textContent = '';

    verifyEmailCode(email, input ? input.value : '').then(function (res) {
      button.disabled = false;
      button.textContent = 'Verify code';

      if (!res.ok) {
        status.className = 'acct-status acct-status-err';
        status.textContent = res.error;
        return;
      }
      // Signed in. New accounts pick a username; returning ones go straight through.
      if (typeof hasUsername === 'function' && !hasUsername()) {
        renderUsernameStep(el);
      } else {
        window.location.hash = '#account';
      }
    });
  });

  document.getElementById('codeResend').addEventListener('click', function (e) {
    e.preventDefault();
    status.className = 'acct-status';
    status.textContent = 'Sending a new code…';
    signInWithEmail(email).then(function (res) {
      status.className = 'acct-status ' + (res.ok ? 'acct-status-ok' : 'acct-status-err');
      status.textContent = res.ok ? 'A new code is on its way.' : res.error;
    });
  });

  document.getElementById('codeBack').addEventListener('click', function (e) {
    e.preventDefault();
    renderEmailStep(el);
  });
}

/* Step 3 - username */
function renderUsernameStep(el) {
  el.innerHTML = signinShell(`
    <h1 class="acct-title">Choose a username</h1>
    <p class="acct-lead">This is the name shown on your account. 3-20 characters: letters, numbers and underscores.</p>

    <form id="usernameForm" class="acct-form" novalidate>
      <label class="acct-label" for="usernameInput">Username</label>
      <input class="acct-input" type="text" id="usernameInput" name="username"
             autocomplete="username" maxlength="20" placeholder="powerboard_pete" required>
      <button class="acct-btn acct-btn-primary" type="submit" id="usernameSubmit">Claim it</button>
    </form>

    <div class="acct-status" id="usernameStatus" role="status" aria-live="polite"></div>
  `);

  const form = document.getElementById('usernameForm');
  const status = document.getElementById('usernameStatus');
  const button = document.getElementById('usernameSubmit');
  const input = document.getElementById('usernameInput');
  if (input) input.focus();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    button.disabled = true;
    button.textContent = 'Saving…';
    status.className = 'acct-status';
    status.textContent = '';

    saveUsername(input ? input.value : '').then(function (res) {
      button.disabled = false;
      button.textContent = 'Claim it';

      if (!res.ok) {
        status.className = 'acct-status acct-status-err';
        status.textContent = res.error;
        return;
      }
      window.location.hash = '#account';
    });
  });
}

/* ============================================================
   HUB HELPERS
   ============================================================ */

/* The rest of this file writes user-controlled strings into
   innerHTML: shortlist notes, and the proposed values a firm
   typed into the claim drawer. Those are the user's own words,
   but "your own data" is not the same as "safe markup" - a note
   containing a tag would otherwise be parsed as one. */
function acctEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* Slug -> firm name, built once. The hub resolves the same slugs
   repeatedly across five sections, and firms is 401 entries, so
   a linear find() per row is the difference between one pass and
   several thousand. Falls back to the slug rather than inventing
   a name for a firm that has since been removed from the board. */
let acctFirmIndex = null;
function acctFirmName(slug) {
  if (!acctFirmIndex) {
    acctFirmIndex = {};
    if (typeof firms !== 'undefined' && Array.isArray(firms)) {
      firms.forEach(function (f) { acctFirmIndex[f.slug] = f.name; });
    }
  }
  return acctFirmIndex[slug] || slug;
}

/* A slug with no firm behind it is one that has been removed from the
   board since the founder saved it - Sequoia was pulled, and anyone
   who had it shortlisted still holds the slug. Linking it would route
   to a profile that no longer resolves, so it renders as plain text
   that says why rather than as a dead link. */
function acctFirmKnown(slug) {
  acctFirmName(slug);
  return !!(acctFirmIndex && acctFirmIndex[slug]);
}

function acctFirmLink(slug, cls) {
  const name = acctEsc(acctFirmName(slug));
  if (!acctFirmKnown(slug)) {
    return '<span class="' + cls + ' is-gone" title="No longer listed on the board">' + name + '</span>';
  }
  return '<a class="' + cls + '" href="#' + slug + '">' + name + '</a>';
}

function acctDate(v) {
  if (!v) return '';
  const d = new Date(v);
  return isNaN(d.getTime()) ? '' : d.toLocaleDateString();
}

/* A section that is present but empty is information: it tells a
   founder the feature exists and they have not used it yet. A
   section that is missing entirely just looks broken. */
function acctEmpty(msg) {
  return '<p class="acct-empty">' + msg + '</p>';
}

function acctSection(id, title, linkHref, linkText, body) {
  return `
    <section class="acct-sec" id="${id}">
      <div class="acct-sec-head">
        <h2 class="acct-sec-title">${title}</h2>
        ${linkHref ? `<a class="acct-sec-link" href="${linkHref}">${linkText}</a>` : ''}
      </div>
      <div class="acct-sec-body">${body}</div>
    </section>`;
}

/* ---------- PIPELINE ----------
   The union of two sources on purpose. investor_outcomes holds an
   explicit stage the founder set; the Shortlist holds firms they
   saved before outcomes existed, whose old status getOutcome()
   migrates on read. Reading only the first would silently drop a
   pipeline built before this feature shipped. */
function acctPipelineRows() {
  const slugs = {};
  if (typeof ioCache !== 'undefined' && ioCache) {
    Object.keys(ioCache).forEach(function (s) { slugs[s] = true; });
  }
  if (typeof getShortlist === 'function') {
    getShortlist().forEach(function (s) { slugs[s] = true; });
  }
  const get = (typeof getOutcome === 'function') ? getOutcome : function () { return 'not_contacted'; };
  return Object.keys(slugs).map(function (slug) {
    return { slug: slug, status: get(slug) };
  });
}

function acctPipelineHtml() {
  if (typeof IO_STATUSES === 'undefined') {
    return acctEmpty('Outcome tracking is not loaded on this page.');
  }

  const rows = acctPipelineRows();
  if (!rows.length) {
    return acctEmpty('No firms tracked yet. Save a firm from the <a href="#rankings">rankings</a>, then set where the conversation stands from its profile.');
  }

  const byStatus = {};
  IO_STATUSES.forEach(function (s) { byStatus[s.key] = []; });
  rows.forEach(function (r) {
    if (!byStatus[r.status]) byStatus[r.status] = [];
    byStatus[r.status].push(r.slug);
  });

  const max = IO_STATUSES.reduce(function (n, s) {
    return Math.max(n, (byStatus[s.key] || []).length);
  }, 0) || 1;

  /* Passed sits at rank -1 and is not a step forward, so it is
     rendered after the ladder rather than inside it. Putting it
     in sequence would imply every conversation ends there. */
  const ladder = IO_STATUSES.filter(function (s) { return s.rank >= 0; });
  const passed = byStatus['passed'] || [];

  const bars = ladder.map(function (s) {
    const list = byStatus[s.key] || [];
    const pct = Math.round((list.length / max) * 100);
    return `
      <div class="acct-stage${list.length ? '' : ' is-zero'}">
        <div class="acct-stage-top">
          <span class="acct-stage-label">${s.label}</span>
          <span class="acct-stage-count">${list.length}</span>
        </div>
        <div class="acct-stage-track"><div class="acct-stage-bar" style="width:${pct}%"></div></div>
        <div class="acct-chips">
          ${list.length
            ? list.map(function (slug) { return acctFirmLink(slug, 'acct-chip'); }).join('')
            : '<span class="acct-mini">None</span>'}
        </div>
      </div>`;
  }).join('');

  const passedHtml = passed.length
    ? `<div class="acct-passed">
         <span class="acct-mini">Passed (${passed.length}):</span>
         ${passed.map(function (slug) { return acctFirmLink(slug, 'acct-chip is-muted'); }).join('')}
       </div>`
    : '';

  return '<div class="acct-stages">' + bars + '</div>' + passedHtml;
}

/* ---------- FOLLOWING ---------- */
function acctFollowingHtml() {
  if (typeof getFollowedFirms !== 'function') {
    return acctEmpty('Following is not loaded on this page.');
  }
  const slugs = Array.from(getFollowedFirms());
  if (!slugs.length) {
    return acctEmpty('You are not following any firms. Following a firm moves its alerts to the top of <a href="#powerAlerts">Power Alerts</a>.');
  }
  return `
    <div class="acct-chips acct-chips-block">
      ${slugs.map(function (slug) {
        return `<span class="acct-chip acct-chip-follow">
                  ${acctFirmLink(slug, 'acct-chip-name')}
                  <button type="button" class="acct-chip-x" data-unfollow="${slug}"
                          title="Unfollow ${acctEsc(acctFirmName(slug))}"
                          aria-label="Unfollow ${acctEsc(acctFirmName(slug))}">&times;</button>
                </span>`;
      }).join('')}
    </div>`;
}

/* ---------- ALERTS ----------
   Read-only here on purpose. The controls that change these live
   in Power Alerts; duplicating them would leave two places that
   can disagree about the same alert_state row. */
function acctAlertsHtml() {
  const freq = (typeof getDigestFrequency === 'function') ? getDigestFrequency() : null;
  const muted = (typeof getMutedTypes === 'function') ? getMutedTypes() : null;

  let unread = null;
  let total = null;
  /* computePowerAlerts() walks all 401 firms. It is the same call
     the alerts view makes, and it is wrapped because a throw here
     would take the whole account page down with it. */
  try {
    if (typeof computePowerAlerts === 'function') {
      const res = computePowerAlerts();
      const all = (res && res.alerts) ? res.alerts : [];
      const part = (typeof pa2Partition === 'function') ? pa2Partition(all) : { visible: all };
      total = part.visible.length;
      unread = part.visible.filter(function (a) {
        return typeof isAlertRead === 'function' ? !isAlertRead(a.id) : true;
      }).length;
    }
  } catch (e) {
    unread = null;
    total = null;
  }

  const rows = [];
  if (unread !== null) {
    rows.push(['Unread alerts', unread + ' of ' + total]);
  }
  if (freq) rows.push(['Digest', String(freq)]);
  if (muted) rows.push(['Muted alert types', muted.size ? String(muted.size) : 'None']);

  if (!rows.length) return acctEmpty('Alert preferences are not loaded on this page.');

  return `<div class="acct-pill-row">
    ${rows.map(function (r) {
      return '<span class="acct-pill"><span class="acct-pill-label">' + r[0] + '</span>' +
             '<span class="acct-pill-value">' + acctEsc(r[1]) + '</span></span>';
    }).join('')}
  </div>`;
}

/* ---------- SUBMISSIONS ----------
   Claims and update requests are readable back under their own
   "read own" RLS policies. firm_requests is insert-only by policy,
   so a select returns an empty set rather than an error - which is
   why an empty state here says "nothing yet" and not "none exist". */
function acctLoadSubmissions() {
  const el = document.getElementById('acctSubmissions');
  if (!el || typeof supabaseClient === 'undefined' || !supabaseClient) return;

  const uid = currentUser ? currentUser.id : null;
  if (!uid) return;

  const claims = supabaseClient.from('firm_claims')
    .select('firm_slug, status, created_at').eq('claimant_id', uid);
  const updates = supabaseClient.from('firm_update_requests')
    .select('firm_slug, field, proposed_value, status, created_at').eq('submitted_by', uid);

  Promise.all([claims, updates]).then(function (res) {
    const c = (res[0] && !res[0].error && res[0].data) ? res[0].data : [];
    const u = (res[1] && !res[1].error && res[1].data) ? res[1].data : [];

    if (!c.length && !u.length) {
      el.innerHTML = acctEmpty('You have not submitted anything. You can <a href="#request-firm">request a firm</a> or claim a listing from any firm profile.');
      return;
    }

    const rowsHtml = []
      .concat(c.map(function (r) {
        return {
          when: r.created_at,
          html: `<div class="acct-sub-row">
                   <span class="acct-sub-kind">Listing claim</span>
                   ${acctFirmLink(r.firm_slug, 'acct-row-name')}
                   <span class="acct-sub-status" data-status="${acctEsc(r.status)}">${acctEsc(r.status)}</span>
                   <span class="acct-row-date">${acctDate(r.created_at)}</span>
                 </div>`
        };
      }))
      .concat(u.map(function (r) {
        return {
          when: r.created_at,
          html: `<div class="acct-sub-row">
                   <span class="acct-sub-kind">Correction</span>
                   ${acctFirmLink(r.firm_slug, 'acct-row-name')}
                   <span class="acct-sub-field">${acctEsc(r.field)}</span>
                   <span class="acct-sub-status" data-status="${acctEsc(r.status)}">${acctEsc(r.status)}</span>
                   <span class="acct-row-date">${acctDate(r.created_at)}</span>
                 </div>`
        };
      }))
      .sort(function (a, b) { return String(b.when).localeCompare(String(a.when)); })
      .map(function (x) { return x.html; })
      .join('');

    el.innerHTML = rowsHtml +
      '<p class="acct-mini acct-sub-note">Submitting a fact does not change a ranking. Power Board verifies every claim against the firm\'s own site before anything is published, and scores stay ours.</p>';
  });
}

/* ============================================================
   ACCOUNT VIEW
   ============================================================ */
function renderAccount() {
  const el = document.getElementById('accountView');
  if (!el) return;
  bindAccountAuthListener();

  if (typeof supabaseClient === 'undefined' || !supabaseClient) {
    el.innerHTML = authUnavailableMarkup();
    return;
  }

  // Session still resolving - say so rather than flashing "signed out".
  if (typeof authReady !== 'undefined' && !authReady) {
    el.innerHTML = `<div class="acct-card"><p class="acct-lead">Checking your session…</p></div>`;
    return;
  }

  if (!isSignedIn()) {
    el.innerHTML = `
      <div class="acct-card">
        <h1 class="acct-title">You're not signed in</h1>
        <p class="acct-lead">Sign in to save a Shortlist that follows you between devices.</p>
        <a href="#signin" class="acct-btn acct-btn-primary">Sign in</a>
        <a href="#rankings" class="acct-btn acct-btn-ghost">Browse the board instead</a>
      </div>`;
    return;
  }

  const created = currentUser && currentUser.created_at
    ? new Date(currentUser.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '-';

  // The username is the account's public-facing name, so it leads;
  // the email drops to a metadata row. Falls back to the email when
  // no username exists yet (an account created before usernames).
  const uname = (typeof getUsername === 'function' && getUsername()) ? getUsername() : null;

  const followCount = (typeof getFollowedFirms === 'function') ? getFollowedFirms().size : 0;
  const trackedCount = acctPipelineRows().length;

  el.innerHTML = `
    <div class="acct-card is-hub">
      <div class="acct-kicker">Your account</div>
      <h1 class="acct-title">${uname ? acctEsc(uname) : acctEsc(getUserEmail())}</h1>

      <div class="acct-stats">
        <div class="acct-stat"><span class="acct-stat-num" id="acctCount">-</span><span class="acct-stat-label">Saved firms</span></div>
        <div class="acct-stat"><span class="acct-stat-num">${followCount}</span><span class="acct-stat-label">Following</span></div>
        <div class="acct-stat"><span class="acct-stat-num" id="acctTracked">${trackedCount}</span><span class="acct-stat-label">In pipeline</span></div>
        <div class="acct-stat"><span class="acct-stat-num">${acctEsc(created)}</span><span class="acct-stat-label">Member since</span></div>
      </div>

      <div class="acct-hub">
        ${acctSection('acctPipelineSec', 'Your pipeline', '#shortlist', 'Open Shortlist',
          '<div id="acctPipeline">' + acctPipelineHtml() + '</div>')}

        ${acctSection('acctFollowSec', 'Firms you follow', '#powerAlerts', 'Open Power Alerts',
          '<div id="acctFollowing">' + acctFollowingHtml() + '</div>')}

        ${acctSection('acctAlertsSec', 'Alert settings', '#powerAlerts', 'Change these',
          acctAlertsHtml())}

        ${acctSection('acctSubSec', 'Your submissions', null, null,
          '<div id="acctSubmissions">Loading…</div>')}

        ${acctSection('acctSavedSec', 'Saved firms', '#shortlist', 'Open Shortlist',
          '<div id="acctShortlist" class="acct-shortlist">Loading…</div>')}
      </div>

      <h2 class="acct-h2">Your data</h2>
      <p class="acct-lead">Everything above is the data held about you, and the export below contains all of it: your profile, Shortlist, followed firms, pipeline outcomes, saved views and searches, Power Alerts and their settings, saved people, your private fundraising records including every raise, pipeline target, note, tag, activity and next action, and any claims or corrections you have sent in.</p>

      <div class="acct-actions">
        <button class="acct-btn acct-btn-ghost" id="acctExport">Export my data</button>
        <button class="acct-btn acct-btn-ghost" id="acctSignOut">Sign out</button>
      </div>

      <h2 class="acct-h2">Change your email</h2>
      <form id="acctEmailForm" class="acct-form acct-form-inline" novalidate>
        <input class="acct-input" type="email" id="acctNewEmail" placeholder="new@address.com" autocomplete="email" required>
        <button class="acct-btn acct-btn-ghost" type="submit">Update</button>
      </form>
      <div class="acct-status" id="acctEmailStatus" role="status" aria-live="polite"></div>

      <div class="acct-danger">
        <h2 class="acct-h2">Delete your account</h2>
        <p>This erases your email address, your Shortlist, your followed firms, your pipeline outcomes and your alert settings immediately and permanently. There is no soft-delete and no archive - it cannot be undone, and it cannot be restored on request.</p>
        <p class="acct-mini">Claims and corrections you submitted are kept, because they are a record of a change requested to a public listing rather than personal data. Your name is removed from them, so they no longer point back to you.</p>
        <button class="acct-btn acct-btn-danger" id="acctDelete">Delete my account</button>
        <div class="acct-status" id="acctDeleteStatus" role="status" aria-live="polite"></div>
      </div>
    </div>`;

  /* outcomes.js loads its table once per session. If the account page
     is the first view to need it, the pipeline above rendered from an
     empty cache - so re-render that one section when it arrives. */
  if (typeof ioLoad === 'function' && typeof ioLoaded !== 'undefined' && !ioLoaded) {
    ioLoad().then(function () {
      const p = document.getElementById('acctPipeline');
      const t = document.getElementById('acctTracked');
      if (p) p.innerHTML = acctPipelineHtml();
      if (t) t.textContent = String(acctPipelineRows().length);
    });
  }

  loadAccountShortlist();
  acctLoadSubmissions();
  wireAccountControls();
  wireAccountHub();
}

function loadAccountShortlist() {
  const listEl = document.getElementById('acctShortlist');
  const countEl = document.getElementById('acctCount');
  if (!listEl) return;

  supabaseClient
    .from('shortlists')
    .select('firm_slug, note, created_at')
    .order('created_at', { ascending: false })
    .then(function (res) {
      if (res.error) {
        listEl.innerHTML = `<p class="acct-empty">Couldn't load your Shortlist: ${acctEsc(res.error.message)}</p>`;
        return;
      }

      const rows = res.data || [];
      if (countEl) countEl.textContent = String(rows.length);

      if (!rows.length) {
        listEl.innerHTML = `<p class="acct-empty">Your Shortlist is empty. Add firms from the <a href="#rankings">rankings</a>.</p>`;
        return;
      }

      listEl.innerHTML = rows.map(function (row) {
        const saved = acctDate(row.created_at);
        return `
          <div class="acct-row">
            ${acctFirmLink(row.firm_slug, 'acct-row-name')}
            <span class="acct-row-date">${saved}</span>
            ${row.note ? `<div class="acct-row-note">${acctEsc(row.note)}</div>` : ''}
          </div>`;
      }).join('');
    });
}

/* Unfollow from the hub. Delegated rather than bound per chip so the
   handler survives the section re-rendering itself after each click. */
function wireAccountHub() {
  const hub = document.querySelector('#accountView .acct-hub');
  if (!hub || hub.dataset.wired === '1') return;
  hub.dataset.wired = '1';

  hub.addEventListener('click', function (e) {
    const btn = e.target.closest ? e.target.closest('[data-unfollow]') : null;
    if (!btn) return;
    e.preventDefault();
    if (typeof toggleFollow !== 'function') return;

    btn.disabled = true;

    /* toggleFollow updates the local set first and syncs to Supabase
       after, so the follow is already gone by the time the request
       resolves - or fails. Redrawing only on success would leave a
       chip on screen for a firm the user no longer follows, so the
       redraw runs either way and reads the set rather than assuming. */
    let job;
    try {
      job = Promise.resolve(toggleFollow(btn.getAttribute('data-unfollow')));
    } catch (e) {
      job = Promise.resolve();
    }
    job.catch(function () {}).then(function () {
      const box = document.getElementById('acctFollowing');
      if (box) box.innerHTML = acctFollowingHtml();
    });
  });
}

function wireAccountControls() {
  const exportBtn = document.getElementById('acctExport');
  const signOutBtn = document.getElementById('acctSignOut');
  const deleteBtn = document.getElementById('acctDelete');
  const emailForm = document.getElementById('acctEmailForm');

  if (exportBtn) {
    exportBtn.addEventListener('click', function () {
      exportBtn.disabled = true;
      exportBtn.textContent = 'Preparing…';

      const uid = currentUser ? currentUser.id : null;

      /* One query per table the account owns. Anything added to the
         schema later has to be added here too, or the export quietly
         stops being the complete copy the Privacy Policy promises. */
      const jobs = [
        supabaseClient.from('shortlists').select('firm_slug, note, created_at'),
        supabaseClient.from('firm_follows').select('firm_slug, created_at'),
        supabaseClient.from('investor_outcomes').select('firm_slug, status, updated_at'),
        supabaseClient.from('alert_state').select('*'),
        supabaseClient.from('profiles').select('*'),
        supabaseClient.from('firm_claims').select('firm_slug, status, created_at').eq('claimant_id', uid),
        supabaseClient.from('firm_update_requests').select('firm_slug, field, proposed_value, status, created_at').eq('submitted_by', uid),

        /* Phase 2 and 3 shipped seven owned tables that never reached
           this list, so the export has been quietly incomplete since
           Saved Views. The Privacy Policy calls this "all of it", which
           makes an omission here a false statement in a published
           document rather than a missing feature. Phase 4A adds the
           eighth. */
        supabaseClient.from('saved_views').select('*'),
        supabaseClient.from('saved_searches').select('*'),
        supabaseClient.from('user_alerts').select('*'),
        supabaseClient.from('notification_prefs').select('*'),
        supabaseClient.from('alert_mutes').select('*'),
        supabaseClient.from('alert_feedback').select('*'),
        supabaseClient.from('saved_people').select('*'),

        /* The private fundraising workspace. THE EXPORT IS THE
           PRIVACY POLICY'S PROMISE MADE GOOD, and it has now drifted
           twice: once when Phase 2 and 3 shipped tables that never
           reached this list, and again across Phase 4B to 4E when
           seven more were added and only the first was listed here.
           Every one of these holds something a founder would expect
           to get back: who they pitched, what was said, what they
           committed. */
        supabaseClient.from('fundraises').select('*'),
        supabaseClient.from('pipeline_targets').select('*'),
        supabaseClient.from('pipeline_contacts').select('*'),
        supabaseClient.from('pipeline_activities').select('*'),
        supabaseClient.from('pipeline_notes').select('*'),
        supabaseClient.from('pipeline_tags').select('*'),
        supabaseClient.from('pipeline_target_tags').select('*'),
        supabaseClient.from('pipeline_next_actions').select('*')
      ];

      const rows = function (r) { return (r && !r.error && r.data) ? r.data : []; };

      Promise.all(jobs).then(function (res) {
        const payload = {
          exported_at: new Date().toISOString(),
          email: getUserEmail(),
          username: (typeof getUsername === 'function') ? getUsername() : null,
          account_created: currentUser ? currentUser.created_at : null,
          shortlist: rows(res[0]),
          following: rows(res[1]),
          pipeline_outcomes: rows(res[2]),
          alert_settings: rows(res[3]),
          profile: rows(res[4]),
          listing_claims: rows(res[5]),
          correction_requests: rows(res[6]),
          saved_views: rows(res[7]),
          saved_searches: rows(res[8]),
          alerts: rows(res[9]),
          notification_preferences: rows(res[10]),
          alert_mutes: rows(res[11]),
          alert_feedback: rows(res[12]),
          saved_people: rows(res[13]),
          fundraises: rows(res[14]),
          pipeline_targets: rows(res[15]),
          pipeline_contacts: rows(res[16]),
          pipeline_activities: rows(res[17]),
          pipeline_notes: rows(res[18]),
          pipeline_tags: rows(res[19]),
          pipeline_target_tags: rows(res[20]),
          pipeline_next_actions: rows(res[21])
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'vc-power-board-my-data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        exportBtn.disabled = false;
        exportBtn.textContent = 'Export my data';
      });
    });
  }

  if (signOutBtn) {
    signOutBtn.addEventListener('click', function () {
      signOutBtn.disabled = true;
      signOut().then(function () { window.location.hash = ''; });
    });
  }

  if (emailForm) {
    emailForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = document.getElementById('acctNewEmail');
      const status = document.getElementById('acctEmailStatus');
      const next = input ? input.value.trim() : '';

      if (next.indexOf('@') === -1) {
        status.className = 'acct-status acct-status-err';
        status.textContent = 'Enter a valid email address.';
        return;
      }

      status.className = 'acct-status';
      status.textContent = 'Updating…';

      supabaseClient.auth.updateUser({ email: next }).then(function (res) {
        if (res.error) {
          status.className = 'acct-status acct-status-err';
          status.textContent = res.error.message;
          return;
        }
        status.className = 'acct-status acct-status-ok';
        status.textContent = 'Check both inboxes - a confirmation link has been sent to the new address, and the change takes effect once you click it.';
      });
    });
  }

  if (deleteBtn) {
    deleteBtn.addEventListener('click', function () {
      const status = document.getElementById('acctDeleteStatus');
      const sure = window.confirm(
        'Permanently delete your account?\n\n' +
        'Your email address, Shortlist, followed firms, pipeline outcomes and alert settings ' +
        'will be erased immediately. This cannot be undone and cannot be restored on request.'
      );
      if (!sure) return;

      deleteBtn.disabled = true;
      deleteBtn.textContent = 'Deleting…';
      status.className = 'acct-status';
      status.textContent = '';

      deleteOwnAccount().then(function (res) {
        if (res.ok) {
          window.location.hash = '';
          return;
        }
        deleteBtn.disabled = false;
        deleteBtn.textContent = 'Delete my account';
        status.className = 'acct-status acct-status-err';
        status.textContent = res.error;
      });
    });
  }
}


/* ============================================================
   HEADER ACCOUNT STATE
   The header shipped with a hard-coded "Sign in" link and nothing
   ever changed it, so a signed-in founder still saw an invitation
   to sign in on every page.

   This swaps that one link for the account's username once a
   session exists. It touches only the anchor's text and href -
   the element, its class and its position are untouched, so the
   header layout and the Power Match CTA beside it are unaffected.
   ============================================================ */
function renderHeaderAccount() {
  const link = document.querySelector('.pb-signin');
  if (!link) return;

  const signedIn = typeof isSignedIn === 'function' && isSignedIn();
  if (!signedIn) {
    link.textContent = 'Sign in';
    link.setAttribute('href', '#signin');
    link.classList.remove('is-account');
    link.removeAttribute('title');
    return;
  }

  /* A username is set in a later step of sign-up, so a session can exist
     before one does. Falling back to the email local-part means the header
     never shows a blank or a raw uuid during that window. */
  const name = (typeof getUsername === 'function' && getUsername()) ||
               ((typeof getUserEmail === 'function' && getUserEmail() || '').split('@')[0]) ||
               'Account';

  link.textContent = name;
  link.setAttribute('href', '#account');
  link.setAttribute('title', 'Your account');
  link.classList.add('is-account');
}

if (typeof onAuthChange === 'function') onAuthChange(renderHeaderAccount);
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderHeaderAccount);
} else {
  renderHeaderAccount();
}
