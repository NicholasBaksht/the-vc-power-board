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
