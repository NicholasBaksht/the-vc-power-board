/* ============================================================
   ACCOUNT — the #signin and #account views
   ------------------------------------------------------------
   Renders sign-in (magic link, no password field) and the
   account page. The account page is not decoration: Privacy
   Policy §8 commits, in a published legal document, to letting
   a user see, export, correct and permanently delete everything
   held about them without contacting anyone. Every control here
   exists to make one of those sentences true. Removing one
   silently makes the policy false.

   Depends on auth.js (supabaseClient, currentUser, isSignedIn,
   signInWithEmail, signOut, deleteOwnAccount, onAuthChange).
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
      <p class="acct-lead">Sign-in isn't reachable right now. Everything on the board is public and works without an account — rankings, firms, partners and scores are all still available.</p>
      <a href="#rankings" class="acct-btn acct-btn-ghost">Back to the rankings</a>
    </div>`;
}

/* ---------- SIGN IN ----------
   Three steps in one view, swapped by re-rendering rather than by
   routing, so a half-finished sign-in can never be deep-linked to
   or restored by the back button:

     1. email     ask for the address, send a 6-digit code
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
        <p>Everything else on the board — every firm, partner, ranking and score — is public and needs no account. Your email is never sold, shared, or used for marketing. See the <a href="privacy/">Privacy Policy</a>.</p>
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
    <p class="acct-lead">Enter your email and we'll send you a 6-digit code. There is no password to create or remember.</p>

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
    <p class="acct-lead">We sent a 6-digit code to <span class="acct-email">${email}</span>. It expires shortly and can only be used once.</p>

    <form id="codeForm" class="acct-form" novalidate>
      <label class="acct-label" for="signinCode">6-digit code</label>
      <input class="acct-input" type="text" id="signinCode" name="code"
             inputmode="numeric" autocomplete="one-time-code" maxlength="6"
             placeholder="123456" required>
      <button class="acct-btn acct-btn-primary" type="submit" id="codeSubmit">Verify code</button>
    </form>

    <div class="acct-status" id="codeStatus" role="status" aria-live="polite"></div>

    <p class="acct-lead">
      <a href="#" id="codeResend">Send a new code</a> &middot;
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
      const cleaned = input.value.replace(/\D/g, '').slice(0, 6);
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

/* ---------- ACCOUNT ---------- */
function renderAccount() {
  const el = document.getElementById('accountView');
  if (!el) return;
  bindAccountAuthListener();

  if (typeof supabaseClient === 'undefined' || !supabaseClient) {
    el.innerHTML = authUnavailableMarkup();
    return;
  }

  // Session still resolving — say so rather than flashing "signed out".
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
    : '—';

  // The username is the account's public-facing name, so it leads;
  // the email drops to a metadata row. Falls back to the email when
  // no username exists yet (an account created before usernames).
  const uname = (typeof getUsername === 'function' && getUsername()) ? getUsername() : null;

  const uname = (typeof getUsername === 'function' && getUsername()) ? getUsername() : null;

  el.innerHTML = `
    <div class="acct-card">
      <div class="acct-kicker">Your account</div>
      <h1 class="acct-title">${uname ? '@' + uname : getUserEmail()}</h1>

      <div class="acct-meta">
        <div class="acct-meta-item">
          <span class="acct-meta-label">Username</span>
          <span class="acct-meta-value">${uname ? '@' + uname : '<a href="#signin">Choose one</a>'}</span>
        </div>
        <div class="acct-meta-item">
          <span class="acct-meta-label">Email</span>
          <span class="acct-meta-value">${getUserEmail()}</span>
        </div>
        <div class="acct-meta-item">
          <span class="acct-meta-label">Member since</span>
          <span class="acct-meta-value">${uname ? '@' + uname : '<a href="#signin">Choose one</a>'}</span>
        </div>
        <div class="acct-meta-item">
          <span class="acct-meta-label">Email</span>
          <span class="acct-meta-value">${getUserEmail()}</span>
        </div>
        <div class="acct-meta-item">
          <span class="acct-meta-label">Member since</span>
          <span class="acct-meta-value">${created}</span>
        </div>
        <div class="acct-meta-item">
          <span class="acct-meta-label">Saved firms</span>
          <span class="acct-meta-value" id="acctCount">—</span>
        </div>
      </div>

      <h2 class="acct-h2">Everything held about you</h2>
      <p class="acct-lead">This is the complete set of data associated with your account. There is nothing else.</p>
      <div id="acctShortlist" class="acct-shortlist">Loading…</div>

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
        <p>This removes your email address and your entire Shortlist from the database immediately and permanently. There is no soft-delete and no archive — it cannot be undone, and it cannot be restored on request.</p>
        <button class="acct-btn acct-btn-danger" id="acctDelete">Delete my account</button>
        <div class="acct-status" id="acctDeleteStatus" role="status" aria-live="polite"></div>
      </div>
    </div>`;

  loadAccountShortlist();
  wireAccountControls();
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
        listEl.innerHTML = `<p class="acct-empty">Couldn't load your Shortlist: ${res.error.message}</p>`;
        return;
      }

      const rows = res.data || [];
      if (countEl) countEl.textContent = String(rows.length);

      if (!rows.length) {
        listEl.innerHTML = `<p class="acct-empty">Your Shortlist is empty. Add firms from the <a href="#rankings">rankings</a>.</p>`;
        return;
      }

      listEl.innerHTML = rows.map(function (row) {
        // Resolve the slug to a display name where we can; fall back
        // to the raw slug rather than inventing one.
        const match = (typeof firms !== 'undefined' && firms)
          ? firms.find(function (f) { return f.slug === row.firm_slug; })
          : null;
        const name = match ? match.name : row.firm_slug;
        const saved = row.created_at ? new Date(row.created_at).toLocaleDateString() : '';
        return `
          <div class="acct-row">
            <a href="#${row.firm_slug}" class="acct-row-name">${name}</a>
            <span class="acct-row-date">${saved}</span>
            ${row.note ? `<div class="acct-row-note">${row.note}</div>` : ''}
          </div>`;
      }).join('');
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

      supabaseClient.from('shortlists').select('firm_slug, note, created_at').then(function (res) {
        const payload = {
          exported_at: new Date().toISOString(),
          email: getUserEmail(),
          account_created: currentUser ? currentUser.created_at : null,
          shortlist: res.error ? [] : (res.data || [])
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
        status.textContent = 'Check both inboxes — a confirmation link has been sent to the new address, and the change takes effect once you click it.';
      });
    });
  }

  if (deleteBtn) {
    deleteBtn.addEventListener('click', function () {
      const status = document.getElementById('acctDeleteStatus');
      const sure = window.confirm(
        'Permanently delete your account?\n\n' +
        'Your email address and your entire Shortlist will be erased immediately. ' +
        'This cannot be undone and cannot be restored on request.'
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
