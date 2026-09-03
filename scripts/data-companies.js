/* ============================================================
   DATA-COMPANIES.JS
   Canonical Company entities. Batch 1: 60 companies.

   THE ID IS DURABLE, THE NAME IS NOT. companyId never changes once
   assigned, because every other dataset joins on it. The display name
   follows the company. LendingClub is the live example: it renamed to
   Happen on 2026-06-22, so name is "Happen" while companyId stays
   "lendingclub" and "LendingClub" becomes a former name. A registry
   that renamed the id there would have silently orphaned every
   partner and firm reference pointing at it.

   Every non-null field carries its own source row naming the field it
   supports. 827 source rows across 60 records, none unsourced.
   Nulls are deliberate: an unsourced founding year is null, never a
   plausible guess.
   ============================================================ */

// COMPANIES - The VC Power Board canonical Company migration.
// Compiled 2026-09-02. 60 companies requested, 60 accepted records, 0 unresolved.
// companyId follows name.toLowerCase().replace(/[^a-z0-9]/g, "") with no exceptions.
// Every populated field carries at least one source row. Nulls are deliberate.
// Identity verdicts, sector reviews, alias candidates and method notes:
// companies-batch-1-notes.md

const COMPANIES = {
  "uber": {
    companyId: "uber",
    name: "Uber",
    legalName: "Uber Technologies, Inc.",
    website: "https://www.uber.com",
    description: "Technology platform operating ride-hailing, food and grocery delivery, and freight marketplaces. Uber reports three operating and reportable segments: Mobility, Delivery and Freight.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2009,
    status: "public",
    statusDetail: null,
    sector: "Mobility",
    subsector: "ride-hailing, delivery and freight marketplaces",
    tickers: [
      "NYSE:UBER"
    ],
    formerNames: [
      "Ubercab, Inc."
    ],
    sources: [
      {
        field: "website",
        label: "Uber - About Us (official site)",
        url: "https://www.uber.com/us/en/about/",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Uber Technologies, Inc. Form 10-K FY2025 cover page - SEC EDGAR",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR submissions record CIK 0001543151",
        url: "https://data.sec.gov/submissions/CIK0001543151.json",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Uber Form 10-K FY2025 Item 1 Business overview and segments",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Uber Form 10-K FY2025 - address of principal executive offices, 1725 3rd Street, San Francisco, California 94158",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Uber Form 10-K FY2025 - address of principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Uber Form 10-K FY2025 - 'We were founded in 2009 and incorporated as Ubercab, Inc., a Delaware corporation, in July 2010.'",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Uber Form 10-K FY2025 cover - securities registered pursuant to Section 12(b), New York Stock Exchange",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Uber Form 10-K FY2025 cover - Trading Symbol UBER, New York Stock Exchange",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record CIK 0001543151 - tickers ['UBER'], exchanges ['NYSE']",
        url: "https://data.sec.gov/submissions/CIK0001543151.json",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Uber Form 10-K FY2025 - 'In February 2011, we changed our name to Uber Technologies, Inc.'",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Uber Form 10-K FY2025 - three operating and reportable segments: Mobility, Delivery and Freight",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Uber Form 10-K FY2025 - segment descriptions",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "spacex": {
    companyId: "spacex",
    name: "SpaceX",
    legalName: "Space Exploration Technologies Corp.",
    website: "https://www.spacex.com",
    description: "Designs, manufactures and operates orbital launch vehicles and spacecraft, including the Falcon 9 and Falcon Heavy rockets, the Dragon spacecraft and the Starship vehicle, and operates the Starlink low Earth orbit satellite constellation and broadband network.",
    hqCity: "Starbase",
    hqCountry: "United States",
    foundedYear: 2002,
    status: "public",
    statusDetail: null,
    sector: "Space",
    subsector: "launch vehicles, spacecraft and satellite broadband",
    tickers: [
      "NASDAQ:SPCX"
    ],
    formerNames: [],
    sources: [
      {
        field: "website",
        label: "SpaceX - Official Site",
        url: "https://www.spacex.com/",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Space Exploration Technologies Corp. Form S-1 cover - exact name of registrant as specified in its charter",
        url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SpaceX Investor Relations - IPO closing press release naming Space Exploration Technologies Corp.",
        url: "https://ir.spacex.com/updates/releases-details/2026/Space-Exploration-Technologies-Corp--Announces-Closing-of-Initial-Public-Offering-Including-Full-Exercise-of-Underwriters-Option-to-Purchase-Additional-Shares-2026-RgoR-Y1Vwh/default.aspx",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "SpaceX Form S-1 - descriptions of Falcon 9, Falcon Heavy, Dragon, Starship and Starlink",
        url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SpaceX Form S-1 - principal executive offices, 1 Rocket Road, Starbase, Texas 78521",
        url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR submissions record CIK 0001181412 - business address 1 ROCKET ROAD, STARBASE, TX 78521",
        url: "https://data.sec.gov/submissions/CIK0001181412.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SpaceX Form S-1 - principal executive offices in Texas",
        url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "SpaceX Form S-1 - 'Founded in 2002, SpaceX is the only company building the integrated hardware and software infrastructure of the future across space, connectivity, and AI.'",
        url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SpaceX IR - 'Space Exploration Technologies Corp. Announces Closing of Initial Public Offering', shares began trading June 12, 2026, closing June 15, 2026",
        url: "https://ir.spacex.com/updates/releases-details/2026/Space-Exploration-Technologies-Corp--Announces-Closing-of-Initial-Public-Offering-Including-Full-Exercise-of-Underwriters-Option-to-Purchase-Additional-Shares-2026-RgoR-Y1Vwh/default.aspx",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Nasdaq official listing page - Space Exploration Technologies Corp. Class A Common Stock (SPCX)",
        url: "https://www.nasdaq.com/market-activity/stocks/spcx",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SpaceX IR closing press release - 'began trading on the Nasdaq Global Select Market and Nasdaq Texas on June 12, 2026, under the ticker symbol SPCX'",
        url: "https://ir.spacex.com/updates/releases-details/2026/Space-Exploration-Technologies-Corp--Announces-Closing-of-Initial-Public-Offering-Including-Full-Exercise-of-Underwriters-Option-to-Purchase-Additional-Shares-2026-RgoR-Y1Vwh/default.aspx",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Nasdaq official listing page for SPCX",
        url: "https://www.nasdaq.com/market-activity/stocks/spcx",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record CIK 0001181412 - tickers ['SPCX'], exchanges ['Nasdaq']",
        url: "https://data.sec.gov/submissions/CIK0001181412.json",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "SpaceX Form S-1 - launch vehicles, spacecraft and the Starlink satellite constellation",
        url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "SpaceX Form S-1 - Falcon, Dragon, Starship and Starlink descriptions",
        url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "twilio": {
    companyId: "twilio",
    name: "Twilio",
    legalName: "Twilio Inc.",
    website: "https://www.twilio.com",
    description: "Cloud communications company providing programmable messaging, voice and email APIs that developers and businesses use to build customer communication into their own applications.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2008,
    status: "public",
    statusDetail: null,
    sector: "Developer Tools & Infrastructure",
    subsector: "programmable communications APIs for messaging, voice and email",
    tickers: [
      "NYSE:TWLO"
    ],
    formerNames: [],
    sources: [
      {
        field: "website",
        label: "Twilio - Company page (official site)",
        url: "https://www.twilio.com/en-us/company",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR submissions record CIK 0001447669 - name 'TWILIO INC'",
        url: "https://data.sec.gov/submissions/CIK0001447669.json",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Twilio official press release Q1 2026 results - About Twilio boilerplate describing messaging, voice and email platform",
        url: "https://www.twilio.com/en-us/press/releases/q1-2026-earnings",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Twilio - Company page",
        url: "https://www.twilio.com/en-us/company",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR submissions record CIK 0001447669 - business address 101 SPEAR STREET, SUITE 500, San Francisco, CA 94105",
        url: "https://data.sec.gov/submissions/CIK0001447669.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SEC EDGAR submissions record CIK 0001447669 - business address in California",
        url: "https://data.sec.gov/submissions/CIK0001447669.json",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Twilio - Company page, 'Twilio was founded in 2008 to simplify the complexity of the global telecommunications network'",
        url: "https://www.twilio.com/en-us/company",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record CIK 0001447669 - exchanges ['NYSE']",
        url: "https://data.sec.gov/submissions/CIK0001447669.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Twilio official press release Q1 2026 results - 'Twilio (NYSE: TWLO)'",
        url: "https://www.twilio.com/en-us/press/releases/q1-2026-earnings",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Twilio official press release Q1 2026 results - 'Twilio (NYSE: TWLO)'",
        url: "https://www.twilio.com/en-us/press/releases/q1-2026-earnings",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record CIK 0001447669 - tickers ['TWLO'], exchanges ['NYSE']",
        url: "https://data.sec.gov/submissions/CIK0001447669.json",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Twilio official press release Q1 2026 results - platform across messaging, voice, email relied on by developers",
        url: "https://www.twilio.com/en-us/press/releases/q1-2026-earnings",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Twilio - Company page and Q1 2026 About Twilio boilerplate",
        url: "https://www.twilio.com/en-us/press/releases/q1-2026-earnings",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "etsy": {
    companyId: "etsy",
    name: "Etsy",
    legalName: "Etsy, Inc.",
    website: "https://www.etsy.com",
    description: "Operates two-sided online marketplaces for unique and creative goods, including the Etsy marketplace and the fashion resale marketplace Depop.",
    hqCity: "Brooklyn",
    hqCountry: "United States",
    foundedYear: 2005,
    status: "public",
    statusDetail: null,
    sector: "Ecommerce",
    subsector: "online marketplaces for handmade, vintage and resale goods",
    tickers: [
      "NYSE:ETSY"
    ],
    formerNames: [],
    sources: [
      {
        field: "website",
        label: "Etsy - About page (official site)",
        url: "https://www.etsy.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Etsy Investor Relations press release - About Etsy boilerplate naming 'Etsy, Inc.'",
        url: "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR submissions record CIK 0001370637 - name 'ETSY INC'",
        url: "https://data.sec.gov/submissions/CIK0001370637.json",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Etsy Investor Relations press release - About Etsy boilerplate describing two-sided marketplaces and Depop",
        url: "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Etsy Investor Relations press release - 'Etsy was founded in 2005 and is headquartered in Brooklyn, New York.'",
        url: "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Etsy Investor Relations press release - headquartered in Brooklyn, New York",
        url: "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Etsy Investor Relations press release - 'Etsy was founded in 2005 and is headquartered in Brooklyn, New York.'",
        url: "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Etsy Investor Relations press release - listing of Common Stock on the NYSE (NYSE: ETSY) began October 13, 2025",
        url: "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Etsy Investor Relations press release - transfer from Nasdaq to NYSE, Nasdaq listing ceased October 10, 2025, NYSE: ETSY from October 13, 2025",
        url: "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record CIK 0001370637 - tickers ['ETSY'], exchanges ['NYSE']",
        url: "https://data.sec.gov/submissions/CIK0001370637.json",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Etsy Investor Relations press release - About Etsy boilerplate describing online marketplaces for goods",
        url: "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Etsy - About page and About Etsy boilerplate",
        url: "https://www.etsy.com/about/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "mercury": {
    companyId: "mercury",
    name: "Mercury",
    legalName: "Mercury Technologies, Inc.",
    website: "https://mercury.com",
    description: "Financial technology company providing business banking and financial operations products for startups and small businesses, including checking and savings accounts, debit and credit cards, payments, invoicing and bill pay. Mercury is not itself a bank; the deposit accounts and banking services are provided by partner banks Choice Financial Group and Column N.A.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2017,
    status: "private",
    statusDetail: null,
    sector: "Fintech",
    subsector: "business banking and financial operations software for startups",
    tickers: [],
    formerNames: [],
    sources: [
      {
        field: "website",
        label: "Mercury - Official Site, footer disclosure",
        url: "https://mercury.com/",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC Form D filing by Mercury Technologies, Inc., CIK 0001719932 - entityName 'Mercury Technologies, Inc.'",
        url: "https://www.sec.gov/Archives/edgar/data/1719932/000171993217000001/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Mercury legal disclosures - 'Mercury Advisory is a wholly-owned subsidiary of Mercury Technologies, Inc.'",
        url: "https://mercury.com/legal/disclosures/invest",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR submissions record CIK 0001719932 - name 'Mercury Technologies, Inc.'",
        url: "https://data.sec.gov/submissions/CIK0001719932.json",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Mercury - Official Site, 'Mercury is a fintech company, not an FDIC-insured bank. Banking services provided through Choice Financial Group and Column N.A., Members FDIC.' plus product description",
        url: "https://mercury.com/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Mercury Advisory, LLC Form ADV Part 2 brochure - 'Mercury Advisory is a wholly owned subsidiary of Mercury Technologies Inc., a financial technology company' and 'Mercury, through partnerships with certain banking institutions, provides various banking services to its Clients.'",
        url: "https://www.datocms-assets.com/115132/1776818056-mercury-advisory-adv-part-2-brochure-march-2026.pdf",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Mercury Advisory, LLC Form ADV Part 2 brochure - 'Mercury Technologies Inc. is a privately held company headquartered in San Francisco, California.'",
        url: "https://www.datocms-assets.com/115132/1776818056-mercury-advisory-adv-part-2-brochure-march-2026.pdf",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC Form D filing CIK 0001719932 - issuer address San Francisco, CA",
        url: "https://www.sec.gov/Archives/edgar/data/1719932/000171993217000001/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Mercury Advisory, LLC Form ADV Part 2 brochure - headquartered in San Francisco, California",
        url: "https://www.datocms-assets.com/115132/1776818056-mercury-advisory-adv-part-2-brochure-march-2026.pdf",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "SEC Form D filing CIK 0001719932 - yearOfInc value 2017, jurisdictionOfInc DELAWARE",
        url: "https://www.sec.gov/Archives/edgar/data/1719932/000171993217000001/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Mercury Advisory, LLC Form ADV Part 2 brochure - 'Mercury Technologies Inc. is a privately held company headquartered in San Francisco, California.'",
        url: "https://www.datocms-assets.com/115132/1776818056-mercury-advisory-adv-part-2-brochure-march-2026.pdf",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record CIK 0001719932 - tickers [] and exchanges [] empty; filings are Form D exempt offerings only",
        url: "https://data.sec.gov/submissions/CIK0001719932.json",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Mercury - Official Site, 'Mercury is a fintech company, not an FDIC-insured bank.'",
        url: "https://mercury.com/",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Mercury - Official Site, product description covering checking and savings accounts, cards, payments, invoicing and bill pay",
        url: "https://mercury.com/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "uipath": {
    companyId: "uipath",
    name: "UiPath",
    legalName: "UiPath, Inc.",
    website: "https://www.uipath.com",
    description: "Enterprise software company providing an automation platform that combines robotic process automation, AI agents, document processing, orchestration and testing for business processes.",
    hqCity: "New York",
    hqCountry: "United States",
    foundedYear: 2005,
    status: "public",
    statusDetail: null,
    sector: "Enterprise Software",
    subsector: "robotic process automation and agentic automation platform",
    tickers: [
      "NYSE:PATH"
    ],
    formerNames: [],
    sources: [
      {
        field: "website",
        label: "UiPath - About Us (official site)",
        url: "https://www.uipath.com/company/about-us",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR submissions record CIK 0001734722 - name 'UiPath, Inc.'",
        url: "https://data.sec.gov/submissions/CIK0001734722.json",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "UiPath Investor Relations site - UiPath, Inc.",
        url: "https://ir.uipath.com/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "UiPath Investor Relations press release - About UiPath boilerplate describing automation, orchestration, AI and testing",
        url: "https://ir.uipath.com/news/detail/445/uipath-announces-first-quarter-fiscal-2027-financial-results-conference-call",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "UiPath - About Us, UiPath Platform enabling AI agents, robots, people and models",
        url: "https://www.uipath.com/company/about-us",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "UiPath Investor Relations site - 1 Vanderbilt Ave, 60th Floor, New York, NY 10017",
        url: "https://ir.uipath.com/",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR submissions record CIK 0001734722 - business address ONE VANDERBILT AVENUE, 60TH FLOOR, NEW YORK, NY 10017",
        url: "https://data.sec.gov/submissions/CIK0001734722.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SEC EDGAR submissions record CIK 0001734722 - business address in New York",
        url: "https://data.sec.gov/submissions/CIK0001734722.json",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "UiPath - About Us, 'Our story starts in 2005 in Bucharest, Romania, with 10 people working in a small apartment'",
        url: "https://www.uipath.com/company/about-us",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "UiPath Investor Relations press release - 'UiPath (NYSE: PATH)'",
        url: "https://ir.uipath.com/news/detail/445/uipath-announces-first-quarter-fiscal-2027-financial-results-conference-call",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record CIK 0001734722 - exchanges ['NYSE']",
        url: "https://data.sec.gov/submissions/CIK0001734722.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "UiPath Investor Relations press release - 'UiPath (NYSE: PATH)'",
        url: "https://ir.uipath.com/news/detail/445/uipath-announces-first-quarter-fiscal-2027-financial-results-conference-call",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record CIK 0001734722 - tickers ['PATH'], exchanges ['NYSE']",
        url: "https://data.sec.gov/submissions/CIK0001734722.json",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "UiPath Investor Relations press release - About UiPath boilerplate describing enterprise automation and orchestration software",
        url: "https://ir.uipath.com/news/detail/445/uipath-announces-first-quarter-fiscal-2027-financial-results-conference-call",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "UiPath - About Us, RPA, intelligent document processing, process intelligence and agentic AI",
        url: "https://www.uipath.com/company/about-us",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "reddit": {
    companyId: "reddit",
    name: "Reddit",
    legalName: "Reddit, Inc.",
    website: "https://www.redditinc.com",
    description: "Operator of Reddit, a platform of user created online communities where members post, comment and vote on content, monetised mainly through advertising.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2005,
    status: "public",
    statusDetail: null,
    sector: "Consumer",
    subsector: "online communities and social platform, advertising supported",
    tickers: [
      "NYSE:RDDT"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Reddit, Inc. - Form 10-K for fiscal year 2024, Reddit investor relations file",
        url: "https://s203.q4cdn.com/380862485/files/doc_financials/2024/q4/v2/Reddit-Inc-10-K-2024-as-filed.pdf",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Reddit, Inc. entity submissions, CIK 0001713445",
        url: "https://data.sec.gov/submissions/CIK0001713445.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Reddit, Inc. entity submissions, CIK 0001713445",
        url: "https://data.sec.gov/submissions/CIK0001713445.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "supabase": {
    companyId: "supabase",
    name: "Supabase",
    legalName: "Supabase, Inc.",
    website: "https://supabase.com",
    description: "Open source developer platform providing a hosted Postgres database together with authentication, data APIs, edge functions, realtime data, storage and vector embeddings.",
    hqCity: null,
    hqCountry: null,
    foundedYear: 2020,
    status: "private",
    statusDetail: null,
    sector: "Developer Tools & Infrastructure",
    subsector: "open source Postgres backend as a service",
    tickers: [],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Supabase - Acceptable Use Policy",
        url: "https://supabase.com/aup",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Supabase - Contact Us",
        url: "https://supabase.com/contact-us",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR - Supabase, Inc. entity submissions, CIK 0001829334",
        url: "https://data.sec.gov/submissions/CIK0001829334.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Supabase - Official Site",
        url: "https://supabase.com/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Supabase - Official Site",
        url: "https://supabase.com/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Supabase - Open Source",
        url: "https://supabase.com/open-source",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Y Combinator - Supabase company page (Summer 2020 batch)",
        url: "https://www.ycombinator.com/companies/supabase",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Supabase, Inc. Form D notice of exempt offering, filed 2026-06-05",
        url: "https://www.sec.gov/Archives/edgar/data/1829334/000182933426000002/xslFormDX08/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Supabase, Inc. entity submissions, CIK 0001829334",
        url: "https://data.sec.gov/submissions/CIK0001829334.json",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Supabase - Official Site",
        url: "https://supabase.com/",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Supabase - Official Site",
        url: "https://supabase.com/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "block": {
    companyId: "block",
    name: "Block",
    legalName: "Block, Inc.",
    website: "https://block.xyz",
    description: "Financial technology company operating the Square seller platform, the Cash App consumer financial services app, the Afterpay buy now pay later service, TIDAL, Bitkey and Proto.",
    hqCity: "Oakland",
    hqCountry: "United States",
    foundedYear: null,
    status: "public",
    statusDetail: null,
    sector: "Fintech",
    subsector: "merchant payments, consumer financial services and buy now pay later",
    tickers: [
      "NYSE:XYZ"
    ],
    formerNames: [
      "Square, Inc."
    ],
    sources: [
      {
        field: "legalName",
        label: "SEC EDGAR - Block, Inc. entity submissions, CIK 0001512673",
        url: "https://data.sec.gov/submissions/CIK0001512673.json",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Block - Block Announces Ticker Symbol Change to XYZ",
        url: "https://block.xyz/inside/block-announces-ticker-symbol-change-to-xyz",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Block - Official Site",
        url: "https://block.xyz/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Block - Official Site",
        url: "https://block.xyz/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Block - Block Announces Ticker Symbol Change to XYZ (About Block boilerplate)",
        url: "https://block.xyz/inside/block-announces-ticker-symbol-change-to-xyz",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Block, Inc. entity submissions, CIK 0001512673",
        url: "https://data.sec.gov/submissions/CIK0001512673.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Block - Block Announces Ticker Symbol Change to XYZ (dateline)",
        url: "https://block.xyz/inside/block-announces-ticker-symbol-change-to-xyz",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SEC EDGAR - Block, Inc. entity submissions, CIK 0001512673",
        url: "https://data.sec.gov/submissions/CIK0001512673.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Block - Block Announces Ticker Symbol Change to XYZ (dateline)",
        url: "https://block.xyz/inside/block-announces-ticker-symbol-change-to-xyz",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Block, Inc. entity submissions, CIK 0001512673",
        url: "https://data.sec.gov/submissions/CIK0001512673.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Block, Inc. - Investor Relations overview",
        url: "https://investors.block.xyz/overview/default.aspx",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Block, Inc. entity submissions, CIK 0001512673",
        url: "https://data.sec.gov/submissions/CIK0001512673.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Block - Block Announces Ticker Symbol Change to XYZ",
        url: "https://block.xyz/inside/block-announces-ticker-symbol-change-to-xyz",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Block, Inc. - Investor Relations overview",
        url: "https://investors.block.xyz/overview/default.aspx",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "SEC EDGAR - Block, Inc. entity submissions, CIK 0001512673 (formerNames: Square, Inc., 2011-03-02 to 2021-12-08)",
        url: "https://data.sec.gov/submissions/CIK0001512673.json",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Block - Official Site",
        url: "https://block.xyz/",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Block - Block Announces Ticker Symbol Change to XYZ (About Block boilerplate)",
        url: "https://block.xyz/inside/block-announces-ticker-symbol-change-to-xyz",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "opendoor": {
    companyId: "opendoor",
    name: "Opendoor",
    legalName: "Opendoor Technologies Inc.",
    website: "https://www.opendoor.com",
    description: "Digital residential real estate company that lets consumers sell, buy and own a home through an end to end online service in the United States.",
    hqCity: "Tempe",
    hqCountry: "United States",
    foundedYear: 2014,
    status: "public",
    statusDetail: null,
    sector: "Real Estate Tech",
    subsector: "online residential home buying and selling",
    tickers: [
      "NASDAQ:OPEN"
    ],
    formerNames: [
      "Social Capital Hedosophia Holdings Corp. II"
    ],
    sources: [
      {
        field: "legalName",
        label: "SEC EDGAR - Opendoor Technologies Inc. entity submissions, CIK 0001801169",
        url: "https://data.sec.gov/submissions/CIK0001801169.json",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Opendoor Technologies Inc. - Investor Relations FAQs",
        url: "https://investor.opendoor.com/ir-resources/faqs",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Opendoor - About",
        url: "https://www.opendoor.com/about",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Opendoor Technologies Inc. - Investor Relations FAQs",
        url: "https://investor.opendoor.com/ir-resources/faqs",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Opendoor Technologies Inc. - Investor Relations FAQs",
        url: "https://investor.opendoor.com/ir-resources/faqs",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Opendoor Technologies Inc. entity submissions, CIK 0001801169",
        url: "https://data.sec.gov/submissions/CIK0001801169.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Opendoor Technologies Inc. - Investor Relations FAQs",
        url: "https://investor.opendoor.com/ir-resources/faqs",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Opendoor Technologies Inc. - Investor Relations FAQs",
        url: "https://investor.opendoor.com/ir-resources/faqs",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Opendoor Technologies Inc. entity submissions, CIK 0001801169",
        url: "https://data.sec.gov/submissions/CIK0001801169.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Opendoor Technologies Inc. - Investor Relations FAQs",
        url: "https://investor.opendoor.com/ir-resources/faqs",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Opendoor Technologies Inc. entity submissions, CIK 0001801169",
        url: "https://data.sec.gov/submissions/CIK0001801169.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Opendoor Technologies Inc. - Investor Relations FAQs",
        url: "https://investor.opendoor.com/ir-resources/faqs",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "SEC EDGAR - Opendoor Technologies Inc. entity submissions, CIK 0001801169 (formerNames: Social Capital Hedosophia Holdings Corp. II, to 2020-12-18)",
        url: "https://data.sec.gov/submissions/CIK0001801169.json",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Opendoor Technologies Inc. - Investor Relations FAQs",
        url: "https://investor.opendoor.com/ir-resources/faqs",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Opendoor Technologies Inc. - Investor Relations FAQs",
        url: "https://investor.opendoor.com/ir-resources/faqs",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "wise": {
    companyId: "wise",
    name: "Wise",
    legalName: "Wise Group plc",
    website: "https://wise.com",
    description: "Global technology company providing cross border money transfers, multi currency accounts and cards for people and businesses, and payments infrastructure used by banks and platforms.",
    hqCity: "London",
    hqCountry: "United Kingdom",
    foundedYear: 2011,
    status: "public",
    statusDetail: null,
    sector: "Fintech",
    subsector: "cross border payments and multi currency accounts",
    tickers: [
      "NASDAQ:WSE",
      "LSE:WISE"
    ],
    formerNames: [
      "TransferWise"
    ],
    sources: [
      {
        field: "legalName",
        label: "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (Owner Relations, RNS)",
        url: "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR - Wise Group plc entity submissions, CIK 0002099039",
        url: "https://data.sec.gov/submissions/CIK0002099039.json",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Wise Group plc - Financial News (Owner Relations)",
        url: "https://owners.wise.com/news-events/financial-news",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Wise - Scheme of Arrangement, 27 April 2026 (Owner Relations, RNS)",
        url: "https://owners.wise.com/news-releases/news-release-details/scheme-arrangement",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (Owner Relations, RNS)",
        url: "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (About Wise boilerplate)",
        url: "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Wise Group plc entity submissions, CIK 0002099039 (business address 65 Clifton Street, London)",
        url: "https://data.sec.gov/submissions/CIK0002099039.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SEC EDGAR - Wise Group plc entity submissions, CIK 0002099039 (business address 65 Clifton Street, London)",
        url: "https://data.sec.gov/submissions/CIK0002099039.json",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (About Wise boilerplate, Launched in 2011)",
        url: "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (Owner Relations, RNS)",
        url: "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Wise Group plc - Financial News (Owner Relations)",
        url: "https://owners.wise.com/news-events/financial-news",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Wise Group plc entity submissions, CIK 0002099039",
        url: "https://data.sec.gov/submissions/CIK0002099039.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (Nasdaq:WSE, LSE:WISE)",
        url: "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Wise Group plc - Financial News (Nasdaq: WSE; LSE: WISE)",
        url: "https://owners.wise.com/news-events/financial-news",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Wise Group plc entity submissions, CIK 0002099039 (ticker WSE, exchange Nasdaq)",
        url: "https://data.sec.gov/submissions/CIK0002099039.json",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Wise - World, meet Wise, 22 February 2021 (company blog)",
        url: "https://wise.com/gb/blog/world-meet-wise",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (About Wise boilerplate)",
        url: "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (About Wise boilerplate)",
        url: "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "hingehealth": {
    companyId: "hingehealth",
    name: "Hinge Health",
    legalName: "Hinge Health, Inc.",
    website: "https://www.hingehealth.com",
    description: "Digital health company delivering virtual and in person musculoskeletal care, including physical therapy and orthopedic care, using an AI powered care model, connected devices and clinicians.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2014,
    status: "public",
    statusDetail: null,
    sector: "Digital Health",
    subsector: "virtual musculoskeletal care",
    tickers: [
      "NYSE:HNGE"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "SEC EDGAR - Hinge Health, Inc. entity submissions, CIK 0001673743",
        url: "https://data.sec.gov/submissions/CIK0001673743.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Hinge Health - Official Site",
        url: "https://www.hingehealth.com/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Hinge Health to acquire Cylinder Health (company press release, About Hinge Health boilerplate)",
        url: "https://www.businesswire.com/news/home/20260804144447/en/Hinge-Health-to-acquire-Cylinder-Health-expanding-into-gastrointestinal-care",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Hinge Health - Official Site",
        url: "https://www.hingehealth.com/",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Hinge Health, Inc. entity submissions, CIK 0001673743 (455 Market Street, 7th Floor, San Francisco, CA)",
        url: "https://data.sec.gov/submissions/CIK0001673743.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Hinge Health to acquire Cylinder Health (company press release, About Hinge Health boilerplate)",
        url: "https://www.businesswire.com/news/home/20260804144447/en/Hinge-Health-to-acquire-Cylinder-Health-expanding-into-gastrointestinal-care",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Hinge Health to acquire Cylinder Health (company press release, About Hinge Health boilerplate)",
        url: "https://www.businesswire.com/news/home/20260804144447/en/Hinge-Health-to-acquire-Cylinder-Health-expanding-into-gastrointestinal-care",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Fierce Healthcare - Hinge Health shares jump 17% in stock market debut",
        url: "https://www.fiercehealthcare.com/health-tech/hinge-health-shares-jump-17-stock-market-setting-stage-digital-health-ipo-revival",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Hinge Health, Inc. entity submissions, CIK 0001673743",
        url: "https://data.sec.gov/submissions/CIK0001673743.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Hinge Health to acquire Cylinder Health (company press release, NYSE: HNGE)",
        url: "https://www.businesswire.com/news/home/20260804144447/en/Hinge-Health-to-acquire-Cylinder-Health-expanding-into-gastrointestinal-care",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Hinge Health, Inc. entity submissions, CIK 0001673743 (ticker HNGE, exchange NYSE)",
        url: "https://data.sec.gov/submissions/CIK0001673743.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Hinge Health to acquire Cylinder Health (company press release, NYSE: HNGE)",
        url: "https://www.businesswire.com/news/home/20260804144447/en/Hinge-Health-to-acquire-Cylinder-Health-expanding-into-gastrointestinal-care",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Hinge Health - Official Site",
        url: "https://www.hingehealth.com/",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Hinge Health - Official Site",
        url: "https://www.hingehealth.com/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "hightouch": {
    companyId: "hightouch",
    name: "Hightouch",
    legalName: "Carry Technologies, Inc.",
    website: "https://hightouch.com",
    description: "Data activation software that syncs customer data from cloud data warehouses into marketing, advertising and other business tools, and provides customer data platform and audience decisioning features for enterprise teams.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: null,
    status: "private",
    statusDetail: null,
    sector: "Enterprise Software",
    subsector: "customer data platform and data activation from the cloud data warehouse",
    tickers: [],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Hightouch - Terms of Service",
        url: "https://hightouch.com/terms-of-service",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Hightouch - Platform Privacy Notice",
        url: "https://hightouch.com/platform-privacy",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Hightouch - Official Site",
        url: "https://hightouch.com/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Hightouch - Official Site",
        url: "https://hightouch.com/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Hightouch - About",
        url: "https://hightouch.com/about",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Hightouch - Platform Privacy Notice",
        url: "https://hightouch.com/platform-privacy",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Hightouch - Platform Privacy Notice",
        url: "https://hightouch.com/platform-privacy",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Hightouch - Raising $150M to build the AI platform for marketers",
        url: "https://hightouch.com/blog/hightouch-funding-series-d",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Hightouch - Official Site",
        url: "https://hightouch.com/",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Hightouch - Official Site",
        url: "https://hightouch.com/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "omadahealth": {
    companyId: "omadahealth",
    name: "Omada Health",
    legalName: "Omada Health, Inc.",
    website: "https://www.omadahealth.com",
    description: "Provides virtual care programs delivered between physician visits for cardiometabolic and musculoskeletal conditions, contracted through employers, health plans and other channel partners.",
    hqCity: "South San Francisco",
    hqCountry: "United States",
    foundedYear: 2011,
    status: "public",
    statusDetail: null,
    sector: "Digital Health",
    subsector: "virtual care programs for cardiometabolic and musculoskeletal conditions",
    tickers: [
      "NASDAQ:OMDA"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Omada Health, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR - Omada Health, Inc. submissions (CIK 0001611115)",
        url: "https://data.sec.gov/submissions/CIK0001611115.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Omada Health - Investor Relations",
        url: "https://investors.omadahealth.com/ir-resources/investor-faqs",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Omada Health, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Omada Health, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Omada Health, Inc. submissions (CIK 0001611115)",
        url: "https://data.sec.gov/submissions/CIK0001611115.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Omada Health, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Omada Health, Inc. - Form 10-K fiscal 2025",
        url: "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Omada Health - Investor FAQs",
        url: "https://investors.omadahealth.com/ir-resources/investor-faqs",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Omada Health, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Omada Health - Investor FAQs",
        url: "https://investors.omadahealth.com/ir-resources/investor-faqs",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Omada Health, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Omada Health - Investor FAQs",
        url: "https://investors.omadahealth.com/ir-resources/investor-faqs",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Omada Health, Inc. submissions (CIK 0001611115)",
        url: "https://data.sec.gov/submissions/CIK0001611115.json",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Omada Health, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Omada Health, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "coinbase": {
    companyId: "coinbase",
    name: "Coinbase",
    legalName: "Coinbase Global, Inc.",
    website: "https://www.coinbase.com",
    description: "Operates a platform for buying, selling, transferring, staking and storing crypto assets, serving retail users, institutions and developers.",
    hqCity: "New York",
    hqCountry: "United States",
    foundedYear: 2012,
    status: "public",
    statusDetail: null,
    sector: "Crypto",
    subsector: "crypto asset exchange, custody and related financial services",
    tickers: [
      "NASDAQ:COIN"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Coinbase Global, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Coinbase Global, Inc. - DEF 14C information statement on reincorporation",
        url: "https://www.sec.gov/Archives/edgar/data/1679788/000167978825000227/coin-def14cinformationstat.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR - Coinbase Global, Inc. submissions (CIK 0001679788)",
        url: "https://data.sec.gov/submissions/CIK0001679788.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Coinbase - About",
        url: "https://www.coinbase.com/about",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Coinbase - About",
        url: "https://www.coinbase.com/about",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Coinbase Global, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Coinbase Global, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Coinbase Global, Inc. submissions (CIK 0001679788)",
        url: "https://data.sec.gov/submissions/CIK0001679788.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Coinbase Global, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Coinbase Global, Inc. - Form 10-K fiscal 2025",
        url: "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Coinbase Global, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Coinbase Global, Inc. submissions (CIK 0001679788)",
        url: "https://data.sec.gov/submissions/CIK0001679788.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Coinbase Global, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Coinbase Global, Inc. submissions (CIK 0001679788)",
        url: "https://data.sec.gov/submissions/CIK0001679788.json",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Coinbase Global, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Coinbase Global, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "airbnb": {
    companyId: "airbnb",
    name: "Airbnb",
    legalName: "Airbnb, Inc.",
    website: "https://www.airbnb.com",
    description: "Operates a global online marketplace connecting guests with hosts offering stays, experiences and services.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2008,
    status: "public",
    statusDetail: null,
    sector: "Consumer",
    subsector: "online marketplace for short-term stays, experiences and services",
    tickers: [
      "NASDAQ:ABNB"
    ],
    formerNames: [
      "AirBed & Breakfast, Inc."
    ],
    sources: [
      {
        field: "legalName",
        label: "Airbnb, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR - Airbnb, Inc. submissions (CIK 0001559720)",
        url: "https://data.sec.gov/submissions/CIK0001559720.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Airbnb Newsroom - About Us",
        url: "https://news.airbnb.com/about-us/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Airbnb, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Airbnb, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Airbnb, Inc. submissions (CIK 0001559720)",
        url: "https://data.sec.gov/submissions/CIK0001559720.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Airbnb, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Airbnb, Inc. - Form S-1 registration statement",
        url: "https://www.sec.gov/Archives/edgar/data/1559720/000119312520294801/d81668ds1.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Airbnb, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Airbnb, Inc. submissions (CIK 0001559720)",
        url: "https://data.sec.gov/submissions/CIK0001559720.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Airbnb, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Airbnb, Inc. submissions (CIK 0001559720)",
        url: "https://data.sec.gov/submissions/CIK0001559720.json",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Airbnb, Inc. - Form S-1 registration statement",
        url: "https://www.sec.gov/Archives/edgar/data/1559720/000119312520294801/d81668ds1.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Airbnb, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Airbnb, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "doordash": {
    companyId: "doordash",
    name: "DoorDash",
    legalName: "DoorDash, Inc.",
    website: "https://www.doordash.com",
    description: "Operates local commerce marketplaces and a commerce platform that connect consumers with restaurants, grocers and retailers and fulfill on-demand delivery and pickup orders, including the DoorDash, Wolt and Deliveroo marketplaces.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2013,
    status: "public",
    statusDetail: null,
    sector: "Consumer",
    subsector: "local commerce marketplaces and last mile delivery fulfillment",
    tickers: [
      "NASDAQ:DASH"
    ],
    formerNames: [
      "Palo Alto Delivery Inc."
    ],
    sources: [
      {
        field: "legalName",
        label: "DoorDash, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR - DoorDash, Inc. submissions (CIK 0001792789)",
        url: "https://data.sec.gov/submissions/CIK0001792789.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "DoorDash - Official corporate site",
        url: "https://about.doordash.com/en-us",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "DoorDash, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "DoorDash - Official corporate site",
        url: "https://about.doordash.com/en-us",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "DoorDash, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - DoorDash, Inc. submissions (CIK 0001792789)",
        url: "https://data.sec.gov/submissions/CIK0001792789.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "DoorDash, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "DoorDash, Inc. - Form S-1 registration statement",
        url: "https://www.sec.gov/Archives/edgar/data/1792789/000119312520292381/d752207ds1.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "DoorDash, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - DoorDash, Inc. submissions (CIK 0001792789)",
        url: "https://data.sec.gov/submissions/CIK0001792789.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "DoorDash, Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - DoorDash, Inc. submissions (CIK 0001792789)",
        url: "https://data.sec.gov/submissions/CIK0001792789.json",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "DoorDash, Inc. - Form S-1 registration statement",
        url: "https://www.sec.gov/Archives/edgar/data/1792789/000119312520292381/d752207ds1.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "DoorDash, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "DoorDash, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "palantir": {
    companyId: "palantir",
    name: "Palantir",
    legalName: "Palantir Technologies Inc.",
    website: "https://www.palantir.com",
    description: "Builds software platforms that integrate data, decisions and operations at scale for government and commercial organizations.",
    hqCity: "Aventura",
    hqCountry: "United States",
    foundedYear: 2003,
    status: "public",
    statusDetail: null,
    sector: "Enterprise Software",
    subsector: "data integration and operational decision making platforms for government and commercial institutions",
    tickers: [
      "NASDAQ:PLTR"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Palantir Technologies Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR - Palantir Technologies Inc. submissions (CIK 0001321655)",
        url: "https://data.sec.gov/submissions/CIK0001321655.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Palantir - About",
        url: "https://www.palantir.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Palantir Technologies Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Palantir Technologies Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Palantir Technologies Inc. submissions (CIK 0001321655)",
        url: "https://data.sec.gov/submissions/CIK0001321655.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Palantir Technologies Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Palantir Technologies Inc. - Form 10-K fiscal 2025",
        url: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Palantir Technologies Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Palantir Technologies Inc. submissions (CIK 0001321655)",
        url: "https://data.sec.gov/submissions/CIK0001321655.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Palantir Technologies Inc. - Form 10-K fiscal 2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Palantir - Announces Transfer of Stock Exchange Listing to Nasdaq (SEC Exhibit 99.1)",
        url: "https://www.sec.gov/Archives/edgar/data/1321655/000132165524000219/pltr-exchangeswitchpressre.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Palantir Technologies Inc. submissions (CIK 0001321655)",
        url: "https://data.sec.gov/submissions/CIK0001321655.json",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Palantir Technologies Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Palantir Technologies Inc. - Form 10-K fiscal 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "notion": {
    companyId: "notion",
    name: "Notion",
    legalName: "Notion Labs, Inc.",
    website: "https://www.notion.com",
    description: "Software company offering an all-in-one workspace that combines notes, documents, wikis and databases for individuals and teams.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2013,
    status: "private",
    statusDetail: null,
    sector: "Enterprise Software",
    subsector: "all-in-one workspace for notes, wikis and databases",
    tickers: [],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Notion - Why we built Notion (About), copyright line 'c 2026 Notion Labs, Inc.'",
        url: "https://www.notion.com/about",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Notion - Careers, copyright line 'c 2026 Notion Labs, Inc.'",
        url: "https://www.notion.com/careers",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "TechCrunch - Work collaboration startup Notion cozies up to Silicon Valley's top accelerators ('Notion Labs, a profitable work tools startup')",
        url: "https://techcrunch.com/2019/11/12/work-collaboration-startup-notion-labs-cozies-up-to-silicon-valleys-top-accelerators/",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Notion - Why we built Notion (About), official site",
        url: "https://www.notion.com/about",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Notion - Why we built Notion (About), 'an all-in-one workspace'",
        url: "https://www.notion.com/about",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "TechCrunch - Notion combines notes, wikis and databases",
        url: "https://techcrunch.com/2019/11/12/work-collaboration-startup-notion-labs-cozies-up-to-silicon-valleys-top-accelerators/",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Notion - About, 'Notion is based in beautiful downtown San Francisco'",
        url: "https://www.notion.com/about",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Notion - About, 'Notion is based in beautiful downtown San Francisco'",
        url: "https://www.notion.com/about",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Notion blog - 100 million people now use Notion, 'We started in 2013'",
        url: "https://www.notion.com/blog/100-million-of-you",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "TechCrunch - Notion hits $2 billion valuation in new raise (venture financing, privately held)",
        url: "https://techcrunch.com/2020/04/01/notion-hits-2-billion-valuation-in-new-raise/",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Notion - About, all-in-one workspace product for teams",
        url: "https://www.notion.com/about",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "TechCrunch - Notion combines notes, wikis and databases",
        url: "https://techcrunch.com/2019/11/12/work-collaboration-startup-notion-labs-cozies-up-to-silicon-valleys-top-accelerators/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "instacart": {
    companyId: "instacart",
    name: "Instacart",
    legalName: "Maplebear Inc.",
    website: "https://www.instacart.com",
    description: "Online grocery company operating a marketplace for grocery ordering and delivery and supplying e-commerce, fulfillment and advertising technology to retailers.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2012,
    status: "public",
    statusDetail: null,
    sector: "Ecommerce",
    subsector: "online grocery marketplace and retail enablement technology",
    tickers: [
      "NASDAQ:CART"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "SEC EDGAR - Maplebear Inc. Form 10-K FY2024, 'We were incorporated as Maplebear Inc. in Delaware in 2012, and we do business as Instacart.'",
        url: "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR submissions data - name 'Maplebear Inc.'",
        url: "https://data.sec.gov/submissions/CIK0001579091.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Instacart - Company / About Us, official site",
        url: "https://www.instacart.com/company/about-us",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "SEC EDGAR - Form 10-K FY2024 Item 1 Business, 'Instacart is powering the future of grocery through technology. We partner with retailers...'",
        url: "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Form 10-K FY2024 cover, principal executive offices '50 Beale Street, Suite 600, San Francisco, California 94105'",
        url: "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SEC EDGAR - Form 10-K FY2024 cover, principal executive offices in California",
        url: "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "SEC EDGAR - Form 10-K FY2024, 'Instacart was founded in 2012 to bring the grocery industry online'",
        url: "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Instacart - About Us timeline 2012, 'Founded by Apoorva Mehta, Max Mullen and Brandon Leonardo'",
        url: "https://www.instacart.com/company/about-us",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions data - current tickers ['CART'], exchanges ['Nasdaq']",
        url: "https://data.sec.gov/submissions/CIK0001579091.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Form 10-K FY2024 cover, securities registered on the Nasdaq Global Select Market",
        url: "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions data - current tickers ['CART'], exchanges ['Nasdaq']",
        url: "https://data.sec.gov/submissions/CIK0001579091.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Form 10-K FY2024 cover, 'Common Stock, par value $0.0001 per share' / 'CART' / 'Nasdaq Global Select Market'",
        url: "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "SEC EDGAR - Form 10-K FY2024 Item 1 Business, online grocery and retail enablement",
        url: "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "SEC EDGAR - Form 10-K FY2024 Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "lyft": {
    companyId: "lyft",
    name: "Lyft",
    legalName: "Lyft, Inc.",
    website: "https://www.lyft.com",
    description: "Mobility platform offering rideshare, taxis, private hire vehicles, executive chauffeur services, car sharing, bikes and scooters.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2012,
    status: "public",
    statusDetail: null,
    sector: "Mobility",
    subsector: "rideshare and multimodal mobility platform",
    tickers: [
      "NASDAQ:LYFT"
    ],
    formerNames: [
      "Bounder Web, Inc.",
      "Zimride, Inc."
    ],
    sources: [
      {
        field: "legalName",
        label: "SEC EDGAR - Lyft, Inc. Form 10-K FY2025 cover page registrant name",
        url: "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR submissions data - name 'Lyft, Inc.'",
        url: "https://data.sec.gov/submissions/CIK0001759509.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Lyft - official site, footer identifies Lyft, Inc.",
        url: "https://www.lyft.com/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "SEC EDGAR - Form 10-K FY2025 Item 1 Business, 'Lyft, Inc. ... operates as a global mobility platform offering a mix of rideshare, taxis, private hire vehicles, executive chauffeur services, car sharing, bikes and scooters.'",
        url: "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Form 10-K FY2025 cover, principal executive offices '185 Berry Street, Suite 400, San Francisco, California 94107'",
        url: "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SEC EDGAR - Form 10-K FY2025 cover, principal executive offices in California",
        url: "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "SEC EDGAR - Lyft Form S-1 Corporate Information, 'We founded Lyft in 2012'",
        url: "https://www.sec.gov/Archives/edgar/data/1759509/000119312519059849/d633517ds1.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Form 10-K FY2025 cover, Class A common stock registered on the Nasdaq Global Select Market",
        url: "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions data - current tickers ['LYFT'], exchanges ['Nasdaq']",
        url: "https://data.sec.gov/submissions/CIK0001759509.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Form 10-K FY2025 cover, 'Class A common stock, par value of $0.00001 per share' / 'LYFT' / 'Nasdaq Global Select Market'",
        url: "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions data - current tickers ['LYFT'], exchanges ['Nasdaq']",
        url: "https://data.sec.gov/submissions/CIK0001759509.json",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "SEC EDGAR - Form 10-K FY2025 Item 1 Business, 'global mobility platform'",
        url: "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "SEC EDGAR - Form 10-K FY2025 Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "SEC EDGAR - Lyft Form S-1 Corporate Information, 'We were incorporated in 2007 as Bounder Web, Inc., a Delaware corporation. In 2008, we changed our name to Zimride, Inc. We founded Lyft in 2012 and changed our name to Lyft, Inc. in 2013 when we sold the assets related to our Zimride operations.'",
        url: "https://www.sec.gov/Archives/edgar/data/1759509/000119312519059849/d633517ds1.htm",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "openai": {
    companyId: "openai",
    name: "OpenAI",
    legalName: "OpenAI Group PBC",
    website: "https://openai.com",
    description: "AI research and deployment company. Its business is operated by a public benefit corporation controlled by the nonprofit OpenAI Foundation.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2015,
    status: "private",
    statusDetail: null,
    sector: "AI",
    subsector: "AI research and deployment",
    tickers: [],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "OpenAI - Our structure, 'The for-profit is now a public benefit corporation, called OpenAI Group PBC'",
        url: "https://openai.com/our-structure/",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "OpenAI - Built to benefit everyone, 'OpenAI has completed its recapitalization, simplifying its corporate structure.'",
        url: "https://openai.com/index/built-to-benefit-everyone/",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "OpenAI - About, official site",
        url: "https://openai.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "OpenAI - About, 'OpenAI is an AI research and deployment company.'",
        url: "https://openai.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "OpenAI - Our structure, nonprofit OpenAI Foundation controls OpenAI Group PBC",
        url: "https://openai.com/our-structure/",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "OpenAI - Terms of use, entity notice address '1455 3rd Street, San Francisco, CA 94158'",
        url: "https://openai.com/policies/terms-of-use/",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "OpenAI - Terms of use, entity notice address in San Francisco, CA",
        url: "https://openai.com/policies/terms-of-use/",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "OpenAI - Introducing OpenAI, published December 11, 2015 announcing the founding of the organisation",
        url: "https://openai.com/index/introducing-openai/",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "OpenAI - Our structure, equity held by the OpenAI Foundation (26 percent), Microsoft (approximately 27 percent) and current and former employees and investors (47 percent); no public listing",
        url: "https://openai.com/our-structure/",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "OpenAI - About, 'OpenAI is an AI research and deployment company.'",
        url: "https://openai.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "OpenAI - About, 'OpenAI is an AI research and deployment company.'",
        url: "https://openai.com/about/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "replit": {
    companyId: "replit",
    name: "Replit",
    legalName: "Replit, Inc.",
    website: "https://replit.com",
    description: "Cloud software development platform providing an in-browser coding environment, an AI agent for building applications, and hosting and deployment.",
    hqCity: "Foster City",
    hqCountry: "United States",
    foundedYear: 2016,
    status: "private",
    statusDetail: null,
    sector: "Developer Tools & Infrastructure",
    subsector: "browser-based development environment and AI application building platform",
    tickers: [],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Replit - Terms of Service, service provided by 'Replit, Inc.'",
        url: "https://replit.com/site/terms",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Replit - Privacy Policy, 'Replit, Inc.' with mailing address",
        url: "https://replit.com/site/privacy",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Replit - About Us, official site",
        url: "https://replit.com/about",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Replit - About Us, platform and AI Agent for building software",
        url: "https://replit.com/about",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Replit - Careers, 'The majority of our team works together at our Foster City HQ on Mondays, Wednesdays, and Fridays.'",
        url: "https://replit.com/careers",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Replit - Privacy Policy, '1001 E Hillsdale Blvd, Suite 400, Foster City, CA 94404'",
        url: "https://replit.com/site/privacy",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Replit - Careers, Foster City HQ; footer 'Made in sunny California'",
        url: "https://replit.com/careers",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "TechCrunch - After nine years of grinding, Replit finally found its market, 'Replit was founded in 2016'",
        url: "https://techcrunch.com/2025/10/02/after-nine-years-of-grinding-replit-finally-found-its-market-can-it-keep-it/",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "TechCrunch - Replit snags $9B valuation, 'Replit raised a $400 million Series D at a $9 billion valuation, led by previous investor Georgian Partners.' (private venture financing, March 2026)",
        url: "https://techcrunch.com/2026/03/11/replit-snags-9b-valuation-6-months-after-hitting-3b/",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Replit - About Us, software creation platform",
        url: "https://replit.com/about",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Replit - About Us, platform and AI Agent for building software",
        url: "https://replit.com/about",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "spotify": {
    companyId: "spotify",
    name: "Spotify",
    legalName: "Spotify Technology S.A.",
    website: "https://www.spotify.com",
    description: "Audio streaming service offering music, podcasts and audiobooks on ad-supported and subscription tiers.",
    hqCity: "Luxembourg",
    hqCountry: "Luxembourg",
    foundedYear: null,
    status: "public",
    statusDetail: null,
    sector: "Consumer",
    subsector: "audio streaming subscription service",
    tickers: [
      "NYSE:SPOT"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "SEC EDGAR - Spotify Technology S.A. Form 20-F FY2025 cover page registrant name",
        url: "https://www.sec.gov/Archives/edgar/data/1639920/000162828026006874/ck0001639920-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR submissions data - name 'Spotify Technology S.A.'",
        url: "https://data.sec.gov/submissions/CIK0001639920.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Spotify Newsroom - Company Info, official site",
        url: "https://newsroom.spotify.com/company-info/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Spotify Newsroom - Company Info, audio streaming subscription service covering music, podcasting and audiobooks",
        url: "https://newsroom.spotify.com/company-info/",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Form 20-F FY2025 cover, '(Address of principal executive offices)' given as '33 Boulevard Prince Henri, L-1724 Luxembourg, Grand Duchy of Luxembourg'",
        url: "https://www.sec.gov/Archives/edgar/data/1639920/000162828026006874/ck0001639920-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR submissions data - business address 33 Boulevard Prince Henri, Luxembourg",
        url: "https://data.sec.gov/submissions/CIK0001639920.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SEC EDGAR - Form 20-F FY2025 cover, principal executive offices in the Grand Duchy of Luxembourg; jurisdiction of incorporation Grand Duchy of Luxembourg",
        url: "https://www.sec.gov/Archives/edgar/data/1639920/000162828026006874/ck0001639920-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SEC EDGAR - Form 20-F FY2022 cover, principal executive offices '5, Place de la Gare, L-1616 Luxembourg, Grand Duchy of Luxembourg'",
        url: "https://www.sec.gov/Archives/edgar/data/1639920/000163992023000004/ck0001639920-20221231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Form 20-F FY2025 cover, Ordinary Shares registered on the New York Stock Exchange",
        url: "https://www.sec.gov/Archives/edgar/data/1639920/000162828026006874/ck0001639920-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions data - current tickers ['SPOT'], exchanges ['NYSE']",
        url: "https://data.sec.gov/submissions/CIK0001639920.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Form 20-F FY2025 cover, 'Ordinary Shares (par value of EUR 0.000625 per share)' / 'SPOT' / 'New York Stock Exchange'",
        url: "https://www.sec.gov/Archives/edgar/data/1639920/000162828026006874/ck0001639920-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions data - current tickers ['SPOT'], exchanges ['NYSE']",
        url: "https://data.sec.gov/submissions/CIK0001639920.json",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Spotify Newsroom - Company Info, consumer audio streaming subscription service",
        url: "https://newsroom.spotify.com/company-info/",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Spotify Newsroom - Company Info",
        url: "https://newsroom.spotify.com/company-info/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "sofi": {
    companyId: "sofi",
    name: "SoFi",
    legalName: "SoFi Technologies, Inc.",
    website: "https://www.sofi.com",
    description: "Digital financial services company offering personal, student and home loans, banking through SoFi Bank, National Association, investing products, and a technology platform providing banking and payment processing services to other businesses.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2011,
    status: "public",
    statusDetail: null,
    sector: "Fintech",
    subsector: "digital personal finance, lending and banking",
    tickers: [
      "NASDAQ:SOFI"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "SoFi Technologies, Inc. - Form 10-Q for the quarter ended June 30, 2026 (SEC EDGAR) - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1818874/000181887426000054/sofi-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SoFi Technologies, Inc. - Form 10-Q for the quarter ended June 30, 2026 (SEC EDGAR) - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1818874/000181887426000054/sofi-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SoFi Technologies, Inc. - Form 10-Q for the quarter ended June 30, 2026 (SEC EDGAR) - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1818874/000181887426000054/sofi-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SoFi Technologies, Inc. - Form 10-Q for the quarter ended June 30, 2026 (SEC EDGAR) - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1818874/000181887426000054/sofi-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SoFi Technologies, Inc. - Form 10-Q for the quarter ended June 30, 2026 (SEC EDGAR) - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1818874/000181887426000054/sofi-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record - SoFi Technologies, Inc. (CIK 0001818874)",
        url: "https://data.sec.gov/submissions/CIK0001818874.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record - SoFi Technologies, Inc. (CIK 0001818874)",
        url: "https://data.sec.gov/submissions/CIK0001818874.json",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR submissions record - SoFi Technologies, Inc. (CIK 0001818874)",
        url: "https://data.sec.gov/submissions/CIK0001818874.json",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "SoFi Technologies, Inc. - Form 10-K for fiscal year 2024 (SEC EDGAR) - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1818874/000181887425000016/sofi-20241231.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "SoFi Technologies, Inc. - Form 10-K for fiscal year 2024 (SEC EDGAR) - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1818874/000181887425000016/sofi-20241231.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "SoFi Technologies, Inc. - Form 10-K for fiscal year 2024 (SEC EDGAR) - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1818874/000181887425000016/sofi-20241231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "SoFi Technologies, Inc. - Form 10-K for fiscal year 2024 (SEC EDGAR) - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1818874/000181887425000016/sofi-20241231.htm",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "SoFi - Legal and licences page (official site)",
        url: "https://www.sofi.com/legal/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "warbyparker": {
    companyId: "warbyparker",
    name: "Warby Parker",
    legalName: "Warby Parker Inc.",
    website: "https://www.warbyparker.com",
    description: "Eyewear company that designs and sells prescription glasses, sunglasses and contact lenses directly to consumers through its website and its own retail stores, and provides eye exams and vision tests.",
    hqCity: "New York",
    hqCountry: "United States",
    foundedYear: 2010,
    status: "public",
    statusDetail: null,
    sector: "Consumer",
    subsector: "direct-to-consumer eyewear and eye care",
    tickers: [
      "NYSE:WRBY"
    ],
    formerNames: [
      "JAND, Inc."
    ],
    sources: [
      {
        field: "legalName",
        label: "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Warby Parker Inc. - Form 424B4 IPO prospectus, 29 September 2021 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1504776/000162828021019236/warbyparkerinc424b4.htm",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Warby Parker Inc. - Form 424B4 IPO prospectus, 29 September 2021 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1504776/000162828021019236/warbyparkerinc424b4.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Warby Parker Inc. - Form 424B4 IPO prospectus, 29 September 2021 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1504776/000162828021019236/warbyparkerinc424b4.htm",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Eleventh Amended and Restated Certificate of Incorporation, Exhibit 3.1 to Warby Parker Form S-1 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1504776/000162828021017546/exhibit31-sx1.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record - Warby Parker Inc. (CIK 0001504776)",
        url: "https://data.sec.gov/submissions/CIK0001504776.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record - Warby Parker Inc. (CIK 0001504776)",
        url: "https://data.sec.gov/submissions/CIK0001504776.json",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "SEC EDGAR submissions record - Warby Parker Inc. (CIK 0001504776)",
        url: "https://data.sec.gov/submissions/CIK0001504776.json",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "figma": {
    companyId: "figma",
    name: "Figma",
    legalName: "Figma, Inc.",
    website: "https://www.figma.com",
    description: "Browser-based collaborative platform used by designers, developers, product managers and researchers to design, prototype and build digital products.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2012,
    status: "public",
    statusDetail: null,
    sector: "Enterprise Software",
    subsector: "collaborative interface design and prototyping software",
    tickers: [
      "NYSE:FIG"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Figma, Inc. - Form 10-Q for the quarter ended March 31, 2026 (SEC EDGAR) - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828026035209/fig-20260331.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Figma, Inc. - Form 10-Q for the quarter ended March 31, 2026 (SEC EDGAR) - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828026035209/fig-20260331.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Figma, Inc. - Form 10-Q for the quarter ended March 31, 2026 (SEC EDGAR) - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828026035209/fig-20260331.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Figma, Inc. - Form 10-Q for the quarter ended March 31, 2026 (SEC EDGAR) - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828026035209/fig-20260331.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Figma, Inc. - Form 424B4 IPO prospectus, 31 July 2025 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Figma, Inc. - Form 424B4 IPO prospectus, 31 July 2025 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Figma, Inc. - Form 424B4 IPO prospectus, 31 July 2025 (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record - Figma, Inc. (CIK 0001579878)",
        url: "https://data.sec.gov/submissions/CIK0001579878.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record - Figma, Inc. (CIK 0001579878)",
        url: "https://data.sec.gov/submissions/CIK0001579878.json",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "docusign": {
    companyId: "docusign",
    name: "DocuSign",
    legalName: "Docusign, Inc.",
    website: "https://www.docusign.com",
    description: "Software company providing electronic signature, intelligent agreement management and contract lifecycle management products used by organizations to prepare, sign, act on and manage agreements.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2003,
    status: "public",
    statusDetail: null,
    sector: "Enterprise Software",
    subsector: "electronic signature and agreement management software",
    tickers: [
      "NASDAQ:DOCU"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2025 (SEC EDGAR) - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133325000024/docu-20250131.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2025 (SEC EDGAR) - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133325000024/docu-20250131.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2025 (SEC EDGAR) - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133325000024/docu-20250131.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Docusign, Inc. - Form 10-Q for the quarter ended April 30, 2026 (SEC EDGAR) - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000074/docu-20260430.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Docusign, Inc. - Form 10-Q for the quarter ended April 30, 2026 (SEC EDGAR) - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000074/docu-20260430.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record - DOCUSIGN, INC. (CIK 0001261333)",
        url: "https://data.sec.gov/submissions/CIK0001261333.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record - DOCUSIGN, INC. (CIK 0001261333)",
        url: "https://data.sec.gov/submissions/CIK0001261333.json",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "postmates": {
    companyId: "postmates",
    name: "Postmates",
    legalName: "Postmates Inc.",
    website: "https://postmates.com",
    description: "On-demand local delivery service in the United States that delivers food, drinks, groceries and other goods from merchants to consumers. Operates as part of Uber following the 2020 acquisition.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2011,
    status: "acquired",
    statusDetail: "Acquired by Uber Technologies, Inc. in 2020",
    sector: "Logistics",
    subsector: "on-demand local delivery marketplace",
    tickers: [],
    formerNames: [],
    sources: [
      {
        field: "status",
        label: "Uber Technologies, Inc. - Exhibit 99.1 to Form 8-K, press release 'Uber Completes Acquisition of Postmates' (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000155278120000580/e20585_ex99-1.htm",
        checked: "2026-09-02"
      },
      {
        field: "statusDetail",
        label: "Uber Technologies, Inc. - Exhibit 99.1 to Form 8-K, press release 'Uber Completes Acquisition of Postmates' (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000155278120000580/e20585_ex99-1.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Uber Technologies, Inc. - Exhibit 99.1 to Form 8-K, press release 'Uber Completes Acquisition of Postmates' (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000155278120000580/e20585_ex99-1.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Uber Technologies, Inc. - Exhibit 99.1 to Form 8-K, press release 'Uber Completes Acquisition of Postmates' (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000155278120000580/e20585_ex99-1.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Uber Technologies, Inc. - Exhibit 99.1 to Form 8-K, press release 'Uber Completes Acquisition of Postmates' (SEC EDGAR)",
        url: "https://www.sec.gov/Archives/edgar/data/1543151/000155278120000580/e20585_ex99-1.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Uber Technologies, Inc. Investor Relations - 'Uber Completes Acquisition of Postmates', 1 December 2020",
        url: "https://investor.uber.com/news-events/news/press-release-details/2020/Uber-Completes-Acquisition-of-Postmates/default.aspx",
        checked: "2026-09-02"
      },
      {
        field: "statusDetail",
        label: "Uber Technologies, Inc. Investor Relations - 'Uber Completes Acquisition of Postmates', 1 December 2020",
        url: "https://investor.uber.com/news-events/news/press-release-details/2020/Uber-Completes-Acquisition-of-Postmates/default.aspx",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Uber Technologies, Inc. Investor Relations - 'Uber Completes Acquisition of Postmates', 1 December 2020",
        url: "https://investor.uber.com/news-events/news/press-release-details/2020/Uber-Completes-Acquisition-of-Postmates/default.aspx",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Postmates Inc. - Form D notice of exempt offering, filed 25 June 2015 (SEC EDGAR, CIK 0001645606)",
        url: "https://www.sec.gov/Archives/edgar/data/1645606/000164560615000001/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Postmates Inc. - Form D notice of exempt offering, filed 25 June 2015 (SEC EDGAR, CIK 0001645606)",
        url: "https://www.sec.gov/Archives/edgar/data/1645606/000164560615000001/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Postmates Inc. - Form D notice of exempt offering, filed 25 June 2015 (SEC EDGAR, CIK 0001645606)",
        url: "https://www.sec.gov/Archives/edgar/data/1645606/000164560615000001/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Postmates Inc. - Form D notice of exempt offering, filed 25 June 2015 (SEC EDGAR, CIK 0001645606)",
        url: "https://www.sec.gov/Archives/edgar/data/1645606/000164560615000001/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Postmates - official site (postmates.com)",
        url: "https://postmates.com/",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Postmates - official site (postmates.com)",
        url: "https://postmates.com/",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Postmates - official site (postmates.com)",
        url: "https://postmates.com/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Postmates - official site (postmates.com)",
        url: "https://postmates.com/",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Postmates - official site (postmates.com)",
        url: "https://postmates.com/",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Postmates - official site (postmates.com)",
        url: "https://postmates.com/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "databricks": {
    companyId: "databricks",
    name: "Databricks",
    legalName: "Databricks, Inc.",
    website: "https://www.databricks.com",
    description: "Cloud-based data and AI platform used by organizations to store, govern and process data and to build and run data and AI applications.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2013,
    status: "private",
    statusDetail: null,
    sector: "Developer Tools & Infrastructure",
    subsector: "cloud data and AI platform (lakehouse)",
    tickers: [],
    formerNames: [],
    sources: [
      {
        field: "description",
        label: "Databricks - About Us (official site)",
        url: "https://www.databricks.com/company/about-us",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Databricks - About Us (official site)",
        url: "https://www.databricks.com/company/about-us",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Databricks - About Us (official site)",
        url: "https://www.databricks.com/company/about-us",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Databricks - About Us (official site)",
        url: "https://www.databricks.com/company/about-us",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Databricks - About Us (official site)",
        url: "https://www.databricks.com/company/about-us",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Databricks - About Us (official site)",
        url: "https://www.databricks.com/company/about-us",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Databricks - About Us (official site)",
        url: "https://www.databricks.com/company/about-us",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Databricks, Inc. - Form D notice of exempt offering, filed 27 August 2026 (SEC EDGAR, CIK 0001587468)",
        url: "https://www.sec.gov/Archives/edgar/data/1587468/000158746826000002/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Databricks, Inc. - Form D notice of exempt offering, filed 27 August 2026 (SEC EDGAR, CIK 0001587468)",
        url: "https://www.sec.gov/Archives/edgar/data/1587468/000158746826000002/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Databricks, Inc. - Form D notice of exempt offering, filed 27 August 2026 (SEC EDGAR, CIK 0001587468)",
        url: "https://www.sec.gov/Archives/edgar/data/1587468/000158746826000002/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Databricks, Inc. - Form D notice of exempt offering, filed 27 August 2026 (SEC EDGAR, CIK 0001587468)",
        url: "https://www.sec.gov/Archives/edgar/data/1587468/000158746826000002/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR submissions record - Databricks, Inc. (CIK 0001587468)",
        url: "https://data.sec.gov/submissions/CIK0001587468.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record - Databricks, Inc. (CIK 0001587468)",
        url: "https://data.sec.gov/submissions/CIK0001587468.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Databricks newsroom - 'Databricks is Raising a Strategic Round of Funding at a $188 Billion Valuation', 16 July 2026",
        url: "https://www.databricks.com/company/newsroom/press-releases/databricks-raising-strategic-round-funding-188-billion-valuation",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "robinhood": {
    companyId: "robinhood",
    name: "Robinhood",
    legalName: "Robinhood Markets, Inc.",
    website: "https://robinhood.com",
    description: "Financial services company operating a retail brokerage platform, offering retail brokerage, crypto, advisory, digital banking services and private markets access.",
    hqCity: "Menlo Park",
    hqCountry: "United States",
    foundedYear: 2013,
    status: "public",
    statusDetail: null,
    sector: "Fintech",
    subsector: "retail brokerage and financial services platform",
    tickers: [
      "NASDAQ:HOOD"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Robinhood Markets, Inc. Form 10-K (FY2025) cover page - SEC EDGAR",
        url: "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000029/hood-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR submissions record CIK 0001783879",
        url: "https://data.sec.gov/submissions/CIK0001783879.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Robinhood - Official Site, About Us",
        url: "https://robinhood.com/us/en/about-us/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Robinhood Investor Relations - company overview boilerplate",
        url: "https://investors.robinhood.com/overview/default.aspx",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Robinhood - Official Site, About Us",
        url: "https://robinhood.com/us/en/about-us/",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Robinhood Markets, Inc. Form 10-K (FY2025) cover page - address of principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000029/hood-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Robinhood Markets, Inc. Form 10-K (FY2025) cover page - address of principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000029/hood-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Robinhood Markets, Inc. Form 10-K (FY2025), Item 1 Business - \"Robinhood was founded in 2013\"",
        url: "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000029/hood-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Robinhood Markets, Inc. Form 10-K (FY2025) cover page - securities registered under Section 12(b)",
        url: "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000029/hood-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record CIK 0001783879 - tickers and exchanges",
        url: "https://data.sec.gov/submissions/CIK0001783879.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Robinhood Markets, Inc. Form 10-K (FY2025) cover page - Class A Common Stock, trading symbol HOOD, The Nasdaq Stock Market",
        url: "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000029/hood-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Robinhood Investor Relations - \"Robinhood Markets, Inc. (NASDAQ: HOOD)\"",
        url: "https://investors.robinhood.com/overview/default.aspx",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Robinhood Markets, Inc. SEC EDGAR record - SIC 6211 Security Brokers, Dealers & Flotation Companies",
        url: "https://data.sec.gov/submissions/CIK0001783879.json",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Robinhood Investor Relations - company overview boilerplate",
        url: "https://investors.robinhood.com/overview/default.aspx",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "nubank": {
    companyId: "nubank",
    name: "Nubank",
    legalName: "Nu Holdings Ltd.",
    website: "https://nubank.com.br",
    description: "Holding company of the Nu (Nubank) group, a digital bank and financial services provider serving customers in Brazil, Mexico and Colombia.",
    hqCity: "São Paulo",
    hqCountry: "Brazil",
    foundedYear: 2013,
    status: "public",
    statusDetail: null,
    sector: "Fintech",
    subsector: "digital banking and consumer financial services",
    tickers: [
      "NYSE:NU"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Nu Holdings Ltd. Form 20-F (FY2025) cover page - name of registrant - SEC EDGAR",
        url: "https://www.sec.gov/Archives/edgar/data/1691493/000129281426002166/nuform20f_2025.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR submissions record CIK 0001691493",
        url: "https://data.sec.gov/submissions/CIK0001691493.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Nubank - Official Site (Nu Pagamentos S.A - Instituicao de Pagamento, CNPJ 18.236.120/0001-58 in footer)",
        url: "https://nubank.com.br/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Nu Holdings Ltd. Form 6-K, Q2 2026 results press release - \"About Nu\" boilerplate - SEC EDGAR",
        url: "https://www.sec.gov/Archives/edgar/data/1691493/000129281426004222/nupr2q26_6k.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Nu International - about page",
        url: "https://international.nubank.com.br/about/",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR filer business address for Nu Holdings Ltd., CIK 0001691493 - Rua Capote Valente, 39, Pinheiros, São Paulo, SP, Brazil",
        url: "https://data.sec.gov/submissions/CIK0001691493.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Nu International - about page, Rua Capote Valente, 39 - São Paulo, SP",
        url: "https://international.nubank.com.br/about/",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SEC EDGAR filer business address for Nu Holdings Ltd., CIK 0001691493 - São Paulo, SP, Brazil",
        url: "https://data.sec.gov/submissions/CIK0001691493.json",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Nu Holdings Ltd. Form 20-F (FY2025) - \"We began our journey in 2013 with a small team, launching our first product, the Nu Credit Card, in Brazil in 2014.\"",
        url: "https://www.sec.gov/Archives/edgar/data/1691493/000129281426002166/nuform20f_2025.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Nu Holdings Ltd. Form 20-F (FY2025) cover page - securities registered under Section 12(b), New York Stock Exchange",
        url: "https://www.sec.gov/Archives/edgar/data/1691493/000129281426002166/nuform20f_2025.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Nu Holdings Ltd. Form 20-F (FY2025) cover page - Class A ordinary shares, trading symbol NU, New York Stock Exchange",
        url: "https://www.sec.gov/Archives/edgar/data/1691493/000129281426002166/nuform20f_2025.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Nu Holdings Ltd. Form 6-K, Q2 2026 results press release - \"NYSE: NU\"",
        url: "https://www.sec.gov/Archives/edgar/data/1691493/000129281426004222/nupr2q26_6k.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Nu Holdings Ltd. SEC EDGAR record - SIC 6199 Finance Services",
        url: "https://data.sec.gov/submissions/CIK0001691493.json",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Nu Holdings Ltd. Form 6-K, Q2 2026 results press release - \"About Nu\" boilerplate",
        url: "https://www.sec.gov/Archives/edgar/data/1691493/000129281426004222/nupr2q26_6k.htm",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "box": {
    companyId: "box",
    name: "Box",
    legalName: "Box, Inc.",
    website: "https://www.box.com",
    description: "Cloud content management company whose platform lets organizations store, share and secure content, manage its lifecycle and automate content-centric workflows.",
    hqCity: "Redwood City",
    hqCountry: "United States",
    foundedYear: 2005,
    status: "public",
    statusDetail: null,
    sector: "Enterprise Software",
    subsector: "intelligent content management platform",
    tickers: [
      "NYSE:BOX"
    ],
    formerNames: [
      "Box.Net, Inc."
    ],
    sources: [
      {
        field: "legalName",
        label: "Box, Inc. Form 10-K (FY ended 2026-01-31) cover page - SEC EDGAR",
        url: "https://www.sec.gov/Archives/edgar/data/1372612/000119312526098466/box-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Box Investor Relations - Box, Inc.",
        url: "https://www.boxinvestorrelations.com/home/default.aspx",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Box - Official Site, About Us",
        url: "https://www.box.com/about-us",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Box - Official Site, About Us",
        url: "https://www.box.com/about-us",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Box press release - \"About Box\" boilerplate",
        url: "https://www.businesswire.com/news/home/20260220400511/en/Box-to-Present-at-Investor-Conference",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Box, Inc. Form 10-K (FY ended 2026-01-31) cover page - 900 Jefferson Ave. Redwood City, California 94063",
        url: "https://www.sec.gov/Archives/edgar/data/1372612/000119312526098466/box-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Box press release - \"Box is headquartered in Redwood City, CA\"",
        url: "https://www.businesswire.com/news/home/20260220400511/en/Box-to-Present-at-Investor-Conference",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Box, Inc. Form 10-K (FY ended 2026-01-31) cover page - Redwood City, California",
        url: "https://www.sec.gov/Archives/edgar/data/1372612/000119312526098466/box-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Box, Inc. Form 10-K - \"We were incorporated in 2005 as Box.Net, Inc., a Washington corporation\"",
        url: "https://www.sec.gov/Archives/edgar/data/1372612/000119312526098466/box-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Box press release - \"Founded in 2005\"",
        url: "https://www.businesswire.com/news/home/20260220400511/en/Box-to-Present-at-Investor-Conference",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record CIK 0001372612 - exchange NYSE, ticker BOX",
        url: "https://data.sec.gov/submissions/CIK0001372612.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Box, Inc. Form 10-K (FY ended 2026-01-31), filed 2026-03-09 - securities registered under Section 12(b)",
        url: "https://www.sec.gov/Archives/edgar/data/1372612/000119312526098466/box-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Box press release - \"Box (NYSE:BOX)\"",
        url: "https://www.businesswire.com/news/home/20260220400511/en/Box-to-Present-at-Investor-Conference",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record CIK 0001372612 - exchange NYSE, ticker BOX",
        url: "https://data.sec.gov/submissions/CIK0001372612.json",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Box, Inc. Form 10-K - \"In November 2011, we changed our name to Box, Inc.\"",
        url: "https://www.sec.gov/Archives/edgar/data/1372612/000119312526098466/box-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "SEC EDGAR submissions record CIK 0001372612 - former name BOX.NET INC (2006-08-10 to 2011-10-17)",
        url: "https://data.sec.gov/submissions/CIK0001372612.json",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Box, Inc. SEC EDGAR record - SIC 7372 Services-Prepackaged Software",
        url: "https://data.sec.gov/submissions/CIK0001372612.json",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Box - Official Site, About Us - \"Box is the leader in Intelligent Content Management\"",
        url: "https://www.box.com/about-us",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "chime": {
    companyId: "chime",
    name: "Chime",
    legalName: "Chime Financial, Inc.",
    website: "https://www.chime.com",
    description: "Financial technology company, not a bank, that offers consumer banking products through partner banks The Bancorp Bank, N.A. and Stride Bank, N.A., covering spending, saving, liquidity access and credit building. Its revenue comes primarily from interchange fees.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2012,
    status: "public",
    statusDetail: null,
    sector: "Fintech",
    subsector: "consumer banking products delivered through partner banks",
    tickers: [
      "NASDAQ:CHYM"
    ],
    formerNames: [
      "1debit, Inc."
    ],
    sources: [
      {
        field: "legalName",
        label: "Chime Financial, Inc. Form 10-K (FY2025) cover page - SEC EDGAR",
        url: "https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR submissions record CIK 0001795586",
        url: "https://data.sec.gov/submissions/CIK0001795586.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Chime - Official Site, About Us",
        url: "https://www.chime.com/about-us/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Chime - Official Site, About Us",
        url: "https://www.chime.com/about-us/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Chime Financial, Inc. Investor Relations",
        url: "https://investors.chime.com/",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Chime Financial, Inc. Form 10-K (FY2025) cover page - 101 California Street, Suite 500, San Francisco, CA 94111",
        url: "https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Chime Financial, Inc. Form 10-K (FY2025) cover page - San Francisco, CA",
        url: "https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Chime Financial, Inc. Form 10-K (FY2025) - \"We incorporated as 1debit, Inc. in Delaware in August 2012.\"",
        url: "https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Chime - Official Site, About Us - company established in 2012 by co-founders Chris Britt and Ryan King",
        url: "https://www.chime.com/about-us/",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Chime Financial, Inc. Form 10-K (FY2025), filed 2026-03-06 - securities registered under Section 12(b), The Nasdaq Stock Market LLC",
        url: "https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record CIK 0001795586 - ticker CHYM, exchange Nasdaq",
        url: "https://data.sec.gov/submissions/CIK0001795586.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Chime Financial, Inc. Form 10-K (FY2025) cover page - Class A common stock, trading symbol CHYM, The Nasdaq Stock Market LLC",
        url: "https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record CIK 0001795586 - ticker CHYM, exchange Nasdaq",
        url: "https://data.sec.gov/submissions/CIK0001795586.json",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Chime Financial, Inc. Form 10-K (FY2025) - \"We incorporated as 1debit, Inc. in Delaware in August 2012.\"",
        url: "https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Chime Financial, Inc. SEC EDGAR record - SIC 6199 Finance Services",
        url: "https://data.sec.gov/submissions/CIK0001795586.json",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Chime - Official Site, About Us and Investor Relations - banking services provided by The Bancorp Bank, N.A. and Stride Bank, N.A.",
        url: "https://www.chime.com/about-us/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "zoom": {
    companyId: "zoom",
    name: "Zoom",
    legalName: "Zoom Communications, Inc.",
    website: "https://www.zoom.com",
    description: "Communications software company providing meetings, phone, contact center and related collaboration products for businesses, with built-in AI assistance.",
    hqCity: "San Jose",
    hqCountry: "United States",
    foundedYear: 2011,
    status: "public",
    statusDetail: null,
    sector: "Enterprise Software",
    subsector: "communications and collaboration software",
    tickers: [
      "NASDAQ:ZM"
    ],
    formerNames: [
      "Zoom Video Communications, Inc."
    ],
    sources: [
      {
        field: "legalName",
        label: "SEC EDGAR submissions record CIK 0001585521 - name Zoom Communications, Inc.",
        url: "https://data.sec.gov/submissions/CIK0001585521.json",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Zoom Investor Relations",
        url: "https://investors.zoom.us/",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Zoom - Official Site, About",
        url: "https://www.zoom.com/en/about/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Zoom Investor Relations - \"About Zoom\" boilerplate",
        url: "https://investors.zoom.us/",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Zoom Investor Relations - \"Founded in 2011, Zoom is headquartered in San Jose, CA.\"",
        url: "https://investors.zoom.us/",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR filer business address CIK 0001585521 - 55 Almaden Boulevard, 6th Floor, San Jose, CA",
        url: "https://data.sec.gov/submissions/CIK0001585521.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Zoom Investor Relations - headquartered in San Jose, CA",
        url: "https://investors.zoom.us/",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Zoom Investor Relations - \"Founded in 2011\"",
        url: "https://investors.zoom.us/",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Zoom - Official Site, About - founded 2011",
        url: "https://www.zoom.com/en/about/",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record CIK 0001585521 - ticker ZM, exchange Nasdaq",
        url: "https://data.sec.gov/submissions/CIK0001585521.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Zoom Investor Relations - \"Zoom (NASDAQ: ZM)\"",
        url: "https://investors.zoom.us/",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Zoom Investor Relations - \"Zoom (NASDAQ: ZM)\"",
        url: "https://investors.zoom.us/",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record CIK 0001585521 - ticker ZM, exchange Nasdaq",
        url: "https://data.sec.gov/submissions/CIK0001585521.json",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "SEC EDGAR submissions record CIK 0001585521 - former name Zoom Video Communications, Inc. (2013-09-04 to 2024-11-12)",
        url: "https://data.sec.gov/submissions/CIK0001585521.json",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Zoom official blog - \"Introducing Zoom Communications Inc.\", published November 25, 2024 - \"we are officially dropping 'video' from our legal name\"",
        url: "https://www.zoom.com/en/blog/introducing-zoom-communications-inc/",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Zoom Investor Relations - \"About Zoom\" boilerplate describing meetings, phone and contact center products for entrepreneurs to global enterprises",
        url: "https://investors.zoom.us/",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Zoom Investor Relations - \"About Zoom\" boilerplate",
        url: "https://investors.zoom.us/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "anthropic": {
    companyId: "anthropic",
    name: "Anthropic",
    legalName: "Anthropic PBC",
    website: "https://www.anthropic.com",
    description: "AI safety and research company that builds AI systems, including the Claude family of models. It is organised as a public benefit corporation.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: null,
    status: "private",
    statusDetail: null,
    sector: "AI",
    subsector: "AI safety research and large language models",
    tickers: [],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Anthropic Privacy Policy - \"Anthropic PBC with a registered address at 548 Market St, PMB 90375, San Francisco, CA 94104 (United States).\"",
        url: "https://www.anthropic.com/legal/privacy",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Anthropic - Official Site, Company page",
        url: "https://www.anthropic.com/company",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Anthropic - Company page - \"Anthropic is an AI safety and research company. We build reliable, interpretable, and steerable AI systems.\" and \"Anthropic is a Public Benefit Corporation\"",
        url: "https://www.anthropic.com/company",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Anthropic - Careers page - \"an AI safety and research company that's working to build reliable, interpretable, and steerable AI systems\"; builds Claude",
        url: "https://www.anthropic.com/careers",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Anthropic Privacy Policy - registered address 548 Market St, PMB 90375, San Francisco, CA 94104 (United States)",
        url: "https://www.anthropic.com/legal/privacy",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Anthropic Privacy Policy - registered address San Francisco, CA 94104 (United States)",
        url: "https://www.anthropic.com/legal/privacy",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Anthropic news - \"Anthropic raises $65B in Series H funding at $965B post-money valuation\", May 28, 2026, a private financing round",
        url: "https://www.anthropic.com/news/series-h",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Anthropic news - Series F private financing announcement, September 2, 2025",
        url: "https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Anthropic - Company page - AI safety and research company building AI systems",
        url: "https://www.anthropic.com/company",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Anthropic - Careers page - researchers and engineers building Claude, an AI safety and research company",
        url: "https://www.anthropic.com/careers",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "proximafusion": {
    companyId: "proximafusion",
    name: "Proxima Fusion",
    legalName: "Proxima Fusion GmbH",
    website: "https://www.proximafusion.com",
    description: "Fusion energy company developing power plants based on quasi-isodynamic (QI) stellarators, spun out of the Max Planck Institute for Plasma Physics.",
    hqCity: "Munich",
    hqCountry: "Germany",
    foundedYear: 2023,
    status: "private",
    statusDetail: null,
    sector: "Climate & Energy",
    subsector: "Fusion power plants using quasi-isodynamic (QI) stellarators",
    tickers: [],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Proxima Fusion - Imprint (Impressum)",
        url: "https://www.proximafusion.com/imprint",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Proxima Fusion - Imprint (Impressum)",
        url: "https://www.proximafusion.com/imprint",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Proxima Fusion - Official Site",
        url: "https://www.proximafusion.com/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Proxima Fusion - Series A press release, About Proxima Fusion",
        url: "https://www.proximafusion.com/press-news/proxima-fusion-raises-eu130m-series-a-to-build-worlds-first-stellarator-based-fusion-power-plant-in-the-2030s",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Proxima Fusion - Imprint (Impressum)",
        url: "https://www.proximafusion.com/imprint",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Proxima Fusion - About",
        url: "https://www.proximafusion.com/about",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Proxima Fusion - Imprint (Impressum)",
        url: "https://www.proximafusion.com/imprint",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Proxima Fusion - Series A press release (founded in April 2023)",
        url: "https://www.proximafusion.com/press-news/proxima-fusion-raises-eu130m-series-a-to-build-worlds-first-stellarator-based-fusion-power-plant-in-the-2030s",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Proxima Fusion - Imprint, registered as a GmbH, HRB 283423 Amtsgericht Muenchen",
        url: "https://www.proximafusion.com/imprint",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Proxima Fusion - Series A private venture financing announcement",
        url: "https://www.proximafusion.com/press-news/proxima-fusion-raises-eu130m-series-a-to-build-worlds-first-stellarator-based-fusion-power-plant-in-the-2030s",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Proxima Fusion - Official Site",
        url: "https://www.proximafusion.com/",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Proxima Fusion - About",
        url: "https://www.proximafusion.com/about",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Proxima Fusion - Official Site",
        url: "https://www.proximafusion.com/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "coupang": {
    companyId: "coupang",
    name: "Coupang",
    legalName: "Coupang, Inc.",
    website: "https://www.aboutcoupang.com",
    description: "Technology and retail company providing online retail, restaurant delivery, video streaming and fintech services under brands including Coupang, Eats, Play, Rocket Now and Farfetch.",
    hqCity: "Seattle",
    hqCountry: "United States",
    foundedYear: null,
    status: "public",
    statusDetail: null,
    sector: "Ecommerce",
    subsector: "Online retail, restaurant delivery, video streaming and fintech services",
    tickers: [
      "NYSE:CPNG"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "SEC EDGAR - Coupang, Inc. Form 10-K FY2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "SEC EDGAR - Coupang, Inc. Form 10-K FY2025",
        url: "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "SEC EDGAR - Coupang, Inc. Form 10-K FY2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Coupang, Inc. Form 10-K FY2025, address of principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SEC EDGAR - Coupang, Inc. Form 10-K FY2025, address of principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Coupang, Inc. Form 10-K FY2025 cover page, securities registered",
        url: "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "SEC EDGAR - Coupang, Inc. Form 10-K FY2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "SEC EDGAR - Coupang, Inc. Form 10-K FY2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Coupang, Inc. Form 10-K FY2025 cover page, securities registered",
        url: "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "gitlab": {
    companyId: "gitlab",
    name: "GitLab",
    legalName: "GitLab Inc.",
    website: "https://about.gitlab.com",
    description: "Software company providing an orchestration platform for DevSecOps that brings development, operations, IT, security and business teams together across the software development lifecycle.",
    hqCity: null,
    hqCountry: null,
    foundedYear: 2014,
    status: "public",
    statusDetail: null,
    sector: "Developer Tools & Infrastructure",
    subsector: "DevSecOps platform for the software development lifecycle",
    tickers: [
      "NASDAQ:GTLB"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "SEC EDGAR - GitLab Inc. Form 10-K FY2026 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "SEC EDGAR - GitLab Inc. Form 10-K FY2026",
        url: "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "SEC EDGAR - GitLab Inc. Form 10-K FY2026, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "SEC EDGAR - GitLab Inc. Form 10-K FY2026, Corporate Information",
        url: "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - GitLab Inc. Form 10-K FY2026 cover page, securities registered",
        url: "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "SEC EDGAR - GitLab Inc. Form 10-K FY2026, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "SEC EDGAR - GitLab Inc. Form 10-K FY2026, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - GitLab Inc. Form 10-K FY2026 cover page, securities registered",
        url: "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "nutanix": {
    companyId: "nutanix",
    name: "Nutanix",
    legalName: "Nutanix, Inc.",
    website: "https://www.nutanix.com",
    description: "Enterprise software company providing a hybrid multicloud platform used to run applications and AI workloads and to manage data across datacenters and public clouds.",
    hqCity: "San Jose",
    hqCountry: "United States",
    foundedYear: 2009,
    status: "public",
    statusDetail: null,
    sector: "Enterprise Software",
    subsector: "Hybrid multicloud computing; unified software platform for applications and data",
    tickers: [
      "NASDAQ:NTNX"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Nutanix - Official Site",
        url: "https://www.nutanix.com/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025, address of principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025, address of principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025, Corporate Information",
        url: "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025 cover page, securities registered",
        url: "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025 cover page, securities registered",
        url: "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "flywire": {
    companyId: "flywire",
    name: "Flywire",
    legalName: "Flywire Corporation",
    website: "https://www.flywire.com",
    description: "Global payments enablement and software company providing a payments platform, a proprietary global payment network and vertical-specific software used by clients to collect payments.",
    hqCity: "Boston",
    hqCountry: "United States",
    foundedYear: null,
    status: "public",
    statusDetail: null,
    sector: "Fintech",
    subsector: "Global payments enablement and vertical-specific payments software",
    tickers: [
      "NASDAQ:FLYW"
    ],
    formerNames: [
      "peerTransfer Corp"
    ],
    sources: [
      {
        field: "legalName",
        label: "SEC EDGAR - Flywire Corporation Form 10-K FY2025 cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Flywire - Official Site",
        url: "https://www.flywire.com/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "SEC EDGAR - Flywire Corporation Form 10-K FY2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Flywire Corporation Form 10-K FY2025, address of principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SEC EDGAR - Flywire Corporation Form 10-K FY2025, address of principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Flywire Corporation Form 10-K FY2025 cover page, securities registered",
        url: "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "SEC EDGAR - Flywire Corporation Form 10-K FY2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "SEC EDGAR - Flywire Corporation Form 10-K FY2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR - Flywire Corporation Form 10-K FY2025 cover page, securities registered",
        url: "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "SEC EDGAR - Flywire Corp submissions record, formerNames: peerTransfer Corp (2013-07-08 to 2015-01-14)",
        url: "https://data.sec.gov/submissions/CIK0001580560.json",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Flywire - peerTransfer Rebrands as Flywire (company announcement)",
        url: "https://www.flywire.com/careers/inside-flywire/peertransfer-rebrands-as-flywire",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "deliveryhero": {
    companyId: "deliveryhero",
    name: "Delivery Hero",
    legalName: "Delivery Hero SE",
    website: "https://www.deliveryhero.com",
    description: "Local delivery platform operating online food ordering and delivery marketplaces and quick commerce stores in around 65 countries.",
    hqCity: "Berlin",
    hqCountry: "Germany",
    foundedYear: 2011,
    status: "public",
    statusDetail: null,
    sector: "Foodtech",
    subsector: "Online food delivery marketplaces and quick commerce",
    tickers: [
      "XETRA:DHER"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Delivery Hero - Imprint / Legal Notice",
        url: "https://www.deliveryhero.com/imprint/",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Delivery Hero Investor Relations - Share Information",
        url: "https://ir.deliveryhero.com/share-information",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Delivery Hero - Imprint / Legal Notice",
        url: "https://www.deliveryhero.com/imprint/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Delivery Hero - Official Site",
        url: "https://www.deliveryhero.com/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Delivery Hero - About",
        url: "https://www.deliveryhero.com/about",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Delivery Hero - Imprint / Legal Notice, registered office Oranienburger Strasse 70, 10117 Berlin",
        url: "https://www.deliveryhero.com/imprint/",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Delivery Hero - Imprint / Legal Notice",
        url: "https://www.deliveryhero.com/imprint/",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Delivery Hero - About, company timeline entry for 2011",
        url: "https://www.deliveryhero.com/about",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Delivery Hero Investor Relations - Share Information (Frankfurt Stock Exchange, Prime Standard)",
        url: "https://ir.deliveryhero.com/share-information",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Deutsche Boerse official instrument page - Delivery Hero SE",
        url: "https://live.deutsche-boerse.com/equity/delivery-hero-se",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Delivery Hero - Official Site",
        url: "https://www.deliveryhero.com/",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Delivery Hero - About",
        url: "https://www.deliveryhero.com/about",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Delivery Hero - Official Site",
        url: "https://www.deliveryhero.com/",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Delivery Hero Investor Relations - Share Information (ticker DHER, ISIN DE000A2E4K43)",
        url: "https://ir.deliveryhero.com/share-information",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Deutsche Boerse official instrument page - Delivery Hero SE (Xetra)",
        url: "https://live.deutsche-boerse.com/equity/delivery-hero-se",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "bluebottlecoffee": {
    companyId: "bluebottlecoffee",
    name: "Blue Bottle Coffee",
    legalName: null,
    website: "https://bluebottlecoffee.com/",
    description: "Specialty coffee roaster and retailer operating cafes in the United States, Japan, South Korea, China and Hong Kong, and selling roasted beans and ready to drink coffee.",
    hqCity: "Oakland",
    hqCountry: "United States",
    foundedYear: 2002,
    status: "acquired",
    statusDetail: "Nestle acquired a majority interest in 2017 and divested Blue Bottle Coffee to Centurium Capital in 2026",
    sector: null,
    subsector: null,
    tickers: [],
    formerNames: [],
    sources: [
      {
        field: "website",
        label: "Blue Bottle Coffee - Our Story",
        url: "https://bluebottlecoffee.com/us/eng/our-story",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Nestle - Nestle acquires majority interest in Blue Bottle Coffee (press release PDF)",
        url: "https://www.nestle.com/sites/default/files/asset-library/documents/media/press-release/2017-september/blue-bottle-coffee-en.pdf",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Nestle - Half-Year Report January to June 2026 (Blue Bottle activities in US, China, Hong Kong, Korea and Japan)",
        url: "https://www.nestle.com/sites/default/files/2026-07/half-year-report-2026-en.pdf",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Blue Bottle Coffee - Blue Bottle at Fifteen: Henry House, Our New HQ",
        url: "https://blog.bluebottlecoffee.com/posts/henry-house",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Nestle - Nestle acquires majority interest in Blue Bottle Coffee (press release PDF)",
        url: "https://www.nestle.com/sites/default/files/asset-library/documents/media/press-release/2017-september/blue-bottle-coffee-en.pdf",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Blue Bottle Coffee - Blue Bottle at Fifteen: Henry House, Our New HQ",
        url: "https://blog.bluebottlecoffee.com/posts/henry-house",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Blue Bottle Coffee - Blue Bottle at Fifteen: Henry House, Our New HQ",
        url: "https://blog.bluebottlecoffee.com/posts/henry-house",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Nestle - Nestle acquires majority interest in Blue Bottle Coffee",
        url: "https://www.nestle.com/media/pressreleases/allpressreleases/nestle-acquires-majority-interest-blue-bottle-coffee",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Nestle - Half-Year Report January to June 2026",
        url: "https://www.nestle.com/sites/default/files/2026-07/half-year-report-2026-en.pdf",
        checked: "2026-09-02"
      },
      {
        field: "statusDetail",
        label: "Nestle - Nestle acquires majority interest in Blue Bottle Coffee",
        url: "https://www.nestle.com/media/pressreleases/allpressreleases/nestle-acquires-majority-interest-blue-bottle-coffee",
        checked: "2026-09-02"
      },
      {
        field: "statusDetail",
        label: "Nestle - Half-Year Report January to June 2026 (divested Blue Bottle Coffee to Centurium Capital)",
        url: "https://www.nestle.com/sites/default/files/2026-07/half-year-report-2026-en.pdf",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "carta": {
    companyId: "carta",
    name: "Carta",
    legalName: "eShares, Inc. d/b/a Carta, Inc.",
    website: "https://carta.com/",
    description: "Software and services for private capital markets, covering cap table and equity management, 409A valuations, fund administration and related legal and compliance services.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2012,
    status: "private",
    statusDetail: null,
    sector: "Fintech",
    subsector: "equity and cap table management and fund administration for private capital markets",
    tickers: [],
    formerNames: [
      "eShares"
    ],
    sources: [
      {
        field: "website",
        label: "Carta - About",
        url: "https://carta.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Carta - Terms of Service (ESHARES, INC. d/b/a CARTA, INC.)",
        url: "https://carta.com/terms/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Carta - About",
        url: "https://carta.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Carta - About",
        url: "https://carta.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Carta - About",
        url: "https://carta.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Carta - About (Henry Ward and Manu Kumar found eShares, August 2012)",
        url: "https://carta.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR full text search - Form D filings by eShares Inc (CIK 0001718624), Delaware, private placements",
        url: "https://efts.sec.gov/LATEST/search-index?q=%22eShares%2C+Inc.%22&forms=D",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Carta - About",
        url: "https://carta.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Carta - About",
        url: "https://carta.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Carta - About (eShares becomes Carta)",
        url: "https://carta.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Carta - Terms of Service (eShares, Inc. dba Carta, Inc.)",
        url: "https://carta.com/terms/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "writer": {
    companyId: "writer",
    name: "Writer",
    legalName: "Writer, Inc.",
    website: "https://writer.com/",
    description: "Enterprise generative AI company providing a platform and its own family of large language models used to build, deploy and supervise AI agents inside large organisations.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: null,
    status: "private",
    statusDetail: null,
    sector: "AI",
    subsector: "enterprise generative AI platform and large language models",
    tickers: [],
    formerNames: [
      "Qordoba"
    ],
    sources: [
      {
        field: "website",
        label: "Writer - Company",
        url: "https://writer.com/company/",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Writer - Platform Services Agreement (agreement is between Writer, Inc. and the customer)",
        url: "https://writer.com/legal/platform-services/",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR - Form D, Writer, Inc., CIK 0002044986, filed 2024-11-21",
        url: "https://www.sec.gov/Archives/edgar/data/2044986/000204498624000002/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Writer - Company",
        url: "https://writer.com/company/",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Writer - Company (San Francisco (HQ), 111 Maiden Ln, 4th Floor)",
        url: "https://writer.com/company/",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Form D, Writer, Inc., address 140 Geary St #800, San Francisco",
        url: "https://www.sec.gov/Archives/edgar/data/2044986/000204498624000002/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Writer - Company",
        url: "https://writer.com/company/",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Form D private placement by Writer, Inc., total amount sold 199,999,483 USD",
        url: "https://www.sec.gov/Archives/edgar/data/2044986/000204498624000002/primary_doc.xml",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Writer - Company",
        url: "https://writer.com/company/",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Writer - Company",
        url: "https://writer.com/company/",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "VentureBeat - AI-powered writing assistant Writer nabs $21M (Writer, formerly Qordoba)",
        url: "https://venturebeat.com/marketing/ai-powered-writing-assistant-writer-nabs-21m/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "cyera": {
    companyId: "cyera",
    name: "Cyera",
    legalName: null,
    website: "https://www.cyera.com/",
    description: "Data security company whose platform discovers and classifies enterprise data across cloud, SaaS and on-premises environments and provides data security posture management, data loss prevention and privacy capabilities.",
    hqCity: null,
    hqCountry: null,
    foundedYear: 2021,
    status: "private",
    statusDetail: null,
    sector: "Cybersecurity",
    subsector: "data security posture management and data loss prevention",
    tickers: [],
    formerNames: [],
    sources: [
      {
        field: "website",
        label: "Cyera - About Us",
        url: "https://www.cyera.com/about-us",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Cyera - About Us",
        url: "https://www.cyera.com/about-us",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Cyera - Press release, Cyera Raises $300M Series C (Founded in 2021 by Yotam Segev and Tamar Bar-Ilan)",
        url: "https://www.cyera.com/press-releases/data-security-leader-cyera-raises-300-million-at-1-4-billion-valuation",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Cyera - Press release, Cyera Raises $400M (private venture funding from named investors, no public listing)",
        url: "https://www.cyera.com/press-releases/cyera-raises-400m-to-meet-rapidly-growing-demand-for-ai-security-among-enterprises",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Cyera - About Us",
        url: "https://www.cyera.com/about-us",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Cyera - About Us",
        url: "https://www.cyera.com/about-us",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "meituan": {
    companyId: "meituan",
    name: "Meituan",
    legalName: "Meituan",
    website: "https://www.meituan.com/",
    description: "Chinese technology driven retail company operating mobile platforms for on-demand food delivery, in-store dining, hotel and travel booking, car hailing, bike sharing and other local consumer services.",
    hqCity: "Beijing",
    hqCountry: "China",
    foundedYear: 2010,
    status: "public",
    statusDetail: null,
    sector: "Consumer",
    subsector: "on-demand local services, food delivery and travel booking platform",
    tickers: [
      "HKEX:3690"
    ],
    formerNames: [
      "Meituan Dianping"
    ],
    sources: [
      {
        field: "website",
        label: "Meituan - About Us",
        url: "https://www.meituan.com/en-US/about-us",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "HKEXnews - Meituan announcement of results for the three months ended 31 March 2026 (issuer Meituan, Cayman Islands)",
        url: "https://www.hkexnews.hk/listedco/listconews/sehk/2026/0601/2026060101346.pdf",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "HKEXnews - Meituan announcement of results (Stock Codes 3690 and 83690)",
        url: "https://www1.hkexnews.hk/listedco/listconews/sehk/2025/1128/2025112800483.pdf",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Meituan - About",
        url: "https://about.meituan.com/en/about",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Meituan - About Us",
        url: "https://www.meituan.com/en-US/about-us",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "HKEXnews - Meituan 2024 Annual Report, Corporate Information, headquarters and principal place of business in the PRC, Chaoyang District, Beijing",
        url: "https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0428/2025042800235.pdf",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "HKEXnews - Meituan 2024 Annual Report, Corporate Information",
        url: "https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0428/2025042800235.pdf",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Meituan - About Us (Since its establishment in March 2010)",
        url: "https://www.meituan.com/en-US/about-us",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "HKEXnews - Meituan 2024 Annual Report (Wang Xing founded meituan.com in 2010)",
        url: "https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0428/2025042800235.pdf",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "HKEXnews - Meituan announcement of results for the three months ended 31 March 2026",
        url: "https://www.hkexnews.hk/listedco/listconews/sehk/2026/0601/2026060101346.pdf",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Meituan - About Us (listed on the Main Board of the Stock Exchange of Hong Kong on 20 September 2018)",
        url: "https://www.meituan.com/en-US/about-us",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "HKEXnews - Meituan announcement of results for the three months ended 31 March 2026 (Stock Codes: 3690 (HKD counter) and 83690 (RMB counter))",
        url: "https://www.hkexnews.hk/listedco/listconews/sehk/2026/0601/2026060101346.pdf",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Meituan - About",
        url: "https://about.meituan.com/en/about",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Meituan - About",
        url: "https://about.meituan.com/en/about",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "HKEXnews - Meituan Dianping 2020 Interim Report, cover and corporate information, stock code 3690",
        url: "https://www.hkexnews.hk/listedco/listconews/sehk/2020/0909/2020090900259.pdf",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Meituan - Investor Relations announcements list (Simplification of Company Name, 9 October 2020; Completion of Registration of Change of Name in Hong Kong and Change of Stock Short Name and Company Logo, 22 October 2020)",
        url: "https://www.meituan.com/en-US/investor/announcement",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "redfin": {
    companyId: "redfin",
    name: "Redfin",
    legalName: "Redfin Corporation",
    website: "https://www.redfin.com/",
    description: "Residential real estate brokerage and home listings website that pairs its own local agents with its search and transaction technology to help people buy, sell and rent homes.",
    hqCity: "Seattle",
    hqCountry: "United States",
    foundedYear: 2002,
    status: "acquired",
    statusDetail: "Acquired by Rocket Companies in 2025",
    sector: "Real Estate Tech",
    subsector: "residential real estate brokerage and home listings website",
    tickers: [],
    formerNames: [
      "Appliance Computing Inc."
    ],
    sources: [
      {
        field: "website",
        label: "Redfin - Why Redfin",
        url: "https://www.redfin.com/about",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR - Redfin Corporation Form 10-K for 2017, cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1382821/000138282118000008/redfin10-k2017.htm",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Redfin - Why Redfin (Redfin Corporation is an affiliated business of Rocket Limited Partnership)",
        url: "https://www.redfin.com/about",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Redfin - Why Redfin",
        url: "https://www.redfin.com/about",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Redfin Corporation Form 10-K for 2017, principal executive offices 1099 Stewart Street, Suite 600, Seattle, Washington",
        url: "https://www.sec.gov/Archives/edgar/data/1382821/000138282118000008/redfin10-k2017.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "SEC EDGAR - Redfin Corp submissions data, business address Seattle, WA",
        url: "https://data.sec.gov/submissions/CIK0001382821.json",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "SEC EDGAR - Redfin Corporation Form 10-K for 2017",
        url: "https://www.sec.gov/Archives/edgar/data/1382821/000138282118000008/redfin10-k2017.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "SEC EDGAR - Redfin Corporation Form 10-K for 2017 (incorporated as Appliance Computing Inc. in Washington in October 2002)",
        url: "https://www.sec.gov/Archives/edgar/data/1382821/000138282118000008/redfin10-k2017.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Rocket Companies Investor Relations - Rocket Companies Completes Acquisition of Redfin, 1 July 2025",
        url: "https://ir.rocketcompanies.com/news-and-events/press-releases/press-release-details/2025/Rocket-Companies-Completes-Acquisition-of-Redfin/default.aspx",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR - Rocket Companies, Inc. Form 8-K (On July 1, 2025, Rocket Companies, Inc. completed the previously announced acquisition of Redfin Corporation)",
        url: "https://www.sec.gov/Archives/edgar/data/1805284/000110465925064824/tm2519538d1_8k.htm",
        checked: "2026-09-02"
      },
      {
        field: "statusDetail",
        label: "Rocket Companies Investor Relations - Rocket Companies Completes Acquisition of Redfin, 1 July 2025",
        url: "https://ir.rocketcompanies.com/news-and-events/press-releases/press-release-details/2025/Rocket-Companies-Completes-Acquisition-of-Redfin/default.aspx",
        checked: "2026-09-02"
      },
      {
        field: "statusDetail",
        label: "SEC EDGAR - Rocket Companies, Inc. Form 8-K reporting completion on July 1, 2025",
        url: "https://www.sec.gov/Archives/edgar/data/1805284/000110465925064824/tm2519538d1_8k.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Redfin - Why Redfin",
        url: "https://www.redfin.com/about",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Redfin - Why Redfin",
        url: "https://www.redfin.com/about",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "SEC EDGAR - Redfin Corporation Form 10-K for 2017 (We were incorporated as Appliance Computing Inc. in Washington in October 2002 ... and changed our name to Redfin Corporation in May 2006)",
        url: "https://www.sec.gov/Archives/edgar/data/1382821/000138282118000008/redfin10-k2017.htm",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "netflix": {
    companyId: "netflix",
    name: "Netflix",
    legalName: "Netflix, Inc.",
    website: "https://www.netflix.com",
    description: "Subscription entertainment service offering television series, films, games and live programming across a wide variety of genres and languages.",
    hqCity: "Los Gatos",
    hqCountry: "United States",
    foundedYear: 1997,
    status: "public",
    statusDetail: null,
    sector: "Consumer",
    subsector: "subscription streaming entertainment",
    tickers: [
      "NASDAQ:NFLX"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Netflix, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000212/nflx-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Netflix, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000212/nflx-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Netflix, Inc. Form 10-Q for the quarter ended June 30, 2026 - Securities registered pursuant to Section 12(b): Common stock, NFLX, NASDAQ Global Select Market",
        url: "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000212/nflx-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Netflix, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, 121 Albright Way, Los Gatos, California",
        url: "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000212/nflx-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Netflix, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, Los Gatos, California",
        url: "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000212/nflx-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record for CIK 0001065280 - tickers NFLX, exchanges Nasdaq",
        url: "https://data.sec.gov/submissions/CIK0001065280.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record for CIK 0001065280 - entityType operating, listed on Nasdaq",
        url: "https://data.sec.gov/submissions/CIK0001065280.json",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Netflix, Inc. Form 10-K for fiscal year 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000034/nflx-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Netflix, Inc. Form 10-K for fiscal year 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000034/nflx-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Netflix, Inc. Form 10-K for fiscal year 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000034/nflx-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Netflix Investor Relations - company profile",
        url: "https://ir.netflix.net/ir-overview/profile/default.aspx",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Netflix, Inc. Form S-1 filed 2002-03-06 - 'We were incorporated in Delaware in August 1997 and changed our name to Netflix, Inc. in March 2002.'",
        url: "https://www.sec.gov/Archives/edgar/data/1065280/000101287002001044/ds1.txt",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Netflix, Inc. Form 10-K for fiscal year 2016 - 'We were incorporated in Delaware in August 1997 and completed our initial public offering in May 2002.'",
        url: "https://www.sec.gov/Archives/edgar/data/1065280/000162828017000496/nflx201610k.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Netflix Tudum (netflix.com) - 'Founded on Aug. 29, 1997, Netflix is celebrating 25 years'",
        url: "https://www.netflix.com/tudum/articles/netflix-trivia-25th-anniversary",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Netflix, Inc. Form S-1 filed 2002-03-06 - 'Our Web site is located at http://www.netflix.com.'",
        url: "https://www.sec.gov/Archives/edgar/data/1065280/000101287002001044/ds1.txt",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "About Netflix - official company site",
        url: "https://about.netflix.com/en",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "snap": {
    companyId: "snap",
    name: "Snap",
    legalName: "Snap Inc.",
    website: "https://www.snap.com",
    description: "Technology company whose flagship product is Snapchat, a visual messaging application for communicating through short videos and images. Its other products include Spectacles and Lens Studio, a tool for building augmented reality experiences.",
    hqCity: "Santa Monica",
    hqCountry: "United States",
    foundedYear: 2010,
    status: "public",
    statusDetail: null,
    sector: "Consumer",
    subsector: "social media and visual messaging application",
    tickers: [
      "NYSE:SNAP"
    ],
    formerNames: [
      "Snapchat, Inc."
    ],
    sources: [
      {
        field: "legalName",
        label: "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page, registrant SNAP INC.",
        url: "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - Securities registered pursuant to Section 12(b): Class A Common Stock, SNAP, New York Stock Exchange",
        url: "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1, 'Snap Inc. ..., a Delaware corporation, is headquartered in Santa Monica, California.'",
        url: "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1, headquartered in Santa Monica, California",
        url: "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1, 'Our flagship product, Snapchat, is a visual messaging application'",
        url: "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1, description of Snapchat",
        url: "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1, description of Snapchat",
        url: "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record for CIK 0001564408 - tickers SNAP, exchanges NYSE",
        url: "https://data.sec.gov/submissions/CIK0001564408.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record for CIK 0001564408 - entityType operating, listed on NYSE",
        url: "https://data.sec.gov/submissions/CIK0001564408.json",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Snap Inc. Form 10-K for fiscal year 2022 - 'We were formed as Future Freshman, LLC, a California limited liability company, in 2010.'",
        url: "https://www.sec.gov/Archives/edgar/data/1564408/000156440823000013/snap-20221231.htm",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Snap Inc. Form 10-K for fiscal year 2022 - 'incorporated as Snapchat, Inc., a Delaware corporation, in 2012, and changed our name to Snap Inc. in 2016'",
        url: "https://www.sec.gov/Archives/edgar/data/1564408/000156440823000013/snap-20221231.htm",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "SEC EDGAR submissions record for CIK 0001564408 - formerNames includes 'Snapchat Inc' from 2013-02-12 to 2016-05-26",
        url: "https://data.sec.gov/submissions/CIK0001564408.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Snap Inc. official site",
        url: "https://www.snap.com/en-US",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Snap Inc. official site - Snapchat, Spectacles and Lens Studio product descriptions",
        url: "https://www.snap.com/en-US",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "lendingclub": {
    companyId: "lendingclub",
    name: "Happen",
    legalName: "Happen, Inc.",
    website: "https://www.happen.com",
    description: "Bank holding company that operates a nationally chartered digital marketplace bank through its wholly owned subsidiary Happen Bank, National Association, providing consumer credit and deposit products in the United States. The company was named LendingClub Corporation until June 2026.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2006,
    status: "public",
    statusDetail: null,
    sector: "Fintech",
    subsector: "digital marketplace bank and consumer lending",
    tickers: [
      "NASDAQ:HAPN"
    ],
    formerNames: [
      "LendingClub Corporation",
      "LendingClub"
    ],
    sources: [
      {
        field: "legalName",
        label: "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page, registrant Happen, Inc.",
        url: "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - Securities registered pursuant to Section 12(b): Common stock, HAPN, The Nasdaq Stock Market LLC",
        url: "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, 88 Kearny Street, Suite 600, San Francisco, CA",
        url: "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, San Francisco, CA",
        url: "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - 'Happen, Inc. is registered as a bank holding company and operates the vast majority of its business through its wholly-owned subsidiary, Happen Bank.'",
        url: "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - 'operates a leading, nationally chartered, digital marketplace bank that leverages data and technology'",
        url: "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - 'nationally chartered, digital marketplace bank'",
        url: "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - 'The Company was founded in 2006'",
        url: "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "LendingClub Corporation Form 10-K for fiscal year 2025 - 'Since our founding in 2006, more than five million individuals have become members'",
        url: "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000018/lc-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - 'On June 22, 2026, LendingClub Corporation changed its corporate name to Happen, Inc.'",
        url: "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "SEC EDGAR submissions record for CIK 0001409970 - formerNames 'LendingClub Corp' to 2026-06-18, current name Happen, Inc.",
        url: "https://data.sec.gov/submissions/CIK0001409970.json",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "Happen Bank official site - page title 'Happen Bank, formerly LendingClub'",
        url: "https://www.happen.com/",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record for CIK 0001409970 - tickers HAPN, exchanges Nasdaq",
        url: "https://data.sec.gov/submissions/CIK0001409970.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record for CIK 0001409970 - entityType operating, listed on Nasdaq",
        url: "https://data.sec.gov/submissions/CIK0001409970.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Happen Bank official site - 'All credit and deposit products are provided by Happen Bank, N.A., Member FDIC ... a wholly-owned subsidiary of Happen, Inc.'",
        url: "https://www.happen.com/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Happen Bank official site - bank subsidiary and holding company disclosure",
        url: "https://www.happen.com/",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Happen, Inc. Investor Relations (ir.happen.com), to which ir.lendingclub.com now redirects",
        url: "https://ir.happen.com/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "oscarhealth": {
    companyId: "oscarhealth",
    name: "Oscar Health",
    legalName: "Oscar Health, Inc.",
    website: "https://www.hioscar.com",
    description: "Health insurance and healthcare technology company that sells individual, family and other health plans, principally through the federal and state health insurance exchanges established under the Affordable Care Act, operating on its own technology platform.",
    hqCity: "New York",
    hqCountry: "United States",
    foundedYear: 2012,
    status: "public",
    statusDetail: null,
    sector: "Healthcare",
    subsector: "health insurance plans sold on Affordable Care Act exchanges",
    tickers: [
      "NYSE:OSCR"
    ],
    formerNames: [
      "Mulberry Health Inc."
    ],
    sources: [
      {
        field: "legalName",
        label: "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - Securities registered pursuant to Section 12(b): Class A Common Stock, OSCR, New York Stock Exchange",
        url: "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, 75 Varick Street, 5th Floor, New York, NY",
        url: "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, New York, NY",
        url: "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1 Organization, insurance sold via federal and state-run healthcare exchanges formed under the Affordable Care Act",
        url: "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1 Organization",
        url: "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1 Organization",
        url: "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record for CIK 0001568651 - tickers OSCR, exchanges NYSE",
        url: "https://data.sec.gov/submissions/CIK0001568651.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record for CIK 0001568651 - entityType operating, listed on NYSE",
        url: "https://data.sec.gov/submissions/CIK0001568651.json",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "SEC EDGAR submissions record for CIK 0001568651 - formerNames 'Mulberry Health Inc.' from 2013-09-11 to 2020-12-17",
        url: "https://data.sec.gov/submissions/CIK0001568651.json",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Oscar Health official site, About page - 'Founded in 2012'",
        url: "https://www.hioscar.com/about",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Oscar Health official site, About page",
        url: "https://www.hioscar.com/about",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Oscar Health official site, About page - 'Oscar Health, Inc. is a leading healthcare technology company'",
        url: "https://www.hioscar.com/about",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "jobyaviation": {
    companyId: "jobyaviation",
    name: "Joby Aviation",
    legalName: "Joby Aviation, Inc.",
    website: "https://www.jobyaviation.com",
    description: "Aviation company designing and testing a piloted, all-electric vertical take-off and landing air taxi, which it intends to operate in cities directly and through partnerships, and to sell to distributors and into defense and other specialized markets.",
    hqCity: "Santa Cruz",
    hqCountry: "United States",
    foundedYear: 2009,
    status: "public",
    statusDetail: null,
    sector: "Mobility",
    subsector: "electric vertical take-off and landing (eVTOL) air taxi aircraft and services",
    tickers: [
      "NYSE:JOBY"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Joby Aviation, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000435/joby-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Joby Aviation, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000435/joby-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Joby Aviation, Inc. Form 10-Q for the quarter ended June 30, 2026 - Securities registered pursuant to Section 12(b): Common Stock, JOBY, New York Stock Exchange",
        url: "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000435/joby-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Joby Aviation, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, 333 Encinal Street, Santa Cruz, CA",
        url: "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000435/joby-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Joby Aviation, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, Santa Cruz, CA",
        url: "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000435/joby-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Joby Aviation, Inc. Form 10-K for fiscal year 2025, Item 1 Business - piloted all-electric eVTOL air taxi, air taxi services, aircraft sales and defense markets",
        url: "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000160/joby-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Joby Aviation, Inc. Form 10-K for fiscal year 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000160/joby-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Joby Aviation, Inc. Form 10-K for fiscal year 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000160/joby-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record for CIK 0001819848 - tickers JOBY and JOBY-WT, exchanges NYSE",
        url: "https://data.sec.gov/submissions/CIK0001819848.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record for CIK 0001819848 - entityType operating, listed on NYSE",
        url: "https://data.sec.gov/submissions/CIK0001819848.json",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Joby Aviation official site, About page - 'Year founded: 2009' and timeline entry '2009 The Beginning'",
        url: "https://www.jobyaviation.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Joby Aviation official site, About page",
        url: "https://www.jobyaviation.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Joby Aviation Investor Relations - address 333 Encinal St, Santa Cruz, CA 95060",
        url: "https://ir.jobyaviation.com/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "therealreal": {
    companyId: "therealreal",
    name: "The RealReal",
    legalName: "The RealReal, Inc.",
    website: "https://www.therealreal.com",
    description: "Online marketplace for the resale of authenticated luxury goods.",
    hqCity: "San Francisco",
    hqCountry: "United States",
    foundedYear: 2011,
    status: "public",
    statusDetail: null,
    sector: "Ecommerce",
    subsector: "online resale marketplace for authenticated luxury goods",
    tickers: [
      "NASDAQ:REAL"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "The RealReal, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page, registrant The RealReal, Inc.",
        url: "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000053/real-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "The RealReal, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000053/real-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "The RealReal, Inc. Form 10-Q for the quarter ended June 30, 2026 - Securities registered pursuant to Section 12(b): Common stock, REAL, The Nasdaq Global Select Market",
        url: "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000053/real-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "The RealReal, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, 55 Francisco Street, Suite 400, San Francisco, CA",
        url: "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000053/real-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "The RealReal, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, San Francisco, CA",
        url: "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000053/real-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "The RealReal, Inc. Form 10-K for fiscal year 2025, Item 1 Business - 'The RealReal is the world's largest online marketplace for authenticated, resale luxury goods.'",
        url: "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000010/real-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "The RealReal, Inc. Form 10-K for fiscal year 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000010/real-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "The RealReal, Inc. Form 10-K for fiscal year 2025, Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000010/real-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "The RealReal, Inc. Form 10-K for fiscal year 2025 - 'We were incorporated in the state of Delaware in March 2011.'",
        url: "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000010/real-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record for CIK 0001573221 - tickers REAL, exchanges Nasdaq",
        url: "https://data.sec.gov/submissions/CIK0001573221.json",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "SEC EDGAR submissions record for CIK 0001573221 - entityType operating, listed on Nasdaq",
        url: "https://data.sec.gov/submissions/CIK0001573221.json",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "The RealReal Investor Relations, on the therealreal.com domain",
        url: "https://investor.therealreal.com/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "buzzfeed": {
    companyId: "buzzfeed",
    name: "BuzzFeed",
    legalName: "BuzzFeed, Inc.",
    website: "https://www.buzzfeed.com",
    description: "Digital media company that operates the BuzzFeed, HuffPost and Tasty brands, publishing entertainment, pop culture, food, shopping and news content. It sold the Complex Networks business in February 2024 and the First We Feast business in December 2024.",
    hqCity: "New York",
    hqCountry: "United States",
    foundedYear: 2006,
    status: "public",
    statusDetail: null,
    sector: "Consumer",
    subsector: "digital media and content brands",
    tickers: [
      "NASDAQ:BZFD"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - securities registered under Section 12(b)",
        url: "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - securities registered under Section 12(b)",
        url: "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "BuzzFeed, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000138/bzfd-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "BuzzFeed, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000138/bzfd-20260630.htm",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "BuzzFeed - About page on the official domain",
        url: "https://www.buzzfeed.com/about",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "BuzzFeed - About page on the official domain",
        url: "https://www.buzzfeed.com/about",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "BuzzFeed - About page on the official domain",
        url: "https://www.buzzfeed.com/about",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "SEC EDGAR submissions record for CIK 0001828972",
        url: "https://data.sec.gov/submissions/CIK0001828972.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record for CIK 0001828972",
        url: "https://data.sec.gov/submissions/CIK0001828972.json",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "xiaomi": {
    companyId: "xiaomi",
    name: "Xiaomi",
    legalName: "Xiaomi Corporation",
    website: "https://www.mi.com",
    description: "Consumer electronics and smart manufacturing company. It develops and sells smartphones, IoT and lifestyle products, provides internet services, and develops, manufactures and sells smart electric vehicles.",
    hqCity: "Beijing",
    hqCountry: "China",
    foundedYear: 2010,
    status: "public",
    statusDetail: null,
    sector: "Hardware",
    subsector: "smartphones, IoT and lifestyle products, and smart electric vehicles",
    tickers: [
      "HKEX:1810"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Xiaomi Corporation 2025 Annual Report - cover and corporate information",
        url: "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Xiaomi Corporation 2025 Annual Report - principal activities",
        url: "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Xiaomi Corporation 2025 Annual Report - corporate information, headquarters in the PRC",
        url: "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Xiaomi Corporation 2025 Annual Report - corporate information, headquarters in the PRC",
        url: "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Xiaomi Corporation 2025 Annual Report - corporate information, company website",
        url: "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Xiaomi Corporation 2025 Annual Report - stock codes",
        url: "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Xiaomi Corporation 2025 Annual Report - stock codes and listing",
        url: "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Xiaomi Corporation 2025 Annual Report - principal activities and reportable segments",
        url: "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Xiaomi Corporation 2025 Annual Report - principal activities and reportable segments",
        url: "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        checked: "2026-09-02"
      },
      {
        field: "legalName",
        label: "Xiaomi Corporation results announcement for the three months ended March 31, 2026 - HKEXnews",
        url: "https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0526/2026052600770.pdf",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Xiaomi Corporation results announcement for the three months ended March 31, 2026 - HKEXnews",
        url: "https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0526/2026052600770.pdf",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Xiaomi Corporation results announcement for the three months ended March 31, 2026 - HKEXnews",
        url: "https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0526/2026052600770.pdf",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Xiaomi - About page on the official global site",
        url: "https://www.mi.com/global/about/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Xiaomi - About page on the official global site",
        url: "https://www.mi.com/global/about/",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Xiaomi - About page on the official global site",
        url: "https://www.mi.com/global/about/",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "mongodb": {
    companyId: "mongodb",
    name: "MongoDB",
    legalName: "MongoDB, Inc.",
    website: "https://www.mongodb.com",
    description: "Database software company. It provides a developer data platform built around the MongoDB document database, together with integrated cloud services used to build and run applications.",
    hqCity: "New York",
    hqCountry: "United States",
    foundedYear: 2007,
    status: "public",
    statusDetail: null,
    sector: "Developer Tools & Infrastructure",
    subsector: "developer data platform and document database",
    tickers: [
      "NASDAQ:MDB"
    ],
    formerNames: [
      "10Gen, Inc."
    ],
    sources: [
      {
        field: "legalName",
        label: "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - corporate history",
        url: "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - corporate history",
        url: "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - securities registered under Section 12(b)",
        url: "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - securities registered under Section 12(b)",
        url: "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "MongoDB - Company page on the official domain",
        url: "https://www.mongodb.com/company",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "MongoDB - Company page on the official domain",
        url: "https://www.mongodb.com/company",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "MongoDB - Company page on the official domain",
        url: "https://www.mongodb.com/company",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "MongoDB - Company page on the official domain",
        url: "https://www.mongodb.com/company",
        checked: "2026-09-02"
      },
      {
        field: "formerNames",
        label: "SEC EDGAR submissions record for CIK 0001441816 - formerNames",
        url: "https://data.sec.gov/submissions/CIK0001441816.json",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record for CIK 0001441816",
        url: "https://data.sec.gov/submissions/CIK0001441816.json",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "datadog": {
    companyId: "datadog",
    name: "Datadog",
    legalName: "Datadog, Inc.",
    website: "https://www.datadoghq.com",
    description: "Observability and security platform for cloud applications. Its software brings applications, infrastructure, data, models and security monitoring into a single platform used by engineering and security teams.",
    hqCity: "New York",
    hqCountry: "United States",
    foundedYear: 2010,
    status: "public",
    statusDetail: null,
    sector: "Developer Tools & Infrastructure",
    subsector: "cloud observability and security monitoring platform",
    tickers: [
      "NASDAQ:DDOG"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Datadog, Inc. Form 10-K for fiscal year 2025 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Datadog, Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Datadog, Inc. Form 10-K for fiscal year 2025 - principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Datadog, Inc. Form 10-K for fiscal year 2025 - principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Datadog, Inc. Form 10-K for fiscal year 2025 - corporate history",
        url: "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Datadog, Inc. Form 10-K for fiscal year 2025 - securities registered under Section 12(b)",
        url: "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Datadog, Inc. Form 10-K for fiscal year 2025 - securities registered under Section 12(b)",
        url: "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Datadog, Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Datadog, Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Datadog - About page on the official domain",
        url: "https://www.datadoghq.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Datadog - About page on the official domain",
        url: "https://www.datadoghq.com/about/",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record for CIK 0001561550",
        url: "https://data.sec.gov/submissions/CIK0001561550.json",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "thredup": {
    companyId: "thredup",
    name: "ThredUp",
    legalName: "ThredUp Inc.",
    website: "https://www.thredup.com",
    description: "Online resale platform for secondhand apparel, shoes and accessories. Buyers purchase resale items through its marketplace and sellers send in clothing using its Clean Out Bag service.",
    hqCity: "Oakland",
    hqCountry: "United States",
    foundedYear: 2009,
    status: "public",
    statusDetail: null,
    sector: "Ecommerce",
    subsector: "online resale marketplace for secondhand apparel",
    tickers: [
      "NASDAQ:TDUP",
      "LTSE:TDUP"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "ThredUp Inc. Form 10-K for fiscal year 2025 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "ThredUp Inc. Form 10-K for fiscal year 2025 - website address",
        url: "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "ThredUp Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "ThredUp Inc. Form 10-K for fiscal year 2025 - principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "ThredUp Inc. Form 10-K for fiscal year 2025 - principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "ThredUp Inc. Form 10-K for fiscal year 2025 - corporate history",
        url: "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "ThredUp Inc. Form 10-K for fiscal year 2025 - securities registered under Section 12(b)",
        url: "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "ThredUp Inc. Form 10-K for fiscal year 2025 - securities registered under Section 12(b)",
        url: "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "ThredUp Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "ThredUp Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "ThredUp Inc. Investor Relations - news releases and stock information",
        url: "https://ir.thredup.com/",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "ThredUp Inc. Investor Relations - stock information showing NASDAQ and LTSE",
        url: "https://ir.thredup.com/",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record for CIK 0001484778",
        url: "https://data.sec.gov/submissions/CIK0001484778.json",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  },
  "renttherunway": {
    companyId: "renttherunway",
    name: "Rent the Runway",
    legalName: "Rent the Runway, Inc.",
    website: "https://www.renttherunway.com",
    description: "Clothing rental company. It operates an online shared designer closet offering subscription and one-off rentals of apparel and accessories from brand partners.",
    hqCity: "Brooklyn",
    hqCountry: "United States",
    foundedYear: 2009,
    status: "public",
    statusDetail: null,
    sector: "Ecommerce",
    subsector: "online designer clothing rental and subscription service",
    tickers: [
      "NASDAQ:RENT"
    ],
    formerNames: [],
    sources: [
      {
        field: "legalName",
        label: "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - cover page",
        url: "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "website",
        label: "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - website address",
        url: "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "description",
        label: "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCity",
        label: "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "hqCountry",
        label: "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - principal executive offices",
        url: "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "foundedYear",
        label: "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - corporate history",
        url: "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - securities registered under Section 12(b)",
        url: "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - securities registered under Section 12(b)",
        url: "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "sector",
        label: "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "subsector",
        label: "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - Item 1 Business",
        url: "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        checked: "2026-09-02"
      },
      {
        field: "status",
        label: "Rent the Runway, Inc. Investor Relations - news releases",
        url: "https://investors.renttherunway.com/news-releases",
        checked: "2026-09-02"
      },
      {
        field: "tickers",
        label: "SEC EDGAR submissions record for CIK 0001468327",
        url: "https://data.sec.gov/submissions/CIK0001468327.json",
        checked: "2026-09-02"
      }
    ],
    lastChecked: "2026-09-02"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COMPANIES: COMPANIES };
}
