/* ============================================================
   FUND-INTEGRATIONS.JS
   Phase 5H. Fund and outcome context inside the products that
   already exist, without changing what any of them decides.

   WHAT THIS ADDS, AND WHERE THE DATA ACTUALLY IS

     Partner Intelligence   outcome context for the 281 partners
                            who have three or more known outcomes
     Angel Intelligence     the same, for the 7 angels who qualify
     Raise Pipeline         latest tracked fund for firm targets
     Power Match            the same, as supporting context only

   POWER MATCH SCORING IS NOT TOUCHED

   Fund context appears beside a recommendation, never inside the
   score. A large fund is not a better fit for a founder - if
   anything a $2B fund is a worse fit for a $2M seed round, and a
   scoring model that rewarded size would quietly push founders
   toward investors who cannot write their cheque. Nothing here
   reads or alters fit.

   NO FUND SECTION ON PARTNER PROFILES

   Listing a firm's funds under a partner would assert that person
   ran those vehicles. No fund-partner evidence exists in the
   dataset, so partners get outcome context and no fund list.

   NO FUND ATTRIBUTION ON COMPANY PAGES YET

   Zero of 573 participations carry a fund, so a "Fund" column on a
   company's deal history would be empty on every row. It is omitted
   until attribution exists rather than shipped blank.
   ============================================================ */

function fiEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ------------------------------------------------------------
   PARTNER AND ANGEL OUTCOME CONTEXT
   ------------------------------------------------------------ */

function renderPartnerOutcomes(slug) {
  if (typeof occForPartner !== 'function' || typeof occPanel !== 'function') return '';
  const res = occForPartner(slug);
  if (!res || !occHasEnough(res)) return '';
  if (typeof pbTrack === 'function') pbTrack('outcome_context_viewed');
  return occPanel(res, { title: 'Tracked portfolio outcomes' });
}

function renderAngelOutcomes(personId) {
  if (typeof occForAngel !== 'function' || typeof occPanel !== 'function') return '';
  const res = occForAngel(personId);
  if (!res || !occHasEnough(res)) return '';
  if (typeof pbTrack === 'function') pbTrack('outcome_context_viewed');
  return occPanel(res, { title: 'Tracked portfolio outcomes' });
}

/* Firm outcome context. Renders nothing today: firm outcomes are
   counted from tracked PARTICIPATIONS, and those are recent deals
   that have not reached an outcome, so the floor of three is never
   met. Wired anyway because it turns itself on the moment deal
   research matures, rather than needing to be remembered later. */
function renderFirmOutcomes(firm) {
  if (!firm || typeof occForFirm !== 'function' || typeof occPanel !== 'function') return '';
  const res = occForFirm(firm.slug);
  if (!res || !occHasEnough(res)) return '';
  if (typeof pbTrack === 'function') pbTrack('outcome_context_viewed');
  return occPanel(res, { title: 'Tracked portfolio outcomes' });
}

/* ------------------------------------------------------------
   COMPACT FUND CONTEXT

   One line, used by the pipeline and by Power Match. Returns null
   when there is nothing sourced, so callers render nothing rather
   than an empty label.
   ------------------------------------------------------------ */

function fiFundLine(firmSlug) {
  if (typeof fundLatestFor !== 'function') return null;
  const f = fundLatestFor(firmSlug);
  if (!f) return null;
  const size = (typeof fundSizeWithBasis === 'function') ? fundSizeWithBasis(f) : null;
  const name = (typeof fundDisplayName === 'function') ? fundDisplayName(f) : f.name;
  const bits = [name];
  if (f.vintageYear) bits.push(String(f.vintageYear));
  if (size) bits.push(size);
  return {
    text: bits.join(' · '),
    route: (typeof fundRouteFor === 'function') ? fundRouteFor(f) : null,
    fund: f
  };
}

/* The label always says LATEST TRACKED, never "current". Deployment
   is not known, and a founder reading "current fund" concludes the
   money is live. */
function fiFundContextHtml(firmSlug, opts) {
  opts = opts || {};
  const line = fiFundLine(firmSlug);
  if (!line) return '';
  return '<div class="fi-fund' + (opts.compact ? ' is-compact' : '') + '">' +
    '<span class="fi-fund-label">Latest tracked fund</span>' +
    (line.route
      ? '<a class="fi-fund-val" href="' + fiEsc(line.route) + '">' + fiEsc(line.text) + '</a>'
      : '<span class="fi-fund-val">' + fiEsc(line.text) + '</span>') +
  '</div>';
}

/* ------------------------------------------------------------
   RAISE PIPELINE

   Injected into the target detail panel, which is where a founder
   is deciding how to approach a firm. Deliberately NOT a pipeline
   table column: the table is already dense, and a fund is context
   for one conversation rather than something to sort forty rows by.

   A founder is never asked to choose a fund. They pursue the firm
   and the partner; the vehicle is background.
   ------------------------------------------------------------ */

function fiPipelineFundHtml(target) {
  if (!target || target.targetType !== 'FIRM' || !target.firmSlug) return '';
  const line = fiFundLine(target.firmSlug);
  if (!line) return '';
  return '<section class="pd-sec"><h3 class="pd-h">Fund context</h3>' +
    fiFundContextHtml(target.firmSlug, { compact: true }) +
    '<p class="fi-note">The most recent fund Power Board has recorded for this firm. ' +
    'Whether they are still investing from it is not tracked.</p>' +
  '</section>';
}

/* ------------------------------------------------------------
   POWER MATCH

   Supporting context under a recommendation. Injected rather than
   scored, so the ordering of results is untouched.
   ------------------------------------------------------------ */

function fiInjectPowerMatch() {
  const cards = document.querySelectorAll('#findInvestorsView .finder-result-card[data-pm-slug]');
  cards.forEach(function (card) {
    if (card.querySelector('.fi-fund')) return;
    const slug = card.getAttribute('data-pm-slug');
    const html = fiFundContextHtml(slug, { compact: true });
    if (!html) return;
    const holder = document.createElement('div');
    holder.innerHTML = html;
    const node = holder.firstChild;
    if (node) card.appendChild(node);
  });
}

/* Power Match re-renders on every answer change, so a one-off pass
   would survive until the first click. Same approach as the Add to
   Raise injector, and equally silent when the surface is absent. */
let _fiObserver = null;
function fiStartObserver() {
  if (_fiObserver || typeof MutationObserver === 'undefined') return;
  const host = document.getElementById('findInvestorsView');
  if (!host) return;
  let queued = false;
  _fiObserver = new MutationObserver(function () {
    if (queued) return;
    queued = true;
    setTimeout(function () {
      queued = false;
      try { fiInjectPowerMatch(); } catch (e) {}
    }, 150);
  });
  _fiObserver.observe(host, { childList: true, subtree: true });
}

if (typeof document !== 'undefined' && document.addEventListener) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(function () { fiInjectPowerMatch(); fiStartObserver(); }, 1000);
    });
  } else {
    setTimeout(function () { fiInjectPowerMatch(); fiStartObserver(); }, 1000);
  }
  window.addEventListener('hashchange', function () {
    setTimeout(function () { try { fiInjectPowerMatch(); } catch (e) {} }, 400);
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    renderPartnerOutcomes: renderPartnerOutcomes,
    renderAngelOutcomes: renderAngelOutcomes,
    renderFirmOutcomes: renderFirmOutcomes,
    fiFundLine: fiFundLine,
    fiFundContextHtml: fiFundContextHtml,
    fiPipelineFundHtml: fiPipelineFundHtml
  };
}
