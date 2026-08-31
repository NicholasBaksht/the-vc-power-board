/* ============================================================
   HOMEPAGE.JS
   The Power Board homepage, rendered from the live dataset.

   WHY THIS IS JAVASCRIPT AND NOT MARKUP IN index.html:
   every number on this page is a claim about the database, and a
   number typed into HTML goes stale the moment a firm or a partner
   is added. The previous homepage had already drifted - its hero
   badge read 308 firms against a dataset of 293. Nothing here is
   typed; the firm count, the partner count, the country count, the
   match score and the observed-behaviour bars are all computed at
   render time from the same functions the real product pages use.

   THE EXAMPLE SEARCH IS A REAL SEARCH.
   The preview does not show a mocked-up result. It runs the actual
   Power Match scorer against a stated example query - enterprise
   software, Series B - and prints whatever that returns. The query
   is shown on the card so the score is falsifiable: a reader can
   run it themselves and get the same number. This is why no "94%
   fit" appears anywhere. The engine returns 79 for this query, so
   the page says 79.

   Depends on: data-firms.js, data-partners*.js, utilities.js,
   find-investors.js (computeFinderMatches, getMatchQualityLabel),
   partner-behavior.js (pbehCompute). Every one is guarded - if a
   file fails to load, its block is omitted rather than crashing
   the homepage.
   ============================================================ */

function pbhEsc(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* The firm and partner the preview is built around. Both are real
   records; changing these two slugs re-points the whole preview
   without touching any copy, and if either slug ever stops
   resolving the block omits itself rather than inventing a stand-in. */
const PBH_EXAMPLE = {
  firmSlug: 'bain-capital-ventures',
  partnerSlug: 'ajay-agarwal',
  query: { sectors: ['Enterprise Software'], stages: ['Series B'], focus: 'enterprise' }
};

/* ---------- real numbers ---------- */

function pbhStats() {
  if (typeof firms === 'undefined') return null;
  const out = [{ n: firms.length, l: 'Firms tracked' }];

  if (typeof partnerProfiles !== 'undefined') {
    out.push({ n: Object.keys(partnerProfiles).length, l: 'Partners profiled' });
  }
  if (typeof getCountryFromHQ === 'function') {
    const c = new Set(firms.map(function (f) { return getCountryFromHQ(f.hq); }).filter(Boolean));
    out.push({ n: c.size, l: 'Countries' });
  }
  /* Angels are only counted once the section actually holds any, so
     the strip never carries a zero to look symmetrical. */
  if (typeof CAPITAL_SOURCES !== 'undefined') {
    const n = Object.keys(CAPITAL_SOURCES).length;
    if (n > 0) out.push({ n: n, l: 'Angels &amp; capital sources' });
  }
  return out;
}

/* Runs the live scorer against the example query. The finder holds
   its inputs in module-level state that the real questionnaire also
   writes, so every value is saved and restored - otherwise loading
   the homepage would silently pre-fill a founder's Power Match. */
function pbhMatchExample() {
  if (typeof computeFinderMatches !== 'function' || typeof firms === 'undefined') return null;

  const saved = {
    sectors: typeof finderSectors !== 'undefined' ? finderSectors : null,
    stages: typeof finderStages !== 'undefined' ? finderStages : null,
    raise: typeof finderRaise !== 'undefined' ? finderRaise : null,
    region: typeof finderRegion !== 'undefined' ? finderRegion : null,
    focus: typeof finderFocus !== 'undefined' ? finderFocus : null,
    ai: typeof finderAI !== 'undefined' ? finderAI : null
  };

  let result = null;
  try {
    finderSectors = new Set(PBH_EXAMPLE.query.sectors);
    finderStages = new Set(PBH_EXAMPLE.query.stages);
    finderRaise = 'any';
    finderRegion = 'any';
    finderFocus = PBH_EXAMPLE.query.focus;
    finderAI = false;

    const all = computeFinderMatches();
    const hit = all.filter(function (m) { return m.firm.slug === PBH_EXAMPLE.firmSlug; })[0];
    if (hit) {
      result = {
        firm: hit.firm,
        score: hit.score,
        label: typeof getMatchQualityLabel === 'function'
          ? getMatchQualityLabel(hit.score) : null,
        reasons: (hit.reasons || []).filter(function (r) {
          return r.detail && r.detail !== 'Not specified';
        })
      };
    }
  } catch (err) {
    result = null;
  } finally {
    if (saved.sectors) finderSectors = saved.sectors;
    if (saved.stages) finderStages = saved.stages;
    if (saved.raise !== null) finderRaise = saved.raise;
    if (saved.region !== null) finderRegion = saved.region;
    if (saved.focus !== null) finderFocus = saved.focus;
    if (saved.ai !== null) finderAI = saved.ai;
  }
  return result;
}

function pbhPartnerExample() {
  if (typeof pbehCompute !== 'function' || typeof partnerProfiles === 'undefined') return null;
  const p = partnerProfiles[PBH_EXAMPLE.partnerSlug];
  if (!p) return null;
  let b = null;
  try { b = pbehCompute(PBH_EXAMPLE.partnerSlug); } catch (err) { return null; }
  if (!b) return null;
  return {
    slug: PBH_EXAMPLE.partnerSlug,
    name: p.name,
    title: p.title,
    total: b.n,
    sector: (b.sectorDist && b.sectorDist.length) ? b.sectorDist : null,
    stage: (b.stageDist && b.stageDist.length) ? b.stageDist : null,
    sectorN: (b.rows || []).filter(function (r) { return r.sector; }).length,
    stageN: (b.rows || []).filter(function (r) { return r.stage; }).length
  };
}

/* ---------- small pieces ---------- */

function pbhBar(label, pct, n) {
  return '<div class="pbh-bar">' +
    '<span class="pbh-bar-l">' + pbhEsc(label) + '</span>' +
    '<span class="pbh-bar-t"><span class="pbh-bar-f" style="width:' + pct + '%"></span></span>' +
    '<span class="pbh-bar-p">' + pct + '%</span>' +
    '</div>';
}

/* Four line icons, drawn rather than imported: a crosshair, a person,
   a bar chart and a shield. Deliberately literal - each one names the
   step it sits beside instead of decorating it. */
const PBH_ICONS = {
  target: '<circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="2.5"/><line x1="12" y1="1.5" x2="12" y2="4.5"/><line x1="12" y1="19.5" x2="12" y2="22.5"/><line x1="1.5" y1="12" x2="4.5" y2="12"/><line x1="19.5" y1="12" x2="22.5" y2="12"/>',
  person: '<circle cx="12" cy="8" r="3.75"/><path d="M4.5 20.5c0-3.9 3.4-6.5 7.5-6.5s7.5 2.6 7.5 6.5"/>',
  bars: '<line x1="3.5" y1="20.5" x2="20.5" y2="20.5"/><rect x="6" y="12" width="3.5" height="6"/><rect x="12" y="7.5" width="3.5" height="10.5"/><rect x="17" y="14" width="3.5" height="4"/>',
  shield: '<path d="M12 2.5 4.5 5.75v5.5c0 4.6 3.1 8.9 7.5 10.25 4.4-1.35 7.5-5.65 7.5-10.25v-5.5Z"/><line x1="12" y1="8.5" x2="12" y2="13"/><circle cx="12" cy="16" r="0.9"/>'
};

function pbhIcon(k) {
  return '<svg class="pbh-ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    PBH_ICONS[k] + '</svg>';
}

/* ---------- sections ---------- */

function pbhHero() {
  const m = pbhMatchExample();
  const p = pbhPartnerExample();

  let h = '<section class="pbh-hero">' +
    '<div class="pbh-hero-l">' +
      '<div class="pbh-eyebrow">Data-backed &middot; Source-verified &middot; Founder-focused</div>' +
      '<h1 class="pbh-h1">Find the right VC firm.<br>Find the right partner.</h1>' +
      '<p class="pbh-sub">Power Board analyzes firms and individual investors using observed ' +
      'investment behavior, stage, sector, capabilities, and conflicts&mdash;so you can raise smarter.</p>' +
      '<div class="pbh-ctas">' +
        '<a href="#find-investors" class="pbh-btn pbh-btn-p" data-pbh-cta="power-match">Find My Investors</a>' +
        '<a href="#people" class="pbh-btn pbh-btn-s" data-pbh-cta="partner-intel">Explore Partner Intelligence</a>' +
      '</div>' +
      pbhStatsLine() +
    '</div>';

  h += '<div class="pbh-hero-r">';

  if (m) {
    /* The query is printed on the card so the score below it can be
       checked. A fit number with no visible question behind it is
       decoration; this one is a result. */
    h += '<div class="pbh-panel">' +
      '<div class="pbh-panel-bar">' +
        '<span class="pbh-panel-t">Your Power Match</span>' +
        '<span class="pbh-panel-q">Example search &middot; Enterprise Software &middot; Series B</span>' +
      '</div>' +
      '<div class="pbh-firm">' +
        '<div class="pbh-firm-top">' +
          '<div>' +
            '<a class="pbh-firm-n" href="#' + pbhEsc(m.firm.slug) + '">' + pbhEsc(m.firm.name) + '</a>' +
            (m.label ? '<div class="pbh-firm-q">' + pbhEsc(m.label) + '</div>' : '') +
          '</div>' +
          '<div class="pbh-score"><span class="pbh-score-n">' + m.score + '</span>' +
            '<span class="pbh-score-l">Firm fit</span></div>' +
        '</div>' +
        '<dl class="pbh-kv">' +
          (m.firm.hq ? '<div><dt>Headquarters</dt><dd>' + pbhEsc(m.firm.hq) + '</dd></div>' : '') +
          ((m.firm.sectors || []).length
            ? '<div><dt>Top sector</dt><dd>' + pbhEsc(m.firm.sectors[0]) + '</dd></div>' : '') +
          (m.firm.founded ? '<div><dt>Founded</dt><dd>' + pbhEsc(m.firm.founded) + '</dd></div>' : '') +
          (m.firm.aum ? '<div><dt>Assets</dt><dd>' + pbhEsc(m.firm.aum) + '</dd></div>' : '') +
        '</dl>' +
      '</div>';

    if (p) {
      const topSec = p.sector ? p.sector[0] : null;
      const topStg = p.stage ? p.stage[0] : null;
      h += '<div class="pbh-partner">' +
        '<div class="pbh-partner-h">Best-fit partner</div>' +
        '<div class="pbh-partner-top">' +
          '<a class="pbh-partner-n" href="#partner/' + pbhEsc(p.slug) + '">' + pbhEsc(p.name) + '</a>' +
          (p.title ? '<span class="pbh-partner-r">' + pbhEsc(p.title) + '</span>' : '') +
        '</div>' +
        '<div class="pbh-partner-facts">' +
          (topSec ? '<div><span>Observed sector</span><strong>' + pbhEsc(topSec.label) +
                    ' &middot; ' + topSec.pct + '%</strong></div>' : '') +
          (topStg ? '<div><span>Observed stage</span><strong>' + pbhEsc(topStg.label) +
                    ' &middot; ' + topStg.pct + '%</strong></div>' : '') +
          '<div><span>Attributed investments</span><strong>' + p.total + '</strong></div>' +
        '</div>' +
        '<a class="pbh-partner-link" href="#partner/' + pbhEsc(p.slug) + '">View Partner Intelligence &rarr;</a>' +
        '</div>';
    }
    h += '</div>';
  }

  h += '</div></section>';
  return h;
}

/* Stated focus and observed behaviour side by side. The whole point
   of the section is that the two columns can disagree, so they are
   never merged and the right-hand side always carries its denominator. */
function pbhBehavior() {
  const p = pbhPartnerExample();
  if (!p || (!p.sector && !p.stage)) return '';
  const firm = (typeof firms !== 'undefined')
    ? firms.filter(function (f) { return f.slug === PBH_EXAMPLE.firmSlug; })[0] : null;
  const stated = firm && (firm.sectors || []).length ? firm.sectors : null;

  let h = '<section class="pbh-sec pbh-beh">' +
    '<div class="pbh-sec-h">' +
      '<h2 class="pbh-h2">Stated focus is not observed behavior.</h2>' +
      '<p class="pbh-sec-p">What a firm says it invests in and what its partners have actually ' +
      'been sourced doing are different claims, so Power Board never merges them.</p>' +
    '</div>' +
    '<div class="pbh-beh-grid">';

  h += '<div class="pbh-col">' +
    '<div class="pbh-col-h">Stated focus</div>' +
    '<div class="pbh-col-s">' + pbhEsc(firm ? firm.name : '') + ', self-described</div>';
  if (stated) {
    h += '<ul class="pbh-stated">' + stated.map(function (s) {
      return '<li>' + pbhEsc(s) + '</li>';
    }).join('') + '</ul>';
  }
  h += '<div class="pbh-note">Taken from the firm&rsquo;s own material. Not derived from any deal.</div>' +
    '</div>';

  h += '<div class="pbh-col">' +
    '<div class="pbh-col-h">Observed behavior</div>' +
    '<div class="pbh-col-s">' + pbhEsc(p.name) + ', from sourced investments</div>';
  if (p.sector) {
    h += '<div class="pbh-bar-set">' +
      p.sector.slice(0, 3).map(function (d) { return pbhBar(d.label, d.pct, d.n); }).join('') +
      '<div class="pbh-basis">Based on ' + p.sectorN + ' of ' + p.total +
      ' attributable investments with a known sector</div></div>';
  }
  if (p.stage) {
    h += '<div class="pbh-bar-set">' +
      p.stage.slice(0, 3).map(function (d) { return pbhBar(d.label, d.pct, d.n); }).join('') +
      '<div class="pbh-basis">Based on ' + p.stageN + ' of ' + p.total +
      ' attributable investments with a known round</div></div>';
  }
  h += '</div></div></section>';
  return h;
}

/* The statistics used to be their own full-width band. They are one
   line of context, not a section, so they now sit under the hero CTAs
   where they qualify the claim above them instead of interrupting the
   page with a fourth horizontal rule. */
function pbhStatsLine() {
  const s = pbhStats();
  if (!s || !s.length) return '';
  return '<div class="pbh-stats">' + s.map(function (x) {
    return '<span class="pbh-stat"><strong>' +
      String(x.n).replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
      '</strong> ' + x.l.toLowerCase() + '</span>';
  }).join('') + '</div>';
}

function pbhHow() {
  const steps = [
    ['target', 'Find the firm',
     'Power Match identifies firms whose observed behavior aligns with your startup.', '#find-investors'],
    ['person', 'Find the person',
     'Best-Fit Partner identifies the individuals inside those firms most relevant to your company.', '#people'],
    ['bars', 'Understand why',
     'Observed Investment Behavior and source-backed research explain the match.', '#methodologyAnchor'],
    ['shield', 'Avoid mistakes',
     'Conflict Check surfaces relevant portfolio and relationship risks.', '#conflict-check']
  ];
  return '<section class="pbh-sec pbh-how">' +
    '<div class="pbh-sec-h"><h2 class="pbh-h2">How Power Board works</h2></div>' +
    '<div class="pbh-how-grid">' + steps.map(function (s, i) {
      return '<a class="pbh-step" href="' + s[3] + '">' +
        '<div class="pbh-step-top">' + pbhIcon(s[0]) +
          '<span class="pbh-step-n">' + (i + 1) + '</span></div>' +
        '<div class="pbh-step-t">' + s[1] + '</div>' +
        '<p class="pbh-step-d">' + s[2] + '</p>' +
        '</a>';
    }).join('') + '</div></section>';
}

function pbhFinalCta() {
  return '<section class="pbh-final">' +
    '<h2 class="pbh-h2">Ready to find your best-fit investors?</h2>' +
    '<p class="pbh-sec-p">Start your search and connect with the right investors inside the right firms.</p>' +
    '<div class="pbh-ctas">' +
      '<a href="#find-investors" class="pbh-btn pbh-btn-p" data-pbh-cta="power-match-final">Find My Investors</a>' +
    '</div></section>';
}

/* ---------- entry point ---------- */

function renderHomepage() {
  const host = document.getElementById('homeIntro');
  if (!host) return;
  host.innerHTML =
    '<div class="pbh">' +
      pbhHero() +
      pbhBehavior() +
      pbhHow() +
      pbhFinalCta() +
    '</div>';

  /* Reuses the existing funnel event rather than inventing one. The
     event-name CHECK constraint in Postgres rejects unknown names, so
     a new event here would be dropped silently at the database. */
  if (typeof pbTrack === 'function') {
    host.querySelectorAll('[data-pbh-cta]').forEach(function (a) {
      a.addEventListener('click', function () {
        pbTrack('power_match_cta_clicked', { props: { source: a.dataset.pbhCta } });
      });
    });
  }
}
