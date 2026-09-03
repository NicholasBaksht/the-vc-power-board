/* ============================================================
   DATA-COMPANIES.JS
   Canonical Company entities. Batches 1-3: 180 companies.

   THE ID IS DURABLE, THE NAME IS NOT. companyId never changes once
   assigned, because every other dataset joins on it. The display name
   follows the company. LendingClub is the live example: it renamed to
   Happen on 2026-06-22, so name is "Happen" while companyId stays
   "lendingclub" and "LendingClub" becomes a former name. A registry
   that renamed the id there would have silently orphaned every
   partner and firm reference pointing at it.

   Every non-null field carries its own source row naming the field it
   supports. 2318 source rows across 180 records, none unsourced.
   Nulls are deliberate: an unsourced founding year is null, never a
   plausible guess.
   ============================================================ */

const COMPANIES = {
  "uber": {
    "companyId": "uber",
    "name": "Uber",
    "legalName": "Uber Technologies, Inc.",
    "website": "https://www.uber.com",
    "description": "Technology platform operating ride-hailing, food and grocery delivery, and freight marketplaces. Uber reports three operating and reportable segments: Mobility, Delivery and Freight.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2009,
    "status": "public",
    "statusDetail": null,
    "sector": "Mobility",
    "subsector": "ride-hailing, delivery and freight marketplaces",
    "tickers": [
      "NYSE:UBER"
    ],
    "formerNames": [
      "Ubercab, Inc."
    ],
    "sources": [
      {
        "field": "website",
        "label": "Uber - About Us (official site)",
        "url": "https://www.uber.com/us/en/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Uber Technologies, Inc. Form 10-K FY2025 cover page - SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions record CIK 0001543151",
        "url": "https://data.sec.gov/submissions/CIK0001543151.json",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Uber Form 10-K FY2025 Item 1 Business overview and segments",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Uber Form 10-K FY2025 - address of principal executive offices, 1725 3rd Street, San Francisco, California 94158",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Uber Form 10-K FY2025 - address of principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Uber Form 10-K FY2025 - 'We were founded in 2009 and incorporated as Ubercab, Inc., a Delaware corporation, in July 2010.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Uber Form 10-K FY2025 cover - securities registered pursuant to Section 12(b), New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Uber Form 10-K FY2025 cover - Trading Symbol UBER, New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record CIK 0001543151 - tickers ['UBER'], exchanges ['NYSE']",
        "url": "https://data.sec.gov/submissions/CIK0001543151.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Uber Form 10-K FY2025 - 'In February 2011, we changed our name to Uber Technologies, Inc.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Uber Form 10-K FY2025 - three operating and reportable segments: Mobility, Delivery and Freight",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Uber Form 10-K FY2025 - segment descriptions",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "spacex": {
    "companyId": "spacex",
    "name": "SpaceX",
    "legalName": "Space Exploration Technologies Corp.",
    "website": "https://www.spacex.com",
    "description": "Designs, manufactures and operates orbital launch vehicles and spacecraft, including the Falcon 9 and Falcon Heavy rockets, the Dragon spacecraft and the Starship vehicle, and operates the Starlink low Earth orbit satellite constellation and broadband network.",
    "hqCity": "Starbase",
    "hqCountry": "United States",
    "foundedYear": 2002,
    "status": "public",
    "statusDetail": null,
    "sector": "Space",
    "subsector": "launch vehicles, spacecraft and satellite broadband",
    "tickers": [
      "NASDAQ:SPCX"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "SpaceX - Official Site",
        "url": "https://www.spacex.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Space Exploration Technologies Corp. Form S-1 cover - exact name of registrant as specified in its charter",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SpaceX Investor Relations - IPO closing press release naming Space Exploration Technologies Corp.",
        "url": "https://ir.spacex.com/updates/releases-details/2026/Space-Exploration-Technologies-Corp--Announces-Closing-of-Initial-Public-Offering-Including-Full-Exercise-of-Underwriters-Option-to-Purchase-Additional-Shares-2026-RgoR-Y1Vwh/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "SpaceX Form S-1 - descriptions of Falcon 9, Falcon Heavy, Dragon, Starship and Starlink",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SpaceX Form S-1 - principal executive offices, 1 Rocket Road, Starbase, Texas 78521",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR submissions record CIK 0001181412 - business address 1 ROCKET ROAD, STARBASE, TX 78521",
        "url": "https://data.sec.gov/submissions/CIK0001181412.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SpaceX Form S-1 - principal executive offices in Texas",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SpaceX Form S-1 - 'Founded in 2002, SpaceX is the only company building the integrated hardware and software infrastructure of the future across space, connectivity, and AI.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SpaceX IR - 'Space Exploration Technologies Corp. Announces Closing of Initial Public Offering', shares began trading June 12, 2026, closing June 15, 2026",
        "url": "https://ir.spacex.com/updates/releases-details/2026/Space-Exploration-Technologies-Corp--Announces-Closing-of-Initial-Public-Offering-Including-Full-Exercise-of-Underwriters-Option-to-Purchase-Additional-Shares-2026-RgoR-Y1Vwh/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Nasdaq official listing page - Space Exploration Technologies Corp. Class A Common Stock (SPCX)",
        "url": "https://www.nasdaq.com/market-activity/stocks/spcx",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SpaceX IR closing press release - 'began trading on the Nasdaq Global Select Market and Nasdaq Texas on June 12, 2026, under the ticker symbol SPCX'",
        "url": "https://ir.spacex.com/updates/releases-details/2026/Space-Exploration-Technologies-Corp--Announces-Closing-of-Initial-Public-Offering-Including-Full-Exercise-of-Underwriters-Option-to-Purchase-Additional-Shares-2026-RgoR-Y1Vwh/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Nasdaq official listing page for SPCX",
        "url": "https://www.nasdaq.com/market-activity/stocks/spcx",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record CIK 0001181412 - tickers ['SPCX'], exchanges ['Nasdaq']",
        "url": "https://data.sec.gov/submissions/CIK0001181412.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "SpaceX Form S-1 - launch vehicles, spacecraft and the Starlink satellite constellation",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "SpaceX Form S-1 - Falcon, Dragon, Starship and Starlink descriptions",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "twilio": {
    "companyId": "twilio",
    "name": "Twilio",
    "legalName": "Twilio Inc.",
    "website": "https://www.twilio.com",
    "description": "Cloud communications company providing programmable messaging, voice and email APIs that developers and businesses use to build customer communication into their own applications.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2008,
    "status": "public",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "programmable communications APIs for messaging, voice and email",
    "tickers": [
      "NYSE:TWLO"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Twilio - Company page (official site)",
        "url": "https://www.twilio.com/en-us/company",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions record CIK 0001447669 - name 'TWILIO INC'",
        "url": "https://data.sec.gov/submissions/CIK0001447669.json",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Twilio official press release Q1 2026 results - About Twilio boilerplate describing messaging, voice and email platform",
        "url": "https://www.twilio.com/en-us/press/releases/q1-2026-earnings",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Twilio - Company page",
        "url": "https://www.twilio.com/en-us/company",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR submissions record CIK 0001447669 - business address 101 SPEAR STREET, SUITE 500, San Francisco, CA 94105",
        "url": "https://data.sec.gov/submissions/CIK0001447669.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR submissions record CIK 0001447669 - business address in California",
        "url": "https://data.sec.gov/submissions/CIK0001447669.json",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Twilio - Company page, 'Twilio was founded in 2008 to simplify the complexity of the global telecommunications network'",
        "url": "https://www.twilio.com/en-us/company",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record CIK 0001447669 - exchanges ['NYSE']",
        "url": "https://data.sec.gov/submissions/CIK0001447669.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Twilio official press release Q1 2026 results - 'Twilio (NYSE: TWLO)'",
        "url": "https://www.twilio.com/en-us/press/releases/q1-2026-earnings",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Twilio official press release Q1 2026 results - 'Twilio (NYSE: TWLO)'",
        "url": "https://www.twilio.com/en-us/press/releases/q1-2026-earnings",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record CIK 0001447669 - tickers ['TWLO'], exchanges ['NYSE']",
        "url": "https://data.sec.gov/submissions/CIK0001447669.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Twilio official press release Q1 2026 results - platform across messaging, voice, email relied on by developers",
        "url": "https://www.twilio.com/en-us/press/releases/q1-2026-earnings",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Twilio - Company page and Q1 2026 About Twilio boilerplate",
        "url": "https://www.twilio.com/en-us/press/releases/q1-2026-earnings",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "etsy": {
    "companyId": "etsy",
    "name": "Etsy",
    "legalName": "Etsy, Inc.",
    "website": "https://www.etsy.com",
    "description": "Operates two-sided online marketplaces for unique and creative goods, including the Etsy marketplace and the fashion resale marketplace Depop.",
    "hqCity": "Brooklyn",
    "hqCountry": "United States",
    "foundedYear": 2005,
    "status": "public",
    "statusDetail": null,
    "sector": "Ecommerce",
    "subsector": "online marketplaces for handmade, vintage and resale goods",
    "tickers": [
      "NYSE:ETSY"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Etsy - About page (official site)",
        "url": "https://www.etsy.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Etsy Investor Relations press release - About Etsy boilerplate naming 'Etsy, Inc.'",
        "url": "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions record CIK 0001370637 - name 'ETSY INC'",
        "url": "https://data.sec.gov/submissions/CIK0001370637.json",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Etsy Investor Relations press release - About Etsy boilerplate describing two-sided marketplaces and Depop",
        "url": "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Etsy Investor Relations press release - 'Etsy was founded in 2005 and is headquartered in Brooklyn, New York.'",
        "url": "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Etsy Investor Relations press release - headquartered in Brooklyn, New York",
        "url": "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Etsy Investor Relations press release - 'Etsy was founded in 2005 and is headquartered in Brooklyn, New York.'",
        "url": "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Etsy Investor Relations press release - listing of Common Stock on the NYSE (NYSE: ETSY) began October 13, 2025",
        "url": "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Etsy Investor Relations press release - transfer from Nasdaq to NYSE, Nasdaq listing ceased October 10, 2025, NYSE: ETSY from October 13, 2025",
        "url": "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record CIK 0001370637 - tickers ['ETSY'], exchanges ['NYSE']",
        "url": "https://data.sec.gov/submissions/CIK0001370637.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Etsy Investor Relations press release - About Etsy boilerplate describing online marketplaces for goods",
        "url": "https://investors.etsy.com/news-events/press-releases/detail/210/etsy-to-transfer-listing-of-its-common-stock-to-the-NYSE",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Etsy - About page and About Etsy boilerplate",
        "url": "https://www.etsy.com/about/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "mercury": {
    "companyId": "mercury",
    "name": "Mercury",
    "legalName": "Mercury Technologies, Inc.",
    "website": "https://mercury.com",
    "description": "Financial technology company providing business banking and financial operations products for startups and small businesses, including checking and savings accounts, debit and credit cards, payments, invoicing and bill pay. Mercury is not itself a bank; the deposit accounts and banking services are provided by partner banks Choice Financial Group and Column N.A.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "private",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "business banking and financial operations software for startups",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Mercury - Official Site, footer disclosure",
        "url": "https://mercury.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC Form D filing by Mercury Technologies, Inc., CIK 0001719932 - entityName 'Mercury Technologies, Inc.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1719932/000171993217000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Mercury legal disclosures - 'Mercury Advisory is a wholly-owned subsidiary of Mercury Technologies, Inc.'",
        "url": "https://mercury.com/legal/disclosures/invest",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions record CIK 0001719932 - name 'Mercury Technologies, Inc.'",
        "url": "https://data.sec.gov/submissions/CIK0001719932.json",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Mercury - Official Site, 'Mercury is a fintech company, not an FDIC-insured bank. Banking services provided through Choice Financial Group and Column N.A., Members FDIC.' plus product description",
        "url": "https://mercury.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Mercury Advisory, LLC Form ADV Part 2 brochure - 'Mercury Advisory is a wholly owned subsidiary of Mercury Technologies Inc., a financial technology company' and 'Mercury, through partnerships with certain banking institutions, provides various banking services to its Clients.'",
        "url": "https://www.datocms-assets.com/115132/1776818056-mercury-advisory-adv-part-2-brochure-march-2026.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Mercury Advisory, LLC Form ADV Part 2 brochure - 'Mercury Technologies Inc. is a privately held company headquartered in San Francisco, California.'",
        "url": "https://www.datocms-assets.com/115132/1776818056-mercury-advisory-adv-part-2-brochure-march-2026.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC Form D filing CIK 0001719932 - issuer address San Francisco, CA",
        "url": "https://www.sec.gov/Archives/edgar/data/1719932/000171993217000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Mercury Advisory, LLC Form ADV Part 2 brochure - headquartered in San Francisco, California",
        "url": "https://www.datocms-assets.com/115132/1776818056-mercury-advisory-adv-part-2-brochure-march-2026.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SEC Form D filing CIK 0001719932 - yearOfInc value 2017, jurisdictionOfInc DELAWARE",
        "url": "https://www.sec.gov/Archives/edgar/data/1719932/000171993217000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Mercury Advisory, LLC Form ADV Part 2 brochure - 'Mercury Technologies Inc. is a privately held company headquartered in San Francisco, California.'",
        "url": "https://www.datocms-assets.com/115132/1776818056-mercury-advisory-adv-part-2-brochure-march-2026.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record CIK 0001719932 - tickers [] and exchanges [] empty; filings are Form D exempt offerings only",
        "url": "https://data.sec.gov/submissions/CIK0001719932.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Mercury - Official Site, 'Mercury is a fintech company, not an FDIC-insured bank.'",
        "url": "https://mercury.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Mercury - Official Site, product description covering checking and savings accounts, cards, payments, invoicing and bill pay",
        "url": "https://mercury.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "uipath": {
    "companyId": "uipath",
    "name": "UiPath",
    "legalName": "UiPath, Inc.",
    "website": "https://www.uipath.com",
    "description": "Enterprise software company providing an automation platform that combines robotic process automation, AI agents, document processing, orchestration and testing for business processes.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2005,
    "status": "public",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "robotic process automation and agentic automation platform",
    "tickers": [
      "NYSE:PATH"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "UiPath - About Us (official site)",
        "url": "https://www.uipath.com/company/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions record CIK 0001734722 - name 'UiPath, Inc.'",
        "url": "https://data.sec.gov/submissions/CIK0001734722.json",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "UiPath Investor Relations site - UiPath, Inc.",
        "url": "https://ir.uipath.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "UiPath Investor Relations press release - About UiPath boilerplate describing automation, orchestration, AI and testing",
        "url": "https://ir.uipath.com/news/detail/445/uipath-announces-first-quarter-fiscal-2027-financial-results-conference-call",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "UiPath - About Us, UiPath Platform enabling AI agents, robots, people and models",
        "url": "https://www.uipath.com/company/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "UiPath Investor Relations site - 1 Vanderbilt Ave, 60th Floor, New York, NY 10017",
        "url": "https://ir.uipath.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR submissions record CIK 0001734722 - business address ONE VANDERBILT AVENUE, 60TH FLOOR, NEW YORK, NY 10017",
        "url": "https://data.sec.gov/submissions/CIK0001734722.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR submissions record CIK 0001734722 - business address in New York",
        "url": "https://data.sec.gov/submissions/CIK0001734722.json",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "UiPath - About Us, 'Our story starts in 2005 in Bucharest, Romania, with 10 people working in a small apartment'",
        "url": "https://www.uipath.com/company/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "UiPath Investor Relations press release - 'UiPath (NYSE: PATH)'",
        "url": "https://ir.uipath.com/news/detail/445/uipath-announces-first-quarter-fiscal-2027-financial-results-conference-call",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record CIK 0001734722 - exchanges ['NYSE']",
        "url": "https://data.sec.gov/submissions/CIK0001734722.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "UiPath Investor Relations press release - 'UiPath (NYSE: PATH)'",
        "url": "https://ir.uipath.com/news/detail/445/uipath-announces-first-quarter-fiscal-2027-financial-results-conference-call",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record CIK 0001734722 - tickers ['PATH'], exchanges ['NYSE']",
        "url": "https://data.sec.gov/submissions/CIK0001734722.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "UiPath Investor Relations press release - About UiPath boilerplate describing enterprise automation and orchestration software",
        "url": "https://ir.uipath.com/news/detail/445/uipath-announces-first-quarter-fiscal-2027-financial-results-conference-call",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "UiPath - About Us, RPA, intelligent document processing, process intelligence and agentic AI",
        "url": "https://www.uipath.com/company/about-us",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "reddit": {
    "companyId": "reddit",
    "name": "Reddit",
    "legalName": "Reddit, Inc.",
    "website": "https://www.redditinc.com",
    "description": "Operator of Reddit, a platform of user created online communities where members post, comment and vote on content, monetised mainly through advertising.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2005,
    "status": "public",
    "statusDetail": null,
    "sector": "Consumer",
    "subsector": "online communities and social platform, advertising supported",
    "tickers": [
      "NYSE:RDDT"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Reddit, Inc. - Form 10-K for fiscal year 2024, Reddit investor relations file",
        "url": "https://s203.q4cdn.com/380862485/files/doc_financials/2024/q4/v2/Reddit-Inc-10-K-2024-as-filed.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Reddit, Inc. entity submissions, CIK 0001713445",
        "url": "https://data.sec.gov/submissions/CIK0001713445.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Reddit, Inc. entity submissions, CIK 0001713445",
        "url": "https://data.sec.gov/submissions/CIK0001713445.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Reddit, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1713445/000171344526000062/redditinc10-k2025.pdf",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "supabase": {
    "companyId": "supabase",
    "name": "Supabase",
    "legalName": "Supabase, Inc.",
    "website": "https://supabase.com",
    "description": "Open source developer platform providing a hosted Postgres database together with authentication, data APIs, edge functions, realtime data, storage and vector embeddings.",
    "hqCity": null,
    "hqCountry": null,
    "foundedYear": 2020,
    "status": "private",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "open source Postgres backend as a service",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Supabase - Acceptable Use Policy",
        "url": "https://supabase.com/aup",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Supabase - Contact Us",
        "url": "https://supabase.com/contact-us",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Supabase, Inc. entity submissions, CIK 0001829334",
        "url": "https://data.sec.gov/submissions/CIK0001829334.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Supabase - Official Site",
        "url": "https://supabase.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Supabase - Official Site",
        "url": "https://supabase.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Supabase - Open Source",
        "url": "https://supabase.com/open-source",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Y Combinator - Supabase company page (Summer 2020 batch)",
        "url": "https://www.ycombinator.com/companies/supabase",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Supabase, Inc. Form D notice of exempt offering, filed 2026-06-05",
        "url": "https://www.sec.gov/Archives/edgar/data/1829334/000182933426000002/xslFormDX08/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Supabase, Inc. entity submissions, CIK 0001829334",
        "url": "https://data.sec.gov/submissions/CIK0001829334.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Supabase - Official Site",
        "url": "https://supabase.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Supabase - Official Site",
        "url": "https://supabase.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "block": {
    "companyId": "block",
    "name": "Block",
    "legalName": "Block, Inc.",
    "website": "https://block.xyz",
    "description": "Financial technology company operating the Square seller platform, the Cash App consumer financial services app, the Afterpay buy now pay later service, TIDAL, Bitkey and Proto.",
    "hqCity": "Oakland",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "public",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "merchant payments, consumer financial services and buy now pay later",
    "tickers": [
      "NYSE:XYZ"
    ],
    "formerNames": [
      "Square, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Block, Inc. entity submissions, CIK 0001512673",
        "url": "https://data.sec.gov/submissions/CIK0001512673.json",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Block - Block Announces Ticker Symbol Change to XYZ",
        "url": "https://block.xyz/inside/block-announces-ticker-symbol-change-to-xyz",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Block - Official Site",
        "url": "https://block.xyz/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Block - Official Site",
        "url": "https://block.xyz/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Block - Block Announces Ticker Symbol Change to XYZ (About Block boilerplate)",
        "url": "https://block.xyz/inside/block-announces-ticker-symbol-change-to-xyz",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Block, Inc. entity submissions, CIK 0001512673",
        "url": "https://data.sec.gov/submissions/CIK0001512673.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Block - Block Announces Ticker Symbol Change to XYZ (dateline)",
        "url": "https://block.xyz/inside/block-announces-ticker-symbol-change-to-xyz",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Block, Inc. entity submissions, CIK 0001512673",
        "url": "https://data.sec.gov/submissions/CIK0001512673.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Block - Block Announces Ticker Symbol Change to XYZ (dateline)",
        "url": "https://block.xyz/inside/block-announces-ticker-symbol-change-to-xyz",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Block, Inc. entity submissions, CIK 0001512673",
        "url": "https://data.sec.gov/submissions/CIK0001512673.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Block, Inc. - Investor Relations overview",
        "url": "https://investors.block.xyz/overview/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Block, Inc. entity submissions, CIK 0001512673",
        "url": "https://data.sec.gov/submissions/CIK0001512673.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Block - Block Announces Ticker Symbol Change to XYZ",
        "url": "https://block.xyz/inside/block-announces-ticker-symbol-change-to-xyz",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Block, Inc. - Investor Relations overview",
        "url": "https://investors.block.xyz/overview/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR - Block, Inc. entity submissions, CIK 0001512673 (formerNames: Square, Inc., 2011-03-02 to 2021-12-08)",
        "url": "https://data.sec.gov/submissions/CIK0001512673.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Block - Official Site",
        "url": "https://block.xyz/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Block - Block Announces Ticker Symbol Change to XYZ (About Block boilerplate)",
        "url": "https://block.xyz/inside/block-announces-ticker-symbol-change-to-xyz",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "opendoor": {
    "companyId": "opendoor",
    "name": "Opendoor",
    "legalName": "Opendoor Technologies Inc.",
    "website": "https://www.opendoor.com",
    "description": "Digital residential real estate company that lets consumers sell, buy and own a home through an end to end online service in the United States.",
    "hqCity": "Tempe",
    "hqCountry": "United States",
    "foundedYear": 2014,
    "status": "public",
    "statusDetail": null,
    "sector": "Real Estate Tech",
    "subsector": "online residential home buying and selling",
    "tickers": [
      "NASDAQ:OPEN"
    ],
    "formerNames": [
      "Social Capital Hedosophia Holdings Corp. II"
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Opendoor Technologies Inc. entity submissions, CIK 0001801169",
        "url": "https://data.sec.gov/submissions/CIK0001801169.json",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Opendoor Technologies Inc. - Investor Relations FAQs",
        "url": "https://investor.opendoor.com/ir-resources/faqs",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Opendoor - About",
        "url": "https://www.opendoor.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Opendoor Technologies Inc. - Investor Relations FAQs",
        "url": "https://investor.opendoor.com/ir-resources/faqs",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Opendoor Technologies Inc. - Investor Relations FAQs",
        "url": "https://investor.opendoor.com/ir-resources/faqs",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Opendoor Technologies Inc. entity submissions, CIK 0001801169",
        "url": "https://data.sec.gov/submissions/CIK0001801169.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Opendoor Technologies Inc. - Investor Relations FAQs",
        "url": "https://investor.opendoor.com/ir-resources/faqs",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Opendoor Technologies Inc. - Investor Relations FAQs",
        "url": "https://investor.opendoor.com/ir-resources/faqs",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Opendoor Technologies Inc. entity submissions, CIK 0001801169",
        "url": "https://data.sec.gov/submissions/CIK0001801169.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Opendoor Technologies Inc. - Investor Relations FAQs",
        "url": "https://investor.opendoor.com/ir-resources/faqs",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Opendoor Technologies Inc. entity submissions, CIK 0001801169",
        "url": "https://data.sec.gov/submissions/CIK0001801169.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Opendoor Technologies Inc. - Investor Relations FAQs",
        "url": "https://investor.opendoor.com/ir-resources/faqs",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR - Opendoor Technologies Inc. entity submissions, CIK 0001801169 (formerNames: Social Capital Hedosophia Holdings Corp. II, to 2020-12-18)",
        "url": "https://data.sec.gov/submissions/CIK0001801169.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Opendoor Technologies Inc. - Investor Relations FAQs",
        "url": "https://investor.opendoor.com/ir-resources/faqs",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Opendoor Technologies Inc. - Investor Relations FAQs",
        "url": "https://investor.opendoor.com/ir-resources/faqs",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "wise": {
    "companyId": "wise",
    "name": "Wise",
    "legalName": "Wise Group plc",
    "website": "https://wise.com",
    "description": "Global technology company providing cross border money transfers, multi currency accounts and cards for people and businesses, and payments infrastructure used by banks and platforms.",
    "hqCity": "London",
    "hqCountry": "United Kingdom",
    "foundedYear": 2011,
    "status": "public",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "cross border payments and multi currency accounts",
    "tickers": [
      "NASDAQ:WSE",
      "LSE:WISE"
    ],
    "formerNames": [
      "TransferWise"
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (Owner Relations, RNS)",
        "url": "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Wise Group plc entity submissions, CIK 0002099039",
        "url": "https://data.sec.gov/submissions/CIK0002099039.json",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Wise Group plc - Financial News (Owner Relations)",
        "url": "https://owners.wise.com/news-events/financial-news",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Wise - Scheme of Arrangement, 27 April 2026 (Owner Relations, RNS)",
        "url": "https://owners.wise.com/news-releases/news-release-details/scheme-arrangement",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (Owner Relations, RNS)",
        "url": "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (About Wise boilerplate)",
        "url": "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Wise Group plc entity submissions, CIK 0002099039 (business address 65 Clifton Street, London)",
        "url": "https://data.sec.gov/submissions/CIK0002099039.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Wise Group plc entity submissions, CIK 0002099039 (business address 65 Clifton Street, London)",
        "url": "https://data.sec.gov/submissions/CIK0002099039.json",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (About Wise boilerplate, Launched in 2011)",
        "url": "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (Owner Relations, RNS)",
        "url": "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Wise Group plc - Financial News (Owner Relations)",
        "url": "https://owners.wise.com/news-events/financial-news",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Wise Group plc entity submissions, CIK 0002099039",
        "url": "https://data.sec.gov/submissions/CIK0002099039.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (Nasdaq:WSE, LSE:WISE)",
        "url": "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Wise Group plc - Financial News (Nasdaq: WSE; LSE: WISE)",
        "url": "https://owners.wise.com/news-events/financial-news",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Wise Group plc entity submissions, CIK 0002099039 (ticker WSE, exchange Nasdaq)",
        "url": "https://data.sec.gov/submissions/CIK0002099039.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Wise - World, meet Wise, 22 February 2021 (company blog)",
        "url": "https://wise.com/gb/blog/world-meet-wise",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (About Wise boilerplate)",
        "url": "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Wise - Wise debuts US listing on Nasdaq, 11 May 2026 (About Wise boilerplate)",
        "url": "https://owners.wise.com/news-releases/news-release-details/wise-debuts-us-listing-nasdaq-0",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "hingehealth": {
    "companyId": "hingehealth",
    "name": "Hinge Health",
    "legalName": "Hinge Health, Inc.",
    "website": "https://www.hingehealth.com",
    "description": "Digital health company delivering virtual and in person musculoskeletal care, including physical therapy and orthopedic care, using an AI powered care model, connected devices and clinicians.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2014,
    "status": "public",
    "statusDetail": null,
    "sector": "Digital Health",
    "subsector": "virtual musculoskeletal care",
    "tickers": [
      "NYSE:HNGE"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Hinge Health, Inc. entity submissions, CIK 0001673743",
        "url": "https://data.sec.gov/submissions/CIK0001673743.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Hinge Health - Official Site",
        "url": "https://www.hingehealth.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Hinge Health to acquire Cylinder Health (company press release, About Hinge Health boilerplate)",
        "url": "https://www.businesswire.com/news/home/20260804144447/en/Hinge-Health-to-acquire-Cylinder-Health-expanding-into-gastrointestinal-care",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Hinge Health - Official Site",
        "url": "https://www.hingehealth.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Hinge Health, Inc. entity submissions, CIK 0001673743 (455 Market Street, 7th Floor, San Francisco, CA)",
        "url": "https://data.sec.gov/submissions/CIK0001673743.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Hinge Health to acquire Cylinder Health (company press release, About Hinge Health boilerplate)",
        "url": "https://www.businesswire.com/news/home/20260804144447/en/Hinge-Health-to-acquire-Cylinder-Health-expanding-into-gastrointestinal-care",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Hinge Health to acquire Cylinder Health (company press release, About Hinge Health boilerplate)",
        "url": "https://www.businesswire.com/news/home/20260804144447/en/Hinge-Health-to-acquire-Cylinder-Health-expanding-into-gastrointestinal-care",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Fierce Healthcare - Hinge Health shares jump 17% in stock market debut",
        "url": "https://www.fiercehealthcare.com/health-tech/hinge-health-shares-jump-17-stock-market-setting-stage-digital-health-ipo-revival",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Hinge Health, Inc. entity submissions, CIK 0001673743",
        "url": "https://data.sec.gov/submissions/CIK0001673743.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Hinge Health to acquire Cylinder Health (company press release, NYSE: HNGE)",
        "url": "https://www.businesswire.com/news/home/20260804144447/en/Hinge-Health-to-acquire-Cylinder-Health-expanding-into-gastrointestinal-care",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Hinge Health, Inc. entity submissions, CIK 0001673743 (ticker HNGE, exchange NYSE)",
        "url": "https://data.sec.gov/submissions/CIK0001673743.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Hinge Health to acquire Cylinder Health (company press release, NYSE: HNGE)",
        "url": "https://www.businesswire.com/news/home/20260804144447/en/Hinge-Health-to-acquire-Cylinder-Health-expanding-into-gastrointestinal-care",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Hinge Health - Official Site",
        "url": "https://www.hingehealth.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Hinge Health - Official Site",
        "url": "https://www.hingehealth.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "hightouch": {
    "companyId": "hightouch",
    "name": "Hightouch",
    "legalName": "Carry Technologies, Inc.",
    "website": "https://hightouch.com",
    "description": "Data activation software that syncs customer data from cloud data warehouses into marketing, advertising and other business tools, and provides customer data platform and audience decisioning features for enterprise teams.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "customer data platform and data activation from the cloud data warehouse",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Hightouch - Terms of Service",
        "url": "https://hightouch.com/terms-of-service",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Hightouch - Platform Privacy Notice",
        "url": "https://hightouch.com/platform-privacy",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Hightouch - Official Site",
        "url": "https://hightouch.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Hightouch - Official Site",
        "url": "https://hightouch.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Hightouch - About",
        "url": "https://hightouch.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Hightouch - Platform Privacy Notice",
        "url": "https://hightouch.com/platform-privacy",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Hightouch - Platform Privacy Notice",
        "url": "https://hightouch.com/platform-privacy",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Hightouch - Raising \$150M to build the AI platform for marketers",
        "url": "https://hightouch.com/blog/hightouch-funding-series-d",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Hightouch - Official Site",
        "url": "https://hightouch.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Hightouch - Official Site",
        "url": "https://hightouch.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "omadahealth": {
    "companyId": "omadahealth",
    "name": "Omada Health",
    "legalName": "Omada Health, Inc.",
    "website": "https://www.omadahealth.com",
    "description": "Provides virtual care programs delivered between physician visits for cardiometabolic and musculoskeletal conditions, contracted through employers, health plans and other channel partners.",
    "hqCity": "South San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2011,
    "status": "public",
    "statusDetail": null,
    "sector": "Digital Health",
    "subsector": "virtual care programs for cardiometabolic and musculoskeletal conditions",
    "tickers": [
      "NASDAQ:OMDA"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Omada Health, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Omada Health, Inc. submissions (CIK 0001611115)",
        "url": "https://data.sec.gov/submissions/CIK0001611115.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Omada Health - Investor Relations",
        "url": "https://investors.omadahealth.com/ir-resources/investor-faqs",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Omada Health, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Omada Health, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Omada Health, Inc. submissions (CIK 0001611115)",
        "url": "https://data.sec.gov/submissions/CIK0001611115.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Omada Health, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Omada Health, Inc. - Form 10-K fiscal 2025",
        "url": "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Omada Health - Investor FAQs",
        "url": "https://investors.omadahealth.com/ir-resources/investor-faqs",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Omada Health, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Omada Health - Investor FAQs",
        "url": "https://investors.omadahealth.com/ir-resources/investor-faqs",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Omada Health, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Omada Health - Investor FAQs",
        "url": "https://investors.omadahealth.com/ir-resources/investor-faqs",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Omada Health, Inc. submissions (CIK 0001611115)",
        "url": "https://data.sec.gov/submissions/CIK0001611115.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Omada Health, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Omada Health, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1611115/000162828026027947/fy25omadahealthinc10-kars.pdf",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "coinbase": {
    "companyId": "coinbase",
    "name": "Coinbase",
    "legalName": "Coinbase Global, Inc.",
    "website": "https://www.coinbase.com",
    "description": "Operates a platform for buying, selling, transferring, staking and storing crypto assets, serving retail users, institutions and developers.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "public",
    "statusDetail": null,
    "sector": "Crypto",
    "subsector": "crypto asset exchange, custody and related financial services",
    "tickers": [
      "NASDAQ:COIN"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Coinbase Global, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Coinbase Global, Inc. - DEF 14C information statement on reincorporation",
        "url": "https://www.sec.gov/Archives/edgar/data/1679788/000167978825000227/coin-def14cinformationstat.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Coinbase Global, Inc. submissions (CIK 0001679788)",
        "url": "https://data.sec.gov/submissions/CIK0001679788.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Coinbase - About",
        "url": "https://www.coinbase.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Coinbase - About",
        "url": "https://www.coinbase.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Coinbase Global, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Coinbase Global, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Coinbase Global, Inc. submissions (CIK 0001679788)",
        "url": "https://data.sec.gov/submissions/CIK0001679788.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Coinbase Global, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Coinbase Global, Inc. - Form 10-K fiscal 2025",
        "url": "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Coinbase Global, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Coinbase Global, Inc. submissions (CIK 0001679788)",
        "url": "https://data.sec.gov/submissions/CIK0001679788.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Coinbase Global, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Coinbase Global, Inc. submissions (CIK 0001679788)",
        "url": "https://data.sec.gov/submissions/CIK0001679788.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Coinbase Global, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Coinbase Global, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000047/coinbase2025ars.pdf",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "airbnb": {
    "companyId": "airbnb",
    "name": "Airbnb",
    "legalName": "Airbnb, Inc.",
    "website": "https://www.airbnb.com",
    "description": "Operates a global online marketplace connecting guests with hosts offering stays, experiences and services.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2008,
    "status": "public",
    "statusDetail": null,
    "sector": "Consumer",
    "subsector": "online marketplace for short-term stays, experiences and services",
    "tickers": [
      "NASDAQ:ABNB"
    ],
    "formerNames": [
      "AirBed & Breakfast, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Airbnb, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Airbnb, Inc. submissions (CIK 0001559720)",
        "url": "https://data.sec.gov/submissions/CIK0001559720.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Airbnb Newsroom - About Us",
        "url": "https://news.airbnb.com/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Airbnb, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Airbnb, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Airbnb, Inc. submissions (CIK 0001559720)",
        "url": "https://data.sec.gov/submissions/CIK0001559720.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Airbnb, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Airbnb, Inc. - Form S-1 registration statement",
        "url": "https://www.sec.gov/Archives/edgar/data/1559720/000119312520294801/d81668ds1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Airbnb, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Airbnb, Inc. submissions (CIK 0001559720)",
        "url": "https://data.sec.gov/submissions/CIK0001559720.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Airbnb, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Airbnb, Inc. submissions (CIK 0001559720)",
        "url": "https://data.sec.gov/submissions/CIK0001559720.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Airbnb, Inc. - Form S-1 registration statement",
        "url": "https://www.sec.gov/Archives/edgar/data/1559720/000119312520294801/d81668ds1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Airbnb, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Airbnb, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "doordash": {
    "companyId": "doordash",
    "name": "DoorDash",
    "legalName": "DoorDash, Inc.",
    "website": "https://www.doordash.com",
    "description": "Operates local commerce marketplaces and a commerce platform that connect consumers with restaurants, grocers and retailers and fulfill on-demand delivery and pickup orders, including the DoorDash, Wolt and Deliveroo marketplaces.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2013,
    "status": "public",
    "statusDetail": null,
    "sector": "Consumer",
    "subsector": "local commerce marketplaces and last mile delivery fulfillment",
    "tickers": [
      "NASDAQ:DASH"
    ],
    "formerNames": [
      "Palo Alto Delivery Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "DoorDash, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - DoorDash, Inc. submissions (CIK 0001792789)",
        "url": "https://data.sec.gov/submissions/CIK0001792789.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "DoorDash - Official corporate site",
        "url": "https://about.doordash.com/en-us",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "DoorDash, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "DoorDash - Official corporate site",
        "url": "https://about.doordash.com/en-us",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "DoorDash, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - DoorDash, Inc. submissions (CIK 0001792789)",
        "url": "https://data.sec.gov/submissions/CIK0001792789.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "DoorDash, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "DoorDash, Inc. - Form S-1 registration statement",
        "url": "https://www.sec.gov/Archives/edgar/data/1792789/000119312520292381/d752207ds1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "DoorDash, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - DoorDash, Inc. submissions (CIK 0001792789)",
        "url": "https://data.sec.gov/submissions/CIK0001792789.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "DoorDash, Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - DoorDash, Inc. submissions (CIK 0001792789)",
        "url": "https://data.sec.gov/submissions/CIK0001792789.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "DoorDash, Inc. - Form S-1 registration statement",
        "url": "https://www.sec.gov/Archives/edgar/data/1792789/000119312520292381/d752207ds1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "DoorDash, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "DoorDash, Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "palantir": {
    "companyId": "palantir",
    "name": "Palantir",
    "legalName": "Palantir Technologies Inc.",
    "website": "https://www.palantir.com",
    "description": "Builds software platforms that integrate data, decisions and operations at scale for government and commercial organizations.",
    "hqCity": "Aventura",
    "hqCountry": "United States",
    "foundedYear": 2003,
    "status": "public",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "data integration and operational decision making platforms for government and commercial institutions",
    "tickers": [
      "NASDAQ:PLTR"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Palantir Technologies Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Palantir Technologies Inc. submissions (CIK 0001321655)",
        "url": "https://data.sec.gov/submissions/CIK0001321655.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Palantir - About",
        "url": "https://www.palantir.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Palantir Technologies Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Palantir Technologies Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Palantir Technologies Inc. submissions (CIK 0001321655)",
        "url": "https://data.sec.gov/submissions/CIK0001321655.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Palantir Technologies Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Palantir Technologies Inc. - Form 10-K fiscal 2025",
        "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Palantir Technologies Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Palantir Technologies Inc. submissions (CIK 0001321655)",
        "url": "https://data.sec.gov/submissions/CIK0001321655.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Palantir Technologies Inc. - Form 10-K fiscal 2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Palantir - Announces Transfer of Stock Exchange Listing to Nasdaq (SEC Exhibit 99.1)",
        "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165524000219/pltr-exchangeswitchpressre.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Palantir Technologies Inc. submissions (CIK 0001321655)",
        "url": "https://data.sec.gov/submissions/CIK0001321655.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Palantir Technologies Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Palantir Technologies Inc. - Form 10-K fiscal 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "notion": {
    "companyId": "notion",
    "name": "Notion",
    "legalName": "Notion Labs, Inc.",
    "website": "https://www.notion.com",
    "description": "Software company offering an all-in-one workspace that combines notes, documents, wikis and databases for individuals and teams.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2013,
    "status": "private",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "all-in-one workspace for notes, wikis and databases",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Notion - Why we built Notion (About), copyright line 'c 2026 Notion Labs, Inc.'",
        "url": "https://www.notion.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Notion - Careers, copyright line 'c 2026 Notion Labs, Inc.'",
        "url": "https://www.notion.com/careers",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "TechCrunch - Work collaboration startup Notion cozies up to Silicon Valley's top accelerators ('Notion Labs, a profitable work tools startup')",
        "url": "https://techcrunch.com/2019/11/12/work-collaboration-startup-notion-labs-cozies-up-to-silicon-valleys-top-accelerators/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Notion - Why we built Notion (About), official site",
        "url": "https://www.notion.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Notion - Why we built Notion (About), 'an all-in-one workspace'",
        "url": "https://www.notion.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "TechCrunch - Notion combines notes, wikis and databases",
        "url": "https://techcrunch.com/2019/11/12/work-collaboration-startup-notion-labs-cozies-up-to-silicon-valleys-top-accelerators/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Notion - About, 'Notion is based in beautiful downtown San Francisco'",
        "url": "https://www.notion.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Notion - About, 'Notion is based in beautiful downtown San Francisco'",
        "url": "https://www.notion.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Notion blog - 100 million people now use Notion, 'We started in 2013'",
        "url": "https://www.notion.com/blog/100-million-of-you",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "TechCrunch - Notion hits \$2 billion valuation in new raise (venture financing, privately held)",
        "url": "https://techcrunch.com/2020/04/01/notion-hits-2-billion-valuation-in-new-raise/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Notion - About, all-in-one workspace product for teams",
        "url": "https://www.notion.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "TechCrunch - Notion combines notes, wikis and databases",
        "url": "https://techcrunch.com/2019/11/12/work-collaboration-startup-notion-labs-cozies-up-to-silicon-valleys-top-accelerators/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "instacart": {
    "companyId": "instacart",
    "name": "Instacart",
    "legalName": "Maplebear Inc.",
    "website": "https://www.instacart.com",
    "description": "Online grocery company operating a marketplace for grocery ordering and delivery and supplying e-commerce, fulfillment and advertising technology to retailers.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "public",
    "statusDetail": null,
    "sector": "Ecommerce",
    "subsector": "online grocery marketplace and retail enablement technology",
    "tickers": [
      "NASDAQ:CART"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Maplebear Inc. Form 10-K FY2024, 'We were incorporated as Maplebear Inc. in Delaware in 2012, and we do business as Instacart.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions data - name 'Maplebear Inc.'",
        "url": "https://data.sec.gov/submissions/CIK0001579091.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Instacart - Company / About Us, official site",
        "url": "https://www.instacart.com/company/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "SEC EDGAR - Form 10-K FY2024 Item 1 Business, 'Instacart is powering the future of grocery through technology. We partner with retailers...'",
        "url": "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Form 10-K FY2024 cover, principal executive offices '50 Beale Street, Suite 600, San Francisco, California 94105'",
        "url": "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Form 10-K FY2024 cover, principal executive offices in California",
        "url": "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SEC EDGAR - Form 10-K FY2024, 'Instacart was founded in 2012 to bring the grocery industry online'",
        "url": "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Instacart - About Us timeline 2012, 'Founded by Apoorva Mehta, Max Mullen and Brandon Leonardo'",
        "url": "https://www.instacart.com/company/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions data - current tickers ['CART'], exchanges ['Nasdaq']",
        "url": "https://data.sec.gov/submissions/CIK0001579091.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Form 10-K FY2024 cover, securities registered on the Nasdaq Global Select Market",
        "url": "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions data - current tickers ['CART'], exchanges ['Nasdaq']",
        "url": "https://data.sec.gov/submissions/CIK0001579091.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Form 10-K FY2024 cover, 'Common Stock, par value \$0.0001 per share' / 'CART' / 'Nasdaq Global Select Market'",
        "url": "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "SEC EDGAR - Form 10-K FY2024 Item 1 Business, online grocery and retail enablement",
        "url": "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "SEC EDGAR - Form 10-K FY2024 Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1579091/000157909125000015/cart-20241231.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "lyft": {
    "companyId": "lyft",
    "name": "Lyft",
    "legalName": "Lyft, Inc.",
    "website": "https://www.lyft.com",
    "description": "Mobility platform offering rideshare, taxis, private hire vehicles, executive chauffeur services, car sharing, bikes and scooters.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "public",
    "statusDetail": null,
    "sector": "Mobility",
    "subsector": "rideshare and multimodal mobility platform",
    "tickers": [
      "NASDAQ:LYFT"
    ],
    "formerNames": [
      "Bounder Web, Inc.",
      "Zimride, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Lyft, Inc. Form 10-K FY2025 cover page registrant name",
        "url": "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions data - name 'Lyft, Inc.'",
        "url": "https://data.sec.gov/submissions/CIK0001759509.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Lyft - official site, footer identifies Lyft, Inc.",
        "url": "https://www.lyft.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "SEC EDGAR - Form 10-K FY2025 Item 1 Business, 'Lyft, Inc. ... operates as a global mobility platform offering a mix of rideshare, taxis, private hire vehicles, executive chauffeur services, car sharing, bikes and scooters.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Form 10-K FY2025 cover, principal executive offices '185 Berry Street, Suite 400, San Francisco, California 94107'",
        "url": "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Form 10-K FY2025 cover, principal executive offices in California",
        "url": "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SEC EDGAR - Lyft Form S-1 Corporate Information, 'We founded Lyft in 2012'",
        "url": "https://www.sec.gov/Archives/edgar/data/1759509/000119312519059849/d633517ds1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Form 10-K FY2025 cover, Class A common stock registered on the Nasdaq Global Select Market",
        "url": "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions data - current tickers ['LYFT'], exchanges ['Nasdaq']",
        "url": "https://data.sec.gov/submissions/CIK0001759509.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Form 10-K FY2025 cover, 'Class A common stock, par value of \$0.00001 per share' / 'LYFT' / 'Nasdaq Global Select Market'",
        "url": "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions data - current tickers ['LYFT'], exchanges ['Nasdaq']",
        "url": "https://data.sec.gov/submissions/CIK0001759509.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "SEC EDGAR - Form 10-K FY2025 Item 1 Business, 'global mobility platform'",
        "url": "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "SEC EDGAR - Form 10-K FY2025 Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1759509/000162828026006960/lyft-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR - Lyft Form S-1 Corporate Information, 'We were incorporated in 2007 as Bounder Web, Inc., a Delaware corporation. In 2008, we changed our name to Zimride, Inc. We founded Lyft in 2012 and changed our name to Lyft, Inc. in 2013 when we sold the assets related to our Zimride operations.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1759509/000119312519059849/d633517ds1.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "openai": {
    "companyId": "openai",
    "name": "OpenAI",
    "legalName": "OpenAI Group PBC",
    "website": "https://openai.com",
    "description": "AI research and deployment company. Its business is operated by a public benefit corporation controlled by the nonprofit OpenAI Foundation.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2015,
    "status": "private",
    "statusDetail": null,
    "sector": "AI",
    "subsector": "AI research and deployment",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "OpenAI - Our structure, 'The for-profit is now a public benefit corporation, called OpenAI Group PBC'",
        "url": "https://openai.com/our-structure/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "OpenAI - Built to benefit everyone, 'OpenAI has completed its recapitalization, simplifying its corporate structure.'",
        "url": "https://openai.com/index/built-to-benefit-everyone/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "OpenAI - About, official site",
        "url": "https://openai.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "OpenAI - About, 'OpenAI is an AI research and deployment company.'",
        "url": "https://openai.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "OpenAI - Our structure, nonprofit OpenAI Foundation controls OpenAI Group PBC",
        "url": "https://openai.com/our-structure/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "OpenAI - Terms of use, entity notice address '1455 3rd Street, San Francisco, CA 94158'",
        "url": "https://openai.com/policies/terms-of-use/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "OpenAI - Terms of use, entity notice address in San Francisco, CA",
        "url": "https://openai.com/policies/terms-of-use/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "OpenAI - Introducing OpenAI, published December 11, 2015 announcing the founding of the organisation",
        "url": "https://openai.com/index/introducing-openai/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "OpenAI - Our structure, equity held by the OpenAI Foundation (26 percent), Microsoft (approximately 27 percent) and current and former employees and investors (47 percent); no public listing",
        "url": "https://openai.com/our-structure/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "OpenAI - About, 'OpenAI is an AI research and deployment company.'",
        "url": "https://openai.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "OpenAI - About, 'OpenAI is an AI research and deployment company.'",
        "url": "https://openai.com/about/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "replit": {
    "companyId": "replit",
    "name": "Replit",
    "legalName": "Replit, Inc.",
    "website": "https://replit.com",
    "description": "Cloud software development platform providing an in-browser coding environment, an AI agent for building applications, and hosting and deployment.",
    "hqCity": "Foster City",
    "hqCountry": "United States",
    "foundedYear": 2016,
    "status": "private",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "browser-based development environment and AI application building platform",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Replit - Terms of Service, service provided by 'Replit, Inc.'",
        "url": "https://replit.com/site/terms",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Replit - Privacy Policy, 'Replit, Inc.' with mailing address",
        "url": "https://replit.com/site/privacy",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Replit - About Us, official site",
        "url": "https://replit.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Replit - About Us, platform and AI Agent for building software",
        "url": "https://replit.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Replit - Careers, 'The majority of our team works together at our Foster City HQ on Mondays, Wednesdays, and Fridays.'",
        "url": "https://replit.com/careers",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Replit - Privacy Policy, '1001 E Hillsdale Blvd, Suite 400, Foster City, CA 94404'",
        "url": "https://replit.com/site/privacy",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Replit - Careers, Foster City HQ; footer 'Made in sunny California'",
        "url": "https://replit.com/careers",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "TechCrunch - After nine years of grinding, Replit finally found its market, 'Replit was founded in 2016'",
        "url": "https://techcrunch.com/2025/10/02/after-nine-years-of-grinding-replit-finally-found-its-market-can-it-keep-it/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "TechCrunch - Replit snags \$9B valuation, 'Replit raised a \$400 million Series D at a \$9 billion valuation, led by previous investor Georgian Partners.' (private venture financing, March 2026)",
        "url": "https://techcrunch.com/2026/03/11/replit-snags-9b-valuation-6-months-after-hitting-3b/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Replit - About Us, software creation platform",
        "url": "https://replit.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Replit - About Us, platform and AI Agent for building software",
        "url": "https://replit.com/about",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "spotify": {
    "companyId": "spotify",
    "name": "Spotify",
    "legalName": "Spotify Technology S.A.",
    "website": "https://www.spotify.com",
    "description": "Audio streaming service offering music, podcasts and audiobooks on ad-supported and subscription tiers.",
    "hqCity": "Luxembourg",
    "hqCountry": "Luxembourg",
    "foundedYear": null,
    "status": "public",
    "statusDetail": null,
    "sector": "Consumer",
    "subsector": "audio streaming subscription service",
    "tickers": [
      "NYSE:SPOT"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Spotify Technology S.A. Form 20-F FY2025 cover page registrant name",
        "url": "https://www.sec.gov/Archives/edgar/data/1639920/000162828026006874/ck0001639920-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions data - name 'Spotify Technology S.A.'",
        "url": "https://data.sec.gov/submissions/CIK0001639920.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Spotify Newsroom - Company Info, official site",
        "url": "https://newsroom.spotify.com/company-info/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Spotify Newsroom - Company Info, audio streaming subscription service covering music, podcasting and audiobooks",
        "url": "https://newsroom.spotify.com/company-info/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Form 20-F FY2025 cover, '(Address of principal executive offices)' given as '33 Boulevard Prince Henri, L-1724 Luxembourg, Grand Duchy of Luxembourg'",
        "url": "https://www.sec.gov/Archives/edgar/data/1639920/000162828026006874/ck0001639920-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR submissions data - business address 33 Boulevard Prince Henri, Luxembourg",
        "url": "https://data.sec.gov/submissions/CIK0001639920.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Form 20-F FY2025 cover, principal executive offices in the Grand Duchy of Luxembourg; jurisdiction of incorporation Grand Duchy of Luxembourg",
        "url": "https://www.sec.gov/Archives/edgar/data/1639920/000162828026006874/ck0001639920-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Form 20-F FY2022 cover, principal executive offices '5, Place de la Gare, L-1616 Luxembourg, Grand Duchy of Luxembourg'",
        "url": "https://www.sec.gov/Archives/edgar/data/1639920/000163992023000004/ck0001639920-20221231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Form 20-F FY2025 cover, Ordinary Shares registered on the New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1639920/000162828026006874/ck0001639920-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions data - current tickers ['SPOT'], exchanges ['NYSE']",
        "url": "https://data.sec.gov/submissions/CIK0001639920.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Form 20-F FY2025 cover, 'Ordinary Shares (par value of EUR 0.000625 per share)' / 'SPOT' / 'New York Stock Exchange'",
        "url": "https://www.sec.gov/Archives/edgar/data/1639920/000162828026006874/ck0001639920-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions data - current tickers ['SPOT'], exchanges ['NYSE']",
        "url": "https://data.sec.gov/submissions/CIK0001639920.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Spotify Newsroom - Company Info, consumer audio streaming subscription service",
        "url": "https://newsroom.spotify.com/company-info/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Spotify Newsroom - Company Info",
        "url": "https://newsroom.spotify.com/company-info/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "sofi": {
    "companyId": "sofi",
    "name": "SoFi",
    "legalName": "SoFi Technologies, Inc.",
    "website": "https://www.sofi.com",
    "description": "Digital financial services company offering personal, student and home loans, banking through SoFi Bank, National Association, investing products, and a technology platform providing banking and payment processing services to other businesses.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2011,
    "status": "public",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "digital personal finance, lending and banking",
    "tickers": [
      "NASDAQ:SOFI"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SoFi Technologies, Inc. - Form 10-Q for the quarter ended June 30, 2026 (SEC EDGAR) - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1818874/000181887426000054/sofi-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SoFi Technologies, Inc. - Form 10-Q for the quarter ended June 30, 2026 (SEC EDGAR) - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1818874/000181887426000054/sofi-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SoFi Technologies, Inc. - Form 10-Q for the quarter ended June 30, 2026 (SEC EDGAR) - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1818874/000181887426000054/sofi-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SoFi Technologies, Inc. - Form 10-Q for the quarter ended June 30, 2026 (SEC EDGAR) - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1818874/000181887426000054/sofi-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SoFi Technologies, Inc. - Form 10-Q for the quarter ended June 30, 2026 (SEC EDGAR) - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1818874/000181887426000054/sofi-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record - SoFi Technologies, Inc. (CIK 0001818874)",
        "url": "https://data.sec.gov/submissions/CIK0001818874.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record - SoFi Technologies, Inc. (CIK 0001818874)",
        "url": "https://data.sec.gov/submissions/CIK0001818874.json",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions record - SoFi Technologies, Inc. (CIK 0001818874)",
        "url": "https://data.sec.gov/submissions/CIK0001818874.json",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SoFi Technologies, Inc. - Form 10-K for fiscal year 2024 (SEC EDGAR) - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1818874/000181887425000016/sofi-20241231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "SoFi Technologies, Inc. - Form 10-K for fiscal year 2024 (SEC EDGAR) - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1818874/000181887425000016/sofi-20241231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "SoFi Technologies, Inc. - Form 10-K for fiscal year 2024 (SEC EDGAR) - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1818874/000181887425000016/sofi-20241231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "SoFi Technologies, Inc. - Form 10-K for fiscal year 2024 (SEC EDGAR) - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1818874/000181887425000016/sofi-20241231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "SoFi - Legal and licences page (official site)",
        "url": "https://www.sofi.com/legal/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "warbyparker": {
    "companyId": "warbyparker",
    "name": "Warby Parker",
    "legalName": "Warby Parker Inc.",
    "website": "https://www.warbyparker.com",
    "description": "Eyewear company that designs and sells prescription glasses, sunglasses and contact lenses directly to consumers through its website and its own retail stores, and provides eye exams and vision tests.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2010,
    "status": "public",
    "statusDetail": null,
    "sector": "Consumer",
    "subsector": "direct-to-consumer eyewear and eye care",
    "tickers": [
      "NYSE:WRBY"
    ],
    "formerNames": [
      "JAND, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Warby Parker Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1504776/000150477626000006/wrby-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Warby Parker Inc. - Form 424B4 IPO prospectus, 29 September 2021 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1504776/000162828021019236/warbyparkerinc424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Warby Parker Inc. - Form 424B4 IPO prospectus, 29 September 2021 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1504776/000162828021019236/warbyparkerinc424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Warby Parker Inc. - Form 424B4 IPO prospectus, 29 September 2021 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1504776/000162828021019236/warbyparkerinc424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Eleventh Amended and Restated Certificate of Incorporation, Exhibit 3.1 to Warby Parker Form S-1 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1504776/000162828021017546/exhibit31-sx1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record - Warby Parker Inc. (CIK 0001504776)",
        "url": "https://data.sec.gov/submissions/CIK0001504776.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record - Warby Parker Inc. (CIK 0001504776)",
        "url": "https://data.sec.gov/submissions/CIK0001504776.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR submissions record - Warby Parker Inc. (CIK 0001504776)",
        "url": "https://data.sec.gov/submissions/CIK0001504776.json",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "figma": {
    "companyId": "figma",
    "name": "Figma",
    "legalName": "Figma, Inc.",
    "website": "https://www.figma.com",
    "description": "Browser-based collaborative platform used by designers, developers, product managers and researchers to design, prototype and build digital products.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "public",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "collaborative interface design and prototyping software",
    "tickers": [
      "NYSE:FIG"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Figma, Inc. - Form 10-K for fiscal year 2025 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Figma, Inc. - Form 10-Q for the quarter ended March 31, 2026 (SEC EDGAR) - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828026035209/fig-20260331.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Figma, Inc. - Form 10-Q for the quarter ended March 31, 2026 (SEC EDGAR) - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828026035209/fig-20260331.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Figma, Inc. - Form 10-Q for the quarter ended March 31, 2026 (SEC EDGAR) - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828026035209/fig-20260331.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Figma, Inc. - Form 10-Q for the quarter ended March 31, 2026 (SEC EDGAR) - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828026035209/fig-20260331.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Figma, Inc. - Form 424B4 IPO prospectus, 31 July 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Figma, Inc. - Form 424B4 IPO prospectus, 31 July 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Figma, Inc. - Form 424B4 IPO prospectus, 31 July 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record - Figma, Inc. (CIK 0001579878)",
        "url": "https://data.sec.gov/submissions/CIK0001579878.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record - Figma, Inc. (CIK 0001579878)",
        "url": "https://data.sec.gov/submissions/CIK0001579878.json",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "docusign": {
    "companyId": "docusign",
    "name": "DocuSign",
    "legalName": "Docusign, Inc.",
    "website": "https://www.docusign.com",
    "description": "Software company providing electronic signature, intelligent agreement management and contract lifecycle management products used by organizations to prepare, sign, act on and manage agreements.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2003,
    "status": "public",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "electronic signature and agreement management software",
    "tickers": [
      "NASDAQ:DOCU"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR) - cover page and Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2025 (SEC EDGAR) - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133325000024/docu-20250131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2025 (SEC EDGAR) - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133325000024/docu-20250131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Docusign, Inc. - Form 10-K for fiscal year ended January 31, 2025 (SEC EDGAR) - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133325000024/docu-20250131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Docusign, Inc. - Form 10-Q for the quarter ended April 30, 2026 (SEC EDGAR) - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000074/docu-20260430.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Docusign, Inc. - Form 10-Q for the quarter ended April 30, 2026 (SEC EDGAR) - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1261333/000126133326000074/docu-20260430.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record - DOCUSIGN, INC. (CIK 0001261333)",
        "url": "https://data.sec.gov/submissions/CIK0001261333.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record - DOCUSIGN, INC. (CIK 0001261333)",
        "url": "https://data.sec.gov/submissions/CIK0001261333.json",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "postmates": {
    "companyId": "postmates",
    "name": "Postmates",
    "legalName": "Postmates Inc.",
    "website": "https://postmates.com",
    "description": "On-demand local delivery service in the United States that delivers food, drinks, groceries and other goods from merchants to consumers. Operates as part of Uber following the 2020 acquisition.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2011,
    "status": "acquired",
    "statusDetail": "Acquired by Uber Technologies, Inc. in 2020",
    "sector": "Logistics",
    "subsector": "on-demand local delivery marketplace",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "status",
        "label": "Uber Technologies, Inc. - Exhibit 99.1 to Form 8-K, press release 'Uber Completes Acquisition of Postmates' (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000155278120000580/e20585_ex99-1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "statusDetail",
        "label": "Uber Technologies, Inc. - Exhibit 99.1 to Form 8-K, press release 'Uber Completes Acquisition of Postmates' (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000155278120000580/e20585_ex99-1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Uber Technologies, Inc. - Exhibit 99.1 to Form 8-K, press release 'Uber Completes Acquisition of Postmates' (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000155278120000580/e20585_ex99-1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Uber Technologies, Inc. - Exhibit 99.1 to Form 8-K, press release 'Uber Completes Acquisition of Postmates' (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000155278120000580/e20585_ex99-1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Uber Technologies, Inc. - Exhibit 99.1 to Form 8-K, press release 'Uber Completes Acquisition of Postmates' (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1543151/000155278120000580/e20585_ex99-1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Uber Technologies, Inc. Investor Relations - 'Uber Completes Acquisition of Postmates', 1 December 2020",
        "url": "https://investor.uber.com/news-events/news/press-release-details/2020/Uber-Completes-Acquisition-of-Postmates/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "statusDetail",
        "label": "Uber Technologies, Inc. Investor Relations - 'Uber Completes Acquisition of Postmates', 1 December 2020",
        "url": "https://investor.uber.com/news-events/news/press-release-details/2020/Uber-Completes-Acquisition-of-Postmates/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Uber Technologies, Inc. Investor Relations - 'Uber Completes Acquisition of Postmates', 1 December 2020",
        "url": "https://investor.uber.com/news-events/news/press-release-details/2020/Uber-Completes-Acquisition-of-Postmates/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Postmates Inc. - Form D notice of exempt offering, filed 25 June 2015 (SEC EDGAR, CIK 0001645606)",
        "url": "https://www.sec.gov/Archives/edgar/data/1645606/000164560615000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Postmates Inc. - Form D notice of exempt offering, filed 25 June 2015 (SEC EDGAR, CIK 0001645606)",
        "url": "https://www.sec.gov/Archives/edgar/data/1645606/000164560615000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Postmates Inc. - Form D notice of exempt offering, filed 25 June 2015 (SEC EDGAR, CIK 0001645606)",
        "url": "https://www.sec.gov/Archives/edgar/data/1645606/000164560615000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Postmates Inc. - Form D notice of exempt offering, filed 25 June 2015 (SEC EDGAR, CIK 0001645606)",
        "url": "https://www.sec.gov/Archives/edgar/data/1645606/000164560615000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Postmates - official site (postmates.com)",
        "url": "https://postmates.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Postmates - official site (postmates.com)",
        "url": "https://postmates.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Postmates - official site (postmates.com)",
        "url": "https://postmates.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Postmates - official site (postmates.com)",
        "url": "https://postmates.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Postmates - official site (postmates.com)",
        "url": "https://postmates.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Postmates - official site (postmates.com)",
        "url": "https://postmates.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "databricks": {
    "companyId": "databricks",
    "name": "Databricks",
    "legalName": "Databricks, Inc.",
    "website": "https://www.databricks.com",
    "description": "Cloud-based data and AI platform used by organizations to store, govern and process data and to build and run data and AI applications.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2013,
    "status": "private",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "cloud data and AI platform (lakehouse)",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "description",
        "label": "Databricks - About Us (official site)",
        "url": "https://www.databricks.com/company/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Databricks - About Us (official site)",
        "url": "https://www.databricks.com/company/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Databricks - About Us (official site)",
        "url": "https://www.databricks.com/company/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Databricks - About Us (official site)",
        "url": "https://www.databricks.com/company/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Databricks - About Us (official site)",
        "url": "https://www.databricks.com/company/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Databricks - About Us (official site)",
        "url": "https://www.databricks.com/company/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Databricks - About Us (official site)",
        "url": "https://www.databricks.com/company/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Databricks, Inc. - Form D notice of exempt offering, filed 27 August 2026 (SEC EDGAR, CIK 0001587468)",
        "url": "https://www.sec.gov/Archives/edgar/data/1587468/000158746826000002/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Databricks, Inc. - Form D notice of exempt offering, filed 27 August 2026 (SEC EDGAR, CIK 0001587468)",
        "url": "https://www.sec.gov/Archives/edgar/data/1587468/000158746826000002/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Databricks, Inc. - Form D notice of exempt offering, filed 27 August 2026 (SEC EDGAR, CIK 0001587468)",
        "url": "https://www.sec.gov/Archives/edgar/data/1587468/000158746826000002/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Databricks, Inc. - Form D notice of exempt offering, filed 27 August 2026 (SEC EDGAR, CIK 0001587468)",
        "url": "https://www.sec.gov/Archives/edgar/data/1587468/000158746826000002/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions record - Databricks, Inc. (CIK 0001587468)",
        "url": "https://data.sec.gov/submissions/CIK0001587468.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record - Databricks, Inc. (CIK 0001587468)",
        "url": "https://data.sec.gov/submissions/CIK0001587468.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Databricks newsroom - 'Databricks is Raising a Strategic Round of Funding at a \$188 Billion Valuation', 16 July 2026",
        "url": "https://www.databricks.com/company/newsroom/press-releases/databricks-raising-strategic-round-funding-188-billion-valuation",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "robinhood": {
    "companyId": "robinhood",
    "name": "Robinhood",
    "legalName": "Robinhood Markets, Inc.",
    "website": "https://robinhood.com",
    "description": "Financial services company operating a retail brokerage platform, offering retail brokerage, crypto, advisory, digital banking services and private markets access.",
    "hqCity": "Menlo Park",
    "hqCountry": "United States",
    "foundedYear": 2013,
    "status": "public",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "retail brokerage and financial services platform",
    "tickers": [
      "NASDAQ:HOOD"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Robinhood Markets, Inc. Form 10-K (FY2025) cover page - SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000029/hood-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions record CIK 0001783879",
        "url": "https://data.sec.gov/submissions/CIK0001783879.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Robinhood - Official Site, About Us",
        "url": "https://robinhood.com/us/en/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Robinhood Investor Relations - company overview boilerplate",
        "url": "https://investors.robinhood.com/overview/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Robinhood - Official Site, About Us",
        "url": "https://robinhood.com/us/en/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Robinhood Markets, Inc. Form 10-K (FY2025) cover page - address of principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000029/hood-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Robinhood Markets, Inc. Form 10-K (FY2025) cover page - address of principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000029/hood-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Robinhood Markets, Inc. Form 10-K (FY2025), Item 1 Business - \"Robinhood was founded in 2013\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000029/hood-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Robinhood Markets, Inc. Form 10-K (FY2025) cover page - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000029/hood-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record CIK 0001783879 - tickers and exchanges",
        "url": "https://data.sec.gov/submissions/CIK0001783879.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Robinhood Markets, Inc. Form 10-K (FY2025) cover page - Class A Common Stock, trading symbol HOOD, The Nasdaq Stock Market",
        "url": "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000029/hood-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Robinhood Investor Relations - \"Robinhood Markets, Inc. (NASDAQ: HOOD)\"",
        "url": "https://investors.robinhood.com/overview/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Robinhood Markets, Inc. SEC EDGAR record - SIC 6211 Security Brokers, Dealers & Flotation Companies",
        "url": "https://data.sec.gov/submissions/CIK0001783879.json",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Robinhood Investor Relations - company overview boilerplate",
        "url": "https://investors.robinhood.com/overview/default.aspx",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "nubank": {
    "companyId": "nubank",
    "name": "Nubank",
    "legalName": "Nu Holdings Ltd.",
    "website": "https://nubank.com.br",
    "description": "Holding company of the Nu (Nubank) group, a digital bank and financial services provider serving customers in Brazil, Mexico and Colombia.",
    "hqCity": "São Paulo",
    "hqCountry": "Brazil",
    "foundedYear": 2013,
    "status": "public",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "digital banking and consumer financial services",
    "tickers": [
      "NYSE:NU"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Nu Holdings Ltd. Form 20-F (FY2025) cover page - name of registrant - SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1691493/000129281426002166/nuform20f_2025.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions record CIK 0001691493",
        "url": "https://data.sec.gov/submissions/CIK0001691493.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Nubank - Official Site (Nu Pagamentos S.A - Instituicao de Pagamento, CNPJ 18.236.120/0001-58 in footer)",
        "url": "https://nubank.com.br/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Nu Holdings Ltd. Form 6-K, Q2 2026 results press release - \"About Nu\" boilerplate - SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1691493/000129281426004222/nupr2q26_6k.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Nu International - about page",
        "url": "https://international.nubank.com.br/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR filer business address for Nu Holdings Ltd., CIK 0001691493 - Rua Capote Valente, 39, Pinheiros, São Paulo, SP, Brazil",
        "url": "https://data.sec.gov/submissions/CIK0001691493.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Nu International - about page, Rua Capote Valente, 39 - São Paulo, SP",
        "url": "https://international.nubank.com.br/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR filer business address for Nu Holdings Ltd., CIK 0001691493 - São Paulo, SP, Brazil",
        "url": "https://data.sec.gov/submissions/CIK0001691493.json",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Nu Holdings Ltd. Form 20-F (FY2025) - \"We began our journey in 2013 with a small team, launching our first product, the Nu Credit Card, in Brazil in 2014.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1691493/000129281426002166/nuform20f_2025.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Nu Holdings Ltd. Form 20-F (FY2025) cover page - securities registered under Section 12(b), New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1691493/000129281426002166/nuform20f_2025.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Nu Holdings Ltd. Form 20-F (FY2025) cover page - Class A ordinary shares, trading symbol NU, New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1691493/000129281426002166/nuform20f_2025.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Nu Holdings Ltd. Form 6-K, Q2 2026 results press release - \"NYSE: NU\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1691493/000129281426004222/nupr2q26_6k.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Nu Holdings Ltd. SEC EDGAR record - SIC 6199 Finance Services",
        "url": "https://data.sec.gov/submissions/CIK0001691493.json",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Nu Holdings Ltd. Form 6-K, Q2 2026 results press release - \"About Nu\" boilerplate",
        "url": "https://www.sec.gov/Archives/edgar/data/1691493/000129281426004222/nupr2q26_6k.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "box": {
    "companyId": "box",
    "name": "Box",
    "legalName": "Box, Inc.",
    "website": "https://www.box.com",
    "description": "Cloud content management company whose platform lets organizations store, share and secure content, manage its lifecycle and automate content-centric workflows.",
    "hqCity": "Redwood City",
    "hqCountry": "United States",
    "foundedYear": 2005,
    "status": "public",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "intelligent content management platform",
    "tickers": [
      "NYSE:BOX"
    ],
    "formerNames": [
      "Box.Net, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Box, Inc. Form 10-K (FY ended 2026-01-31) cover page - SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1372612/000119312526098466/box-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Box Investor Relations - Box, Inc.",
        "url": "https://www.boxinvestorrelations.com/home/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Box - Official Site, About Us",
        "url": "https://www.box.com/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Box - Official Site, About Us",
        "url": "https://www.box.com/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Box press release - \"About Box\" boilerplate",
        "url": "https://www.businesswire.com/news/home/20260220400511/en/Box-to-Present-at-Investor-Conference",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Box, Inc. Form 10-K (FY ended 2026-01-31) cover page - 900 Jefferson Ave. Redwood City, California 94063",
        "url": "https://www.sec.gov/Archives/edgar/data/1372612/000119312526098466/box-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Box press release - \"Box is headquartered in Redwood City, CA\"",
        "url": "https://www.businesswire.com/news/home/20260220400511/en/Box-to-Present-at-Investor-Conference",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Box, Inc. Form 10-K (FY ended 2026-01-31) cover page - Redwood City, California",
        "url": "https://www.sec.gov/Archives/edgar/data/1372612/000119312526098466/box-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Box, Inc. Form 10-K - \"We were incorporated in 2005 as Box.Net, Inc., a Washington corporation\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1372612/000119312526098466/box-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Box press release - \"Founded in 2005\"",
        "url": "https://www.businesswire.com/news/home/20260220400511/en/Box-to-Present-at-Investor-Conference",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record CIK 0001372612 - exchange NYSE, ticker BOX",
        "url": "https://data.sec.gov/submissions/CIK0001372612.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Box, Inc. Form 10-K (FY ended 2026-01-31), filed 2026-03-09 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1372612/000119312526098466/box-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Box press release - \"Box (NYSE:BOX)\"",
        "url": "https://www.businesswire.com/news/home/20260220400511/en/Box-to-Present-at-Investor-Conference",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record CIK 0001372612 - exchange NYSE, ticker BOX",
        "url": "https://data.sec.gov/submissions/CIK0001372612.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Box, Inc. Form 10-K - \"In November 2011, we changed our name to Box, Inc.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1372612/000119312526098466/box-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR submissions record CIK 0001372612 - former name BOX.NET INC (2006-08-10 to 2011-10-17)",
        "url": "https://data.sec.gov/submissions/CIK0001372612.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Box, Inc. SEC EDGAR record - SIC 7372 Services-Prepackaged Software",
        "url": "https://data.sec.gov/submissions/CIK0001372612.json",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Box - Official Site, About Us - \"Box is the leader in Intelligent Content Management\"",
        "url": "https://www.box.com/about-us",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "chime": {
    "companyId": "chime",
    "name": "Chime",
    "legalName": "Chime Financial, Inc.",
    "website": "https://www.chime.com",
    "description": "Financial technology company, not a bank, that offers consumer banking products through partner banks The Bancorp Bank, N.A. and Stride Bank, N.A., covering spending, saving, liquidity access and credit building. Its revenue comes primarily from interchange fees.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "public",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "consumer banking products delivered through partner banks",
    "tickers": [
      "NASDAQ:CHYM"
    ],
    "formerNames": [
      "1debit, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Chime Financial, Inc. Form 10-K (FY2025) cover page - SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions record CIK 0001795586",
        "url": "https://data.sec.gov/submissions/CIK0001795586.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Chime - Official Site, About Us",
        "url": "https://www.chime.com/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Chime - Official Site, About Us",
        "url": "https://www.chime.com/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Chime Financial, Inc. Investor Relations",
        "url": "https://investors.chime.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Chime Financial, Inc. Form 10-K (FY2025) cover page - 101 California Street, Suite 500, San Francisco, CA 94111",
        "url": "https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Chime Financial, Inc. Form 10-K (FY2025) cover page - San Francisco, CA",
        "url": "https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Chime Financial, Inc. Form 10-K (FY2025) - \"We incorporated as 1debit, Inc. in Delaware in August 2012.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Chime - Official Site, About Us - company established in 2012 by co-founders Chris Britt and Ryan King",
        "url": "https://www.chime.com/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Chime Financial, Inc. Form 10-K (FY2025), filed 2026-03-06 - securities registered under Section 12(b), The Nasdaq Stock Market LLC",
        "url": "https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record CIK 0001795586 - ticker CHYM, exchange Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001795586.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Chime Financial, Inc. Form 10-K (FY2025) cover page - Class A common stock, trading symbol CHYM, The Nasdaq Stock Market LLC",
        "url": "https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record CIK 0001795586 - ticker CHYM, exchange Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001795586.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Chime Financial, Inc. Form 10-K (FY2025) - \"We incorporated as 1debit, Inc. in Delaware in August 2012.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Chime Financial, Inc. SEC EDGAR record - SIC 6199 Finance Services",
        "url": "https://data.sec.gov/submissions/CIK0001795586.json",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Chime - Official Site, About Us and Investor Relations - banking services provided by The Bancorp Bank, N.A. and Stride Bank, N.A.",
        "url": "https://www.chime.com/about-us/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "zoom": {
    "companyId": "zoom",
    "name": "Zoom",
    "legalName": "Zoom Communications, Inc.",
    "website": "https://www.zoom.com",
    "description": "Communications software company providing meetings, phone, contact center and related collaboration products for businesses, with built-in AI assistance.",
    "hqCity": "San Jose",
    "hqCountry": "United States",
    "foundedYear": 2011,
    "status": "public",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "communications and collaboration software",
    "tickers": [
      "NASDAQ:ZM"
    ],
    "formerNames": [
      "Zoom Video Communications, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions record CIK 0001585521 - name Zoom Communications, Inc.",
        "url": "https://data.sec.gov/submissions/CIK0001585521.json",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Zoom Investor Relations",
        "url": "https://investors.zoom.us/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Zoom - Official Site, About",
        "url": "https://www.zoom.com/en/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Zoom Investor Relations - \"About Zoom\" boilerplate",
        "url": "https://investors.zoom.us/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Zoom Investor Relations - \"Founded in 2011, Zoom is headquartered in San Jose, CA.\"",
        "url": "https://investors.zoom.us/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR filer business address CIK 0001585521 - 55 Almaden Boulevard, 6th Floor, San Jose, CA",
        "url": "https://data.sec.gov/submissions/CIK0001585521.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Zoom Investor Relations - headquartered in San Jose, CA",
        "url": "https://investors.zoom.us/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Zoom Investor Relations - \"Founded in 2011\"",
        "url": "https://investors.zoom.us/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Zoom - Official Site, About - founded 2011",
        "url": "https://www.zoom.com/en/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record CIK 0001585521 - ticker ZM, exchange Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001585521.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Zoom Investor Relations - \"Zoom (NASDAQ: ZM)\"",
        "url": "https://investors.zoom.us/",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Zoom Investor Relations - \"Zoom (NASDAQ: ZM)\"",
        "url": "https://investors.zoom.us/",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record CIK 0001585521 - ticker ZM, exchange Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001585521.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR submissions record CIK 0001585521 - former name Zoom Video Communications, Inc. (2013-09-04 to 2024-11-12)",
        "url": "https://data.sec.gov/submissions/CIK0001585521.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Zoom official blog - \"Introducing Zoom Communications Inc.\", published November 25, 2024 - \"we are officially dropping 'video' from our legal name\"",
        "url": "https://www.zoom.com/en/blog/introducing-zoom-communications-inc/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Zoom Investor Relations - \"About Zoom\" boilerplate describing meetings, phone and contact center products for entrepreneurs to global enterprises",
        "url": "https://investors.zoom.us/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Zoom Investor Relations - \"About Zoom\" boilerplate",
        "url": "https://investors.zoom.us/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "anthropic": {
    "companyId": "anthropic",
    "name": "Anthropic",
    "legalName": "Anthropic PBC",
    "website": "https://www.anthropic.com",
    "description": "AI safety and research company that builds AI systems, including the Claude family of models. It is organised as a public benefit corporation.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "AI",
    "subsector": "AI safety research and large language models",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Anthropic Privacy Policy - \"Anthropic PBC with a registered address at 548 Market St, PMB 90375, San Francisco, CA 94104 (United States).\"",
        "url": "https://www.anthropic.com/legal/privacy",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Anthropic - Official Site, Company page",
        "url": "https://www.anthropic.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Anthropic - Company page - \"Anthropic is an AI safety and research company. We build reliable, interpretable, and steerable AI systems.\" and \"Anthropic is a Public Benefit Corporation\"",
        "url": "https://www.anthropic.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Anthropic - Careers page - \"an AI safety and research company that's working to build reliable, interpretable, and steerable AI systems\"; builds Claude",
        "url": "https://www.anthropic.com/careers",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Anthropic Privacy Policy - registered address 548 Market St, PMB 90375, San Francisco, CA 94104 (United States)",
        "url": "https://www.anthropic.com/legal/privacy",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Anthropic Privacy Policy - registered address San Francisco, CA 94104 (United States)",
        "url": "https://www.anthropic.com/legal/privacy",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Anthropic news - \"Anthropic raises \$65B in Series H funding at \$965B post-money valuation\", May 28, 2026, a private financing round",
        "url": "https://www.anthropic.com/news/series-h",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Anthropic news - Series F private financing announcement, September 2, 2025",
        "url": "https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Anthropic - Company page - AI safety and research company building AI systems",
        "url": "https://www.anthropic.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Anthropic - Careers page - researchers and engineers building Claude, an AI safety and research company",
        "url": "https://www.anthropic.com/careers",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "proximafusion": {
    "companyId": "proximafusion",
    "name": "Proxima Fusion",
    "legalName": "Proxima Fusion GmbH",
    "website": "https://www.proximafusion.com",
    "description": "Fusion energy company developing power plants based on quasi-isodynamic (QI) stellarators, spun out of the Max Planck Institute for Plasma Physics.",
    "hqCity": "Munich",
    "hqCountry": "Germany",
    "foundedYear": 2023,
    "status": "private",
    "statusDetail": null,
    "sector": "Climate & Energy",
    "subsector": "Fusion power plants using quasi-isodynamic (QI) stellarators",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Proxima Fusion - Imprint (Impressum)",
        "url": "https://www.proximafusion.com/imprint",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Proxima Fusion - Imprint (Impressum)",
        "url": "https://www.proximafusion.com/imprint",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Proxima Fusion - Official Site",
        "url": "https://www.proximafusion.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Proxima Fusion - Series A press release, About Proxima Fusion",
        "url": "https://www.proximafusion.com/press-news/proxima-fusion-raises-eu130m-series-a-to-build-worlds-first-stellarator-based-fusion-power-plant-in-the-2030s",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Proxima Fusion - Imprint (Impressum)",
        "url": "https://www.proximafusion.com/imprint",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Proxima Fusion - About",
        "url": "https://www.proximafusion.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Proxima Fusion - Imprint (Impressum)",
        "url": "https://www.proximafusion.com/imprint",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Proxima Fusion - Series A press release (founded in April 2023)",
        "url": "https://www.proximafusion.com/press-news/proxima-fusion-raises-eu130m-series-a-to-build-worlds-first-stellarator-based-fusion-power-plant-in-the-2030s",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Proxima Fusion - Imprint, registered as a GmbH, HRB 283423 Amtsgericht Muenchen",
        "url": "https://www.proximafusion.com/imprint",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Proxima Fusion - Series A private venture financing announcement",
        "url": "https://www.proximafusion.com/press-news/proxima-fusion-raises-eu130m-series-a-to-build-worlds-first-stellarator-based-fusion-power-plant-in-the-2030s",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Proxima Fusion - Official Site",
        "url": "https://www.proximafusion.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Proxima Fusion - About",
        "url": "https://www.proximafusion.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Proxima Fusion - Official Site",
        "url": "https://www.proximafusion.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "coupang": {
    "companyId": "coupang",
    "name": "Coupang",
    "legalName": "Coupang, Inc.",
    "website": "https://www.aboutcoupang.com",
    "description": "Technology and retail company providing online retail, restaurant delivery, video streaming and fintech services under brands including Coupang, Eats, Play, Rocket Now and Farfetch.",
    "hqCity": "Seattle",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "public",
    "statusDetail": null,
    "sector": "Ecommerce",
    "subsector": "Online retail, restaurant delivery, video streaming and fintech services",
    "tickers": [
      "NYSE:CPNG"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Coupang, Inc. Form 10-K FY2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "SEC EDGAR - Coupang, Inc. Form 10-K FY2025",
        "url": "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "SEC EDGAR - Coupang, Inc. Form 10-K FY2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Coupang, Inc. Form 10-K FY2025, address of principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Coupang, Inc. Form 10-K FY2025, address of principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Coupang, Inc. Form 10-K FY2025 cover page, securities registered",
        "url": "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "SEC EDGAR - Coupang, Inc. Form 10-K FY2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "SEC EDGAR - Coupang, Inc. Form 10-K FY2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Coupang, Inc. Form 10-K FY2025 cover page, securities registered",
        "url": "https://www.sec.gov/Archives/edgar/data/1834584/000183458426000024/cpng-20251231.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "gitlab": {
    "companyId": "gitlab",
    "name": "GitLab",
    "legalName": "GitLab Inc.",
    "website": "https://about.gitlab.com",
    "description": "Software company providing an orchestration platform for DevSecOps that brings development, operations, IT, security and business teams together across the software development lifecycle.",
    "hqCity": null,
    "hqCountry": null,
    "foundedYear": 2014,
    "status": "public",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "DevSecOps platform for the software development lifecycle",
    "tickers": [
      "NASDAQ:GTLB"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - GitLab Inc. Form 10-K FY2026 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "SEC EDGAR - GitLab Inc. Form 10-K FY2026",
        "url": "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "SEC EDGAR - GitLab Inc. Form 10-K FY2026, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SEC EDGAR - GitLab Inc. Form 10-K FY2026, Corporate Information",
        "url": "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - GitLab Inc. Form 10-K FY2026 cover page, securities registered",
        "url": "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "SEC EDGAR - GitLab Inc. Form 10-K FY2026, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "SEC EDGAR - GitLab Inc. Form 10-K FY2026, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - GitLab Inc. Form 10-K FY2026 cover page, securities registered",
        "url": "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "nutanix": {
    "companyId": "nutanix",
    "name": "Nutanix",
    "legalName": "Nutanix, Inc.",
    "website": "https://www.nutanix.com",
    "description": "Enterprise software company providing a hybrid multicloud platform used to run applications and AI workloads and to manage data across datacenters and public clouds.",
    "hqCity": "San Jose",
    "hqCountry": "United States",
    "foundedYear": 2009,
    "status": "public",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "Hybrid multicloud computing; unified software platform for applications and data",
    "tickers": [
      "NASDAQ:NTNX"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Nutanix - Official Site",
        "url": "https://www.nutanix.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025, address of principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025, address of principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025, Corporate Information",
        "url": "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025 cover page, securities registered",
        "url": "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Nutanix, Inc. Form 10-K FY2025 cover page, securities registered",
        "url": "https://www.sec.gov/Archives/edgar/data/1618732/000119312525213801/ntnx-20250731.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "flywire": {
    "companyId": "flywire",
    "name": "Flywire",
    "legalName": "Flywire Corporation",
    "website": "https://www.flywire.com",
    "description": "Global payments enablement and software company providing a payments platform, a proprietary global payment network and vertical-specific software used by clients to collect payments.",
    "hqCity": "Boston",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "public",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "Global payments enablement and vertical-specific payments software",
    "tickers": [
      "NASDAQ:FLYW"
    ],
    "formerNames": [
      "peerTransfer Corp"
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Flywire Corporation Form 10-K FY2025 cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Flywire - Official Site",
        "url": "https://www.flywire.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "SEC EDGAR - Flywire Corporation Form 10-K FY2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Flywire Corporation Form 10-K FY2025, address of principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Flywire Corporation Form 10-K FY2025, address of principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Flywire Corporation Form 10-K FY2025 cover page, securities registered",
        "url": "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "SEC EDGAR - Flywire Corporation Form 10-K FY2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "SEC EDGAR - Flywire Corporation Form 10-K FY2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Flywire Corporation Form 10-K FY2025 cover page, securities registered",
        "url": "https://www.sec.gov/Archives/edgar/data/1580560/000119312526067540/flyw-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR - Flywire Corp submissions record, formerNames: peerTransfer Corp (2013-07-08 to 2015-01-14)",
        "url": "https://data.sec.gov/submissions/CIK0001580560.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Flywire - peerTransfer Rebrands as Flywire (company announcement)",
        "url": "https://www.flywire.com/careers/inside-flywire/peertransfer-rebrands-as-flywire",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "deliveryhero": {
    "companyId": "deliveryhero",
    "name": "Delivery Hero",
    "legalName": "Delivery Hero SE",
    "website": "https://www.deliveryhero.com",
    "description": "Local delivery platform operating online food ordering and delivery marketplaces and quick commerce stores in around 65 countries.",
    "hqCity": "Berlin",
    "hqCountry": "Germany",
    "foundedYear": 2011,
    "status": "public",
    "statusDetail": null,
    "sector": "Foodtech",
    "subsector": "Online food delivery marketplaces and quick commerce",
    "tickers": [
      "XETRA:DHER"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Delivery Hero - Imprint / Legal Notice",
        "url": "https://www.deliveryhero.com/imprint/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Delivery Hero Investor Relations - Share Information",
        "url": "https://ir.deliveryhero.com/share-information",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Delivery Hero - Imprint / Legal Notice",
        "url": "https://www.deliveryhero.com/imprint/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Delivery Hero - Official Site",
        "url": "https://www.deliveryhero.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Delivery Hero - About",
        "url": "https://www.deliveryhero.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Delivery Hero - Imprint / Legal Notice, registered office Oranienburger Strasse 70, 10117 Berlin",
        "url": "https://www.deliveryhero.com/imprint/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Delivery Hero - Imprint / Legal Notice",
        "url": "https://www.deliveryhero.com/imprint/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Delivery Hero - About, company timeline entry for 2011",
        "url": "https://www.deliveryhero.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Delivery Hero Investor Relations - Share Information (Frankfurt Stock Exchange, Prime Standard)",
        "url": "https://ir.deliveryhero.com/share-information",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Deutsche Boerse official instrument page - Delivery Hero SE",
        "url": "https://live.deutsche-boerse.com/equity/delivery-hero-se",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Delivery Hero - Official Site",
        "url": "https://www.deliveryhero.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Delivery Hero - About",
        "url": "https://www.deliveryhero.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Delivery Hero - Official Site",
        "url": "https://www.deliveryhero.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Delivery Hero Investor Relations - Share Information (ticker DHER, ISIN DE000A2E4K43)",
        "url": "https://ir.deliveryhero.com/share-information",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Deutsche Boerse official instrument page - Delivery Hero SE (Xetra)",
        "url": "https://live.deutsche-boerse.com/equity/delivery-hero-se",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "bluebottlecoffee": {
    "companyId": "bluebottlecoffee",
    "name": "Blue Bottle Coffee",
    "legalName": null,
    "website": "https://bluebottlecoffee.com/",
    "description": "Specialty coffee roaster and retailer operating cafes in the United States, Japan, South Korea, China and Hong Kong, and selling roasted beans and ready to drink coffee.",
    "hqCity": "Oakland",
    "hqCountry": "United States",
    "foundedYear": 2002,
    "status": "acquired",
    "statusDetail": "Nestle acquired a majority interest in 2017 and divested Blue Bottle Coffee to Centurium Capital in 2026",
    "sector": null,
    "subsector": null,
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Blue Bottle Coffee - Our Story",
        "url": "https://bluebottlecoffee.com/us/eng/our-story",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Nestle - Nestle acquires majority interest in Blue Bottle Coffee (press release PDF)",
        "url": "https://www.nestle.com/sites/default/files/asset-library/documents/media/press-release/2017-september/blue-bottle-coffee-en.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Nestle - Half-Year Report January to June 2026 (Blue Bottle activities in US, China, Hong Kong, Korea and Japan)",
        "url": "https://www.nestle.com/sites/default/files/2026-07/half-year-report-2026-en.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Blue Bottle Coffee - Blue Bottle at Fifteen: Henry House, Our New HQ",
        "url": "https://blog.bluebottlecoffee.com/posts/henry-house",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Nestle - Nestle acquires majority interest in Blue Bottle Coffee (press release PDF)",
        "url": "https://www.nestle.com/sites/default/files/asset-library/documents/media/press-release/2017-september/blue-bottle-coffee-en.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Blue Bottle Coffee - Blue Bottle at Fifteen: Henry House, Our New HQ",
        "url": "https://blog.bluebottlecoffee.com/posts/henry-house",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Blue Bottle Coffee - Blue Bottle at Fifteen: Henry House, Our New HQ",
        "url": "https://blog.bluebottlecoffee.com/posts/henry-house",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Nestle - Nestle acquires majority interest in Blue Bottle Coffee",
        "url": "https://www.nestle.com/media/pressreleases/allpressreleases/nestle-acquires-majority-interest-blue-bottle-coffee",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Nestle - Half-Year Report January to June 2026",
        "url": "https://www.nestle.com/sites/default/files/2026-07/half-year-report-2026-en.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "statusDetail",
        "label": "Nestle - Nestle acquires majority interest in Blue Bottle Coffee",
        "url": "https://www.nestle.com/media/pressreleases/allpressreleases/nestle-acquires-majority-interest-blue-bottle-coffee",
        "checked": "2026-09-02"
      },
      {
        "field": "statusDetail",
        "label": "Nestle - Half-Year Report January to June 2026 (divested Blue Bottle Coffee to Centurium Capital)",
        "url": "https://www.nestle.com/sites/default/files/2026-07/half-year-report-2026-en.pdf",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "carta": {
    "companyId": "carta",
    "name": "Carta",
    "legalName": "eShares, Inc. d/b/a Carta, Inc.",
    "website": "https://carta.com/",
    "description": "Software and services for private capital markets, covering cap table and equity management, 409A valuations, fund administration and related legal and compliance services.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "private",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "equity and cap table management and fund administration for private capital markets",
    "tickers": [],
    "formerNames": [
      "eShares"
    ],
    "sources": [
      {
        "field": "website",
        "label": "Carta - About",
        "url": "https://carta.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Carta - Terms of Service (ESHARES, INC. d/b/a CARTA, INC.)",
        "url": "https://carta.com/terms/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Carta - About",
        "url": "https://carta.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Carta - About",
        "url": "https://carta.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Carta - About",
        "url": "https://carta.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Carta - About (Henry Ward and Manu Kumar found eShares, August 2012)",
        "url": "https://carta.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR full text search - Form D filings by eShares Inc (CIK 0001718624), Delaware, private placements",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22eShares%2C+Inc.%22&forms=D",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Carta - About",
        "url": "https://carta.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Carta - About",
        "url": "https://carta.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Carta - About (eShares becomes Carta)",
        "url": "https://carta.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Carta - Terms of Service (eShares, Inc. dba Carta, Inc.)",
        "url": "https://carta.com/terms/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "writer": {
    "companyId": "writer",
    "name": "Writer",
    "legalName": "Writer, Inc.",
    "website": "https://writer.com/",
    "description": "Enterprise generative AI company providing a platform and its own family of large language models used to build, deploy and supervise AI agents inside large organisations.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "AI",
    "subsector": "enterprise generative AI platform and large language models",
    "tickers": [],
    "formerNames": [
      "Qordoba"
    ],
    "sources": [
      {
        "field": "website",
        "label": "Writer - Company",
        "url": "https://writer.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Writer - Platform Services Agreement (agreement is between Writer, Inc. and the customer)",
        "url": "https://writer.com/legal/platform-services/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Form D, Writer, Inc., CIK 0002044986, filed 2024-11-21",
        "url": "https://www.sec.gov/Archives/edgar/data/2044986/000204498624000002/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Writer - Company",
        "url": "https://writer.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Writer - Company (San Francisco (HQ), 111 Maiden Ln, 4th Floor)",
        "url": "https://writer.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Form D, Writer, Inc., address 140 Geary St #800, San Francisco",
        "url": "https://www.sec.gov/Archives/edgar/data/2044986/000204498624000002/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Writer - Company",
        "url": "https://writer.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Form D private placement by Writer, Inc., total amount sold 199,999,483 USD",
        "url": "https://www.sec.gov/Archives/edgar/data/2044986/000204498624000002/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Writer - Company",
        "url": "https://writer.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Writer - Company",
        "url": "https://writer.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "VentureBeat - AI-powered writing assistant Writer nabs \$21M (Writer, formerly Qordoba)",
        "url": "https://venturebeat.com/marketing/ai-powered-writing-assistant-writer-nabs-21m/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "cyera": {
    "companyId": "cyera",
    "name": "Cyera",
    "legalName": null,
    "website": "https://www.cyera.com/",
    "description": "Data security company whose platform discovers and classifies enterprise data across cloud, SaaS and on-premises environments and provides data security posture management, data loss prevention and privacy capabilities.",
    "hqCity": null,
    "hqCountry": null,
    "foundedYear": 2021,
    "status": "private",
    "statusDetail": null,
    "sector": "Cybersecurity",
    "subsector": "data security posture management and data loss prevention",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Cyera - About Us",
        "url": "https://www.cyera.com/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Cyera - About Us",
        "url": "https://www.cyera.com/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Cyera - Press release, Cyera Raises \$300M Series C (Founded in 2021 by Yotam Segev and Tamar Bar-Ilan)",
        "url": "https://www.cyera.com/press-releases/data-security-leader-cyera-raises-300-million-at-1-4-billion-valuation",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Cyera - Press release, Cyera Raises \$400M (private venture funding from named investors, no public listing)",
        "url": "https://www.cyera.com/press-releases/cyera-raises-400m-to-meet-rapidly-growing-demand-for-ai-security-among-enterprises",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Cyera - About Us",
        "url": "https://www.cyera.com/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Cyera - About Us",
        "url": "https://www.cyera.com/about-us",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "meituan": {
    "companyId": "meituan",
    "name": "Meituan",
    "legalName": "Meituan",
    "website": "https://www.meituan.com/",
    "description": "Chinese technology driven retail company operating mobile platforms for on-demand food delivery, in-store dining, hotel and travel booking, car hailing, bike sharing and other local consumer services.",
    "hqCity": "Beijing",
    "hqCountry": "China",
    "foundedYear": 2010,
    "status": "public",
    "statusDetail": null,
    "sector": "Consumer",
    "subsector": "on-demand local services, food delivery and travel booking platform",
    "tickers": [
      "HKEX:3690"
    ],
    "formerNames": [
      "Meituan Dianping"
    ],
    "sources": [
      {
        "field": "website",
        "label": "Meituan - About Us",
        "url": "https://www.meituan.com/en-US/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "HKEXnews - Meituan announcement of results for the three months ended 31 March 2026 (issuer Meituan, Cayman Islands)",
        "url": "https://www.hkexnews.hk/listedco/listconews/sehk/2026/0601/2026060101346.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "HKEXnews - Meituan announcement of results (Stock Codes 3690 and 83690)",
        "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2025/1128/2025112800483.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Meituan - About",
        "url": "https://about.meituan.com/en/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Meituan - About Us",
        "url": "https://www.meituan.com/en-US/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "HKEXnews - Meituan 2024 Annual Report, Corporate Information, headquarters and principal place of business in the PRC, Chaoyang District, Beijing",
        "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0428/2025042800235.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "HKEXnews - Meituan 2024 Annual Report, Corporate Information",
        "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0428/2025042800235.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Meituan - About Us (Since its establishment in March 2010)",
        "url": "https://www.meituan.com/en-US/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "HKEXnews - Meituan 2024 Annual Report (Wang Xing founded meituan.com in 2010)",
        "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0428/2025042800235.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "HKEXnews - Meituan announcement of results for the three months ended 31 March 2026",
        "url": "https://www.hkexnews.hk/listedco/listconews/sehk/2026/0601/2026060101346.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Meituan - About Us (listed on the Main Board of the Stock Exchange of Hong Kong on 20 September 2018)",
        "url": "https://www.meituan.com/en-US/about-us",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "HKEXnews - Meituan announcement of results for the three months ended 31 March 2026 (Stock Codes: 3690 (HKD counter) and 83690 (RMB counter))",
        "url": "https://www.hkexnews.hk/listedco/listconews/sehk/2026/0601/2026060101346.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Meituan - About",
        "url": "https://about.meituan.com/en/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Meituan - About",
        "url": "https://about.meituan.com/en/about",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "HKEXnews - Meituan Dianping 2020 Interim Report, cover and corporate information, stock code 3690",
        "url": "https://www.hkexnews.hk/listedco/listconews/sehk/2020/0909/2020090900259.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Meituan - Investor Relations announcements list (Simplification of Company Name, 9 October 2020; Completion of Registration of Change of Name in Hong Kong and Change of Stock Short Name and Company Logo, 22 October 2020)",
        "url": "https://www.meituan.com/en-US/investor/announcement",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "redfin": {
    "companyId": "redfin",
    "name": "Redfin",
    "legalName": "Redfin Corporation",
    "website": "https://www.redfin.com/",
    "description": "Residential real estate brokerage and home listings website that pairs its own local agents with its search and transaction technology to help people buy, sell and rent homes.",
    "hqCity": "Seattle",
    "hqCountry": "United States",
    "foundedYear": 2002,
    "status": "acquired",
    "statusDetail": "Acquired by Rocket Companies in 2025",
    "sector": "Real Estate Tech",
    "subsector": "residential real estate brokerage and home listings website",
    "tickers": [],
    "formerNames": [
      "Appliance Computing Inc."
    ],
    "sources": [
      {
        "field": "website",
        "label": "Redfin - Why Redfin",
        "url": "https://www.redfin.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Redfin Corporation Form 10-K for 2017, cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1382821/000138282118000008/redfin10-k2017.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Redfin - Why Redfin (Redfin Corporation is an affiliated business of Rocket Limited Partnership)",
        "url": "https://www.redfin.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Redfin - Why Redfin",
        "url": "https://www.redfin.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Redfin Corporation Form 10-K for 2017, principal executive offices 1099 Stewart Street, Suite 600, Seattle, Washington",
        "url": "https://www.sec.gov/Archives/edgar/data/1382821/000138282118000008/redfin10-k2017.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Redfin Corp submissions data, business address Seattle, WA",
        "url": "https://data.sec.gov/submissions/CIK0001382821.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Redfin Corporation Form 10-K for 2017",
        "url": "https://www.sec.gov/Archives/edgar/data/1382821/000138282118000008/redfin10-k2017.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SEC EDGAR - Redfin Corporation Form 10-K for 2017 (incorporated as Appliance Computing Inc. in Washington in October 2002)",
        "url": "https://www.sec.gov/Archives/edgar/data/1382821/000138282118000008/redfin10-k2017.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Rocket Companies Investor Relations - Rocket Companies Completes Acquisition of Redfin, 1 July 2025",
        "url": "https://ir.rocketcompanies.com/news-and-events/press-releases/press-release-details/2025/Rocket-Companies-Completes-Acquisition-of-Redfin/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Rocket Companies, Inc. Form 8-K (On July 1, 2025, Rocket Companies, Inc. completed the previously announced acquisition of Redfin Corporation)",
        "url": "https://www.sec.gov/Archives/edgar/data/1805284/000110465925064824/tm2519538d1_8k.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "statusDetail",
        "label": "Rocket Companies Investor Relations - Rocket Companies Completes Acquisition of Redfin, 1 July 2025",
        "url": "https://ir.rocketcompanies.com/news-and-events/press-releases/press-release-details/2025/Rocket-Companies-Completes-Acquisition-of-Redfin/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "statusDetail",
        "label": "SEC EDGAR - Rocket Companies, Inc. Form 8-K reporting completion on July 1, 2025",
        "url": "https://www.sec.gov/Archives/edgar/data/1805284/000110465925064824/tm2519538d1_8k.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Redfin - Why Redfin",
        "url": "https://www.redfin.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Redfin - Why Redfin",
        "url": "https://www.redfin.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR - Redfin Corporation Form 10-K for 2017 (We were incorporated as Appliance Computing Inc. in Washington in October 2002 ... and changed our name to Redfin Corporation in May 2006)",
        "url": "https://www.sec.gov/Archives/edgar/data/1382821/000138282118000008/redfin10-k2017.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "netflix": {
    "companyId": "netflix",
    "name": "Netflix",
    "legalName": "Netflix, Inc.",
    "website": "https://www.netflix.com",
    "description": "Subscription entertainment service offering television series, films, games and live programming across a wide variety of genres and languages.",
    "hqCity": "Los Gatos",
    "hqCountry": "United States",
    "foundedYear": 1997,
    "status": "public",
    "statusDetail": null,
    "sector": "Consumer",
    "subsector": "subscription streaming entertainment",
    "tickers": [
      "NASDAQ:NFLX"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Netflix, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000212/nflx-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Netflix, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000212/nflx-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Netflix, Inc. Form 10-Q for the quarter ended June 30, 2026 - Securities registered pursuant to Section 12(b): Common stock, NFLX, NASDAQ Global Select Market",
        "url": "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000212/nflx-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Netflix, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, 121 Albright Way, Los Gatos, California",
        "url": "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000212/nflx-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Netflix, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, Los Gatos, California",
        "url": "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000212/nflx-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record for CIK 0001065280 - tickers NFLX, exchanges Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001065280.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record for CIK 0001065280 - entityType operating, listed on Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001065280.json",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Netflix, Inc. Form 10-K for fiscal year 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000034/nflx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Netflix, Inc. Form 10-K for fiscal year 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000034/nflx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Netflix, Inc. Form 10-K for fiscal year 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000034/nflx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Netflix Investor Relations - company profile",
        "url": "https://ir.netflix.net/ir-overview/profile/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Netflix, Inc. Form S-1 filed 2002-03-06 - 'We were incorporated in Delaware in August 1997 and changed our name to Netflix, Inc. in March 2002.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1065280/000101287002001044/ds1.txt",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Netflix, Inc. Form 10-K for fiscal year 2016 - 'We were incorporated in Delaware in August 1997 and completed our initial public offering in May 2002.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1065280/000162828017000496/nflx201610k.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Netflix Tudum (netflix.com) - 'Founded on Aug. 29, 1997, Netflix is celebrating 25 years'",
        "url": "https://www.netflix.com/tudum/articles/netflix-trivia-25th-anniversary",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Netflix, Inc. Form S-1 filed 2002-03-06 - 'Our Web site is located at http://www.netflix.com.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1065280/000101287002001044/ds1.txt",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "About Netflix - official company site",
        "url": "https://about.netflix.com/en",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "snap": {
    "companyId": "snap",
    "name": "Snap",
    "legalName": "Snap Inc.",
    "website": "https://www.snap.com",
    "description": "Technology company whose flagship product is Snapchat, a visual messaging application for communicating through short videos and images. Its other products include Spectacles and Lens Studio, a tool for building augmented reality experiences.",
    "hqCity": "Santa Monica",
    "hqCountry": "United States",
    "foundedYear": 2010,
    "status": "public",
    "statusDetail": null,
    "sector": "Consumer",
    "subsector": "social media and visual messaging application",
    "tickers": [
      "NYSE:SNAP"
    ],
    "formerNames": [
      "Snapchat, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page, registrant SNAP INC.",
        "url": "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - Securities registered pursuant to Section 12(b): Class A Common Stock, SNAP, New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1, 'Snap Inc. ..., a Delaware corporation, is headquartered in Santa Monica, California.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1, headquartered in Santa Monica, California",
        "url": "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1, 'Our flagship product, Snapchat, is a visual messaging application'",
        "url": "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1, description of Snapchat",
        "url": "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Snap Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1, description of Snapchat",
        "url": "https://www.sec.gov/Archives/edgar/data/1564408/000156440826000052/snap-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record for CIK 0001564408 - tickers SNAP, exchanges NYSE",
        "url": "https://data.sec.gov/submissions/CIK0001564408.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record for CIK 0001564408 - entityType operating, listed on NYSE",
        "url": "https://data.sec.gov/submissions/CIK0001564408.json",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Snap Inc. Form 10-K for fiscal year 2022 - 'We were formed as Future Freshman, LLC, a California limited liability company, in 2010.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1564408/000156440823000013/snap-20221231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Snap Inc. Form 10-K for fiscal year 2022 - 'incorporated as Snapchat, Inc., a Delaware corporation, in 2012, and changed our name to Snap Inc. in 2016'",
        "url": "https://www.sec.gov/Archives/edgar/data/1564408/000156440823000013/snap-20221231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR submissions record for CIK 0001564408 - formerNames includes 'Snapchat Inc' from 2013-02-12 to 2016-05-26",
        "url": "https://data.sec.gov/submissions/CIK0001564408.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Snap Inc. official site",
        "url": "https://www.snap.com/en-US",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Snap Inc. official site - Snapchat, Spectacles and Lens Studio product descriptions",
        "url": "https://www.snap.com/en-US",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "lendingclub": {
    "companyId": "lendingclub",
    "name": "Happen",
    "legalName": "Happen, Inc.",
    "website": "https://www.happen.com",
    "description": "Bank holding company that operates a nationally chartered digital marketplace bank through its wholly owned subsidiary Happen Bank, National Association, providing consumer credit and deposit products in the United States. The company was named LendingClub Corporation until June 2026.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2006,
    "status": "public",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "digital marketplace bank and consumer lending",
    "tickers": [
      "NASDAQ:HAPN"
    ],
    "formerNames": [
      "LendingClub Corporation",
      "LendingClub"
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page, registrant Happen, Inc.",
        "url": "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - Securities registered pursuant to Section 12(b): Common stock, HAPN, The Nasdaq Stock Market LLC",
        "url": "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, 88 Kearny Street, Suite 600, San Francisco, CA",
        "url": "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, San Francisco, CA",
        "url": "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - 'Happen, Inc. is registered as a bank holding company and operates the vast majority of its business through its wholly-owned subsidiary, Happen Bank.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - 'operates a leading, nationally chartered, digital marketplace bank that leverages data and technology'",
        "url": "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - 'nationally chartered, digital marketplace bank'",
        "url": "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - 'The Company was founded in 2006'",
        "url": "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "LendingClub Corporation Form 10-K for fiscal year 2025 - 'Since our founding in 2006, more than five million individuals have become members'",
        "url": "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000018/lc-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Happen, Inc. Form 10-Q for the quarter ended June 30, 2026 - 'On June 22, 2026, LendingClub Corporation changed its corporate name to Happen, Inc.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1409970/000140997026000163/hapn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR submissions record for CIK 0001409970 - formerNames 'LendingClub Corp' to 2026-06-18, current name Happen, Inc.",
        "url": "https://data.sec.gov/submissions/CIK0001409970.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Happen Bank official site - page title 'Happen Bank, formerly LendingClub'",
        "url": "https://www.happen.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record for CIK 0001409970 - tickers HAPN, exchanges Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001409970.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record for CIK 0001409970 - entityType operating, listed on Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001409970.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Happen Bank official site - 'All credit and deposit products are provided by Happen Bank, N.A., Member FDIC ... a wholly-owned subsidiary of Happen, Inc.'",
        "url": "https://www.happen.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Happen Bank official site - bank subsidiary and holding company disclosure",
        "url": "https://www.happen.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Happen, Inc. Investor Relations (ir.happen.com), to which ir.lendingclub.com now redirects",
        "url": "https://ir.happen.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "oscarhealth": {
    "companyId": "oscarhealth",
    "name": "Oscar Health",
    "legalName": "Oscar Health, Inc.",
    "website": "https://www.hioscar.com",
    "description": "Health insurance and healthcare technology company that sells individual, family and other health plans, principally through the federal and state health insurance exchanges established under the Affordable Care Act, operating on its own technology platform.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "public",
    "statusDetail": null,
    "sector": "Healthcare",
    "subsector": "health insurance plans sold on Affordable Care Act exchanges",
    "tickers": [
      "NYSE:OSCR"
    ],
    "formerNames": [
      "Mulberry Health Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - Securities registered pursuant to Section 12(b): Class A Common Stock, OSCR, New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, 75 Varick Street, 5th Floor, New York, NY",
        "url": "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, New York, NY",
        "url": "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1 Organization, insurance sold via federal and state-run healthcare exchanges formed under the Affordable Care Act",
        "url": "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1 Organization",
        "url": "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Oscar Health, Inc. Form 10-Q for the quarter ended June 30, 2026 - Note 1 Organization",
        "url": "https://www.sec.gov/Archives/edgar/data/1568651/000156865126000069/oscr-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record for CIK 0001568651 - tickers OSCR, exchanges NYSE",
        "url": "https://data.sec.gov/submissions/CIK0001568651.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record for CIK 0001568651 - entityType operating, listed on NYSE",
        "url": "https://data.sec.gov/submissions/CIK0001568651.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR submissions record for CIK 0001568651 - formerNames 'Mulberry Health Inc.' from 2013-09-11 to 2020-12-17",
        "url": "https://data.sec.gov/submissions/CIK0001568651.json",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Oscar Health official site, About page - 'Founded in 2012'",
        "url": "https://www.hioscar.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Oscar Health official site, About page",
        "url": "https://www.hioscar.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Oscar Health official site, About page - 'Oscar Health, Inc. is a leading healthcare technology company'",
        "url": "https://www.hioscar.com/about",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "jobyaviation": {
    "companyId": "jobyaviation",
    "name": "Joby Aviation",
    "legalName": "Joby Aviation, Inc.",
    "website": "https://www.jobyaviation.com",
    "description": "Aviation company designing and testing a piloted, all-electric vertical take-off and landing air taxi, which it intends to operate in cities directly and through partnerships, and to sell to distributors and into defense and other specialized markets.",
    "hqCity": "Santa Cruz",
    "hqCountry": "United States",
    "foundedYear": 2009,
    "status": "public",
    "statusDetail": null,
    "sector": "Mobility",
    "subsector": "electric vertical take-off and landing (eVTOL) air taxi aircraft and services",
    "tickers": [
      "NYSE:JOBY"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Joby Aviation, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000435/joby-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Joby Aviation, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000435/joby-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Joby Aviation, Inc. Form 10-Q for the quarter ended June 30, 2026 - Securities registered pursuant to Section 12(b): Common Stock, JOBY, New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000435/joby-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Joby Aviation, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, 333 Encinal Street, Santa Cruz, CA",
        "url": "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000435/joby-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Joby Aviation, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, Santa Cruz, CA",
        "url": "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000435/joby-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Joby Aviation, Inc. Form 10-K for fiscal year 2025, Item 1 Business - piloted all-electric eVTOL air taxi, air taxi services, aircraft sales and defense markets",
        "url": "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000160/joby-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Joby Aviation, Inc. Form 10-K for fiscal year 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000160/joby-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Joby Aviation, Inc. Form 10-K for fiscal year 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000160/joby-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record for CIK 0001819848 - tickers JOBY and JOBY-WT, exchanges NYSE",
        "url": "https://data.sec.gov/submissions/CIK0001819848.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record for CIK 0001819848 - entityType operating, listed on NYSE",
        "url": "https://data.sec.gov/submissions/CIK0001819848.json",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Joby Aviation official site, About page - 'Year founded: 2009' and timeline entry '2009 The Beginning'",
        "url": "https://www.jobyaviation.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Joby Aviation official site, About page",
        "url": "https://www.jobyaviation.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Joby Aviation Investor Relations - address 333 Encinal St, Santa Cruz, CA 95060",
        "url": "https://ir.jobyaviation.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "therealreal": {
    "companyId": "therealreal",
    "name": "The RealReal",
    "legalName": "The RealReal, Inc.",
    "website": "https://www.therealreal.com",
    "description": "Online marketplace for the resale of authenticated luxury goods.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2011,
    "status": "public",
    "statusDetail": null,
    "sector": "Ecommerce",
    "subsector": "online resale marketplace for authenticated luxury goods",
    "tickers": [
      "NASDAQ:REAL"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "The RealReal, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page, registrant The RealReal, Inc.",
        "url": "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000053/real-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "The RealReal, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000053/real-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "The RealReal, Inc. Form 10-Q for the quarter ended June 30, 2026 - Securities registered pursuant to Section 12(b): Common stock, REAL, The Nasdaq Global Select Market",
        "url": "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000053/real-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "The RealReal, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, 55 Francisco Street, Suite 400, San Francisco, CA",
        "url": "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000053/real-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "The RealReal, Inc. Form 10-Q for the quarter ended June 30, 2026 - principal executive offices, San Francisco, CA",
        "url": "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000053/real-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "The RealReal, Inc. Form 10-K for fiscal year 2025, Item 1 Business - 'The RealReal is the world's largest online marketplace for authenticated, resale luxury goods.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000010/real-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "The RealReal, Inc. Form 10-K for fiscal year 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000010/real-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "The RealReal, Inc. Form 10-K for fiscal year 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000010/real-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "The RealReal, Inc. Form 10-K for fiscal year 2025 - 'We were incorporated in the state of Delaware in March 2011.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1573221/000157322126000010/real-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record for CIK 0001573221 - tickers REAL, exchanges Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001573221.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions record for CIK 0001573221 - entityType operating, listed on Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001573221.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "The RealReal Investor Relations, on the therealreal.com domain",
        "url": "https://investor.therealreal.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "buzzfeed": {
    "companyId": "buzzfeed",
    "name": "BuzzFeed",
    "legalName": "BuzzFeed, Inc.",
    "website": "https://www.buzzfeed.com",
    "description": "Digital media company that operates the BuzzFeed, HuffPost and Tasty brands, publishing entertainment, pop culture, food, shopping and news content. It sold the Complex Networks business in February 2024 and the First We Feast business in December 2024.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2006,
    "status": "public",
    "statusDetail": null,
    "sector": "Consumer",
    "subsector": "digital media and content brands",
    "tickers": [
      "NASDAQ:BZFD"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "BuzzFeed, Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000030/bzfd-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "BuzzFeed, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000138/bzfd-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "BuzzFeed, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1828972/000182897226000138/bzfd-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "BuzzFeed - About page on the official domain",
        "url": "https://www.buzzfeed.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "BuzzFeed - About page on the official domain",
        "url": "https://www.buzzfeed.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "BuzzFeed - About page on the official domain",
        "url": "https://www.buzzfeed.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions record for CIK 0001828972",
        "url": "https://data.sec.gov/submissions/CIK0001828972.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record for CIK 0001828972",
        "url": "https://data.sec.gov/submissions/CIK0001828972.json",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "xiaomi": {
    "companyId": "xiaomi",
    "name": "Xiaomi",
    "legalName": "Xiaomi Corporation",
    "website": "https://www.mi.com",
    "description": "Consumer electronics and smart manufacturing company. It develops and sells smartphones, IoT and lifestyle products, provides internet services, and develops, manufactures and sells smart electric vehicles.",
    "hqCity": "Beijing",
    "hqCountry": "China",
    "foundedYear": 2010,
    "status": "public",
    "statusDetail": null,
    "sector": "Hardware",
    "subsector": "smartphones, IoT and lifestyle products, and smart electric vehicles",
    "tickers": [
      "HKEX:1810"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Xiaomi Corporation 2025 Annual Report - cover and corporate information",
        "url": "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Xiaomi Corporation 2025 Annual Report - principal activities",
        "url": "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Xiaomi Corporation 2025 Annual Report - corporate information, headquarters in the PRC",
        "url": "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Xiaomi Corporation 2025 Annual Report - corporate information, headquarters in the PRC",
        "url": "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Xiaomi Corporation 2025 Annual Report - corporate information, company website",
        "url": "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Xiaomi Corporation 2025 Annual Report - stock codes",
        "url": "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Xiaomi Corporation 2025 Annual Report - stock codes and listing",
        "url": "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Xiaomi Corporation 2025 Annual Report - principal activities and reportable segments",
        "url": "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Xiaomi Corporation 2025 Annual Report - principal activities and reportable segments",
        "url": "https://ir.mi.com/system/files-encrypted/nasdaq_kms/assets/2026/04/28/5-29-08/Xiaomi%202025%20AR_EN.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Xiaomi Corporation results announcement for the three months ended March 31, 2026 - HKEXnews",
        "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0526/2026052600770.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Xiaomi Corporation results announcement for the three months ended March 31, 2026 - HKEXnews",
        "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0526/2026052600770.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Xiaomi Corporation results announcement for the three months ended March 31, 2026 - HKEXnews",
        "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0526/2026052600770.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Xiaomi - About page on the official global site",
        "url": "https://www.mi.com/global/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Xiaomi - About page on the official global site",
        "url": "https://www.mi.com/global/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Xiaomi - About page on the official global site",
        "url": "https://www.mi.com/global/about/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "mongodb": {
    "companyId": "mongodb",
    "name": "MongoDB",
    "legalName": "MongoDB, Inc.",
    "website": "https://www.mongodb.com",
    "description": "Database software company. It provides a developer data platform built around the MongoDB document database, together with integrated cloud services used to build and run applications.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2007,
    "status": "public",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "developer data platform and document database",
    "tickers": [
      "NASDAQ:MDB"
    ],
    "formerNames": [
      "10Gen, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - corporate history",
        "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - corporate history",
        "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "MongoDB, Inc. Form 10-K for fiscal year ended January 31, 2026 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "MongoDB - Company page on the official domain",
        "url": "https://www.mongodb.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "MongoDB - Company page on the official domain",
        "url": "https://www.mongodb.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "MongoDB - Company page on the official domain",
        "url": "https://www.mongodb.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "MongoDB - Company page on the official domain",
        "url": "https://www.mongodb.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR submissions record for CIK 0001441816 - formerNames",
        "url": "https://data.sec.gov/submissions/CIK0001441816.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record for CIK 0001441816",
        "url": "https://data.sec.gov/submissions/CIK0001441816.json",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "datadog": {
    "companyId": "datadog",
    "name": "Datadog",
    "legalName": "Datadog, Inc.",
    "website": "https://www.datadoghq.com",
    "description": "Observability and security platform for cloud applications. Its software brings applications, infrastructure, data, models and security monitoring into a single platform used by engineering and security teams.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2010,
    "status": "public",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "cloud observability and security monitoring platform",
    "tickers": [
      "NASDAQ:DDOG"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Datadog, Inc. Form 10-K for fiscal year 2025 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Datadog, Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Datadog, Inc. Form 10-K for fiscal year 2025 - principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Datadog, Inc. Form 10-K for fiscal year 2025 - principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Datadog, Inc. Form 10-K for fiscal year 2025 - corporate history",
        "url": "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Datadog, Inc. Form 10-K for fiscal year 2025 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Datadog, Inc. Form 10-K for fiscal year 2025 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Datadog, Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Datadog, Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Datadog - About page on the official domain",
        "url": "https://www.datadoghq.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Datadog - About page on the official domain",
        "url": "https://www.datadoghq.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record for CIK 0001561550",
        "url": "https://data.sec.gov/submissions/CIK0001561550.json",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "thredup": {
    "companyId": "thredup",
    "name": "ThredUp",
    "legalName": "ThredUp Inc.",
    "website": "https://www.thredup.com",
    "description": "Online resale platform for secondhand apparel, shoes and accessories. Buyers purchase resale items through its marketplace and sellers send in clothing using its Clean Out Bag service.",
    "hqCity": "Oakland",
    "hqCountry": "United States",
    "foundedYear": 2009,
    "status": "public",
    "statusDetail": null,
    "sector": "Ecommerce",
    "subsector": "online resale marketplace for secondhand apparel",
    "tickers": [
      "NASDAQ:TDUP",
      "LTSE:TDUP"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "ThredUp Inc. Form 10-K for fiscal year 2025 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "ThredUp Inc. Form 10-K for fiscal year 2025 - website address",
        "url": "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "ThredUp Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "ThredUp Inc. Form 10-K for fiscal year 2025 - principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "ThredUp Inc. Form 10-K for fiscal year 2025 - principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "ThredUp Inc. Form 10-K for fiscal year 2025 - corporate history",
        "url": "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "ThredUp Inc. Form 10-K for fiscal year 2025 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "ThredUp Inc. Form 10-K for fiscal year 2025 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "ThredUp Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "ThredUp Inc. Form 10-K for fiscal year 2025 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1484778/000148477826000007/tdup-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "ThredUp Inc. Investor Relations - news releases and stock information",
        "url": "https://ir.thredup.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "ThredUp Inc. Investor Relations - stock information showing NASDAQ and LTSE",
        "url": "https://ir.thredup.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record for CIK 0001484778",
        "url": "https://data.sec.gov/submissions/CIK0001484778.json",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "renttherunway": {
    "companyId": "renttherunway",
    "name": "Rent the Runway",
    "legalName": "Rent the Runway, Inc.",
    "website": "https://www.renttherunway.com",
    "description": "Clothing rental company. It operates an online shared designer closet offering subscription and one-off rentals of apparel and accessories from brand partners.",
    "hqCity": "Brooklyn",
    "hqCountry": "United States",
    "foundedYear": 2009,
    "status": "public",
    "statusDetail": null,
    "sector": "Ecommerce",
    "subsector": "online designer clothing rental and subscription service",
    "tickers": [
      "NASDAQ:RENT"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - website address",
        "url": "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - corporate history",
        "url": "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Rent the Runway, Inc. Form 10-K for fiscal year ended January 31, 2026 - Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1468327/000146832726000020/wdq-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Rent the Runway, Inc. Investor Relations - news releases",
        "url": "https://investors.renttherunway.com/news-releases",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions record for CIK 0001468327",
        "url": "https://data.sec.gov/submissions/CIK0001468327.json",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "stripe": {
    "companyId": "stripe",
    "name": "Stripe",
    "legalName": "Stripe, Inc.",
    "website": "https://stripe.com",
    "description": "Payments and financial infrastructure company providing online payment processing and related financial services for businesses.",
    "hqCity": "South San Francisco",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "Online payments and financial infrastructure for internet businesses",
    "tickers": [],
    "formerNames": [
      "SlashDevSlashFinance Inc.",
      "HGSC, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Stripe, Inc. Form D primary document (2024-04-12)",
        "url": "https://www.sec.gov/Archives/edgar/data/1691342/000169134224000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR - Stripe, Inc. Form D issuerPreviousNameList",
        "url": "https://www.sec.gov/Archives/edgar/data/1691342/000169134224000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Stripe, Inc. Form D issuer address, 354 Oyster Point Boulevard, South San Francisco, CA",
        "url": "https://www.sec.gov/Archives/edgar/data/1691342/000169134224000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Stripe, Inc. Form D issuer address",
        "url": "https://www.sec.gov/Archives/edgar/data/1691342/000169134224000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Stripe Newsroom - Information and assets, dual headquarters statement",
        "url": "https://stripe.com/newsroom/information",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Stripe - About",
        "url": "https://stripe.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Stripe - About",
        "url": "https://stripe.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Stripe Newsroom - Information and assets",
        "url": "https://stripe.com/newsroom/information",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Stripe - About",
        "url": "https://stripe.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Stripe - About",
        "url": "https://stripe.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Stripe, Inc. entity submissions record, no ticker or exchange, filings limited to Form D and Form D/A private placement notices",
        "url": "https://data.sec.gov/submissions/CIK0001691342.json",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "plaid": {
    "companyId": "plaid",
    "name": "Plaid",
    "legalName": "Plaid Inc.",
    "website": "https://plaid.com",
    "description": "Financial technology company providing a network and APIs that let consumers connect their bank and other financial accounts to third-party apps and services.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "private",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "Financial account connectivity and open banking data infrastructure",
    "tickers": [],
    "formerNames": [
      "Plaid Technologies, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Plaid - Legal, End User Privacy Policy naming Plaid Inc.",
        "url": "https://plaid.com/legal/",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR - Form D filed as Plaid Technologies, Inc. (CIK 0001677226), with Zachary Perret and William Hockey as related persons",
        "url": "https://www.sec.gov/Archives/edgar/data/1677226/000167722616000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Plaid - Legal, current entity stated as Plaid Inc.",
        "url": "https://plaid.com/legal/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SEC EDGAR - Form D yearOfInc value 2012 for Plaid Technologies, Inc.",
        "url": "https://www.sec.gov/Archives/edgar/data/1677226/000167722616000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Form D issuer address, 564 Market Street, Suite 700, San Francisco, CA",
        "url": "https://www.sec.gov/Archives/edgar/data/1677226/000167722616000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Form D issuer address",
        "url": "https://www.sec.gov/Archives/edgar/data/1677226/000167722616000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Plaid - What is Plaid",
        "url": "https://plaid.com/what-is-plaid/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Plaid - What is Plaid",
        "url": "https://plaid.com/what-is-plaid/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Plaid - What is Plaid",
        "url": "https://plaid.com/what-is-plaid/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Plaid - What is Plaid",
        "url": "https://plaid.com/what-is-plaid/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - entity submissions record, no ticker or exchange, filings limited to Form D",
        "url": "https://data.sec.gov/submissions/CIK0001677226.json",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "ramp": {
    "companyId": "ramp",
    "name": "Ramp",
    "legalName": "Ramp Business Corp",
    "website": "https://ramp.com",
    "description": "Finance operations company providing corporate cards, expense management, bill payments, procurement, accounting automation and business banking services.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2019,
    "status": "private",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "Corporate cards, expense management and spend management software",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Ramp Business Corp Form D primary document filed 2026-06-17, entityName and Delaware jurisdiction",
        "url": "https://www.sec.gov/Archives/edgar/data/1803782/000180378226000002/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Ramp Business Corp Form D issuer address, 28 West 23rd Street, Floor 2, New York, NY",
        "url": "https://www.sec.gov/Archives/edgar/data/1803782/000180378226000002/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Ramp Business Corp Form D issuer address",
        "url": "https://www.sec.gov/Archives/edgar/data/1803782/000180378226000002/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SEC EDGAR - Ramp Business Corp Form D filed 2020-02-26, yearOfInc value 2019",
        "url": "https://www.sec.gov/Archives/edgar/data/1803782/000180378220000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Ramp - official site",
        "url": "https://ramp.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Ramp - official site product description",
        "url": "https://ramp.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Ramp - official site product description",
        "url": "https://ramp.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Ramp - official site product description",
        "url": "https://ramp.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - entity submissions record, no ticker or exchange, filings limited to Form D and ABS-15G",
        "url": "https://data.sec.gov/submissions/CIK0001803782.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Regulation D private placement notice filed 2026-06-17",
        "url": "https://www.sec.gov/Archives/edgar/data/1803782/000180378226000002/primary_doc.xml",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "brex": {
    "companyId": "brex",
    "name": "Brex",
    "legalName": "Brex LLC",
    "website": "https://www.brex.com",
    "description": "Finance platform providing corporate cards, expense management software, business banking and payments for companies.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "acquired",
    "statusDetail": "Acquired by Capital One Financial Corporation in 2026",
    "sector": "Fintech",
    "subsector": "Corporate cards, expense management and business banking",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Brex - Legal, Platform Agreement defining Brex as Brex LLC",
        "url": "https://www.brex.com/legal",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Brex - Legal",
        "url": "https://www.brex.com/legal",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Brex - Capital One Completes Acquisition of Brex, About Brex text",
        "url": "https://www.brex.com/journal/capital-one-completes-acquisition-of-brex",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Brex - Capital One Completes Acquisition of Brex, Founded in 2017",
        "url": "https://www.brex.com/journal/capital-one-completes-acquisition-of-brex",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Capital One - Capital One to Acquire Brex press release",
        "url": "https://investor.capitalone.com/news-releases/news-release-details/capital-one-acquire-brex",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Capital One Financial Corp Form 8-K filed 2026-01-22, press release dateline McLean VA and San Francisco CA, naming Brex Inc., a Delaware corporation",
        "url": "https://www.sec.gov/Archives/edgar/data/927628/000119312526019543/0001193125-26-019543.txt",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Capital One Financial Corp Form 8-K filed 2026-01-22",
        "url": "https://www.sec.gov/Archives/edgar/data/927628/000119312526019543/0001193125-26-019543.txt",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Capital One - Capital One Completes Acquisition of Brex, 7 April 2026",
        "url": "https://www.capitalone.com/about/newsroom/capital-one-completes-acquisition-of-brex/",
        "checked": "2026-09-02"
      },
      {
        "field": "statusDetail",
        "label": "Capital One - Capital One Completes Acquisition of Brex, 7 April 2026",
        "url": "https://www.capitalone.com/about/newsroom/capital-one-completes-acquisition-of-brex/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Brex - Capital One Completes Acquisition of Brex",
        "url": "https://www.brex.com/journal/capital-one-completes-acquisition-of-brex",
        "checked": "2026-09-02"
      },
      {
        "field": "statusDetail",
        "label": "Brex - Capital One Completes Acquisition of Brex",
        "url": "https://www.brex.com/journal/capital-one-completes-acquisition-of-brex",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Capital One - Capital One to Acquire Brex, description of Brex",
        "url": "https://investor.capitalone.com/news-releases/news-release-details/capital-one-acquire-brex",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Capital One - Capital One to Acquire Brex, description of Brex",
        "url": "https://investor.capitalone.com/news-releases/news-release-details/capital-one-acquire-brex",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "klarna": {
    "companyId": "klarna",
    "name": "Klarna",
    "legalName": "Klarna Group plc",
    "website": "https://www.klarna.com",
    "description": "Payments and shopping company offering flexible consumer payment options and banking services to consumers and merchants.",
    "hqCity": "London",
    "hqCountry": "United Kingdom",
    "foundedYear": 2005,
    "status": "public",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "Consumer payments and shopping services",
    "tickers": [
      "NYSE:KLAR"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Klarna Group plc Form 20-F for FY2025 filed 2026-02-26, cover page registrant name",
        "url": "https://www.sec.gov/Archives/edgar/data/2003292/000200329226000007/klar-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Companies House - KLARNA GROUP PLC, company number 14467769",
        "url": "https://find-and-update.company-information.service.gov.uk/company/14467769",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Klarna Group plc Form 20-F cover, address of principal executive offices 10 York Road, London SE1 7ND, United Kingdom",
        "url": "https://www.sec.gov/Archives/edgar/data/2003292/000200329226000007/klar-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Klarna Group plc entity submissions record, business address London, United Kingdom, state of incorporation United Kingdom",
        "url": "https://data.sec.gov/submissions/CIK0002003292.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Klarna Group plc entity submissions record, business address 10 York Road, London SE1 7ND",
        "url": "https://data.sec.gov/submissions/CIK0002003292.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Klarna Group plc entity submissions record, tickers KLAR, exchanges NYSE, most recent filing Form 6-K dated 2026-07-28",
        "url": "https://data.sec.gov/submissions/CIK0002003292.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Klarna Group plc entity submissions record, tickers KLAR, exchanges NYSE",
        "url": "https://data.sec.gov/submissions/CIK0002003292.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Klarna Group plc Form 20-F cover, securities registered: Ordinary shares, trading symbol KLAR, New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/2003292/000200329226000007/klar-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Klarna Investor Relations - Klarna Completes Initial Public Offering, shares began trading on the New York Stock Exchange on September 10, 2025 under the symbol KLAR",
        "url": "https://investors.klarna.com/News--Events/news/news-details/2025/Klarna-Completes-Initial-Public-Offering/default.aspx",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Klarna - About us, Klarna was founded in 2005 in Stockholm, Sweden",
        "url": "https://www.klarna.com/international/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Klarna - About us",
        "url": "https://www.klarna.com/international/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Klarna - About us",
        "url": "https://www.klarna.com/international/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Klarna - About us",
        "url": "https://www.klarna.com/international/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Klarna - About us",
        "url": "https://www.klarna.com/international/about-us/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "revolut": {
    "companyId": "revolut",
    "name": "Revolut",
    "legalName": "Revolut Group Holdings Ltd",
    "website": "https://www.revolut.com",
    "description": "Financial services group offering an app for spending, saving, investing, borrowing and international money transfers for consumers and businesses.",
    "hqCity": "London",
    "hqCountry": "United Kingdom",
    "foundedYear": 2015,
    "status": "private",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "Consumer and business digital banking and money transfer app",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Companies House - REVOLUT GROUP HOLDINGS LTD, company number 12743269, private limited company, active",
        "url": "https://find-and-update.company-information.service.gov.uk/company/12743269",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Revolut Annual Report 2025 cover, Revolut Group Holdings Ltd, Registered number 12743269",
        "url": "https://assets.revolut.com/pdf/annualreport2025.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Companies House - registered office address 30 South Colonnade, London, E14 5HX",
        "url": "https://find-and-update.company-information.service.gov.uk/company/12743269",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Companies House - registered office address, London, United Kingdom",
        "url": "https://find-and-update.company-information.service.gov.uk/company/12743269",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Revolut Annual Report 2025, opening of new Global HQ in London",
        "url": "https://assets.revolut.com/pdf/annualreport2025.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Companies House - company type Private limited Company, status Active",
        "url": "https://find-and-update.company-information.service.gov.uk/company/12743269",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Revolut - About, Nik Storonsky launched Revolut in 2015",
        "url": "https://www.revolut.com/en-US/about-revolut/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Revolut - About",
        "url": "https://www.revolut.com/en-US/about-revolut/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Revolut - About",
        "url": "https://www.revolut.com/en-US/about-revolut/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Revolut Annual Report 2025",
        "url": "https://assets.revolut.com/pdf/annualreport2025.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Revolut - About",
        "url": "https://www.revolut.com/en-US/about-revolut/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Revolut - About",
        "url": "https://www.revolut.com/en-US/about-revolut/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "monzo": {
    "companyId": "monzo",
    "name": "Monzo",
    "legalName": "Monzo Bank Limited",
    "website": "https://monzo.com",
    "description": "UK bank offering app-based personal current accounts, joint and youth accounts, savings, loans, credit cards and business banking.",
    "hqCity": "London",
    "hqCountry": "United Kingdom",
    "foundedYear": 2015,
    "status": "private",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "app-based retail and business banking",
    "tickers": [],
    "formerNames": [
      "Focus FS Limited"
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Companies House - MONZO BANK LIMITED (09446231)",
        "url": "https://find-and-update.company-information.service.gov.uk/company/09446231",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Monzo - site footer legal small print",
        "url": "https://monzo.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Monzo - Official Site",
        "url": "https://monzo.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Monzo - Official Site product overview",
        "url": "https://monzo.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Monzo - site footer address, Broadwalk House, 5 Appold St, London",
        "url": "https://monzo.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Companies House - registered office of MONZO BANK LIMITED",
        "url": "https://find-and-update.company-information.service.gov.uk/company/09446231",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Companies House - registered in England and Wales",
        "url": "https://find-and-update.company-information.service.gov.uk/company/09446231",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Monzo - site footer legal small print",
        "url": "https://monzo.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Companies House - incorporation date 18 February 2015",
        "url": "https://find-and-update.company-information.service.gov.uk/company/09446231",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Companies House - MONZO BANK LIMITED is a private limited company",
        "url": "https://find-and-update.company-information.service.gov.uk/company/09446231",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Companies House - MONZO BANK HOLDING GROUP LIMITED (14785367), private limited parent",
        "url": "https://find-and-update.company-information.service.gov.uk/company/14785367",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Companies House - persons with significant control of Monzo Bank Limited",
        "url": "https://find-and-update.company-information.service.gov.uk/company/09446231/persons-with-significant-control",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Companies House - SIC 64191 Banks",
        "url": "https://find-and-update.company-information.service.gov.uk/company/09446231",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Monzo - Official Site product overview",
        "url": "https://monzo.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Companies House - previous company names, FOCUS FS LIMITED 18 Feb 2015 to 21 Oct 2016",
        "url": "https://find-and-update.company-information.service.gov.uk/company/09446231",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "deel": {
    "companyId": "deel",
    "name": "Deel",
    "legalName": "Deel, Inc.",
    "website": "https://www.deel.com",
    "description": "Payroll, HR and compliance technology that companies use to hire, pay and manage employees and contractors across countries.",
    "hqCity": null,
    "hqCountry": null,
    "foundedYear": 2019,
    "status": "private",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "global payroll, HR and workforce management software",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - submissions for Deel, Inc. (CIK 0001813695)",
        "url": "https://data.sec.gov/submissions/CIK0001813695.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Deel - Official Site",
        "url": "https://www.deel.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Deel - About page",
        "url": "https://www.deel.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Deel - About page, \"Founded in 2019\"",
        "url": "https://www.deel.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Deel, Inc. filing history is Regulation D exempt offerings only, no registration statement or periodic reports",
        "url": "https://data.sec.gov/submissions/CIK0001813695.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Deel - About page",
        "url": "https://www.deel.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Deel - About page",
        "url": "https://www.deel.com/about/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "rippling": {
    "companyId": "rippling",
    "name": "Rippling",
    "legalName": "People Center, Inc.",
    "website": "https://www.rippling.com",
    "description": "Workforce management software combining HR, IT and spend products, including payroll, benefits, identity and device management, bill pay and corporate cards.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2016,
    "status": "private",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "workforce management software spanning HR, IT and spend",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Rippling - User Privacy Notice, \"People Center, Inc. d/b/a Rippling\"",
        "url": "https://static-assets.ripplingcdn.com/legal/en-US/user_privacy_notice.html",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Rippling - Customer Terms of Service Agreement",
        "url": "https://static-assets.ripplingcdn.com/ui-platform/customer_terms_of_service_agreement_may_2023.pdf",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - submissions for People Center, Inc. (CIK 0001772138)",
        "url": "https://data.sec.gov/submissions/CIK0001772138.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Rippling - Official Site",
        "url": "https://www.rippling.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Rippling - Series G fundraising announcement",
        "url": "https://www.rippling.com/blog/series-g-fundraising-tender-offer",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Rippling - About page, San Francisco office at 430 California Street",
        "url": "https://www.rippling.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Form D business address, San Francisco, CA",
        "url": "https://data.sec.gov/submissions/CIK0001772138.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Form D business address, San Francisco, CA",
        "url": "https://data.sec.gov/submissions/CIK0001772138.json",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SEC EDGAR - Form D for People Center, Inc., year of incorporation 2016",
        "url": "https://www.sec.gov/Archives/edgar/data/1772138/000177213819000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SEC EDGAR - Form D 2020 for People Center, Inc., year of incorporation 2016",
        "url": "https://www.sec.gov/Archives/edgar/data/1772138/000177213820000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Rippling - Series G private fundraising and employee tender offer, 9 May 2025",
        "url": "https://www.rippling.com/blog/series-g-fundraising-tender-offer",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - People Center, Inc. filing history is Regulation D exempt offerings only, no registration statement or periodic reports",
        "url": "https://data.sec.gov/submissions/CIK0001772138.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Rippling - Series G fundraising announcement product list",
        "url": "https://www.rippling.com/blog/series-g-fundraising-tender-offer",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Rippling - Series G fundraising announcement product list",
        "url": "https://www.rippling.com/blog/series-g-fundraising-tender-offer",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "gusto": {
    "companyId": "gusto",
    "name": "Gusto",
    "legalName": "Gusto, Inc.",
    "website": "https://gusto.com",
    "description": "Cloud payroll, benefits administration and HR software for small and medium-sized businesses in the United States.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "private",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "payroll, benefits and HR software for small businesses",
    "tickers": [],
    "formerNames": [
      "ZenPayroll, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Gusto - Terms of Service, \"Gusto, Inc.\"",
        "url": "https://gusto.com/about/terms",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - submissions for Gusto, Inc. (CIK 0001639415)",
        "url": "https://data.sec.gov/submissions/CIK0001639415.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Gusto - Official Site",
        "url": "https://gusto.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Gusto - About page",
        "url": "https://gusto.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - business address 525 20th Street, San Francisco, CA",
        "url": "https://data.sec.gov/submissions/CIK0001639415.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - business address 525 20th Street, San Francisco, CA",
        "url": "https://data.sec.gov/submissions/CIK0001639415.json",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Gusto - About page, \"Launched in 2012 as ZenPayroll\"",
        "url": "https://gusto.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Gusto, Inc. filing history is Regulation D exempt offerings only, no registration statement or periodic reports",
        "url": "https://data.sec.gov/submissions/CIK0001639415.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Gusto - About page",
        "url": "https://gusto.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Gusto - About page",
        "url": "https://gusto.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR - former name ZenPayroll, Inc. on CIK 0001639415",
        "url": "https://data.sec.gov/submissions/CIK0001639415.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Gusto - About page, \"Launched in 2012 as ZenPayroll\"",
        "url": "https://gusto.com/about",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "scaleai": {
    "companyId": "scaleai",
    "name": "Scale AI",
    "legalName": "Scale AI, Inc.",
    "website": "https://scale.com",
    "description": "AI data and evaluation company providing training data, annotation and reinforcement learning from human feedback, model evaluation and red-teaming, and full-stack AI systems for enterprises and governments.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2016,
    "status": "private",
    "statusDetail": null,
    "sector": "AI",
    "subsector": "AI training data, model evaluation and applied AI systems",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Scale AI - Terms of Service, \"Scale AI, Inc.\"",
        "url": "https://scale.com/legal/terms",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Scale AI - Official Site",
        "url": "https://scale.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Scale AI - About page",
        "url": "https://scale.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Scale AI - About page, \"Headquarters: San Francisco, CA\"",
        "url": "https://scale.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Scale AI - About page, \"Headquarters: San Francisco, CA\"",
        "url": "https://scale.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Scale AI - About page, Founded 2016",
        "url": "https://scale.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Scale AI - announcement of Meta investment, \"Following its investment, Meta will hold a minority of Scale's outstanding equity.\"",
        "url": "https://scale.com/blog/scale-ai-announces-next-phase-of-company-evolution",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Scale AI - \"Scale remains an independent company.\"",
        "url": "https://scale.com/blog/customer-trust-scale-meta-deal",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Scale AI - About page",
        "url": "https://scale.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Scale AI - About page",
        "url": "https://scale.com/about",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "anduril": {
    "companyId": "anduril",
    "name": "Anduril",
    "legalName": "Anduril Industries, Inc.",
    "website": "https://www.anduril.com",
    "description": "Defense technology company that develops autonomous air, ground and maritime systems, sensing hardware and command and control software for military and national security customers.",
    "hqCity": "Costa Mesa",
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "private",
    "statusDetail": null,
    "sector": "Defense Tech",
    "subsector": "autonomous defense systems and command and control software",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "US GAO - bid protest decision B-419420, \"Anduril Industries, Inc., of Irvine, California\"",
        "url": "https://www.gao.gov/products/b-419420",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "US Department of Defense - Contracts for Feb. 14, 2025, \"Anduril Industries Inc., Costa Mesa, California\"",
        "url": "https://www.war.gov/News/Contracts/Contract/Article/4068227/contracts-for-feb-14-2025/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Anduril - Official Site",
        "url": "https://www.anduril.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Anduril - Company page",
        "url": "https://www.anduril.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "US Department of Defense - Contracts for Feb. 14, 2025, contractor located Costa Mesa, California",
        "url": "https://www.war.gov/News/Contracts/Contract/Article/4068227/contracts-for-feb-14-2025/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Fortune - \"Anduril's headquarters in Costa Mesa, California\"",
        "url": "https://fortune.com/2026/03/28/palmer-luckey-anduril-defense-tech-asia-us-allies/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "TechCrunch - \"Anduril's headquarters is nearby, in Costa Mesa, California\"",
        "url": "https://techcrunch.com/2026/01/22/palmer-luckey-says-the-coolest-thing-about-anduril-expanding-to-long-beach-is-the-fighter-jets/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "US Department of Defense - Contracts for Feb. 14, 2025, contractor located Costa Mesa, California",
        "url": "https://www.war.gov/News/Contracts/Contract/Article/4068227/contracts-for-feb-14-2025/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Fortune - \"the defense-technology startup Luckey founded in 2017\"",
        "url": "https://fortune.com/2026/03/28/palmer-luckey-anduril-defense-tech-asia-us-allies/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Anduril - Investor Relations, \"Anduril is a privately held company.\"",
        "url": "https://www.anduril.com/investor-relations",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Anduril - Anduril Announces \$5B Series H Raise, private financing dated 13 May 2026",
        "url": "https://www.anduril.com/news/anduril-announces-usd5b-series-h-raise",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Anduril - Company page",
        "url": "https://www.anduril.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Anduril - Company page",
        "url": "https://www.anduril.com/company",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "perplexity": {
    "companyId": "perplexity",
    "name": "Perplexity",
    "legalName": "Perplexity AI, Inc.",
    "website": "https://www.perplexity.ai",
    "description": "Operates an AI-powered search and answer engine, offered as a free product and as paid consumer subscriptions.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2022,
    "status": "private",
    "statusDetail": null,
    "sector": "Consumer",
    "subsector": "consumer AI search and answer engine",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Perplexity - Terms of Service",
        "url": "https://www.perplexity.ai/hub/legal/terms-of-service",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Perplexity - Terms of Service naming www.perplexity.ai as the company website",
        "url": "https://www.perplexity.ai/hub/legal/terms-of-service",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Perplexity - Terms of Service describing the artificial-intelligence powered search engine",
        "url": "https://www.perplexity.ai/hub/legal/terms-of-service",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Perplexity - About",
        "url": "https://www.perplexity.ai/hub/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Perplexity - Careers, \"Our home base is San Francisco\"",
        "url": "https://www.perplexity.ai/hub/careers",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Perplexity - Careers, \"Our home base is San Francisco\"",
        "url": "https://www.perplexity.ai/hub/careers",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Perplexity - Series A announcement, \"Founded in August 2022\"",
        "url": "https://www.perplexity.ai/hub/blog/announcing-our-series-a-funding-round-and-mobile-app-launch",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Perplexity - Series B private funding round announcement",
        "url": "https://www.perplexity.ai/hub/blog/perplexity-raises-series-b-funding-round",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR company tickers file - no Perplexity entry among currently traded registrants",
        "url": "https://www.sec.gov/files/company_tickers.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Perplexity - About, describing the consumer answer product",
        "url": "https://www.perplexity.ai/hub/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Perplexity - About, describing the consumer answer product",
        "url": "https://www.perplexity.ai/hub/about",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "glean": {
    "companyId": "glean",
    "name": "Glean",
    "legalName": "Glean Technologies, Inc.",
    "website": "https://www.glean.com",
    "description": "Enterprise AI platform that connects a company's internal data sources to provide workplace search, answers and agents.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2019,
    "status": "private",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "enterprise search and workplace AI assistants",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Glean - About page footer, \"© 2026, Glean Technologies, Inc.\"",
        "url": "https://www.glean.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Glean - About",
        "url": "https://www.glean.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Glean - Press release About Glean boilerplate",
        "url": "https://www.glean.com/press/glean-raises-150m-series-f-at-7-2b-valuation-to-accelerate-enterprise-ai-agent-innovation-globally",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Glean - About",
        "url": "https://www.glean.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Glean - Press release dateline \"San Francisco, CA - August 25, 2026\"",
        "url": "https://www.glean.com/press/glean-launches-global-partner-network-to-scale-its-growing-enterprise-ai-ecosystem",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Glean - Press release dateline \"San Francisco, CA - August 25, 2026\"",
        "url": "https://www.glean.com/press/glean-launches-global-partner-network-to-scale-its-growing-enterprise-ai-ecosystem",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Glean - About page timeline, \"Glean is founded\" dated 2019",
        "url": "https://www.glean.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Glean - Series F private financing press release",
        "url": "https://www.glean.com/press/glean-raises-150m-series-f-at-7-2b-valuation-to-accelerate-enterprise-ai-agent-innovation-globally",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR company tickers file - no Glean entry among currently traded registrants",
        "url": "https://www.sec.gov/files/company_tickers.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Glean - About, enterprise AI platform for company knowledge",
        "url": "https://www.glean.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Glean - Press release About Glean boilerplate",
        "url": "https://www.glean.com/press/glean-raises-150m-series-f-at-7-2b-valuation-to-accelerate-enterprise-ai-agent-innovation-globally",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "vercel": {
    "companyId": "vercel",
    "name": "Vercel",
    "legalName": "Vercel Inc.",
    "website": "https://vercel.com",
    "description": "Cloud platform for developing, previewing, deploying and hosting web applications, and maintainer of the Next.js open-source framework.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2016,
    "status": "private",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "frontend cloud platform and web application deployment",
    "tickers": [],
    "formerNames": [
      "ZEIT"
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Vercel - Terms of Service naming Vercel Inc.",
        "url": "https://vercel.com/legal/terms",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Vercel - Modern Slavery Act Statement naming Vercel Inc.",
        "url": "https://vercel.com/legal/modern-slavery-act",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Vercel - About",
        "url": "https://vercel.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Vercel - \"ZEIT is now Vercel\" announcement describing the develop, preview, ship platform and Next.js",
        "url": "https://vercel.com/blog/zeit-is-now-vercel",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Vercel - About",
        "url": "https://vercel.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Vercel - Modern Slavery Act Statement, \"Vercel has its headquarters in San Francisco\"",
        "url": "https://vercel.com/legal/modern-slavery-act",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Vercel - Modern Slavery Act Statement, \"Vercel has its headquarters in San Francisco\"",
        "url": "https://vercel.com/legal/modern-slavery-act",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Vercel - \"ZEIT is now Vercel\", \"In 2016, we started with a simple goal\"",
        "url": "https://vercel.com/blog/zeit-is-now-vercel",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Vercel - Series F private financing announcement",
        "url": "https://vercel.com/blog/series-f",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR company tickers file - no Vercel entry among currently traded registrants",
        "url": "https://www.sec.gov/files/company_tickers.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Vercel - About, developer platform for building and shipping applications",
        "url": "https://vercel.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Vercel - \"ZEIT is now Vercel\" describing develop, preview and ship workflow",
        "url": "https://vercel.com/blog/zeit-is-now-vercel",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Vercel - \"ZEIT is now Vercel\", \"ZEIT is rebranding to Vercel\", April 21 2020",
        "url": "https://vercel.com/blog/zeit-is-now-vercel",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "anysphere": {
    "companyId": "anysphere",
    "name": "Anysphere",
    "legalName": "Anysphere, Inc.",
    "website": "https://cursor.com",
    "description": "Develops Cursor, an AI-assisted code editor and coding agent product for software developers.",
    "hqCity": null,
    "hqCountry": null,
    "foundedYear": null,
    "status": "acquired",
    "statusDetail": "Acquired by Space Exploration Technologies Corp. (SpaceX) in 2026",
    "sector": "Developer Tools & Infrastructure",
    "subsector": "AI code editor and coding agents",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - SpaceX merger agreement exhibit, \"Anysphere, Inc., a Delaware corporation\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026043411/exhibit101-8xk.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Cursor - Terms of Service, \"Anysphere, Inc. (\"Anysphere,\" \"we,\" or \"us\"), makers of the Cursor software platform\"",
        "url": "https://cursor.com/en-US/terms-of-service",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Cursor - Terms of Service and site footer \"© 2026 Anysphere, Inc.\"",
        "url": "https://cursor.com/en-US/terms-of-service",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Cursor - Terms of Service describing the Cursor software platform",
        "url": "https://cursor.com/en-US/terms-of-service",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Cursor - Careers, describing developers coding with Cursor",
        "url": "https://cursor.com/careers",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - SpaceX Form 8-K Item 2.01, \"on August 14, 2026 (the \"Effective Time\"), the Merger became effective\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026056945/spcx-20260814.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Cursor - \"Cursor is now a part of SpaceX\", \"Cursor has officially been acquired by SpaceX\"",
        "url": "https://cursor.com/blog/joining-spacex",
        "checked": "2026-09-02"
      },
      {
        "field": "statusDetail",
        "label": "SEC EDGAR - SpaceX Form 8-K Item 2.01 reporting completion of the merger on August 14, 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026056945/spcx-20260814.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "statusDetail",
        "label": "SEC EDGAR - SpaceX Form 8-K Item 1.01, merger agreement among Space Exploration Technologies Corp., X67 Inc. and Anysphere, Inc.",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026043411/spaceexplorationtechnologi.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Cursor - Careers, describing software development tooling used by developers",
        "url": "https://cursor.com/careers",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Cursor - Terms of Service describing the Cursor software platform",
        "url": "https://cursor.com/en-US/terms-of-service",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "mistralai": {
    "companyId": "mistralai",
    "name": "Mistral AI",
    "legalName": "Mistral AI SAS",
    "website": "https://mistral.ai",
    "description": "Develops open-weight and commercial large language models and an AI platform for building assistants and agents.",
    "hqCity": "Paris",
    "hqCountry": "France",
    "foundedYear": 2023,
    "status": "private",
    "statusDetail": null,
    "sector": "AI",
    "subsector": "foundation models and enterprise AI platform",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Official French company register (recherche-entreprises.api.gouv.fr) - SIREN 952418325, denomination MISTRAL AI, nature juridique 5710 (SAS)",
        "url": "https://recherche-entreprises.api.gouv.fr/search?q=952418325",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Mistral AI - Legal centre",
        "url": "https://legal.mistral.ai/terms/get-started/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Mistral AI - About",
        "url": "https://mistral.ai/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Mistral AI - Series C funding announcement describing the AI platform for enterprises",
        "url": "https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Official French company register - siege social 15 RUE DES HALLES 75001 PARIS, SIREN 952418325",
        "url": "https://recherche-entreprises.api.gouv.fr/search?q=952418325",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Official French company register - siege social 15 RUE DES HALLES 75001 PARIS, SIREN 952418325",
        "url": "https://recherche-entreprises.api.gouv.fr/search?q=952418325",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Official French company register - date_creation 2023-04-28, SIREN 952418325",
        "url": "https://recherche-entreprises.api.gouv.fr/search?q=952418325",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Mistral AI - About, founded April 2023",
        "url": "https://mistral.ai/about",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Mistral AI - \"Mistral AI raises 1.7B€\" Series C private financing announcement",
        "url": "https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR company tickers file - no Mistral entry among currently traded registrants",
        "url": "https://www.sec.gov/files/company_tickers.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Mistral AI - About, frontier AI models",
        "url": "https://mistral.ai/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Mistral AI - Series C announcement describing the AI platform for enterprises and open models",
        "url": "https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "cohere": {
    "companyId": "cohere",
    "name": "Cohere",
    "legalName": "Cohere Inc.",
    "website": "https://cohere.com",
    "description": "Builds foundation models and enterprise AI products, including language models and agent platforms sold to business customers.",
    "hqCity": "Toronto",
    "hqCountry": "Canada",
    "foundedYear": 2019,
    "status": "private",
    "statusDetail": null,
    "sector": "AI",
    "subsector": "enterprise large language models and AI platform",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Cohere - Terms of Use, \"an agreement between Cohere Inc.\"",
        "url": "https://cohere.com/terms-of-use",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Cohere - About",
        "url": "https://cohere.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Cohere - About",
        "url": "https://cohere.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Cohere - About, \"Cohere was founded in 2019 in Toronto\"",
        "url": "https://cohere.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Cohere - Terms of Use governed by \"the laws of the Province of Ontario and the federal laws of Canada\"; About page \"Born in Canada\"",
        "url": "https://cohere.com/terms-of-use",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Cohere - About, \"Cohere was founded in 2019 in Toronto\"",
        "url": "https://cohere.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Cohere - About, \"Cohere was founded in 2019 in Toronto\"",
        "url": "https://cohere.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Cohere - \"Cohere raises \$500M at a \$6.8B valuation\" private financing announcement",
        "url": "https://cohere.com/blog/august-2025-funding-round",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Cohere - second close of the same private round, September 2025",
        "url": "https://cohere.com/blog/september-2025-funding-round",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR company tickers file - no Cohere entry among currently traded registrants",
        "url": "https://www.sec.gov/files/company_tickers.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Cohere - About, builds foundational models and AI solutions",
        "url": "https://cohere.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Cohere - About, enterprise AI platform and language models",
        "url": "https://cohere.com/about",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "huggingface": {
    "companyId": "huggingface",
    "name": "Hugging Face",
    "legalName": "Hugging Face, Inc.",
    "website": "https://huggingface.co",
    "description": "Platform where the machine learning community collaborates on models, datasets and applications, alongside open-source machine learning libraries.",
    "hqCity": null,
    "hqCountry": null,
    "foundedYear": 2016,
    "status": "private",
    "statusDetail": null,
    "sector": "AI",
    "subsector": "open machine learning model and dataset collaboration platform",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Hugging Face - Terms of Service",
        "url": "https://huggingface.co/terms-of-service",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Hugging Face - Official Site",
        "url": "https://huggingface.co",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Hugging Face - Official Site",
        "url": "https://huggingface.co",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "TechCrunch - Nvidia closes in on Hugging Face acquisition",
        "url": "https://techcrunch.com/2026/08/26/nvidia-closes-in-on-hugging-face-acquisition/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "TechCrunch - Nvidia closes in on Hugging Face acquisition (privately held, takeover talks not yet a signed agreement)",
        "url": "https://techcrunch.com/2026/08/26/nvidia-closes-in-on-hugging-face-acquisition/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "NVIDIA Newsroom - no Hugging Face acquisition announcement as of 2026-09-02",
        "url": "https://nvidianews.nvidia.com/news",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Hugging Face - Official Site",
        "url": "https://huggingface.co",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Hugging Face - Official Site",
        "url": "https://huggingface.co",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "groq": {
    "companyId": "groq",
    "name": "Groq",
    "legalName": null,
    "website": "https://groq.com",
    "description": "Operates AI inference cloud infrastructure. Founded in 2016, the company pioneered the LPU and launched GroqCloud, and runs data centres in North America, Europe, the Middle East and Asia-Pacific.",
    "hqCity": null,
    "hqCountry": "United States",
    "foundedYear": 2016,
    "status": "private",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "AI inference cloud infrastructure",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Groq - Official Site",
        "url": "https://groq.com",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Groq - Groq Raises \$650M to Scale its AI Inference Cloud Business (About Groq boilerplate)",
        "url": "https://groq.com/newsroom/groq-raises-usd650m-to-scale-its-ai-inference-cloud-business",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Groq - Groq Raises \$650M to Scale its AI Inference Cloud Business ('Founded in 2016')",
        "url": "https://groq.com/newsroom/groq-raises-usd650m-to-scale-its-ai-inference-cloud-business",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Groq - Groq Becomes an NVIDIA Cloud Partner ('Groq was established in 2016')",
        "url": "https://groq.com/newsroom/groq-becomes-an-nvidia-cloud-partner",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Groq - Groq Raises \$650M ('An independent, U.S.-based company')",
        "url": "https://groq.com/newsroom/groq-raises-usd650m-to-scale-its-ai-inference-cloud-business",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Groq - Groq Closes \$350 Million Series A (private round, company continues independently)",
        "url": "https://groq.com/newsroom/groq-closes-usd350-million-series-a-building-the-world-s-leading-ai-inference-cloud",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Data Center Dynamics - Nvidia to license tech from Groq, hire its leadership (Jensen Huang: 'we are not acquiring Groq as a company')",
        "url": "https://www.datacenterdynamics.com/en/news/nvidia-to-license-tech-from-ai-inference-chip-company-groq-hire-its-leadership/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Groq - Official Site",
        "url": "https://groq.com",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Groq - Groq Raises \$650M to Scale its AI Inference Cloud Business",
        "url": "https://groq.com/newsroom/groq-raises-usd650m-to-scale-its-ai-inference-cloud-business",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "cerebrassystems": {
    "companyId": "cerebrassystems",
    "name": "Cerebras Systems",
    "legalName": "Cerebras Systems Inc.",
    "website": "https://www.cerebras.ai",
    "description": "Designs and builds wafer-scale AI processors and computer systems, including the Wafer-Scale Engine and the CS series, for AI training and inference.",
    "hqCity": "Sunnyvale",
    "hqCountry": "United States",
    "foundedYear": 2015,
    "status": "public",
    "statusDetail": null,
    "sector": "Hardware",
    "subsector": "wafer-scale AI processors and systems",
    "tickers": [
      "NASDAQ:CBRS"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Cerebras Systems Inc. submissions (CIK 0002021728)",
        "url": "https://data.sec.gov/submissions/CIK0002021728.json",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Cerebras - Announces Closing of Initial Public Offering",
        "url": "https://www.cerebras.ai/press-release/cerebras-systems-announces-closing-of-initial-public-offering",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Cerebras - Official Site",
        "url": "https://www.cerebras.ai",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Cerebras - Company page",
        "url": "https://www.cerebras.ai/company",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Cerebras - Company page (1237 E. Arques Ave, Sunnyvale, CA 94085)",
        "url": "https://www.cerebras.ai/company",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Cerebras Systems Inc. business address, Sunnyvale CA",
        "url": "https://data.sec.gov/submissions/CIK0002021728.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Cerebras Systems Inc. business address, Sunnyvale CA",
        "url": "https://data.sec.gov/submissions/CIK0002021728.json",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Cerebras - Company page ('Since our founding in 2015')",
        "url": "https://www.cerebras.ai/company",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Cerebras Systems Inc. submissions showing 8-A12B, CERT, EFFECT, 424B4 and post-IPO 10-Q filings",
        "url": "https://data.sec.gov/submissions/CIK0002021728.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Cerebras - Announces Closing of Initial Public Offering (closed 15 May 2026)",
        "url": "https://www.cerebras.ai/press-release/cerebras-systems-announces-closing-of-initial-public-offering",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Cerebras Systems Inc. tickers CBRS, exchange Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0002021728.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Cerebras - Announces Pricing of Initial Public Offering (Nasdaq Global Select Market, ticker CBRS)",
        "url": "https://www.cerebras.ai/press-release/cerebras-systems-announces-pricing-of-initial-public-offering",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Cerebras - Company page",
        "url": "https://www.cerebras.ai/company",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Cerebras - Company page",
        "url": "https://www.cerebras.ai/company",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "coreweave": {
    "companyId": "coreweave",
    "name": "CoreWeave",
    "legalName": "CoreWeave, Inc.",
    "website": "https://www.coreweave.com",
    "description": "Cloud computing provider supplying GPU-based infrastructure, tools and services for building and running AI workloads.",
    "hqCity": "Livingston",
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "public",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "AI cloud computing infrastructure",
    "tickers": [
      "NASDAQ:CRWV"
    ],
    "formerNames": [
      "Atlantic Crypto Corp"
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - CoreWeave, Inc. Form 10-Q cover page (period 2025-09-30)",
        "url": "https://www.sec.gov/Archives/edgar/data/1769628/000176962825000062/crwv-20250930.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "CoreWeave - Official Site",
        "url": "https://www.coreweave.com",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "CoreWeave - Press release About CoreWeave boilerplate",
        "url": "https://www.coreweave.com/news/jane-street-signs-6-billion-ai-cloud-agreement-with-coreweave",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - CoreWeave, Inc. Form 10-Q cover page, principal executive offices 290 W Mt. Pleasant Ave, Suite 4100, Livingston, NJ 07039",
        "url": "https://www.sec.gov/Archives/edgar/data/1769628/000176962825000062/crwv-20250930.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - CoreWeave, Inc. Form 10-Q cover page, Livingston, NJ",
        "url": "https://www.sec.gov/Archives/edgar/data/1769628/000176962825000062/crwv-20250930.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "CoreWeave - Press release ('Established in 2017')",
        "url": "https://www.coreweave.com/news/coreweave-introduces-a-new-brand-vision-as-the-cloud-built-for-this-moment",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - CoreWeave, Inc. Form 10-Q cover page, securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1769628/000176962825000062/crwv-20250930.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "CoreWeave - Investor Relations (Nasdaq: CRWV)",
        "url": "https://investors.coreweave.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - CoreWeave, Inc. Form 10-Q cover page: Class A common stock, symbol CRWV, The Nasdaq Stock Market LLC",
        "url": "https://www.sec.gov/Archives/edgar/data/1769628/000176962825000062/crwv-20250930.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "CoreWeave - Investor Relations (Nasdaq: CRWV)",
        "url": "https://investors.coreweave.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR - CoreWeave, Inc. submissions formerNames: Atlantic Crypto Corp (2019-03-11 to 2019-10-03)",
        "url": "https://data.sec.gov/submissions/CIK0001769628.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "CoreWeave - Press release About CoreWeave boilerplate",
        "url": "https://www.coreweave.com/news/jane-street-signs-6-billion-ai-cloud-agreement-with-coreweave",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "CoreWeave - Press release About CoreWeave boilerplate",
        "url": "https://www.coreweave.com/news/jane-street-signs-6-billion-ai-cloud-agreement-with-coreweave",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "lambda": {
    "companyId": "lambda",
    "name": "Lambda",
    "legalName": "Lambda, Inc.",
    "website": "https://lambda.ai",
    "description": "AI cloud infrastructure provider that builds and operates GPU supercomputers, clusters and cloud instances for AI training and inference.",
    "hqCity": "San Jose",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "private",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "AI cloud infrastructure and GPU compute",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Lambda - Privacy Policy (Lambda, Inc., 2510 Zanker Road, San Jose, California 95131)",
        "url": "https://lambda.ai/legal/privacy-policy",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Lambda - Lambda closes \$926 million senior secured term loan B facility ('Lambda, Inc.')",
        "url": "https://lambda.ai/blog/lambda-closes-926-million-senior-secured-term-loan-b-facility",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Lambda, Inc./DE Form D primary document (CIK 0001954966)",
        "url": "https://www.sec.gov/Archives/edgar/data/1954966/000195496624000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Lambda - Official Site",
        "url": "https://lambda.ai",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Lambda - About Lambda boilerplate in term loan press release",
        "url": "https://lambda.ai/blog/lambda-closes-926-million-senior-secured-term-loan-b-facility",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Lambda, Inc./DE Form D issuer address 2510 Zanker Road, San Jose, CA 95131",
        "url": "https://www.sec.gov/Archives/edgar/data/1954966/000195496624000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Lambda - Privacy Policy contact address, 2510 Zanker Road, San Jose, California 95131",
        "url": "https://lambda.ai/legal/privacy-policy",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Lambda, Inc./DE Form D issuer address, San Jose, CA",
        "url": "https://www.sec.gov/Archives/edgar/data/1954966/000195496624000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Lambda - About page ('Lambda was founded in San Francisco in 2012')",
        "url": "https://lambda.ai/about",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Lambda - About Lambda boilerplate ('Founded in 2012')",
        "url": "https://lambda.ai/blog/lambda-closes-926-million-senior-secured-term-loan-b-facility",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Lambda, Inc./DE has filed only Form D private placement notices (2022, 2024), no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0001954966.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Lambda - \$926 million senior secured term loan B facility, private debt financing August 2026",
        "url": "https://lambda.ai/blog/lambda-closes-926-million-senior-secured-term-loan-b-facility",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Lambda - Official Site",
        "url": "https://lambda.ai",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Lambda - About Lambda boilerplate in term loan press release",
        "url": "https://lambda.ai/blog/lambda-closes-926-million-senior-secured-term-loan-b-facility",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "togetherai": {
    "companyId": "togetherai",
    "name": "Together AI",
    "legalName": "Together Computer, Inc.",
    "website": "https://www.together.ai",
    "description": "Full-stack AI cloud platform providing inference, fine-tuning and GPU clusters, together with open-source models and systems research.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2022,
    "status": "private",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "AI cloud platform for inference, fine-tuning and GPU clusters",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Together AI - Privacy Policy ('Together Computer, Inc.')",
        "url": "https://www.together.ai/privacy",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Together AI - Official Site",
        "url": "https://www.together.ai",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Together AI - Official Site and About Together AI boilerplate",
        "url": "https://www.together.ai",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Together AI - Business Wire release ('a leading San Francisco-based AI Native Cloud platform')",
        "url": "https://www.businesswire.com/news/home/20260701243402/en/Together-AI-Raises-\$800-Million-at-\$8.3-Billion-Valuation-to-Make-Frontier-AI-Accessible-to-All",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Together AI - Business Wire release, San Francisco dateline and 'San Francisco-based'",
        "url": "https://www.businesswire.com/news/home/20260701243402/en/Together-AI-Raises-\$800-Million-at-\$8.3-Billion-Valuation-to-Make-Frontier-AI-Accessible-to-All",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Together AI - About Together AI boilerplate ('Founded in 2022')",
        "url": "https://www.businesswire.com/news/home/20260701243402/en/Together-AI-Raises-\$800-Million-at-\$8.3-Billion-Valuation-to-Make-Frontier-AI-Accessible-to-All",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Together AI - Raises \$800 Million at \$8.3 Billion Valuation, private Series C July 2026",
        "url": "https://www.businesswire.com/news/home/20260701243402/en/Together-AI-Raises-\$800-Million-at-\$8.3-Billion-Valuation-to-Make-Frontier-AI-Accessible-to-All",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Together AI - Official Site",
        "url": "https://www.together.ai",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Together AI - Official Site",
        "url": "https://www.together.ai",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "harvey": {
    "companyId": "harvey",
    "name": "Harvey",
    "legalName": "Harvey AI Corporation",
    "website": "https://www.harvey.ai",
    "description": "Provides domain-specific AI software for legal and professional services, with products covering contract analysis, due diligence, compliance and litigation workflows.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "Legal Tech",
    "subsector": "AI software for law firms and corporate legal teams",
    "tickers": [],
    "formerNames": [
      "Counsel AI Corporation"
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "GLEIF LEI record 2549005G9FKTMALDPE60 - HARVEY AI CORPORATION",
        "url": "https://api.gleif.org/api/v1/lei-records/2549005G9FKTMALDPE60",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Harvey - Official Site footer",
        "url": "https://www.harvey.ai/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Harvey - Official Site",
        "url": "https://www.harvey.ai/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Harvey - Company page",
        "url": "https://www.harvey.ai/company",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "GLEIF LEI record - headquarters address 201 Third Street, Suite 500, San Francisco",
        "url": "https://api.gleif.org/api/v1/lei-records/2549005G9FKTMALDPE60",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "GLEIF LEI record - headquarters address, United States",
        "url": "https://api.gleif.org/api/v1/lei-records/2549005G9FKTMALDPE60",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Harvey - Harvey Raises at \$11 Billion Valuation (private round, 25 March 2026)",
        "url": "https://www.harvey.ai/blog/harvey-raises-at-dollar11-billion-valuation-to-scale-agents-across-law-firms-and-enterprises",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Harvey - Company page",
        "url": "https://www.harvey.ai/company",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Harvey - Company page",
        "url": "https://www.harvey.ai/company",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "GLEIF LEI record - PREVIOUS_LEGAL_NAME COUNSEL AI CORPORATION",
        "url": "https://api.gleif.org/api/v1/lei-records/2549005G9FKTMALDPE60",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "sierra": {
    "companyId": "sierra",
    "name": "Sierra",
    "legalName": "Sierra Technologies, Inc.",
    "website": "https://sierra.ai",
    "description": "Conversational AI platform that businesses use to build and deploy AI agents for customer interactions across chat, SMS, WhatsApp, email and voice.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "AI agents for customer service",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Sierra - Terms and Conditions, contact section",
        "url": "https://sierra.ai/uk/terms-and-conditions",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Sierra - Official Site",
        "url": "https://sierra.ai/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Sierra - Official Site",
        "url": "https://sierra.ai/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Sierra - Terms and Conditions, company address 150 Sutter St. #690 San Francisco, CA 94104",
        "url": "https://sierra.ai/uk/terms-and-conditions",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Sierra - Terms and Conditions, company address San Francisco, CA",
        "url": "https://sierra.ai/uk/terms-and-conditions",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Sierra - Announcing our partnership with SoftBank Corp. (SoftBank Vision Fund 2 is an investor in Sierra)",
        "url": "https://sierra.ai/blog/announcing-our-partnership-with-softbank-corp",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Axios - Sierra secures SoftBank investment and Japan expansion (private round, \$10B valuation)",
        "url": "https://www.axios.com/2025/12/04/sierra-ai-softbank-investment-japan",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Sierra - Official Site",
        "url": "https://sierra.ai/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Sierra - Official Site",
        "url": "https://sierra.ai/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "elevenlabs": {
    "companyId": "elevenlabs",
    "name": "ElevenLabs",
    "legalName": "Eleven Labs Inc.",
    "website": "https://elevenlabs.io",
    "description": "AI audio company providing text to speech, voice generation, speech to text, dubbing and conversational voice agents through applications and APIs.",
    "hqCity": null,
    "hqCountry": null,
    "foundedYear": 2022,
    "status": "private",
    "statusDetail": null,
    "sector": "AI",
    "subsector": "AI voice and audio generation",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "ElevenLabs - Terms of Use, contracting entity Eleven Labs Inc.",
        "url": "https://elevenlabs.io/terms-of-use",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "ElevenLabs - Privacy Policy, controller Eleven Labs Inc.",
        "url": "https://elevenlabs.io/privacy-policy",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions CIK 0001977921 - Eleven Labs Inc.",
        "url": "https://data.sec.gov/submissions/CIK0001977921.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "ElevenLabs - Official Site",
        "url": "https://elevenlabs.io/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "ElevenLabs - Official Site",
        "url": "https://elevenlabs.io/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "ElevenLabs - Series D announcement, 'since its founding in 2022'",
        "url": "https://elevenlabs.io/blog/series-d",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "ElevenLabs - Series D announcement, \$500M private round at \$11B valuation (4 February 2026)",
        "url": "https://elevenlabs.io/blog/series-d",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions CIK 0001977921 - only a Form D on file, no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0001977921.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "ElevenLabs - Official Site",
        "url": "https://elevenlabs.io/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "ElevenLabs - Official Site",
        "url": "https://elevenlabs.io/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "synthesia": {
    "companyId": "synthesia",
    "name": "Synthesia",
    "legalName": "Synthesia Limited",
    "website": "https://www.synthesia.io",
    "description": "AI video platform used by businesses to create videos with synthetic presenters and voiceovers for communications, training and upskilling.",
    "hqCity": "London",
    "hqCountry": "United Kingdom",
    "foundedYear": 2017,
    "status": "private",
    "statusDetail": null,
    "sector": "AI",
    "subsector": "AI video generation for business communications and training",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Companies House - SYNTHESIA LIMITED, company number 10933652",
        "url": "https://find-and-update.company-information.service.gov.uk/company/10933652",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Synthesia - Official Site footer, Synthesia Limited",
        "url": "https://www.synthesia.io/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Synthesia - Official Site",
        "url": "https://www.synthesia.io/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Synthesia - Official Site",
        "url": "https://www.synthesia.io/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Companies House - registered office, 20 Triton Street, Regent's Place, London NW1 3BF",
        "url": "https://find-and-update.company-information.service.gov.uk/company/10933652",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Synthesia - Series E announcement, London",
        "url": "https://www.synthesia.io/post/series-e-200-million-4-billion-valuation-future-work",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Companies House - registered office, London, United Kingdom",
        "url": "https://find-and-update.company-information.service.gov.uk/company/10933652",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Companies House - incorporated on 25 August 2017",
        "url": "https://find-and-update.company-information.service.gov.uk/company/10933652",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Synthesia - About page, founded 2017",
        "url": "https://www.synthesia.io/about",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Synthesia - Series E announcement, \$200M private round at \$4B valuation (26 January 2026)",
        "url": "https://www.synthesia.io/post/series-e-200-million-4-billion-valuation-future-work",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Companies House - company status Active",
        "url": "https://find-and-update.company-information.service.gov.uk/company/10933652",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Synthesia - Official Site",
        "url": "https://www.synthesia.io/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Synthesia - Official Site",
        "url": "https://www.synthesia.io/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "runway": {
    "companyId": "runway",
    "name": "Runway",
    "legalName": "Runway AI Inc.",
    "website": "https://runway.com",
    "description": "Generative AI company building models and products for video and image generation, offered through a creative suite, developer APIs and a robotics simulation toolkit.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2018,
    "status": "private",
    "statusDetail": null,
    "sector": "AI",
    "subsector": "generative AI video and image models",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR Form D primary document - entityName Runway AI Inc.",
        "url": "https://www.sec.gov/Archives/edgar/data/1957455/000123191922000071/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions CIK 0001957455 - Runway AI Inc.",
        "url": "https://data.sec.gov/submissions/CIK0001957455.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Runway - Official Site",
        "url": "https://runway.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Runway - Official Site",
        "url": "https://runway.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR Form D primary document - 79 Walker Street, Floor 5, New York, NY 10013",
        "url": "https://www.sec.gov/Archives/edgar/data/1957455/000123191922000071/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR Form D primary document - New York, NY, United States",
        "url": "https://www.sec.gov/Archives/edgar/data/1957455/000123191922000071/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SEC EDGAR Form D primary document - year of incorporation 2018",
        "url": "https://www.sec.gov/Archives/edgar/data/1957455/000123191922000071/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Runway - Series E funding announcement, \$315M private round (10 February 2026)",
        "url": "https://runway.com/news/runway-series-e-funding",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions CIK 0001957455 - only a Form D on file, no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0001957455.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Runway - Official Site",
        "url": "https://runway.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Runway - Official Site",
        "url": "https://runway.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "figureai": {
    "companyId": "figureai",
    "name": "Figure AI",
    "legalName": "Figure AI Inc.",
    "website": "https://www.figure.ai",
    "description": "AI robotics company developing general purpose humanoid robots, including the Figure 03 robot and the Helix AI system.",
    "hqCity": "San Jose",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "Robotics",
    "subsector": "general purpose humanoid robots",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR Form D primary document - entityName Figure AI Inc.",
        "url": "https://www.sec.gov/Archives/edgar/data/2014185/000149315224009735/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions CIK 0002014185 - Figure AI Inc.",
        "url": "https://data.sec.gov/submissions/CIK0002014185.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Figure - Official Site",
        "url": "https://www.figure.ai/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Figure - Official Site",
        "url": "https://www.figure.ai/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Figure - Careers page, 'our headquarters in San Jose, CA'",
        "url": "https://www.figure.ai/careers",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Figure - Careers page, San Jose, CA, United States",
        "url": "https://www.figure.ai/careers",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Figure - Series C announcement, over \$1B committed capital at \$39B post-money valuation (16 September 2025)",
        "url": "https://www.figure.ai/news/series-c",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions CIK 0002014185 - only a Form D on file, no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0002014185.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Figure - Official Site",
        "url": "https://www.figure.ai/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Figure - Official Site",
        "url": "https://www.figure.ai/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "cloudflare": {
    "companyId": "cloudflare",
    "name": "Cloudflare",
    "legalName": "Cloudflare, Inc.",
    "website": "https://www.cloudflare.com",
    "description": "Operates a global cloud network that provides security, performance and reliability services for websites, applications and corporate networks, together with a platform for building and running developer applications.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2009,
    "status": "public",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "global cloud network delivering security, performance and reliability services plus a developer platform",
    "tickers": [
      "NYSE:NET"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Cloudflare, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000054/cloud-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Cloudflare, Inc. Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000016/cloud-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Cloudflare - About Cloudflare (official site)",
        "url": "https://www.cloudflare.com/about-overview/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Cloudflare, Inc. Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000016/cloud-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Cloudflare, Inc. Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000016/cloud-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Cloudflare - About Cloudflare (official site)",
        "url": "https://www.cloudflare.com/about-overview/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Cloudflare, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000054/cloud-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Cloudflare, Inc. Form 10-Q Q2 2026 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000054/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Cloudflare, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000054/cloud-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Cloudflare, Inc. Form 10-Q Q2 2026 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000054/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Cloudflare, Inc. Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000016/cloud-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Cloudflare, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000054/cloud-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Cloudflare, Inc. Form 10-Q Q2 2026 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000054/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Cloudflare, Inc. Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000016/cloud-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Cloudflare, Inc. Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000016/cloud-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Cloudflare, Inc. Form 10-Q for the quarter ended June 30, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000054/cloud-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Cloudflare, Inc. Form 10-Q Q2 2026 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000054/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Cloudflare, Inc. Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000016/cloud-20251231.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "crowdstrike": {
    "companyId": "crowdstrike",
    "name": "CrowdStrike",
    "legalName": "CrowdStrike Holdings, Inc.",
    "website": "https://www.crowdstrike.com",
    "description": "Provides cloud-delivered cybersecurity through its Falcon platform, covering endpoint and cloud workload protection, identity protection and data protection, sold as subscriptions.",
    "hqCity": "Austin",
    "hqCountry": "United States",
    "foundedYear": 2011,
    "status": "public",
    "statusDetail": null,
    "sector": "Cybersecurity",
    "subsector": "cloud-delivered endpoint, cloud workload, identity and data protection (Falcon platform)",
    "tickers": [
      "NASDAQ:CRWD"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "CrowdStrike Holdings, Inc. Form 10-Q for the quarter ended April 30, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000025/crwd-20260430.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "CrowdStrike Holdings, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000010/crwd-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "CrowdStrike - About Us (official site)",
        "url": "https://www.crowdstrike.com/en-us/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "CrowdStrike Holdings, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000010/crwd-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "CrowdStrike - About Us (official site)",
        "url": "https://www.crowdstrike.com/en-us/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "CrowdStrike Holdings, Inc. Form 10-Q for the quarter ended April 30, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000025/crwd-20260430.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "CrowdStrike Holdings, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000010/crwd-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "CrowdStrike Holdings, Inc. Form 10-Q Q1 FY2027 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000025/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "CrowdStrike Holdings, Inc. Form 10-Q for the quarter ended April 30, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000025/crwd-20260430.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "CrowdStrike Holdings, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000010/crwd-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "CrowdStrike Holdings, Inc. Form 10-Q Q1 FY2027 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000025/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "CrowdStrike Holdings, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000010/crwd-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "CrowdStrike Holdings, Inc. Form 10-Q for the quarter ended April 30, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000025/crwd-20260430.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "CrowdStrike Holdings, Inc. Form 10-Q Q1 FY2027 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000025/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "CrowdStrike Holdings, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000010/crwd-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "CrowdStrike - About Us (official site)",
        "url": "https://www.crowdstrike.com/en-us/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "CrowdStrike Holdings, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000010/crwd-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "CrowdStrike - About Us (official site)",
        "url": "https://www.crowdstrike.com/en-us/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "CrowdStrike Holdings, Inc. Form 10-Q for the quarter ended April 30, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000025/crwd-20260430.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "CrowdStrike Holdings, Inc. Form 10-Q Q1 FY2027 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000025/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "CrowdStrike Holdings, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000010/crwd-20260131.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "okta": {
    "companyId": "okta",
    "name": "Okta",
    "legalName": "Okta, Inc.",
    "website": "https://www.okta.com",
    "description": "Provides cloud-based identity and access management software for workforce and customer identity, sold primarily as multi-year subscriptions.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2009,
    "status": "public",
    "statusDetail": null,
    "sector": "Cybersecurity",
    "subsector": "identity and access management software",
    "tickers": [
      "NASDAQ:OKTA"
    ],
    "formerNames": [
      "Saasure Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Okta, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Okta, Inc. Form 10-Q for the quarter ended July 31, 2026 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000069/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Okta - Company (official site)",
        "url": "https://www.okta.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Okta, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Okta - Company (official site)",
        "url": "https://www.okta.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Okta, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Okta, Inc. Form 10-Q for the quarter ended July 31, 2026 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000069/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Okta, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Okta, Inc. Form 10-Q for the quarter ended July 31, 2026 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000069/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Okta, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Okta - Company (official site)",
        "url": "https://www.okta.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Okta, Inc. Form 10-Q for the quarter ended July 31, 2026 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000069/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Okta, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Okta, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Okta - Company (official site)",
        "url": "https://www.okta.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Okta, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Okta - Company (official site)",
        "url": "https://www.okta.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Okta, Inc. Form 10-Q for the quarter ended July 31, 2026 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000069/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Okta, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Okta, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "samsara": {
    "companyId": "samsara",
    "name": "Samsara",
    "legalName": "Samsara Inc.",
    "website": "https://www.samsara.com",
    "description": "Provides the Connected Operations Platform, a subscription software platform paired with installable IoT devices that collect data from vehicles, equipment and sites for organisations that run physical operations.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2015,
    "status": "public",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "Connected Operations Platform for physical operations, delivered as subscriptions with accompanying IoT devices",
    "tickers": [
      "NYSE:IOT"
    ],
    "formerNames": [
      "Samsara Networks Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Samsara Inc. Form 10-Q for the quarter ended May 2, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026041893/iot-20260502.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Samsara Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026018167/iot-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Samsara Inc. Form 10-Q Q1 FY2027 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026041893/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Samsara Investor Relations (official site)",
        "url": "https://investors.samsara.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Samsara Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026018167/iot-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Samsara Investor Relations (official site)",
        "url": "https://investors.samsara.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Samsara Inc. Form 10-Q for the quarter ended May 2, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026041893/iot-20260502.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Samsara Inc. Form 10-Q Q1 FY2027 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026041893/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Samsara Investor Relations (official site)",
        "url": "https://investors.samsara.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Samsara Inc. Form 10-Q for the quarter ended May 2, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026041893/iot-20260502.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Samsara Inc. Form 10-Q Q1 FY2027 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026041893/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Samsara Investor Relations (official site)",
        "url": "https://investors.samsara.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Samsara Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026018167/iot-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Samsara Inc. Form 10-Q for the quarter ended May 2, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026041893/iot-20260502.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Samsara Inc. Form 10-Q Q1 FY2027 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026041893/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Samsara Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026018167/iot-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Samsara Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026018167/iot-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Samsara Inc. Form 10-Q for the quarter ended May 2, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026041893/iot-20260502.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Samsara Inc. Form 10-Q Q1 FY2027 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026041893/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Samsara Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026018167/iot-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR entity submissions record for Samsara Inc., CIK 0001642896, including former name Samsara Networks Inc.",
        "url": "https://data.sec.gov/submissions/CIK0001642896.json",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "rubrik": {
    "companyId": "rubrik",
    "name": "Rubrik",
    "legalName": "Rubrik, Inc.",
    "website": "https://www.rubrik.com",
    "description": "Provides data security and cyber resilience software, including backup, recovery, data protection and data threat analytics, delivered through Rubrik Security Cloud.",
    "hqCity": "Palo Alto",
    "hqCountry": "United States",
    "foundedYear": 2013,
    "status": "public",
    "statusDetail": null,
    "sector": "Cybersecurity",
    "subsector": "data security and cyber resilience, including backup, recovery and data protection",
    "tickers": [
      "NYSE:RBRK"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Rubrik, Inc. Form 10-Q for the quarter ended July 31, 2026 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000060/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Rubrik, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000013/rbrk-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Rubrik, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000013/rbrk-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Rubrik - Company (official site)",
        "url": "https://www.rubrik.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Rubrik, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000013/rbrk-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Rubrik - Company (official site)",
        "url": "https://www.rubrik.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Rubrik, Inc. Form 10-Q for the quarter ended July 31, 2026 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000060/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Rubrik, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000013/rbrk-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Rubrik, Inc. Form 10-Q for the quarter ended July 31, 2026 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000060/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Rubrik, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000013/rbrk-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Rubrik, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000013/rbrk-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Rubrik, Inc. Form 10-Q for the quarter ended July 31, 2026 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000060/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Rubrik, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000013/rbrk-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Rubrik, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000013/rbrk-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Rubrik - Company (official site)",
        "url": "https://www.rubrik.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Rubrik, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000013/rbrk-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Rubrik - Company (official site)",
        "url": "https://www.rubrik.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Rubrik, Inc. Form 10-Q for the quarter ended July 31, 2026 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000060/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Rubrik, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000013/rbrk-20260131.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "sentinelone": {
    "companyId": "sentinelone",
    "name": "SentinelOne",
    "legalName": "SentinelOne, Inc.",
    "website": "https://www.sentinelone.com",
    "description": "Provides an AI-based cybersecurity platform covering endpoint, cloud and identity protection together with security data analytics and security operations tooling.",
    "hqCity": "Mountain View",
    "hqCountry": "United States",
    "foundedYear": 2013,
    "status": "public",
    "statusDetail": null,
    "sector": "Cybersecurity",
    "subsector": "AI-based endpoint, cloud and identity security platform",
    "tickers": [
      "NYSE:S"
    ],
    "formerNames": [
      "Sentinel Labs, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "SentinelOne, Inc. Form 10-Q for the quarter ended July 31, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000055/s-20260731.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SentinelOne, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000020/s-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SentinelOne, Inc. Form 10-Q Q2 FY2027 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000055/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "SentinelOne - About (official site)",
        "url": "https://www.sentinelone.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "SentinelOne, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000020/s-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "SentinelOne - About (official site)",
        "url": "https://www.sentinelone.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SentinelOne, Inc. Form 10-Q for the quarter ended July 31, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000055/s-20260731.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SentinelOne, Inc. Form 10-Q Q2 FY2027 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000055/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SentinelOne, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000020/s-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SentinelOne, Inc. Form 10-Q for the quarter ended July 31, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000055/s-20260731.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SentinelOne, Inc. Form 10-Q Q2 FY2027 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000055/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SentinelOne, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000020/s-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SentinelOne, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000020/s-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SentinelOne, Inc. Form 10-Q for the quarter ended July 31, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000055/s-20260731.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SentinelOne, Inc. Form 10-Q for the quarter ended July 31, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000055/s-20260731.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SentinelOne, Inc. Form 10-Q Q2 FY2027 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000055/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "SentinelOne, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000020/s-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "SentinelOne - About (official site)",
        "url": "https://www.sentinelone.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "SentinelOne, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000020/s-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "SentinelOne - About (official site)",
        "url": "https://www.sentinelone.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SentinelOne, Inc. Form 10-Q for the quarter ended July 31, 2026 - cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000055/s-20260731.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SentinelOne, Inc. Form 10-Q Q2 FY2027 - XBRL cover page report (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000055/R1.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SentinelOne, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000020/s-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SentinelOne, Inc. Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000020/s-20260131.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "confluent": {
    "companyId": "confluent",
    "name": "Confluent",
    "legalName": "Confluent, Inc.",
    "website": "https://www.confluent.io",
    "description": "Data streaming platform built on Apache Kafka and Apache Flink, used to stream, connect, process and govern data in real time. Operates as a wholly owned subsidiary of IBM.",
    "hqCity": "Mountain View",
    "hqCountry": "United States",
    "foundedYear": 2014,
    "status": "acquired",
    "statusDetail": "Acquired by International Business Machines Corporation (IBM) in 2026",
    "sector": "Developer Tools & Infrastructure",
    "subsector": "data streaming platform",
    "tickers": [],
    "formerNames": [
      "Infinitem, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Confluent, Inc. - Form 10-K for fiscal year ended December 31, 2025, cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1699838/000169983826000006/cflt-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Confluent, Inc. - Form 8-K filed March 17, 2026, cover page (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1699838/000110465926029071/tm268826d6_8k.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Confluent, Inc. - Form 424B4 IPO prospectus, Corporate Information: \"Our website address is www.confluent.io.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1699838/000119312521199382/d63025d424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Confluent - official site",
        "url": "https://www.confluent.io/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Confluent - official site: \"Stream, connect, process, and govern your data with a unified Data Streaming Platform built on the heritage of Apache Kafka and Apache Flink.\"",
        "url": "https://www.confluent.io/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Confluent, Inc. - Form 10-K FY2025, Item 1 Business: \"Confluent is pioneering the Data Streaming Platform category...\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1699838/000169983826000006/cflt-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "IBM - \"IBM Completes Acquisition of Confluent\" press release, March 17, 2026",
        "url": "https://newsroom.ibm.com/2026-03-17-ibm-completes-acquisition-of-confluent,-making-real-time-data-the-engine-of-enterprise-ai-and-agents",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Confluent, Inc. - Form 10-K FY2025 cover: \"899 W. Evelyn Avenue Mountain View, California 94041\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1699838/000169983826000006/cflt-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Confluent, Inc. - Form 10-K FY2025 cover: \"899 W. Evelyn Avenue Mountain View, California 94041\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1699838/000169983826000006/cflt-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Confluent, Inc. - Form 424B4, Corporate Information: \"We were initially incorporated under the laws of the State of Delaware in September 2014 under the name Infinitem, Inc.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1699838/000119312521199382/d63025d424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Confluent, Inc. - Form 8-K filed March 17, 2026, Items 2.01 and 3.01: merger with Corvo Merger Sub, Inc., a subsidiary of International Business Machines Corporation, effective March 17, 2026; Nasdaq delisting requested",
        "url": "https://www.sec.gov/Archives/edgar/data/1699838/000110465926029071/tm268826d6_8k.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "IBM - \"IBM Completes Acquisition of Confluent\", ARMONK, N.Y., March 17, 2026",
        "url": "https://newsroom.ibm.com/2026-03-17-ibm-completes-acquisition-of-confluent,-making-real-time-data-the-engine-of-enterprise-ai-and-agents",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Confluent, Inc. - SEC EDGAR submissions record showing Form 25-NSE filed 2026-03-17 and Form 15-12G filed 2026-03-27",
        "url": "https://data.sec.gov/submissions/CIK0001699838.json",
        "checked": "2026-09-02"
      },
      {
        "field": "statusDetail",
        "label": "Confluent, Inc. - Form 8-K filed March 17, 2026, Introductory Note and Item 2.01 naming International Business Machines Corporation as parent and March 17, 2026 as the closing date",
        "url": "https://www.sec.gov/Archives/edgar/data/1699838/000110465926029071/tm268826d6_8k.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "statusDetail",
        "label": "IBM - \"IBM Completes Acquisition of Confluent\", March 17, 2026: \"IBM today completed its acquisition of Confluent, Inc.\"",
        "url": "https://newsroom.ibm.com/2026-03-17-ibm-completes-acquisition-of-confluent,-making-real-time-data-the-engine-of-enterprise-ai-and-agents",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Confluent, Inc. - Form 10-K FY2025, Item 1 Business, describing the Data Streaming Platform sold to enterprises and developers",
        "url": "https://www.sec.gov/Archives/edgar/data/1699838/000169983826000006/cflt-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Confluent - official site: \"A complete, enterprise-grade data streaming platform with all the essential tools enabling developers to build quickly, reliably, and securely.\"",
        "url": "https://www.confluent.io/",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Confluent, Inc. - Form 424B4, Corporate Information: \"We were initially incorporated under the laws of the State of Delaware in September 2014 under the name Infinitem, Inc. We changed our name to Confluent, Inc. in September 2014.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1699838/000119312521199382/d63025d424b4.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "elastic": {
    "companyId": "elastic",
    "name": "Elastic",
    "legalName": "Elastic N.V.",
    "website": "https://www.elastic.co",
    "description": "Software company behind Elasticsearch, selling search, observability and security products as self-managed software and as the Elastic Cloud managed service.",
    "hqCity": null,
    "hqCountry": null,
    "foundedYear": 2012,
    "status": "public",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "search, observability and security software",
    "tickers": [
      "NYSE:ESTC"
    ],
    "formerNames": [
      "Searchworkings Global B.V.",
      "Elasticsearch Global B.V.",
      "Elastic B.V."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Elastic N.V. - Form 10-K for fiscal year ended April 30, 2026, cover page: \"Elastic N.V. (Exact name of registrant as specified in its charter)\", jurisdiction Netherlands",
        "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000018/estc-20260430.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Elastic N.V. - SEC EDGAR submissions record, entity name \"Elastic N.V.\"",
        "url": "https://data.sec.gov/submissions/CIK0001707753.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Elastic N.V. - Form 424B4 IPO prospectus, Corporate Information: \"Our website address is www.elastic.co.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1707753/000119312518294675/d588632d424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Elastic - official site",
        "url": "https://www.elastic.co/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Elastic N.V. - Form 10-K FY2026, Item 1 Business: \"Elastic, the Search AI Company, enables its customers to transform data into answers, actions, and outcomes with Search AI.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000018/estc-20260430.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Elastic - official site, describing Search, Observability and Security solutions built on Elasticsearch",
        "url": "https://www.elastic.co/about",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Elastic N.V. - Form 424B4 IPO prospectus: \"We were founded in 2012.\" and \"We were incorporated in the Netherlands as a private company with limited liability ... on February 9, 2012 as Searchworkings Global B.V.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1707753/000119312518294675/d588632d424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Elastic N.V. - Form 10-K FY2026 cover, Securities registered pursuant to Section 12(b): Ordinary shares, Par Value 0.01 euro Per Share, symbol ESTC, New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000018/estc-20260430.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Elastic N.V. - SEC EDGAR submissions record showing tickers [ESTC], exchanges [NYSE], and a Form 10-Q filed 2026-08-28 with no Form 25 or Form 15",
        "url": "https://data.sec.gov/submissions/CIK0001707753.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Elastic N.V. - Form 10-K FY2026 cover page, Section 12(b) table: trading symbol ESTC on the New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000018/estc-20260430.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Elastic N.V. - Form 10-K FY2026, Corporate Information: \"Our ordinary shares are listed on the New York Stock Exchange (NYSE) under the trading symbol ESTC.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000018/estc-20260430.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Elastic N.V. - Form 10-K FY2026, Item 1 Business, describing the search, observability and security platform built on Elasticsearch",
        "url": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000018/estc-20260430.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Elastic - official site listing Search, Observability and Security as its solution areas",
        "url": "https://www.elastic.co/about",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Elastic N.V. - Form 424B4 IPO prospectus, Corporate Information: \"...on February 9, 2012 as Searchworkings Global B.V. On June 19, 2012 we changed our name to Elasticsearch global B.V., on December 11, 2013 we changed our name to Elasticsearch Global B.V., and on May 29, 2018 we changed our name to Elastic B.V. ... upon such conversion our legal name will be Elastic N.V.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1707753/000119312518294675/d588632d424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Elastic N.V. - SEC EDGAR submissions record, formerNames entry \"Elasticsearch Global BV\" (2017-06-05 to 2017-11-13)",
        "url": "https://data.sec.gov/submissions/CIK0001707753.json",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "hashicorp": {
    "companyId": "hashicorp",
    "name": "HashiCorp",
    "legalName": "HashiCorp, Inc.",
    "website": "https://www.hashicorp.com",
    "description": "Infrastructure automation software company whose products, including Terraform and Vault, are used to provision, manage and secure hybrid cloud infrastructure. Operates as a wholly owned subsidiary of IBM.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2013,
    "status": "acquired",
    "statusDetail": "Acquired by International Business Machines Corporation (IBM) in 2025",
    "sector": "Developer Tools & Infrastructure",
    "subsector": "infrastructure automation and secrets management software",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "HashiCorp, Inc. - Form 8-K filed February 27, 2025, cover page and Introductory Note naming \"HashiCorp, Inc., a Delaware corporation\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1720671/000119312525037910/d898526d8k.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "HashiCorp, Inc. - Form 10-K for fiscal year ended January 31, 2024, cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1720671/000162828024012350/hcp-20240131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "HashiCorp - official site (title identifies HashiCorp as \"an IBM Company\")",
        "url": "https://www.hashicorp.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "HashiCorp - official site: \"HashiCorp helps organizations automate hybrid cloud environments with a unified approach to Infrastructure and Security Lifecycle Management.\" Products listed include Terraform, Packer, Nomad, Waypoint, Vault, Boundary and Consul.",
        "url": "https://www.hashicorp.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "IBM - \"IBM Completes Acquisition of HashiCorp\", February 27, 2025: \"HashiCorp's products automate and secure the infrastructure that underpins hybrid cloud applications and generative AI.\"",
        "url": "https://newsroom.ibm.com/2025-02-27-ibm-completes-acquisition-of-hashicorp,-creates-comprehensive,-end-to-end-hybrid-cloud-platform",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "HashiCorp, Inc. - Form 10-K FY2024 cover page: \"101 Second Street, Suite 700 San Francisco, CA 94105\" (address of principal executive offices), same address on the Form 8-K filed February 27, 2025",
        "url": "https://www.sec.gov/Archives/edgar/data/1720671/000162828024012350/hcp-20240131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "HashiCorp, Inc. - Form 10-K FY2024 cover page: \"101 Second Street, Suite 700 San Francisco, CA 94105\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1720671/000162828024012350/hcp-20240131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "HashiCorp, Inc. - Form 10-K FY2024, Item 1 Business: \"We were incorporated in Delaware in 2013, but only began commercializing our software in 2016.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1720671/000162828024012350/hcp-20240131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "HashiCorp, Inc. - Form 8-K filed February 27, 2025, Introductory Note: consummation on February 27, 2025 of the merger under the Agreement and Plan of Merger dated April 24, 2024 among International Business Machines Corporation, McCloud Merger Sub, Inc. and HashiCorp, Inc.; Item 3.01 records the Nasdaq delisting request",
        "url": "https://www.sec.gov/Archives/edgar/data/1720671/000119312525037910/d898526d8k.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "IBM - \"IBM Completes Acquisition of HashiCorp, Creates Comprehensive, End-to-End Hybrid Cloud Platform\", ARMONK, N.Y., Feb. 27, 2025",
        "url": "https://newsroom.ibm.com/2025-02-27-ibm-completes-acquisition-of-hashicorp,-creates-comprehensive,-end-to-end-hybrid-cloud-platform",
        "checked": "2026-09-02"
      },
      {
        "field": "statusDetail",
        "label": "HashiCorp, Inc. - Form 8-K filed February 27, 2025, Introductory Note naming International Business Machines Corporation as parent and February 27, 2025 as the Closing Date",
        "url": "https://www.sec.gov/Archives/edgar/data/1720671/000119312525037910/d898526d8k.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "statusDetail",
        "label": "IBM - \"IBM Completes Acquisition of HashiCorp\", February 27, 2025: \"IBM today announced it has completed its acquisition of HashiCorp\"",
        "url": "https://newsroom.ibm.com/2025-02-27-ibm-completes-acquisition-of-hashicorp,-creates-comprehensive,-end-to-end-hybrid-cloud-platform",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "HashiCorp, Inc. - Form 10-K FY2024, Item 1 Business: \"Our foundational technologies solve the core infrastructure challenges of cloud adoption by enabling an operating model that unlocks the full potential of modern public and private clouds.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1720671/000162828024012350/hcp-20240131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "HashiCorp - official site describing Infrastructure Lifecycle Management (Terraform, Packer, Nomad, Waypoint) and Security Lifecycle Management (Vault, Boundary, Consul)",
        "url": "https://www.hashicorp.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "snowflake": {
    "companyId": "snowflake",
    "name": "Snowflake",
    "legalName": "Snowflake Inc.",
    "website": "https://www.snowflake.com",
    "description": "Cloud data platform used to consolidate data, run analytics and AI workloads, build data applications and share data, delivered as a managed service across major public clouds.",
    "hqCity": "Menlo Park",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "public",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "cloud data platform and data warehousing",
    "tickers": [
      "NYSE:SNOW"
    ],
    "formerNames": [
      "Snowflake Computing, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Snowflake Inc. - Form 10-K for fiscal year ended January 31, 2026, cover page: \"SNOWFLAKE INC. (Exact name of registrant as specified in its charter)\", Delaware",
        "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Snowflake Inc. - Form 424B4 IPO prospectus, Corporate Information: \"Our website address is www.snowflake.com.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1640147/000162828020013667/snowflake424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Snowflake Inc. - Form 10-K FY2026, Item 1 Business: \"Our platform is the innovative technology that powers the AI Data Cloud, enabling customers to consolidate data into a single source of truth to drive meaningful insights, apply AI to solve business problems, build data applications, and share data and data products.\" and \"This architecture is built on three major public clouds across 53 regional deployments around the world.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Snowflake Inc. - Form 10-K FY2026 cover page, address of principal executive offices: \"135 Constitution Drive, Menlo Park, CA 94025\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Snowflake Inc. - Form 10-K FY2026 cover page, address of principal executive offices: \"135 Constitution Drive, Menlo Park, CA 94025\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Snowflake Inc. - Form 424B4, Corporate Information: \"We were incorporated in Delaware in July 2012 under the name Snowflake Computing, Inc.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1640147/000162828020013667/snowflake424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Snowflake Inc. - Form 10-K FY2026 cover page, Securities registered pursuant to Section 12(b): Common Stock, \$0.0001 par value, symbol SNOW, The New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Snowflake Inc. - SEC EDGAR submissions record showing tickers [SNOW] and exchanges [NYSE], with no Form 25, 25-NSE, 15-12B or 15-12G in the recent filing history",
        "url": "https://data.sec.gov/submissions/CIK0001640147.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Snowflake Inc. - Form 10-K FY2026 cover page, Section 12(b) table: trading symbol SNOW on The New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Snowflake Inc. - SEC EDGAR submissions record, tickers [SNOW], exchanges [NYSE]",
        "url": "https://data.sec.gov/submissions/CIK0001640147.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Snowflake Inc. - Form 10-K FY2026, Item 1 Business, describing the cloud data platform used by organizations to consolidate data, build data applications and run AI workloads",
        "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Snowflake Inc. - Form 10-K FY2026, Item 1 Business, describing the platform architecture built on three major public clouds",
        "url": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Snowflake Inc. - Form 424B4, Corporate Information: \"We were incorporated in Delaware in July 2012 under the name Snowflake Computing, Inc. We changed our name to Snowflake Inc. in April 2019.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1640147/000162828020013667/snowflake424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Snowflake Inc. - SEC EDGAR submissions record, formerNames entry \"Snowflake Computing, Inc.\" (2017-04-11 to 2018-10-16)",
        "url": "https://data.sec.gov/submissions/CIK0001640147.json",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "canva": {
    "companyId": "canva",
    "name": "Canva",
    "legalName": "Canva Pty Ltd",
    "website": "https://www.canva.com",
    "description": "Online design and publishing tool used to create and publish visual content.",
    "hqCity": "Sydney",
    "hqCountry": "Australia",
    "foundedYear": 2013,
    "status": "private",
    "statusDetail": null,
    "sector": "Consumer",
    "subsector": "online design and publishing tool",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Australian Business Register (ABN Lookup) - ABN 80 158 929 938: Entity name \"CANVA PTY LTD\", ACN 158 929 938, Entity type \"Australian Private Company\", ABN status Active from 12 Jun 2012, registered business name \"Canva\"",
        "url": "https://abr.business.gov.au/ABN/View?abn=80158929938",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Canva - Privacy Policy naming \"Canva Pty Ltd\" as data controller with registered address 110 Kippax St, Surry Hills NSW 2010, Australia",
        "url": "https://www.canva.com/policies/privacy-policy/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Canva - official About page",
        "url": "https://www.canva.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Canva - official About page: \"Launched in 2013, Canva is an online design and publishing tool with a mission to empower everyone in the world to design anything and publish anywhere.\"",
        "url": "https://www.canva.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Canva - Life at Canva careers site: \"We pay our respects to the Gadigal people of the Eora nation, who are the Traditional Owners of the land our offices are on in Surry Hills, Sydney.\"",
        "url": "https://www.lifeatcanva.com/en",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Canva - Privacy Policy giving Canva Pty Ltd's registered address as \"110 Kippax St, Surry Hills NSW 2010, Australia\"",
        "url": "https://www.canva.com/policies/privacy-policy/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Australian Business Register (ABN Lookup) - CANVA PTY LTD, main business location NSW 2010, Australia",
        "url": "https://abr.business.gov.au/ABN/View?abn=80158929938",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Canva - Privacy Policy: \"110 Kippax St, Surry Hills NSW 2010, Australia\"",
        "url": "https://www.canva.com/policies/privacy-policy/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Canva - official About page: \"Launched in 2013, Canva is an online design and publishing tool...\"",
        "url": "https://www.canva.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Canva - newsroom announcement (15 September 2021, SYDNEY) boilerplate: \"Launched in 2013, Canva is a free online visual communications and collaboration platform\"",
        "url": "https://www.canva.com/newsroom/news/canva-announces-usd-40-billion-valuation-fueled-global-demand-visual-communication/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Australian Business Register (ABN Lookup) - CANVA PTY LTD entity type \"Australian Private Company\", ABN status Active. An Australian proprietary company is by its corporate form not a listed public company.",
        "url": "https://abr.business.gov.au/ABN/View?abn=80158929938",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Canva - newsroom announcement of a USD 200 million private funding round led by T. Rowe Price, describing Canva as \"one of the most valuable private companies in the world\"",
        "url": "https://www.canva.com/newsroom/news/canva-announces-usd-40-billion-valuation-fueled-global-demand-visual-communication/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Canva - official About page describing an online design and publishing tool with the mission to \"empower everyone in the world to design anything and publish anywhere\"",
        "url": "https://www.canva.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Canva - official About page: \"an online design and publishing tool\"",
        "url": "https://www.canva.com/about/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "airtable": {
    "companyId": "airtable",
    "name": "Airtable",
    "legalName": "Formagrid Inc",
    "website": "https://www.airtable.com",
    "description": "Cloud platform combining a relational database with app building and workflow tools, used by business teams to build applications without traditional coding.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "no-code database and app building platform",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Airtable - Terms of Service: \"These Terms of Service (these \"Terms\") of Formagrid Inc, dba Airtable (\"we,\" \"our,\" or \"us\")...\" and \"The provider of the Services is Formagrid Inc.\"",
        "url": "https://www.airtable.com/company/tos",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Airtable - Privacy Policy naming \"Formagrid Inc, doing business as Airtable\"",
        "url": "https://www.airtable.com/company/privacy",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Airtable - official site, About page",
        "url": "https://www.airtable.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Airtable - official About page describing the platform: \"Teams model data to match how the business actually works, design workflows that improve instead of break, and hand agents the jobs nobody should be doing manually.\"",
        "url": "https://www.airtable.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Airtable - CEO letter, newsroom: \"We launched Airtable in 2015 with the mission of democratizing software creation, and our original product delivered on the promise by leveraging what was newly possible with a rich, realtime collaborative app building experience.\"",
        "url": "https://www.airtable.com/newsroom/introducing-the-ai-native-airtable",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Airtable - official About page giving the company address \"1 Front Street, Floor 28, San Francisco, CA 94111\"",
        "url": "https://www.airtable.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Airtable - Privacy Policy giving the company address \"Airtable, 1 Front Street, Fl 28, San Francisco CA 94111\"",
        "url": "https://www.airtable.com/company/privacy",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Airtable - official About page giving the company address \"1 Front Street, Floor 28, San Francisco, CA 94111\"",
        "url": "https://www.airtable.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Airtable - newsroom announcement of a \$735 million private Series F round at an \$11 billion pre-money valuation led by XN, with Franklin Templeton, J.P. Morgan Growth Equity Partners, Salesforce Ventures, Silver Lake, T. Rowe Price Associates, Benchmark, Coatue, Greenoaks, ICONIQ Growth and Thrive Capital",
        "url": "https://www.airtable.com/newsroom/series-f",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR full-text search for \"Formagrid\" restricted to registration statements and exchange listing forms (S-1, F-1, 424B4, DRS, 8-A12B) returns zero hits; Formagrid appears only inside third-party mutual fund NPORT-P holdings reports, consistent with a privately held issuer",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Formagrid%22&forms=S-1,F-1,424B4,DRS,8-A12B",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Airtable - official About page describing a platform on which business teams model data, design workflows and build applications",
        "url": "https://www.airtable.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Airtable - CEO letter describing \"democratizing software creation\" and \"a rich, realtime collaborative app building experience\"",
        "url": "https://www.airtable.com/newsroom/introducing-the-ai-native-airtable",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "asana": {
    "companyId": "asana",
    "name": "Asana",
    "legalName": "Asana, Inc.",
    "website": "https://asana.com",
    "description": "Work management software platform used by teams and organizations to plan, coordinate and track work, sold on a tiered per-seat subscription basis.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2008,
    "status": "public",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "work management software",
    "tickers": [
      "NYSE:ASAN"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Asana, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477720/000147772026000021/asan-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Asana - Official Site, Company page",
        "url": "https://asana.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Asana, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477720/000147772026000021/asan-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Asana - Official Site, Company page",
        "url": "https://asana.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Asana, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477720/000147772026000021/asan-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Asana - Official Site, Company page",
        "url": "https://asana.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Asana, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477720/000147772026000021/asan-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Asana, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477720/000147772026000021/asan-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Asana, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477720/000147772026000021/asan-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Asana, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477720/000147772026000021/asan-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Asana, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477720/000147772026000021/asan-20260131.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Asana, Inc. - Form 10-K for fiscal year ended January 31, 2026 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1477720/000147772026000021/asan-20260131.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "dropbox": {
    "companyId": "dropbox",
    "name": "Dropbox",
    "legalName": "Dropbox, Inc.",
    "website": "https://www.dropbox.com",
    "description": "Cloud content platform for storing, syncing, sharing and collaborating on files, sold to individuals, teams and organizations on a subscription basis.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2007,
    "status": "public",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "cloud file storage, sync and content collaboration",
    "tickers": [
      "NASDAQ:DBX"
    ],
    "formerNames": [
      "Evenflow, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Dropbox, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1467623/000146762326000008/dbx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR company submissions record for Dropbox, Inc. (CIK 0001467623)",
        "url": "https://data.sec.gov/submissions/CIK0001467623.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Dropbox - Official Site, About page",
        "url": "https://www.dropbox.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Dropbox, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1467623/000146762326000008/dbx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Dropbox - Official Site, About page",
        "url": "https://www.dropbox.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Dropbox, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1467623/000146762326000008/dbx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Dropbox, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1467623/000146762326000008/dbx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Dropbox, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1467623/000146762326000008/dbx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Dropbox - Official Site, About page",
        "url": "https://www.dropbox.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Dropbox, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1467623/000146762326000008/dbx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Dropbox, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1467623/000146762326000008/dbx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR company submissions record for Dropbox, Inc. (CIK 0001467623)",
        "url": "https://data.sec.gov/submissions/CIK0001467623.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR company submissions record for Dropbox, Inc. (CIK 0001467623)",
        "url": "https://data.sec.gov/submissions/CIK0001467623.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Dropbox, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1467623/000146762326000008/dbx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Dropbox, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1467623/000146762326000008/dbx-20251231.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "pinterest": {
    "companyId": "pinterest",
    "name": "Pinterest",
    "legalName": "Pinterest, Inc.",
    "website": "https://www.pinterest.com",
    "description": "Visual search and discovery platform where people save and browse images and ideas, with substantially all revenue generated from third-party advertising.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2008,
    "status": "public",
    "statusDetail": null,
    "sector": "Consumer",
    "subsector": "visual search and discovery platform monetised through advertising",
    "tickers": [
      "NYSE:PINS"
    ],
    "formerNames": [
      "Cold Brew Labs Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Pinterest, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1506293/000150629326000021/pins-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Pinterest - Official Newsroom, Company page",
        "url": "https://newsroom.pinterest.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Pinterest, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1506293/000150629326000021/pins-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Pinterest - Official Newsroom, Company page",
        "url": "https://newsroom.pinterest.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Pinterest, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1506293/000150629326000021/pins-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Pinterest - Official Newsroom, Company page",
        "url": "https://newsroom.pinterest.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Pinterest, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1506293/000150629326000021/pins-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Pinterest, Inc. - Form 424B4 prospectus, Corporate and Other Information (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1506293/000119312519111067/d697629d424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Cold Brew Labs Inc. - Form D, primary_doc.xml (SEC EDGAR, CIK 0001506293)",
        "url": "https://www.sec.gov/Archives/edgar/data/1506293/000150629310000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Pinterest, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1506293/000150629326000021/pins-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Pinterest, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1506293/000150629326000021/pins-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Pinterest, Inc. - Form 424B4 prospectus, Corporate and Other Information (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1506293/000119312519111067/d697629d424b4.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Cold Brew Labs Inc. - Form D, primary_doc.xml (SEC EDGAR, CIK 0001506293)",
        "url": "https://www.sec.gov/Archives/edgar/data/1506293/000150629310000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Pinterest, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1506293/000150629326000021/pins-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Pinterest, Inc. - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1506293/000150629326000021/pins-20251231.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "roblox": {
    "companyId": "roblox",
    "name": "Roblox",
    "legalName": "Roblox Corporation",
    "website": "https://www.roblox.com",
    "description": "Online platform where users create and play three-dimensional experiences built by other users, monetised primarily through sales of virtual currency.",
    "hqCity": "San Mateo",
    "hqCountry": "United States",
    "foundedYear": 2004,
    "status": "public",
    "statusDetail": null,
    "sector": "Gaming",
    "subsector": "user-generated online game and creation platform",
    "tickers": [
      "NYSE:RBLX"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Roblox Corporation - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1315098/000131509826000024/rblx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Roblox Corporation - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1315098/000131509826000024/rblx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Roblox Corporation - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1315098/000131509826000024/rblx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Roblox Corporation - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1315098/000131509826000024/rblx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Roblox Corporation - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1315098/000131509826000024/rblx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Roblox Corporation - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1315098/000131509826000024/rblx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Roblox Corporation - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1315098/000131509826000024/rblx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Roblox Corporation - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1315098/000131509826000024/rblx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Roblox Corporation - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1315098/000131509826000024/rblx-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Roblox Corporation - Form 10-K for fiscal year ended December 31, 2025 (SEC EDGAR)",
        "url": "https://www.sec.gov/Archives/edgar/data/1315098/000131509826000024/rblx-20251231.htm",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "discord": {
    "companyId": "discord",
    "name": "Discord",
    "legalName": "Discord Inc.",
    "website": "https://discord.com",
    "description": "Communications platform providing voice, video and text chat organised into user-run community servers, originally built for people playing games.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2015,
    "status": "private",
    "statusDetail": null,
    "sector": "Consumer",
    "subsector": "voice, video and text communications platform for online communities",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Discord - Official Terms of Service (Who we are)",
        "url": "https://discord.com/terms",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Discord - Official Site, Company page",
        "url": "https://discord.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Discord - Official Site, Company page",
        "url": "https://discord.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Discord - Official Terms of Service (Who we are)",
        "url": "https://discord.com/terms",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Discord - Official Terms of Service (Who we are)",
        "url": "https://discord.com/terms",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Discord - Official Site, Company page",
        "url": "https://discord.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Reuters - Chat platform Discord files confidentially for US IPO, 6 January 2026",
        "url": "https://finance.yahoo.com/news/chat-platform-discord-confidentially-file-233734571.html",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Discord - Official Site, Company page",
        "url": "https://discord.com/company",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Discord - Official Site, Company page",
        "url": "https://discord.com/company",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "faire": {
    "companyId": "faire",
    "name": "Faire",
    "legalName": "Faire Wholesale, Inc.",
    "website": "https://www.faire.com",
    "description": "Online wholesale marketplace where independent retailers discover and order merchandise from brands and makers.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "private",
    "statusDetail": null,
    "sector": "Ecommerce",
    "subsector": "business-to-business wholesale marketplace for independent retailers and brands",
    "tickers": [],
    "formerNames": [
      "Indigo Fair Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Faire Wholesale, Inc. - Form D/A, primary_doc.xml (SEC EDGAR, CIK 0001763016)",
        "url": "https://www.sec.gov/Archives/edgar/data/1763016/000176301622000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR company submissions record for Faire Wholesale, Inc. (CIK 0001763016)",
        "url": "https://data.sec.gov/submissions/CIK0001763016.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Faire - Official Site, About page",
        "url": "https://www.faire.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Faire - Official Site, About page",
        "url": "https://www.faire.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "TechCrunch - Indigo Fair connects local retailers with the perfect merchandise, 7 March 2017",
        "url": "https://techcrunch.com/2017/03/07/indigo-fair/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Faire Wholesale, Inc. - Form D/A, primary_doc.xml (SEC EDGAR, CIK 0001763016)",
        "url": "https://www.sec.gov/Archives/edgar/data/1763016/000176301622000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR company submissions record for Faire Wholesale, Inc. (CIK 0001763016)",
        "url": "https://data.sec.gov/submissions/CIK0001763016.json",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Faire Wholesale, Inc. - Form D/A, primary_doc.xml (SEC EDGAR, CIK 0001763016)",
        "url": "https://www.sec.gov/Archives/edgar/data/1763016/000176301622000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Faire - Official Site, About page",
        "url": "https://www.faire.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "TechCrunch - Indigo Fair connects local retailers with the perfect merchandise, 7 March 2017",
        "url": "https://techcrunch.com/2017/03/07/indigo-fair/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR company submissions record for Faire Wholesale, Inc. (CIK 0001763016)",
        "url": "https://data.sec.gov/submissions/CIK0001763016.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Faire Wholesale, Inc. - Form D/A, primary_doc.xml (SEC EDGAR, CIK 0001763016)",
        "url": "https://www.sec.gov/Archives/edgar/data/1763016/000176301622000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "Faire Wholesale, Inc. - Form D/A, primary_doc.xml (SEC EDGAR, CIK 0001763016)",
        "url": "https://www.sec.gov/Archives/edgar/data/1763016/000176301622000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "TechCrunch - Indigo Fair connects local retailers with the perfect merchandise, 7 March 2017",
        "url": "https://techcrunch.com/2017/03/07/indigo-fair/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Faire - Official Site, About page",
        "url": "https://www.faire.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Faire - Official Site, About page",
        "url": "https://www.faire.com/about",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "whatnot": {
    "companyId": "whatnot",
    "name": "Whatnot",
    "legalName": "Whatnot Inc.",
    "website": "https://www.whatnot.com",
    "description": "Live shopping marketplace where sellers run livestream auctions and buyers shop categories including trading cards, collectibles, sneakers, fashion and electronics.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2019,
    "status": "private",
    "statusDetail": null,
    "sector": "Ecommerce",
    "subsector": "live shopping marketplace",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Whatnot Inc. Form D, filed 2026-08-18",
        "url": "https://www.sec.gov/Archives/edgar/data/1844768/000184476826000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Whatnot Inc. Form D, filed 2026-08-18",
        "url": "https://www.sec.gov/Archives/edgar/data/1844768/000184476826000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Whatnot Inc. Form D, filed 2026-08-18",
        "url": "https://www.sec.gov/Archives/edgar/data/1844768/000184476826000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Whatnot Inc. Form D, filed 2026-08-18",
        "url": "https://www.sec.gov/Archives/edgar/data/1844768/000184476826000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Whatnot Inc. Form D, filed 2021-05-25 (year of incorporation 2019)",
        "url": "https://www.sec.gov/Archives/edgar/data/1844768/000184476821000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SEC EDGAR - Whatnot Inc. Form D, filed 2021-05-25 (year of incorporation 2019)",
        "url": "https://www.sec.gov/Archives/edgar/data/1844768/000184476821000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Whatnot Inc. company submissions (CIK 0001844768), Form D filings only, no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0001844768.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Whatnot Inc. company submissions (CIK 0001844768), Form D filings only, no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0001844768.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Whatnot - Official Site",
        "url": "https://www.whatnot.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Whatnot - Official Site",
        "url": "https://www.whatnot.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Whatnot - Official Site",
        "url": "https://www.whatnot.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Whatnot - Official Site, The Live Shopping Marketplace",
        "url": "https://www.whatnot.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Whatnot - Official Site, The Live Shopping Marketplace",
        "url": "https://www.whatnot.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Whatnot - Official Site, The Live Shopping Marketplace",
        "url": "https://www.whatnot.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "flexport": {
    "companyId": "flexport",
    "name": "Flexport",
    "legalName": "Flexport, Inc.",
    "website": "https://www.flexport.com",
    "description": "Freight forwarding and customs brokerage company offering supply chain and logistics services through a software platform used by importers and exporters to manage orders, shipping, customs and planning.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2013,
    "status": "private",
    "statusDetail": null,
    "sector": "Logistics",
    "subsector": "freight forwarding and customs brokerage",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Flexport, Inc. Form D, filed 2022-02-07",
        "url": "https://www.sec.gov/Archives/edgar/data/1775070/000177507022000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Flexport, Inc. Form D, filed 2022-02-07",
        "url": "https://www.sec.gov/Archives/edgar/data/1775070/000177507022000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Flexport, Inc. Form D, filed 2022-02-07",
        "url": "https://www.sec.gov/Archives/edgar/data/1775070/000177507022000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Flexport, Inc. Form D, filed 2022-02-07",
        "url": "https://www.sec.gov/Archives/edgar/data/1775070/000177507022000001/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Flexport, Inc. company submissions (CIK 0001775070), Form D filings only, no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0001775070.json",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Flexport, Inc. company submissions (CIK 0001775070), Form D filings only, no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0001775070.json",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Flexport - Website Terms of Use",
        "url": "https://www.flexport.com/terms-and-conditions/terms-of-use/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Flexport - Website Terms of Use",
        "url": "https://www.flexport.com/terms-and-conditions/terms-of-use/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Flexport - Website Terms of Use",
        "url": "https://www.flexport.com/terms-and-conditions/terms-of-use/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Flexport - About",
        "url": "https://www.flexport.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Flexport - About",
        "url": "https://www.flexport.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Flexport - About",
        "url": "https://www.flexport.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Flexport - About",
        "url": "https://www.flexport.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Flexport - About Flexport (interview prep site), Founded in San Francisco in 2013",
        "url": "https://interviewing.flexport.com/about-flexport",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "waymo": {
    "companyId": "waymo",
    "name": "Waymo",
    "legalName": "Waymo LLC",
    "website": "https://waymo.com",
    "description": "Autonomous driving technology company that develops self-driving systems and operates an autonomous ride-hailing service in United States cities.",
    "hqCity": "Mountain View",
    "hqCountry": "United States",
    "foundedYear": 2016,
    "status": "private",
    "statusDetail": null,
    "sector": "Mobility",
    "subsector": "autonomous driving technology and autonomous ride-hailing",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Waymo - Website Terms of Service (Waymo LLC, 1600 Amphitheater Parkway, Mountain View, CA 94043)",
        "url": "https://waymo.com/terms/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Waymo - Website Terms of Service (Waymo LLC, 1600 Amphitheater Parkway, Mountain View, CA 94043)",
        "url": "https://waymo.com/terms/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Waymo - Website Terms of Service (Waymo LLC, 1600 Amphitheater Parkway, Mountain View, CA 94043)",
        "url": "https://waymo.com/terms/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Waymo - Web Privacy Policy (Waymo LLC and its subsidiaries)",
        "url": "https://waymo.com/privacy/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Waymo - Company timeline (2016: Waymo becomes an independent self-driving technology company, established under Alphabet)",
        "url": "https://waymo.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Waymo - Company timeline (2016: Waymo becomes an independent self-driving technology company, established under Alphabet)",
        "url": "https://waymo.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Waymo - Accelerating our global growth: Waymo raises 16 billion dollar investment round (Alphabet described as majority investor)",
        "url": "https://waymo.com/blog/2026/02/waymo-raises-usd16-billion-investment-round/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Waymo - Accelerating our global growth: Waymo raises 16 billion dollar investment round (Alphabet described as majority investor)",
        "url": "https://waymo.com/blog/2026/02/waymo-raises-usd16-billion-investment-round/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Waymo - Accelerating our global growth: Waymo raises 16 billion dollar investment round (Alphabet described as majority investor)",
        "url": "https://waymo.com/blog/2026/02/waymo-raises-usd16-billion-investment-round/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Waymo - Accelerating our global growth: Waymo raises 16 billion dollar investment round (Alphabet described as majority investor)",
        "url": "https://waymo.com/blog/2026/02/waymo-raises-usd16-billion-investment-round/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Waymo - Official Site",
        "url": "https://waymo.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Waymo - Official Site",
        "url": "https://waymo.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "rivian": {
    "companyId": "rivian",
    "name": "Rivian",
    "legalName": "Rivian Automotive, Inc.",
    "website": "https://rivian.com",
    "description": "Electric vehicle automaker and automotive technology company that designs and manufactures electric trucks, SUVs and commercial delivery vans.",
    "hqCity": "Irvine",
    "hqCountry": "United States",
    "foundedYear": 2009,
    "status": "public",
    "statusDetail": null,
    "sector": "Mobility",
    "subsector": "electric vehicle manufacturing",
    "tickers": [
      "NASDAQ:RIVN"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Rivian Automotive, Inc. Form 10-Q for the quarter ended June 30, 2026, cover page (Class A common stock, RIVN, The Nasdaq Stock Market)",
        "url": "https://www.sec.gov/Archives/edgar/data/1874178/000187417826000054/rivn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Rivian Automotive, Inc. Form 10-Q for the quarter ended June 30, 2026, cover page (Class A common stock, RIVN, The Nasdaq Stock Market)",
        "url": "https://www.sec.gov/Archives/edgar/data/1874178/000187417826000054/rivn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Rivian Automotive, Inc. Form 10-Q for the quarter ended June 30, 2026, cover page (Class A common stock, RIVN, The Nasdaq Stock Market)",
        "url": "https://www.sec.gov/Archives/edgar/data/1874178/000187417826000054/rivn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Rivian Automotive, Inc. Form 10-Q for the quarter ended June 30, 2026, cover page (Class A common stock, RIVN, The Nasdaq Stock Market)",
        "url": "https://www.sec.gov/Archives/edgar/data/1874178/000187417826000054/rivn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Rivian Automotive, Inc. Form 10-Q for the quarter ended June 30, 2026, cover page (Class A common stock, RIVN, The Nasdaq Stock Market)",
        "url": "https://www.sec.gov/Archives/edgar/data/1874178/000187417826000054/rivn-20260630.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Rivian Automotive, Inc. company submissions (CIK 0001874178): tickers RIVN, exchanges Nasdaq, formerNames empty",
        "url": "https://data.sec.gov/submissions/CIK0001874178.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Rivian Automotive, Inc. company submissions (CIK 0001874178): tickers RIVN, exchanges Nasdaq, formerNames empty",
        "url": "https://data.sec.gov/submissions/CIK0001874178.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Rivian Automotive, Inc. company submissions (CIK 0001874178): tickers RIVN, exchanges Nasdaq, formerNames empty",
        "url": "https://data.sec.gov/submissions/CIK0001874178.json",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Rivian Media Newsroom - Corporate History (founded in 2009 by CEO Robert RJ Scaringe)",
        "url": "https://media.rivian.com/corporate/corporate-history/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Rivian Media Newsroom - Corporate History (founded in 2009 by CEO Robert RJ Scaringe)",
        "url": "https://media.rivian.com/corporate/corporate-history/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Rivian - Official Site",
        "url": "https://rivian.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Rivian - Official Site",
        "url": "https://rivian.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Rivian - Official Site",
        "url": "https://rivian.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Rivian - Official Site",
        "url": "https://rivian.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "lucidmotors": {
    "companyId": "lucidmotors",
    "name": "Lucid Motors",
    "legalName": "Lucid Group, Inc.",
    "website": "https://lucidmotors.com",
    "description": "Technology company that designs and manufactures electric vehicles, including the Lucid Air sedan and Lucid Gravity SUV, assembled at its factory in Arizona.",
    "hqCity": "Newark",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "public",
    "statusDetail": null,
    "sector": "Mobility",
    "subsector": "electric vehicle manufacturing",
    "tickers": [
      "NASDAQ:LCID"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Lucid Group, Inc. Form 10-Q for the quarter ended March 31, 2026, cover page (Class A Common Stock, LCID, The Nasdaq Stock Market LLC)",
        "url": "https://www.sec.gov/Archives/edgar/data/1811210/000162828026030517/lcid-20260331.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Lucid Group, Inc. Form 10-Q for the quarter ended March 31, 2026, cover page (Class A Common Stock, LCID, The Nasdaq Stock Market LLC)",
        "url": "https://www.sec.gov/Archives/edgar/data/1811210/000162828026030517/lcid-20260331.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Lucid Group, Inc. Form 10-Q for the quarter ended March 31, 2026, cover page (Class A Common Stock, LCID, The Nasdaq Stock Market LLC)",
        "url": "https://www.sec.gov/Archives/edgar/data/1811210/000162828026030517/lcid-20260331.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Lucid Group, Inc. Form 10-Q for the quarter ended March 31, 2026, cover page (Class A Common Stock, LCID, The Nasdaq Stock Market LLC)",
        "url": "https://www.sec.gov/Archives/edgar/data/1811210/000162828026030517/lcid-20260331.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Lucid Group, Inc. Form 10-Q for the quarter ended March 31, 2026, cover page (Class A Common Stock, LCID, The Nasdaq Stock Market LLC)",
        "url": "https://www.sec.gov/Archives/edgar/data/1811210/000162828026030517/lcid-20260331.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Lucid Group, Inc. company submissions (CIK 0001811210): tickers LCID, exchanges Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001811210.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Lucid Group, Inc. company submissions (CIK 0001811210): tickers LCID, exchanges Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001811210.json",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Lucid Group, Inc. company submissions (CIK 0001811210): tickers LCID, exchanges Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001811210.json",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Lucid Group, Inc. Investor Relations - press release About Lucid boilerplate (NASDAQ: LCID)",
        "url": "https://ir.lucidmotors.com/news-releases/news-release-details/lucid-expands-footprint-california-new-sales-and-service-centers",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "Lucid Group, Inc. Investor Relations - press release About Lucid boilerplate (NASDAQ: LCID)",
        "url": "https://ir.lucidmotors.com/news-releases/news-release-details/lucid-expands-footprint-california-new-sales-and-service-centers",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Lucid Motors - Company",
        "url": "https://lucidmotors.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Lucid Motors - Company",
        "url": "https://lucidmotors.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Lucid Motors - Company",
        "url": "https://lucidmotors.com/company/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Lucid Motors - Company",
        "url": "https://lucidmotors.com/company/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "commonwealthfusionsystems": {
    "companyId": "commonwealthfusionsystems",
    "name": "Commonwealth Fusion Systems",
    "legalName": "Commonwealth Fusion Systems LLC",
    "website": "https://cfs.energy",
    "description": "Fusion energy company spun out of MIT that develops high-temperature superconducting magnets and tokamak fusion machines with the aim of building commercial fusion power plants.",
    "hqCity": "Devens",
    "hqCountry": "United States",
    "foundedYear": 2018,
    "status": "private",
    "statusDetail": null,
    "sector": "Climate & Energy",
    "subsector": "fusion energy and commercial fusion power plants",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Commonwealth Fusion Systems - Terms of Use (COMMONWEALTH FUSION SYSTEMS LLC, 117 Hospital Rd, Devens, Massachusetts 01434)",
        "url": "https://cfs.energy/terms-of-use/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Commonwealth Fusion Systems - Terms of Use (COMMONWEALTH FUSION SYSTEMS LLC, 117 Hospital Rd, Devens, Massachusetts 01434)",
        "url": "https://cfs.energy/terms-of-use/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Commonwealth Fusion Systems - Terms of Use (COMMONWEALTH FUSION SYSTEMS LLC, 117 Hospital Rd, Devens, Massachusetts 01434)",
        "url": "https://cfs.energy/terms-of-use/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Commonwealth Fusion Systems LLC company submissions (CIK 0001744079), Form D exempt offerings only, no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0001744079.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Commonwealth Fusion Systems LLC company submissions (CIK 0001744079), Form D exempt offerings only, no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0001744079.json",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Commonwealth Fusion Systems LLC Form D, filed 2018-06-27",
        "url": "https://www.sec.gov/Archives/edgar/data/1744079/000174407918000002/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Commonwealth Fusion Systems LLC Form D, filed 2018-06-27",
        "url": "https://www.sec.gov/Archives/edgar/data/1744079/000174407918000002/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Commonwealth Fusion Systems - Our story (spun out of MIT in 2018; 117 Hospital Rd, Devens, MA)",
        "url": "https://cfs.energy/company/story/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Commonwealth Fusion Systems - Our story (spun out of MIT in 2018; 117 Hospital Rd, Devens, MA)",
        "url": "https://cfs.energy/company/story/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Commonwealth Fusion Systems - Our story (spun out of MIT in 2018; 117 Hospital Rd, Devens, MA)",
        "url": "https://cfs.energy/company/story/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Commonwealth Fusion Systems - Our story (spun out of MIT in 2018; 117 Hospital Rd, Devens, MA)",
        "url": "https://cfs.energy/company/story/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Commonwealth Fusion Systems - Our story (spun out of MIT in 2018; 117 Hospital Rd, Devens, MA)",
        "url": "https://cfs.energy/company/story/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Commonwealth Fusion Systems - Our story (spun out of MIT in 2018; 117 Hospital Rd, Devens, MA)",
        "url": "https://cfs.energy/company/story/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Commonwealth Fusion Systems - Frequently asked questions (spun out of MIT in 2018; based in Devens, Massachusetts; privately raised capital)",
        "url": "https://cfs.energy/company/frequently-asked-questions/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Commonwealth Fusion Systems - Frequently asked questions (spun out of MIT in 2018; based in Devens, Massachusetts; privately raised capital)",
        "url": "https://cfs.energy/company/frequently-asked-questions/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Commonwealth Fusion Systems - Frequently asked questions (spun out of MIT in 2018; based in Devens, Massachusetts; privately raised capital)",
        "url": "https://cfs.energy/company/frequently-asked-questions/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Commonwealth Fusion Systems - Official Site",
        "url": "https://cfs.energy/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "helionenergy": {
    "companyId": "helionenergy",
    "name": "Helion Energy",
    "legalName": "Helion Energy, Inc.",
    "website": "https://www.helionenergy.com/",
    "description": "Fusion energy company developing fusion power plants to generate zero-carbon electricity for the grid.",
    "hqCity": "Everett",
    "hqCountry": "United States",
    "foundedYear": 2013,
    "status": "private",
    "statusDetail": null,
    "sector": "Climate & Energy",
    "subsector": "fusion energy power plants for grid electricity",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - entity record for Helion Energy, Inc., CIK 0001615940",
        "url": "https://data.sec.gov/submissions/CIK0001615940.json",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Helion - Official Site",
        "url": "https://www.helionenergy.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Helion - About",
        "url": "https://www.helionenergy.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Helion - Series G press release, About Helion boilerplate",
        "url": "https://www.helionenergy.com/newsroom/helion-raises-465-million-series-g-funding-round-to-meet-surging-global-demand-for-power",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Helion - About, records 2022 headquarters move from Redmond, WA to Everett, WA",
        "url": "https://www.helionenergy.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Helion - About, records 2022 headquarters move from Redmond, WA to Everett, WA",
        "url": "https://www.helionenergy.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Helion - About, founding by Dr. David Kirtley, Chris Pihl, Dr. John Slough and Dr. George Votroubek",
        "url": "https://www.helionenergy.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Helion - Helion Raises \$465 Million Series G Funding Round, 4 June 2026, a private venture round",
        "url": "https://www.helionenergy.com/newsroom/helion-raises-465-million-series-g-funding-round-to-meet-surging-global-demand-for-power",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Helion Energy, Inc. filing history shows only Form D exempt offerings and no registration statement or periodic reports",
        "url": "https://data.sec.gov/submissions/CIK0001615940.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Helion - About",
        "url": "https://www.helionenergy.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Helion - Official Site, building a fusion power plant to deliver electricity to the grid",
        "url": "https://www.helionenergy.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "redwoodmaterials": {
    "companyId": "redwoodmaterials",
    "name": "Redwood Materials",
    "legalName": "Redwood Materials, Inc.",
    "website": "https://www.redwoodmaterials.com/",
    "description": "Battery recycling and materials company that recovers lithium, nickel, cobalt and copper, manufactures battery components including cathode active material, and deploys energy storage systems.",
    "hqCity": "Sparks",
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "private",
    "statusDetail": null,
    "sector": "Climate & Energy",
    "subsector": "lithium-ion battery recycling, battery materials and energy storage systems",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - entity record for REDWOOD MATERIALS, INC., CIK 0001705348",
        "url": "https://data.sec.gov/submissions/CIK0001705348.json",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Redwood Materials - Official Site, footer reads 2026 Redwood Materials Inc.",
        "url": "https://www.redwoodmaterials.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Redwood Materials - Official Site",
        "url": "https://www.redwoodmaterials.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Redwood Materials - About",
        "url": "https://www.redwoodmaterials.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Redwood Materials - About, address 1201 Battery Blvd and 575 Innovation Way, Sparks NV 89437",
        "url": "https://www.redwoodmaterials.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Redwood Materials - About, address 1201 Battery Blvd and 575 Innovation Way, Sparks NV 89437, USA",
        "url": "https://www.redwoodmaterials.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Redwood Materials - About, Redwood founded 2017",
        "url": "https://www.redwoodmaterials.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - REDWOOD MATERIALS, INC. filing history shows only Form D exempt offerings, no S-1 and no periodic reports",
        "url": "https://data.sec.gov/submissions/CIK0001705348.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "TechCrunch - Too early to talk IPO, Redwood Materials incoming CFO says, 11 May 2026",
        "url": "https://techcrunch.com/2026/05/11/too-early-to-talk-ipo-for-redwood-materials-incoming-cfo-says/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Redwood Materials - About",
        "url": "https://www.redwoodmaterials.com/about/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Redwood Materials - About",
        "url": "https://www.redwoodmaterials.com/about/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "tempusai": {
    "companyId": "tempusai",
    "name": "Tempus AI",
    "legalName": "Tempus AI, Inc.",
    "website": "https://www.tempus.com/",
    "description": "Precision medicine company that performs molecular and genomic profiling, primarily in oncology, and operates a clinical and molecular data platform built on the resulting data.",
    "hqCity": "Chicago",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "public",
    "statusDetail": null,
    "sector": "Diagnostics",
    "subsector": "cancer genomic profiling and clinical-molecular data platform",
    "tickers": [
      "NASDAQ:TEM"
    ],
    "formerNames": [
      "Tempus Labs, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Tempus AI, Inc. Form 10-K for fiscal year ended 31 December 2025, cover page registrant name",
        "url": "https://www.sec.gov/Archives/edgar/data/1717115/000119312526066961/tem-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Tempus - Official Site",
        "url": "https://www.tempus.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Tempus - Official Site",
        "url": "https://www.tempus.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR - Form 10-K cover page, principal executive offices 600 West Chicago Avenue, Suite 510, Chicago, IL 60654",
        "url": "https://www.sec.gov/Archives/edgar/data/1717115/000119312526066961/tem-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR - Form 10-K cover page, principal executive offices 600 West Chicago Avenue, Suite 510, Chicago, IL 60654",
        "url": "https://www.sec.gov/Archives/edgar/data/1717115/000119312526066961/tem-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Form 10-K filed 24 February 2026, securities registered under Section 12(b) and listed on The Nasdaq Stock Market LLC",
        "url": "https://www.sec.gov/Archives/edgar/data/1717115/000119312526066961/tem-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - Form 10-K cover page, Class A common stock, trading symbol TEM, The Nasdaq Stock Market LLC",
        "url": "https://www.sec.gov/Archives/edgar/data/1717115/000119312526066961/tem-20251231.htm",
        "checked": "2026-09-02"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR - entity record CIK 0001717115, tickers TEM, exchanges Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001717115.json",
        "checked": "2026-09-02"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR - entity record CIK 0001717115, formerNames entry Tempus Labs, Inc. from 2017-09-25 to 2023-12-05",
        "url": "https://data.sec.gov/submissions/CIK0001717115.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Tempus - Official Site",
        "url": "https://www.tempus.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Tempus - Official Site",
        "url": "https://www.tempus.com/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "ro": {
    "companyId": "ro",
    "name": "Ro",
    "legalName": "Roman Health Ventures Inc.",
    "website": "https://ro.co/",
    "description": "Direct-to-patient healthcare company that connects patients with US-licensed clinicians online and integrates telehealth, pharmacy, at-home testing, labs and diagnostics.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "private",
    "statusDetail": null,
    "sector": "Digital Health",
    "subsector": "direct-to-patient telehealth with integrated pharmacy and at-home testing",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Ro - Terms of Use, defines Ro as Roman Health Ventures Inc. and its affiliates including Roman Health Medical LLC, Roman Health Pharmacy LLC, Dadi, LLC, and Modern Health Inc.",
        "url": "https://ro.co/terms-of-use/",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - Form D of Roman Health Ventures Inc., CIK 0001706332, New York NY, Delaware, industry group Other Health Care",
        "url": "https://www.sec.gov/Archives/edgar/data/1706332/000114420417026415/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Ro - Official Site",
        "url": "https://ro.co/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Ro - Press, describes Ro as a direct-to-patient healthcare company that integrates telehealth, pharmacy, at-home testing, labs and diagnostics",
        "url": "https://ro.co/press/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Ro - Official Site, telehealth company connecting patients with US-licensed professionals entirely online",
        "url": "https://www.ro.co/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Ro - Careers, headquartered in NYC with additional US locations",
        "url": "https://ro.co/careers/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Ro - Careers, headquartered in NYC with additional US locations",
        "url": "https://ro.co/careers/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SEC EDGAR - Form D filed 2017-05-11 by Roman Health Ventures Inc., year of incorporation 2017, jurisdiction Delaware",
        "url": "https://www.sec.gov/Archives/edgar/data/1706332/000114420417026415/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "SEC EDGAR - Form D filed 2021-03-24 by Roman Health Ventures Inc., year of incorporation 2017",
        "url": "https://www.sec.gov/Archives/edgar/data/1706332/000156761921006809/primary_doc.xml",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Roman Health Ventures Inc. filing history is four Form D exempt private offerings with no registration statement and no periodic reports",
        "url": "https://data.sec.gov/submissions/CIK0001706332.json",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Ro - Press, active company press releases dated April 2026 with no listing or offering announcement",
        "url": "https://ro.co/press/",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Ro - Press",
        "url": "https://ro.co/press/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Ro - Careers, describes ro.OS vertically integrating telehealth, pharmacy, at-home testing, labs and diagnostics",
        "url": "https://ro.co/careers/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "mavenclinic": {
    "companyId": "mavenclinic",
    "name": "Maven Clinic",
    "legalName": "Maven Clinic Co.",
    "website": "https://www.mavenclinic.com/",
    "description": "Virtual care company for women's and family health, covering fertility and family building, maternity, parenting, pediatrics and menopause, sold to employers and health plans and also available direct to consumers.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2014,
    "status": "private",
    "statusDetail": null,
    "sector": "Digital Health",
    "subsector": "virtual care for women's and family health sold to employers and health plans",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - entity record for Maven Clinic Co., CIK 0001643525",
        "url": "https://data.sec.gov/submissions/CIK0001643525.json",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Maven Clinic - Official Site, footer reads 2026 Maven Clinic Co. All rights reserved.",
        "url": "https://www.mavenclinic.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Maven Clinic - Official Site",
        "url": "https://www.mavenclinic.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Maven Clinic - press release, About Maven boilerplate",
        "url": "https://www.mavenclinic.com/post/maven-amazon-fertility-family-building-support",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Maven Clinic - About",
        "url": "https://www.mavenclinic.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Maven Clinic - press release, About Maven boilerplate: Founded in 2014 by CEO Kate Ryder in London and headquartered in New York",
        "url": "https://www.mavenclinic.com/post/maven-amazon-fertility-family-building-support",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Maven Clinic - press release, About Maven boilerplate: headquartered in New York",
        "url": "https://www.mavenclinic.com/post/maven-amazon-fertility-family-building-support",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Maven Clinic - About, Kate Ryder founded Maven in 2014",
        "url": "https://www.mavenclinic.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Maven Clinic - press release, About Maven boilerplate: Founded in 2014 by CEO Kate Ryder",
        "url": "https://www.mavenclinic.com/post/maven-amazon-fertility-family-building-support",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Maven Clinic - Series F announcement, a private venture round",
        "url": "https://www.mavenclinic.com/post/maven-series-f-announcement",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Maven Clinic Co. filing history shows only Form D exempt offerings with no registration statement and no periodic reports",
        "url": "https://data.sec.gov/submissions/CIK0001643525.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Maven Clinic - About",
        "url": "https://www.mavenclinic.com/about",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Maven Clinic - press release, About Maven boilerplate",
        "url": "https://www.mavenclinic.com/post/maven-amazon-fertility-family-building-support",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "devotedhealth": {
    "companyId": "devotedhealth",
    "name": "Devoted Health",
    "legalName": "Devoted Health, Inc.",
    "website": "https://www.devoted.com/",
    "description": "Medicare Advantage health plan operator that also delivers clinical care through its affiliated medical group, Devoted Medical.",
    "hqCity": "Waltham",
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "private",
    "statusDetail": null,
    "sector": "Healthcare",
    "subsector": "Medicare Advantage health plans with an affiliated medical group",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - entity record for Devoted Health, Inc., CIK 0001719459",
        "url": "https://data.sec.gov/submissions/CIK0001719459.json",
        "checked": "2026-09-02"
      },
      {
        "field": "legalName",
        "label": "Devoted Health - Official Site, footer reads 2026 Devoted Health, Inc.",
        "url": "https://www.devoted.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "website",
        "label": "Devoted Health - Official Site",
        "url": "https://www.devoted.com/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Devoted Health - About Us",
        "url": "https://www.devoted.com/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "description",
        "label": "Devoted Health - 2026 growth announcement, describes Devoted health plans, Devoted Medical clinical services and its technology platform",
        "url": "https://www.devoted.com/resources/2026-growth/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCity",
        "label": "Devoted Health - Careers: Our headquarters are just outside Boston in Waltham, MA",
        "url": "https://www.devoted.com/careers/",
        "checked": "2026-09-02"
      },
      {
        "field": "hqCountry",
        "label": "Devoted Health - Careers: Our headquarters are just outside Boston in Waltham, MA",
        "url": "https://www.devoted.com/careers/",
        "checked": "2026-09-02"
      },
      {
        "field": "foundedYear",
        "label": "Devoted Health - About Us: Todd and Ed Park founded Devoted Health in 2017",
        "url": "https://www.devoted.com/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "Devoted Health - 2026 growth announcement, 30 January 2026, reports \$366 million of Series F and Series F-Prime private equity funding",
        "url": "https://www.devoted.com/resources/2026-growth/",
        "checked": "2026-09-02"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Devoted Health, Inc. filing history shows a single Form D exempt offering with no registration statement and no periodic reports",
        "url": "https://data.sec.gov/submissions/CIK0001719459.json",
        "checked": "2026-09-02"
      },
      {
        "field": "sector",
        "label": "Devoted Health - About Us",
        "url": "https://www.devoted.com/about-us/",
        "checked": "2026-09-02"
      },
      {
        "field": "subsector",
        "label": "Devoted Health - 2026 growth announcement",
        "url": "https://www.devoted.com/resources/2026-growth/",
        "checked": "2026-09-02"
      }
    ],
    "lastChecked": "2026-09-02"
  },
  "affirm": {
    "companyId": "affirm",
    "name": "Affirm",
    "legalName": "Affirm Holdings, Inc.",
    "website": "https://www.affirm.com",
    "description": "Consumer payment network offering pay-over-time financing at checkout, the Affirm Card and a savings account, connecting consumers, merchants and funding partners.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "public",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "consumer pay-over-time payment network",
    "tickers": [
      "NASDAQ:AFRM"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Affirm Holdings, Inc. - Form 10-K for fiscal year ended June 30, 2026, cover page",
        "url": "https://investors.affirm.com/static-files/1cba8462-bfcd-40e9-9b7a-7674cb7162b8",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions data for CIK 0001820953 (Affirm Holdings, Inc.)",
        "url": "https://data.sec.gov/submissions/CIK0001820953.json",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Affirm - Official Site",
        "url": "https://www.affirm.com",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Affirm Holdings, Inc. - Form 10-K, Item 1 Business",
        "url": "https://investors.affirm.com/static-files/1cba8462-bfcd-40e9-9b7a-7674cb7162b8",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Affirm Holdings, Inc. - Form 10-K cover page, principal executive offices: 221 Main Street, Floor 6, San Francisco, California 94105",
        "url": "https://investors.affirm.com/static-files/1cba8462-bfcd-40e9-9b7a-7674cb7162b8",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Affirm Holdings, Inc. - Form 10-K cover page, principal executive offices: 221 Main Street, Floor 6, San Francisco, California 94105",
        "url": "https://investors.affirm.com/static-files/1cba8462-bfcd-40e9-9b7a-7674cb7162b8",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Affirm Holdings, Inc. - Form 10-K, Item 1 Business: \"Affirm was founded in 2012 with a mission to deliver honest financial products that improve lives.\"",
        "url": "https://investors.affirm.com/static-files/1cba8462-bfcd-40e9-9b7a-7674cb7162b8",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Affirm Holdings, Inc. - Form 10-K cover page, securities registered under Section 12(b) on The Nasdaq Global Select Market",
        "url": "https://investors.affirm.com/static-files/1cba8462-bfcd-40e9-9b7a-7674cb7162b8",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions data for CIK 0001820953 listing exchange Nasdaq and ticker AFRM",
        "url": "https://data.sec.gov/submissions/CIK0001820953.json",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "Affirm Holdings, Inc. - Form 10-K cover page: Class A common stock, trading symbol AFRM, The Nasdaq Global Select Market",
        "url": "https://investors.affirm.com/static-files/1cba8462-bfcd-40e9-9b7a-7674cb7162b8",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions data for CIK 0001820953 listing exchange Nasdaq and ticker AFRM",
        "url": "https://data.sec.gov/submissions/CIK0001820953.json",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Affirm Holdings, Inc. - Form 10-K, Item 1 Business",
        "url": "https://investors.affirm.com/static-files/1cba8462-bfcd-40e9-9b7a-7674cb7162b8",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Affirm Holdings, Inc. - Form 10-K, Item 1 Business",
        "url": "https://investors.affirm.com/static-files/1cba8462-bfcd-40e9-9b7a-7674cb7162b8",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "toast": {
    "companyId": "toast",
    "name": "Toast",
    "legalName": "Toast, Inc.",
    "website": "https://pos.toasttab.com",
    "description": "Cloud-based restaurant point of sale and management platform combining hardware, software and integrated payment processing for restaurant and retail businesses.",
    "hqCity": "Boston",
    "hqCountry": "United States",
    "foundedYear": 2011,
    "status": "public",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "restaurant point of sale and business management platform",
    "tickers": [
      "NYSE:TOST"
    ],
    "formerNames": [
      "Opti Systems, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Toast, Inc. - Form 10-Q for the quarter ended June 30, 2026, cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1650164/000165016426000164/tost-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions data for CIK 0001650164 (Toast, Inc.)",
        "url": "https://data.sec.gov/submissions/CIK0001650164.json",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Toast - Official Site, About page",
        "url": "https://pos.toasttab.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Toast - Official Site, About page",
        "url": "https://pos.toasttab.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Toast, Inc. - Form 10-Q cover page, principal executive offices: 333 Summer Street, Boston, Massachusetts 02210",
        "url": "https://www.sec.gov/Archives/edgar/data/1650164/000165016426000164/tost-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Toast, Inc. - Form 10-Q cover page, principal executive offices: 333 Summer Street, Boston, Massachusetts 02210",
        "url": "https://www.sec.gov/Archives/edgar/data/1650164/000165016426000164/tost-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Toast, Inc. - Form S-1 (2021), founders' letter: \"Back in 2011, we hoped to take our passion for small business and build a technology platform...\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1650164/000119312521258447/d166297ds1.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Toast, Inc. - Form 424B4 prospectus (2021), Corporate Information: \"We were incorporated under the laws of Delaware in December 2011 under the name Opti Systems, Inc.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1650164/000119312521279379/d166297d424b4.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Toast, Inc. - Form 10-Q cover page, securities registered under Section 12(b) on the New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1650164/000165016426000164/tost-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions data for CIK 0001650164 listing exchange NYSE and ticker TOST",
        "url": "https://data.sec.gov/submissions/CIK0001650164.json",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "Toast, Inc. - Form 10-Q cover page: Class A common stock, trading symbol TOST, New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1650164/000165016426000164/tost-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions data for CIK 0001650164 listing exchange NYSE and ticker TOST",
        "url": "https://data.sec.gov/submissions/CIK0001650164.json",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "Toast, Inc. - Form S-1 (2021), Corporate Information: \"We were incorporated under the laws of Delaware in December 2011 under the name Opti Systems, Inc. We changed our name to Toast, Inc. in May 2012.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1650164/000119312521258447/d166297ds1.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "Toast, Inc. - Form 424B4 prospectus (2021), Corporate Information, same sentence confirmed verbatim on a second pass",
        "url": "https://www.sec.gov/Archives/edgar/data/1650164/000119312521279379/d166297d424b4.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Toast - Official Site, About page describing the restaurant point of sale and management system, hardware and software products",
        "url": "https://pos.toasttab.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Toast - Official Site, About page",
        "url": "https://pos.toasttab.com/about",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "marqeta": {
    "companyId": "marqeta",
    "name": "Marqeta",
    "legalName": "Marqeta, Inc.",
    "website": "https://www.marqeta.com",
    "description": "Card issuing platform providing card issuing, payment processing and program management for companies embedding card payments into their products.",
    "hqCity": "Oakland",
    "hqCountry": "United States",
    "foundedYear": 2009,
    "status": "public",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "card issuing and payment processing platform",
    "tickers": [
      "NASDAQ:MQ"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Marqeta, Inc. - Form 10-Q for the quarter ended June 30, 2026, cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1522540/000152254026000063/mq-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions data for CIK 0001522540 (Marqeta, Inc.)",
        "url": "https://data.sec.gov/submissions/CIK0001522540.json",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Marqeta - Official Site, About Us",
        "url": "https://www.marqeta.com/company/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Marqeta - Official Site, About Us",
        "url": "https://www.marqeta.com/company/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Marqeta, Inc. - Form 10-Q cover page, principal executive offices: 180 Grand Avenue, 6th Floor, Oakland, California 94612",
        "url": "https://www.sec.gov/Archives/edgar/data/1522540/000152254026000063/mq-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Marqeta, Inc. - Form 10-Q cover page, principal executive offices: 180 Grand Avenue, 6th Floor, Oakland, California 94612",
        "url": "https://www.sec.gov/Archives/edgar/data/1522540/000152254026000063/mq-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Marqeta - Official Site, About Us: \"In 2009, our Founder and Executive Chairman Jason Gardner had a vision to simplify payments.\"",
        "url": "https://www.marqeta.com/company/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Marqeta, Inc. - Form 10-Q cover page, securities registered under Section 12(b) on Nasdaq",
        "url": "https://www.sec.gov/Archives/edgar/data/1522540/000152254026000063/mq-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions data for CIK 0001522540 listing exchange Nasdaq and ticker MQ",
        "url": "https://data.sec.gov/submissions/CIK0001522540.json",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "Marqeta, Inc. - Form 10-Q cover page: Class A common stock, trading symbol MQ, Nasdaq",
        "url": "https://www.sec.gov/Archives/edgar/data/1522540/000152254026000063/mq-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions data for CIK 0001522540 listing exchange Nasdaq and ticker MQ",
        "url": "https://data.sec.gov/submissions/CIK0001522540.json",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Marqeta - Official Site, About Us describing the card issuing platform",
        "url": "https://www.marqeta.com/company/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Marqeta - Official Site, About Us",
        "url": "https://www.marqeta.com/company/about-us",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "checkoutcom": {
    "companyId": "checkoutcom",
    "name": "Checkout.com",
    "legalName": "Checkout Ltd",
    "website": "https://www.checkout.com",
    "description": "End-to-end payment services provider enabling businesses to accept online payments, disburse funds and manage acquiring, fraud detection and treasury.",
    "hqCity": "London",
    "hqCountry": "United Kingdom",
    "foundedYear": 2012,
    "status": "private",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "end-to-end payment services provider",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "CHECKOUT LTD, company number 08037323 - Companies House register",
        "url": "https://find-and-update.company-information.service.gov.uk/company/08037323",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Checkout.com - Official Site",
        "url": "https://www.checkout.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Checkout.com - Official Site, product and platform description",
        "url": "https://www.checkout.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Checkout.com - Official newsroom release dated 26th September 2025, dateline \"LONDON, UK\"",
        "url": "https://www.checkout.com/newsroom/checkout-com-accelerates-towards-full-year-profitability-and-announces-employee-share-buy-back-and-a-new-12bn-valuation",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "CHECKOUT LTD - Companies House register, registered office address: Wenlock Works, Shepherdess Walk, London, England, N1 7BQ",
        "url": "https://find-and-update.company-information.service.gov.uk/company/08037323",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "CHECKOUT LTD - Companies House register, registered office address in London, England",
        "url": "https://find-and-update.company-information.service.gov.uk/company/08037323",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Checkout.com - Official newsroom release, dateline \"LONDON, UK\"",
        "url": "https://www.checkout.com/newsroom/checkout-com-accelerates-towards-full-year-profitability-and-announces-employee-share-buy-back-and-a-new-12bn-valuation",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "CHECKOUT LTD - Companies House register, incorporated on 19 April 2012",
        "url": "https://find-and-update.company-information.service.gov.uk/company/08037323",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "CHECKOUT LTD - Companies House register: company type \"Private limited Company\", status Active",
        "url": "https://find-and-update.company-information.service.gov.uk/company/08037323",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Checkout.com - Official newsroom release announcing an employee share buy back at a new \$12 billion valuation, a private-company liquidity event rather than a public listing",
        "url": "https://www.checkout.com/newsroom/checkout-com-accelerates-towards-full-year-profitability-and-announces-employee-share-buy-back-and-a-new-12bn-valuation",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "CHECKOUT LTD - Companies House persons with significant control: Mr Guillaume Georges Pousaz holds significant influence or control",
        "url": "https://find-and-update.company-information.service.gov.uk/company/08037323/persons-with-significant-control",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Checkout.com - Official Site describing the company as an end-to-end Payment Services Provider",
        "url": "https://www.checkout.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Checkout.com - Official Site",
        "url": "https://www.checkout.com/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "airwallex": {
    "companyId": "airwallex",
    "name": "Airwallex",
    "legalName": null,
    "website": "https://www.airwallex.com",
    "description": "Financial platform providing global business accounts, cross-border payments, payment acceptance, corporate cards, billing and spend management for businesses.",
    "hqCity": null,
    "hqCountry": null,
    "foundedYear": 2015,
    "status": "private",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "global business accounts, cross-border payments and spend management",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Airwallex - Official Site, Who We Are",
        "url": "https://www.airwallex.com/en-us/who-we-are",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Airwallex - Official newsroom release, About Airwallex boilerplate listing payment acceptance, billing, global accounts, corporate cards and spend management",
        "url": "https://www.airwallex.com/global/newsroom/airwallex-secures-320-million-in-series-h-funding-valuation-hits-11-billion",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Airwallex - Official Site, Who We Are",
        "url": "https://www.airwallex.com/en-us/who-we-are",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Airwallex - Official Site, Who We Are: \"In 2015, our CEO Jack Zhang and a few fellow entrepreneurs launched a coffee shop in Melbourne.\"",
        "url": "https://www.airwallex.com/en-us/who-we-are",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Airwallex - Official newsroom release, About Airwallex boilerplate: \"Founded in Melbourne in 2015\"",
        "url": "https://www.airwallex.com/global/newsroom/airwallex-secures-320-million-in-series-h-funding-valuation-hits-11-billion",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Airwallex - Official newsroom release dated 25 June 2026 announcing a \$320 million Series H private funding round at an \$11 billion valuation, led by Addition",
        "url": "https://www.airwallex.com/global/newsroom/airwallex-secures-320-million-in-series-h-funding-valuation-hits-11-billion",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Airwallex - Official newsroom release announcing a \$330m Series G private round at an \$8bn valuation",
        "url": "https://www.airwallex.com/global/newsroom/awx-raises-usd330m-series-g-at-usd8b-valuation-establishes-sf-as-dual-global-hq",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Airwallex - Official newsroom release, About Airwallex boilerplate describing global banking and financial operations products",
        "url": "https://www.airwallex.com/global/newsroom/airwallex-secures-320-million-in-series-h-funding-valuation-hits-11-billion",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Airwallex - Official newsroom release, About Airwallex boilerplate",
        "url": "https://www.airwallex.com/global/newsroom/airwallex-secures-320-million-in-series-h-funding-valuation-hits-11-billion",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "circle": {
    "companyId": "circle",
    "name": "Circle",
    "legalName": "Circle Internet Group, Inc.",
    "website": "https://www.circle.com",
    "description": "Financial technology company that issues the USDC and EURC stablecoins and operates blockchain-based payment and developer infrastructure, including the Circle Payments Network and the Arc blockchain.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2013,
    "status": "public",
    "statusDetail": null,
    "sector": "Crypto",
    "subsector": "regulated stablecoin issuer and blockchain financial infrastructure",
    "tickers": [
      "NYSE:CRCL"
    ],
    "formerNames": [
      "Circle Internet Financial Limited"
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Circle Internet Group, Inc. - Form 10-Q for the quarter ended June 30, 2026, cover page: \"CIRCLE INTERNET GROUP, INC.\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000248/crcl-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Circle Internet Group, Inc. - Form 10-K for fiscal year 2025, cover page",
        "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000062/crcl-20251231.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions data for CIK 0001876042 (Circle Internet Group, Inc.)",
        "url": "https://data.sec.gov/submissions/CIK0001876042.json",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Circle - Official Site",
        "url": "https://www.circle.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Circle Internet Group, Inc. - Form 10-K, Item 1 Business describing the full-stack internet financial platform anchored by USDC",
        "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000062/crcl-20251231.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Circle - Official Site listing USDC, EURC, Circle Payments Network and Arc",
        "url": "https://www.circle.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Circle Internet Group, Inc. - Form 10-Q cover page, principal executive offices: One World Trade Center, New York, NY 10007",
        "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000248/crcl-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Circle Internet Group, Inc. - Form 10-K cover page, One World Trade Center, New York, NY 10007",
        "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000062/crcl-20251231.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Circle Internet Group, Inc. - Form 10-Q cover page, principal executive offices in New York, NY",
        "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000248/crcl-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Circle Internet Group, Inc. - Form 10-K, Item 1 Business: \"We were founded in 2013\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000062/crcl-20251231.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Circle Internet Group, Inc. - Form 10-Q cover page, securities registered under Section 12(b) on the New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000248/crcl-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions data for CIK 0001876042 listing exchange NYSE and ticker CRCL",
        "url": "https://data.sec.gov/submissions/CIK0001876042.json",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "Circle Internet Group, Inc. - Form 10-Q cover page: Class A common stock, par value \$0.0001 per share, trading symbol CRCL, New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000248/crcl-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "Circle Internet Group, Inc. - Form 10-K cover page, trading symbol CRCL, New York Stock Exchange",
        "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000062/crcl-20251231.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "Circle Internet Group, Inc. - Form S-1 (April 2025): \"On July 1, 2024, we consummated an Irish High Court-approved scheme of arrangement, pursuant to which issued ordinary shares and preferred shares in the capital of Circle Internet Financial Limited were cancelled and, in connection with such cancellation, Circle Internet Group, Inc., a Delaware corporation, issued an equivalent number of shares...\"",
        "url": "https://www.sec.gov/Archives/edgar/data/1876042/000119312525070481/d737521ds1.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR submissions data for CIK 0001876042, formerNames entry \"Circle Internet Financial Ltd\" (12/13/2023 to 4/12/2024)",
        "url": "https://data.sec.gov/submissions/CIK0001876042.json",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Circle Internet Group, Inc. - Form 10-K, Item 1 Business describing USDC stablecoin issuance and onchain infrastructure",
        "url": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000062/crcl-20251231.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Circle - Official Site describing itself as a regulated stablecoin issuer with USDC, EURC, USYC and the Arc blockchain",
        "url": "https://www.circle.com/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "chainalysis": {
    "companyId": "chainalysis",
    "name": "Chainalysis",
    "legalName": "Chainalysis Inc.",
    "website": "https://www.chainalysis.com",
    "description": "Blockchain data platform providing data, software, services and research on cryptocurrency activity to government agencies, exchanges, financial institutions and cybersecurity companies.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2014,
    "status": "private",
    "statusDetail": null,
    "sector": "Crypto",
    "subsector": "blockchain data and investigations software",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Chainalysis - Privacy Policy (names Chainalysis Inc. and its address)",
        "url": "https://www.chainalysis.com/privacy-policy/",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Chainalysis - Official Company Page",
        "url": "https://www.chainalysis.com/company/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Chainalysis - Official Company Page",
        "url": "https://www.chainalysis.com/company/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Chainalysis - Series F announcement boilerplate",
        "url": "https://www.chainalysis.com/blog/series-f/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Chainalysis - Privacy Policy (114 5th Avenue, 19th Floor, New York, NY 10011)",
        "url": "https://www.chainalysis.com/privacy-policy/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Chainalysis - Privacy Policy (New York, NY, United States address)",
        "url": "https://www.chainalysis.com/privacy-policy/",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Chainalysis - Official Company Page (co-founded in 2014)",
        "url": "https://www.chainalysis.com/company/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Chainalysis - Series F private funding announcement",
        "url": "https://www.chainalysis.com/blog/series-f/",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Chainalysis - Official Company Page (blockchain data platform)",
        "url": "https://www.chainalysis.com/company/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Chainalysis - Official Company Page (blockchain data platform)",
        "url": "https://www.chainalysis.com/company/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "fireblocks": {
    "companyId": "fireblocks",
    "name": "Fireblocks",
    "legalName": "Fireblocks Inc.",
    "website": "https://www.fireblocks.com",
    "description": "Enterprise platform providing secure infrastructure for moving, storing and issuing digital assets, used by exchanges, custodians, banks, trading desks and other financial institutions.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "Crypto",
    "subsector": "digital asset custody and transfer infrastructure",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Fireblocks - Privacy Policy (Fireblocks Inc. and its affiliates)",
        "url": "https://www.fireblocks.com/privacy-policy/",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Fireblocks - Official About Page",
        "url": "https://www.fireblocks.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Fireblocks - Series E announcement, About Fireblocks boilerplate",
        "url": "https://www.prnewswire.com/news-releases/fireblocks-raises-550-million-in-series-e-funding-to-become-the-highest-valued-digital-asset-infrastructure-provider-301469630.html",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Fireblocks - BlockFold acquisition announcement, About Fireblocks boilerplate",
        "url": "https://www.prnewswire.com/news-releases/fireblocks-acquires-tokenization-firm-blockfold-to-serve-industrys-largest-banks--financial-institutions-301942560.html",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Fireblocks - Series E announcement, company-issued dateline NEW YORK",
        "url": "https://www.prnewswire.com/news-releases/fireblocks-raises-550-million-in-series-e-funding-to-become-the-highest-valued-digital-asset-infrastructure-provider-301469630.html",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Fireblocks - BlockFold acquisition announcement, company-issued dateline NEW YORK",
        "url": "https://www.prnewswire.com/news-releases/fireblocks-acquires-tokenization-firm-blockfold-to-serve-industrys-largest-banks--financial-institutions-301942560.html",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Fireblocks - Series E announcement, company-issued dateline NEW YORK",
        "url": "https://www.prnewswire.com/news-releases/fireblocks-raises-550-million-in-series-e-funding-to-become-the-highest-valued-digital-asset-infrastructure-provider-301469630.html",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Fireblocks - Series E private funding announcement",
        "url": "https://www.prnewswire.com/news-releases/fireblocks-raises-550-million-in-series-e-funding-to-become-the-highest-valued-digital-asset-infrastructure-provider-301469630.html",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Fireblocks - Official About Page (digital asset security infrastructure)",
        "url": "https://www.fireblocks.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Fireblocks - Official About Page (digital asset security infrastructure)",
        "url": "https://www.fireblocks.com/about",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "coalition": {
    "companyId": "coalition",
    "name": "Coalition",
    "legalName": "Coalition, Inc.",
    "website": "https://www.coalitioninc.com",
    "description": "Cyber insurance and cybersecurity company that combines insurance coverage with security tools and incident response services for businesses.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "private",
    "statusDetail": null,
    "sector": "Fintech",
    "subsector": "cyber insurance and cyber risk management",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Coalition - Help Center, Physical Address Update for Coalition, Inc. and Coalition Insurance Solutions, Inc.",
        "url": "https://help.coalitioninc.com/hc/en-us/articles/47793213260059-Physical-Address-Update-Coalition-Inc-Coalition-Insurance-Solutions-Inc",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Coalition - Licenses page (Coalition Insurance Solutions, Inc. described as wholly-owned U.S. subsidiary)",
        "url": "https://www.coalitioninc.com/licenses",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Coalition - Official About Page",
        "url": "https://www.coalitioninc.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Coalition - Wirespeed acquisition announcement, About Coalition boilerplate",
        "url": "https://www.coalitioninc.com/announcements/coalition-announces-acquisition-of-wirespeed",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Coalition - Why we founded Coalition (first-party founder post)",
        "url": "https://www.coalitioninc.com/blog/why-we-founded-coalition",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Coalition - Help Center address update (1 Embarcadero Center, Suite 1200, San Francisco, CA 94111, effective March 2026)",
        "url": "https://help.coalitioninc.com/hc/en-us/articles/47793213260059-Physical-Address-Update-Coalition-Inc-Coalition-Insurance-Solutions-Inc",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Coalition - Series E announcement (headquartered in San Francisco)",
        "url": "https://www.coalitioninc.com/announcements/Coalition-Closes-205-Million-Series-E-Valuing-the-Cyber-Insurance-Provider-At-More-Than-3-5-Billion",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Coalition - Help Center address update (San Francisco, CA, United States)",
        "url": "https://help.coalitioninc.com/hc/en-us/articles/47793213260059-Physical-Address-Update-Coalition-Inc-Coalition-Insurance-Solutions-Inc",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Coalition - Series E announcement (founded in 2017 by Joshua Motta and John Hering)",
        "url": "https://www.coalitioninc.com/announcements/Coalition-Closes-205-Million-Series-E-Valuing-the-Cyber-Insurance-Provider-At-More-Than-3-5-Billion",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Coalition - Why we founded Coalition (first-party founder post, 2017)",
        "url": "https://www.coalitioninc.com/blog/why-we-founded-coalition",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Coalition - Series E private funding announcement",
        "url": "https://www.coalitioninc.com/announcements/Coalition-Closes-205-Million-Series-E-Valuing-the-Cyber-Insurance-Provider-At-More-Than-3-5-Billion",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Coalition - Wirespeed acquisition announcement, November 2025, company operating independently",
        "url": "https://www.coalitioninc.com/announcements/coalition-announces-acquisition-of-wirespeed",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Coalition - Licenses page listing Coalition Insurance Company and Coalition Insurance Solutions, Inc. producer licences",
        "url": "https://www.coalitioninc.com/licenses",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Coalition - Wirespeed acquisition announcement, About Coalition boilerplate",
        "url": "https://www.coalitioninc.com/announcements/coalition-announces-acquisition-of-wirespeed",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "opensea": {
    "companyId": "opensea",
    "name": "OpenSea",
    "legalName": "Ozone Networks, Inc.",
    "website": "https://opensea.io",
    "description": "Operator of a non-custodial marketplace for non-fungible tokens and other digital assets, supporting trading across multiple blockchains.",
    "hqCity": "Miami",
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "private",
    "statusDetail": null,
    "sector": "Crypto",
    "subsector": "NFT and digital asset marketplace",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "OpenSea - Terms of Service (OpenSea is owned and operated by Ozone Networks, Inc., doing business as OpenSea)",
        "url": "https://opensea.io/tos",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "OpenSea - Learn: Who is OpenSea (Ozone Networks, Inc copyright)",
        "url": "https://opensea.io/learn/nft/who-is-opensea",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "OpenSea - Official Site Terms of Service",
        "url": "https://opensea.io/tos",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "OpenSea - Learn: Who is OpenSea (first non-custodial marketplace for digital assets, multi-chain)",
        "url": "https://opensea.io/learn/nft/who-is-opensea",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "OpenSea - Learn: Who is OpenSea (OpenSea is headquartered in Miami, Florida)",
        "url": "https://opensea.io/learn/nft/who-is-opensea",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "OpenSea - Terms of Service (66 W Flagler St, Suite 929, Miami, FL 33130, USA)",
        "url": "https://opensea.io/tos",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "OpenSea - Learn: Who is OpenSea (Miami, Florida, United States)",
        "url": "https://opensea.io/learn/nft/who-is-opensea",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "OpenSea - Learn: Who is OpenSea (founded in 2017 by Devin Finzer and Alex Atallah)",
        "url": "https://opensea.io/learn/nft/who-is-opensea",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "CoinDesk - NFT Marketplace OpenSea Valued at \$13.3B in \$300M private funding round",
        "url": "https://www.coindesk.com/business/2022/01/05/nft-marketplace-opensea-valued-at-133b-in-300m-funding-round-report",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "CoinDesk - OpenSea Confirms Q1 Launch for SEA Token (2025 coverage of the company as a privately held business launching a token, not an equity offering)",
        "url": "https://www.coindesk.com/business/2025/10/18/opensea-confirms-q1-launch-for-sea-token-with-half-of-supply-allocated-to-community",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "OpenSea - Learn: Who is OpenSea (marketplace for NFTs and digital assets)",
        "url": "https://opensea.io/learn/nft/who-is-opensea",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "OpenSea - Learn: Who is OpenSea (non-custodial marketplace for digital assets)",
        "url": "https://opensea.io/learn/nft/who-is-opensea",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "wiz": {
    "companyId": "wiz",
    "name": "Wiz",
    "legalName": "Wiz, Inc.",
    "website": "https://www.wiz.io",
    "description": "Cloud and AI security platform that connects code, cloud and runtime into a single shared context so organisations can find and remove risk in their cloud environments. Operates as part of Google Cloud.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2020,
    "status": "acquired",
    "statusDetail": "Acquired by Google in 2026",
    "sector": "Cybersecurity",
    "subsector": "cloud and AI security platform",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Google Cloud - Cloud Acquisitions Privacy Notice (Affiliated Google Acquisition: Wiz, Inc.; effective March 11, 2026)",
        "url": "https://cloud.google.com/terms/cloud-acquisitions-privacy-notice",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Wiz - Official Site",
        "url": "https://www.wiz.io",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Google Cloud Press Corner - Google Completes Acquisition of Wiz",
        "url": "https://www.googlecloudpresscorner.com/2026-03-11-Google-Completes-Acquisition-of-Wiz",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Google - Google completes acquisition of Wiz (blog.google)",
        "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/wiz-acquisition/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Google Cloud Press Corner - Google Completes Acquisition of Wiz (Wiz headquartered in New York)",
        "url": "https://www.googlecloudpresscorner.com/2026-03-11-Google-Completes-Acquisition-of-Wiz",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Alphabet Investor Relations - Google Completes Acquisition of Wiz (headquartered in New York)",
        "url": "https://abc.xyz/investor/news/news-details/2026/Google-Completes-Acquisition-of-Wiz-2026-ta7OaU2uA0/default.aspx",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Alphabet Investor Relations - Google Completes Acquisition of Wiz (New York, United States)",
        "url": "https://abc.xyz/investor/news/news-details/2026/Google-Completes-Acquisition-of-Wiz-2026-ta7OaU2uA0/default.aspx",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "TechCrunch - Wiz raises \$1B at a \$12B valuation (founded four years before May 2024 by Rappaport, Ami Luttwak, Yinon Costica and Roy Reznik)",
        "url": "https://techcrunch.com/2024/05/07/wiz-raises-1b-at-a-12b-valuation-to-expand-its-cloud-security-platform-through-acquisitions",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Alphabet Investor Relations - Google Completes Acquisition of Wiz, March 11, 2026",
        "url": "https://abc.xyz/investor/news/news-details/2026/Google-Completes-Acquisition-of-Wiz-2026-ta7OaU2uA0/default.aspx",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Google - we announced we've closed the acquisition of Wiz (blog.google, March 11, 2026)",
        "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/wiz-acquisition/",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Google Cloud Press Corner - Google Completes Acquisition of Wiz, March 11, 2026",
        "url": "https://www.googlecloudpresscorner.com/2026-03-11-Google-Completes-Acquisition-of-Wiz",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Alphabet Investor Relations - Google Completes Acquisition of Wiz, completion dated March 11, 2026",
        "url": "https://abc.xyz/investor/news/news-details/2026/Google-Completes-Acquisition-of-Wiz-2026-ta7OaU2uA0/default.aspx",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Google Cloud Press Corner - Wiz described as a cloud and AI security platform",
        "url": "https://www.googlecloudpresscorner.com/2026-03-11-Google-Completes-Acquisition-of-Wiz",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Google - Wiz acquisition post describing the security platform across code, cloud and runtime",
        "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/wiz-acquisition/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "vanta": {
    "companyId": "vanta",
    "name": "Vanta",
    "legalName": "Vanta Inc.",
    "website": "https://www.vanta.com",
    "description": "Trust management platform that automates security compliance and evidence collection for standards including SOC 2, ISO 27001, HIPAA, PCI and GDPR.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2018,
    "status": "private",
    "statusDetail": null,
    "sector": "Cybersecurity",
    "subsector": "security compliance automation and trust management",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Vanta - Privacy Policy (Vanta Inc., 655 Montgomery Street, San Francisco, CA 94111)",
        "url": "https://www.vanta.com/privacy",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Vanta - Official About Page",
        "url": "https://www.vanta.com/company/about",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Vanta - Official About Page (compliance with SOC 2, ISO 27001, HIPAA, PCI and GDPR)",
        "url": "https://www.vanta.com/company/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Vanta - Official About Page (headquarters San Francisco, USA)",
        "url": "https://www.vanta.com/company/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Vanta - Privacy Policy (655 Montgomery Street, San Francisco, CA 94111)",
        "url": "https://www.vanta.com/privacy",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Vanta - Official About Page (San Francisco, USA)",
        "url": "https://www.vanta.com/company/about",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Vanta - Official About Page (founded 2018)",
        "url": "https://www.vanta.com/company/about",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Vanta - Announcing Vanta's \$150 million Series D, July 23, 2025 (private round)",
        "url": "https://www.vanta.com/resources/vanta-announces-series-d",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Business Wire - Vanta Raises \$150M Series D, July 23, 2025 (company-issued)",
        "url": "https://www.businesswire.com/news/home/20250723901336/en/Vanta-Raises-\$150M-Series-D-to-Power-the-Future-of-AI-Driven-Trust",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Vanta - Official About Page (security compliance and trust platform)",
        "url": "https://www.vanta.com/company/about",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Vanta - Official About Page (Agentic Trust Platform, compliance automation)",
        "url": "https://www.vanta.com/company/about",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "snyk": {
    "companyId": "snyk",
    "name": "Snyk",
    "legalName": "Snyk Limited",
    "website": "https://snyk.io",
    "description": "Developer security company whose platform finds and fixes vulnerabilities in code, open source dependencies, containers and cloud infrastructure.",
    "hqCity": "Boston",
    "hqCountry": "United States",
    "foundedYear": 2015,
    "status": "private",
    "statusDetail": null,
    "sector": "Cybersecurity",
    "subsector": "developer security and application security",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Snyk - Terms of Service (contracting entities)",
        "url": "https://snyk.io/policies/terms-of-service/",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Companies House - SNYK LIMITED, company number 09677925",
        "url": "https://find-and-update.company-information.service.gov.uk/company/09677925",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Snyk - official site footer, Snyk Limited Registered in England and Wales",
        "url": "https://snyk.io/",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Snyk - Official Site",
        "url": "https://snyk.io/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Snyk - About",
        "url": "https://snyk.io/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Snyk - About, 100 Summer St, Floor 7 Boston, MA 02110 USA",
        "url": "https://snyk.io/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Snyk - About, 100 Summer St, Floor 7 Boston, MA 02110 USA",
        "url": "https://snyk.io/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Snyk - About, Founded in 2015",
        "url": "https://snyk.io/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Companies House - SNYK LIMITED incorporated 9 July 2015",
        "url": "https://find-and-update.company-information.service.gov.uk/company/09677925",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Companies House - SNYK LIMITED status Active, private limited company",
        "url": "https://find-and-update.company-information.service.gov.uk/company/09677925",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR full-text search - no Snyk registration statement or listing filing 2024-01-01 to 2026-09-03",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Snyk%22&forms=S-1,424B4,8-A12B&dateRange=custom&startdt=2024-01-01&enddt=2026-09-03",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Snyk - About, security across code, dependencies, containers and cloud infrastructure",
        "url": "https://snyk.io/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Snyk - About, developer-first tooling for security",
        "url": "https://snyk.io/about/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "1password": {
    "companyId": "1password",
    "name": "1Password",
    "legalName": "AgileBits Inc.",
    "website": "https://1password.com",
    "description": "Password management and identity security company providing credential, secrets and access management software for individuals, businesses and developers.",
    "hqCity": "Toronto",
    "hqCountry": "Canada",
    "foundedYear": 2005,
    "status": "private",
    "statusDetail": null,
    "sector": "Cybersecurity",
    "subsector": "password management and identity security",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "1Password - Terms of Service, operated by AgileBits Inc.",
        "url": "https://1password.com/legal/terms-of-service",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "1Password - Privacy Policy, AgileBits Inc. doing business as 1Password",
        "url": "https://1password.com/legal/privacy",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "1Password - Official Site",
        "url": "https://1password.com",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "1Password - About",
        "url": "https://1password.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "1Password - Privacy Policy, 1Password is a Canadian company headquartered in Toronto, Ontario, Canada",
        "url": "https://1password.com/legal/privacy",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "1Password - Privacy Policy, 1Password is a Canadian company headquartered in Toronto, Ontario, Canada",
        "url": "https://1password.com/legal/privacy",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "1Password - About, When we founded 1Password in 2005",
        "url": "https://1password.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "1Password - Press, has set the standard for dependable, intuitive cybersecurity since 2005",
        "url": "https://1password.com/press",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "1Password - Press room, company operating independently with 2026 product announcements and no listing",
        "url": "https://1password.com/press",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "1Password - About, identity security and trusted access",
        "url": "https://1password.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "1Password - Terms of Service, password managing, secure document storing, administrative and related systems",
        "url": "https://1password.com/legal/terms-of-service",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "netskope": {
    "companyId": "netskope",
    "name": "Netskope",
    "legalName": "Netskope, Inc.",
    "website": "https://www.netskope.com",
    "description": "Cloud security and networking company providing security service edge and secure access service edge products for access to cloud, SaaS, web and private applications.",
    "hqCity": "Santa Clara",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "public",
    "statusDetail": null,
    "sector": "Cybersecurity",
    "subsector": "security service edge and secure access service edge",
    "tickers": [
      "NASDAQ:NTSK"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR - Netskope, Inc. Form 10-Q for the period ended 31 July 2026, filed 2 September 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/2063196/000119312526380428/ntsk-20260731.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Nasdaq - Netskope, Inc. Class A Common Stock (NTSK)",
        "url": "https://www.nasdaq.com/market-activity/stocks/ntsk",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Netskope - Official Site",
        "url": "https://www.netskope.com",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Netskope - Announces Pricing of Initial Public Offering",
        "url": "https://www.netskope.com/press-releases/netskope-announces-pricing-of-initial-public-offering",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Netskope - Company page, 2445 Augustine Dr. 3rd floor, Santa Clara, CA 95054",
        "url": "https://www.netskope.com/company",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Netskope - Company page, Santa Clara, CA 95054",
        "url": "https://www.netskope.com/company",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "SEC EDGAR - Netskope, Inc. Form 10-Q, The Company was incorporated in Delaware in October 2012",
        "url": "https://www.sec.gov/Archives/edgar/data/2063196/000119312526380428/ntsk-20260731.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR - Netskope Inc (NTSK), CIK 0002063196, Form 10-Q filed 2 September 2026, file number 001-42848",
        "url": "https://www.sec.gov/Archives/edgar/data/2063196/000119312526380428/ntsk-20260731.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Nasdaq - Netskope, Inc. Class A Common Stock listed under NTSK",
        "url": "https://www.nasdaq.com/market-activity/stocks/ntsk",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "Nasdaq - Netskope, Inc. Class A Common Stock (NTSK)",
        "url": "https://www.nasdaq.com/market-activity/stocks/ntsk",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "Netskope - Announces Pricing of Initial Public Offering, Nasdaq Global Select Market under the symbol NTSK",
        "url": "https://www.netskope.com/press-releases/netskope-announces-pricing-of-initial-public-offering",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Netskope - Announces Launch of Initial Public Offering, security and networking for the cloud and AI era",
        "url": "https://www.netskope.com/press-releases/netskope-announces-launch-of-initial-public-offering",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Netskope - Announces Launch of Initial Public Offering, Netskope One platform, Zero Trust Engine and NewEdge network",
        "url": "https://www.netskope.com/press-releases/netskope-announces-launch-of-initial-public-offering",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "arcticwolf": {
    "companyId": "arcticwolf",
    "name": "Arctic Wolf",
    "legalName": "Arctic Wolf Networks, Inc.",
    "website": "https://arcticwolf.com",
    "description": "Security operations company providing a cloud-native security operations platform together with managed detection and response and related services.",
    "hqCity": "Eden Prairie",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "private",
    "statusDetail": null,
    "sector": "Cybersecurity",
    "subsector": "security operations and managed detection and response",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Arctic Wolf - Terms of Use, Arctic Wolf Networks, Inc. or our affiliates",
        "url": "https://arcticwolf.com/terms-of-use/",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Arctic Wolf - Official Site",
        "url": "https://arcticwolf.com",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Arctic Wolf - Company page",
        "url": "https://arcticwolf.com/company/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Arctic Wolf - Terms of Use, 8939 Columbine Road, Suite 150, Eden Prairie, MN 55347, USA",
        "url": "https://arcticwolf.com/terms-of-use/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Arctic Wolf - Terms of Use, Eden Prairie, MN 55347, USA",
        "url": "https://arcticwolf.com/terms-of-use/",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Arctic Wolf - Company page, Since 2012, Arctic Wolf has protected thousands of organizations from cyberthreats",
        "url": "https://arcticwolf.com/company/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR full-text search - no Arctic Wolf registration statement or listing filing 2024-01-01 to 2026-09-03",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Arctic+Wolf%22&forms=S-1,424B4,8-A12B&dateRange=custom&startdt=2024-01-01&enddt=2026-09-03",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Arctic Wolf - Press releases, company acting as private acquirer of Sevco Security in March 2026 and operating independently",
        "url": "https://arcticwolf.com/resources/press-releases/",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Arctic Wolf - Company page, the security operations leaders",
        "url": "https://arcticwolf.com/company/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Arctic Wolf - Company page, comprehensive suite of security operations solutions",
        "url": "https://arcticwolf.com/company/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "fivetran": {
    "companyId": "fivetran",
    "name": "Fivetran",
    "legalName": null,
    "website": "https://www.fivetran.com",
    "description": "Data movement company whose platform replicates and transforms data from applications, databases and files into cloud data warehouses and data lakes.",
    "hqCity": "Oakland",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "private",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "automated data movement and data pipelines",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Fivetran - Official Site",
        "url": "https://www.fivetran.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Fivetran - press release, Fivetran and dbt Labs Complete Merger, About Fivetran boilerplate",
        "url": "https://www.fivetran.com/press/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Fivetran - About",
        "url": "https://www.fivetran.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Fivetran - About, headquarters Oakland, California",
        "url": "https://www.fivetran.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Fivetran - press release dateline OAKLAND, Calif. June 1, 2026",
        "url": "https://www.fivetran.com/press/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Fivetran - About, headquarters Oakland, California, USA",
        "url": "https://www.fivetran.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Fivetran - About, founded 2012",
        "url": "https://www.fivetran.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Fivetran - press release, all-stock merger with dbt Labs completed 1 June 2026, no public listing",
        "url": "https://www.fivetran.com/press/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR full-text search - no Fivetran registration statement or listing filing 2024-01-01 to 2026-09-03",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Fivetran%22&forms=S-1,424B4,8-A12B&dateRange=custom&startdt=2024-01-01&enddt=2026-09-03",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Fivetran - press release, About Fivetran, moves, manages and transforms data from every system a business runs on",
        "url": "https://www.fivetran.com/press/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Fivetran - press release, Fivetran, the global leader in automated data movement",
        "url": "https://www.fivetran.com/press/fivetran-and-dbt-labs-unite-to-set-the-standard-for-open-data-infrastructure-2025",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "dbtlabs": {
    "companyId": "dbtlabs",
    "name": "dbt Labs",
    "legalName": "dbt Labs, LLC",
    "website": "https://www.getdbt.com",
    "description": "Analytics engineering company behind dbt, a framework and commercial platform used to transform, test and document data in cloud data warehouses.",
    "hqCity": "Philadelphia",
    "hqCountry": "United States",
    "foundedYear": 2016,
    "status": "acquired",
    "statusDetail": "Acquired by Fivetran in 2026 through an all-stock merger announced on 13 October 2025 and completed on 1 June 2026.",
    "sector": "Developer Tools & Infrastructure",
    "subsector": "analytics engineering and data transformation",
    "tickers": [],
    "formerNames": [
      "Fishtown Analytics"
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "dbt Labs - Terms of Service preamble, BY EXECUTING AN ORDER FORM WITH DBT LABS, LLC",
        "url": "https://www.getdbt.com/terms",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "dbt Labs - official site footer, (c) 2026 dbt Labs, LLC. All Rights Reserved.",
        "url": "https://www.getdbt.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "dbt Labs - Official Site",
        "url": "https://www.getdbt.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "dbt Labs - About Us",
        "url": "https://www.getdbt.com/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "dbt Labs - press release, About dbt Labs boilerplate",
        "url": "https://www.getdbt.com/blog/dbt-labs-100m-arr-milestone",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "dbt Labs - press release dateline PHILADELPHIA, Feb. 5, 2025",
        "url": "https://www.getdbt.com/blog/dbt-labs-100m-arr-milestone",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "dbt Labs - About Us, described as a Philadelphia startup",
        "url": "https://www.getdbt.com/dbt-labs/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "dbt Labs - press release dateline PHILADELPHIA, Feb. 5, 2025",
        "url": "https://www.getdbt.com/blog/dbt-labs-100m-arr-milestone",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "dbt Labs - press release, Since 2016, dbt Labs has been on a mission",
        "url": "https://www.getdbt.com/blog/dbt-labs-100m-arr-milestone",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "dbt Labs - Fivetran and dbt Labs Complete Merger, completion announced 1 June 2026",
        "url": "https://www.getdbt.com/blog/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Fivetran - Fivetran and dbt Labs Complete Merger, completion of its merger with dbt Labs",
        "url": "https://www.fivetran.com/press/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Fivetran - Fivetran and dbt Labs Complete Merger, OAKLAND, Calif. June 1, 2026, all-stock merger originally announced October 13, 2025",
        "url": "https://www.fivetran.com/press/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Fivetran - Fivetran and dbt Labs Unite, definitive agreement signed 13 October 2025",
        "url": "https://www.fivetran.com/press/fivetran-and-dbt-labs-unite-to-set-the-standard-for-open-data-infrastructure-2025",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "dbt Labs - press release, pioneered the practice of analytics engineering",
        "url": "https://www.getdbt.com/blog/dbt-labs-100m-arr-milestone",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "dbt Labs - press release, analytics engineering workflow and dbt tooling",
        "url": "https://www.getdbt.com/blog/dbt-labs-100m-arr-milestone",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "dbt Labs - Fishtown Analytics Rebrands as dbt Labs",
        "url": "https://www.getdbt.com/blog/fishtown-analytics-rebrands-as-dbt-labs-closes-150m-to-develop-open-source-analytics-engineering-software",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "cockroachlabs": {
    "companyId": "cockroachlabs",
    "name": "Cockroach Labs",
    "legalName": "Cockroach Labs, Inc.",
    "website": "https://www.cockroachlabs.com",
    "description": "Software company that develops CockroachDB, a distributed SQL database, and offers it as a self-hosted product and as a managed cloud service.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2015,
    "status": "private",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "distributed SQL database",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Cockroach Labs - Software-as-a-Service Terms and Conditions",
        "url": "https://www.cockroachlabs.com/cloud-terms-and-conditions/",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Cockroach Labs - About",
        "url": "https://www.cockroachlabs.com/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Cockroach Labs - About",
        "url": "https://www.cockroachlabs.com/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Cockroach Labs - Series F Funding Press Release",
        "url": "https://www.cockroachlabs.com/news/press-release-series-f-funding/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Cockroach Labs - Series F Funding Press Release",
        "url": "https://www.cockroachlabs.com/news/press-release-series-f-funding/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Cockroach Labs - Series F Funding Press Release",
        "url": "https://www.cockroachlabs.com/news/press-release-series-f-funding/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Cockroach Labs - Software-as-a-Service Terms and Conditions",
        "url": "https://www.cockroachlabs.com/cloud-terms-and-conditions/",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Cockroach Labs - About",
        "url": "https://www.cockroachlabs.com/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Cockroach Labs - Series F Funding Press Release",
        "url": "https://www.cockroachlabs.com/news/press-release-series-f-funding/",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Cockroach Labs - About",
        "url": "https://www.cockroachlabs.com/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Cockroach Labs - About",
        "url": "https://www.cockroachlabs.com/about/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "retool": {
    "companyId": "retool",
    "name": "Retool",
    "legalName": "Retool, Inc.",
    "website": "https://retool.com",
    "description": "Software platform used by companies to build, deploy and manage internal tools and business applications, with connections to databases, APIs and large language models.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "private",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "internal tools development platform",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Retool - Privacy Policy",
        "url": "https://docs.retool.com/legal/privacy-policy",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Retool - Official Site",
        "url": "https://retool.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Retool - Official Site",
        "url": "https://retool.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Retool - Privacy Policy",
        "url": "https://docs.retool.com/legal/privacy-policy",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Retool - Privacy Policy",
        "url": "https://docs.retool.com/legal/privacy-policy",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Retool - Careers",
        "url": "https://retool.com/careers",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Retool - Careers",
        "url": "https://retool.com/careers",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR full-text search - no registration statement for Retool, Inc.",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Retool%2C%20Inc.%22",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Retool - Official Site",
        "url": "https://retool.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Retool - Official Site",
        "url": "https://retool.com/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "linear": {
    "companyId": "linear",
    "name": "Linear",
    "legalName": "Linear Orbit, Inc.",
    "website": "https://linear.app",
    "description": "Software company that builds Linear, a project and issue tracking system used by software product development teams.",
    "hqCity": null,
    "hqCountry": null,
    "foundedYear": 2019,
    "status": "private",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "project and issue tracking software for product development teams",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Linear - Terms of Service",
        "url": "https://linear.app/terms",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Linear - About",
        "url": "https://linear.app/about",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Linear - About",
        "url": "https://linear.app/about",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Linear - About",
        "url": "https://linear.app/about",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Linear - Building our way: Announcing our Series C",
        "url": "https://linear.app/now/building-our-way",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Linear - About",
        "url": "https://linear.app/about",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Linear - About",
        "url": "https://linear.app/about",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "webflow": {
    "companyId": "webflow",
    "name": "Webflow",
    "legalName": "Webflow, Inc.",
    "website": "https://webflow.com",
    "description": "Visual development platform used to design, build and host websites without writing code.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2013,
    "status": "private",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "visual website design, build and hosting platform",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Webflow - Data Processing Addendum",
        "url": "https://webflow.com/legal/dpa",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Webflow - Official Site",
        "url": "https://webflow.com",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Webflow - About Webflow boilerplate, company press release",
        "url": "https://www.prnewswire.com/news-releases/webflow-named-to-2022-forbes-cloud-100-for-third-straight-year-301602803.html",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Webflow - About Webflow boilerplate, company press release",
        "url": "https://www.prnewswire.com/news-releases/webflow-named-to-2022-forbes-cloud-100-for-third-straight-year-301602803.html",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Webflow - About Webflow boilerplate, company press release",
        "url": "https://www.prnewswire.com/news-releases/webflow-named-to-2022-forbes-cloud-100-for-third-straight-year-301602803.html",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Webflow - Data Processing Addendum",
        "url": "https://webflow.com/legal/dpa",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Webflow - About Webflow boilerplate, company press release",
        "url": "https://www.prnewswire.com/news-releases/webflow-named-to-2022-forbes-cloud-100-for-third-straight-year-301602803.html",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Webflow - Series C funding announcement",
        "url": "https://webflow.com/blog/webflow-series-c-funding",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR full-text search - no registration statement for Webflow, Inc.",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Webflow%2C%20Inc.%22",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Webflow - About Webflow boilerplate, company press release",
        "url": "https://www.prnewswire.com/news-releases/webflow-named-to-2022-forbes-cloud-100-for-third-straight-year-301602803.html",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Webflow - About Webflow boilerplate, company press release",
        "url": "https://www.prnewswire.com/news-releases/webflow-named-to-2022-forbes-cloud-100-for-third-straight-year-301602803.html",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "miro": {
    "companyId": "miro",
    "name": "Miro",
    "legalName": "RealtimeBoard Inc.",
    "website": "https://miro.com",
    "description": "Collaborative visual workspace software providing an online whiteboard and infinite canvas used by teams to run workshops, design products and plan work.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2011,
    "status": "private",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "collaborative online whiteboard and visual workspace",
    "tickers": [],
    "formerNames": [
      "RealtimeBoard"
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Miro - Terms of Service",
        "url": "https://miro.com/legal/terms-of-service/",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Miro - About",
        "url": "https://miro.com/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Miro - About",
        "url": "https://miro.com/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Miro - Series C funding announcement",
        "url": "https://miro.com/newsroom/miro-series-c/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Miro - About Miro boilerplate, company press release 2025",
        "url": "https://www.businesswire.com/news/home/20250507080020/en/Miro-Launches-Solution-Partner-Program-to-Accelerate-Enterprise-Innovation-and-Collaboration",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Miro - About Miro boilerplate, company press release 2025",
        "url": "https://www.businesswire.com/news/home/20250507080020/en/Miro-Launches-Solution-Partner-Program-to-Accelerate-Enterprise-Innovation-and-Collaboration",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Miro - Terms of Service",
        "url": "https://miro.com/legal/terms-of-service/",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Miro - About Miro boilerplate, company press release 2025",
        "url": "https://www.businesswire.com/news/home/20250507080020/en/Miro-Launches-Solution-Partner-Program-to-Accelerate-Enterprise-Innovation-and-Collaboration",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Miro - Series C funding announcement",
        "url": "https://miro.com/newsroom/miro-series-c/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Miro - Series C funding announcement",
        "url": "https://miro.com/newsroom/miro-series-c/",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Miro - About",
        "url": "https://miro.com/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Miro - About",
        "url": "https://miro.com/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "Miro - RealtimeBoard is now Miro",
        "url": "https://miro.com/blog/features/realtimeboard-is-now-miro/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "grammarly": {
    "companyId": "grammarly",
    "name": "Superhuman",
    "legalName": "Superhuman Platform Inc.",
    "website": "https://superhuman.com",
    "description": "AI productivity software company whose products include the Grammarly writing assistant, the Coda workspace, Superhuman Mail and the Superhuman Go assistant.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2009,
    "status": "private",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "AI writing assistance and productivity suite",
    "tickers": [],
    "formerNames": [
      "Grammarly"
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Superhuman - Terms of Service",
        "url": "https://superhuman.com/terms",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Grammarly - Customer Business Agreement",
        "url": "https://www.grammarly.com/terms/customer-business-agreement",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Superhuman - Official Site",
        "url": "https://superhuman.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Grammarly - Announcing company rebrand to Superhuman",
        "url": "https://www.grammarly.com/blog/company/announcing-company-rebrand-to-superhuman/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Superhuman - Official Site",
        "url": "https://superhuman.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Grammarly - Announcing company rebrand to Superhuman",
        "url": "https://www.grammarly.com/blog/company/announcing-company-rebrand-to-superhuman/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Grammarly Announces \$1 Billion Growth Financing With General Catalyst - company press release",
        "url": "https://www.businesswire.com/news/home/20250529436291/en/Grammarly-Announces-%241-Billion-Growth-Financing-With-General-Catalyst",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Grammarly Announces \$1 Billion Growth Financing With General Catalyst - company press release",
        "url": "https://www.businesswire.com/news/home/20250529436291/en/Grammarly-Announces-%241-Billion-Growth-Financing-With-General-Catalyst",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Grammarly - About",
        "url": "https://www.grammarly.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Grammarly Announces \$1 Billion Growth Financing With General Catalyst - company press release",
        "url": "https://www.businesswire.com/news/home/20250529436291/en/Grammarly-Announces-%241-Billion-Growth-Financing-With-General-Catalyst",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Grammarly - Announcing company rebrand to Superhuman",
        "url": "https://www.grammarly.com/blog/company/announcing-company-rebrand-to-superhuman/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Grammarly - Announcing company rebrand to Superhuman",
        "url": "https://www.grammarly.com/blog/company/announcing-company-rebrand-to-superhuman/",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "Grammarly - Announcing company rebrand to Superhuman",
        "url": "https://www.grammarly.com/blog/company/announcing-company-rebrand-to-superhuman/",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "Grammarly - Customer Business Agreement, 'Superhuman Platform Inc., formerly known as Grammarly, Inc.'",
        "url": "https://www.grammarly.com/terms/customer-business-agreement",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "clickup": {
    "companyId": "clickup",
    "name": "ClickUp",
    "legalName": "Mango Technologies, Inc.",
    "website": "https://clickup.com",
    "description": "All-in-one productivity platform for teams, combining project management, document collaboration, spreadsheets, chat and goals in a single tool.",
    "hqCity": "San Diego",
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "private",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "all-in-one work productivity and project management platform",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "ClickUp - Terms of Service",
        "url": "https://clickup.com/terms",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "ClickUp - Official Site",
        "url": "https://clickup.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "ClickUp - About ClickUp boilerplate, Series C announcement",
        "url": "https://clickup.com/blog/clickup-raises-400m-in-series-c-funding/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "ClickUp Series C announcement - About ClickUp boilerplate",
        "url": "https://www.prnewswire.com/news-releases/clickup-raises-400m-in-series-c-funding-the-biggest-investment-in-workplace-productivity-history-301409506.html",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "ClickUp - About page, San Diego HQ",
        "url": "https://clickup.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "ClickUp - About ClickUp boilerplate, based in San Diego",
        "url": "https://clickup.com/blog/clickup-raises-400m-in-series-c-funding/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "ClickUp - About page, San Diego HQ, United States",
        "url": "https://clickup.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "ClickUp - About ClickUp boilerplate, Founded in 2017",
        "url": "https://clickup.com/blog/clickup-raises-400m-in-series-c-funding/",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "ClickUp Series C announcement - Founded in 2017",
        "url": "https://www.prnewswire.com/news-releases/clickup-raises-400m-in-series-c-funding-the-biggest-investment-in-workplace-productivity-history-301409506.html",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "ClickUp - Series C private venture round, privately held",
        "url": "https://clickup.com/blog/clickup-raises-400m-in-series-c-funding/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "ClickUp Series C announcement - private venture financing",
        "url": "https://www.prnewswire.com/news-releases/clickup-raises-400m-in-series-c-funding-the-biggest-investment-in-workplace-productivity-history-301409506.html",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "ClickUp - About ClickUp boilerplate, productivity platform",
        "url": "https://clickup.com/blog/clickup-raises-400m-in-series-c-funding/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "ClickUp - About ClickUp boilerplate, project management and collaboration",
        "url": "https://clickup.com/blog/clickup-raises-400m-in-series-c-funding/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "servicetitan": {
    "companyId": "servicetitan",
    "name": "ServiceTitan",
    "legalName": "ServiceTitan, Inc.",
    "website": "https://www.servicetitan.com",
    "description": "Software platform for residential and commercial trades contractors, covering field service management, construction project tracking and business operations.",
    "hqCity": "Glendale",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "public",
    "statusDetail": null,
    "sector": "Enterprise Software",
    "subsector": "vertical software for residential and commercial trades contractors",
    "tickers": [
      "NASDAQ:TTAN"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "ServiceTitan, Inc. - Form 10-K cover page, FY ended 2026-01-31",
        "url": "https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR - ServiceTitan, Inc. filing index",
        "url": "https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/0001638826-26-000028-index.html",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "ServiceTitan - Official Site, About",
        "url": "https://www.servicetitan.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "ServiceTitan, Inc. - Form 10-K Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "ServiceTitan - Official Site, About",
        "url": "https://www.servicetitan.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "ServiceTitan, Inc. - Form 10-K cover, principal executive offices Glendale, California",
        "url": "https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "ServiceTitan, Inc. - Form 10-K cover, principal executive offices Glendale, California",
        "url": "https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "ServiceTitan, Inc. - Form 10-K cover, securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions - ServiceTitan, Inc. CIK 0001638826",
        "url": "https://data.sec.gov/submissions/CIK0001638826.json",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "ServiceTitan, Inc. - Form 10-K cover, Class A Common Stock, TTAN, The Nasdaq Stock Market LLC",
        "url": "https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "Nasdaq official listing - ServiceTitan, Inc. Class A Common Stock (TTAN)",
        "url": "https://www.nasdaq.com/market-activity/stocks/ttan",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR submissions - tickers TTAN, exchanges Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001638826.json",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "ServiceTitan, Inc. - Form 10-K Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "ServiceTitan, Inc. - Form 10-K Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "xai": {
    "companyId": "xai",
    "name": "xAI",
    "legalName": "X.AI Corp.",
    "website": "https://x.ai",
    "description": "Artificial intelligence company building frontier AI models and the Grok assistant, including reasoning, real-time voice and generative media systems.",
    "hqCity": null,
    "hqCountry": "United States",
    "foundedYear": 2023,
    "status": "acquired",
    "statusDetail": "Acquired by Space Exploration Technologies Corp. (SpaceX) in 2026; SpaceX completed its acquisition of parent X.AI Holdings Corp. on 2 February 2026, making it a wholly owned subsidiary",
    "sector": "AI",
    "subsector": "frontier AI models and research",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SpaceX Form 10-Q, period 2026-06-30 - X.AI Corp began operations in March 2023",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026052535/spcx-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SpaceX Form S-1 Exhibit 21.1 - list of significant subsidiaries",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/exhibit211-sx1.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "xAI - Official Site, About",
        "url": "https://x.ai/about",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "xAI - Official Site, About",
        "url": "https://x.ai/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "xAI - Terms of Service, contracting entity is a Nevada company with registered offices in Austin, Texas, USA",
        "url": "https://x.ai/legal/terms-of-service",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "SpaceX Form 10-Q, period 2026-06-30 - X.AI Corp began operations in March 2023",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026052535/spcx-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SpaceX Form 10-Q, period 2026-06-30 - completed acquisition of X.AI Holdings Corp on 2 February 2026",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026052535/spcx-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "SpaceX Form 10-Q, period 2026-06-30 - xAI Merger Date and wholly owned subsidiary language",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026052535/spcx-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "SpaceX Form S-1 Exhibit 21.1 - X.AI LLC and X Corp. listed as SpaceX significant subsidiaries",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/exhibit211-sx1.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "xAI - Official Site, About",
        "url": "https://x.ai/about",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "xAI - Official Site, About",
        "url": "https://x.ai/about",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "safesuperintelligence": {
    "companyId": "safesuperintelligence",
    "name": "Safe Superintelligence",
    "legalName": "Safe Superintelligence Inc.",
    "website": "https://ssi.inc",
    "description": "AI research lab pursuing safe superintelligence as its single goal and only product, developing safety and capabilities together.",
    "hqCity": null,
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "AI",
    "subsector": "safe superintelligence research",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Safe Superintelligence Inc. - Official Site",
        "url": "https://ssi.inc/",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Safe Superintelligence Inc. - Official Site",
        "url": "https://ssi.inc/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Safe Superintelligence Inc. - Official Site",
        "url": "https://ssi.inc/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Safe Superintelligence Inc. - Official Site, we are an American company",
        "url": "https://ssi.inc/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Safe Superintelligence Inc. - Updates, private funding raised from named venture investors",
        "url": "https://ssi.inc/updates",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Safe Superintelligence Inc. - Official Site",
        "url": "https://ssi.inc/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Safe Superintelligence Inc. - Official Site",
        "url": "https://ssi.inc/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "physicalintelligence": {
    "companyId": "physicalintelligence",
    "name": "Physical Intelligence",
    "legalName": null,
    "website": "https://www.pi.website",
    "description": "AI company developing general-purpose learning algorithms and foundation models intended to control any robot to do any task.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "AI",
    "subsector": "general-purpose robot foundation models",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Physical Intelligence - Official Site",
        "url": "https://www.pi.website/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Physical Intelligence - Official Site",
        "url": "https://www.pi.website/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "TechCrunch - Physical Intelligence's headquarters in San Francisco",
        "url": "https://techcrunch.com/2026/01/30/physical-intelligence-stripe-veteran-lachy-grooms-latest-bet-is-building-silicon-valleys-buzziest-robot-brains/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "TechCrunch - Physical Intelligence's headquarters in San Francisco",
        "url": "https://techcrunch.com/2026/01/30/physical-intelligence-stripe-veteran-lachy-grooms-latest-bet-is-building-silicon-valleys-buzziest-robot-brains/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "TechCrunch - privately funded, over \$1 billion raised from venture investors at a \$5.6 billion valuation",
        "url": "https://techcrunch.com/2026/01/30/physical-intelligence-stripe-veteran-lachy-grooms-latest-bet-is-building-silicon-valleys-buzziest-robot-brains/",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Physical Intelligence - Official Site",
        "url": "https://www.pi.website/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Physical Intelligence - Official Site, research blog",
        "url": "https://www.pi.website/blog",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "thinkingmachineslab": {
    "companyId": "thinkingmachineslab",
    "name": "Thinking Machines Lab",
    "legalName": null,
    "website": "https://thinkingmachines.ai",
    "description": "Artificial intelligence research and product company working on multimodal models, human-AI collaboration and customisable frontier AI systems.",
    "hqCity": null,
    "hqCountry": null,
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "AI",
    "subsector": "frontier AI research and multimodal models",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Thinking Machines Lab - Official Site",
        "url": "https://thinkingmachines.ai/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Thinking Machines Lab - Official Site",
        "url": "https://thinkingmachines.ai/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Thinking Machines Lab - Research blog",
        "url": "https://thinkingmachines.ai/blog/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "TechCrunch - closed a \$2 billion seed round valuing the startup at \$12 billion",
        "url": "https://techcrunch.com/2025/07/15/mira-muratis-thinking-machines-lab-is-worth-12b-in-seed-round/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "TechCrunch - Thinking Machines Lab is ex-OpenAI CTO Mira Murati's new startup",
        "url": "https://techcrunch.com/2025/02/18/thinking-machines-lab-is-ex-openai-cto-mira-muratis-new-startup/",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Thinking Machines Lab - Official Site",
        "url": "https://thinkingmachines.ai/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Thinking Machines Lab - Official Site",
        "url": "https://thinkingmachines.ai/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "appliedintuition": {
    "companyId": "appliedintuition",
    "name": "Applied Intuition",
    "legalName": "Applied Intuition, Inc.",
    "website": "https://www.appliedintuition.com",
    "description": "Vehicle software company providing development and simulation tooling, vehicle operating systems and autonomy stacks for the automotive, trucking, defense, construction, mining and agriculture industries.",
    "hqCity": "Sunnyvale",
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "private",
    "statusDetail": null,
    "sector": "Mobility",
    "subsector": "vehicle autonomy software, development tooling and vehicle operating systems",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Applied Intuition - About",
        "url": "https://www.appliedintuition.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Applied Intuition - Launches Dana press release, About boilerplate",
        "url": "https://www.appliedintuition.com/press-releases/applied-intuition-launches-dana",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Applied Intuition - Series F press release",
        "url": "https://www.appliedintuition.com/press-releases/series-f",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Applied Intuition - Launches Dana press release, About boilerplate",
        "url": "https://www.appliedintuition.com/press-releases/applied-intuition-launches-dana",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Applied Intuition - About",
        "url": "https://www.appliedintuition.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Applied Intuition - About, Headquartered in Sunnyvale, California",
        "url": "https://www.appliedintuition.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Applied Intuition - Launches Dana press release, headquartered in Sunnyvale, California",
        "url": "https://www.appliedintuition.com/press-releases/applied-intuition-launches-dana",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Applied Intuition - About, Headquartered in Sunnyvale, California",
        "url": "https://www.appliedintuition.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Applied Intuition - Launches Dana press release, Founded in 2017",
        "url": "https://www.appliedintuition.com/press-releases/applied-intuition-launches-dana",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Applied Intuition - Isuzu press release, Founded in 2017",
        "url": "https://www.appliedintuition.com/press-releases/applied-intuition-isuzu-autonomous-trucking",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Applied Intuition - Series F private fundraise and tender offer announcement",
        "url": "https://www.appliedintuition.com/press-releases/series-f",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Applied Intuition - Launches Dana press release, describes tools and infrastructure, operating systems and autonomy for moving machines",
        "url": "https://www.appliedintuition.com/press-releases/applied-intuition-launches-dana",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Applied Intuition - Launches Dana press release, About boilerplate",
        "url": "https://www.appliedintuition.com/press-releases/applied-intuition-launches-dana",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "crusoe": {
    "companyId": "crusoe",
    "name": "Crusoe",
    "legalName": "Crusoe Inc.",
    "website": "https://www.crusoe.ai",
    "description": "Company that designs, builds and operates AI data centers and provides GPU cloud computing and managed AI inference services, using an energy-first approach to powering compute.",
    "hqCity": "Denver",
    "hqCountry": "United States",
    "foundedYear": 2018,
    "status": "private",
    "statusDetail": null,
    "sector": "Developer Tools & Infrastructure",
    "subsector": "AI cloud computing and AI data center infrastructure",
    "tickers": [],
    "formerNames": [
      "Crusoe Energy Holdings Inc."
    ],
    "sources": [
      {
        "field": "website",
        "label": "Crusoe - Official Site",
        "url": "https://www.crusoe.ai/",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions, CIK 0001924674, name Crusoe Inc.",
        "url": "https://data.sec.gov/submissions/CIK0001924674.json",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Crusoe - Official Site footer, 2026 Crusoe, Inc",
        "url": "https://www.crusoe.ai/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Crusoe - Official Site",
        "url": "https://www.crusoe.ai/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Crusoe - Newsroom, Denver HQ expansion",
        "url": "https://www.crusoe.ai/resources/newsroom/crusoe-expands-denver-hq",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR submissions, CIK 0001924674, business address Denver CO",
        "url": "https://data.sec.gov/submissions/CIK0001924674.json",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR submissions, CIK 0001924674, business address Denver CO",
        "url": "https://data.sec.gov/submissions/CIK0001924674.json",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Crusoe - Newsroom, The company, founded in 2018",
        "url": "https://www.crusoe.ai/resources/newsroom/crusoe-expands-denver-hq",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions, CIK 0001924674, Form D exempt offerings through 2025-10-23 and no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0001924674.json",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Crusoe - Official Site, AI cloud, managed AI services and AI data centers",
        "url": "https://www.crusoe.ai/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Crusoe - Official Site, Crusoe Cloud and AI data center infrastructure",
        "url": "https://www.crusoe.ai/",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR submissions, CIK 0001924674, formerNames Crusoe Energy Holdings Inc. from 2022-04-22 to 2024-02-08",
        "url": "https://data.sec.gov/submissions/CIK0001924674.json",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "abridge": {
    "companyId": "abridge",
    "name": "Abridge",
    "legalName": "Abridge AI, Inc.",
    "website": "https://www.abridge.com",
    "description": "Healthcare AI company whose platform converts patient and clinician conversations into structured clinical documentation in real time, with integrations into electronic medical record systems.",
    "hqCity": null,
    "hqCountry": "United States",
    "foundedYear": 2018,
    "status": "private",
    "statusDetail": null,
    "sector": "AI",
    "subsector": "generative AI for clinical documentation",
    "tickers": [],
    "formerNames": [
      "intelligible.ai Inc."
    ],
    "sources": [
      {
        "field": "website",
        "label": "Abridge - Official Site",
        "url": "https://www.abridge.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Abridge - Privacy Policy, Abridge AI, Inc.",
        "url": "https://www.abridge.com/privacy-policy",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions, CIK 0001737537, name Abridge AI Inc.",
        "url": "https://data.sec.gov/submissions/CIK0001737537.json",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Abridge - Press release About boilerplate",
        "url": "https://www.abridge.com/press-release/hopkins-abridge",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Abridge - Official Site",
        "url": "https://www.abridge.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Abridge - Privacy Policy, US postal address for Abridge AI, Inc.",
        "url": "https://www.abridge.com/privacy-policy",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR submissions, CIK 0001737537, US business address and Delaware incorporation",
        "url": "https://data.sec.gov/submissions/CIK0001737537.json",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Abridge - Press release, Abridge was founded in 2018",
        "url": "https://www.abridge.com/press-release/hopkins-abridge",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions, CIK 0001737537, Form D exempt offerings through 2025-06-30 and no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0001737537.json",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Abridge - Official Site, generative AI for clinical conversations",
        "url": "https://www.abridge.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Abridge - Press release About boilerplate",
        "url": "https://www.abridge.com/press-release/hopkins-abridge",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR submissions, CIK 0001737537, formerNames intelligible.ai Inc.",
        "url": "https://data.sec.gov/submissions/CIK0001737537.json",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "springhealth": {
    "companyId": "springhealth",
    "name": "Spring Health",
    "legalName": "Spring Care, Inc.",
    "website": "https://www.springhealth.com",
    "description": "Mental health company providing employers, health plans and partners with a platform for self-guided tools, coaching, therapy, medication management, crisis support and specialty care.",
    "hqCity": "New York",
    "hqCountry": "United States",
    "foundedYear": 2016,
    "status": "private",
    "statusDetail": null,
    "sector": "Digital Health",
    "subsector": "employer and health plan mental health benefits and care delivery",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Spring Health - Official Site",
        "url": "https://www.springhealth.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Spring Health - Official Site footer, 2026 Spring Care, Inc.",
        "url": "https://www.springhealth.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions, CIK 0001716933, name Spring Care, Inc.",
        "url": "https://data.sec.gov/submissions/CIK0001716933.json",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Spring Health - About Us",
        "url": "https://www.springhealth.com/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Spring Health - Alma press release About boilerplate",
        "url": "https://www.prnewswire.com/news-releases/spring-health-joins-forces-with-alma-expanding-access-to-precision-mental-health-care-302673454.html",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR submissions, CIK 0001716933, business address 60 Madison Avenue, New York, NY",
        "url": "https://data.sec.gov/submissions/CIK0001716933.json",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Spring Health - Alma press release, NEW YORK dateline",
        "url": "https://www.prnewswire.com/news-releases/spring-health-joins-forces-with-alma-expanding-access-to-precision-mental-health-care-302673454.html",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR submissions, CIK 0001716933, business address New York, NY",
        "url": "https://data.sec.gov/submissions/CIK0001716933.json",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Spring Health - About Us, Founded in 2016 as an AI company",
        "url": "https://www.springhealth.com/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions, CIK 0001716933, Form D exempt offering filed 2026-05-15 and no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0001716933.json",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Spring Health - About Us, mental health support platform",
        "url": "https://www.springhealth.com/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Spring Health - Alma press release About boilerplate, trusted by employers, health plans and channel partners",
        "url": "https://www.prnewswire.com/news-releases/spring-health-joins-forces-with-alma-expanding-access-to-precision-mental-health-care-302673454.html",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "cityblockhealth": {
    "companyId": "cityblockhealth",
    "name": "Cityblock Health",
    "legalName": "Cityblock Health, Inc.",
    "website": "https://www.cityblock.com",
    "description": "Value-based healthcare provider delivering clinical, behavioral health and social care to Medicaid and dually eligible members in partnership with Medicaid health plans and health systems.",
    "hqCity": "Brooklyn",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "Healthcare",
    "subsector": "value-based care provider for Medicaid and dually eligible populations",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Cityblock - About",
        "url": "https://www.cityblock.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Cityblock - About page, Cityblock Health, Inc.",
        "url": "https://www.cityblock.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions, CIK 0001726601, name Cityblock Health, Inc.",
        "url": "https://data.sec.gov/submissions/CIK0001726601.json",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Cityblock Health - press release About boilerplate",
        "url": "https://www.prnewswire.com/news-releases/cityblock-health-welcomes-chief-technology-officer-new-board-members-302658800.html",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Cityblock - About page footer address, 495 Flatbush Ave, Brooklyn, NY",
        "url": "https://www.cityblock.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Cityblock Health - press release, BROOKLYN, N.Y. dateline",
        "url": "https://www.prnewswire.com/news-releases/cityblock-health-welcomes-chief-technology-officer-new-board-members-302658800.html",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Cityblock - About page footer address, Brooklyn, NY",
        "url": "https://www.cityblock.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions, CIK 0001726601, Form D exempt offerings only and no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0001726601.json",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "CNBC - Cityblock spun out of Sidewalk Labs, establishing a spinout rather than an acquisition",
        "url": "https://www.cnbc.com/2017/10/02/cityblock-alphabet-spinout-wants-to-redesign-health-care.html",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Cityblock Health - press release About boilerplate, value-based healthcare provider",
        "url": "https://www.prnewswire.com/news-releases/cityblock-health-welcomes-chief-technology-officer-new-board-members-302658800.html",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Cityblock Health - press release About boilerplate, dually eligible and Medicaid populations",
        "url": "https://www.prnewswire.com/news-releases/cityblock-health-welcomes-chief-technology-officer-new-board-members-302658800.html",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "colorhealth": {
    "companyId": "colorhealth",
    "name": "Color Health",
    "legalName": "Color Health, Inc.",
    "website": "https://www.color.com",
    "description": "Health company operating an oncologist-led virtual cancer clinic that provides risk identification, guidelines-based screening, early detection, treatment support and survivorship care for employers, health plans, unions and public sector populations, with clinical care delivered by Color Medical.",
    "hqCity": null,
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "Digital Health",
    "subsector": "virtual cancer care clinic for employers and health plans",
    "tickers": [],
    "formerNames": [
      "Color Genomics, Inc."
    ],
    "sources": [
      {
        "field": "website",
        "label": "Color - Official Site",
        "url": "https://www.color.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Color - Privacy Policy and site footer, Color Health, Inc",
        "url": "https://www.color.com/privacy-policy",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR submissions, CIK 0001683327, name Color Health, Inc.",
        "url": "https://data.sec.gov/submissions/CIK0001683327.json",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Color - Official Site, virtual cancer clinic",
        "url": "https://www.color.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Color Health - ASCO Certified press release About boilerplate",
        "url": "https://www.prnewswire.com/news-releases/color-health-becomes-first-virtual-cancer-clinic-to-earn-asco-certified-status-for-compliance-with-quality-and-safety-standards-302764322.html",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR submissions, CIK 0001683327, US business address and Delaware incorporation",
        "url": "https://data.sec.gov/submissions/CIK0001683327.json",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR submissions, CIK 0001683327, Form D exempt offerings only and no registration statement",
        "url": "https://data.sec.gov/submissions/CIK0001683327.json",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Color Health - ASCO Certified press release dated May 2026 evidencing continuing operations",
        "url": "https://www.prnewswire.com/news-releases/color-health-becomes-first-virtual-cancer-clinic-to-earn-asco-certified-status-for-compliance-with-quality-and-safety-standards-302764322.html",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Color - Official Site, oncologist-led virtual cancer clinic combining technology and AI with an in-house medical group",
        "url": "https://www.color.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Color Health - ASCO Certified press release About boilerplate, virtual cancer clinic for employers, health plans, unions and the public sector",
        "url": "https://www.prnewswire.com/news-releases/color-health-becomes-first-virtual-cancer-clinic-to-earn-asco-certified-status-for-compliance-with-quality-and-safety-standards-302764322.html",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR submissions, CIK 0001683327, formerNames Color Genomics, Inc. from 2016-08-29 to 2017-11-14",
        "url": "https://data.sec.gov/submissions/CIK0001683327.json",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "recursion": {
    "companyId": "recursion",
    "name": "Recursion",
    "legalName": "Recursion Pharmaceuticals, Inc.",
    "website": "https://www.recursion.com",
    "description": "Clinical-stage biotechnology company that combines large-scale automated cellular experiments, machine learning and its Recursion Operating System platform to discover and develop drug candidates.",
    "hqCity": "Salt Lake City",
    "hqCountry": "United States",
    "foundedYear": 2013,
    "status": "public",
    "statusDetail": null,
    "sector": "Biotech",
    "subsector": "AI-enabled drug discovery and development",
    "tickers": [
      "NASDAQ:RXRX"
    ],
    "formerNames": [
      "Recursion Pharmaceuticals, LLC"
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - cover page, exact name of registrant",
        "url": "https://www.sec.gov/Archives/edgar/data/1601830/000160183026000098/rxrx-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR entity submissions, CIK 0001601830",
        "url": "https://data.sec.gov/submissions/CIK0001601830.json",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Recursion - official site",
        "url": "https://www.recursion.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "SEC Form 10-K for fiscal year 2025, Item 1 Business",
        "url": "https://www.sec.gov/Archives/edgar/data/1601830/000160183026000039/rxrx-20251231.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Recursion - official site homepage",
        "url": "https://www.recursion.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - address of principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1601830/000160183026000098/rxrx-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - address of principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1601830/000160183026000098/rxrx-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Recursion - Our Story timeline, 'November 5, 2013 Recursion is founded'",
        "url": "https://www.recursion.com/our-story",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1601830/000160183026000098/rxrx-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - Class A Common Stock, trading symbol RXRX, Nasdaq Global Select Market",
        "url": "https://www.sec.gov/Archives/edgar/data/1601830/000160183026000098/rxrx-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR entity submissions, CIK 0001601830 - tickers RXRX, exchanges Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001601830.json",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR entity submissions, CIK 0001601830 - formerNames: Recursion Pharmaceuticals, LLC (2014-04-02 to 2015-12-04)",
        "url": "https://data.sec.gov/submissions/CIK0001601830.json",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "SEC Form 10-K for fiscal year 2025, Item 1 Business - clinical-stage TechBio company with drug pipeline",
        "url": "https://www.sec.gov/Archives/edgar/data/1601830/000160183026000039/rxrx-20251231.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "SEC Form 10-K for fiscal year 2025, Item 1 Business - Recursion Operating System drug discovery platform",
        "url": "https://www.sec.gov/Archives/edgar/data/1601830/000160183026000039/rxrx-20251231.htm",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "insitro": {
    "companyId": "insitro",
    "name": "insitro",
    "legalName": "Insitro, Inc.",
    "website": "https://www.insitro.com",
    "description": "Drug discovery and development company that generates and integrates large-scale cellular and human genetic data and uses machine learning to build models of causal human biology and advance therapeutics.",
    "hqCity": "South San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2018,
    "status": "private",
    "statusDetail": null,
    "sector": "Biotech",
    "subsector": "machine learning driven drug discovery",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR entity submissions, CIK 0001812648 - name 'Insitro, Inc.'",
        "url": "https://data.sec.gov/submissions/CIK0001812648.json",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "insitro - official site",
        "url": "https://www.insitro.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "insitro - Purpose page",
        "url": "https://www.insitro.com/purpose/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "insitro - About page",
        "url": "https://www.insitro.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "insitro - About page, 279 East Grand Avenue, South San Francisco, California 94080",
        "url": "https://www.insitro.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR entity submissions, CIK 0001812648 - business address South San Francisco, CA",
        "url": "https://data.sec.gov/submissions/CIK0001812648.json",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "insitro - About page, South San Francisco, California",
        "url": "https://www.insitro.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "insitro - About page, 'Our CEO Daphne Koller founded insitro in 2018'",
        "url": "https://www.insitro.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR entity submissions, CIK 0001812648 - only Form D exempt-offering filings, no registration statement, no tickers or exchanges of record",
        "url": "https://data.sec.gov/submissions/CIK0001812648.json",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR full-text search for insitro on Form S-1 - no registration statement filed by the company",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22insitro%22&forms=S-1",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "insitro - Purpose page, therapeutics discovery via machine learning",
        "url": "https://www.insitro.com/purpose/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "insitro - Purpose page, 'decoding human biology with machine learning, charting a better path to new transformative medicines'",
        "url": "https://www.insitro.com/purpose/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "guardanthealth": {
    "companyId": "guardanthealth",
    "name": "Guardant Health",
    "legalName": "Guardant Health, Inc.",
    "website": "https://guardanthealth.com",
    "description": "Precision oncology company that develops and commercialises blood-based tests used for cancer screening, therapy selection and recurrence monitoring, and operates the clinical laboratories that run them.",
    "hqCity": "Palo Alto",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "public",
    "statusDetail": null,
    "sector": "Diagnostics",
    "subsector": "blood-based cancer tests (liquid biopsy)",
    "tickers": [
      "NASDAQ:GH"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - cover page, exact name of registrant",
        "url": "https://www.sec.gov/Archives/edgar/data/1576280/000157628026000037/gh-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR entity submissions, CIK 0001576280",
        "url": "https://data.sec.gov/submissions/CIK0001576280.json",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Guardant Health - official site",
        "url": "https://guardanthealth.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "SEC Form 10-K for fiscal year 2025, Item 1 Business - 'We are a leading precision oncology company'",
        "url": "https://www.sec.gov/Archives/edgar/data/1576280/000157628026000013/gh-20251231.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Guardant Health - Our Story page",
        "url": "https://guardanthealth.com/about/our-story/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - 3100 Hanover Street, Palo Alto, California 94304",
        "url": "https://www.sec.gov/Archives/edgar/data/1576280/000157628026000037/gh-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - address of principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1576280/000157628026000037/gh-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Guardant Health - Our Leaders page, 'Guardant Health, which he co-founded in 2012 with Dr. AmirAli Talasaz'",
        "url": "https://guardanthealth.com/about/our-leaders/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1576280/000157628026000037/gh-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - Common Stock, trading symbol GH, The Nasdaq Global Select Market",
        "url": "https://www.sec.gov/Archives/edgar/data/1576280/000157628026000037/gh-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR entity submissions, CIK 0001576280 - tickers GH, exchanges Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001576280.json",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "SEC EDGAR entity submissions, CIK 0001576280 - SIC Services-Medical Laboratories",
        "url": "https://data.sec.gov/submissions/CIK0001576280.json",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Guardant Health - Products, tests for cancer screening and for patients with early and advanced stage cancer",
        "url": "https://guardanthealth.com/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "moderna": {
    "companyId": "moderna",
    "name": "Moderna",
    "legalName": "Moderna, Inc.",
    "website": "https://www.modernatx.com",
    "description": "Biotechnology company that develops, manufactures and commercialises mRNA vaccines and therapeutics, with a clinical portfolio across several modalities and integrated manufacturing capabilities.",
    "hqCity": "Cambridge",
    "hqCountry": "United States",
    "foundedYear": 2010,
    "status": "public",
    "statusDetail": null,
    "sector": "Biotech",
    "subsector": "mRNA vaccines and therapeutics",
    "tickers": [
      "NASDAQ:MRNA"
    ],
    "formerNames": [
      "Moderna Therapeutics, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - cover page, exact name of registrant 'Moderna, Inc.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000150/mrna-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR entity submissions, CIK 0001682852",
        "url": "https://data.sec.gov/submissions/CIK0001682852.json",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Moderna - official site",
        "url": "https://www.modernatx.com",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - 'Since our founding in 2010, we have transformed from a research-stage company advancing programs in the field of mRNA to a commercial enterprise with a diverse clinical portfolio of vaccines and therapeutics across several modalities'",
        "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000150/mrna-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - 325 Binney Street, Cambridge, Massachusetts 02142",
        "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000150/mrna-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - address of principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000150/mrna-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - 'Since our founding in 2010'",
        "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000150/mrna-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000150/mrna-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - Common stock, trading symbol MRNA, The Nasdaq Stock Market LLC",
        "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000150/mrna-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR entity submissions, CIK 0001682852 - tickers MRNA, exchanges Nasdaq",
        "url": "https://data.sec.gov/submissions/CIK0001682852.json",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR entity submissions, CIK 0001682852 - formerNames: Moderna Therapeutics, Inc.",
        "url": "https://data.sec.gov/submissions/CIK0001682852.json",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "SEC Form D filed 2016-08-24 under the entity name 'Moderna Therapeutics, Inc.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285216000001/primary_doc.xml",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "SEC EDGAR entity submissions, CIK 0001682852 - SIC Biological Products (No Diagnostic Substances)",
        "url": "https://data.sec.gov/submissions/CIK0001682852.json",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - clinical portfolio of mRNA vaccines and therapeutics",
        "url": "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000150/mrna-20260630.htm",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "formenergy": {
    "companyId": "formenergy",
    "name": "Form Energy",
    "legalName": "Form Energy, Inc.",
    "website": "https://formenergy.com",
    "description": "American energy technology and manufacturing company developing and commercialising multi-day energy storage systems. Its first commercial product is an iron-air battery system that can store and discharge energy for up to 100 hours.",
    "hqCity": null,
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "private",
    "statusDetail": null,
    "sector": "Climate & Energy",
    "subsector": "multi-day iron-air battery energy storage",
    "tickers": [],
    "formerNames": [
      "Baseload Renewables, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC EDGAR entity submissions, CIK 0001717130 - name 'Form Energy, Inc.'",
        "url": "https://data.sec.gov/submissions/CIK0001717130.json",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Form Energy press release, 12 August 2026 - 'Form Energy, Inc., an American technology company developing and commercializing a new class of cost-effective, multi-day energy storage systems'",
        "url": "https://formenergy.com/form-energy-secures-750m-in-series-g-financing/",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Form Energy - official site",
        "url": "https://formenergy.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Form Energy - About page",
        "url": "https://formenergy.com/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Form Energy press release, 24 March 2026 - About Form Energy boilerplate",
        "url": "https://formenergy.com/form-energy-crusoe-announce-agreement-for-12-gigawatt-hours-of-iron-air-batteries-for-ai-data-centers/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Form Energy - About page, 'Form Energy is an American company' with facilities listed in West Virginia, Massachusetts and California",
        "url": "https://formenergy.com/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR entity submissions, CIK 0001717130 - business address of record in Somerville, MA, United States",
        "url": "https://data.sec.gov/submissions/CIK0001717130.json",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Form Energy - About page, 'Form Energy was founded by energy storage veterans who came together in 2017'",
        "url": "https://formenergy.com/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR entity submissions, CIK 0001717130 - only Form D and Form D/A exempt-offering filings, no registration statement, no tickers or exchanges of record",
        "url": "https://data.sec.gov/submissions/CIK0001717130.json",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Form Energy press release, 12 August 2026 - \$750 million Series G private financing round",
        "url": "https://formenergy.com/form-energy-secures-750m-in-series-g-financing/",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "SEC EDGAR entity submissions, CIK 0001717130 - formerNames: Baseload Renewables, Inc. (recorded 2017-09-19)",
        "url": "https://data.sec.gov/submissions/CIK0001717130.json",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Form Energy - About page, multi-day energy storage systems for the electric grid",
        "url": "https://formenergy.com/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Form Energy - About page, '100-hour, iron-air battery'",
        "url": "https://formenergy.com/about/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "fervoenergy": {
    "companyId": "fervoenergy",
    "name": "Fervo Energy",
    "legalName": "Fervo Energy Company",
    "website": "https://fervoenergy.com",
    "description": "Energy company that develops next-generation enhanced geothermal projects, applying horizontal drilling, fiber-optic sensing and reservoir engineering to deliver 24/7 carbon-free electricity.",
    "hqCity": "Houston",
    "hqCountry": "United States",
    "foundedYear": 2017,
    "status": "public",
    "statusDetail": null,
    "sector": "Climate & Energy",
    "subsector": "enhanced geothermal power generation",
    "tickers": [
      "NASDAQ:FRVO"
    ],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - cover page, exact name of registrant 'Fervo Energy Company'",
        "url": "https://www.sec.gov/Archives/edgar/data/1853868/000162828026056457/frvo-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC Form 424(b)(4) IPO prospectus, May 2026 - 'Fervo Energy Company, the registrant and the issuer of the Class A common stock in this offering, was incorporated as a Delaware corporation on May 26, 2017.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1853868/000162828026034849/fervoenergy-424b4.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Fervo Energy - official site",
        "url": "https://fervoenergy.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Fervo Energy IPO pricing press release, 12 May 2026 - About Fervo Energy boilerplate",
        "url": "https://fervoenergy.com/fervo-energy-announces-pricing-of-its-upsized-initial-public-offering/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Fervo Energy - official site homepage",
        "url": "https://fervoenergy.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "SEC Form 424(b)(4) IPO prospectus, May 2026 - 'Our corporate headquarters are located at 811 Main Street, Suite 1700, Houston, TX 77002.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1853868/000162828026034849/fervoenergy-424b4.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - address of principal executive offices, Houston, TX",
        "url": "https://www.sec.gov/Archives/edgar/data/1853868/000162828026056457/frvo-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - address of principal executive offices",
        "url": "https://www.sec.gov/Archives/edgar/data/1853868/000162828026056457/frvo-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "SEC Form 424(b)(4) IPO prospectus, May 2026 - incorporated as a Delaware corporation on May 26, 2017",
        "url": "https://www.sec.gov/Archives/edgar/data/1853868/000162828026034849/fervoenergy-424b4.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - securities registered under Section 12(b)",
        "url": "https://www.sec.gov/Archives/edgar/data/1853868/000162828026056457/frvo-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Fervo Energy IPO pricing press release, 12 May 2026 - trading commenced on Nasdaq on 13 May 2026",
        "url": "https://fervoenergy.com/fervo-energy-announces-pricing-of-its-upsized-initial-public-offering/",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "SEC Form 10-Q for the quarter ended June 30, 2026 - Class A Common Stock, trading symbol FRVO, The Nasdaq Stock Market LLC",
        "url": "https://www.sec.gov/Archives/edgar/data/1853868/000162828026056457/frvo-20260630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "tickers",
        "label": "SEC EDGAR entity submissions, CIK 0001853868 - tickers FRVO, exchanges Nasdaq, Form 8-A12B filed 2026-05-11",
        "url": "https://data.sec.gov/submissions/CIK0001853868.json",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "SEC EDGAR entity submissions, CIK 0001853868 - SIC Electric Services",
        "url": "https://data.sec.gov/submissions/CIK0001853868.json",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Fervo Energy IPO pricing press release, 12 May 2026 - 'large-scale deployment of enhanced geothermal systems'",
        "url": "https://fervoenergy.com/fervo-energy-announces-pricing-of-its-upsized-initial-public-offering/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "sila": {
    "companyId": "sila",
    "name": "Sila",
    "legalName": "Sila Nanotechnologies, Inc.",
    "website": "https://www.silanano.com",
    "description": "Battery materials company that develops and manufactures silicon-carbon anode materials, marketed as Titan Silicon, for lithium-ion batteries.",
    "hqCity": "Alameda",
    "hqCountry": "United States",
    "foundedYear": 2011,
    "status": "private",
    "statusDetail": null,
    "sector": "Climate & Energy",
    "subsector": "silicon anode battery materials",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Sila - Official Site",
        "url": "https://www.silanano.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Sila - Official Site footer, copyright 2026 Sila Nanotechnologies Inc.",
        "url": "https://www.silanano.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR full-text search - registrant Sila Nanotechnologies, Inc. CIK 0001530888",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Sila+Nanotechnologies%22&forms=D&hits=10",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Sila - Official Site, Titan Silicon silicon-carbon anode",
        "url": "https://www.silanano.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Sila - About Us",
        "url": "https://www.silanano.com/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Sila - About Us, incorporated under the name Sila Nanotechnologies in 2011",
        "url": "https://www.silanano.com/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Sila - About Us, headquarters Alameda, CA",
        "url": "https://www.silanano.com/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR full-text search - business location Alameda, CA",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Sila+Nanotechnologies%22&forms=D&hits=10",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Sila - About Us, headquarters Alameda, CA",
        "url": "https://www.silanano.com/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR full-text search - business state CA, state of incorporation DE",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Sila+Nanotechnologies%22&forms=D&hits=10",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR full-text search - Form D exempt private offering filed 2026-07-31 by Sila Nanotechnologies, Inc.",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Sila+Nanotechnologies%22&forms=D&hits=10",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Sila - Official Site, silicon-carbon anode technology for lithium-ion batteries",
        "url": "https://www.silanano.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Sila - Official Site, silicon-carbon anode technology for lithium-ion batteries",
        "url": "https://www.silanano.com/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "relativityspace": {
    "companyId": "relativityspace",
    "name": "Relativity Space",
    "legalName": null,
    "website": "https://www.relativityspace.com",
    "description": "Aerospace company that builds reusable rockets for access to space.",
    "hqCity": null,
    "hqCountry": null,
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "Space",
    "subsector": "orbital launch vehicles",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Relativity Space - Official Site",
        "url": "https://www.relativityspace.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Relativity Space - Official Site, builds reusable rockets that make access to space more reliable and routine",
        "url": "https://www.relativityspace.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Space.com - Former Google chief Eric Schmidt takes the reins at rocket startup Relativity Space, describing a significant financial investment in a privately held startup rather than an acquisition",
        "url": "https://www.space.com/space-exploration/launches-spacecraft/former-google-chief-eric-schmidt-takes-the-reins-at-rocket-startup-relativity-space",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Relativity Space - Official Site, reusable rockets and access to space",
        "url": "https://www.relativityspace.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Relativity Space - Official Site, reusable rockets and access to space",
        "url": "https://www.relativityspace.com/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "stokespace": {
    "companyId": "stokespace",
    "name": "Stoke Space",
    "legalName": "Stoke Space Technologies, Inc.",
    "website": "https://www.stokespace.com",
    "description": "Space company developing Nova, a fully reusable orbital launch vehicle, along with its reusable rocket engines, structures and avionics.",
    "hqCity": "Kent",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "Space",
    "subsector": "fully reusable orbital launch vehicles",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Stoke Space - Official Site",
        "url": "https://www.stokespace.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR full-text search - registrant STOKE Space Technologies, Inc.",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Stoke+Space%22",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Stoke Space - About page, Stoke Space Technologies",
        "url": "https://www.stokespace.com/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Stoke Space - Official Site, Nova 100 percent reusable rocket",
        "url": "https://www.stokespace.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Stoke Space - About page, reusable engines, structures, avionics and upper stage",
        "url": "https://www.stokespace.com/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Stoke Space - Official Site, Kent, Washington",
        "url": "https://www.stokespace.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR full-text search - business location Kent, WA on Form D filed 2026-04-16",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Stoke+Space%22",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Stoke Space - Official Site, Kent, Washington",
        "url": "https://www.stokespace.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR full-text search - business state WA, state of incorporation DE",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Stoke+Space%22",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR full-text search - Form D exempt private offering filed 2026-04-16 by STOKE Space Technologies, Inc.",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Stoke+Space%22",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Stoke Space - Official Site, reusable rockets and orbital access",
        "url": "https://www.stokespace.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Stoke Space - Official Site, Nova 100 percent reusable rocket",
        "url": "https://www.stokespace.com/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "shieldai": {
    "companyId": "shieldai",
    "name": "Shield AI",
    "legalName": "Shield AI Inc",
    "website": "https://shield.ai",
    "description": "Defense technology company building AI pilot software and autonomous aircraft, including the Hivemind autonomy stack and the V-BAT and X-BAT aircraft.",
    "hqCity": "San Diego",
    "hqCountry": "United States",
    "foundedYear": 2015,
    "status": "private",
    "statusDetail": null,
    "sector": "Defense Tech",
    "subsector": "autonomy software and uncrewed aircraft for defense",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Shield AI - Official Site",
        "url": "https://shield.ai/",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR full-text search - registrant Shield AI Inc, CIK 0001675769",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Shield+AI%22",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Shield AI - Official Site, defense-tech company building AI pilots and next-generation aircraft, Hivemind, X-BAT, V-BAT",
        "url": "https://shield.ai/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Shield AI - press release, About Shield AI boilerplate",
        "url": "https://shield.ai/shield-ai-appoints-gary-steele-as-ceo-ryan-tseng-named-president/",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Shield AI - press release boilerplate, Founded in 2015, Shield AI is a venture-backed defense technology company",
        "url": "https://shield.ai/shield-ai-appoints-gary-steele-as-ceo-ryan-tseng-named-president/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR full-text search - business location San Diego, CA on Shield AI Inc Form D filings including 2026-05-01",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Shield+AI%22",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Shield AI - press release boilerplate, offices in San Diego, Dallas, Washington D.C. and overseas",
        "url": "https://shield.ai/shield-ai-appoints-gary-steele-as-ceo-ryan-tseng-named-president/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR full-text search - business state CA, state of incorporation DE",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Shield+AI%22",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR full-text search - Form D exempt private offering filed 2026-05-01 by Shield AI Inc",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Shield+AI%22",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Shield AI - press release boilerplate, venture-backed defense technology company",
        "url": "https://shield.ai/shield-ai-appoints-gary-steele-as-ceo-ryan-tseng-named-president/",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Shield AI - Official Site, defense-tech company building AI pilots and next-generation aircraft",
        "url": "https://shield.ai/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Shield AI - Official Site, Hivemind AI pilot, V-BAT and X-BAT aircraft",
        "url": "https://shield.ai/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "hadrian": {
    "companyId": "hadrian",
    "name": "Hadrian",
    "legalName": "Hadrian Automation, Inc.",
    "website": "https://www.hadrian.co",
    "description": "Advanced manufacturing company that operates automated factories producing precision components for aerospace and defense, using its Opus factory autonomy software.",
    "hqCity": null,
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "private",
    "statusDetail": null,
    "sector": "Industrial & Manufacturing Technology",
    "subsector": "automated precision machining factories for aerospace and defense components",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Hadrian - Official Site",
        "url": "https://www.hadrian.co/",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "SEC EDGAR full-text search - registrant Hadrian Automation, Inc., CIK 0001863211",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Hadrian+Automation%22",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Hadrian - About page and site footer, Hadrian Automation",
        "url": "https://www.hadrian.co/about",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Hadrian - Official Site, Opus full stack AI-powered platform for Factory Autonomy, precision components, Factories-as-a-Service",
        "url": "https://www.hadrian.co/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Hadrian - About page, precision components and factories",
        "url": "https://www.hadrian.co/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR full-text search - Hadrian Automation, Inc. business states AZ and CA",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Hadrian+Automation%22",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Hadrian - About page, factories in Torrance, CA and Mesa, AZ",
        "url": "https://www.hadrian.co/about",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "SEC EDGAR full-text search - Hadrian Automation, Inc. appears in EDGAR only as a Form D exempt private offering filer",
        "url": "https://efts.sec.gov/LATEST/search-index?q=%22Hadrian+Automation%22",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Hadrian - Official Site, factory autonomy and precision components manufacturing",
        "url": "https://www.hadrian.co/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Hadrian - About page, factories manufacturing precision components",
        "url": "https://www.hadrian.co/about",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "vardaspaceindustries": {
    "companyId": "vardaspaceindustries",
    "name": "Varda Space Industries",
    "legalName": null,
    "website": "https://www.varda.com",
    "description": "In-space manufacturing company that processes materials in orbit and returns them to Earth using its own reentry capsules, with a focus on pharmaceutical processing.",
    "hqCity": "El Segundo",
    "hqCountry": "United States",
    "foundedYear": 2021,
    "status": "private",
    "statusDetail": null,
    "sector": "Space",
    "subsector": "in-space manufacturing and reentry capsules",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "website",
        "label": "Varda Space Industries - Official Site",
        "url": "https://www.varda.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Varda Space Industries - Official Site, microgravity-enabled life sciences company that processes materials in orbit and returns them to Earth",
        "url": "https://www.varda.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Varda Space Industries - Our story page",
        "url": "https://www.varda.com/company",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Varda Space Industries - Official Site, 225 S Aviation Blvd, El Segundo, CA 90245",
        "url": "https://www.varda.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Varda Space Industries - Our story page, El Segundo, California",
        "url": "https://www.varda.com/company",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Varda Space Industries - Official Site, 225 S Aviation Blvd, El Segundo, CA 90245",
        "url": "https://www.varda.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Varda Space Industries - Our story page, Varda was founded in January 2021 by Will Bruey and Delian Asparouhov",
        "url": "https://www.varda.com/company",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Varda Space Industries - Our story page, privately backed by investors including Khosla Ventures, Lux Capital and Founders Fund",
        "url": "https://www.varda.com/company",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Varda Space Industries - Official Site, in-orbit processing and reentry capsules",
        "url": "https://www.varda.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Varda Space Industries - Our story page, in-orbit pharmaceutical processing and reentry capsules",
        "url": "https://www.varda.com/company",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "axiomspace": {
    "companyId": "axiomspace",
    "name": "Axiom Space",
    "legalName": "Axiom Space, Inc.",
    "website": "https://www.axiomspace.com",
    "description": "Commercial human spaceflight company building Axiom Station, a commercial space station intended to succeed the International Space Station, and developing spacesuits, microgravity research and in-space manufacturing services.",
    "hqCity": "Houston",
    "hqCountry": "United States",
    "foundedYear": 2016,
    "status": "private",
    "statusDetail": null,
    "sector": "Space",
    "subsector": "commercial space stations and human spaceflight",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Axiom Space - Privacy Policy (names Axiom Space, Inc. and its Houston address)",
        "url": "https://www.axiomspace.com/privacy-policy",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Axiom Space - Official Site",
        "url": "https://www.axiomspace.com",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Axiom Space - About",
        "url": "https://www.axiomspace.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Axiom Space - Redomiciles to Texas (About Axiom Space boilerplate)",
        "url": "https://www.axiomspace.com/release/axiom-space-redomiciles-to-texas",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Axiom Space - Privacy Policy (600 Gemini St, Houston, TX 77058)",
        "url": "https://www.axiomspace.com/privacy-policy",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Axiom Space - Redomiciles to Texas (operational headquarters in Houston)",
        "url": "https://www.axiomspace.com/release/axiom-space-redomiciles-to-texas",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Axiom Space - Privacy Policy (Houston, TX, United States)",
        "url": "https://www.axiomspace.com/privacy-policy",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Axiom Space - Redomiciles to Texas (the community it has called home since its founding in 2016)",
        "url": "https://www.axiomspace.com/release/axiom-space-redomiciles-to-texas",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Axiom Space - About (founded 2016 by Kam Ghaffarian and Michael Suffredini)",
        "url": "https://www.axiomspace.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Axiom Space - Closed Oversubscribed Financing at \$525M+ (private financing final close, 4 June 2026)",
        "url": "https://www.axiomspace.com/release/axiom-space-closes-oversubscribed-financing-at-525m",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Axiom Space - Raises \$350M at Series C Close",
        "url": "https://www.axiomspace.com/release/series-c",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Axiom Space - About",
        "url": "https://www.axiomspace.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Axiom Space - About",
        "url": "https://www.axiomspace.com/about",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "sierraspace": {
    "companyId": "sierraspace",
    "name": "Sierra Space",
    "legalName": "Sierra Space Corporation",
    "website": "https://www.sierraspace.com",
    "description": "Commercial space company that builds the Dream Chaser spaceplane, the Shooting Star cargo module, satellites and satellite subsystems, propulsion and environmental control systems, and the LIFE expandable orbital habitat.",
    "hqCity": "Louisville",
    "hqCountry": "United States",
    "foundedYear": 2021,
    "status": "private",
    "statusDetail": null,
    "sector": "Space",
    "subsector": "spaceplanes, satellites and orbital infrastructure, including national security space systems",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Sierra Space - About Us (Sierra Space Corporation)",
        "url": "https://www.sierraspace.com/about-us/",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Sierra Space - Official Site",
        "url": "https://www.sierraspace.com",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Sierra Space - About Us",
        "url": "https://www.sierraspace.com/about-us/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Sierra Space - About Sierra Space boilerplate on Business Wire release",
        "url": "https://www.businesswire.com/news/home/20230626333105/en/Sierra-Space-to-Present-at-Jefferies-Virtual-Space-Summit",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Sierra Space - Contact Us (2000 Taylor Ave, Louisville, CO 80027)",
        "url": "https://www.sierraspace.com/contact-us/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Sierra Space - Contact Us",
        "url": "https://www.sierraspace.com/contact-us/",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Sierra Space - Ozmens' SNC Launches Sierra Space, An Independent Commercial Space Company, 21 April 2021",
        "url": "https://www.sierraspace.com/press-releases/ozmens-snc-launches-sierra-space-an-independent-commercial-space-company/",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "SNC - Ozmens' SNC Launches Sierra Space",
        "url": "https://www.sncorp.com/news-archive/ozmens-snc-launches-sierra-space-an-independent-commercial-space-company/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "CNBC - Sierra Space raises \$1.4 billion at \$4.5 billion valuation (first outside investment since the subsidiary was set up; company remains privately held)",
        "url": "https://www.cnbc.com/2021/11/19/sierra-space-raises-1point4-billion-at-4point5-billion-valuation.html",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Payload - Sierra Space Eyes IPO After Years of Prep (spun out of privately held Sierra Nevada Corp in 2021; still private, IPO not executed)",
        "url": "https://payloadspace.com/sierra-space-eyes-ipo-after-years-of-prep/",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Sierra Space - Official Site",
        "url": "https://www.sierraspace.com",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Sierra Space - Official Site",
        "url": "https://www.sierraspace.com",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "slack": {
    "companyId": "slack",
    "name": "Slack",
    "legalName": "Slack Technologies, LLC",
    "website": "https://slack.com",
    "description": "Workplace communications software company whose platform organises team conversations into channels and connects them to third-party applications and workflows.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2009,
    "status": "acquired",
    "statusDetail": "Acquired by Salesforce in 2021",
    "sector": "Enterprise Software",
    "subsector": "workplace messaging and team collaboration platform",
    "tickers": [],
    "formerNames": [
      "Tiny Spec, Inc.",
      "Tiny Speck, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Salesforce FY2022 Form 10-K Exhibit 21.1 List of Subsidiaries (Slack Technologies, LLC, United States of America)",
        "url": "https://www.sec.gov/Archives/edgar/data/1108524/000110852422000013/ex211listofsubsidiariesfy22.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Slack - About (footer: 2026 Slack Technologies, LLC, a Salesforce company)",
        "url": "https://slack.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Slack - Official Site",
        "url": "https://slack.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Slack - About",
        "url": "https://slack.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Slack Technologies, Inc. Form S-1, Corporate Information (500 Howard Street, San Francisco, California 94105)",
        "url": "https://www.sec.gov/Archives/edgar/data/1764925/000162828019004786/slacks-1.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Slack Technologies, Inc. Form S-1",
        "url": "https://www.sec.gov/Archives/edgar/data/1764925/000162828019004786/slacks-1.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Slack Technologies, Inc. Form S-1 (We were incorporated in 2009 as Tiny Spec, Inc., a Delaware corporation)",
        "url": "https://www.sec.gov/Archives/edgar/data/1764925/000162828019004786/slacks-1.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Salesforce - Salesforce Completes Acquisition of Slack, 21 July 2021",
        "url": "https://www.salesforce.com/news/press-releases/2021/07/21/salesforce-slack-deal-close/",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Salesforce - Salesforce Completes Acquisition of Slack, 21 July 2021",
        "url": "https://www.salesforce.com/news/press-releases/2021/07/21/salesforce-slack-deal-close/",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Slack - About (Slack was acquired by Salesforce in 2021)",
        "url": "https://slack.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "Slack Technologies, Inc. Form S-1 (Later in 2009, we changed our name to Tiny Speck, Inc. and, in 2014, we changed our name to Slack Technologies, Inc.)",
        "url": "https://www.sec.gov/Archives/edgar/data/1764925/000162828019004786/slacks-1.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Slack - About",
        "url": "https://slack.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Slack - About",
        "url": "https://slack.com/about",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "github": {
    "companyId": "github",
    "name": "GitHub",
    "legalName": "GitHub, Inc.",
    "website": "https://github.com",
    "description": "Software development platform providing Git-based code hosting, version control, code review, automation and collaboration tools for developers and organisations.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": 2008,
    "status": "acquired",
    "statusDetail": "Acquired by Microsoft in 2018",
    "sector": "Developer Tools & Infrastructure",
    "subsector": "code hosting, version control and software development collaboration platform",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Microsoft FY2019 Form 10-K (On October 25, 2018, we completed our acquisition of GitHub, Inc.)",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000156459019027952/msft-10k_20190630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "GitHub Terms of Service (GitHub, Inc.)",
        "url": "https://docs.github.com/en/site-policy/github-terms/github-terms-of-service",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "GitHub - About",
        "url": "https://github.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "GitHub - About",
        "url": "https://github.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "GitHub General Privacy Statement (GitHub, Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107)",
        "url": "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "GitHub General Privacy Statement",
        "url": "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "The GitHub Blog - A bright future for GitHub, 4 June 2018 (GitHub first launched ten years ago)",
        "url": "https://github.blog/news-insights/company-news/github-microsoft/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Microsoft FY2019 Form 10-K (completed acquisition on October 25, 2018)",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000156459019027952/msft-10k_20190630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "The Official Microsoft Blog - Microsoft completes GitHub acquisition",
        "url": "https://blogs.microsoft.com/blog/2018/10/26/microsoft-completes-github-acquisition/",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Microsoft FY2019 Form 10-K (On October 25, 2018, we completed our acquisition of GitHub, Inc.)",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000156459019027952/msft-10k_20190630.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "GitHub - About",
        "url": "https://github.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "GitHub - About",
        "url": "https://github.com/about",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "whatsapp": {
    "companyId": "whatsapp",
    "name": "WhatsApp",
    "legalName": "WhatsApp LLC",
    "website": "https://www.whatsapp.com",
    "description": "Mobile messaging service offering end-to-end encrypted text, voice and video communication and media sharing, used by more than 3 billion people in over 180 countries.",
    "hqCity": "Menlo Park",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "acquired",
    "statusDetail": "Acquired by Facebook, now Meta Platforms, in 2014",
    "sector": "Consumer",
    "subsector": "mobile messaging application",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Meta Platforms, Inc. Form 10-K for 2025, Exhibit 21.1 List of Subsidiaries (WhatsApp LLC, Delaware)",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-12312025x10kexhibit211.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "WhatsApp Business Terms of Service (WhatsApp LLC)",
        "url": "https://www.whatsapp.com/legal/business-terms",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "WhatsApp - About",
        "url": "https://www.whatsapp.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "WhatsApp - About",
        "url": "https://www.whatsapp.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "WhatsApp Business Terms of Service (WhatsApp LLC, 1 Meta Way, Menlo Park, CA 94025)",
        "url": "https://www.whatsapp.com/legal/business-terms",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "WhatsApp Business Terms of Service",
        "url": "https://www.whatsapp.com/legal/business-terms",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Facebook, Inc. Form 8-K, Item 2.01 (On October 6, 2014, Facebook, Inc. completed its previously announced acquisition of WhatsApp Inc.)",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000132680114000037/fb_8-kxclosingxofxwhatsapp.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Facebook, Inc. Form 8-K, Item 2.01, completion 6 October 2014",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000132680114000037/fb_8-kxclosingxofxwhatsapp.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Meta - Facebook to Acquire WhatsApp, 19 February 2014 (announcement)",
        "url": "https://about.fb.com/news/2014/02/facebook-to-acquire-whatsapp/",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "WhatsApp - About",
        "url": "https://www.whatsapp.com/about",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "WhatsApp - About",
        "url": "https://www.whatsapp.com/about",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "instagram": {
    "companyId": "instagram",
    "name": "Instagram",
    "legalName": "Instagram, LLC",
    "website": "https://www.instagram.com",
    "description": "Mobile application and social platform for creating and sharing photos and videos.",
    "hqCity": null,
    "hqCountry": null,
    "foundedYear": null,
    "status": "acquired",
    "statusDetail": "Acquired by Facebook, now Meta Platforms, in 2012",
    "sector": "Consumer",
    "subsector": "photo and video sharing social platform",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Meta Platforms, Inc. Form 10-K for 2025, Exhibit 21.1 List of Subsidiaries (Instagram, LLC, Delaware)",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-12312025x10kexhibit211.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Instagram - About Us",
        "url": "https://about.instagram.com/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Instagram - About Us",
        "url": "https://about.instagram.com/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Forbes - Facebook Officially Closes Instagram Deal, 6 September 2012",
        "url": "https://www.forbes.com/sites/tomiogeron/2012/09/06/facebook-officially-closes-instagram-deal/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "TechCrunch - Facebook Closes Instagram Acquisition, 6 September 2012",
        "url": "https://techcrunch.com/2012/09/06/facebook-closes-instagram-acquisition-instagram-announces-5-billion-photos-shared/",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "TechCrunch - Facebook Closes Instagram Acquisition, 6 September 2012 (quotes both companies confirming the deal has closed)",
        "url": "https://techcrunch.com/2012/09/06/facebook-closes-instagram-acquisition-instagram-announces-5-billion-photos-shared/",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Facebook Investor Relations - Facebook to Acquire Instagram, 9 April 2012 (announcement)",
        "url": "https://s21.q4cdn.com/399680738/files/doc_news/2012/FCBK_News_2012_4_9_Financial_Releases.pdf",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "FTC - Facebook, Inc. / Instagram, Inc. closing letter, 22 August 2012 (regulatory clearance ahead of closing)",
        "url": "https://www.ftc.gov/legal-library/browse/cases-proceedings/closing-letters/facebook-inc-instagram-inc",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Instagram - About Us",
        "url": "https://about.instagram.com/about-us",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Instagram - About Us",
        "url": "https://about.instagram.com/about-us",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "oculus": {
    "companyId": "oculus",
    "name": "Oculus",
    "legalName": "Oculus VR, Inc.",
    "website": null,
    "description": "Virtual reality company that developed the Oculus Rift headset and a consumer virtual reality platform.",
    "hqCity": "Irvine",
    "hqCountry": "United States",
    "foundedYear": 2012,
    "status": "acquired",
    "statusDetail": "Acquired by Facebook, Inc. in 2014",
    "sector": "Hardware",
    "subsector": "virtual reality headsets",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Facebook - Facebook to Acquire Oculus (official announcement, 25 March 2014)",
        "url": "https://about.fb.com/news/2014/03/facebook-to-acquire-oculus/",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Facebook Inc Form 10-K for FY2014 - SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000132680115000006/fb-12312014x10k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Facebook - Facebook to Acquire Oculus (official announcement)",
        "url": "https://about.fb.com/news/2014/03/facebook-to-acquire-oculus/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Facebook - Facebook to Acquire Oculus: 'Oculus will maintain its headquarters in Irvine, CA'",
        "url": "https://about.fb.com/news/2014/03/facebook-to-acquire-oculus/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Facebook - Facebook to Acquire Oculus: 'Oculus will maintain its headquarters in Irvine, CA'",
        "url": "https://about.fb.com/news/2014/03/facebook-to-acquire-oculus/",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "Facebook - Facebook to Acquire Oculus: 'Founded in 2012, Oculus VR, Inc.'",
        "url": "https://about.fb.com/news/2014/03/facebook-to-acquire-oculus/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Facebook Inc Form 10-K FY2014: 'in July 2014 we completed our acquisition of Oculus VR, Inc.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000132680115000006/fb-12312014x10k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Facebook Inc Form 10-K FY2014: 'in July 2014 we completed our acquisition of Oculus VR, Inc.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000132680115000006/fb-12312014x10k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Facebook - Facebook to Acquire Oculus (describes Oculus Rift virtual reality headset)",
        "url": "https://about.fb.com/news/2014/03/facebook-to-acquire-oculus/",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Facebook - Facebook to Acquire Oculus (describes Oculus Rift virtual reality headset)",
        "url": "https://about.fb.com/news/2014/03/facebook-to-acquire-oculus/",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "cruise": {
    "companyId": "cruise",
    "name": "Cruise",
    "legalName": "Cruise LLC",
    "website": "https://www.getcruise.com",
    "description": "Autonomous vehicle technology company that developed self-driving systems and operated a driverless ride-hail service until that service was ended.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "acquired",
    "statusDetail": "Acquired by General Motors in 2016; GM ended funding of Cruise robotaxi development in December 2024 and acquired full ownership in 2025, with Cruise LLC still a GM subsidiary",
    "sector": "Mobility",
    "subsector": "autonomous vehicle technology",
    "tickers": [],
    "formerNames": [
      "Cruise Automation, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "General Motors Company Form 10-K FY2025, Exhibit 21 Subsidiaries as of December 31, 2025 - lists 'Cruise LLC', Delaware",
        "url": "https://www.sec.gov/Archives/edgar/data/1467858/000146785826000013/ex-21x12312025.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Cruise - official site",
        "url": "https://www.getcruise.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "GM Form 10-Q Q2 2016: 'On May 12, 2016 we acquired all of the outstanding capital stock of Cruise Automation, Inc. (Cruise), an autonomous vehicle technology company'",
        "url": "https://www.sec.gov/Archives/edgar/data/1467858/000146785816000341/gm2016q2.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Cruise - official site (states Cruise ridehail services are not available at this time)",
        "url": "https://www.getcruise.com/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "CBS News San Francisco - 'San Francisco-based start-up Cruise Automation'",
        "url": "https://www.cbsnews.com/sanfrancisco/news/gm-stop-funding-troubled-cruise-autonomous-vehicles-robotaxis-san-francisco/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "CBS News San Francisco - 'San Francisco-based start-up Cruise Automation'",
        "url": "https://www.cbsnews.com/sanfrancisco/news/gm-stop-funding-troubled-cruise-autonomous-vehicles-robotaxis-san-francisco/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "GM Form 10-Q Q2 2016 - acquisition of all outstanding capital stock of Cruise Automation, Inc. completed 12 May 2016",
        "url": "https://www.sec.gov/Archives/edgar/data/1467858/000146785816000341/gm2016q2.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "GM Form 10-K FY2025, Exhibit 21 - Cruise LLC still listed as a GM subsidiary as of 31 December 2025",
        "url": "https://www.sec.gov/Archives/edgar/data/1467858/000146785826000013/ex-21x12312025.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "GM Form 10-Q Q2 2016 - completion of the Cruise Automation acquisition on 12 May 2016",
        "url": "https://www.sec.gov/Archives/edgar/data/1467858/000146785816000341/gm2016q2.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "GM newsroom, 10 December 2024 - GM will no longer fund Cruise robotaxi development and will combine the majority-owned Cruise LLC and GM technical teams",
        "url": "https://news.gm.com/newsroom.detail.html/Pages/news/us/en/2024/dec/1210-gm.html",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "GM newsroom, 4 February 2025 - 'GM acquires full ownership of Cruise'; Cruise now a wholly owned subsidiary of GM",
        "url": "https://news.gm.com/home.detail.html/Pages/topic/us/en/2025/feb/0204-cruise.html",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "GM Form 10-Q Q2 2016 - describes Cruise as 'an autonomous vehicle technology company'",
        "url": "https://www.sec.gov/Archives/edgar/data/1467858/000146785816000341/gm2016q2.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "GM Form 10-Q Q2 2016 - describes Cruise as 'an autonomous vehicle technology company'",
        "url": "https://www.sec.gov/Archives/edgar/data/1467858/000146785816000341/gm2016q2.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "GM Form 10-Q Q2 2016 names the acquired entity 'Cruise Automation, Inc. (Cruise)'; GM Exhibit 21 FY2025 lists the entity as 'Cruise LLC'",
        "url": "https://www.sec.gov/Archives/edgar/data/1467858/000146785816000341/gm2016q2.htm",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "nest": {
    "companyId": "nest",
    "name": "Nest",
    "legalName": "Nest Labs, Inc.",
    "website": null,
    "description": "Smart-home technology company that developed connected home devices such as thermostats and smoke alarms.",
    "hqCity": "Palo Alto",
    "hqCountry": "United States",
    "foundedYear": 2010,
    "status": "acquired",
    "statusDetail": "Acquired by Google Inc. in 2014; Nest was folded into Google's hardware team in 2018",
    "sector": "Hardware",
    "subsector": "connected home devices",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Google Inc Form 10-K FY2014, Acquisitions note: 'In February 2014, we completed the acquisition of Nest Labs, Inc. (Nest)'",
        "url": "https://www.sec.gov/Archives/edgar/data/1288776/000128877615000008/R13.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Google Inc Form 10-K FY2014, Acquisitions note: 'a company whose mission is to reinvent devices in the home such as thermostats and smoke alarms'",
        "url": "https://www.sec.gov/Archives/edgar/data/1288776/000128877615000008/R13.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "CBS News San Francisco - 'Nest Labs is based in Palo Alto.'",
        "url": "https://www.cbsnews.com/sanfrancisco/news/google-to-buy-palo-altos-nest-labs-for-3-2-billion/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "CBS News San Francisco - 'Nest Labs is based in Palo Alto.'",
        "url": "https://www.cbsnews.com/sanfrancisco/news/google-to-buy-palo-altos-nest-labs-for-3-2-billion/",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "CBS News San Francisco - 'It was founded in 2010'",
        "url": "https://www.cbsnews.com/sanfrancisco/news/google-to-buy-palo-altos-nest-labs-for-3-2-billion/",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Google Inc Form 10-K FY2014, Acquisitions note - acquisition of Nest Labs, Inc. completed February 2014",
        "url": "https://www.sec.gov/Archives/edgar/data/1288776/000128877615000008/R13.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Google Inc Form 10-K FY2014, Acquisitions note - acquisition of Nest Labs, Inc. completed February 2014",
        "url": "https://www.sec.gov/Archives/edgar/data/1288776/000128877615000008/R13.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Google official blog, 7 February 2018 - 'Nest to join forces with Google's hardware team'",
        "url": "https://blog.google/company-news/inside-google/company-announcements/nest-join-forces-googles-hardware-team/",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Google Inc Form 10-K FY2014 - Nest described as making home devices such as thermostats and smoke alarms",
        "url": "https://www.sec.gov/Archives/edgar/data/1288776/000128877615000008/R13.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Google Inc Form 10-K FY2014 - Nest described as making home devices such as thermostats and smoke alarms",
        "url": "https://www.sec.gov/Archives/edgar/data/1288776/000128877615000008/R13.htm",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "twitch": {
    "companyId": "twitch",
    "name": "Twitch",
    "legalName": "Twitch Interactive, Inc.",
    "website": "https://www.twitch.tv",
    "description": "Live video streaming platform and community where people broadcast, watch and talk about video games.",
    "hqCity": "San Francisco",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "acquired",
    "statusDetail": "Acquired by Amazon.com, Inc. in 2014",
    "sector": "Gaming",
    "subsector": "live video streaming platform for gamers",
    "tickers": [],
    "formerNames": [
      "Justin.tv, Inc."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "Amazon.com, Inc. Form 8-K filed 25 September 2014: 'Amazon.com, Inc. completed its acquisition of Twitch Interactive, Inc.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1018724/000101872414000046/amzn-2014september22x8k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Amazon.com, Inc. Form 10-K FY2025 Exhibit 23.1 - references the 'Twitch Interactive, Inc. Amended and Restated 2007 Stock Plan'",
        "url": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231xex231.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "Twitch - official site, About page",
        "url": "https://www.twitch.tv/p/en/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Amazon press release, 25 August 2014: 'Twitch is the leading live video platform and community for gamers'",
        "url": "https://press.aboutamazon.com/2014/8/amazon-com-to-acquire-twitch",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Twitch - official About page",
        "url": "https://www.twitch.tv/p/en/about/",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "SEC EDGAR entity record for the company (CIK 0001558564), business address 23 Geary Street #800, San Francisco, CA 94108, Delaware incorporation",
        "url": "https://data.sec.gov/submissions/CIK0001558564.json",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "SEC EDGAR entity record for the company (CIK 0001558564), business address San Francisco, CA",
        "url": "https://data.sec.gov/submissions/CIK0001558564.json",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Amazon.com, Inc. Form 8-K filed 25 September 2014, completion of the Twitch acquisition",
        "url": "https://www.sec.gov/Archives/edgar/data/1018724/000101872414000046/amzn-2014september22x8k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Amazon.com, Inc. Form 8-K filed 25 September 2014: 'On September 25, 2014, Amazon.com, Inc. completed its acquisition of Twitch Interactive, Inc.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1018724/000101872414000046/amzn-2014september22x8k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Amazon press release, 25 August 2014 - Twitch described as the leading live video platform and community for gamers",
        "url": "https://press.aboutamazon.com/2014/8/amazon-com-to-acquire-twitch",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Amazon press release, 25 August 2014 - Twitch described as the leading live video platform and community for gamers",
        "url": "https://press.aboutamazon.com/2014/8/amazon-com-to-acquire-twitch",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "GameSpot, 10 February 2014 - 'Twitch Interactive, Inc. is replacing Justin.tv, Inc. as the company's corporate umbrella name'",
        "url": "https://www.gamespot.com/articles/twitch-interactive-replaces-justin-tv-as-parent-co/1100-6437066/",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "The Next Web, 10 February 2014 - Justin.tv, owner of Twitch, changes its name to Twitch Interactive",
        "url": "https://thenextweb.com/news/justin-tv-owner-video-game-streaming-service-twitch-changes-name-twitch-interactive",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "youtube": {
    "companyId": "youtube",
    "name": "YouTube",
    "legalName": "YouTube, LLC",
    "website": "https://www.youtube.com",
    "description": "Online video platform that lets users find, upload, view and share video content.",
    "hqCity": "San Bruno",
    "hqCountry": "United States",
    "foundedYear": null,
    "status": "acquired",
    "statusDetail": "Acquired by Google Inc. in 2006",
    "sector": "Consumer",
    "subsector": "online video sharing platform",
    "tickers": [],
    "formerNames": [],
    "sources": [
      {
        "field": "legalName",
        "label": "Network-1 Technologies, Inc. Form 8-K filed 26 April 2024 - names 'Google Inc and YouTube, LLC' as litigation defendants",
        "url": "https://www.sec.gov/Archives/edgar/data/1065078/000107261324000406/form8k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Google Inc Form 8-K filed 17 November 2006 - names the acquired entity 'YouTube, Inc.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1288776/000119312506238320/d8k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "YouTube - official About site",
        "url": "https://about.youtube/",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "Google Inc Form 10-K FY2006: 'Google Video and YouTube let users find, upload, view and share video content worldwide.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1288776/000119312507044494/d10k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "Google/YouTube Help - copyright removal designated agent address: 'Copyright Operations, YouTube (Google LLC), 901 Cherry Ave., San Bruno, CA 94066, USA'",
        "url": "https://support.google.com/youtube/answer/2807622",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "Google/YouTube Help - designated agent address, San Bruno, CA 94066, USA",
        "url": "https://support.google.com/youtube/answer/2807622",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Google Inc Form 8-K, Item 2.01: 'On November 13, 2006, we completed our previously announced acquisition of YouTube, Inc.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1288776/000119312506238320/d8k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Google Inc Form 8-K, Item 2.01: 'On November 13, 2006, we completed our previously announced acquisition of YouTube, Inc.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1288776/000119312506238320/d8k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "Google Inc Form 10-K FY2006 - YouTube described as letting users find, upload, view and share video content",
        "url": "https://www.sec.gov/Archives/edgar/data/1288776/000119312507044494/d10k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "Google Inc Form 10-K FY2006 - YouTube described as letting users find, upload, view and share video content",
        "url": "https://www.sec.gov/Archives/edgar/data/1288776/000119312507044494/d10k.htm",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  },
  "linkedin": {
    "companyId": "linkedin",
    "name": "LinkedIn",
    "legalName": "LinkedIn Corporation",
    "website": "https://www.linkedin.com",
    "description": "Operates an online professional network used by members to connect with contacts and by employers and marketers to reach them.",
    "hqCity": "Mountain View",
    "hqCountry": "United States",
    "foundedYear": 2003,
    "status": "acquired",
    "statusDetail": "Acquired by Microsoft Corporation in 2016",
    "sector": "Consumer",
    "subsector": "online professional networking platform",
    "tickers": [],
    "formerNames": [
      "LinkedIn, Ltd."
    ],
    "sources": [
      {
        "field": "legalName",
        "label": "LinkedIn Corporation Form 10-K FY2015 cover page - SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1271024/000127102416000035/a20151231-10xkdocument.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "legalName",
        "label": "Microsoft Corporation Form 8-K filed 8 December 2016, Item 2.01 - names LinkedIn Corporation",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312516788575/d259484d8k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "website",
        "label": "LinkedIn Corporation Form 10-K FY2015 - company website given as www.linkedin.com",
        "url": "https://www.sec.gov/Archives/edgar/data/1271024/000127102416000035/a20151231-10xkdocument.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "description",
        "label": "LinkedIn Corporation Form 10-K FY2015, Item 1 Business: 'We are the world's largest professional network on the Internet'",
        "url": "https://www.sec.gov/Archives/edgar/data/1271024/000127102416000035/a20151231-10xkdocument.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCity",
        "label": "LinkedIn Corporation Form 10-K FY2015 cover page - principal executive offices, 2029 Stierlin Court, Mountain View, CA 94043",
        "url": "https://www.sec.gov/Archives/edgar/data/1271024/000127102416000035/a20151231-10xkdocument.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "hqCountry",
        "label": "LinkedIn Corporation Form 10-K FY2015 cover page - Mountain View, CA 94043",
        "url": "https://www.sec.gov/Archives/edgar/data/1271024/000127102416000035/a20151231-10xkdocument.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "foundedYear",
        "label": "LinkedIn Corporation Form 10-K FY2015: 'We were incorporated in Delaware in March 2003 under the name LinkedIn, Ltd.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1271024/000127102416000035/a20151231-10xkdocument.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "status",
        "label": "Microsoft Corporation Form 8-K filed 8 December 2016, Item 2.01 Completion of Acquisition",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312516788575/d259484d8k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "statusDetail",
        "label": "Microsoft Corporation Form 8-K filed 8 December 2016, Item 2.01 - merger completed 8 December 2016, LinkedIn became a wholly owned Microsoft subsidiary",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312516788575/d259484d8k.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "sector",
        "label": "LinkedIn Corporation Form 10-K FY2015, Item 1 Business - professional network with over 400 million members",
        "url": "https://www.sec.gov/Archives/edgar/data/1271024/000127102416000035/a20151231-10xkdocument.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "subsector",
        "label": "LinkedIn Corporation Form 10-K FY2015, Item 1 Business - professional network with over 400 million members",
        "url": "https://www.sec.gov/Archives/edgar/data/1271024/000127102416000035/a20151231-10xkdocument.htm",
        "checked": "2026-09-03"
      },
      {
        "field": "formerNames",
        "label": "LinkedIn Corporation Form 10-K FY2015: 'We were incorporated in Delaware in March 2003 under the name LinkedIn, Ltd. and changed our name to LinkedIn Corporation in January 2005.'",
        "url": "https://www.sec.gov/Archives/edgar/data/1271024/000127102416000035/a20151231-10xkdocument.htm",
        "checked": "2026-09-03"
      }
    ],
    "lastChecked": "2026-09-03"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COMPANIES: COMPANIES };
}
