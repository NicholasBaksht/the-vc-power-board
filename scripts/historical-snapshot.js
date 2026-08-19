/**
 * HISTORICAL-SNAPSHOT.JS
 * Two ways to see how a firm evolved: a scrollable, filterable
 * Timeline of real dated events, and a Compare Years mode showing
 * what changed between any two years. Every event here comes from
 * a real, already-dated field elsewhere in the app - partner
 * joinedYear, firmHistory endYear, FAMILY_TREE spinout years, and
 * firm.timeline milestones. Nothing is invented: event types the
 * data genuinely doesn't support (dated investments, promotions,
 * dated office openings) are simply not included - see the
 * comments on buildFirmTimelineEvents for exactly why each one is
 * or isn't there.
 */

let snapshotFirmSlug = null;
let snapshotMode = 'timeline'; // 'timeline' | 'compare'
let snapshotCompareFrom = null;
let snapshotCompareTo = null;
let snapshotActiveTypes = new Set(); // empty = show all types
let snapshotActivePartner = '';
let snapshotYearMin = null;
let snapshotYearMax = null;
let snapshotZoom = 'detailed'; // 'detailed' | 'broad'

const EVENT_TYPE_LABELS = {
  firm_founded: 'Firm Founded',
  partner_joined: 'Partner Joined',
  partner_departed: 'Partner Departed',
  spinout_child: 'Spinout (Founded From Another Firm)',
  spinout_parent: 'Spinout (Partners Departed To Found)',
  fund_launch: 'Fund Launch',
  acquisition: 'Acquisition',
  ipo: 'IPO',
  milestone: 'Milestone'
};
const EVENT_TYPE_COLORS = {
  firm_founded: '#2F6FED',
  partner_joined: '#7dd3fc',
  partner_departed: '#f472b6',
  spinout_child: '#a78bfa',
  spinout_parent: '#a78bfa',
  fund_launch: '#4ade80',
  acquisition: '#4ade80',
  ipo: '#4ade80',
  milestone: '#8FA5B3'
};

// Best-effort classification of a real firm.timeline sentence into
// a more specific bucket, purely for filtering/labeling - not a
// separately verified fact. Anything that doesn't clearly match
// falls into the generic "milestone" bucket rather than being
// force-fit into the wrong category.
function classifyMilestoneText(text) {
  if (/\bIPO\b|initial public offering/i.test(text)) return 'ipo';
  if (/acqui/i.test(text)) return 'acquisition';
  if (/\braise[sd]?\b|closes? .*fund|\$[\d.,]+\s?(million|billion|[mMbB])\s+fund/i.test(text)) return 'fund_launch';
  return 'milestone';
}

/**
 * Builds every real, dated event for one firm. Each source is
 * commented with exactly what it is and isn't backed by:
 *   - firm_founded: firm.founded (skipped if firm.timeline already
 *     has its own founding-year entry, so it's never duplicated)
 *   - milestone/fund_launch/acquisition/ipo: firm.timeline, real
 *     dated text, lightly keyword-classified
 *   - partner_joined: partnerProfiles.joinedYear, real per-partner
 *   - partner_departed: firmHistory.endYear on ANY tracked partner
 *     whose history includes this firm - coverage is limited to
 *     the handful of partners with firmHistory populated
 *   - spinout_child / spinout_parent: FAMILY_TREE, via the exact
 *     same getSpinoutRelations() already used by Family Tree and
 *     Relationship Graph, so it can never drift from those
 * Deliberately NOT included, because nothing dates them: individual
 * investments (holdings has no date field), partner promotions
 * (not tracked at all), and office openings (firmGeography has no
 * year field).
 */
function buildFirmTimelineEvents(firmSlug) {
  const firm = firms.find(f => f.slug === firmSlug);
  if (!firm) return [];
  const events = [];

  const timelineEntries = firm.timeline || [];
  const hasFoundingEntry = timelineEntries.some(t => parseInt(t.year, 10) === firm.founded && /found/i.test(t.event));
  if (!hasFoundingEntry && firm.founded) {
    events.push({ year: firm.founded, type: 'firm_founded', title: `${firm.name} founded`, detail: null });
  }

  timelineEntries.forEach(t => {
    const year = parseInt(t.year, 10);
    if (isNaN(year)) return;
    events.push({ year, type: classifyMilestoneText(t.event), title: t.event, detail: null });
  });

  Object.entries(partnerProfiles).forEach(([slug, p]) => {
    if (p.firmSlug === firmSlug && p.joinedYear) {
      events.push({
        year: p.joinedYear,
        type: 'partner_joined',
        title: `${p.name} joins as ${p.title}`,
        detail: { partnerSlug: slug, name: p.name, role: p.title, firmHistory: p.firmHistory || [] }
      });
    }
  });

  Object.entries(partnerProfiles).forEach(([slug, p]) => {
    (p.firmHistory || []).forEach(fh => {
      if (fh.firmSlug === firmSlug && fh.endYear) {
        events.push({
          year: fh.endYear,
          type: 'partner_departed',
          title: `${p.name} leaves (${fh.role})`,
          detail: { partnerSlug: slug, name: p.name, role: fh.role, currentFirmSlug: p.firmSlug }
        });
      }
    });
  });

  getSpinoutRelations(firmSlug).forEach(rel => {
    const relFirm = firms.find(f => f.slug === rel.firmSlug);
    if (!relFirm) return;
    if (rel.direction === 'child') {
      events.push({
        year: rel.year,
        type: 'spinout_child',
        title: `Founded as a spinout from ${relFirm.name}`,
        detail: { relatedFirmSlug: relFirm.slug, founders: rel.founders }
      });
    } else {
      events.push({
        year: rel.year,
        type: 'spinout_parent',
        title: `${rel.founders.join(', ')} leave to found ${relFirm.name}`,
        detail: { relatedFirmSlug: relFirm.slug, founders: rel.founders }
      });
    }
  });

  return events.sort((a, b) => a.year - b.year || a.type.localeCompare(b.type));
}

function renderHistoricalSnapshot(deepLinkFirmSlug) {
  if (deepLinkFirmSlug && firms.some(f => f.slug === deepLinkFirmSlug)) {
    snapshotFirmSlug = deepLinkFirmSlug;
    snapshotMode = 'timeline';
    snapshotActiveTypes = new Set();
    snapshotActivePartner = '';
    snapshotYearMin = null;
    snapshotYearMax = null;
  }
  if (!snapshotFirmSlug) snapshotFirmSlug = firms[0].slug;

  const firmOptionsHTML = firms
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(f => `<option value="${f.slug}" ${f.slug === snapshotFirmSlug ? 'selected' : ''}>${f.name}</option>`)
    .join('');

  document.getElementById('historicalSnapshotView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">Historical Timeline</div>
    <div class="reports-intro">
      <p>Pick a firm to see every real, dated event on file for it - partners joining and leaving, spinout lineage, and firm milestones. This can't show individual dated investments, partner promotions, or dated office openings, since none of those are tracked with real dates anywhere on this site - showing them here would mean guessing, not reporting.</p>
    </div>

    <div class="snapshot-controls">
      <div class="snapshot-control-group">
        <label class="snapshot-label" for="snapshotFirmSelect">Firm</label>
        <select id="snapshotFirmSelect" class="snapshot-select">${firmOptionsHTML}</select>
      </div>
      <div class="snapshot-control-group snapshot-mode-group">
        <label class="snapshot-label">View</label>
        <div class="snapshot-mode-toggle">
          <button class="snapshot-mode-btn ${snapshotMode === 'timeline' ? 'active' : ''}" data-mode="timeline">Timeline</button>
          <button class="snapshot-mode-btn ${snapshotMode === 'compare' ? 'active' : ''}" data-mode="compare">Compare Years</button>
        </div>
      </div>
    </div>

    <div id="snapshotResults"></div>
  `;

  document.getElementById('snapshotFirmSelect').addEventListener('change', (e) => {
    snapshotFirmSlug = e.target.value;
    snapshotActiveTypes = new Set();
    snapshotActivePartner = '';
    snapshotYearMin = null;
    snapshotYearMax = null;
    renderSnapshotResults();
  });

  document.querySelectorAll('.snapshot-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      snapshotMode = btn.dataset.mode;
      document.querySelectorAll('.snapshot-mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSnapshotResults();
    });
  });

  renderSnapshotResults();
}

function renderSnapshotResults() {
  const firm = firms.find(f => f.slug === snapshotFirmSlug);
  const container = document.getElementById('snapshotResults');
  if (!firm) return;

  if (snapshotMode === 'compare') {
    renderCompareYears(firm, container);
  } else {
    renderTimeline(firm, container);
  }
}

// ---------- TIMELINE MODE ----------

function renderTimeline(firm, container) {
  const allEvents = buildFirmTimelineEvents(firm.slug);

  if (allEvents.length === 0) {
    container.innerHTML = `<div class="snapshot-empty">No dated events on file yet for ${firm.name}.</div>`;
    return;
  }

  const yearsPresent = allEvents.map(e => e.year);
  const dataMin = Math.min(...yearsPresent);
  const dataMax = Math.max(...yearsPresent);
  if (snapshotYearMin === null) snapshotYearMin = dataMin;
  if (snapshotYearMax === null) snapshotYearMax = dataMax;

  const typesPresent = Array.from(new Set(allEvents.map(e => e.type)));
  const partnersPresent = Array.from(new Set(
    allEvents.filter(e => e.detail && e.detail.partnerSlug).map(e => e.detail.partnerSlug)
  )).map(slug => ({ slug, name: partnerProfiles[slug] ? partnerProfiles[slug].name : slug }));

  const filterChipsHTML = typesPresent.map(t => `
    <button class="snapshot-type-chip ${snapshotActiveTypes.has(t) ? 'active' : ''}" data-type="${t}" style="--chip-color:${EVENT_TYPE_COLORS[t]}">${EVENT_TYPE_LABELS[t]}</button>
  `).join('');

  const partnerOptionsHTML = partnersPresent.map(p => `<option value="${p.slug}" ${snapshotActivePartner === p.slug ? 'selected' : ''}>${p.name}</option>`).join('');

  container.innerHTML = `
    <div class="snapshot-header">
      <a href="#${firm.slug}" class="snapshot-firm-name">${firm.name}</a>
      <span class="snapshot-firm-meta">${allEvents.length} real dated event${allEvents.length === 1 ? '' : 's'} on file · founded ${firm.founded}</span>
    </div>

    <div class="tl-filter-bar">
      <div class="tl-filter-group">
        <div class="tl-filter-label">Event Type</div>
        <div class="tl-type-chips">${filterChipsHTML}</div>
      </div>
      ${partnersPresent.length > 0 ? `
      <div class="tl-filter-group">
        <div class="tl-filter-label">Partner</div>
        <select id="tlPartnerFilter" class="snapshot-select">
          <option value="">All Partners</option>
          ${partnerOptionsHTML}
        </select>
      </div>` : ''}
      <div class="tl-filter-group">
        <div class="tl-filter-label">Time Period (${dataMin}–${dataMax} on file)</div>
        <div class="tl-year-range">
          <input type="number" id="tlYearMin" class="tl-year-input" value="${snapshotYearMin}" min="${dataMin}" max="${dataMax}">
          <span class="tl-year-sep">to</span>
          <input type="number" id="tlYearMax" class="tl-year-input" value="${snapshotYearMax}" min="${dataMin}" max="${dataMax}">
        </div>
      </div>
      <div class="tl-filter-group">
        <div class="tl-filter-label">Zoom</div>
        <div class="snapshot-mode-toggle">
          <button class="snapshot-mode-btn tl-zoom-btn ${snapshotZoom === 'detailed' ? 'active' : ''}" data-zoom="detailed">Detailed</button>
          <button class="snapshot-mode-btn tl-zoom-btn ${snapshotZoom === 'broad' ? 'active' : ''}" data-zoom="broad">Broad (By Decade)</button>
        </div>
      </div>
      ${(snapshotActiveTypes.size > 0 || snapshotActivePartner) ? `<button class="tl-clear-filters" id="tlClearFilters">Clear Filters</button>` : ''}
    </div>

    <div class="tl-disabled-filters-note">Sector and Geography filters aren't shown here - both are fixed attributes of ${firm.short}, not of individual events, so filtering this firm's own timeline by its own unchanging sector or geography wouldn't do anything.</div>

    <div id="tlEventList"></div>
  `;

  document.querySelectorAll('.tl-type-chips .snapshot-type-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const t = chip.dataset.type;
      if (snapshotActiveTypes.has(t)) snapshotActiveTypes.delete(t); else snapshotActiveTypes.add(t);
      renderTimeline(firm, container);
    });
  });
  const partnerSel = document.getElementById('tlPartnerFilter');
  if (partnerSel) partnerSel.addEventListener('change', (e) => { snapshotActivePartner = e.target.value; renderTimeline(firm, container); });
  document.getElementById('tlYearMin').addEventListener('change', (e) => { snapshotYearMin = parseInt(e.target.value, 10); renderTimeline(firm, container); });
  document.getElementById('tlYearMax').addEventListener('change', (e) => { snapshotYearMax = parseInt(e.target.value, 10); renderTimeline(firm, container); });
  document.querySelectorAll('.tl-zoom-btn').forEach(btn => {
    btn.addEventListener('click', () => { snapshotZoom = btn.dataset.zoom; renderTimeline(firm, container); });
  });
  const clearBtn = document.getElementById('tlClearFilters');
  if (clearBtn) clearBtn.addEventListener('click', () => {
    snapshotActiveTypes = new Set();
    snapshotActivePartner = '';
    renderTimeline(firm, container);
  });

  const filtered = allEvents.filter(e => {
    if (snapshotActiveTypes.size > 0 && !snapshotActiveTypes.has(e.type)) return false;
    if (snapshotActivePartner && (!e.detail || e.detail.partnerSlug !== snapshotActivePartner)) return false;
    if (e.year < snapshotYearMin || e.year > snapshotYearMax) return false;
    return true;
  });

  renderTimelineList(filtered, firm);
}

function renderTimelineList(events, firm) {
  const listEl = document.getElementById('tlEventList');
  if (events.length === 0) {
    listEl.innerHTML = `<div class="snapshot-empty">No events match the current filters.</div>`;
    return;
  }

  if (snapshotZoom === 'broad') {
    const byDecade = {};
    events.forEach(e => {
      const decade = Math.floor(e.year / 10) * 10;
      if (!byDecade[decade]) byDecade[decade] = [];
      byDecade[decade].push(e);
    });
    listEl.innerHTML = Object.keys(byDecade).sort((a, b) => a - b).map(decade => {
      const decadeEvents = byDecade[decade];
      const typeCounts = {};
      decadeEvents.forEach(e => { typeCounts[e.type] = (typeCounts[e.type] || 0) + 1; });
      const countBadges = Object.entries(typeCounts).map(([t, c]) => `
        <span class="tl-decade-badge" style="--chip-color:${EVENT_TYPE_COLORS[t]}">${c} ${EVENT_TYPE_LABELS[t]}</span>
      `).join('');
      return `
        <div class="tl-decade-row">
          <div class="tl-decade-label">${decade}s</div>
          <div class="tl-decade-badges">${countBadges}</div>
        </div>
      `;
    }).join('');
    return;
  }

  listEl.innerHTML = events.map((e, i) => `
    <div class="tl-event-row" data-index="${i}">
      <div class="tl-event-year">${e.year}</div>
      <div class="tl-event-dot" style="background:${EVENT_TYPE_COLORS[e.type]}"></div>
      <div class="tl-event-body">
        <div class="tl-event-type-label" style="color:${EVENT_TYPE_COLORS[e.type]}">${EVENT_TYPE_LABELS[e.type]}</div>
        <div class="tl-event-title">${e.title}</div>
        <div class="tl-event-detail" id="tlDetail${i}" style="display:none;"></div>
      </div>
    </div>
  `).join('');

  listEl.querySelectorAll('.tl-event-row').forEach(row => {
    row.addEventListener('click', () => {
      const i = row.dataset.index;
      const detailEl = document.getElementById(`tlDetail${i}`);
      const isOpen = detailEl.style.display !== 'none';
      listEl.querySelectorAll('.tl-event-detail').forEach(d => d.style.display = 'none');
      if (!isOpen) {
        detailEl.innerHTML = renderEventDetail(events[i], firm);
        detailEl.style.display = 'block';
      }
    });
  });
}

// Builds the expanded detail shown when an event is clicked -
// only ever real fields already present on the event's detail
// object, never invented to fill out a "complete-looking" card.
function renderEventDetail(event, firm) {
  const d = event.detail;
  if (!d) return '';

  if (event.type === 'partner_joined') {
    const priorFirm = d.firmHistory && d.firmHistory[0] ? firms.find(f => f.slug === d.firmHistory[0].firmSlug) : null;
    return `
      <div class="tl-detail-grid">
        <div><span class="tl-detail-label">Partner:</span> <a href="#partner/${d.partnerSlug}" class="tl-detail-link">${d.name}</a></div>
        <div><span class="tl-detail-label">Role:</span> ${d.role}</div>
        ${priorFirm ? `<div><span class="tl-detail-label">Previously at:</span> <a href="#${priorFirm.slug}" class="tl-detail-link">${priorFirm.name}</a></div>` : `<div><span class="tl-detail-label">Previous firm:</span> Not on file</div>`}
      </div>
    `;
  }
  if (event.type === 'partner_departed') {
    const currentFirm = firms.find(f => f.slug === d.currentFirmSlug);
    return `
      <div class="tl-detail-grid">
        <div><span class="tl-detail-label">Partner:</span> <a href="#partner/${d.partnerSlug}" class="tl-detail-link">${d.name}</a></div>
        <div><span class="tl-detail-label">Role Held:</span> ${d.role}</div>
        ${currentFirm ? `<div><span class="tl-detail-label">Now at:</span> <a href="#${currentFirm.slug}" class="tl-detail-link">${currentFirm.name}</a></div>` : ''}
      </div>
    `;
  }
  if (event.type === 'spinout_child' || event.type === 'spinout_parent') {
    const relFirm = firms.find(f => f.slug === d.relatedFirmSlug);
    return `
      <div class="tl-detail-grid">
        <div><span class="tl-detail-label">Founders:</span> ${d.founders.join(', ')}</div>
        ${relFirm ? `<div><span class="tl-detail-label">Related Firm:</span> <a href="#${relFirm.slug}" class="tl-detail-link">${relFirm.name}</a></div>` : ''}
        <div><a href="#relationship-graph/firm/${firm.slug}" class="tl-detail-link">Explore this lineage in the Relationship Graph →</a></div>
      </div>
    `;
  }
  return '';
}

// ---------- COMPARE YEARS MODE ----------

function renderCompareYears(firm, container) {
  const allEvents = buildFirmTimelineEvents(firm.slug);
  const currentYear = new Date().getFullYear();
  if (snapshotCompareFrom === null) snapshotCompareFrom = firm.founded;
  if (snapshotCompareTo === null) snapshotCompareTo = currentYear;

  container.innerHTML = `
    <div class="snapshot-header">
      <a href="#${firm.slug}" class="snapshot-firm-name">${firm.name}</a>
      <span class="snapshot-firm-meta">Comparing ${snapshotCompareFrom} → ${snapshotCompareTo}</span>
    </div>

    <div class="snapshot-controls">
      <div class="snapshot-control-group">
        <label class="snapshot-label" for="compareFromSelect">From Year</label>
        <input type="number" id="compareFromSelect" class="snapshot-select" value="${snapshotCompareFrom}" min="${firm.founded}" max="${currentYear}">
      </div>
      <div class="snapshot-control-group">
        <label class="snapshot-label" for="compareToSelect">To Year</label>
        <input type="number" id="compareToSelect" class="snapshot-select" value="${snapshotCompareTo}" min="${firm.founded}" max="${currentYear}">
      </div>
    </div>

    <div id="compareResults"></div>
  `;

  document.getElementById('compareFromSelect').addEventListener('change', (e) => {
    snapshotCompareFrom = parseInt(e.target.value, 10);
    renderCompareYears(firm, container);
  });
  document.getElementById('compareToSelect').addEventListener('change', (e) => {
    snapshotCompareTo = parseInt(e.target.value, 10);
    renderCompareYears(firm, container);
  });

  const resultsEl = document.getElementById('compareResults');
  if (snapshotCompareFrom >= snapshotCompareTo) {
    resultsEl.innerHTML = `<div class="snapshot-empty">Pick a "From Year" earlier than the "To Year" to see what changed.</div>`;
    return;
  }

  const inRange = allEvents.filter(e => e.year > snapshotCompareFrom && e.year <= snapshotCompareTo);
  const joined = inRange.filter(e => e.type === 'partner_joined');
  const departed = inRange.filter(e => e.type === 'partner_departed');
  const spinouts = inRange.filter(e => e.type === 'spinout_child' || e.type === 'spinout_parent');
  const milestones = inRange.filter(e => ['milestone', 'fund_launch', 'acquisition', 'ipo'].includes(e.type));

  const partnersAtFrom = Object.values(partnerProfiles).filter(p => p.firmSlug === firm.slug && p.joinedYear && p.joinedYear <= snapshotCompareFrom).length;
  const partnersAtTo = Object.values(partnerProfiles).filter(p => p.firmSlug === firm.slug && p.joinedYear && p.joinedYear <= snapshotCompareTo).length;

  function listBlock(title, items, emptyText) {
    if (items.length === 0) return `<div class="cmp-block"><div class="cmp-block-title">${title}</div><div class="snapshot-empty-small">${emptyText}</div></div>`;
    const rows = items.map(e => `<div class="cmp-row"><span class="cmp-row-year">${e.year}</span><span>${e.title}</span></div>`).join('');
    return `<div class="cmp-block"><div class="cmp-block-title">${title} (${items.length})</div>${rows}</div>`;
  }

  resultsEl.innerHTML = `
    <div class="cmp-summary">
      <div class="cmp-summary-stat"><span class="cmp-summary-num">${partnersAtFrom} → ${partnersAtTo}</span><span class="cmp-summary-label">Partners on File (by joinedYear)</span></div>
    </div>
    ${listBlock('Partners Joined', joined, 'No new partner join dates on file in this range.')}
    ${listBlock('Partners Departed', departed, 'No partner departure dates on file in this range.')}
    ${listBlock('Spinout Activity', spinouts, 'No spinout events on file in this range.')}
    ${listBlock('Firm Milestones', milestones, 'No dated milestones on file in this range.')}
    <div class="cmp-caveat">Sectors, portfolio holdings, and AUM aren't tracked historically anywhere on this site - only current figures exist for those, so they can't be honestly compared across years. What's shown above is limited to what's actually dated in the data.</div>
  `;
}
