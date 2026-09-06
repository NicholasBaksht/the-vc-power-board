/* ============================================================
   POWER-ANALYTICS.JS
   Phase 6B. What Power Board's researched universe actually shows -
   and, just as importantly, what it cannot show.

   THE CHART THIS PAGE DELIBERATELY DOES NOT HAVE

   Every analytics product opens with deal activity over time. This
   one does not, and the reason is in the data:

     tracked deals dated 2025:   15
     tracked deals dated 2026:  558

   That is not the market growing 37x. It is Power Board's deal
   research starting in earnest in 2026. A line chart of those two
   points would be read as a market finding by every founder who saw
   it, and it would be false. The same applies to "active investors
   by period": 24 firms have a tracked 2026 deal, out of 441 firms
   researched. That is a statement about research coverage wearing
   the clothes of a statement about behaviour.

   So this page shows DISTRIBUTIONS, which the data supports, and
   omits TRENDS, which it does not - with one exception. Fund
   vintages span decades and a vintage year is a real-world date
   rather than a capture date, so funds by vintage is a genuine time
   series and is the only one here.

   EVERY NUMBER CARRIES ITS DENOMINATOR AND ITS UNIVERSE

   Definitions come from metrics.js. This file renders; it does not
   decide what anything means. Where a measure lacks coverage, the
   section says so in words instead of drawing a thin chart.
   ============================================================ */

const PAN_SECTIONS = [
  { key: 'sector',    label: 'Sector' },
  { key: 'stage',     label: 'Stage' },
  { key: 'geography', label: 'Geography' },
  { key: 'funds',     label: 'Funds' },
  { key: 'outcomes',  label: 'Outcomes' }
];

let panState = { section: 'sector' };

function panEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ------------------------------------------------------------
   BARS

   A bar chart in HTML, because a bar is a length and a length is a
   div. No library, no canvas, no animation. The number is always
   printed beside the bar so the chart never has to be measured by
   eye, and every row is a table row so a screen reader gets the
   values rather than a picture.
   ------------------------------------------------------------ */

function panBars(dist, opts) {
  opts = opts || {};
  if (!dist) return '';
  if (!dist.sufficient) {
    return '<p class="pan-empty">Not enough classified records to show this. ' +
      panEsc(dist.reason || '') + '.</p>';
  }
  const rows = dist.entries.slice(0, opts.limit || 12);
  const max = rows.length ? rows[0].n : 1;

  return '<table class="pan-bars"><caption class="pl-sr">' +
      panEsc(opts.caption || 'Distribution') + '</caption>' +
    '<thead><tr><th scope="col">' + panEsc(opts.dimension || 'Category') + '</th>' +
    '<th scope="col">Share of classified</th><th scope="col">Count</th></tr></thead><tbody>' +
    rows.map(function (e) {
      const w = Math.max(1, Math.round((e.n / max) * 100));
      return '<tr>' +
        '<th scope="row" class="pan-bar-label">' + panEsc(e.label) + '</th>' +
        '<td class="pan-bar-cell"><span class="pan-bar" style="width:' + w + '%"></span></td>' +
        /* n of d, never a bare percentage. The percentage is shown
           only because metShare already confirmed the denominator
           clears this metric's floor. */
        '<td class="pan-bar-n">' + e.n + ' of ' + e.of +
          (e.pct != null ? '<span class="pan-pct">' + e.pct + '%</span>' : '') +
        '</td></tr>';
    }).join('') + '</tbody></table>' +
    (dist.coverage ? '<p class="pan-coverage">' + panEsc(dist.coverage) + '</p>' : '');
}

/* ------------------------------------------------------------
   DISTRIBUTIONS THIS DATA SUPPORTS
   ------------------------------------------------------------ */

function panDealSectors() {
  if (typeof FIRM_DEALS === 'undefined' || typeof metDistribution !== 'function') return null;
  return metDistribution('partner_observed_sector_share', FIRM_DEALS,
    function (d) { return d.sector || null; });
}

function panDealStages() {
  if (typeof FIRM_DEALS === 'undefined') return null;
  return metDistribution('partner_observed_stage_share', FIRM_DEALS,
    function (d) { return d.round || null; });
}

function panCompanyGeography() {
  if (typeof COMPANIES === 'undefined') return null;
  const rows = Object.keys(COMPANIES).map(function (k) { return COMPANIES[k]; });
  /* Company HQ only. A firm's headquarters says nothing about where
     it invests, so firm HQ is never used to place an investment. */
  return metDistribution('partner_observed_sector_share', rows,
    function (c) { return c.hqCountry || null; });
}

function panFirmHq() {
  if (typeof firms === 'undefined') return null;
  return metDistribution('partner_observed_sector_share', firms,
    function (f) {
      if (!f.hq) return null;
      const parts = String(f.hq).split(',');
      return parts[parts.length - 1].trim() || null;
    });
}

/* ------------------------------------------------------------
   RENDER
   ------------------------------------------------------------ */

async function renderPowerAnalytics() {
  const host = document.getElementById('analyticsView');
  if (!host) return;

  const funds = (typeof fundBuild === 'function') ? fundBuild().length : 0;
  const outcomes = (typeof ocBuild === 'function') ? ocBuild().length : 0;
  const deals = (typeof FIRM_DEALS !== 'undefined') ? FIRM_DEALS.length : 0;

  let h = '<div class="ds-wrap pan-wrap">' +
    '<div class="ds-kicker">Power Analytics</div>' +
    '<h1 class="ds-h1">What the research shows.</h1>' +
    '<p class="ds-sub">Distributions across the investors, companies, funds and financings ' +
    'Power Board has researched. Every figure below counts only classified records and ' +
    'states its denominator, because a share of an unknown is not a share of anything.</p>' +

    /* The scope note is not a footnote. It is the first thing a
       reader needs in order to interpret anything below it. */
    '<div class="pan-scope">' +
      '<strong>This is Power Board\'s researched universe, not the whole market.</strong> ' +
      (typeof firms !== 'undefined' ? firms.length : 0) + ' firms, ' +
      (typeof partnerProfiles !== 'undefined' ? Object.keys(partnerProfiles).length : 0) + ' partners, ' +
      (typeof COMPANIES !== 'undefined' ? Object.keys(COMPANIES).length : 0) + ' companies, ' +
      funds + ' funds and ' + deals + ' tracked financings. ' +
      'Nothing here is a market share, and no figure implies coverage of investors ' +
      'or rounds Power Board has not researched.' +
    '</div>';

  h += '<div class="pan-tabs" role="tablist">' + PAN_SECTIONS.map(function (s) {
    return '<button type="button" role="tab" class="pan-tab' +
      (panState.section === s.key ? ' is-on' : '') + '" ' +
      'aria-selected="' + (panState.section === s.key ? 'true' : 'false') + '" ' +
      'data-pan-tab="' + s.key + '">' + panEsc(s.label) + '</button>';
  }).join('') + '</div>';

  h += '<div class="pan-body">' + panSection(panState.section) + '</div></div>';

  host.innerHTML = h;
  panBind(host);
  if (typeof pbTrack === 'function') pbTrack('analytics_opened');
}

function panSection(key) {
  if (key === 'sector') {
    return panHead('Sector', 'Which sectors the tracked financings and researched partners sit in.') +
      panBlock('Tracked financings by sector', panDealSectors(), 'Sector') +
      panBlock('Partner observed sectors', panAllPartnerSectors(), 'Sector');
  }
  if (key === 'stage') {
    return panHead('Stage', 'Which rounds the tracked financings represent.') +
      panBlock('Tracked financings by round', panDealStages(), 'Round') +
      /* Partner stage coverage is 654 of 5,754 rows. That is real but
         thin, and saying so is more useful than drawing it. */
      '<p class="pan-note">Partner stage distribution is not shown here. Only 654 of 5,754 ' +
      'partner-attributed investments carry a classified stage, and a distribution built on ' +
      'that would describe the classified minority rather than partner behaviour. Individual ' +
      'partner pages show stage where their own coverage supports it.</p>';
  }
  if (key === 'geography') {
    return panHead('Geography', 'Where researched companies and firms are based.') +
      panBlock('Company headquarters', panCompanyGeography(), 'Country') +
      panBlock('Firm headquarters', panFirmHq(), 'Location') +
      '<p class="pan-note">These are headquarters locations. Power Board does not infer where ' +
      'an investment was made from where an investor is based, so there is no ' +
      '"investment by geography" figure here.</p>';
  }
  if (key === 'funds') {
    return panHead('Funds', 'The vehicles Power Board has researched, by vintage and stated strategy.') +
      panBlock('Funds by vintage', (typeof metFundVintages === 'function') ? metFundVintages() : null, 'Vintage', 20) +
      panBlock('Funds by stated strategy',
        (typeof metFundStrategies === 'function') ? metFundStrategies() : null, 'Strategy') +
      /* The one aggregate this page refuses outright. */
      '<p class="pan-note">Fund sizes are not summed. Adding tracked fund sizes together would ' +
      'read as capital available to deploy, which it is not: the set is incomplete, the figures ' +
      'mix final closes with announced targets, and money raised years ago is not money waiting. ' +
      'Power Board does not estimate dry powder.</p>';
  }
  if (key === 'outcomes') {
    return panHead('Outcomes', 'What happened to researched companies.') +
      panBlock('Tracked outcomes by type',
        (typeof metOutcomeTypes === 'function') ? metOutcomeTypes() : null, 'Outcome') +
      panBlock('Tracked outcomes by year',
        (typeof metOutcomesByYear === 'function') ? metOutcomesByYear() : null, 'Year', 20) +
      '<p class="pan-note pan-note-strong">These are company outcomes and nothing more. ' +
      'An acquisition is not a win, a closure is not a loss, and none of these counts says ' +
      'anything about what any investor paid or received. Power Board holds no return data.</p>' +
      '<p class="pan-note">Most tracked outcomes have no reliable year, mainly because a public ' +
      'listing rarely carries a listing date in the sources used. Those are excluded from the ' +
      'year chart rather than assigned one.</p>';
  }
  return '';
}

function panHead(title, sub) {
  return '<h2 class="pan-h">' + panEsc(title) + '</h2>' +
    '<p class="pan-sub">' + panEsc(sub) + '</p>';
}

function panBlock(title, dist, dimension, limit) {
  return '<section class="pan-block">' +
    '<h3 class="pan-block-h">' + panEsc(title) + '</h3>' +
    panBars(dist, { dimension: dimension, caption: title, limit: limit }) +
  '</section>';
}

/* All partner-attributed rows pooled, so the sector view describes
   the researched partner universe rather than one person. */
function panAllPartnerSectors() {
  if (typeof partnerProfiles === 'undefined' || typeof pbehCompute !== 'function') return null;
  const rows = [];
  Object.keys(partnerProfiles).forEach(function (k) {
    const c = pbehCompute(k);
    if (c && c.careerRows) c.careerRows.forEach(function (r) { rows.push(r); });
  });
  return metDistribution('partner_observed_sector_share', rows,
    function (r) { return r.sector || null; });
}

function panBind(host) {
  if (host.dataset.panBound) return;
  host.dataset.panBound = '1';
  host.addEventListener('click', function (e) {
    const t = e.target.closest('[data-pan-tab]');
    if (!t) return;
    panState.section = t.getAttribute('data-pan-tab');
    if (typeof pbTrack === 'function') pbTrack('analytics_filter_changed');
    renderPowerAnalytics();
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    panBars: panBars, panSection: panSection, panDealSectors: panDealSectors,
    panDealStages: panDealStages, panCompanyGeography: panCompanyGeography,
    panAllPartnerSectors: panAllPartnerSectors, PAN_SECTIONS: PAN_SECTIONS
  };
}
