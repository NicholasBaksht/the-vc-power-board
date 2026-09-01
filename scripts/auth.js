/* ============================================================
   AUTH - Supabase one-time-code authentication
   ------------------------------------------------------------
   Declares the globals `supabaseClient` and `currentUser`, plus
   the sign-in/sign-out helpers used by the sign-in view, the
   account view, and shortlist.js.

   Design notes, because two of these are load-bearing:

   1. PKCE flow, not implicit. Supabase's default implicit flow
      returns the session in the URL *hash* (#access_token=...),
      which would collide head-on with this site's hash router -
      router() would read "access_token=..." as a slug. PKCE
      returns ?code=... in the query string instead, which the
      hash router never looks at. Do not change flowType.

   2. Everything degrades. If the Supabase CDN fails to load or
      the keys are wrong, supabaseClient stays null, isSignedIn()
      returns false, and the site behaves exactly as it did
      before accounts existed. Auth is additive, never required.

   3. SIGN-IN IS A 6-DIGIT CODE, not a link. Supabase decides
      which to send purely from the email template: a template
      containing {{ .Token }} sends a code, one containing
      {{ .ConfirmationURL }} sends a link. The code path never
      leaves the site, so there is no redirect to mishandle.
      The magic-link handling below is kept anyway so links
      already sitting in someone's inbox still work.

   Load order: after the Supabase CDN script, before shortlist.js
   and app.js.
   ============================================================ */

/* ---------- CONFIGURATION ----------
   Both values below are safe to publish. The anon key is a
   public client identifier - it grants nothing on its own,
   because every table is protected by row level security that
   checks auth.uid(). It is designed to ship in browser code. */
const SUPABASE_URL = 'https://bwghtmbaqljbconbgpup.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_KeWlq_12xJElNifqEo5GYA_4IlTE1KG';

/* Where the magic link returns to. Must exactly match one of the
   redirect URLs allowed in the Supabase dashboard.

   Deliberately has no #fragment. PKCE returns the one-time code as
   ?code=..., and a query string must precede a fragment in a valid
   URL - so a redirect target of "/#account" risks coming back as
   "/#account?code=...", where location.search is empty and the
   client never sees the code. Land on the bare origin, then move
   the user to #account ourselves once the session exists. */
const AUTH_REDIRECT_URL = 'https://thevcpowerboard.com/';

/* Captured at load, before the Supabase client consumes and strips
   ?code=... from the URL. This is what distinguishes "just clicked
   the magic link in my email" - who should land on #account - from
   "returning visitor whose stored session was restored", who should
   be left on whatever page they actually asked for. */
const ARRIVED_FROM_MAGIC_LINK = /[?&]code=/.test(window.location.search);

let supabaseClient = null;
let currentUser = null;
let authReady = false;

/* The signed-in user's row from public.profiles, or null if they
   have not chosen a username yet. Kept separate from currentUser
   because Supabase owns that object and we do not. */
let currentProfile = null;

/* Files that need to re-render when sign-in state changes push a
   callback in here rather than importing each other. */
const authListeners = [];

function onAuthChange(fn) {
  if (typeof fn === 'function') authListeners.push(fn);
}

function notifyAuthListeners() {
  for (let i = 0; i < authListeners.length; i++) {
    try {
      authListeners[i](currentUser);
    } catch (e) {
      // One bad listener must not stop the others or break the page.
      console.error('auth listener failed:', e);
    }
  }
}

/* ---------- INITIALISATION ---------- */
function initAuth() {
  // window.supabase is the UMD global from the CDN script. If that
  // script failed, leave supabaseClient null and carry on.
  if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
    console.warn('Supabase client library not loaded - running signed out.');
    authReady = true;
    return;
  }

  if (SUPABASE_URL.indexOf('YOUR-PROJECT-REF') !== -1) {
    console.warn('Supabase not configured yet - running signed out.');
    authReady = true;
    return;
  }

  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      flowType: 'pkce',
      detectSessionInUrl: true,
      persistSession: true,
      autoRefreshToken: true,
      storage: window.localStorage
    }
  });

  // Fires on initial session restore, on sign-in, and on sign-out.
  supabaseClient.auth.onAuthStateChange(function (event, session) {
    currentUser = session ? session.user : null;
    authReady = true;
    if (!currentUser) currentProfile = null;
    else fetchProfile().then(notifyAuthListeners);

    // Only redirect people who genuinely just arrived from an email
    // link. Setting the hash triggers hashchange, so router() picks
    // it up without a reload.
    if (event === 'SIGNED_IN' && ARRIVED_FROM_MAGIC_LINK && window.location.hash !== '#account') {
      window.location.hash = '#account';
    }

    notifyAuthListeners();
  });

  // onAuthStateChange covers the normal cases, but ask once
  // directly so a page loaded with no stored session still
  // resolves authReady instead of waiting forever.
  supabaseClient.auth.getSession().then(function (res) {
    const session = res && res.data ? res.data.session : null;
    currentUser = session ? session.user : null;
    authReady = true;
    if (currentUser) return fetchProfile().then(notifyAuthListeners);
    notifyAuthListeners();
  }).catch(function () {
    authReady = true;
  });
}

/* ---------- PUBLIC HELPERS ---------- */

function isSignedIn() {
  return currentUser !== null;
}

function getUserEmail() {
  return currentUser ? currentUser.email : null;
}

/* Sends the one-time sign-in link. Resolves to
   { ok: true } or { ok: false, error: '...' } so callers can
   render a message without touching Supabase error shapes. */
function signInWithEmail(email) {
  if (!supabaseClient) {
    return Promise.resolve({ ok: false, error: 'Sign-in is unavailable right now.' });
  }

  const clean = (email || '').trim();
  // Deliberately permissive: the real validation is whether the
  // link arrives in the inbox.
  if (clean.length < 3 || clean.indexOf('@') === -1) {
    return Promise.resolve({ ok: false, error: 'Enter a valid email address.' });
  }

  return supabaseClient.auth.signInWithOtp({
    email: clean,
    options: { emailRedirectTo: AUTH_REDIRECT_URL }
  }).then(function (res) {
    if (res.error) return { ok: false, error: res.error.message };
    return { ok: true };
  }).catch(function (e) {
    return { ok: false, error: e && e.message ? e.message : 'Something went wrong.' };
  });
}

/* Verifies the 6-digit code from the email. type:'email' covers
   both a brand-new signup and a returning sign-in, so there is no
   need to know which one this is. */
function verifyEmailCode(email, code) {
  if (!supabaseClient) {
    return Promise.resolve({ ok: false, error: 'Sign-in is unavailable right now.' });
  }

  const cleanEmail = (email || '').trim();
  // Strip spaces and dashes people paste in; only digits are real.
  const cleanCode = (code || '').replace(/\D/g, '');
  // Supabase's OTP length is a project setting, adjustable from 6 to 10.
  // Hard-coding 6 here silently breaks sign-in the moment that setting
  // changes, so accept the whole supported range instead.
  if (cleanCode.length < 6 || cleanCode.length > 10) {
    return Promise.resolve({ ok: false, error: 'Enter the code from your email.' });
  }

  return supabaseClient.auth.verifyOtp({
    email: cleanEmail,
    token: cleanCode,
    type: 'email'
  }).then(function (res) {
    if (res.error) {
      // Supabase says "Token has expired or is invalid" for both a
      // wrong code and an expired one. Do not guess which.
      return { ok: false, error: res.error.message };
    }
    currentUser = res.data && res.data.user ? res.data.user : currentUser;
    return fetchProfile().then(function () {
      notifyAuthListeners();
      return { ok: true };
    });
  }).catch(function (e) {
    return { ok: false, error: e && e.message ? e.message : 'Could not verify that code.' };
  });
}

/* ---------- PROFILE / USERNAME ---------- */

/* Reads the signed-in user's own profile row. Returns null rather
   than throwing when the table does not exist yet, so the site
   keeps working before the SQL migration is applied. */
function fetchProfile() {
  if (!supabaseClient || !currentUser) {
    currentProfile = null;
    return Promise.resolve(null);
  }
  return supabaseClient
    .from('profiles')
    .select('username')
    .eq('id', currentUser.id)
    .maybeSingle()
    .then(function (res) {
      currentProfile = (res && res.data) ? res.data : null;
      return currentProfile;
    })
    .catch(function () {
      currentProfile = null;
      return null;
    });
}

function getUsername() {
  return currentProfile ? currentProfile.username : null;
}

function hasUsername() {
  return !!(currentProfile && currentProfile.username);
}

/* Claims or changes a username. Uniqueness is enforced by the
   UNIQUE constraint in the database, not by a lookup here - a
   check-then-insert would race, and reading other people's rows
   would mean loosening row level security for no good reason. */
function saveUsername(name) {
  if (!supabaseClient || !currentUser) {
    return Promise.resolve({ ok: false, error: 'You are not signed in.' });
  }

  const clean = (name || '').trim();
  /* Kept in step with the profiles_username_format constraint. The
     database is the authority; this check exists so the person gets
     told before a round trip, not so the rule lives in two places
     with two different answers. */
  if (!/^[A-Za-z0-9][A-Za-z0-9._ -]{1,38}[A-Za-z0-9]$/.test(clean) ||
      /  /.test(clean) || /[._-]{2,}/.test(clean)) {
    return Promise.resolve({
      ok: false,
      error: 'Usernames are 3-40 characters and may contain spaces, dots, dashes ' +
             'and underscores. They must start and end with a letter or number, ' +
             'and cannot contain two spaces in a row.'
    });
  }

  return supabaseClient
    .from('profiles')
    .upsert({ id: currentUser.id, username: clean }, { onConflict: 'id' })
    .select('username')
    .single()
    .then(function (res) {
      if (res.error) {
        const raw = res.error.message || '';
        if (/duplicate key|unique constraint/i.test(raw)) {
          return { ok: false, error: 'That username is already taken.' };
        }
        if (/violates check constraint/i.test(raw)) {
          return { ok: false, error: 'Usernames are 3-20 characters: letters, numbers and underscores only.' };
        }
        return { ok: false, error: raw || 'Could not save that username.' };
      }
      currentProfile = res.data;
      notifyAuthListeners();
      return { ok: true };
    })
    .catch(function (e) {
      return { ok: false, error: e && e.message ? e.message : 'Could not save that username.' };
    });
}

function signOut() {
  if (!supabaseClient) return Promise.resolve({ ok: true });

  return supabaseClient.auth.signOut().then(function (res) {
    currentUser = null;
    currentProfile = null;
    notifyAuthListeners();
    if (res && res.error) return { ok: false, error: res.error.message };
    return { ok: true };
  }).catch(function (e) {
    currentUser = null;
    currentProfile = null;
    notifyAuthListeners();
    return { ok: false, error: e && e.message ? e.message : 'Sign out failed.' };
  });
}

/* Permanent account deletion. Calls the SECURITY DEFINER function
   delete_own_account(), which removes the row from auth.users;
   the shortlists foreign key cascades from there. This is what
   makes the Privacy Policy's "immediate and permanent, no
   soft-delete" commitment literally true. */
function deleteOwnAccount() {
  if (!supabaseClient || !currentUser) {
    return Promise.resolve({ ok: false, error: 'You are not signed in.' });
  }

  return supabaseClient.rpc('delete_own_account').then(function (res) {
    if (res.error) return { ok: false, error: res.error.message };
    return signOut().then(function () { return { ok: true }; });
  }).catch(function (e) {
    return { ok: false, error: e && e.message ? e.message : 'Deletion failed.' };
  });
}

initAuth();
