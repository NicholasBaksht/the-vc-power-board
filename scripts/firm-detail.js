/* ============================================================
   FIRM-DETAIL.JS
   Renders a single firm's full detail page.
   ============================================================ */

/* The badge and the lineage line both read data-orgs.js. Neither the
   parent company nor the word "Corporate VC" is written here - this
   file only decides where they sit on the page. Guarded with typeof so
   the profile still renders if data-orgs.js ever fails to load. */
function renderOrgBadge(firm) {
  if (typeof orgBadge !== 'function') return '';
  const b = orgBadge(firm);
  if (!b) return '';
  return '<div class="org-badge org-badge-' + b.kind + '">' +
           '<span class="org-badge-label">' + b.label + '</span>' +
           '<span class="org-badge-sep">\u00B7</span>' +
           '<span class="org-badge-parent">Parent: ' + b.parent + '</span>' +
         '</div>';
}

/* Firms with a corporate ORIGIN that are independent today. Shown as
   history, never as a badge - Sapphire left SAP in 2011 and labelling
   it SAP's arm now would simply be wrong. */
function renderOrgLineage(firm) {
  if (typeof orgLineage !== 'function') return '';
  const l = orgLineage(firm);
  if (!l) return '';
  const yr = l.spunOutYear ? ' (' + l.spunOutYear + ')' : '';
  return '<div class="org-lineage">' +
           '<span class="org-lineage-label">Former parent</span> ' +
           l.formerParent + yr +
           (l.note ? '<span class="org-lineage-note">' + l.note + '</span>' : '') +
         '</div>';
}

/* ============================================================
   BOARD MENU
   ------------------------------------------------------------
   The Insights, Explore and Data dropdowns used to live in the
   global header. They now open from the top right of a firm
   profile instead, grouped under the same three headings.

   Built here rather than in index.html because the profile is
   rendered by JavaScript, and a static element would sit outside
   the card it is positioned against.
   ============================================================ */
const FX_GROUPS = [
  { title: 'Insights', items: [
    ['#analytics', 'Power Score & Analytics'],
    ['#market-signals', 'Market Signals'],
    ['#feed', 'Intelligence Feed'],
    ['#news', 'News & Updates'],
    ['#reports', 'Reports']
  ]},
  { title: 'Explore', items: [
    ['#discover', 'Discovery Engine'],
    ['#relationship-graph', 'Relationship Graph'],
    ['#family-tree', 'Family Tree'],
    ['#compare', 'VC DNA'],
    ['#historical-snapshot', 'Timeline'],
    ['#ecosystem-graph', 'Ecosystem Graph'],
    ['#world-map', 'World Map']
  ]},
  { title: 'Data', items: [
    ['#analytics', 'Companies'],
    ['#people', 'People'],
    ['#portfolio', 'Portfolio'],
    ['#find-investors', 'Power Match'],
    ['#shortlist', 'Shortlist'],
    ['companies/', 'By Category'],
    ['locations/', 'By Location'],
    ['stages/', 'By Stage']
  ]}
];

function renderBoardMenu() {
  const groups = FX_GROUPS.map(function (g) {
    return '<div class="fx-group">' +
      '<div class="fx-h">' + g.title + '</div>' +
      g.items.map(function (it) {
        return '<a class="fx-item" href="' + it[0] + '">' + it[1] + '</a>';
      }).join('') +
      '</div>';
  }).join('');

  return '<div class="fx">' +
    '<button class="fx-trigger" type="button" aria-expanded="false" aria-haspopup="true">' +
      'Explore the board <span class="fx-caret" aria-hidden="true">&#9662;</span>' +
    '</button>' +
    '<div class="fx-panel" hidden>' + groups + '</div>' +
    '</div>';
}

/* One document-level listener, bound once. The profile rewrites its
   innerHTML for every firm, so a listener attached to the button
   itself would be discarded on the next navigation. */
let fxBound = false;
function bindBoardMenu() {
  if (fxBound) return;
  fxBound = true;
  document.addEventListener('click', function (ev) {
    const panel = document.querySelector('.fx-panel');
    if (!panel) return;
    const trigger = ev.target.closest ? ev.target.closest('.fx-trigger') : null;
    if (trigger) {
      const open = !panel.hidden;
      panel.hidden = open;
      trigger.setAttribute('aria-expanded', String(!open));
      return;
    }
    if (!panel.hidden) {
      panel.hidden = true;
      const t = document.querySelector('.fx-trigger');
      if (t) t.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Escape') return;
    const panel = document.querySelector('.fx-panel');
    if (panel && !panel.hidden) {
      panel.hidden = true;
      const t = document.querySelector('.fx-trigger');
      if (t) { t.setAttribute('aria-expanded', 'false'); t.focus(); }
    }
  });
}

function renderDetail(firm) {
  const totalHoldings = firm.holdings.length;
  const pricedHoldings = firm.holdings.filter(h => h.price !== null).length;

const holdingsHTML = firm.holdings.map(h => {
    const val = h.price !== null ? h.price.toFixed(2) : '';
    const placeholderCls = h.price === null ? 'placeholder-empty' : '';
    return `
      <div class="holding-row">
        <a href="#company/${slugifyCompany(h.name)}" class="holding-name holding-name-link">${h.name}</a>
        <div class="holding-ticker">${h.ticker}</div>
        <div class="price-input-wrap">
          <span class="dollar">$</span>
          <input class="price-input ${placeholderCls}" type="text" inputmode="decimal"
                 value="${val}" placeholder="type price"
                 data-ticker="${h.ticker}">
        </div>
        <div class="price-hint">per share</div>
        ${buildReturnBadge(h)}
        <a href="https://finance.yahoo.com/quote/${h.ticker}" target="_blank" rel="noopener noreferrer" class="source-link-small">Verify Price ↗</a>
      </div>`;
  }).join('');

  const leadershipHTML = firm.leadership ? `
    <div class="detail-subhead">Key Partners &amp; Leadership</div>
    <div class="leadership-grid">
      ${firm.leadership.map(l => `
        <div class="leader-card ${l.profileSlug ? 'has-profile' : ''}" ${l.profileSlug ? `onclick="window.location.hash='partner/${l.profileSlug}'"` : ''}>
          <div class="leader-name">${l.name}</div>
          <div class="leader-role">${l.role}</div>
          ${l.profileSlug ? '<div class="leader-view-profile">View Full Profile →</div>' : ''}
        </div>
      `).join('')}
    </div>
  ` : '';

  const timelineHTML = firm.timeline ? `
    <div class="detail-subhead">Firm Timeline</div>
    <div class="timeline">
      ${firm.timeline.map(t => `
        <div class="timeline-item">
          <div class="timeline-year">${t.year}</div>
          <div class="timeline-event">${t.event}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  bindBoardMenu();
  /* Both cards render unconditionally on a profile, so viewing the
     profile is viewing them. Fired here rather than from inside each
     renderer, which is also called from Compare. */
  if (typeof pbTrack === 'function') {
    pbTrack('power_personality_viewed', { firmSlug: firm.slug });
    pbTrack('power_capabilities_viewed', { firmSlug: firm.slug });
  }
  document.getElementById('detailView').innerHTML = `
    <a href="#" class="detail-back" id="backToList">← Back to all firms</a>
    <div class="detail-card">
      ${renderBoardMenu()}
      <div class="detail-rank">NO. ${String(firm.rank).padStart(2, '0')} BY AUM</div>
<div class="detail-name">${firm.name}</div>
      ${typeof renderFollowButton === 'function' ? renderFollowButton(firm) : ''}
      ${renderOrgBadge(firm)}
      ${typeof renderOutcomeControl === 'function' ? renderOutcomeControl(firm.slug, 'firm_profile') : ''}
      ${typeof renderFirmPersonalityCard === 'function' ? renderFirmPersonalityCard(firm) : ''}
      ${typeof renderFirmCapabilities === 'function' ? renderFirmCapabilities(firm) : ''}
          <div class="detail-meta">
        ${[
          firm.website ? `<a href="${firm.website}" target="_blank" rel="noopener noreferrer" class="firm-link">${firm.website.replace('https://', '')} ↗</a>` : '',
          firm.seoPage ? `<a href="${firm.seoPage}" class="firm-link">Standalone Profile Page ↗</a>` : '',
          TEAM_PAGES[firm.slug] ? `<a href="${TEAM_PAGES[firm.slug]}" target="_blank" rel="noopener noreferrer" class="firm-link">Team Page ↗</a>` : '',
          `<a href="#historical-snapshot/${firm.slug}" class="firm-link">View Historical Timeline →</a>`
        ].filter(Boolean).join(' · ')}
      </div>
      <div class="detail-stats">
        <div class="detail-stat">
          <div class="num">${firm.aum || ' - '}</div>
          <div class="lbl">Assets Managed</div>
          ${typeof rtStatMeta === 'function' ? rtStatMeta(firm.slug, 'aum') : ''}
        </div>
        <div class="detail-stat">
          <div class="num">${firm.founded || ' - '}</div>
          <div class="lbl">Founded</div>
          ${typeof rtStatMeta === 'function' ? rtStatMeta(firm.slug, 'founded') : ''}
        </div>
        <div class="detail-stat">
          <div class="num">${firm.hq || ' - '}</div>
          <div class="lbl">Headquarters</div>
          ${typeof rtStatMeta === 'function' ? rtStatMeta(firm.slug, 'hq') : ''}
        </div>
        <div class="detail-stat">
          <div class="num">${totalHoldings}</div>
          <div class="lbl">Tracked Holdings</div>
        </div>
      <div class="detail-stat">
          <div class="num" style="color: var(--gold-bright);">${computePowerScore(firm)}</div>
          <div class="lbl">Power Score™</div>
        </div>
      </div>
      <p class="detail-about">${firm.thesis || ''}</p>
      ${renderOrgLineage(firm)}
      ${typeof renderClaimLink === 'function' ? renderClaimLink(firm) : ''}
      <div id="fcHost"></div>
      <div class="founder-callout">
        <div class="founder-callout-label">For Founders</div>
    <div class="founder-callout-row">
          <div class="founder-callout-tags">
            ${firm.sectors.map(s => `<span class="compare-sector-tag">${s}</span>`).join('')}
          </div>
          <div class="founder-callout-scale">${getScaleLabel(firm)}</div>
          <a href="#find-investors" class="founder-callout-cta">Check Your Fit →</a>
        </div>
      </div>
${renderWhyThisVC(firm)}
      ${renderPowerSignalsSection(firm)}
      ${renderGenome(firm)}
      ${renderPerformanceDashboard(firm)}
      ${renderGeographicHeatmap(firm)}
      ${leadershipHTML}
      ${timelineHTML}
   <div class="holdings">
        <div class="holdings-label">All Notable Public Portfolio Companies</div>
        ${holdingsHTML}
      </div>
      ${typeof rtResearchPanel === 'function' ? rtResearchPanel(firm) : ''}
 ${renderFirmIntelligence(firm)}
      ${renderSimilarFirms(firm)}
      ${renderPeerFirmLinks(firm)}
    </div>
  `;
document.getElementById('backToList').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '';
  });

  wirePowerSignalsSection(firm);
  buildTicker();
}
