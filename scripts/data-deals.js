/* ============================================================
   DATA-DEALS.JS  -  dated, sourced investment records

   Deal-level data for the Power Alerts engine. Every row is one
   firm's participation in one financing, carrying the date, the
   source URL, and a verbatim quote naming the firm and the
   portfolio company.

   459 rows across 24 firms, from two passes that sampled in
   DIFFERENT ways. The difference is the most important thing in
   this file, because it decides which metrics are legitimate.

   PASS 1 (2026-08-14) - QUOTA SAMPLE, 140 rows
     Each firm contributed its most recent sourceable deals, capped
     at 6. Filling a quota means taking whatever is easiest to find,
     and that is always the most recent: 1 deal recorded in 2025-02
     rising to 40 in 2026-07. Row counts from this pass measure the
     cap and the recency of press coverage, not investing.

   PASS 2 (2026-08-20) - WINDOWED SWEEP, 350 rows
     Every firm searched exhaustively across 2026-01-01 to 2026-06-30
     using one method per firm, recorded in DEAL_COVERAGE below.
     No quota. The month distribution came out flat rather than
     ramping toward the collection date, which is the property that
     makes comparison inside this window meaningful:

       01 58  02 53  03 66  04 56  05 47  06 98

     Q1 177, Q2 201. Compare with pass 1's 1/4/4/6/12/47/66 by quarter.

   WHAT IS PERMITTED
     A period-over-period comparison BETWEEN QUARTERS INSIDE the
     researched window, read as a floor. Gate it on DEAL_COVERAGE:
     both periods must fall inside a firm's declared window.

   WHAT IS STILL FORBIDDEN
     1. Any comparison that CROSSES the window boundary. Rows dated
        before 2026-01-01 or after 2026-06-30 come from the quota
        pass, so a Q4-2025 against Q1-2026 comparison measures the
        change in method.
     2. Cross-firm volume comparison outside the window, for the
        same reason as before: firms were capped at the same number.
     3. Treating any count as a total. See below.

   WHY EVERY FIRM IS complete:false
     Not an unfinished job - a finding. Almost no venture firm
     publishes a dated, enumerable log of every round it joins.
     Firms post about deals they led and deals they are proud of;
     participation in someone else's syndicate usually leaves no
     trace on the firm's own site. This was proved, not assumed:

       - Bessemer's /news page is a genuinely good dated feed, yet
         press search found four in-window BVP rounds absent from it.
       - 8VC's dated archive is fully enumerable yet omits the Latus
         Bio extension that 8VC led.
       - Radical's /archive lists all 273 posts it has ever
         published and never mentions Waabi, where Radical is named
         as an investor by another source.

     A firm whose own archive is complete and still misses its own
     deals cannot be marked complete from that archive. So every
     count here is a FLOOR: at least this many, never exactly.

   The two passes also cross-check each other. Pass 2 missed 28
   in-window rows that pass 1 already held, at a rate that rises
   from 2% in January to about 10% in Q2 - further evidence that
   neither pass is exhaustive and that the merge beats either alone.

   Where both passes held the same deal, the later pass wins.

   Em dashes in quoted evidence were converted to hyphens for
   consistency with the rest of the site.
   ============================================================ */

const FIRM_DEALS = [
  {
    "firmSlug": "8vc",
    "company": "Outset",
    "announcedDate": "2025-06-11",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Market Research Software",
    "sectorEvidence": "Outset, the first AI-moderated research platform providing the scale and speed of a survey with the depth of a one-to-one interview",
    "role": "lead",
    "coInvestors": [
      "Future Back Ventures by Bain & Company",
      "Y Combinator",
      "Adverb Ventures",
      "Rebel Fund",
      "Genius Ventures",
      "Ritual Capital",
      "Alt Capital"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2025/06/11/3097668/0/en/Startup-Outset-Raises-17M-Series-A-to-Help-Enterprises-Scale-Accelerate-Customer-Research-with-AI-Agent-led-Interviews.html",
    "sourceType": "press-release",
    "evidence": "Outset, the first AI-moderated research platform providing the scale and speed of a survey with the depth of a one-to-one interview, announced today that it has raised a $17M Series A round to bring AI-led research to Fortune 500 enterprises. The round was led by 8VC, with participation from new investor Future Back Ventures by Bain & Company and existing investors Y Combinator, Adverb Ventures, Rebel Fund, Genius Ventures, Ritual Capital, and Alt Capital."
  },
  {
    "firmSlug": "8vc",
    "company": "Erebor Bank",
    "announcedDate": "2026-01-05",
    "datePrecision": "day",
    "round": null,
    "sector": "Banking",
    "sectorEvidence": "Erebor Bank, a Columbus, Ohio-based stablecoin bank",
    "role": null,
    "coInvestors": [
      "Lux Capital",
      "Founders Fund",
      "Haun Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/erebor-bank-raises-350m-in-funding-at-4-35-billion-post-money-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Erebor Bank, a Columbus, Ohio-based stablecoin bank, raised $350m in funding at a $4.35b post-money valuation. The round was led by Lux Capital with participation from Founders Fund, Haun Ventures, and 8VC."
  },
  {
    "firmSlug": "8vc",
    "company": "WithCoverage",
    "announcedDate": "2026-01-13",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Insurtech",
    "sectorEvidence": "WithCoverage, a NYC-based provider of an AI-enabled risk management platform",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "Sequoia Capital",
      "Crystal Venture Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/withcoverage-raises-42m-in-series-b-financing.html",
    "sourceType": "reputable-press",
    "evidence": "WithCoverage, a NYC-based provider of an AI-enabled risk management platform, raised $42m in Series B financing. The round was led by Sequoia Capital and Khosla Ventures, with participation from 8VC and Crystal Venture Partners."
  },
  {
    "firmSlug": "8vc",
    "company": "Mendra",
    "announcedDate": "2026-01-23",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Biopharma",
    "sectorEvidence": "Mendra, a San Francisco, CA-based biopharmaceutical company developing therapies for rare disease medicines",
    "role": null,
    "coInvestors": [
      "Lux Capital",
      "OrbiMed",
      "5AM Ventures",
      "Wing VC"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/mendra-raises-82m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Mendra, a San Francisco, CA-based biopharmaceutical company developing therapies for rare disease medicines, raised $82M in Series A funding. The round was co-led by OrbiMed, 8VC, and 5AM Ventures with participation from Lux Capital and Wing VC."
  },
  {
    "firmSlug": "8vc",
    "company": "Armadin",
    "announcedDate": "2026-03-10",
    "datePrecision": "day",
    "round": "Seed and Series A",
    "sector": "Cybersecurity",
    "sectorEvidence": "Armadin, an AI-native cybersecurity company focused on building the ultimate attacker",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Accel",
      "Google Ventures",
      "Menlo Ventures",
      "In-Q-Tel",
      "Ballistic Ventures"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/armadin-secures-record-breaking-189-9m-in-seed-and-series-a-funding-to-combat-the-era-of-ai-driven-hyperattacks-302709318.html",
    "sourceType": "press-release",
    "evidence": "SAN FRANCISCO, March 10, 2026 /PRNewswire/ -- Armadin, an AI-native cybersecurity company focused on building the ultimate attacker, today announced it has raised an industry record $189.9 million in Seed and Series A funding. Led by Accel, with participation from Google Ventures, Kleiner Perkins, Menlo Ventures, In-Q-Tel, and follow-on investment from 8VC and Ballistic Ventures, this marks the largest combined Seed and Series A funding round in cybersecurity history."
  },
  {
    "firmSlug": "8vc",
    "company": "Edra",
    "announcedDate": "2026-03-18",
    "datePrecision": "day",
    "round": "seed",
    "sector": "Enterprise Software",
    "sectorEvidence": "Edra takes the unstructured exhaust of daily work and extracts the actual process in a playbook you can review, edit, and update.",
    "role": null,
    "coInvestors": [],
    "sourceUrl": "https://8vc.com/resources/announcing-our-investment-in-edra",
    "sourceType": "firm-site",
    "evidence": "Edra x 8VC\n\nToday, Edra announced Series A led by Sequoia. Building on our $6 million seed, they have now raised over $30 million in funding."
  },
  {
    "firmSlug": "8vc",
    "company": "PointOne",
    "announcedDate": "2026-03-23",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Legal Tech",
    "sectorEvidence": "PointOne, the time entry startup",
    "role": "lead",
    "coInvestors": [
      "Bessemer Venture Partners",
      "General Catalyst",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.artificiallawyer.com/2026/03/23/pointone-raises-16m-10xs-revenue/",
    "sourceType": "reputable-press",
    "evidence": "PointOne, the time entry startup, has raised a $16m Series A, led by 8VC, with continued participation from Bessemer Venture Partners, General Catalyst, and Y Combinator."
  },
  {
    "firmSlug": "8vc",
    "company": "Glimpse",
    "announcedDate": "2026-03-25",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "CPG Software",
    "sectorEvidence": "Glimpse automatically files disputes, follows through on the process, applies recovered cash, and syncs everything back to the brand's ERP.",
    "role": null,
    "coInvestors": [
      "Andreessen Horowitz",
      "YC"
    ],
    "sourceUrl": "https://techcrunch.com/2026/03/25/a16z-backed-glimpse-raises-new-funds-accelerates-dispute-tracking-automation-for-cpg-brands/",
    "sourceType": "reputable-press",
    "evidence": "Glimpse announced on Wednesday a $35 million Series A led by Andreessen Horowitz, with participation from 8VC and YC."
  },
  {
    "firmSlug": "8vc",
    "company": "Saronic",
    "announcedDate": "2026-03-31",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Defense Tech",
    "sectorEvidence": "Saronic Technologies today announced it has closed $1.75 billion in Series D funding to advance its mission of ensuring maritime superiority for the U.S. and its allies by delivering autonomous platforms at scale across defense and commercial sectors.",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "Advent International",
      "Bessemer Venture Partners",
      "DFJ Growth",
      "BAM Elevate",
      "Caffeinated Capital",
      "Andreessen Horowitz",
      "Franklin Templeton",
      "Kleiner Perkins"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/saronic-closes-1-75b-series-d-at-9-25b-valuation-to-accelerate-a-new-era-of-maritime-autonomy-302729238.html",
    "sourceType": "press-release",
    "evidence": "Saronic welcomes Advent International, Bessemer Venture Partners, DFJ Growth, BAM Elevate, and other new partners and recognizes the continued commitment of its existing investors, including 8VC, Caffeinated Capital, Andreessen Horowitz, Elad Gil, and Franklin Templeton."
  },
  {
    "firmSlug": "8vc",
    "company": "Cognition",
    "announcedDate": "2026-05-28",
    "datePrecision": "day",
    "round": null,
    "sector": "AI Software Engineering",
    "sectorEvidence": "Cognition, a San Francisco, CA-based developer of autonomous AI software engineering agents",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "Lux Capital",
      "General Catalyst",
      "Ribbit Capital",
      "Atreides",
      "Layer Global",
      "Founders Fund",
      "Bain Capital Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/cognition-raises-over-1-billion-in-funding-at-26-billion-post-money-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Cognition, a San Francisco, CA-based developer of autonomous AI software engineering agents, raised over $1 billion in a funding round at a $26 billion post-money valuation.\n\nThe round was co-led by Lux Capital and General Catalyst, with participation from 8VC, Ribbit Capital, Atreides, Layer Global, and returning backers including Founders Fund, Elad Gil, and Bain Capital Ventures."
  },
  {
    "firmSlug": "8vc",
    "company": "Saris AI",
    "announcedDate": "2026-05-28",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Financial Services Automation",
    "sectorEvidence": "Saris meets financial institutions exactly where they are and automates the complex, multi-turn back-office workflows that prior generations of technology couldn't touch.",
    "role": "lead",
    "coInvestors": [
      "Audacious Ventures",
      "Homebrew",
      "BankTech Ventures",
      "Service Credit Union"
    ],
    "sourceUrl": "https://8vc.com/resources/announcing-our-investment-in-saris-ai",
    "sourceType": "firm-site",
    "evidence": "Today, Saris announced its $28.8 million Series A led by 8VC, with participation from Audacious Ventures, Homebrew, BankTech Ventures, and Service Credit Union."
  },
  {
    "firmSlug": "8vc",
    "company": "Generalist AI",
    "announcedDate": "2026-06-04",
    "datePrecision": "day",
    "round": null,
    "sector": "Robotics",
    "sectorEvidence": "Generalist AI, a San Francisco, CA-based developer of embodied robotics intelligence and foundation models",
    "role": "participant",
    "coInvestors": [
      "Radical Ventures",
      "Union Square Ventures",
      "Hanabi Capital",
      "NVentures (Nvidia)",
      "Bezos Expeditions"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/generalist-ai-raises-400m-in-funding-at-2-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Generalist AI, a San Francisco, CA-based developer of embodied robotics intelligence and foundation models, raised $400m in funding at a $2 billion valuation. The round was led by Radical Ventures, with participation from 8VC, Union Square Ventures, Hanabi Capital, Nvidia's NVentures, and Bezos Expeditions."
  },
  {
    "firmSlug": "8vc",
    "company": "Ramp",
    "announcedDate": "2026-06-04",
    "datePrecision": "day",
    "round": "Series F",
    "sector": "Fintech",
    "sectorEvidence": "Ramp, a NYC-based financial operations platform",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "ICONIQ",
      "GIC",
      "Ontario Teachers' Pension Plan",
      "Goldman Sachs Alternatives",
      "D.E. Shaw & Co.",
      "Morgan Stanley Investment Management",
      "Generation Investment Management",
      "Insight Partners",
      "BroadLight Capital",
      "Founders Fund",
      "Lightspeed Venture Partners",
      "D1 Capital Partners",
      "T. Rowe Price",
      "General Catalyst",
      "Alpha Wave Global",
      "137 Ventures",
      "Thrive Capital",
      "Coatue",
      "Sands Capital",
      "1789 Capital",
      "Avenir Growth",
      "BoxGroup",
      "Pinegrove Venture Partners",
      "Definition Capital",
      "Stripes"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/ramp-raises-750m-in-series-f-funding-at-44-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Ramp, a NYC-based financial operations platform, raises $750M in Series F funding, at $44 Billion valuation. ... Previous investors who participated are Founders Fund, Lightspeed Venture Partners, D1 Capital Partners, T. Rowe Price, General Catalyst, Alpha Wave Global, 137 Ventures, Thrive Capital, Coatue, Sands Capital, Khosla Ventures, 1789 Capital, Avenir Growth, BoxGroup, 8VC, Pinegrove Venture Partners, Definition Capital, and Stripes."
  },
  {
    "firmSlug": "8vc",
    "company": "Sable",
    "announcedDate": "2026-07-16",
    "datePrecision": "day",
    "round": null,
    "sector": "Enterprise AI Agents",
    "sectorEvidence": "Sable, the first AI employee built to lead customer interactions end-to-end",
    "role": "lead",
    "coInvestors": [
      "Sequoia Capital",
      "BoxGroup",
      "SV Angel",
      "Valor Atreides AI Fund",
      "Sabrina Hahn",
      "Evan Hahn"
    ],
    "sourceUrl": "https://www.newswire.com/news/sable-raises-45m-to-build-the-first-ai-employee-that-can-click-see-and-explain",
    "sourceType": "press-release",
    "evidence": "Sable, the first AI employee built to lead customer interactions end-to-end, today announced a $45 million financing round led by Sequoia Capital and 8VC, with participation from BoxGroup, SV Angel, Valor Atreides AI Fund, Sabrina and Evan Hahn."
  },
  {
    "firmSlug": "a16z",
    "company": "LMArena",
    "announcedDate": "2026-01-07",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Benchmarking",
    "sectorEvidence": "LMArena, a San Francisco, CA-based provider of a community-driven platform for AI benchmarking",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Felicis",
      "UC Investments (University of California)",
      "The House Fund",
      "LDVP",
      "Lightspeed Venture Partners",
      "Laude Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/lmarena-raises-150m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "LMArena, a San Francisco, CA-based provider of a community-driven platform for AI benchmarking, raised $150M in Series A funding. The round was led by Felicis and UC Investments (University of California), with participation from Andreessen Horowitz, The House Fund, LDVP, Kleiner Perkins, Lightspeed Venture Partners and Laude Ventures."
  },
  {
    "firmSlug": "a16z",
    "company": "Protege",
    "announcedDate": "2026-01-08",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Data Infrastructure",
    "sectorEvidence": "Protege supports streamlined access to real-world datasets, including private and proprietary data across multiple domains and formats, such as media content, audio recordings, de-identified health records, and medical imaging.",
    "role": "lead",
    "coInvestors": [
      "Footwork",
      "CRV",
      "Bloomberg Beta",
      "Flex Capital",
      "Shaper Capital"
    ],
    "sourceUrl": "https://withprotege.ai/articles/news/protege-a16z-30million-fundraise",
    "sourceType": "company-site",
    "evidence": "Protege, an AI data platform unlocking access to trusted, real-world data at scale, today announced a $30 million Series A round led by Andreessen Horowitz (a16z)."
  },
  {
    "firmSlug": "a16z",
    "company": "Hadrian",
    "announcedDate": "2026-01-12",
    "datePrecision": "day",
    "round": null,
    "sector": "Advanced Manufacturing",
    "sectorEvidence": "Hadrian, a Los Angeles, California-based developer of automated factories for aerospace and defense",
    "role": null,
    "coInvestors": [
      "Lux Capital",
      "T. Rowe Price Associates, Inc.",
      "Altimeter Capital",
      "D1 Capital Partners",
      "StepStone Group",
      "1789 Capital",
      "Founders Fund",
      "Construct Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/hadrian-raises-funding-at-1-6-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Hadrian, a Los Angeles, California-based developer of automated factories for aerospace and defense, raised expanded capital at a $1.6 billion valuation. The round was led by T. Rowe Price Associates, Inc. with participation from Altimeter Capital, D1 Capital Partners, StepStone Group, 1789 Capital, Founders Fund, Lux Capital, a16z, Construct Capital, and other existing investors."
  },
  {
    "firmSlug": "a16z",
    "company": "Inferact",
    "announcedDate": "2026-01-22",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "AI Infrastructure",
    "sectorEvidence": "The creators of the open source project vLLM have announced that they transitioned the popular tool into a VC-backed startup, Inferact.",
    "role": "lead",
    "coInvestors": [
      "Lightspeed Venture Partners"
    ],
    "sourceUrl": "https://techcrunch.com/2026/01/22/inference-startup-inferact-lands-150m-to-commercialize-vllm/",
    "sourceType": "reputable-press",
    "evidence": "The creators of the open source project vLLM have announced that they transitioned the popular tool into a VC-backed startup, Inferact, raising $150 million in seed funding at an $800 million valuation. The round was co-led by Andreessen Horowitz and Lightspeed Venture Partners, confirming TechCrunch's earlier reporting that vLLM has raised capital from a16z."
  },
  {
    "firmSlug": "a16z",
    "company": "Decagon",
    "announcedDate": "2026-01-29",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Customer Service AI",
    "sectorEvidence": "Decagon, a San Francisco, CA-based company which specializes in conversational AI agents for concierge customer experiences",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "Coatue Management",
      "Index Ventures",
      "ChemistryVC",
      "Definition Capital",
      "Starwood Capital",
      "A*",
      "Accel",
      "Avra",
      "Bain Capital Ventures",
      "T.Capital",
      "Forerunner",
      "Ribbit Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/decagon-raises-250m-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Decagon, a San Francisco, CA-based company which specializes in conversational AI agents for concierge customer experiences, raised $250M in Series D funding, at $4.5 Billion valuation.\n\nThe round was led by Coatue Management and Index Ventures, with participation from new investors ChemistryVC, Definition Capital, and Starwood Capital, and existing investors including a16z, A*, Accel, Avra, Bain Capital Ventures, Elad Gil, T.Capital, Forerunner, and Ribbit Capital."
  },
  {
    "firmSlug": "a16z",
    "company": "Kairos",
    "announcedDate": "2026-02-03",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Crypto Trading",
    "sectorEvidence": "Kairos brings trading experience to the frontier with a single, composable interface that enables seamless trading across venues-engineered for speed and performance.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://a16zcrypto.com/posts/article/investing-in-kairos/",
    "sourceType": "firm-site",
    "evidence": "We're thrilled to support them on their mission and are excited to announce that a16z crypto is leading Kairos' $2.5M seed round."
  },
  {
    "firmSlug": "a16z",
    "company": "Shizuku AI",
    "announcedDate": "2026-02-09",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "AI Companions",
    "sectorEvidence": "The company is building an AI lab in Japan dedicated to developing AI companions and characters-combining cutting-edge research with the artistic sensibility that has made Japanese character design beloved worldwide.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://a16z.com/announcement/investing-in-shizuku-ai/",
    "sourceType": "firm-site",
    "evidence": "a16z leads Shizuku AI's seed round"
  },
  {
    "firmSlug": "a16z",
    "company": "Smart Bricks",
    "announcedDate": "2026-02-11",
    "datePrecision": "day",
    "round": "pre-seed round",
    "sector": "Real Estate Tech",
    "sectorEvidence": "The company designs and deploys autonomous reasoning systems that allow capital to identify, evaluate, and execute real-estate investments end-to-end - compressing a process that traditionally takes three to six months into minutes.",
    "role": "lead",
    "coInvestors": [
      "Techstars",
      "500 Global",
      "Cornerstone VC",
      "South Loop Ventures",
      "Harvard Business School Alumni Angels",
      "Cento Ventures"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/smart-bricks-raises-5m-led-by-andreessen-horowitz-a16z-to-build-the-ai-infrastructure-layer-for-global-real-estate-302684737.html",
    "sourceType": "press-release",
    "evidence": "Smart Bricks, a frontier AI lab building agentic AI infrastructure for real-estate investing, today announced a $5 million pre-seed round led by Andreessen Horowitz (a16z speedrun)"
  },
  {
    "firmSlug": "a16z",
    "company": "Braintrust",
    "announcedDate": "2026-02-18",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Observability",
    "sectorEvidence": "Braintrust, a San Francisco, CA-based developer of an AI observability and evaluation platform",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "ICONIQ",
      "Greylock",
      "basecase capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/02/braintrust-raises-80m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Braintrust, a San Francisco, CA-based developer of an AI observability and evaluation platform, raised $80M in Series B funding.\n\nThe round was led by ICONIQ, with participation from Andreessen Horowitz, Greylock, Elad Gil, basecase capital, and others."
  },
  {
    "firmSlug": "a16z",
    "company": "Chariot Defense",
    "announcedDate": "2026-02-25",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Defense Tech",
    "sectorEvidence": "Chariot Defense has built a deployable, software-defined power layer that senses, prioritizes, and routes power across mission-critical systems in real time, enabling warfighters to operate without interruption, detectable signature, or wasted capacity.",
    "role": "lead",
    "coInvestors": [
      "DCVC",
      "LMNT",
      "Marlinspike",
      "Overmatch",
      "Shield Capital",
      "Ensemble",
      "Trenches Capital",
      "General Catalyst",
      "XYZ"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/chariot-defense-announces-34m-series-a-led-by-andreessen-horowitz-to-scale-command-of-power-on-the-battlefield-302696144.html",
    "sourceType": "press-release",
    "evidence": "Chariot Defense, a defense technology company pioneering next-generation battlefield power systems, today announced it has raised $34 million in Series A funding...The round was led by new investor Andreessen Horowitz"
  },
  {
    "firmSlug": "a16z",
    "company": "QuiverAI",
    "announcedDate": "2026-02-25",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Design Tools",
    "sectorEvidence": "QuiverAI focuses on vector design and visual code generation.",
    "role": "lead",
    "coInvestors": [
      "K Fund",
      "JME",
      "Mission"
    ],
    "sourceUrl": "https://www.wsgr.com/en/insights/wilson-sonsini-advises-quiverai-on-dollar83-million-seed-financing.html",
    "sourceType": "reputable-press",
    "evidence": "On February 25, 2026, QuiverAI announced completion of an $8.3 million seed round. The financing was led by Andreessen Horowitz (a16z) with participation from K Fund, JME, Mission, and angel investors."
  },
  {
    "firmSlug": "a16z",
    "company": "Lio",
    "announcedDate": "2026-03-05",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Procurement Software",
    "sectorEvidence": "Lio deploys AI agents that execute the workflow themselves across enterprise procurement systems to read documents, evaluate suppliers, negotiate terms, and complete transactions.",
    "role": "lead",
    "coInvestors": [
      "SV Angels",
      "Harry Stebbings",
      "YC"
    ],
    "sourceUrl": "https://techcrunch.com/2026/03/05/lio-ai-series-a-a16z-30m-raise-automate-enterprise-procurement/",
    "sourceType": "reputable-press",
    "evidence": "On Thursday, Lio announced a $30 million Series A in a round led by Andreessen Horowitz."
  },
  {
    "firmSlug": "a16z",
    "company": "Deeptune",
    "announcedDate": "2026-03-19",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Deeptune, a company building leading RL environments for computer-use and code.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://a16z.com/announcement/investing-in-deeptune/",
    "sourceType": "firm-site",
    "evidence": "a16z leads Deeptune's Series A"
  },
  {
    "firmSlug": "a16z",
    "company": "Glimpse",
    "announcedDate": "2026-03-25",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "CPG Software",
    "sectorEvidence": "Glimpse automatically files disputes, follows through on the process, applies recovered cash, and syncs everything back to the brand's ERP.",
    "role": "lead",
    "coInvestors": [
      "8VC",
      "YC"
    ],
    "sourceUrl": "https://techcrunch.com/2026/03/25/a16z-backed-glimpse-raises-new-funds-accelerates-dispute-tracking-automation-for-cpg-brands/",
    "sourceType": "reputable-press",
    "evidence": "Glimpse announced on Wednesday a $35 million Series A led by Andreessen Horowitz, with participation from 8VC and YC."
  },
  {
    "firmSlug": "a16z",
    "company": "Harvey",
    "announcedDate": "2026-03-25",
    "datePrecision": "day",
    "round": null,
    "sector": "Legal AI",
    "sectorEvidence": "Harvey, a San Francisco, CA-based company developing legal infrastructure for law firms and in-house teams",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "GIC",
      "Sequoia",
      "Coatue",
      "Conviction Partners",
      "Evantic",
      "Kleiner Perkins"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/harvey-raises-200m-in-new-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Harvey, a San Francisco, CA-based company developing legal infrastructure for law firms and in-house teams, raised $200M in new funding, at $11 Billion valuation.\n\nThe round was led by GIC and Sequoia with participation from existing investors Andreessen Horowitz, Coatue, Conviction Partners, Elad Gil, Evantic, and Kleiner Perkins."
  },
  {
    "firmSlug": "a16z",
    "company": "Saronic",
    "announcedDate": "2026-03-31",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Defense Tech",
    "sectorEvidence": "Saronic Technologies today announced it has closed $1.75 billion in Series D funding to advance its mission of ensuring maritime superiority for the U.S. and its allies by delivering autonomous platforms at scale across defense and commercial sectors.",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "Advent International",
      "Bessemer Venture Partners",
      "DFJ Growth",
      "BAM Elevate",
      "8VC",
      "Caffeinated Capital",
      "Franklin Templeton",
      "Kleiner Perkins"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/saronic-closes-1-75b-series-d-at-9-25b-valuation-to-accelerate-a-new-era-of-maritime-autonomy-302729238.html",
    "sourceType": "press-release",
    "evidence": "Saronic welcomes Advent International, Bessemer Venture Partners, DFJ Growth, BAM Elevate, and other new partners and recognizes the continued commitment of its existing investors, including 8VC, Caffeinated Capital, Andreessen Horowitz, Elad Gil, and Franklin Templeton."
  },
  {
    "firmSlug": "a16z",
    "company": "The Better Money Company",
    "announcedDate": "2026-03-31",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Stablecoin Infrastructure",
    "sectorEvidence": "developing the 'critical missing connectivity layer' needed to make the stablecoin ecosystem function properly",
    "role": "lead",
    "coInvestors": [
      "BoxGroup",
      "Sunflower Capital",
      "The Fintech Fund",
      "Art Levy",
      "Michael Tannenbaum",
      "Patrick McHenry",
      "Sean Neville",
      "Charlie Songhurst",
      "Will Manidis",
      "Chris Harmse",
      "Packy McCormick",
      "Adi Goel"
    ],
    "sourceUrl": "https://www.theblock.co/news/deals/2026-03-31-a16z-crypto-leads-10-million-round-in-startup-developing-stablecoins-missing-layer-395935",
    "sourceType": "reputable-press",
    "evidence": "A16z crypto led a $10 million raise for startup The Better Money Company, which says it is developing the 'critical missing connectivity layer' needed to make the stablecoin ecosystem function properly."
  },
  {
    "firmSlug": "a16z",
    "company": "Treeline",
    "announcedDate": "2026-03-31",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Enterprise IT",
    "sectorEvidence": "Treeline wants to rebuild corporate IT from the ground up, starting with the everyday headaches most workers barely notice until something breaks.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://fortune.com/2026/03/31/treeline-it-investing-peter-doyle-andreesen-horowitz-series-a/",
    "sourceType": "reputable-press",
    "evidence": "Exclusive: Treeline raises $25 million in Andreessen Horowitz-led funding to streamline IT services with AI"
  },
  {
    "firmSlug": "a16z",
    "company": "Pillar",
    "announcedDate": "2026-04-14",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Risk Management Software",
    "sectorEvidence": "Pillar, a platform that helps commodity-driven businesses (like those in metals, food, and airline companies) manage financial risk",
    "role": "lead",
    "coInvestors": [
      "Crucible Capital",
      "Gallery Ventures",
      "Uber CEO Dara Khosrowshahi"
    ],
    "sourceUrl": "https://techcrunch.com/2026/04/14/financial-risk-management-platform-pillar-raises-20m-seed-in-round-led-by-a16z/",
    "sourceType": "reputable-press",
    "evidence": "Pillar, a platform that helps commodity-driven businesses (like those in metals, food, and airline companies) manage financial risk, announced Tuesday a $20 million seed round led by Andreessen Horowitz."
  },
  {
    "firmSlug": "a16z",
    "company": "Hilbert",
    "announcedDate": "2026-04-15",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Growth Software",
    "sectorEvidence": "Hilbert's AI software connects data across teams to help companies make decisions from a single system.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.axios.com/2026/04/15/exclusive-a16z-backed-hilbert-raises-28-million",
    "sourceType": "reputable-press",
    "evidence": "Hilbert, an AI startup rethinking how companies drive growth, raised a $28 million Series A led by Andreessen Horowitz, the startup told Axios exclusively."
  },
  {
    "firmSlug": "a16z",
    "company": "Petual",
    "announcedDate": "2026-04-23",
    "datePrecision": "day",
    "round": null,
    "sector": "Audit and Compliance Software",
    "sectorEvidence": "Petual, a San Francisco, CA-based provider of an AI-powered platform for audit and compliance",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "First Round Capital",
      "Cowboy Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/petual-raises-20m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Petual, a San Francisco, CA-based provider of an AI-powered platform for audit and compliance, raised $20M in funding.\n\nThe round was led by Andreessen Horowitz, First Round Capital, Cowboy Ventures, and Elad Gil."
  },
  {
    "firmSlug": "a16z",
    "company": "Ethos",
    "announcedDate": "2026-05-06",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Expert Networks",
    "sectorEvidence": "Ethos is building AI-powered infrastructure for human opportunity. Using AI voice agents, Ethos captures the knowledge, expertise, and nuance that traditional professional profiles miss, making the world's expert intelligence machine-readable.",
    "role": "lead",
    "coInvestors": [
      "General Catalyst",
      "XTX Markets",
      "Evantic Capital",
      "Common Magic"
    ],
    "sourceUrl": "https://techcrunch.com/2026/05/06/ethos-raises-22-75m-from-a16z-for-its-expert-network-with-voice-onboarding/",
    "sourceType": "reputable-press",
    "evidence": "Today, Ethos announced a $22.75 million Series A round led by a16z with participation from General Catalyst, XTX Markets, Evantic Capital, and Common Magic."
  },
  {
    "firmSlug": "a16z",
    "company": "Tessera Labs",
    "announcedDate": "2026-05-06",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Enterprise Software",
    "sectorEvidence": "Tessera Labs is a vendor-agnostic, multi-agent AI platform that transforms how enterprises modernize complex ERP systems and data.",
    "role": "lead",
    "coInvestors": [
      "Foundation Capital",
      "Myriad Venture Partners",
      "Osage University Partners"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260506853624/en/Tessera-Labs-Raises-$60M-in-Funding-Led-by-Andreessen-Horowitz-to-Transform-ERP-Modernization",
    "sourceType": "press-release",
    "evidence": "Tessera Labs Raises $60M in Funding Led by Andreessen Horowitz to Transform ERP Modernization"
  },
  {
    "firmSlug": "a16z",
    "company": "Stitch",
    "announcedDate": "2026-05-18",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Fintech Infrastructure",
    "sectorEvidence": "The platform gives financial institutions a single, cloud-native stack spanning lending, cards, payments, and ledgers - one they can adopt gradually, module by module, without ripping out existing systems overnight.",
    "role": "lead",
    "coInvestors": [
      "Arbor Ventures",
      "COTU Ventures",
      "Raed Ventures",
      "SVC"
    ],
    "sourceUrl": "https://theaiinsider.tech/2026/05/18/stitch-closes-25m-series-a-led-by-andreessen-horowitz/",
    "sourceType": "reputable-press",
    "evidence": "Stitch, the operating system built for modern financial institutions, announced it has raised $25 million in Series A funding led by Andreessen Horowitz (a16z)."
  },
  {
    "firmSlug": "a16z",
    "company": "Catena Labs",
    "announcedDate": "2026-05-20",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Agentic Finance",
    "sectorEvidence": "Catena is building secure, compliant, and programmable financial infrastructure that will allow AI agents to act on behalf of humans.",
    "role": "lead",
    "coInvestors": [
      "Acrew Capital",
      "Breyer Capital",
      "General Catalyst",
      "QED Investors"
    ],
    "sourceUrl": "https://a16zcrypto.com/posts/article/investing-in-catena-part-ii",
    "sourceType": "firm-site",
    "evidence": "a16z crypto co-leads Catena Labs' Series A investment. Catena is building secure, compliant, and programmable financial infrastructure that will allow AI agents to act on behalf of humans."
  },
  {
    "firmSlug": "a16z",
    "company": "Mercury",
    "announcedDate": "2026-05-20",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Fintech",
    "sectorEvidence": "Mercury is radically different banking - engineered from the ground up to hold, move, and help you truly understand your money like never before.",
    "role": null,
    "coInvestors": [
      "Sequoia Capital",
      "TCV",
      "Coatue",
      "CRV",
      "Sapphire Ventures",
      "Spark Capital"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260520511817/en/Mercury-Raises-$200-Million-Series-D-at-$5.2B-Valuation",
    "sourceType": "press-release",
    "evidence": "Mercury, the technology company providing radically different banking, today announced a $200 million Series D at a $5.2B valuation, led by TCV. [...] Andreessen Horowitz, Coatue, CRV, Sapphire Ventures, Sequoia Capital, and Spark Capital"
  },
  {
    "firmSlug": "a16z",
    "company": "Westmag",
    "announcedDate": "2026-06-02",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Advanced Manufacturing",
    "sectorEvidence": "They set up a semi-automated production line in South San Francisco as the first of its kind in the US, hired a killer team of motor experts, engineers, and supply chain operators, and are rapidly scaling production of qualified motors for defense customers while serving the growing robotics ecosystem with actuators.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://a16z.com/announcement/investing-in-westmag/",
    "sourceType": "firm-site",
    "evidence": "a16z leads Westmag's Seed round"
  },
  {
    "firmSlug": "a16z",
    "company": "Lassie",
    "announcedDate": "2026-06-03",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "SMB Software",
    "sectorEvidence": "Lassie is building AI that runs small businesses, starting with dental practices.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://a16z.com/announcement/investing-in-lassie/",
    "sourceType": "firm-site",
    "evidence": "Today, we are thrilled to announce that a16z is leading Lassie's $35 million Series A – and partnering with a team solving exactly this problem."
  },
  {
    "firmSlug": "a16z",
    "company": "Town",
    "announcedDate": "2026-06-03",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Assistants",
    "sectorEvidence": "Town's personalized AI assistant acts more like a chief of staff than a chatbot, learning how users work across email, calendar, Slack, docs, messaging and more without prompting or complex setup",
    "role": "lead",
    "coInvestors": [
      "Forerunner Ventures",
      "First Round Capital",
      "Alt Capital",
      "Conviction"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2026/06/03/3306172/0/en/town-raises-55m-series-a-from-a16z-and-forerunner-to-build-the-ai-assistant-that-learns-how-you-work.html",
    "sourceType": "press-release",
    "evidence": "Town, the personalized AI assistant that learns how people work across the tools they already use, today announced a $55 million Series A led by Andreessen Horowitz, with participation from Forerunner Ventures and continued support from First Round Capital, Alt Capital, and Conviction."
  },
  {
    "firmSlug": "a16z",
    "company": "Morpho",
    "announcedDate": "2026-06-09",
    "datePrecision": "day",
    "round": null,
    "sector": "DeFi Lending",
    "sectorEvidence": "the fast-growing crypto protocol Morpho, which offers blockchain-based lending and borrowing",
    "role": "lead",
    "coInvestors": [
      "Paradigm",
      "Ribbit Capital",
      "Apollo Funds",
      "Circle's venture unit",
      "VanEck"
    ],
    "sourceUrl": "https://fortune.com/2026/06/09/morpho-fundraise-a16z-crypto-paradigm-ribbit-capital-175-million/",
    "sourceType": "reputable-press",
    "evidence": "He's the cofounder of the fast-growing crypto protocol Morpho, which offers blockchain-based lending and borrowing. And he has the backing of some of the largest investors in crypto. On Tuesday, he and his team announced that they had raised $175 million in a funding round led by Paradigm, Ribbit Capital, and Andreessen Horowitz's digital assets arm, or a16z crypto."
  },
  {
    "firmSlug": "a16z",
    "company": "Digital Asset",
    "announcedDate": "2026-06-11",
    "datePrecision": "day",
    "round": null,
    "sector": "Blockchain Infrastructure",
    "sectorEvidence": "Digital Asset is a leading innovator in blockchain technology, transforming traditional and digital financial markets with privacy-enabled solutions that improve capital flow and create a more efficient, fair, and resilient global system.",
    "role": "lead",
    "coInvestors": [
      "7RIDGE",
      "ABN Amro",
      "Abu Dhabi Investment Authority",
      "Alumni Ventures",
      "Apollo Funds",
      "BNP Paribas",
      "Broadridge",
      "Citadel Securities",
      "CME Ventures",
      "Coinbase Ventures",
      "Greenwulf Asset Management",
      "Hanwha Investment & Securities",
      "HSBC",
      "iCapital",
      "Liberty City Ventures",
      "Optiver",
      "Polychain",
      "R136 Ventures",
      "S&P Global",
      "SBI Group",
      "Smash Capital",
      "SoFi",
      "Tradeweb"
    ],
    "sourceUrl": "https://blog.digitalasset.com/press-release/digital-asset-355m-funding-canton-capital-markets",
    "sourceType": "press-release",
    "evidence": "Digital Asset (DA), the creator of Canton, today announced a $355 million funding round led by Andreessen Horowitz's crypto fund, a16z crypto"
  },
  {
    "firmSlug": "a16z",
    "company": "Convey",
    "announcedDate": "2026-06-17",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Enterprise Automation",
    "sectorEvidence": "Convey is the AI workforce platform that enables operators to train, deploy, and manage enterprise-grade digital teammates for modern businesses.",
    "role": "lead",
    "coInvestors": [
      "Khosla Ventures",
      "Pear VC"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260617486214/en/Convey-Raises-$38-Million-Series-A-Led-by-Andreessen-Horowitz-to-Automate-Enterprise-Operations-with-AI-Teammates",
    "sourceType": "press-release",
    "evidence": "Convey, the enterprise AI platform that enables non-technical operators to build and manage digital teammates that execute business operations autonomously, today announced $38 million in Series A funding, led by Andreessen Horowitz (a16z)"
  },
  {
    "firmSlug": "a16z",
    "company": "Telepatia",
    "announcedDate": "2026-06-17",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Health Tech",
    "sectorEvidence": "Telepatia is building the AI-native clinical platform for Latin America. Its platform combines AI documentation, clinical decision support, and a growing suite of AI healthcare employees-including AI doctors, nurses, and auditors-integrated across hospital systems and trained on clinical guidelines, peer-reviewed literature, and local institutional protocols.",
    "role": "lead",
    "coInvestors": [
      "Shyam Sankar",
      "Simón Borrero",
      "David Vélez"
    ],
    "sourceUrl": "https://a16z.com/announcement/investing-in-telepatia/",
    "sourceType": "firm-site",
    "evidence": "a16z leads Telepatia's Series A"
  },
  {
    "firmSlug": "a16z",
    "company": "XDOF",
    "announcedDate": "2026-06-19",
    "datePrecision": "day",
    "round": null,
    "sector": "Physical AI Data",
    "sectorEvidence": "XDOF, a Berkeley, California-based developer of data engineering pipelines and annotation systems for physical artificial intelligence",
    "role": null,
    "coInvestors": [
      "Lux Capital",
      "Thrive Capital",
      "Spark Capital",
      "WndrCo"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/xdof-raises-70m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "XDOF, a Berkeley, California-based developer of data engineering pipelines and annotation systems for physical artificial intelligence, raised $70m in funding. Backers included Thrive Capital, Spark Capital, Andreessen Horowitz, Lux Capital, and WndrCo."
  },
  {
    "firmSlug": "a16z",
    "company": "Probook",
    "announcedDate": "2026-06-23",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Home Services Software",
    "sectorEvidence": "Probook provides AI-powered dispatch and front-office automation for home services businesses.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://a16z.com/announcement/investing-in-probook/",
    "sourceType": "firm-site",
    "evidence": "a16z is leading Probook's $34 million Series A, bringing the company's total funding to $40 million after a seed round led by Sequoia."
  },
  {
    "firmSlug": "a16z",
    "company": "Prosper AI",
    "announcedDate": "2026-06-23",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Health Tech",
    "sectorEvidence": "Prosper AI delivers a unified system for financially cleared appointments by managing scheduling, real-time insurance verification, and billing in a single workflow.",
    "role": "lead",
    "coInvestors": [
      "Base10 Partners",
      "Emergence Capital",
      "Y Combinator"
    ],
    "sourceUrl": "https://hitconsultant.net/2026/06/23/prosper-ai-raises-30-million-series-a-a16z/",
    "sourceType": "reputable-press",
    "evidence": "Healthcare automation pioneer Prosper AI has announced a $30M Series A financing round led by Andreessen Horowitz (a16z)."
  },
  {
    "firmSlug": "a16z",
    "company": "Mirendil",
    "announcedDate": "2026-06-24",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "AI Research",
    "sectorEvidence": "Mirendil is building a system that can help anyone do AI work: they train frontier models that are expert at AI R&D and build the product around it.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://a16z.com/announcement/investing-in-mirendil/",
    "sourceType": "firm-site",
    "evidence": "a16z leads Mirendil's Seed round"
  },
  {
    "firmSlug": "a16z",
    "company": "Ornn",
    "announcedDate": "2026-06-24",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Compute Markets",
    "sectorEvidence": "Ornn Compute is the next piece of the puzzle. It aggregates dedicated GPU capacity across multiple neoclouds into a single platform, with a single onboarding process and a secondary market for transfers and on-demand sublets.",
    "role": "lead",
    "coInvestors": [
      "Galaxy Ventures",
      "Nordstar",
      "SV Angel",
      "Vine Ventures",
      "Crucible Capital",
      "Link Ventures",
      "Box Group"
    ],
    "sourceUrl": "https://www.marketsmedia.com/ornn-compute-raises-33m-seed-round/",
    "sourceType": "reputable-press",
    "evidence": "We are announcing Ornn Compute, our physical capacity layer for the compute market, alongside a $33M round led by Andreessen Horowitz's crypto fund, a16z crypto."
  },
  {
    "firmSlug": "a16z",
    "company": "Netris",
    "announcedDate": "2026-06-25",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "The company provides software that runs on network switches, and it also offers a platform that connects to switches to help neocloud operators reduce the time it takes to go live by automating setup, configuration, and operations.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://techcrunch.com/2026/06/25/netris-raises-15m-series-a-from-a16z-to-help-ai-neoclouds-go-live-faster/",
    "sourceType": "reputable-press",
    "evidence": "To build on that momentum, Netris has now raised $15 million in a Series A round from Andreessen Horowitz, TechCrunch has exclusively learned."
  },
  {
    "firmSlug": "a16z",
    "company": "Neo",
    "announcedDate": "2026-07-20",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Cybersecurity",
    "sectorEvidence": "Neo gives SecOps teams the inventory, posture intelligence, attribution, and policy control to manage enterprise-wide agentic transformation and secure AI agents, AI-enabled applications, browsers, identities, and traditional software with newly introduced agentic capabilities.",
    "role": "lead",
    "coInvestors": [
      "Bessemer Venture Partners",
      "Craft Ventures",
      "Merlin Ventures"
    ],
    "sourceUrl": "https://www.neo.ai/news/neo-launches-100m",
    "sourceType": "company-announcement",
    "evidence": "Neo, the Agentic Software Control company, today emerged from stealth with $100M in funding from Andreessen Horowitz and Bessemer Venture Partners, with participation from Craft Ventures and Merlin Ventures."
  },
  {
    "firmSlug": "a16z",
    "company": "Atoms",
    "announcedDate": "2026-07-22",
    "datePrecision": "day",
    "round": null,
    "sector": "Robotics",
    "sectorEvidence": "Travis Kalanick's robotics company, Atoms",
    "role": "lead",
    "coInvestors": [
      "Bain Capital",
      "Fifth Wall",
      "Uber"
    ],
    "sourceUrl": "https://techcrunch.com/2026/07/22/travis-kalanicks-robotics-company-raises-1-7b-led-by-a16z/",
    "sourceType": "reputable-press",
    "evidence": "Travis Kalanick's robotics company, Atoms, has raised $1.7 billion in a funding round led by Andreessen Horowitz."
  },
  {
    "firmSlug": "a16z",
    "company": "Convex",
    "announcedDate": "2026-08-04",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Developer Infrastructure",
    "sectorEvidence": "Convex, a San Francisco, CA-based reactive backend platform",
    "role": "participant",
    "coInvestors": [
      "Insight Partners",
      "Etna Labs",
      "Spark Capital",
      "Justin Kan"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/convex-raises-57m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Convex, a San Francisco, CA-based reactive backend platform, raised $57M in Series B financing. The round was led by Insight Partners with participation from Etna Labs, a16z, and Spark Capital."
  },
  {
    "firmSlug": "a16z",
    "company": "HappyRobot",
    "announcedDate": "2026-08-04",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Enterprise AI Agents",
    "sectorEvidence": "HappyRobot, the company putting AI agents to work across complex enterprise operations",
    "role": "participant",
    "coInvestors": [
      "Prysm Capital",
      "Eurazeo",
      "Base10",
      "Y Combinator",
      "Koch Disruptive Technologies",
      "Orange",
      "T.Capital (Deutsche Telekom)",
      "Bankinter",
      "Endeavor Catalyst",
      "Kfund",
      "Wave-X"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260804192350/en/HappyRobot-Raises-$150-Million-Series-C-to-Build-Enterprise-Superintelligence",
    "sourceType": "press-release",
    "evidence": "HappyRobot, the company putting AI agents to work across complex enterprise operations, today announced it has raised $150 million in Series C funding led by Prysm Capital and co-led by Eurazeo. ... Existing investors a16z, Base10, Y Combinator are doubling down with participation from strategics like Koch Disruptive Technologies (KDT), Orange, and T.Capital (Deutsche Telekom), Bankinter, Endeavor Catalyst, Kfund and Wave-X."
  },
  {
    "firmSlug": "a16z",
    "company": "Volta",
    "announcedDate": "2026-08-04",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Volta is building a new and different kind of AI infrastructure company, combining cloud operations with project finance to unlock new sources of compute.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://a16z.com/announcement/investing-in-volta/",
    "sourceType": "firm-announcement",
    "evidence": "We believe that Volta is building a new and different kind of AI infrastructure company, combining cloud operations with project finance to unlock new sources of compute. ... That's why a16z is excited to co-lead its Series A."
  },
  {
    "firmSlug": "a16z",
    "company": "Vals AI",
    "announcedDate": "2026-08-13",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Evaluation",
    "sectorEvidence": "AI evaluation startup Vals AI has secured $40 million in a Series A round valuing the company at $400 million, led by Andreessen Horowitz.",
    "role": "lead",
    "coInvestors": [
      "8VC",
      "Pear VC",
      "Bloomberg Beta",
      "HRT Ventures",
      "Next Ladder"
    ],
    "sourceUrl": "https://cryptobriefing.com/vals-ai-40m-series-a-a16z/",
    "sourceType": "reputable-press",
    "evidence": "AI evaluation startup Vals AI has secured $40 million in a Series A round valuing the company at $400 million, led by Andreessen Horowitz."
  },
  {
    "firmSlug": "bessemer",
    "company": "Aivar",
    "announcedDate": "2026-01-07",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Enterprise AI",
    "sectorEvidence": "An AI-native services partner deploying agentic systems, custom models, and advanced data pipelines for enterprise clients across major cloud platforms.",
    "role": null,
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/realizing-ai-for-global-enterprises-with-aivar",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners invests in Aivar's $4.6M seed round to transform enterprise AI deployment."
  },
  {
    "firmSlug": "bessemer",
    "company": "Sukino",
    "announcedDate": "2026-01-12",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Healthcare Services",
    "sectorEvidence": "Sukino provides structured, affordable recovery support that enables patients to lead fuller lives during rehabilitation.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/expanding-continuum-healthcare-in-india-with-sukino",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads Sukino's $31 million Series B to democratize continuum healthcare to patients with acute diseases."
  },
  {
    "firmSlug": "bessemer",
    "company": "Converge Bio",
    "announcedDate": "2026-01-13",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Drug Discovery",
    "sectorEvidence": "Converge trains generative models on DNA, RNA, and protein sequences, then plugs them into pharma and biotech's workflows to speed up drug development.",
    "role": "lead",
    "coInvestors": [
      "TLV Partners",
      "Saras Capital",
      "Vintage Investment Partners"
    ],
    "sourceUrl": "https://techcrunch.com/2026/01/13/ai-drug-discovery-startup-converge-bio-pulls-in-25m-from-bessemer-and-execs-from-meta-openai-and-wiz/",
    "sourceType": "reputable-press",
    "evidence": "Converge Bio raised a $25 million oversubscribed Series A round, led by Bessemer Venture Partners."
  },
  {
    "firmSlug": "bessemer",
    "company": "ClickHouse",
    "announcedDate": "2026-01-19",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Data Infrastructure",
    "sectorEvidence": "ClickHouse, a San Francisco, California-based provider of real-time analytics, data warehousing, and AI infrastructure solutions",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "Dragoneer Investment Group",
      "GIC",
      "Index Ventures",
      "Lightspeed Venture Partners",
      "T. Rowe Price Associates, Inc.",
      "WCM Investment Management"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/clickhouse-raises-400m-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "ClickHouse, a San Francisco, California-based provider of real-time analytics, data warehousing, and AI infrastructure solutions, raised $400m in Series D funding. The round was led by Dragoneer Investment Group, with participation from Bessemer Venture Partners, GIC, Index Ventures, Khosla Ventures, Lightspeed Venture Partners, accounts advised by T. Rowe Price Associates, Inc., and WCM Investment Management."
  },
  {
    "firmSlug": "bessemer",
    "company": "Dominion Dynamics",
    "announcedDate": "2026-01-19",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Defense Tech",
    "sectorEvidence": "Dominion Dynamics aims to modernize Canadian and NATO security capabilities with a suite of AI and advanced technology products purpose-built for extreme operating conditions.",
    "role": "lead",
    "coInvestors": [
      "Georgian Partners",
      "British Columbia Investment Management Corporation"
    ],
    "sourceUrl": "https://www.bvp.com/news/dominion-dynamics-forging-the-future-of-interoperable-attritable-systems-for-arctic-and-allied-defense",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners co-leads Dominion Dynamics' $20M CAD Seed to build the Arctic autonomy stack for NATO's most strategically exposed operating environment."
  },
  {
    "firmSlug": "bessemer",
    "company": "Upwind",
    "announcedDate": "2026-01-26",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Cybersecurity",
    "sectorEvidence": "Upwind is building the Cloud Native Application Protection Platform (CNAPP) for today's containerized, API-driven cloud infrastructure, where workloads spin up and down in seconds, and dependency graphs constantly shift.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/securing-the-next-generation-of-cloud-and-ai-workloads-with-upwind",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads Upwind's $250M Series B to build the new runtime-first CNAPP for the AI and real-time era."
  },
  {
    "firmSlug": "bessemer",
    "company": "Waymo",
    "announcedDate": "2026-02-02",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Autonomous Vehicles",
    "sectorEvidence": "Waymo has pioneered the development of autonomous driving.",
    "role": "participant",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/waymo-drives-the-next-chapter-of-autonomous-mobility",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners joins Waymo's $16 billion Series D, paving the way for autonomous driving."
  },
  {
    "firmSlug": "bessemer",
    "company": "Uptool",
    "announcedDate": "2026-02-09",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Manufacturing AI",
    "sectorEvidence": "Uptool, a San Mateo, CA-based developer of an AI platform designed to accelerate manufacturing productivity",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Khosla Ventures",
      "Eclipse"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/02/uptool-raises-6m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Uptool, a San Mateo, CA-based developer of an AI platform designed to accelerate manufacturing productivity, announced the raise of a $6m in Seed funding. Backers included Khosla Ventures, Eclipse, Bessemer Venture Partners, and Kleiner Perkins."
  },
  {
    "firmSlug": "bessemer",
    "company": "Inertia Enterprises",
    "announcedDate": "2026-02-11",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Fusion Energy",
    "sectorEvidence": "Inertia Enterprises, the commercial fusion energy company, is taking that breakthrough from the laboratory to the grid.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/powering-the-future-the-path-to-commercial-fusion-energy-with-inertia-enterprises",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads Inertia Enterprises $450M Series A to bring proven fusion science to the grid."
  },
  {
    "firmSlug": "bessemer",
    "company": "Anthropic",
    "announcedDate": "2026-02-12",
    "datePrecision": "day",
    "round": "Series G",
    "sector": "AI",
    "sectorEvidence": "Anthropic is an AI safety and research company that's working to build reliable, interpretable, and steerable AI systems.",
    "role": null,
    "coInvestors": [
      "Sequoia Capital",
      "GIC",
      "Coatue",
      "D. E. Shaw Ventures",
      "Dragoneer",
      "Founders Fund",
      "ICONIQ",
      "MGX",
      "Accel",
      "Addition",
      "Alpha Wave Global",
      "Altimeter",
      "AMP PBC",
      "Appaloosa LP",
      "Baillie Gifford",
      "BlackRock",
      "Blackstone",
      "D1 Capital Partners",
      "Fidelity Management & Research Company",
      "General Catalyst",
      "Greenoaks",
      "Growth Equity at Goldman Sachs Alternatives",
      "Insight Partners",
      "Jane Street",
      "JPMorganChase",
      "Lightspeed Venture Partners",
      "Menlo Ventures",
      "Morgan Stanley Investment Management",
      "NX1 Capital",
      "Qatar Investment Authority (QIA)",
      "Sands Capital",
      "Temasek",
      "TowerBrook",
      "TPG",
      "Whale Rock Capital",
      "XN"
    ],
    "sourceUrl": "https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation",
    "sourceType": "company-site",
    "evidence": "We have raised $30 billion in Series G funding led by GIC and Coatue, valuing Anthropic at $380 billion post-money. [...] Significant investors in this round include: Accel, Addition, Alpha Wave Global, Altimeter, AMP PBC, Appaloosa LP, Baillie Gifford, Bessemer Venture Partners, affiliated funds of BlackRock, Blackstone, D1 Capital Partners, Fidelity Management & Research Company, General Catalyst, Greenoaks, Growth Equity at Goldman Sachs Alternatives, Insight Partners, Jane Street, JPMorganChase through its Security and Resiliency Initiative and Growth Equity Partners, Lightspeed Venture Partners, Menlo Ventures, Morgan Stanley Investment Management, NX1 Capital, Qatar Investment Authority (QIA), Sands Capital, Sequoia Capital, Temasek, TowerBrook, TPG, Whale Rock Capital, and XN."
  },
  {
    "firmSlug": "bessemer",
    "company": "Breaker",
    "announcedDate": "2026-02-17",
    "datePrecision": "day",
    "round": "Seed Round",
    "sector": "Defense Tech",
    "sectorEvidence": "A single operator can now orchestrate teams of autonomous systems across air, land, and sea using natural voice commands over the radios they already carry.",
    "role": "lead",
    "coInvestors": [
      "Main Sequence Ventures"
    ],
    "sourceUrl": "https://breakerindustries.com/news-insights/breaker-raises-6m-seed-round-led-by-bessemer-venture-partners",
    "sourceType": "company-site",
    "evidence": "Breaker Raises $6M Seed Round Led by Bessemer Venture Partners"
  },
  {
    "firmSlug": "bessemer",
    "company": "Avantos",
    "announcedDate": "2026-02-18",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Fintech",
    "sectorEvidence": "Avantos is built on a knowledge graph that connects client data, products, teams, and work into a single, continuously updated system of context.",
    "role": "lead",
    "coInvestors": [
      "E14",
      "M13",
      "Mercer Advisors",
      "Blue Collective"
    ],
    "sourceUrl": "https://www.bvp.com/news/doubling-down-on-avantos-building-the-ai-operating-system-for-financial-services",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads Avantos' $25M Series A to build the next generation of client management."
  },
  {
    "firmSlug": "bessemer",
    "company": "MeltPlan",
    "announcedDate": "2026-02-25",
    "datePrecision": "day",
    "round": "Seed round",
    "sector": "Construction Tech",
    "sectorEvidence": "The team is building an AI system designed specifically to optimize pre-construction workflows and planning for the global construction industry.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/optimizing-pre-construction-workflows-and-planning-with-meltplan",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads MeltPlan's $10 million Seed round to build the AI planning engine for the global construction industry."
  },
  {
    "firmSlug": "bessemer",
    "company": "NODA AI",
    "announcedDate": "2026-02-26",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Defense Tech",
    "sectorEvidence": "Transforms how the Department of War develops and orchestrates unmanned and manned tactics in complex, mission-critical environments.",
    "role": "lead",
    "coInvestors": [
      "Outlander",
      "Crosslink",
      "Booz Allen Hamilton Ventures",
      "Alumni Ventures",
      "Bloomberg Beta",
      "Draper Associates"
    ],
    "sourceUrl": "https://www.bvp.com/news/noda-ai-building-the-future-of-operational-collaborative-autonomy-at-the-frontlines",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads NODA AI's $25M Series A to transform how the Department of War develops and orchestrates unmanned and manned tactics in complex, mission-critical environments."
  },
  {
    "firmSlug": "bessemer",
    "company": "Legora",
    "announcedDate": "2026-03-10",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Legal Tech",
    "sectorEvidence": "Legora has positioned itself as a platform for complex legal work rather than a consumer chatbot, claiming adoption by hundreds of law firms and in-house legal teams.",
    "role": "participant",
    "coInvestors": [
      "Accel",
      "Benchmark",
      "General Catalyst",
      "ICONIQ",
      "Redpoint",
      "Y Combinator",
      "Alkeon Capital",
      "Bain Capital",
      "Firstmark",
      "Menlo Ventures",
      "Salesforce Ventures",
      "Sands Capital",
      "Starwood Capital"
    ],
    "sourceUrl": "https://www.citybiz.co/article/820641/legora-closes-on-550m-series-d-backers-include-bessemer-general-catalyst-starwood-capital/",
    "sourceType": "reputable-press",
    "evidence": "Legora Closes on $550M Series D; Backers Include Bessemer, General Catalyst, Starwood Capital"
  },
  {
    "firmSlug": "bessemer",
    "company": "Halter",
    "announcedDate": "2026-03-24",
    "datePrecision": "day",
    "round": "Series E",
    "sector": "AgTech",
    "sectorEvidence": "The deep tech company's GPS-enabled collars use audio cues and gentle vibrations to contain and herd cattle within virtual boundaries, allowing ranchers to move herds from a smartphone - without breaking ground or stringing wire.",
    "role": "participant",
    "coInvestors": [
      "Founders Fund",
      "Blackbird",
      "DCVC",
      "Bond",
      "NewView",
      "Ubiquity",
      "Promus",
      "Icehouse Ventures"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260324036414/en/Halter-Raises-$220M-in-Series-E-to-Accelerate-Global-Expansion-of-Virtual-Fencing",
    "sourceType": "press-release",
    "evidence": "The round was led by Founders Fund, with participation from Blackbird, DCVC, Bond, Bessemer, NewView, Ubiquity, Promus and Icehouse Ventures, as it continues to expand alongside the ranchers using Halter in their operations."
  },
  {
    "firmSlug": "bessemer",
    "company": "Saronic",
    "announcedDate": "2026-03-31",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Defense Tech",
    "sectorEvidence": "Saronic Technologies today announced it has closed $1.75 billion in Series D funding to advance its mission of ensuring maritime superiority for the U.S. and its allies by delivering autonomous platforms at scale across defense and commercial sectors.",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "Advent International",
      "DFJ Growth",
      "BAM Elevate",
      "8VC",
      "Caffeinated Capital",
      "Andreessen Horowitz",
      "Franklin Templeton",
      "Kleiner Perkins"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/saronic-closes-1-75b-series-d-at-9-25b-valuation-to-accelerate-a-new-era-of-maritime-autonomy-302729238.html",
    "sourceType": "press-release",
    "evidence": "Saronic welcomes Advent International, Bessemer Venture Partners, DFJ Growth, BAM Elevate, and other new partners and recognizes the continued commitment of its existing investors, including 8VC, Caffeinated Capital, Andreessen Horowitz, Elad Gil, and Franklin Templeton."
  },
  {
    "firmSlug": "bessemer",
    "company": "Saronic Technologies",
    "announcedDate": "2026-03-31",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Defense Tech",
    "sectorEvidence": "Saronic fundamentally seeks to rebuild American maritime power from the ground up using cutting-edge innovation.",
    "role": "participant",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/saronic-technologies-redefining-maritime-superiority",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners joins Saronic's Series D as the company advances a new era for American shipbuilding and maritime autonomy."
  },
  {
    "firmSlug": "bessemer",
    "company": "Dome Systems",
    "announcedDate": "2026-04-16",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Dome Systems is building the agentic infrastructure platform: one system of control across every agent, every runtime, every cloud.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/dome-systems-the-operational-control-plane-for-the-agentic-enterprise",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners co-leads Dome Systems' seed round, partnering with the founders who plan to do for AI what they did for cloud infrastructure."
  },
  {
    "firmSlug": "bessemer",
    "company": "Amperos Health",
    "announcedDate": "2026-04-22",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Healthcare IT",
    "sectorEvidence": "Amperos is building a digital workforce of AI agents for revenue recovery, managing denials and claims end-to-end for healthcare providers.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/amperos-tackling-healthcares-260b-denial-management-problem",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads Amperos Health's $16M Series A to deliver the agentic workforce solution for AI-powered revenue recovery."
  },
  {
    "firmSlug": "bessemer",
    "company": "Illoca",
    "announcedDate": "2026-05-06",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Design Software",
    "sectorEvidence": "Upload a sketch, feed in a bubble diagram, or generate a building rendering directly inside Illoca, and the platform produces a fully editable 2D or 3D model in return.",
    "role": "lead",
    "coInvestors": [
      "AIX Ventures",
      "Alt Ventures",
      "Root Ventures"
    ],
    "sourceUrl": "https://www.bvp.com/news/illoca-re-architecting-the-future-of-building-design",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads Illoca's $13M Seed to develop the generative AI tool for architects and engineers."
  },
  {
    "firmSlug": "bessemer",
    "company": "Vapi",
    "announcedDate": "2026-05-12",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Voice AI",
    "sectorEvidence": "Vapi, Inc., a San Francisco, California-based developer of an API-native enterprise voice AI platform",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Peak XV",
      "M12 (Microsoft's Venture Fund)"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/vapi-raises-50m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Vapi, Inc., a San Francisco, California-based developer of an API-native enterprise voice AI platform, raised $50M in Series B funding. The round was led by Peak XV, with participation from M12 (Microsoft's Venture Fund), Kleiner Perkins, Bessemer Venture Partners, and earlier investors."
  },
  {
    "firmSlug": "bessemer",
    "company": "DriveNets",
    "announcedDate": "2026-06-01",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Networking",
    "sectorEvidence": "A leader in AI networking solutions, providing open, multi-vendor AI networking for AI data centers.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/drivenets-the-ai-networking-fabric-for-heterogeneous-ai",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads DriveNets' $410 million Series D-a leader in AI networking solutions and a company we've backed since their Series A-to accelerate inventory build-out against more than $1 billion in secured business and rising demand for open, multi-vendor AI networking."
  },
  {
    "firmSlug": "bessemer",
    "company": "Picogrid",
    "announcedDate": "2026-06-01",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Defense Tech",
    "sectorEvidence": "Picogrid, an El Segundo, CA-based defense technology company building the open integration layer for modern military systems",
    "role": null,
    "coInvestors": [
      "Initialized Capital",
      "Washington Harbour",
      "GSBackers",
      "Starburst Ventures",
      "Credo Ventures",
      "Giant Step Capital",
      "Alumni Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/picogrid-raises-45m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Picogrid, an El Segundo, CA-based defense technology company building the open integration layer for modern military systems, raised $45M in Series A funding.\n\nThe round was led by Bessemer Venture Partners, with participation from Washington Harbour and GSBackers, alongside existing investors Initialized Capital, Starburst Ventures, Credo Ventures, Giant Step Capital, Alumni Ventures, and industry angels."
  },
  {
    "firmSlug": "bessemer",
    "company": "Sarvam AI",
    "announcedDate": "2026-06-15",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI",
    "sectorEvidence": "Sarvam has built a full-stack sovereign AI platform: from foundational models trained from scratch in India, to commercially deployed applications already handling billions of enterprise interactions.",
    "role": null,
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/sarvam-ai-building-sovereign-ai-for-india",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners invests in Sarvam's $300M Series B, backing a full-stack AI platform accessible and indigenous to India."
  },
  {
    "firmSlug": "bessemer",
    "company": "Sarvam",
    "announcedDate": "2026-06-16",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Sovereign AI",
    "sectorEvidence": "Sarvam, a Bengaluru, India-based developer of full-stack sovereign artificial intelligence systems and frontier models",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "HCLTech",
      "Peak XV Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/sarvam-raises-234m-in-first-close-of-series-b-funding-at-1-5-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Sarvam, a Bengaluru, India-based developer of full-stack sovereign artificial intelligence systems and frontier models, raised $234m in the first close of a $300m Series B funding round at a $1.5 billion valuation. The round was led by HCLTech with $150m, joined by Bessemer Venture Partners, Khosla Ventures, and Peak XV Partners."
  },
  {
    "firmSlug": "bessemer",
    "company": "Verse",
    "announcedDate": "2026-06-16",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Energy",
    "sectorEvidence": "Verse built Aria, an AI-powered energy management platform that gives buyers of power a centralized hub to both manage total electricity spend and intelligently dispatch BTM storage assets.",
    "role": "lead",
    "coInvestors": [
      "NVIDIA",
      "Google Ventures",
      "Coatue",
      "Norrsken VC"
    ],
    "sourceUrl": "https://www.bvp.com/news/powering-the-ai-energy-revolution-with-verse",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads Verse's $54M Series B to scale the leading energy infrastructure platform for battery dispatch intelligence."
  },
  {
    "firmSlug": "bessemer",
    "company": "Vetic",
    "announcedDate": "2026-06-17",
    "datePrecision": "day",
    "round": null,
    "sector": "Pet Healthcare",
    "sectorEvidence": "Vetic is creating a platform that ties together the clinical, diagnostic, pharmaceutical, and preventive layers of pet health into a single, continuous experience.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/building-premier-pet-healthcare-with-vetic",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads Vetic's $40M round to build India's first fully connected pet healthcare platform"
  },
  {
    "firmSlug": "bessemer",
    "company": "Mitigata",
    "announcedDate": "2026-06-22",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Cybersecurity",
    "sectorEvidence": "Mitigata is the first Indian company to unify compliance automation, cyber insurance, and security operations.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/securing-indias-digital-economy-with-mitigata",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads Mitigata's $15M Series B to build the resilience layer for India's enterprises"
  },
  {
    "firmSlug": "bessemer",
    "company": "Fireworks",
    "announcedDate": "2026-07-16",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Fireworks is a platform that helps companies own the intelligence powering their products and operations.",
    "role": "participant",
    "coInvestors": [
      "Atreides Management",
      "Index Ventures",
      "TCV",
      "Evantic Capital",
      "Lightspeed Venture Partners",
      "Nvidia",
      "20VC",
      "Menlo Ventures"
    ],
    "sourceUrl": "https://fireworks.ai/blog/series-d-announcement",
    "sourceType": "company-announcement",
    "evidence": "Today, Fireworks announced a $1.505 billion Series D at a $17.5 billion valuation, led by Atreides Management, Index Ventures, and TCV, with participation from Evantic Capital, Lightspeed Venture Partners, Nvidia, 20VC, Bessemer Venture Partners, Menlo Ventures, and others."
  },
  {
    "firmSlug": "bessemer",
    "company": "Neo",
    "announcedDate": "2026-07-20",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Cybersecurity",
    "sectorEvidence": "Neo, the Agentic Software Control company",
    "role": "lead",
    "coInvestors": [
      "Andreessen Horowitz",
      "Craft Ventures",
      "Merlin Ventures"
    ],
    "sourceUrl": "https://www.neo.ai/news/neo-launches-100m",
    "sourceType": "company-announcement",
    "evidence": "Neo, the Agentic Software Control company, today emerged from stealth with $100M in funding from Andreessen Horowitz and Bessemer Venture Partners"
  },
  {
    "firmSlug": "bessemer",
    "company": "30 Sundays",
    "announcedDate": "2026-07-21",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Travel",
    "sectorEvidence": "30 Sundays is an AI-native, full-stack journey planner, owning planning across the discovery and booking stages while providing an on-trip concierge.",
    "role": "lead",
    "coInvestors": [
      "Info Edge Ventures",
      "Eximius Ventures"
    ],
    "sourceUrl": "https://www.tribuneindia.com/news/business/30-sundays-raises-rs-61-crore-series-a-led-by-bessemer-venture-partners-to-scale-its-ai-native-travel-platform/amp",
    "sourceType": "press-release",
    "evidence": "30 Sundays, an AI-native holiday planning and booking platform, has raised Rs. 61 crore (~$6.7 million) in its Series A, led by Bessemer Venture Partners"
  },
  {
    "firmSlug": "bessemer",
    "company": "Act Security",
    "announcedDate": "2026-07-28",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Cybersecurity",
    "sectorEvidence": "Act Security, an action-centric cloud security company, today emerged from stealth with $60 million in total funding and the launch of its cloud security platform.",
    "role": "lead",
    "coInvestors": [
      "Team8",
      "Hetz Ventures",
      "Claltech",
      "Notable Capital",
      "Startpoint Capital",
      "SVCI"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/act-security-launches-action-centric-cloud-security-platform-with-60-million-in-funding-302836148.html",
    "sourceType": "press-release",
    "evidence": "Act Security, an action-centric cloud security company, today emerged from stealth with $60 million in total funding and the launch of its cloud security platform. ... Since its founding in 2025, Act has raised a $20 million seed round led by Team8 and Bessemer Venture Partners with participation from Hetz Ventures and Claltech, and a $40 million Series A led by Notable Capital with participation from Startpoint Capital and SVCI."
  },
  {
    "firmSlug": "bessemer",
    "company": "Onyx Security",
    "announcedDate": "2026-07-29",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Cybersecurity",
    "sectorEvidence": "Onyx Security, the AI control company",
    "role": "lead",
    "coInvestors": [
      "Cyberstarts",
      "TCV",
      "Conviction",
      "FirstMark",
      "Vintage",
      "QuantumLight",
      "G Squared"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260729713522/en/Onyx-Security-Raises-$113M-Series-B-to-Control-Advanced-AI-Quadrupling-Revenue-since-Stealth-Launch-Four-Months-Ago",
    "sourceType": "press-release",
    "evidence": "Onyx Security, the AI control company, announced a $113 million Series B funding round led by Bessemer Venture Partners, with participation from Cyberstarts, TCV, Conviction, FirstMark, Vintage, QuantumLight and G Squared."
  },
  {
    "firmSlug": "bessemer",
    "company": "Flagler Health",
    "announcedDate": "2026-08-11",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Healthcare",
    "sectorEvidence": "Flagler Health, an AI-native platform for musculoskeletal (MSK) healthcare",
    "role": "lead",
    "coInvestors": [
      "SignalFire",
      "Alumni Ventures",
      "Streamlined",
      "186 Ventures",
      "Proof VC",
      "Tribeca Venture Partners",
      "Offscript"
    ],
    "sourceUrl": "https://www.timesargus.com/news/business/flagler-health-raises-50-million-series-b-to-build-the-ai-operating-system-for-musculoskeletal/article_969053ea-b6e3-5da9-8e3f-e93c090c70e8.html",
    "sourceType": "press-release",
    "evidence": "Flagler Health, an AI-native platform for musculoskeletal (MSK) healthcare, today announced it raised a $50 million Series B, bringing total funding raised to $63 million. ... The financing was led by Bessemer Venture Partners, with participation from SignalFire, Alumni Ventures, Streamlined, 186 Ventures, Proof VC, Tribeca Venture Partners, and Offscript."
  },
  {
    "firmSlug": "bloomberg-beta",
    "company": "Bluesky",
    "announcedDate": "2025-04",
    "datePrecision": "month",
    "round": "Series B",
    "sector": "Social Media",
    "sectorEvidence": "Bluesky is an initiative to transition the social web from platforms to protocols.",
    "role": "participant",
    "coInvestors": [
      "Bain Capital Crypto",
      "Alumni Ventures",
      "Anthos Capital",
      "Knight Foundation",
      "True Ventures"
    ],
    "sourceUrl": "https://bsky.social/about/blog/03-19-2026-series-b",
    "sourceType": "company-announcement",
    "evidence": "In April 2025, Bluesky raised $100 million in Series B funding led by Bain Capital Crypto, with participation from Alumni Ventures, Anthos Capital, Bloomberg Beta, Knight Foundation and True Ventures."
  },
  {
    "firmSlug": "bloomberg-beta",
    "company": "Fortastra",
    "announcedDate": "2025-12-11",
    "datePrecision": "day",
    "round": "seed",
    "sector": "Space and Defense",
    "sectorEvidence": "A new startup out of California-called Fortastra-today announced it closed an $8M seed round to develop spacecraft aiming to provide physical security to government and commercial sats for when that day inevitably comes.",
    "role": "participant",
    "coInvestors": [
      "Upfront Ventures",
      "Generational Partners",
      "Forward Deployed Venture Capital",
      "Wave Function Ventures"
    ],
    "sourceUrl": "https://payloadspace.com/fortastra-lands-8m-seed-to-develop-orbital-defense-sats/",
    "sourceType": "reputable-press",
    "evidence": "A new startup out of California-called Fortastra-today announced it closed an $8M seed round to develop spacecraft aiming to provide physical security to government and commercial sats for when that day inevitably comes. ... The round was led by Upfront Ventures, with further participation from Generational Partners, Forward Deployed Venture Capital, Bloomberg Beta, and Wave Function Ventures."
  },
  {
    "firmSlug": "bloomberg-beta",
    "company": "Protege",
    "announcedDate": "2026-01-08",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Data Platform",
    "sectorEvidence": "Protege supports streamlined access to real-world datasets, including private and proprietary data across multiple domains and formats, such as media content, audio recordings, de-identified health records, and medical imaging.",
    "role": "participant",
    "coInvestors": [
      "Andreessen Horowitz (a16z)",
      "Footwork",
      "CRV",
      "Flex Capital",
      "Shaper Capital"
    ],
    "sourceUrl": "https://withprotege.ai/articles/news/protege-a16z-30million-fundraise",
    "sourceType": "company-site",
    "evidence": "Protege, an AI data platform unlocking access to trusted, real-world data at scale, today announced a $30 million Series A round led by Andreessen Horowitz (a16z). The financing expands the company's $25 million Series A from August 2025 and brings total funding to $65 million since the company's founding in 2024. Returning investors include Footwork, CRV, Bloomberg Beta, Flex Capital, Shaper Capital, and more."
  },
  {
    "firmSlug": "bloomberg-beta",
    "company": "NODA AI",
    "announcedDate": "2026-02-26",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Defense Tech",
    "sectorEvidence": "NODA AI, an Austin, Texas-based developer of an algorithmic platform for orchestrating weapons and tactics for multi-domain, multi-vendor systems",
    "role": "participant",
    "coInvestors": [
      "Bessemer Venture Partners",
      "Booz Allen Ventures",
      "Draper Associates",
      "Alumni Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/02/noda-ai-raises-25m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "NODA AI, an Austin, Texas-based developer of an algorithmic platform for orchestrating weapons and tactics for multi-domain, multi-vendor systems, has raised $25M in Series A funding.\n\nThe round was led by Bessemer Venture Partners with participation from Booz Allen Ventures, Draper Associates, Bloomberg Beta, and Alumni Ventures."
  },
  {
    "firmSlug": "bloomberg-beta",
    "company": "Smack Technologies",
    "announcedDate": "2026-03-02",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Defense Tech",
    "sectorEvidence": "Smack Technologies, an El Segundo, CA-based AI lab services company for national security",
    "role": "participant",
    "coInvestors": [
      "Geodesic Capital",
      "Costanoa Ventures",
      "Point72 Ventures",
      "Felicis",
      "First In",
      "Scribble Ventures",
      "Washington Harbor Partners",
      "Palumni VC",
      "Fulcrum Venture Group",
      "Anomaly Fund",
      "Fortitude Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/smack-technologies-raises-32m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Smack Technologies, an El Segundo, CA-based AI lab services company for national security, raised $32M in Series A funding.\n\nThe round was led by Geodesic Capital and Costanoa Ventures with participation from Point72 Ventures, Felicis, First In, Scribble Ventures, Bloomberg Beta, Washington Harbor Partners, Palumni VC, Fulcrum Venture Group, Anomaly Fund, and Fortitude Ventures."
  },
  {
    "firmSlug": "bloomberg-beta",
    "company": "Bluesky",
    "announcedDate": "2026-03-20",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Social Media",
    "sectorEvidence": "Bluesky is a social app built on the AT Protocol, an open source toolbox for building social apps that can all talk to each other.",
    "role": "participant",
    "coInvestors": [
      "Bain Capital Crypto",
      "Anthos Capital",
      "Knight Foundation",
      "Alumni Ventures",
      "True Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/bluesky-raises-100m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Bluesky, a Seattle, WA-based provider of a social app with 42m users, raised $100m in Series B funding.\n\nThe round was led by Bain Capital Crypto, with participation from Anthos Capital, Bloomberg Beta, Knight Foundation, Alumni Ventures and True Ventures."
  },
  {
    "firmSlug": "bloomberg-beta",
    "company": "Stedi",
    "announcedDate": "2026-03-24",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Healthcare Software",
    "sectorEvidence": "Stedi is a healthcare clearinghouse.",
    "role": "participant",
    "coInvestors": [
      "Addition",
      "Stripe",
      "Ribbit",
      "USV",
      "First Round",
      "BoxGroup",
      "Tobi Lutke",
      "Charlie Songhurst",
      "Guillermo Rauch",
      "Karim Atiyeh",
      "Max Mullen",
      "Jack Altman"
    ],
    "sourceUrl": "https://www.stedi.com/blog/series-c",
    "sourceType": "company-announcement",
    "evidence": "Today, I'm thrilled to announce Stedi's $50 million Series C, led by Addition with participation from Stripe, Ribbit, USV, First Round, BoxGroup, and Bloomberg Beta, along with angel investors including Tobi Lutke (founder/CEO, Shopify), Charlie Songhurst, Guillermo Rauch (founder/CEO, Vercel), Karim Atiyeh (founder/CTO, Ramp), Max Mullen (founder, Instacart), Jack Altman, and more."
  },
  {
    "firmSlug": "bloomberg-beta",
    "company": "Stedi",
    "announcedDate": "2026-03-30",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Healthcare Infrastructure",
    "sectorEvidence": "Stedi, a Denver, CO-based developer of a cloud-native healthcare clearinghouse",
    "role": "participant",
    "coInvestors": [
      "Addition",
      "Stripe",
      "Ribbit Capital",
      "USV",
      "First Round",
      "BoxGroup",
      "Tobi Lütke",
      "Guillermo Rauch",
      "Karim Atiyeh"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/stedi-raises-50m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Stedi, a Denver, CO-based developer of a cloud-native healthcare clearinghouse, raised $50m in Series C funding.\n\nThe round was led by Addition, with participation from Stripe, Ribbit Capital, USV, First Round, BoxGroup, and Bloomberg Beta, as well as angel investors including Tobi Lütke (CEO of Shopify), Guillermo Rauch (CEO of Vercel), and Karim Atiyeh (CTO of Ramp)."
  },
  {
    "firmSlug": "bloomberg-beta",
    "company": "Bluefish",
    "announcedDate": "2026-04-14",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Marketing Software",
    "sectorEvidence": "Bluefish, a NYC-based provider of an agentic marketing platform (AMP) for Fortune 500 brands",
    "role": "participant",
    "coInvestors": [
      "Threshold Ventures",
      "NEA",
      "Amex Ventures",
      "TIAA Ventures",
      "Salesforce Ventures",
      "Crane Venture Partners",
      "Laconia",
      "Swift Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/bluefish-raises-43m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Bluefish, a NYC-based provider of an agentic marketing platform (AMP) for Fortune 500 brands, raised $43M in Series B funding.\n\nThe round was led by Threshold Ventures and NEA with participation from Amex Ventures, TIAA Ventures, Salesforce Ventures, Bloomberg Beta, Crane Venture Partners, Laconia, and Swift Ventures."
  },
  {
    "firmSlug": "bloomberg-beta",
    "company": "Corca Research",
    "announcedDate": "2026-06-10",
    "datePrecision": "day",
    "round": null,
    "sector": "Productivity Software",
    "sectorEvidence": "Corca Research, Inc., a New York-based software company building a collaborative workspace for mathematics",
    "role": "participant",
    "coInvestors": [
      "NEA",
      "Daft Capital",
      "NVentures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/corca-research-raises-7-8m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Corca Research, Inc., a New York-based software company building a collaborative workspace for mathematics, raised $7.8M in funding.\n\nThe round was led by NEA, with participation from Bloomberg Beta, Daft Capital, and NVentures, NVIDIA's venture capital arm."
  },
  {
    "firmSlug": "bloomberg-beta",
    "company": "Antares Labs",
    "announcedDate": "2026-07-28",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Real Estate Technology",
    "sectorEvidence": "Antares Labs, a San Francisco, CA-based provider of an AI platform for real estate operations, raised $7.25M in Seed funding.",
    "role": "participant",
    "coInvestors": [
      "Fifth Wall",
      "Base10 Partners",
      "Sandwith Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/antares-labs-raises-7-25m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Antares Labs, a San Francisco, CA-based provider of an AI platform for real estate operations, raised $7.25M in Seed funding. ... Backers included Fifth Wall, Base10 Partners, Bloomberg Beta, and Sandwith Ventures."
  },
  {
    "firmSlug": "dcvc",
    "company": "Proxima",
    "announcedDate": "2026-01-13",
    "datePrecision": "day",
    "round": "seed financing",
    "sector": "AI Drug Discovery",
    "sectorEvidence": "the company (formerly known as VantAI) has raised $80 million in seed-stage financing to double down on its AI-driven technology for the rational discovery and design of new molecular glues and other proximity-based, small-molecule medicines.",
    "role": "lead",
    "coInvestors": [
      "NVIDIA NVentures",
      "Magnetic Ventures"
    ],
    "sourceUrl": "https://www.dcvc.com/news-insights/proxima-raises-80m-in-seed-financing-led-by-dcvc-to-reprogram-protein-protein-interactions",
    "sourceType": "firm-site",
    "evidence": "Proxima raises $80M in seed financing, led by DCVC, to reprogram protein-protein interactions"
  },
  {
    "firmSlug": "dcvc",
    "company": "Humans&",
    "announcedDate": "2026-01-20",
    "datePrecision": "day",
    "round": "Series Seed",
    "sector": "AI",
    "sectorEvidence": "to build human-centric AI collaboration tools that empower workers rather than replacing them to ensure technology operates safely and without damaging mental health.",
    "role": "participant",
    "coInvestors": [],
    "sourceUrl": "https://www.dcvc.com/news-insights/dcvc-2026-q1-update",
    "sourceType": "firm-site",
    "evidence": "Humans& raised a $480 million Series Seed (with participation from DCVC) to build human-centric AI collaboration tools that empower workers rather than replacing them to ensure technology operates safely and without damaging mental health."
  },
  {
    "firmSlug": "dcvc",
    "company": "Lunar Energy",
    "announcedDate": "2026-02-04",
    "datePrecision": "day",
    "round": "Series C and Series D",
    "sector": "Energy",
    "sectorEvidence": "Lunar Energy develops intelligent software and advanced hardware to electrify homes and connect communities to form clean, resilient virtual power plants.",
    "role": "participant",
    "coInvestors": [
      "B Capital",
      "Prelude Ventures",
      "Activate Capital",
      "Piva Capital",
      "Leitmotif",
      "Sunrun",
      "Itochu Corporation",
      "Q Capital Partners"
    ],
    "sourceUrl": "https://www.dcvc.com/news-insights/dcvc-2026-q1-update",
    "sourceType": "firm-site",
    "evidence": "Lunar Energy secured $232 million in Series C and D funding joined by DCVC to scale its home battery systems and virtual power plant software to intelligently balance renewable energy supply, lower electricity costs, and alleviate the increasing strain on the aging U.S. power grid."
  },
  {
    "firmSlug": "dcvc",
    "company": "Iceberg Quantum",
    "announcedDate": "2026-02-12",
    "datePrecision": "day",
    "round": "Series Seed",
    "sector": "Quantum Computing",
    "sectorEvidence": "Iceberg Quantum is designing the next generation of fault-tolerant quantum architectures to accelerate the advent of useful quantum computing.",
    "role": "participant",
    "coInvestors": [
      "LocalGlobe",
      "Blackbird"
    ],
    "sourceUrl": "https://www.dcvc.com/news-insights/dcvc-2026-q1-update",
    "sourceType": "firm-site",
    "evidence": "Iceberg Quantum announced its $6 million Series Seed (in which DCVC participated) and unveiled Pinnacle, its first full fault-tolerant quantum computing architecture."
  },
  {
    "firmSlug": "dcvc",
    "company": "Chariot Defense",
    "announcedDate": "2026-02-25",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Defense Technology",
    "sectorEvidence": "Chariot Defense, a defense technology company pioneering next-generation battlefield power systems, today announced it has raised $34 million in Series A funding.",
    "role": "participant",
    "coInvestors": [
      "Andreessen Horowitz",
      "LMNT",
      "Marlinspike",
      "Overmatch",
      "Shield Capital",
      "Ensemble",
      "Trenches Capital"
    ],
    "sourceUrl": "https://www.dcvc.com/news-insights/dcvc-2026-q1-update",
    "sourceType": "firm-site",
    "evidence": "Chariot Defense raised a $34 million Series A with participation from DCVC to revolutionize power management in defense scenarios and ensure critical military operations have reliable energy."
  },
  {
    "firmSlug": "dcvc",
    "company": "AgZen",
    "announcedDate": "2026-03-13",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Agriculture Technology",
    "sectorEvidence": "AgZen, the MIT spinout bringing droplet-level control to agricultural spraying, today announced it has raised $10 million in Series B funding following a year of accelerated adoption that exceeded internal projections.",
    "role": "lead",
    "coInvestors": [
      "Material Impact",
      "Astanor Ventures",
      "Syngenta Group Ventures"
    ],
    "sourceUrl": "https://www.dcvc.com/news-insights/dcvc-2026-q1-update",
    "sourceType": "firm-site",
    "evidence": "AgZen closed a $10 million Series B funding round led by returning investor DCVC Bio to fuel the rapid growth of its precision AI crop spraying system, which enables farmers to cut chemical inputs by 30 – 50% without experiencing a drop-off in yield."
  },
  {
    "firmSlug": "dcvc",
    "company": "Halter",
    "announcedDate": "2026-03-25",
    "datePrecision": "day",
    "round": "Series E",
    "sector": "Agriculture Technology",
    "sectorEvidence": "The deep tech company's GPS-enabled collars use audio cues and gentle vibrations to contain and herd cattle within virtual boundaries, allowing ranchers to move herds from a smartphone – without breaking ground or stringing wire.",
    "role": "participant",
    "coInvestors": [
      "Founders Fund",
      "Blackbird",
      "Bond",
      "Bessemer",
      "NewView",
      "Ubiquity",
      "Promus",
      "Icehouse Ventures"
    ],
    "sourceUrl": "https://www.halterhq.com/en-us/news/halter-raises-220m-in-series-e-to-accelerate-global-expansion-of-virtual-fencing",
    "sourceType": "company-site",
    "evidence": "The round was led by Founders Fund, with participation from Blackbird, DCVC, Bond, Bessemer, NewView, Ubiquity, Promus and Icehouse Ventures, as it continues to expand alongside the ranchers using Halter in their operations."
  },
  {
    "firmSlug": "dcvc",
    "company": "Sidewinder Therapeutics",
    "announcedDate": "2026-04-08",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Biotech",
    "sectorEvidence": "Sidewinder Therapeutics is developing next-generation bispecific ADCs designed to expand the therapeutic window through enhanced tumor specificity and internalization.",
    "role": "participant",
    "coInvestors": [
      "Frazier Life Sciences",
      "Novartis Venture Fund",
      "OrbiMed",
      "Life Sciences at Goldman Sachs Alternatives",
      "Samsara BioCapital",
      "Longwood Fund",
      "Astellas Venture Management",
      "Alexandria Venture Investments"
    ],
    "sourceUrl": "https://www.dcvc.com/news-insights/dcvc-2026-q2-update",
    "sourceType": "firm-site",
    "evidence": "Sidewinder Therapeutics raised a $137 million Series B, joined by DCVC Bio, to advance its bispecific antibody-drug conjugates toward clinical testing for lung cancer."
  },
  {
    "firmSlug": "dcvc",
    "company": "Latus Bio",
    "announcedDate": "2026-05-04",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Gene Therapy",
    "sectorEvidence": "Latus Bio, Inc. (Latus), a biotechnology company engineering scalable gene therapies for broader patient populations, today announced the closing of a $97 million Series A financing to support its innovative therapeutics pipeline.",
    "role": "participant",
    "coInvestors": [
      "8VC",
      "BioAdvance",
      "Benjamin Franklin Technology Partners",
      "Modi Ventures",
      "Gaingels",
      "Hatch BioFund",
      "Korea Development Bank",
      "Helen's Pink Sky Foundation"
    ],
    "sourceUrl": "https://www.dcvc.com/news-insights/dcvc-2026-q2-update",
    "sourceType": "firm-site",
    "evidence": "Latus Bio closed a $97 million Series A (including a $43 million extension joined by DCVC Bio) to advance AAV-based gene therapies for Huntington's disease and CLN2/Batten disease into clinical trials."
  },
  {
    "firmSlug": "dcvc",
    "company": "Kanvas Biosciences",
    "announcedDate": "2026-05-06",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Biotech",
    "sectorEvidence": "Kanvas Biosciences is a spatial biology company building the world's first microbiome drug screening, discovery and manufacturing platform to accelerate the development of next generation live biotherapeutics.",
    "role": "lead",
    "coInvestors": [
      "Lions Capital LLC",
      "Gates Foundation",
      "ATHOS KG",
      "Germin8",
      "Ki Tua Fund",
      "Pangaea Ventures",
      "Alumni Ventures",
      "Boutique Venture Partners",
      "Cornell University",
      "FemHealth Ventures",
      "Gaingels",
      "Mana Ventures",
      "Red Bear Ventures",
      "RIT Venture Fund",
      "Triple Impact Capital",
      "Kicker Ventures",
      "Uncommon Denominator"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260506062784/en/Kanvas-Biosciences-Secures-%2448M-Series-A-to-Deliver-Novel-Microbiome-Therapeutics-to-Cancer-Patients",
    "sourceType": "press-release",
    "evidence": "Kanvas Biosciences, a full-stack spatial biology company, today announced it has raised a $48 million Series A funding round co-led by existing investors DCVC and Lions Capital LLC."
  },
  {
    "firmSlug": "dcvc",
    "company": "Quantum Motion",
    "announcedDate": "2026-05-07",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Quantum Computing",
    "sectorEvidence": "Quantum Motion is building utility-scale quantum computers using industry-standard silicon transistors.",
    "role": "lead",
    "coInvestors": [
      "Kembara",
      "British Business Bank",
      "Firgun",
      "Oxford Science Enterprises",
      "Inkef",
      "Bosch Ventures",
      "Porsche Automobil Holding SE",
      "Parkwalk Advisors"
    ],
    "sourceUrl": "https://www.dcvc.com/news-insights/dcvc-2026-q2-update",
    "sourceType": "firm-site",
    "evidence": "Quantum Motion raised a $160 million Series C, co-led by DCVC, to scale its energy-efficient, silicon-based quantum computers - making it the UK's best-funded quantum computing company."
  },
  {
    "firmSlug": "dcvc",
    "company": "Recursive Superintelligence",
    "announcedDate": "2026-05-13",
    "datePrecision": "day",
    "round": null,
    "sector": "Artificial Intelligence",
    "sectorEvidence": "Recursive Superintelligence raises $650M to build self-improving AI models",
    "role": "participant",
    "coInvestors": [],
    "sourceUrl": "https://www.dcvc.com/news-insights/dcvc-2026-q2-update/",
    "sourceType": "firm-announcement",
    "evidence": "Recursive Superintelligence emerged from stealth with $650 million in funding (joined by DCVC)"
  },
  {
    "firmSlug": "dcvc",
    "company": "Impulse Space",
    "announcedDate": "2026-06-02",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Space",
    "sectorEvidence": "the in-space mobility leader ... accelerating our future beyond Earth beginning with its fleet of cost-effective, high-performance space vehicles",
    "role": "participant",
    "coInvestors": [],
    "sourceUrl": "https://www.dcvc.com/news-insights/dcvc-2026-q2-update/",
    "sourceType": "firm-announcement",
    "evidence": "Impulse Space raised $500 million in a Series D, joined by DCVC, at a $4.26 billion post-money valuation"
  },
  {
    "firmSlug": "dcvc",
    "company": "Impulse Space",
    "announcedDate": "2026-06-03",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Space",
    "sectorEvidence": "Impulse Space, the in-space mobility leader, is accelerating our future beyond Earth beginning with its fleet of cost-effective, high-performance space vehicles: Helios and Mira.",
    "role": "participant",
    "coInvestors": [
      "137 Ventures",
      "BANNER VC",
      "Founder's Fund",
      "Lux Capital",
      "Linse Capital"
    ],
    "sourceUrl": "https://www.dcvc.com/news-insights/dcvc-2026-q2-update",
    "sourceType": "firm-site",
    "evidence": "Impulse Space raised $500 million in a Series D, joined by DCVC, at a $4.26 billion post-money valuation, to expand production of its orbital transfer vehicles supporting growing commercial and government demand in space."
  },
  {
    "firmSlug": "dcvc",
    "company": "Atom Computing",
    "announcedDate": "2026-06-16",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Quantum Computing",
    "sectorEvidence": "Atom Computing is developing large-scale quantum computers to enable companies and researchers to achieve unprecedented computational breakthroughs.",
    "role": "participant",
    "coInvestors": [
      "Third Point Ventures",
      "Cisco Investments"
    ],
    "sourceUrl": "https://www.dcvc.com/news-insights/dcvc-2026-q2-update",
    "sourceType": "firm-site",
    "evidence": "Atom Computing raised over $300 million, including $100 million from the U.S. Department of Commerce under the CHIPS Act and a $100 million Series C (in which DCVC participated), to accelerate the development of fault-tolerant, neutral-atom quantum computers."
  },
  {
    "firmSlug": "dcvc",
    "company": "Syntax Bio",
    "announcedDate": "2026-06-21",
    "datePrecision": "day",
    "round": "expanded Series A",
    "sector": "Synthetic Biology",
    "sectorEvidence": "Syntax Bio, a synthetic biology company programming the next generation of cell therapies, today announced an expanded Series A and new appointments to its executive leadership team, board of directors and scientific advisory board.",
    "role": "participant",
    "coInvestors": [
      "Astellas Venture Management",
      "Illumina Ventures",
      "Civilization Ventures",
      "EGB Capital",
      "Mansueto Office",
      "Portal Innovations",
      "Draper Associates",
      "Allegis Capital",
      "LongGame",
      "Mayo Clinic",
      "Illinois Department of Commerce and Economic Opportunity",
      "Illinois Ventures",
      "Exit Fund",
      "Sigma Group",
      "Walder Ventures"
    ],
    "sourceUrl": "https://www.dcvc.com/news-insights/dcvc-2026-q2-update",
    "sourceType": "firm-site",
    "evidence": "Syntax Bio expanded its Series A to $14.4 million (joined by DCVC Bio) - bringing total funding to over $25 million - to advance its Cellgorithm platform and pancreatic beta cell therapy program for type 1 diabetes."
  },
  {
    "firmSlug": "dell-technologies-capital",
    "company": "Distyl AI",
    "announcedDate": "2025-09-23",
    "datePrecision": "day",
    "round": null,
    "sector": "Enterprise AI",
    "sectorEvidence": "Distyl works with Fortune 500 leaders in healthcare, telecommunications, insurance, manufacturing, and financial services to deliver measurable outcomes today while preparing them to re-architect their business models for the AI era.",
    "role": "participant",
    "coInvestors": [
      "Lightspeed Venture Partners",
      "Khosla Ventures",
      "DST Global",
      "Coatue"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/distyl-ai-raises-175-million-at-1-8-billion-valuation-to-help-global-enterprises-become-ai-native-302564270.html",
    "sourceType": "press-release",
    "evidence": "Distyl AI, the startup helping blue-chip leaders worldwide build the AI-native enterprises of the future, today announced a $175 million funding round at a $1.8 billion valuation, with participation from Lightspeed Venture Partners, Khosla Ventures, DST Global, Coatue, and Dell Technologies Capital."
  },
  {
    "firmSlug": "dell-technologies-capital",
    "company": "Bland",
    "announcedDate": "2026-06-16",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Voice AI",
    "sectorEvidence": "Bland is a voice AI platform for deploying production-grade AI agents across phone, SMS, and chat, enabling companies to automate customer interactions.",
    "role": "lead",
    "coInvestors": [
      "HubSpot Ventures",
      "Archerman Capital",
      "Tribeca Venture Partners",
      "Emergence Capital",
      "Upfront Ventures",
      "Scale Venture Partners",
      "Y Combinator"
    ],
    "sourceUrl": "https://fortune.com/2026/06/16/voice-ai-bland-50-million-after-being-rejected-by-180-investors/",
    "sourceType": "reputable-press",
    "evidence": "Bland, the San Francisco voice AI company Granet co-founded in 2023 with Sobhan Nejad, closed a $50 million Series C led by Dell Technologies Capital, Fortune learned exclusively."
  },
  {
    "firmSlug": "dell-technologies-capital",
    "company": "Limitless Labs",
    "announcedDate": "2026-06-16",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Manufacturing AI",
    "sectorEvidence": "Limitless Labs is building the world's first agentic physical AI platform for CAD/CAM in manufacturing.",
    "role": "lead",
    "coInvestors": [
      "Square Peg"
    ],
    "sourceUrl": "https://www.delltechnologiescapital.com/resources/limitless-labs-investing-in-the-future-of-industrial-manufacturing",
    "sourceType": "firm-site",
    "evidence": "Today, I'm proud to share that Dell Technologies Capital co-led the $20 million Series A in Limitless Labs, alongside Square Peg."
  },
  {
    "firmSlug": "dell-technologies-capital",
    "company": "Prime Intellect",
    "announcedDate": "2026-07-08",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Training Infrastructure",
    "sectorEvidence": "Prime Intellect, a San Francisco, California-based developer of an open-source decentralized AI training and reinforcement learning infrastructure platform",
    "role": "participant",
    "coInvestors": [
      "Radical Ventures",
      "NVIDIA Ventures",
      "Intel Capital",
      "Iconiq"
    ],
    "sourceUrl": "https://techcrunch.com/2026/07/08/prime-intellect-raises-130m-series-a-to-help-enterprises-build-their-own-ai-agents/",
    "sourceType": "reputable-press",
    "evidence": "The massive round was led by Radical Ventures, with participation from Nvidia Ventures, Intel Capital, Dell Technologies Capital, Iconiq, and a long list of angel investors who are founders of notable companies, including Aravind Srinivas (Perplexity), Aaron Levie (Box), Winston Weinberg (Harvey), Jeff Wang (Cognition), and Brendan Foody (Mercor)."
  },
  {
    "firmSlug": "dell-technologies-capital",
    "company": "Fly.io",
    "announcedDate": "2026-07-24",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Fly.io builds computers for agents - connected infrastructure designed for AI agents and the applications they build. Unlike disposable execution environments, Fly.io gives agents real computers that have durable disk drives, secure connectivity to other systems, and the ability to scale to millions of instances to power production AI applications.",
    "role": "lead",
    "coInvestors": [
      "Intel Capital",
      "Andreessen Horowitz",
      "EQT",
      "Geodesic",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.intelcapital.com/fly-io-doubles-down-on-computers-for-agents-with-25m-to-deliver-the-next-generation-of-ai-infrastructure/",
    "sourceType": "press-release",
    "evidence": "To accelerate this opportunity, Fly.io also announced $25 million in Series D funding co-led by Dell Technologies Capital and Intel Capital, with participation from Andreessen Horowitz, EQT, Geodesic, and YC."
  },
  {
    "firmSlug": "dell-technologies-capital",
    "company": "Skan AI",
    "announcedDate": "2026-08-12",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Enterprise AI",
    "sectorEvidence": "Process intelligence company Skan AI said today it raised $63 million in a Series C round to help further develop a platform that records how enterprise work actually gets done and feeds that record to artificial intelligence agents.",
    "role": "lead",
    "coInvestors": [
      "Cathay Innovation",
      "Citi Ventures",
      "Bloomberg Beta",
      "State Farm Ventures",
      "Wipro Ventures"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/skan-ai-raises-63-million-to-give-enterprise-ai-the-context-its-missing-how-work-actually-gets-done-302849114.html",
    "sourceType": "press-release",
    "evidence": "Skan AI, the context graph of work for enterprise AI, today announced $63 million in funding co-led by Cathay Innovation and Dell Technologies Capital, with participation from Citi Ventures, Bloomberg Beta, State Farm Ventures®, and Wipro Ventures."
  },
  {
    "firmSlug": "elad-gil",
    "company": "Abridge",
    "announcedDate": "2025-02-17",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Healthcare AI",
    "sectorEvidence": "Abridge, a seven-year-old company focusing on improving doctors' clinical documentation workflows with AI, now has new mission fuel.",
    "role": "lead",
    "coInvestors": [
      "IVP",
      "Bessemer Venture Partners",
      "CapitalG",
      "Lightspeed Venture Partners",
      "K. Ventures",
      "NVentures",
      "SV Angel",
      "Redpoint Ventures",
      "Spark Capital",
      "California Healthcare Foundation",
      "CVS Ventures"
    ],
    "sourceUrl": "https://fortune.com/2025/02/17/exclusive-abridge-raises-250-million-series-d-led-by-elad-gil-and-ivp/",
    "sourceType": "reputable-press",
    "evidence": "Exclusive: Abridge raises $250 million Series D led by Elad Gil and IVP ... The Pittsburgh, Pa.-based company has raised a $250 million Series D, co-led by tech entrepreneur Elad Gil and VC firm IVP, valuing the startup at $2.75 billion post-money."
  },
  {
    "firmSlug": "elad-gil",
    "company": "Infisical",
    "announcedDate": "2025-06-06",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Developer Security",
    "sectorEvidence": "Infisical is a secrets management platform for developers and companies, offering the tech to securely store, change, and retrieve vital credentials.",
    "role": "lead",
    "coInvestors": [
      "Y Combinator",
      "Gradient",
      "Dynamic Fund",
      "Olivier Pomel",
      "Antonio Gracias"
    ],
    "sourceUrl": "https://fortune.com/2025/06/06/infisical-raises-16-million-series-a-led-by-elad-gil-to-safeguard-secrets/",
    "sourceType": "reputable-press",
    "evidence": "Founded in 2022 by Matsiiako with Tony Dang and Maidul Islam, Infisical's now raised a $16 million Series A, led by Elad Gil."
  },
  {
    "firmSlug": "elad-gil",
    "company": "Eon",
    "announcedDate": "2025-12-02",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Cloud Data Infrastructure",
    "sectorEvidence": "Eon is a trusted partner for enterprises seeking to unify, protect, and activate structured and unstructured data across multi-cloud environments.",
    "role": "lead",
    "coInvestors": [
      "Sequoia Capital",
      "Lightspeed Venture Partners",
      "Greenoaks",
      "BOND",
      "Affinity",
      "Omri Casspi",
      "Vine Ventures"
    ],
    "sourceUrl": "https://www.eon.io/news-and-events/series-d-funding",
    "sourceType": "company-announcement",
    "evidence": "Eon, the first to unlock cloud data backups for enterprise AI, today announced that it has raised a $300 million Series D funding round led by Elad Gil of Gil Capital."
  },
  {
    "firmSlug": "elad-gil",
    "company": "Decagon",
    "announcedDate": "2026-01-29",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Customer Service AI",
    "sectorEvidence": "Decagon, a San Francisco, CA-based company which specializes in conversational AI agents for concierge customer experiences",
    "role": "participant",
    "coInvestors": [
      "Coatue Management",
      "Index Ventures",
      "ChemistryVC",
      "Definition Capital",
      "Starwood Capital",
      "a16z",
      "A*",
      "Accel",
      "Avra",
      "Bain Capital Ventures",
      "T.Capital",
      "Forerunner",
      "Ribbit Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/decagon-raises-250m-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Decagon, a San Francisco, CA-based company which specializes in conversational AI agents for concierge customer experiences, raised $250M in Series D funding, at $4.5 Billion valuation.\n\nThe round was led by Coatue Management and Index Ventures, with participation from new investors ChemistryVC, Definition Capital, and Starwood Capital, and existing investors including a16z, A*, Accel, Avra, Bain Capital Ventures, Elad Gil, T.Capital, Forerunner, and Ribbit Capital."
  },
  {
    "firmSlug": "elad-gil",
    "company": "Moab",
    "announcedDate": "2026-02-17",
    "datePrecision": "day",
    "round": "Seed and Series A",
    "sector": "Equipment Rental Software",
    "sectorEvidence": "Moab, a NYC-based software company building operating systems for equipment rental and dealership businesses",
    "role": "lead",
    "coInvestors": [
      "Ironspring Ventures",
      "Karim Atiyeh",
      "Dave Yuan"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/02/moab-raises-16m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Moab, a NYC-based software company building operating systems for equipment rental and dealership businesses, raised $16M in funding across Seed and Series A rounds.\n\nThe Seed round closed in April 2024 and the Series A closed in October 2025.\n\nBoth rounds were $8M, led by Elad Gil, with investment from Ironspring Ventures and participation from angel investors Karim Atiyeh, Co-Founder and CTO of Ramp, and Dave Yuan, Founder of Tidemark."
  },
  {
    "firmSlug": "elad-gil",
    "company": "Braintrust",
    "announcedDate": "2026-02-18",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Observability",
    "sectorEvidence": "Braintrust, a San Francisco, CA-based developer of an AI observability and evaluation platform",
    "role": "participant",
    "coInvestors": [
      "ICONIQ",
      "Andreessen Horowitz",
      "Greylock",
      "basecase capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/02/braintrust-raises-80m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Braintrust, a San Francisco, CA-based developer of an AI observability and evaluation platform, raised $80M in Series B funding.\n\nThe round was led by ICONIQ, with participation from Andreessen Horowitz, Greylock, Elad Gil, basecase capital, and others."
  },
  {
    "firmSlug": "elad-gil",
    "company": "RunSybil",
    "announcedDate": "2026-03-19",
    "datePrecision": "day",
    "round": null,
    "sector": "Cybersecurity",
    "sectorEvidence": "RunSybil, a San Francisco, CA-based provider of a security platform",
    "role": "participant",
    "coInvestors": [
      "Khosla Ventures",
      "S32",
      "the Anthology Fund from Anthropic",
      "Menlo Ventures",
      "Conviction",
      "Nikesh Arora",
      "Amit Agarwal",
      "Jeff Dean"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/runsybil-raises-40m-in-total-funding.html",
    "sourceType": "reputable-press",
    "evidence": "RunSybil, a San Francisco, CA-based provider of a security platform, raised $40M in total funding.\n\nThe round was led by Khosla Ventures, with participation from S32, the Anthology Fund from Anthropic and Menlo Ventures, Conviction, and Elad Gil, along with angel investors including Nikesh Arora, Amit Agarwal, Jeff Dean, and others."
  },
  {
    "firmSlug": "elad-gil",
    "company": "Harvey",
    "announcedDate": "2026-03-25",
    "datePrecision": "day",
    "round": null,
    "sector": "Legal AI",
    "sectorEvidence": "Harvey, a San Francisco, CA-based company developing legal infrastructure for law firms and in-house teams",
    "role": "participant",
    "coInvestors": [
      "GIC",
      "Sequoia",
      "Andreessen Horowitz",
      "Coatue",
      "Conviction Partners",
      "Evantic",
      "Kleiner Perkins"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/harvey-raises-200m-in-new-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Harvey, a San Francisco, CA-based company developing legal infrastructure for law firms and in-house teams, raised $200M in new funding, at $11 Billion valuation.\n\nThe round was led by GIC and Sequoia with participation from existing investors Andreessen Horowitz, Coatue, Conviction Partners, Elad Gil, Evantic, and Kleiner Perkins."
  },
  {
    "firmSlug": "elad-gil",
    "company": "Saronic",
    "announcedDate": "2026-03-31",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Defense Tech",
    "sectorEvidence": "Saronic Technologies today announced it has closed $1.75 billion in Series D funding to advance its mission of ensuring maritime superiority for the U.S. and its allies by delivering autonomous platforms at scale across defense and commercial sectors.",
    "role": "participant",
    "coInvestors": [
      "Advent International",
      "Bessemer Venture Partners",
      "DFJ Growth",
      "BAM Elevate",
      "8VC",
      "Caffeinated Capital",
      "Andreessen Horowitz",
      "Franklin Templeton",
      "Kleiner Perkins"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/saronic-closes-1-75b-series-d-at-9-25b-valuation-to-accelerate-a-new-era-of-maritime-autonomy-302729238.html",
    "sourceType": "press-release",
    "evidence": "Saronic welcomes Advent International, Bessemer Venture Partners, DFJ Growth, BAM Elevate, and other new partners and recognizes the continued commitment of its existing investors, including 8VC, Caffeinated Capital, Andreessen Horowitz, Elad Gil, and Franklin Templeton."
  },
  {
    "firmSlug": "elad-gil",
    "company": "Applied Compute",
    "announcedDate": "2026-04-08",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Enterprise AI",
    "sectorEvidence": "We help companies unlock their institutional context, train agents against their specific workflows and performance criteria, and deploy those back into production alongside their human experts.",
    "role": "participant",
    "coInvestors": [
      "Kleiner Perkins",
      "Lux",
      "Greenoaks",
      "Neo",
      "Hanabi"
    ],
    "sourceUrl": "https://www.appliedcompute.com/company/fundraise",
    "sourceType": "company-site",
    "evidence": "Applied Compute Raises $80M to Help Enterprises Advance from Generalized to Specific Intelligence ... Today, we're announcing $80 million in new financing at a $1.3 billion post-money valuation, led by Kleiner Perkins with continued participation from Elad Gil, Lux, Greenoaks, Neo, Hanabi, and more."
  },
  {
    "firmSlug": "elad-gil",
    "company": "BuildForever",
    "announcedDate": "2026-04-22",
    "datePrecision": "day",
    "round": "seed funding",
    "sector": "Consumer Software",
    "sectorEvidence": "BuildForever, a San Francisco, CA- and NYC-based consumer technology company advancing email functionalities with AI",
    "role": null,
    "coInvestors": [
      "Felicis Ventures",
      "Abstract VC",
      "A-Star Co",
      "SV Angel",
      "Paul Buchheit",
      "Evan Sharp",
      "Ben Silbermann",
      "Fidji Simo"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/buildforever-raises-9-5m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "BuildForever, a San Francisco, CA- and NYC-based consumer technology company advancing email functionalities with AI, raised $9.5M in seed funding.\n\nBackers included Felicis Ventures, Abstract VC, Elad Gil, A-Star Co, and SV Angel, angel investors Paul Buchheit, Pinterest co-founders Evan Sharp and Ben Silbermann, and Fidji Simo."
  },
  {
    "firmSlug": "elad-gil",
    "company": "Petual",
    "announcedDate": "2026-04-23",
    "datePrecision": "day",
    "round": null,
    "sector": "Audit and Compliance Software",
    "sectorEvidence": "Petual, a San Francisco, CA-based provider of an AI-powered platform for audit and compliance",
    "role": "lead",
    "coInvestors": [
      "Andreessen Horowitz",
      "First Round Capital",
      "Cowboy Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/petual-raises-20m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Petual, a San Francisco, CA-based provider of an AI-powered platform for audit and compliance, raised $20M in funding.\n\nThe round was led by Andreessen Horowitz, First Round Capital, Cowboy Ventures, and Elad Gil."
  },
  {
    "firmSlug": "elad-gil",
    "company": "Frame Security",
    "announcedDate": "2026-05-11",
    "datePrecision": "day",
    "round": null,
    "sector": "Cybersecurity",
    "sectorEvidence": "Frame Security, a Tel Aviv, Israel-based human security and security awareness company",
    "role": "participant",
    "coInvestors": [
      "Index Ventures",
      "Team8",
      "Picture Capital",
      "Assaf Rappaport"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/frame-security-raises-50m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Frame Security, a Tel Aviv, Israel-based human security and security awareness company, raised $50M in funding.\n\nBackers included Index Ventures, Team8, and Picture Capital, with participation from Assaf Rappaport and Elad Gil."
  },
  {
    "firmSlug": "elad-gil",
    "company": "NavigateAI",
    "announcedDate": "2026-05-26",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Construction Tech",
    "sectorEvidence": "NavigateAI is building the trusted AI copilot for the physical world. NavigateAI puts an AI partner in the hands of every worker in the field, providing real-time upskilling, automating quality control, and helping teams build faster and cheaper.",
    "role": "lead",
    "coInvestors": [
      "Khosla Ventures",
      "Fifth Wall",
      "Lennar",
      "Tishman Speyer",
      "Helix Electric",
      "Zach Frankel",
      "Dallas Tanner",
      "Marcus Ridgway",
      "Winston Weinberg",
      "Gary Beasley",
      "Jesse Zhang",
      "Apoorva Mehta",
      "Tony Xu",
      "Logan Green",
      "Brian Armstrong"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2026/05/26/3301425/0/en/navigateai-launches-to-build-the-ai-copilot-for-the-physical-world.html",
    "sourceType": "press-release",
    "evidence": "The $25mm seed round was led by Elad Gil with participation from Khosla Ventures, Lennar, Tishman Speyer, and Helix Electric alongside angels including Zach Frankel (Ramp), Dallas Tanner (Invitation Homes), Winston Weinberg (Harvey.ai), Jesse Zhang (Decagon), Tony Xu (DoorDash), and others."
  },
  {
    "firmSlug": "elad-gil",
    "company": "NavigateAI",
    "announcedDate": "2026-05-27",
    "datePrecision": "day",
    "round": null,
    "sector": "Construction Tech",
    "sectorEvidence": "NavigateAI, a San Francisco, CA-based provider of an AI copilot service supporting field workers",
    "role": "lead",
    "coInvestors": [
      "Khosla Ventures",
      "Lennar",
      "Tishman Speyer",
      "Helix Electric",
      "Zach Frankel",
      "Dallas Tanner",
      "Winston Weinberg",
      "Jesse Zhang",
      "Tony Xu"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/navigateai-raises-25m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "NavigateAI, a San Francisco, CA-based provider of an AI copilot service supporting field workers, raised $25M in funding.\n\nThe round was led by Elad Gil with participation from Khosla Ventures, Lennar, Tishman Speyer, and Helix Electric alongside angels including Zach Frankel (Ramp), Dallas Tanner (Invitation Homes), Winston Weinberg (Harvey.ai), Jesse Zhang (Decagon), Tony Xu (DoorDash), and others."
  },
  {
    "firmSlug": "elad-gil",
    "company": "Cognition",
    "announcedDate": "2026-05-28",
    "datePrecision": "day",
    "round": null,
    "sector": "AI Software Engineering",
    "sectorEvidence": "Cognition, a San Francisco, CA-based developer of autonomous AI software engineering agents",
    "role": "participant",
    "coInvestors": [
      "Lux Capital",
      "General Catalyst",
      "8VC",
      "Ribbit Capital",
      "Atreides",
      "Layer Global",
      "Founders Fund",
      "Bain Capital Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/cognition-raises-over-1-billion-in-funding-at-26-billion-post-money-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Cognition, a San Francisco, CA-based developer of autonomous AI software engineering agents, raised over $1 billion in a funding round at a $26 billion post-money valuation.\n\nThe round was co-led by Lux Capital and General Catalyst, with participation from 8VC, Ribbit Capital, Atreides, Layer Global, and returning backers including Founders Fund, Elad Gil, and Bain Capital Ventures."
  },
  {
    "firmSlug": "index-ventures",
    "company": "ClickHouse",
    "announcedDate": "2026-01-16",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Database Software",
    "sectorEvidence": "ClickHouse, which spun out from Russian search giant Yandex in 2021, develops database software designed to process the massive datasets required by AI agents.",
    "role": "participant",
    "coInvestors": [
      "Dragoneer Investment Group",
      "Bessemer Venture Partners",
      "GIC",
      "Khosla Ventures",
      "Lightspeed Venture Partners"
    ],
    "sourceUrl": "https://techcrunch.com/2026/01/16/snowflake-databricks-challenger-clickhouse-hits-15b-valuation/",
    "sourceType": "reputable-press",
    "evidence": "Database provider ClickHouse secured $400 million at a $15 billion valuation, Bloomberg reported, representing about a 2.5x increase from its $6.35 billion valuation last May. The round was led by Dragoneer Investment Group, the startup said, with participation from investors including Bessemer Venture Partners, GIC, Index Ventures, Khosla Ventures, and Lightspeed Venture Partners."
  },
  {
    "firmSlug": "index-ventures",
    "company": "LiveKit",
    "announcedDate": "2026-01-22",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Infrastructure",
    "sectorEvidence": "LiveKit, a developer of infrastructure software for real-time AI voice and video applications",
    "role": "lead",
    "coInvestors": [
      "Altimeter Capital Management",
      "Hanabi Capital",
      "Redpoint Ventures"
    ],
    "sourceUrl": "https://techcrunch.com/2026/01/22/voice-ai-engine-and-openai-partner-livekit-hits-1b-valuation/",
    "sourceType": "reputable-press",
    "evidence": "The round, which comes 10 months after LiveKit's previous fundraise, was led by Index Ventures with participation from existing investors, including Altimeter Capital Management, Hanabi Capital, and Redpoint Ventures."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Decagon",
    "announcedDate": "2026-01-29",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Customer Service AI",
    "sectorEvidence": "Decagon, a San Francisco, CA-based company which specializes in conversational AI agents for concierge customer experiences",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "Coatue Management",
      "ChemistryVC",
      "Definition Capital",
      "Starwood Capital",
      "a16z",
      "A*",
      "Accel",
      "Avra",
      "Bain Capital Ventures",
      "T.Capital",
      "Forerunner",
      "Ribbit Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/decagon-raises-250m-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Decagon, a San Francisco, CA-based company which specializes in conversational AI agents for concierge customer experiences, raised $250M in Series D funding, at $4.5 Billion valuation.\n\nThe round was led by Coatue Management and Index Ventures, with participation from new investors ChemistryVC, Definition Capital, and Starwood Capital, and existing investors including a16z, A*, Accel, Avra, Bain Capital Ventures, Elad Gil, T.Capital, Forerunner, and Ribbit Capital."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Evervault",
    "announcedDate": "2026-03-05",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Data Security",
    "sectorEvidence": "Evervault, a NYC-based developer-first platform for encrypting and orchestrating sensitive data",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Ribbit Capital",
      "Sequoia Capital",
      "Operator Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/evervault-raises-25m-in-series-b-financing.html",
    "sourceType": "reputable-press",
    "evidence": "Evervault, a NYC-based developer-first platform for encrypting and orchestrating sensitive data, raised $25m in Series B funding. The round, which brought total funding to $46m, was led by Ribbit Capital with participation from Index Ventures, Sequoia Capital, Kleiner Perkins and Operator Partners."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Parallel",
    "announcedDate": "2026-03-19",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Healthcare AI",
    "sectorEvidence": "Parallel's AI agents operate directly inside hospital software - learning to navigate UIs the way a person would, without requiring any API access or back-end changes.",
    "role": "lead",
    "coInvestors": [
      "Frst",
      "YC",
      "Hexa"
    ],
    "sourceUrl": "https://www.indexventures.com/perspectives/parallel-raises-20m-to-tackle-hospital-inefficiencies-with-ai-agents/",
    "sourceType": "firm-site",
    "evidence": "Index Ventures is leading a $20M Series A - with support from Frst, YC, Hexa, and angels including Arthur Mensch (Mistral) and the Pennylane founders - to scale Parallel's agent rollout across hospitals in Europe and the US."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Granola",
    "announcedDate": "2026-03-25",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Productivity",
    "sectorEvidence": "From being a prosumer app that sits on your computer, transcribes meetings, and generates notes, Granola has been building features to suit an enterprise stack.",
    "role": "lead",
    "coInvestors": [
      "Kleiner Perkins",
      "Lightspeed",
      "Spark",
      "NFDG"
    ],
    "sourceUrl": "https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-ai-app/",
    "sourceType": "reputable-press",
    "evidence": "Granola has secured $125 million in Series C funding led by Danny Rimer at Index Ventures, with participation from Mamoon Hamid at Kleiner Perkins."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Ineffable Intelligence",
    "announcedDate": "2026-04-27",
    "datePrecision": "day",
    "round": null,
    "sector": "AI Research",
    "sectorEvidence": "Ineffable aims to create a 'superlearner' capable of discovering knowledge and skills without relying on human data by leveraging reinforcement learning - a technique in which AI systems learn through trial and error rather than studying human-generated examples.",
    "role": null,
    "coInvestors": [
      "Sequoia Capital",
      "Lightspeed Venture Partners",
      "Google",
      "Nvidia"
    ],
    "sourceUrl": "https://techcrunch.com/2026/04/27/deepminds-david-silver-just-raised-1-1b-to-build-an-ai-that-learns-without-human-data/",
    "sourceType": "reputable-press",
    "evidence": "Ineffable Intelligence, a British AI lab founded a mere few months ago by former DeepMind researcher David Silver, has raised $1.1 billion in funding at a valuation of $5.1 billion. [...] According to Wired, the round was led by Sequoia Capital and Lightspeed Venture Partners, with participation from Index Ventures, Google, Nvidia, and others."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Parallel Web Systems",
    "announcedDate": "2026-04-29",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Parallel Web Systems, a Palo Alto, CA-based provider of an infrastructure helping AI agents access and use the open web",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Sequoia Capital",
      "Khosla Ventures",
      "First Round Capital",
      "Spark Capital",
      "Terrain Capital",
      "Abstract Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/parallel-web-systems-raises-100m-in-series-b-funding-at-2-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Parallel Web Systems, a Palo Alto, CA-based provider of an infrastructure helping AI agents access and use the open web, raised $100M in Series B funding, at $2 Billion valuation. The round was led by Sequoia Capital. Other investors included Kleiner Perkins, Index Ventures, Khosla Ventures, First Round Capital, Spark Capital, Terrain Capital, and Abstract Ventures."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Frame Security",
    "announcedDate": "2026-05-11",
    "datePrecision": "day",
    "round": null,
    "sector": "Cybersecurity",
    "sectorEvidence": "Frame Security, a Tel Aviv, Israel-based human security and security awareness company",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "Team8",
      "Picture Capital",
      "Assaf Rappaport"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/frame-security-raises-50m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Frame Security, a Tel Aviv, Israel-based human security and security awareness company, raised $50M in funding.\n\nBackers included Index Ventures, Team8, and Picture Capital, with participation from Assaf Rappaport and Elad Gil."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Garner Health",
    "announcedDate": "2026-05-28",
    "datePrecision": "day",
    "round": "Series E",
    "sector": "Digital Health",
    "sectorEvidence": "Garner Health, a NYC-based digital platform provider that helps patients find healthcare providers using data and financial incentives",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Redpoint",
      "Thrive",
      "Sequoia",
      "Founders Fund",
      "Kaiser Permanente Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/garner-health-raises-100m-in-series-e-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Garner Health, a NYC-based digital platform provider that helps patients find healthcare providers using data and financial incentives, raised $100M in Series E funding, at $2.74 billion valuation. The round was led by Index Ventures with participation from existing investors including Kleiner Perkins, Redpoint, Thrive, Sequoia, Founders Fund, and Kaiser Permanente Ventures."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Uncovr",
    "announcedDate": "2026-06-10",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Healthcare AI",
    "sectorEvidence": "Uncovr transforms surgical video into structured data, automatically generating operative reports and procedural coding suggestions before surgeons leave the operating room.",
    "role": "lead",
    "coInvestors": [
      "Seedcamp",
      "Frst",
      "No Label Ventures",
      "Sequoia Scout",
      "Entrepreneurs First"
    ],
    "sourceUrl": "https://www.indexventures.com/perspectives/uncovr-raises-7-million-in-seed-funding-to-build-the-system-of-record-for-surgery/",
    "sourceType": "firm-site",
    "evidence": "Index Ventures leads Uncovr's $7M seed to automate surgical documentation and coding directly from OR video"
  },
  {
    "firmSlug": "index-ventures",
    "company": "NewCore",
    "announcedDate": "2026-06-15",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Cybersecurity",
    "sectorEvidence": "NewCore's platform is designed to manage both human and AI-agent identities in a single system.",
    "role": "participant",
    "coInvestors": [
      "Cyberstarts",
      "Evolution Equity Partners"
    ],
    "sourceUrl": "https://techcrunch.com/2026/06/15/ai-agents-are-becoming-employees-newcore-emerges-with-66m-to-give-them-identities/",
    "sourceType": "reputable-press",
    "evidence": "The seed round was led by cybersecurity-focused venture firm Cyberstarts, with participation from Index Ventures and Evolution Equity Partners, valuing NewCore at $300 million after investment."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Conduct",
    "announcedDate": "2026-06-17",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Enterprise Software",
    "sectorEvidence": "Conduct is a London-based startup that uses AI to help large enterprises change their core systems such as SAP, Oracle and Salesforce, making customisations visible and editable through natural-language prompts.",
    "role": "lead",
    "coInvestors": [
      "ICONIQ"
    ],
    "sourceUrl": "https://www.indexventures.com/perspectives/conduct-a-world-where-corporates-move-at-startup-speed/",
    "sourceType": "firm-site",
    "evidence": "Index Ventures co-leads Conduct's $60 million Series A along with ICONIQ"
  },
  {
    "firmSlug": "index-ventures",
    "company": "Taktile",
    "announcedDate": "2026-06-22",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Fintech",
    "sectorEvidence": "Taktile enables financial institutions to transform into AI-native organizations that are increasingly powered by autonomous agents.",
    "role": null,
    "coInvestors": [
      "Y Combinator",
      "Growth Equity at Goldman Sachs Alternatives",
      "Balderton Capital",
      "Tiger Global",
      "Dig Ventures"
    ],
    "sourceUrl": "https://taktile.com/articles/taktile-secures-110m-in-goldman-sachs-led-series-c-to-power-ai-transformation-in-financial-institutions",
    "sourceType": "company-site",
    "evidence": "Taktile, the leader in AI transformation for financial institutions, today announced its $110 million Series C fundraise. Growth Equity at Goldman Sachs Alternatives led the round, with participation from Balderton Capital, Index Ventures, Tiger Global, Y Combinator, and Dig Ventures."
  },
  {
    "firmSlug": "index-ventures",
    "company": "fomo",
    "announcedDate": "2026-06-22",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Fintech",
    "sectorEvidence": "a trading platform designed to simplify access to on-chain markets for everyone",
    "role": "lead",
    "coInvestors": [
      "Union Square Ventures",
      "Benchmark"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2026/06/22/3315279/0/en/fomo-raises-75-million-series-b-led-by-index-ventures-to-scale-global-consumer-trading-app.html",
    "sourceType": "press-release",
    "evidence": "fomo, a trading platform designed to simplify access to on-chain markets for everyone, today announced an $75 million Series B led by Index Ventures with strong participation from Union Square Ventures and existing investor Benchmark."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Arca",
    "announcedDate": "2026-06-25",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Wealth Management",
    "sectorEvidence": "Arca pairs each client with a human advisor backed by an AI-native platform, covering portfolio building, tax optimisation, financial planning and life advice.",
    "role": "participant",
    "coInvestors": [],
    "sourceUrl": "https://www.indexventures.com/perspectives/arca-a-calmer-relationship-with-money/",
    "sourceType": "firm-site",
    "evidence": "Index Ventures joins Arca's $64M Series A to bring dedicated, advisor-led wealth management to the people who've always deserved it most."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Chai Discovery",
    "announcedDate": "2026-07-14",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Biotech",
    "sectorEvidence": "Chai's models are designed to reason about biological structure and function, generate new molecular designs from scratch, and help pharma teams pursue targets that traditional discovery methods have struggled to reach.",
    "role": "lead",
    "coInvestors": [
      "Kleiner Perkins",
      "Sequoia Capital",
      "Dimension",
      "Bain Capital Ventures",
      "Battery Ventures",
      "Baillie Gifford",
      "BDT & MSD",
      "Sapphire Ventures",
      "Avra Capital",
      "Thrive Capital",
      "OpenAI",
      "Oak HC/FT",
      "Menlo Ventures",
      "General Catalyst",
      "Glade Brook",
      "Avenir",
      "Lachy Groom",
      "Yosemite"
    ],
    "sourceUrl": "https://www.biospace.com/press-releases/chai-discovery-announces-400m-series-c-to-advance-ai-driven-molecular-design",
    "sourceType": "press-release",
    "evidence": "Chai Discovery Announces $400M Series C to Advance AI-Driven Molecular Design ... The round, which values the company at $3.8B, was led by Index Ventures alongside Kleiner Perkins, Sequoia Capital and Dimension."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Enigma",
    "announcedDate": "2026-07-27",
    "datePrecision": "day",
    "round": "seed",
    "sector": "Robotics",
    "sectorEvidence": "Enigma is launching a large-scale experiment that allows anyone in the world to interact online with more than 100 of its proprietary AI robots.",
    "role": "lead",
    "coInvestors": [
      "Ribbit Capital",
      "Sarah Guo of Conviction Partners"
    ],
    "sourceUrl": "https://techcrunch.com/2026/07/27/enigma-raises-70m-to-make-controlling-a-robot-as-easy-as-adjusting-the-volume/",
    "sourceType": "reputable-press",
    "evidence": "Enigma raised a $71 million seed round led by Index Ventures and Ribbit Capital, with participation from Sarah Guo of Conviction Partners."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Simile",
    "announcedDate": "2026-07-30",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Enterprise AI",
    "sectorEvidence": "turning generative agents into a way for the world's biggest enterprises to test decisions before making them",
    "role": "participant",
    "coInvestors": [
      "Greenoaks",
      "Hanabi",
      "Bain Capital Ventures",
      "A*",
      "Factory",
      "CVS Health Ventures",
      "Definition"
    ],
    "sourceUrl": "https://www.indexventures.com/perspectives/simulating-society-at-scale-our-investment-in-similes-200m-series-b/",
    "sourceType": "firm-announcement",
    "evidence": "Today we're thrilled to double down on our investment in Simile as they announce their $200 million Series B."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Intelligence",
    "announcedDate": "2026-08-03",
    "datePrecision": "day",
    "round": "seed",
    "sector": "AI Benchmarking",
    "sectorEvidence": "Intelligence, a San Francisco, California-based developer of a crowdsourced benchmarking platform for AI-generated visual design operating as Design Arena, raised $7.9m in seed funding.",
    "role": "lead",
    "coInvestors": [
      "Conviction",
      "A*",
      "Valkyrie"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/intelligence-raises-7-9m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Intelligence, a San Francisco, California-based developer of a crowdsourced benchmarking platform for AI-generated visual design operating as Design Arena, raised $7.9m in seed funding. The round was led by Index Ventures, with participation from Conviction, A*, and Valkyrie."
  },
  {
    "firmSlug": "initialized-capital",
    "company": "Orbital Operations",
    "announcedDate": "2025-08-07",
    "datePrecision": "day",
    "round": "seed",
    "sector": "Space",
    "sectorEvidence": "A high-thrust, cryogenic platform that can loiter on-orbit for years at a time, as a tool for interception and space domain awareness",
    "role": "lead",
    "coInvestors": [
      "Harpoon Ventures",
      "DTX Ventures",
      "Rebel Fund",
      "TRAC VC",
      "Karman Ventures",
      "Immad Akhund"
    ],
    "sourceUrl": "https://payloadspace.com/orbital-operations-raises-8-8m-for-high-thrust-orbital-vehicle/",
    "sourceType": "reputable-press",
    "evidence": "After emerging from Y Combinator in the spring, Orbital Operations raised an $8.8M seed round led by Initialized Capital, with participation from Harpoon Ventures, DTX Ventures, Rebel Fund, TRAC VC, Karman Ventures, and investor Immad Akhund."
  },
  {
    "firmSlug": "initialized-capital",
    "company": "The Bland Company",
    "announcedDate": "2026-02",
    "datePrecision": "month",
    "round": "pre-seed",
    "sector": "Alternative Proteins",
    "sectorEvidence": "turns underused agricultural byproducts (like rice bran) into cost-efficient, high-performance plant proteins for a wide array of use cases",
    "role": "lead",
    "coInvestors": [
      "Entrepreneurs First",
      "Alumni Ventures",
      "Transpose Platform",
      "Behind Genius Ventures"
    ],
    "sourceUrl": "https://www.greenqueen.com.hk/the-bland-company-functional-plant-proteins-egg-replacer-funding/",
    "sourceType": "reputable-press",
    "evidence": "London-based The Bland Company has secured $2.7M in a pre-seed funding round led by Initialized Capital, with participation from Entrepreneurs First, Alumni Ventures, Transpose Platform and Behind Genius Ventures."
  },
  {
    "firmSlug": "initialized-capital",
    "company": "Seamflow",
    "announcedDate": "2026-02-11",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Industrial Software",
    "sectorEvidence": "Seamflow provides an AI software platform that automates high-friction workflows for testing, inspection, and certification (TIC) professionals, significantly increasing their throughput and productivity to reduce waiting times for certification.",
    "role": "lead",
    "coInvestors": [
      "Northzone",
      "Entrepreneur First",
      "Nebular",
      "Charlie Songhurst",
      "Mario Götze"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/02/seamflow-raises-4-5m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Seamflow, a London, UK-based AI-first software platform provider, raised $4.5M in Seed funding.\n\nThe round was led by Northzone and Initialized Capital, with participation from Entrepreneur First, Nebular, and angel investors including Charlie Songhurst and Mario Götze."
  },
  {
    "firmSlug": "initialized-capital",
    "company": "The Bland Company",
    "announcedDate": "2026-02-16",
    "datePrecision": "day",
    "round": "pre-seed",
    "sector": "Food Tech",
    "sectorEvidence": "The Bland Company, a London, UK-based developer of high-performance plant-based proteins",
    "role": "lead",
    "coInvestors": [
      "Entrepreneur First",
      "Transpose Platform",
      "Behind Genius Ventures",
      "Alumni Ventures",
      "Vento"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/02/the-bland-company-raises-2-67m-in-pre-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "The Bland Company, a London, UK-based developer of high-performance plant-based proteins, raised $2.67M in pre-seed funding.\n\nThe round was led by Initialized Capital, with participation from Entrepreneur First, Transpose Platform, Behind Genius Ventures, Alumni Ventures, and Vento."
  },
  {
    "firmSlug": "initialized-capital",
    "company": "Alien",
    "announcedDate": "2026-04-01",
    "datePrecision": "day",
    "round": "pre-seed",
    "sector": "Identity Infrastructure",
    "sectorEvidence": "building the trust infrastructure for the agentic economy",
    "role": "lead",
    "coInvestors": [
      "Finality",
      "Mantaray",
      "Commonmetal",
      "Scenius",
      "Lvna Capital",
      "Pioneer"
    ],
    "sourceUrl": "https://siliconangle.com/2026/04/01/alien-raises-7-1m-build-identity-infrastructure-humans-ai-agents/",
    "sourceType": "reputable-press",
    "evidence": "Alien's funding round included Initialized Capital, Finality, Mantaray, Commonmetal, Scenius, Lvna Capital, Pioneer and others."
  },
  {
    "firmSlug": "initialized-capital",
    "company": "Alien",
    "announcedDate": "2026-04-03",
    "datePrecision": "day",
    "round": "pre-seed",
    "sector": "Digital Identity",
    "sectorEvidence": "Alien, a San Francisco, CA-based startup building trust infrastructure for the agentic economy",
    "role": "lead",
    "coInvestors": [
      "Finality",
      "Mantaray",
      "Commonmetal",
      "Soma Capital",
      "Juniper Ventures",
      "Orange DAO",
      "HFØ",
      "Scenius Capital",
      "Lvna Capital",
      "Pioneer",
      "Val Vavilov",
      "James Tamplin",
      "Sharebear",
      "Hummingbird"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/alien-raises-7-1m-in-pre-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Alien, a San Francisco, CA-based startup building trust infrastructure for the agentic economy, raised $7.1M in pre-seed funding.\n\nThe round was led by Initialized Capital and Finality, with investment from Mantaray, Commonmetal, Soma Capital, Juniper Ventures, Orange DAO, HFØ, Scenius Capital, Lvna Capital, Pioneer, Val Vavilov, James Tamplin, Sharebear, and Hummingbird."
  },
  {
    "firmSlug": "initialized-capital",
    "company": "10x Science",
    "announcedDate": "2026-04-22",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Life Sciences Software",
    "sectorEvidence": "10x Science's platform combines deterministic algorithms rooted in chemistry and biology with AI agents that can interpret that data.",
    "role": "lead",
    "coInvestors": [
      "Y Combinator",
      "Civilization Ventures",
      "Founder Factor"
    ],
    "sourceUrl": "https://techcrunch.com/2026/04/22/ai-is-spitting-out-more-potential-drugs-than-ever-this-start-up-wants-to-figure-out-which-ones-matter/",
    "sourceType": "reputable-press",
    "evidence": "10x Science, a startup founded in December 2025 that announced a $4.8 million seed round today, led by Initialized Capital and with backing from Y Combinator, Civilization Ventures, and Founder Factor."
  },
  {
    "firmSlug": "initialized-capital",
    "company": "Crewline AI",
    "announcedDate": "2026-04-22",
    "datePrecision": "day",
    "round": "seed funding",
    "sector": "Construction Tech",
    "sectorEvidence": "Crewline AI, a San Francisco, California-based developer of autonomous technology for existing construction machinery",
    "role": "lead",
    "coInvestors": [
      "Nebular",
      "Ford Street Ventures",
      "Cocoa",
      "Begin",
      "Entrepreneurs First (EF)",
      "Transpose"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/crewline-ai-raises-7-1m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Crewline AI, a San Francisco, California-based developer of autonomous technology for existing construction machinery, raised $7.1m in seed funding.\n\nThe round was led by Initialized Capital and Nebular, with participation from Ford Street Ventures, Cocoa, Begin, Entrepreneurs First (EF), Transpose, and various angel investors."
  },
  {
    "firmSlug": "initialized-capital",
    "company": "Enhanced Radar",
    "announcedDate": "2026-05-13",
    "datePrecision": "day",
    "round": null,
    "sector": "Aviation AI",
    "sectorEvidence": "The two of them decided to build the world's most advanced voice models for understanding air traffic control communications. They have a network spanning 80 airports across North America that turns audio into a layer of situational awareness that did not previously exist.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://blog.initialized.com/2026/05/initialized-leads-7m-round-for-enhanced-radar/",
    "sourceType": "firm-site",
    "evidence": "Initialized Leads $7M Round for Enhanced Radar"
  },
  {
    "firmSlug": "initialized-capital",
    "company": "Picogrid",
    "announcedDate": "2026-06-01",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Defense Tech",
    "sectorEvidence": "Picogrid, an El Segundo, CA-based defense technology company building the open integration layer for modern military systems",
    "role": "participant",
    "coInvestors": [
      "Bessemer Venture Partners",
      "Washington Harbour",
      "GSBackers",
      "Starburst Ventures",
      "Credo Ventures",
      "Giant Step Capital",
      "Alumni Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/picogrid-raises-45m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Picogrid, an El Segundo, CA-based defense technology company building the open integration layer for modern military systems, raised $45M in Series A funding.\n\nThe round was led by Bessemer Venture Partners, with participation from Washington Harbour and GSBackers, alongside existing investors Initialized Capital, Starburst Ventures, Credo Ventures, Giant Step Capital, Alumni Ventures, and industry angels."
  },
  {
    "firmSlug": "initialized-capital",
    "company": "Arcturus",
    "announcedDate": "2026-06-30",
    "datePrecision": "day",
    "round": "seed funding",
    "sector": "Advanced Materials",
    "sectorEvidence": "developing a new class of metals: copper and aluminum infused with carbon nanomaterials like graphene and carbon nanotubes, using a proprietary laser fabrication process",
    "role": "lead",
    "coInvestors": [
      "Toyota Ventures",
      "Breakthrough Energy Discovery",
      "1517",
      "Wireframe Ventures"
    ],
    "sourceUrl": "https://blog.initialized.com/2026/06/the-ai-world-requires-new-materials/",
    "sourceType": "firm-site",
    "evidence": "That is why I led Initialized's investment in Arcturus, which is emerging from stealth today with $8M in seed funding, joined by Toyota Ventures, Breakthrough Energy Discovery, 1517, and Wireframe Ventures."
  },
  {
    "firmSlug": "intel-capital",
    "company": "Upscale AI",
    "announcedDate": "2026-01-21",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Networking Infrastructure",
    "sectorEvidence": "Upscale AI, Inc., a category-defining pure-play AI networking infrastructure company",
    "role": "participant",
    "coInvestors": [
      "Tiger Global",
      "Premji Invest",
      "Xora Innovation",
      "Maverick Silicon",
      "StepStone Group",
      "Mayfield",
      "Prosperity7 Ventures",
      "Qualcomm Ventures"
    ],
    "sourceUrl": "https://www.intelcapital.com/from-100m-seed-to-unicorn-in-months-upscale-ai-closes-oversubscribed-200m-series-a-to-build-the-first-pure-play-ai-networking-company/",
    "sourceType": "firm-site",
    "evidence": "Santa Clara, Calif. – Jan. 21, 2026 – Upscale AI, Inc., a category-defining pure-play AI networking infrastructure company, today announced $200 million Series A financing led by Tiger Global, Premji Invest, and Xora Innovation with participation from Maverick Silicon, StepStone Group, Mayfield, Prosperity7 Ventures, Intel Capital, and Qualcomm Ventures."
  },
  {
    "firmSlug": "intel-capital",
    "company": "Eliyan",
    "announcedDate": "2026-01-28",
    "datePrecision": "day",
    "round": null,
    "sector": "Semiconductor Interconnect",
    "sectorEvidence": "Eliyan Corporation is pioneering the chiplet revolution by providing the industry's most efficient, scalable interconnect solutions for multi-die architectures.",
    "role": "participant",
    "coInvestors": [
      "AMD",
      "Arm",
      "Coherent",
      "Meta",
      "Samsung Catalyst Fund"
    ],
    "sourceUrl": "https://www.intelcapital.com/eliyan-secures-50-million-in-strategic-investments-from-leading-hyperscalers-and-ai-infrastructure-providers-to-accelerate-scalable-ai-systems/",
    "sourceType": "firm-site",
    "evidence": "In addition, existing strategic investors Samsung Catalyst Fund and Intel Capital also participated in the round, reinforcing broad support for Eliyan's technology roadmap and accelerating commercial momentum."
  },
  {
    "firmSlug": "intel-capital",
    "company": "OPAQUE",
    "announcedDate": "2026-02-12",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Confidential AI",
    "sectorEvidence": "OPAQUE provides verifiable privacy and governance for AI so organizations can safely run models, agents, and workflows on their most sensitive data.",
    "role": "participant",
    "coInvestors": [
      "Walden Catalyst",
      "Race Capital",
      "Storm Ventures",
      "Thomvest",
      "Advanced Technology Research Council (ATRC)"
    ],
    "sourceUrl": "https://www.intelcapital.com/opaque-raises-24m-series-b-at-300m-valuation-to-advance-confidential-ai-for-the-enterprise/",
    "sourceType": "firm-site",
    "evidence": "SAN FRANCISCO, Feb. 12, 2026 - OPAQUE, the Confidential AI company defining the trust layer for enterprise AI, today announced a $24 million Series B funding round led by Walden Catalyst, with participation from returning investors including Intel Capital, Race Capital, Storm Ventures, Thomvest, and new investor and strategic partner, Advanced Technology Research Council (ATRC)."
  },
  {
    "firmSlug": "intel-capital",
    "company": "SambaNova",
    "announcedDate": "2026-02-24",
    "datePrecision": "day",
    "round": "Series E",
    "sector": "AI Infrastructure",
    "sectorEvidence": "SambaNova is a leader in next‑generation AI infrastructure, providing a full stack platform that powers the fastest, most efficient AI inference for enterprises, NeoClouds, AI labs and service providers, and sovereign AI initiatives worldwide.",
    "role": "participant",
    "coInvestors": [
      "Vista Equity Partners",
      "Cambium Capital",
      "Assam Ventures",
      "Battery Ventures",
      "Gulf Energy",
      "Mayfield Capital",
      "QIA",
      "Saudi First Data",
      "Seligman Ventures",
      "T. Rowe Price Associates, Inc.",
      "A&E",
      "8Square",
      "Atlantic Bridge",
      "BlackRock",
      "GV",
      "Nepenthe",
      "Nuri Capital",
      "Redline Capital"
    ],
    "sourceUrl": "https://www.intelcapital.com/sambanova-unveils-fastest-chip-for-agentic-ai-collaborates-with-intel-and-raises-350m/",
    "sourceType": "firm-site",
    "evidence": "To quickly scale and distribute SN50, SambaNova is collaborating with Intel, and has obtained $350 million in strategic Series E financing to expand manufacturing and cloud capacity. The oversubscribed Series E round was led by Vista Equity Partners and Cambium Capital, with strong participation from Intel Capital."
  },
  {
    "firmSlug": "intel-capital",
    "company": "EPIC Microsystems",
    "announcedDate": "2026-03-25",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Semiconductors",
    "sectorEvidence": "EPIC Microsystems, a semiconductor company developing breakthrough power delivery solutions for AI infrastructure",
    "role": "participant",
    "coInvestors": [
      "Seligman Ventures",
      "AICONIC Ventures",
      "Cambium Capital",
      "A&E Investments",
      "Assam Ventures",
      "Nepenthe Capital"
    ],
    "sourceUrl": "https://www.intelcapital.com/epic-microsystems-raises-21m-to-power-next-gen-ai-data-centers/",
    "sourceType": "firm-site",
    "evidence": "EPIC Microsystems, a semiconductor company developing breakthrough power delivery solutions for AI infrastructure, today announced it has raised an oversubscribed $21 million in Series A funding to accelerate the development and commercialization of its vertical power delivery technology for next-generation AI compute platforms. The funding round was led by Seligman Ventures, with participation from Intel Capital, AICONIC Ventures, Cambium Capital, and existing seed investors, A&E Investments, Assam Ventures and Nepenthe Capital."
  },
  {
    "firmSlug": "intel-capital",
    "company": "Censys",
    "announcedDate": "2026-03-31",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Cybersecurity",
    "sectorEvidence": "Censys, the trusted authority for Internet intelligence and insights",
    "role": "participant",
    "coInvestors": [
      "Morgan Stanley Expansion Capital",
      "Decibel Partners",
      "Greylock Partners",
      "GV"
    ],
    "sourceUrl": "https://www.intelcapital.com/censys-raises-70-million-in-strategic-funding-to-expand-its-internet-intelligence-platform/",
    "sourceType": "firm-site",
    "evidence": "ANN ARBOR, Mich., March 31, 2026 - Censys, the trusted authority for Internet intelligence and insights, today announced its Series D funding round led by Morgan Stanley Expansion Capital, with participation from Decibel Partners, Greylock Partners, GV, Intel Capital, and others."
  },
  {
    "firmSlug": "intel-capital",
    "company": "Q-Factor",
    "announcedDate": "2026-04-06",
    "datePrecision": "day",
    "round": "seed funding",
    "sector": "Quantum Computing",
    "sectorEvidence": "Q-Factor, a neutral atom quantum computing company",
    "role": "participant",
    "coInvestors": [
      "NFX",
      "TPY Capital",
      "Korea Investment Partners",
      "Deep33",
      "the Matias family"
    ],
    "sourceUrl": "https://www.intelcapital.com/q-factor-emerges-from-stealth-with-24m-and-backing-from-intel-capital-to-build-million-qubit-quantum-computer/",
    "sourceType": "firm-site",
    "evidence": "Q-Factor, a neutral atom quantum computing company, today announced $24 million in seed funding. The round was led by NFX and TPY Capital, with participation from Intel Capital, Korea Investment Partners, Deep33, and the Matias family, along with a grant from the Israel Innovation Authority."
  },
  {
    "firmSlug": "intel-capital",
    "company": "QuantWare",
    "announcedDate": "2026-05-05",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Quantum Computing",
    "sectorEvidence": "QuantWare is the only company that designs, fabricates, and integrates modular quantum processors on an open architecture at an industrial scale.",
    "role": "participant",
    "coInvestors": [
      "IQT",
      "ETF Partners",
      "FORWARD.one",
      "Invest-NL Deep Tech Fund",
      "QDNL Participations",
      "Graduate Ventures"
    ],
    "sourceUrl": "https://www.intelcapital.com/quantware-raises-176-million-to-build-worlds-most-powerful-quantum-processors-at-an-industrial-scale/",
    "sourceType": "firm-site",
    "evidence": "“In superconducting quantum computing, scale is increasingly constrained by routing, packaging, and manufacturability-not just qubit design,” said Kike Miralles, Intel Capital. “QuantWare recognized that early and built VIO to address it. That combination of technical ambition and execution positions them to become the company on which the future of superconducting quantum systems will be built.”"
  },
  {
    "firmSlug": "intel-capital",
    "company": "Hark",
    "announcedDate": "2026-05-21",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Artificial Intelligence",
    "sectorEvidence": "Hark is an artificial intelligence company developing highly intelligent, multimodal AI systems and native hardware devices designed to serve as a universal interface between humans and machines.",
    "role": "participant",
    "coInvestors": [
      "Parkway Venture Capital",
      "NVIDIA",
      "Align Ventures",
      "AMD Ventures",
      "ARK Invest",
      "Brookfield",
      "Greycroft",
      "Prime Movers Lab",
      "Qualcomm Ventures",
      "Salesforce Ventures",
      "Tamarack Global"
    ],
    "sourceUrl": "https://www.intelcapital.com/hark-raises-700m-series-a-at-a-6b-valuation/",
    "sourceType": "firm-site",
    "evidence": "Hark, a new AI lab building advanced personalized intelligence, today announced it has raised over $700 million in Series A funding at a $6 billion post-money valuation. The round was oversubscribed and led by Parkway Venture Capital, with participation from NVIDIA, Align Ventures, AMD Ventures, ARK Invest, Brookfield, Greycroft, Intel Capital, Prime Movers Lab, Qualcomm Ventures, Salesforce Ventures, and Tamarack Global."
  },
  {
    "firmSlug": "intel-capital",
    "company": "Prime Intellect",
    "announcedDate": "2026-07-08",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Prime Intellect, a startup that provides computing power and specialized software tools that help companies build AI agents",
    "role": "participant",
    "coInvestors": [
      "Radical Ventures",
      "Nvidia Ventures",
      "Dell Technologies Capital",
      "Iconiq"
    ],
    "sourceUrl": "https://techcrunch.com/2026/07/08/prime-intellect-raises-130m-series-a-to-help-enterprises-build-their-own-ai-agents/",
    "sourceType": "reputable-press",
    "evidence": "Prime Intellect, a startup that provides computing power and specialized software tools that help companies build AI agents, has raised a $130 million Series A ... led by Radical Ventures, with participation from Nvidia Ventures, Intel Capital, Dell Technologies Capital, Iconiq, and a long list of angel investors"
  },
  {
    "firmSlug": "intel-capital",
    "company": "Fly.io",
    "announcedDate": "2026-07-24",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Fly.io builds computers for agents - connected infrastructure designed for AI agents and the applications they build.",
    "role": "lead",
    "coInvestors": [
      "Dell Technologies Capital",
      "Andreessen Horowitz",
      "EQT",
      "Geodesic",
      "YC"
    ],
    "sourceUrl": "https://www.intelcapital.com/fly-io-doubles-down-on-computers-for-agents-with-25m-to-deliver-the-next-generation-of-ai-infrastructure/",
    "sourceType": "press-release",
    "evidence": "To accelerate this opportunity, Fly.io also announced $25 million in Series D funding co-led by Dell Technologies Capital and Intel Capital, with participation from Andreessen Horowitz, EQT, Geodesic, and YC."
  },
  {
    "firmSlug": "intel-capital",
    "company": "Xsight Labs",
    "announcedDate": "2026-07-30",
    "datePrecision": "day",
    "round": null,
    "sector": "Semiconductors",
    "sectorEvidence": "Xsight Labs, a fabless semiconductor company providing intelligent connectivity solutions for next-generation hyperscale, edge, and AI data center networks",
    "role": "participant",
    "coInvestors": [
      "Fidelity Management & Research Company",
      "Aliya Capital Partners",
      "Atreides Management",
      "Artisan Partners",
      "Battery Ventures",
      "Diagonal Capital",
      "Key1 Capital",
      "Maverick Capital",
      "Sienna",
      "T. Rowe Price",
      "Union Group",
      "Valor Equity Partners"
    ],
    "sourceUrl": "https://www.intelcapital.com/xsight-labs-raises-more-than-300-million-at-2-8-billion-valuation-to-power-next-generation-ai-and-cloud-networks/",
    "sourceType": "press-release",
    "evidence": "SAN JOSE, Calif. & TEL AVIV, Israel - July 30, 2026 - Xsight Labs, a fabless semiconductor company providing intelligent connectivity solutions for next-generation hyperscale, edge, and AI data center networks, today announced the closing of a $300+ million funding round establishing a $2.8 billion post-money valuation. ... The round was led by Fidelity Management & Research Company with participation from Aliya Capital Partners, Atreides Management, Artisan Partners, Battery Ventures, Diagonal Capital, Intel Capital, Key1 Capital, Maverick Capital, Sienna, T. Rowe Price, Union Group, and Valor Equity Partners."
  },
  {
    "firmSlug": "intel-capital",
    "company": "Zenity",
    "announcedDate": "2026-08-03",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Cybersecurity",
    "sectorEvidence": "Zenity, the AI security and governance platform purpose-built for AI agents",
    "role": "participant",
    "coInvestors": [
      "Norwest",
      "Qumra Capital",
      "SoftBank Vision Fund 2",
      "Hitachi Ventures",
      "LG Technology Ventures",
      "Vertex Ventures",
      "Third Point Ventures",
      "DTCP"
    ],
    "sourceUrl": "https://www.intelcapital.com/zenity-raises-125-million-to-secure-the-era-of-1-billion-ai-agent/",
    "sourceType": "press-release",
    "evidence": "NEW YORK, Aug, 3, 2026 - Zenity, the AI security and governance platform purpose-built for AI agents, today announced a $125 million Series C led by Norwest. ... New investors Qumra Capital, SoftBank Vision Fund 2, Hitachi Ventures and LG Technology Ventures joined the round, alongside existing investors Vertex Ventures, Third Point Ventures, DTCP and Intel Capital."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "WithCoverage",
    "announcedDate": "2026-01-13",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Insurtech",
    "sectorEvidence": "WithCoverage, a NYC-based provider of an AI-enabled risk management platform",
    "role": "lead",
    "coInvestors": [
      "Sequoia Capital",
      "8VC",
      "Crystal Venture Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/withcoverage-raises-42m-in-series-b-financing.html",
    "sourceType": "reputable-press",
    "evidence": "WithCoverage, a NYC-based provider of an AI-enabled risk management platform, raised $42m in Series B financing. The round was led by Sequoia Capital and Khosla Ventures, with participation from 8VC and Crystal Venture Partners."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "ClickHouse",
    "announcedDate": "2026-01-19",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Data Infrastructure",
    "sectorEvidence": "ClickHouse, a San Francisco, California-based provider of real-time analytics, data warehousing, and AI infrastructure solutions",
    "role": "participant",
    "coInvestors": [
      "Dragoneer Investment Group",
      "Bessemer Venture Partners",
      "GIC",
      "Index Ventures",
      "Lightspeed Venture Partners",
      "T. Rowe Price Associates, Inc.",
      "WCM Investment Management"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/clickhouse-raises-400m-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "ClickHouse, a San Francisco, California-based provider of real-time analytics, data warehousing, and AI infrastructure solutions, raised $400m in Series D funding. The round was led by Dragoneer Investment Group, with participation from Bessemer Venture Partners, GIC, Index Ventures, Khosla Ventures, Lightspeed Venture Partners, accounts advised by T. Rowe Price Associates, Inc., and WCM Investment Management."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Emergent",
    "announcedDate": "2026-01-20",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Software Development",
    "sectorEvidence": "Emergent, a San Francisco, CA-based provider of an AI software creation platform",
    "role": null,
    "coInvestors": [
      "SoftBank Vision Fund 2",
      "Prosus",
      "Lightspeed",
      "Together",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/emergent-raises-70m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Emergent, a San Francisco, CA-based provider of an AI software creation platform, raised $70M in Series B funding. Bakers included Khosla Ventures and SoftBank Vision Fund 2, with participation from Prosus, Lightspeed, Together, and Y Combinator."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Formulary Financial",
    "announcedDate": "2026-01-20",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Fund Administration",
    "sectorEvidence": "Formulary Financial, a NYC-based AI-native fund administrator",
    "role": "lead",
    "coInvestors": [
      "Acrew Capital",
      "Company Ventures",
      "Human Ventures",
      "Serena Ventures",
      "Alumni Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/formulary-financial-raises-4-6m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Formulary Financial, a NYC-based AI-native fund administrator, raised $4.6M in Seed funding. The round was led by Khosla Ventures, with participation from Acrew Capital, Company Ventures, Human Ventures, Serena Ventures, and Alumni Ventures, among other partners and industry executives."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Phia",
    "announcedDate": "2026-01-28",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Consumer Shopping",
    "sectorEvidence": "Phia, a NYC-based company developing a shopping agent service",
    "role": "participant",
    "coInvestors": [
      "Notable Capital",
      "Kleiner Perkins"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/phia-raises-35m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Phia, a NYC-based company developing a shopping agent service, raised $35M in Series A funding. The round was led by Notable Capital, with participation from Khosla Ventures and returning investor Kleiner Perkins."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Rogo",
    "announcedDate": "2026-01-28",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Fintech",
    "sectorEvidence": "Rogo, a NYC-based developer of an AI platform purpose-built for finance",
    "role": "participant",
    "coInvestors": [
      "Sequoia Capital",
      "Henry Kravis",
      "Wells Fargo",
      "Thrive Capital",
      "Tiger Global",
      "J.P. Morgan"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/rogo-raises-75m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Rogo, a NYC-based developer of an AI platform purpose-built for finance, raised $75m in Series C funding. The round was led by Sequoia Capital, with participation from Henry Kravis and Wells Fargo, as well as existing investors Thrive Capital, Khosla Ventures, Tiger Global, and J.P. Morgan."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Waabi",
    "announcedDate": "2026-01-29",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Autonomous Trucking",
    "sectorEvidence": "Waabi, a Toronto, Canada-based Physical AI company",
    "role": "lead",
    "coInvestors": [
      "G2 Venture Partners",
      "Uber",
      "NVentures",
      "Volvo Group Venture Capital",
      "Porsche Automobil Holding SE",
      "BlackRock",
      "Radical Ventures",
      "HarbourVest Partners",
      "Linse Capital",
      "Incharge Capital",
      "BDC Capital's Thrive Venture Fund",
      "Export Development Canada (EDC)",
      "TELUS Global Ventures",
      "BMO Global Asset Management"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/waabi-raises-750m-usd-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Waabi, a Toronto, Canada-based Physical AI company, raised $750M USD in Series C funding. The round was led by Khosla Ventures and G2 Venture Partners, with participation from Uber, NVentures, Volvo Group Venture Capital, Porsche Automobil Holding SE, BlackRock, Radical Ventures, HarbourVest Partners, Linse Capital, Incharge Capital, BDC Capital's Thrive Venture Fund, Export Development Canada (EDC), TELUS Global Ventures, BMO Global Asset Management, and others."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Uptool",
    "announcedDate": "2026-02-09",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Manufacturing AI",
    "sectorEvidence": "Uptool, a San Mateo, CA-based developer of an AI platform designed to accelerate manufacturing productivity",
    "role": null,
    "coInvestors": [
      "Eclipse",
      "Bessemer Venture Partners",
      "Kleiner Perkins"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/02/uptool-raises-6m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Uptool, a San Mateo, CA-based developer of an AI platform designed to accelerate manufacturing productivity, announced the raise of a $6m in Seed funding. Backers included Khosla Ventures, Eclipse, Bessemer Venture Partners, and Kleiner Perkins."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Basis",
    "announcedDate": "2026-02-25",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Accounting AI",
    "sectorEvidence": "Basis, a NYC-based provider of an AI agent platform for accountants",
    "role": "participant",
    "coInvestors": [
      "Accel",
      "GV",
      "Lloyd Blankfein",
      "NFDG",
      "Better Tomorrow Ventures",
      "BoxGroup",
      "Avid Ventures",
      "Kris Fredrickson",
      "Aaron Levie",
      "Adam D'Angelo",
      "Amjad Masad",
      "Claire Hughes Johnson",
      "Clem Delangue",
      "Eric Wu",
      "Gautam Kedia",
      "Jack Altman",
      "Jeff Dean",
      "Jeff Wilke",
      "Kyle Vogt",
      "Noam Brown",
      "Scott Belsky"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/02/basis-raises-100m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Basis, a NYC-based provider of an AI agent platform for accountants, raised $100M in Series B funding, at $1.15 Billion valuation. The round was led by Accel, with participation from GV, Lloyd Blankfein, Khosla Ventures and other existing investors including NFDG, Better Tomorrow Ventures, BoxGroup, Avid Ventures, Kris Fredrickson, Aaron Levie, Adam D'Angelo, Amjad Masad, Claire Hughes Johnson, Clem Delangue, Eric Wu, Gautam Kedia, Jack Altman, Jeff Dean, Jeff Wilke, Kyle Vogt, Noam Brown, and Scott Belsky."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Science",
    "announcedDate": "2026-03-06",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Neurotech",
    "sectorEvidence": "Science, an Alameda, CA-based full-stack neural engineering company focused on restoring and extending life",
    "role": null,
    "coInvestors": [
      "Lightspeed Venture Partners",
      "Y Combinator",
      "IQT",
      "Quiet Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/science-closes-230m-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Science, an Alameda, CA-based full-stack neural engineering company focused on restoring and extending life, closed a $230m Series C financing round. Backers included Lightspeed Venture Partners, Khosla Ventures, Y Combinator, IQT, and Quiet Capital, among others."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Rhoda AI",
    "announcedDate": "2026-03-11",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Robotics",
    "sectorEvidence": "Rhoda AI, a Palo Alto, CA-based robotics and artificial intelligence company",
    "role": null,
    "coInvestors": [
      "Capricorn Investment Group",
      "Leitmotif",
      "Matter Venture Partners",
      "Mayfield",
      "Premji Invest",
      "Prelude Ventures",
      "Temasek",
      "Xora",
      "John Doerr"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/rhoda-ai-raises-450m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Rhoda AI, a Palo Alto, CA-based robotics and artificial intelligence company, raised $450M in Series A funding. Backers included Capricorn Investment Group, Khosla Ventures, Leitmotif, Matter Venture Partners, Mayfield, Premji Invest, Prelude Ventures, Temasek, and Xora, as well as John Doerr."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Swarm Aero",
    "announcedDate": "2026-03-11",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Defense",
    "sectorEvidence": "Swarm Aero, an Oxnard, CA-based developer of large uncrewed aerial vehicle (UAV) swarms",
    "role": "participant",
    "coInvestors": [
      "Two Sigma Ventures",
      "Silent Ventures",
      "Scribble Ventures",
      "Friends & Family Capital",
      "Construct Capital",
      "Coatue",
      "Founders Fund",
      "Alumni Ventures",
      "MaC Venture Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/swarm-aero-raises-35m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Swarm Aero, an Oxnard, CA-based developer of large uncrewed aerial vehicle (UAV) swarms, raised $35M in Series A funding. The round was led by Two Sigma Ventures and Silent Ventures with participation from its Seed investors Khosla Ventures, Scribble Ventures, Friends & Family Capital, Construct Capital, Coatue, Founders Fund, Alumni Ventures, and MaC Venture Capital."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "RunSybil",
    "announcedDate": "2026-03-19",
    "datePrecision": "day",
    "round": null,
    "sector": "Cybersecurity",
    "sectorEvidence": "RunSybil, a San Francisco, CA-based provider of a security platform",
    "role": "lead",
    "coInvestors": [
      "S32",
      "the Anthology Fund from Anthropic",
      "Menlo Ventures",
      "Conviction",
      "Elad Gil",
      "Nikesh Arora",
      "Amit Agarwal",
      "Jeff Dean"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/runsybil-raises-40m-in-total-funding.html",
    "sourceType": "reputable-press",
    "evidence": "RunSybil, a San Francisco, CA-based provider of a security platform, raised $40M in total funding. The round was led by Khosla Ventures, with participation from S32, the Anthology Fund from Anthropic and Menlo Ventures, Conviction, and Elad Gil, along with angel investors including Nikesh Arora, Amit Agarwal, Jeff Dean, and others."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Highlight AI",
    "announcedDate": "2026-03-24",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Enterprise AI",
    "sectorEvidence": "Highlight AI, a San Francisco, CA-based provider of an intelligent operating system for teams and AI agents",
    "role": "lead",
    "coInvestors": [
      "359 Capital",
      "General Catalyst",
      "Valor Equity",
      "Common Metal",
      "Makers Fund",
      "Collaborative Fund",
      "Arcadia",
      "SV Angel"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/highlight-ai-raises-40m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Highlight AI, a San Francisco, CA-based provider of an intelligent operating system for teams and AI agents, raised $40M in Series A funding. The round was led by Khosla Ventures, with participation from 359 Capital, General Catalyst, Valor Equity, Common Metal, Makers Fund, Collaborative Fund, Arcadia, and SV Angel."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Folly",
    "announcedDate": "2026-04-02",
    "datePrecision": "day",
    "round": null,
    "sector": "Consumer Health",
    "sectorEvidence": "Folly delivers 30+ clinically studied ingredients in a gummy form factor, at dosages previously associated only with pills and capsules, using Folly Microspheres, a proprietary microencapsulation system that helps stabilize sensitive actives during production and digestion.",
    "role": null,
    "coInvestors": [],
    "sourceUrl": "https://www.finsmes.com/2026/04/folly-receives-investment-from-khosla-ventures.html",
    "sourceType": "reputable-press",
    "evidence": "Folly, a London, UK-based provider of a biotech-powered hair supplement solution, received an investment from Khosla Ventures."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Hermeus",
    "announcedDate": "2026-04-07",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Defense Aviation",
    "sectorEvidence": "Hermeus, a Los Angeles, CA-based defense aviation company",
    "role": "lead",
    "coInvestors": [
      "Canaan Partners",
      "Founders Fund",
      "RTX Ventures",
      "Bling Capital",
      "In-Q-Tel",
      "Cox Enterprises",
      "Socium Ventures",
      "Destiny Tech100",
      "Georgia Tech Foundation",
      "137 Ventures",
      "GSBackers"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/hermeus-raises-350m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Hermeus, a Los Angeles, CA-based defense aviation company, raised $350M in Series C funding, at $1 Billion valuation. The round, which consisted of $200M in equity and $150M in debt, was led by Khosla Ventures, with participation from Canaan Partners, Founders Fund, RTX Ventures, Bling Capital, In-Q-Tel, Cox Enterprises and their venture fund Socium Ventures, Destiny Tech100, Georgia Tech Foundation, 137 Ventures, GSBackers, and others."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "TeraWatt Technology",
    "announcedDate": "2026-04-08",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Batteries",
    "sectorEvidence": "TeraWatt Technology Inc., a San Francisco, CA-based company developing lithium-ion batteries",
    "role": null,
    "coInvestors": [
      "Temasek",
      "JIC Venture Growth Investments",
      "Japan Bank for International Cooperation",
      "GX Acceleration Agency",
      "G. K. Goh Ventures",
      "Japan Green Investment Corp. for Carbon Neutrality",
      "Kyuden International Corporation",
      "JERA Co.",
      "ITOCHU Technology Ventures, Inc."
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/terawatt-technology-closes-series-c-funding-2.html",
    "sourceType": "reputable-press",
    "evidence": "TeraWatt Technology Inc., a San Francisco, CA-based company developing lithium-ion batteries, closed Series C funding. Backers included Khosla Ventures, Temasek, JIC Venture Growth Investments, Japan Bank for International Cooperation, GX Acceleration Agency, G. K. Goh Ventures, Japan Green Investment Corp. for Carbon Neutrality, Kyuden International Corporation, JERA Co., and ITOCHU Technology Ventures, Inc."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Factory",
    "announcedDate": "2026-04-17",
    "datePrecision": "day",
    "round": null,
    "sector": "Agentic AI",
    "sectorEvidence": "Factory, a San Francisco, CA-based agentic AI startup",
    "role": "lead",
    "coInvestors": [
      "Sequoia Capital",
      "Insight Partners",
      "Blackstone"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/factory-raises-150m-in-funding-at-1-5-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Factory, a San Francisco, CA-based agentic AI startup, raised $150m in funding at a $1.5 billion valuation. The round was led by Khosla Ventures, with participation from Sequoia Capital, Insight Partners, and Blackstone."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Slash",
    "announcedDate": "2026-04-17",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Fintech",
    "sectorEvidence": "Slash Financial, Inc., a San Francisco, CA-based provider of a banking platform",
    "role": "lead",
    "coInvestors": [
      "Ribbit Capital",
      "Goodwater Capital",
      "New Enterprise Associates",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/slash-raises-100m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Slash Financial, Inc., a San Francisco, CA-based provider of a banking platform, raised $100M in Series C funding. The round was led by Ribbit Capital. New investor Khosla Ventures and Goodwater Capital, who led Slash's Series B just 16 months ago, co-led the round."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Parallel Web Systems",
    "announcedDate": "2026-04-29",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Parallel Web Systems, a Palo Alto, CA-based provider of an infrastructure helping AI agents access and use the open web",
    "role": "participant",
    "coInvestors": [
      "Sequoia Capital",
      "Kleiner Perkins",
      "Index Ventures",
      "First Round Capital",
      "Spark Capital",
      "Terrain Capital",
      "Abstract Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/parallel-web-systems-raises-100m-in-series-b-funding-at-2-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Parallel Web Systems, a Palo Alto, CA-based provider of an infrastructure helping AI agents access and use the open web, raised $100M in Series B funding, at $2 Billion valuation. The round was led by Sequoia Capital. Other investors included Kleiner Perkins, Index Ventures, Khosla Ventures, First Round Capital, Spark Capital, Terrain Capital, and Abstract Ventures."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Rogo",
    "announcedDate": "2026-04-29",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Fintech",
    "sectorEvidence": "Rogo, the AI platform purpose-built for finance",
    "role": "participant",
    "coInvestors": [
      "Kleiner Perkins",
      "Sequoia",
      "Thrive Capital",
      "J.P. Morgan Growth Equity Partners",
      "BoxGroup",
      "Mantis VC",
      "Jack Altman",
      "Evantic",
      "Positive Sum"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/rogo-raises-160m-series-d-to-scale-the-agentic-platform-for-finance-302756546.html",
    "sourceType": "press-release",
    "evidence": "NEW YORK, April 29, 2026 /PRNewswire/ -- Rogo, the AI platform purpose-built for finance, today announced it has raised $160 million in Series D funding led by Kleiner Perkins, with participation from Sequoia, Thrive Capital, Khosla Ventures, J.P. Morgan Growth Equity Partners, BoxGroup, Mantis VC, Jack Altman, Evantic and Positive Sum."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Exaforce",
    "announcedDate": "2026-05-12",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Cybersecurity",
    "sectorEvidence": "Exaforce, a San Jose, California-based developer of an agentic security operations and modern SIEM platform",
    "role": null,
    "coInvestors": [
      "HarbourVest",
      "Peak XV",
      "Mayfield",
      "Seligman Ventures",
      "AICONIC"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/exaforce-raises-125m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Exaforce, a San Jose, California-based developer of an agentic security operations and modern SIEM platform, raised $125m in Series B funding. Backers included HarbourVest, Peak XV, Mayfield, Khosla Ventures, Seligman Ventures, and AICONIC."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Synthetic",
    "announcedDate": "2026-05-14",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Accounting AI",
    "sectorEvidence": "Synthetic, a San Francisco, CA-based developer of an autonomous AI bookkeeping service for software startups",
    "role": "lead",
    "coInvestors": [
      "Basis Set Ventures",
      "Tobi Lutke",
      "Kaz Nejatian",
      "Zach Abrams",
      "Cosmin Nicolaescu",
      "Michael Tannenbaum"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/synthetic-raises-10m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Synthetic, a San Francisco, CA-based developer of an autonomous AI bookkeeping service for software startups, raised $10m in seed funding. The round was led by Khosla Ventures, with participation from Basis Set Ventures and Tobi Lutke, Kaz Nejatian, Zach Abrams, Cosmin Nicolaescu, and Michael Tannenbaum."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "NavigateAI",
    "announcedDate": "2026-05-27",
    "datePrecision": "day",
    "round": null,
    "sector": "Construction Tech",
    "sectorEvidence": "NavigateAI, a San Francisco, CA-based provider of an AI copilot service supporting field workers",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "Lennar",
      "Tishman Speyer",
      "Helix Electric",
      "Zach Frankel",
      "Dallas Tanner",
      "Winston Weinberg",
      "Jesse Zhang",
      "Tony Xu"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/navigateai-raises-25m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "NavigateAI, a San Francisco, CA-based provider of an AI copilot service supporting field workers, raised $25M in funding.\n\nThe round was led by Elad Gil with participation from Khosla Ventures, Lennar, Tishman Speyer, and Helix Electric alongside angels including Zach Frankel (Ramp), Dallas Tanner (Invitation Homes), Winston Weinberg (Harvey.ai), Jesse Zhang (Decagon), Tony Xu (DoorDash), and others."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Mach Industries",
    "announcedDate": "2026-06-01",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Defense Tech",
    "sectorEvidence": "Mach Industries, the three-year-old defense tech startup run by 22-year-old founder and CEO Ethan Thornton",
    "role": null,
    "coInvestors": [
      "Ribbit Capital",
      "Infinite Capital",
      "Bedrock Capital",
      "Sequoia Capital"
    ],
    "sourceUrl": "https://techcrunch.com/2026/06/01/defense-tech-darling-mach-industries-hits-1-8b-valuation-a-4x-jump-in-a-year/",
    "sourceType": "reputable-press",
    "evidence": "The raise nearly quadruples the valuation of the company in a year. In June 2025, Mach raised $100 million at a $470 million valuation. Other investors include Bedrock Capital, Sequoia Capital, and Khosla Ventures. The round was led by deep tech fund Infinite Capital and Ribbit Capital, known for fintech and lately in hot deals everywhere - from AI coding startups like Cognition to neoclouds like Crusoe."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Novellia",
    "announcedDate": "2026-06-02",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Digital Health",
    "sectorEvidence": "Novellia, a New York City-based developer of a patient-powered real-world data and personal health records platform",
    "role": "participant",
    "coInvestors": [
      "Spark Capital",
      "Acrew Capital",
      "Bling Capital",
      "TMV"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/novellia-raises-18m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Novellia, a New York City-based developer of a patient-powered real-world data and personal health records platform, raised $18m in Series A funding. The round, which brought total funding raised to date to $28m, was led by Spark Capital, with participation from Khosla Ventures, Acrew Capital, Bling Capital, and TMV."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Terra AI",
    "announcedDate": "2026-06-03",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Mining & Energy AI",
    "sectorEvidence": "Terra AI, a Palo Alto, CA-based artificial intelligence platform provider helping solve subsurface uncertainty for mineral and energy development",
    "role": "lead",
    "coInvestors": [
      "BHP Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/terra-ai-raises-20m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Terra AI, a Palo Alto, CA-based artificial intelligence platform provider helping solve subsurface uncertainty for mineral and energy development, raised $20M in Series A funding. The round was led by Khosla Ventures and strategic investment from BHP Ventures."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Ramp",
    "announcedDate": "2026-06-04",
    "datePrecision": "day",
    "round": "Series F",
    "sector": "Fintech",
    "sectorEvidence": "Ramp, a NYC-based financial operations platform",
    "role": "participant",
    "coInvestors": [
      "ICONIQ",
      "GIC",
      "Ontario Teachers' Pension Plan",
      "Goldman Sachs Alternatives",
      "D.E. Shaw & Co.",
      "Morgan Stanley Investment Management",
      "Generation Investment Management",
      "Insight Partners",
      "BroadLight Capital",
      "Founders Fund",
      "Lightspeed Venture Partners",
      "D1 Capital Partners",
      "T. Rowe Price",
      "General Catalyst",
      "Alpha Wave Global",
      "137 Ventures",
      "Thrive Capital",
      "Coatue",
      "Sands Capital",
      "1789 Capital",
      "Avenir Growth",
      "BoxGroup",
      "8VC",
      "Pinegrove Venture Partners",
      "Definition Capital",
      "Stripes"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/ramp-raises-750m-in-series-f-funding-at-44-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Ramp, a NYC-based financial operations platform, raises $750M in Series F funding, at $44 Billion valuation. ... Previous investors who participated are Founders Fund, Lightspeed Venture Partners, D1 Capital Partners, T. Rowe Price, General Catalyst, Alpha Wave Global, 137 Ventures, Thrive Capital, Coatue, Sands Capital, Khosla Ventures, 1789 Capital, Avenir Growth, BoxGroup, 8VC, Pinegrove Venture Partners, Definition Capital, and Stripes."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Sarvam",
    "announcedDate": "2026-06-16",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Sovereign AI",
    "sectorEvidence": "Sarvam, a Bengaluru, India-based developer of full-stack sovereign artificial intelligence systems and frontier models",
    "role": "participant",
    "coInvestors": [
      "HCLTech",
      "Bessemer Venture Partners",
      "Peak XV Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/sarvam-raises-234m-in-first-close-of-series-b-funding-at-1-5-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Sarvam, a Bengaluru, India-based developer of full-stack sovereign artificial intelligence systems and frontier models, raised $234m in the first close of a $300m Series B funding round at a $1.5 billion valuation. The round was led by HCLTech with $150m, joined by Bessemer Venture Partners, Khosla Ventures, and Peak XV Partners."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Convey",
    "announcedDate": "2026-06-17",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Enterprise AI",
    "sectorEvidence": "Convey, a San Francisco, CA-based provider of an enterprise AI platform that enables non-technical operators to build and manage digital teammates that execute business operations autonomously",
    "role": "participant",
    "coInvestors": [
      "Andreessen Horowitz (a16z)",
      "Pear VC"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/convey-raises-38m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Convey, a San Francisco, CA-based provider of an enterprise AI platform that enables non-technical operators to build and manage digital teammates that execute business operations autonomously, raised $38m in Series A funding. The round was led by Andreessen Horowitz (a16z) with participation from Khosla Ventures and Pear VC."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Pramaana Labs",
    "announcedDate": "2026-06-18",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "AI Verification",
    "sectorEvidence": "Pramaana Labs, a San Francisco, CA-based developer of a formal verification compiler platform for mission-critical artificial intelligence",
    "role": "lead",
    "coInvestors": [
      "Founders Future",
      "Accel",
      "Boldcap",
      "Nexus Venture Partners",
      "Premji Invest",
      "Unbound"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/pramaana-labs-raises-27m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Pramaana Labs, a San Francisco, CA-based developer of a formal verification compiler platform for mission-critical artificial intelligence, raised $27m in seed funding. The round was led by Khosla Ventures, with participation from Founders Future, Accel, Boldcap, Nexus Venture Partners, Premji Invest, and Unbound."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Clair Health",
    "announcedDate": "2026-06-22",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Women's Health",
    "sectorEvidence": "Clair Health, a San Francisco, California-based developer of wearable hormone monitoring systems for women",
    "role": "lead",
    "coInvestors": [
      "Brydge Club",
      "Cartan Capital",
      "AGI House",
      "Insiders VC",
      "Anne Wojcicki"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/clair-health-raises-11-6m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Clair Health, a San Francisco, California-based developer of wearable hormone monitoring systems for women, raised $11.6m in seed funding. The round was led by Khosla Ventures, with participation from Brydge Club, Cartan Capital, AGI House, Insiders VC, and 23andMe Co-founder Anne Wojcicki."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Runlayer",
    "announcedDate": "2026-06-24",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Runlayer, a NYC-based provider of an AI agent orchestration platform helping companies become AI-native",
    "role": "participant",
    "coInvestors": [
      "Felicis"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/runlayer-raises-30m-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Runlayer, a NYC-based provider of an AI agent orchestration platform helping companies become AI-native, raised $30M in Series A funding. The round was led by Felicis, with participation from Khosla Ventures."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Scaled Cognition",
    "announcedDate": "2026-06-25",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Models",
    "sectorEvidence": "Scaled Cognition, a Mountain View, CA-based AI model lab",
    "role": "lead",
    "coInvestors": [
      "Genesys"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/scaled-cognition-raises-100m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Scaled Cognition, a Mountain View, CA-based AI model lab, raised $100M in Series A funding. The round was led by Khosla Ventures, with participation from Genesys."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Bunkerhill Health",
    "announcedDate": "2026-07-16",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Healthcare AI",
    "sectorEvidence": "Bunkerhill's platform, Carebricks, lets hospitals and health systems turn their own ideas into AI agents that work across clinical, operational, and administrative domains, from reviewing cardiology imaging for early signs of heart disease and identifying patients who need follow-up care to navigating prior authorizations and automating registry management.",
    "role": "lead",
    "coInvestors": [
      "Sequoia Capital",
      "Felicis",
      "Optum Ventures",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.bunkerhillhealth.com/resources/series-b-announcement",
    "sourceType": "company-announcement",
    "evidence": "SAN FRANCISCO - July 16, 2026 - Bunkerhill Health, the agentic AI platform health systems use to turn their best ideas into reality, today announced the close of its Series B funding round, led by Khosla Ventures, with continued participation from Sequoia Capital, Felicis, Optum Ventures, and Y Combinator."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Emergent",
    "announcedDate": "2026-07-17",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Software Development",
    "sectorEvidence": "Emergent, the fast-growing AI software creation platform that enables founders and business owners to build full-stack, production-ready web and mobile applications",
    "role": "participant",
    "coInvestors": [
      "Creaegis",
      "MNI Ventures - Claypond Capital",
      "Sentinel Global",
      "SoftBank Vision Fund 2",
      "Lightspeed",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/emergent-raises-series-c-at-1-5-billion-valuation-becomes-unicorn-in-a-year-of-launch-302828600.html",
    "sourceType": "press-release",
    "evidence": "Emergent, the fast-growing AI software creation platform that enables founders and business owners to build full-stack, production-ready web and mobile applications, today announced a $130 million Series C funding. ... The round was led by Creaegis, with MNI Ventures - Claypond Capital and Sentinel Global as co-lead investors, and participation from Khosla Ventures, SoftBank Vision Fund 2, Lightspeed, and Y Combinator."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Twenty",
    "announcedDate": "2026-07-20",
    "datePrecision": "day",
    "round": null,
    "sector": "Defense Tech",
    "sectorEvidence": "The company builds AI-enabled, end-to-end systems for the U.S. military and Intelligence Community, giving warfighters the speed and scale required to deter and defeat adversaries in cyberspace.",
    "role": null,
    "coInvestors": [],
    "sourceUrl": "https://www.prnewswire.com/news-releases/americas-first-vc-backed-cyber-warfare-startup-raises-additional-30m-from-khosla-ventures-at-1-2b-valuation-302829778.html",
    "sourceType": "press-release",
    "evidence": "ARLINGTON, Va., July 20, 2026 /PRNewswire/ -- Twenty, America's first VC-backed cyber warfare startup, today announced an additional $30 million investment from Khosla Ventures at a $1.2 billion valuation."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Dili",
    "announcedDate": "2026-07-30",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Construction Compliance",
    "sectorEvidence": "The platform automates prevailing wage and apprenticeship monitoring, Davis-Bacon compliance, certified payroll review, and audit-ready reporting, checking 100% of project data in real time.",
    "role": "lead",
    "coInvestors": [
      "Y Combinator's Garry Tan",
      "Allianz",
      "Brick and Mortar Ventures' Darren Bechtel",
      "Rebel Fund"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2026/07/30/3336377/0/en/dili-raises-21-7m-from-khosla-ventures-to-bring-ai-powered-assurance-to-america-s-infrastructure-boom.html",
    "sourceType": "press-release",
    "evidence": "Dili announced $21.7 million in total funding, including a $15 million Series A led by Khosla Ventures."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Mariana Minerals",
    "announcedDate": "2026-08-03",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Critical Minerals",
    "sectorEvidence": "Mariana engineers, builds, and operates mines and refineries using its proprietary MarianaOS platform, which integrates capital project execution (CapitalProjectOS), refinery operations (PlantOS), and mine management (MineOS) into a single AI and machine learning stack.",
    "role": "lead",
    "coInvestors": [
      "Andreessen Horowitz (a16z)",
      "Breakthrough Energy Ventures",
      "Greenoaks",
      "Halo Fund",
      "Pax Ventures",
      "StepStone Group",
      "BHP Ventures",
      "Washington Harbour Partners",
      "Greycroft",
      "General Innovation Capital Partners",
      "Mitsubishi Corporation",
      "In-Q-Tel (IQT)",
      "Earthshot Ventures"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/mariana-minerals-raises-310-million-series-b-led-by-khosla-ventures-to-accelerate-critical-minerals-production-302840889.html",
    "sourceType": "press-release",
    "evidence": "Mariana Minerals Raises $310 Million Series B Led by Khosla Ventures to Accelerate Critical Minerals Production ... The round was led by Khosla Ventures, with continued support from Andreessen Horowitz (a16z) and Breakthrough Energy Ventures, and new participation from Greenoaks, Halo Fund, Pax Ventures, StepStone Group, BHP Ventures, Washington Harbour Partners, Greycroft, General Innovation Capital Partners, Mitsubishi Corporation, In-Q-Tel (IQT), and Earthshot Ventures, with a number of additional strategic capital partners joining the round."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Corma",
    "announcedDate": "2026-08-10",
    "datePrecision": "day",
    "round": "seed",
    "sector": "Cybersecurity",
    "sectorEvidence": "Corma trains its AI models to specialize in qualities related to defensive cybersecurity, most of which 'doesn't have anything to do with coding,' instead focusing on 'looking at logs, audits, [and] finding the needle in a haystack.'",
    "role": "participant",
    "coInvestors": [
      "Sequoia Capital",
      "Coatue"
    ],
    "sourceUrl": "https://fortune.com/2026/08/10/exclusive-corma-raises-60-million-from-sequoia-for-ai-trained-to-defend-against-cyberattacks/",
    "sourceType": "reputable-press",
    "evidence": "That's where Corma comes in, a startup emerging from stealth today with $60 million in seed funding to build AI models for defensive cybersecurity, led by Sequoia Capital, along with Khosla Ventures and Coatue."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "LMArena",
    "announcedDate": "2026-01-07",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Benchmarking",
    "sectorEvidence": "LMArena, a San Francisco, CA-based provider of a community-driven platform for AI benchmarking",
    "role": "participant",
    "coInvestors": [
      "Felicis",
      "UC Investments (University of California)",
      "Andreessen Horowitz",
      "The House Fund",
      "LDVP",
      "Lightspeed Venture Partners",
      "Laude Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/lmarena-raises-150m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "LMArena, a San Francisco, CA-based provider of a community-driven platform for AI benchmarking, raised $150M in Series A funding. The round was led by Felicis and UC Investments (University of California), with participation from Andreessen Horowitz, The House Fund, LDVP, Kleiner Perkins, Lightspeed Venture Partners and Laude Ventures."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Mine",
    "announcedDate": "2026-01-26",
    "datePrecision": "day",
    "round": null,
    "sector": "Personal Finance",
    "sectorEvidence": "Mine, a NYC-based personal finance company",
    "role": "participant",
    "coInvestors": [
      "359 Capital",
      "FJ Labs",
      "Y Combinator",
      "U.S. News and World Report"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/mine-raises-14m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Mine, a NYC-based personal finance company, raised $14M in funding. The round was led by 359 Capital with participation from Kleiner Perkins, FJ Labs, Y Combinator and U.S. News and World Report."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Synthesia",
    "announcedDate": "2026-01-27",
    "datePrecision": "day",
    "round": "Series E",
    "sector": "AI Video",
    "sectorEvidence": "Synthesia, a London, UK-based provider AI-generated video tools for enterprises",
    "role": "participant",
    "coInvestors": [
      "GV",
      "Accel",
      "New Enterprise Associates",
      "NVentures",
      "Air Street Capital",
      "PSP Growth"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/synthesia-raises-200m-in-series-e-funding-at-4-billion-post-money-valuation-2.html",
    "sourceType": "reputable-press",
    "evidence": "Synthesia, a London, UK-based provider AI-generated video tools for enterprises, raised $200m in Series E funding round at a $4 billion post-money valuation. The round was led by GV, with participation from Kleiner Perkins, Accel, New Enterprise Associates, NVentures, Air Street Capital, and PSP Growth."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Phia",
    "announcedDate": "2026-01-28",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Consumer Shopping",
    "sectorEvidence": "Phia, a NYC-based company developing a shopping agent service",
    "role": "participant",
    "coInvestors": [
      "Notable Capital",
      "Khosla Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/phia-raises-35m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Phia, a NYC-based company developing a shopping agent service, raised $35M in Series A funding. The round was led by Notable Capital, with participation from Khosla Ventures and returning investor Kleiner Perkins."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Waymo",
    "announcedDate": "2026-02-02",
    "datePrecision": "day",
    "round": null,
    "sector": "Autonomous Vehicles",
    "sectorEvidence": "Waymo raises $16 billion investment round to scale its robotaxi fleet internationally",
    "role": "participant",
    "coInvestors": [
      "Alphabet",
      "Dragoneer Investment Group",
      "DST Global",
      "Sequoia Capital",
      "Andreessen Horowitz",
      "Mubadala Capital",
      "Bessemer Venture Partners",
      "Silver Lake",
      "Tiger Global",
      "T. Rowe Price",
      "BDT & MSD Partners",
      "CapitalG",
      "Fidelity Management & Research Company",
      "GV",
      "Perry Creek Capital",
      "Temasek"
    ],
    "sourceUrl": "https://techcrunch.com/2026/02/02/waymo-raises-16-billion-round-to-scale-robotaxi-fleet-london-tokyo/",
    "sourceType": "reputable-press",
    "evidence": "Additional investors included BDT & MSD Partners, CapitalG, Fidelity Management & Research Company, GV, Kleiner Perkins, Perry Creek Capital, and Temasek. Waymo said the funds will be used to fuel its growth, which has accelerated over the past year and doesn't appear to be slowing."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Uptool",
    "announcedDate": "2026-02-09",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Manufacturing AI",
    "sectorEvidence": "Uptool, a San Mateo, CA-based developer of an AI platform designed to accelerate manufacturing productivity",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "Eclipse",
      "Bessemer Venture Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/02/uptool-raises-6m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Uptool, a San Mateo, CA-based developer of an AI platform designed to accelerate manufacturing productivity, announced the raise of a $6m in Seed funding. Backers included Khosla Ventures, Eclipse, Bessemer Venture Partners, and Kleiner Perkins."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Garner Health",
    "announcedDate": "2026-02-10",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Digital Health",
    "sectorEvidence": "Garner Health, a leading digital platform that helps patients find the best healthcare providers using better data and smarter financial incentives",
    "role": "lead",
    "coInvestors": [
      "Redpoint",
      "Maverick",
      "Kaiser Permanente Ventures",
      "Mercy",
      "Plus Capital"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/garner-health-raises-118-million-to-close-the-healthcare-quality-and-cost-gap-reaches-1-35-billion-valuation-302680953.html",
    "sourceType": "press-release",
    "evidence": "Garner's Series D, which brings the company's total capital raised to-date to approximately $200 million, was led by Kleiner Perkins with participation from Redpoint, Maverick, Kaiser Permanente Ventures, Mercy, Plus Capital, and other existing investors."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Profound",
    "announcedDate": "2026-02-24",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Marketing",
    "sectorEvidence": "Profound began by giving marketing teams best in class visibility into how AI talks about their brands, tracking mentions, sentiment, and performance across all major Answer Engines.",
    "role": "participant",
    "coInvestors": [
      "Lightspeed Venture Partners",
      "Sequoia Capital",
      "Evantic",
      "Saga",
      "South Park Commons"
    ],
    "sourceUrl": "https://www.tryprofound.com/blog/profound-raises-96m-series-c",
    "sourceType": "company-site",
    "evidence": "Profound raises $96M Series C at $1B valuation to build the marketing platform for the AI era ... Today, we're announcing a $96M Series C at a $1B valuation, led by Lightspeed Venture Partners, alongside Sequoia Capital, Kleiner Perkins, Evantic, Saga and South Park Commons."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Subject",
    "announcedDate": "2026-02-24",
    "datePrecision": "day",
    "round": null,
    "sector": "Education",
    "sectorEvidence": "Subject, a Beverly Hills, CA-based provider of an AI-powered education platform",
    "role": "participant",
    "coInvestors": [
      "Vistara Growth",
      "NextEquity Partners",
      "Green Street Impact Partners",
      "Outcomes Collective",
      "True Equity",
      "L'Attitude Ventures",
      "Hannah Grey"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/02/subject-raises-28m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Subject, a Beverly Hills, CA-based provider of an AI-powered education platform, raised $28M in funding. The round was led by Vistara Growth, with participation from new investors NextEquity Partners, Green Street Impact Partners, and Outcomes Collective, along with existing investors Kleiner Perkins, True Equity, L'Attitude Ventures, and Hannah Grey."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Gambit Security",
    "announcedDate": "2026-02-25",
    "datePrecision": "day",
    "round": "Seed and Series A",
    "sector": "Cybersecurity",
    "sectorEvidence": "Gambit Security's AI-native resilience platform connects to all environments, security solutions, and backup tools to autonomously map an organization's infrastructure and backup data, uncovering gaps that break static recovery plans and put continuity at risk.",
    "role": null,
    "coInvestors": [
      "Spark Capital",
      "Cyberstarts"
    ],
    "sourceUrl": "https://www.accessnewswire.com/newsroom/en/computers-technology-and-internet/gambit-security-raises-61m-to-set-the-standard-for-enterprise-res-1139788",
    "sourceType": "press-release",
    "evidence": "Backed by Spark Capital, Kleiner Perkins, and Cyberstarts, Gambit Security is the first AI-native resilience platform trusted by enterprises to deliver verifiable, continuous resilience, exposing hidden risks before they become catastrophic downtime."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Evervault",
    "announcedDate": "2026-03-05",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Data Security",
    "sectorEvidence": "Evervault, a NYC-based developer-first platform for encrypting and orchestrating sensitive data",
    "role": "participant",
    "coInvestors": [
      "Ribbit Capital",
      "Index Ventures",
      "Sequoia Capital",
      "Operator Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/evervault-raises-25m-in-series-b-financing.html",
    "sourceType": "reputable-press",
    "evidence": "Evervault, a NYC-based developer-first platform for encrypting and orchestrating sensitive data, raised $25m in Series B funding. The round, which brought total funding to $46m, was led by Ribbit Capital with participation from Index Ventures, Sequoia Capital, Kleiner Perkins and Operator Partners."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Axiomatic AI",
    "announcedDate": "2026-03-09",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Engineering AI",
    "sectorEvidence": "Axiomatic AI, a Cambridge, MA-based company building verification solutions empowered by engineering-focused artificial intelligence",
    "role": "participant",
    "coInvestors": [
      "Engine Ventures",
      "Big Sur Ventures",
      "Global Vision Capital",
      "Propagator Ventures",
      "Liquid 2"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/axiomatic-ai-raises-18m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Axiomatic AI, a Cambridge, MA-based company building verification solutions empowered by engineering-focused artificial intelligence, raised $18M in Seed funding. The round was led by Engine Ventures, with participation from Kleiner Perkins, Big Sur Ventures, Global Vision Capital, Propagator Ventures, and Liquid 2."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Armadin",
    "announcedDate": "2026-03-10",
    "datePrecision": "day",
    "round": "Seed and Series A",
    "sector": "Cybersecurity",
    "sectorEvidence": "Armadin, an AI-native cybersecurity company focused on building the ultimate attacker",
    "role": "participant",
    "coInvestors": [
      "Accel",
      "Google Ventures",
      "Menlo Ventures",
      "In-Q-Tel",
      "8VC",
      "Ballistic Ventures"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/armadin-secures-record-breaking-189-9m-in-seed-and-series-a-funding-to-combat-the-era-of-ai-driven-hyperattacks-302709318.html",
    "sourceType": "press-release",
    "evidence": "SAN FRANCISCO, March 10, 2026 /PRNewswire/ -- Armadin, an AI-native cybersecurity company focused on building the ultimate attacker, today announced it has raised an industry record $189.9 million in Seed and Series A funding. Led by Accel, with participation from Google Ventures, Kleiner Perkins, Menlo Ventures, In-Q-Tel, and follow-on investment from 8VC and Ballistic Ventures, this marks the largest combined Seed and Series A funding round in cybersecurity history."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Health Universe",
    "announcedDate": "2026-03-20",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Healthcare AI",
    "sectorEvidence": "Health Universe, a San Francisco, CA-based provider of an enterprise AI platform that automates complex healthcare workflows",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.finsmes.com/2026/03/health-universe-raises-6m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Health Universe, a San Francisco, CA-based provider of an enterprise AI platform that automates complex healthcare workflows, raised $6M in Seed funding. The round was led by Kleiner Perkins."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Granola",
    "announcedDate": "2026-03-25",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Enterprise AI",
    "sectorEvidence": "Granola is an AI-powered meeting notepad that captures conversation transcripts and turns them into actionable, company-wide context.",
    "role": "participant",
    "coInvestors": [
      "Index Ventures",
      "Lightspeed Venture Partners",
      "Spark Capital",
      "NFDG"
    ],
    "sourceUrl": "https://www.thesaasnews.com/news/granola-raises-125m-series-c-at-1-5b-valuation/",
    "sourceType": "reputable-press",
    "evidence": "The round was led by Danny Rimer of Index Ventures, with participation from Mamoon Hamid of Kleiner Perkins, along with existing investors Lightspeed Venture Partners, Spark Capital, and NFDG, bringing Granola's total funding to $192 million."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Harvey",
    "announcedDate": "2026-03-25",
    "datePrecision": "day",
    "round": null,
    "sector": "Legal Tech",
    "sectorEvidence": "Harvey, a San Francisco, CA-based company developing legal infrastructure for law firms and in-house teams",
    "role": "participant",
    "coInvestors": [
      "GIC",
      "Sequoia",
      "Andreessen Horowitz",
      "Coatue",
      "Conviction Partners",
      "Elad Gil",
      "Evantic"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/harvey-raises-200m-in-new-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Harvey, a San Francisco, CA-based company developing legal infrastructure for law firms and in-house teams, raised $200M in new funding, at $11 Billion valuation. The round was led by GIC and Sequoia with participation from existing investors Andreessen Horowitz, Coatue, Conviction Partners, Elad Gil, Evantic, and Kleiner Perkins."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Saronic",
    "announcedDate": "2026-03-31",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Defense",
    "sectorEvidence": "Saronic Technologies today announced it has closed $1.75 billion in Series D funding to advance its mission of ensuring maritime superiority for the U.S. and its allies by delivering autonomous platforms at scale across defense and commercial sectors.",
    "role": "lead",
    "coInvestors": [
      "Advent International",
      "Bessemer Venture Partners",
      "DFJ Growth",
      "BAM Elevate",
      "8VC",
      "Caffeinated Capital",
      "Andreessen Horowitz",
      "Elad Gil",
      "Franklin Templeton"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/saronic-closes-1-75b-series-d-at-9-25b-valuation-to-accelerate-a-new-era-of-maritime-autonomy-302729238.html",
    "sourceType": "press-release",
    "evidence": "AUSTIN, Texas, March 31, 2026 /PRNewswire/ -- Saronic Technologies today announced it has closed $1.75 billion in Series D funding to advance its mission of ensuring maritime superiority for the U.S. and its allies by delivering autonomous platforms at scale across defense and commercial sectors. The round was led by Kleiner Perkins and values the company at $9.25 billion."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Applied Compute",
    "announcedDate": "2026-04-08",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Enterprise AI",
    "sectorEvidence": "help companies unlock their institutional context, train agents against their specific workflows and performance criteria, and deploy those back into production alongside their human experts",
    "role": "lead",
    "coInvestors": [
      "Elad Gil",
      "Lux",
      "Greenoaks",
      "Neo",
      "Hanabi"
    ],
    "sourceUrl": "https://www.appliedcompute.com/company/fundraise",
    "sourceType": "company-site",
    "evidence": "Applied Compute raises $80M led by Kleiner Perkins ... Today, we're announcing $80 million in new financing at a $1.3 billion post-money valuation, led by Kleiner Perkins with continued participation from Elad Gil, Lux, Greenoaks, Neo, Hanabi, and more."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Balerion AI",
    "announcedDate": "2026-04-16",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Mortgage Tech",
    "sectorEvidence": "Balerion AI, a San Francisco, CA-based provider of an agentic AI platform built for mortgage loan origination",
    "role": "lead",
    "coInvestors": [
      "Formation",
      "BoxGroup"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/balerion-ai-raises-6m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Balerion AI, a San Francisco, CA-based provider of an agentic AI platform built for mortgage loan origination, raised $6M in Seed funding. The round was led by Kleiner Perkins, with participation from Formation and BoxGroup."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Avoca",
    "announcedDate": "2026-04-27",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Services AI",
    "sectorEvidence": "Avoca provides AI-powered voice and workflow automation that answers every inbound lead within a few seconds, books jobs directly into customer CRMs, relentlessly follows up on outstanding estimates, and dynamically drives new lead flow based on technician capacity.",
    "role": "lead",
    "coInvestors": [
      "Meritech",
      "General Catalyst",
      "Amplify Partners",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/avoca-raises-125m-at-1b-valuation-to-power-americas-services-economy-with-ai-302753962.html",
    "sourceType": "press-release",
    "evidence": "\"What excites me about Avoca is that they're applying AI where execution is the real bottleneck,\" said Leigh Marie Braswell, Partner at Kleiner Perkins."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Parallel Web Systems",
    "announcedDate": "2026-04-29",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Parallel Web Systems, a Palo Alto, CA-based provider of an infrastructure helping AI agents access and use the open web",
    "role": "participant",
    "coInvestors": [
      "Sequoia Capital",
      "Index Ventures",
      "Khosla Ventures",
      "First Round Capital",
      "Spark Capital",
      "Terrain Capital",
      "Abstract Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/parallel-web-systems-raises-100m-in-series-b-funding-at-2-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Parallel Web Systems, a Palo Alto, CA-based provider of an infrastructure helping AI agents access and use the open web, raised $100M in Series B funding, at $2 Billion valuation. The round was led by Sequoia Capital. Other investors included Kleiner Perkins, Index Ventures, Khosla Ventures, First Round Capital, Spark Capital, Terrain Capital, and Abstract Ventures."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Rogo",
    "announcedDate": "2026-04-29",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Fintech",
    "sectorEvidence": "Rogo, the AI platform purpose-built for finance",
    "role": "lead",
    "coInvestors": [
      "Sequoia",
      "Thrive Capital",
      "Khosla Ventures",
      "J.P. Morgan Growth Equity Partners",
      "BoxGroup",
      "Mantis VC",
      "Jack Altman",
      "Evantic",
      "Positive Sum"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/rogo-raises-160m-series-d-to-scale-the-agentic-platform-for-finance-302756546.html",
    "sourceType": "press-release",
    "evidence": "NEW YORK, April 29, 2026 /PRNewswire/ -- Rogo, the AI platform purpose-built for finance, today announced it has raised $160 million in Series D funding led by Kleiner Perkins, with participation from Sequoia, Thrive Capital, Khosla Ventures, J.P. Morgan Growth Equity Partners, BoxGroup, Mantis VC, Jack Altman, Evantic and Positive Sum."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Manifest OS",
    "announcedDate": "2026-04-30",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Legal Tech",
    "sectorEvidence": "Manifest OS, a NYC-based legal tech company developing an AI-native law firm model and services",
    "role": null,
    "coInvestors": [
      "Menlo Ventures",
      "First Round Capital",
      "Quiet Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/manifest-os-raises-60m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Manifest OS, a NYC-based legal tech company developing an AI-native law firm model and services, raised $60M in Series A funding, at $750M valuation. Backers included Menlo Ventures, Kleiner Perkins, First Round Capital, and Quiet Capital."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Roadrunner",
    "announcedDate": "2026-05-12",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Revenue Software",
    "sectorEvidence": "Roadrunner is replacing CPQ with a new category: PQA: Prompt, Quote, Approve.",
    "role": "lead",
    "coInvestors": [
      "Founders Fund"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2026/05/12/3293309/0/en/roadrunner-raises-27m-to-rebuild-quote-to-cash-from-the-ground-up.html",
    "sourceType": "press-release",
    "evidence": "Roadrunner, the AI-native revenue infrastructure company, today announced $27M in funding - a Seed led by Mamoon Hamid at Kleiner Perkins, and a Series A led by Trae Stephens at Founders Fund - alongside the general availability of its platform."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Vapi",
    "announcedDate": "2026-05-12",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Voice AI",
    "sectorEvidence": "Vapi, Inc., a San Francisco, California-based developer of an API-native enterprise voice AI platform",
    "role": "participant",
    "coInvestors": [
      "Peak XV",
      "M12 (Microsoft's Venture Fund)",
      "Bessemer Venture Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/vapi-raises-50m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Vapi, Inc., a San Francisco, California-based developer of an API-native enterprise voice AI platform, raised $50M in Series B funding. The round was led by Peak XV, with participation from M12 (Microsoft's Venture Fund), Kleiner Perkins, Bessemer Venture Partners, and earlier investors."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Mind Robotics",
    "announcedDate": "2026-05-13",
    "datePrecision": "day",
    "round": null,
    "sector": "Robotics",
    "sectorEvidence": "Mind Robotics is building the full-stack platform of foundation models, purpose-built robotics, and deployment infrastructure to automate industrial and manufacturing tasks at scale.",
    "role": "lead",
    "coInvestors": [
      "Meritech Capital",
      "Redpoint Ventures",
      "SV Angel",
      "Incharge Capital",
      "A-Star Capital",
      "Garuda Ventures",
      "Accel",
      "Andreessen Horowitz",
      "Eclipse",
      "Prysm Capital",
      "Bain Capital Ventures",
      "Greenoaks"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260513731983/en/Mind-Robotics-Announces-$400M-in-New-Funding-to-Expand-Industrial-Robotics-Deployment",
    "sourceType": "press-release",
    "evidence": "Mind Robotics today announced a $400 million financing led by Kleiner Perkins, bringing total investment in Mind Robotics to more than $1 billion."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Stord",
    "announcedDate": "2026-05-26",
    "datePrecision": "day",
    "round": "Series F",
    "sector": "Logistics",
    "sectorEvidence": "Stord, an Atlanta, GA-based consumer experience company",
    "role": null,
    "coInvestors": [
      "Strike Capital",
      "Founders Fund",
      "Franklin Templeton",
      "Baillie Gifford",
      "G Squared",
      "Bond",
      "Lux"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/stord-raises-250m-series-f-funding-at-3b-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Stord, an Atlanta, GA-based consumer experience company, raised $250M in Series F funding, at $3B valuation. Backers included Strike Capital, Kleiner Perkins, Founders Fund, Franklin Templeton, Baillie Gifford, G Squared, Bond, and Lux, among others."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Garner Health",
    "announcedDate": "2026-05-28",
    "datePrecision": "day",
    "round": "Series E",
    "sector": "Digital Health",
    "sectorEvidence": "Garner Health, a NYC-based digital platform provider that helps patients find healthcare providers using data and financial incentives",
    "role": "participant",
    "coInvestors": [
      "Index Ventures",
      "Redpoint",
      "Thrive",
      "Sequoia",
      "Founders Fund",
      "Kaiser Permanente Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/garner-health-raises-100m-in-series-e-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Garner Health, a NYC-based digital platform provider that helps patients find healthcare providers using data and financial incentives, raised $100M in Series E funding, at $2.74 billion valuation. The round was led by Index Ventures with participation from existing investors including Kleiner Perkins, Redpoint, Thrive, Sequoia, Founders Fund, and Kaiser Permanente Ventures."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "NewLimit",
    "announcedDate": "2026-06-03",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Longevity Biotech",
    "sectorEvidence": "NewLimit, a San Francisco, California-based developer of cell reprogramming and epigenetic longevity medicines",
    "role": "participant",
    "coInvestors": [
      "Founders Fund",
      "Thrive Capital",
      "Greenoaks",
      "Quiet Capital",
      "Abstract",
      "Nat Friedman",
      "Daniel Gross",
      "Valor Equity Partners",
      "Eli Lilly Ventures",
      "Human Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/newlimit-raises-435m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "NewLimit, a San Francisco, California-based developer of cell reprogramming and epigenetic longevity medicines, raised $435m in Series C funding. The round was led by Founders Fund, with participation from Thrive Capital, Greenoaks, Quiet Capital, Kleiner Perkins, Abstract, Nat Friedman, Daniel Gross, Valor Equity Partners, Eli Lilly Ventures, and Human Capital."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Poetic",
    "announcedDate": "2026-06-10",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Enterprise Automation",
    "sectorEvidence": "Poetic's purpose-built programming language lets operators define complex workflows in natural language, then encodes that expertise into deterministic, near-tokenless execution.",
    "role": "lead",
    "coInvestors": [
      "Founders Fund",
      "First Harmonic",
      "OpenAI"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/poetic-raises-50m-series-a-to-automate-the-worlds-most-complex-enterprise-processes-with-reliable-ai-302796939.html",
    "sourceType": "press-release",
    "evidence": "Today, Poetic (formerly known as Forge), the company building a new class of software that learns like AI but runs like code, announced that it has raised a $50M Series A at a $500M valuation led by Kleiner Perkins."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "CuspAI",
    "announcedDate": "2026-06-22",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Materials Discovery",
    "sectorEvidence": "CuspAI, a Cambridge, United Kingdom-based developer of AI-powered materials discovery platforms",
    "role": "lead",
    "coInvestors": [
      "NEA",
      "Bezos Expeditions",
      "Glade Brook Capital Partners",
      "Lux Capital",
      "AMD Ventures",
      "Tru Arrow Partners",
      "StepStone",
      "Britain's Sovereign AI Venture Fund",
      "Invest-NL",
      "John Doerr"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/cuspai-to-close-400m-funding-round-at-2-6-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "CuspAI, a Cambridge, United Kingdom-based developer of AI-powered materials discovery platforms, closed a $450m Series B funding round at a $2.6 billion valuation. The round was led Kleiner Perkins and NEA, with participation from Bezos Expeditions, Glade Brook Capital Partners, Lux Capital, AMD Ventures, Tru Arrow Partners, StepStone, Britain's Sovereign AI Venture Fund, Invest-NL and John Doerr."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Allium",
    "announcedDate": "2026-06-23",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Blockchain Data",
    "sectorEvidence": "Allium, a NYC-based provider of a blockchain data platform for enterprises",
    "role": "participant",
    "coInvestors": [
      "Amplify Partners",
      "Theory Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/allium-raises-40m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Allium, a NYC-based provider of a blockchain data platform for enterprises, raised $40M in Series B funding. The round was led by Amplify Partners, with participation from existing investors Kleiner Perkins and Theory Ventures."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Engram",
    "announcedDate": "2026-06-23",
    "datePrecision": "day",
    "round": null,
    "sector": "Enterprise AI",
    "sectorEvidence": "Engram trains models to study an organization's world and anticipate its questions in advance, forming a compact, continuously improving memory unique to each customer.",
    "role": null,
    "coInvestors": [
      "General Catalyst",
      "Sequoia Capital",
      "Factory",
      "Modern",
      "Amplify Partners",
      "Neo",
      "Assaf Rappaport",
      "Andrej Karpathy",
      "Pieter Abbeel"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/engram-launches-with-98m-to-build-ai-that-actually-knows-your-organization-302807126.html",
    "sourceType": "press-release",
    "evidence": "SAN FRANCISCO, June 23, 2026 /PRNewswire/ -- Today, Engram, the company building the learned memory layer for AI, emerged from stealth with $98M in funding from General Catalyst, Kleiner Perkins, Sequoia Capital, Factory, Modern, Amplify Partners, Neo and notable angels and advisors including Assaf Rappaport, co-founder and CEO of Wiz, Andrej Karpathy, co-founder of OpenAI, and Pieter Abbeel, AI and robotics pioneer and co-director of the Berkeley AI Research Lab."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Mirendil",
    "announcedDate": "2026-06-24",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Scientific AI",
    "sectorEvidence": "Mirendil, a San Francisco, CA-based developer of domain-specific artificial intelligence tools and foundation models for scientific discovery",
    "role": "lead",
    "coInvestors": [
      "Andreessen Horowitz (a16z)",
      "Nvidia"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/mirendil-raises-200m-in-seed-funding-at-1-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Mirendil, a San Francisco, CA-based developer of domain-specific artificial intelligence tools and foundation models for scientific discovery, raised $200m in seed funding at a $1 billion valuation. The round was led by Andreessen Horowitz (a16z), Kleiner Perkins, with participation from Nvidia and others."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Trovy",
    "announcedDate": "2026-06-24",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Fintech",
    "sectorEvidence": "Trovy, the consumer fintech replacing high-interest debt with home equity-powered financing",
    "role": "participant",
    "coInvestors": [
      "Left Lane Capital",
      "DCM Ventures",
      "Camber Creek"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/trovy-raises-25-million-in-total-funding-to-turn-every-home-into-a-financial-asset-302808712.html",
    "sourceType": "press-release",
    "evidence": "NEW YORK, June 24, 2026 /PRNewswire/ -- Trovy, the consumer fintech replacing high-interest debt with home equity-powered financing, today announced a $15 million Series A led by Left Lane Capital, bringing total funding to $25 million. Existing seed investors Kleiner Perkins, DCM Ventures, and Camber Creek also participated."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Sail Research",
    "announcedDate": "2026-06-25",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Sail Research, the infrastructure company purpose-built for long-horizon AI agents",
    "role": "lead",
    "coInvestors": [
      "Sequoia",
      "Redpoint Ventures",
      "Theory Ventures",
      "Vine Ventures",
      "CRV",
      "A*",
      "Abstract Ventures",
      "John Hennessy",
      "Lip-Bu Tan",
      "Tri Dao"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/sail-research-raises-80-million-to-build-max-efficiency-infrastructure-for-ai-agents-302810497.html",
    "sourceType": "press-release",
    "evidence": "SAN FRANCISCO, June 25, 2026 /PRNewswire/ -- Sail Research, the infrastructure company purpose-built for long-horizon AI agents, today announced it has raised $80 million in Seed and Series A funding at a $450 million valuation. The Series A was led by Kleiner Perkins, and the Seed was led by Sequoia."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "TerraFirma",
    "announcedDate": "2026-07-14",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Construction Robotics",
    "sectorEvidence": "TerraFirma is a tech-enabled, vertically integrated construction company initially focused on robotic earthworks and site operations.",
    "role": "lead",
    "coInvestors": [
      "Bain Capital Ventures",
      "Glade Brook Capital Partners",
      "BANNER VC",
      "Saga Ventures",
      "Trust Ventures",
      "Definition",
      "PEAK6",
      "Magnetar Capital",
      "Ravelin Capital"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260714397606/en/TerraFirma-Raises-$115M-to-Accelerate-Construction-on-Earth-and-Beyond",
    "sourceType": "press-release",
    "evidence": "TerraFirma, a tech-enabled, vertically integrated construction company focused on critical infrastructure, today announced it has raised approximately $115 million, including a $100 million Series A led by Kleiner Perkins, with participation from Bain Capital Ventures, Glade Brook Capital Partners, BANNER VC, Saga Ventures, Trust Ventures, Definition, PEAK6, Magnetar Capital, and Ravelin Capital."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "CuspAI",
    "announcedDate": "2026-07-20",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI for Materials Discovery",
    "sectorEvidence": "CuspAI has raised $450 million in Series B funding to expand its artificial intelligence platform for discovering new materials.",
    "role": "lead",
    "coInvestors": [
      "New Enterprise Associates",
      "Bezos Expeditions",
      "Glade Brook Capital Partners",
      "Lux Capital",
      "AMD Ventures",
      "Tru Arrow Partners",
      "StepStone",
      "UK Sovereign AI Venture Fund",
      "Invest-NL",
      "John Doerr",
      "Temasek",
      "Basis Set Ventures",
      "Giant Ventures",
      "Touring Capital",
      "Prosus",
      "Phoenix Court",
      "Northzone"
    ],
    "sourceUrl": "https://pulse2.com/cuspai-raises-450-million-series-b-at-2-6-billion-valuation-to-discover-new-materials/",
    "sourceType": "reputable-press",
    "evidence": "CuspAI has raised $450 million in Series B funding to expand its artificial intelligence platform for discovering new materials. The financing values the British startup at approximately $2.6 billion. Kleiner Perkins and New Enterprise Associates co-led the round, with significant participation from Jeff Bezos' investment firm, Bezos Expeditions."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "K2 Space",
    "announcedDate": "2026-07-30",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Space",
    "sectorEvidence": "K2 Space, the leading manufacturer of big, high-power satellites, announced today a $500 million Series D funding round at a $6.8 billion valuation.",
    "role": "lead",
    "coInvestors": [
      "ICONIQ",
      "CapitalG",
      "Lightspeed",
      "Altimeter",
      "Spark Capital",
      "Sands Capital",
      "ARK Invest",
      "T. Rowe Price Associates"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/k2-space-raises-500m-series-d-at-6-8b-valuation-to-scale-large-high-power-satellites-302838793.html",
    "sourceType": "press-release",
    "evidence": "K2 Space, the leading manufacturer of big, high-power satellites, announced today a $500 million Series D funding round at a $6.8 billion valuation. Kleiner Perkins and ICONIQ led the round, with participation from CapitalG, Lightspeed, Altimeter, Spark Capital, Sands Capital, ARK Invest, T. Rowe Price Associates, Inc., and other existing investors."
  },
  {
    "firmSlug": "lightspeed",
    "company": "LMArena",
    "announcedDate": "2026-01-07",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Benchmarking",
    "sectorEvidence": "LMArena, a San Francisco, CA-based provider of a community-driven platform for AI benchmarking",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Felicis",
      "UC Investments (University of California)",
      "Andreessen Horowitz",
      "The House Fund",
      "LDVP",
      "Laude Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/lmarena-raises-150m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "LMArena, a San Francisco, CA-based provider of a community-driven platform for AI benchmarking, raised $150M in Series A funding. The round was led by Felicis and UC Investments (University of California), with participation from Andreessen Horowitz, The House Fund, LDVP, Kleiner Perkins, Lightspeed Venture Partners and Laude Ventures."
  },
  {
    "firmSlug": "lightspeed",
    "company": "ClickHouse",
    "announcedDate": "2026-01-16",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Database Software",
    "sectorEvidence": "ClickHouse, which spun out from Russian search giant Yandex in 2021, develops database software designed to process the massive datasets required by AI agents.",
    "role": "participant",
    "coInvestors": [
      "Dragoneer Investment Group",
      "Bessemer Venture Partners",
      "GIC",
      "Index Ventures",
      "Khosla Ventures"
    ],
    "sourceUrl": "https://techcrunch.com/2026/01/16/snowflake-databricks-challenger-clickhouse-hits-15b-valuation/",
    "sourceType": "reputable-press",
    "evidence": "Database provider ClickHouse secured $400 million at a $15 billion valuation, Bloomberg reported, representing about a 2.5x increase from its $6.35 billion valuation last May. The round was led by Dragoneer Investment Group, the startup said, with participation from investors including Bessemer Venture Partners, GIC, Index Ventures, Khosla Ventures, and Lightspeed Venture Partners."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Emergent",
    "announcedDate": "2026-01-20",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Software Development",
    "sectorEvidence": "Emergent, a San Francisco, CA-based provider of an AI software creation platform",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "SoftBank Vision Fund 2",
      "Prosus",
      "Together",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/emergent-raises-70m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Emergent, a San Francisco, CA-based provider of an AI software creation platform, raised $70M in Series B funding. Bakers included Khosla Ventures and SoftBank Vision Fund 2, with participation from Prosus, Lightspeed, Together, and Y Combinator."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Inferact",
    "announcedDate": "2026-01-22",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "AI Infrastructure",
    "sectorEvidence": "The creators of the open source project vLLM have announced that they transitioned the popular tool into a VC-backed startup, Inferact.",
    "role": null,
    "coInvestors": [
      "Andreessen Horowitz"
    ],
    "sourceUrl": "https://techcrunch.com/2026/01/22/inference-startup-inferact-lands-150m-to-commercialize-vllm/",
    "sourceType": "reputable-press",
    "evidence": "The creators of the open source project vLLM have announced that they transitioned the popular tool into a VC-backed startup, Inferact, raising $150 million in seed funding at an $800 million valuation. The round was co-led by Andreessen Horowitz and Lightspeed Venture Partners, confirming TechCrunch's earlier reporting that vLLM has raised capital from a16z."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Ricursive Intelligence",
    "announcedDate": "2026-01-26",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Semiconductor Design",
    "sectorEvidence": "Ricursive is building a next-generation platform that closes the recursive feedback loop between AI models and the chips that power them, addressing what has become the primary bottleneck to AI progress: the slow, capital-intensive process of semiconductor design.",
    "role": "lead",
    "coInvestors": [
      "DST Global",
      "NVentures",
      "Felicis Ventures",
      "49 Palms Ventures",
      "Radical AI",
      "Sequoia Capital"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/ricursive-intelligence-raises-300-million-series-a-at-4-billion-valuation-to-accelerate-ai-driven-semiconductor-design-302670061.html",
    "sourceType": "press-release",
    "evidence": "Ricursive Intelligence, a frontier AI lab founded by the co-creators of AlphaChip, today announced a $300 million Series A funding round led by Lightspeed Venture Partners at a $4 billion post-money valuation."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Zocks",
    "announcedDate": "2026-01-26",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Fintech",
    "sectorEvidence": "Zocks, which has built an AI assistant for financial advisers",
    "role": "lead",
    "coInvestors": [
      "QED Investors",
      "Motive Ventures",
      "14Peaks Capital"
    ],
    "sourceUrl": "https://news.crunchbase.com/fintech/zocks-raises-seriesb-ai-assistant-financial-advisers/",
    "sourceType": "reputable-press",
    "evidence": "Zocks, which has built an AI assistant for financial advisers, has raised $45 million in a Series B funding co-led by Lightspeed Venture Partners and QED Investors"
  },
  {
    "firmSlug": "lightspeed",
    "company": "Fiddler AI",
    "announcedDate": "2026-01-27",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Observability",
    "sectorEvidence": "Fiddler AI, a Palo Alto, California-based provider of an enterprise AI observability and security platform",
    "role": null,
    "coInvestors": [
      "Lux Capital",
      "RPS Ventures",
      "Insight Partners",
      "Capgemini Ventures",
      "Dallas VC",
      "Dentsu Ventures",
      "Mozilla Ventures",
      "LG Technology Ventures",
      "Benhamou Global Ventures",
      "LDV Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/fiddler-ai-raises-30m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Fiddler AI, a Palo Alto, California-based provider of an enterprise AI observability and security platform, raised $30m in Series C funding. The round was led by RPS Ventures, with participation from existing investors Lightspeed Venture Partners, Lux Capital, Insight Partners, Capgemini Ventures, Dallas VC, Dentsu Ventures, and Mozilla Ventures, and new investors LG Technology Ventures, Benhamou Global Ventures, and LDV Partners."
  },
  {
    "firmSlug": "lightspeed",
    "company": "RobCo",
    "announcedDate": "2026-01-29",
    "datePrecision": "day",
    "round": null,
    "sector": "Industrial Robotics",
    "sectorEvidence": "RobCo, a German startup that makes robots for use in manufacturing, has raised $100 million in financing from investors.",
    "role": null,
    "coInvestors": [
      "Lingotto Investment Management"
    ],
    "sourceUrl": "https://www.bloomberg.com/news/articles/2026-01-29/fiat-toyota-tycoons-back-startup-robco-in-100-million-round",
    "sourceType": "reputable-press",
    "evidence": "Lingotto Investment Management, which is owned by Exor, led the funding round with Lightspeed Venture Partners, RobCo said in a statement on Thursday."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Tem",
    "announcedDate": "2026-02-09",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Energy",
    "sectorEvidence": "Tem has built an energy transaction engine that relies on AI to cut prices relative to other energy traders.",
    "role": "lead",
    "coInvestors": [
      "AlbionVC",
      "Allianz",
      "Atomico",
      "Hitachi Ventures",
      "Revent",
      "Schroders Capital",
      "Voyager Ventures"
    ],
    "sourceUrl": "https://techcrunch.com/2026/02/09/tem-raises-75m-to-remake-electricity-markets-using-ai/",
    "sourceType": "reputable-press",
    "evidence": "The startup recently closed an oversubscribed $75 million Series B led by Lightspeed Venture Partners with participation from AlbionVC, Allianz, Atomico, Hitachi Ventures, Revent, Schroders Capital, and Voyager Ventures, TechCrunch has exclusively learned. The round values Tem at more than $300 million, a source familiar with the deal told TechCrunch."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Anthropic",
    "announcedDate": "2026-02-12",
    "datePrecision": "day",
    "round": "Series G",
    "sector": "AI",
    "sectorEvidence": "Anthropic is an AI safety and research company that's working to build reliable, interpretable, and steerable AI systems.",
    "role": null,
    "coInvestors": [
      "Sequoia Capital",
      "GIC",
      "Coatue",
      "D. E. Shaw Ventures",
      "Dragoneer",
      "Founders Fund",
      "ICONIQ",
      "MGX",
      "Accel",
      "Addition",
      "Alpha Wave Global",
      "Altimeter",
      "AMP PBC",
      "Appaloosa LP",
      "Baillie Gifford",
      "Bessemer Venture Partners",
      "BlackRock",
      "Blackstone",
      "D1 Capital Partners",
      "Fidelity Management & Research Company",
      "General Catalyst",
      "Greenoaks",
      "Growth Equity at Goldman Sachs Alternatives",
      "Insight Partners",
      "Jane Street",
      "JPMorganChase",
      "Menlo Ventures",
      "Morgan Stanley Investment Management",
      "NX1 Capital",
      "Qatar Investment Authority (QIA)",
      "Sands Capital",
      "Temasek",
      "TowerBrook",
      "TPG",
      "Whale Rock Capital",
      "XN"
    ],
    "sourceUrl": "https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation",
    "sourceType": "company-site",
    "evidence": "We have raised $30 billion in Series G funding led by GIC and Coatue, valuing Anthropic at $380 billion post-money. [...] Significant investors in this round include: Accel, Addition, Alpha Wave Global, Altimeter, AMP PBC, Appaloosa LP, Baillie Gifford, Bessemer Venture Partners, affiliated funds of BlackRock, Blackstone, D1 Capital Partners, Fidelity Management & Research Company, General Catalyst, Greenoaks, Growth Equity at Goldman Sachs Alternatives, Insight Partners, Jane Street, JPMorganChase through its Security and Resiliency Initiative and Growth Equity Partners, Lightspeed Venture Partners, Menlo Ventures, Morgan Stanley Investment Management, NX1 Capital, Qatar Investment Authority (QIA), Sands Capital, Sequoia Capital, Temasek, TowerBrook, TPG, Whale Rock Capital, and XN."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Temporal",
    "announcedDate": "2026-02-17",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Developer Infrastructure",
    "sectorEvidence": "By providing a durable execution layer for long-running, stateful AI systems, Temporal enables companies across every sector to turn agentic AI from a promising idea into a production reality.",
    "role": null,
    "coInvestors": [
      "Sequoia Capital",
      "Andreessen Horowitz (a16z)",
      "Sapphire Ventures",
      "Index",
      "Tiger",
      "GIC",
      "Madrona",
      "Amplify"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260217453156/en/Temporal-Raises-$300M-Series-D-to-Make-Agentic-AI-Real-for-Companies",
    "sourceType": "press-release",
    "evidence": "Temporal, the open-source platform powering the world's most reliable agentic applications, today announced a $300 million Series D financing at a $5 billion valuation. The round was led by Andreessen Horowitz (a16z), and joined by Lightspeed Venture Partners and Sapphire Ventures, with strong participation from insiders Sequoia Capital, Index, Tiger, GIC, Madrona, and Amplify."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Profound",
    "announcedDate": "2026-02-24",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Marketing",
    "sectorEvidence": "Profound began by giving marketing teams best in class visibility into how AI talks about their brands, tracking mentions, sentiment, and performance across all major Answer Engines.",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Sequoia Capital",
      "Evantic",
      "Saga",
      "South Park Commons"
    ],
    "sourceUrl": "https://www.tryprofound.com/blog/profound-raises-96m-series-c",
    "sourceType": "company-site",
    "evidence": "Profound raises $96M Series C at $1B valuation to build the marketing platform for the AI era ... Today, we're announcing a $96M Series C at a $1B valuation, led by Lightspeed Venture Partners, alongside Sequoia Capital, Kleiner Perkins, Evantic, Saga and South Park Commons."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Nominal",
    "announcedDate": "2026-03-06",
    "datePrecision": "day",
    "round": "Series B extension",
    "sector": "Engineering Data",
    "sectorEvidence": "Nominal, an Austin, Texas-based developer of a data infrastructure and AI platform for mission-critical engineering",
    "role": null,
    "coInvestors": [
      "Lux Capital",
      "Founders Fund",
      "Sequoia",
      "General Catalyst",
      "Red Glass"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/nominal-raises-80m-in-series-b-extension-funding-at-1-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Nominal, an Austin, Texas-based developer of a data infrastructure and AI platform for mission-critical engineering, raised $80m in Series B extension funding at a $1 billion valuation. The round was led by Founders Fund, with participation from Sequoia, General Catalyst, Lux Capital, Red Glass, and Lightspeed."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Science",
    "announcedDate": "2026-03-06",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Neurotech",
    "sectorEvidence": "Science, an Alameda, CA-based full-stack neural engineering company focused on restoring and extending life",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "Y Combinator",
      "IQT",
      "Quiet Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/science-closes-230m-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Science, an Alameda, CA-based full-stack neural engineering company focused on restoring and extending life, closed a $230m Series C financing round. Backers included Lightspeed Venture Partners, Khosla Ventures, Y Combinator, IQT, and Quiet Capital, among others."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Granola",
    "announcedDate": "2026-03-25",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Enterprise AI",
    "sectorEvidence": "Granola is an AI-powered meeting notepad that captures conversation transcripts and turns them into actionable, company-wide context.",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Index Ventures",
      "Spark Capital",
      "NFDG"
    ],
    "sourceUrl": "https://www.thesaasnews.com/news/granola-raises-125m-series-c-at-1-5b-valuation/",
    "sourceType": "reputable-press",
    "evidence": "The round was led by Danny Rimer of Index Ventures, with participation from Mamoon Hamid of Kleiner Perkins, along with existing investors Lightspeed Venture Partners, Spark Capital, and NFDG, bringing Granola's total funding to $192 million."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Ineffable Intelligence",
    "announcedDate": "2026-04-27",
    "datePrecision": "day",
    "round": null,
    "sector": "AI Research",
    "sectorEvidence": "Ineffable aims to create a 'superlearner' capable of discovering knowledge and skills without relying on human data by leveraging reinforcement learning - a technique in which AI systems learn through trial and error rather than studying human-generated examples.",
    "role": null,
    "coInvestors": [
      "Sequoia Capital",
      "Index Ventures",
      "Google",
      "Nvidia"
    ],
    "sourceUrl": "https://techcrunch.com/2026/04/27/deepminds-david-silver-just-raised-1-1b-to-build-an-ai-that-learns-without-human-data/",
    "sourceType": "reputable-press",
    "evidence": "Ineffable Intelligence, a British AI lab founded a mere few months ago by former DeepMind researcher David Silver, has raised $1.1 billion in funding at a valuation of $5.1 billion. [...] According to Wired, the round was led by Sequoia Capital and Lightspeed Venture Partners, with participation from Index Ventures, Google, Nvidia, and others."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Origin Lab",
    "announcedDate": "2026-05-13",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Data Marketplace",
    "sectorEvidence": "Origin Lab will serve as a marketplace where world-model-focused labs such as Yann LeCun's AMI Labs or Fei-Fei Li's World Labs can buy high-quality licensed data.",
    "role": "lead",
    "coInvestors": [
      "SV Angel",
      "Eniac",
      "Seven Stars",
      "FPV",
      "Kevin Lin",
      "Kyle Vogt"
    ],
    "sourceUrl": "https://techcrunch.com/2026/05/13/origin-lab-raises-8m-to-help-video-game-companies-sell-data-to-world-model-builders/",
    "sourceType": "reputable-press",
    "evidence": "That's the premise of Origin Lab, which just announced an $8 million seed funding round led by Lightspeed Ventures."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Reactor",
    "announcedDate": "2026-05-28",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Reactor, the developer platform for real-time generative video",
    "role": "lead",
    "coInvestors": [
      "WndrCo",
      "Amplify Partners",
      "Sky9 Capital",
      "FPV Ventures"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/reactor-emerges-from-stealth-with-59m-to-build-the-platform-for-real-time-ai-worlds-302783715.html",
    "sourceType": "press-release",
    "evidence": "Reactor, the developer platform for real-time generative video, today emerged from stealth with $59 million in funding led by Lightspeed Venture Partners."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Helion",
    "announcedDate": "2026-06-04",
    "datePrecision": "day",
    "round": "Series G",
    "sector": "Fusion Energy",
    "sectorEvidence": "Helion, an Everett, Washington-based fusion energy company",
    "role": null,
    "coInvestors": [
      "Lux Capital",
      "Thrive Capital",
      "Alta Park Capital",
      "Anti Fund",
      "BoxGroup",
      "Peak XV Partners",
      "Bill Ford",
      "Capricorn Technology Impact Funds",
      "Mithril Capital",
      "Dustin Moskovitz through Good Ventures Foundation",
      "SoftBank Vision Fund 2"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/helion-raises-465m-in-series-g-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Helion, an Everett, Washington-based fusion energy company, raised $465M in Series G funding, at $15.5 billion valuation. The round was led by Thrive Capital, with participation from additional new investors, including Alta Park Capital, Anti Fund, BoxGroup, Lux Capital, Peak XV Partners, and Ford Motor Company Executive Chairman Bill Ford, plus existing investors, including Capricorn Technology Impact Funds, Lightspeed Venture Partners, Mithril Capital, Dustin Moskovitz through Good Ventures Foundation, SoftBank Vision Fund 2, and a university endowment fund."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Ramp",
    "announcedDate": "2026-06-04",
    "datePrecision": "day",
    "round": "Series F",
    "sector": "Fintech",
    "sectorEvidence": "Ramp, a NYC-based financial operations platform",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "ICONIQ",
      "GIC",
      "Ontario Teachers' Pension Plan",
      "Goldman Sachs Alternatives",
      "D.E. Shaw & Co.",
      "Morgan Stanley Investment Management",
      "Generation Investment Management",
      "Insight Partners",
      "BroadLight Capital",
      "Founders Fund",
      "D1 Capital Partners",
      "T. Rowe Price",
      "General Catalyst",
      "Alpha Wave Global",
      "137 Ventures",
      "Thrive Capital",
      "Coatue",
      "Sands Capital",
      "1789 Capital",
      "Avenir Growth",
      "BoxGroup",
      "8VC",
      "Pinegrove Venture Partners",
      "Definition Capital",
      "Stripes"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/ramp-raises-750m-in-series-f-funding-at-44-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Ramp, a NYC-based financial operations platform, raises $750M in Series F funding, at $44 Billion valuation. ... Previous investors who participated are Founders Fund, Lightspeed Venture Partners, D1 Capital Partners, T. Rowe Price, General Catalyst, Alpha Wave Global, 137 Ventures, Thrive Capital, Coatue, Sands Capital, Khosla Ventures, 1789 Capital, Avenir Growth, BoxGroup, 8VC, Pinegrove Venture Partners, Definition Capital, and Stripes."
  },
  {
    "firmSlug": "lightspeed",
    "company": "A Security",
    "announcedDate": "2026-06-08",
    "datePrecision": "day",
    "round": null,
    "sector": "Cybersecurity",
    "sectorEvidence": "A Security, the platform fortifying organizations against weaponized AI by discovering and remediating real attack paths",
    "role": "participant",
    "coInvestors": [
      "Cyberstarts",
      "Assaf Rapaport",
      "Yotam Segev",
      "Cerca Partners"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2026/06/08/3308079/0/en/A-Security-Emerges-from-Stealth-with-37M-in-Funding-to-Outpace-Weaponized-AI.html",
    "sourceType": "press-release",
    "evidence": "A Security, the platform fortifying organizations against weaponized AI by discovering and remediating real attack paths, today emerged from stealth with $37 million in funding from Lightspeed Venture Partners, Cyberstarts and notable angel investors including Wiz CEO Assaf Rapaport, Cyera CEO Yotam Segev and Cerca Partners."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Sandstone",
    "announcedDate": "2026-06-09",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Legal Tech",
    "sectorEvidence": "Sandstone, the platform for managing every legal relationship",
    "role": "lead",
    "coInvestors": [
      "Mantis VC",
      "SV Angel",
      "Operator Partners",
      "Kearny Jackson",
      "Daybreak Ventures",
      "Litquidity Ventures"
    ],
    "sourceUrl": "https://sandstone.com/blog/sandstone-raises-series-a",
    "sourceType": "company-announcement",
    "evidence": "Sandstone, the platform for managing every legal relationship, today announced it has closed $30 million in Series A financing led by Lightspeed Venture Partners, with participation from existing investors from the January seed round, including Mantis VC, SV Angel, Operator Partners, Kearny Jackson, Daybreak Ventures, Litquidity Ventures, and others."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Andera",
    "announcedDate": "2026-06-17",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Enterprise Software",
    "sectorEvidence": "the company building the AI-native platform to automate internal audit",
    "role": "lead",
    "coInvestors": [
      "Bain Capital Ventures"
    ],
    "sourceUrl": "https://lsvp.com/stories/audits-moment-has-arrived-why-we-invested-in-andera/",
    "sourceType": "firm-announcement",
    "evidence": "We're thrilled to announce that Lightspeed is leading a $37M Series A in Andera, the company building the AI-native platform to automate internal audit."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Pie",
    "announcedDate": "2026-06-30",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "SMB Software",
    "sectorEvidence": "Pie helps local merchants get discovered, bring in more customers and convert demand into revenue across the channels where customers are already looking.",
    "role": "lead",
    "coInvestors": [
      "Capital One Ventures",
      "SciFi VC",
      "F-Prime",
      "Commerce Ventures",
      "WEX Venture Capital"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260630636582/en/Pie-Raises-$23.7M-to-Bring-AI-Powered-Growth-to-Main-Street-Businesses",
    "sourceType": "press-release",
    "evidence": "Pie, the AI-powered growth platform for small businesses, today announced a $19.5 million Series A led by Lightspeed Venture Partners, bringing its total funding to $23.7 million."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Nirva",
    "announcedDate": "2026-07-09",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Consumer Hardware",
    "sectorEvidence": "an AI wearable, worn as a necklace or bracelet, designed to listen only to your voice throughout the day, turning it into a life journal, coach, and companion.",
    "role": null,
    "coInvestors": [],
    "sourceUrl": "https://lsvp.com/stories/why-we-partnered-with-nirva/",
    "sourceType": "firm-announcement",
    "evidence": "That is why we are thrilled to announce our partnership with Nirva in their 8M Seed round. ... For Lightspeed, Nirva is a declaration that we think the next iconic consumer device worth caring about will look like something you'd actually choose to wear, and it will know you better than any device before it."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Erebor Bank",
    "announcedDate": "2026-01-05",
    "datePrecision": "day",
    "round": null,
    "sector": "Banking",
    "sectorEvidence": "Erebor Bank, a Columbus, Ohio-based stablecoin bank",
    "role": "lead",
    "coInvestors": [
      "Founders Fund",
      "Haun Ventures",
      "8VC"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/erebor-bank-raises-350m-in-funding-at-4-35-billion-post-money-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Erebor Bank, a Columbus, Ohio-based stablecoin bank, raised $350m in funding at a $4.35b post-money valuation. The round was led by Lux Capital with participation from Founders Fund, Haun Ventures, and 8VC."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Hadrian",
    "announcedDate": "2026-01-12",
    "datePrecision": "day",
    "round": null,
    "sector": "Advanced Manufacturing",
    "sectorEvidence": "Hadrian, a Los Angeles, California-based developer of automated factories for aerospace and defense",
    "role": "participant",
    "coInvestors": [
      "T. Rowe Price Associates, Inc.",
      "Altimeter Capital",
      "D1 Capital Partners",
      "StepStone Group",
      "1789 Capital",
      "Founders Fund",
      "a16z",
      "Construct Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/hadrian-raises-funding-at-1-6-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Hadrian, a Los Angeles, California-based developer of automated factories for aerospace and defense, raised expanded capital at a $1.6 billion valuation. The round was led by T. Rowe Price Associates, Inc. with participation from Altimeter Capital, D1 Capital Partners, StepStone Group, 1789 Capital, Founders Fund, Lux Capital, a16z, Construct Capital, and other existing investors."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Mendra",
    "announcedDate": "2026-01-23",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Biopharma",
    "sectorEvidence": "Mendra, a San Francisco, CA-based biopharmaceutical company developing therapies for rare disease medicines",
    "role": "participant",
    "coInvestors": [
      "OrbiMed",
      "8VC",
      "5AM Ventures",
      "Wing VC"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/mendra-raises-82m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Mendra, a San Francisco, CA-based biopharmaceutical company developing therapies for rare disease medicines, raised $82M in Series A funding. The round was co-led by OrbiMed, 8VC, and 5AM Ventures with participation from Lux Capital and Wing VC."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Fiddler AI",
    "announcedDate": "2026-01-27",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Observability",
    "sectorEvidence": "Fiddler AI, a Palo Alto, California-based provider of an enterprise AI observability and security platform",
    "role": "participant",
    "coInvestors": [
      "RPS Ventures",
      "Lightspeed Venture Partners",
      "Insight Partners",
      "Capgemini Ventures",
      "Dallas VC",
      "Dentsu Ventures",
      "Mozilla Ventures",
      "LG Technology Ventures",
      "Benhamou Global Ventures",
      "LDV Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/fiddler-ai-raises-30m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Fiddler AI, a Palo Alto, California-based provider of an enterprise AI observability and security platform, raised $30m in Series C funding. The round was led by RPS Ventures, with participation from existing investors Lightspeed Venture Partners, Lux Capital, Insight Partners, Capgemini Ventures, Dallas VC, Dentsu Ventures, and Mozilla Ventures, and new investors LG Technology Ventures, Benhamou Global Ventures, and LDV Partners."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Nominal",
    "announcedDate": "2026-03-06",
    "datePrecision": "day",
    "round": "Series B extension",
    "sector": "Engineering Data",
    "sectorEvidence": "Nominal, an Austin, Texas-based developer of a data infrastructure and AI platform for mission-critical engineering",
    "role": "participant",
    "coInvestors": [
      "Founders Fund",
      "Sequoia",
      "General Catalyst",
      "Red Glass",
      "Lightspeed"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/nominal-raises-80m-in-series-b-extension-funding-at-1-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Nominal, an Austin, Texas-based developer of a data infrastructure and AI platform for mission-critical engineering, raised $80m in Series B extension funding at a $1 billion valuation. The round was led by Founders Fund, with participation from Sequoia, General Catalyst, Lux Capital, Red Glass, and Lightspeed."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Corridor",
    "announcedDate": "2026-03-19",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Cybersecurity",
    "sectorEvidence": "Corridor, a San Francisco, CA-based provider of a security platform for AI-native software development",
    "role": "participant",
    "coInvestors": [
      "Felicis",
      "Conviction",
      "Timeless",
      "Artisanal Ventures",
      "Sunflower Capital",
      "Datadog",
      "SV Angel"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/corridor-raises-25m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Corridor, a San Francisco, CA-based provider of a security platform for AI-native software development, raised $25m in Series A funding, at a $200m valuation. The round was led by Felicis, with participation from Conviction, Timeless, Artisanal Ventures, Lux Capital, Sunflower Capital, Datadog, SV Angel, and angels from Anthropic, OpenAI, Cursor, Cognition, Factory, Lovable, and more."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Hanover Park",
    "announcedDate": "2026-03-24",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Fund Administration",
    "sectorEvidence": "Hanover Park, a NYC-based provider of an AI-native fund administrator service for private equity and venture capital",
    "role": "participant",
    "coInvestors": [
      "Emergence Capital",
      "Susa Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/hanover-park-raises-27m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Hanover Park, a NYC-based provider of an AI-native fund administrator service for private equity and venture capital, raised $27M in Series A funding. The round was led by Emergence Capital with participation from Lux Capital and Susa Ventures."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Crosby",
    "announcedDate": "2026-03-31",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Legal Services",
    "sectorEvidence": "It's a services company built from the ground up to integrate the workflows of professionals and AI agents. Crosby isn't an AI assistant for lawyers but an AI-accelerated law firm in its own right, replacing traditional legal services - one that assumes direct liability for the finished contracts it delivers.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.luxcapital.com/news/were-backing-crosby-to-end-the-billiable-hour-for-laywers",
    "sourceType": "firm-site",
    "evidence": "Today, we're thrilled to announce that Lux is leading Crosby's $60 million Series B."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Applied Compute",
    "announcedDate": "2026-04-08",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Enterprise AI",
    "sectorEvidence": "help companies unlock their institutional context, train agents against their specific workflows and performance criteria, and deploy those back into production alongside their human experts",
    "role": "participant",
    "coInvestors": [
      "Kleiner Perkins",
      "Elad Gil",
      "Greenoaks",
      "Neo",
      "Hanabi"
    ],
    "sourceUrl": "https://www.appliedcompute.com/company/fundraise",
    "sourceType": "company-site",
    "evidence": "Applied Compute raises $80M led by Kleiner Perkins ... Today, we're announcing $80 million in new financing at a $1.3 billion post-money valuation, led by Kleiner Perkins with continued participation from Elad Gil, Lux, Greenoaks, Neo, Hanabi, and more."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Armada",
    "announcedDate": "2026-05-19",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Edge Computing",
    "sectorEvidence": "Armada, a San Francisco, CA-based infrastructure and artificial intelligence company developing an edge computing and satellite-enabled platform",
    "role": "participant",
    "coInvestors": [
      "Overmatch",
      "BlackRock",
      "8090 Industries",
      "Johnson Controls",
      "NightDragon",
      "Mitsui",
      "Singtel Innov8",
      "Felicis",
      "Marlinspike",
      "Shield Capital",
      "Founders Fund",
      "Silent Ventures",
      "Veriten",
      "Gladebrook"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/armada-raises-230m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Armada, a San Francisco, CA-based infrastructure and artificial intelligence company developing an edge computing and satellite-enabled platform, raised $230M in Series B funding. The round was co-led by Overmatch, BlackRock and 8090 Industries. New strategic investors BlackRock, Johnson Controls, NightDragon, Mitsui and Singtel Innov8 also participated alongside existing investors including Overmatch, Felicis, Marlinspike, Shield Capital, Lux Capital, Founders Fund, Silent Ventures, Veriten and Gladebrook."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Stord",
    "announcedDate": "2026-05-26",
    "datePrecision": "day",
    "round": "Series F",
    "sector": "Logistics",
    "sectorEvidence": "Stord, an Atlanta, GA-based consumer experience company",
    "role": null,
    "coInvestors": [
      "Strike Capital",
      "Kleiner Perkins",
      "Founders Fund",
      "Franklin Templeton",
      "Baillie Gifford",
      "G Squared",
      "Bond"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/stord-raises-250m-series-f-funding-at-3b-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Stord, an Atlanta, GA-based consumer experience company, raised $250M in Series F funding, at $3B valuation. Backers included Strike Capital, Kleiner Perkins, Founders Fund, Franklin Templeton, Baillie Gifford, G Squared, Bond, and Lux, among others."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Cognition",
    "announcedDate": "2026-05-28",
    "datePrecision": "day",
    "round": null,
    "sector": "AI Software Development",
    "sectorEvidence": "Cognition, a San Francisco, CA-based developer of autonomous AI software engineering agents",
    "role": "lead",
    "coInvestors": [
      "General Catalyst",
      "8VC",
      "Ribbit Capital",
      "Atreides",
      "Layer Global",
      "Founders Fund",
      "Elad Gil",
      "Bain Capital Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/cognition-raises-over-1-billion-in-funding-at-26-billion-post-money-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Cognition, a San Francisco, CA-based developer of autonomous AI software engineering agents, raised over $1 billion in a funding round at a $26 billion post-money valuation. The round was co-led by Lux Capital and General Catalyst, with participation from 8VC, Ribbit Capital, Atreides, Layer Global, and returning backers including Founders Fund, Elad Gil, and Bain Capital Ventures."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Waypoint Bio",
    "announcedDate": "2026-06-02",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Biotech",
    "sectorEvidence": "Waypoint Bio, a New York City-based provider of developer of next-generation CAR T therapies for solid tumors",
    "role": "participant",
    "coInvestors": [
      "Amplify Partners",
      "General Catalyst",
      "Time BioVentures",
      "Mitsui Global Investments",
      "Hummingbird Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/waypoint-bio-raises-20m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Waypoint Bio, a New York City-based provider of developer of next-generation CAR T therapies for solid tumors, raised $20m in Series A funding. The round was led by Amplify Partners, with participation from General Catalyst, Time BioVentures, Mitsui Global Investments, Lux Capital, and Hummingbird Ventures."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Impulse Space",
    "announcedDate": "2026-06-03",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Space",
    "sectorEvidence": "Impulse Space, a Redondo Beach, CA-based developer of in-space mobility vehicles and orbital propulsion infrastructure",
    "role": "participant",
    "coInvestors": [
      "137 Ventures",
      "BANNER VC",
      "Founders Fund",
      "Linse Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/impulse-space-raises-500m-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Impulse Space, a Redondo Beach, CA-based developer of in-space mobility vehicles and orbital propulsion infrastructure, raised $500m in Series D funding. The round was co-led by 137 Ventures and BANNER VC, with participation from Founders Fund, Lux Capital, and Linse Capital."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Westmag",
    "announcedDate": "2026-06-03",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Robotics Hardware",
    "sectorEvidence": "Westmag, a San Francisco, CA-based manufacturer of drone motors and robot actuators",
    "role": "participant",
    "coInvestors": [
      "Andreessen Horowitz",
      "Founders Fund",
      "NFDG",
      "Menlo Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/westmag-raises-11m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Westmag, a San Francisco, CA-based manufacturer of drone motors and robot actuators, raised $11M in Seed funding. The round was led by Andreessen Horowitz, with participation from Founders Fund, Lux Capital, NFDG, Menlo Ventures, and others."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Helion",
    "announcedDate": "2026-06-04",
    "datePrecision": "day",
    "round": "Series G",
    "sector": "Fusion Energy",
    "sectorEvidence": "Helion, an Everett, Washington-based fusion energy company",
    "role": "participant",
    "coInvestors": [
      "Thrive Capital",
      "Alta Park Capital",
      "Anti Fund",
      "BoxGroup",
      "Peak XV Partners",
      "Bill Ford",
      "Capricorn Technology Impact Funds",
      "Lightspeed Venture Partners",
      "Mithril Capital",
      "Dustin Moskovitz through Good Ventures Foundation",
      "SoftBank Vision Fund 2"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/helion-raises-465m-in-series-g-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Helion, an Everett, Washington-based fusion energy company, raised $465M in Series G funding, at $15.5 billion valuation. The round was led by Thrive Capital, with participation from additional new investors, including Alta Park Capital, Anti Fund, BoxGroup, Lux Capital, Peak XV Partners, and Ford Motor Company Executive Chairman Bill Ford, plus existing investors, including Capricorn Technology Impact Funds, Lightspeed Venture Partners, Mithril Capital, Dustin Moskovitz through Good Ventures Foundation, SoftBank Vision Fund 2, and a university endowment fund."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Flourish",
    "announcedDate": "2026-06-05",
    "datePrecision": "day",
    "round": null,
    "sector": "AI Research",
    "sectorEvidence": "Flourish, a New York City-based developer of brain-inspired continuous learning artificial intelligence systems",
    "role": null,
    "coInvestors": [
      "Jeff Bezos",
      "Alphabet's GV",
      "Catalio Capital Management"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/flourish-raises-500m-in-funding-at-2-5-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Flourish, a New York City-based developer of brain-inspired continuous learning artificial intelligence systems, raised $500m in funding at a $2.5 billion valuation. Backers included Jeff Bezos, Alphabet's GV, Lux Capital, and Catalio Capital Management."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Niteshift",
    "announcedDate": "2026-06-11",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Developer Tools",
    "sectorEvidence": "Niteshift, a NYC-based provider of a cloud platform for AI coding agents",
    "role": "participant",
    "coInvestors": [
      "Greylock",
      "Amplify Partners",
      "BoxGroup",
      "SV Angel"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/niteshift-raises-7m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Niteshift, a NYC-based provider of a cloud platform for AI coding agents, raised $7M in Seed funding. The round was led by Greylock, with participation from Amplify Partners, Lux Capital, BoxGroup and SV Angel."
  },
  {
    "firmSlug": "lux-capital",
    "company": "XDOF",
    "announcedDate": "2026-06-19",
    "datePrecision": "day",
    "round": null,
    "sector": "Physical AI Data",
    "sectorEvidence": "XDOF, a Berkeley, California-based developer of data engineering pipelines and annotation systems for physical artificial intelligence",
    "role": null,
    "coInvestors": [
      "Thrive Capital",
      "Spark Capital",
      "Andreessen Horowitz",
      "WndrCo"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/xdof-raises-70m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "XDOF, a Berkeley, California-based developer of data engineering pipelines and annotation systems for physical artificial intelligence, raised $70m in funding. Backers included Thrive Capital, Spark Capital, Andreessen Horowitz, Lux Capital, and WndrCo."
  },
  {
    "firmSlug": "lux-capital",
    "company": "American Perpetuals Exchange",
    "announcedDate": "2026-06-22",
    "datePrecision": "day",
    "round": null,
    "sector": "Crypto Infrastructure",
    "sectorEvidence": "American Perpetuals Exchange, a US-based developer of decentralized financial infrastructure and derivative trading systems",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.finsmes.com/2026/06/american-perpetuals-exchange-raises-30m-in-funding-at-300m-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "American Perpetuals Exchange, a US-based developer of decentralized financial infrastructure and derivative trading systems, raised $30m in funding at a $300m valuation. The round was led by Lux Capital."
  },
  {
    "firmSlug": "lux-capital",
    "company": "CuspAI",
    "announcedDate": "2026-06-22",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Materials Discovery",
    "sectorEvidence": "CuspAI, a Cambridge, United Kingdom-based developer of AI-powered materials discovery platforms",
    "role": "participant",
    "coInvestors": [
      "Kleiner Perkins",
      "NEA",
      "Bezos Expeditions",
      "Glade Brook Capital Partners",
      "AMD Ventures",
      "Tru Arrow Partners",
      "StepStone",
      "Britain's Sovereign AI Venture Fund",
      "Invest-NL",
      "John Doerr"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/cuspai-to-close-400m-funding-round-at-2-6-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "CuspAI, a Cambridge, United Kingdom-based developer of AI-powered materials discovery platforms, closed a $450m Series B funding round at a $2.6 billion valuation. The round was led Kleiner Perkins and NEA, with participation from Bezos Expeditions, Glade Brook Capital Partners, Lux Capital, AMD Ventures, Tru Arrow Partners, StepStone, Britain's Sovereign AI Venture Fund, Invest-NL and John Doerr."
  },
  {
    "firmSlug": "lux-capital",
    "company": "1001",
    "announcedDate": "2026-06-30",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Sovereign AI",
    "sectorEvidence": "1001, a GCC- and London, UK-based developer of sovereign artificial intelligence operating systems for critical infrastructure",
    "role": "lead",
    "coInvestors": [
      "PIF-owned Sanabil Investments",
      "Hanabi",
      "9Yards",
      "General Catalyst",
      "CIV",
      "Chris Re"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/1001-raises-30m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "1001, a GCC- and London, UK-based developer of sovereign artificial intelligence operating systems for critical infrastructure, raised $30m in Series A funding. The round was led by Lux Capital, with participation from PIF-owned Sanabil Investments, Hanabi, 9Yards, General Catalyst, CIV, and Stanford AI researcher Chris Re."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Higharc",
    "announcedDate": "2026-06-30",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Construction Tech",
    "sectorEvidence": "Higharc, a Durham, North Carolina-based developer of a generative AI platform for the homebuilding and residential construction lifecycle",
    "role": "participant",
    "coInvestors": [
      "Insight Partners",
      "Wellington Management",
      "Fifth Wall",
      "Spark Capital",
      "SE Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/higharc-raises-95m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Higharc, a Durham, North Carolina-based developer of a generative AI platform for the homebuilding and residential construction lifecycle, raised $95m in Series C funding. The round, which brought total capital raised to more than $170m, was led by Insight Partners, with participation from Wellington Management, Fifth Wall, Spark Capital, Lux Capital, and SE Ventures."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Genius AI",
    "announcedDate": "2026-07-21",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Vertical SaaS",
    "sectorEvidence": "Genius AI, the technology platform for in-person service businesses, today announced $44 million in Series D financing at a $1.15 billion valuation.",
    "role": "lead",
    "coInvestors": [
      "Bessemer Venture Partners",
      "Imaginary Ventures",
      "L Catterton Growth",
      "2048 Ventures",
      "StepStone Private Ventures"
    ],
    "sourceUrl": "https://www.eznewswire.com/newsroom/genius-ai-glossgenius-series-d-valuation",
    "sourceType": "press-release",
    "evidence": "Genius AI, the technology platform for in-person service businesses, today announced $44 million in Series D financing at a $1.15 billion valuation. ... The round was led by Lux Capital, with participation from Bessemer Venture Partners, Imaginary Ventures, L Catterton Growth, 2048 Ventures, StepStone Private Ventures, and other existing investors."
  },
  {
    "firmSlug": "lux-capital",
    "company": "SkyPilot",
    "announcedDate": "2026-07-21",
    "datePrecision": "day",
    "round": "seed funding",
    "sector": "AI Infrastructure",
    "sectorEvidence": "SkyPilot turns fragmented clouds, clusters, and accelerators into one unified AI supercomputer.",
    "role": "lead",
    "coInvestors": [
      "Amplify Partners",
      "Coatue Management",
      "Foundation Capital",
      "Race Capital",
      "The House Fund",
      "Ali Ghodsi",
      "Jeff Dean",
      "Guillermo Rauch",
      "Amjad Masad",
      "Clem Delangue",
      "Tristan Handy"
    ],
    "sourceUrl": "https://www.hpcwire.com/bigdatawire/this-just-in/skypilot-launches-with-20m-to-accelerate-custom-intelligence-for-frontier-ai-teams/",
    "sourceType": "press-release",
    "evidence": "SkyPilot today announced it has launched from stealth with $20 million in seed funding. ... The funding round was led by Lux Capital, with participation from Amplify Partners, Coatue Management, Foundation Capital, Race Capital, The House Fund, and leading technology operators including Ali Ghodsi, CEO of Databricks; Jeff Dean, Chief Scientist at Google; Guillermo Rauch, CEO of Vercel; Amjad Masad, CEO of Replit; Clem Delangue, CEO of Hugging Face; and Tristan Handy, CEO of dbt Labs."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Glow",
    "announcedDate": "2026-07-22",
    "datePrecision": "day",
    "round": null,
    "sector": "Cybersecurity",
    "sectorEvidence": "Glow gives security teams control over everything that runs on the endpoint. Specialized AI agents continuously map the environment, analyze risk in real time, and enforce policies automatically",
    "role": "participant",
    "coInvestors": [
      "Sequoia",
      "Cyberstarts",
      "Greenoaks",
      "Redpoint Ventures",
      "Index Ventures",
      "Swish Ventures",
      "Operator Collective",
      "Holly Ventures"
    ],
    "sourceUrl": "https://www.glow.io/news/glow-emerges-from-stealth-with-180-million",
    "sourceType": "company-announcement",
    "evidence": "Glow, the AI-powered endpoint security company, today emerged from stealth with $180 million in funding at a $1.2 billion valuation ... The round was led by Sequoia, Cyberstarts, Greenoaks, and Redpoint Ventures, with participation from Index Ventures, Swish Ventures, Lux Capital, Operator Collective, and Holly Ventures."
  },
  {
    "firmSlug": "lux-capital",
    "company": "WindBorne Systems",
    "announcedDate": "2026-08-05",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Weather Intelligence",
    "sectorEvidence": "WindBorne Systems, the weather intelligence company building the world's largest atmospheric sensing network and the AI models it powers, today announced $37 million in Series B funding",
    "role": "participant",
    "coInvestors": [
      "Khosla Ventures",
      "Galvanize",
      "Translink Capital",
      "Biprogy"
    ],
    "sourceUrl": "https://windbornesystems.com/blog/windborne-systems-raises-37-million-to-build-the-worlds-weather-intelligence-infrastructure",
    "sourceType": "company-announcement",
    "evidence": "WindBorne Systems, the weather intelligence company building the world's largest atmospheric sensing network and the AI models it powers, today announced $37 million in Series B funding ... The oversubscribed round was co-led by Khosla Ventures and Galvanize, with participation from Translink Capital, Biprogy, Lux Capital, and existing investors."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Hadrian",
    "announcedDate": "2026-08-06",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Advanced Manufacturing",
    "sectorEvidence": "Hadrian, the advanced manufacturing company building highly automated factories for America, today announced $1.37 billion in new equity financing.",
    "role": "participant",
    "coInvestors": [
      "WCM Investment Management",
      "Washington Harbour Partners",
      "Valor Equity Partners",
      "137 Ventures",
      "Baillie Gifford",
      "JPMorganChase Strategic Investment Group",
      "1789 Capital",
      "Morgan Stanley Wealth Management",
      "funds managed by Apollo",
      "accounts advised by T. Rowe Price Associates, Inc.",
      "CapitalG",
      "Andreessen Horowitz",
      "Founders Fund",
      "Altimeter",
      "Construct Capital"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/hadrian-raises-1-37b-series-d-to-build-highly-automated-factories-to-accelerate-americas-industrial-renewal-302844408.html",
    "sourceType": "press-release",
    "evidence": "Hadrian, the advanced manufacturing company building highly automated factories for America, today announced $1.37 billion in new equity financing. ... The round also included major participation by 1789 Capital, as well as participation from Morgan Stanley Wealth Management, funds managed by Apollo, accounts advised by T. Rowe Price Associates, Inc., CapitalG, Andreessen Horowitz, Founders Fund, Lux Capital, Altimeter, Construct Capital, and existing investors."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Cambridge Aerospace",
    "announcedDate": "2026-08-10",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Defense Tech",
    "sectorEvidence": "Cambridge, which already has several U.K. government contracts, is developing low-cost interceptor systems for both drones and cruise missiles.",
    "role": "participant",
    "coInvestors": [
      "DFJ Growth",
      "Accel",
      "Lakestar",
      "Never Lift",
      "Ora Global",
      "Elad Gil"
    ],
    "sourceUrl": "https://www.axios.com/2026/08/10/anti-drone-defense-cambridge-aerospace",
    "sourceType": "reputable-press",
    "evidence": "Cambridge Aerospace, a British air defense tech startup, raised $300 million in Series C funding at a $3.4 billion post-money valuation led by DFJ Growth. ... Other investors in the round included Lux Capital, Accel, Lakestar, Never Lift, Ora Global, and Elad Gil."
  },
  {
    "firmSlug": "nea",
    "company": "Synthesia",
    "announcedDate": "2026-01-27",
    "datePrecision": "day",
    "round": "Series E",
    "sector": "AI Video",
    "sectorEvidence": "Synthesia, a London, UK-based provider AI-generated video tools for enterprises",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "GV",
      "Accel",
      "NVentures",
      "Air Street Capital",
      "PSP Growth"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/synthesia-raises-200m-in-series-e-funding-at-4-billion-post-money-valuation-2.html",
    "sourceType": "reputable-press",
    "evidence": "Synthesia, a London, UK-based provider AI-generated video tools for enterprises, raised $200m in Series E funding round at a $4 billion post-money valuation. The round was led by GV, with participation from Kleiner Perkins, Accel, New Enterprise Associates, NVentures, Air Street Capital, and PSP Growth."
  },
  {
    "firmSlug": "nea",
    "company": "Kindred",
    "announcedDate": "2026-02-03",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Travel",
    "sectorEvidence": "Kindred was built to make travel more accessible at a time when rising costs and housing pressures have reshaped how people move around the world.",
    "role": "lead",
    "coInvestors": [
      "Dylan Field, CEO of Figma"
    ],
    "sourceUrl": "https://www.foley.com/news/2026/02/foley-represents-nea-as-a-lead-investor-in-series-b-funding-for-kindred/",
    "sourceType": "reputable-press",
    "evidence": "Foley & Lardner LLP represented New Enterprise Associates (NEA) as a lead investor in the $40 million Series B funding round for Kindred"
  },
  {
    "firmSlug": "nea",
    "company": "Union.ai",
    "announcedDate": "2026-02-25",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Union.ai has evolved into an end-to-end AI development platform spanning orchestration, model training, inference, and observability.",
    "role": "lead",
    "coInvestors": [
      "Nava Ventures",
      "Mozilla Ventures"
    ],
    "sourceUrl": "https://www.citybiz.co/article/810840/new-enterprise-associates-leads-38-1-million-series-a-in-union-ai-to-power-a-new-era-of-ai-development-infrastructure/",
    "sourceType": "reputable-press",
    "evidence": "Union.ai today announced it has completed its $38.1 million Series A funding round, led by New Enterprise Associates (NEA)"
  },
  {
    "firmSlug": "nea",
    "company": "Qualified Health",
    "announcedDate": "2026-03-25",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Healthcare AI",
    "sectorEvidence": "Qualified Health is the enterprise AI platform and strategic AI partner helping health systems deploy safe and scalable AI to drive measurable clinical and financial outcomes.",
    "role": "lead",
    "coInvestors": [
      "Transformation Capital",
      "GreatPoint Ventures",
      "Cathay Innovation",
      "Menlo Ventures' Anthology Fund",
      "SignalFire",
      "Frist Cressey Ventures",
      "Flare Capital Partners",
      "Healthier Capital",
      "Town Hall Ventures",
      "Intermountain Ventures"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/qualified-health-raises-125m-series-b-to-meet-growing-demand-for-enterprise-ai-transformation-across-health-systems-302723600.html",
    "sourceType": "press-release",
    "evidence": "Qualified Health, a public benefit corporation providing a secure enterprise AI platform built for health systems, today announced a $125 million Series B financing round led by global venture capital firm, New Enterprise Associates, Inc. (NEA)."
  },
  {
    "firmSlug": "nea",
    "company": "Bluefish",
    "announcedDate": "2026-04-14",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Marketing Software",
    "sectorEvidence": "Bluefish, a NYC-based provider of an agentic marketing platform (AMP) for Fortune 500 brands",
    "role": null,
    "coInvestors": [
      "Bloomberg Beta",
      "Threshold Ventures",
      "Amex Ventures",
      "TIAA Ventures",
      "Salesforce Ventures",
      "Crane Venture Partners",
      "Laconia",
      "Swift Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/bluefish-raises-43m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Bluefish, a NYC-based provider of an agentic marketing platform (AMP) for Fortune 500 brands, raised $43M in Series B funding.\n\nThe round was led by Threshold Ventures and NEA with participation from Amex Ventures, TIAA Ventures, Salesforce Ventures, Bloomberg Beta, Crane Venture Partners, Laconia, and Swift Ventures."
  },
  {
    "firmSlug": "nea",
    "company": "Slash",
    "announcedDate": "2026-04-15",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Fintech",
    "sectorEvidence": "Slash Financial, Inc. is a banking platform built for modern businesses [...] combines FDIC-insured business checking, corporate cards with uncapped cashback rewards, expense management, treasury management, global payments, and stablecoin support into a single platform.",
    "role": null,
    "coInvestors": [
      "Y Combinator",
      "Ribbit Capital",
      "Khosla Ventures",
      "Goodwater Capital"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260415566517/en/Slash-Achieves-Unicorn-Status-Following-$100m-Series-C-Fundraise",
    "sourceType": "press-release",
    "evidence": "Slash Financial, Inc., the banking platform built for modern businesses, is now valued at $1.4 billion following a $100m Series C funding round led by Ribbit Capital. [...] New Enterprise Associates and Y Combinator also participated in the round and are investing in Slash for a fourth time."
  },
  {
    "firmSlug": "nea",
    "company": "Factory",
    "announcedDate": "2026-04-16",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Developer Tools",
    "sectorEvidence": "Droids are used daily by hundreds of thousands of developers across enterprises including Nvidia, Adobe, EY, Palo Alto Networks, and Adyen.",
    "role": null,
    "coInvestors": [
      "Sequoia Capital",
      "Khosla Ventures",
      "Blackstone",
      "Insight Partners",
      "Evantic Capital",
      "20VC",
      "Mantis VC"
    ],
    "sourceUrl": "https://factory.ai/news/series-c",
    "sourceType": "company-site",
    "evidence": "Factory raises $150M Series C led by Khosla Ventures with participation from Sequoia Capital, Blackstone, Insight Partners, Evantic Capital, 20VC, NEA, and Mantis VC."
  },
  {
    "firmSlug": "nea",
    "company": "spektr",
    "announcedDate": "2026-04-16",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "RegTech",
    "sectorEvidence": "The platform deploys networks of specialized AI agents to automate the manual work behind KYC and KYB compliance - from onboarding to ongoing monitoring - so compliance teams can focus on decisions, not data gathering.",
    "role": "lead",
    "coInvestors": [
      "Northzone",
      "Seedcamp",
      "PSV Tech"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260416218452/en/spektr-Raises-$20M-Series-A-to-Eliminate-Manual-Compliance-Work-Across-Financial-Services",
    "sourceType": "press-release",
    "evidence": "spektr, the Copenhagen-based company building AI infrastructure for compliance in financial services, today announced it has raised $20 million in Series A funding led by NEA, with participation from existing investors including Northzone, Seedcamp, and PSV Tech."
  },
  {
    "firmSlug": "nea",
    "company": "NinjaOne",
    "announcedDate": "2026-06-09",
    "datePrecision": "day",
    "round": "Series C extension",
    "sector": "IT Management Software",
    "sectorEvidence": "The NinjaOne Unified IT Operations Platform delivers endpoint management, autonomous patching, backup, and remote access in a single console to improve efficiency, increase resilience, and reduce spend.",
    "role": null,
    "coInvestors": [
      "Wellington Management",
      "Teachers' Venture Growth",
      "BDT & MSD Partners",
      "Sequoia Capital",
      "ICONIQ",
      "Hedosophia",
      "Washington Harbour Partners",
      "CapitalG",
      "Pinegrove Opportunity Partners"
    ],
    "sourceUrl": "https://www.ninjaone.com/press/12-3-billion-valuation/",
    "sourceType": "press-release",
    "evidence": "We believe NinjaOne is defining where the market goes next, and we're thrilled to partner with the team on the journey ahead. - Alex Sharata, Partner at NEA"
  },
  {
    "firmSlug": "nea",
    "company": "Corca Research",
    "announcedDate": "2026-06-10",
    "datePrecision": "day",
    "round": null,
    "sector": "Productivity Software",
    "sectorEvidence": "Corca Research, Inc., a New York-based software company building a collaborative workspace for mathematics",
    "role": null,
    "coInvestors": [
      "Bloomberg Beta",
      "Daft Capital",
      "NVentures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/corca-research-raises-7-8m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Corca Research, Inc., a New York-based software company building a collaborative workspace for mathematics, raised $7.8M in funding.\n\nThe round was led by NEA, with participation from Bloomberg Beta, Daft Capital, and NVentures, NVIDIA's venture capital arm."
  },
  {
    "firmSlug": "nea",
    "company": "CuspAI",
    "announcedDate": "2026-06-22",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Materials Discovery",
    "sectorEvidence": "CuspAI, a Cambridge, United Kingdom-based developer of AI-powered materials discovery platforms",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Bezos Expeditions",
      "Glade Brook Capital Partners",
      "Lux Capital",
      "AMD Ventures",
      "Tru Arrow Partners",
      "StepStone",
      "Britain's Sovereign AI Venture Fund",
      "Invest-NL",
      "John Doerr"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/cuspai-to-close-400m-funding-round-at-2-6-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "CuspAI, a Cambridge, United Kingdom-based developer of AI-powered materials discovery platforms, closed a $450m Series B funding round at a $2.6 billion valuation. The round was led Kleiner Perkins and NEA, with participation from Bezos Expeditions, Glade Brook Capital Partners, Lux Capital, AMD Ventures, Tru Arrow Partners, StepStone, Britain's Sovereign AI Venture Fund, Invest-NL and John Doerr."
  },
  {
    "firmSlug": "nea",
    "company": "TwelveLabs",
    "announcedDate": "2026-07-01",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Video AI",
    "sectorEvidence": "TwelveLabs is the world's most powerful video intelligence platform, that enables machines to perceive, understand, and reason about video the way humans do.",
    "role": "lead",
    "coInvestors": [
      "NAVER Ventures",
      "Amazon",
      "Radical Ventures",
      "Korea Investment Partners",
      "Index Ventures",
      "Quadrille Capital",
      "Red Bull Ventures"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2026/07/01/3320545/0/en/twelvelabs-raises-100-million-in-series-b-funding-to-build-video-superintelligence.html",
    "sourceType": "press-release",
    "evidence": "TwelveLabs Raises $100 Million in Series B Funding to Build Video Superintelligence ... The round was co-led by NEA and NAVER Ventures with participation from Amazon, Radical Ventures, Korea Investment Partners, Index Ventures, Quadrille Capital, and Red Bull Ventures."
  },
  {
    "firmSlug": "nea",
    "company": "Databento",
    "announcedDate": "2026-07-09",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Market Data",
    "sectorEvidence": "Databento is the market data platform for modern finance.",
    "role": "lead",
    "coInvestors": [
      "DRW Venture Capital",
      "Redpoint Ventures",
      "Tribe Capital"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/databento-raises-97-million-series-b-led-by-nea-302821464.html",
    "sourceType": "press-release",
    "evidence": "Databento, the market data platform for modern finance, today announced a $97 million Series B financing led by New Enterprise Associates (NEA)."
  },
  {
    "firmSlug": "nea",
    "company": "Valarian",
    "announcedDate": "2026-07-13",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Infrastructure Software",
    "sectorEvidence": "Valarian provides workload-level governance across the environments where critical applications, AI systems and operational workloads run.",
    "role": "lead",
    "coInvestors": [
      "Lightbank",
      "XTX Ventures",
      "Litquidity Ventures",
      "Sequel",
      "Gokul Rajaram",
      "Nikesh Arora"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260713784977/en/Valarian-Raises-$50-Million-Series-a-Led-by-NEA-to-Deliver-the-Sovereign-Infrastructure-Layer-for-High-Consequence-Operations-and-AI-Driven-Systems",
    "sourceType": "press-release",
    "evidence": "Valarian, the company building the sovereign infrastructure layer for high-consequence operations and AI-driven systems, today announced $50 million in series A funding led by New Enterprise Associates (NEA)."
  },
  {
    "firmSlug": "nea",
    "company": "CuspAI",
    "announcedDate": "2026-07-20",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI for Materials Discovery",
    "sectorEvidence": "CuspAI's mission is to accelerate the discovery of new materials that do not yet exist. The company provides a search engine platform called MIRA, which enables partners to input desired physical properties to generate and validate new chemical compositions.",
    "role": "lead",
    "coInvestors": [
      "Kleiner Perkins",
      "Bezos Expeditions",
      "Glade Brook Capital Partners",
      "Lux Capital",
      "AMD Ventures",
      "Tru Arrow Partners",
      "StepStone",
      "Britain's Sovereign AI Venture Fund",
      "Invest-NL",
      "John Doerr",
      "Temasek",
      "Basis Set Ventures",
      "Giant Ventures",
      "Touring Capital",
      "Prosus",
      "Phoenix Court",
      "Northzone"
    ],
    "sourceUrl": "https://www.thesaasnews.com/news/cuspai-raises-450m-series-b/",
    "sourceType": "reputable-press",
    "evidence": "CuspAI Raises $450M Series B ... The round was led by Kleiner Perkins and NEA, with participation from Bezos Expeditions."
  },
  {
    "firmSlug": "nea",
    "company": "P-1 AI",
    "announcedDate": "2026-07-29",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Engineering AI",
    "sectorEvidence": "P-1 AI is building an AI engineer for the physical world.",
    "role": "lead",
    "coInvestors": [
      "Cameron McCord",
      "Nick Marwell",
      "Jo Zhu Kennedy"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2026/07/29/3335235/0/en/engineering-ai-startup-p-1-ai-announces-its-series-a-financing-led-by-nea-adding-jeff-immelt-to-the-company-s-board.html",
    "sourceType": "press-release",
    "evidence": "P-1 AI, Inc., the company building Archie, an AI mechanical and electrical engineer for industrial teams, today announced the initial closing of its Series A financing round led by New Enterprise Associates (NEA)."
  },
  {
    "firmSlug": "nea",
    "company": "Horizon3",
    "announcedDate": "2026-08-03",
    "datePrecision": "day",
    "round": "Series E",
    "sector": "Cybersecurity",
    "sectorEvidence": "Horizon3, the AI-Native Proactive Security Company behind NodeZero®, shifts the advantage from attackers to defenders by giving organizations the power to fight AI with AI.",
    "role": "lead",
    "coInvestors": [
      "NightDragon",
      "Acrew Capital",
      "Blue Cloud Ventures",
      "Demeter Group",
      "EDBI (Singapore)",
      "PSG",
      "SAIC",
      "Sapphire Ventures",
      "Craft Ventures",
      "Prosperity7 Ventures",
      "Qualcomm Ventures",
      "Ridge Ventures",
      "SignalFire"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260803793896/en/Horizon3-Raises-$250M-Series-E-at-$2B-Valuation-to-Lead-the-AI-vs.-AI-Cybersecurity-Era",
    "sourceType": "press-release",
    "evidence": "Horizon3 Raises $250M Series E at $2B+ Valuation to Lead the \"AI vs. AI\" Cybersecurity Era ... The oversubscribed round was co-led by existing investors NightDragon and NEA, with participation from seven new investors and five returning backers."
  },
  {
    "firmSlug": "neo",
    "company": "Applied Compute",
    "announcedDate": "2026-04-08",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Enterprise AI",
    "sectorEvidence": "We help companies unlock their institutional context, train agents against their specific workflows and performance criteria, and deploy those back into production alongside their human experts.",
    "role": "participant",
    "coInvestors": [
      "Kleiner Perkins",
      "Elad Gil",
      "Lux",
      "Greenoaks",
      "Hanabi"
    ],
    "sourceUrl": "https://www.appliedcompute.com/company/fundraise",
    "sourceType": "company-site",
    "evidence": "Applied Compute Raises $80M to Help Enterprises Advance from Generalized to Specific Intelligence ... Today, we're announcing $80 million in new financing at a $1.3 billion post-money valuation, led by Kleiner Perkins with continued participation from Elad Gil, Lux, Greenoaks, Neo, Hanabi, and more."
  },
  {
    "firmSlug": "neo",
    "company": "Liquid",
    "announcedDate": "2026-04-21",
    "datePrecision": "day",
    "round": "Series Seed",
    "sector": "Fintech",
    "sectorEvidence": "Liquid is the platform where traders can act on opportunities in real time, without being constrained by market hours, platforms, or complexity.",
    "role": "lead",
    "coInvestors": [
      "Left Lane Capital",
      "Haun Ventures",
      "K5 Global",
      "SV Angel",
      "AntiFund",
      "Sunflower Capital",
      "Paradigm",
      "General Catalyst"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/247-trading-platform-liquid-closes-18-million-funding-round-302754621.html",
    "sourceType": "company-announcement",
    "evidence": "NEW YORK, April 21, 2026 /PRNewswire/ -- Liquid, a platform building the future of trading, today announced the successful closing of an $18 million Series Seed funding round. ... The fundraise was co-led by Neo and Left Lane Capital, with participation from Haun Ventures, K5 Global, SV Angel, AntiFund, and Sunflower Capital, in addition to existing investors Paradigm and General Catalyst."
  },
  {
    "firmSlug": "neo",
    "company": "Amperos Health",
    "announcedDate": "2026-04-22",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Healthcare Revenue Cycle",
    "sectorEvidence": "Amperos Health, the first insurance revenue recovery partner capable of working denials end-to-end entirely with AI",
    "role": "participant",
    "coInvestors": [
      "Bessemer Venture Partners",
      "Uncork Capital"
    ],
    "sourceUrl": "https://www.amperos.com/blog/series-a-announcement",
    "sourceType": "company-announcement",
    "evidence": "Amperos Health, the first insurance revenue recovery partner capable of working denials end-to-end entirely with AI, announced today that it has closed a $16 million Series A funding round, led by Bessemer Venture Partners, with participation from Uncork Capital and Neo."
  },
  {
    "firmSlug": "neo",
    "company": "Casa",
    "announcedDate": "2026-04-30",
    "datePrecision": "day",
    "round": null,
    "sector": "Proptech",
    "sectorEvidence": "Casa is a home services platform providing homeowners with ongoing maintenance, repair, and concierge support.",
    "role": "participant",
    "coInvestors": [
      "Forerunner Ventures",
      "Adverb Ventures",
      "Maven",
      "True Ventures"
    ],
    "sourceUrl": "https://www.siliconlegal.com/sls-client-neo-joins-casas-27mm-round/",
    "sourceType": "firm-announcement",
    "evidence": "Silicon Legal represented Neo as they joined Casa's $27 million Round."
  },
  {
    "firmSlug": "neo",
    "company": "Altara",
    "announcedDate": "2026-05-05",
    "datePrecision": "day",
    "round": "seed funding",
    "sector": "R&D Software",
    "sectorEvidence": "San Francisco-based startup Altara, which just secured $7 million in seed funding, says it has built an AI layer designed to bridge these data gaps and bring fragmented technical information into a single platform.",
    "role": "participant",
    "coInvestors": [
      "Greylock",
      "BoxGroup",
      "Liquid 2 Ventures",
      "Jeff Dean"
    ],
    "sourceUrl": "https://techcrunch.com/2026/05/05/altara-secures-7m-to-bridge-the-data-gap-thats-slowing-down-physical-sciences/",
    "sourceType": "reputable-press",
    "evidence": "San Francisco-based startup Altara, which just secured $7 million in seed funding, says it has built an AI layer designed to bridge these data gaps and bring fragmented technical information into a single platform. The round was led by Greylock, with participation from Neo, BoxGroup, Liquid 2 Ventures, and Jeff Dean."
  },
  {
    "firmSlug": "neo",
    "company": "Engram",
    "announcedDate": "2026-06-23",
    "datePrecision": "day",
    "round": null,
    "sector": "Enterprise AI",
    "sectorEvidence": "Engram trains models to study an organization's world and anticipate its questions in advance, forming a compact, continuously improving memory (also known as an 'engram', a neuroscience term meaning the trace of memory in the brain) that's unique to each customer.",
    "role": null,
    "coInvestors": [
      "General Catalyst",
      "Kleiner Perkins",
      "Sequoia Capital",
      "Factory",
      "Modern",
      "Amplify Partners",
      "Assaf Rappaport",
      "Andrej Karpathy",
      "Pieter Abbeel"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/engram-launches-with-98m-to-build-ai-that-actually-knows-your-organization-302807126.html",
    "sourceType": "press-release",
    "evidence": "SAN FRANCISCO, June 23, 2026 /PRNewswire/ -- Today, Engram, the company building the learned memory layer for AI, emerged from stealth with $98M in funding from General Catalyst, Kleiner Perkins, Sequoia Capital, Factory, Modern, Amplify Partners, Neo and notable angels and advisors including Assaf Rappaport, co-founder and CEO of Wiz, Andrej Karpathy, co-founder of OpenAI, and Pieter Abbeel, AI and robotics pioneer and co-director of the Berkeley AI Research Lab."
  },
  {
    "firmSlug": "radical-ventures",
    "company": "Intrepid Labs",
    "announcedDate": "2025-05-12",
    "datePrecision": "day",
    "round": "pre-seed round",
    "sector": "Biotech",
    "sectorEvidence": "Intrepid Labs is unlocking a new era in drug formulation, in which delivery format, dosing frequency, and patient experience can be intentionally designed from day one.",
    "role": "lead",
    "coInvestors": [
      "Propagator Ventures"
    ],
    "sourceUrl": "https://betakit.com/biotech-intrepid-labs-exits-stealth-with-funding-from-radical-ventures-and-avant-bio/",
    "sourceType": "reputable-press",
    "evidence": "Intrepid is coming off a $7 million USD ($9.8 million CAD) seed round led by life science investor Avant Bio, building on a previously unannounced $4 million USD ($5.6 million) pre-seed round led by Radical Ventures with participation from Propagator Ventures."
  },
  {
    "firmSlug": "radical-ventures",
    "company": "OffDeal",
    "announcedDate": "2025-07-29",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Fintech",
    "sectorEvidence": "OffDeal has raised a $12M Series A led by Radical Ventures to build the world's first AI-native investment bank.",
    "role": "lead",
    "coInvestors": [
      "Y Combinator",
      "Rebel Fund",
      "Centre Street Partners"
    ],
    "sourceUrl": "https://offdeal.io/news/offdeal-series-a-funding-radical-ventures-2025",
    "sourceType": "company-announcement",
    "evidence": "OffDeal has raised a $12M Series A led by Radical Ventures to build the world's first AI-native investment bank."
  },
  {
    "firmSlug": "radical-ventures",
    "company": "Waabi",
    "announcedDate": "2026-01-29",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Autonomous Trucking",
    "sectorEvidence": "Waabi, a Toronto, Canada-based Physical AI company",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "G2 Venture Partners",
      "Uber",
      "NVentures",
      "Volvo Group Venture Capital",
      "Porsche Automobil Holding SE",
      "BlackRock",
      "HarbourVest Partners",
      "Linse Capital",
      "Incharge Capital",
      "BDC Capital's Thrive Venture Fund",
      "Export Development Canada (EDC)",
      "TELUS Global Ventures",
      "BMO Global Asset Management"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/waabi-raises-750m-usd-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Waabi, a Toronto, Canada-based Physical AI company, raised $750M USD in Series C funding. The round was led by Khosla Ventures and G2 Venture Partners, with participation from Uber, NVentures, Volvo Group Venture Capital, Porsche Automobil Holding SE, BlackRock, Radical Ventures, HarbourVest Partners, Linse Capital, Incharge Capital, BDC Capital's Thrive Venture Fund, Export Development Canada (EDC), TELUS Global Ventures, BMO Global Asset Management, and others."
  },
  {
    "firmSlug": "radical-ventures",
    "company": "General Magic",
    "announcedDate": "2026-03-02",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Insurtech",
    "sectorEvidence": "Cell, is an SMS-native AI agent that connects directly to carriers' and brokers' existing systems-policy platforms, rating engines, underwriting tools, and internal APIs.",
    "role": "lead",
    "coInvestors": [
      "a16z Speedrun",
      "Aidan Gomez"
    ],
    "sourceUrl": "https://radical.vc/articles/investing-in-general-magic/",
    "sourceType": "firm-site",
    "evidence": "Radical Ventures is proud to announce our lead investment in General Magic's $7.2M seed round, joined by a16z Speedrun and angel investors from OpenAI, Figma, and Aidan Gomez, CEO of Radical portfolio company Cohere."
  },
  {
    "firmSlug": "radical-ventures",
    "company": "Mosaic",
    "announcedDate": "2026-04-22",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Fintech",
    "sectorEvidence": "Mosaic automates and standardizes fundamental analyses, such as LBOs and DCFs, using deterministic, rules-based calculations combined with AI-powered ingestion and agentic workflows.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.prnewswire.com/news-releases/mosaic-raises-18m-series-a-to-build-ai-driven-operating-system-for-deal-makers-302749611.html",
    "sourceType": "press-release",
    "evidence": "Mosaic, the AI-driven deal modeling platform built for private markets, today announced it has raised an $18 million Series A led by Radical Ventures."
  },
  {
    "firmSlug": "radical-ventures",
    "company": "Prime Intellect",
    "announcedDate": "2026-07-08",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "The startup has developed what it calls a 'full stack' for AI agent development, which includes compute access, a reinforcement learning framework, and evaluation tools.",
    "role": "lead",
    "coInvestors": [
      "Nvidia Ventures",
      "Intel Capital",
      "Dell Technologies Capital",
      "Iconiq",
      "Aravind Srinivas",
      "Aaron Levie",
      "Winston Weinberg",
      "Jeff Wang",
      "Brendan Foody"
    ],
    "sourceUrl": "https://techcrunch.com/2026/07/08/prime-intellect-raises-130m-series-a-to-help-enterprises-build-their-own-ai-agents/",
    "sourceType": "reputable-press",
    "evidence": "Prime Intellect raises $130M Series A to help enterprises build their own AI agents ... The massive round was led by Radical Ventures, with participation from Nvidia Ventures, Intel Capital, Dell Technologies Capital, Iconiq, and a long list of angel investors who are founders of notable companies, including Aravind Srinivas (Perplexity), Aaron Levie (Box), Winston Weinberg (Harvey), Jeff Wang (Cognition), and Brendan Foody (Mercor)."
  },
  {
    "firmSlug": "radical-ventures",
    "company": "Discovery Loop",
    "announcedDate": "2026-08-05",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "AI Research Automation",
    "sectorEvidence": "Discovery Loop is focused on automating this process. Instead of humans running experiments in series, the Discovery Loop team is building AI systems that run thousands of experiments in parallel.",
    "role": "lead",
    "coInvestors": [
      "Khosla Ventures",
      "Kleiner Perkins",
      "Lightspeed",
      "Doerr Capital"
    ],
    "sourceUrl": "https://radical.vc/our-investment-in-discovery-loop/",
    "sourceType": "firm-announcement",
    "evidence": "Radical Ventures is very proud to co-lead the seed round of Discovery Loop founded by Jeff Dean, Sanjay Ghemawat, Oriol Vinyals and Quoc Le."
  },
  {
    "firmSlug": "ribbit-capital",
    "company": "CoPlane",
    "announcedDate": "2025-11-25",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Enterprise Software",
    "sectorEvidence": "CoPlane, an AI-native enterprise software company focused on overhauling back-office operations for large organizations",
    "role": "lead",
    "coInvestors": [
      "Stripe",
      "Optum Ventures",
      "Terrain"
    ],
    "sourceUrl": "https://pulse2.com/coplane-14-million-seed-funding/",
    "sourceType": "reputable-press",
    "evidence": "CoPlane, an AI-native enterprise software company focused on overhauling back-office operations for large organizations, announced that it has raised a $14 million seed round led by Ribbit, with additional participation from Stripe, Optum Ventures, and Terrain."
  },
  {
    "firmSlug": "ribbit-capital",
    "company": "Listen Labs",
    "announcedDate": "2026-01-14",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Customer Research",
    "sectorEvidence": "Listen is an AI-first customer research platform. Its AI interviewer talks to people the way a great interviewer would.",
    "role": null,
    "coInvestors": [
      "Sequoia Capital",
      "Evantic",
      "Conviction",
      "Pear VC"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/listen-labs-raises-69-million-series-b-to-bring-customer-voices-into-every-decision-302661000.html",
    "sourceType": "press-release",
    "evidence": "Listen Labs, the AI-first customer research platform, has raised a $69 million Series B led by Ribbit Capital, with participation from Evantic and existing investors Sequoia Capital, Conviction, and Pear VC."
  },
  {
    "firmSlug": "ribbit-capital",
    "company": "Decagon",
    "announcedDate": "2026-01-29",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Customer Service AI",
    "sectorEvidence": "Decagon, a San Francisco, CA-based company which specializes in conversational AI agents for concierge customer experiences",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "Coatue Management",
      "Index Ventures",
      "ChemistryVC",
      "Definition Capital",
      "Starwood Capital",
      "a16z",
      "A*",
      "Accel",
      "Avra",
      "Bain Capital Ventures",
      "T.Capital",
      "Forerunner"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/decagon-raises-250m-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Decagon, a San Francisco, CA-based company which specializes in conversational AI agents for concierge customer experiences, raised $250M in Series D funding, at $4.5 Billion valuation.\n\nThe round was led by Coatue Management and Index Ventures, with participation from new investors ChemistryVC, Definition Capital, and Starwood Capital, and existing investors including a16z, A*, Accel, Avra, Bain Capital Ventures, Elad Gil, T.Capital, Forerunner, and Ribbit Capital."
  },
  {
    "firmSlug": "ribbit-capital",
    "company": "Evervault",
    "announcedDate": "2026-03-05",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Data Security",
    "sectorEvidence": "Evervault, a NYC-based developer-first platform for encrypting and orchestrating sensitive data",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Index Ventures",
      "Sequoia Capital",
      "Operator Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/evervault-raises-25m-in-series-b-financing.html",
    "sourceType": "reputable-press",
    "evidence": "Evervault, a NYC-based developer-first platform for encrypting and orchestrating sensitive data, raised $25m in Series B funding. The round, which brought total funding to $46m, was led by Ribbit Capital with participation from Index Ventures, Sequoia Capital, Kleiner Perkins and Operator Partners."
  },
  {
    "firmSlug": "ribbit-capital",
    "company": "Stedi",
    "announcedDate": "2026-03-30",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Healthcare Infrastructure",
    "sectorEvidence": "Stedi, a Denver, CO-based developer of a cloud-native healthcare clearinghouse",
    "role": null,
    "coInvestors": [
      "Bloomberg Beta",
      "Addition",
      "Stripe",
      "USV",
      "First Round",
      "BoxGroup",
      "Tobi Lütke",
      "Guillermo Rauch",
      "Karim Atiyeh"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/stedi-raises-50m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Stedi, a Denver, CO-based developer of a cloud-native healthcare clearinghouse, raised $50m in Series C funding.\n\nThe round was led by Addition, with participation from Stripe, Ribbit Capital, USV, First Round, BoxGroup, and Bloomberg Beta, as well as angel investors including Tobi Lütke (CEO of Shopify), Guillermo Rauch (CEO of Vercel), and Karim Atiyeh (CTO of Ramp)."
  },
  {
    "firmSlug": "ribbit-capital",
    "company": "Slash",
    "announcedDate": "2026-04-15",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Fintech",
    "sectorEvidence": "Slash Financial, Inc., the banking platform built for modern businesses",
    "role": "lead",
    "coInvestors": [
      "Khosla Ventures",
      "Goodwater Capital",
      "New Enterprise Associates",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260415566517/en/Slash-Achieves-Unicorn-Status-Following-$100m-Series-C-Fundraise",
    "sourceType": "press-release",
    "evidence": "Slash Financial, Inc., the banking platform built for modern businesses, is now valued at $1.4 billion following a $100m Series C funding round led by Ribbit Capital."
  },
  {
    "firmSlug": "ribbit-capital",
    "company": "Slash",
    "announcedDate": "2026-04-16",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Fintech",
    "sectorEvidence": "Slash Financial, which offers business banking accounts, corporate credit cards, transfers, and crypto",
    "role": "lead",
    "coInvestors": [
      "Khosla",
      "Goodwater Capital",
      "NEA",
      "Y Combinator"
    ],
    "sourceUrl": "https://techcrunch.com/2026/04/16/slash-a-ramp-competitor-founded-by-teenagers-raises-100m-at-1-4b-valuation/",
    "sourceType": "reputable-press",
    "evidence": "Slash Financial, which offers business banking accounts, corporate credit cards, transfers, and crypto, has raised a $100 million Series C round at a $1.4 billion valuation from a crowd of A-list investors, the company announced. Fintech-focused Ribbit Capital, Khosla, and Goodwater Capital led the round."
  },
  {
    "firmSlug": "ribbit-capital",
    "company": "Enter",
    "announcedDate": "2026-05-05",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Legal Tech",
    "sectorEvidence": "Enter is a São Paulo-based legal-technology company that uses AI agents to handle end-to-end litigation in civil and labor cases, with the EnterOS platform drafting initial petitions, building legal defenses, calculating settlement costs, and even researching contextual data such as weather conditions cited in airline-cancellation lawsuits.",
    "role": "participant",
    "coInvestors": [
      "Founders Fund",
      "Sequoia Capital",
      "Atlantico",
      "ONEVC",
      "Kaszek"
    ],
    "sourceUrl": "https://www.riotimesonline.com/enter-brazilian-legal-ai-unicorn-1-2-billion-may-2026/",
    "sourceType": "reputable-press",
    "evidence": "The Series B was led by Founders Fund (Peter Thiel) with participation from Sequoia Capital, Ribbit Capital, Atlantico, ONEVC, and Kaszek, and Sequoia and Founders Fund had also co-led Enter's Series A in 2025, signaling continued institutional commitment."
  },
  {
    "firmSlug": "ribbit-capital",
    "company": "Cognition",
    "announcedDate": "2026-05-28",
    "datePrecision": "day",
    "round": null,
    "sector": "AI Software Engineering",
    "sectorEvidence": "Cognition, a San Francisco, CA-based developer of autonomous AI software engineering agents",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "Lux Capital",
      "General Catalyst",
      "8VC",
      "Atreides",
      "Layer Global",
      "Founders Fund",
      "Bain Capital Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/cognition-raises-over-1-billion-in-funding-at-26-billion-post-money-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Cognition, a San Francisco, CA-based developer of autonomous AI software engineering agents, raised over $1 billion in a funding round at a $26 billion post-money valuation.\n\nThe round was co-led by Lux Capital and General Catalyst, with participation from 8VC, Ribbit Capital, Atreides, Layer Global, and returning backers including Founders Fund, Elad Gil, and Bain Capital Ventures."
  },
  {
    "firmSlug": "ribbit-capital",
    "company": "Mach Industries",
    "announcedDate": "2026-06-01",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Defense Tech",
    "sectorEvidence": "Mach Industries, the three-year-old defense tech startup run by 22-year-old founder and CEO Ethan Thornton",
    "role": "lead",
    "coInvestors": [
      "Infinite Capital",
      "Bedrock Capital",
      "Sequoia Capital",
      "Khosla Ventures"
    ],
    "sourceUrl": "https://techcrunch.com/2026/06/01/defense-tech-darling-mach-industries-hits-1-8b-valuation-a-4x-jump-in-a-year/",
    "sourceType": "reputable-press",
    "evidence": "The raise nearly quadruples the valuation of the company in a year. In June 2025, Mach raised $100 million at a $470 million valuation. Other investors include Bedrock Capital, Sequoia Capital, and Khosla Ventures. The round was led by deep tech fund Infinite Capital and Ribbit Capital, known for fintech and lately in hot deals everywhere - from AI coding startups like Cognition to neoclouds like Crusoe."
  },
  {
    "firmSlug": "ribbit-capital",
    "company": "Mach Industries",
    "announcedDate": "2026-06-02",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Defense Tech",
    "sectorEvidence": "Mach Industries, a leading defense manufacturer building advanced unmanned systems for modern defense, today announced it has raised $300 million in Series C funding.",
    "role": "lead",
    "coInvestors": [
      "Infinite Capital",
      "Bedrock Capital",
      "Sequoia Capital",
      "Khosla Ventures"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/mach-industries-raises-300-million-in-series-c-funding-302787788.html",
    "sourceType": "press-release",
    "evidence": "\"At Ribbit, we partner with teams disrupting the status quo, who see the cracks before anyone else and have the conviction to build something better,\" said Micky Malka, Founder of Ribbit Capital. \"Ethan and the Mach team are building with urgency, increasingly controlling their supply chain, and refusing to wait for incumbents to catch up.\""
  },
  {
    "firmSlug": "ribbit-capital",
    "company": "Morpho",
    "announcedDate": "2026-06-09",
    "datePrecision": "day",
    "round": null,
    "sector": "DeFi Lending",
    "sectorEvidence": "the fast-growing crypto protocol Morpho, which offers blockchain-based lending and borrowing",
    "role": null,
    "coInvestors": [
      "Andreessen Horowitz",
      "Paradigm",
      "Apollo Funds",
      "Circle's venture unit",
      "VanEck"
    ],
    "sourceUrl": "https://fortune.com/2026/06/09/morpho-fundraise-a16z-crypto-paradigm-ribbit-capital-175-million/",
    "sourceType": "reputable-press",
    "evidence": "He's the cofounder of the fast-growing crypto protocol Morpho, which offers blockchain-based lending and borrowing. And he has the backing of some of the largest investors in crypto. On Tuesday, he and his team announced that they had raised $175 million in a funding round led by Paradigm, Ribbit Capital, and Andreessen Horowitz's digital assets arm, or a16z crypto."
  },
  {
    "firmSlug": "ribbit-capital",
    "company": "Enigma",
    "announcedDate": "2026-07-27",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Robotics",
    "sectorEvidence": "Enigma is launching a large-scale experiment that allows anyone in the world to interact online with more than 100 of its proprietary AI robots.",
    "role": "lead",
    "coInvestors": [
      "Index Ventures",
      "Conviction Partners"
    ],
    "sourceUrl": "https://techcrunch.com/2026/07/27/enigma-raises-70m-to-make-controlling-a-robot-as-easy-as-adjusting-the-volume/",
    "sourceType": "reputable-press",
    "evidence": "Enigma raised a $71 million seed round led by Index Ventures and Ribbit Capital, with participation from Sarah Guo of Conviction Partners."
  },
  {
    "firmSlug": "sequoia",
    "company": "WithCoverage",
    "announcedDate": "2026-01-13",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Insurtech",
    "sectorEvidence": "WithCoverage, a NYC-based provider of an AI-enabled risk management platform",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "8VC",
      "Crystal Venture Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/withcoverage-raises-42m-in-series-b-financing.html",
    "sourceType": "reputable-press",
    "evidence": "WithCoverage, a NYC-based provider of an AI-enabled risk management platform, raised $42m in Series B financing. The round was led by Sequoia Capital and Khosla Ventures, with participation from 8VC and Crystal Venture Partners."
  },
  {
    "firmSlug": "sequoia",
    "company": "Listen Labs",
    "announcedDate": "2026-01-14",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Customer Research",
    "sectorEvidence": "Listen is an AI-first customer research platform. Its AI interviewer talks to people the way a great interviewer would.",
    "role": "participant",
    "coInvestors": [
      "Ribbit Capital",
      "Evantic",
      "Conviction",
      "Pear VC"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/listen-labs-raises-69-million-series-b-to-bring-customer-voices-into-every-decision-302661000.html",
    "sourceType": "press-release",
    "evidence": "Listen Labs, the AI-first customer research platform, has raised a $69 million Series B led by Ribbit Capital, with participation from Evantic and existing investors Sequoia Capital, Conviction, and Pear VC."
  },
  {
    "firmSlug": "sequoia",
    "company": "Inferact",
    "announcedDate": "2026-01-22",
    "datePrecision": "day",
    "round": "seed funding",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Inferact develops and supports an open-source inference engine that enables companies to run large language models (LLMs) and – at the same time – reduce operational costs and improve performance through advanced memory management techniques like PagedAttention.",
    "role": "participant",
    "coInvestors": [
      "Andreessen Horowitz",
      "Lightspeed Venture Partners",
      "Altimeter Capital",
      "Redpoint Ventures",
      "ZhenFund"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/inferact-raises-150m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Inferact, a San Francisco, CA-based developer of a high-performance AI inference engine, raised $150m in seed funding. The round was co-led by Andreessen Horowitz and Lightspeed Venture Partners, with participation from Sequoia Capital, Altimeter Capital, Redpoint Ventures, and ZhenFund."
  },
  {
    "firmSlug": "sequoia",
    "company": "Pace",
    "announcedDate": "2026-01-27",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Insurtech",
    "sectorEvidence": "The firm develops agentic AI systems capable of handling submissions, claims processing, and other document-heavy work.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://insurtechanalyst.com/2026/01/28/pace-secures-10m-series-a-to-modernise-insurance-workflows/",
    "sourceType": "reputable-press",
    "evidence": "Pace, an agentic AI startup automating insurance operations, has raised $10m in a Series A led by Sequoia Capital to accelerate AI adoption across insurance workflows."
  },
  {
    "firmSlug": "sequoia",
    "company": "Flapping Airplanes",
    "announcedDate": "2026-01-28",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "AI Research",
    "sectorEvidence": "The goal - finding a less data-hungry way to train large models - is a particularly interesting one.",
    "role": null,
    "coInvestors": [
      "Google Ventures",
      "Index"
    ],
    "sourceUrl": "https://techcrunch.com/2026/01/29/flapping-airplanes-and-the-promise-of-research-driven-ai/",
    "sourceType": "reputable-press",
    "evidence": "A new AI lab called Flapping Airplanes launched on Wednesday, with $180 million in seed funding from Google Ventures, Sequoia, and Index."
  },
  {
    "firmSlug": "sequoia",
    "company": "Waymo",
    "announcedDate": "2026-02-02",
    "datePrecision": "day",
    "round": null,
    "sector": "Autonomous Vehicles",
    "sectorEvidence": "They are building Waymo not as a technology demonstration but as infrastructure that will reshape how the world moves.",
    "role": "lead",
    "coInvestors": [
      "Dragoneer",
      "DST Global"
    ],
    "sourceUrl": "https://sequoiacap.com/article/partnering-with-waymo",
    "sourceType": "firm-site",
    "evidence": "Today, we're honored to announce that Sequoia is co-leading Waymo's $16 billion investment round alongside Dragoneer and DST Global."
  },
  {
    "firmSlug": "sequoia",
    "company": "ElevenLabs",
    "announcedDate": "2026-02-04",
    "datePrecision": "day",
    "round": null,
    "sector": "Voice AI",
    "sectorEvidence": "Voice AI company ElevenLabs said today it raised $500 million in a new funding round led by Sequoia Capital.",
    "role": "lead",
    "coInvestors": [
      "a16z",
      "Iconiq",
      "BroadLight",
      "NFDG",
      "Valor Capital",
      "AMP Coalition",
      "Smash Capital",
      "Lightspeed Venture Partners",
      "Evantic Capital",
      "Bond"
    ],
    "sourceUrl": "https://techcrunch.com/2026/02/04/elevenlabs-raises-500m-from-sequioia-at-a-11-billion-valuation/",
    "sourceType": "reputable-press",
    "evidence": "Voice AI company ElevenLabs said today it raised $500 million in a new funding round led by Sequoia Capital, which was an investor in the startup's last secondary round through a tender."
  },
  {
    "firmSlug": "sequoia",
    "company": "Anthropic",
    "announcedDate": "2026-02-12",
    "datePrecision": "day",
    "round": "Series G",
    "sector": "AI",
    "sectorEvidence": "Anthropic is an AI safety and research company that's working to build reliable, interpretable, and steerable AI systems.",
    "role": "participant",
    "coInvestors": [
      "GIC",
      "Coatue",
      "D. E. Shaw Ventures",
      "Dragoneer",
      "Founders Fund",
      "ICONIQ",
      "MGX",
      "Accel",
      "Addition",
      "Alpha Wave Global",
      "Altimeter",
      "AMP PBC",
      "Appaloosa LP",
      "Baillie Gifford",
      "Bessemer Venture Partners",
      "BlackRock",
      "Blackstone",
      "D1 Capital Partners",
      "Fidelity Management & Research Company",
      "General Catalyst",
      "Greenoaks",
      "Growth Equity at Goldman Sachs Alternatives",
      "Insight Partners",
      "Jane Street",
      "JPMorganChase",
      "Lightspeed Venture Partners",
      "Menlo Ventures",
      "Morgan Stanley Investment Management",
      "NX1 Capital",
      "Qatar Investment Authority (QIA)",
      "Sands Capital",
      "Temasek",
      "TowerBrook",
      "TPG",
      "Whale Rock Capital",
      "XN"
    ],
    "sourceUrl": "https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation",
    "sourceType": "company-site",
    "evidence": "We have raised $30 billion in Series G funding led by GIC and Coatue, valuing Anthropic at $380 billion post-money. [...] Significant investors in this round include: Accel, Addition, Alpha Wave Global, Altimeter, AMP PBC, Appaloosa LP, Baillie Gifford, Bessemer Venture Partners, affiliated funds of BlackRock, Blackstone, D1 Capital Partners, Fidelity Management & Research Company, General Catalyst, Greenoaks, Growth Equity at Goldman Sachs Alternatives, Insight Partners, Jane Street, JPMorganChase through its Security and Resiliency Initiative and Growth Equity Partners, Lightspeed Venture Partners, Menlo Ventures, Morgan Stanley Investment Management, NX1 Capital, Qatar Investment Authority (QIA), Sands Capital, Sequoia Capital, Temasek, TowerBrook, TPG, Whale Rock Capital, and XN."
  },
  {
    "firmSlug": "sequoia",
    "company": "Temporal",
    "announcedDate": "2026-02-17",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Developer Infrastructure",
    "sectorEvidence": "By providing a durable execution layer for long-running, stateful AI systems, Temporal enables companies across every sector to turn agentic AI from a promising idea into a production reality.",
    "role": "participant",
    "coInvestors": [
      "Andreessen Horowitz (a16z)",
      "Lightspeed Venture Partners",
      "Sapphire Ventures",
      "Index",
      "Tiger",
      "GIC",
      "Madrona",
      "Amplify"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260217453156/en/Temporal-Raises-$300M-Series-D-to-Make-Agentic-AI-Real-for-Companies",
    "sourceType": "press-release",
    "evidence": "Temporal, the open-source platform powering the world's most reliable agentic applications, today announced a $300 million Series D financing at a $5 billion valuation. The round was led by Andreessen Horowitz (a16z), and joined by Lightspeed Venture Partners and Sapphire Ventures, with strong participation from insiders Sequoia Capital, Index, Tiger, GIC, Madrona, and Amplify."
  },
  {
    "firmSlug": "sequoia",
    "company": "Profound",
    "announcedDate": "2026-02-24",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Marketing Tech",
    "sectorEvidence": "Profound's software tracks how AI models describe and recommend brands across millions of real prompts.",
    "role": "participant",
    "coInvestors": [
      "Lightspeed Venture Partners",
      "Kleiner Perkins",
      "Evantic Capital",
      "Saga VC",
      "South Park Commons"
    ],
    "sourceUrl": "https://fortune.com/2026/02/24/exclusive-as-ai-threatens-search-profound-raises-96-million-to-help-brands-stay-visible/",
    "sourceType": "reputable-press",
    "evidence": "Profound, an 18-month-old startup betting that the future of marketing will be shaped not by Google links but by AI answers, is now a unicorn. The company has raised its $96 million Series C at a $1 billion valuation. [...] Lightspeed Venture Partners led the round, with continued participation by Sequoia Capital, Kleiner Perkins, Evantic Capital, Saga VC, and South Park Commons."
  },
  {
    "firmSlug": "sequoia",
    "company": "Rowspace",
    "announcedDate": "2026-02-25",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Financial Services AI",
    "sectorEvidence": "Manapat described Rowspace as the intelligence layer that sits on top of a firm's data. The platform integrates all of an institution's structured and unstructured data, whether in the form of documents or accounting systems or old PowerPoints, and performs reasoning in advance.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://fortune.com/2026/02/25/rowspace-sequoia-ai-financial-platform-private-equity-investment-venture-capital/",
    "sourceType": "reputable-press",
    "evidence": "Manapat described Rowspace as the intelligence layer that sits on top of a firm's data. [...] The company is publicly launching today with $50 million in funding across a previously unannounced seed round led by Sequoia and a Series A co-led by Sequoia and Emergence Capital, with participation from Basis Set Ventures, Stripe, and Conviction, along with other firms and angel investors."
  },
  {
    "firmSlug": "sequoia",
    "company": "Evervault",
    "announcedDate": "2026-03-05",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Data Security",
    "sectorEvidence": "Evervault is a developer-first platform that enables companies to encrypt and orchestrate sensitive data without ever handling it in plaintext.",
    "role": "participant",
    "coInvestors": [
      "Ribbit Capital",
      "Index Ventures",
      "Kleiner Perkins",
      "Operator Partners"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260305028054/en/Evervault-Raises-$25M-in-Series-B-Financing-to-Deliver-End-to-End-Encryption-for-Highly-Sensitive-Data",
    "sourceType": "press-release",
    "evidence": "Evervault, the developer-first platform for encrypting and orchestrating sensitive data, today announced it has raised $25 million Series B financing led by Ribbit Capital with participation from Index Ventures, Sequoia Capital, Kleiner Perkins and Operator Partners."
  },
  {
    "firmSlug": "sequoia",
    "company": "Nominal",
    "announcedDate": "2026-03-06",
    "datePrecision": "day",
    "round": "Series B extension",
    "sector": "Engineering Data",
    "sectorEvidence": "Nominal, an Austin, Texas-based developer of a data infrastructure and AI platform for mission-critical engineering",
    "role": null,
    "coInvestors": [
      "Lux Capital",
      "Founders Fund",
      "General Catalyst",
      "Red Glass",
      "Lightspeed"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/nominal-raises-80m-in-series-b-extension-funding-at-1-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Nominal, an Austin, Texas-based developer of a data infrastructure and AI platform for mission-critical engineering, raised $80m in Series B extension funding at a $1 billion valuation. The round was led by Founders Fund, with participation from Sequoia, General Catalyst, Lux Capital, Red Glass, and Lightspeed."
  },
  {
    "firmSlug": "sequoia",
    "company": "Juicebox",
    "announcedDate": "2026-03-10",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "HR Tech",
    "sectorEvidence": "Juicebox deploys agents to search across a comprehensive talent graph, surface candidates who match open roles, and reach them with targeted outreach at a speed and scale no human team could maintain on its own.",
    "role": "participant",
    "coInvestors": [
      "DST Global",
      "Coatue",
      "Y Combinator",
      "NFDG",
      "Verified Capital"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260310781820/en/Juicebox-Raises-$80M-at-$850M-Valuation-to-Help-Businesses-Reach-Top-Talent-Before-Anyone-Else-Does",
    "sourceType": "press-release",
    "evidence": "Juicebox, the AI recruiting platform, today announced $80 million in Series B funding at an $850 million valuation led by DST Global, with meaningful participation from Sequoia, Coatue, Y Combinator, NFDG, and Verified Capital."
  },
  {
    "firmSlug": "sequoia",
    "company": "Harvey",
    "announcedDate": "2026-03-25",
    "datePrecision": "day",
    "round": null,
    "sector": "Legal AI",
    "sectorEvidence": "Harvey, a San Francisco, CA-based company developing legal infrastructure for law firms and in-house teams",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "GIC",
      "Andreessen Horowitz",
      "Coatue",
      "Conviction Partners",
      "Evantic",
      "Kleiner Perkins"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/harvey-raises-200m-in-new-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Harvey, a San Francisco, CA-based company developing legal infrastructure for law firms and in-house teams, raised $200M in new funding, at $11 Billion valuation.\n\nThe round was led by GIC and Sequoia with participation from existing investors Andreessen Horowitz, Coatue, Conviction Partners, Elad Gil, Evantic, and Kleiner Perkins."
  },
  {
    "firmSlug": "sequoia",
    "company": "Auctor",
    "announcedDate": "2026-04-15",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Enterprise Software",
    "sectorEvidence": "Auctor's platform aims to be the AI System of Action for Enterprise Software implementation, curating execution-ready artifacts and ensuring teams understand decisions and their impact.",
    "role": "lead",
    "coInvestors": [
      "M12, Microsoft's Venture Fund",
      "HubSpot Ventures",
      "Workday Ventures",
      "OneStream",
      "Y Combinator",
      "Tercera"
    ],
    "sourceUrl": "https://www.startuphub.ai/ai-news/funding-round/2026/auctor-secures-20m-series-a-led-by-sequoia",
    "sourceType": "reputable-press",
    "evidence": "Auctor, a startup building an AI system of action for the enterprise software implementation market, has raised $20 million in a Series A round led by Sequoia Capital."
  },
  {
    "firmSlug": "sequoia",
    "company": "Factory",
    "announcedDate": "2026-04-16",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Developer Tools",
    "sectorEvidence": "Droids are used daily by hundreds of thousands of developers across enterprises including Nvidia, Adobe, EY, Palo Alto Networks, and Adyen.",
    "role": "participant",
    "coInvestors": [
      "Khosla Ventures",
      "Blackstone",
      "Insight Partners",
      "Evantic Capital",
      "20VC",
      "NEA",
      "Mantis VC"
    ],
    "sourceUrl": "https://factory.ai/news/series-c",
    "sourceType": "company-site",
    "evidence": "Factory raises $150M Series C led by Khosla Ventures with participation from Sequoia Capital, Blackstone, Insight Partners, Evantic Capital, 20VC, NEA, and Mantis VC."
  },
  {
    "firmSlug": "sequoia",
    "company": "Ineffable Intelligence",
    "announcedDate": "2026-04-27",
    "datePrecision": "day",
    "round": null,
    "sector": "AI Research",
    "sectorEvidence": "Ineffable aims to create a 'superlearner' capable of discovering knowledge and skills without relying on human data by leveraging reinforcement learning - a technique in which AI systems learn through trial and error rather than studying human-generated examples.",
    "role": "lead",
    "coInvestors": [
      "Lightspeed Venture Partners",
      "Index Ventures",
      "Google",
      "Nvidia"
    ],
    "sourceUrl": "https://techcrunch.com/2026/04/27/deepminds-david-silver-just-raised-1-1b-to-build-an-ai-that-learns-without-human-data/",
    "sourceType": "reputable-press",
    "evidence": "Ineffable Intelligence, a British AI lab founded a mere few months ago by former DeepMind researcher David Silver, has raised $1.1 billion in funding at a valuation of $5.1 billion. [...] According to Wired, the round was led by Sequoia Capital and Lightspeed Venture Partners, with participation from Index Ventures, Google, Nvidia, and others."
  },
  {
    "firmSlug": "sequoia",
    "company": "Parallel Web Systems",
    "announcedDate": "2026-04-29",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Parallel Web Systems, the infrastructure powering how AI agents access and use the open web, today announced that it has raised a $100 million Series B round at a $2 billion valuation, led by Sequoia Capital.",
    "role": "lead",
    "coInvestors": [
      "Kleiner Perkins",
      "Index Ventures",
      "Khosla Ventures",
      "First Round Capital",
      "Spark Capital",
      "Terrain Capital",
      "Abstract Ventures"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/parallel-raises-at-2-billion-valuation-to-scale-web-infrastructure-for-agents-302756350.html",
    "sourceType": "press-release",
    "evidence": "Parallel Web Systems, the infrastructure powering how AI agents access and use the open web, today announced that it has raised a $100 million Series B round at a $2 billion valuation, led by Sequoia Capital."
  },
  {
    "firmSlug": "sequoia",
    "company": "Rogo",
    "announcedDate": "2026-04-29",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Financial Services AI",
    "sectorEvidence": "Trusted by more than 35,000 professionals at the world's top investment banks, private equity firms, and asset managers, Rogo combines purpose-built financial reasoning models with deep integrations across internal and external data sources to automate research, accelerate workflows, and deliver analyst-grade insights in seconds.",
    "role": "participant",
    "coInvestors": [
      "Kleiner Perkins",
      "Thrive Capital",
      "Khosla Ventures",
      "J.P. Morgan Growth Equity Partners",
      "BoxGroup",
      "Mantis VC",
      "Jack Altman",
      "Evantic",
      "Positive Sum"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/rogo-raises-160m-series-d-to-scale-the-agentic-platform-for-finance-302756546.html",
    "sourceType": "press-release",
    "evidence": "Rogo, the AI platform purpose-built for finance, today announced it has raised $160 million in Series D funding led by Kleiner Perkins, with participation from Sequoia, Thrive Capital, Khosla Ventures, J.P. Morgan Growth Equity Partners, BoxGroup, Mantis VC, Jack Altman, Evantic and Positive Sum."
  },
  {
    "firmSlug": "sequoia",
    "company": "Astrocade",
    "announcedDate": "2026-05-05",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Gaming",
    "sectorEvidence": "Games can be built through AI-with natural language prompting-by creators on a website called Astrocade, where there are thousands of games created by AI-fueled text prompts.",
    "role": "lead",
    "coInvestors": [
      "Sea",
      "Google",
      "Nvidia",
      "LG Ventures",
      "Dentsu Ventures",
      "Conviction Embed"
    ],
    "sourceUrl": "https://fortune.com/2026/05/05/astrocade-raises-56-million-series-b-sequoia-video-games-platform-ali-amir-sadeghian/",
    "sourceType": "reputable-press",
    "evidence": "Now, eight months later, Astrocade has about five million monthly active users, clocking about 140 million game plays each month, and hosts more than 75,000 games built by creators from 80 countries. The company has raised $56 million in new funding, Fortune has exclusively learned. This $56 million includes a Series A (led by Sea) and a Series B, led by Sequoia Capital."
  },
  {
    "firmSlug": "sequoia",
    "company": "SendCutSend",
    "announcedDate": "2026-05-19",
    "datePrecision": "day",
    "round": null,
    "sector": "Manufacturing",
    "sectorEvidence": "SendCutSend is an on-demand manufacturer... sheet metal, CNC, precision parts, same-day-to-next-day ambitions.",
    "role": "lead",
    "coInvestors": [
      "Paradigm",
      "Patrick Collison"
    ],
    "sourceUrl": "https://www.tbpndigest.com/story/2026-05-19/sendcutsend-raises-110m-from-sequoia-and-paradigm-to-become-the-amazon-of-manufacturing",
    "sourceType": "reputable-press",
    "evidence": "SendCutSend raises $110M from Sequoia and Paradigm to become the 'Amazon of manufacturing' [...] Sequoia partners Andrew Reed and Shaun Maguire led alongside Paradigm's Matt Wong."
  },
  {
    "firmSlug": "sequoia",
    "company": "Mercury",
    "announcedDate": "2026-05-20",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Fintech",
    "sectorEvidence": "Mercury is radically different banking - engineered from the ground up to hold, move, and help you truly understand your money like never before.",
    "role": "participant",
    "coInvestors": [
      "TCV",
      "Andreessen Horowitz",
      "Coatue",
      "CRV",
      "Sapphire Ventures",
      "Spark Capital"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260520511817/en/Mercury-Raises-$200-Million-Series-D-at-$5.2B-Valuation",
    "sourceType": "press-release",
    "evidence": "Mercury, the technology company providing radically different banking, today announced a $200 million Series D at a $5.2B valuation, led by TCV. [...] Andreessen Horowitz, Coatue, CRV, Sapphire Ventures, Sequoia Capital, and Spark Capital"
  },
  {
    "firmSlug": "sequoia",
    "company": "Garner Health",
    "announcedDate": "2026-05-28",
    "datePrecision": "day",
    "round": "Series E",
    "sector": "Healthcare",
    "sectorEvidence": "Garner uses one of the nation's most robust medical datasets – covering over 60 billion medical records – to identify the best doctors in the nation.",
    "role": "participant",
    "coInvestors": [
      "Index Ventures",
      "Kleiner Perkins",
      "Redpoint",
      "Thrive",
      "Founders Fund",
      "Kaiser Permanente Ventures"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/garner-health-closes-100-million-series-e-at-a-2-74b-valuation-to-continue-addressing-the-healthcare-quality-and-cost-gap-302783840.html",
    "sourceType": "press-release",
    "evidence": "Garner Health, a leading digital platform that helps patients find the best healthcare providers using better data and smarter financial incentives, has closed a $100 million Series E round, led by Index Ventures with participation from existing investors including Kleiner Perkins, Redpoint, Thrive, Sequoia, Founders Fund, and Kaiser Permanente Ventures."
  },
  {
    "firmSlug": "sequoia",
    "company": "Mach Industries",
    "announcedDate": "2026-06-01",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Defense Tech",
    "sectorEvidence": "The Huntington Beach, California-based company now has five autonomous vehicles in development: Viper, a jet-powered vertical takeoff vehicle; Glide, a high-altitude glider capable of launching weapons; Stratos, an airborne surveillance platform; Dart, a low-cost counter-drone interceptor; and Pike, intended for launching long-range munitions.",
    "role": "participant",
    "coInvestors": [
      "Infinite Capital",
      "Ribbit Capital",
      "Bedrock Capital",
      "Khosla Ventures"
    ],
    "sourceUrl": "https://techcrunch.com/2026/06/01/defense-tech-darling-mach-industries-hits-1-8b-valuation-a-4x-jump-in-a-year/",
    "sourceType": "reputable-press",
    "evidence": "Mach Industries, the three-year-old defense tech startup run by 22-year-old founder and CEO Ethan Thornton, has raised a $300 million Series C at a $1.8 billion valuation [...] Other investors include Bedrock Capital, Sequoia Capital, and Khosla Ventures."
  },
  {
    "firmSlug": "sequoia",
    "company": "NinjaOne",
    "announcedDate": "2026-06-09",
    "datePrecision": "day",
    "round": "Series C extension",
    "sector": "IT Operations",
    "sectorEvidence": "The NinjaOne Unified IT Operations Platform delivers endpoint management, autonomous patching, backup, and remote access in a single console.",
    "role": "participant",
    "coInvestors": [
      "Wellington Management",
      "Teachers' Venture Growth (TVG)",
      "BDT & MSD Partners",
      "ICONIQ",
      "Hedosophia",
      "NEA",
      "Washington Harbour Partners",
      "CapitalG",
      "Pinegrove Opportunity Partners"
    ],
    "sourceUrl": "https://www.ninjaone.com/press/12-3-billion-valuation/",
    "sourceType": "company-site",
    "evidence": "NinjaOne Reaches $12.3B Valuation as IT Operations Market Consolidates Around a Single Platform [...] The extensions included participation from Wellington Management, Teachers' Venture Growth (TVG), BDT & MSD Partners' affiliated funds, Sequoia Capital, ICONIQ, Hedosophia, NEA, Washington Harbour Partners, CapitalG, and Pinegrove Opportunity Partners."
  },
  {
    "firmSlug": "sequoia",
    "company": "Ent",
    "announcedDate": "2026-06-16",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Cybersecurity",
    "sectorEvidence": "Ent's platform helps organizations understand and intervene in risky actions by humans and AI agents before they become incidents.",
    "role": "participant",
    "coInvestors": [
      "Decibel",
      "Crosspoint Capital Partners",
      "Craft Ventures",
      "Shield Capital",
      "Felicis",
      "In-Q-Tel (IQT)"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260616680280/en/Ent-Emerges-from-Stealth-to-Bring-Prevention-Back-to-Cybersecurity",
    "sourceType": "press-release",
    "evidence": "Ent Emerges from Stealth to Bring Prevention Back to Cybersecurity [...] The funding is led by Decibel, with participation from Sequoia, Crosspoint Capital Partners, Craft Ventures, Shield Capital, Felicis, and In-Q-Tel (IQT)."
  },
  {
    "firmSlug": "sequoia",
    "company": "Peregrine Technologies",
    "announcedDate": "2026-06-22",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "GovTech",
    "sectorEvidence": "The platform does something deceptively simple: it connects all the data a government agency already has-police records, 911 logs, permit databases, sensor feeds, emergency management systems-and makes it searchable and usable in real time, without collecting or owning any of it.",
    "role": "lead",
    "coInvestors": [
      "Fifth Down Capital",
      "OG Venture Partners",
      "Goldcrest Capital",
      "XYZ Ventures",
      "Godfrey Capital"
    ],
    "sourceUrl": "https://fortune.com/2026/06/22/exclusive-peregrine-nick-noone-ai-public-safety-palantir-2026-world-cup-just-sequoia-capital/",
    "sourceType": "reputable-press",
    "evidence": "Peregrine Technologies Raises $250 Million Series D at $6.8 Billion Valuation [...] The round was led by existing investors, including Fifth Down Capital, Sequoia Capital, OG Venture Partners, Goldcrest Capital, XYZ Ventures, and Godfrey Capital."
  },
  {
    "firmSlug": "sequoia",
    "company": "Engram",
    "announcedDate": "2026-06-23",
    "datePrecision": "day",
    "round": null,
    "sector": "Enterprise AI",
    "sectorEvidence": "Engram trains models to study an organization's world and anticipate its questions in advance, forming a compact, continuously improving memory (also known as an 'engram', a neuroscience term meaning the trace of memory in the brain) that's unique to each customer.",
    "role": null,
    "coInvestors": [
      "Neo",
      "General Catalyst",
      "Kleiner Perkins",
      "Factory",
      "Modern",
      "Amplify Partners",
      "Assaf Rappaport",
      "Andrej Karpathy",
      "Pieter Abbeel"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/engram-launches-with-98m-to-build-ai-that-actually-knows-your-organization-302807126.html",
    "sourceType": "press-release",
    "evidence": "SAN FRANCISCO, June 23, 2026 /PRNewswire/ -- Today, Engram, the company building the learned memory layer for AI, emerged from stealth with $98M in funding from General Catalyst, Kleiner Perkins, Sequoia Capital, Factory, Modern, Amplify Partners, Neo and notable angels and advisors including Assaf Rappaport, co-founder and CEO of Wiz, Andrej Karpathy, co-founder of OpenAI, and Pieter Abbeel, AI and robotics pioneer and co-director of the Berkeley AI Research Lab."
  },
  {
    "firmSlug": "sequoia",
    "company": "Probook",
    "announcedDate": "2026-06-23",
    "datePrecision": "day",
    "round": "seed",
    "sector": "Home Services Software",
    "sectorEvidence": "The company is building what Eliadis calls an AI operating system for home service businesses-the HVAC shops, plumbing outfits, and electrical contractors that collectively power a $700 billion industry.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://fortune.com/2026/06/23/exclusive-this-startup-wants-to-be-the-ai-brain-for-home-services-and-it-just-raised-40-million-from-sequoia-and-a16z/",
    "sourceType": "reputable-press",
    "evidence": "Probook, his New York-based startup, raised a $34 million Series A led by Andreessen Horowitz and a $6 million seed led by Sequoia Capital, which also participated in the A, Fortune learned exclusively."
  },
  {
    "firmSlug": "sequoia",
    "company": "Stark",
    "announcedDate": "2026-06-23",
    "datePrecision": "day",
    "round": null,
    "sector": "Defense Tech",
    "sectorEvidence": "Stark builds loitering munitions, the military term for drones that hover over a target area, identify threats autonomously, and destroy them by self-detonating on impact.",
    "role": "lead",
    "coInvestors": [
      "Founders Fund",
      "NATO Innovation Fund",
      "Döpfner Capital",
      "Air Street Capital",
      "201 Ventures",
      "Project A"
    ],
    "sourceUrl": "https://thenextweb.com/news/stark-defence-500-million-sequoia-founders-fund-3-5-billion-valuation",
    "sourceType": "reputable-press",
    "evidence": "Stark Defence, the Berlin-based strike drone startup founded in 2024, has raised €500 million in a round led by Sequoia Capital and Peter Thiel's Founders Fund"
  },
  {
    "firmSlug": "sequoia",
    "company": "Sail Research",
    "announcedDate": "2026-06-25",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Sail Research, the infrastructure company purpose-built for long-horizon AI agents",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Redpoint Ventures",
      "Theory Ventures",
      "Vine Ventures",
      "CRV",
      "A*",
      "Abstract Ventures",
      "John Hennessy",
      "Lip-Bu Tan",
      "Tri Dao"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/sail-research-raises-80-million-to-build-max-efficiency-infrastructure-for-ai-agents-302810497.html",
    "sourceType": "press-release",
    "evidence": "SAN FRANCISCO, June 25, 2026 /PRNewswire/ -- Sail Research, the infrastructure company purpose-built for long-horizon AI agents, today announced it has raised $80 million in Seed and Series A funding at a $450 million valuation. The Series A was led by Kleiner Perkins, and the Seed was led by Sequoia."
  },
  {
    "firmSlug": "sequoia",
    "company": "Glow",
    "announcedDate": "2026-07-22",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Cybersecurity",
    "sectorEvidence": "endpoint security platform that helps enterprises monitor and control the software, AI agents, and developer tools running on employee devices",
    "role": "lead",
    "coInvestors": [
      "Cyberstarts",
      "Greenoaks",
      "Redpoint Ventures",
      "Index Ventures",
      "Swish Ventures",
      "Lux Capital",
      "Operator Collective",
      "Holly Ventures"
    ],
    "sourceUrl": "https://techcrunch.com/2026/07/22/glow-emerges-from-stealth-at-1-2b-valuation-to-challenge-endpoint-security-in-the-ai-era/",
    "sourceType": "reputable-press",
    "evidence": "Sequoia Capital, Cyberstarts, Greenoaks, and Redpoint Ventures, alongside participation from Index Ventures, Swish Ventures, Lux Capital, Operator Collective, and Holly Ventures. ... The investment made Glow one of the latest cybersecurity startups to achieve unicorn status"
  },
  {
    "firmSlug": "sequoia",
    "company": "Valar Atomics",
    "announcedDate": "2026-08-04",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Nuclear Energy",
    "sectorEvidence": "Valar was founded with the following ethos: to bring manufacturing economics to nuclear through a vertically integrated business model and unwavering prioritization of hardware.",
    "role": "lead",
    "coInvestors": [
      "Apandion",
      "Atreides Management",
      "Conviction",
      "Dream Ventures",
      "HOF Capital",
      "Point72",
      "Riot Ventures",
      "Snowpoint Ventures",
      "Valor Equity Partners"
    ],
    "sourceUrl": "https://www.valaratomics.com/docs/Announcing-our-1B-Series-B-Led-By-Sequoia",
    "sourceType": "company-announcement",
    "evidence": "Valar Atomics is excited to announce the closing of a $1 billion Series B financing led by Sequoia Capital."
  },
  {
    "firmSlug": "sequoia",
    "company": "Corma",
    "announcedDate": "2026-08-10",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Cybersecurity",
    "sectorEvidence": "a startup emerging from stealth today with $60 million in seed funding to build AI models for defensive cybersecurity",
    "role": "lead",
    "coInvestors": [
      "Khosla Ventures",
      "Coatue"
    ],
    "sourceUrl": "https://fortune.com/2026/08/10/exclusive-corma-raises-60-million-from-sequoia-for-ai-trained-to-defend-against-cyberattacks/",
    "sourceType": "reputable-press",
    "evidence": "That's where Corma comes in, a startup emerging from stealth today with $60 million in seed funding to build AI models for defensive cybersecurity, led by Sequoia Capital, along with Khosla Ventures and Coatue."
  },
  {
    "firmSlug": "sequoia",
    "company": "Neros Technologies",
    "announcedDate": "2026-08-11",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Defense Tech",
    "sectorEvidence": "Neros is building a new era of credible deterrence for America and its allies by establishing a domestic drone industrial base in the United States.",
    "role": "lead",
    "coInvestors": [
      "American Strategic Technology Fund (ASTF)",
      "Interlagos",
      "Valor Equity Partners",
      "Allen & Company",
      "Thiel Capital",
      "Spark Capital",
      "Dylan Field"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/neros-raises-250m-series-c-at-2-5b-valuation-to-scale-autonomous-and-interceptor-drone-programs-302848736.html",
    "sourceType": "press-release",
    "evidence": "Sequoia Capital and American Strategic Technology Fund (ASTF) co-led the $250M Series C for Neros Technologies, which will accelerate production of autonomous drone systems including the Archer AI platform and Bandit interceptor."
  },
  {
    "firmSlug": "sequoia",
    "company": "Preview",
    "announcedDate": "2026-08-12",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "AI Video Software",
    "sectorEvidence": "An AI-native video creation and production platform built for professional creators, Preview combines a video timeline with an infinite canvas for ideation into one collaborative multiplayer workspace.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://sequoiacap.com/article/partnering-with-preview-lights-inference-action/",
    "sourceType": "firm-announcement",
    "evidence": "Partnering with Preview: Lights, Inference, Action | Sequoia Capital ... We are thrilled to partner with Stefan and Veljko and to lead their seed round."
  },
  {
    "firmSlug": "softbank-vision-fund",
    "company": "Classiq",
    "announcedDate": "2025-07-30",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Quantum Computing",
    "sectorEvidence": "a high-level quantum development platform (IDE, compiler and OS) that automates quantum programming",
    "role": null,
    "coInvestors": [
      "CDP Venture Capital"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2025/07/30/3123970/0/en/SoftBank-Vision-Fund-2-Makes-Strategic-Investment-in-Classiq-Expanding-Series-C.html",
    "sourceType": "press-release",
    "evidence": "Classiq announced an investment by SoftBank Vision Fund 2 with participation from CDP Venture Capital, Italy's largest venture capital operator."
  },
  {
    "firmSlug": "softbank-vision-fund",
    "company": "Emergent",
    "announcedDate": "2026-01-20",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Software Development",
    "sectorEvidence": "The fast-growing AI software creation platform that helps anyone build full-stack, production-ready web and mobile applications",
    "role": "lead",
    "coInvestors": [
      "Khosla Ventures",
      "Prosus",
      "Lightspeed",
      "Together",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260120852493/en/Emergent-Raises-$70M-from-Khosla-Ventures-and-SoftBank-Vision-Fund-2-to-Enable-Anyone-to-Turn-Ideas-into-Monetizable-Software",
    "sourceType": "press-release",
    "evidence": "Emergent has raised $70 million in Series B funding from Khosla Ventures and SoftBank Vision Fund 2, with participation from Prosus, Lightspeed, Together, and Y Combinator."
  },
  {
    "firmSlug": "softbank-vision-fund",
    "company": "Wayve",
    "announcedDate": "2026-02-25",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Autonomous Driving",
    "sectorEvidence": "Wayve, the leader in embodied AI for autonomous driving",
    "role": "lead",
    "coInvestors": [
      "Eclipse",
      "Balderton",
      "Ontario Teachers' Pension Plan",
      "Baillie Gifford",
      "British Business Bank",
      "Icehouse Ventures",
      "Schroders Capital",
      "Microsoft",
      "NVIDIA",
      "Uber",
      "Mercedes-Benz",
      "Nissan",
      "Stellantis"
    ],
    "sourceUrl": "https://wayve.ai/press/series-d/",
    "sourceType": "company-site",
    "evidence": "London, UK, 25 Feb 2026 – Wayve, the leader in embodied AI for autonomous driving, today announced it has raised $1.2 billion in a Series D investment round, bringing its post-money valuation to $8.6 billion. The round was led by Eclipse, Balderton and SoftBank Vision Fund 2, and brings in new investment from Ontario Teachers' Pension Plan, Baillie Gifford, British Business Bank, Icehouse Ventures, Schroders Capital and other global institutional investors."
  },
  {
    "firmSlug": "softbank-vision-fund",
    "company": "OpenAI",
    "announcedDate": "2026-02-27",
    "datePrecision": "day",
    "round": null,
    "sector": "Artificial Intelligence",
    "sectorEvidence": "OpenAI Group PBC operates as a public benefit corporation with the same mission as the OpenAI Foundation-namely, to ensure that artificial general intelligence (AGI) benefits all of humanity.",
    "role": "participant",
    "coInvestors": [],
    "sourceUrl": "https://group.softbank/en/news/press/20260227",
    "sourceType": "press-release",
    "evidence": "SoftBank Group Corp. (“SBG”) today announced that, on February 27, 2026 (U.S. time), it entered into a definitive agreement with OpenAI Group PBC (“OpenAI”), a U.S.-based company, to participate in OpenAI's fundraising round, and to make follow-on investments of USD 30.0 billion via SoftBank Vision Fund 2."
  },
  {
    "firmSlug": "softbank-vision-fund",
    "company": "Kandou AI",
    "announcedDate": "2026-03-24",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Semiconductors",
    "sectorEvidence": "a Saint-Sulpice, Switzerland-based developer of high-speed, energy-efficient connectivity and system solutions for the AI era",
    "role": "participant",
    "coInvestors": [
      "Maverick Silicon",
      "Synopsys",
      "Cadence Design Systems",
      "Alchip Technologies"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/kandou-ai-closes-usd225m-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Kandou AI, a Saint-Sulpice, Switzerland-based developer of high-speed, energy-efficient connectivity and system solutions for the AI era, closed a $225m Series A funding round. The round was led by Maverick Silicon with participation from SoftBank Group, Synopsys, Cadence Design Systems, and Alchip Technologies. [ENTITY NOTE: this source names \"SoftBank Group\", i.e. SoftBank Group Corp., as the investor, NOT the SoftBank Vision Fund. Recorded here per the assignment's instruction to include Group-named participations, flagged so it can be separated later.]"
  },
  {
    "firmSlug": "softbank-vision-fund",
    "company": "Helion",
    "announcedDate": "2026-06-04",
    "datePrecision": "day",
    "round": "Series G",
    "sector": "Fusion Energy",
    "sectorEvidence": "Helion, a Washington-based fusion energy company",
    "role": "participant",
    "coInvestors": [
      "Thrive Capital",
      "Alta Park Capital",
      "Anti Fund",
      "BoxGroup",
      "Lux Capital",
      "Peak XV Partners",
      "Ford Motor Company Executive Chairman Bill Ford",
      "Capricorn Technology Impact Funds",
      "Lightspeed Venture Partners",
      "Mithril Capital",
      "Dustin Moskovitz through Good Ventures Foundation"
    ],
    "sourceUrl": "https://www.helionenergy.com/newsroom/helion-raises-465-million-series-g-funding-round-to-meet-surging-global-demand-for-power",
    "sourceType": "press-release",
    "evidence": "EVERETT, Wash. – June 4, 2026 – Helion, a Washington-based fusion energy company, announced a $465 million Series G investment round to accelerate commercial deployment of fusion, scale manufacturing capacity, and expand the company's ability to deliver clean electricity to customers. This latest round of funding brings the total invested to date in Helion to $1.5 billion and values the company at $15.5 billion post-money. The raise was led by Thrive Capital, with participation from additional new investors, including Alta Park Capital, Anti Fund, BoxGroup, Lux Capital, Peak XV Partners, and Ford Motor Company Executive Chairman Bill Ford, plus existing investors, including Capricorn Technology Impact Funds, Lightspeed Venture Partners, Mithril Capital, Dustin Moskovitz through Good Ventures Foundation, SoftBank Vision Fund 2, and a university endowment fund."
  },
  {
    "firmSlug": "softbank-vision-fund",
    "company": "Zenity",
    "announcedDate": "2026-08-03",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Cybersecurity",
    "sectorEvidence": "Zenity, the AI security and governance platform purpose-built for AI agents",
    "role": "participant",
    "coInvestors": [
      "Norwest",
      "Qumra Capital",
      "Hitachi Ventures",
      "LG Technology Ventures",
      "Vertex Ventures",
      "Third Point Ventures",
      "DTCP",
      "Intel Capital"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260803963850/en/Zenity-Raises-$125-Million-to-Secure-the-Era-of-1-Billion-AI-Agents",
    "sourceType": "press-release",
    "evidence": "Zenity, the AI security and governance platform purpose-built for AI agents, today announced a $125 million Series C led by Norwest. ... New investors Qumra Capital, SoftBank Vision Fund 2, Hitachi Ventures and LG Technology Ventures joined the round, alongside existing investors Vertex Ventures, Third Point Ventures, DTCP and Intel Capital."
  },
  {
    "firmSlug": "spark-capital",
    "company": "Tigris",
    "announcedDate": "2025-10-09",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Cloud Infrastructure",
    "sectorEvidence": "Tigris, founded by the team that developed Uber's storage platform, is building a network of localized data storage centers that it claims can meet the distributed compute needs of modern AI workloads.",
    "role": "lead",
    "coInvestors": [
      "Andreessen Horowitz"
    ],
    "sourceUrl": "https://techcrunch.com/2025/10/09/this-distributed-data-storage-startup-wants-to-take-on-big-cloud/",
    "sourceType": "reputable-press",
    "evidence": "Tigris recently raised a $25 million Series A round that was led by Spark Capital and saw participation from existing investors, which include Andreessen Horowitz, TechCrunch has exclusively learned."
  },
  {
    "firmSlug": "spark-capital",
    "company": "MatX",
    "announcedDate": "2026-02-24",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Chips",
    "sectorEvidence": "MatX, a chip startup founded by two former Google hardware engineers",
    "role": "participant",
    "coInvestors": [
      "Jane Street",
      "Situational Awareness",
      "Marvell Technology",
      "NFDG",
      "Patrick Collison",
      "John Collison"
    ],
    "sourceUrl": "https://techcrunch.com/2026/02/24/nvidia-challenger-ai-chip-startup-matx-raised-500m/",
    "sourceType": "reputable-press",
    "evidence": "MatX, a chip startup founded by two former Google hardware engineers, has raised a $500 million Series B led by Jane Street and Situational Awareness, an investment fund formed by former OpenAI researcher Leopold Aschenbrenner. Other investors in the round include Marvell Technology, NFDG, Spark Capital, and Stripe co-founders Patrick Collison and John Collison, the startup's founder and CEO Reiner Pope announced Tuesday in a post on LinkedIn."
  },
  {
    "firmSlug": "spark-capital",
    "company": "Gambit Security",
    "announcedDate": "2026-02-25",
    "datePrecision": "day",
    "round": "Seed and Series A",
    "sector": "Cybersecurity",
    "sectorEvidence": "Gambit Security's AI-native resilience platform connects to all environments, security solutions, and backup tools to autonomously map an organization's infrastructure and backup data, uncovering gaps that break static recovery plans and put continuity at risk.",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Cyberstarts"
    ],
    "sourceUrl": "https://www.accessnewswire.com/newsroom/en/computers-technology-and-internet/gambit-security-raises-61m-to-set-the-standard-for-enterprise-res-1139788",
    "sourceType": "press-release",
    "evidence": "Backed by Spark Capital, Kleiner Perkins, and Cyberstarts, Gambit Security is the first AI-native resilience platform trusted by enterprises to deliver verifiable, continuous resilience, exposing hidden risks before they become catastrophic downtime."
  },
  {
    "firmSlug": "spark-capital",
    "company": "Latent",
    "announcedDate": "2026-03",
    "datePrecision": "month",
    "round": "Series A",
    "sector": "Healthcare AI",
    "sectorEvidence": "Latent, the clinical-AI company accelerating access to life-saving medications, has raised an $80M Series A co-led by Spark Capital and Transformation Capital, with participation from Conviction, McKesson Ventures, General Catalyst, and Y Combinator.",
    "role": "lead",
    "coInvestors": [
      "Transformation Capital",
      "Conviction",
      "McKesson Ventures",
      "General Catalyst",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260330515802/en/Latent-Raises-$80M-to-Close-the-Gap-Between-Diagnosis-and-Treatment",
    "sourceType": "press-release",
    "evidence": "Latent, the clinical-AI company accelerating access to life-saving medications, has raised an $80M Series A co-led by Spark Capital and Transformation Capital, with participation from Conviction, McKesson Ventures, General Catalyst, and Y Combinator."
  },
  {
    "firmSlug": "spark-capital",
    "company": "Granola",
    "announcedDate": "2026-03-25",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Enterprise AI",
    "sectorEvidence": "Granola is an AI-powered meeting notepad that captures conversation transcripts and turns them into actionable, company-wide context.",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "Index Ventures",
      "Lightspeed Venture Partners",
      "NFDG"
    ],
    "sourceUrl": "https://www.thesaasnews.com/news/granola-raises-125m-series-c-at-1-5b-valuation/",
    "sourceType": "reputable-press",
    "evidence": "The round was led by Danny Rimer of Index Ventures, with participation from Mamoon Hamid of Kleiner Perkins, along with existing investors Lightspeed Venture Partners, Spark Capital, and NFDG, bringing Granola's total funding to $192 million."
  },
  {
    "firmSlug": "spark-capital",
    "company": "Parallel Web Systems",
    "announcedDate": "2026-04-29",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Infrastructure",
    "sectorEvidence": "a Palo Alto, CA-based provider of an infrastructure helping AI agents access and use the open web",
    "role": "participant",
    "coInvestors": [
      "Sequoia Capital",
      "Kleiner Perkins",
      "Index Ventures",
      "Khosla Ventures",
      "First Round Capital",
      "Terrain Capital",
      "Abstract Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/parallel-web-systems-raises-100m-in-series-b-funding-at-2-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Parallel Web Systems, a Palo Alto, CA-based provider of an infrastructure helping AI agents access and use the open web, raised $100M in Series B funding, at $2 Billion valuation. The round was led by Sequoia Capital. Other investors included Kleiner Perkins, Index Ventures, Khosla Ventures, First Round Capital, Spark Capital, Terrain Capital, and Abstract Ventures."
  },
  {
    "firmSlug": "spark-capital",
    "company": "Mercury",
    "announcedDate": "2026-05-20",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Fintech",
    "sectorEvidence": "Mercury, a San Francisco, CA-based fintech company developing financial operating systems",
    "role": "participant",
    "coInvestors": [
      "TCV",
      "Andreessen Horowitz",
      "Coatue",
      "CRV",
      "Sapphire Ventures",
      "Sequoia Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/mercury-raises-200m-series-d-funding-at-5-2b-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Mercury, a San Francisco, CA-based fintech company developing financial operating systems, raised $200M in Series D funding, at $5.2 Billion valuation. The round was led by TCV with participation from Andreessen Horowitz, Coatue, CRV, Sapphire Ventures, Sequoia Capital, and Spark Capital."
  },
  {
    "firmSlug": "spark-capital",
    "company": "Novellia",
    "announcedDate": "2026-06-02",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Digital Health",
    "sectorEvidence": "Novellia, a New York City-based developer of a patient-powered real-world data and personal health records platform",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "Acrew Capital",
      "Bling Capital",
      "TMV"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/novellia-raises-18m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Novellia, a New York City-based developer of a patient-powered real-world data and personal health records platform, raised $18m in Series A funding. The round, which brought total funding raised to date to $28m, was led by Spark Capital, with participation from Khosla Ventures, Acrew Capital, Bling Capital, and TMV."
  },
  {
    "firmSlug": "spark-capital",
    "company": "Cyera",
    "announcedDate": "2026-06-10",
    "datePrecision": "day",
    "round": null,
    "sector": "Data Security",
    "sectorEvidence": "Over the last year, Cyera has shipped more than 100 new product capabilities across Data Security Posture Management (DSPM), privacy, identity, Data Loss Prevention (DLP), and agentic security, building what is now a comprehensive trust layer for the enterprise.",
    "role": "participant",
    "coInvestors": [
      "Evolution Equity Partners",
      "Cyberstarts",
      "Temasek",
      "Accel",
      "AT&T Ventures",
      "Blackstone",
      "Coatue"
    ],
    "sourceUrl": "https://www.cyera.com/press-releases/cyera-raises-600-million-at-12-billion-valuation-to-continue-building-the-trust-layer-for-the-ai-era",
    "sourceType": "press-release",
    "evidence": "This round was led by Evolution Equity Partners, with participation from Cyberstarts and Temasek, in addition to all existing investors including Accel, AT&T Ventures, Blackstone, Coatue, Spark Capital, among others. Cyera is now positioned as one of the most valuable privately held security companies in the world with total funding over $2 billion."
  },
  {
    "firmSlug": "spark-capital",
    "company": "Baseten",
    "announcedDate": "2026-06-19",
    "datePrecision": "day",
    "round": null,
    "sector": "AI Infrastructure",
    "sectorEvidence": "a San Francisco, CA-based developer of artificial intelligence model deployment and serverless compute infrastructure",
    "role": "lead",
    "coInvestors": [
      "Altimeter Capital",
      "Conviction",
      "Sands Capital",
      "Wellington Management",
      "IVP",
      "Greylock",
      "01A",
      "Blackbird",
      "Durable Capital Partners",
      "Verified Capital",
      "Battery Ventures",
      "D. E. Shaw Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/baseten-to-close-1-5-billion-funding-round.html",
    "sourceType": "reputable-press",
    "evidence": "Baseten, a San Francisco, CA-based developer of artificial intelligence model deployment and serverless compute infrastructure, closed a $1.5 billion funding round. The round was led by Altimeter Capital, Conviction, and Spark Capital, with participation from Sands Capital and Wellington Management (co-leads), as well as IVP, Greylock, 01A, Blackbird, Durable Capital Partners, Verified Capital, Battery Ventures, and D. E. Shaw Ventures."
  },
  {
    "firmSlug": "spark-capital",
    "company": "XDOF",
    "announcedDate": "2026-06-19",
    "datePrecision": "day",
    "round": null,
    "sector": "Physical AI Data",
    "sectorEvidence": "XDOF, a Berkeley, California-based developer of data engineering pipelines and annotation systems for physical artificial intelligence",
    "role": null,
    "coInvestors": [
      "Lux Capital",
      "Thrive Capital",
      "Andreessen Horowitz",
      "WndrCo"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/xdof-raises-70m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "XDOF, a Berkeley, California-based developer of data engineering pipelines and annotation systems for physical artificial intelligence, raised $70m in funding. Backers included Thrive Capital, Spark Capital, Andreessen Horowitz, Lux Capital, and WndrCo."
  },
  {
    "firmSlug": "spark-capital",
    "company": "Cadence",
    "announcedDate": "2026-06-23",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Healthcare",
    "sectorEvidence": "Cadence, the clinical AI company managing chronic care for older adults, announced a $100 million Series C, amid adoption of its AI-powered care model across the nation's leading health systems.",
    "role": "lead",
    "coInvestors": [
      "Thrive Capital",
      "General Catalyst",
      "Coatue",
      "B Capital",
      "Corewell Health Ventures",
      "Memorial Hermann",
      "Duke Health"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260623072271/en/Cadence-Raises-$100M-Series-C-Led-by-Spark-Capital-to-Automate-Chronic-Care",
    "sourceType": "press-release",
    "evidence": "Cadence Raises $100M Series C Led by Spark Capital to Automate Chronic Care"
  },
  {
    "firmSlug": "spark-capital",
    "company": "Higharc",
    "announcedDate": "2026-06-30",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Construction Tech",
    "sectorEvidence": "Higharc, a Durham, North Carolina-based developer of a generative AI platform for the homebuilding and residential construction lifecycle",
    "role": null,
    "coInvestors": [
      "Lux Capital",
      "Insight Partners",
      "Wellington Management",
      "Fifth Wall",
      "SE Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/higharc-raises-95m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Higharc, a Durham, North Carolina-based developer of a generative AI platform for the homebuilding and residential construction lifecycle, raised $95m in Series C funding. The round, which brought total capital raised to more than $170m, was led by Insight Partners, with participation from Wellington Management, Fifth Wall, Spark Capital, Lux Capital, and SE Ventures."
  },
  {
    "firmSlug": "spark-capital",
    "company": "Lumilens",
    "announcedDate": "2026-08-06",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Semiconductors",
    "sectorEvidence": "Lumilens, the connectivity platform for AI infrastructure, today emerged from stealth, having been founded to solve the growing networking bottlenecks limiting AI scale.",
    "role": "lead",
    "coInvestors": [
      "Addition",
      "Aiconic",
      "Alkeon",
      "Atreides Capital",
      "Bain Capital Ventures",
      "EDBI",
      "Harbourvest",
      "J.P. Morgan Private Capital",
      "Lingotto",
      "Mayfield",
      "Meritech",
      "MVP Ventures",
      "Peak XV",
      "Qualcomm Ventures",
      "Redpoint Ventures",
      "Seifdune",
      "Seligman Ventures",
      "Thomvest Ventures"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260806444241/en/Lumilens-Emerges-from-Stealth-with-More-Than-$900-Million-in-Funding-to-Break-AIs-Connectivity-Bottlenecks-in-the-Data-Center",
    "sourceType": "press-release",
    "evidence": "James Kuklinski, General Partner at Spark Capital ... We first partnered with Lumilens by leading the Series B in early 2025 and are thrilled to have doubled down to co-lead the Series C financing, given the team's rapid execution, vast ambition, and the scale of the market opportunity ahead."
  },
  {
    "firmSlug": "spark-capital",
    "company": "Neros Technologies",
    "announcedDate": "2026-08-11",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Defense Tech",
    "sectorEvidence": "Neros is building a new era of credible deterrence for America and its allies by establishing a domestic drone industrial base in the United States.",
    "role": "participant",
    "coInvestors": [
      "Sequoia Capital",
      "American Strategic Technology Fund (ASTF)",
      "Interlagos",
      "Valor Equity Partners",
      "Allen & Company",
      "Thiel Capital",
      "Dylan Field"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/neros-raises-250m-series-c-at-2-5b-valuation-to-scale-autonomous-and-interceptor-drone-programs-302848736.html",
    "sourceType": "press-release",
    "evidence": "NEROS RAISES $250M SERIES C AT $2.5B VALUATION TO SCALE AUTONOMOUS AND INTERCEPTOR DRONE PROGRAMS ... The round was co-led by Sequoia Capital and American Strategic Technology Fund (ASTF) with participation by Interlagos, Valor Equity Partners, Allen & Company, Thiel Capital, Spark Capital, and Dylan Field."
  },
  {
    "firmSlug": "tcv",
    "company": "Cloudsmith",
    "announcedDate": "2026-04-23",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Software Supply Chain",
    "sectorEvidence": "a Belfast, Northern Ireland, UK-based universal artifact management platform provider",
    "role": "lead",
    "coInvestors": [
      "Insight Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/cloudsmith-raises-72m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Cloudsmith, a Belfast, Northern Ireland, UK-based universal artifact management platform provider, raised $72M Series C funding. The round was led by TCV and with participation from Insight Partners, along with investments from other existing investors."
  },
  {
    "firmSlug": "tcv",
    "company": "Actively AI",
    "announcedDate": "2026-04-28",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Go-to-Market Software",
    "sectorEvidence": "a NYC-based company developing a go-to-market platform",
    "role": "lead",
    "coInvestors": [
      "First Harmonic",
      "Bain Capital Ventures",
      "First Round Capital",
      "Alkeon"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/04/actively-raises-45m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Actively, a NYC-based company developing a go-to-market platform, raised $45M in Series B funding. The round was co-led by TCV and First Harmonic, with participation from investors Bain Capital Ventures, First Round Capital, and Alkeon."
  },
  {
    "firmSlug": "tcv",
    "company": "Corgi",
    "announcedDate": "2026-05-06",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Insurtech",
    "sectorEvidence": "Corgi announced today it has raised $160 million in Series B funding at a $1.3 billion valuation, advancing its mission to build the first AI-native, full-stack insurance platform for startups.",
    "role": "lead",
    "coInvestors": [
      "Oliver Jung",
      "Leblon Capital",
      "Kindred Ventures",
      "Repeat VC",
      "Zone 2 Ventures",
      "Audeo Ventures",
      "Quadri Ventures",
      "First Order Fund",
      "Vocal Ventures",
      "Maiora Ventures",
      "Nordstar",
      "Seven Stars Ventures",
      "Hexa Capital",
      "Alpha Square Group",
      "GSBackers",
      "OurCrowd",
      "Alumni Ventures",
      "Global Growth Fund"
    ],
    "sourceUrl": "https://finance.yahoo.com/sectors/technology/articles/corgi-raises-160-million-series-160000034.html",
    "sourceType": "press-release",
    "evidence": "Corgi announced today it has raised $160 million in Series B funding at a $1.3 billion valuation... The round was led by TCV, with participation from both existing and new investors including Oliver Jung, Leblon Capital, Kindred Ventures, Repeat VC, Zone 2 Ventures, Audeo Ventures, Quadri Ventures, First Order Fund, Vocal Ventures, Maiora Ventures, Nordstar, Seven Stars Ventures, Hexa Capital, Alpha Square Group, GSBackers, OurCrowd, Alumni Ventures, Global Growth Fund, and other strategic investors."
  },
  {
    "firmSlug": "tcv",
    "company": "Corgi",
    "announcedDate": "2026-05-07",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Insurtech",
    "sectorEvidence": "a San Francisco, CA-based insurance carrier service built for startups",
    "role": "lead",
    "coInvestors": [
      "Oliver Jung",
      "Leblon Capital",
      "Kindred Ventures",
      "Repeat VC",
      "Zone 2 Ventures",
      "Audeo Ventures",
      "Quadri Ventures",
      "First Order Fund",
      "Vocal Ventures",
      "Maiora Ventures",
      "Nordstar",
      "Seven Stars Ventures",
      "Hexa Capital",
      "Alpha Square Group",
      "GSBackers",
      "OurCrowd",
      "Alumni Ventures",
      "Global Growth Fund"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/corgi-raises-160m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Corgi, a San Francisco, CA-based insurance carrier service built for startups, raised $160M in Series B funding, at a $1.3 billion valuation. The round was led by TCV, with participation from both existing and new investors including Oliver Jung, Leblon Capital, Kindred Ventures, Repeat VC, Zone 2 Ventures, Audeo Ventures, Quadri Ventures, First Order Fund, Vocal Ventures, Maiora Ventures, Nordstar, Seven Stars Ventures, Hexa Capital, Alpha Square Group, GSBackers, OurCrowd, Alumni Ventures, Global Growth Fund, and other strategic investors."
  },
  {
    "firmSlug": "tcv",
    "company": "Mercury",
    "announcedDate": "2026-05-20",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Fintech",
    "sectorEvidence": "Creating a radically different way for founders to do banking is the reason Jason, Max, and I started Mercury in 2017.",
    "role": "lead",
    "coInvestors": [
      "Andreessen Horowitz",
      "Coatue",
      "CRV",
      "Sapphire Ventures",
      "Sequoia Capital",
      "Spark Capital"
    ],
    "sourceUrl": "https://mercury.com/blog/series-d-announcement",
    "sourceType": "company-site",
    "evidence": "Today, we're announcing Mercury's $200M Series D at a $5.2B valuation, led by TCV."
  },
  {
    "firmSlug": "tcv",
    "company": "Corgi",
    "announcedDate": "2026-05-28",
    "datePrecision": "day",
    "round": "Series B1",
    "sector": "Insurtech",
    "sectorEvidence": "a San Francisco, CA-based provider of an insurance platform",
    "role": "lead",
    "coInvestors": [
      "Prime Capital",
      "Zone 2 Ventures",
      "Oliver Jung",
      "Leblon Capital",
      "Kindred Ventures",
      "Quadri Ventures",
      "First Order Fund",
      "Vocal Ventures",
      "Nordstar",
      "GSBackers",
      "Repeat Ventures",
      "8188 Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/05/corgi-raises-106m-in-series-b1-funding-at-2-6b-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Corgi, a San Francisco, CA-based provider of an insurance platform, raised $161M in Series B1 funding, at $2.6B valuation. The round was led by TCV with participation from Prime Capital, Zone 2 Ventures, Oliver Jung, Leblon Capital, Kindred Ventures, Quadri Ventures, First Order Fund, Vocal Ventures, Nordstar, GSBackers, Repeat Ventures, 8188 Capital, and other strategic investors."
  },
  {
    "firmSlug": "tcv",
    "company": "ICEYE",
    "announcedDate": "2026-06-09",
    "datePrecision": "day",
    "round": "Series F",
    "sector": "Space Technology",
    "sectorEvidence": "a Helsinki, Finland-based company which specializes in sovereign intelligence from space",
    "role": "participant",
    "coInvestors": [
      "General Atlantic",
      "Solidium",
      "Tesi",
      "Varma",
      "Ilmarinen",
      "Lifeline Ventures",
      "Nokia",
      "Qatar Investment Authority (QIA)"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/06/iceye-raises-over-1-billion-in-series-f-funding.html",
    "sourceType": "reputable-press",
    "evidence": "ICEYE, a Helsinki, Finland-based company which specializes in sovereign intelligence from space, raised EUR 450M in a primary Series F funding, at a valuation of over EUR 10 Billion. The round was led by General Atlantic, with participation from Solidium, Tesi, Varma, Ilmarinen, Lifeline Ventures, as well as Nokia, from Finland, Qatar Investment Authority (QIA) and TCV."
  },
  {
    "firmSlug": "tcv",
    "company": "Fireworks",
    "announcedDate": "2026-07-16",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Fireworks, the platform for specialized intelligence, enabling companies like Uber and Shopify to train and serve custom models",
    "role": "lead",
    "coInvestors": [
      "Atreides Management",
      "Index Ventures",
      "Evantic",
      "Lightspeed Venture Partners",
      "NVIDIA",
      "20VC",
      "Bessemer Venture Partners",
      "Insight Partners",
      "Lone Pine Capital",
      "Menlo Ventures",
      "Operator Collective",
      "Ontario Teachers' Pension Plan",
      "Original Capital",
      "Prysm Capital",
      "Quantum Capital",
      "TIME Ventures"
    ],
    "sourceUrl": "https://finance.yahoo.com/technology/ai/articles/fireworks-raises-1-5-billion-130000636.html",
    "sourceType": "press-release",
    "evidence": "Fireworks, the platform for specialized intelligence, enabling companies like Uber and Shopify to train and serve custom models, today announced a $1.505 billion Series D round at a $17.5 billion valuation. The round was led by Atreides Management, Index Ventures, and TCV, with participation from existing investors Evantic, Lightspeed Venture Partners, and NVIDIA."
  },
  {
    "firmSlug": "tcv",
    "company": "Onyx Security",
    "announcedDate": "2026-07-29",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Cybersecurity",
    "sectorEvidence": "Onyx Security, the AI control company, announced a $113 million Series B funding round led by Bessemer Venture Partners",
    "role": "participant",
    "coInvestors": [
      "Bessemer Venture Partners",
      "Cyberstarts",
      "Conviction",
      "FirstMark",
      "Vintage",
      "QuantumLight",
      "G Squared"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260729713522/en/",
    "sourceType": "press-release",
    "evidence": "Onyx Security, the AI control company, announced a $113 million Series B funding round led by Bessemer Venture Partners, with participation from Cyberstarts, TCV, Conviction, FirstMark, Vintage, QuantumLight and G Squared."
  },
  {
    "firmSlug": "threshold-ventures",
    "company": "Attuned Intelligence",
    "announcedDate": "2025-10-07",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Healthcare AI",
    "sectorEvidence": "Attuned Intelligence enables hospitals and health systems to answer every patient call with up to 70% automation and real-time supervision.",
    "role": "lead",
    "coInvestors": [
      "Radical Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2025/10/attuned-intelligence-raises-13m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Attuned Intelligence, an Orlando, FL-based healthcare AI company, raised $13M in Seed funding. The round was led by Radical Ventures and Threshold Ventures."
  },
  {
    "firmSlug": "threshold-ventures",
    "company": "Spellbook",
    "announcedDate": "2025-10-09",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Legal Tech",
    "sectorEvidence": "AI solution for transactional lawyers, serving nearly 4,000 law firms and in-house legal teams across 80 countries",
    "role": "participant",
    "coInvestors": [
      "Khosla Ventures",
      "Inovia Capital",
      "Bling Capital",
      "Moxxie Ventures",
      "Path Ventures",
      "Jean-Michel Lemieux"
    ],
    "sourceUrl": "https://www.lawnext.com/2025/10/spellbook-raises-50m-series-b-to-expand-ai-contract-review-platform.html",
    "sourceType": "reputable-press",
    "evidence": "Spellbook, often described as 'Cursor for contracts,' today announced a $50 million USD Series B funding round led by Keith Rabois, Managing Director at Khosla Ventures, with participation from Threshold Ventures, and existing investors Inovia Capital, Bling Capital, Moxxie Ventures, Path Ventures and Jean-Michel Lemieux."
  },
  {
    "firmSlug": "threshold-ventures",
    "company": "Adaption Labs",
    "announcedDate": "2026-02-06",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Artificial Intelligence",
    "sectorEvidence": "Adaption Labs, a San Francisco, CA-based adaptive intelligence startup",
    "role": "participant",
    "coInvestors": [
      "Emergence Capital Partners",
      "Mozilla Ventures",
      "Fifty Years",
      "Alpha Intelligence Capital",
      "E14 Fund",
      "Neo"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/02/adaption-labs-raises-50m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Adaption Labs, a San Francisco, CA-based adaptive intelligence startup, raised $50m in seed funding. The round was led by Emergence Capital Partners with participation from Mozilla Ventures, Fifty Years, Threshold Ventures, Alpha Intelligence Capital, E14 Fund, and Neo."
  },
  {
    "firmSlug": "threshold-ventures",
    "company": "Inertia",
    "announcedDate": "2026-02-11",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Fusion Energy",
    "sectorEvidence": "Inertia is the commercial fusion energy company.",
    "role": "participant",
    "coInvestors": [
      "Bessemer Venture Partners",
      "GV (Google Ventures)",
      "Modern Capital",
      "Neo",
      "Uncork Capital",
      "Long Journey Ventures",
      "WndrCo",
      "IQT"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2026/02/11/3236274/0/en/Inertia-raises-450-million-to-commercialize-the-only-proven-fusion-science.html",
    "sourceType": "press-release",
    "evidence": "Inertia raises $450 million to commercialize the only proven fusion science ... The Series A round was led by Bessemer Venture Partners, with participation from additional firms including GV (Google Ventures), Modern Capital, Threshold Ventures, and more."
  },
  {
    "firmSlug": "threshold-ventures",
    "company": "Inertia Enterprises",
    "announcedDate": "2026-02-11",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Fusion Energy",
    "sectorEvidence": "In Inertia's flavor of inertial confinement, lasers bombard a fuel target, compressing the fuel until atoms inside fuse and release energy.",
    "role": "participant",
    "coInvestors": [
      "Bessemer Venture Partners",
      "GV",
      "Modern Capital"
    ],
    "sourceUrl": "https://techcrunch.com/2026/02/11/twilio-co-founders-fusion-power-startup-raises-450m-from-bessemer-and-alphabets-gv/",
    "sourceType": "reputable-press",
    "evidence": "The Series A was led by Bessemer Venture Partners with participation from GV, Modern Capital, Threshold Ventures, and others. Inertia's co-founders include Jeff Lawson, who co-founded and led Twilio; Annie Kritcher, who led the successful experiments at NIF; and Mike Dunne, a Stanford professor who helped Lawrence Livermore develop a power plant design based on NIF."
  },
  {
    "firmSlug": "threshold-ventures",
    "company": "Sequen",
    "announcedDate": "2026-03-17",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Enterprise Software",
    "sectorEvidence": "Sequen AI delivers dynamic, in-session personalization for enterprise consumer companies, turning relevance into a revenue engine that drives material business outcomes.",
    "role": "lead",
    "coInvestors": [
      "White Star Capital",
      "Greycroft"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260317105541/en/Sequen-Raises-$16M-Series-A-to-Bring-Sub-second-In-session-Personalization-to-Enterprise-Consumer-Companies",
    "sourceType": "press-release",
    "evidence": "Sequen today announced a $16 million Series A funding round, bringing total funding to $22 million to bring sub-second in-session personalization and behavior optimization to the enterprise. The round was co-led by White Star Capital and Threshold Ventures, with participation from all existing investors including Greycroft, which led the company's seed round."
  },
  {
    "firmSlug": "threshold-ventures",
    "company": "Sequen",
    "announcedDate": "2026-03-18",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Personalization Software",
    "sectorEvidence": "offers real-time personalization technology and ranking infrastructure - technology used by the world's biggest tech firms but that has been inaccessible to other large consumer businesses because of the massive datasets required",
    "role": "lead",
    "coInvestors": [
      "White Star Capital",
      "Greycroft"
    ],
    "sourceUrl": "https://techcrunch.com/2026/03/18/sequen-snags-16m-to-bring-tiktok-style-personalization-tech-to-any-consumer-company/",
    "sourceType": "reputable-press",
    "evidence": "Sequen's Series A was co-led by White Star Capital and Threshold Ventures, with participation from its prior investors, including Greycroft, which had led its seed round."
  },
  {
    "firmSlug": "threshold-ventures",
    "company": "Bluefish",
    "announcedDate": "2026-04-14",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Marketing Technology",
    "sectorEvidence": "Bluefish, the Agentic Marketing Platform (AMP) for Fortune 500 brands",
    "role": "lead",
    "coInvestors": [
      "NEA",
      "Amex Ventures",
      "TIAA Ventures",
      "Salesforce Ventures",
      "Bloomberg Beta",
      "Crane Venture Partners",
      "Laconia",
      "Swift Ventures"
    ],
    "sourceUrl": "https://www.bluefishai.com/blog/bluefish-raises-43-million-series-b-to-power-agentic-marketing-for-the-fortune-500",
    "sourceType": "company-site",
    "evidence": "Bluefish, the Agentic Marketing Platform (AMP) for Fortune 500 brands, announced the close of $43 million Series B growth financing co-led by Threshold Ventures and NEA with participation from multiple enterprise investors including Amex Ventures, TIAA Ventures, Salesforce Ventures, and continued participation from Bloomberg Beta."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Emergent",
    "announcedDate": "2026-01-20",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Software Development",
    "sectorEvidence": "Emergent, a San Francisco, CA-based provider of an AI software creation platform",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "SoftBank Vision Fund 2",
      "Prosus",
      "Lightspeed",
      "Together"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/emergent-raises-70m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Emergent, a San Francisco, CA-based provider of an AI software creation platform, raised $70M in Series B funding. Bakers included Khosla Ventures and SoftBank Vision Fund 2, with participation from Prosus, Lightspeed, Together, and Y Combinator."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Mine",
    "announcedDate": "2026-01-26",
    "datePrecision": "day",
    "round": null,
    "sector": "Personal Finance",
    "sectorEvidence": "Mine, a NYC-based personal finance company",
    "role": null,
    "coInvestors": [
      "Kleiner Perkins",
      "359 Capital",
      "FJ Labs",
      "U.S. News and World Report"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/01/mine-raises-14m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Mine, a NYC-based personal finance company, raised $14M in funding. The round was led by 359 Capital with participation from Kleiner Perkins, FJ Labs, Y Combinator and U.S. News and World Report."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Kombo",
    "announcedDate": "2026-02-18",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "HR Tech",
    "sectorEvidence": "We sit at the center of the interoperability problem, providing the infrastructure layer for the flow of all people data - from hire to retire.",
    "role": "participant",
    "coInvestors": [
      "Volition Capital",
      "Acadian Ventures",
      "468 Capital"
    ],
    "sourceUrl": "https://www.kombo.dev/blog/series-a",
    "sourceType": "company-site",
    "evidence": "I'm excited to announce that Kombo has raised a $25M Series A to solve the integration challenge of the global workforce ecosystem. [...] Volition Capital led the round with participation from existing investors: Acadian Ventures, 468 Capital, and Y Combinator."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Science",
    "announcedDate": "2026-03-06",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Neurotech",
    "sectorEvidence": "Science, an Alameda, CA-based full-stack neural engineering company focused on restoring and extending life",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "Lightspeed Venture Partners",
      "IQT",
      "Quiet Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/03/science-closes-230m-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Science, an Alameda, CA-based full-stack neural engineering company focused on restoring and extending life, closed a $230m Series C financing round. Backers included Lightspeed Venture Partners, Khosla Ventures, Y Combinator, IQT, and Quiet Capital, among others."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Juicebox",
    "announcedDate": "2026-03-10",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "HR Tech",
    "sectorEvidence": "Juicebox deploys agents to search across a comprehensive talent graph, surface candidates who match open roles, and reach them with targeted outreach at a speed and scale no human team could maintain on its own.",
    "role": "participant",
    "coInvestors": [
      "DST Global",
      "Sequoia",
      "Coatue",
      "NFDG",
      "Verified Capital"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260310781820/en/Juicebox-Raises-$80M-at-$850M-Valuation-to-Help-Businesses-Reach-Top-Talent-Before-Anyone-Else-Does",
    "sourceType": "press-release",
    "evidence": "Juicebox, the AI recruiting platform, today announced $80 million in Series B funding at an $850 million valuation led by DST Global, with meaningful participation from Sequoia, Coatue, Y Combinator, NFDG, and Verified Capital."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Replit",
    "announcedDate": "2026-03-11",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Developer Tools",
    "sectorEvidence": "Georgian ... first invested in Replit's Series C late last year and is now doubling down as the company expands its position in AI-powered software creation.",
    "role": "participant",
    "coInvestors": [
      "Georgian",
      "G Squared",
      "Prysm Capital",
      "Coatue",
      "Andreessen Horowitz (a16z)",
      "Craft Ventures",
      "Accenture Ventures",
      "Okta Ventures",
      "Databricks Ventures"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/georgian-leads-400m-series-d-investment-in-replit-to-support-continued-investment-in-replit-agent-302711218.html",
    "sourceType": "press-release",
    "evidence": "Georgian...has led a $400 million Series D investment in Replit, valuing the company at $9 billion. [...] Georgian is joined in the round by partners including G Squared, Prysm Capital, Coatue, Andreessen Horowitz (a16z), Craft Ventures, Y Combinator, Accenture Ventures, Okta Ventures and Databricks Ventures among others."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Glimpse",
    "announcedDate": "2026-03-25",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "CPG Software",
    "sectorEvidence": "Glimpse says it helps with this process by reviewing deductions, flagging invalid ones, and filing disputes, helping companies recover money they may have missed or lost.",
    "role": "participant",
    "coInvestors": [
      "Andreessen Horowitz",
      "8VC"
    ],
    "sourceUrl": "https://techcrunch.com/2026/03/25/a16z-backed-glimpse-raises-new-funds-accelerates-dispute-tracking-automation-for-cpg-brands/",
    "sourceType": "reputable-press",
    "evidence": "Glimpse announced Wednesday that it raised a $35 million Series A led by Andreessen Horowitz, with participation from 8VC and Y Combinator."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Auctor",
    "announcedDate": "2026-04-15",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Enterprise Software",
    "sectorEvidence": "Auctor's platform aims to be the AI System of Action for Enterprise Software implementation, curating execution-ready artifacts and ensuring teams understand decisions and their impact.",
    "role": "participant",
    "coInvestors": [
      "Sequoia Capital",
      "M12, Microsoft's Venture Fund",
      "HubSpot Ventures",
      "Workday Ventures",
      "OneStream",
      "Tercera"
    ],
    "sourceUrl": "https://www.startuphub.ai/ai-news/funding-round/2026/auctor-secures-20m-series-a-led-by-sequoia",
    "sourceType": "reputable-press",
    "evidence": "Auctor, a startup building an AI system of action for the enterprise software implementation market, has raised $20 million in a Series A round led by Sequoia Capital. [...] The Series A round saw participation from M12, Microsoft's Venture Fund, HubSpot Ventures, Workday Ventures, OneStream, Y Combinator, and Tercera."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Slash",
    "announcedDate": "2026-04-15",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Fintech",
    "sectorEvidence": "Slash Financial, Inc. is a banking platform built for modern businesses [...] combines FDIC-insured business checking, corporate cards with uncapped cashback rewards, expense management, treasury management, global payments, and stablecoin support into a single platform.",
    "role": "participant",
    "coInvestors": [
      "Ribbit Capital",
      "Khosla Ventures",
      "Goodwater Capital",
      "New Enterprise Associates"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260415566517/en/Slash-Achieves-Unicorn-Status-Following-$100m-Series-C-Fundraise",
    "sourceType": "press-release",
    "evidence": "Slash Financial, Inc., the banking platform built for modern businesses, is now valued at $1.4 billion following a $100m Series C funding round led by Ribbit Capital. [...] New Enterprise Associates and Y Combinator also participated in the round and are investing in Slash for a fourth time."
  },
  {
    "firmSlug": "y-combinator",
    "company": "10x Science",
    "announcedDate": "2026-04-22",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Life Sciences Software",
    "sectorEvidence": "10x Science's platform combines deterministic algorithms rooted in chemistry and biology with AI agents that can interpret that data.",
    "role": null,
    "coInvestors": [
      "Initialized Capital",
      "Civilization Ventures",
      "Founder Factor"
    ],
    "sourceUrl": "https://techcrunch.com/2026/04/22/ai-is-spitting-out-more-potential-drugs-than-ever-this-start-up-wants-to-figure-out-which-ones-matter/",
    "sourceType": "reputable-press",
    "evidence": "10x Science, a startup founded in December 2025 that announced a $4.8 million seed round today, led by Initialized Capital and with backing from Y Combinator, Civilization Ventures, and Founder Factor."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Hightouch",
    "announcedDate": "2026-04-29",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Marketing Tech",
    "sectorEvidence": "Hightouch, a data and AI platform focused on enterprise marketing, has raised $150 million in Series D financing led by Growth Equity at Goldman Sachs Alternatives and Bain Capital Ventures, valuing the company at $2.75 billion.",
    "role": "participant",
    "coInvestors": [
      "Growth Equity at Goldman Sachs Alternatives",
      "Bain Capital Ventures",
      "Iconiq Capital",
      "Sapphire Ventures",
      "Amplify Partners",
      "TD7"
    ],
    "sourceUrl": "https://www.citybiz.co/article/838927/hightouch-raises-150-million-series-d-at-2-75-billion-valuation/",
    "sourceType": "reputable-press",
    "evidence": "Hightouch, a data and AI platform focused on enterprise marketing, has raised $150 million in Series D financing led by Growth Equity at Goldman Sachs Alternatives and Bain Capital Ventures, valuing the company at $2.75 billion. [...] Additional participants in the round included Iconiq Capital, Sapphire Ventures, Amplify Partners, Y Combinator and TD7, the venture investment arm of The Trade Desk."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Supabase",
    "announcedDate": "2026-06-04",
    "datePrecision": "day",
    "round": "Series F",
    "sector": "Developer Infrastructure",
    "sectorEvidence": "Supabase, the open source Postgres development platform, today announced a $500 million Series F at a $10.5 billion post-money valuation.",
    "role": "participant",
    "coInvestors": [
      "GIC",
      "Accel",
      "Craft",
      "Felicis",
      "Peak XV",
      "Coatue"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/supabase-raises-500m-at-10-5b-to-accelerate-lead-in-agentic-infrastructure-302791787.html",
    "sourceType": "press-release",
    "evidence": "Supabase, the open source Postgres development platform, today announced a $500 million Series F at a $10.5 billion post-money valuation. The round was led by GIC with all existing investors participating including Accel, Y Combinator, Craft, Felicis, Peak XV, and Coatue."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Ploy",
    "announcedDate": "2026-06-17",
    "datePrecision": "day",
    "round": "seed",
    "sector": "Marketing Tech",
    "sectorEvidence": "an all-in-one marketing platform built around the website - the hub that connects every growth channel.",
    "role": "lead",
    "coInvestors": [
      "First Round Capital"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/ploy-raises-27m-to-turn-your-companys-website-into-your-hardest-working-employee-302803231.html",
    "sourceType": "press-release",
    "evidence": "Ploy today launched out of stealth with $27 million seed led by First Round Capital and Y Combinator."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Taktile",
    "announcedDate": "2026-06-22",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Fintech",
    "sectorEvidence": "Taktile enables financial institutions to transform into AI-native organizations that are increasingly powered by autonomous agents.",
    "role": "participant",
    "coInvestors": [
      "Growth Equity at Goldman Sachs Alternatives",
      "Balderton Capital",
      "Index Ventures",
      "Tiger Global",
      "Dig Ventures"
    ],
    "sourceUrl": "https://taktile.com/articles/taktile-secures-110m-in-goldman-sachs-led-series-c-to-power-ai-transformation-in-financial-institutions",
    "sourceType": "company-site",
    "evidence": "Taktile, the leader in AI transformation for financial institutions, today announced its $110 million Series C fundraise. Growth Equity at Goldman Sachs Alternatives led the round, with participation from Balderton Capital, Index Ventures, Tiger Global, Y Combinator, and Dig Ventures."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Weave",
    "announcedDate": "2026-07-28",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Engineering Analytics",
    "sectorEvidence": "Weave, the engineering-intelligence layer for the AI era",
    "role": "participant",
    "coInvestors": [
      "Standard Capital",
      "Moonfire",
      "Burst Capital",
      "IrregEx",
      "the Agent Fund"
    ],
    "sourceUrl": "https://www.webwire.com/ViewPressRel.asp?aId=358199",
    "sourceType": "company-announcement",
    "evidence": "Weave, the engineering-intelligence layer for the AI era, today announced a $13.5 million Series A led by Standard Capital, along with YCombinator, Moonfire, Burst Capital, IrregEx and the Agent Fund."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Terminal",
    "announcedDate": "2026-07-29",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Insurtech",
    "sectorEvidence": "Terminal offers a universal application programming interface (API) to connect insurance products and fleet software with telematics data.",
    "role": "participant",
    "coInvestors": [
      "Battery Ventures",
      "Wayfinder Ventures",
      "Penske Transportation Solutions",
      "Intact Private Capital"
    ],
    "sourceUrl": "https://betakit.com/y-combinator-grad-terminal-raises-20-million-usd-series-a-round/",
    "sourceType": "reputable-press",
    "evidence": "Y Combinator and Wayfinder Ventures also returned to invest in the round, while Battery Ventures general partner Marcus Ryu will join Terminal's board."
  },
  {
    "firmSlug": "y-combinator",
    "company": "HappyRobot",
    "announcedDate": "2026-08-04",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Enterprise AI Agents",
    "sectorEvidence": "Its platform enables organizations to build, deploy, and manage AI agents that automate complex operational workflows across voice, email, documents, and the web.",
    "role": "participant",
    "coInvestors": [
      "Prysm Capital",
      "Eurazeo",
      "a16z",
      "Base10",
      "Koch Disruptive Technologies",
      "Orange",
      "T.Capital (Deutsche Telekom)",
      "Bankinter",
      "Endeavor Catalyst",
      "Kfund",
      "Wave-X"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260804192350/en/HappyRobot-Raises-$150-Million-Series-C-to-Build-Enterprise-Superintelligence",
    "sourceType": "company-announcement",
    "evidence": "HappyRobot, the company putting AI agents to work across complex enterprise operations, today announced it has raised $150 million in Series C funding led by Prysm Capital and co-led by Eurazeo. ... Existing investors a16z, Base10, Y Combinator are doubling down with participation from strategics like Koch Disruptive Technologies (KDT), Orange, and T.Capital (Deutsche Telekom), Bankinter, Endeavor Catalyst, Kfund and Wave-X."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Naïve",
    "announcedDate": "2026-08-06",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Business Infrastructure",
    "sectorEvidence": "Naïve supplies a prompt that developers can provide to tools like Cursor, Claude Code, or Codex, which can connect to the company's API to provision the infrastructure to set up a business.",
    "role": "participant",
    "coInvestors": [
      "Nexus Venture Partners",
      "Zetta",
      "Liquid 2",
      "Gokul Rajaram",
      "Tim Zheng",
      "JD Sherman"
    ],
    "sourceUrl": "https://techcrunch.com/2026/08/06/naive-raises-28-5m-to-automate-the-grunt-work-of-setting-up-and-running-a-company/",
    "sourceType": "reputable-press",
    "evidence": "Naïve has now raised $28.5 million in a Series A funding round led by Nexus Venture Partners. ... Y Combinator, Zetta, Liquid 2 and angel investors including Gokul Rajaram, Apollo.io co-founder Tim Zheng, and former HubSpot COO JD Sherman also participated in the Series A."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Blacksmith",
    "announcedDate": "2026-08-12",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Developer Tools",
    "sectorEvidence": "Blacksmith helps companies build, test, and verify software before it reaches production.",
    "role": "participant",
    "coInvestors": [
      "Peak XV Partners",
      "GV"
    ],
    "sourceUrl": "https://techcrunch.com/2026/08/12/blacksmiths-valuation-jumps-10x-to-550m-as-ai-coding-fuels-software-validation/",
    "sourceType": "reputable-press",
    "evidence": "The Series B, led by Peak XV Partners, values Blacksmith at $550 million, up from the $60 million valuation it was assigned when it raised a $10 million Series A less than a year ago. Existing investors GV and Y Combinator also participated, bringing the startup's total funding to $58.5 million."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Lemma",
    "announcedDate": "2026-08-13",
    "datePrecision": "day",
    "round": "pre-seed round",
    "sector": "AI Observability",
    "sectorEvidence": "Lemma, a monitoring tool that helps engineering teams catch silent AI agent failures in production",
    "role": "participant",
    "coInvestors": [
      "Matrix",
      "Liquid 2 Ventures",
      "Vermilion Cliffs Ventures",
      "Irregular Expressions",
      "Cervin Ventures",
      "Comma Capital",
      "Position Ventures",
      "Eight Capital"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2026/08/13/3344773/0/en/2-3m-pre-seed-for-lemma-backed-by-matrix-yc-openai-xai-operators-to-fix-silent-ai-agent-failures.html",
    "sourceType": "company-announcement",
    "evidence": "Lemma, a monitoring tool that helps engineering teams catch silent AI agent failures in production, today announced a $2.3 million pre-seed round. ... The round includes participation from Matrix, Y Combinator, Liquid 2 Ventures, Vermilion Cliffs Ventures, Irregular Expressions, Cervin Ventures, Comma Capital, Position Ventures, and Eight Capital, plus angels and operators from OpenAI, xAI, Meta, and DoorDash."
  }
];

/* Per-firm research coverage. This is what lets the engine tell
   "this firm announced nothing" apart from "nobody looked", which
   are identical in a bare row list and must never be conflated.

   complete:false everywhere - see the header for why that is a
   property of the domain rather than of this pass. What the record
   does establish is the WINDOW that was swept and the METHOD used,
   which is what makes two periods inside it comparable. */
const DEAL_COVERAGE = {
  "8vc": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Worked 8VC's own site first. 8vc.com/resources and its full archive at 8vc.com/resource-category/posts publish a single dated, reverse-chronological list of every 8VC post back to 2009, so the firm's own announcements inside the window could be walked month by month: Jan 26 (essay), Mar 10 (essay), Mar 11 Quince, Mar 18 Edra, Mar 24 PointOne, Apr 20 Kos.ai, May 28 Saris AI, Jun 4 Generalist. 8vc.com/sitemap.xml was pulled and diffed against that list to catch posts missing from the feed; the only extra investment post found was 'Worktrace: Introducing the New AI Adoption Layer for Enterprise', which carries no date anywhere on the site and so could not be placed in or out of the window (8VC co-led a $9M seed in Worktrace AI per that post) - it is NOT included. 8vc.com/companies lists portfolio companies with a stage label but no dates or rounds, so it cannot be used to enumerate participations. Each in-window post was opened individually to read the date, round, amount, co-investors and lead/participate language, and company-side announcements (generalistai.com, businesswire) were opened where the 8VC post did not carry the investor list. Excluded on the merits: Quince (8VC's Mar 11 post celebrates Quince's Series E at a $10B valuation but does not name 8VC as an investor in that round - it says only 'We are proud to have been one of the first investors in Quince'); 'Announcing Our Investment in Branch' (a 2015 Formation 8 post, not 8VC); Sable (Jul 16, 2026) and Vals (Aug 13, 2026), both after the window. Edra is recorded as 8VC's $6 million seed, which 8VC first disclosed publicly in the Mar 18 post announcing Edra's Sequoia-led Series A; 8VC is not named as an investor in the Series A itself. Latus Bio was found only through the press release (8VC led the $43M extension of Latus' $97M Series A) and does NOT appear anywhere on 8vc.com - direct proof that the firm's own feed is not a complete record of its participations. NOTE ON EVIDENCE: the brief requires a verbatim quote naming both firm and company. For the Edra, PointOne, Kos.ai and Generalist rows no single passage in any source found names both parties; the quotes used name one party explicitly and the other is the entity publishing the cited page (8vc.com for Edra/PointOne/Kos.ai, generalistai.com for Generalist). These four rows are flagged here rather than silently dropped. ASSEMBLY-STAGE CROSS-FILL: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and firm B had no row for that company and date, a row was created for firm B FROM THE SAME SOURCE - same URL, same date, same verbatim evidence quote, which was re-checked to name firm B and the company. 8 of this firm's rows arrived this way: Armadin (2026-03-10); Cognition (2026-05-28); Erebor Bank (2026-01-05); Glimpse (2026-03-25); Mendra (2026-01-23); Ramp (2026-06-04); Saronic (2026-03-31); WithCoverage (2026-01-13). Their `role` is null by design: the source often does state who led, but deriving it programmatically would be inference, so it was not attempted. Re-source those rows if role matters.",
    "note": "Not complete. Two independent reasons. (1) 8VC's dated post archive is enumerable but demonstrably not exhaustive: 8VC led the $43M Series A extension in Latus Bio (announced 2026-05-04) and that investment is not mentioned anywhere on 8vc.com, so an unknown number of other unposted participations may exist in the window. (2) The independent press sweep required by the brief could not be run - this session's web-search budget was exhausted before any search for this firm could be issued, and every general search engine reachable by direct fetch (Google, Bing, DuckDuckGo, Mojeek, TechCrunch site search) is blocked by robots.txt, so coverage outside 8vc.com rests only on company sites reached from links already in hand. Additionally, 8VC's undated 'Worktrace' post describes a $9M seed 8VC co-led whose announcement date could not be established, so it is neither included nor ruled out. FOUR VERIFIED 8VC ROUNDS WERE DROPPED for failing the evidence rule, not for being wrong. In each case the deal is real and the source is solid, but no single contiguous passage names both 8VC and the company: PointOne Series A (2026-03-24, 8vc.com post says \"We're proud to lead PointOne's Series A\" - \"we\" is 8VC only because the page is 8VC's); Kos.ai (2026-04-20, same pattern); Latus Bio $43M Series A extension (2026-05-04, the Business Wire body says \"a $43 million extension led by 8VC\" but that sentence does not repeat the company name); Generalist AI (2026-06-04, generalistai.com lists 8VC among new major investors but the sentence does not name the company). I re-fetched all four during assembly to look for a compliant quote and none exists on those pages. They are recoverable with a second source.",
    "sources": [
      "https://8vc.com/resources",
      "https://8vc.com/resource-category/posts",
      "https://8vc.com/sitemap.xml",
      "https://8vc.com/companies",
      "https://generalistai.com/blog",
      "https://www.businesswire.com/news/home/20260504989731/en/Latus-Bio-Announces-%2497-Million-Series-A-Financing-to-Expand-the-Reach-of-Gene-Therapy-to-Larger-Populations"
    ]
  },
  "a16z": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Worked a16z's own surfaces first: a16z.com/news-content/ (the firm's combined news/articles/podcast feed, which carries an 'Investment News' content-type filter), the /announcement/investing-in-<company>/ post series which is a16z's standard announcement format, a16z.com/portfolio, and a16zcrypto.com/posts. Individual announcement posts were fetched one by one to read the publication date, round, amount, co-investors and lead/participant language. Because the news feed is undated, JS-paginated ('load more') and mixes announcements with articles and podcasts, it could not be walked month by month; announcement URLs were instead discovered via repeated site-scoped search-engine queries plus per-month and per-quarter press searches (TechCrunch, Fortune, Axios, Bloomberg, The Block, BusinessWire, PR Newswire, GlobeNewswire and company/law-firm announcement pages). Every row was verified against an opened announcement carrying a verbatim quote naming both a16z and the company. All a16z sub-funds were treated as a16z and filed under firmSlug 'a16z': rounds from a16z crypto (Kairos, The Better Money Company, Catena Labs, Morpho, Digital Asset, Ornn), a16z speedrun (Smart Bricks), a16z Bio + Health (Telepatia, Prosper AI) and American Dynamism (Chariot Defense, Westmag) are all included. Excluded per the brief: a16z crypto's standalone token purchases that the source does not present as a company financing round (its 2026-01-07 $15M purchase of $BABY tokens and its 2026-05-11 $75M purchase of the ARC token), a16z's own fund closes (the $2.2B crypto Fund V announced 2026-05-05), and announcements dated outside the window (e.g. Unconventional AI 2025-12-08, Gamma 2025-11-10, Reducto 2025-10, FurtherAI 2025-10-07, Supersonik 2025-09-03, Vals 2026-08-13). ASSEMBLY-STAGE CROSS-FILL: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and firm B had no row for that company and date, a row was created for firm B FROM THE SAME SOURCE - same URL, same date, same verbatim evidence quote, which was re-checked to name firm B and the company. 9 of this firm's rows arrived this way: Braintrust (2026-02-18); Decagon (2026-01-29); Hadrian (2026-01-12); Harvey (2026-03-25); LMArena (2026-01-07); Mercury (2026-05-20); Petual (2026-04-23); Saronic (2026-03-31); XDOF (2026-06-19). Their `role` is null by design: the source often does state who led, but deriving it programmatically would be inference, so it was not attempted. Re-source those rows if role matters.",
    "note": "Volume too high to establish completeness, and a16z publishes no dated, enumerable investment log. The portfolio page lists company names and exit status only - no dates, no rounds - so participation in the window cannot be enumerated from it. The news-content feed does carry every 'Investing in X' announcement, but it is undated on the listing page and paginates through a JavaScript 'load more' control with no crawlable page/2, feed or API URL, so it cannot be walked backwards through the six months. Coverage therefore rests on search-engine discovery of a16z.com/announcement/ and a16zcrypto.com/posts/ URLs plus per-month press searches, neither of which can be shown to be exhaustive. 30 announcements in the window were verified and returned; a16z's actual H1 2026 count is certainly higher - probably by a wide margin. Two specific known biases: (1) every row returned has role 'lead', because a16z and its portfolio companies issue announcements overwhelmingly when a16z leads, so rounds where a16z merely participated are systematically under-represented here; (2) April 2026 yielded only two verified rounds versus eleven in June, which is far more likely a search-visibility artefact than a real drop in activity. Also unresolved: whether a16z crypto's token investments (Babylon, Circle's Arc) should count as financings - they were excluded, and if they belong in scope the count rises.",
    "sources": [
      "https://a16z.com/news-content/",
      "https://a16z.com/portfolio/",
      "https://a16z.com/announcement/investing-in-telepatia/",
      "https://a16zcrypto.com/posts/",
      "https://techcrunch.com/tag/a16z/",
      "https://www.prnewswire.com/",
      "https://www.businesswire.com/"
    ]
  },
  "bessemer": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Enumerated bvp.com/news, which is a single-page reverse-chronological archive of BVP's own dated investment posts running back to 2018; listed all 25 in-window items, discarded the six that are partner promotions/venture-advisor hires and one founder profile (Vega Health, 6.3.26, which contains no financing statement), and opened each remaining post to pull the verbatim announcement line, round, amount, role and named co-investors. Then ran per-month and per-quarter press searches (PR Newswire, BusinessWire, TechCrunch, fintech.global, AlleyWatch monthly largest-round lists for Feb/Mar/Apr/June 2026) to catch rounds BVP did not post about, and opened each candidate to verify the quote. ASSEMBLY-STAGE CROSS-FILL: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and firm B had no row for that company and date, a row was created for firm B FROM THE SAME SOURCE - same URL, same date, same verbatim evidence quote, which was re-checked to name firm B and the company. 7 of this firm's rows arrived this way: Anthropic (2026-02-12); ClickHouse (2026-01-19); Picogrid (2026-06-01); Saronic (2026-03-31); Sarvam (2026-06-16); Uptool (2026-02-09); Vapi (2026-05-12). Their `role` is null by design: the source often does state who led, but deriving it programmatically would be inference, so it was not attempted. Re-source those rows if role matters.",
    "note": "bvp.com/news is dated and enumerable but is demonstrably NOT exhaustive: press search surfaced four in-window BVP rounds with no corresponding post on it (Converge Bio 2026-01-13, Breaker 2026-02-17, Legora 2026-03-10, Halter 2026-03-24). BVP appears to post only about investments it chooses to write up, and is frequently named merely as a participant in large syndicated rounds it never announces, so additional in-window participations are likely and cannot be ruled out from any surface available. One further in-window round was identified but dropped for lack of usable evidence: Anthropic's $30B Series G (2026-02-12) lists Bessemer Venture Partners among investors, but no single sentence in the source names both the firm and the company. Kandou AI's $225M Series A (2026-03-29) was investigated and dropped because the primary source does not name Bessemer at all.",
    "sources": [
      "https://www.bvp.com/news",
      "https://www.bvp.com/companies",
      "https://alleywatch.com/2026/03/global-startup-funding-top-largest-february-2026-vc/",
      "https://alleywatch.com/2026/04/global-startup-funding-top-largest-march-2026-vc/",
      "https://alleywatch.com/2026/05/us-startup-funding-top-largest-april-2026-vc/",
      "https://www.alleywatch.com/2026/07/global-startup-funding-top-largest-june-2026-vc/",
      "https://fintech.global/tag/bessemer-venture-partners/"
    ]
  },
  "bloomberg-beta": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Confirmed the entity as Bloomberg Beta, Bloomberg L.P.'s early-stage venture arm; Bloomberg L.P. corporate activity, Bloomberg Media deals and the terminal business were out of scope and none were recorded. Checked the firm site first and the finding is stark: bloombergbeta.com is a one-screen landing page whose only substantive link is to the firm's open-sourced Operating Manual on GitHub. There is no /news, no /blog, and /portfolio returns 404 - the firm publishes no dated investment announcements and no machine-readable portfolio list. Enumeration therefore ran entirely on press: FinSMEs full-text search for the quoted string \"Bloomberg Beta\" (page 1 walked and filtered to 2026; page 2 confirmed to start April 2025, so page 1 exhausts the window there), TechCrunch's bloomberg-beta tag page walked in full (no 2026 items at all), Bing News RSS, and a cross-check against the 140 existing rows for 'Bloomberg Beta' in other firms' coInvestors lists (this independently corroborated Protege and NODA AI). Every row carries a contiguous verbatim passage naming both Bloomberg Beta and the company.",
    "note": "Not complete. The firm does not publish a news or portfolio-updates page - bloombergbeta.com is a single landing page pointing at a GitHub operating manual, and /portfolio 404s - so coverage relies on press search, which cannot be shown to be exhaustive. The gap is visible in the evidence: TechCrunch's own bloomberg-beta tag page contains zero 2026 articles, yet FinSMEs alone yields seven in-window rounds, which shows how much depends on which single outlet happens to index the firm. Bloomberg Beta writes small early-stage cheques and is routinely listed mid-sentence in participant lists, exactly the position that goes unindexed. Excluded on purpose: Antares Labs (2026-07-28), Skan AI (2026-08-12), Vals AI (2026-08-18) and Smack Technologies' $61M Series B (2026-08-18) are all after the window; Poly (2025-11-20) is before it.",
    "sources": [
      "https://www.bloombergbeta.com/",
      "https://github.com/Bloomberg-Beta/Manual",
      "https://www.finsmes.com/?s=%22Bloomberg+Beta%22",
      "https://techcrunch.com/tag/bloomberg-beta/"
    ]
  },
  "dcvc": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Worked dcvc.com first. The full archive at dcvc.com/news-insights/archive is dated, reverse-chronological and paginated (260 items, 40 per page); page 1 runs from 30 Jul 2026 back to 17 Nov 2025 and page 2 was also pulled to confirm nothing dated inside the window sits below it, so the window is fully covered by the firm's own feed. The decisive surface, however, is DCVC's quarterly updates - dcvc.com/news-insights/dcvc-2026-q1-update (01 Apr 2026) and dcvc.com/news-insights/dcvc-2026-q2-update (01 Jul 2026) - each of which carries a 'FUNDING HIGHLIGHTS' section that names the portfolio company, the round, the amount and DCVC's role, split into 'DCVC Flagship / DCVC Energy + Climate' and 'DCVC Bio' sub-sections. Every financing in those two sections was taken as a candidate; the linked underlying announcement (PR Newswire, GlobeNewswire, Business Wire, or the company's own newsroom) was then opened to fix the announcement DATE, the round name, the full co-investor list and the lead/participate language. TREATMENT OF DCVC BIO: rounds announced by or attributed to DCVC Bio (AgZen, Latus Bio, Sidewinder Therapeutics, Syntax Bio) are recorded under firmSlug 'dcvc' exactly as instructed, with the DCVC Bio wording preserved verbatim in the evidence quote; DCVC's own quarterly update files them as a sub-section of the same firm update, which supports treating them as DCVC participation. Where the underlying press release does not name DCVC and the company in one passage, the DCVC quarterly update is cited as sourceUrl because that is the document in which DCVC's participation is actually stated; the announcedDate in those rows comes from the underlying company or wire announcement that the update links to (Chariot Defense PR Newswire 2026-02-25; Humans& Reuters slug 2026-01-20; Iceberg Quantum GlobeNewswire dateline 2026-02-12 22:07 ET; Lunar Energy company post 2026-02-04; AgZen GlobeNewswire 2026-03-13; Quantum Motion company post 2026-05-07; Sidewinder company post 2026-04-08; Impulse Space company post 2026-06-03; Atom Computing company release 2026-06-16; Latus Bio Business Wire 2026-05-04; Syntax Bio Business Wire 2026-06-21). EXCLUDED on the merits: Fervo's $421M non-recourse project financing for Cape Station (project debt, DCVC not named as an investor in it); Fervo's Nasdaq IPO (13 May 2026); Agility Robotics' announced SPAC merger with Churchill Capital Corp XI; Rigetti Computing's up-to-$100M CHIPS Act award from the Department of Commerce (a government award, not a financing DCVC joined); Radiant's expansion of its latest financing to over $350M, where DCVC is described only as part of 'previous funding that included DCVC' and is not named as an investor in the expansion; and Recursive Superintelligence's $650M stealth emergence, which DCVC says it joined but for which no announcement date could be established from any reachable source (its own site carries no funding post), so no row could be dated. Not confused with any other 'DCVC Ventures' or with Data Collective's older branding - all rows trace to dcvc.com.",
    "note": "Not complete. DCVC's quarterly updates are the strongest enumeration surface of the three firms in this batch, but they are published under the heading 'FUNDING HIGHLIGHTS', and a highlights list is by construction a selection rather than a full ledger - smaller or quieter participations may simply not be highlighted. dcvc.com/companies lists portfolio companies alphabetically with no dates or rounds, so it cannot be used to cross-check. The independent press sweep the brief asks for could not be run: this session's web-search budget was exhausted before any search for this firm could be issued, and every general search engine reachable by direct fetch is blocked by robots.txt, so nothing outside DCVC's own feed and the announcements it links to could be swept. One known in-window DCVC participation (Recursive Superintelligence, $650M) is missing from the rows purely because no announcement date could be verified.",
    "sources": [
      "https://www.dcvc.com/news-insights",
      "https://www.dcvc.com/news-insights/archive",
      "https://www.dcvc.com/news-insights/archive/p2",
      "https://www.dcvc.com/news-insights/dcvc-2026-q1-update",
      "https://www.dcvc.com/news-insights/dcvc-2026-q2-update",
      "https://www.dcvc.com/companies",
      "https://www.dcvc.com/bio"
    ]
  },
  "dell-technologies-capital": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Worked delltechnologiescapital.com first. delltechnologiescapital.com/resources is a dated, reverse-chronological 'News & Resources' feed (6 pages); page 1 alone runs from 14 Aug 2026 back to 20 Dec 2025, so the entire window sits on a single page and was walked item by item. Every in-window item was opened: 8 Jan (AI infra essay), 5 Feb Halcyon+Dell, 9 Feb Manifest essay, 30 Mar Sycamore, 6 Apr GTM essay, 27 Apr Akka, 28 Apr GTM essay, 29 Apr OpenObserve, 14 May LayerX, 19 May cybersecurity essay, 15 Jun Entro Security, 16 Jun Limitless Labs, 16 Jun Bland.ai. As a second surface, delltechnologiescapital.com/companies (4 pages) was pulled in full; it labels each portfolio company with the round and YEAR at which DTC invested, so entries reading 2026 were used as a cross-check on the blog: Bland.ai 'Series C 2026', Limitless Labs 'Seed in 2026', Prime Intellect 'Series A in 2026', Sycamore 'Seed in 2026'. All four are accounted for - Prime Intellect's $130M Series A is announced in DTC's own 8 Jul 2026 post with the wording 'Today ... the company announced a $130 million Series A', which places the announcement AFTER the window, so it is excluded. APPLYING THE M&A / PARTNERSHIP RULE: 'Vision to Value: Halcyon + Dell Ransomware Resilience' (5 Feb 2026) is a commercial go-to-market partnership between Dell and Halcyon with no investment announced, and is excluded; 'LayerX joins Akamai' (14 May) and 'Category Creation: Reflecting on Entro Security' (15 Jun) are portfolio-company acquisitions and are excluded; 'AI Powering AKKA's Breakout Moment' (27 Apr) is a portfolio update that refers back to a $25M round DTC led years earlier, not a financing announced in the window, and is excluded. No announcement in the window named 'Dell Technologies' (the parent) rather than 'Dell Technologies Capital' as an investor; the Bland.ai row's evidence quote comes from the company's own post and names 'Dell Technologies Capital' exactly. NOTE ON ROLE: DTC's own post says of Bland.ai's $50M Series C 'which we were proud to lead', while the company's post lists DTC among several investors without designating a lead; per the brief the firm's own site is authoritative, so role is 'lead'. NOTE ON EVIDENCE: for the Sycamore and OpenObserve rows no single passage in any reachable source names both 'Dell Technologies Capital' and the company; the quotes used name the company and the cited page is DTC's own site. Sycamore's round is taken as 'seed' from DTC's portfolio page ('Seed in 2026') since the post itself states no round or amount.",
    "note": "Not complete. DTC's blog is dated and fully walkable for the window, and the portfolio page gives a year-level cross-check, but neither is a financing ledger: the portfolio page records only the round at which DTC first invested (year granularity, no dates), so follow-on participations in existing portfolio companies announced in H1 2026 would leave no trace on either surface, and DTC plainly does not blog every cheque. The independent press sweep the brief asks for could not be run - this session's web-search budget was exhausted before any search for this firm could be issued, and every general search engine reachable by direct fetch is blocked by robots.txt - so no announcement outside delltechnologiescapital.com could be swept for. THREE VERIFIED DELL TECHNOLOGIES CAPITAL ROUNDS WERE DROPPED for the same evidence-rule reason, all real: Sycamore (2026-03-30) and OpenObserve Series A (2026-04-29), both first-person posts on delltechnologiescapital.com where the firm is the publisher rather than a named party; and Bland.ai Series C (2026-06-16), where bland.ai's own post names Dell Technologies Capital in the investor list but not in the same sentence as the company. All three were re-fetched during assembly and no compliant quote exists on those pages. This is why Dell shows only 1 row - the number understates the firm badly and should not be read as inactivity.",
    "sources": [
      "https://www.delltechnologiescapital.com/resources",
      "https://www.delltechnologiescapital.com/companies",
      "https://www.delltechnologiescapital.com/companies?819642f6_page=2",
      "https://www.delltechnologiescapital.com/companies?819642f6_page=3",
      "https://www.delltechnologiescapital.com/companies?819642f6_page=4",
      "https://www.bland.ai/blog/series-c"
    ]
  },
  "elad-gil": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Treated the firm as Elad Gil investing personally and through his own vehicles (Gil&Co), which is how announcements name him ('led by Elad Gil', 'existing investors including ... Elad Gil'). Started at eladgil.com: it is a single static bio page listing a ~25-company portfolio (Airbnb, Anthropic, Brex, Figma, OpenAI, Stripe, SpaceX and others) with NO dates, NO round information, and NO /news, /portfolio or /announcements sub-pages; the only outbound content link is his Substack at blog.eladgil.com, whose archive is market commentary (AI market structure, unicorn market caps, layoffs) and carries no investment announcements at all. There is therefore no firm-published enumerable list. Enumeration fell back to press: FinSMEs full-text search for the quoted string \"Elad Gil\" (page 1 walked in full and filtered to 2026; page 2 confirmed to start in Feb 2025, so page 1 exhausts the window on that source), TechCrunch's elad-gil tag page walked in full (its only 2026 item is an Apr 19 opinion piece, not a financing), Bing News RSS queries, and a cross-check against the 140 rows already in this dataset for rounds where Elad Gil appears in another firm's coInvestors list (this recovered Harvey, Saronic, RunSybil, Applied Compute and Cognition). Every candidate was opened and kept only if the article yielded a contiguous verbatim passage naming both Elad Gil and the company.",
    "note": "Not complete. Elad Gil publishes no dated, enumerable record of his investments anywhere: eladgil.com is an undated portfolio blurb and his Substack carries commentary only, so coverage rests entirely on press search, which cannot be shown to be exhaustive. The single-source risk is demonstrable - FinSMEs surfaced Moab, Petual, BuildForever, Frame Security and NavigateAI that no other surface showed, while the sibling-dataset cross-check independently surfaced Applied Compute (a company-site announcement FinSMEs never covered). Because he is a prolific angel who is frequently named only in the tail of an investor list, and many announcements name him without any outlet indexing him, the true H1 2026 count is very likely higher than the 12 rows returned. Excluded on purpose: Cambridge Aerospace Series C (FinSMEs 2026-08-10, out of window). One row (Applied Compute) uses an elision-marked quote joining the announcement headline and the financing sentence from the same company-site page, because that page's financing sentence is written in the first person and does not repeat the company name.",
    "sources": [
      "https://eladgil.com/",
      "https://blog.eladgil.com/archive",
      "https://www.finsmes.com/?s=%22Elad+Gil%22",
      "https://techcrunch.com/tag/elad-gil/"
    ]
  },
  "index-ventures": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Confirmed entity as Index Ventures (indexventures.com, London/San Francisco); every 'Index' mention was checked against context and against the firm's own post before use, so Index Capital / index-fund advisers are not in scope. indexventures.com has no /news path (404); its enumeration surface is /perspectives, filtered to /perspectives/news/, plus /companies (an undated portfolio index). Index DOES post a dated item for most of its own new investments ('Our Investment in X'), and each article page carries an explicit 'Published - <date>' line, which is the best surface either firm offers. Two limits on it: the listing page shows no dates, and its pagination (advertised as 125 news pages) is client-side, so pages 2+ could not be retrieved - repeated attempts at /perspectives/news/2/, /perspectives/news/page/2/ and ?page=2 all returned page 1 or 404. sitemap-perspectives.xml exists but its lastmod values are bulk site-migration timestamps from Jul-Aug 2026, not publication dates, so it cannot be date-filtered. I therefore walked page 1 of /perspectives/news/ (which reaches back to 2026-05-31) and opened all 13 posts to read their published dates, then used site-scoped and general press search to recover earlier 2026 posts (Flapping Airplanes, Alan, Parallel, Scope, Wonderful) plus press-only rounds, and cross-checked against TechCrunch's index-ventures tag page and AlleyWatch monthly tables. Every candidate was opened and only kept if it yielded a single contiguous verbatim passage naming BOTH Index Ventures and the company. ASSEMBLY-STAGE CROSS-FILL: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and firm B had no row for that company and date, a row was created for firm B FROM THE SAME SOURCE - same URL, same date, same verbatim evidence quote, which was re-checked to name firm B and the company. 7 of this firm's rows arrived this way: Decagon (2026-01-29); Evervault (2026-03-05); Frame Security (2026-05-11); Garner Health (2026-05-28); Ineffable Intelligence (2026-04-27); Parallel Web Systems (2026-04-29); Taktile (2026-06-22). Their `role` is null by design: the source often does state who led, but deriving it programmatically would be inference, so it was not attempted. Re-source those rows if role matters.",
    "note": "Not complete. The firm's news index is the right surface but only its first page is retrievable - that page reaches back to 2026-05-31, meaning five of the six months in the window (January to late May) could not be enumerated from the firm site at all and rest on press search, which cannot be shown to be exhaustive. Evidence that rounds are being missed: my June-only firm-site coverage yields seven Index posts in a single month, while Jan-May yields only four, which is a retrieval artefact rather than a real activity pattern; and AlleyWatch's February and June tables independently name Index in rounds (Temporal Technologies Series D, Alan Series G) that the accessible surfaces had not surfaced. Additionally, several in-window Index posts were positively dated but are NOT returned because the post is written in the first person ('we', 'our') and contains no contiguous verbatim passage naming both Index Ventures and the company, and search quota was exhausted before a press substitute could be found: Flapping Airplanes co-led round (2026-01-28), Alan follow-on at ~$6B valuation (2026-03-11), Scope $20M round (2026-05-19), Inherent $50m seed (2026-05-31), fomo $75M Series B (2026-06-22), Build seed round (2026-06-29). These are genuine in-window participations and should be re-sourced. Excluded on purpose: Aetherflux (TechCrunch 2026-03-27 reported it only as 'reportedly raising'), and Index's own $2B/$3.5B fund close (a fund raise, announced 2026-07-31, outside the window). Posts checked and confirmed OUT of window: Wonderful (2025-11-11), Marker (2026-07-09), Chai Discovery (2026-07-14), Enigma (2026-07-27), Simile (2026-07-30), The Intelligence Company (2026-08-03).",
    "sources": [
      "https://www.indexventures.com/perspectives/",
      "https://www.indexventures.com/perspectives/news/",
      "https://www.indexventures.com/sitemap.xml",
      "https://www.indexventures.com/sitemap-perspectives.xml",
      "https://www.indexventures.com/companies/",
      "https://techcrunch.com/tag/index-ventures/",
      "https://alleywatch.com/2026/03/global-startup-funding-top-largest-february-2026-vc/",
      "https://alleywatch.com/2026/05/us-startup-funding-top-largest-april-2026-vc/",
      "https://www.alleywatch.com/2026/07/global-startup-funding-top-largest-june-2026-vc/"
    ]
  },
  "initialized-capital": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Confirmed the entity as Initialized Capital (initialized.com), still trading under that name after its 2024 leadership change and partner restructuring. The site's enumeration surface is /ideas, which mirrors blog.initialized.com, a dated WordPress blog with month archives; I walked blog.initialized.com/2026/ and the /ideas index and opened all five 2026 posts, all of which turned out to be investment announcements (The Bland Company 2026-02-12, Alien 2026-04-01, 10x Science 2026-04-22, Enhanced Radar 2026-05-13, Arcturus 2026-06-30). /companies is an undated portfolio index and carries no round or date information. Because the blog is editorial rather than a complete deal log, I then ran FinSMEs full-text search on \"Initialized\" (page 1 filtered to 2026; page 2 confirmed to start June 2025) and walked TechCrunch's initialized-capital tag page in full. Where the firm's own post was first-person ('we led their round') and gave no contiguous passage naming both parties, I re-sourced the row from press (FinSMEs or TechCrunch) rather than dropping it. Every row carries a contiguous verbatim passage naming both Initialized and the company.",
    "note": "Not complete. The firm does publish a dated blog, but that blog is demonstrably not a complete record of its investments: Seamflow (2026-02-11), Crewline AI (2026-04-22) and Picogrid (2026-06-01) are in-window Initialized participations that appear in press but have no blog post, while Enhanced Radar (2026-05-13) has a blog post and no press coverage I could find. Neither surface subsumes the other, so neither can establish completeness, and a seed-stage firm's smaller cheques frequently go unindexed entirely. Excluded on purpose: Sygaldry Technologies' $105M Series A (FinSMEs 2026-04-14) - the article names Initialized Capital only as lead of the company's EARLIER $34M seed round, and Initialized is not named in the Series A investor list, so participation in the announced financing is not established. Also excluded: Feanix (2025-12-18) and PermitFlow (2025-12-02/03), both announced before the window.",
    "sources": [
      "https://initialized.com/ideas",
      "https://blog.initialized.com/2026/",
      "https://initialized.com/companies",
      "https://www.finsmes.com/?s=%22Initialized%22",
      "https://techcrunch.com/tag/initialized-capital/"
    ]
  },
  "intel-capital": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Established spin-out status first: Intel announced in January 2025 that it would spin Intel Capital out into a standalone fund (TechCrunch, 2025-01-14), but Intel REVERSED that decision on 2025-04-24 - CEO Lip-Bu Tan on the Q1 earnings call: \"We have made the decision not to spin off Intel Capital, but to work with the team to monetize our existing portfolio, while being more selective on new investments.\" The spin-out therefore never completed, there was no rename, and throughout 2026-H1 Intel Capital operated as Intel Corporation's corporate venture arm under the intelcapital.com brand; its own site still describes it as \"the first corporate venture capital firm\" with no mention of independence. All rows are recorded under firmSlug intel-capital. No Intel Corporation product, foundry or M&A announcements were recorded. Enumeration: intelcapital.com/news/ is a dated newsroom but its listing is a JavaScript 'Load More' that stops at ~12 items, and the site has no sitemap and a locked WordPress REST API; the month archives DO work, so /2026/01/ through /2026/06/ were each walked in full (June 2026 returns 404 = no posts that month, confirmed against a working /2026/07/ archive). Every 2026-H1 post was opened individually and kept only where the body yielded a contiguous verbatim passage naming BOTH Intel Capital and the company. Oxide Computer Company's $200M Series C (posted 2026-02-10) was DROPPED: the phrase 'Intel Capital' does not appear anywhere in the release body, which credits USIT, Eclipse, Riot Ventures, Jane Street 'and other existing investors' - showing the newsroom also carries portfolio news the firm did not participate in.",
    "note": "Coverage rests almost entirely on the firm's own newsroom month archives, which is a genuine dated enumerable surface but is a curated PR surface: it demonstrably carries portfolio news the firm was not part of (Oxide) and therefore may equally omit participations that generated no company press push. The session's web-search budget was exhausted before this firm was worked and every general search engine (DuckDuckGo, Bing, Mojeek, Brave, Ecosia, Yahoo, Startpage, Google News RSS) is blocked by robots.txt for the fetch tool, so the brief's step-3 press cross-check could not be run at all; the only independent surface reachable was TechCrunch's intel-capital tag page, which carries no 2026 items. The portfolio page carries no dates or round data. Rounds Intel Capital joined in H1 2026 without a newsroom post cannot be ruled out, so completeness cannot be claimed.",
    "sources": [
      "https://www.intelcapital.com/news/",
      "https://www.intelcapital.com/2026/01/",
      "https://www.intelcapital.com/2026/02/",
      "https://www.intelcapital.com/2026/03/",
      "https://www.intelcapital.com/2026/04/",
      "https://www.intelcapital.com/2026/05/",
      "https://www.intelcapital.com/2026/06/",
      "https://www.intelcapital.com/portfolio/",
      "https://techcrunch.com/tag/intel-capital/",
      "https://techcrunch.com/2025/04/24/intel-reverses-course-opts-not-to-spin-out-intel-capital/"
    ]
  },
  "khosla-ventures": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Walked khoslaventures.com in full: there is no /news or /announcements section, the /portfolio page lists companies by category with no dates or round information, and the site's only dated feed (/posts/rss.xml, 100 items) carries podcasts, op-eds and founder-advice posts - it contains zero financing announcements, and only five items at all in the window. Because the firm publishes no enumerable investment list, coverage was rebuilt from press: FinSMEs' Khosla Ventures tag archive was paginated back from August 2026 through December 2025 (pages 1-4), every H1-2026 item was opened, and each row's investor sentence was copied verbatim. Cross-checks against primary press releases were done where the firm's own posts or a company release existed (e.g. Rogo). ASSEMBLY-STAGE CROSS-FILL: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and firm B had no row for that company and date, a row was created for firm B FROM THE SAME SOURCE - same URL, same date, same verbatim evidence quote, which was re-checked to name firm B and the company. 2 of this firm's rows arrived this way: Mach Industries (2026-06-01); NavigateAI (2026-05-27). Their `role` is null by design: the source often does state who led, but deriving it programmatically would be inference, so it was not attempted. Re-source those rows if role matters.",
    "note": "Khosla Ventures publishes no dated list of its investments, so completeness cannot be established from the firm's own site. The enumeration surface used (FinSMEs' investor tag) is demonstrably incomplete: Uptool (2026-02-09) names Kleiner Perkins in its body but is absent from the Kleiner Perkins tag, and Stord (2026-05-26) names Lux but is absent from the Lux tag, so the same under-tagging must be assumed here. Khosla is a high-volume seed investor and many seed cheques are never announced at all, so the true H1-2026 count is very likely higher than the 32 rows returned. Separately, no row here rests on 'Vinod Khosla' personally; announcements naming only the individual were not counted, and none were found in the window that would have qualified.",
    "sources": [
      "https://www.khoslaventures.com/portfolio",
      "https://www.khoslaventures.com/posts/rss.xml",
      "https://www.finsmes.com/tag/khosla-ventures",
      "https://www.prnewswire.com/news-releases/rogo-raises-160m-series-d-to-scale-the-agentic-platform-for-finance-302756546.html"
    ]
  },
  "kleiner-perkins": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Enumerated kleinerperkins.com/perspectives exhaustively via its WordPress REST API (wp-json/wp/v2/posts, paged, filtered after=2026-01-01 & before=2026-07-01) which returned all 31 posts published in the window with exact publication dates; the public /perspectives index shows no dates and the post-sitemap lastmod values are bulk site-migration timestamps, so neither is usable. Each post was opened and classified as financing / not-financing (Q, Waymo, Alkira, Stord, Motive, Profound-June, KP22 fund close were checked individually). KP posts say 'we' rather than 'Kleiner Perkins', so for every deal the verbatim quote was taken from the round's own press release or reputable press. That set was then unioned with FinSMEs' Kleiner Perkins tag archive (pages 1-4, paginated back past 2025-12-31), which surfaced 20+ further rounds KP never posted about.",
    "note": "Kleiner Perkins' own Perspectives feed is dated and fully enumerable, but it is NOT a complete record of participation: Waymo, Profound, Phia, LMArena, Synthesia, Harvey, Vapi, Uptool and roughly fifteen other H1-2026 rounds KP is named in were never posted there. Completeness therefore depends on press enumeration, which cannot be shown to be exhaustive - FinSMEs' own tagging is provably lossy (Uptool names Kleiner Perkins in its text yet is missing from the Kleiner Perkins tag). OpenEvidence's 2026-01-21 Series D was found and deliberately excluded: it lists Kleiner Perkins only among 'previous investors ... many of which also followed on in this round', which does not name KP as a participant in this financing. Excluded as out of scope: the KP22/KP Select IV fund close (2026-03-24), the Alkira/Lumen acquisition (2026-05-05) and the Amazon/Fauna Robotics acquisition (2026-03-24). Motive's $150M KP-led round was re-posted by KP on 2026-04-07 but was announced 2025-07-30, and Q's KP-led Series A dates to 2023 - both out of window.",
    "sources": [
      "https://www.kleinerperkins.com/perspectives",
      "https://www.kleinerperkins.com/wp-json/wp/v2/posts?after=2026-01-01T00:00:00&before=2026-07-01T00:00:00",
      "https://www.finsmes.com/tag/kleiner-perkins",
      "https://www.kleinerperkins.com/post-sitemap.xml"
    ]
  },
  "lightspeed": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Confirmed entity as Lightspeed Venture Partners (lsvp.com); excluded Lightspeed Commerce (TSX/NYSE: LSPD), Lightspeed Systems and Lightspeed Financial throughout. Worked lsvp.com first: the site publishes /stories (editorial posts, market maps, newsletters, founder profiles) plus /companies (an undated portfolio index) - it does NOT post a dated item per investment, and only a small number of selected rounds (e.g. Anthropic) get their own post. lsvp.com/sitemap.xml resolves to nine child sitemaps; post-sitemap.xml carries 598 URLs with a newest lastmod of 2023-06-12 and feeds-sitemap.xml a newest lastmod of 2025-08-19, so the site's own machine-readable surface does not even reach the window. Enumeration therefore fell back to press: TechCrunch's lightspeed-venture-partners tag page (walked in full), Crunchbase News, AlleyWatch monthly largest-round tables for Feb/Apr/Jun 2026, and month-by-month keyword searches ('led by Lightspeed', 'participation from', 'seed round', 'Series A/B') across Jan-Jun 2026. Rounds announced by Lightspeed India and Lightspeed Israel were treated as `lightspeed` participation (that is how the firm brands them and how press names them); none of the India-sourced candidates survived the evidence test, so no such row appears here. Every candidate was opened and only kept if the announcement yielded a single contiguous verbatim passage naming BOTH Lightspeed and the company. ASSEMBLY-STAGE CROSS-FILL: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and firm B had no row for that company and date, a row was created for firm B FROM THE SAME SOURCE - same URL, same date, same verbatim evidence quote, which was re-checked to name firm B and the company. 13 of this firm's rows arrived this way: Anthropic (2026-02-12); Emergent (2026-01-20); Fiddler AI (2026-01-27); Granola (2026-03-25); Helion (2026-06-04); Ineffable Intelligence (2026-04-27); Inferact (2026-01-22); LMArena (2026-01-07); Nominal (2026-03-06); Profound (2026-02-24); Ramp (2026-06-04); Science (2026-03-06); Temporal (2026-02-17). Their `role` is null by design: the source often does state who led, but deriving it programmatically would be inference, so it was not attempted. Re-source those rows if role matters.",
    "note": "Not complete, for two independent reasons. (1) No exhaustive enumeration surface exists: lsvp.com does not publish a dated post per investment and its sitemaps stop in 2023/2025, so coverage rests entirely on press search, which cannot be shown to be exhaustive. Volume is far too high for press search to close the gap - a single AlleyWatch 'largest rounds' table for June 2026 alone names Lightspeed in six rounds (Suno, CuspAI, Helion Energy, Ramp, Supabase, Cyera) that keyword search had not surfaced, and that table only covers the very largest deals, so the true H1 2026 count is certainly many times the seven rows returned. (2) Additional rounds were positively verified as in-window but are NOT returned because no single contiguous verbatim passage in the source names both Lightspeed and the company (the reports say 'the startup'): Emversity Series A (2026-01-14/15), Emergent Series B (2026-01-20), Resolve AI Series A (2026-02-04), Gushwork seed (2026-02-25), Science Corp. Series C (2026-03-05), Granola Series C (2026-03-25), Snabbit Series D (2026-04-27), Helion Energy Series G (2026-06-04), Sandstone Series A (2026-06-09). These are real participations and should be re-sourced in a later pass. Also excluded on purpose: SolarSquare (TechCrunch 2026-05-23 reported it only as 'in talks to raise', not an announced round) and Lightspeed's own >$9B fund close (a fund raise, and announced 2025-12-15, outside the window). Session web-search quota was exhausted before Q2 press sweeps could be finished, which further limits Apr-Jun coverage.",
    "sources": [
      "https://lsvp.com/stories/",
      "https://lsvp.com/sitemap.xml",
      "https://lsvp.com/post-sitemap.xml",
      "https://lsvp.com/feeds-sitemap.xml",
      "https://techcrunch.com/tag/lightspeed-venture-partners/",
      "https://news.crunchbase.com/venture/most-active-us-investors-january-2026-lightspeed-sequoia/",
      "https://alleywatch.com/2026/03/global-startup-funding-top-largest-february-2026-vc/",
      "https://alleywatch.com/2026/05/us-startup-funding-top-largest-april-2026-vc/",
      "https://www.alleywatch.com/2026/07/global-startup-funding-top-largest-june-2026-vc/"
    ]
  },
  "lux-capital": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Read luxcapital.com/news in full across its four pages: it is dated and enumerable but is a curated blog (LP letters, hires, fellowship, fund announcements) and contains exactly ONE investment announcement in the window (Crosby, 2026-03-31). The Lux Q1 2026 LP letter was read and names no new Q1 commitments. luxcapital.com/companies gives only a year-granularity 'Lux investment: YYYY' milestone per company, which cannot resolve a six-month window. Coverage was therefore rebuilt from FinSMEs' Lux Capital tag archive (pages 1-4, paginated back past 2025-12-31); every H1-2026 item was opened and its investor sentence copied verbatim.",
    "note": "Lux Capital's own site announces only a small hand-picked subset of its investments (one in six months), so completeness rests on press enumeration that cannot be shown exhaustive - and FinSMEs' Lux tag is provably lossy, since Stord's 2026-05-26 Series F names 'Lux' in its investor list yet does not appear under that tag. Entity confirmation: all rows except two quote the source naming 'Lux Capital' in full. The two that name only 'Lux' - Applied Compute (2026-04-08) and Stord (2026-05-26) - were confirmed to be Lux Capital against the firm's own company pages (luxcapital.com/companies/applied-compute, 'Lux Investment: 2025'; luxcapital.com/companies/stord, 'Lux investment: 2021'); neither is Lux Research or Lux Industries. Erebor Bank's 2026-03-24 Fundrise Innovation Fund investment was found and excluded: Lux Capital is named there only as an existing backer of the company, not as a participant in that financing.",
    "sources": [
      "https://www.luxcapital.com/news",
      "https://www.luxcapital.com/companies",
      "https://www.luxcapital.com/news/lux-q1-2026-report",
      "https://www.finsmes.com/tag/lux-capital"
    ]
  },
  "nea": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Checked all four candidate enumeration surfaces on nea.com: /news and /news/press-releases (client-side rendered behind a 'Show More' control, so the listing itself could not be read), /insights, and /portfolio. Enumerated nea.com/sitemap.xml in full to recover every press-release URL the site publishes, bypassing the JS listing. Then ran per-month and per-quarter press searches (PR Newswire, BusinessWire, GlobeNewswire, TechCrunch tag page, MedCity News, citybiz, Distill, AlleyWatch monthly largest-round lists for Feb/Mar/Apr/June 2026) across the window and opened each candidate to verify a quote naming both firm and company. ASSEMBLY-STAGE CROSS-FILL: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and firm B had no row for that company and date, a row was created for firm B FROM THE SAME SOURCE - same URL, same date, same verbatim evidence quote, which was re-checked to name firm B and the company. 6 of this firm's rows arrived this way: Bluefish (2026-04-14); Corca Research (2026-06-10); CuspAI (2026-06-22); Factory (2026-04-16); Slash (2026-04-15); Synthesia (2026-01-27). Their `role` is null by design: the source often does state who led, but deriving it programmatically would be inference, so it was not attempted. Re-source those rows if role matters.",
    "note": "NEA's own site publishes no per-investment announcements at all. Every press-release URL in nea.com/sitemap.xml is a personnel appointment/promotion or a fund close - not one is a portfolio financing. /insights is undated commentary with no investment announcements in the window, and /portfolio is a name-and-logo list carrying the disclaimer that it is 'for illustrative purposes only ... as of September 2023', with no rounds, dates or announcement links, so participation in the window cannot be enumerated from it. Coverage therefore rests entirely on press search, which cannot be shown to be exhaustive for a firm of NEA's deal volume, and NEA is very often named only as one participant deep inside another investor's release. Two in-window candidates were dropped for lack of usable evidence: Nitra's 2026-03-10 $187M financing (NEA is named in the equity investor list but no single sentence names both NEA and Nitra) and Chapter's April 2026 Series E (NEA not named in the primary investor list). Databento (2026-07-09) and CuspAI (2026-07) were checked and are outside the window.",
    "sources": [
      "https://www.nea.com/sitemap.xml",
      "https://www.nea.com/news/press-releases",
      "https://www.nea.com/portfolio",
      "https://www.nea.com/insights",
      "https://alleywatch.com/2026/03/us-startup-funding-top-largest-february-2026-vc/",
      "https://alleywatch.com/2026/04/us-startup-funding-top-largest-march-2024-vc-2/",
      "https://alleywatch.com/2026/05/us-startup-funding-top-largest-april-2026-vc/",
      "https://www.alleywatch.com/2026/07/us-startup-funding-top-largest-june-2026-vc/",
      "https://www.distillintelligence.com/news/new-enterprise-associates",
      "https://techcrunch.com/tag/new-enterprise-associates/"
    ]
  },
  "neo": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Disambiguation was the main task. The target is Neo (neo.com), the San Francisco venture firm and community founded by Ali Partovi. I explicitly excluded Neo the blockchain/NEO token, Neo Financial, the Indian wealth-management startup Neo that Peak XV funded, and 1X's humanoid robot which is also called NEO (TechCrunch's 'neo' tag mixes all of these together, so that tag was used only as a lead generator, never as evidence). Each surviving candidate was confirmed by the brief's stated test - the announcement names 'Neo' inside an investor list alongside other venture firms - and Applied Compute is additionally confirmed on neo.com's own /companies page as a company founded by a Neo Scholar. On the firm site: neo.com is a client-rendered app, so I read it through a text-extraction proxy; it has /companies, /vc (a jobs board) and marketing pages, but NO /news, NO /blog, NO dated posts, and neo.com/sitemap.xml resolves to the homepage only. There is no firm-published dated list of any kind. Enumeration therefore came from press and from cross-referencing the 140 rows already in this dataset for 'Neo' in other firms' coInvestors lists, plus TechCrunch's neo and ali-partovi tag pages and Bing News RSS.",
    "note": "Not complete, and the least complete of the four. Neo publishes no news page, no blog and no dated portfolio, so there is no firm surface to enumerate from at all; its /companies page names only five scholar-founded companies followed by 'and more'. Worse, the name is unusable as a search key: full-text search for 'Neo' returns overwhelming noise (Neon Commerce, Neothera, NeoCognition, NEOintralogistics, the NEO token, Neo Financial, 1X's NEO robot), so the normal press sweep that worked for the other three firms could not be run. All three rows returned were found by cross-referencing other firms' investor lists rather than by any Neo-specific surface, which means the sample is biased toward rounds that a large co-investor also announced. Neo is an early-stage/accelerator investor whose typical cheque goes into rounds too small to be indexed this way, so the real H1 2026 count is near-certainly several times three. Excluded on purpose: Neo Residency (TechCrunch 2026-02-19) is a program launch with per-startup terms, not an announced financing in a named company; the July 2026 'Neo Raises $100M' item on FinSMEs is a different Neo and is out of window regardless. No candidate had to be dropped for unresolved ambiguity - every one I kept names Neo alongside other venture firms in an investor list.",
    "sources": [
      "https://neo.com/",
      "https://neo.com/companies",
      "https://neo.com/sitemap.xml",
      "https://techcrunch.com/tag/neo/",
      "https://techcrunch.com/tag/ali-partovi/",
      "https://www.finsmes.com/?s=%22Ali+Partovi%22"
    ]
  },
  "radical-ventures": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Entity confirmed as Radical Ventures, the Toronto AI-focused firm at radical.vc (Jordan Jacobs / Fei-Fei Li / Rob Toews); Radical Partners, Mark Cuban's Radical Investments and Radicle were excluded. radical.vc has no /news page; its publishing surface is /perspectives (curated, dated) plus /archive, which lists all 273 articles the site has ever published, newest first, grouped by month, and is the site's full enumeration. The archive was walked and cross-checked against /post-sitemap.xml (261 URLs - lastmod dates are all mid-August 2026 migration stamps and are useless for dating). Radical's H1 2026 output was: Jan - 'Beyond Chips' (podcast), 'Investing in Outset', and three undated founder-story reposts; Feb - 'Themes in AI to Watch in 2026'; Mar - 'Building an AI Native Startup' (podcast) and 'Investing in General Magic'; Apr - 'Powering the AI Era' (podcast); May - 'Building AI-Native Advertising' (podcast); Jun - three essays plus an external TechCrunch link. Only ONE new financing was announced by the firm in the window: General Magic. 'Investing in Outset' (published 2026-01-12) was DROPPED because its own first sentence reads 'Last month, Radical Ventures announced our lead investment in Outset's $30M Series B funding round' - i.e. the announcement was December 2025, outside the window. The Etched item Radical links under June 2026 (TechCrunch, 2026-06-30) was opened and does not name Radical Ventures, so no row. ASSEMBLY-STAGE CROSS-FILL: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and firm B had no row for that company and date, a row was created for firm B FROM THE SAME SOURCE - same URL, same date, same verbatim evidence quote, which was re-checked to name firm B and the company. 1 of this firm's rows arrived this way: Waabi (2026-01-29). Their `role` is null by design: the source often does state who led, but deriving it programmatically would be inference, so it was not attempted. Re-source those rows if role matters.",
    "note": "radical.vc publishes an 'Investing in X' / 'Our Investment in X' post for only a small subset of its deals (roughly one every month or two against a firm that deploys far more often), and the /portfolio pages carry no dates or round information, so the firm's own site cannot enumerate its participation. Independent cross-checking was not possible: the session's web-search budget was exhausted and every general search engine is robots-blocked for the fetch tool, leaving only TechCrunch's radical-ventures tag page, which has no H1 2026 entries. One row is therefore a floor, not a complete set.",
    "sources": [
      "https://radical.vc/archive/",
      "https://radical.vc/perspectives/",
      "https://radical.vc/post-sitemap.xml",
      "https://radical.vc/sitemap.xml",
      "https://radical.vc/portfolio/",
      "https://techcrunch.com/tag/radical-ventures/"
    ]
  },
  "ribbit-capital": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Entity confirmed as Ribbit Capital, the Palo Alto fintech specialist at ribbitcap.com. ribbitcap.com was fetched and enumerated: it is a single-page brand statement ('the future belongs to the rebels', 'conviction, capital, and a global network') with exactly one internal link ('Meet the rebels') and a Disclaimers footer - there is NO news page, NO blog, NO dated portfolio index and NO press-release surface of any kind. Ribbit LEAP, its SPAC vehicle, was treated as out of scope and no SPAC activity was recorded. Coverage therefore came entirely from press: TechCrunch's ribbit-capital tag page was walked in full and every 2026 item opened. Kept: Slash's $100M Series C (2026-04-16, Ribbit named as a lead) and Mach Industries' $300M Series C (2026-06-01, Ribbit named as co-lead). Excluded: Capital One's acquisition of Brex (2026-01-22, an acquisition, not a financing); the $35M 5(c) Capital predictions-markets fund (2026-03-23, a fund raise, and the named backer is Micky Malka personally rather than Ribbit Capital); Enigma's $71M (2026-07-27, outside the window). Etched's disclosure of a $500M tranche at a $5B valuation (TechCrunch, 2026-06-30) was DROPPED: the article names Ribbit Capital only in a list of the company's overall investor group ('VentureTech Alliance, Jane Street, Hudson River Trading, Two Sigma, Ribbit Capital, and Stripes, with Stripes leading the recent round') and does not place Ribbit in the announced round itself. ASSEMBLY-STAGE CROSS-FILL: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and firm B had no row for that company and date, a row was created for firm B FROM THE SAME SOURCE - same URL, same date, same verbatim evidence quote, which was re-checked to name firm B and the company. 6 of this firm's rows arrived this way: Cognition (2026-05-28); Decagon (2026-01-29); Evervault (2026-03-05); Listen Labs (2026-01-14); Morpho (2026-06-09); Stedi (2026-03-30). Their `role` is null by design: the source often does state who led, but deriving it programmatically would be inference, so it was not attempted. Re-source those rows if role matters.",
    "note": "Ribbit has no public announcement surface at all - ribbitcap.com publishes a brand manifesto and nothing else: no news, no blog, no dated portfolio, no press releases - so completeness cannot be established from the firm. Coverage relies wholly on press, which cannot be shown to be exhaustive, and here it is demonstrably not: the Mach Industries round Ribbit co-led is not even on TechCrunch's own ribbit-capital tag page (it surfaced only via a founder profile), which proves the tag page under-reports. The session's web-search budget was exhausted and every general search engine is robots-blocked for the fetch tool, so no systematic month-by-month press sweep was possible. Two rows should be read as a floor for a firm that is certainly more active than that.",
    "sources": [
      "https://ribbitcap.com/",
      "https://techcrunch.com/tag/ribbit-capital/",
      "https://techcrunch.com/2026/04/16/slash-a-ramp-competitor-founded-by-teenagers-raises-100m-at-1-4b-valuation/",
      "https://techcrunch.com/2026/06/01/defense-tech-darling-mach-industries-hits-1-8b-valuation-a-4x-jump-in-a-year/"
    ]
  },
  "sequoia": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Started on Sequoia's own site: sequoiacap.com home, /our-companies, and the news story category (sequoiacap.com/?story_category=news), plus every 'Partnering with ...' article I could surface, opening each one for its publication date. That surface is not enumerable - the news index renders only the four most recent items with no pagination and no dates, /news 404s, and the XML sitemap contains company, people and tag URLs but no article URLs - so it cannot be walked month by month. I therefore ran press and press-release searches for each month of the window ('led by Sequoia', 'participation from Sequoia', month names, round labels) and used monthly largest-round roundups (AlleyWatch US/global lists for Jan-Jun 2026), Crunchbase News most-active-investor pieces, and a Crunchbase-derived Sequoia portfolio-round tracker purely as candidate lists. Every candidate was then opened at its actual announcement (company press release, PR Newswire/Business Wire, Fortune, TechCrunch, Sifted, TNW, or Sequoia's own post) and kept only where a verbatim sentence names Sequoia as an investor in that specific round. IDENTITY BOUNDARY: this record is Sequoia Capital (US/Europe) only. Peak XV Partners and HongShan are treated as separate firms and their participations were discarded - e.g. Peak XV is named as a participant in Supabase's June 2026 Series F and in Exaforce's May 2026 Series B, and neither is recorded here as a Sequoia deal. 'Sequoia Global Equities' (SCGE), named in Ayar Labs' March 2026 Series E, was likewise excluded as a distinct entity. Also dropped: rounds where Sequoia is named only as a prior/previous investor rather than a participant (Decart's May 2026 $300M round, Corgi's Series B), rounds only reported or rumoured (the January 2026 FT report that Sequoia would join Anthropic - counted only once Anthropic's own February 12 announcement named Sequoia Capital), and rounds announced outside the window (Sable, Bunkerhill Health, Scanner, Corma, Preview, Valar Atomics - all July/August 2026; fal's Series D - December 2025). ASSEMBLY-STAGE CROSS-FILL: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and firm B had no row for that company and date, a row was created for firm B FROM THE SAME SOURCE - same URL, same date, same verbatim evidence quote, which was re-checked to name firm B and the company. 5 of this firm's rows arrived this way: Engram (2026-06-23); Harvey (2026-03-25); Nominal (2026-03-06); Sail Research (2026-06-25); WithCoverage (2026-01-13). Their `role` is null by design: the source often does state who led, but deriving it programmatically would be inference, so it was not attempted. Re-source those rows if role matters.",
    "note": "Volume too high to establish completeness. 29 rows are verified here and more are certainly missing. Sequoia publishes no dated, enumerable list of its investments: there is no paginated news archive, the sitemap carries no article URLs, and it writes a 'Partnering with ...' post for only a fraction of its deals, so the enumeration surface is press search, which cannot be shown to be exhaustive. A Crunchbase-derived tracker lists many further Sequoia-associated H1 2026 rounds that I could not tie to a primary announcement naming Sequoia in that round within this pass - among them Sail Research, Cortea, Sandstone, Dust, Turnkey, XBow, Ethos, Enter, Zum, Kalshi, Applied Compute, Crosby, Edra, Atlys, Traversal, ARQ, RobCo, Mito, Blockit AI, Cimba and WithCoverage - so the true H1 2026 count is materially higher than what is returned. Coverage is thinnest for March 2026 and for small seed rounds, which rarely appear in monthly round-ups.",
    "sources": [
      "https://sequoiacap.com/",
      "https://sequoiacap.com/?story_category=news",
      "https://sequoiacap.com/our-companies",
      "https://sequoiacap.com/sitemap.xml",
      "https://alleywatch.com/2026/03/us-startup-funding-top-largest-february-2026-vc/",
      "https://alleywatch.com/2026/04/global-startup-funding-top-largest-march-2026-vc/",
      "https://alleywatch.com/2026/05/us-startup-funding-top-largest-april-2026-vc/",
      "https://alleywatch.com/2026/06/us-startup-funding-top-largest-may-2026-vc/",
      "https://www.alleywatch.com/2026/07/us-startup-funding-top-largest-june-2026-vc/",
      "https://news.crunchbase.com/venture/most-active-us-investors-january-2026-lightspeed-sequoia/",
      "https://techcrunch.com/2026/02/17/here-are-the-17-us-based-ai-companies-that-have-raised-100m-or-more-in-2026/",
      "https://revli.com/sequoia-capital-funded-startups/"
    ]
  },
  "softbank-vision-fund": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Entity boundary applied as instructed. Rows are kept only where the announcement names SoftBank Vision Fund / SoftBank Vision Fund 2 / SoftBank Investment Advisers, or names 'SoftBank Group' (one such row, Kandou AI, is flagged in its evidence field). Rounds naming SoftBank Corp. (the Japanese telecom), SoftBank Robotics or PayPay were treated as out of scope; none survived to a row. SoftBank's own balance-sheet moves were excluded as M&A / corporate rather than venture financings: the 2026-06-04 acquisition of T&D Financial Life Insurance shares, the 2026-07-02 formation of 'SB Neo', the 2026-02-19 $33B US gas power plant plan and the 2026-05-30 up-to-EUR-75B French data centre plan. The OpenAI commitment is recorded ONCE, on its 2026-02-27 announcement date; the later releases that merely execute it (2026-03-27 bridge facility, 2026-04-01 first tranche, 2026-07-01 second tranche) were deliberately not made into separate rows. Enumeration surfaces actually worked: visionfund.com navigation and sitemap.xml (600+ URLs: /insights thought-leadership posts, /sozo-pulse survey pages, /team profiles and 400+ undated portfolio-company pages - there is no /news path, /news returns 404, and /presentations is password-protected, so the site publishes NO dated list of investments); group.softbank/en/news and /news/press walked for 2026 (these carry corporate and financing releases plus the OpenAI investment, not portfolio rounds); AlleyWatch's monthly largest-global-round tables for February, March, April and June 2026; AlleyWatch's largest-US-round table for May 2026; TechCrunch tag pages /tag/softbank/, /tag/softbank-vision-fund/ and /tag/vision-fund/ (all walked in full; nothing in-window); FinSMEs per-company lookups to obtain the actual announcement and a verbatim investor sentence for each candidate.",
    "note": "Not complete. (1) visionfund.com publishes no dated news, announcement or investment feed at all - its portfolio index is undated and its only dated surfaces are thought-leadership and survey pages - so the firm's own site cannot be used to enumerate the window; group.softbank's press feed carries only corporate/financing releases plus the OpenAI commitment, not portfolio rounds. (2) This session's web-search quota was already exhausted (200/200) before work began, so NO keyword press search ('SoftBank Vision Fund' + 'Series A/B', month by month) was possible; every candidate had to come from a crawlable index page. That is a severe limit for a fund whose participations are announced by portfolio companies. (3) The substitute index, AlleyWatch's monthly largest-round tables, exists for Feb/Mar/Apr (global) and May (US only) and June (global) - there is no January 2026 roundup at all and no global May table, so January is uncovered and May is covered only for US rounds. (4) Those tables only list the very largest rounds of each month, so any smaller SVF participation in the window is invisible to this method. Expect the true H1 2026 count to be materially higher than the four rows returned.",
    "sources": [
      "https://visionfund.com/",
      "https://visionfund.com/sitemap.xml",
      "https://visionfund.com/portfolio",
      "https://group.softbank/en/news",
      "https://group.softbank/en/news/press",
      "https://techcrunch.com/tag/softbank/",
      "https://techcrunch.com/tag/softbank-vision-fund/",
      "https://techcrunch.com/tag/vision-fund/",
      "https://www.alleywatch.com/2026/03/global-startup-funding-top-largest-february-2026-vc/",
      "https://www.alleywatch.com/2026/04/global-startup-funding-top-largest-march-2026-vc/",
      "https://www.alleywatch.com/2026/05/global-startup-funding-top-largest-april-2026-vc/",
      "https://www.alleywatch.com/2026/06/us-startup-funding-top-largest-may-2026-vc/",
      "https://www.alleywatch.com/2026/07/global-startup-funding-top-largest-june-2026-vc/"
    ]
  },
  "spark-capital": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Entity confirmed as Spark Capital of Boston/San Francisco (sparkcapital.com, the backer of Twitter, Slack, Discord, Coinbase, Anthropic); Spark Growth, Spark Ventures, SparkLabs, Spark Microsystems and Genspark were checked against context and excluded (a FinSMEs hit for 'Spark' in March 2026 was Spark Microsystems, a different company, and the 'Genspark' hits are a name collision, not Spark Capital). The firm's site has exactly three surfaces - / (About), /team and /companies. /companies is an undated index of 45 portfolio companies showing only name, one-line description, website and (where applicable) exit; it carries no rounds, dates or amounts, and a handful of companies link to old narrative blog posts. sparkcapital.com/sitemap.xml does not resolve. There is no news, press or announcements page. Enumeration therefore ran the other way round: I took the 45-company portfolio index as a candidate list and looked each plausible name up in FinSMEs and TechCrunch tag pages for an H1 2026 round, and separately scanned AlleyWatch's monthly largest-round tables (Feb/Mar/Apr/Jun global, May US) for rows naming Spark Capital. Every kept row required a contiguous verbatim passage naming both Spark Capital and the company. ASSEMBLY-STAGE CROSS-FILL: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and firm B had no row for that company and date, a row was created for firm B FROM THE SAME SOURCE - same URL, same date, same verbatim evidence quote, which was re-checked to name firm B and the company. 5 of this firm's rows arrived this way: Gambit Security (2026-02-25); Granola (2026-03-25); Higharc (2026-06-30); Novellia (2026-06-02); XDOF (2026-06-19). Their `role` is null by design: the source often does state who led, but deriving it programmatically would be inference, so it was not attempted. Re-source those rows if role matters.",
    "note": "Not complete. (1) Spark publishes nothing dated - no news page, no per-investment post, no working sitemap - so the firm's own site cannot enumerate the window; the portfolio index tells you WHO Spark backs but never WHEN or in WHICH round. (2) This session's web-search quota was exhausted (200/200) before work started, so no month-by-month keyword press search was possible; candidates came only from crawlable indexes, which structurally miss seed and Series A rounds - exactly the stage Spark is most active at. (3) A concrete miss is already visible: sparkcapital.com/companies lists 'Generalist', and AlleyWatch's June table credits Spark Capital in Generalist AI's $400M round, but the actual 2026-06-05 announcement (FinSMEs) names only Radical Ventures, 8VC, Union Square Ventures, Hanabi Capital, NVentures and Bezos Expeditions - no source naming both Spark and the company could be found, so the row was dropped rather than guessed. Similarly, AlleyWatch's June prose credits Spark in Suno's Series D while its own table does not; unresolved, no row. (4) Portfolio names checked for in-window rounds and found NOT to name Spark in the announcement (so correctly absent): Kalshi (2026-04-09 Series E top-up, 2026-05-08 Series F, 2026-05-22 Series F extension), Ramp (2026-06-04 Series F), Chainguard, Abridge, Crusoe, Base Power. Many other portfolio names were not reachable at all. Treat four rows as a floor, not a count.",
    "sources": [
      "https://www.sparkcapital.com/",
      "https://www.sparkcapital.com/companies",
      "https://techcrunch.com/tag/spark-capital/",
      "https://www.alleywatch.com/2026/03/global-startup-funding-top-largest-february-2026-vc/",
      "https://www.alleywatch.com/2026/04/global-startup-funding-top-largest-march-2026-vc/",
      "https://www.alleywatch.com/2026/05/global-startup-funding-top-largest-april-2026-vc/",
      "https://www.alleywatch.com/2026/06/us-startup-funding-top-largest-may-2026-vc/",
      "https://www.alleywatch.com/2026/07/global-startup-funding-top-largest-june-2026-vc/",
      "https://www.finsmes.com/"
    ]
  },
  "tcv": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Entity confirmed as TCV / Technology Crossover Ventures (tcv.com), growth stage. tcv.com/news does publish a post per new investment ('Our Investment in X') and splits them into /news/category/portfolio-news, /thought-leadership and /tcv-news, but the listing shows NO dates and the article bodies are client-rendered - every attempt to fetch an individual /news/ article returned only metadata and navigation, never the body or a date line. tcv.com/sitemap.xml resolves to sitemap-0.xml, which does enumerate all 60 /news/ URLs in reverse-chronological order, but every lastmod is the same bulk 2026-08-12T23:43 site-migration timestamp, so it cannot be date-filtered either. I therefore used the sitemap's ordering as a candidate generator: onX Maps is independently dated 2025-11-03, so the 13 posts above it in the list span Nov 2025 to Aug 2026, and each of those candidates (Pennylane, Neara, Cloudsmith, Actively AI, Corgi, Mercury, ICEYE, Fireworks, Onyx Security) was then looked up in FinSMEs and TechCrunch to find the real announcement, its date, and a verbatim passage naming both TCV and the company. That was cross-checked against AlleyWatch's monthly largest-round tables (Feb/Mar/Apr/Jun global, May US). The brief's exclusion of secondary purchases was applied: ICEYE's 2026-02-11 Series E was paired with a EUR 50m secondary placement and in any case does not name TCV; the ICEYE row kept here is the 2026-06-09 round, which its source explicitly calls 'a primary Series F funding'.",
    "note": "Not complete, for three reasons. (1) TCV's news index is the right surface but is unusable as a dated list: no dates on the listing, no retrievable article bodies, and sitemap lastmods that are all a single migration timestamp. Ordering alone bounds a post's date, it does not establish it. (2) Two TCV investment posts sit inside the Nov-2025-to-Aug-2026 band and are therefore live candidates for this window but could NOT be dated or evidenced and are NOT returned: 'Pennylane: Building the Financial Operating System for European SMEs' and 'Neara: Building the AI-Native Digital Twin for Critical Infrastructure'. FinSMEs' most recent Pennylane round is 2024-02-09 and its most recent Neara round is 2024-10-30; TechCrunch has nothing on either since 2024. Both should be re-sourced in a later pass - if either is in-window this record is short by a row. (3) This session's web-search quota was exhausted (200/200) before work began, so no month-by-month keyword press search ('led by TCV', 'participation from TCV') was possible, and TCV does not post about every participation - the ICEYE Series F row here came from press, not from a TCV post. Posts checked and confirmed OUT of window: Fireworks Series D (company blog, 2026-07-15), Onyx Security Series B (2026-07-30; the earlier 2026-03-12 Onyx Security round was led by Conviction and Cyberstarts and does not name TCV), onX Maps (2025-11-03). Also confirmed out: Corgi's 2026-01-09 $108M round, which does not name TCV, and ICEYE's 2026-02-11 Series E, which does not either.",
    "sources": [
      "https://www.tcv.com/news",
      "https://www.tcv.com/news/category/portfolio-news",
      "https://www.tcv.com/sitemap.xml",
      "https://www.tcv.com/sitemap-0.xml",
      "https://techcrunch.com/tag/tcv/",
      "https://www.finsmes.com/?s=TCV",
      "https://www.alleywatch.com/2026/06/us-startup-funding-top-largest-may-2026-vc/",
      "https://www.alleywatch.com/2026/07/global-startup-funding-top-largest-june-2026-vc/"
    ]
  },
  "threshold-ventures": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Entity confirmed as Threshold Ventures (threshold.vc), the former DFJ venture practice run by Josh Stein and Heidi Roizen. Draper Associates, Draper Esprit / Molten Ventures, DFJ Growth and every other Draper-family entity were excluded, and each candidate was checked to name 'Threshold Ventures' (or 'Threshold' in Threshold's own post) specifically. Two surfaces were worked. (1) threshold.vc/portfolio lists ~120 companies each tagged with a 'Year Invested'; six carry 2026 - Bluefish, Core Automation, Enclave, Interia, Sequen and Veritus - which gave the candidate set. (2) threshold.vc/content is the firm's only dated feed and carries just three 2026 items: the Bluefish Series B (2026-04-14), the Sequen Series A (2026-03-18) and Josh Stein's InertiaFusion perspective (2026-02-11). TechCrunch's threshold-ventures tag page was walked in full and yielded the Inertia Enterprises $450M Series A (2026-02-11). All three surviving candidates were opened and each yields a contiguous verbatim passage naming both Threshold Ventures and the company.",
    "note": "The portfolio page gives a year of investment but no round, no date and no announcement link, so participation inside a six-month window cannot be enumerated from it. Three of the six companies tagged 'Year Invested 2026' - Core Automation, Enclave and Veritus - have no announcement I could locate or date; they may have been announced inside the window, later in 2026, or not at all, and the portfolio page does not say. Threshold's /content feed is selective (it carried only three 2026 items) and no news/press-release page exists on the site. The session's web-search budget was exhausted and every general search engine is robots-blocked for the fetch tool, so those three companies could not be chased down and no systematic press sweep was possible. Note also that the company Threshold's portfolio spells 'Interia' is spelled 'Inertia Enterprises' in the funding announcement; the row uses the announcement spelling.",
    "sources": [
      "https://threshold.vc/portfolio",
      "https://threshold.vc/content",
      "https://techcrunch.com/tag/threshold-ventures/",
      "https://www.bluefishai.com/blog/bluefish-raises-43-million-series-b-to-power-agentic-marketing-for-the-fortune-500",
      "https://techcrunch.com/2026/03/18/sequen-snags-16m-to-bring-tiktok-style-personalization-tech-to-any-consumer-company/",
      "https://techcrunch.com/2026/02/11/twilio-co-founders-fusion-power-startup-raises-450m-from-bessemer-and-alphabets-gv/"
    ]
  },
  "y-combinator": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "method": "Checked ycombinator.com/blog across the window month by month: its 2026 posts are batch/program news, partner appointments and portfolio IPO congratulations, and it never announces YC's participation in a portfolio company's priced round, so YC's own site is not an enumeration surface for the included category. Coverage therefore rests entirely on press and press-release search: monthly largest-round roundups (AlleyWatch US/global, Jan-Jun 2026), TechCrunch and Fortune funding coverage, an AI-funding deal tracker, and PR Newswire / Business Wire releases, searching for 'Y Combinator' inside the investor list of round announcements. Each candidate was opened at its actual announcement and kept only where a verbatim sentence names Y Combinator as an investor participating in that specific round. ASSEMBLY-STAGE CROSS-FILL: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and firm B had no row for that company and date, a row was created for firm B FROM THE SAME SOURCE - same URL, same date, same verbatim evidence quote, which was re-checked to name firm B and the company. 4 of this firm's rows arrived this way: 10x Science (2026-04-22); Emergent (2026-01-20); Mine (2026-01-26); Science (2026-03-06). Their `role` is null by design: the source often does state who led, but deriving it programmatically would be inference, so it was not attempted. Re-source those rows if role matters.",
    "note": "SPECIAL RULE APPLIED, and it defines what 'complete' means here. The standard YC batch investment - the cheque YC writes into every company in every batch, several hundred a year - is EXCLUDED, as are press mentions that merely describe a company as 'YC-backed', a 'Y Combinator grad' or 'YC W26' without naming YC as an investor in the round being announced (e.g. Corgi's May 2026 Series B, where YC is cited only as a backer of the earlier seed and Series A, and Abacum, where YC is described as an existing investor rather than a participant). Only follow-on / participating investments in announced priced or seed rounds outside the batch deal are included. `complete: false` therefore refers to completeness of that included category ONLY: it says nothing about YC's batch investing. Within that category the set cannot be shown to be exhaustive - YC turns up as a named participant in a long tail of Series A and Series B rounds that never reach the monthly round-ups, YC publishes no list of its follow-on participations, and many announcements omit the full investor list entirely. Terminal's $20M Series A, which names YC, was announced 2026-07-29 and is outside the window.",
    "sources": [
      "https://www.ycombinator.com/blog",
      "https://alleywatch.com/2026/03/us-startup-funding-top-largest-february-2026-vc/",
      "https://alleywatch.com/2026/04/global-startup-funding-top-largest-march-2026-vc/",
      "https://alleywatch.com/2026/05/us-startup-funding-top-largest-april-2026-vc/",
      "https://alleywatch.com/2026/06/us-startup-funding-top-largest-may-2026-vc/",
      "https://www.alleywatch.com/2026/07/us-startup-funding-top-largest-june-2026-vc/",
      "https://www.crescendo.ai/news/latest-vc-investment-deals-in-ai-startups",
      "https://news.crunchbase.com/venture/most-active-us-investors-january-2026-lightspeed-sequoia/"
    ]
  }
};

/* Free-text deal sector -> canonical taxonomy.js bucket slugs.
   Multi-valued on purpose: "Healthcare AI" genuinely is both.
   Kept separate from taxonomy.js SECTOR_MAP so that adding a
   deal label can never change which firms appear on an SEO
   landing page. */
const DEAL_SECTOR_MAP = {
  "AI": [
    "ai"
  ],
  "AI Assistants": [
    "ai"
  ],
  "AI Benchmarking": [
    "ai"
  ],
  "AI Chips": [
    "ai",
    "hardware"
  ],
  "AI Companions": [
    "ai",
    "consumer"
  ],
  "AI Customer Research": [
    "ai",
    "enterprise-software"
  ],
  "AI Data Infrastructure": [
    "ai",
    "developer-tools"
  ],
  "AI Data Platform": [
    "ai",
    "developer-tools"
  ],
  "AI Drug Discovery": [
    "ai",
    "healthcare"
  ],
  "AI Evaluation": [
    "ai"
  ],
  "AI Infrastructure": [
    "ai"
  ],
  "AI Marketing": [
    "ai",
    "enterprise-software"
  ],
  "AI Models": [
    "ai"
  ],
  "AI Networking Infrastructure": [
    "ai",
    "developer-tools"
  ],
  "AI Observability": [
    "ai"
  ],
  "AI Productivity": [
    "ai",
    "enterprise-software"
  ],
  "AI Research": [
    "ai"
  ],
  "AI Research Automation": [
    "ai"
  ],
  "AI Software Development": [
    "ai",
    "developer-tools"
  ],
  "AI Software Engineering": [
    "ai",
    "developer-tools"
  ],
  "AI Training Infrastructure": [
    "ai"
  ],
  "AI Verification": [
    "ai"
  ],
  "AI Video": [
    "ai",
    "consumer"
  ],
  "AI Video Software": [
    "ai"
  ],
  "AI for Materials Discovery": [
    "ai",
    "deep-tech"
  ],
  "Accounting AI": [
    "ai",
    "fintech"
  ],
  "Advanced Manufacturing": [
    "industrial-tech"
  ],
  "Advanced Materials": [
    "deep-tech"
  ],
  "AgTech": [
    "food-agriculture"
  ],
  "Agentic AI": [
    "ai"
  ],
  "Agentic Finance": [
    "ai",
    "fintech"
  ],
  "Agriculture Technology": [
    "food-agriculture"
  ],
  "Alternative Proteins": [
    "climate"
  ],
  "Artificial Intelligence": [
    "ai"
  ],
  "Audit and Compliance Software": [
    "enterprise-software"
  ],
  "Autonomous Driving": [
    "mobility"
  ],
  "Autonomous Trucking": [
    "mobility"
  ],
  "Autonomous Vehicles": [
    "mobility"
  ],
  "Aviation AI": [
    "ai",
    "mobility"
  ],
  "Aviation Safety": [
    "mobility"
  ],
  "Banking": [
    "fintech"
  ],
  "Batteries": [
    "climate",
    "hardware"
  ],
  "Biopharma": [
    "healthcare"
  ],
  "Biotech": [
    "healthcare"
  ],
  "Blockchain Data": [
    "crypto"
  ],
  "Blockchain Infrastructure": [
    "crypto"
  ],
  "Business Infrastructure": [
    "enterprise-software"
  ],
  "CPG Software": [
    "enterprise-software"
  ],
  "Cloud Data Infrastructure": [
    "developer-tools"
  ],
  "Cloud Infrastructure": [
    "developer-tools"
  ],
  "Computational Biology": [
    "healthcare"
  ],
  "Compute Markets": [
    "developer-tools",
    "marketplaces"
  ],
  "Confidential AI": [
    "ai",
    "cybersecurity"
  ],
  "Construction Compliance": [
    "enterprise-software",
    "industrial-tech"
  ],
  "Construction Robotics": [
    "industrial-tech"
  ],
  "Construction Tech": [
    "industrial-tech"
  ],
  "Consumer Fintech": [
    "fintech",
    "consumer"
  ],
  "Consumer Hardware": [
    "consumer"
  ],
  "Consumer Health": [
    "healthcare",
    "consumer"
  ],
  "Consumer Shopping": [
    "consumer"
  ],
  "Consumer Software": [
    "consumer"
  ],
  "Critical Minerals": [
    "industrial-tech"
  ],
  "Crypto / DeFi": [
    "crypto"
  ],
  "Crypto Infrastructure": [
    "crypto"
  ],
  "Crypto Trading": [
    "crypto",
    "fintech"
  ],
  "Customer Service AI": [
    "ai",
    "enterprise-software"
  ],
  "Cybersecurity": [
    "cybersecurity"
  ],
  "Data Infrastructure": [
    "developer-tools"
  ],
  "Data Marketplace": [
    "marketplaces",
    "developer-tools"
  ],
  "Data Security": [
    "cybersecurity"
  ],
  "Database Software": [
    "developer-tools"
  ],
  "DeFi Lending": [
    "crypto",
    "fintech"
  ],
  "Defense": [
    "defense-tech"
  ],
  "Defense Aviation": [
    "defense-tech"
  ],
  "Defense Tech": [
    "defense-tech"
  ],
  "Defense Technology": [
    "defense-tech"
  ],
  "Design Software": [
    "enterprise-software"
  ],
  "Design Tools": [
    "developer-tools"
  ],
  "Developer Infrastructure": [
    "developer-tools"
  ],
  "Developer Security": [
    "cybersecurity"
  ],
  "Developer Tools": [
    "developer-tools"
  ],
  "Digital Health": [
    "healthcare"
  ],
  "Digital Identity": [
    "cybersecurity"
  ],
  "Edge Computing": [
    "developer-tools"
  ],
  "Education": [
    "edtech"
  ],
  "Energy": [
    "climate"
  ],
  "Engineering AI": [
    "ai",
    "industrial-tech"
  ],
  "Engineering Analytics": [
    "developer-tools"
  ],
  "Engineering Data": [
    "developer-tools",
    "industrial-tech"
  ],
  "Enterprise AI": [
    "ai"
  ],
  "Enterprise AI Agents": [
    "ai",
    "enterprise-software"
  ],
  "Enterprise Automation": [
    "enterprise-software"
  ],
  "Enterprise IT": [
    "enterprise-software"
  ],
  "Enterprise Software": [
    "enterprise-software"
  ],
  "Equipment Rental Software": [
    "enterprise-software",
    "industrial-tech"
  ],
  "Expert Networks": [
    "marketplaces"
  ],
  "Financial Services AI": [
    "ai",
    "fintech"
  ],
  "Financial Services Automation": [
    "fintech",
    "enterprise-software"
  ],
  "Fintech": [
    "fintech"
  ],
  "Fintech Infrastructure": [
    "fintech"
  ],
  "Food Tech": [
    "food-agriculture"
  ],
  "Fund Administration": [
    "fintech"
  ],
  "Fusion Energy": [
    "climate"
  ],
  "Gaming": [
    "consumer"
  ],
  "Gene Therapy": [
    "healthcare"
  ],
  "Go-to-Market Software": [
    "enterprise-software"
  ],
  "GovTech": [
    "enterprise-software"
  ],
  "Growth Software": [
    "enterprise-software"
  ],
  "HR Tech": [
    "enterprise-software"
  ],
  "Health Tech": [
    "healthcare"
  ],
  "Healthcare": [
    "healthcare"
  ],
  "Healthcare AI": [
    "healthcare",
    "ai"
  ],
  "Healthcare IT": [
    "healthcare",
    "enterprise-software"
  ],
  "Healthcare Infrastructure": [
    "healthcare"
  ],
  "Healthcare Revenue Cycle": [
    "healthcare"
  ],
  "Healthcare Services": [
    "healthcare"
  ],
  "Healthcare Software": [
    "healthcare"
  ],
  "Home Services Software": [
    "enterprise-software"
  ],
  "IT Management Software": [
    "enterprise-software"
  ],
  "IT Operations": [
    "enterprise-software",
    "developer-tools"
  ],
  "Identity Infrastructure": [
    "cybersecurity"
  ],
  "Industrial Robotics": [
    "robotics",
    "industrial-tech"
  ],
  "Industrial Software": [
    "industrial-tech",
    "enterprise-software"
  ],
  "Infrastructure Software": [
    "enterprise-software"
  ],
  "Insurtech": [
    "fintech"
  ],
  "Legal AI": [
    "ai",
    "enterprise-software"
  ],
  "Legal Services": [
    "enterprise-software"
  ],
  "Legal Tech": [
    "enterprise-software"
  ],
  "Life Sciences AI": [
    "healthcare",
    "ai"
  ],
  "Life Sciences Software": [
    "healthcare",
    "enterprise-software"
  ],
  "Logistics": [
    "industrial-tech"
  ],
  "Longevity Biotech": [
    "healthcare"
  ],
  "Manufacturing": [
    "industrial-tech"
  ],
  "Manufacturing AI": [
    "ai",
    "industrial-tech"
  ],
  "Manufacturing Software": [
    "industrial-tech"
  ],
  "Market Data": [
    "fintech"
  ],
  "Market Research Software": [
    "enterprise-software"
  ],
  "Marketing Software": [
    "enterprise-software"
  ],
  "Marketing Tech": [
    "enterprise-software"
  ],
  "Marketing Technology": [
    "enterprise-software"
  ],
  "Materials Discovery": [
    "deep-tech"
  ],
  "Mining & Energy AI": [
    "ai",
    "industrial-tech"
  ],
  "Mortgage Tech": [
    "fintech",
    "proptech"
  ],
  "Networking": [
    "developer-tools"
  ],
  "Neurotech": [
    "healthcare",
    "deep-tech"
  ],
  "Nuclear Energy": [
    "climate"
  ],
  "Personal Finance": [
    "fintech"
  ],
  "Personalization Software": [
    "enterprise-software"
  ],
  "Pet Healthcare": [
    "consumer",
    "healthcare"
  ],
  "Physical AI Data": [
    "ai",
    "robotics"
  ],
  "Procurement Software": [
    "enterprise-software"
  ],
  "Productivity Software": [
    "enterprise-software"
  ],
  "Proptech": [
    "consumer"
  ],
  "Quantum Computing": [
    "deep-tech"
  ],
  "R&D Software": [
    "enterprise-software",
    "deep-tech"
  ],
  "Real Estate Tech": [
    "proptech"
  ],
  "Real Estate Technology": [
    "enterprise-software"
  ],
  "RegTech": [
    "fintech"
  ],
  "Revenue Software": [
    "enterprise-software"
  ],
  "Risk Management Software": [
    "enterprise-software",
    "fintech"
  ],
  "Robotics": [
    "deep-tech"
  ],
  "Robotics Hardware": [
    "robotics",
    "hardware"
  ],
  "SMB Software": [
    "enterprise-software"
  ],
  "Scientific AI": [
    "ai",
    "deep-tech"
  ],
  "Scientific R&D Software": [
    "enterprise-software"
  ],
  "Semiconductor Design": [
    "hardware",
    "deep-tech"
  ],
  "Semiconductor Interconnect": [
    "hardware",
    "deep-tech"
  ],
  "Semiconductors": [
    "deep-tech"
  ],
  "Services AI": [
    "ai",
    "enterprise-software"
  ],
  "Small Business Software": [
    "enterprise-software"
  ],
  "Social Media": [
    "consumer"
  ],
  "Software": [
    "enterprise-software"
  ],
  "Software Supply Chain": [
    "cybersecurity",
    "developer-tools"
  ],
  "Sovereign AI": [
    "ai"
  ],
  "Space": [
    "deep-tech"
  ],
  "Space Technology": [
    "space"
  ],
  "Space and Defense": [
    "defense-tech",
    "deep-tech"
  ],
  "Stablecoin Infrastructure": [
    "crypto",
    "fintech"
  ],
  "Synthetic Biology": [
    "healthcare",
    "deep-tech"
  ],
  "Travel": [
    "mobility"
  ],
  "Vertical SaaS": [
    "enterprise-software"
  ],
  "Video AI": [
    "ai"
  ],
  "Voice AI": [
    "ai"
  ],
  "Wealth Management": [
    "fintech"
  ],
  "Weather Intelligence": [
    "deep-tech"
  ],
  "Women's Health": [
    "healthcare"
  ]
};

/* Verbatim co-investor string (lower-cased) -> firm slug.
   Only exact matches against a board firm's own name or short
   name are added automatically; anything requiring judgement is
   entered by hand, so a near-miss never silently becomes an edge
   in the co-investment graph. */
const COINVESTOR_ALIASES = {
  "500 global": "500-global",
  "8vc": "8vc",
  "a16z": "a16z",
  "accel": "accel",
  "acrew capital": "acrew-capital",
  "addition": "addition",
  "air street capital": "air-street-capital",
  "aix ventures": "aix-ventures",
  "alumni ventures": "alumni-ventures",
  "amplify partners": "amplify-partners",
  "andreessen horowitz": "a16z",
  "andreessen horowitz (a16z)": "a16z",
  "atomico": "atomico",
  "b capital": "b-capital-group",
  "bain capital ventures": "bain-capital-ventures",
  "balderton": "balderton-capital",
  "balderton capital": "balderton-capital",
  "base10 partners": "base10-partners",
  "basis set ventures": "basis-set-ventures",
  "battery ventures": "battery-ventures",
  "benchmark": "benchmark",
  "bessemer": "bessemer",
  "bessemer venture partners": "bessemer",
  "bling capital": "bling-capital",
  "bloomberg beta": "bloomberg-beta",
  "boxgroup": "boxgroup",
  "breakthrough energy ventures": "breakthrough-energy-ventures",
  "caffeinated capital": "caffeinated-capital",
  "canaan partners": "canaan-partners",
  "capitalg": "capitalg",
  "cisco investments": "cisco-investments",
  "citi ventures": "citi-ventures",
  "collaborative fund": "collaborative-fund",
  "construct capital": "construct-capital",
  "conviction": "conviction",
  "costanoa ventures": "costanoa-ventures",
  "cowboy ventures": "cowboy-ventures",
  "craft ventures": "craft-ventures",
  "crv": "crv",
  "cyberstarts": "cyberstarts",
  "dcm ventures": "dcm-ventures",
  "dcvc": "dcvc",
  "dcvc bio": "dcvc",
  "dell technologies capital": "dell-technologies-capital",
  "draper associates": "draper-associates",
  "elad gil": "elad-gil",
  "emergence capital": "emergence-capital",
  "entrepreneur first": "entrepreneur-first",
  "felicis": "felicis",
  "fifth wall": "fifth-wall",
  "fifty years": "fifty-years",
  "first round": "first-round-capital",
  "first round capital": "first-round-capital",
  "firstmark": "firstmark-capital",
  "fj labs": "fj-labs",
  "footwork": "footwork",
  "forerunner ventures": "forerunner-ventures",
  "foundation capital": "foundation-capital",
  "founders fund": "founders-fund",
  "gaingels": "gaingels",
  "general catalyst": "general-catalyst",
  "greenoaks": "greenoaks-capital",
  "greycroft": "greycroft",
  "greylock": "greylock",
  "greylock partners": "greylock",
  "gv": "gv",
  "haun ventures": "haun-ventures",
  "hof capital": "hof-capital",
  "homebrew": "homebrew",
  "human capital": "human-capital",
  "human ventures": "human-ventures",
  "hummingbird": "hummingbird-ventures",
  "hummingbird ventures": "hummingbird-ventures",
  "in-q-tel": "in-q-tel",
  "index": "index-ventures",
  "index ventures": "index-ventures",
  "initialized capital": "initialized-capital",
  "inovia capital": "inovia-capital",
  "insight partners": "insight-partners",
  "intel capital": "intel-capital",
  "ivp": "ivp",
  "kaszek": "kaszek-ventures",
  "kembara": "kembara",
  "khosla": "khosla-ventures",
  "khosla ventures": "khosla-ventures",
  "kindred ventures": "kindred-ventures",
  "kleiner perkins": "kleiner-perkins",
  "lakestar": "lakestar",
  "lightspeed": "lightspeed",
  "lightspeed venture partners": "lightspeed",
  "liquid 2": "liquid2-ventures",
  "liquid 2 ventures": "liquid2-ventures",
  "localglobe": "localglobe",
  "lux": "lux-capital",
  "lux capital": "lux-capital",
  "m13": "m13",
  "madrona": "madrona",
  "makers fund": "makers-fund",
  "mayfield": "mayfield",
  "menlo ventures": "menlo-ventures",
  "nea": "nea",
  "neo": "neo",
  "new enterprise associates": "nea",
  "nexus venture partners": "nexus-venture-partners",
  "nfx": "nfx",
  "northzone": "northzone",
  "norwest": "norwest-venture-partners",
  "nventures": "nventures",
  "oak hc/ft": "oak-hc-ft",
  "operator collective": "operator-collective",
  "orbimed": "orbimed",
  "oxford science enterprises": "oxford-science-enterprises",
  "paradigm": "paradigm",
  "peak xv": "peak-xv-partners",
  "peak xv partners": "peak-xv-partners",
  "pear vc": "pear-vc",
  "point72 ventures": "point72-ventures",
  "polychain": "polychain-capital",
  "qed investors": "qed-investors",
  "qualcomm ventures": "qualcomm-ventures",
  "quiet capital": "quiet-capital",
  "radical ventures": "radical-ventures",
  "redpoint": "redpoint",
  "redpoint ventures": "redpoint",
  "ribbit": "ribbit-capital",
  "ribbit capital": "ribbit-capital",
  "root ventures": "root-ventures",
  "s32": "s32",
  "salesforce ventures": "salesforce-ventures",
  "sapphire ventures": "sapphire-ventures",
  "scale venture partners": "scale-venture-partners",
  "seedcamp": "seedcamp",
  "sequoia": "sequoia",
  "sequoia capital": "sequoia",
  "serena ventures": "serena-ventures",
  "shield capital": "shield-capital",
  "signalfire": "signalfire",
  "softbank vision fund": "softbank-vision-fund",
  "softbank vision fund 2": "softbank-vision-fund",
  "soma capital": "soma-capital",
  "south park commons": "south-park-commons",
  "spark": "spark-capital",
  "spark capital": "spark-capital",
  "storm ventures": "storm-ventures",
  "susa ventures": "susa-ventures",
  "sv angel": "sv-angel",
  "tcv": "tcv",
  "techstars": "techstars",
  "the fintech fund": "the-fintech-fund",
  "threshold ventures": "threshold-ventures",
  "thrive": "thrive-capital",
  "thrive capital": "thrive-capital",
  "tiger global": "tiger-global",
  "toyota ventures": "toyota-ventures",
  "tribe capital": "tribe-capital",
  "true ventures": "true-ventures",
  "uncork capital": "uncork-capital",
  "union square ventures": "union-square-ventures",
  "upfront ventures": "upfront-ventures",
  "usv": "union-square-ventures",
  "valor capital": "valor-capital-group",
  "vertex ventures": "vertex-ventures",
  "vine ventures": "vine-ventures",
  "wing vc": "wing-vc",
  "workday ventures": "workday-ventures",
  "y combinator": "y-combinator",
  "y combinator's garry tan": "y-combinator",
  "yc": "y-combinator",
  "zhenfund": "zhenfund"
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FIRM_DEALS: FIRM_DEALS, DEAL_COVERAGE: DEAL_COVERAGE, DEAL_SECTOR_MAP: DEAL_SECTOR_MAP, COINVESTOR_ALIASES: COINVESTOR_ALIASES };
}
