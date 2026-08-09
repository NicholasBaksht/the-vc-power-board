/**
 * POWER-SIGNALS.JS (Part 1 of 2 — signal engine)
 * Only three of the eight signal categories originally proposed
 * are honestly computable from real data, and even those are
 * reframed from how they were first described - see the
 * conversation this was scoped in for the full category-by-
 * category breakdown. Every signal here reuses data functions
 * already built for Historical Timeline and Intelligence Feed
 * (buildFirmTimelineEvents, getSpinoutRelations) rather than a new
 * pipeline - this IS that data, scored and thresholded differently.
 *
 * Deliberately NOT built, because nothing in the data supports it:
 * Emerging Sector, Geographic Expansion, Capital Deployment,
 * Portfolio Momentum, Strategic Shift - all of these require either
 * per-investment dates or historical sector/stage snapshots that
 * don't exist anywhere in this app's data.
 */

const SIGNAL_TYPE_LABELS = {
  momentum: 'Momentum',
  partner_momentum: 'Partner Momentum',
  network_expansion: 'Network Expansion'
};
const SIGNAL_TYPE_ICONS = {
  momentum: '📈',
  partner_momentum: '👥',
  network_expansion: '🔗'
};

// Minimum real event counts required before a signal is shown at
// each strength tier. Below the "emerging" floor, nothing is shown
// at all - a firm with 1 dated event doesn't get a "signal."
const SIGNAL_STRENGTH_FLOORS = { emerging: 2, moderate: 4, strong: 6 };

function classifySignalStrength(count) {
  if (count >= SIGNAL_STRENGTH_FLOORS.strong) return 'Strong';
  if (count >= SIGNAL_STRENGTH_FLOORS.moderate) return 'Moderate';
  if (count >= SIGNAL_STRENGTH_FLOORS.emerging) return 'Emerging';
  return null; // not enough data - caller must omit the signal entirely
}

function pctChange(recent, prior) {
  if (prior === 0) return recent > 0 ? null : 0; // can't express "% increase" from a zero base honestly
  return Math.round(((recent - prior) / prior) * 100);
}

/**
 * Momentum: trend in a firm's real DATED events (founding,
 * milestones, exits, partner joins/departures - the full set from
 * buildFirmTimelineEvents), trailing 2-year window vs the 2 years
 * before that. This is a proxy for "documented activity," not
 * confirmed investment pace - firms with deeper research coverage
 * will show stronger signals here regardless of real-world pace.
 * That limitation is surfaced in the card, not hidden.
 */
function computeMomentumSignal(firmSlug) {
  const currentYear = new Date().getFullYear();
  const events = buildFirmTimelineEvents(firmSlug);
  const recent = events.filter(e => e.year > currentYear - 2 && e.year <= currentYear).length;
  const prior = events.filter(e => e.year > currentYear - 4 && e.year <= currentYear - 2).length;
  const total = recent + prior;
  const strength = classifySignalStrength(total);
  if (!strength) return null;

  const direction = recent > prior ? 'up' : recent < prior ? 'down' : 'stable';
  const change = pctChange(recent, prior);

  return {
    type: 'momentum', firmSlug, strength, direction,
    recent, prior, changePct: change,
    headline: direction === 'up' ? 'Accelerating' : direction === 'down' ? 'Decelerating' : 'Stable',
    explanation: change !== null
      ? `${recent} documented events in the last 2 years vs ${prior} in the 2 years before that (${change >= 0 ? '+' : ''}${change}%).`
      : `${recent} documented events in the last 2 years, up from none in the 2 years before that.`,
    caveat: 'Reflects the volume of dated, researched events on file for this firm, not confirmed real-world investment pace.'
  };
}

/**
 * Partner Momentum: real joins (joinedYear) and real departures
 * (firmHistory.endYear on any tracked partner whose history
 * includes this firm) in the trailing 2-year window. The single
 * strongest of the eight originally proposed signals - both inputs
 * are genuinely dated, per-person facts.
 */
function computePartnerMomentumSignal(firmSlug) {
  const currentYear = new Date().getFullYear();
  const joins = Object.values(partnerProfiles).filter(p =>
    p.firmSlug === firmSlug && p.joinedYear > currentYear - 2 && p.joinedYear <= currentYear
  );
  const departures = [];
  Object.values(partnerProfiles).forEach(p => {
    (p.firmHistory || []).forEach(fh => {
      if (fh.firmSlug === firmSlug && fh.endYear > currentYear - 2 && fh.endYear <= currentYear) {
        departures.push({ name: p.name, role: fh.role, endYear: fh.endYear });
      }
    });
  });

  const total = joins.length + departures.length;
  const strength = classifySignalStrength(total);
  if (!strength) return null;

  const direction = joins.length > departures.length ? 'up' : joins.length < departures.length ? 'down' : 'stable';

  return {
    type: 'partner_momentum', firmSlug, strength, direction,
    joins: joins.map(p => ({ name: p.name, role: p.title, profileSlug: Object.keys(partnerProfiles).find(k => partnerProfiles[k] === p) })),
    departures,
    headline: direction === 'up' ? 'Positive' : direction === 'down' ? 'Negative' : 'Mixed',
    explanation: `${joins.length} notable partner${joins.length === 1 ? '' : 's'} joined and ${departures.length} left in the last 2 years.`,
    caveat: departures.length > 0 && Object.values(partnerProfiles).filter(p => p.firmHistory && p.firmHistory.length).length < 15
      ? 'Departure tracking depends on firmHistory data, which is only populated for a subset of tracked partners - real departures may be undercounted.'
      : null
  };
}

/**
 * Network Expansion: real, DATED relationship-forming events only -
 * spinouts involving this firm and partner-movement bridges into
 * or out of it - trailing 2-year window. Deliberately excludes
 * portfolio co-investor overlap, since holdings carry no date and
 * calling an existing overlap "new" or "expanding" would be
 * fabricating a timeline that doesn't exist.
 */
function computeNetworkExpansionSignal(firmSlug) {
  const currentYear = new Date().getFullYear();
  const events = [];

  getSpinoutRelations(firmSlug).forEach(rel => {
    if (rel.year > currentYear - 2 && rel.year <= currentYear) {
      events.push({ kind: 'spinout', year: rel.year, relatedFirmSlug: rel.firmSlug });
    }
  });

  getFormerPartnerBridges(firmSlug).forEach(bridge => {
    bridge.people.forEach(p => {
      // Bridge itself isn't independently dated beyond the current
      // partner's joinedYear, which getFormerPartnerBridges doesn't
      // carry - so this only counts bridges where we can confirm a
      // recent join drove the connection, via a direct profile check.
      const profile = Object.values(partnerProfiles).find(pp => pp.name === p.name && pp.firmSlug === firmSlug);
      if (profile && profile.joinedYear > currentYear - 2 && profile.joinedYear <= currentYear) {
        events.push({ kind: 'partner_bridge', year: profile.joinedYear, relatedFirmSlug: bridge.firmSlug });
      }
    });
  });

  const total = events.length;
  const strength = classifySignalStrength(total);
  if (!strength) return null;

  const relatedFirmSlugs = Array.from(new Set(events.map(e => e.relatedFirmSlug)));

  return {
    type: 'network_expansion', firmSlug, strength, direction: 'up',
    events, relatedFirmSlugs,
    headline: `+${total} new tracked relationship${total === 1 ? '' : 's'}`,
    explanation: `${total} new, dated relationship${total === 1 ? '' : 's'} formed in the last 2 years via spinout activity or partner moves.`,
    caveat: 'Only counts relationships with a real formation date - existing portfolio overlap with other firms isn\'t included here since it carries no date, and can\'t honestly be called "new."'
  };
}

// Computes every honestly-supportable signal for one firm, omitting
// any category that doesn't clear the minimum data floor.
function computeFirmPowerSignals(firmSlug) {
  return [
    computeMomentumSignal(firmSlug),
    computePartnerMomentumSignal(firmSlug),
    computeNetworkExpansionSignal(firmSlug)
  ].filter(Boolean);
}

/**
 * Market-level signal: partner movement across the WHOLE tracked
 * ecosystem, trailing 2-year window vs the 2 years before. The one
 * real market-wide trend claim from the original spec's examples -
 * every other example ("AI concentration increasing," "Robotics
 * emerging," "European activity expanding") would require time-
 * series sector/geo data that doesn't exist.
 */
function computeMarketPartnerMovementSignal() {
  const currentYear = new Date().getFullYear();
  let recent = 0, prior = 0;
  const recentMoves = [];
  Object.entries(partnerProfiles).forEach(([slug, p]) => {
    if (!p.joinedYear) return;
    if (p.joinedYear > currentYear - 2 && p.joinedYear <= currentYear) {
      recent++;
      recentMoves.push({ partnerSlug: slug, name: p.name, firmSlug: p.firmSlug, year: p.joinedYear });
    } else if (p.joinedYear > currentYear - 4 && p.joinedYear <= currentYear - 2) {
      prior++;
    }
  });

  const total = recent + prior;
  const strength = classifySignalStrength(total);
  if (!strength) return null;

  const change = pctChange(recent, prior);
  const firmSlugs = Array.from(new Set(recentMoves.map(m => m.firmSlug)));

  return {
    type: 'market_partner_movement', strength,
    recent, prior, changePct: change, firmSlugs, moves: recentMoves,
    headline: 'Partner Movement Across Tracked Firms',
    explanation: change !== null
      ? `${recent} tracked partner joins in the last 2 years across ${firmSlugs.length} firms, vs ${prior} in the 2 years before (${change >= 0 ? '+' : ''}${change}%).`
      : `${recent} tracked partner joins in the last 2 years across ${firmSlugs.length} firms.`,
    caveat: 'Based on real joinedYear/firmHistory data. Coverage is uneven across firms, so this reflects what has been researched and dated, not a complete census of every real move in the industry.'
  };
}
// ---------- Rendering ----------

const SIGNAL_STRENGTH_COLORS = { Strong: '#4ade80', Moderate: '#5B8DEF', Emerging: '#8FA5B3' };

function renderSignalStrengthBadge(strength) {
  return `<span class="ps-strength-badge" style="--sig-color:${SIGNAL_STRENGTH_COLORS[strength]}">${strength}</span>`;
}

function renderPowerSignalsSection(firm) {
  const signals = computeFirmPowerSignals(firm.slug);
  if (signals.length === 0) return '';

  const cardsHTML = signals.map((s, i) => `
    <div class="ps-mini-card" data-signal-index="${i}">
      <div class="ps-mini-head">
        <span class="ps-mini-icon">${SIGNAL_TYPE_ICONS[s.type]}</span>
        <span class="ps-mini-label">${SIGNAL_TYPE_LABELS[s.type]}</span>
        ${renderSignalStrengthBadge(s.strength)}
      </div>
      <div class="ps-mini-headline">${s.headline}</div>
      <div class="ps-mini-explanation">${s.explanation}</div>
      <div class="ps-mini-detail" id="psMiniDetail-${firm.slug}-${i}" style="display:none;"></div>
    </div>
  `).join('');

  return `
    <div class="power-signals-panel">
      <div class="detail-subhead">Power Signals</div>
      <div class="power-signals-sub">Automatically computed from real, dated events on file for ${firm.short} — not a summary, a calculation. Click any signal for the full breakdown.</div>
      <div class="ps-mini-grid">${cardsHTML}</div>
    </div>
  `;
}

function wirePowerSignalsSection(firm) {
  const signals = computeFirmPowerSignals(firm.slug);
  document.querySelectorAll(`.ps-mini-card`).forEach(card => {
    card.addEventListener('click', () => {
      const i = card.dataset.signalIndex;
      const detailEl = document.getElementById(`psMiniDetail-${firm.slug}-${i}`);
      if (!detailEl) return;
      const isOpen = detailEl.style.display !== 'none';
      document.querySelectorAll('.ps-mini-detail').forEach(d => d.style.display = 'none');
      if (!isOpen) {
        detailEl.innerHTML = renderSignalDrilldown(signals[i], firm);
        detailEl.style.display = 'block';
      }
    });
  });
}

function renderSignalDrilldown(signal, firm) {
  const links = [`<a href="#historical-snapshot/${firm.slug}" class="disc-link">Timeline</a>`];

  if (signal.type === 'momentum') {
    return `
      <div class="ps-detail-row"><strong>Compared:</strong> last 2 years (${signal.recent} events) vs the 2 years before (${signal.prior} events)</div>
      ${signal.caveat ? `<div class="ps-caveat">${signal.caveat}</div>` : ''}
      <div class="ps-detail-links">${links.join('')} <a href="#compare" class="disc-link">VC DNA</a></div>
    `;
  }

  if (signal.type === 'partner_momentum') {
    const joinRows = signal.joins.map(p => `<div class="ps-detail-person">→ <a href="#partner/${p.profileSlug}" class="disc-link">${p.name}</a> joined as ${p.role}</div>`).join('');
    const departRows = signal.departures.map(p => `<div class="ps-detail-person">← ${p.name} left (${p.role}, ${p.endYear})</div>`).join('');
    links.push(`<a href="#family-tree" class="disc-link">Family Tree</a>`);
    return `
      <div class="ps-detail-row"><strong>Window:</strong> last 2 years</div>
      ${joinRows}${departRows}
      ${signal.caveat ? `<div class="ps-caveat">${signal.caveat}</div>` : ''}
      <div class="ps-detail-links">${links.join('')}</div>
    `;
  }

  if (signal.type === 'network_expansion') {
    const relatedRows = signal.relatedFirmSlugs.map(slug => {
      const f = firms.find(x => x.slug === slug);
      return f ? `<div class="ps-detail-person">↔ <a href="#${f.slug}" class="disc-link">${f.name}</a></div>` : '';
    }).join('');
    links.push(`<a href="#relationship-graph/firm/${firm.slug}" class="disc-link">Relationship Graph</a>`);
    return `
      <div class="ps-detail-row"><strong>Window:</strong> last 2 years</div>
      ${relatedRows}
      ${signal.caveat ? `<div class="ps-caveat">${signal.caveat}</div>` : ''}
      <div class="ps-detail-links">${links.join('')}</div>
    `;
  }

  return '';
}

// ---------- Market Signals page ----------

let marketSignalFilters = { types: new Set(), sector: '', geo: '', firmSlug: '', strength: '' };
let marketSignalSort = 'strongest';

function renderMarketSignals() {
  marketSignalFilters = { types: new Set(), sector: '', geo: '', firmSlug: '', strength: '' };
  marketSignalSort = 'strongest';

  document.getElementById('powerSignalsView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">VC Market Signals</div>
    <div class="reports-intro">
      <p>Signals calculated from real, dated data already tracked on this page — not written, not summarized by AI. A signal only appears once there's enough real underlying data to support it; thin or ambiguous trends are left out rather than shown as fact.</p>
    </div>

    <div id="marketSignalTop"></div>
    <div id="marketSignalFilterBar"></div>
    <div id="marketSignalResults"></div>
  `;

  const marketSignal = computeMarketPartnerMovementSignal();
  document.getElementById('marketSignalTop').innerHTML = marketSignal ? `
    <div class="ps-market-card">
      <div class="ps-market-head">
        <span class="ps-mini-icon">🌐</span>
        <span class="ps-mini-label">Market-Wide Signal</span>
        ${renderSignalStrengthBadge(marketSignal.strength)}
      </div>
      <div class="ps-market-headline">${marketSignal.headline}</div>
      <div class="ps-mini-explanation">${marketSignal.explanation}</div>
      <div class="ps-caveat">${marketSignal.caveat}</div>
      <div class="ps-market-firms">${marketSignal.firmSlugs.slice(0, 12).map(slug => {
        const f = firms.find(x => x.slug === slug);
        return f ? `<a href="#${f.slug}" class="compare-sector-tag">${f.short}</a>` : '';
      }).join('')}</div>
    </div>
  ` : `<div class="intel-empty">Not enough real, dated partner-movement data on file yet to compute a market-wide signal.</div>`;

  renderAllFirmSignals();
  renderMarketSignalFilterBar();
  renderMarketSignalResults();
}

function renderAllFirmSignals() {
  window.marketAllFirmSignals = firms.flatMap(firm =>
    computeFirmPowerSignals(firm.slug).map(signal => ({ signal, firm }))
  );
}

function renderMarketSignalFilterBar() {
  const all = window.marketAllFirmSignals || [];
  const typesPresent = Array.from(new Set(all.map(x => x.signal.type)));
  const sectorsPresent = Array.from(new Set(all.flatMap(x => getFirmCanonicalSectors(x.firm))));
  const geosPresent = Array.from(new Set(all.map(x => getFirmCanonicalLocation(x.firm)).filter(Boolean)));
  const firmsPresent = Array.from(new Set(all.map(x => x.firm.slug)))
    .map(slug => firms.find(f => f.slug === slug)).sort((a, b) => a.name.localeCompare(b.name));

  document.getElementById('marketSignalFilterBar').innerHTML = `
    <div class="tl-filter-bar">
      <div class="tl-filter-group">
        <div class="tl-filter-label">Signal Type</div>
        <div class="tl-type-chips">
          ${typesPresent.map(t => `<button class="snapshot-type-chip ps-type-chip ${marketSignalFilters.types.has(t) ? 'active' : ''}" data-type="${t}" style="--chip-color:${SIGNAL_STRENGTH_COLORS.Moderate}">${SIGNAL_TYPE_ICONS[t]} ${SIGNAL_TYPE_LABELS[t]}</button>`).join('')}
        </div>
      </div>
      <div class="tl-filter-group">
        <div class="tl-filter-label">Strength</div>
        <select id="psStrengthFilter" class="snapshot-select">
          <option value="">Any Strength</option>
          <option value="Strong">Strong</option>
          <option value="Moderate">Moderate</option>
          <option value="Emerging">Emerging</option>
        </select>
      </div>
      ${sectorsPresent.length ? `
      <div class="tl-filter-group">
        <div class="tl-filter-label">Sector</div>
        <select id="psSectorFilter" class="snapshot-select">
          <option value="">All Sectors</option>
          ${sectorsPresent.map(s => `<option value="${s}">${SECTOR_MAP[s].label}</option>`).join('')}
        </select>
      </div>` : ''}
      ${geosPresent.length ? `
      <div class="tl-filter-group">
        <div class="tl-filter-label">Geography</div>
        <select id="psGeoFilter" class="snapshot-select">
          <option value="">All Geographies</option>
          ${geosPresent.map(g => `<option value="${g}">${LOCATION_MAP[g].label}</option>`).join('')}
        </select>
      </div>` : ''}
      <div class="tl-filter-group">
        <div class="tl-filter-label">Firm</div>
        <select id="psFirmFilter" class="snapshot-select">
          <option value="">All Firms</option>
          ${firmsPresent.map(f => `<option value="${f.slug}">${f.name}</option>`).join('')}
        </select>
      </div>
      <div class="tl-filter-group">
        <div class="tl-filter-label">Sort By</div>
        <select id="psSortSelect" class="snapshot-select">
          <option value="strongest">Strongest</option>
          <option value="recent">Most Recent</option>
          <option value="significant">Most Significant (Event Volume)</option>
          <option value="fastest">Fastest Changing</option>
        </select>
      </div>
    </div>
    <div class="tl-disabled-filters-note">Every signal here is computed over a fixed trailing 2-year window — the underlying data only has year-level precision, so finer time-period controls (30/90 days) aren't offered since they'd be misleading.</div>
  `;

  document.querySelectorAll('.ps-type-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const t = chip.dataset.type;
      if (marketSignalFilters.types.has(t)) marketSignalFilters.types.delete(t); else marketSignalFilters.types.add(t);
      renderMarketSignalResults();
    });
  });
  document.getElementById('psStrengthFilter').addEventListener('change', (e) => { marketSignalFilters.strength = e.target.value; renderMarketSignalResults(); });
  const sectorSel = document.getElementById('psSectorFilter');
  if (sectorSel) sectorSel.addEventListener('change', (e) => { marketSignalFilters.sector = e.target.value; renderMarketSignalResults(); });
  const geoSel = document.getElementById('psGeoFilter');
  if (geoSel) geoSel.addEventListener('change', (e) => { marketSignalFilters.geo = e.target.value; renderMarketSignalResults(); });
  document.getElementById('psFirmFilter').addEventListener('change', (e) => { marketSignalFilters.firmSlug = e.target.value; renderMarketSignalResults(); });
  document.getElementById('psSortSelect').addEventListener('change', (e) => { marketSignalSort = e.target.value; renderMarketSignalResults(); });
}

function signalMagnitude(signal) {
  if (signal.type === 'momentum') return signal.recent + signal.prior;
  if (signal.type === 'partner_momentum') return signal.joins.length + signal.departures.length;
  if (signal.type === 'network_expansion') return signal.events.length;
  return 0;
}
function signalMostRecentYear(signal) {
  if (signal.type === 'momentum') return new Date().getFullYear();
  if (signal.type === 'partner_momentum') {
    const years = [...signal.joins.map(() => new Date().getFullYear()), ...signal.departures.map(d => d.endYear)];
    return years.length ? Math.max(...years) : 0;
  }
  if (signal.type === 'network_expansion') return signal.events.length ? Math.max(...signal.events.map(e => e.year)) : 0;
  return 0;
}

function renderMarketSignalResults() {
  const all = window.marketAllFirmSignals || [];

  const filtered = all.filter(({ signal, firm }) => {
    if (marketSignalFilters.types.size > 0 && !marketSignalFilters.types.has(signal.type)) return false;
    if (marketSignalFilters.strength && signal.strength !== marketSignalFilters.strength) return false;
    if (marketSignalFilters.sector && !getFirmCanonicalSectors(firm).includes(marketSignalFilters.sector)) return false;
    if (marketSignalFilters.geo && getFirmCanonicalLocation(firm) !== marketSignalFilters.geo) return false;
    if (marketSignalFilters.firmSlug && firm.slug !== marketSignalFilters.firmSlug) return false;
    return true;
  });

  const strengthOrder = { Strong: 3, Moderate: 2, Emerging: 1 };
  filtered.sort((a, b) => {
    if (marketSignalSort === 'strongest') return strengthOrder[b.signal.strength] - strengthOrder[a.signal.strength];
    if (marketSignalSort === 'recent') return signalMostRecentYear(b.signal) - signalMostRecentYear(a.signal);
    if (marketSignalSort === 'significant') return signalMagnitude(b.signal) - signalMagnitude(a.signal);
    if (marketSignalSort === 'fastest') return Math.abs(b.signal.changePct || 0) - Math.abs(a.signal.changePct || 0);
    return 0;
  });

  const resultsEl = document.getElementById('marketSignalResults');
  resultsEl.innerHTML = `<div class="intel-results-label">${filtered.length} Firm Signal${filtered.length === 1 ? '' : 's'}</div><div id="psResultsList"></div>`;

  if (filtered.length === 0) {
    document.getElementById('psResultsList').innerHTML = `<div class="intel-empty">No signals match the current filters.</div>`;
    return;
  }

  document.getElementById('psResultsList').innerHTML = filtered.map(({ signal, firm }, i) => `
    <div class="ps-card" data-index="${i}">
      <div class="ps-card-head">
        <span class="ps-mini-icon">${SIGNAL_TYPE_ICONS[signal.type]}</span>
        <a href="#${firm.slug}" class="ps-card-firm">${firm.name}</a>
        <span class="ps-mini-label">${SIGNAL_TYPE_LABELS[signal.type]}</span>
        ${renderSignalStrengthBadge(signal.strength)}
      </div>
      <div class="ps-mini-headline">${signal.headline}</div>
      <div class="ps-mini-explanation">${signal.explanation}</div>
      <div class="ps-card-detail" id="psCardDetail-${i}" style="display:none;"></div>
    </div>
  `).join('');

  document.querySelectorAll('.ps-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      const i = card.dataset.index;
      const detailEl = document.getElementById(`psCardDetail-${i}`);
      const isOpen = detailEl.style.display !== 'none';
      document.querySelectorAll('.ps-card-detail').forEach(d => d.style.display = 'none');
      if (!isOpen) {
        detailEl.innerHTML = renderSignalDrilldown(filtered[i].signal, filtered[i].firm);
        detailEl.style.display = 'block';
      }
    });
  });
}
