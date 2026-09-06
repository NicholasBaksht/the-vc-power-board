/* ============================================================
   FUND-PAGE.JS
   Phase 5D. One fund, and an honest account of what is known.

   THE ROUTE SAYS THE FIRM OUT LOUD

     #fund/a16z/fund-iii

   Not #fund/fund-iii, because 22 firms have a Fund III and that URL
   would be a lie about identity. Putting the firm in the path makes
   the scoping visible to anyone reading the address bar, and makes a
   firm-less fund URL impossible to construct.

   WHAT THIS PAGE MOSTLY SAYS TODAY IS "NOT KNOWN"

   Zero of 573 tracked participations carry a fund attribution, so
   every fund page currently reports no attributed investments, no
   observed behaviour, and no fund-specific partners. That is the
   correct output, not a gap in the page: Power Board attributes an
   investment to a vehicle only when a source names both.

   A page that filled those sections by inference would be more
   satisfying and completely untrustworthy. So each absent section
   states what is missing and why, rather than being hidden - a
   founder should be able to tell the difference between "this fund
   invested in nothing" and "we have not sourced this yet".

   NO PARTNER SECTION UNTIL THERE IS PARTNER EVIDENCE

   Listing a firm's partners under a fund would assert that those
   people ran that vehicle. Working at the firm is not evidence of
   participating in a particular fund, and no fund-partner evidence
   exists in the dataset. So the section does not render at all.

   NOTHING HERE IS A RETURN

   No performance figure, no multiple, no score. There is no return
   data in this product, and a fund page is exactly where a reader
   would most readily mistake a number for one.
   ============================================================ */

function fpEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* fundId is firmSlug::rest. The route splits that into path segments
   so the firm is visible rather than encoded. */
function fundRouteFor(fund) {
  if (!fund || !fund.fundId) return null;
  const parts = String(fund.fundId).split('::');
  if (parts.length !== 2) return null;
  return '#fund/' + parts[0] + '/' + parts[1];
}

function fundIdFromRoute(hash) {
  const m = String(hash || '').match(/^#?fund\/([^/]+)\/(.+)$/);
  if (!m) return null;
  return m[1] + '::' + m[2];
}

/* ------------------------------------------------------------
   RENDER
   ------------------------------------------------------------ */

function renderFundPage() {
  const host = document.getElementById('fundView');
  if (!host) return;

  const id = fundIdFromRoute(window.location.hash);
  const fund = (id && typeof fundById === 'function') ? fundById(id) : null;

  if (!fund) {
    host.innerHTML = '<div class="ds-wrap"><div class="ds-kicker">Fund</div>' +
      '<h1 class="ds-h1">Fund not found.</h1>' +
      '<p class="ds-sub">Power Board tracks funds under the firm that raised them. ' +
      'A fund address always names its firm, because the same fund name exists at ' +
      'many different firms.</p>' +
      '<p style="margin-top:14px"><a class="ds-btn" href="#firms">Browse firms</a></p></div>';
    return;
  }

  const firm = (typeof ptFirm === 'function') ? ptFirm(fund.firmSlug) : null;
  const name = (typeof fundDisplayName === 'function') ? fundDisplayName(fund) : fund.name;
  const size = (typeof fundSizeLabel === 'function') ? fundSizeLabel(fund) : null;
  const basis = (typeof fundSizeBasisLabel === 'function') ? fundSizeBasisLabel(fund) : null;
  const strategy = (typeof fundStrategyLabel === 'function') ? fundStrategyLabel(fund) : null;

  let h = '<div class="ds-wrap fp-wrap">' +
    '<div class="ds-kicker">Fund</div>' +
    '<h1 class="ds-h1 fp-name">' + fpEsc(name) + '</h1>' +
    '<p class="fp-firm">Raised by ' +
      (firm ? '<a href="#' + fpEsc(fund.firmSlug) + '">' + fpEsc(firm.name) + '</a>'
            : fpEsc(fund.firmSlug)) +
      (fund.isFlagship ? '<span class="fh-flag">Flagship</span>' : '') +
    '</p>';

  /* ---- what is known ---- */
  const facts = [];
  if (fund.vintageYear != null) facts.push(['Vintage', String(fund.vintageYear)]);
  if (size) facts.push([basis || 'Size', size]);
  if (fund.originalCurrency && fund.sizeOriginal != null) {
    facts.push(['Original currency', fund.originalCurrency]);
  }
  if (strategy && fund.strategy !== 'UNKNOWN') facts.push(['Stated strategy', strategy]);
  if (fund.raiseStatus !== 'UNKNOWN') facts.push(['Fundraising', fundRaiseStatusLabel(fund)]);
  if (fund.announcedDate) facts.push(['Announced', fund.announcedDate]);

  h += '<dl class="fp-facts">' + facts.map(function (f) {
    return '<div><dt>' + fpEsc(f[0]) + '</dt><dd>' + fpEsc(f[1]) + '</dd></div>';
  }).join('') + '</dl>';

  /* Deployment is its own row because its absence is the point. */
  h += '<p class="fp-deploy">Deployment status is not tracked. Power Board records when a ' +
    'fund was raised, not whether the firm is still investing from it.</p>';

  if (fund.combinedVehicles) {
    h += '<p class="fp-note">This record covers more than one vehicle: the firm closed them ' +
      'together and disclosed only a combined total.</p>';
  }
  if (fund.strategy === 'UNKNOWN') {
    h += '<p class="fp-note">No stated strategy is on file. Power Board records a strategy ' +
      'only where the firm states one, and does not infer it from what the fund invested in.</p>';
  }

  /* ---- tracked investments ---- */
  h += fpInvestments(fund);

  /* ---- observed behaviour ---- */
  h += fpObserved(fund);

  /* ---- sources ---- */
  h += '<section class="fp-sec"><h2 class="fp-h">Source</h2>' +
    (fund.source
      ? '<p class="fp-src"><a href="' + fpEsc(fund.source) + '" target="_blank" ' +
        'rel="noopener nofollow">' + fpEsc(fpHost(fund.source)) + '</a>' +
        (fund.confidence
          ? '<span class="fp-conf">' + fpEsc(fund.confidence) + ' confidence</span>' : '') +
        '</p>'
      : '<p class="fp-empty">No source on file.</p>') +
    '<p class="fp-research">Research status: ' +
      fpEsc(FUND_RESEARCH_STATUS[fund.researchStatus] || fund.researchStatus) + '.' +
      (fund.researchStatus === 'IDENTITY_NEEDS_REVIEW'
        ? ' This vehicle has no published name in Power Board research and is identified by ' +
          'the firm and vintage year.'
        : '') +
    '</p>' +
  '</section>';

  /* ---- other funds at this firm ---- */
  const siblings = (typeof fundsForFirm === 'function')
    ? fundsForFirm(fund.firmSlug).filter(function (f) { return f.fundId !== fund.fundId; })
    : [];
  if (siblings.length) {
    h += '<section class="fp-sec"><h2 class="fp-h">Other funds at this firm</h2>' +
      '<ul class="fp-siblings">' + siblings.map(function (f) {
        const r = fundRouteFor(f);
        const n = (typeof fundDisplayName === 'function') ? fundDisplayName(f) : f.name;
        const s = (typeof fundSizeWithBasis === 'function') ? fundSizeWithBasis(f) : null;
        return '<li>' + (r ? '<a href="' + fpEsc(r) + '">' + fpEsc(n) + '</a>' : fpEsc(n)) +
          (f.vintageYear ? '<span class="fp-sib-meta">' + f.vintageYear + '</span>' : '') +
          (s ? '<span class="fp-sib-meta">' + fpEsc(s) + '</span>' : '') + '</li>';
      }).join('') + '</ul>' +
      (typeof fundCoverageNote === 'function'
        ? '<p class="fh-coverage">' + fpEsc(fundCoverageNote(fund.firmSlug)) + '</p>' : '') +
    '</section>';
  }

  h += '</div>';
  host.innerHTML = h;
  if (typeof pbTrack === 'function') pbTrack('fund_profile_viewed');
}

function fpHost(url) {
  try { return String(url).replace(/^https?:\/\//, '').split('/')[0]; }
  catch (e) { return url; }
}

function fpInvestments(fund) {
  const inv = (typeof fundInvestments === 'function') ? fundInvestments(fund.fundId) : [];
  const sentence = (typeof fundCoverageSentence === 'function')
    ? fundCoverageSentence(fund.fundId) : '';

  let h = '<section class="fp-sec"><h2 class="fp-h">Tracked fund investments</h2>';
  if (!inv.length) {
    /* Stated, not hidden. "Nothing sourced yet" and "invested in
       nothing" are different facts and the reader must be able to
       tell which one this is. */
    h += '<p class="fp-empty">' + fpEsc(sentence) + '</p>';
    return h + '</section>';
  }

  h += '<div class="fh-tablewrap"><table class="fh-table">' +
    '<thead><tr><th scope="col">Company</th><th scope="col">Round</th>' +
    '<th scope="col">Date</th><th scope="col">Role</th><th scope="col">Source</th></tr></thead><tbody>' +
    inv.map(function (p) {
      const rec = (typeof fundAttributionFor === 'function') ? fundAttributionFor(p) : null;
      return '<tr><td class="fh-name">' + fpEsc(p.company) + '</td>' +
        '<td>' + fpEsc(p.round || '-') + '</td>' +
        '<td class="fh-num">' + fpEsc(p.announcedDate || '-') + '</td>' +
        '<td>' + fpEsc(p.role || '-') + '</td>' +
        '<td class="fh-src">' + (rec && rec.sourceUrl
          ? '<a href="' + fpEsc(rec.sourceUrl) + '" target="_blank" rel="noopener nofollow">Source</a>'
          : '<span class="fh-null">-</span>') + '</td></tr>';
    }).join('') + '</tbody></table></div>' +
    '<p class="fh-coverage">' + fpEsc(sentence) + '</p>';
  return h + '</section>';
}

function fpObserved(fund) {
  const ob = (typeof fundObservedBehavior === 'function')
    ? fundObservedBehavior(fund.fundId) : null;
  if (!ob) return '';

  let h = '<section class="fp-sec"><h2 class="fp-h">Observed fund behaviour</h2>';
  if (!ob.available) {
    h += '<p class="fp-empty">Not enough attributed investments to describe what this fund ' +
      'invests in. Power Board needs at least ' + ob.needed + ' investments sourced to this ' +
      'specific fund and currently has ' + ob.tracked + '. Patterns from fewer than that ' +
      'would be noise.</p>';
    return h + '</section>';
  }

  const line = function (rows, label) {
    if (!rows || !rows.length) return '';
    return '<div class="fp-obs"><span class="fp-obs-label">' + label + '</span>' +
      '<ul class="fp-obs-list">' + rows.slice(0, 6).map(function (r) {
        return '<li>' + fpEsc(r.label) +
          '<span class="fp-obs-n">' + r.n + ' of ' + r.of + '</span></li>';
      }).join('') + '</ul></div>';
  };

  h += '<p class="fp-obs-intro">Computed only from the ' + ob.tracked +
    ' investments sourced to this fund, never from the firm\'s wider deal history.</p>' +
    line(ob.sectors, 'Sector') + line(ob.stages, 'Stage');
  return h + '</section>';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    fundRouteFor: fundRouteFor, fundIdFromRoute: fundIdFromRoute,
    fpInvestments: fpInvestments, fpObserved: fpObserved, fpHost: fpHost
  };
}
