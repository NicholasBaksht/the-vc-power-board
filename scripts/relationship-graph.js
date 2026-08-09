/**
 * RELATIONSHIP-GRAPH.JS
 * Reusable data layer for the VC Family Tree. Builds a typed graph of
 * real relationships around a firm - current partners, previous firms
 * (via the new firmHistory field), spinout lineage (FAMILY_TREE),
 * portfolio holdings, and portfolio overlap with other tracked firms.
 * Pure data logic - no DOM, no rendering - so any other feature
 * (search, comparisons, etc.) can call buildInitialGraph/expandNode
 * and get back plain nodes/edges to use however it needs.
 *
 * Every edge type here is backed by real, already-verified data.
 * Nothing is inferred or guessed at render time - the honest gaps
 * (e.g. a partner's full career predating firmHistory coverage)
 * simply don't produce an edge, rather than a fabricated one.
 */

const REL_TYPES = {
  CURRENT_PARTNER: 'current_partner',
  FORMER_PARTNER: 'former_partner',
  PREVIOUSLY_AT: 'previously_at',
  JOINED: 'joined',
  FOUNDED: 'founded',
  INVESTED_IN: 'invested_in',
  PORTFOLIO_CONNECTION: 'portfolio_connection',
  SPINOUT: 'spinout'
};

const NODE_TYPES = {
  FIRM: 'firm',
  PARTNER: 'partner',
  COMPANY: 'company'
};

function makeNode(id, type, label, extra = {}) {
  return { id, type, label, ...extra };
}

function makeEdge(source, target, relType, label, extra = {}) {
  return { source, target, relType, label, ...extra };
}
// Finds every partner currently at a firm - both from firm.leadership
// (the simple name/role list) and cross-checked against partnerProfiles
// where a fuller profile exists (so the graph can link to it).
function getCurrentPartners(firmSlug) {
  const firm = firms.find(f => f.slug === firmSlug);
  if (!firm || !firm.leadership) return [];
  return firm.leadership.map(l => {
    const profileSlug = l.profileSlug ||
      Object.keys(partnerProfiles).find(slug => partnerProfiles[slug].firmSlug === firmSlug && partnerProfiles[slug].name === l.name);
    return { name: l.name, role: l.role, profileSlug: profileSlug || null };
  });
}

// Real spinout relationships from FAMILY_TREE, in both directions -
// firms this one spun OUT of (parent), and firms that spun out of it.
function getSpinoutRelations(firmSlug) {
  const relations = [];
  FAMILY_TREE.forEach(group => {
    if (group.parentSlug === firmSlug) {
      group.children.forEach(child => {
        relations.push({ direction: 'child', firmSlug: child.slug, founders: child.founders, year: child.year });
      });
    }
    const childMatch = group.children.find(c => c.slug === firmSlug);
    if (childMatch) {
      relations.push({ direction: 'parent', firmSlug: group.parentSlug, founders: childMatch.founders, year: childMatch.year });
    }
  });
  return relations;
}

// Real portfolio overlap with other tracked firms - same logic already
// proven correct in the Ecosystem Graph, kept in sync here rather than
// duplicated with different behavior.
function getPortfolioOverlap(firmSlug) {
  const firm = firms.find(f => f.slug === firmSlug);
  if (!firm) return [];
  const overlaps = {};
  firm.holdings.forEach(h => {
    firms.forEach(other => {
      if (other.slug === firmSlug) return;
      if (other.holdings.some(oh => oh.name === h.name)) {
        if (!overlaps[other.slug]) overlaps[other.slug] = [];
        overlaps[other.slug].push(h.name);
      }
    });
  });
  return Object.entries(overlaps).map(([slug, companies]) => ({ firmSlug: slug, companies }));
}

/**
 * Builds the initial firm-centered view: the firm itself, its current
 * partners, direct spinout relations (one level), and its real
 * portfolio holdings. Deliberately does NOT pull in portfolio-overlap
 * firms or partners' previous firms yet - those come from expandNode,
 * so the first render stays readable rather than dumping the whole
 * network at once.
 */
function buildInitialGraph(firmSlug) {
  const firm = firms.find(f => f.slug === firmSlug);
  if (!firm) return { nodes: [], edges: [] };

  const nodes = [makeNode(firm.slug, NODE_TYPES.FIRM, firm.name, { center: true, aum: firm.aum })];
  const edges = [];

  getCurrentPartners(firmSlug).forEach(p => {
    const partnerId = p.profileSlug || `partner:${p.name}`;
    nodes.push(makeNode(partnerId, NODE_TYPES.PARTNER, p.name, { role: p.role, profileSlug: p.profileSlug }));
    edges.push(makeEdge(firm.slug, partnerId, REL_TYPES.CURRENT_PARTNER, p.role));
  });

  getSpinoutRelations(firmSlug).forEach(rel => {
    const relFirm = firms.find(f => f.slug === rel.firmSlug);
    if (!relFirm) return;
    nodes.push(makeNode(relFirm.slug, NODE_TYPES.FIRM, relFirm.name, { aum: relFirm.aum }));
    const label = `${rel.founders.join(', ')} (${rel.year})`;
    if (rel.direction === 'child') {
      edges.push(makeEdge(firm.slug, relFirm.slug, REL_TYPES.SPINOUT, label));
    } else {
      edges.push(makeEdge(relFirm.slug, firm.slug, REL_TYPES.SPINOUT, label));
    }
  });

  firm.holdings.slice(0, 12).forEach(h => {
    const companyId = `company:${h.name}`;
    nodes.push(makeNode(companyId, NODE_TYPES.COMPANY, h.name, { ticker: h.ticker }));
    edges.push(makeEdge(firm.slug, companyId, REL_TYPES.INVESTED_IN, h.ticker));
  });

  return dedupeGraph({ nodes, edges });
}

/**
 * Expands a single node the user clicked, returning ONLY the new
 * nodes/edges to merge in - the caller (visualization) is responsible
 * for merging and re-rendering. This is what keeps the graph
 * progressive rather than rendering the whole network up front.
 */
function expandNode(node) {
  const nodes = [];
  const edges = [];

  if (node.type === NODE_TYPES.PARTNER && node.profileSlug) {
    const profile = partnerProfiles[node.profileSlug];
    if (profile && profile.firmHistory) {
      profile.firmHistory.forEach(fh => {
        const prevFirm = firms.find(f => f.slug === fh.firmSlug);
        if (!prevFirm) return;
        nodes.push(makeNode(prevFirm.slug, NODE_TYPES.FIRM, prevFirm.name, { aum: prevFirm.aum }));
        const yearLabel = fh.startYear ? `${fh.role}, ${fh.startYear}${fh.endYear ? '–' + fh.endYear : '–present'}` : fh.role;
        edges.push(makeEdge(node.id, prevFirm.slug, REL_TYPES.PREVIOUSLY_AT, yearLabel));
      });
    }
    getPartnerBoardCompanies(node.profileSlug).slice(0, 8).forEach(name => {
      const companyId = `company:${name}`;
      nodes.push(makeNode(companyId, NODE_TYPES.COMPANY, name));
      edges.push(makeEdge(node.id, companyId, REL_TYPES.BOARD_SEAT, 'Board seat'));
    });
    getPartnerNotableInvestments(node.profileSlug).slice(0, 8).forEach(inv => {
      const companyId = `company:${inv.name}`;
      nodes.push(makeNode(companyId, NODE_TYPES.COMPANY, inv.name, { ticker: inv.ticker }));
      edges.push(makeEdge(node.id, companyId, REL_TYPES.INVESTED_IN, inv.ticker || 'Notable investment'));
    });
  }

  if (node.type === NODE_TYPES.FIRM) {
    getCurrentPartners(node.id).forEach(p => {
      const partnerId = p.profileSlug || `partner:${p.name}`;
      nodes.push(makeNode(partnerId, NODE_TYPES.PARTNER, p.name, { role: p.role, profileSlug: p.profileSlug }));
      edges.push(makeEdge(node.id, partnerId, REL_TYPES.CURRENT_PARTNER, p.role));
    });
    getPortfolioOverlap(node.id).forEach(ov => {
      const otherFirm = firms.find(f => f.slug === ov.firmSlug);
      if (!otherFirm) return;
      nodes.push(makeNode(otherFirm.slug, NODE_TYPES.FIRM, otherFirm.name, { aum: otherFirm.aum }));
      const label = `Connected through ${ov.companies.length} shared portfolio compan${ov.companies.length === 1 ? 'y' : 'ies'}`;
      edges.push(makeEdge(node.id, otherFirm.slug, REL_TYPES.PORTFOLIO_CONNECTION, label, { companies: ov.companies }));
    });
    getFormerPartnerBridges(node.id).forEach(bridge => {
      const otherFirm = firms.find(f => f.slug === bridge.firmSlug);
      if (!otherFirm) return;
      nodes.push(makeNode(otherFirm.slug, NODE_TYPES.FIRM, otherFirm.name, { aum: otherFirm.aum }));
      const names = bridge.people.map(p => p.name);
      const label = `Connected through ${names.length} former partner${names.length === 1 ? '' : 's'}: ${names.join(', ')}`;
      edges.push(makeEdge(node.id, otherFirm.slug, REL_TYPES.FORMER_PARTNER, label, { people: bridge.people }));
    });
    // One sector hub and one geo hub per expansion, so a firm click
    // adds a manageable amount rather than every sector at once -
    // clicking the hub itself reveals the real peer firms.
    const firm = firms.find(f => f.slug === node.id);
    if (firm && firm.sectors && firm.sectors[0]) {
      const sectorId = `sector:${firm.sectors[0]}`;
      nodes.push(makeNode(sectorId, NODE_TYPES.SECTOR, firm.sectors[0]));
      edges.push(makeEdge(node.id, sectorId, REL_TYPES.SECTOR_PEER, `Sector: ${firm.sectors[0]}`));
    }
    if (firm && firm.hq) {
      const country = getCountryFromHQ(firm.hq);
      if (country) {
        const geoId = `geo:${country}`;
        nodes.push(makeNode(geoId, NODE_TYPES.GEO, country));
        edges.push(makeEdge(node.id, geoId, REL_TYPES.GEO_PEER, `Headquartered in ${country}`));
      }
    }
  }

  if (node.type === NODE_TYPES.COMPANY) {
    const companyName = node.label;
    getCompanyHolders(companyName).forEach(f => {
      nodes.push(makeNode(f.slug, NODE_TYPES.FIRM, f.name, { aum: f.aum }));
      edges.push(makeEdge(node.id, f.slug, REL_TYPES.INVESTED_IN, f.name));
    });
    getCompanyBoardMembers(companyName).forEach(m => {
      nodes.push(makeNode(m.profileSlug, NODE_TYPES.PARTNER, m.name, { profileSlug: m.profileSlug }));
      edges.push(makeEdge(node.id, m.profileSlug, REL_TYPES.BOARD_SEAT, 'Board seat'));
    });
  }

  if (node.type === NODE_TYPES.SECTOR) {
    const sectorName = node.label;
    firms.filter(f => (f.sectors || []).includes(sectorName)).slice(0, 15).forEach(f => {
      nodes.push(makeNode(f.slug, NODE_TYPES.FIRM, f.name, { aum: f.aum }));
      edges.push(makeEdge(node.id, f.slug, REL_TYPES.SECTOR_PEER, `Both in ${sectorName}`));
    });
  }

  if (node.type === NODE_TYPES.GEO) {
    const country = node.label;
    firms.filter(f => getCountryFromHQ(f.hq) === country).slice(0, 15).forEach(f => {
      nodes.push(makeNode(f.slug, NODE_TYPES.FIRM, f.name, { aum: f.aum }));
      edges.push(makeEdge(node.id, f.slug, REL_TYPES.GEO_PEER, `Both headquartered in ${country}`));
    });
  }

  return dedupeGraph({ nodes, edges });
}

// Removes duplicate nodes/edges that can occur when multiple relations
// point to the same entity (e.g. two partners both linking back to
// the same previous firm).
function dedupeGraph({ nodes, edges }) {
  const seenNodes = new Map();
  nodes.forEach(n => { if (!seenNodes.has(n.id)) seenNodes.set(n.id, n); });
  const seenEdges = new Set();
  const dedupedEdges = edges.filter(e => {
    const key = `${e.source}|${e.target}|${e.relType}`;
    if (seenEdges.has(key)) return false;
    seenEdges.add(key);
    return true;
  });
  return { nodes: Array.from(seenNodes.values()), edges: dedupedEdges };
}
// ===== Additions below support the Relationship Graph explorer =====
REL_TYPES.SECTOR_PEER = 'sector_peer';
REL_TYPES.GEO_PEER = 'geo_peer';
REL_TYPES.BOARD_SEAT = 'board_seat';

NODE_TYPES.SECTOR = 'sector';
NODE_TYPES.GEO = 'geo';

function getSectorPeers(firmSlug, cap = 15) {
  const firm = firms.find(f => f.slug === firmSlug);
  if (!firm || !firm.sectors) return [];
  const overlaps = {};
  firm.sectors.forEach(sector => {
    firms.forEach(other => {
      if (other.slug === firmSlug) return;
      if ((other.sectors || []).includes(sector)) {
        if (!overlaps[other.slug]) overlaps[other.slug] = new Set();
        overlaps[other.slug].add(sector);
      }
    });
  });
  return Object.entries(overlaps)
    .map(([slug, sectors]) => ({ firmSlug: slug, sectors: Array.from(sectors) }))
    .sort((a, b) => b.sectors.length - a.sectors.length)
    .slice(0, cap);
}

function getGeoPeers(firmSlug, cap = 15) {
  const firm = firms.find(f => f.slug === firmSlug);
  if (!firm || !firm.hq) return [];
  const country = getCountryFromHQ(firm.hq);
  if (!country) return [];
  return firms
    .filter(f => f.slug !== firmSlug && getCountryFromHQ(f.hq) === country)
    .slice(0, cap)
    .map(f => ({ firmSlug: f.slug, country }));
}

function getFormerPartnerBridges(firmSlug) {
  const bridges = {};
  getCurrentPartners(firmSlug).forEach(p => {
    if (!p.profileSlug) return;
    const profile = partnerProfiles[p.profileSlug];
    if (!profile || !profile.firmHistory) return;
    profile.firmHistory.forEach(fh => {
      if (fh.firmSlug === firmSlug) return;
      if (!bridges[fh.firmSlug]) bridges[fh.firmSlug] = [];
      bridges[fh.firmSlug].push({ name: profile.name, role: fh.role, startYear: fh.startYear, endYear: fh.endYear });
    });
  });
  return Object.entries(bridges).map(([slug, people]) => ({ firmSlug: slug, people }));
}

function getPartnerBoardCompanies(partnerSlug) {
  const profile = partnerProfiles[partnerSlug];
  if (!profile || !profile.boardSeats) return [];
  return profile.boardSeats.map(seat => seat.split('(')[0].trim()).filter(Boolean);
}

function getPartnerNotableInvestments(partnerSlug) {
  const profile = partnerProfiles[partnerSlug];
  if (!profile || !profile.notableInvestments) return [];
  return profile.notableInvestments;
}

function getCompanyHolders(companyName) {
  return firms.filter(f => f.holdings.some(h => h.name === companyName));
}

function getCompanyBoardMembers(companyName) {
  return Object.entries(partnerProfiles)
    .filter(([slug, p]) => (p.boardSeats || []).some(seat => seat.split('(')[0].trim() === companyName))
    .map(([slug, p]) => ({ profileSlug: slug, name: p.name, firmSlug: p.firmSlug }));
}

function buildPartnerCenteredGraph(partnerSlug) {
  const profile = partnerProfiles[partnerSlug];
  if (!profile) return { nodes: [], edges: [] };

  const nodes = [makeNode(partnerSlug, NODE_TYPES.PARTNER, profile.name, { center: true, role: profile.title, profileSlug: partnerSlug })];
  const edges = [];

  const currentFirm = firms.find(f => f.slug === profile.firmSlug);
  if (currentFirm) {
    nodes.push(makeNode(currentFirm.slug, NODE_TYPES.FIRM, currentFirm.name, { aum: currentFirm.aum }));
    edges.push(makeEdge(currentFirm.slug, partnerSlug, REL_TYPES.CURRENT_PARTNER, profile.title));
  }

  (profile.firmHistory || []).forEach(fh => {
    const prevFirm = firms.find(f => f.slug === fh.firmSlug);
    if (!prevFirm) return;
    nodes.push(makeNode(prevFirm.slug, NODE_TYPES.FIRM, prevFirm.name, { aum: prevFirm.aum }));
    const yearLabel = fh.startYear ? `${fh.role}, ${fh.startYear}${fh.endYear ? '–' + fh.endYear : '–present'}` : fh.role;
    edges.push(makeEdge(partnerSlug, prevFirm.slug, REL_TYPES.PREVIOUSLY_AT, yearLabel));
  });

  getPartnerBoardCompanies(partnerSlug).slice(0, 8).forEach(name => {
    const companyId = `company:${name}`;
    nodes.push(makeNode(companyId, NODE_TYPES.COMPANY, name));
    edges.push(makeEdge(partnerSlug, companyId, REL_TYPES.BOARD_SEAT, 'Board seat'));
  });

  getPartnerNotableInvestments(partnerSlug).slice(0, 8).forEach(inv => {
    const companyId = `company:${inv.name}`;
    nodes.push(makeNode(companyId, NODE_TYPES.COMPANY, inv.name, { ticker: inv.ticker }));
    edges.push(makeEdge(partnerSlug, companyId, REL_TYPES.INVESTED_IN, inv.ticker || 'Notable investment'));
  });

  return dedupeGraph({ nodes, edges });
}

function buildCompanyCenteredGraph(companyName) {
  const companyId = `company:${companyName}`;
  const nodes = [makeNode(companyId, NODE_TYPES.COMPANY, companyName, { center: true })];
  const edges = [];

  getCompanyHolders(companyName).forEach(f => {
    nodes.push(makeNode(f.slug, NODE_TYPES.FIRM, f.name, { aum: f.aum }));
    edges.push(makeEdge(f.slug, companyId, REL_TYPES.INVESTED_IN, f.name));
  });

  getCompanyBoardMembers(companyName).forEach(m => {
    nodes.push(makeNode(m.profileSlug, NODE_TYPES.PARTNER, m.name, { profileSlug: m.profileSlug }));
    edges.push(makeEdge(m.profileSlug, companyId, REL_TYPES.BOARD_SEAT, 'Board seat'));
  });

  return dedupeGraph({ nodes, edges });
}

function buildGraphFor(entityType, id) {
  if (entityType === NODE_TYPES.FIRM) return buildInitialGraph(id);
  if (entityType === NODE_TYPES.PARTNER) return buildPartnerCenteredGraph(id);
  if (entityType === NODE_TYPES.COMPANY) return buildCompanyCenteredGraph(id.replace(/^company:/, ''));
  return { nodes: [], edges: [] };
}
