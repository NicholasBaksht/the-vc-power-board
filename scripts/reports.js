/**
 * REPORTS.JS
 * VC Industry Reports: a hub page listing available reports, and a
 * reusable sector-report template that computes real stats from the
 * actual firms array for any given sector - so adding a new report
 * later (Climate, Fintech, etc.) means adding one config entry here,
 * not writing new computation logic.
 */

// Config for every available report. Each entry maps directly onto a
// real sector tag already used across the site's data, so nothing
// here needs invented data - just a title and a short, honest intro
// describing what the computed numbers below it show.
const REPORT_CONFIGS = {
  'ai-venture-capital': {
    title: 'State of AI Venture Capital',
    type: 'sector',
    sector: 'AI',
    intro: 'A real, computed snapshot of every firm on this page with AI listed as a sector focus - how many, how much combined capital they manage, and which are the largest by AUM. Not a forecast or an editorial take, just what the tracked data actually shows right now.'
  },
  'healthcare-investors': {
    title: 'Top Healthcare Investors',
    type: 'sector',
    sector: 'Healthcare',
    intro: 'Every firm on this page investing in healthcare, ranked by real assets under management. Spans everything from dedicated biotech and life sciences funds to generalist firms with a healthcare practice.'
  },
  'climate-investing': {
    title: 'State of Climate Investing',
    type: 'sector',
    sector: 'Climate',
    intro: 'Every firm on this page with a climate or clean-energy investment focus, ranked by real assets under management - from dedicated climate funds to generalist firms with a climate practice.'
  },
  'global-vc-landscape': {
    title: 'Global VC Landscape',
    type: 'landscape',
    intro: 'Where the firms tracked on this page are actually headquartered, broken down by region and country. The same real location data that powers the World Map, presented as a ranked breakdown instead.'
  },
  'annual-report': {
    title: 'Annual VC Power Board Report',
    type: 'annual',
    intro: 'The full picture: every firm, every sector, every region tracked on this page, combined into one comprehensive snapshot - the same real, computed numbers used everywhere else on the site, brought together in a single report.'
  }
};

function renderReportsHub() {
  const cards = Object.entries(REPORT_CONFIGS).map(([slug, cfg]) => {
    const meta = cfg.type === 'sector'
      ? `${firms.filter(f => (f.sectors || []).includes(cfg.sector)).length} firms tracked`
      : `${firms.length} firms tracked`;
    return `
      <a href="#reports/${slug}" class="report-card">
        <div class="report-card-title">${cfg.title}</div>
        <div class="report-card-meta">${meta}</div>
      </a>
    `;
  }).join('');
  document.getElementById('reportsHubView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">VC Industry Reports</div>
    <div class="reports-intro">
      <p>Real, computed breakdowns of the firms tracked on this page, grouped by sector. Every number below is derived live from the same data used everywhere else on the site - nothing here is estimated or invented.</p>
    </div>
    <div class="report-card-grid">${cards}</div>
  `;
}

// Reusable sector report renderer - computes everything fresh from
// the real firms array each time it's called, so it can never drift
// out of sync with the actual data, same principle as renderScaleBar.
function renderSectorReport(reportSlug) {
  const cfg = REPORT_CONFIGS[reportSlug];
  if (!cfg) {
    document.getElementById('sectorReportView').innerHTML = `
      <a href="#reports" class="detail-back">← Back to Reports</a>
      <div class="dashboard-title">Report not found</div>
    `;
    return;
  }

  if (cfg.type === 'landscape') return renderLandscapeReport(cfg);
  if (cfg.type === 'annual') return renderAnnualReport(cfg);

  const sectorFirms = firms.filter(f => (f.sectors || []).includes(cfg.sector))
    .slice() // don't mutate the shared firms array
    .sort((a, b) => parseAumNumber(b.aum) - parseAumNumber(a.aum));

  const totalFirms = sectorFirms.length;
  const combinedAUM = Math.round(sectorFirms.reduce((sum, f) => sum + parseAumNumber(f.aum), 0));
  const avgFoundedYear = totalFirms > 0
    ? Math.round(sectorFirms.reduce((sum, f) => sum + f.founded, 0) / totalFirms)
    : '-';
  const countryCount = new Set(sectorFirms.map(f => getCountryFromHQ(f.hq)).filter(Boolean)).size;

  const topFirmsHTML = sectorFirms.slice(0, 10).map((f, i) => `
    <a href="#${f.slug}" class="report-firm-row">
      <span class="report-firm-rank">${String(i + 1).padStart(2, '0')}</span>
      <span class="report-firm-name">${f.name}</span>
      <span class="report-firm-aum">${f.aum}</span>
    </a>
  `).join('');

  document.getElementById('sectorReportView').innerHTML = `
    <a href="#reports" class="detail-back">← Back to Reports</a>
    <div class="dashboard-title">${cfg.title}</div>
    <div class="reports-intro"><p>${cfg.intro}</p></div>

    <div class="scale-bar">
      <div class="stat-card"><span class="stat-card-num">${totalFirms}</span><span class="stat-card-label">Firms Tracked</span></div>
      <div class="stat-card"><span class="stat-card-num">${formatCombinedAUM(combinedAUM)}</span><span class="stat-card-label">Combined AUM</span></div>
      <div class="stat-card"><span class="stat-card-num">${avgFoundedYear}</span><span class="stat-card-label">Avg. Founded Year</span></div>
      <div class="stat-card"><span class="stat-card-num">${countryCount}</span><span class="stat-card-label">Countries</span></div>
    </div>

    <div class="worldmap-sidebar-label" style="margin: 24px 0 14px;">Top ${Math.min(10, totalFirms)} by AUM</div>
    <div class="report-firm-list">${topFirmsHTML}</div>
  `;
}
// Global VC Landscape - reuses the exact same region-classification
// and country-extraction logic already built for the World Map
// (world-map-data.js), just presented as ranked lists instead of an
// interactive map. Kept as a separate function from the sector
// template since its shape (regions + countries, not sectors +
// top firms) is genuinely different, not just a config variation.
function renderLandscapeReport(cfg) {
  const regions = getRegionBreakdown(); // from world-map-data.js

  const countryCounts = {};
  firms.forEach(f => {
    const country = getCountryFromHQ(f.hq);
    countryCounts[country] = (countryCounts[country] || 0) + 1;
  });
  const topCountries = Object.entries(countryCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);

  const regionRows = regions.map(([region, count]) => `
    <div class="worldmap-region-row"><span>${region}</span><span class="worldmap-region-count">${count} firm${count === 1 ? '' : 's'}</span></div>
  `).join('');

  const countryRows = topCountries.map(([country, count], i) => `
    <div class="report-firm-row" style="cursor: default;">
      <span class="report-firm-rank">${String(i + 1).padStart(2, '0')}</span>
      <span class="report-firm-name">${country}</span>
      <span class="report-firm-aum">${count} firm${count === 1 ? '' : 's'}</span>
    </div>
  `).join('');

  document.getElementById('sectorReportView').innerHTML = `
    <a href="#reports" class="detail-back">← Back to Reports</a>
    <div class="dashboard-title">${cfg.title}</div>
    <div class="reports-intro"><p>${cfg.intro}</p></div>

    <div class="worldmap-sidebar-label" style="margin: 0 0 14px;">By Region</div>
    <div class="worldmap-sidebar" style="margin-bottom: 24px;">${regionRows}</div>

    <div class="worldmap-sidebar-label" style="margin: 24px 0 14px;">Top 10 Countries by Firm Count</div>
    <div class="report-firm-list">${countryRows}</div>

    <p style="margin-top: 12px;"><a href="#world-map" style="font-family: var(--mono); font-size: 12.5px; color: var(--gold);">View the full interactive World Map →</a></p>
  `;
}

// Annual VC Power Board Report - the flagship composite report,
// combining site-wide totals, the top 10 firms overall, and the
// top 5 sectors by firm count into a single page. Deliberately
// reuses computations already proven correct elsewhere (the same
// stat-card numbers as the homepage, the same region logic as the
// World Map) rather than introducing new, unverified math.
function renderAnnualReport(cfg) {
  const totalFirms = firms.length;
  const totalPartners = Object.keys(partnerProfiles).length;
  const combinedAUM = Math.round(firms.reduce((sum, f) => sum + parseAumNumber(f.aum), 0));
  const countryCount = new Set(firms.map(f => getCountryFromHQ(f.hq)).filter(Boolean)).size;

  const sectorCounts = {};
  firms.forEach(f => (f.sectors || []).forEach(s => { sectorCounts[s] = (sectorCounts[s] || 0) + 1; }));
  const topSectors = Object.entries(sectorCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);

  const topFirms = firms.slice().sort((a, b) => parseAumNumber(b.aum) - parseAumNumber(a.aum)).slice(0, 10);

  const topFirmsHTML = topFirms.map((f, i) => `
    <a href="#${f.slug}" class="report-firm-row">
      <span class="report-firm-rank">${String(i + 1).padStart(2, '0')}</span>
      <span class="report-firm-name">${f.name}</span>
      <span class="report-firm-aum">${f.aum}</span>
    </a>
  `).join('');

  const sectorRows = topSectors.map(([sector, count]) => `
    <div class="worldmap-region-row"><span>${sector}</span><span class="worldmap-region-count">${count} firms</span></div>
  `).join('');

  document.getElementById('sectorReportView').innerHTML = `
    <a href="#reports" class="detail-back">← Back to Reports</a>
    <div class="dashboard-title">${cfg.title}</div>
    <div class="reports-intro"><p>${cfg.intro}</p></div>

    <div class="scale-bar">
      <div class="stat-card"><span class="stat-card-num">${totalFirms}</span><span class="stat-card-label">Total Firms</span></div>
      <div class="stat-card"><span class="stat-card-num">${totalPartners}</span><span class="stat-card-label">Partners</span></div>
      <div class="stat-card"><span class="stat-card-num">${countryCount}</span><span class="stat-card-label">Countries</span></div>
      <div class="stat-card"><span class="stat-card-num">${formatCombinedAUM(combinedAUM)}</span><span class="stat-card-label">Combined AUM</span></div>
    </div>

    <div class="worldmap-sidebar-label" style="margin: 24px 0 14px;">Top 10 Firms by AUM</div>
    <div class="report-firm-list" style="margin-bottom: 24px;">${topFirmsHTML}</div>

    <div class="worldmap-sidebar-label" style="margin: 24px 0 14px;">Top 5 Sectors by Firm Count</div>
    <div class="worldmap-sidebar">${sectorRows}</div>
  `;
}
