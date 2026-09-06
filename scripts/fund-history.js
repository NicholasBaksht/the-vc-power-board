/* ============================================================
   FUND-HISTORY.JS
   Phase 5B. A firm's fund history on its profile.

   "LATEST TRACKED FUND", NOT "CURRENT FUND"

   The difference is the whole point of this file. Power Board knows
   which vehicle a firm most recently RAISED. It does not know whether
   they are still writing cheques out of it, whether it is fully
   deployed, or whether they are quietly raising the next one. Calling
   the newest fund "current" would answer a question the data has not
   answered, and a founder reading "current fund" reasonably concludes
   the money is live.

   So the section says latest TRACKED fund, dates it, and says plainly
   that deployment status is not known.

   NEWEST IS NOT THE SAME AS PRIMARY

   A firm's most recent vehicle is often an Opportunity or Growth
   fund raised alongside the flagship. Surfacing that as the headline
   would tell a seed founder the firm's newest fund is a growth
   vehicle and imply that is what they would be raising from. So the
   headline prefers the newest FLAGSHIP vehicle - the firm's own label
   for its main fund - and specialised vehicles are shown beside it
   rather than in place of it.

   AUM IS THE FIRM. SIZE IS THE FUND.

   The firm's AUM already appears in the profile header. Nothing here
   reads it, and no fund row ever displays it. They are different
   quantities and the page must never let one stand in for the other.

   THE LIST IS NOT A CLAIM OF COMPLETENESS

   43 of the 65 firms with fund research are explicitly marked
   incomplete. Every one of those says so under the table, because a
   list that looks exhaustive when it is not is the most misleading
   thing this section could do.
   ============================================================ */

function fhEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* The vehicle to lead with. Prefers the newest flagship, because that
   is the firm's own designation for its main fund, and falls back to
   the newest of anything only when no flagship is tracked. Returns
   null rather than guessing when nothing has a vintage. */
function fundLatestFor(firmSlug) {
  const list = (typeof fundsForFirm === 'function') ? fundsForFirm(firmSlug) : [];
  if (!list.length) return null;
  const dated = list.filter(function (f) { return f.vintageYear != null; });
  if (!dated.length) return null;
  const flagship = dated.filter(function (f) { return f.isFlagship; });
  const pool = flagship.length ? flagship : dated;
  return pool.reduce(function (best, f) {
    return (!best || f.vintageYear > best.vintageYear) ? f : best;
  }, null);
}

/* Vehicles raised at or after the headline fund's vintage that are
   NOT the headline. These are the growth and opportunity funds a
   founder should know exist without them displacing the main fund. */
function fundCompanionsFor(firmSlug, latest) {
  if (!latest) return [];
  const list = (typeof fundsForFirm === 'function') ? fundsForFirm(firmSlug) : [];
  return list.filter(function (f) {
    return f.fundId !== latest.fundId &&
      f.vintageYear != null && f.vintageYear >= latest.vintageYear;
  });
}

function fhVintage(f) {
  return f.vintageYear != null ? String(f.vintageYear) : null;
}

/* ------------------------------------------------------------
   THE SECTION
   ------------------------------------------------------------ */

function renderFirmFunds(firm) {
  if (!firm || typeof fundsForFirm !== 'function') return '';
  const list = fundsForFirm(firm.slug);
  if (!list.length) return '';

  const latest = fundLatestFor(firm.slug);
  const companions = fundCompanionsFor(firm.slug, latest);
  const coverage = (typeof fundCoverageNote === 'function') ? fundCoverageNote(firm.slug) : null;

  return '<section class="fh-sec" aria-labelledby="fhHead">' +
    '<h2 class="fh-h" id="fhHead">Funds tracked by Power Board</h2>' +
    (latest ? fhHeadline(latest, companions) : '') +
    fhTable(list) +
    (coverage ? '<p class="fh-coverage">' + fhEsc(coverage) + '</p>' : '') +
  '</section>';
}

function fhHeadline(latest, companions) {
  const size = (typeof fundSizeWithBasis === 'function') ? fundSizeWithBasis(latest) : null;
  const basis = (typeof fundSizeBasisLabel === 'function') ? fundSizeBasisLabel(latest) : null;
  const strategy = (typeof fundStrategyLabel === 'function') ? fundStrategyLabel(latest) : null;
  const name = (typeof fundDisplayName === 'function') ? fundDisplayName(latest) : latest.name;

  const facts = [];
  if (fhVintage(latest)) facts.push(['Vintage', fhVintage(latest)]);
  if (size) facts.push([basis || 'Fund size', size]);
  if (strategy && latest.strategy !== 'UNKNOWN') facts.push(['Stated strategy', strategy]);
  if (latest.raiseStatus && latest.raiseStatus !== 'UNKNOWN') {
    facts.push(['Fundraising', fundRaiseStatusLabel(latest)]);
  }

  return '<div class="fh-latest">' +
    '<div class="fh-latest-top">' +
      '<span class="fh-latest-label">Latest tracked fund</span>' +
      '<span class="fh-latest-name">' +
        ((typeof fundRouteFor === 'function' && fundRouteFor(latest))
          ? '<a href="' + fhEsc(fundRouteFor(latest)) + '">' + fhEsc(name) + '</a>'
          : fhEsc(name)) + '</span>' +
      (latest.isFlagship ? '<span class="fh-flag">Flagship</span>' : '') +
    '</div>' +
    (facts.length
      ? '<dl class="fh-facts">' + facts.map(function (f) {
          return '<div><dt>' + fhEsc(f[0]) + '</dt><dd>' + fhEsc(f[1]) + '</dd></div>';
        }).join('') + '</dl>'
      : '') +
    /* The sentence that stops "latest" being read as "live". */
    '<p class="fh-caveat">This is the most recent fund Power Board has recorded for this firm. ' +
    'Whether the firm is still investing from it is not tracked.</p>' +
    (companions.length
      ? '<p class="fh-companions">Also raised around the same time: ' +
        companions.map(function (c) {
          const n = (typeof fundDisplayName === 'function') ? fundDisplayName(c) : c.name;
          const s = (typeof fundSizeWithBasis === 'function') ? fundSizeWithBasis(c) : null;
          return fhEsc(n) + (s ? ' (' + fhEsc(s) + ')' : '');
        }).join(', ') + '.</p>'
      : '') +
  '</div>';
}

function fhTable(list) {
  return '<div class="fh-tablewrap"><table class="fh-table">' +
    '<caption class="pl-sr">Funds tracked by Power Board for this firm</caption>' +
    '<thead><tr>' +
      '<th scope="col">Fund</th>' +
      '<th scope="col">Strategy</th>' +
      '<th scope="col">Vintage</th>' +
      '<th scope="col">Size</th>' +
      '<th scope="col">Basis</th>' +
      '<th scope="col">Fundraising</th>' +
      '<th scope="col">Source</th>' +
    '</tr></thead><tbody>' +
    list.map(fhRow).join('') +
    '</tbody></table></div>';
}

function fhRow(f) {
  const name = (typeof fundDisplayName === 'function') ? fundDisplayName(f) : f.name;
  const size = (typeof fundSizeLabel === 'function') ? fundSizeLabel(f) : null;
  const basis = (typeof fundSizeBasisLabel === 'function') ? fundSizeBasisLabel(f) : null;
  const strategy = (typeof fundStrategyLabel === 'function') ? fundStrategyLabel(f) : null;

  /* An unknown value is a dash, never a zero and never a guess. The
     dash is the honest answer to "what size was it". */
  const dash = '<span class="fh-null">-</span>';

  /* Links to the fund page when one can be addressed. A fund whose
     id cannot be split into firm and vehicle has no valid URL, so it
     renders as plain text rather than a broken link. */
  const route = (typeof fundRouteFor === 'function') ? fundRouteFor(f) : null;
  const nameHtml = route
    ? '<a href="' + fhEsc(route) + '">' + fhEsc(name) + '</a>'
    : fhEsc(name);

  return '<tr' + (f.isFlagship ? ' class="is-flagship"' : '') + '>' +
    '<td class="fh-name">' + nameHtml +
      (f.combinedVehicles
        ? '<span class="fh-note" title="Closed together with another vehicle; only a combined total was disclosed">combined</span>'
        : '') +
      (f.researchStatus === 'IDENTITY_NEEDS_REVIEW'
        ? '<span class="fh-note fh-note-warn" title="This vehicle has no published name in Power Board research">unnamed vehicle</span>'
        : '') +
    '</td>' +
    '<td>' + (strategy && f.strategy !== 'UNKNOWN' ? fhEsc(strategy) : dash) + '</td>' +
    '<td class="fh-num">' + (fhVintage(f) ? fhEsc(fhVintage(f)) : dash) + '</td>' +
    '<td class="fh-num">' + (size ? fhEsc(size) : dash) +
      (f.originalCurrency && f.sizeOriginal != null
        ? '<span class="fh-orig">' + fhEsc(f.originalCurrency) + ' original</span>'
        : '') +
    '</td>' +
    '<td>' + (basis ? fhEsc(basis) : dash) + '</td>' +
    '<td>' + (f.raiseStatus !== 'UNKNOWN' ? fhEsc(fundRaiseStatusLabel(f)) : dash) + '</td>' +
    '<td class="fh-src">' +
      (f.source
        ? '<a href="' + fhEsc(f.source) + '" target="_blank" rel="noopener nofollow">Source</a>' +
          (f.confidence && f.confidence !== 'high'
            ? '<span class="fh-conf">' + fhEsc(f.confidence) + ' confidence</span>' : '')
        : dash) +
    '</td>' +
  '</tr>';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    fundLatestFor: fundLatestFor, fundCompanionsFor: fundCompanionsFor,
    renderFirmFunds: renderFirmFunds, fhRow: fhRow, fhHeadline: fhHeadline
  };
}
