/**
 * GENERATE-SEO-PAGES.JS
 * ============================================================
 * Reads scripts/data.js fresh every run and generates real, static,
 * independently-indexable HTML pages for:
 *   - Every sector category, HQ location, and investment stage
 *   - Every individual firm
 *   - Every individual partner profile
 *   - Comparison pages for well-known firms sharing a sector
 * ...plus sitemap.xml and robots.txt.
 * ============================================================
 */

const fs = require('fs');
const path = require('path');

const { SECTOR_MAP, UNMAPPED_DESCRIPTOR_TAGS, LOCATION_MAP } = require('./taxonomy.js');
const { SECTOR_COPY, LOCATION_COPY, STAGE_COPY } = require('./page-copy.js');

const SITE_ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://thevcpowerboard.com';
const OUTPUT_DIR = SITE_ROOT;

function loadCombinedScripts(filenames) {
  const combinedCode = filenames
    .map(f => fs.readFileSync(path.join(SITE_ROOT, 'scripts', f), 'utf8'))
    .join('\n');
  const wrapped = `
    ${combinedCode}
    return { firms, partnerProfiles, firmStages, firmPerformance, firmGeography, newsItems, featuredFirm, computePowerScore, parseAumNumber, slugifyCompany, getScaleLabel };
  `;
  const fn = new Function(wrapped);
  return fn();
}

const CANONICAL_STAGES = [
  { slug: 'pre-seed', label: 'Pre-Seed', rawStage: 'Pre-Seed' },
  { slug: 'seed', label: 'Seed', rawStage: 'Seed' },
  { slug: 'series-a', label: 'Series A', rawStage: 'Series A' },
  { slug: 'series-b', label: 'Series B', rawStage: 'Series B' },
  { slug: 'growth', label: 'Growth', rawStage: 'Growth' },
  { slug: 'late-stage', label: 'Late Stage', rawStage: 'Late Stage' },
];

// Thin-content guard: a landing page with only 1-2 firms and generic
// intro copy carries little real SEO weight. Below this threshold,
// the page is simply not generated - the firms still appear
// everywhere else (their own firm page, sector pages, etc.).
const MIN_FIRMS_FOR_LOCATION_PAGE = 3;

function buildIndexes(data) {
  const { firms, firmStages } = data;
  const sectorIndex = {};
  Object.keys(SECTOR_MAP).forEach(slug => { sectorIndex[slug] = new Set(); });
  const rawTagToCanonical = {};
  Object.entries(SECTOR_MAP).forEach(([slug, cfg]) => {
    cfg.rawTags.forEach(raw => {
      if (!rawTagToCanonical[raw]) rawTagToCanonical[raw] = [];
      rawTagToCanonical[raw].push(slug);
    });
  });
  const unmappedSeen = new Set();
  firms.forEach(firm => {
    (firm.sectors || []).forEach(raw => {
      const canonicalSlugs = rawTagToCanonical[raw];
      if (canonicalSlugs) canonicalSlugs.forEach(slug => sectorIndex[slug].add(firm));
      else if (!UNMAPPED_DESCRIPTOR_TAGS.has(raw)) unmappedSeen.add(raw);
    });
  });
  if (unmappedSeen.size > 0) {
    console.warn('\n  Unmapped sector tags (add to taxonomy.js):');
    unmappedSeen.forEach(t => console.warn(`   - "${t}"`));
  }

  const locationIndex = {};
  Object.keys(LOCATION_MAP).forEach(slug => { locationIndex[slug] = new Set(); });
  const rawHqToCanonical = {};
  Object.entries(LOCATION_MAP).forEach(([slug, cfg]) => { cfg.rawHQs.forEach(raw => { rawHqToCanonical[raw] = slug; }); });
  const unmappedHq = new Set();
  firms.forEach(firm => {
    const slug = rawHqToCanonical[firm.hq];
    if (slug) locationIndex[slug].add(firm);
    else unmappedHq.add(firm.hq);
  });
  if (unmappedHq.size > 0) {
    console.warn('\n  Unmapped HQ locations (add to taxonomy.js):');
    unmappedHq.forEach(h => console.warn(`   - "${h}"`));
  }

  const stageIndex = {};
  CANONICAL_STAGES.forEach(s => { stageIndex[s.slug] = new Set(); });
  firms.forEach(firm => {
    const stages = firmStages[firm.slug] || [];
    CANONICAL_STAGES.forEach(s => { if (stages.includes(s.rawStage)) stageIndex[s.slug].add(firm); });
  });

  return { sectorIndex, locationIndex, stageIndex };
}

function getFirmCanonicalSectors(firm) {
  const matched = [];
  Object.entries(SECTOR_MAP).forEach(([slug, cfg]) => {
    if ((firm.sectors || []).some(raw => cfg.rawTags.includes(raw))) matched.push(slug);
  });
  return matched;
}
function getFirmPrimarySector(firm) {
  const sectors = getFirmCanonicalSectors(firm);
  return sectors.length > 0 ? sectors[0] : null;
}
function getFirmCanonicalLocation(firm) {
  const entry = Object.entries(LOCATION_MAP).find(([slug, cfg]) => cfg.rawHQs.includes(firm.hq));
  return entry ? entry[0] : null;
}

const COMPARISON_POOL_SIZE = 20;

function computeComparisonPairs(firms, computePowerScore) {
  const pool = [...firms].sort((a, b) => computePowerScore(b) - computePowerScore(a)).slice(0, COMPARISON_POOL_SIZE);
  const pairs = [];
  for (let i = 0; i < pool.length; i++) {
    for (let j = i + 1; j < pool.length; j++) {
      const sectorA = getFirmPrimarySector(pool[i]);
      const sectorB = getFirmPrimarySector(pool[j]);
      if (sectorA && sectorA === sectorB) {
        const [firmA, firmB] = pool[i].slug < pool[j].slug ? [pool[i], pool[j]] : [pool[j], pool[i]];
        pairs.push({ firmA, firmB, sectorSlug: sectorA });
      }
    }
  }
  return pairs;
}

function parseAumBillions(aumStr) {
  if (!aumStr) return 0;
  let m = aumStr.match(/[$£€]([0-9.]+)B/);
  if (m) return parseFloat(m[1]);
  m = aumStr.match(/[$£€]([0-9.]+)M/);
  if (m) return parseFloat(m[1]) / 1000;
  return 0;
}
function formatCombinedAum(billions) {
  if (billions >= 1000) return '$' + (billions / 1000).toFixed(2) + 'T+';
  return '$' + billions.toFixed(1) + 'B+';
}
function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function appHashLink(slug) { return `${SITE_URL}/#${slug}`; }
function appPartnerHashLink(slug) { return `${SITE_URL}/#partner/${slug}`; }

function renderPage({ depth, title, description, canonicalPath, ogType, breadcrumbs, h1, bodyHtml, jsonLd, extraJsonLd }) {
  const assetPrefix = '../'.repeat(depth);
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const breadcrumbHtml = breadcrumbs.map((b, i) => i === breadcrumbs.length - 1
    ? `<span aria-current="page">${escapeHtml(b.label)}</span>`
    : `<a href="${b.href}">${escapeHtml(b.label)}</a>`
  ).join(' <span class="crumb-sep">/</span> ');

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.label, item: b.absoluteUrl })),
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${canonicalUrl}">

<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:site_name" content="The VC Power Board">

<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">

<link rel="stylesheet" href="${assetPrefix}styles/main.css">
<link rel="stylesheet" href="${assetPrefix}styles/firm-cards.css">
<link rel="stylesheet" href="${assetPrefix}styles/firm-detail.css">
<link rel="stylesheet" href="${assetPrefix}styles/partner-profile.css">
<link rel="stylesheet" href="${assetPrefix}styles/filters.css">
<link rel="stylesheet" href="${assetPrefix}styles/compare.css">
<link rel="stylesheet" href="${assetPrefix}styles/responsive.css">

<script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
${extraJsonLd ? `<script type="application/ld+json">${JSON.stringify(extraJsonLd)}</script>` : ''}

<style>
  .seo-breadcrumb { font-family: var(--mono); font-size: 12px; color: var(--ink-dim); padding: 20px 0 0; }
  .seo-breadcrumb a { color: var(--gold); text-decoration: none; }
  .seo-breadcrumb a:hover { color: var(--gold-bright); }
  .seo-breadcrumb .crumb-sep { color: var(--hairline); margin: 0 4px; }
  .seo-h1 { font-family: var(--serif); font-weight: 600; font-size: clamp(32px, 4.5vw, 48px); line-height: 1.1; margin: 16px 0 20px; }
  .seo-intro { font-size: 16px; line-height: 1.65; color: var(--ink-dim); max-width: 760px; margin-bottom: 16px; }
  .seo-stats { font-family: var(--mono); font-size: 14px; color: var(--ink); background: var(--surface); border: 1px solid var(--hairline); border-radius: 6px; padding: 16px 20px; margin: 24px 0 40px; display: flex; flex-wrap: wrap; gap: 24px; }
  .seo-stats strong { color: var(--gold-bright); }
  .seo-related { margin: 40px 0; padding-top: 28px; border-top: 1px solid var(--hairline); }
  .seo-related h2 { font-family: var(--serif); font-size: 20px; margin-bottom: 14px; }
  .seo-related-links { display: flex; flex-wrap: wrap; gap: 8px; }
  .seo-related-links a { font-family: var(--mono); font-size: 12.5px; color: var(--ink-dim); background: var(--surface); border: 1px solid var(--hairline); border-radius: 20px; padding: 8px 16px; text-decoration: none; transition: border-color 0.15s ease, color 0.15s ease; }
  .seo-related-links a:hover { border-color: var(--gold); color: var(--gold-bright); }
  .seo-nav-simple { display: flex; justify-content: space-between; align-items: center; padding: 14px 24px; max-width: 1080px; margin: 0 auto; border-bottom: 1px solid var(--hairline); }
  .seo-nav-simple a.brand { font-family: var(--mono); font-size: 15px; font-weight: 500; color: var(--ink); text-decoration: none; }
  .seo-cta-button { display: inline-block; font-family: var(--mono); font-size: 14px; font-weight: 600; color: var(--bg); background: var(--gold); text-decoration: none; border-radius: 4px; padding: 13px 26px; margin: 20px 0 8px; transition: background 0.15s ease; }
  .seo-cta-button:hover { background: var(--gold-bright); }
</style>
</head>
<body>
  <nav class="seo-nav-simple">
    <a class="brand" href="${assetPrefix}index.html">The VC Power Board</a>
    <a class="back-to-app" href="${SITE_URL}/#" style="font-family: var(--mono); font-size: 13px; color: var(--gold); text-decoration: none;">Explore the Full Rankings →</a>
  </nav>
  <div class="wrap">
    <nav class="seo-breadcrumb" aria-label="Breadcrumb">${breadcrumbHtml}</nav>
    ${bodyHtml}
  </div>
  <footer style="border-top: 1px solid var(--hairline); padding: 36px 0 60px; margin-top: 40px;">
    <div class="wrap">
      <p style="font-size: 13px; color: var(--ink-dim);">The VC Power Board tracks real, sourced, publicly-verifiable data on venture capital firms. See our <a href="${assetPrefix}index.html#methodologyAnchor" style="color: var(--gold);">Methodology page</a> for how figures are compiled.</p>
    </div>
  </footer>
</body>
</html>`;
}

function renderFirmCard(firm) {
  const sectorsDisplay = (firm.sectors || []).slice(0, 4).map(s => `<span class="compare-sector-tag">${escapeHtml(s)}</span>`).join('');
  return `
    <div class="firm">
      <div class="firm-head">
        <div>
          <div class="firm-rank">${escapeHtml(firm.hq || '')}</div>
          <div class="firm-name"><a href="${appHashLink(firm.slug)}" class="firm-link">${escapeHtml(firm.name)}</a></div>
          <div class="firm-meta">Founded ${firm.founded || '-'}</div>
        </div>
        <div class="firm-aum"><div class="num">${escapeHtml(firm.aum || '')}</div><div class="lbl">Assets Managed</div></div>
      </div>
      <div class="firm-thesis">${escapeHtml((firm.signatureExit || '').slice(0, 220))}${(firm.signatureExit || '').length > 220 ? '…' : ''}</div>
      <div style="margin-top: 12px;">${sectorsDisplay}</div>
      <a href="${appHashLink(firm.slug)}" class="firm-page-link">View Full Firm Profile →</a>
    </div>`;
}

function buildItemListJsonLd(firmsArr, pageUrl) {
  return {
    '@context': 'https://schema.org', '@type': 'ItemList', url: pageUrl, numberOfItems: firmsArr.length,
    itemListElement: firmsArr.slice(0, 50).map((firm, i) => ({
      '@type': 'ListItem', position: i + 1,
      item: { '@type': 'Organization', name: firm.name, url: appHashLink(firm.slug), description: (firm.thesis || '').slice(0, 200) },
    })),
  };
}

/* Every path this run produced. pruneOrphanPages() treats it as the
   complete definition of what should exist, so anything it does not
   contain is a leftover from an earlier run. */
const writtenPaths = new Set();

function writeFile(relPath, content) {
  const fullPath = path.join(OUTPUT_DIR, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  writtenPaths.add(relPath.split(path.sep).join('/'));
}

/* ============================================================
   PRUNING
   ------------------------------------------------------------
   The generator only ever wrote pages. It never removed them, so
   every firm deleted from the dataset, every partner dropped, and
   every comparison that fell out of the top-20 pool left a live,
   indexable page behind - serving a Power Score and an AUM figure
   for something no longer on the board. That accumulated to 152
   stale directories before this existed.

   Deleting files from CI deserves paranoia, so the guards below
   are about the INPUT, not the output. A run that legitimately
   drops 63% of the comparison pages (which is what adding 40
   firms did) must still prune; a run where data-firms.js failed
   to parse must not. Only the input check can tell those apart -
   an output-ratio guard would refuse the real case and allow the
   catastrophic one if the data happened to shrink quietly.
   ============================================================ */

// Directories whose contents are ENTIRELY generated by this script.
// Nothing hand-written may live here or it will be pruned.
const MANAGED_PAGE_DIRS = ['firms', 'people', 'compare', 'companies', 'locations', 'stages'];

// If the inputs come in under these, something is broken upstream
// and nothing is pruned. Well below the real counts (401 / 914),
// so an ordinary edit never trips them.
const MIN_EXPECTED_FIRMS = 100;
const MIN_EXPECTED_PARTNERS = 200;

function pruneOrphanPages(firms, partnerProfiles) {
  const firmCount = Array.isArray(firms) ? firms.length : 0;
  const partnerCount = partnerProfiles ? Object.keys(partnerProfiles).length : 0;

  if (firmCount < MIN_EXPECTED_FIRMS || partnerCount < MIN_EXPECTED_PARTNERS) {
    console.warn(
      `\n   PRUNE SKIPPED: input looks wrong (${firmCount} firms, ${partnerCount} partners; ` +
      `expected at least ${MIN_EXPECTED_FIRMS} and ${MIN_EXPECTED_PARTNERS}). ` +
      `No pages were deleted. Check the data files before trusting this run.`
    );
    return { skipped: true, removed: [] };
  }

  const removed = [];
  MANAGED_PAGE_DIRS.forEach(family => {
    const familyDir = path.join(OUTPUT_DIR, family);
    if (!fs.existsSync(familyDir)) return;

    const entries = fs.readdirSync(familyDir, { withFileTypes: true })
      .filter(e => e.isDirectory());

    const kept = entries.filter(e => writtenPaths.has(`${family}/${e.name}/index.html`));

    /* Generating nothing for a family means that family's inputs are
       missing, not that every one of its pages is obsolete. */
    if (kept.length === 0) {
      if (entries.length > 0) {
        console.warn(`   PRUNE SKIPPED for ${family}/: this run generated none of its ${entries.length} pages.`);
      }
      return;
    }

    entries.forEach(e => {
      if (writtenPaths.has(`${family}/${e.name}/index.html`)) return;

      /* Resolve and confirm the target is still inside the family
         directory. A slug carrying a path separator would otherwise
         let a delete escape upward. */
      const target = path.resolve(familyDir, e.name);
      if (path.dirname(target) !== path.resolve(familyDir)) {
        console.warn(`   PRUNE REFUSED for suspicious path: ${family}/${e.name}`);
        return;
      }

      fs.rmSync(target, { recursive: true, force: true });
      removed.push(`${family}/${e.name}`);
    });
  });

  return { skipped: false, removed };
}

function computeFirmPeers(firm, allFirms, firmStages, computePowerScore, count = 4) {
  const sectors = getFirmCanonicalSectors(firm);
  const primarySector = sectors[0] || null;
  const sectorPeers = primarySector
    ? allFirms.filter(f => f.slug !== firm.slug && getFirmCanonicalSectors(f).includes(primarySector))
        .sort((a, b) => computePowerScore(b) - computePowerScore(a)).slice(0, count)
    : [];

  const rawLocSlug = getFirmCanonicalLocation(firm);
  const locSlug = (rawLocSlug && allFirms.filter(f => getFirmCanonicalLocation(f) === rawLocSlug).length >= MIN_FIRMS_FOR_LOCATION_PAGE) ? rawLocSlug : null;
  const locationPeers = locSlug
    ? allFirms.filter(f => f.slug !== firm.slug && getFirmCanonicalLocation(f) === locSlug)
        .sort((a, b) => computePowerScore(b) - computePowerScore(a)).slice(0, count)
    : [];

  return { primarySector, sectorPeers, locSlug, locationPeers };
}

function renderFirmPage(firm, allFirms, data, comparisonsByFirmSlug) {
  const { firmStages, partnerProfiles, computePowerScore } = data;
  const powerScore = computePowerScore(firm);
  const pageUrl = `${SITE_URL}/firms/${firm.slug}/`;
  const { primarySector, sectorPeers, locSlug, locationPeers } = computeFirmPeers(firm, allFirms, firmStages, computePowerScore);
  const myComparisons = comparisonsByFirmSlug[firm.slug] || [];

  const leadershipHtml = (firm.leadership || []).map(l => {
    const hasProfile = l.profileSlug && partnerProfiles[l.profileSlug];
    return `<div class="leader-card ${hasProfile ? 'has-profile' : ''}">
      <div class="leader-name">${hasProfile ? `<a href="../../people/${l.profileSlug}/" style="color: inherit; text-decoration: none;">${escapeHtml(l.name)}</a>` : escapeHtml(l.name)}</div>
      <div class="leader-role">${escapeHtml(l.role)}</div>
    </div>`;
  }).join('');

  const timelineHtml = (firm.timeline || []).map(t => `
    <div class="timeline-item">
      <div class="timeline-year">${escapeHtml(t.year)}</div>
      <div class="timeline-event">${escapeHtml(t.event)}</div>
    </div>`).join('');

  const holdingsHtml = (firm.holdings || []).length > 0 ? `
    <h2 class="detail-subhead">Notable Public Portfolio Companies</h2>
    <ul class="partner-list">
      ${firm.holdings.map(h => `<li>${escapeHtml(h.name)} <span style="font-family: var(--mono); color: var(--gold);">${escapeHtml(h.ticker || '')}</span></li>`).join('')}
    </ul>` : '';

  const sectorTagsHtml = (firm.sectors || []).map(s => `<span class="compare-sector-tag">${escapeHtml(s)}</span>`).join(' ');

  const peerSectionHtml = (sectorPeers.length > 0 || locationPeers.length > 0) ? `
    <div class="seo-related">
      <h2>Explore Related Firms</h2>
      ${sectorPeers.length > 0 ? `
        <p style="font-size: 13px; color: var(--ink-dim); margin-bottom: 8px;">More ${SECTOR_MAP[primarySector].label} firms:</p>
        <div class="seo-related-links">${sectorPeers.map(p => `<a href="../${p.slug}/">${escapeHtml(p.name)}</a>`).join('')}</div>
        <a href="../../companies/${primarySector}/" class="firm-page-link" style="margin-top: 10px; display: inline-block;">See all ${SECTOR_MAP[primarySector].label} firms →</a>
      ` : ''}
      ${locationPeers.length > 0 ? `
        <p style="font-size: 13px; color: var(--ink-dim); margin: 20px 0 8px;">More firms in ${LOCATION_MAP[locSlug].label}:</p>
        <div class="seo-related-links">${locationPeers.map(p => `<a href="../${p.slug}/">${escapeHtml(p.name)}</a>`).join('')}</div>
        <a href="../../locations/${locSlug}/" class="firm-page-link" style="margin-top: 10px; display: inline-block;">See all ${LOCATION_MAP[locSlug].label} firms →</a>
      ` : ''}
    </div>` : '';

  const orgJsonLd = {
    '@context': 'https://schema.org', '@type': 'Organization', name: firm.name, url: firm.website,
    description: (firm.thesis || '').slice(0, 300), foundingDate: String(firm.founded || ''), address: firm.hq,
  };

  const comparisonsHtml = myComparisons.length > 0 ? `
    <div class="seo-related">
      <h2>Compared To</h2>
      <div class="seo-related-links">
        ${myComparisons.map(c => `<a href="../../compare/${c.pairSlug}/">vs ${escapeHtml(c.otherName)}</a>`).join('')}
      </div>
    </div>` : '';

  const bodyHtml = `
    <h1 class="seo-h1">${escapeHtml(firm.name)}</h1>
    <p class="seo-intro">${escapeHtml(firm.thesis || '')}</p>
    <div class="seo-stats">
      <span><strong>${escapeHtml(firm.aum || '')}</strong> AUM</span>
      <span><strong>${powerScore}</strong>/100 Power Score™</span>
      <span><strong>${firm.founded || '-'}</strong> Founded</span>
      <span><strong>${escapeHtml(firm.hq || '')}</strong></span>
    </div>
    <div style="margin-bottom: 28px;">${sectorTagsHtml}</div>
    <a href="${appHashLink(firm.slug)}" class="seo-cta-button">View Live Interactive Profile →</a>
    ${firm.website ? `<a href="${firm.website}" target="_blank" rel="noopener noreferrer" style="margin-left: 12px; font-family: var(--mono); font-size: 13px; color: var(--gold);">Visit ${escapeHtml(firm.name)}'s Website ↗</a>` : ''}

    <h2 class="detail-subhead" style="margin-top: 36px;">Signature Exit</h2>
    <p style="font-size: 14.5px; line-height: 1.6; color: var(--ink-dim); max-width: 680px;">${escapeHtml(firm.signatureExit || '')}</p>

    ${leadershipHtml ? `<h2 class="detail-subhead">Key Partners &amp; Leadership</h2><div class="leadership-grid">${leadershipHtml}</div>` : ''}
    ${timelineHtml ? `<h2 class="detail-subhead">Firm Timeline</h2><div class="timeline">${timelineHtml}</div>` : ''}
    ${holdingsHtml}
    ${peerSectionHtml}
    ${comparisonsHtml}
  `;

  return renderPage({
    depth: 2,
    title: `${firm.name} - Power Score ${powerScore}/100 | The VC Power Board`,
    description: `${firm.name}: ${escapeHtml(firm.aum || '')} AUM, founded ${firm.founded || ''}, headquartered in ${firm.hq || ''}. Real, sourced venture capital firm data - Power Score ${powerScore}/100.`,
    canonicalPath: `/firms/${firm.slug}/`,
    ogType: 'website',
    breadcrumbs: [
      { label: 'Home', href: `../../index.html`, absoluteUrl: `${SITE_URL}/` },
      { label: 'Firms', href: `../index.html`, absoluteUrl: `${SITE_URL}/firms/` },
      { label: firm.name, href: '', absoluteUrl: pageUrl },
    ],
    h1: firm.name,
    bodyHtml,
    jsonLd: orgJsonLd,
  });
}

function renderPartnerPage(slug, partner, firmsBySlug, allPartnerEntries) {
  const pageUrl = `${SITE_URL}/people/${slug}/`;
  const firm = firmsBySlug[partner.firmSlug];

  const colleagues = allPartnerEntries.filter(([otherSlug, p]) => otherSlug !== slug && p.firmSlug === partner.firmSlug);
  const colleaguesHtml = (colleagues.length > 0 && firm) ? `
    <div class="seo-related">
      <h2>Other Partners at ${escapeHtml(firm.name)}</h2>
      <div class="seo-related-links">
        ${colleagues.map(([cSlug, c]) => `<a href="../${cSlug}/">${escapeHtml(c.name)}</a>`).join('')}
      </div>
    </div>` : '';

  const listSection = (title, arr) => (arr && arr.length > 0)
    ? `<h2 class="detail-subhead">${title}</h2><ul class="partner-list">${arr.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul>`
    : '';

  const notableInvestmentsHtml = (partner.notableInvestments || []).length > 0 ? `
    <h2 class="detail-subhead">Notable Investments</h2>
    <div>${partner.notableInvestments.map(inv => `<span class="partner-investment-chip">${escapeHtml(inv.name)}${inv.ticker ? ` <span class="ticker-tag">${escapeHtml(inv.ticker)}</span>` : ''}</span>`).join('')}</div>
  ` : '';

  const timelineHtml = (partner.careerTimeline || []).length > 0 ? `
    <h2 class="detail-subhead">Career Timeline</h2>
    <div class="timeline">${partner.careerTimeline.map(t => `<div class="timeline-item"><div class="timeline-year">${escapeHtml(t.year)}</div><div class="timeline-event">${escapeHtml(t.event)}</div></div>`).join('')}</div>
  ` : '';

  const sourcesHtml = (partner.sources || []).length > 0 ? `
    <h2 class="detail-subhead">Sources &amp; References</h2>
    <div class="partner-source-list">${partner.sources.map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.label)} ↗</a>`).join('')}</div>
  ` : '';

  const personJsonLd = {
    '@context': 'https://schema.org', '@type': 'Person', name: partner.name, jobTitle: partner.title,
    description: (partner.biography || '').slice(0, 300),
    worksFor: firm ? { '@type': 'Organization', name: firm.name, url: firm.website } : undefined,
  };

  const bodyHtml = `
    <h1 class="seo-h1">${escapeHtml(partner.name)}</h1>
    <p class="seo-intro">${escapeHtml(partner.title || '')}${firm ? ` at <a href="../../firms/${firm.slug}/" style="color: var(--gold);">${escapeHtml(firm.name)}</a>` : ''}${partner.joinedYear ? ` · Joined ${partner.joinedYear}` : ''}</p>
    <a href="${appPartnerHashLink(slug)}" class="seo-cta-button">View Live Interactive Profile →</a>

    <h2 class="detail-subhead" style="margin-top: 36px;">Biography</h2>
    <p class="partner-bio">${escapeHtml(partner.biography || '')}</p>

    ${listSection('Education', partner.education)}
    ${listSection('Previous Experience', partner.previousExperience)}
    ${notableInvestmentsHtml}
    ${listSection('Board Seats', partner.boardSeats)}
    ${timelineHtml}
    ${sourcesHtml}
    ${colleaguesHtml}
  `;

  return renderPage({
    depth: 2,
    title: `${partner.name} - ${partner.title || 'Partner'}${firm ? ` at ${firm.name}` : ''} | The VC Power Board`,
    description: `${partner.name} is ${partner.title || 'a partner'}${firm ? ` at ${firm.name}` : ''}. Real, sourced background, career history, and notable investments.`,
    canonicalPath: `/people/${slug}/`,
    ogType: 'profile',
    breadcrumbs: [
      { label: 'Home', href: `../../index.html`, absoluteUrl: `${SITE_URL}/` },
      { label: 'People', href: `../index.html`, absoluteUrl: `${SITE_URL}/people/` },
      { label: partner.name, href: '', absoluteUrl: pageUrl },
    ],
    h1: partner.name,
    bodyHtml,
    jsonLd: personJsonLd,
  });
}

function renderComparePage(firmA, firmB, sectorSlug, computePowerScore) {
  const pairSlug = `${firmA.slug}-vs-${firmB.slug}`;
  const pageUrl = `${SITE_URL}/compare/${pairSlug}/`;
  const scoreA = computePowerScore(firmA);
  const scoreB = computePowerScore(firmB);
  const sectorLabel = SECTOR_MAP[sectorSlug].label;

  const rows = [
    ['Power Score™', `${scoreA}/100`, `${scoreB}/100`],
    ['Assets Managed', firmA.aum || '-', firmB.aum || '-'],
    ['Founded', firmA.founded || '-', firmB.founded || '-'],
    ['Headquarters', firmA.hq || '-', firmB.hq || '-'],
    ['Sectors', (firmA.sectors || []).join(', '), (firmB.sectors || []).join(', ')],
  ];

  const tableRowsHtml = rows.map(([label, a, b]) => `
    <tr>
      <td class="row-label">${escapeHtml(label)}</td>
      <td>${escapeHtml(a)}</td>
      <td>${escapeHtml(b)}</td>
    </tr>`).join('');

  const bodyHtml = `
    <h1 class="seo-h1">${escapeHtml(firmA.name)} vs ${escapeHtml(firmB.name)}</h1>
    <p class="seo-intro">A side-by-side comparison of two ${escapeHtml(sectorLabel)} investors: ${escapeHtml(firmA.name)} (Power Score ${scoreA}/100) and ${escapeHtml(firmB.name)} (Power Score ${scoreB}/100), both ranked among the most active firms tracked in this category.</p>

    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead><tr><th scope="col"></th><th scope="col" class="firm-col-name">${escapeHtml(firmA.name)}</th><th scope="col" class="firm-col-name">${escapeHtml(firmB.name)}</th></tr></thead>
        <tbody>${tableRowsHtml}</tbody>
      </table>
    </div>

    <h2 class="detail-subhead" style="margin-top: 32px;">${escapeHtml(firmA.name)}</h2>
    <p style="font-size: 14.5px; line-height: 1.6; color: var(--ink-dim); max-width: 680px;">${escapeHtml(firmA.thesis || '')}</p>
    <a href="../../firms/${firmA.slug}/" class="firm-page-link">View full ${escapeHtml(firmA.name)} profile →</a>

    <h2 class="detail-subhead" style="margin-top: 28px;">${escapeHtml(firmB.name)}</h2>
    <p style="font-size: 14.5px; line-height: 1.6; color: var(--ink-dim); max-width: 680px;">${escapeHtml(firmB.thesis || '')}</p>
    <a href="../../firms/${firmB.slug}/" class="firm-page-link">View full ${escapeHtml(firmB.name)} profile →</a>

    <div class="seo-related">
      <h2>More ${escapeHtml(sectorLabel)} Firms</h2>
      <a href="../../companies/${sectorSlug}/" class="firm-page-link">See all ${escapeHtml(sectorLabel)} firms →</a>
    </div>
  `;

  const comparePageJsonLd = {
    '@context': 'https://schema.org', '@type': 'WebPage', url: pageUrl,
    name: `${firmA.name} vs ${firmB.name}`,
    mentions: [
      { '@type': 'Organization', name: firmA.name, url: firmA.website },
      { '@type': 'Organization', name: firmB.name, url: firmB.website },
    ],
  };

  return renderPage({
    depth: 2,
    title: `${firmA.name} vs ${firmB.name}: Compared | The VC Power Board`,
    description: `Compare ${firmA.name} and ${firmB.name} - AUM, Power Score, founding year, headquarters, and sector focus, side by side with real sourced data.`,
    canonicalPath: `/compare/${pairSlug}/`,
    ogType: 'website',
    breadcrumbs: [
      { label: 'Home', href: `../../index.html`, absoluteUrl: `${SITE_URL}/` },
      { label: 'Compare', href: `../index.html`, absoluteUrl: `${SITE_URL}/compare/` },
      { label: `${firmA.name} vs ${firmB.name}`, href: '', absoluteUrl: pageUrl },
    ],
    h1: `${firmA.name} vs ${firmB.name}`,
    bodyHtml,
    jsonLd: comparePageJsonLd,
  });
}

function main() {
const data = loadCombinedScripts(['data-meta.js', 'data-partners.js', 'data-partners-1.js', 'data-partners-2.js', 'data-partners-3.js', 'data-partners-4.js', 'data-partners-5.js', 'data-partners-6.js', 'data-firms.js', 'utilities.js', 'powerscore.js']);
  const { firms, partnerProfiles } = data;
  const firmsBySlug = {};
  firms.forEach(f => { firmsBySlug[f.slug] = f; });

  const { sectorIndex, locationIndex, stageIndex } = buildIndexes(data);
  const allGeneratedUrls = [];

  Object.entries(SECTOR_MAP).forEach(([slug, cfg]) => {
    const firmsArr = [...sectorIndex[slug]].sort((a, b) => parseAumBillions(b.aum) - parseAumBillions(a.aum));
    if (firmsArr.length === 0) return;
    const combinedAum = firmsArr.reduce((sum, f) => sum + parseAumBillions(f.aum), 0);
    const pageUrl = `${SITE_URL}/companies/${slug}/`;
    const relatedSlugs = Object.keys(SECTOR_MAP).filter(s => s !== slug).slice(0, 6);
    const bodyHtml = `
      <h1 class="seo-h1">${cfg.label} Venture Capital Firms</h1>
      <p class="seo-intro">${escapeHtml(SECTOR_COPY[slug] || '')}</p>
      <div class="seo-stats"><span><strong>${firmsArr.length}</strong> firms tracked</span><span><strong>${formatCombinedAum(combinedAum)}</strong> combined AUM</span></div>
      <div class="firms">${firmsArr.map(renderFirmCard).join('')}</div>
      <div class="seo-related"><h2>Related Categories</h2><div class="seo-related-links">${relatedSlugs.map(s => `<a href="../${s}/">${escapeHtml(SECTOR_MAP[s].label)}</a>`).join('')}</div></div>
    `;
    writeFile(`companies/${slug}/index.html`, renderPage({
      depth: 2, title: `Top ${cfg.label} Venture Capital Firms | The VC Power Board`,
      description: `${firmsArr.length} real, verified venture capital firms investing in ${cfg.description}, ranked by assets under management.`,
      canonicalPath: `/companies/${slug}/`, ogType: 'website',
      breadcrumbs: [{ label: 'Home', href: `../../index.html`, absoluteUrl: `${SITE_URL}/` }, { label: 'Companies', href: `../index.html`, absoluteUrl: `${SITE_URL}/companies/` }, { label: cfg.label, href: '', absoluteUrl: pageUrl }],
      h1: `${cfg.label} Venture Capital Firms`, bodyHtml, jsonLd: buildItemListJsonLd(firmsArr, pageUrl),
    }));
    allGeneratedUrls.push({ url: pageUrl, priority: '0.8' });
  });
  {
    const nonEmpty = Object.entries(SECTOR_MAP).filter(([slug]) => sectorIndex[slug].size > 0);
    const bodyHtml = `<h1 class="seo-h1">Venture Capital Firms by Category</h1><p class="seo-intro">Every sector below links to a dedicated page ranking the real, verified venture capital firms actively investing in that space.</p><div class="firms">${nonEmpty.map(([slug, cfg]) => `<div class="firm"><div class="firm-name"><a href="${slug}/" class="firm-link">${escapeHtml(cfg.label)}</a></div><div class="firm-meta">${sectorIndex[slug].size} firms tracked</div></div>`).join('')}</div>`;
    writeFile('companies/index.html', renderPage({ depth: 1, title: 'Venture Capital Firms by Category | The VC Power Board', description: 'Browse every venture capital sector tracked on The VC Power Board.', canonicalPath: '/companies/', ogType: 'website', breadcrumbs: [{ label: 'Home', href: '../index.html', absoluteUrl: `${SITE_URL}/` }, { label: 'Companies', href: '', absoluteUrl: `${SITE_URL}/companies/` }], h1: 'Venture Capital Firms by Category', bodyHtml, jsonLd: null }));
    allGeneratedUrls.push({ url: `${SITE_URL}/companies/`, priority: '0.9' });
  }

  Object.entries(LOCATION_MAP).forEach(([slug, cfg]) => {
    const firmsArr = [...locationIndex[slug]].sort((a, b) => parseAumBillions(b.aum) - parseAumBillions(a.aum));
    if (firmsArr.length < MIN_FIRMS_FOR_LOCATION_PAGE) return;
    const combinedAum = firmsArr.reduce((sum, f) => sum + parseAumBillions(f.aum), 0);
    const pageUrl = `${SITE_URL}/locations/${slug}/`;
    const relatedSlugs = Object.keys(LOCATION_MAP).filter(s => s !== slug && locationIndex[s].size >= MIN_FIRMS_FOR_LOCATION_PAGE).slice(0, 6);
    const bodyHtml = `
      <h1 class="seo-h1">${cfg.label} Venture Capital Firms</h1>
      <p class="seo-intro">${escapeHtml(LOCATION_COPY[slug] || '')}</p>
      <div class="seo-stats"><span><strong>${firmsArr.length}</strong> firms tracked</span><span><strong>${formatCombinedAum(combinedAum)}</strong> combined AUM</span></div>
      <div class="firms">${firmsArr.map(renderFirmCard).join('')}</div>
      <div class="seo-related"><h2>Other Locations</h2><div class="seo-related-links">${relatedSlugs.map(s => `<a href="../${s}/">${escapeHtml(LOCATION_MAP[s].label)}</a>`).join('')}</div></div>
    `;
    writeFile(`locations/${slug}/index.html`, renderPage({
      depth: 2, title: `Top ${cfg.label} Venture Capital Firms | The VC Power Board`,
      description: `${firmsArr.length} real, verified venture capital firms headquartered in ${cfg.label}, ranked by assets under management.`,
      canonicalPath: `/locations/${slug}/`, ogType: 'website',
      breadcrumbs: [{ label: 'Home', href: `../../index.html`, absoluteUrl: `${SITE_URL}/` }, { label: 'Locations', href: `../index.html`, absoluteUrl: `${SITE_URL}/locations/` }, { label: cfg.label, href: '', absoluteUrl: pageUrl }],
      h1: `${cfg.label} Venture Capital Firms`, bodyHtml, jsonLd: buildItemListJsonLd(firmsArr, pageUrl),
    }));
    allGeneratedUrls.push({ url: pageUrl, priority: '0.7' });
  });
  {
    const nonEmpty = Object.entries(LOCATION_MAP).filter(([slug]) => locationIndex[slug].size >= MIN_FIRMS_FOR_LOCATION_PAGE);
    const bodyHtml = `<h1 class="seo-h1">Venture Capital Firms by Location</h1><p class="seo-intro">Venture capital remains geographically concentrated even in a remote-first era.</p><div class="firms">${nonEmpty.map(([slug, cfg]) => `<div class="firm"><div class="firm-name"><a href="${slug}/" class="firm-link">${escapeHtml(cfg.label)}</a></div><div class="firm-meta">${locationIndex[slug].size} firms tracked</div></div>`).join('')}</div>`;
    writeFile('locations/index.html', renderPage({ depth: 1, title: 'Venture Capital Firms by Location | The VC Power Board', description: 'Browse venture capital firms by headquarters location.', canonicalPath: '/locations/', ogType: 'website', breadcrumbs: [{ label: 'Home', href: '../index.html', absoluteUrl: `${SITE_URL}/` }, { label: 'Locations', href: '', absoluteUrl: `${SITE_URL}/locations/` }], h1: 'Venture Capital Firms by Location', bodyHtml, jsonLd: null }));
    allGeneratedUrls.push({ url: `${SITE_URL}/locations/`, priority: '0.9' });
  }

  CANONICAL_STAGES.forEach(({ slug, label }) => {
    const firmsArr = [...stageIndex[slug]].sort((a, b) => parseAumBillions(b.aum) - parseAumBillions(a.aum));
    if (firmsArr.length === 0) return;
    const combinedAum = firmsArr.reduce((sum, f) => sum + parseAumBillions(f.aum), 0);
    const pageUrl = `${SITE_URL}/stages/${slug}/`;
    const relatedSlugs = CANONICAL_STAGES.filter(s => s.slug !== slug).map(s => s.slug).slice(0, 6);
    const bodyHtml = `
      <h1 class="seo-h1">${label} Investors</h1>
      <p class="seo-intro">${escapeHtml(STAGE_COPY[slug] || '')}</p>
      <div class="seo-stats"><span><strong>${firmsArr.length}</strong> firms tracked</span><span><strong>${formatCombinedAum(combinedAum)}</strong> combined AUM</span></div>
      <div class="firms">${firmsArr.map(renderFirmCard).join('')}</div>
      <div class="seo-related"><h2>Other Stages</h2><div class="seo-related-links">${relatedSlugs.map(s => `<a href="../${s}/">${escapeHtml(CANONICAL_STAGES.find(x => x.slug === s).label)}</a>`).join('')}</div></div>
    `;
    writeFile(`stages/${slug}/index.html`, renderPage({
      depth: 2, title: `Top ${label} Investors | Venture Capital Firms | The VC Power Board`,
      description: `${firmsArr.length} real, verified venture capital firms investing at the ${label} stage.`,
      canonicalPath: `/stages/${slug}/`, ogType: 'website',
      breadcrumbs: [{ label: 'Home', href: `../../index.html`, absoluteUrl: `${SITE_URL}/` }, { label: 'Stages', href: `../index.html`, absoluteUrl: `${SITE_URL}/stages/` }, { label, href: '', absoluteUrl: pageUrl }],
      h1: `${label} Investors`, bodyHtml, jsonLd: buildItemListJsonLd(firmsArr, pageUrl),
    }));
    allGeneratedUrls.push({ url: pageUrl, priority: '0.7' });
  });
  {
    const nonEmpty = CANONICAL_STAGES.filter(s => stageIndex[s.slug].size > 0);
    const bodyHtml = `<h1 class="seo-h1">Venture Capital Firms by Investment Stage</h1><p class="seo-intro">Different firms specialize in different points of a company's life.</p><div class="firms">${nonEmpty.map(s => `<div class="firm"><div class="firm-name"><a href="${s.slug}/" class="firm-link">${escapeHtml(s.label)}</a></div><div class="firm-meta">${stageIndex[s.slug].size} firms tracked</div></div>`).join('')}</div>`;
    writeFile('stages/index.html', renderPage({ depth: 1, title: 'Venture Capital Firms by Investment Stage | The VC Power Board', description: 'Browse venture capital firms by investment stage.', canonicalPath: '/stages/', ogType: 'website', breadcrumbs: [{ label: 'Home', href: '../index.html', absoluteUrl: `${SITE_URL}/` }, { label: 'Stages', href: '', absoluteUrl: `${SITE_URL}/stages/` }], h1: 'Venture Capital Firms by Investment Stage', bodyHtml, jsonLd: null }));
    allGeneratedUrls.push({ url: `${SITE_URL}/stages/`, priority: '0.9' });
  }

  const comparisonPairs = computeComparisonPairs(firms, data.computePowerScore);
  const comparisonsByFirmSlug = {};
  comparisonPairs.forEach(({ firmA, firmB, sectorSlug }) => {
    const pairSlug = `${firmA.slug}-vs-${firmB.slug}`;
    if (!comparisonsByFirmSlug[firmA.slug]) comparisonsByFirmSlug[firmA.slug] = [];
    if (!comparisonsByFirmSlug[firmB.slug]) comparisonsByFirmSlug[firmB.slug] = [];
    comparisonsByFirmSlug[firmA.slug].push({ pairSlug, otherName: firmB.name });
    comparisonsByFirmSlug[firmB.slug].push({ pairSlug, otherName: firmA.name });
  });

  firms.forEach(firm => {
    writeFile(`firms/${firm.slug}/index.html`, renderFirmPage(firm, firms, data, comparisonsByFirmSlug));
    allGeneratedUrls.push({ url: `${SITE_URL}/firms/${firm.slug}/`, priority: '0.6' });
  });
  {
    const sorted = [...firms].sort((a, b) => parseAumBillions(b.aum) - parseAumBillions(a.aum));
    const bodyHtml = `<h1 class="seo-h1">All Venture Capital Firms</h1><p class="seo-intro">Every firm tracked on The VC Power Board, ranked by assets under management.</p><div class="firms">${sorted.map(f => `<div class="firm"><div class="firm-name"><a href="${f.slug}/" class="firm-link">${escapeHtml(f.name)}</a></div><div class="firm-meta">${escapeHtml(f.aum || '')} · Founded ${f.founded || '-'}</div></div>`).join('')}</div>`;
    writeFile('firms/index.html', renderPage({ depth: 1, title: 'All Venture Capital Firms | The VC Power Board', description: `Browse all ${firms.length} venture capital firms tracked on The VC Power Board, ranked by assets under management.`, canonicalPath: '/firms/', ogType: 'website', breadcrumbs: [{ label: 'Home', href: '../index.html', absoluteUrl: `${SITE_URL}/` }, { label: 'Firms', href: '', absoluteUrl: `${SITE_URL}/firms/` }], h1: 'All Venture Capital Firms', bodyHtml, jsonLd: buildItemListJsonLd(sorted, `${SITE_URL}/firms/`) }));
    allGeneratedUrls.push({ url: `${SITE_URL}/firms/`, priority: '0.9' });
  }

  comparisonPairs.forEach(({ firmA, firmB, sectorSlug }) => {
    const pairSlug = `${firmA.slug}-vs-${firmB.slug}`;
    writeFile(`compare/${pairSlug}/index.html`, renderComparePage(firmA, firmB, sectorSlug, data.computePowerScore));
    allGeneratedUrls.push({ url: `${SITE_URL}/compare/${pairSlug}/`, priority: '0.5' });
  });
  {
    const bodyHtml = `<h1 class="seo-h1">Venture Capital Firm Comparisons</h1><p class="seo-intro">Side-by-side comparisons of leading venture capital firms within the same sector - real, sourced AUM, Power Score, and founding data.</p><div class="firms">${comparisonPairs.map(({ firmA, firmB }) => `<div class="firm"><div class="firm-name"><a href="${firmA.slug}-vs-${firmB.slug}/" class="firm-link">${escapeHtml(firmA.name)} vs ${escapeHtml(firmB.name)}</a></div></div>`).join('')}</div>`;
    writeFile('compare/index.html', renderPage({ depth: 1, title: 'Venture Capital Firm Comparisons | The VC Power Board', description: `Browse ${comparisonPairs.length} side-by-side venture capital firm comparisons, ranked and sourced.`, canonicalPath: '/compare/', ogType: 'website', breadcrumbs: [{ label: 'Home', href: '../index.html', absoluteUrl: `${SITE_URL}/` }, { label: 'Compare', href: '', absoluteUrl: `${SITE_URL}/compare/` }], h1: 'Venture Capital Firm Comparisons', bodyHtml, jsonLd: null }));
    allGeneratedUrls.push({ url: `${SITE_URL}/compare/`, priority: '0.7' });
  }

  Object.entries(partnerProfiles).forEach(([slug, partner]) => {
    writeFile(`people/${slug}/index.html`, renderPartnerPage(slug, partner, firmsBySlug, Object.entries(partnerProfiles)));
    allGeneratedUrls.push({ url: `${SITE_URL}/people/${slug}/`, priority: '0.5' });
  });
  {
    const sorted = Object.entries(partnerProfiles).sort((a, b) => a[1].name.localeCompare(b[1].name));
    const bodyHtml = `<h1 class="seo-h1">All Partner Profiles</h1><p class="seo-intro">Every partner profiled on The VC Power Board, searchable in one place.</p><div class="firms">${sorted.map(([slug, p]) => `<div class="firm"><div class="firm-name"><a href="${slug}/" class="firm-link">${escapeHtml(p.name)}</a></div><div class="firm-meta">${escapeHtml(p.title || '')}${p.firm ? ` at ${escapeHtml(p.firm)}` : ''}</div></div>`).join('')}</div>`;
    writeFile('people/index.html', renderPage({ depth: 1, title: 'All Partner Profiles | The VC Power Board', description: `Browse all ${sorted.length} venture capital partner profiles tracked on The VC Power Board.`, canonicalPath: '/people/', ogType: 'website', breadcrumbs: [{ label: 'Home', href: '../index.html', absoluteUrl: `${SITE_URL}/` }, { label: 'People', href: '', absoluteUrl: `${SITE_URL}/people/` }], h1: 'All Partner Profiles', bodyHtml, jsonLd: null }));
    allGeneratedUrls.push({ url: `${SITE_URL}/people/`, priority: '0.8' });
  }

  const sitemapUrls = [{ url: `${SITE_URL}/`, priority: '1.0' }, ...allGeneratedUrls];
  writeFile('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map(u => `  <url>\n    <loc>${u.url}</loc>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')}\n</urlset>`);
  writeFile('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

  /* After everything is written, so writtenPaths is complete. The
     sitemap is built from this run only, so a pruned page is already
     absent from it. */
  const pruned = pruneOrphanPages(firms, partnerProfiles);

  console.log(`\n Generated ${allGeneratedUrls.length} static pages + sitemap.xml + robots.txt`);
  if (!pruned.skipped) {
    console.log(`   Pruned: ${pruned.removed.length} orphaned page directories`);
    pruned.removed.forEach(r => console.log(`     removed ${r}`));
  }
  console.log(`   Companies: ${Object.keys(SECTOR_MAP).filter(s => sectorIndex[s].size > 0).length} category pages`);
  console.log(`   Locations: ${Object.keys(LOCATION_MAP).filter(s => locationIndex[s].size >= MIN_FIRMS_FOR_LOCATION_PAGE).length} location pages`);
  console.log(`   Stages: ${CANONICAL_STAGES.filter(s => stageIndex[s.slug].size > 0).length} stage pages`);
  console.log(`   Firms: ${firms.length} firm pages`);
  console.log(`   Comparisons: ${comparisonPairs.length} comparison pages`);
  console.log(`   People: ${Object.keys(partnerProfiles).length} partner pages`);
}

main();
