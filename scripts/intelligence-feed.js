/**
 * INTELLIGENCE-FEED.JS (Part 1 of 2 - data & enrichment layer)
 * Turns real, already-dated events from across the app into a
 * single chronological "what changed" feed, with each card
 * enriched into actual intelligence (career context, real
 * portfolio overlap, a computed activity signal) rather than a
 * flat list of facts.
 *
 * Every event source here is reused, not reinvented:
 *   - Firm milestones/fund launches/acquisitions/IPOs/founding:
 *     buildFirmTimelineEvents() from historical-snapshot.js
 *   - Spinouts: getSpinoutRelations() from relationship-graph.js,
 *     deduplicated so the same real event doesn't appear twice
 *     from both firms' perspectives
 *   - Partner moves: partnerProfiles.joinedYear + firmHistory,
 *     merged into one "moved from A to B" card when firmHistory
 *     supports it, or a plain "joins" card when it doesn't
 *   - Portfolio overlap context: getPortfolioOverlap() from
 *     relationship-graph.js, shown as supporting context only -
 *     never claimed to be new, since holdings carry no acquisition
 *     date
 *   - Rising Activity: a live-computed signal comparing each
 *     firm's real dated-event density across two time windows -
 *     explicitly labeled as reflecting what's documented on file,
 *     not confirmed real-world pace
 *
 * Deliberately NOT included, because nothing dates them: discrete
 * investment/funding-round events, partner promotions, and office
 * openings. See the equivalent notes in historical-snapshot.js.
 */

const INTEL_TYPE_LABELS = Object.assign({}, EVENT_TYPE_LABELS, {
  partner_movement: 'Partner Movement',
  rising_activity: 'Rising Activity Signal'
});
const INTEL_TYPE_COLORS = Object.assign({}, EVENT_TYPE_COLORS, {
  partner_movement: '#f472b6',
  rising_activity: '#fbbf24'
});

function buildFirmMilestoneFeedEvents() {
  const events = [];
  firms.forEach(firm => {
    buildFirmTimelineEvents(firm.slug)
      .filter(e => ['firm_founded', 'fund_launch', 'acquisition', 'ipo', 'milestone'].includes(e.type))
      .forEach(e => events.push({ year: e.year, type: e.type, firmSlug: firm.slug, title: e.title }));
  });
  return events;
}

// Only walks the 'child' direction of each real spinout relation,
// so the same event (e.g. Baukunst spinning out of Atlas Venture)
// produces exactly one feed card, not one per firm involved. Both
// firms still end up in relatedEntities, so following either one
// surfaces it.
function buildSpinoutFeedEvents() {
  const seen = new Set();
  const events = [];
  firms.forEach(firm => {
    getSpinoutRelations(firm.slug).forEach(rel => {
      if (rel.direction !== 'child') return;
      const parentFirm = firms.find(f => f.slug === rel.firmSlug);
      if (!parentFirm) return;
      const key = [firm.slug, parentFirm.slug, rel.year].sort().join('|');
      if (seen.has(key)) return;
      seen.add(key);
      events.push({ year: rel.year, type: 'spinout_child', firmSlug: firm.slug, relatedFirmSlug: parentFirm.slug, founders: rel.founders });
    });
  });
  return events;
}

// One card per real partner move. Uses firmHistory[0] as the
// immediate prior firm (same convention already used in
// historical-snapshot.js's event detail panel) - any additional
// firmHistory entries are shown as supporting career context
// rather than separate events, since their relative ordering isn't
// data this app actually has.
function buildPartnerFeedEvents() {
  const events = [];
  Object.entries(partnerProfiles).forEach(([slug, p]) => {
    if (!p.joinedYear || !p.firmSlug) return;
    const currentFirm = firms.find(f => f.slug === p.firmSlug);
    if (!currentFirm) return;
    if (p.firmHistory && p.firmHistory.length > 0) {
      const prevEntry = p.firmHistory[0];
      const prevFirm = firms.find(f => f.slug === prevEntry.firmSlug);
      events.push({
        year: p.joinedYear, type: 'partner_movement', partnerSlug: slug,
        firmSlug: currentFirm.slug, prevFirmSlug: prevFirm ? prevFirm.slug : null,
        role: p.title, prevRole: prevEntry.role,
        otherHistory: p.firmHistory.slice(1)
      });
    } else {
      events.push({ year: p.joinedYear, type: 'partner_joined', partnerSlug: slug, firmSlug: currentFirm.slug, role: p.title });
    }
  });
  return events;
}

// Compares each firm's real dated-event density (from the exact
// same buildFirmTimelineEvents used everywhere else) across two
// trailing windows. Requires at least 2 events in the recent window
// before flagging anything, so a single stray milestone can't read
// as a "trend." This is a signal about what's been documented and
// dated on file - firms researched more recently or more deeply
// will naturally show up more here, which is a real limitation of
// uneven data coverage, not a claim about actual investment pace.
function computeRisingActivitySignals() {
  const currentYear = new Date().getFullYear();
  const signals = [];
  firms.forEach(firm => {
    const events = buildFirmTimelineEvents(firm.slug);
    const recent = events.filter(e => e.year > currentYear - 2 && e.year <= currentYear).length;
    const prior = events.filter(e => e.year > currentYear - 4 && e.year <= currentYear - 2).length;
    if (recent >= 2 && recent > prior) {
      signals.push({ year: currentYear, type: 'rising_activity', firmSlug: firm.slug, recent, prior });
    }
  });
  return signals;
}

function buildAllFeedEvents() {
  return [
    ...buildFirmMilestoneFeedEvents(),
    ...buildSpinoutFeedEvents(),
    ...buildPartnerFeedEvents(),
    ...computeRisingActivitySignals()
  ];
}

// Turns one raw event into a full intelligence card: headline,
// short explanation, supporting data pulled from real overlap/
// history, real links into the rest of the app, and a tagged set
// of related entities used for both filtering and follow-matching.
function buildIntelCard(e) {
  const firm = firms.find(f => f.slug === e.firmSlug);
  if (!firm) return null;

  let headline = '', context = '', supportingData = [];
  const links = [{ label: firm.name, href: `#${firm.slug}` }];
  const relatedFirmSlugs = new Set([firm.slug]);
  const relatedPartnerSlugs = new Set();
  const relatedCompanyNames = new Set();

  if (e.type === 'firm_founded') {
    headline = `${firm.name} founded`;
  } else if (['fund_launch', 'acquisition', 'ipo', 'milestone'].includes(e.type)) {
    headline = e.title;
  } else if (e.type === 'spinout_child') {
    const relatedFirm = firms.find(f => f.slug === e.relatedFirmSlug);
    headline = relatedFirm ? `${firm.name} spins out from ${relatedFirm.name}` : `${firm.name} founded as a spinout`;
    context = `Founded by ${e.founders.join(', ')}.`;
    if (relatedFirm) {
      relatedFirmSlugs.add(relatedFirm.slug);
      links.push({ label: relatedFirm.name, href: `#${relatedFirm.slug}` });
      links.push({ label: 'Family Tree', href: '#family-tree' });
      const overlap = getPortfolioOverlap(firm.slug).find(o => o.firmSlug === relatedFirm.slug);
      if (overlap) {
        supportingData.push(`The two firms already share ${overlap.companies.length} portfolio compan${overlap.companies.length === 1 ? 'y' : 'ies'}: ${overlap.companies.join(', ')}.`);
        overlap.companies.forEach(c => relatedCompanyNames.add(c));
      }
    }
  } else if (e.type === 'partner_joined') {
    const profile = partnerProfiles[e.partnerSlug];
    headline = `${profile.name} joins ${firm.name} as ${e.role}`;
    context = 'No prior firm history is on file for this partner.';
    relatedPartnerSlugs.add(e.partnerSlug);
    links.push({ label: profile.name, href: `#partner/${e.partnerSlug}` });
  } else if (e.type === 'partner_movement') {
    const profile = partnerProfiles[e.partnerSlug];
    const prevFirm = e.prevFirmSlug ? firms.find(f => f.slug === e.prevFirmSlug) : null;
    headline = prevFirm ? `${profile.name} moves from ${prevFirm.name} to ${firm.name}` : `${profile.name} joins ${firm.name} as ${e.role}`;
    context = prevFirm ? `Previously ${e.prevRole} at ${prevFirm.name}.` : '';
    relatedPartnerSlugs.add(e.partnerSlug);
    links.push({ label: profile.name, href: `#partner/${e.partnerSlug}` });
    if (prevFirm) {
      relatedFirmSlugs.add(prevFirm.slug);
      links.push({ label: prevFirm.name, href: `#${prevFirm.slug}` });
      const overlap = getPortfolioOverlap(firm.slug).find(o => o.firmSlug === prevFirm.slug);
      if (overlap) {
        supportingData.push(`${firm.short} and ${prevFirm.short} already share ${overlap.companies.length} portfolio compan${overlap.companies.length === 1 ? 'y' : 'ies'}: ${overlap.companies.join(', ')}.`);
        overlap.companies.forEach(c => relatedCompanyNames.add(c));
      }
    }
    if (e.otherHistory && e.otherHistory.length > 0) {
      const names = e.otherHistory.map(h => { const f = firms.find(x => x.slug === h.firmSlug); return f ? f.name : null; }).filter(Boolean);
      if (names.length > 0) supportingData.push(`Also previously at: ${names.join(', ')}.`);
    }
  } else if (e.type === 'rising_activity') {
    headline = `${firm.name} shows rising documented activity`;
    context = `${e.recent} dated event${e.recent === 1 ? '' : 's'} on file in the last 2 years, up from ${e.prior} in the two years before that.`;
    supportingData.push('This reflects what has been researched and dated on file for this firm, not a confirmed measure of real-world investment pace - firms researched more recently or more thoroughly will naturally show up here more often.');
  }

  links.push({ label: 'Relationship Graph', href: `#relationship-graph/firm/${firm.slug}` });
  links.push({ label: 'Timeline', href: `#historical-snapshot/${firm.slug}` });

  const sectorSlugs = new Set();
  const locationSlugs = new Set();
  relatedFirmSlugs.forEach(slug => {
    const f = firms.find(x => x.slug === slug);
    if (!f) return;
    getFirmCanonicalSectors(f).forEach(s => sectorSlugs.add(s));
    const loc = getFirmCanonicalLocation(f);
    if (loc) locationSlugs.add(loc);
  });

  return {
    id: `${e.type}:${e.firmSlug}:${e.year}:${e.partnerSlug || e.relatedFirmSlug || ''}`,
    year: e.year, type: e.type, firm, headline, context, supportingData, links,
    relatedEntities: {
      firmSlugs: Array.from(relatedFirmSlugs),
      partnerSlugs: Array.from(relatedPartnerSlugs),
      sectorSlugs: Array.from(sectorSlugs),
      locationSlugs: Array.from(locationSlugs),
      companyNames: Array.from(relatedCompanyNames)
    }
  };
}

function buildIntelFeed() {
  return buildAllFeedEvents()
    .map(buildIntelCard)
    .filter(Boolean)
    .sort((a, b) => b.year - a.year);
}
