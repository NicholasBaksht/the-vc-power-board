/* ============================================================
   FIRM-REQUESTS.JS
   Two entry points, one table:

     1. A search that returns nothing turns into a request. Rather
        than a dead "no results", the user is asked which firm they
        expected - which turns every failed search into a signal
        about what to research next.

     2. "Don't see your firm? Request to be listed." A firm can
        submit information for consideration.

   WHAT THIS DOES NOT DO: it never writes to the firm dataset. A
   submission is a research lead, not an edit. The public record
   stays independently verified, and the database policy enforces
   that - there is no update path from the browser at all, so a
   firm cannot alter its own listing even if it wanted to.

   Submissions are also never read back into the page. There is no
   select policy on the table, so the "most requested" list lives
   in the Supabase dashboard, not in public HTML.
   ============================================================ */

const FR_TABLE = 'firm_requests';
const FR_THROTTLE_KEY = 'pb-last-request';
const FR_THROTTLE_MS = 20 * 1000;

function frClient() {
  // supabaseClient is created in auth.js. Classic scripts share a
  // global scope, so it is visible here once that file has run.
  if (typeof supabaseClient === 'undefined' || !supabaseClient) return null;
  return supabaseClient;
}

/* A courtesy throttle only. It stops an accidental double-submit; it
   is not a security control and is not treated as one - anything that
   actually matters is enforced by the row-level policy on the table. */
function frThrottled() {
  try {
    const last = parseInt(localStorage.getItem(FR_THROTTLE_KEY) || '0', 10);
    return Date.now() - last < FR_THROTTLE_MS;
  } catch (e) { return false; }
}
function frMarkSubmitted() {
  try { localStorage.setItem(FR_THROTTLE_KEY, String(Date.now())); } catch (e) {}
}

function frSubmit(payload) {
  const client = frClient();
  if (!client) {
    return Promise.resolve({ ok: false,
      message: 'Requests are unavailable right now — the connection to our database did not load. Please try again later.' });
  }
  const name = String(payload.firmName || '').trim();
  if (name.length < 2) {
    return Promise.resolve({ ok: false, message: 'Please enter the firm’s name.' });
  }
  if (frThrottled()) {
    return Promise.resolve({ ok: false, message: 'Thanks — that just went through. Give it a moment before sending another.' });
  }

  const row = {
    kind: payload.kind === 'listing_request' ? 'listing_request' : 'missing_firm',
    firm_name: name.slice(0, 120),
    website: (payload.website || '').trim().slice(0, 300) || null,
    reason: (payload.reason || '').trim().slice(0, 1000) || null,
    search_term: (payload.searchTerm || '').trim().slice(0, 200) || null,
    contact_email: (payload.email || '').trim().slice(0, 320) || null
    // status and requested_by are left to the database: status defaults
    // to 'pending' and the policy refuses anything else.
  };

  return client.from(FR_TABLE).insert(row).then(function (res) {
    if (res.error) {
      /* The database message goes to the console, not to the page. A
         visitor should not be shown "schema cache" or a policy name -
         those describe our setup, not anything they can act on. */
      if (typeof console !== 'undefined') console.warn('firm_requests insert failed:', res.error);
      return { ok: false, message: 'That did not save. Please try again in a moment.' };
    }
    frMarkSubmitted();
    return { ok: true };
  }).catch(function () {
    return { ok: false, message: 'That did not save. Please check your connection and try again.' };
  });
}

/* ---------- the form ---------- */
function frFormHtml(opts) {
  const listing = opts.kind === 'listing_request';
  return `
    <form class="fr-form" data-kind="${opts.kind}" onsubmit="return false;">
      <div class="fr-title">${opts.title}</div>
      <p class="fr-sub">${opts.sub}</p>

      <label class="fr-label" for="frName-${opts.kind}">Firm name</label>
      <input class="fr-input" id="frName-${opts.kind}" type="text" maxlength="120"
             placeholder="e.g. Foundation Capital" autocomplete="organization"
             value="${opts.prefill ? String(opts.prefill).replace(/"/g, '&quot;') : ''}">

      <label class="fr-label" for="frSite-${opts.kind}">Website <span class="fr-optional">optional</span></label>
      <input class="fr-input" id="frSite-${opts.kind}" type="url" maxlength="300"
             placeholder="https://" autocomplete="url">

      <label class="fr-label" for="frWhy-${opts.kind}">
        ${listing ? 'Anything we should know' : 'Why should we add them?'}
        <span class="fr-optional">optional</span>
      </label>
      <textarea class="fr-input fr-textarea" id="frWhy-${opts.kind}" rows="3" maxlength="1000"
        placeholder="${listing
          ? 'Fund size, stage, sectors, where the public sources are.'
          : 'What they invest in, why you expected to find them here.'}"></textarea>

      ${listing ? `
      <label class="fr-label" for="frMail-${opts.kind}">Your email <span class="fr-optional">optional</span></label>
      <input class="fr-input" id="frMail-${opts.kind}" type="email" maxlength="320"
             placeholder="you@firm.com" autocomplete="email">` : ''}

      <div class="fr-actions">
        <button type="button" class="fr-btn" data-fr-submit>${listing ? 'Submit for review' : 'Request this firm'}</button>
        <span class="fr-status" role="status" aria-live="polite"></span>
      </div>

      <p class="fr-note">Submissions are treated as research leads. Every listing on this site is
      compiled from independently verified public sources — a request is never published as-is, and
      a firm can never edit its own entry.</p>
    </form>`;
}

function frWire(root) {
  const form = root.querySelector('.fr-form');
  if (!form || form.dataset.wired === '1') return;
  form.dataset.wired = '1';
  const kind = form.dataset.kind;
  const btn = form.querySelector('[data-fr-submit]');
  const status = form.querySelector('.fr-status');

  btn.addEventListener('click', function () {
    const g = (id) => { const e = document.getElementById(id + '-' + kind); return e ? e.value : ''; };

    /* Before accepting a request for a firm we may already track, check.
       Someone typing "Sequoia" should be sent to the existing profile to
       claim it, not invited to create a duplicate record. */
    if (typeof findLikelyExistingFirm === 'function') {
      const hit = findLikelyExistingFirm(g('frName'), g('frSite'));
      if (hit && !form.dataset.dupeAcknowledged) {
        form.dataset.dupeAcknowledged = '1';
        status.innerHTML = 'We already track <a href="#' + hit.firm.slug + '">' + hit.firm.name +
          '</a> — matched on ' + hit.on + '. If that is your firm, open it and use ' +
          '<strong>Claim this listing</strong> instead. Press submit again if it is a different firm.';
        return;
      }
    }

    btn.disabled = true;
    status.textContent = 'Sending…';
    frSubmit({
      kind: kind,
      firmName: g('frName'),
      website: g('frSite'),
      reason: g('frWhy'),
      email: g('frMail'),
      searchTerm: (typeof searchTerm === 'string' ? searchTerm : '')
    }).then(function (res) {
      btn.disabled = false;
      if (!res.ok) { status.textContent = res.message; return; }
      form.innerHTML = '<div class="fr-thanks"><strong>Thank you — that is logged.</strong>' +
        ' We review requests in batches and add firms once we can verify them from public sources.' +
        ' We cannot promise a timeline, and a request is not a commitment to list.</div>';
    });
  });
}

/* Called by renderFirms() whenever a search or filter returns nothing. */
function frRenderNoResults(host, term) {
  if (!host) return;
  const clean = String(term || '').trim();
  if (!clean) {
    host.innerHTML = '<div class="fr-empty">No firms match these filters. Try clearing one.</div>';
    return;
  }
  host.innerHTML =
    `<div class="fr-empty"><strong>We couldn’t find “${clean.replace(/[<>&]/g, '')}”.</strong>
     Nothing in the ${(typeof canonicalFirmCount === 'function' && canonicalFirmCount()) || ''} firms
     tracked here matches that name, company or ticker.</div>` +
    frFormHtml({
      kind: 'missing_firm',
      title: 'Which firm are you looking for?',
      sub: 'Tell us and we will look into adding it. This is how we decide what to research next.',
      prefill: clean
    });
  frWire(host);
}

/* The always-available entry point under the firm grid. */
function frRenderListingCta(host) {
  if (!host || host.dataset.built === '1') return;
  host.dataset.built = '1';
  host.innerHTML =
    `<button type="button" class="fr-cta" id="frOpenListing" aria-expanded="false" aria-controls="frListingPanel">
       Don’t see your firm? Request to be listed →
     </button>
     <div id="frListingPanel" hidden></div>`;
  const btn = host.querySelector('#frOpenListing');
  const panel = host.querySelector('#frListingPanel');
  btn.addEventListener('click', function () {
    const open = !panel.hidden;
    if (open) { panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); return; }
    if (!panel.innerHTML) {
      panel.innerHTML = frFormHtml({
        kind: 'listing_request',
        title: 'Request to be listed',
        sub: 'Send us what you have. We verify everything against public sources before anything appears.',
        prefill: ''
      });
      frWire(panel);
    }
    panel.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
  });
}
