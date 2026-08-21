/* ============================================================
   DATA-DEALS.JS  -  dated, sourced investment records

   Every row is one firm's participation in one financing, with the
   date, the source URL, and a verbatim quote naming both the firm
   and the portfolio company.

   573 rows across 24 firms, from THREE passes that sampled
   differently. Which comparisons are legitimate depends entirely on
   which pass a row came from, so that is what this header is for.

   PASS 1 (2026-08-14) - QUOTA SAMPLE
     Each firm contributed its most recent sourceable deals, capped
     at 6. Row counts measure the cap and the recency of press
     coverage. No trends, no cross-firm volume.

   PASS 2 (2026-08-20) - WINDOWED SWEEP, 2026-01-01 to 2026-06-30
     Every firm swept exhaustively with one method each, recorded in
     DEAL_COVERAGE. The month distribution came out flat rather than
     ramping, which is what makes the two halves of this window
     comparable. THIS IS THE ONLY COMPARABLE WINDOW.

   PASS 3 (2026-08-20) - EXTENSION, 2026-07-01 to 2026-08-20
     Same firms, same recorded sources, 51 more days. The rows are
     good and are merged here. The window is NOT comparable with
     pass 2, and the reason is measured rather than suspected.

   WHY THE EXTENSION IS NOT COMPARABLE
     Per-firm weekly rate in the extension against the same firm's
     rate in Jan-Jun: median x1.77, range x0.00 to x7.10. A whole-market
     77% jump in seven weeks is not plausible, and the spread rules
     out correcting it with any single factor - four firms returned
     nothing at all while others tripled.

     The cause is attention per firm-day, not sources. Pass 2 gave
     each researcher 181 days of a firm to cover; pass 3 gave 51 days
     of the same firm from the same surfaces. Same places, looked at
     harder. The research declared this rather than leaving it in the
     data to be discovered as a fake trend.

     Three firms also declared a changed method outright: ribbit-capital, sequoia, y-combinator.

   MONTHLY COUNTS, 2026 (pass 2 then pass 3):
     01 58  02 53  03 66  04 56  05 47  06 98  07 109  08 71

   HOW DEAL_COVERAGE ENCODES THIS
     completeFrom / completeTo   the COMPARABLE window. Anything that
                                 compares two periods must read only
                                 these, and must not reach past them.
     extendedTo                  how far the DATA runs. Rows exist to
                                 here; they are usable for counts and
                                 for the co-investment graph, never
                                 for a period comparison.
     extensionRateRatio          the measured ratio above, per firm.
     extensionComparable         false, everywhere, deliberately.

   WHAT IS PERMITTED
     Comparing the two halves of the pass-2 window. Counting deals in
     a single period as a FLOOR. Co-investment edges, which do not
     depend on completeness.

   WHAT IS FORBIDDEN
     Any comparison spanning 2026-06-30. Cross-firm volume ranking on
     rows dated after it, since the effort ratio varies from x0.00 to
     x7.10 between firms. Treating any count as a total.

   WHY EVERY FIRM IS STILL complete:false
     Almost no venture firm publishes a dated, enumerable log of
     every round it joins. Proven, not assumed: Bessemer's own dated
     news feed missed four of its own in-window rounds; 8VC's fully
     enumerable archive omits a round 8VC led; Radical's archive
     lists all 273 posts it has published and never mentions Waabi,
     where it is a named investor. Every count here is a floor.

   Where passes held the same deal, the later pass wins. Em dashes in
   quoted evidence were converted to hyphens for site consistency.
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
    "company": "Senra Systems",
    "announcedDate": "2026-07-15",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Advanced Manufacturing",
    "sectorEvidence": "a Cypress, CA-based software-driven manufacturing company optimizing wire harness production",
    "role": null,
    "coInvestors": [
      "Andreessen Horowitz",
      "Lowercarbon Capital",
      "Interlagos",
      "General Catalyst",
      "Sequoia Capital",
      "Founders Fund",
      "Dylan Field",
      "CIV",
      "The Friedkin Group",
      "Jaws Estates Capital",
      "Sozo Ventures",
      "Alumni Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/senra-systems-raises-65m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Senra Systems, a Cypress, CA-based software-driven manufacturing company optimizing wire harness production, raised $65M in Series B funding.\n\nThe round was led by Lowercarbon Capital and Interlagos, with participation from General Catalyst, Sequoia Capital, Andreessen Horowitz, Founders Fund, Dylan Field, CIV, 8VC, The Friedkin Group, Jaws Estates Capital, Sozo Ventures and Alumni Ventures."
  },
  {
    "firmSlug": "8vc",
    "company": "Sable",
    "announcedDate": "2026-07-16",
    "datePrecision": "day",
    "round": null,
    "sector": "AI Sales Enablement",
    "sectorEvidence": "building the first AI employee that can see, click, and explain a product in real time. A prospect or customer clicks a link, joins a live call, and Aidan – Sable's AI employee – is already waiting for them, ready to walk them through the product, answer their questions, maneuver in a shared browser, and drive the experience while customers watch and take over whenever they want.",
    "role": "lead",
    "coInvestors": [
      "Sequoia"
    ],
    "sourceUrl": "https://8vc.com/resources/announcing-our-investment-in-sable",
    "sourceType": "firm-site",
    "evidence": "Today, Sable announced a $45M fundraise led by 8VC and Sequoia, and that Joe Lonsdale is joining its board."
  },
  {
    "firmSlug": "8vc",
    "company": "Sila",
    "announcedDate": "2026-07-21",
    "datePrecision": "day",
    "round": null,
    "sector": "Battery Technology",
    "sectorEvidence": "Sila, an Alameda, CA-based battery technology company",
    "role": null,
    "coInvestors": [
      "Bessemer Venture Partners",
      "Atreides Management",
      "Sutter Hill Ventures",
      "Matrix Partners",
      "T. Rowe Price Associates, Inc"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/sila-raises-300m-in-private-equity-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Sila, an Alameda, CA-based battery technology company, raised $300M in a private equity funding. The round was led by Atreides Management, and Sutter Hill Ventures with participation 8VC, Bessemer Venture Partners, Matrix Partners, T. Rowe Price Associates, Inc, and other existing and new investors."
  },
  {
    "firmSlug": "8vc",
    "company": "Vals",
    "announcedDate": "2026-08-13",
    "datePrecision": "day",
    "round": "seed",
    "sector": "AI Evaluation",
    "sectorEvidence": "Vals builds benchmarks the way the work is actually done. Its evaluations are authored alongside practitioners (lawyers, accountants, finance professionals) on real professional tasks: legal research through a consortium of major law firms, expert-written finance agent workflows, tax, healthcare, and coding.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://8vc.com/resources/announcing-our-investment-in-vals",
    "sourceType": "firm-site",
    "evidence": "Vals x 8VC\n\nWe led Vals' seed round. Today, Vals announced a Series A led by our friends at a16z."
  },
  {
    "firmSlug": "8vc",
    "company": "Vals AI",
    "announcedDate": "2026-08-13",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Evaluation",
    "sectorEvidence": "The company focuses on providing independent benchmarks for artificial intelligence models, helping enterprises, labs, and governments measure model performance and ROI across various professional domains.",
    "role": null,
    "coInvestors": [
      "a16z",
      "BloombergBeta",
      "HRT Ventures",
      "Next Ladder Ventures"
    ],
    "sourceUrl": "https://www.thesaasnews.com/news/vals-ai-raises-40m-series-a/",
    "sourceType": "reputable-press",
    "evidence": "Vals AI, an artificial intelligence evaluation startup, has announced a $40 million Series A funding round at a $400 million valuation. The company focuses on providing independent benchmarks for artificial intelligence models, helping enterprises, labs, and governments measure model performance and ROI across various professional domains.\n\nThe round was led by a16z, with participation from existing investors 8VC and BloombergBeta, as well as new investors HRT Ventures and Next Ladder Ventures."
  },
  {
    "firmSlug": "8vc",
    "company": "Wispr",
    "announcedDate": "2026-08-17",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Voice AI",
    "sectorEvidence": "Wispr, a San Francisco, CA-based provider of an AI voice dictation and human-AI interaction platform",
    "role": null,
    "coInvestors": [
      "NEA",
      "Menlo Ventures",
      "Notable Capital",
      "Neo Ventures",
      "MVP Ventures",
      "Acrew",
      "Forerunner",
      "Goodwater",
      "Peak XV",
      "Together Fund",
      "PLUS Capital",
      "Livvy Dunne",
      "Shaun White",
      "Dak Prescott",
      "DK Metcalf",
      "Joe Burrow",
      "Kyle Hamilton",
      "Aaron Gordon",
      "Alex Caruso",
      "Domantas Sabonis",
      "Klay Thompson",
      "Paul George",
      "Trae Young"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/wispr-raises-280m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Wispr, a San Francisco, CA-based provider of an AI voice dictation and human-AI interaction platform, raised $280M in Series B financing at a $2B valuation. The round was led by Menlo Ventures with participation from Notable Capital, NEA, Neo Ventures, 8VC, MVP Ventures, Acrew, Forerunner, Goodwater, Peak XV, Together Fund, PLUS Capital, Livvy Dunne, Shaun White, Dak Prescott, DK Metcalf, Joe Burrow, Kyle Hamilton, Aaron Gordon, Alex Caruso, Domantas Sabonis, Klay Thompson, Paul George, and Trae Young."
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
    "company": "Pearl Health",
    "announcedDate": "2026-07-08",
    "datePrecision": "day",
    "round": null,
    "sector": "Healthcare Technology",
    "sectorEvidence": "a healthcare technology company helping manage risk and deliver better care to Medicare patients",
    "role": "lead",
    "coInvestors": [
      "Viking Global Investors",
      "AlleyCorp",
      "Ulysses Capital",
      "Trinity Capital"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/pearl-health-raises-110-million-to-expand-its-ai-platform-helping-providers-deliver-better-outcomes-at-lower-cost-for-medicare-patients-302820795.html",
    "sourceType": "press-release",
    "evidence": "Pearl Health, a healthcare technology company helping manage risk and deliver better care to Medicare patients, today announced a $110 million capital raise, comprised of equity investment led by Andreessen Horowitz with participation from Viking Global Investors, AlleyCorp, Ulysses Capital, and a debt facility led by Trinity Capital."
  },
  {
    "firmSlug": "a16z",
    "company": "Senra Systems",
    "announcedDate": "2026-07-15",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Advanced Manufacturing",
    "sectorEvidence": "a Cypress, CA-based software-driven manufacturing company optimizing wire harness production",
    "role": "participant",
    "coInvestors": [
      "Lowercarbon Capital",
      "Interlagos",
      "General Catalyst",
      "Sequoia Capital",
      "Founders Fund",
      "Dylan Field",
      "CIV",
      "8VC",
      "The Friedkin Group",
      "Jaws Estates Capital",
      "Sozo Ventures",
      "Alumni Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/senra-systems-raises-65m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Senra Systems, a Cypress, CA-based software-driven manufacturing company optimizing wire harness production, raised $65M in Series B funding.\n\nThe round was led by Lowercarbon Capital and Interlagos, with participation from General Catalyst, Sequoia Capital, Andreessen Horowitz, Founders Fund, Dylan Field, CIV, 8VC, The Friedkin Group, Jaws Estates Capital, Sozo Ventures and Alumni Ventures."
  },
  {
    "firmSlug": "a16z",
    "company": "Runta",
    "announcedDate": "2026-07-16",
    "datePrecision": "day",
    "round": "seed",
    "sector": "AI Agent Infrastructure",
    "sectorEvidence": "Runta rebuilds the execution layer for AI agents, providing a complete operating system environment that can run locally or in the cloud, with security and policy interfaces for enterprise deployment.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://thenextweb.com/news/runta-a16z-seed-ai-agent-infrastructure",
    "sourceType": "reputable-press",
    "evidence": "Andreessen Horowitz (a16z) led the round, which values Runta at more than $100 million."
  },
  {
    "firmSlug": "a16z",
    "company": "Neo",
    "announcedDate": "2026-07-20",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Enterprise Security",
    "sectorEvidence": "Neo, the Agentic Software Control company",
    "role": "lead",
    "coInvestors": [
      "Bessemer Venture Partners",
      "Craft Ventures",
      "Merlin Ventures"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2026/07/20/3329638/0/en/Neo-Launches-with-100M-to-Secure-AI-Software-Across-the-Enterprise.html",
    "sourceType": "press-release",
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
    "company": "Neon Commerce",
    "announcedDate": "2026-07-22",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Gaming Commerce",
    "sectorEvidence": "a San Francisco, CA-based fintech startup specializing in direct-to-consumer (DTC) commerce for games",
    "role": null,
    "coInvestors": [
      "KRAFTON, Inc.",
      "Renegade Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/neon-commerce-raises-13m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Neon Commerce, Inc., a San Francisco, CA–based fintech startup specializing in direct-to-consumer (DTC) commerce for games, closed a $13m Series A funding round.\n\nSouth Korean publisher KRAFTON, Inc. participated in the round as a strategic investor, alongside a16z and Renegade Partners."
  },
  {
    "firmSlug": "a16z",
    "company": "Cathedral",
    "announcedDate": "2026-07-23",
    "datePrecision": "day",
    "round": null,
    "sector": "Defense Cybersecurity",
    "sectorEvidence": "a New York City-based developer of AI-driven cyber warfare platforms and defensive national security systems",
    "role": "lead",
    "coInvestors": [
      "Sequoia Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/cathedral-raises-160m-in-funding-at-a-1-4-billion-post-money-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Cathedral, a New York City-based developer of AI-driven cyber warfare platforms and defensive national security systems, reportedly raised $160m in funding round at a $1.4 billion post-money valuation.\n\nThe round was co-led by Andreessen Horowitz (a16z) and Sequoia Capital."
  },
  {
    "firmSlug": "a16z",
    "company": "Etched",
    "announcedDate": "2026-07-23",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Inference Hardware",
    "sectorEvidence": "Etched, the company building frontier inference clusters",
    "role": null,
    "coInvestors": [
      "Sequoia",
      "Jane Street",
      "Diffusion",
      "SK Hynix"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2026/07/23/3332366/0/en/etched-raises-300m-at-a-10-3b-valuation-to-scale-production-of-frontier-scale-inference-hardware.html",
    "sourceType": "press-release",
    "evidence": "SAN JOSE, Calif., July 23, 2026 (GLOBE NEWSWIRE) -- Etched, the company building frontier inference clusters, today announced $300M in new financing at a $10.3B valuation less than one month after emerging from stealth. The latest round was led by Sequoia, with participation from a16z, Jane Street, Diffusion, and SK Hynix and represents the highest valuation ever for a Sequoia-led Series C."
  },
  {
    "firmSlug": "a16z",
    "company": "Fly.io",
    "announcedDate": "2026-08-03",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Cloud Infrastructure",
    "sectorEvidence": "a San Francisco, CA-based provider of a connected cloud infrastructure platform designed for AI agents and applications",
    "role": "participant",
    "coInvestors": [
      "Dell Technologies Capital",
      "Intel Capital",
      "EQT",
      "Geodesic",
      "YC"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/fly-io-raises-25m-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Fly.io, a San Francisco, CA-based provider of a connected cloud infrastructure platform designed for AI agents and applications, raised $25M in Series D financing.\n\nThe round was co-led by Dell Technologies Capital and Intel Capital, with participation from Andreessen Horowitz, EQT, Geodesic, and YC."
  },
  {
    "firmSlug": "a16z",
    "company": "Base Power",
    "announcedDate": "2026-08-04",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Distributed Energy",
    "sectorEvidence": "an Austin, Texas-based provider of distributed energy solutions and home battery systems",
    "role": "participant",
    "coInvestors": [
      "Ribbit",
      "Addition",
      "Valor Equity Partners",
      "JPMorganChase's Strategic Investment Group",
      "Altimeter",
      "D1 Capital Partners",
      "Sands Capital",
      "Coatue",
      "Layer Global",
      "Energy Impact Partners",
      "Thrive Capital",
      "Lightspeed",
      "Trust Ventures",
      "CapitalG"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/base-power-raises-1-billion-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Base Power, an Austin, Texas-based provider of distributed energy solutions and home battery systems, raised $1 Billion in Series D financing, at $13 Billion valuation.\n\nThe round was led by Ribbit, Addition, Valor Equity Partners, and JPMorganChase's Strategic Investment Group, with participation from Altimeter, D1 Capital Partners, Sands Capital, Coatue, Layer Global, Energy Impact Partners, Thrive Capital, a16z, Lightspeed, Trust Ventures, CapitalG, and others."
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
    "sectorEvidence": "a San Francisco, CA-based provider of an AI agent platform for enterprise operations",
    "role": "participant",
    "coInvestors": [
      "Prysm Capital",
      "Eurazeo",
      "Base10",
      "Y Combinator",
      "Koch Disruptive Technologies (KDT)",
      "Orange",
      "T.Capital",
      "Bankinter",
      "Endeavor Catalyst",
      "Kfund",
      "Wave-X"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/happyrobot-raises-150m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "HappyRobot, a San Francisco, CA-based provider of an AI agent platform for enterprise operations, raised $150M in Series C funding.\n\nThe round was led by Prysm Capital and Eurazeo with participation from a16z, Base10, Y Combinator, Koch Disruptive Technologies (KDT), Orange, T.Capital, Bankinter, Endeavor Catalyst, Kfund, and Wave-X."
  },
  {
    "firmSlug": "a16z",
    "company": "Mariana Minerals",
    "announcedDate": "2026-08-04",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Critical Minerals",
    "sectorEvidence": "a San Francisco, CA-based provider of a software-first, vertically integrated critical minerals platform",
    "role": "participant",
    "coInvestors": [
      "Khosla Ventures",
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
    "sourceUrl": "https://www.finsmes.com/2026/08/mariana-minerals-raises-310m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Mariana Minerals, a San Francisco, CA-based provider of a software-first, vertically integrated critical minerals platform, raised $310M in Series B financing.\n\nThe round was led by Khosla Ventures with participation from Andreessen Horowitz (a16z), Breakthrough Energy Ventures, Greenoaks, Halo Fund, Pax Ventures, StepStone Group, BHP Ventures, Washington Harbour Partners, Greycroft, General Innovation Capital Partners, Mitsubishi Corporation, In-Q-Tel (IQT), Earthshot Ventures, and additional strategic capital partners."
  },
  {
    "firmSlug": "a16z",
    "company": "Volta",
    "announcedDate": "2026-08-04",
    "datePrecision": "day",
    "round": "Seed Round and Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Volta is a fully vertically integrated AI infrastructure platform that develops, finances, builds, and operates AI factories, integrating institutional capital, powered land, data centers, compute, software and operations.",
    "role": "lead",
    "coInvestors": [
      "Azora",
      "Altimeter",
      "NVIDIA",
      "the family office of Michael Dell",
      "Matter Venture Partners"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260804493428/en/Volta-Emerges-From-Stealth-With-$10-Billion-AI-Lab-Partnership-and-$5-Billion-AI-Infrastructure-Program",
    "sourceType": "press-release",
    "evidence": "The company has also completed a Seed Round and a Series A valuing Volta at $2.4 billion, led by Azora, Andreessen Horowitz, Altimeter and NVIDIA, with participation from strategic investors including the family office of Michael Dell, and Matter Venture Partners."
  },
  {
    "firmSlug": "a16z",
    "company": "Convex",
    "announcedDate": "2026-08-05",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Developer Infrastructure",
    "sectorEvidence": "a San Francisco, CA-based reactive backend platform",
    "role": "participant",
    "coInvestors": [
      "Insight Partners",
      "Etna Labs",
      "Spark Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/convex-raises-57m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Convex, a San Francisco, CA-based reactive backend platform, raised $57M in Series B financing.\n\nThe round was led by Insight Partners with participation from Etna Labs, a16z, and Spark Capital."
  },
  {
    "firmSlug": "a16z",
    "company": "Hadrian",
    "announcedDate": "2026-08-06",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Advanced Manufacturing",
    "sectorEvidence": "Hadrian, a Los Angeles, California-based developer of automated factories for aerospace and defense",
    "role": null,
    "coInvestors": [
      "Lux Capital",
      "WCM Investment Management",
      "Washington Harbour Partners",
      "Valor Equity Partners",
      "137 Ventures",
      "Baillie Gifford",
      "1789 Capital",
      "Morgan Stanley Wealth Management",
      "Apollo",
      "T. Rowe Price Associates, Inc.",
      "CapitalG",
      "Founders Fund",
      "Altimeter",
      "Construct Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/hadrian-raises-1-37-billion-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Hadrian, a Los Angeles, California-based developer of automated factories for aerospace and defense, raised $1.37 Billion in Series D funding, at $7.87 Billion valuation. The round was co-led by WCM Investment Management, Washington Harbour Partners, Valor Equity Partners, 137 Ventures, and Baillie Gifford, with participation from 1789 Capital, Morgan Stanley Wealth Management, funds managed by Apollo, accounts advised by T. Rowe Price Associates, Inc., CapitalG, Andreessen Horowitz, Founders Fund, Lux Capital, Altimeter, Construct Capital, and existing investors."
  },
  {
    "firmSlug": "a16z",
    "company": "Databricks",
    "announcedDate": "2026-08-13",
    "datePrecision": "day",
    "round": "strategic funding round",
    "sector": "Data and AI",
    "sectorEvidence": "a San Francisco, CA-based Data and AI company",
    "role": "participant",
    "coInvestors": [
      "Coatue",
      "Blackstone",
      "MGX",
      "T. Rowe Price Associates, Inc.",
      "T. Rowe Price Investment Management, Inc.",
      "Sixth Street Growth",
      "BOND",
      "Clearlake Capital",
      "Point72",
      "Premji Invest",
      "TPG",
      "Dragoneer",
      "Fidelity Management & Research Company",
      "Franklin Templeton",
      "GIC",
      "Growth Equity at Goldman Sachs Alternatives",
      "Insight Partners",
      "J.P. Morgan Private Capital",
      "Kinetic",
      "Morgan Stanley Investment Management",
      "NEA",
      "Ontario Teachers' Pension Plan",
      "Temasek",
      "Thrive Capital",
      "WCM Investment Management"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/databricks-closes-5-billion-strategic-funding-at-190-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Databricks, a San Francisco, CA-based Data and AI company, closed a $5 billion strategic funding round at a $190 billion valuation.\n\nThe round was led by Coatue, along with Blackstone, MGX, accounts advised by T. Rowe Price Associates, Inc. and T. Rowe Price Investment Management, Inc., and new investor Sixth Street Growth. Other new investors included BOND, Clearlake Capital, Point72, Premji Invest, and TPG alongside existing investors Andreessen Horowitz, Dragoneer, Fidelity Management & Research Company, Franklin Templeton, GIC, Growth Equity at Goldman Sachs Alternatives, Insight Partners, J.P. Morgan Private Capital, Kinetic, Morgan Stanley Investment Management, NEA, Ontario Teachers' Pension Plan, Temasek, Thrive Capital, and WCM Investment Management."
  },
  {
    "firmSlug": "a16z",
    "company": "Vals AI",
    "announcedDate": "2026-08-13",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Evaluation",
    "sectorEvidence": "The company focuses on providing independent benchmarks for artificial intelligence models, helping enterprises, labs, and governments measure model performance and ROI across various professional domains.",
    "role": "lead",
    "coInvestors": [
      "8VC",
      "BloombergBeta",
      "HRT Ventures",
      "Next Ladder Ventures"
    ],
    "sourceUrl": "https://www.thesaasnews.com/news/vals-ai-raises-40m-series-a/",
    "sourceType": "reputable-press",
    "evidence": "Vals AI, an artificial intelligence evaluation startup, has announced a $40 million Series A funding round at a $400 million valuation. The company focuses on providing independent benchmarks for artificial intelligence models, helping enterprises, labs, and governments measure model performance and ROI across various professional domains.\n\nThe round was led by a16z, with participation from existing investors 8VC and BloombergBeta, as well as new investors HRT Ventures and Next Ladder Ventures."
  },
  {
    "firmSlug": "a16z",
    "company": "Yuno",
    "announcedDate": "2026-08-13",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Payments",
    "sectorEvidence": "a Bogotá, Colombia-based global payment orchestration platform provider",
    "role": "participant",
    "coInvestors": [
      "Global PayTech Ventures",
      "Tiger Global Management",
      "QuantumLight Capital",
      "Monashees",
      "Kaszek",
      "Endeavor Catalyst",
      "Rasmal Ventures",
      "GrowthX Capital",
      "Further Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/yuno-raises-45m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Yuno, a Bogotá, Colombia-based global payment orchestration platform provider, raised $45m in Series B funding.\n\nThe round was led by Global PayTech Ventures, with participation from Andreessen Horowitz (a16z), Tiger Global Management, QuantumLight Capital, Monashees, Kaszek, and Endeavor Catalyst, and Rasmal Ventures, GrowthX Capital, and Further Ventures."
  },
  {
    "firmSlug": "a16z",
    "company": "Rillet",
    "announcedDate": "2026-08-19",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Financial Software",
    "sectorEvidence": "a San Francisco, CA-based provider of an AI-native ERP platform for finance teams",
    "role": "participant",
    "coInvestors": [
      "ICONIQ",
      "Sequoia",
      "Sequoia Global Equities",
      "Bain Capital Ventures",
      "Oak HC/FT",
      "Battery Ventures",
      "FirstMark",
      "Scale Venture Partners",
      "Creandum"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/rillet-raises-100m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Rillet, a San Francisco, CA-based provider of an AI-native ERP platform for finance teams, raised $100M in Series C funding, at $1 Billion valuation.\n\nThe round was led by ICONIQ with participation from Sequoia, Andreessen Horowitz, Sequoia Global Equities, Bain Capital Ventures, Oak HC/FT, Battery Ventures, FirstMark, Scale Venture Partners, and Creandum."
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
    "company": "QIZ Security",
    "announcedDate": "2026-07-09",
    "datePrecision": "day",
    "round": "seed round",
    "sector": "Cybersecurity",
    "sectorEvidence": "QIZ is building the cryptographic posture management platform for the post-quantum era. The platform continuously discovers cryptographic assets across the full enterprise stack: cloud and on-premises, data in motion and at rest, applications, code, and networks.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/backing-qiz-security-cryptographic-posture-management-for-the-post-quantum-era",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads QIZ Security's $17 million seed round to help enterprises address and govern their cryptography ahead of “Q-Day.”"
  },
  {
    "firmSlug": "bessemer",
    "company": "Fireworks",
    "announcedDate": "2026-07-16",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Fireworks is the frontier training and inference platform for open models.",
    "role": "participant",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/fireworks-the-inference-layer-for-the-open-model-era",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners joins Fireworks' $1.5B Series D, backing the leading training and inference platform for open models as the company crosses $1B in ARR."
  },
  {
    "firmSlug": "bessemer",
    "company": "30 Sundays",
    "announcedDate": "2026-07-20",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Travel",
    "sectorEvidence": "Instead of a static search bar, travelers get an AI travel expert with a human in the loop - one that designs a personalized itinerary and stays on call from the visa application to the flight home.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/30-sundays-ai-powered-custom-travel-for-indian-couples",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads 30 Sundays' $6.7M Series A to transform international travel with an AI travel agent"
  },
  {
    "firmSlug": "bessemer",
    "company": "Neo",
    "announcedDate": "2026-07-20",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Enterprise Security",
    "sectorEvidence": "Neo, the Agentic Software Control company",
    "role": null,
    "coInvestors": [
      "Andreessen Horowitz",
      "Craft Ventures",
      "Merlin Ventures"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2026/07/20/3329638/0/en/Neo-Launches-with-100M-to-Secure-AI-Software-Across-the-Enterprise.html",
    "sourceType": "press-release",
    "evidence": "Neo, the Agentic Software Control company, today emerged from stealth with $100M in funding from Andreessen Horowitz and Bessemer Venture Partners, with participation from Craft Ventures and Merlin Ventures."
  },
  {
    "firmSlug": "bessemer",
    "company": "Neo Security",
    "announcedDate": "2026-07-20",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Cybersecurity",
    "sectorEvidence": "Neo was built to address this challenge, and the Neo platform answers a CISO's three main questions: 1. What agentic software are employees using, and should it be allowed? 2. What is the security posture of the software discovered, and is it configured correctly? 3. How can I enforce guardrails and implement effective controls?",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/neo-security-securing-ai-agents-at-the-endpoint",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads Neo Security's $100M Series A to build AI security for the endpoint, giving enterprises real visibility and control over their agents."
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
    "company": "Sila",
    "announcedDate": "2026-07-21",
    "datePrecision": "day",
    "round": null,
    "sector": "Battery Technology",
    "sectorEvidence": "Sila, an Alameda, CA-based battery technology company",
    "role": "participant",
    "coInvestors": [
      "Atreides Management",
      "Sutter Hill Ventures",
      "8VC",
      "Matrix Partners",
      "T. Rowe Price Associates, Inc"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/sila-raises-300m-in-private-equity-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Sila, an Alameda, CA-based battery technology company, raised $300M in a private equity funding. The round was led by Atreides Management, and Sutter Hill Ventures with participation 8VC, Bessemer Venture Partners, Matrix Partners, T. Rowe Price Associates, Inc, and other existing and new investors."
  },
  {
    "firmSlug": "bessemer",
    "company": "Genius AI",
    "announcedDate": "2026-07-22",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "SMB Software",
    "sectorEvidence": "Genius AI, a NYC-based provider of a technology platform for in-person service businesses",
    "role": "participant",
    "coInvestors": [
      "Lux Capital",
      "Imaginary Ventures",
      "L Catterton Growth",
      "2048 Ventures",
      "StepStone Private Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/genius-ai-raises-44m-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Genius AI, a NYC-based provider of a technology platform for in-person service businesses, raised $44M in Series D financing, at $1.15 Billion valuation. The round was led by Lux Capital, with participation from Bessemer Venture Partners, Imaginary Ventures, L Catterton Growth, 2048 Ventures, StepStone Private Ventures, and other existing investors."
  },
  {
    "firmSlug": "bessemer",
    "company": "Act Security",
    "announcedDate": "2026-07-28",
    "datePrecision": "day",
    "round": null,
    "sector": "Cybersecurity",
    "sectorEvidence": "Act's platform is proactive: instead of surfacing more lists of findings, it eliminates the conditions that make those findings exploitable in the first place.",
    "role": null,
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/act-proactive-cloud-security",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners backs Act Security from seed to Series A-company emerges from stealth with $60M to eliminate the access paths behind security breaches in the AI era."
  },
  {
    "firmSlug": "bessemer",
    "company": "ChipAgents",
    "announcedDate": "2026-07-29",
    "datePrecision": "day",
    "round": "Series A2",
    "sector": "Semiconductor Design AI",
    "sectorEvidence": "ChipAgents, a San Jose, CA-based provider of an agentic AI platform for semiconductor design",
    "role": null,
    "coInvestors": [
      "B Capital",
      "Micron",
      "MediaTek",
      "Ericsson",
      "ScOp"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/chipagents-raises-60m-in-series-a2-funding.html",
    "sourceType": "reputable-press",
    "evidence": "ChipAgents, a San Jose, CA-based provider of an agentic AI platform for semiconductor design, raised $60M in Series A2 funding.\n\nBackers included B Capital, Bessemer Venture Partners, Micron, MediaTek, Ericsson, and ScOp."
  },
  {
    "firmSlug": "bessemer",
    "company": "Onyx Security",
    "announcedDate": "2026-07-29",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Cybersecurity",
    "sectorEvidence": "Onyx builds a secure control plane that helps organizations discover, govern, and secure AI agents operating across SaaS, cloud, endpoints, and internal infrastructure.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/onyx-security-defining-cybersecurity-in-the-agentic-era",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads Onyx's $113M Series B to build the secure control plane for enterprise AI agents-a category poised to produce the largest cybersecurity company yet."
  },
  {
    "firmSlug": "bessemer",
    "company": "Sent",
    "announcedDate": "2026-07-30",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Messaging Infrastructure",
    "sectorEvidence": "Sent, a NYC-based provider of a unified messaging API platform",
    "role": "participant",
    "coInvestors": [
      "Companyon Ventures",
      "UIF",
      "CP Overture"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/sent-raises-12m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Sent, a NYC-based provider of a unified messaging API platform, raised $12M in Series A funding. The round was led by Companyon Ventures with participation from Bessemer Venture Partners, UIF, CP Overture, and others."
  },
  {
    "firmSlug": "bessemer",
    "company": "InRisk Labs",
    "announcedDate": "2026-08-05",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Insurtech",
    "sectorEvidence": "Technology-led risk and reinsurance platform InRisk Labs",
    "role": "lead",
    "coInvestors": [
      "Northpoint Capital"
    ],
    "sourceUrl": "https://entrackr.com/news/inrisk-labs-raises-27-mn-in-series-a-round-led-by-bessemer-northpoint-capital-12230166",
    "sourceType": "reputable-press",
    "evidence": "Technology-led risk and reinsurance platform InRisk Labs has raised $27 million in a Series A funding round co-led by Bessemer Venture Partners and Northpoint Capital."
  },
  {
    "firmSlug": "bessemer",
    "company": "Malachyte",
    "announcedDate": "2026-08-06",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "E-commerce Personalization",
    "sectorEvidence": "Malachyte, a NYC-based provider of an intelligence platform developing real time individualization solutions",
    "role": "lead",
    "coInvestors": [
      "Gradient Ventures",
      "Harpoon Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/malachyte-raises-10m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Malachyte, a NYC-based provider of an intelligence platform developing real time individualization solutions, raised $10M in Seed funding. The round was co-led by Bessemer Venture Partners and Gradient Ventures with participation from Harpoon Ventures."
  },
  {
    "firmSlug": "bessemer",
    "company": "Flagler Health",
    "announcedDate": "2026-08-11",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Healthcare AI",
    "sectorEvidence": "It orchestrates the full patient lifecycle across four synergistic product lines, starting with a triage product that matches each patient to the ideal provider and routes them to the right ancillary services, specialists, or procedures.",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.bvp.com/news/flagler-health-the-ai-native-solution-for-musculoskeletal-care",
    "sourceType": "firm-site",
    "evidence": "Bessemer Venture Partners leads Flagler Health's $50M Series B to build the AI-powered operating system for the $400B MSK market."
  },
  {
    "firmSlug": "bessemer",
    "company": "Trajectory",
    "announcedDate": "2026-08-17",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Trajectory, a San Francisco, CA-based provider of an AI infrastructure and agent optimization platform",
    "role": "participant",
    "coInvestors": [
      "Sequoia Capital",
      "NVIDIA"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/trajectory-raises-40m-in-series-a-funding-at-300m-post-money-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Trajectory, a San Francisco, CA-based provider of an AI infrastructure and agent optimization platform, raised $40m in Series A funding at a $300m post-money valuation. The round was led by Sequoia Capital, with participation from NVIDIA and Bessemer Venture Partners."
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
    "sector": "Real Estate Tech",
    "sectorEvidence": "Antares Labs, a San Francisco, CA-based provider of an AI platform for real estate operations",
    "role": null,
    "coInvestors": [
      "Fifth Wall",
      "Base10 Partners",
      "Sandwith Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/antares-labs-raises-7-25m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Antares Labs, a San Francisco, CA-based provider of an AI platform for real estate operations, raised $7.25M in Seed funding.\n\nBackers included Fifth Wall, Base10 Partners, Bloomberg Beta, and Sandwith Ventures."
  },
  {
    "firmSlug": "bloomberg-beta",
    "company": "Skan AI",
    "announcedDate": "2026-08-12",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Process Intelligence",
    "sectorEvidence": "Skan AI, a San Jose, CA-based provider of an enterprise AI context graph platform",
    "role": "participant",
    "coInvestors": [
      "Cathay Innovation",
      "Dell Technologies Capital",
      "Citi Ventures",
      "State Farm Ventures",
      "Wipro Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/skan-ai-raises-63m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Skan AI, a San Jose, CA-based provider of an enterprise AI context graph platform, raised $63M in Series C funding.\n\nThe round was co-led by Cathay Innovation and Dell Technologies Capital with participation from Citi Ventures, Bloomberg Beta, State Farm Ventures, and Wipro Ventures."
  },
  {
    "firmSlug": "bloomberg-beta",
    "company": "Smack Technologies",
    "announcedDate": "2026-08-18",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Defense Tech",
    "sectorEvidence": "Smack Technologies, an Austin, TX-based provider of an AI platform for national security",
    "role": "participant",
    "coInvestors": [
      "Costanoa Ventures",
      "First In",
      "Point72 Ventures",
      "Geodesic Capital",
      "Nomi Capital",
      "Felicis",
      "Sapphire Ventures",
      "Scribble Ventures",
      "Fortitude Ventures",
      "Palumni VC"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/smack-technologies-raises-61m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Smack Technologies, an Austin, TX-based provider of an AI platform for national security, raised $61M in Series B financing.\n\nThe round was led by Costanoa Ventures and First In with participation from Point72 Ventures, Geodesic Capital, Nomi Capital, Felicis, Sapphire Ventures, Scribble Ventures, Fortitude Ventures, Bloomberg Beta, and Palumni VC."
  },
  {
    "firmSlug": "bloomberg-beta",
    "company": "Vals AI",
    "announcedDate": "2026-08-18",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Evaluation",
    "sectorEvidence": "Vals AI, a San Francisco, CA-based provider of an artificial intelligence evaluation and model auditing platform",
    "role": "participant",
    "coInvestors": [
      "a16z (Andreessen Horowitz)",
      "8VC",
      "HRT Ventures",
      "Next Ladder Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/vals-ai-raises-40m-in-series-a-funding-at-400m-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Vals AI, a San Francisco, CA-based provider of an artificial intelligence evaluation and model auditing platform, raised $40m in Series A funding at a $400m valuation.\n\nThe round was led by a16z (Andreessen Horowitz), with participation from existing backers 8VC and Bloomberg Beta, alongside new institutional investors HRT Ventures and Next Ladder Ventures."
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
    "sector": "AI Infrastructure",
    "sectorEvidence": "It spans the full stack of training, deploying and continuously improving models - compute, large-scale RL, environments, sandboxes, evals, and deployment.",
    "role": null,
    "coInvestors": [
      "Intel Capital",
      "Radical Ventures",
      "NVIDIA Ventures"
    ],
    "sourceUrl": "https://www.intelcapital.com/prime-intellect-the-full-stack-for-training-and-deploying-self-improving-agents/",
    "sourceType": "firm-site",
    "evidence": "Today, we’re proud to announce our investment in Prime Intellect’s $130M Series A led by Radical Ventures, with participation from NVIDIA Ventures, Intel Capital, Dell Technologies Capital and our existing investors."
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
    "company": "Fly.io",
    "announcedDate": "2026-08-03",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Cloud Infrastructure",
    "sectorEvidence": "a San Francisco, CA-based provider of a connected cloud infrastructure platform designed for AI agents and applications",
    "role": null,
    "coInvestors": [
      "Andreessen Horowitz",
      "Intel Capital",
      "EQT",
      "Geodesic",
      "YC"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/fly-io-raises-25m-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Fly.io, a San Francisco, CA-based provider of a connected cloud infrastructure platform designed for AI agents and applications, raised $25M in Series D financing.\n\nThe round was co-led by Dell Technologies Capital and Intel Capital, with participation from Andreessen Horowitz, EQT, Geodesic, and YC."
  },
  {
    "firmSlug": "dell-technologies-capital",
    "company": "Skan AI",
    "announcedDate": "2026-08-12",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Process Intelligence",
    "sectorEvidence": "Skan AI, the context graph of work for enterprise AI",
    "role": "lead",
    "coInvestors": [
      "Cathay Innovation",
      "Citi Ventures",
      "Bloomberg Beta",
      "State Farm Ventures®",
      "Wipro Ventures"
    ],
    "sourceUrl": "https://www.skan.ai/in-the-news/skan-ai-raises-series-c-announcement",
    "sourceType": "company-site",
    "evidence": "Menlo Park, CALIF. - August 12, 2026 - Skan AI, the context graph of work for enterprise AI, today announced $63 million in funding co-led by Cathay Innovation and Dell Technologies Capital, with participation from Citi Ventures, Bloomberg Beta, State Farm Ventures®, and Wipro Ventures."
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
    "firmSlug": "elad-gil",
    "company": "Cambridge Aerospace",
    "announcedDate": "2026-08-10",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Defense Tech",
    "sectorEvidence": "Cambridge Aerospace, a Cambridge, UK-based provider of an air defence platform and low-cost interceptor systems for Allied forces",
    "role": "participant",
    "coInvestors": [
      "DFJ Growth",
      "Lux",
      "Accel",
      "Lakestar",
      "Never Lift",
      "Ora Global"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/cambridge-aerospace-raises-300m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Cambridge Aerospace, a Cambridge, UK-based provider of an air defence platform and low-cost interceptor systems for Allied forces, raised $300M in Series C funding at $3.4 Billion valuation.\n\nThe round was led by DFJ Growth, with participation from Lux, Accel, Lakestar, Never Lift, Ora Global, and Elad Gil & Co."
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
    "company": "TwelveLabs",
    "announcedDate": "2026-07-01",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Video AI",
    "sectorEvidence": "a San Francisco, CA-based video intelligence company",
    "role": "participant",
    "coInvestors": [
      "NEA",
      "NAVER Ventures",
      "Amazon",
      "Radical Ventures",
      "Korea Investment Partners",
      "Quadrille Capital",
      "Red Bull Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/twelvelabs-raises-100m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "TwelveLabs, a San Francisco, CA-based video intelligence company, raised $100m in Series B funding.\n\nThe round was co-led by NEA and NAVER Ventures with participation from Amazon, Radical Ventures, Korea Investment Partners, Index Ventures, Quadrille Capital, and Red Bull Ventures."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Oratomic",
    "announcedDate": "2026-07-07",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Quantum Computing",
    "sectorEvidence": "a Pasadena, CA-based developer of fault-tolerant quantum computing architectures and quantum-error correction systems",
    "role": "participant",
    "coInvestors": [
      "ARCH Venture Partners",
      "Spark Capital",
      "Khosla Ventures",
      "Bezos Expeditions",
      "General Catalyst",
      "Lowercarbon Capital",
      "Bain Capital Ventures",
      "Formation 8",
      "Nebular",
      "David and Scott Aaronson"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/oratomic-raises-300m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Oratomic, a Pasadena, CA-based developer of fault-tolerant quantum computing architectures and quantum-error correction systems, raised $300m in Series A funding.\n\nThe round was co-led by ARCH Venture Partners, Spark Capital, and Khosla Ventures, with participation from Bezos Expeditions, Index Ventures, General Catalyst, Lowercarbon Capital, Bain Capital Ventures, Formation 8, Nebular, and prominent quantum computing researchers David and Scott Aaronson."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Marker",
    "announcedDate": "2026-07-09",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Productivity Software",
    "sectorEvidence": "a London, UK-based developer of an AI-native word processor and collaborative authoring platform",
    "role": "lead",
    "coInvestors": [
      "LocalGlobe",
      "Steve Newman",
      "Cal Henderson",
      "Thomas Wolf"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/marker-raises-13m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Marker, a London, UK-based developer of an AI-native word processor and collaborative authoring platform, emerged from stealth mode after securing $13m in seed funding.\n\nThe round was led by Index Ventures, with participation from LocalGlobe and a syndicate of strategic software angels-including Steve Newman, Cal Henderson, and Thomas Wolf."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Chai Discovery",
    "announcedDate": "2026-07-14",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Drug Discovery",
    "sectorEvidence": "a San Francisco, CA-based company engineering AI models to discover new molecules",
    "role": "lead",
    "coInvestors": [
      "Kleiner Perkins",
      "Sequoia Capital",
      "Dimension",
      "Bain Capital Ventures",
      "Battery Ventures",
      "Baillie Gifford",
      "BDT and MSD",
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
    "sourceUrl": "https://www.finsmes.com/2026/07/chai-discovery-raises-400m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Chai Discovery, a San Francisco, CA-based company engineering AI models to discover new molecules, raised $400M in Series C funding.\n\nThe round, which valued the company at $3.8B, was led by Index Ventures alongside Kleiner Perkins, Sequoia Capital and Dimension with participation form Bain Capital Ventures, Battery Ventures, Baillie Gifford, BDT and MSD, Sapphire Ventures, Avra Capital, Thrive Capital, OpenAI, Oak HC/FT, Menlo Ventures, General Catalyst, Glade Brook, Avenir, Lachy Groom, and Yosemite."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Fireworks",
    "announcedDate": "2026-07-16",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "AI Inference Platform",
    "sectorEvidence": "Fireworks, the platform for specialized intelligence, enabling companies like Uber and Shopify to train and serve custom models",
    "role": "lead",
    "coInvestors": [
      "Atreides Management",
      "TCV",
      "Evantic",
      "Lightspeed Venture Partners",
      "NVIDIA"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260716264405/en/Fireworks-Raises-a-$1.5-Billion-Series-D-to-Lead-the-Specialized-Intelligence-Revolution",
    "sourceType": "press-release",
    "evidence": "Fireworks, the platform for specialized intelligence, enabling companies like Uber and Shopify to train and serve custom models, today announced a $1.505 billion Series D round at a $17.5 billion valuation. The round was led by Atreides Management, Index Ventures, and TCV, with participation from existing investors Evantic, Lightspeed Venture Partners, and NVIDIA."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Glow",
    "announcedDate": "2026-07-22",
    "datePrecision": "day",
    "round": null,
    "sector": "Cybersecurity",
    "sectorEvidence": "Glow gives security teams control over everything that runs on the endpoint. Specialized AI agents continuously map the environment, analyze risk in real time, and enforce policies automatically.",
    "role": null,
    "coInvestors": [
      "Sequoia",
      "Cyberstarts",
      "Greenoaks",
      "Redpoint Ventures",
      "Swish Ventures",
      "Lux Capital",
      "Operator Collective",
      "Holly Ventures"
    ],
    "sourceUrl": "https://www.glow.io/news/glow-emerges-from-stealth-with-180-million",
    "sourceType": "company-site",
    "evidence": "TEL AVIV, Israel and PALO ALTO, Calif., July 22, 2026 - Glow, the AI-powered endpoint security company, today emerged from stealth with $180 million in funding at a $1.2 billion valuation to redefine how enterprises secure the modern endpoint with a prevention-first approach. The round was led by Sequoia, Cyberstarts, Greenoaks, and Redpoint Ventures, with participation from Index Ventures, Swish Ventures, Lux Capital, Operator Collective, and Holly Ventures."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Enigma",
    "announcedDate": "2026-07-27",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Robotics",
    "sectorEvidence": "the less-than-one-year-old startup wants to study how humans engage with robots in hopes that these interactions will lead to intuitive interfaces and possibly a different kind of robotic brain",
    "role": "lead",
    "coInvestors": [
      "Ribbit Capital",
      "Conviction Partners"
    ],
    "sourceUrl": "https://techcrunch.com/2026/07/27/enigma-raises-70m-to-make-controlling-a-robot-as-easy-as-adjusting-the-volume/",
    "sourceType": "reputable-press",
    "evidence": "To finance its mission, Enigma raised a $71 million seed round led by Index Ventures and Ribbit Capital, with participation from Sarah Guo of Conviction Partners."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Simile",
    "announcedDate": "2026-07-30",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Simulation",
    "sectorEvidence": "a San Francisco, California-based developer of AI-powered human behavior foundation models and predictive simulation software",
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
    "sourceUrl": "https://www.finsmes.com/2026/07/simile-raises-200m-in-series-b-funding-at-2-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Simile, a San Francisco, California-based developer of AI-powered human behavior foundation models and predictive simulation software, raised $200m in Series B funding at a $2 billion valuation.\n\nThe round was led by Greenoaks, with participation from returning investor Index Ventures, alongside follow-on backing from Hanabi, Bain Capital Ventures, A*, Factory, and CVS Health Ventures, and new participation from Definition."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Intelligence",
    "announcedDate": "2026-08-03",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "AI Benchmarking",
    "sectorEvidence": "a San Francisco, California-based developer of a crowdsourced benchmarking platform for AI-generated visual design operating as Design Arena",
    "role": "lead",
    "coInvestors": [
      "Conviction",
      "A*",
      "Valkyrie"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/intelligence-raises-7-9m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Intelligence, a San Francisco, California-based developer of a crowdsourced benchmarking platform for AI-generated visual design operating as Design Arena, raised $7.9m in seed funding.\n\nThe round was led by Index Ventures, with participation from Conviction, A*, and Valkyrie."
  },
  {
    "firmSlug": "index-ventures",
    "company": "Wordsmith",
    "announcedDate": "2026-08-05",
    "datePrecision": "day",
    "round": "Series B extension",
    "sector": "Legal Tech",
    "sectorEvidence": "an Edinburgh, Scotland, UK-based provider of an AI platform built exclusively for in-house legal teams",
    "role": "participant",
    "coInvestors": [
      "Intact Private Capital",
      "FT Ventures",
      "Highland Europe"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/wordsmith-raises-14m-in-series-b-extension-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Wordsmith, an Edinburgh, Scotland, UK-based provider of an AI platform built exclusively for in-house legal teams, raised $14M in Series B extension funding.\n\nThe round was led by Intact Private Capital with participation from FT Ventures, Highland Europe, and Index Ventures."
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
    "company": "OXMIQ Labs",
    "announcedDate": "2026-07-01",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Semiconductors",
    "sectorEvidence": "OXMIQ Labs Inc., a unified GPU and AI architecture company founded by Raja Koduri",
    "role": "participant",
    "coInvestors": [
      "Fundomo",
      "Samsung Catalyst Fund",
      "MediaTek",
      "AM Intelligence Labs",
      "Pegatron Venture Capital",
      "CDIB-TEN",
      "Darwin Ventures",
      "Morgan Creek Digital"
    ],
    "sourceUrl": "https://www.intelcapital.com/oxmiq-raises-35-million-to-scale-oxcoretm-architecture/",
    "sourceType": "firm-site",
    "evidence": "Intel Capital rounds out the group as a “strategic IP partner, adding to OXMIQ’s design and engineering depth.”"
  },
  {
    "firmSlug": "intel-capital",
    "company": "Prime Intellect",
    "announcedDate": "2026-07-08",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "It spans the full stack of training, deploying and continuously improving models - compute, large-scale RL, environments, sandboxes, evals, and deployment.",
    "role": "participant",
    "coInvestors": [
      "Radical Ventures",
      "NVIDIA Ventures",
      "Dell Technologies Capital"
    ],
    "sourceUrl": "https://www.intelcapital.com/prime-intellect-the-full-stack-for-training-and-deploying-self-improving-agents/",
    "sourceType": "firm-site",
    "evidence": "Today, we’re proud to announce our investment in Prime Intellect’s $130M Series A led by Radical Ventures, with participation from NVIDIA Ventures, Intel Capital, Dell Technologies Capital and our existing investors."
  },
  {
    "firmSlug": "intel-capital",
    "company": "Fly.io",
    "announcedDate": "2026-07-24",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Cloud Infrastructure",
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
    "sourceType": "firm-site",
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
    "sector": "AI Security",
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
    "sourceType": "firm-site",
    "evidence": "NEW YORK, Aug, 3, 2026 – Zenity, the AI security and governance platform purpose-built for AI agents, today announced a $125 million Series C led by Norwest. The investment will accelerate Zenity’s global expansion, platform innovation and ability to meet rapidly growing enterprise demand for AI agent security. Trusted by some of the world’s largest enterprises, Zenity has spent years helping organizations securely adopt AI while the rest of the industry was still focused primarily on protecting models and individual prompts. New investors Qumra Capital, SoftBank Vision Fund 2, Hitachi Ventures and LG Technology Ventures joined the round, alongside existing investors Vertex Ventures, Third Point Ventures, DTCP and Intel Capital."
  },
  {
    "firmSlug": "intel-capital",
    "company": "Higgsfield",
    "announcedDate": "2026-08-19",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Generative Media",
    "sectorEvidence": "Higgsfield is an AI-native multimedia content creation platform for creators, marketers, brands, agencies, and studios.",
    "role": "participant",
    "coInvestors": [
      "DST Global",
      "Tribe Capital",
      "Growth Equity at Goldman Sachs Alternatives",
      "Smash Capital",
      "Fifth Wall",
      "Valor Capital",
      "Liberty Global Tech Ventures",
      "Mirae Asset Capital",
      "NTT DOCOMO Ventures",
      "Accel",
      "Menlo Ventures",
      "AI Capital Partners (Alpha Intelligence Capital’s US-based fund)",
      "GFT Ventures",
      "Capra Ventures",
      "BAM Corner Point",
      "BroadLight Capital"
    ],
    "sourceUrl": "https://www.intelcapital.com/higgsfield-raises-400-million-series-b-financing-at-5-4-billion-valuation-with-annualized-revenue-reaching-700-million/",
    "sourceType": "firm-site",
    "evidence": "Intel Capital, Liberty Global Tech Ventures, Mirae Asset Capital, and NTT DOCOMO Ventures. Existing investors also participated in the Series B, including Accel, Menlo Ventures, AI Capital Partners (Alpha Intelligence Capital’s US-based fund), GFT Ventures, Capra Ventures, BAM Corner Point and BroadLight Capital. Strategic investments were also made by industry leaders spanning compute, connectivity, distribution, media and advertising reflecting a shared conviction that Higgsfield’s platform will reshape and power the next generation of visual media."
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
    "company": "Norm Ai",
    "announcedDate": "2026-07-07",
    "datePrecision": "day",
    "round": null,
    "sector": "Legal AI",
    "sectorEvidence": "Norm Ai, a NYC-based company that builds agentic law for high-stakes work by bringing AI engineers and attorneys together to embed law into AI agents",
    "role": "lead",
    "coInvestors": [
      "Blackstone",
      "Bain Capital Ventures",
      "Craft Ventures",
      "Coatue",
      "Vanguard",
      "New York Life",
      "TIAA",
      "Tony James",
      "Jeff Hammes",
      "Fenwick LLP"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/norm-ai-raises-120m-at-1-2-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Norm Ai, a NYC-based company that builds agentic law for high-stakes work by bringing AI engineers and attorneys together to embed law into AI agents, raised $120M, at $1.2 Billion valuation. The round was led by Khosla Ventures, with participation from Blackstone, Bain Capital Ventures, Craft Ventures, Coatue, Vanguard, New York Life, TIAA, Tony James, Jeff Hammes, and Fenwick LLP."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Oratomic",
    "announcedDate": "2026-07-07",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Quantum Computing",
    "sectorEvidence": "Oratomic, a Pasadena, CA-based developer of fault-tolerant quantum computing architectures and quantum-error correction systems",
    "role": "lead",
    "coInvestors": [
      "ARCH Venture Partners",
      "Spark Capital",
      "Bezos Expeditions",
      "Index Ventures",
      "General Catalyst",
      "Lowercarbon Capital",
      "Bain Capital Ventures",
      "Formation 8",
      "Nebular",
      "David and Scott Aaronson"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/oratomic-raises-300m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Oratomic, a Pasadena, CA-based developer of fault-tolerant quantum computing architectures and quantum-error correction systems, raised $300m in Series A funding. The round was co-led by ARCH Venture Partners, Spark Capital, and Khosla Ventures, with participation from Bezos Expeditions, Index Ventures, General Catalyst, Lowercarbon Capital, Bain Capital Ventures, Formation 8, Nebular, and prominent quantum computing researchers David and Scott Aaronson."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Skapion",
    "announcedDate": "2026-07-13",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Counter-Drone Defense",
    "sectorEvidence": "Skapion, a Washington, D.C.-based developer of autonomous counter-drone swarm defense architectures",
    "role": "lead",
    "coInvestors": [
      "UP.Partners",
      "Fusion VC",
      "Stratos Ventures",
      "TBD VC",
      "q Fund"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/skapion-raises-36m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Skapion, a Washington, D.C.-based developer of autonomous counter-drone swarm defense architectures, raised $36m in seed funding. The round was co-led by UP.Partners and Khosla Ventures, with participation from early-stage backers Fusion VC, Stratos Ventures, TBD VC, and q Fund."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Singularity",
    "announcedDate": "2026-07-14",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Defense Tech",
    "sectorEvidence": "Singularity, a Los Angeles, CA-based defense tech company",
    "role": "lead",
    "coInvestors": [
      "Felicis",
      "AE Ventures",
      "NEA",
      "Long Journey",
      "Harpoon",
      "Menlo Ventures",
      "Y Combinator",
      "Decisive Point",
      "New Vista",
      "Sunflower",
      "Soma",
      "General (Ret.) James McConville",
      "General Jim Dickinson",
      "Major General (Ret.) Volodymyr Havrylov"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/singularity-raises-80m-in-series-a-at-400m-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Singularity, a Los Angeles, CA-based defense tech company, launched with $80m Series A funding at a $400m valuation. The round was led by Khosla Ventures and Felicis, with participation from seed investors AE Ventures and NEA, as well as Long Journey, Harpoon, Menlo Ventures, Y Combinator, Decisive Point, New Vista, Sunflower, and Soma, as well as dozens of recognized leaders from industry, the military, and Congress, including former U.S. Army Chief of Staff General (Ret.) James McConville, former Commander of United States Space Command General Jim Dickinson, and former Deputy Minister of Defense of Ukraine Major General (Ret.) Volodymyr Havrylov."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "State Affairs",
    "announcedDate": "2026-07-14",
    "datePrecision": "day",
    "round": null,
    "sector": "News Media",
    "sectorEvidence": "State Affairs, a Washington, DC-based technology company combining daily exclusive reporting, original data gathering and AI",
    "role": null,
    "coInvestors": [
      "Founders Fund",
      "Tru Arrow Partners",
      "Alumni Ventures",
      "Marcus Brauchli",
      "Alex Mather and Adam Hansmann",
      "Richard Sarnoff"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/state-affairs-raises-70m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "State Affairs, a Washington, DC-based technology company combining daily exclusive reporting, original data gathering and AI, raised $70M in total funding. Investors included Founders Fund, Khosla Ventures, Tru Arrow Partners, Alumni Ventures, Marcus Brauchli, Alex Mather and Adam Hansmann, and Richard Sarnoff."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Monumental",
    "announcedDate": "2026-07-15",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Construction Robotics",
    "sectorEvidence": "Monumental, an Amsterdam, The Netherlands-based tech company automating construction with robotics and software",
    "role": "lead",
    "coInvestors": [
      "Hummingbird",
      "Plural"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/monumental-raises-32m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Monumental, an Amsterdam, The Netherlands-based tech company automating construction with robotics and software, raised $32m in Series B funding. The round was led by Khosla Ventures, with participation from existing investors Hummingbird, Plural, and others."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Bunkerhill Health",
    "announcedDate": "2026-07-16",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Healthcare AI",
    "sectorEvidence": "Bunkerhill Health, a San Francisco, CA-based provider of AI-powered agent healthcare systems",
    "role": "lead",
    "coInvestors": [
      "Sequoia Capital",
      "Felicis",
      "Optum Ventures",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/bunkerhill-health-raises-55m-total-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Bunkerhill Health, a San Francisco, CA-based provider of AI-powered agent healthcare systems, raised an undisclosed amount in Series B funding. The round was led by Khosla Ventures, with continued participation from Sequoia Capital, Felicis, Optum Ventures, and Y Combinator."
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
    "company": "Emergent",
    "announcedDate": "2026-07-20",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Software Development",
    "sectorEvidence": "Emergent, a San Francisco, CA-based provider of an AI software creation platform",
    "role": "participant",
    "coInvestors": [
      "Creaegis",
      "MNI Ventures",
      "Claypond Capital",
      "Sentinel Global",
      "SoftBank Vision Fund 2",
      "Lightspeed",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/emergent-raises-130m-in-series-c-funding-at-1-5-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Emergent, a San Francisco, CA-based provider of an AI software creation platform, raised $130M in Series C funding, at $1.5 Billion valuation. The round was led by Creaegis, MNI Ventures, Claypond Capital and Sentinel Global, and participation from Khosla Ventures, SoftBank Vision Fund 2, Lightspeed, and Y Combinator."
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
    "company": "Twenty",
    "announcedDate": "2026-07-21",
    "datePrecision": "day",
    "round": null,
    "sector": "Cyber Warfare",
    "sectorEvidence": "Twenty, an Arlington, VA-based cyber warfare startup",
    "role": null,
    "coInvestors": [],
    "sourceUrl": "https://www.finsmes.com/2026/07/twenty-receives-30m-investment-from-khosla-ventures.html",
    "sourceType": "reputable-press",
    "evidence": "Twenty, an Arlington, VA-based cyber warfare startup, received a $30M investment from Khosla Ventures, at $1.2 Billion Valuation. The raise followed the recently announced $100M Series B at a $1 Billion valuation led by Accel."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Dili",
    "announcedDate": "2026-07-30",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Compliance Software",
    "sectorEvidence": "Dili, a NYC-based provider of an AI-native compliance platform for the industries powering America's infrastructure buildout",
    "role": "lead",
    "coInvestors": [
      "Y Combinator",
      "Allianz",
      "Brick and Mortar Ventures",
      "Rebel Fund"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/dili-raises-15m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Dili, a NYC-based provider of an AI-native compliance platform for the industries powering America's infrastructure buildout, raised $15m in Series A funding. The round, which brought total funding to date to $21.7m, was led by Khosla Ventures, with participation from Y Combinator, Allianz, Brick and Mortar Ventures, and Rebel Fund."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Ellis",
    "announcedDate": "2026-07-31",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Private Credit Software",
    "sectorEvidence": "Ellis, a NYC-based provider of an AI-native operations platform for private credit",
    "role": "participant",
    "coInvestors": [
      "First Round Capital",
      "645 Ventures",
      "Harlem Capital",
      "Slow Ventures",
      "Wilshire Lane",
      "Westbound",
      "Collide Capital",
      "Gallery Ventures",
      "Mellody Hobson",
      "Josh Kushner",
      "Immad Akhund"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/ellis-raises-10m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Ellis, a NYC-based provider of an AI-native operations platform for private credit, raised $10M in Seed funding. The round was led by First Round Capital with participation from 645 Ventures, Harlem Capital, Khosla Ventures, Slow Ventures, Wilshire Lane, Westbound, Collide Capital, Gallery Ventures, Mellody Hobson, Josh Kushner, and Immad Akhund."
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
    "company": "Mariana Minerals",
    "announcedDate": "2026-08-04",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Critical Minerals",
    "sectorEvidence": "a San Francisco, CA-based provider of a software-first, vertically integrated critical minerals platform",
    "role": null,
    "coInvestors": [
      "Andreessen Horowitz",
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
    "sourceUrl": "https://www.finsmes.com/2026/08/mariana-minerals-raises-310m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Mariana Minerals, a San Francisco, CA-based provider of a software-first, vertically integrated critical minerals platform, raised $310M in Series B financing.\n\nThe round was led by Khosla Ventures with participation from Andreessen Horowitz (a16z), Breakthrough Energy Ventures, Greenoaks, Halo Fund, Pax Ventures, StepStone Group, BHP Ventures, Washington Harbour Partners, Greycroft, General Innovation Capital Partners, Mitsubishi Corporation, In-Q-Tel (IQT), Earthshot Ventures, and additional strategic capital partners."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "WindBorne Systems",
    "announcedDate": "2026-08-05",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Weather Intelligence",
    "sectorEvidence": "WindBorne Systems, a Palo Alto, CA-based provider of a weather intelligence platform",
    "role": null,
    "coInvestors": [
      "Galvanize",
      "TransLink Capital",
      "Lux Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/windborne-systems-raises-37m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "WindBorne Systems, a Palo Alto, CA-based provider of a weather intelligence platform, raised $37M in Series B funding. The round was by Khosla Ventures and Galvanize with participation from TransLink Capital, Lux Capital, and existing investors."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Corma",
    "announcedDate": "2026-08-10",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Cybersecurity",
    "sectorEvidence": "Corma, a Tel Aviv, Israel-based provider of a foundation model platform purpose-built for defensive cybersecurity",
    "role": "participant",
    "coInvestors": [
      "Sequoia Capital",
      "Coatue"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/corma-raises-60m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Corma, a Tel Aviv, Israel-based provider of a foundation model platform purpose-built for defensive cybersecurity, raised $60M in Seed funding. The round was led by Sequoia Capital, with participation from Khosla Ventures and Coatue."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Peripheral",
    "announcedDate": "2026-08-18",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Sports Media AI",
    "sectorEvidence": "Peripheral, a Toronto, Canada-based company developing an AI spatial intelligence platform for live sports media",
    "role": "participant",
    "coInvestors": [
      "Inovia Capital",
      "Deloitte Ventures",
      "Entrepreneurs First"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/peripheral-raises-8-7m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Peripheral, a Toronto, Canada-based company developing an AI spatial intelligence platform for live sports media, raised $8.7M in Seed funding. The round was led by Inovia Capital and Deloitte Ventures with participation from Khosla Ventures and Entrepreneurs First."
  },
  {
    "firmSlug": "khosla-ventures",
    "company": "Sonic Fire Tech",
    "announcedDate": "2026-08-18",
    "datePrecision": "day",
    "round": null,
    "sector": "Fire Safety Tech",
    "sectorEvidence": "Sonic Fire Tech, a Columbus, Ohio-based clean technology startup developing acoustic fire suppression systems",
    "role": "participant",
    "coInvestors": [
      "The O.H.I.O. Fund"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/sonic-fire-tech-raises-15m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Sonic Fire Tech, a Columbus, Ohio-based clean technology startup developing acoustic fire suppression systems, raised $15m in funding. The round, which brought the company's total capital raised to $18.5m, was led by The O.H.I.O. Fund, with participation from Khosla Ventures."
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
    "company": "Chai Discovery",
    "announcedDate": "2026-07-14",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Drug Discovery",
    "sectorEvidence": "Chai Discovery, a San Francisco, CA-based company engineering AI models to discover new molecules",
    "role": null,
    "coInvestors": [
      "Index Ventures",
      "Sequoia Capital",
      "Dimension",
      "Bain Capital Ventures",
      "Battery Ventures",
      "Baillie Gifford",
      "BDT and MSD",
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
    "sourceUrl": "https://www.finsmes.com/2026/07/chai-discovery-raises-400m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Chai Discovery, a San Francisco, CA-based company engineering AI models to discover new molecules, raised $400M in Series C funding. The round, which valued the company at $3.8B, was led by Index Ventures alongside Kleiner Perkins, Sequoia Capital and Dimension with participation form Bain Capital Ventures, Battery Ventures, Baillie Gifford, BDT and MSD, Sapphire Ventures, Avra Capital, Thrive Capital, OpenAI, Oak HC/FT, Menlo Ventures, General Catalyst, Glade Brook, Avenir, Lachy Groom, and Yosemite."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "TerraFirma",
    "announcedDate": "2026-07-14",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Construction",
    "sectorEvidence": "TerraFirma, an Austin, TX-based tech-enabled, vertically integrated construction company",
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
    "sourceUrl": "https://www.finsmes.com/2026/07/terrafirma-raises-100m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "TerraFirma, an Austin, TX-based tech-enabled, vertically integrated construction company, raised $100M in Series A funding. The round was led by Kleiner Perkins, with participation from Bain Capital Ventures, Glade Brook Capital Partners, BANNER VC, Saga Ventures, Trust Ventures, Definition, PEAK6, Magnetar Capital, and Ravelin Capital."
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
    "sector": "Satellites",
    "sectorEvidence": "K2 Space, a Torrance, CA-based company manufacturing satellites",
    "role": "lead",
    "coInvestors": [
      "ICONIQ",
      "CapitalG",
      "Lightspeed",
      "Altimeter",
      "Spark Capital",
      "Sands Capital",
      "ARK Invest",
      "T. Rowe Price Associates, Inc."
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/k2-space-raises-500m-in-series-d-funding-at-6-8-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "K2 Space, a Torrance, CA-based company manufacturing satellites, raised $500M in Series D funding, at a $6.8B valuation. The round was led by Kleiner Perkins and ICONIQ with participation from CapitalG, Lightspeed, Altimeter, Spark Capital, Sands Capital, ARK Invest, T. Rowe Price Associates, Inc., and other existing investors."
  },
  {
    "firmSlug": "kleiner-perkins",
    "company": "Etched",
    "announcedDate": "2026-08-19",
    "datePrecision": "day",
    "round": null,
    "sector": "AI Inference Hardware",
    "sectorEvidence": "Etched, a San Jose, CA-based provider of inference clusters solutions",
    "role": "participant",
    "coInvestors": [
      "Jane Street",
      "Sequoia",
      "Andreessen Horowitz",
      "Tiger Global",
      "Bain Capital Ventures",
      "Neo",
      "Primary",
      "Stripes",
      "Positive Sum",
      "Blackstone"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/etched-raises-700m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Etched, a San Jose, CA-based provider of inference clusters solutions, raised $700M in financing, at $21 Billion valuation. The round was led by Jane Street with participation from Kleiner Perkins, Sequoia, Andreessen Horowitz, Tiger Global, Bain Capital Ventures, Neo, Primary, Stripes, Positive Sum, and Blackstone."
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
    "company": "Proxima Fusion",
    "announcedDate": "2026-07-07",
    "datePrecision": "day",
    "round": null,
    "sector": "Fusion Energy",
    "sectorEvidence": "a Munich, Germany-based stellarator company developing commercial fusion power plants",
    "role": "participant",
    "coInvestors": [
      "XTX Ventures",
      "East X Ventures",
      "RWE",
      "Google",
      "KfW Capital",
      "SPRIND",
      "Burda Principal Investments",
      "Plural",
      "UVC Partners",
      "Balderton",
      "Cherry Ventures",
      "DST Global Partners",
      "Brevan Howard Macro Venture",
      "DTCF",
      "redalpine",
      "Leitmotif",
      "Elaia",
      "CDP Venture Capital",
      "Bayern Kapital",
      "the EIC Fund"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/proxima-fusion-raises-e411m-at-e2-4-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Proxima Fusion, a Munich, Germany-based stellarator company developing commercial fusion power plants, raised €411M ($468M) in funding, at €2.4 Billion ($2.7 Billion) valuation.\n\nThe round was led by XTX Ventures and East X Ventures, with RWE and Google as strategic investors. KfW Capital, SPRIND and Burda Principal Investments joined alongside returning investors including Plural, UVC Partners, Balderton, Cherry Ventures, DST Global Partners, Brevan Howard Macro Venture, Lightspeed, DTCF, redalpine, Leitmotif, Elaia, CDP Venture Capital, Bayern Kapital, and the EIC Fund."
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
    "firmSlug": "lightspeed",
    "company": "Finto",
    "announcedDate": "2026-07-13",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Accounting Automation",
    "sectorEvidence": "a Munich, Germany-based developer of AI agents for enterprise accounting automation",
    "role": null,
    "coInvestors": [
      "Y Combinator",
      "Gradient"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/finto-raises-3-4m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Finto, a Munich, Germany-based developer of AI agents for enterprise accounting automation, raised $3.4m in seed funding.\n\nBackers included Y Combinator, Alphabet's Google-focused AI venture fund Gradient, and Lightspeed Venture Partners."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Neko Health",
    "announcedDate": "2026-07-15",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Preventive Health",
    "sectorEvidence": "a Stockholm, Sweden-based preventive health technology company",
    "role": "lead",
    "coInvestors": [
      "O.G. Venture Partners",
      "Atomico",
      "General Catalyst",
      "Lakestar",
      "Liberty City Ventures",
      "Positive Sum",
      "BDT and MSD",
      "Ari Emanuel",
      "Claudia Schiffer",
      "Sir Matthew Vaughn",
      "Danny Meyer",
      "Jimmy Iovine",
      "Maria Sharapova",
      "Mark Zuckerberg",
      "Priscilla Chan",
      "Thierry Henry",
      "Tim Ferriss",
      "will.i.am",
      "Alexis Ohanian",
      "Alex Tew",
      "Michael Acton-Smith",
      "Gary Vaynerchuk",
      "Jessie Inchauspé",
      "Katie Haun",
      "Raj Shamani",
      "Steven Bartlett",
      "Zoë Saldaña",
      "Marco Perego-Saldaña"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/neko-health-raises-700m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Neko Health, a Stockholm, Sweden-based preventive health technology company, raised $700M in Series C funding.\n\nThe round was led by Lightspeed Venture Partners and O.G. Venture Partners, with participation from Atomico, General Catalyst Lakestar, Liberty City Ventures, Positive Sum, BDT and MSD, Ari Emanuel, Claudia Schiffer, Sir Matthew Vaughn, Danny Meyer, Jimmy Iovine, Maria Sharapova, Mark Zuckerberg and Priscilla Chan, Thierry Henry, Tim Ferriss will.i.am, Alexis Ohanian, Alex Tew, Michael Acton-Smith, Gary Vaynerchuk, Jessie Inchauspé, Katie Haun, Raj Shamani, Steven Bartlett, Zoë Saldaña and Marco Perego-Saldaña."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Fireworks",
    "announcedDate": "2026-07-16",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "AI Inference Platform",
    "sectorEvidence": "Fireworks, the platform for specialized intelligence, enabling companies like Uber and Shopify to train and serve custom models",
    "role": "participant",
    "coInvestors": [
      "Atreides Management",
      "Index Ventures",
      "TCV",
      "Evantic",
      "NVIDIA"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260716264405/en/Fireworks-Raises-a-$1.5-Billion-Series-D-to-Lead-the-Specialized-Intelligence-Revolution",
    "sourceType": "press-release",
    "evidence": "Fireworks, the platform for specialized intelligence, enabling companies like Uber and Shopify to train and serve custom models, today announced a $1.505 billion Series D round at a $17.5 billion valuation. The round was led by Atreides Management, Index Ventures, and TCV, with participation from existing investors Evantic, Lightspeed Venture Partners, and NVIDIA."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Emergent",
    "announcedDate": "2026-07-20",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Software Development",
    "sectorEvidence": "Emergent, a San Francisco, CA-based provider of an AI software creation platform",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "Creaegis",
      "MNI Ventures",
      "Claypond Capital",
      "Sentinel Global",
      "SoftBank Vision Fund 2",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/emergent-raises-130m-in-series-c-funding-at-1-5-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Emergent, a San Francisco, CA-based provider of an AI software creation platform, raised $130M in Series C funding, at $1.5 Billion valuation. The round was led by Creaegis, MNI Ventures, Claypond Capital and Sentinel Global, and participation from Khosla Ventures, SoftBank Vision Fund 2, Lightspeed, and Y Combinator."
  },
  {
    "firmSlug": "lightspeed",
    "company": "K2 Space",
    "announcedDate": "2026-07-30",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Satellite Manufacturing",
    "sectorEvidence": "a Torrance, CA-based company manufacturing satellites",
    "role": "participant",
    "coInvestors": [
      "Kleiner Perkins",
      "ICONIQ",
      "CapitalG",
      "Altimeter",
      "Spark Capital",
      "Sands Capital",
      "ARK Invest",
      "T. Rowe Price Associates, Inc."
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/k2-space-raises-500m-in-series-d-funding-at-6-8-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "K2 Space, a Torrance, CA-based company manufacturing satellites, raised $500M in Series D funding, at a $6.8B valuation.\n\nThe round was led by Kleiner Perkins and ICONIQ with participation from CapitalG, Lightspeed, Altimeter, Spark Capital, Sands Capital, ARK Invest, T. Rowe Price Associates, Inc., and other existing investors."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Fixxly",
    "announcedDate": "2026-08-03",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Construction Materials Commerce",
    "sectorEvidence": "a Bengaluru, India-based developer of an AI-powered quick commerce platform for building and construction materials",
    "role": null,
    "coInvestors": [
      "Accel",
      "Fireside Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/fixxly-raises-5-5m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Fixxly, a Bengaluru, India-based developer of an AI-powered quick commerce platform for building and construction materials, raised $5.5m in seed funding.\n\nBackers included Accel, Fireside Ventures, and Lightspeed India Partners."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Harmony",
    "announcedDate": "2026-08-03",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Enterprise Service Management",
    "sectorEvidence": "a NYC-based provider of an AI-powered enterprise service management platform",
    "role": "lead",
    "coInvestors": [
      "Hitachi Ventures",
      "Fin Capital",
      "Mercer Ventures",
      "Operator Partners",
      "Assaf Rappaport",
      "Ofir Ehrlich"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/harmony-raises-34m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Harmony, a NYC-based provider of an AI-powered enterprise service management platform, raised $34M in Seed funding.\n\nThe round was led by Lightspeed Venture Partners with participation from Hitachi Ventures, Fin Capital, Mercer Ventures, Operator Partners, and angel investors including Assaf Rappaport and Ofir Ehrlich."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Base Power",
    "announcedDate": "2026-08-04",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Distributed Energy",
    "sectorEvidence": "an Austin, Texas-based provider of distributed energy solutions and home battery systems",
    "role": null,
    "coInvestors": [
      "a16z",
      "Ribbit",
      "Addition",
      "Valor Equity Partners",
      "JPMorganChase's Strategic Investment Group",
      "Altimeter",
      "D1 Capital Partners",
      "Sands Capital",
      "Coatue",
      "Layer Global",
      "Energy Impact Partners",
      "Thrive Capital",
      "Trust Ventures",
      "CapitalG"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/base-power-raises-1-billion-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Base Power, an Austin, Texas-based provider of distributed energy solutions and home battery systems, raised $1 Billion in Series D financing, at $13 Billion valuation.\n\nThe round was led by Ribbit, Addition, Valor Equity Partners, and JPMorganChase's Strategic Investment Group, with participation from Altimeter, D1 Capital Partners, Sands Capital, Coatue, Layer Global, Energy Impact Partners, Thrive Capital, a16z, Lightspeed, Trust Ventures, CapitalG, and others."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Mitti Labs",
    "announcedDate": "2026-08-05",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Climate GeoAI",
    "sectorEvidence": "a NYC- and Bengaluru, India-based deep-tech company and provider of a GeoAI satellite platform",
    "role": "participant",
    "coInvestors": [
      "Aramco Ventures",
      "Godrej Industries Group",
      "Cisco Foundation",
      "Francis Family Fund",
      "Volta Circle"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/mitti-labs-raises-9-5m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Mitti Labs, a NYC- and Bengaluru, India-based deep-tech company and provider of a GeoAI satellite platform, raised $9.5M in Series A funding.\n\nThe round was led by Aramco Ventures with participation from Lightspeed India, Godrej Industries Group, Cisco Foundation, Francis Family Fund, and Volta Circle."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Gravity",
    "announcedDate": "2026-08-12",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Advertising Technology",
    "sectorEvidence": "a San Francisco, CA-based developer of an automated agent-to-agent advertising platform",
    "role": "lead",
    "coInvestors": [
      "Committed Capital",
      "Basis Set Ventures",
      "Caffeinated Capital",
      "GGF",
      "Haystack",
      "the Logos Fund"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/gravity-raises-30-5m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Gravity, a San Francisco, CA-based developer of an automated agent-to-agent advertising platform, raised $30.5m in Series A funding.\n\nThe round was co-led by Lightspeed Venture Partners and Committed Capital, with participation from Basis Set Ventures, Caffeinated Capital, GGF, Haystack, and the Logos Fund."
  },
  {
    "firmSlug": "lightspeed",
    "company": "Discovered Materials",
    "announcedDate": "2026-08-19",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Materials Discovery",
    "sectorEvidence": "deploy swarms of AI agents to discover new materials capable of building more thermally efficient integrated circuits",
    "role": "lead",
    "coInvestors": [
      "Peak XV Partners",
      "Paul Graham"
    ],
    "sourceUrl": "https://theaiinsider.tech/2026/08/19/discovered-materials-announces-9m-funding-round-to-deploy-ai-agents-in-search-of-cooler-chip-materials/",
    "sourceType": "reputable-press",
    "evidence": "Discovered Materials closed a $9 million seed round led by Lightspeed India Partners, with participation from Peak XV Partners and angel investors including Paul Graham"
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
    "company": "Sonata",
    "announcedDate": "2026-07-20",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Preventive Healthcare",
    "sectorEvidence": "Sonata, a New York City-based developer of an AI-driven preventive healthcare membership platform",
    "role": "lead",
    "coInvestors": [
      "BoxGroup",
      "Sunflower Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/sonata-raises-7m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Sonata, a New York City-based developer of an AI-driven preventive healthcare membership platform, emerged from stealth mode after securing $7m in seed funding. The round was led by Lux Capital, BoxGroup, and Sunflower Capital, with strategic participation from operators and founders at Ramp and Linear."
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
    "company": "Genius AI",
    "announcedDate": "2026-07-22",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Vertical SaaS",
    "sectorEvidence": "Genius AI, a NYC-based provider of a technology platform for in-person service businesses",
    "role": "lead",
    "coInvestors": [
      "Bessemer Venture Partners",
      "Imaginary Ventures",
      "L Catterton Growth",
      "2048 Ventures",
      "StepStone Private Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/genius-ai-raises-44m-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Genius AI, a NYC-based provider of a technology platform for in-person service businesses, raised $44M in Series D financing, at $1.15 Billion valuation. The round was led by Lux Capital, with participation from Bessemer Venture Partners, Imaginary Ventures, L Catterton Growth, 2048 Ventures, StepStone Private Ventures, and other existing investors."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Glow",
    "announcedDate": "2026-07-22",
    "datePrecision": "day",
    "round": null,
    "sector": "Cybersecurity",
    "sectorEvidence": "Glow, a Tel Aviv, Israel- and Palo Alto, CA-based company developing AI-powered security solutions for workspace",
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
    "sourceUrl": "https://www.finsmes.com/2026/07/glow-raises-180m-in-funding-at-1-2b-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Glow, a Tel Aviv, Israel- and Palo Alto, CA-based company developing AI-powered security solutions for workspace, raised $180M in funding, at $1.2 Billion valuation. The round was led by Sequoia, Cyberstarts, Greenoaks, and Redpoint Ventures, with participation from Index Ventures, Swish Ventures, Lux Capital, Operator Collective, and Holly Ventures."
  },
  {
    "firmSlug": "lux-capital",
    "company": "SkyPilot",
    "announcedDate": "2026-07-22",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "AI Infrastructure",
    "sectorEvidence": "SkyPilot, a San Francisco, CA-based provide of an AI compute platform that helps AI teams manage their AI compute",
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
    "sourceUrl": "https://www.finsmes.com/2026/07/skypilot-raises-20m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "SkyPilot, a San Francisco, CA-based provide of an AI compute platform that helps AI teams manage their AI compute, raised $20M in Seed funding. The round was led by Lux Capital, with participation from Amplify Partners, Coatue Management, Foundation Capital, Race Capital, The House Fund, Ali Ghodsi, Jeff Dean, Guillermo Rauch, Amjad Masad, Clem Delangue, and Tristan Handy."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Agon",
    "announcedDate": "2026-07-31",
    "datePrecision": "day",
    "round": "Pre-Seed and Seed",
    "sector": "Defense Tech",
    "sectorEvidence": "Agon, a London, United Kingdom-based defensetech startup",
    "role": null,
    "coInvestors": [
      "Lakestar",
      "201 Ventures",
      "D3",
      "XYZ Venture Capital",
      "Northzone",
      "David Helgason"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/agon-raises-30m-in-pre-seed-and-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Agon, a London, United Kingdom-based defensetech startup, launched after raising $30m in cumulative pre-seed and seed funding. The investment combined an initial $7m pre-seed tranche with a newly finalized $23m expansion round backed by Lakestar, 201 Ventures, D3, XYZ Venture Capital, Lux Capital, Northzone, and individual angel investor David Helgason."
  },
  {
    "firmSlug": "lux-capital",
    "company": "WindBorne Systems",
    "announcedDate": "2026-08-05",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Weather Intelligence",
    "sectorEvidence": "WindBorne Systems, a Palo Alto, CA-based provider of a weather intelligence platform",
    "role": "participant",
    "coInvestors": [
      "Khosla Ventures",
      "Galvanize",
      "TransLink Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/windborne-systems-raises-37m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "WindBorne Systems, a Palo Alto, CA-based provider of a weather intelligence platform, raised $37M in Series B funding. The round was by Khosla Ventures and Galvanize with participation from TransLink Capital, Lux Capital, and existing investors."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Hadrian",
    "announcedDate": "2026-08-06",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Advanced Manufacturing",
    "sectorEvidence": "Hadrian, a Los Angeles, California-based developer of automated factories for aerospace and defense",
    "role": "participant",
    "coInvestors": [
      "WCM Investment Management",
      "Washington Harbour Partners",
      "Valor Equity Partners",
      "137 Ventures",
      "Baillie Gifford",
      "1789 Capital",
      "Morgan Stanley Wealth Management",
      "Apollo",
      "T. Rowe Price Associates, Inc.",
      "CapitalG",
      "Andreessen Horowitz",
      "Founders Fund",
      "Altimeter",
      "Construct Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/hadrian-raises-1-37-billion-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Hadrian, a Los Angeles, California-based developer of automated factories for aerospace and defense, raised $1.37 Billion in Series D funding, at $7.87 Billion valuation. The round was co-led by WCM Investment Management, Washington Harbour Partners, Valor Equity Partners, 137 Ventures, and Baillie Gifford, with participation from 1789 Capital, Morgan Stanley Wealth Management, funds managed by Apollo, accounts advised by T. Rowe Price Associates, Inc., CapitalG, Andreessen Horowitz, Founders Fund, Lux Capital, Altimeter, Construct Capital, and existing investors."
  },
  {
    "firmSlug": "lux-capital",
    "company": "Cambridge Aerospace",
    "announcedDate": "2026-08-10",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Defense Tech",
    "sectorEvidence": "Cambridge Aerospace, a Cambridge, UK-based provider of an air defence platform and low-cost interceptor systems for Allied forces",
    "role": null,
    "coInvestors": [
      "Elad Gil",
      "DFJ Growth",
      "Accel",
      "Lakestar",
      "Never Lift",
      "Ora Global"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/cambridge-aerospace-raises-300m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Cambridge Aerospace, a Cambridge, UK-based provider of an air defence platform and low-cost interceptor systems for Allied forces, raised $300M in Series C funding at $3.4 Billion valuation.\n\nThe round was led by DFJ Growth, with participation from Lux, Accel, Lakestar, Never Lift, Ora Global, and Elad Gil & Co."
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
    "sectorEvidence": "a San Francisco, CA-based video intelligence company",
    "role": null,
    "coInvestors": [
      "Index Ventures",
      "NAVER Ventures",
      "Amazon",
      "Radical Ventures",
      "Korea Investment Partners",
      "Quadrille Capital",
      "Red Bull Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/twelvelabs-raises-100m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "TwelveLabs, a San Francisco, CA-based video intelligence company, raised $100m in Series B funding.\n\nThe round was co-led by NEA and NAVER Ventures with participation from Amazon, Radical Ventures, Korea Investment Partners, Index Ventures, Quadrille Capital, and Red Bull Ventures."
  },
  {
    "firmSlug": "nea",
    "company": "Databento",
    "announcedDate": "2026-07-09",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Market Data",
    "sectorEvidence": "Databento, a Salt Lake City, OH-based provider of a market data platform for modern finance",
    "role": "lead",
    "coInvestors": [
      "DRW Venture Capital",
      "Redpoint Ventures",
      "Tribe Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/databento-raises-97m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Databento, a Salt Lake City, OH-based provider of a market data platform for modern finance, raised $97M in Series B funding. The round was led by New Enterprise Associates (NEA), with participation from strategic and existing investors, including DRW Venture Capital, Redpoint Ventures, and Tribe Capital, among others."
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
    "company": "Singularity",
    "announcedDate": "2026-07-14",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Defense Tech",
    "sectorEvidence": "Singularity, a Los Angeles, CA-based defense tech company",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "Felicis",
      "AE Ventures",
      "Long Journey",
      "Harpoon",
      "Menlo Ventures",
      "Y Combinator",
      "Decisive Point",
      "New Vista",
      "Sunflower",
      "Soma",
      "General (Ret.) James McConville",
      "General Jim Dickinson",
      "Major General (Ret.) Volodymyr Havrylov"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/singularity-raises-80m-in-series-a-at-400m-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Singularity, a Los Angeles, CA-based defense tech company, launched with $80m Series A funding at a $400m valuation. The round was led by Khosla Ventures and Felicis, with participation from seed investors AE Ventures and NEA, as well as Long Journey, Harpoon, Menlo Ventures, Y Combinator, Decisive Point, New Vista, Sunflower, and Soma, as well as dozens of recognized leaders from industry, the military, and Congress, including former U.S. Army Chief of Staff General (Ret.) James McConville, former Commander of United States Space Command General Jim Dickinson, and former Deputy Minister of Defense of Ukraine Major General (Ret.) Volodymyr Havrylov."
  },
  {
    "firmSlug": "nea",
    "company": "Valarian",
    "announcedDate": "2026-07-14",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Sovereign Infrastructure",
    "sectorEvidence": "Valarian, a London, UK-based company building the sovereign infrastructure layer for high-consequence operations and AI-driven systems",
    "role": "lead",
    "coInvestors": [
      "Lightbank",
      "XTX Markets",
      "Sequel",
      "LitVC",
      "Gokul Rajaram",
      "Nikesh Arora"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/valarian-raises-50m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Valarian, a London, UK-based company building the sovereign infrastructure layer for high-consequence operations and AI-driven systems, raised $50M in Series A funding. The round was led by New Enterprise Associates (NEA), with participation from Lightbank, XTX Markets, Sequel, LitVC, as well as angel investors Gokul Rajaram and Nikesh Arora."
  },
  {
    "firmSlug": "nea",
    "company": "Wonder",
    "announcedDate": "2026-07-16",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Food Tech",
    "sectorEvidence": "Wonder, a leading food technology platform",
    "role": "participant",
    "coInvestors": [
      "Accel",
      "GV (Google Ventures)",
      "AllianceBernstein",
      "ARK Invest",
      "Kayne Anderson Rudnick Investment Management"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/wonder-announces-650-million-series-d-round-at-a-9-billion-pre-money-valuation-302827208.html",
    "sourceType": "press-release",
    "evidence": "NEW YORK, July 16, 2026 /PRNewswire/ -- Wonder, a leading food technology platform, today announced its $650 million Series D round at a pre-money valuation of $9 billion.\n\nThe round has strong participation from existing investors, including Accel, GV (Google Ventures) and New Enterprise Associates (NEA)."
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
    "company": "Centralize",
    "announcedDate": "2026-07-29",
    "datePrecision": "day",
    "round": null,
    "sector": "Sales Intelligence",
    "sectorEvidence": "Centralize, a San Francisco, CA-based provider of a relationship intelligence platform for enterprise revenue teams",
    "role": "lead",
    "coInvestors": [
      "Salesforce Ventures",
      "Y Combinator",
      "20SALES",
      "Ritual Capital",
      "Adverb Ventures",
      "Stewart Butterfield",
      "Scott Woody"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/centralize-raises-19m-in-total-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Centralize, a San Francisco, CA-based provider of a relationship intelligence platform for enterprise revenue teams, raised $19M in total funding. The round was led by NEA (New Enterprise Associates) with participation from Salesforce Ventures, Y Combinator, 20SALES, Ritual Capital, Adverb Ventures, Stewart Butterfield, and Scott Woody."
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
    "company": "P-1 AI",
    "announcedDate": "2026-07-30",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Industrial AI",
    "sectorEvidence": "P-1 AI, Inc., a San Mateo, CA-based provider of an AI mechanical and electrical engineer solutions for industrial teams",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://www.finsmes.com/2026/07/p-1-ai-closes-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "P-1 AI, Inc., a San Mateo, CA-based provider of an AI mechanical and electrical engineer solutions for industrial teams, raised an undisclosed amount in Series A financing. The round was led by New Enterprise Associates (NEA)."
  },
  {
    "firmSlug": "nea",
    "company": "Horizon3",
    "announcedDate": "2026-08-03",
    "datePrecision": "day",
    "round": "Series E",
    "sector": "Cybersecurity",
    "sectorEvidence": "Horizon3, a San Francisco, CA-based provider of an AI-native proactive security platform",
    "role": "lead",
    "coInvestors": [
      "NightDragon",
      "Acrew Capital",
      "Blue Cloud Ventures",
      "Demeter Group",
      "EDBI",
      "PSG",
      "SAIC",
      "Sapphire Ventures",
      "Craft Ventures",
      "Prosperity7 Ventures",
      "Qualcomm Ventures",
      "Ridge Ventures",
      "SignalFire"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/horizon3-raises-250m-in-series-e-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Horizon3, a San Francisco, CA-based provider of an AI-native proactive security platform, raised $250M in Series E funding, at over $2 Billion valuation. The round was co-led by NightDragon and NEA with participation from Acrew Capital, Blue Cloud Ventures, Demeter Group, EDBI, PSG, SAIC, Sapphire Ventures, Craft Ventures, Prosperity7 Ventures, Qualcomm Ventures, Ridge Ventures, and SignalFire."
  },
  {
    "firmSlug": "nea",
    "company": "Databricks",
    "announcedDate": "2026-08-13",
    "datePrecision": "day",
    "round": "strategic funding round",
    "sector": "Data and AI",
    "sectorEvidence": "a San Francisco, CA-based Data and AI company",
    "role": null,
    "coInvestors": [
      "Andreessen Horowitz",
      "Coatue",
      "Blackstone",
      "MGX",
      "T. Rowe Price Associates, Inc.",
      "T. Rowe Price Investment Management, Inc.",
      "Sixth Street Growth",
      "BOND",
      "Clearlake Capital",
      "Point72",
      "Premji Invest",
      "TPG",
      "Dragoneer",
      "Fidelity Management & Research Company",
      "Franklin Templeton",
      "GIC",
      "Growth Equity at Goldman Sachs Alternatives",
      "Insight Partners",
      "J.P. Morgan Private Capital",
      "Kinetic",
      "Morgan Stanley Investment Management",
      "Ontario Teachers' Pension Plan",
      "Temasek",
      "Thrive Capital",
      "WCM Investment Management"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/databricks-closes-5-billion-strategic-funding-at-190-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Databricks, a San Francisco, CA-based Data and AI company, closed a $5 billion strategic funding round at a $190 billion valuation.\n\nThe round was led by Coatue, along with Blackstone, MGX, accounts advised by T. Rowe Price Associates, Inc. and T. Rowe Price Investment Management, Inc., and new investor Sixth Street Growth. Other new investors included BOND, Clearlake Capital, Point72, Premji Invest, and TPG alongside existing investors Andreessen Horowitz, Dragoneer, Fidelity Management & Research Company, Franklin Templeton, GIC, Growth Equity at Goldman Sachs Alternatives, Insight Partners, J.P. Morgan Private Capital, Kinetic, Morgan Stanley Investment Management, NEA, Ontario Teachers' Pension Plan, Temasek, Thrive Capital, and WCM Investment Management."
  },
  {
    "firmSlug": "nea",
    "company": "Wispr",
    "announcedDate": "2026-08-17",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Voice AI",
    "sectorEvidence": "Wispr, a San Francisco, CA-based provider of an AI voice dictation and human-AI interaction platform",
    "role": "participant",
    "coInvestors": [
      "Menlo Ventures",
      "Notable Capital",
      "Neo Ventures",
      "8VC",
      "MVP Ventures",
      "Acrew",
      "Forerunner",
      "Goodwater",
      "Peak XV",
      "Together Fund",
      "PLUS Capital",
      "Livvy Dunne",
      "Shaun White",
      "Dak Prescott",
      "DK Metcalf",
      "Joe Burrow",
      "Kyle Hamilton",
      "Aaron Gordon",
      "Alex Caruso",
      "Domantas Sabonis",
      "Klay Thompson",
      "Paul George",
      "Trae Young"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/wispr-raises-280m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Wispr, a San Francisco, CA-based provider of an AI voice dictation and human-AI interaction platform, raised $280M in Series B financing at a $2B valuation. The round was led by Menlo Ventures with participation from Notable Capital, NEA, Neo Ventures, 8VC, MVP Ventures, Acrew, Forerunner, Goodwater, Peak XV, Together Fund, PLUS Capital, Livvy Dunne, Shaun White, Dak Prescott, DK Metcalf, Joe Burrow, Kyle Hamilton, Aaron Gordon, Alex Caruso, Domantas Sabonis, Klay Thompson, Paul George, and Trae Young."
  },
  {
    "firmSlug": "nea",
    "company": "Abcuro",
    "announcedDate": "2026-08-18",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Biotech",
    "sectorEvidence": "Abcuro, a Newton, MA-based clinical-stage biotechnology company developing therapies for the treatment of autoimmune diseases through precise modulation of cytotoxic T cells",
    "role": "participant",
    "coInvestors": [
      "New Leaf Venture Partners",
      "abrdn Inc.",
      "Bain Capital Life Sciences",
      "Samsara BioCapital",
      "Redmile Group",
      "Mass General Brigham Ventures",
      "RA Capital Management",
      "Pontifax",
      "Sanofi Ventures",
      "Foresite Capital",
      "Eurofarma Ventures",
      "Kaitai Capital",
      "Soleus Capital",
      "Nancy Chang",
      "Shang Bay",
      "Rock Springs Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/abcuro-raises-66m-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Abcuro, a Newton, MA-based clinical-stage biotechnology company developing therapies for the treatment of autoimmune diseases through precise modulation of cytotoxic T cells, raised $66M in Series D funding. The round was led by New Leaf Venture Partners, with participation from abrdn Inc., Bain Capital Life Sciences, Samsara BioCapital, Redmile Group, Mass General Brigham Ventures, RA Capital Management, Pontifax, Sanofi Ventures, Foresite Capital, NEA, Eurofarma Ventures, Kaitai Capital, Soleus Capital, Nancy Chang, Shang Bay, and Rock Springs Capital."
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
    "firmSlug": "neo",
    "company": "Etched",
    "announcedDate": "2026-08-19",
    "datePrecision": "day",
    "round": null,
    "sector": "AI Inference Hardware",
    "sectorEvidence": "Etched, a San Jose, CA-based provider of inference clusters solutions",
    "role": "participant",
    "coInvestors": [
      "Jane Street",
      "Kleiner Perkins",
      "Sequoia",
      "Andreessen Horowitz",
      "Tiger Global",
      "Bain Capital Ventures",
      "Primary",
      "Stripes",
      "Positive Sum",
      "Blackstone"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/etched-raises-700m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Etched, a San Jose, CA-based provider of inference clusters solutions, raised $700M in financing, at $21 Billion valuation. The round was led by Jane Street with participation from Kleiner Perkins, Sequoia, Andreessen Horowitz, Tiger Global, Bain Capital Ventures, Neo, Primary, Stripes, Positive Sum, and Blackstone."
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
    "company": "TwelveLabs",
    "announcedDate": "2026-07-01",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Video AI",
    "sectorEvidence": "a San Francisco, CA-based video intelligence company",
    "role": null,
    "coInvestors": [
      "Index Ventures",
      "NEA",
      "NAVER Ventures",
      "Amazon",
      "Korea Investment Partners",
      "Quadrille Capital",
      "Red Bull Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/twelvelabs-raises-100m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "TwelveLabs, a San Francisco, CA-based video intelligence company, raised $100m in Series B funding.\n\nThe round was co-led by NEA and NAVER Ventures with participation from Amazon, Radical Ventures, Korea Investment Partners, Index Ventures, Quadrille Capital, and Red Bull Ventures."
  },
  {
    "firmSlug": "radical-ventures",
    "company": "Prime Intellect",
    "announcedDate": "2026-07-08",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Prime Intellect is building a full stack for agent development, spanning compute access, environments, sandboxes, evaluations, deployment and large-scale reinforcement learning.",
    "role": "lead",
    "coInvestors": [
      "NVIDIA Ventures",
      "Intel Capital",
      "Dell Technologies Capital",
      "ICONIQ"
    ],
    "sourceUrl": "https://radical.vc/articles/prime-intellect-owning-the-learning-loop/",
    "sourceType": "firm-site",
    "evidence": "This week, Radical Ventures announced our lead investment in Prime Intellect’s $130M Series A, joined by NVIDIA Ventures, Intel Capital, Dell Technologies Capital, and ICONIQ, along with a group of operators building at the frontier."
  },
  {
    "firmSlug": "radical-ventures",
    "company": "Discovery Loop",
    "announcedDate": "2026-08-05",
    "datePrecision": "day",
    "round": null,
    "sector": "AI for Science",
    "sectorEvidence": "run thousands of experiments in parallel - proposing hypotheses, executing tests, analyzing results, and iterating, all without human intervention",
    "role": "lead",
    "coInvestors": [],
    "sourceUrl": "https://radical.vc/articles/our-investment-in-discovery-loop/",
    "sourceType": "firm-site",
    "evidence": "Radical Ventures is co-leading an investment in Discovery Loop, a public benefit company founded by AI research pioneers Jeff Dean, Sanjay Ghemawat, Quoc Le, and Oriol Vinyals."
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
    "sectorEvidence": "To test how humans want to communicate with machines, Enigma is launching a large-scale experiment that allows anyone in the world to interact online with more than 100 of its proprietary AI robots.",
    "role": "lead",
    "coInvestors": [
      "Index Ventures",
      "Conviction Partners"
    ],
    "sourceUrl": "https://techcrunch.com/2026/07/27/enigma-raises-70m-to-make-controlling-a-robot-as-easy-as-adjusting-the-volume/",
    "sourceType": "reputable-press",
    "evidence": "To finance its mission, Enigma raised a $71 million seed round led by Index Ventures and Ribbit Capital, with participation from Sarah Guo of Conviction Partners."
  },
  {
    "firmSlug": "ribbit-capital",
    "company": "Base Power",
    "announcedDate": "2026-08-04",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Distributed Energy",
    "sectorEvidence": "an Austin, Texas-based provider of distributed energy solutions and home battery systems",
    "role": null,
    "coInvestors": [
      "a16z",
      "Addition",
      "Valor Equity Partners",
      "JPMorganChase's Strategic Investment Group",
      "Altimeter",
      "D1 Capital Partners",
      "Sands Capital",
      "Coatue",
      "Layer Global",
      "Energy Impact Partners",
      "Thrive Capital",
      "Lightspeed",
      "Trust Ventures",
      "CapitalG"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/base-power-raises-1-billion-in-series-d-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Base Power, an Austin, Texas-based provider of distributed energy solutions and home battery systems, raised $1 Billion in Series D financing, at $13 Billion valuation.\n\nThe round was led by Ribbit, Addition, Valor Equity Partners, and JPMorganChase's Strategic Investment Group, with participation from Altimeter, D1 Capital Partners, Sands Capital, Coatue, Layer Global, Energy Impact Partners, Thrive Capital, a16z, Lightspeed, Trust Ventures, CapitalG, and others."
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
    "company": "Chai Discovery",
    "announcedDate": "2026-07-14",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Drug Discovery",
    "sectorEvidence": "the company engineering AI models to discover new molecules",
    "role": "participant",
    "coInvestors": [
      "Index Ventures",
      "Kleiner Perkins",
      "Dimension"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260713849009/en/Chai-Discovery-Announces-$400M-Series-C-to-Advance-AI-Driven-Molecular-Design",
    "sourceType": "press-release",
    "evidence": "Chai Discovery, the company engineering AI models to discover new molecules, today announced a $400M Series C fundraise to further accelerate progress. The round, which values the company at $3.8B, was led by Index Ventures alongside Kleiner Perkins, Sequoia Capital and Dimension."
  },
  {
    "firmSlug": "sequoia",
    "company": "Senra Systems",
    "announcedDate": "2026-07-15",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Advanced Manufacturing",
    "sectorEvidence": "a Cypress, CA-based software-driven manufacturing company optimizing wire harness production",
    "role": null,
    "coInvestors": [
      "Andreessen Horowitz",
      "Lowercarbon Capital",
      "Interlagos",
      "General Catalyst",
      "Founders Fund",
      "Dylan Field",
      "CIV",
      "8VC",
      "The Friedkin Group",
      "Jaws Estates Capital",
      "Sozo Ventures",
      "Alumni Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/senra-systems-raises-65m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Senra Systems, a Cypress, CA-based software-driven manufacturing company optimizing wire harness production, raised $65M in Series B funding.\n\nThe round was led by Lowercarbon Capital and Interlagos, with participation from General Catalyst, Sequoia Capital, Andreessen Horowitz, Founders Fund, Dylan Field, CIV, 8VC, The Friedkin Group, Jaws Estates Capital, Sozo Ventures and Alumni Ventures."
  },
  {
    "firmSlug": "sequoia",
    "company": "Bunkerhill Health",
    "announcedDate": "2026-07-16",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Healthcare AI",
    "sectorEvidence": "the agentic AI platform health systems use to turn their best ideas into reality",
    "role": "participant",
    "coInvestors": [
      "Khosla Ventures",
      "Felicis",
      "Optum Ventures",
      "Y Combinator"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260716806874/en/Bunkerhill-Health-Raises-$55-Million-to-Help-Health-Systems-Turn-Their-Best-Ideas-into-Reality",
    "sourceType": "press-release",
    "evidence": "Bunkerhill Health, the agentic AI platform health systems use to turn their best ideas into reality, today announced the close of its Series B funding round, led by Khosla Ventures, with continued participation from Sequoia Capital, Felicis, Optum Ventures, and Y Combinator."
  },
  {
    "firmSlug": "sequoia",
    "company": "Sable",
    "announcedDate": "2026-07-16",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Sales Automation",
    "sectorEvidence": "Sable created 'Aidan,' the first AI employee, who leads its own customer calls with vision, voice, video and real-time browser interaction.",
    "role": "lead",
    "coInvestors": [
      "8VC"
    ],
    "sourceUrl": "https://thenextweb.com/news/sable-aidan-ai-employee-sequoia-45-million",
    "sourceType": "reputable-press",
    "evidence": "Sable has raised $45 million from Sequoia Capital and 8VC to build an AI system called Aidan"
  },
  {
    "firmSlug": "sequoia",
    "company": "Glow",
    "announcedDate": "2026-07-22",
    "datePrecision": "day",
    "round": null,
    "sector": "Cybersecurity",
    "sectorEvidence": "Glow gives security teams control over everything that runs on the endpoint. Specialized AI agents continuously map the environment, analyze risk in real time, and enforce policies automatically.",
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
    "sourceUrl": "https://www.glow.io/news/glow-emerges-from-stealth-with-180-million",
    "sourceType": "company-site",
    "evidence": "TEL AVIV, Israel and PALO ALTO, Calif., July 22, 2026 - Glow, the AI-powered endpoint security company, today emerged from stealth with $180 million in funding at a $1.2 billion valuation to redefine how enterprises secure the modern endpoint with a prevention-first approach. The round was led by Sequoia, Cyberstarts, Greenoaks, and Redpoint Ventures, with participation from Index Ventures, Swish Ventures, Lux Capital, Operator Collective, and Holly Ventures."
  },
  {
    "firmSlug": "sequoia",
    "company": "Cathedral",
    "announcedDate": "2026-07-23",
    "datePrecision": "day",
    "round": null,
    "sector": "Defense Tech",
    "sectorEvidence": "a New York City-based developer of AI-driven cyber warfare platforms and defensive national security systems",
    "role": "lead",
    "coInvestors": [
      "Andreessen Horowitz (a16z)"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/cathedral-raises-160m-in-funding-at-a-1-4-billion-post-money-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Cathedral, a New York City-based developer of AI-driven cyber warfare platforms and defensive national security systems, reportedly raised $160m in funding round at a $1.4 billion post-money valuation. The round was co-led by Andreessen Horowitz (a16z) and Sequoia Capital."
  },
  {
    "firmSlug": "sequoia",
    "company": "Etched",
    "announcedDate": "2026-07-23",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Inference Hardware",
    "sectorEvidence": "Etched, the company building frontier inference clusters",
    "role": "lead",
    "coInvestors": [
      "a16z",
      "Jane Street",
      "Diffusion",
      "SK Hynix"
    ],
    "sourceUrl": "https://www.globenewswire.com/news-release/2026/07/23/3332366/0/en/etched-raises-300m-at-a-10-3b-valuation-to-scale-production-of-frontier-scale-inference-hardware.html",
    "sourceType": "press-release",
    "evidence": "SAN JOSE, Calif., July 23, 2026 (GLOBE NEWSWIRE) -- Etched, the company building frontier inference clusters, today announced $300M in new financing at a $10.3B valuation less than one month after emerging from stealth. The latest round was led by Sequoia, with participation from a16z, Jane Street, Diffusion, and SK Hynix and represents the highest valuation ever for a Sequoia-led Series C."
  },
  {
    "firmSlug": "sequoia",
    "company": "Valar Atomics",
    "announcedDate": "2026-08-04",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Nuclear Energy",
    "sectorEvidence": "to bring manufacturing economics to nuclear through a vertically integrated business model and unwavering prioritization of hardware",
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
    "sourceType": "company-site",
    "evidence": "Valar Atomics is excited to announce the closing of a $1 billion Series B financing led by Sequoia Capital."
  },
  {
    "firmSlug": "sequoia",
    "company": "Corma",
    "announcedDate": "2026-08-10",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Cybersecurity",
    "sectorEvidence": "a Tel Aviv, Israel-based provider of a foundation model platform purpose-built for defensive cybersecurity",
    "role": "lead",
    "coInvestors": [
      "Khosla Ventures",
      "Coatue"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/corma-raises-60m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Corma, a Tel Aviv, Israel-based provider of a foundation model platform purpose-built for defensive cybersecurity, raised $60M in Seed funding. The round was led by Sequoia Capital, with participation from Khosla Ventures and Coatue."
  },
  {
    "firmSlug": "sequoia",
    "company": "Neros Technologies",
    "announcedDate": "2026-08-11",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Defense Tech",
    "sectorEvidence": "building a new era of credible deterrence for America and its allies by establishing a domestic drone industrial base in the United States",
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
    "evidence": "TORRANCE, Calif., Aug. 11, 2026 /PRNewswire/ -- Neros Technologies has announced a $250M Series C at a post money valuation of $2.5B co-led by Sequoia Capital and American Strategic Technology Fund (ASTF) with participation by Interlagos, Valor Equity Partners, Allen & Company, Thiel Capital, Spark Capital, and Dylan Field."
  },
  {
    "firmSlug": "sequoia",
    "company": "Form Energy",
    "announcedDate": "2026-08-12",
    "datePrecision": "day",
    "round": "Series G",
    "sector": "Energy Storage",
    "sectorEvidence": "a Weirton, WV-based provider of multi-day energy storage systems",
    "role": "participant",
    "coInvestors": [
      "T. Rowe Price",
      "Janus Henderson",
      "Franklin Templeton",
      "PEAK6 Investments",
      "Prelude Ventures",
      "Engine Ventures",
      "TPG Rise Climate",
      "Capricorn's Technology Impact Funds",
      "Breakthrough Energy Ventures",
      "Dustin Moskovitz and Cari Tuna",
      "Gigascale Capital",
      "Coatue",
      "Energy Impact Partners",
      "NGP",
      "GE Vernova",
      "Blindspot Ventures",
      "M&G Catalyst Fund"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/form-energy-raises-750m-in-series-g-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Form Energy, Inc., a Weirton, WV-based provider of multi-day energy storage systems, raised $750M in Series G financing. The round was led by T. Rowe Price with participation from Sequoia Capital, Janus Henderson, Franklin Templeton, PEAK6 Investments, Prelude Ventures, Engine Ventures, TPG Rise Climate, Capricorn's Technology Impact Funds, Breakthrough Energy Ventures, Dustin Moskovitz and Cari Tuna, Gigascale Capital, Coatue, Energy Impact Partners, NGP, GE Vernova, Blindspot Ventures, and M&G Catalyst Fund."
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
    "firmSlug": "sequoia",
    "company": "Trajectory",
    "announcedDate": "2026-08-17",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Infrastructure",
    "sectorEvidence": "a San Francisco, CA-based provider of an AI infrastructure and agent optimization platform",
    "role": "lead",
    "coInvestors": [
      "NVIDIA",
      "Bessemer Venture Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/trajectory-raises-40m-in-series-a-funding-at-300m-post-money-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Trajectory, a San Francisco, CA-based provider of an AI infrastructure and agent optimization platform, raised $40m in Series A funding at a $300m post-money valuation. The round was led by Sequoia Capital, with participation from NVIDIA and Bessemer Venture Partners."
  },
  {
    "firmSlug": "sequoia",
    "company": "Rillet",
    "announcedDate": "2026-08-19",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Fintech",
    "sectorEvidence": "a San Francisco, CA-based provider of an AI-native ERP platform for finance teams",
    "role": "participant",
    "coInvestors": [
      "ICONIQ",
      "Andreessen Horowitz",
      "Sequoia Global Equities",
      "Bain Capital Ventures",
      "Oak HC/FT",
      "Battery Ventures",
      "FirstMark",
      "Scale Venture Partners",
      "Creandum"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/rillet-raises-100m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Rillet, a San Francisco, CA-based provider of an AI-native ERP platform for finance teams, raised $100M in Series C funding, at $1 Billion valuation. The round was led by ICONIQ with participation from Sequoia, Andreessen Horowitz, Sequoia Global Equities, Bain Capital Ventures, Oak HC/FT, Battery Ventures, FirstMark, Scale Venture Partners, and Creandum."
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
    "company": "Oratomic",
    "announcedDate": "2026-07-07",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Quantum Computing",
    "sectorEvidence": "Oratomic develops the hardware and software layers engineered to build a commercially scalable, fault-tolerant quantum computer, bypassing noisy intermediate-scale quantum (NISQ) bottlenecks through active topological error correction arrays.",
    "role": "lead",
    "coInvestors": [
      "ARCH Venture Partners",
      "Khosla Ventures",
      "Bezos Expeditions",
      "Index Ventures",
      "General Catalyst",
      "Lowercarbon Capital",
      "Bain Capital Ventures",
      "Formation 8",
      "Nebular"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/oratomic-raises-300m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Oratomic, a Pasadena, CA-based developer of fault-tolerant quantum computing architectures and quantum-error correction systems, raised $300m in Series A funding. The round was co-led by ARCH Venture Partners, Spark Capital, and Khosla Ventures, with participation from Bezos Expeditions, Index Ventures, General Catalyst, Lowercarbon Capital, Bain Capital Ventures, Formation 8, Nebular, and prominent quantum computing researchers David and Scott Aaronson."
  },
  {
    "firmSlug": "spark-capital",
    "company": "K2 Space",
    "announcedDate": "2026-07-30",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "Space",
    "sectorEvidence": "K2 Space is a manufacturer of satellites for commercial, scientific, and defense missions.",
    "role": "participant",
    "coInvestors": [
      "Kleiner Perkins",
      "ICONIQ",
      "CapitalG",
      "Lightspeed",
      "Altimeter",
      "Sands Capital",
      "ARK Invest",
      "T. Rowe Price Associates, Inc."
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/k2-space-raises-500m-in-series-d-funding-at-6-8-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "K2 Space, a Torrance, CA-based company manufacturing satellites, raised $500M in Series D funding, at a $6.8B valuation. The round was led by Kleiner Perkins and ICONIQ with participation from CapitalG, Lightspeed, Altimeter, Spark Capital, Sands Capital, ARK Invest, T. Rowe Price Associates, Inc., and other existing investors."
  },
  {
    "firmSlug": "spark-capital",
    "company": "Convex",
    "announcedDate": "2026-08-05",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Developer Infrastructure",
    "sectorEvidence": "a San Francisco, CA-based reactive backend platform",
    "role": null,
    "coInvestors": [
      "a16z",
      "Insight Partners",
      "Etna Labs"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/convex-raises-57m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Convex, a San Francisco, CA-based reactive backend platform, raised $57M in Series B financing.\n\nThe round was led by Insight Partners with participation from Etna Labs, a16z, and Spark Capital."
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
    "sectorEvidence": "building a new era of credible deterrence for America and its allies by establishing a domestic drone industrial base in the United States",
    "role": null,
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
    "evidence": "TORRANCE, Calif., Aug. 11, 2026 /PRNewswire/ -- Neros Technologies has announced a $250M Series C at a post money valuation of $2.5B co-led by Sequoia Capital and American Strategic Technology Fund (ASTF) with participation by Interlagos, Valor Equity Partners, Allen & Company, Thiel Capital, Spark Capital, and Dylan Field."
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
    "announcedDate": "2026-07-15",
    "datePrecision": "day",
    "round": "Series D",
    "sector": "AI Infrastructure",
    "sectorEvidence": "Fireworks helps companies transform general-purpose models into specialized intelligence trained on their own data and deliver it at scale on the top-performing inference stack.",
    "role": "lead",
    "coInvestors": [
      "Atreides Management",
      "Index Ventures",
      "Evantic Capital",
      "Lightspeed Venture Partners",
      "Nvidia",
      "20VC",
      "Bessemer Venture Partners",
      "Menlo Ventures"
    ],
    "sourceUrl": "https://fireworks.ai/blog/series-d-announcement",
    "sourceType": "company-site",
    "evidence": "Today, Fireworks announced a $1.505 billion Series D at a $17.5 billion valuation, led by Atreides Management, Index Ventures, and TCV, with participation from Evantic Capital, Lightspeed Venture Partners, Nvidia, 20VC, Bessemer Venture Partners, Menlo Ventures, and others."
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
    "firmSlug": "tcv",
    "company": "Onyx Security",
    "announcedDate": "2026-07-30",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "AI Security",
    "sectorEvidence": "a secure AI control plane platform for enterprises",
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
    "sourceUrl": "https://www.finsmes.com/2026/07/onyx-security-raises-113m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Onyx Security, a NYC-based provider of a secure AI control plane platform for enterprises, raised $113M in Series B funding. The round was led by Bessemer Venture Partners with participation from Cyberstarts, TCV, Conviction, FirstMark, Vintage, QuantumLight, and G Squared."
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
    "company": "Proception.AI",
    "announcedDate": "2026-07-01",
    "datePrecision": "day",
    "round": "seed",
    "sector": "Robotics",
    "sectorEvidence": "a Mountain View, California-based developer of dexterous robotic hands and tactile data pipelines for humanoid robots",
    "role": "participant",
    "coInvestors": [
      "First Round Capital",
      "BoxGroup"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/proception-ai-raises-11m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Proception.AI, a Mountain View, California-based developer of dexterous robotic hands and tactile data pipelines for humanoid robots, raised $11m in seed funding. The round was led by First Round Capital, with participation from Y Combinator and BoxGroup."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Finto",
    "announcedDate": "2026-07-13",
    "datePrecision": "day",
    "round": "seed",
    "sector": "Accounting Automation",
    "sectorEvidence": "a Munich, Germany-based developer of AI agents for enterprise accounting automation",
    "role": null,
    "coInvestors": [
      "Gradient",
      "Lightspeed Venture Partners"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/finto-raises-3-4m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Finto, a Munich, Germany-based developer of AI agents for enterprise accounting automation, raised $3.4m in seed funding. Backers included Y Combinator, Alphabet's Google-focused AI venture fund Gradient, and Lightspeed Venture Partners."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Hadrius",
    "announcedDate": "2026-07-14",
    "datePrecision": "day",
    "round": "Seed and Series A",
    "sector": "RegTech",
    "sectorEvidence": "a NYC-based provider of an agentic compliance infrastructure platform for financial services firms",
    "role": "participant",
    "coInvestors": [
      "CRV",
      "Pathlight Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/hadrius-raises-27m-in-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Hadrius, a NYC-based provider of an agentic compliance infrastructure platform for financial services firms, raised $27M in funding. The round, which consisted of a combination of a Seed and Series A, was led by CRV, with participation from Y Combinator, Pathlight Ventures, and the founders of Altruist, Jump AI, and FINNY."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Singularity",
    "announcedDate": "2026-07-14",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Defense Tech",
    "sectorEvidence": "Singularity, a Los Angeles, CA-based defense tech company",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "Felicis",
      "AE Ventures",
      "NEA",
      "Long Journey",
      "Harpoon",
      "Menlo Ventures",
      "Decisive Point",
      "New Vista",
      "Sunflower",
      "Soma",
      "General (Ret.) James McConville",
      "General Jim Dickinson",
      "Major General (Ret.) Volodymyr Havrylov"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/singularity-raises-80m-in-series-a-at-400m-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Singularity, a Los Angeles, CA-based defense tech company, launched with $80m Series A funding at a $400m valuation. The round was led by Khosla Ventures and Felicis, with participation from seed investors AE Ventures and NEA, as well as Long Journey, Harpoon, Menlo Ventures, Y Combinator, Decisive Point, New Vista, Sunflower, and Soma, as well as dozens of recognized leaders from industry, the military, and Congress, including former U.S. Army Chief of Staff General (Ret.) James McConville, former Commander of United States Space Command General Jim Dickinson, and former Deputy Minister of Defense of Ukraine Major General (Ret.) Volodymyr Havrylov."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Bunkerhill Health",
    "announcedDate": "2026-07-16",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Healthcare AI",
    "sectorEvidence": "the agentic AI platform health systems use to turn their best ideas into reality",
    "role": "participant",
    "coInvestors": [
      "Khosla Ventures",
      "Sequoia Capital",
      "Felicis",
      "Optum Ventures"
    ],
    "sourceUrl": "https://www.businesswire.com/news/home/20260716806874/en/Bunkerhill-Health-Raises-$55-Million-to-Help-Health-Systems-Turn-Their-Best-Ideas-into-Reality",
    "sourceType": "press-release",
    "evidence": "Bunkerhill Health, the agentic AI platform health systems use to turn their best ideas into reality, today announced the close of its Series B funding round, led by Khosla Ventures, with continued participation from Sequoia Capital, Felicis, Optum Ventures, and Y Combinator."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Emergent",
    "announcedDate": "2026-07-20",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "AI Software Development",
    "sectorEvidence": "Emergent, a San Francisco, CA-based provider of an AI software creation platform",
    "role": null,
    "coInvestors": [
      "Khosla Ventures",
      "Creaegis",
      "MNI Ventures",
      "Claypond Capital",
      "Sentinel Global",
      "SoftBank Vision Fund 2",
      "Lightspeed"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/emergent-raises-130m-in-series-c-funding-at-1-5-billion-valuation.html",
    "sourceType": "reputable-press",
    "evidence": "Emergent, a San Francisco, CA-based provider of an AI software creation platform, raised $130M in Series C funding, at $1.5 Billion valuation. The round was led by Creaegis, MNI Ventures, Claypond Capital and Sentinel Global, and participation from Khosla Ventures, SoftBank Vision Fund 2, Lightspeed, and Y Combinator."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Vorflux",
    "announcedDate": "2026-07-20",
    "datePrecision": "day",
    "round": "seed",
    "sector": "Developer Tools",
    "sectorEvidence": "a Bengaluru, India-based developer of an AI-native autonomous software engineering platform",
    "role": "lead",
    "coInvestors": [
      "Peak XV Partners",
      "Powerset",
      "Alliance",
      "Parker Conrad",
      "Immad Akhund",
      "Balaji Srinivasan"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/vorflux-raises-15m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Vorflux, a Bengaluru, India-based developer of an AI-native autonomous software engineering platform, raised $15m in seed funding. The round was led by Y Combinator, Peak XV Partners, Powerset, and Alliance, with participation from Rippling CEO Parker Conrad, Mercury CEO Immad Akhund, and former Coinbase CTO Balaji Srinivasan."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Scape",
    "announcedDate": "2026-07-27",
    "datePrecision": "day",
    "round": "seed",
    "sector": "Productivity Software",
    "sectorEvidence": "a Stockholm, Sweden-based developer of an AI-native intelligent email platform",
    "role": null,
    "coInvestors": [
      "General Catalyst",
      "FundersClub",
      "Max Junestrand",
      "Sebastian Knutsson",
      "Sophia Bendz",
      "Jacob Wallenberg Jr."
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/scape-raises-3-2m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Scape, a Stockholm, Sweden-based developer of an AI-native intelligent email platform, emerged from stealth mode after raising $3.2m in seed funding. Backers included Y Combinator, General Catalyst, and FundersClub, angels Max Junestrand, Sebastian Knutsson, Sophia Bendz, Jacob Wallenberg Jr., and executives from OpenAI, Google, Meta, and Ramp."
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
    "company": "telli",
    "announcedDate": "2026-07-28",
    "datePrecision": "day",
    "round": "seed",
    "sector": "Customer Communications",
    "sectorEvidence": "a Berlin, Germany-based developer of an AI-native consumer communication and customer operations platform",
    "role": "participant",
    "coInvestors": [
      "redalpine",
      "Mutschler",
      "Marc Bitzer",
      "Alexa von Bismarck",
      "Martin Koehler",
      "Cherry Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/telli-raises-15m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "telli, a Berlin, Germany-based developer of an AI-native consumer communication and customer operations platform, raised $15m in seed funding. The round was led by redalpine, with participation from Mutschler and a syndicate of strategic angel backers including Whirlpool CEO Marc Bitzer, Adyen executive Alexa von Bismarck, and former Lufthansa director Martin Koehler, alongside existing investors Cherry Ventures and Y Combinator."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Centralize",
    "announcedDate": "2026-07-29",
    "datePrecision": "day",
    "round": null,
    "sector": "Sales Software",
    "sectorEvidence": "a San Francisco, CA-based provider of a relationship intelligence platform for enterprise revenue teams",
    "role": "participant",
    "coInvestors": [
      "NEA (New Enterprise Associates)",
      "Salesforce Ventures",
      "20SALES",
      "Ritual Capital",
      "Adverb Ventures",
      "Stewart Butterfield",
      "Scott Woody"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/centralize-raises-19m-in-total-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Centralize, a San Francisco, CA-based provider of a relationship intelligence platform for enterprise revenue teams, raised $19M in total funding. The round was led by NEA (New Enterprise Associates) with participation from Salesforce Ventures, Y Combinator, 20SALES, Ritual Capital, Adverb Ventures, Stewart Butterfield, and Scott Woody."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Healia",
    "announcedDate": "2026-07-29",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Health Benefits",
    "sectorEvidence": "a Columbus, OH-based provider of a healthcare benefits platform for dual-income families and employers",
    "role": "participant",
    "coInvestors": [
      "111° West Capital",
      "First Round Capital",
      "Pioneer Fund",
      "GoAhead Ventures",
      "North Coast Ventures"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/healia-raises-14m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Healia, a Columbus, OH-based provider of a healthcare benefits platform for dual-income families and employers, raised $14M in Series A funding. The round was led by 111° West Capital with participation from Y Combinator, First Round Capital, Pioneer Fund, GoAhead Ventures, and North Coast Ventures."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Terminal",
    "announcedDate": "2026-07-29",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Telematics Data Infrastructure",
    "sectorEvidence": "a provider of unified telematics integration technology transforming operations across insurance, fleet management and logistics companies",
    "role": "participant",
    "coInvestors": [
      "Battery Ventures",
      "Intact Private Capital",
      "Penske",
      "Wayfinder Ventures"
    ],
    "sourceUrl": "https://www.prnewswire.com/news-releases/terminal-raises-20-million-to-scale-market-leading-telematics-integration-technology-for-fortune-500-companies-across-insurance-fleet-management-and-logistics-302837250.html",
    "sourceType": "press-release",
    "evidence": "Terminal, a provider of unified telematics integration technology transforming operations across insurance, fleet management and logistics companies, today announced it closed $20 million in Series A financing led by Battery Ventures, with participation from new strategic investors Intact Private Capital and Penske, and return investors Y Combinator and Wayfinder Ventures."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Dili",
    "announcedDate": "2026-07-30",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "RegTech",
    "sectorEvidence": "a NYC-based provider of an AI-native compliance platform for the industries powering America's infrastructure buildout",
    "role": "participant",
    "coInvestors": [
      "Khosla Ventures",
      "Allianz",
      "Brick and Mortar Ventures",
      "Rebel Fund"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/07/dili-raises-15m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Dili, a NYC-based provider of an AI-native compliance platform for the industries powering America's infrastructure buildout, raised $15m in Series A funding. The round, which brought total funding to date to $21.7m, was led by Khosla Ventures, with participation from Y Combinator, Allianz, Brick and Mortar Ventures, and Rebel Fund."
  },
  {
    "firmSlug": "y-combinator",
    "company": "HappyRobot",
    "announcedDate": "2026-08-04",
    "datePrecision": "day",
    "round": "Series C",
    "sector": "Enterprise AI Agents",
    "sectorEvidence": "a San Francisco, CA-based provider of an AI agent platform for enterprise operations",
    "role": "participant",
    "coInvestors": [
      "Prysm Capital",
      "Eurazeo",
      "a16z",
      "Base10",
      "Koch Disruptive Technologies (KDT)",
      "Orange",
      "T.Capital",
      "Bankinter",
      "Endeavor Catalyst",
      "Kfund",
      "Wave-X"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/happyrobot-raises-150m-in-series-c-funding.html",
    "sourceType": "reputable-press",
    "evidence": "HappyRobot, a San Francisco, CA-based provider of an AI agent platform for enterprise operations, raised $150M in Series C funding. The round was led by Prysm Capital and Eurazeo with participation from a16z, Base10, Y Combinator, Koch Disruptive Technologies (KDT), Orange, T.Capital, Bankinter, Endeavor Catalyst, Kfund, and Wave-X."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Naïve",
    "announcedDate": "2026-08-06",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "AI Agent Infrastructure",
    "sectorEvidence": "a Palo Alto, CA-based provider of an infrastructure platform for AI agents",
    "role": "participant",
    "coInvestors": [
      "Nexus Venture Partners",
      "Zetta",
      "Liquid 2",
      "Gokul Rajaram",
      "Tim Zheng",
      "JD Sherman",
      "Gert Lanckriet",
      "Robert Chatwani",
      "Zachary Sim"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/naive-raises-28-5m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Naïve, a Palo Alto, CA-based provider of an infrastructure platform for AI agents, raised $28.5M in Series A funding. The round was led by Nexus Venture Partners with participation from Y Combinator, Zetta, Liquid 2, Gokul Rajaram, Tim Zheng, JD Sherman, Gert Lanckriet, Robert Chatwani, and Zachary Sim."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Discovered Materials",
    "announcedDate": "2026-08-10",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Materials Science AI",
    "sectorEvidence": "a San Francisco, CA-based provider of an AI agent platform that discovers and accelerates the adoption of new materials for semiconductor chips",
    "role": "participant",
    "coInvestors": [
      "Lightspeed India Partners",
      "Peak XV Partners",
      "Paul Graham",
      "Gokul Rajaram",
      "Thariq Shihipar"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/discovered-materials-raises-9m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Discovered Materials, a San Francisco, CA-based provider of an AI agent platform that discovers and accelerates the adoption of new materials for semiconductor chips, raised $9M in Seed funding. The round was led by Lightspeed India Partners with participation from Y Combinator and Peak XV Partners, alongside angel investors including Paul Graham, Gokul Rajaram, and Thariq Shihipar."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Axle",
    "announcedDate": "2026-08-11",
    "datePrecision": "day",
    "round": "Series A",
    "sector": "Insurtech",
    "sectorEvidence": "a NYC-based provider of an AI-native clearinghouse platform for insurance",
    "role": "participant",
    "coInvestors": [
      "Base10 Partners",
      "Gradient",
      "Stage 2 Capital"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/axle-raises-17-5m-in-series-a-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Axle, a NYC-based provider of an AI-native clearinghouse platform for insurance, raised $17.5M in Series A funding. The round was led by Base10 Partners with participation from Y Combinator, Gradient, Stage 2 Capital, and industry angels."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Blacksmith",
    "announcedDate": "2026-08-12",
    "datePrecision": "day",
    "round": "Series B",
    "sector": "Developer Infrastructure",
    "sectorEvidence": "a San Francisco, CA-based provider of a cloud platform for validating code",
    "role": "participant",
    "coInvestors": [
      "Peak XV Partners",
      "GV"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/blacksmith-raises-45m-in-series-b-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Blacksmith, a San Francisco, CA-based provider of a cloud platform for validating code, raised $45M in Series B funding, at $550M valuation. The round was led by Peak XV Partners with participation from existing investors Y Combinator and GV."
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
  },
  {
    "firmSlug": "y-combinator",
    "company": "River Markets",
    "announcedDate": "2026-08-13",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Fintech",
    "sectorEvidence": "a New York City-based financial infrastructure provider for prediction markets",
    "role": "participant",
    "coInvestors": [
      "Haun Ventures",
      "Coinbase Ventures",
      "UFO Holdings",
      "Qube Research & Technologies (QRT)",
      "TENET",
      "Humbition",
      "Kima Ventures",
      "Cherry Ventures",
      "Stack Asset Management",
      "Perpetual Strategies"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/river-markets-raises-8-5m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "River Markets, a New York City-based financial infrastructure provider for prediction markets, raised $8.5m in Seed funding. The round was led by Haun Ventures, with participation from Y Combinator, Coinbase Ventures, UFO Holdings, Qube Research & Technologies (QRT), TENET, Humbition, Kima Ventures, Cherry Ventures, Stack Asset Management, and Perpetual Strategies."
  },
  {
    "firmSlug": "y-combinator",
    "company": "Hypercubic",
    "announcedDate": "2026-08-19",
    "datePrecision": "day",
    "round": "Seed",
    "sector": "Enterprise Software",
    "sectorEvidence": "a San Francisco, CA-based AI infrastructure startup developing a software-driven mainframe modernization platform",
    "role": "participant",
    "coInvestors": [
      "CIV",
      "Afore Capital",
      "Multimodal Ventures",
      "Pioneer Fund",
      "Epsilon Ventures",
      "Unpopular Ventures",
      "Kaz Nejatian",
      "Venky Harinarayan",
      "Gokul Rajaram"
    ],
    "sourceUrl": "https://www.finsmes.com/2026/08/hypercubic-raises-5-3m-in-seed-funding.html",
    "sourceType": "reputable-press",
    "evidence": "Hypercubic, a San Francisco, CA-based AI infrastructure startup developing a software-driven mainframe modernization platform, raised $5.3m in Seed funding. The investment round was led by CIV, with participation from Y Combinator, Afore Capital, Multimodal Ventures, Pioneer Fund, Epsilon Ventures, and Unpopular Ventures, as well as angel investors including Kaz Nejatian (CEO of Opendoor), Venky Harinarayan (co-founder of Walmart Labs), and Gokul Rajaram (Board Member at Coinbase & Pinterest)."
  }
];

/* Per-firm research coverage. This is what lets the engine tell
   "this firm announced nothing" apart from "nobody looked", which
   are identical in a bare row list.

   Read completeFrom/completeTo for anything comparative. extendedTo
   is the data horizon and is deliberately NOT the same field, so a
   future change cannot widen a comparison window by accident. */
const DEAL_COVERAGE = {
  "8vc": {
    "checkedOn": "2026-08-20",
    "complete": false,
    "completeFrom": "2026-01-01",
    "completeTo": "2026-06-30",
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "same as the January-June pass: worked 8vc.com first. 8vc.com/resources and its full archive at 8vc.com/resource-category/posts publish one dated, reverse-chronological list of every 8VC post, so the 2026-07-01 to 2026-08-20 slice was walked item by item exactly as the earlier months were: only two posts fall in it, Jul 16 'Announcing Our Investment in Sable' and Aug 13 'Announcing Our Investment in Vals' (the next post below them is Jun 4 'Announcing our Investment in Generalist', already held from the first pass). Each was opened individually and read in full for date, round, amount, co-investors and lead/participate language. 8vc.com/sitemap.xml was pulled and diffed against the feed as before; it added nothing in-window - it still carries the undated 'Worktrace: Introducing the New AI Adoption Layer for Enterprise' post (excluded again, as in H1, because no date anywhere on the site places it in or out of the window) and it does NOT yet contain the Vals post at all, so this pass the sitemap lags the feed rather than extending it. 8vc.com/companies was pulled again and is unchanged in kind: stage labels only, no dates or rounds, so it cannot enumerate participations (Sable now has a portfolio card; Vals appears only via the 'Latest updates' link to the Aug 13 post). Company-side announcements were opened where the 8VC post did not carry the investor list, as in H1: vals.ai/blog returns 404, so no company-side Series A announcement was reachable. TREATMENT OF THE VALS ROW - this follows the H1 Edra precedent exactly: the Aug 13 post announces a Vals Series A led by a16z in which 8VC is NOT named as an investor, and discloses in the same passage that 8VC led Vals' earlier seed. As with Edra (Mar 18), the row is recorded as 8VC's seed, dated to the post that discloses it, with the Series A lead a16z NOT listed as a co-investor because a16z invested in the Series A and not the seed. If the merge treats Edra differently, treat Vals the same way. No independent press sweep was run and no search engine was used, matching H1, where the web-search budget was exhausted before this firm was reached. ASSEMBLY-STAGE CROSS-FILL, APPLIED EXACTLY AS IN THE JANUARY-JUNE PASS so the two halves are built the same way: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and B had no row for that company and date, a row was created for B from the SAME source - same URL, same date, same verbatim quote, machine-re-checked to name both B and the company. 4 of this firm's July-August rows arrived this way: Senra Systems (2026-07-15); Sila (2026-07-21); Vals AI (2026-08-13); Wispr (2026-08-17). Their role is null by design, the same treatment H1 used, because deriving lead-vs-participant programmatically is inference.",
    "extensionMethodChanged": false,
    "extensionNote": "Not complete, for the same two reasons as H1 and one new one. (1) 8VC's dated post archive is enumerable but demonstrably not exhaustive - H1 proved this with Latus Bio (8VC led a $43M Series A extension announced 2026-05-04 that is not mentioned anywhere on 8vc.com), so an unknown number of unposted July/August participations may exist. Nothing about what 8VC publishes has changed, so complete stays false. (2) No independent press sweep was run, matching H1; coverage outside 8vc.com rests only on company sites reachable from links already in hand. (3) NEW THIS PASS: 8vc.com/sitemap.xml, which H1 used as a cross-check to catch posts missing from the feed, does not list the Aug 13 Vals post - the sitemap now lags the feed, so it can no longer be relied on to surface an omitted August post. MONTH-BY-MONTH SURFACE STATE: JULY 2026 - 8vc.com/resources carries exactly one investment post (Sable, Jul 16); the surface exists and is populated but thin. AUGUST 2026 - thin and, at the tail, effectively unpopulated: the feed's most recent item of any kind is Aug 13 (Vals), so the last seven days of the window (Aug 14-20) have no 8VC posts at all, which is the expected publication lag rather than evidence of inactivity. NO ROWS WERE DROPPED ON THE EVIDENCE RULE FOR THIS FIRM IN THIS WINDOW - both in-window posts carry a contiguous passage naming both 8VC and the company, so the four H1 drops (PointOne 2026-03-24 https://8vc.com/resources/fixing-the-missing-layer-in-legal-ai-introducing-pointone ; Kos.ai 2026-04-20 https://8vc.com/resources/introducing-kos-ai-the-worlds-first-ai-accountant ; Latus Bio 2026-05-04 https://www.businesswire.com/news/home/20260504989731/en/Latus-Bio-Announces-%2497-Million-Series-A-Financing-to-Expand-the-Reach-of-Gene-Therapy-to-Larger-Populations ; Generalist AI 2026-06-04 https://generalistai.com/blog) remain the only 8VC evidence-rule casualties in the merged window and are restated here so they stay recoverable. Also still excluded and still recoverable: the undated Worktrace post (8VC co-led a $9M seed per that post; no date on the site, so it can be placed in neither half of the year).",
    "extensionRateRatio": 1.77,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass, on the same surfaces and in the same order. (1) a16z.com/news-content/ - the firm's combined news/articles/podcast feed - was fetched and every item on it enumerated; (2) a16z.com/portfolio/ was re-checked; (3) the /announcement/investing-in-<slug>/ post series was walked by repeated site-scoped search-engine queries and each candidate slug was opened one by one to read its publication date, round, amount, co-investors and lead/participant language; (4) a16zcrypto.com/posts/ (plus its announcements focus-area view) was fetched for the crypto arm's own posts. As in the first pass, those four surfaces were supplemented by per-month press searches over the outlets the first pass used - TechCrunch (including techcrunch.com/tag/a16z/), Fortune, Axios, Bloomberg, The Block, BusinessWire, PR Newswire, GlobeNewswire, FinSMEs and company announcement pages - and every row was verified against an opened page carrying a contiguous verbatim quote naming both a16z and the company. All a16z sub-funds file under firmSlug 'a16z' and the sub-fund's own wording is kept inside the evidence quote where the source used it. Excluded per the brief: a16z's own fund closes, acquisitions, and the Stripe/OpenRouter acquisition report; also excluded were announcements dated outside the window that surfaced during the walk (Mirendil 2026-06-24, Probook 2026-06-23, Endra 2026-06-01, Lassie 2026-06-03, Town 2026-06-03, Ulysses 2026-04-16, GitButler 2026-04-08, Phylo 2026-02-03, QuiverAI 2026-02-25, Pryzm 2025-12-09, Fortuna Health 2025-07-21, Poseidon 2025-07-22). ASSEMBLY-STAGE CROSS-FILL, APPLIED EXACTLY AS IN THE JANUARY-JUNE PASS so the two halves are built the same way: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and B had no row for that company and date, a row was created for B from the SAME source - same URL, same date, same verbatim quote, machine-re-checked to name both B and the company. 2 of this firm's July-August rows arrived this way: Etched (2026-07-23); Hadrian (2026-08-06). Their role is null by design, the same treatment H1 used, because deriving lead-vs-participant programmatically is inference.",
    "extensionMethodChanged": false,
    "extensionNote": "17 rows for 2026-07-01 to 2026-08-20 (July 7, August 10). Every count is a floor; a16z still publishes no dated, enumerable log of every round it joins. Surface-by-surface for this window: (a) a16z.com/news-content/ carried exactly FOUR 'Investing in X' announcements in the window - Runta (2026-07-16), Neo (2026-07-20), Volta (2026-08-04) and Vals (2026-08-13). The feed is still undated on the listing page and still paginates through a JavaScript 'load more' control with no crawlable page/2, feed or API URL, so it cannot be walked backwards; page one was enumerated in full (48 items) and contained no other announcement post. (b) a16z.com/portfolio/ is unchanged and unusable for this purpose - company names and exit status only, no dates and no rounds; it now links to a16z.com/investment-list/, which was opened and is likewise an undated alphabetical directory. (c) The /announcement/investing-in-<slug>/ pattern was walked by search; every additional slug it returned (Mirendil, Probook, Endra, Lassie, Town, Ulysses, GitButler, Phylo, QuiverAI, Tessera Labs, Protege AI, Titan, Fly.io, Fortuna Health, Inferact, Chariot Defense) resolved to a date outside 2026-07-01..2026-08-20. (d) EXPLICIT GAP: a16zcrypto.com/posts/ yielded NOTHING for either July or August 2026. Its post feed shows only articles and research for the period, its /posts/focus-areas/announcements view returns 'No posts found' to a non-JavaScript fetch, and searches for 'Investing in' posts on that host returned only pre-window items (Catena Part II 2026-05-20, Digital Asset, Ornn, Kairos, Arc, Poseidon 2025, Universal 2025, PROOF 2022). So a16z crypto's own surface is empty for BOTH months of this slice; that is a real hole, not a zero. (e) EXPLICIT GAP: the first seven days of July (2026-07-01 to 2026-07-07) produced no a16z round on any surface, and a16z published no announcement post between Netris on 2026-06-25 and Runta on 2026-07-16 - a three-week silence on the firm's own feed. (f) TAIL: the last week of the window (2026-08-14 to 2026-08-20) produced a single row (Rillet, 2026-08-19). Press coverage and FinSMEs write-ups for rounds announced in that week are still landing, so this end of the window is under-captured in the way the brief predicts; no extra source was reached for to compensate. Two further disclosures. (1) DROPPED ON THE EVIDENCE RULE: Prolo (2026-07-14, GBP 4.2M seed, Triple Point Ventures leading) names the 'a16z Scout Fund' as a participant. The Scout Fund is not one of the four sub-funds in the agreed rollup (crypto, speedrun, Bio + Health, American Dynamism) and the January-June pass returned no Scout Fund row, so it was left out for consistency rather than added as a new class of participation - source https://www.finsmes.com/2026/07/prolo-raises-4-2m-in-seed-funding.html if it should be counted. Also noted and not used: FinSMEs maintains dated tag archives (/tag/andreessen-horowitz, /tag/a16z-scout-fund, /tag/andreessen-horowitz-a16z-bio-health) that would function as an enumerable month-by-month feed. Walking them would have searched July and August harder than January was searched, so they were deliberately not used. (2) ROLE SHAPE: the January-June rows left role null on the nine deals that arrived by assembly-stage cross-fill, and nearly every self-researched row there was 'lead'. In this slice the participant rounds were found directly by per-month press search rather than by cross-fill, so their role is set from what the source actually says ('participant') instead of null. Same sources, same evidence standard, but the null-role artefact of the first half does not repeat here - treat a July/August 'participant' and a January-June null as the same thing. Also flagged: Cathedral (2026-07-23) is carried by FinSMEs as 'reportedly raised', but a16z is named outright as co-lead in that same passage and in the Reuters exclusive it follows, so it was included rather than dropped as a rumour.",
    "extensionRateRatio": 1.82,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "same as the January-June pass: enumerated bvp.com/news, the single-page reverse-chronological archive of BVP's own dated investment posts, walking it month by month for July and August 2026; all 7 in-window items (7.9, 7.16, 7.20 x2, 7.28, 7.29, 8.11) are investment write-ups, none were personnel posts, and each was opened to pull the verbatim dek line, round, role and any named co-investors. Then ran the same per-month press searches the H1 pass ran (FinSMEs, PR Newswire, BusinessWire, TechCrunch tag page, fintech.global/tag/bessemer-venture-partners, citybiz, thesaasnews, plus the AlleyWatch monthly largest-round tables continued forward to the July 2026 global and US editions) to catch rounds BVP did not post about, and opened each candidate to verify a contiguous quote naming both firm and company. bvp.com/companies was checked and remains an undated name-and-logo grid. No cross-fill was performed in this slice: the H1 assembly-stage cross-fill happens after all firms are researched, so any July/August rounds where Bessemer is named only inside another firm's source will be added at merge, not here. ASSEMBLY-STAGE CROSS-FILL, APPLIED EXACTLY AS IN THE JANUARY-JUNE PASS so the two halves are built the same way: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and B had no row for that company and date, a row was created for B from the SAME source - same URL, same date, same verbatim quote, machine-re-checked to name both B and the company. 1 of this firm's July-August rows arrived this way: Neo (2026-07-20). Their role is null by design, the same treatment H1 used, because deriving lead-vs-participant programmatically is inference.",
    "extensionMethodChanged": false,
    "extensionNote": "bvp.com/news behaved exactly as it did in H1: dated and enumerable but not exhaustive. It carried 7 of the 14 in-window rows; press search surfaced seven further Bessemer participations with no corresponding BVP post at all (Sila 2026-07-21, Genius AI 2026-07-22, ChipAgents 2026-07-29, Sent 2026-07-30, InRisk Labs 2026-08-05, Malachyte 2026-08-06, Trajectory 2026-08-17). MISSING/PARTIAL SURFACES: the AlleyWatch monthly tables for AUGUST 2026 DO NOT YET EXIST - https://alleywatch.com/2026/09/global-startup-funding-top-largest-august-2026-vc/ returns 404 because that edition is published in early September - so the 2026-08-01 to 2026-08-20 stretch rests on bvp.com/news plus press search only, with no monthly aggregator cross-check. The last ~2 weeks (roughly 2026-08-06 onward) are additionally under-captured because press coverage and BVP's own posting both lag. Act Security (2026-07-28) is recorded with round null: BVP's own post announces a simultaneous seed and Series A totalling $60M and names no single round, and role is null because the BVP dek says only 'backs' (press reporting says Bessemer co-led the seed, but the firm's own site is authoritative and does not say so). Bessemer Venture Partners was distinguished from Bessemer Trust throughout; no Bessemer Trust item entered the set. No in-window round was dropped for lack of usable evidence on the Bessemer side.",
    "extensionRateRatio": 1.96,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass, re-run over 2026-07-01 to 2026-08-20 with no added surfaces. Entity confirmed as Bloomberg Beta, Bloomberg L.P.'s early-stage venture arm; Bloomberg L.P. corporate activity, Bloomberg Media deals and the terminal business remained out of scope and none were recorded. Firm site re-checked and unchanged: bloombergbeta.com is still a one-screen landing page whose only substantive link is the open-sourced Operating Manual on GitHub, with no /news, no /blog and no dated announcements; the GitHub Manual repo carries an undated 'In our portfolio' list and no financing dates, so neither firm surface can place anything in the window. Enumeration therefore ran entirely on press, as before: FinSMEs full-text search for the quoted string \"Bloomberg Beta\" (page 1 walked in full; below its two title-match results it is reverse-chronological and its newest item is 2026-08-18, so page 1 still exhausts the window), TechCrunch's bloomberg-beta tag page walked in full, a Bing News RSS query on \"Bloomberg Beta\", and a cross-check of the sibling July-August files already in this dataset (117 rows across six files) for 'Bloomberg Beta' in another firm's coInvestors list, which independently corroborated Skan AI. Every row carries a contiguous verbatim passage naming both Bloomberg Beta and the company; where FinSMEs splits the company description and the investor list across two adjacent paragraphs, both were taken together as one contiguous passage, which is the same construction used for this firm's H1 rows.",
    "extensionMethodChanged": false,
    "extensionNote": "Not complete, though this is the best-populated of the four in this slice: four rows, one in July (Antares Labs, 2026-07-28) and three in August (Skan AI 2026-08-12, Vals AI 2026-08-18, Smack Technologies 2026-08-18). Thin-surface warnings, by month and by surface: JULY 2026 rests on a single surface - FinSMEs has exactly one July item for this firm and nothing else in July, and techcrunch.com/tag/bloomberg-beta/ contains ZERO 2026 articles of any kind, July and August included, so the TechCrunch tag contributed nothing to either month. AUGUST 2026 likewise rests on FinSMEs alone plus one cross-reference corroboration; and although FinSMEs' newest item for the firm is 2026-08-18, that is two days before the collection date, so 2026-08-19 and 2026-08-20 are effectively unobserved and any round announced in that gap is missing by construction rather than by absence. Both firm surfaces are structurally incapable of covering either month: bloombergbeta.com publishes no news or portfolio-updates page and /portfolio 404s, and the GitHub Operating Manual's portfolio file is undated. The dependence on one outlet is the same gap H1 documented and it has not improved - every row in this slice traces to FinSMEs. Bloomberg Beta writes small early-stage cheques and is routinely listed mid-sentence in participant lists, exactly the position that goes unindexed, so this count is a floor. Three of the four rows here (Antares Labs, Skan AI, Smack Technologies, plus Vals AI) were named as out-of-window exclusions in the H1 note and are now correctly in window; no double-count risk exists because H1 excluded them. Antares Labs carries role: null because the source says only 'Backers included' and names no lead - not inferred from ordering. Nothing was dropped for failing the both-parties-verbatim rule in this slice. Surface-health note for a future re-run: the Bing News RSS endpoint returned a bare Bing HTML shell instead of a feed for this firm's query on this run, so that leg of the H1 method produced nothing and should not be assumed live.",
    "extensionRateRatio": 1.77,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "same as the January-June pass: worked dcvc.com first. The dated, reverse-chronological archive at dcvc.com/news-insights/archive was pulled and walked from the top; its most recent item is 30 Jul 2026 and the in-window items are, in full: 30 Jul 'Relation defines the TechBio sector with AI models transforming drug discovery', 22 Jul 'Welcoming Chief Legal Officer and General Counsel Luis Bacalao to DCVC', 16 Jul 'When the incumbent joins the insurgent: Former Cummins CEO takes the helm at Mainspring', 15 Jul 'Winning the quantum race: America's blueprint for dominating the next tech revolution', 08 Jul 'Is the nuclear renaissance actually happening?', 01 Jul 'DCVC publishes the 2026 Deep Tech Opportunities report', 01 Jul 'DCVC 2026 Q2 update'. dcvc.com/news-insights (the front feed) was pulled separately and shows the same set. archive/p2 was not needed for this slice, since every in-window item sits at the top of page 1. Each in-window item that could plausibly contain a financing was opened and read: Relation (a GSK strategic research collaboration worth up to $110 million in upfront and milestone payments - a partnership, not an equity financing, excluded), Mainspring (CEO appointment, no round), nuclear-renaissance (sector commentary, no round), Bacalao (a DCVC hire), Deep Tech Opportunities report (a publication). THE DECISIVE SURFACE, as in H1: the quarterly update. dcvc.com/news-insights/dcvc-2026-q2-update was re-opened and confirmed published 01 Jul 2026; its FUNDING HIGHLIGHTS section was re-read in full and EVERY financing in it was announced in Q2 or earlier (Atom Computing, Impulse Space, Kanvas Biosciences, Quantum Motion, Recursive Superintelligence, Latus Bio, Sidewinder Therapeutics, Syntax Bio - all already held from the first pass, none announced on or after 2026-07-01), plus the two non-financing items H1 already excluded on the merits (Agility Robotics' SPAC merger, Fervo's Nasdaq IPO) and Rigetti's CHIPS Act award. Per the instruction to follow the same URL pattern forward, https://www.dcvc.com/news-insights/dcvc-2026-q3-update was requested and returns HTTP 404 - it does not exist yet. DCVC Bio continues to roll up to firmSlug 'dcvc' with the 'DCVC Bio' wording kept verbatim inside the evidence quote, exactly as in H1; no DCVC Bio financing falls in this window. Result: ZERO rows. That is a real zero on these surfaces, not a search failure. No independent press sweep was run and no search engine was used, matching H1.",
    "extensionMethodChanged": false,
    "extensionNote": "Not complete, and the July-August slice is structurally blind in a way the January-June slice was not. READ THIS BEFORE COMPARING HALVES. Nearly every DCVC row in H1 came from a quarterly 'FUNDING HIGHLIGHTS' section: the Q1 update (01 Apr 2026) covered Jan-Mar and the Q2 update (01 Jul 2026) covered Apr-Jun. The equivalent document for this window is the Q3 update, which by DCVC's own cadence will not publish until roughly 01 Oct 2026; https://www.dcvc.com/news-insights/dcvc-2026-q3-update returns 404 today. So the single surface that carried the firm's H1 count DOES NOT COVER 2026-07-01 to 2026-08-20 AT ALL. A zero here means 'the ledger for this period has not been published yet', not 'DCVC stopped investing'. MONTH-BY-MONTH SURFACE STATE: JULY 2026 - dcvc.com/news-insights and its archive are populated (six items, listed in method) but not one is a financing announcement; every July post is commentary, a hire, a report launch, a portfolio CEO appointment, or the Q2 update looking backwards. AUGUST 2026 - COMPLETELY UNPOPULATED: neither dcvc.com/news-insights nor dcvc.com/news-insights/archive contains a single item dated in August 2026; the most recent item on either surface is 30 Jul 2026, so the final three weeks of the window have no DCVC surface whatsoever. Both facts are the publication lag the brief warns about and neither was compensated for by reaching to other sources. Two further limits carried over from H1: the quarterly updates are 'highlights' and therefore a selection rather than a full ledger, so quiet participations may never appear even once the Q3 update lands; and dcvc.com/companies is alphabetical with no dates or rounds, so it cannot cross-check. One known DCVC participation remains undated and therefore unrecorded in either half: Recursive Superintelligence's $650M stealth emergence, which the Q2 update says DCVC joined but for which no announcement date is establishable from any reachable source. NO ROWS WERE DROPPED ON THE EVIDENCE RULE for this firm in this window - there were no candidate financings to drop.",
    "extensionRateRatio": 0.0,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "same as the January-June pass: worked delltechnologiescapital.com first. delltechnologiescapital.com/resources is a dated, reverse-chronological 'News & Resources' feed and the whole window again sits at the top of page 1, which was walked item by item: 14 Aug 'Q&A with Skan AI's Avinash Misra and Manish Garg' (a companion interview to the funding post, not a separate financing), 13 Aug 'Context is Key: Skan.ai Delivers AI to Enterprise Customers', 10 Aug 'Winning Your First Enterprise Deal' (GTM essay), 6 Aug 'Meet DTC's Head of Portfolio Development, Chris Falloon' (team post), 24 Jul 'Fly.io: Building Computers for Agents', 8 Jul 'Prime Intellect: Building the Open Super Intelligence Stack'; the next item below is 16 Jun, already held from the first pass. Each of the three items tagged 'Funding' was opened and read in full. As the second surface, delltechnologiescapital.com/companies was pulled in full across all four pages exactly as in H1 and every entry labelled 2026 was checked against the blog: Bland.ai 'Series C 2026', Limitless Labs 'Seed in 2026', Prime Intellect 'Series A in 2026', Sycamore 'Seed in 2026' - the same four as H1, with NO new 2026 entries added for this window, which is itself informative: Fly.io still reads 'Seed in 2020' and Skan AI still reads 'Series B in 2022', confirming the portfolio page records only the round at which DTC first invested and therefore leaves no trace of a follow-on. Where the DTC post did not carry a compliant investor sentence, the other party's own announcement for the same round was opened, exactly as H1 did with bland.ai/blog/series-c: skan.ai (homepage banner -> /skan-ai-raises-series-c -> the full release at /in-the-news/skan-ai-raises-series-c-announcement), primeintellect.ai/blog/series-a, and fly.io plus fly.io/blog. No search engine was used and no new enumeration surface was added; every URL was reached from a link already in hand. ASSEMBLY-STAGE CROSS-FILL, APPLIED EXACTLY AS IN THE JANUARY-JUNE PASS so the two halves are built the same way: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and B had no row for that company and date, a row was created for B from the SAME source - same URL, same date, same verbatim quote, machine-re-checked to name both B and the company. 2 of this firm's July-August rows arrived this way: Fly.io (2026-08-03); Prime Intellect (2026-07-08). Their role is null by design, the same treatment H1 used, because deriving lead-vs-participant programmatically is inference.",
    "extensionMethodChanged": false,
    "extensionNote": "Not complete, and the single recorded row again understates the firm badly. DTC announced THREE financings in this window and only one of them survives the evidence rule. TWO VERIFIED DELL TECHNOLOGIES CAPITAL ROUNDS WERE DROPPED, both real, both sourced, neither wrong - naming them so they are recoverable: (1) PRIME INTELLECT, $130 million Series A, announced 2026-07-08, DTC post https://www.delltechnologiescapital.com/resources/prime-intellect-building-the-open-super-intelligence-stack - a first-person post where DTC is the publisher, so the investment sentence reads 'Here's why we invested alongside friends at Radical Ventures, NVIDIA Ventures, Intel Capital, and Iconiq' and never names the firm; the company's own announcement https://www.primeintellect.ai/blog/series-a was opened for the same round and fails the mirror-image way, naming the firm but not itself: 'Today, we're announcing that we've raised $130M, led by Radical Ventures, with participation from NVIDIA Ventures, Intel Capital, Dell Technologies Capital, and our existing investors.' No contiguous passage on either page contains both 'Prime Intellect' and 'Dell Technologies Capital'. This is the identical failure mode that cost Bland.ai its row in H1. (2) FLY.IO, $25 million Series D co-led with Intel Capital, announced 2026-07-24, DTC post https://www.delltechnologiescapital.com/resources/doubling-down-on-fly-io - again first person: 'Today, we're excited to deepen that partnership by co-leading Fly.io's $25 million Series D alongside Intel Capital.' The only body-text passage naming the firm at all uses the abbreviated form ('At Dell Tech Capital, we look for companies that anticipate where computing is headed rather than reacting to where it has been. Fly.io did that with distributed application infrastructure'), which does not state the participation; the exact string 'Dell Technologies Capital' appears on that page ONLY in the HTML meta/OG/Twitter description ('Dell Technologies Capital co-leads Fly.io's $25M Series D as the company expands from developer infrastructure to computers for AI agents'), which is not visible body text and was not treated as evidence in H1, so it was not treated as evidence here. fly.io and fly.io/blog carry no announcement of the round, so no other-party source exists; an Intel Capital release may well carry a compliant sentence but Intel Capital is not one of this firm's recorded surfaces and no search was run to find one. Both rows are recoverable from a second source. These two join the three H1 drops (Sycamore 2026-03-30 https://www.delltechnologiescapital.com/resources - first-person post; OpenObserve Series A 2026-04-29 - same pattern; Bland.ai Series C 2026-06-16 https://www.bland.ai/blog/series-c - investor list without the company name in the same sentence), making FIVE dropped Dell rows across the merged window against three recorded. Read the Dell count as a floor and nothing more. MONTH-BY-MONTH SURFACE STATE: JULY 2026 - the resources feed is populated with two funding posts (Prime Intellect 8 Jul, Fly.io 24 Jul), so the surface is healthy but BOTH July rows died on the evidence rule and July therefore records zero; that is an evidence artefact, not a quiet month. AUGUST 2026 - populated through 14 Aug (four posts, one of them the Skan AI funding post) but nothing after 14 Aug, so the last six days of the window (Aug 15-20) have no DTC surface, the ordinary publication lag. Structural limits unchanged from H1: the blog is not a financing ledger and DTC does not post every cheque, and the portfolio page carries only first-investment round and year, so any follow-on into an existing portfolio company announced in this window leaves no trace on either surface - demonstrated here by Fly.io and Skan AI, both of which took a round in-window while their portfolio labels still read 2020 and 2022.",
    "extensionRateRatio": 7.1,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass, re-run over 2026-07-01 to 2026-08-20 with no added surfaces. Treated the firm as Elad Gil investing personally and through his own vehicles (Gil&Co / 'Elad Gil & Co'), which is how announcements name him. Re-checked eladgil.com: still a single static undated bio/portfolio page with no /news, /portfolio or /announcements sub-page and no dated investment list; its only outbound content link remains the Substack. Walked blog.eladgil.com/archive in full: the two 2026 posts are 'Unicorn Market Cap 2026' (Apr 16) and 'Random thoughts while gazing at the misty AI Frontier' (Apr 20), both market commentary, nothing in July or August and no financing announcements at all. Enumeration therefore ran on press exactly as before: FinSMEs full-text search for the quoted string \"Elad Gil\" (page 1 walked in full; it is reverse-chronological below the title matches and its newest item is 2026-08-10, so page 1 still exhausts the window), TechCrunch's elad-gil tag page walked in full (newest item is the Apr 19 opinion piece; no July or August items), a Bing News RSS query on \"Elad Gil\", and a cross-check of the sibling July-August files already in this dataset (117 rows across six files) for 'Elad Gil' or 'Gil&Co' in another firm's coInvestors list, which returned nothing. The one surviving candidate was opened and kept only because the page yields a contiguous verbatim passage naming both Elad Gil and the company.",
    "extensionMethodChanged": false,
    "extensionNote": "Not complete, and this slice is thin. JULY 2026 IS EMPTY ON EVERY SURFACE: FinSMEs' \"Elad Gil\" search has no July item at all (it jumps from 2026-05-28 straight to 2026-08-10), the TechCrunch elad-gil tag has nothing after 2026-04-19, blog.eladgil.com has no post after 2026-04-20, and eladgil.com carries no dates. That is a genuine absence on these surfaces, not a filtered-out result. August yielded exactly one row, Cambridge Aerospace (2026-08-10, named as 'Elad Gil & Co'), and the last ten days of August are almost certainly under-captured: FinSMEs shows nothing indexed for him after 2026-08-10, which is the normal press lag near a collection date rather than evidence he stopped investing. The H1 single-source risk is unchanged and is now acute, because with the blog and the TechCrunch tag both silent across July-August, 100% of this slice rests on one outlet's search index. He is a prolific angel usually named in the tail of an investor list, so the true July-August count is very likely higher than one. Nothing was dropped for failing the both-parties-verbatim rule in this slice. Note on surface health: the Bing News RSS query still returned items but none newer than 2026-04-22, and the same RSS endpoint returned a bare Bing HTML shell rather than a feed for two of the four firms this run, so it should be treated as an unreliable surface going forward.",
    "extensionRateRatio": 0.27,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass. Entity confirmed as Index Ventures the venture firm (indexventures.com, London/San Francisco); every 'Index' mention was checked in context before use, so index funds/providers and similarly named products are out of scope. Walked page 1 of /perspectives/news/ - still the only retrievable page, still 13 items, still reaching back to 2026-05-31 (Inherent) - and opened every post to read its explicit 'Published' date, which is how the in-window set (Marker 07-09, Chai Discovery 07-14, Enigma 07-27, Simile 07-30, Intelligence 08-03) was fixed and how out-of-window neighbours (Arca 06-25, Conduct 06-17) were excluded. /perspectives itself and sitemap-perspectives.xml were re-checked and are unchanged as surfaces: the listing carries no dates and the sitemap's lastmod values remain bulk site-migration timestamps, so it still cannot be date-filtered. Press was then worked on the same surfaces as H1: TechCrunch's index-ventures tag page (walked in full), the AlleyWatch monthly largest-round table for July 2026, Crunchbase News monthly investor-activity pieces, and July/August keyword searches which surface FinSMEs items. Every candidate was opened and kept only if a single contiguous verbatim passage (adjacent paragraphs of one announcement counted, as in H1) named BOTH Index Ventures and the company. NOT DONE, and different from H1 in one respect outside this slice: the assembly-stage cross-fill of other firms' coInvestors lists cannot be run here, since only two firms were researched in this slice; 7 of this firm's 15 H1 rows arrived that way. ASSEMBLY-STAGE CROSS-FILL, APPLIED EXACTLY AS IN THE JANUARY-JUNE PASS so the two halves are built the same way: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and B had no row for that company and date, a row was created for B from the SAME source - same URL, same date, same verbatim quote, machine-re-checked to name both B and the company. 1 of this firm's July-August rows arrived this way: Glow (2026-07-22). Their role is null by design, the same treatment H1 used, because deriving lead-vs-participant programmatically is inference.",
    "extensionMethodChanged": false,
    "extensionNote": "Not complete; every count is a floor. (1) The firm's news index remains the best surface either firm offers but only its first page is retrievable, so it enumerates roughly the trailing three months and nothing older; for this slice that happens to cover the whole window, which is why July is comparatively well covered here. It only lists rounds Index chooses to post about: the five posts it yielded are a subset of Index's July activity. Crunchbase News (2026-08-07) reports Index Ventures among the most active investors of July 2026 with nine rounds led or co-led, against five in-window July rows recovered here, so the July figure is a floor by at least that margin. (2) AUGUST SURFACE GAP: AlleyWatch has published no monthly largest-rounds table for August 2026 (only daily and weekly reports, which the H1 method did not use and which were not substituted), and the firm posted only one investment item in August (Intelligence, 08-03) plus a non-deal anniversary post. August therefore rests on the firm's news page, the TechCrunch tag page and keyword search alone, and the final two weeks before 2026-08-20 are further under-captured by normal press lag. (3) DROPPED ON THE EVIDENCE RULE: none in this window. Two posts would have been dropped on it - Enigma (the Index post is written in the first person, 'we're excited to lead their $71 million seed round') and Simile (same, 'we're thrilled to double down on our investment in Simile') - but both were recovered from press that names both parties in one passage (TechCrunch 2026-07-27; FinSMEs 2026-07-30), so no in-window Index row is being withheld. For the record, the H1 losses that remain unrecovered and should be re-sourced are Flapping Airplanes (2026-01-28), Alan (2026-03-11), Scope (2026-05-19), Inherent (2026-05-31), fomo (2026-06-22) and Build (2026-06-29). (4) Excluded on purpose: Index's own fund close (raised $2B/$3.5B across three funds, TechCrunch 2026-07-31) is a fund raise, not a financing the firm participated in; '30 Years In. Perfecting Our Craft.' is a firm anniversary post, not a deal. (5) Declined on purpose, to keep effort identical to H1: FinSMEs maintains a /tag/index-ventures/ archive (57 pages) that would enumerate press coverage of this firm far more completely than H1's keyword searches did. It was not used, for the same reason as with Lightspeed - it would inflate July-August relative to January-June through effort alone.",
    "extensionRateRatio": 2.22,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass, re-run over 2026-07-01 to 2026-08-20 with no added surfaces. Entity confirmed as Initialized Capital (initialized.com). Walked the firm's enumeration surface first: initialized.com/ideas and its mirror blog.initialized.com/2026/ were both read in full. Both stop at 'The AI World Requires New Materials' (2026-06-30, the Arcturus post); there is no July or August 2026 post of any kind, investment announcement or otherwise. Re-checked initialized.com/companies: still an undated portfolio index of ~200 names with no round or date information, so it cannot place anything in the window. Then ran the same press layer: FinSMEs full-text search on \"Initialized\" (page 1 walked in full; below its three title-match results it is reverse-chronological and its newest 2026 item is Arcturus on 2026-06-30, so page 1 covers the window) and TechCrunch's initialized-capital tag page walked in full (newest item is the Arcturus piece, 2026-06-30). No candidate financing announced between 2026-07-01 and 2026-08-20 surfaced on any of the four surfaces, so this slice returns zero rows.",
    "extensionMethodChanged": false,
    "extensionNote": "Not complete, and this slice is EMPTY: zero rows for 2026-07-01 to 2026-08-20. BOTH JULY AND AUGUST 2026 ARE UNPOPULATED ON EVERY SURFACE. Named explicitly: (1) blog.initialized.com/2026/ and initialized.com/ideas - no July post, no August post; the 2026 archive ends at 2026-06-30. (2) FinSMEs \"Initialized\" search - no July item, no August item; its newest 2026 result is 2026-06-30. (3) techcrunch.com/tag/initialized-capital/ - no July item, no August item; newest is 2026-06-30. (4) initialized.com/companies - undated, so structurally incapable of covering any month. A zero here should be read as 'no in-window Initialized participation was indexed by these four surfaces', NOT as 'Initialized made no investments'. The H1 finding still holds and bears directly on this: neither the blog nor the press subsumes the other (Seamflow, Crewline AI and Picogrid had press but no blog post; Enhanced Radar had a blog post but no press), so a July or August seed cheque with neither a blog post nor a FinSMEs writeup is invisible to this method by construction. The firm's blog is editorial and posts roughly monthly at best, so a two-month gap in it is within its normal cadence and is not evidence of inactivity. Also note the July-August tail effect: this firm writes small seed and pre-seed cheques, exactly the size that is slowest to be indexed, so any August activity would be the least likely of all four firms to have appeared by 2026-08-20. Nothing was dropped for failing the both-parties-verbatim rule, because no candidate reached that test. For a future whole-window re-run, initialized.com/companies could be diffed against a prior snapshot to detect silent portfolio additions; that was not done here because it is not part of the recorded method.",
    "extensionRateRatio": 0.0,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass: the intelcapital.com month archives are the enumeration surface (the /news/ listing is a JavaScript 'Load More' that stops at ~12 items, there is no sitemap and the WordPress REST API is locked), so /2026/07/ and /2026/08/ were walked in full and every post in them was opened individually. Kept only where the post body yielded a contiguous verbatim passage naming BOTH Intel Capital and the company. /news/ was also re-fetched as a check on the two month archives and listed exactly the same July and August items. Spin-out status re-checked and unchanged: nothing on the July or August surface describes Intel Capital as independent, spun out or renamed, so all rows stay under firmSlug intel-capital, consistent with the H1 pass (Intel announced the spin-out 2025-01-14 and reversed it 2025-04-24). No Intel Corporation product, foundry or M&A items were recorded. Two real, in-window rounds were DROPPED on the evidence rule: Eliyan's $145M Series C (posted 2026-07-29) - the string 'Intel Capital' does not appear anywhere in the release body, which credits Seligman Ventures as lead with Cisco Investments, Lumentum and unnamed 'existing investors'; and Xsight Labs' $300M+ round (posted 2026-07-30) - 'Intel Capital' appears only inside the investor list sentence ('The round was led by Fidelity Management & Research Company with participation from ... Intel Capital ...') and the string 'Xsight' does not occur in that paragraph, so no contiguous passage names both parties. Two July posts were opened and correctly yielded no row: 'The AI Sky Above the Clouds' (2026-07-15), a thematic Neocloud essay announcing no financing, and the second Prime Intellect post, which duplicates the 2026-07-08 round already recorded.",
    "extensionMethodChanged": false,
    "extensionNote": "Coverage still rests almost entirely on the firm's own curated newsroom month archives, which demonstrably carry portfolio news the firm was not part of (Oxide, H1) and may equally omit participations that generated no company press push. SURFACE STATE BY MONTH: /2026/07/ was fully populated (7 posts, 2026-07-01 to 2026-07-30) and is the healthiest month archive of the year; /2026/08/ exists and is populated but is THIN and, being the current month, is partial by construction - it carries only 3 posts (2026-08-03 Zenity, and two 2026-08-19 Higgsfield posts) with nothing at all between 2026-08-04 and 2026-08-18 and nothing after 2026-08-19, so August rounds Intel Capital joined in the last fortnight before the 2026-08-20 cut are expected to be under-captured. The independent cross-check remains unavailable in the same way as in H1: TechCrunch's intel-capital tag page carries no 2026 items, and the portfolio page has no dates or round data. Two in-window July rounds Intel Capital really did join (Eliyan 2026-07-29, Xsight Labs 2026-07-30) are named in `method` as evidence-rule drops and are recoverable from those URLs if the rule is relaxed.",
    "extensionRateRatio": 2.37,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass. khoslaventures.com was re-checked on the same two surfaces and behaved identically: /portfolio is still an undated, category-grouped list of company names with no dates and no round information, and /posts/rss.xml still carries only podcasts, op-eds and founder-advice items - it contained exactly one item in the July-August window (JAMA op-ed, 2026-08-17) and zero financing announcements, so no firm-post-triggered cross-check to a primary press release was available in this window (in H1 that cross-check fired only for Rogo). Because the firm again publishes no enumerable investment list, coverage was rebuilt from press exactly as in H1: the FinSMEs Khosla Ventures tag archive was walked forward from the top, pages 1-2, which reach back to 2026-06-25 and therefore fully cover 2026-07-01 onward; every item dated in the window was opened and the article's own opening company-description sentence and investor sentence were copied verbatim. No new enumeration surface was added. The assembly-stage cross-fill from other firms' rows that produced 2 of this firm's H1 rows is not repeated here - that step belongs to merge, not to this slice. ASSEMBLY-STAGE CROSS-FILL, APPLIED EXACTLY AS IN THE JANUARY-JUNE PASS so the two halves are built the same way: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and B had no row for that company and date, a row was created for B from the SAME source - same URL, same date, same verbatim quote, machine-re-checked to name both B and the company. 1 of this firm's July-August rows arrived this way: Mariana Minerals (2026-08-04). Their role is null by design, the same treatment H1 used, because deriving lead-vs-participant programmatically is inference.",
    "extensionMethodChanged": false,
    "extensionNote": "Khosla Ventures still publishes no dated list of its investments, so completeness cannot be established from the firm's own site and every count is a floor. The single enumeration surface (FinSMEs' investor tag) remains demonstrably lossy - the H1 finding stands, since Uptool (2026-02-09) names Kleiner Perkins in its body yet is absent from the Kleiner Perkins tag and Stord (2026-05-26) names Lux yet is absent from the Lux tag - so the same under-tagging must be assumed for Khosla in July and August. AUGUST TAIL: the FinSMEs Khosla tag is thin and almost certainly incomplete for August 2026 - it holds 4 in-window August items against 11 for July, its most recent entry is 2026-08-18, and the last two days of the window (2026-08-19 and 2026-08-20) are unpopulated on that surface. khoslaventures.com contributed nothing in either month: no financing post in July 2026 and none in August 2026 on the RSS feed, which is the firm's only dated surface. Khosla is a high-volume seed investor and many seed cheques are never announced, so the true July-August count is very likely higher than the 15 rows returned. Judgement carried forward on entity boundaries: no row here rests on 'Vinod Khosla' personally - announcements naming only the individual and not the firm were not counted, and none were found in this window that would have qualified. One row is weaker than it looks: WindBorne Systems (2026-08-05) reads 'The round was by Khosla Ventures and Galvanize with participation from...' - the word 'led' is absent from the sentence as published (verified twice against the page), so role was left null rather than inferred, even though the sentence structure puts Khosla in the lead slot. No in-window item was dropped for failing the verbatim both-parties evidence rule.",
    "extensionRateRatio": 1.98,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass, with the recorded WordPress REST API query re-run on the new bounds: kleinerperkins.com/wp-json/wp/v2/posts?after=2026-07-01T00:00:00&before=2026-08-21T00:00:00&per_page=100, which returned all 5 posts published in the window with exact publication dates (Etched 2026-08-18; K2 Space 2026-07-30 and a 2026-07-27 duplicate; CuspAI 2026-07-20 and a second 2026-07-20 duplicate). Each was opened and classified as financing / not-financing. post-sitemap.xml was re-checked and is stale - its most recent lastmod is 2026-03-20, so it carries nothing for July or August and was not relied on, exactly as in H1. That set was then unioned with the FinSMEs Kleiner Perkins tag archive, walked forward from the top; page 1 reaches back to 2026-06-26 and therefore fully covers 2026-07-01 onward. As in H1, KP's own posts say 'we' rather than 'Kleiner Perkins' (K2: 'We're proud to lead K2's Series D'), so no evidence quote was taken from them; every quote comes from the round's own reputable-press coverage. No new enumeration surface was added.",
    "extensionMethodChanged": false,
    "extensionNote": "KP's Perspectives feed remains dated and fully enumerable via the WP REST API and remains a poor record of participation: of the 5 posts in the window, only K2 Space is an investment announcement (CuspAI's post is a July write-up of a round announced 2026-06-22 and already held in the H1 slice; the Etched post is a progress/perspectives piece that announces no financing at all, even though KP is named in Etched's 2026-08-19 $700M round), while Chai Discovery and TerraFirma were never posted there. Completeness therefore still depends on press enumeration, which cannot be shown exhaustive - FinSMEs' own tagging is provably lossy (Uptool names Kleiner Perkins in its text yet is missing from the Kleiner Perkins tag). AUGUST TAIL: the KP FinSMEs tag has exactly ONE in-window August 2026 item (Etched, 2026-08-19) against three for July, and KP's own Perspectives feed has one August post (2026-08-18) which is not a financing - August is the thin month on both surfaces. post-sitemap.xml was flatly unpopulated for both July and August 2026 (nothing after 2026-03-20) and contributed nothing. Excluded as out of window: CuspAI, whose Series B KP co-led but which was announced 2026-06-22 and belongs to the H1 slice - the KP post about it is dated 2026-07-20 but the announcement date is what governs. One judgement call: Chai Discovery (2026-07-14) reads 'was led by Index Ventures alongside Kleiner Perkins, Sequoia Capital and Dimension' - 'alongside' is neither an explicit 'co-led by' nor a 'participation from', so role was left null rather than inferred either way. No in-window item was dropped for failing the verbatim both-parties evidence rule.",
    "extensionRateRatio": 0.49,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass. Entity confirmed as Lightspeed Venture Partners (lsvp.com); Lightspeed Commerce (TSX/NYSE: LSPD), Lightspeed Systems and Lightspeed Financial excluded throughout, and Lightspeed India Partners / Lightspeed Israel rounds treated as `lightspeed` participation with the sub-fund's own wording kept in the evidence quote. Worked lsvp.com first: sitemap.xml still resolves to nine child sitemaps, and the two that matter still do not reach the window (post-sitemap.xml: 640 URLs, newest lastmod 2023-06-12; feeds-sitemap.xml: 376 URLs, newest lastmod 2025-08-19), exactly as in H1, so the firm's machine-readable surface again enumerated nothing in July-August 2026. /stories was walked in full; its 'recent stories' list does carry day-level dates and showed exactly two in-window items (Nirva, July 09; a healthcare commentary piece, August 12). Enumeration therefore fell back to press on the same surfaces as H1: TechCrunch's lightspeed-venture-partners tag page (walked in full), Crunchbase News monthly investor-activity pieces, the AlleyWatch monthly largest-round tables, and month-by-month keyword searches ('led by Lightspeed', 'participation from', 'seed round', 'Series A/B') for July and August 2026, which surface FinSMEs, BusinessWire and PRNewswire items. Every candidate was opened and kept only if the announcement yielded a single contiguous verbatim passage (adjacent paragraphs of one announcement counted, as in H1) naming BOTH Lightspeed and the company. NOT DONE, and different from H1 in one respect that is outside this slice: the assembly-stage cross-fill (scanning every other firm's coInvestors lists for this firm) cannot be run here because only two firms were researched in this slice; 13 of this firm's 20 H1 rows arrived that way, so the July-August count is depressed relative to H1 by the absence of that step until the merge re-runs it. ASSEMBLY-STAGE CROSS-FILL, APPLIED EXACTLY AS IN THE JANUARY-JUNE PASS so the two halves are built the same way: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and B had no row for that company and date, a row was created for B from the SAME source - same URL, same date, same verbatim quote, machine-re-checked to name both B and the company. 2 of this firm's July-August rows arrived this way: Base Power (2026-08-04); Emergent (2026-07-20). Their role is null by design, the same treatment H1 used, because deriving lead-vs-participant programmatically is inference.",
    "extensionMethodChanged": false,
    "extensionNote": "Not complete; every count is a floor. (1) No exhaustive enumeration surface exists. lsvp.com still publishes no dated post per investment and its sitemaps stop in 2023 (posts) and 2025 (feeds), so July-August rests entirely on press search, which cannot be shown to be exhaustive. The single AlleyWatch global table for July 2026 alone named Lightspeed in four rounds (K2 Space, Proxima Fusion, Fireworks, Neko Health) that keyword search had not surfaced, and that table only covers the very largest deals. (2) AUGUST SURFACE GAP: AlleyWatch has published no monthly largest-rounds table for August 2026 - only daily and weekly reports, which the H1 method did not use and which were deliberately not substituted here. So the August rows come only from lsvp.com/stories, the TechCrunch tag page and keyword search, and August is materially thinner than July for that reason; the last two weeks before 2026-08-20 are additionally under-captured because press coverage lags. (3) DROPPED ON THE EVIDENCE RULE (real, verified in-window participations that no source states in one contiguous passage naming both parties): Nirva $8M seed (2026-07-09) - lsvp.com's own post says 'we are thrilled to announce our partnership with Nirva' and the only occurrences of the literal word 'Lightspeed' on that page are site chrome and the legal footer, and the Fitt Insider write-up of 2026-07-14 does not name Lightspeed at all. That is the only row lost this way in this window; H1 lost nine (Emversity, Emergent, Resolve AI, Gushwork, Science Corp., Granola, Snabbit, Helion, Sandstone). (4) Excluded on purpose: 'When AI Stops Taking Notes and Starts Seeing Patients' (lsvp.com, 2026-08-12) is portfolio commentary naming Abridge, Doctronic and Neko, not a financing announcement; Glacis Labs' $6.8M seed of 2026-07-16 was led by Lightspeed Faction, a separate crypto-focused manager, and was excluded on the entity boundary rather than kept as `lightspeed`; Judgment Labs' $32M led by Lightspeed is dated 2026-05-12, before the window. (5) Declined on purpose, to keep effort identical to H1: FinSMEs maintains a /tag/lightspeed-venture-partners/ archive (55 pages) that would enumerate this firm's press coverage far more completely than H1's keyword-search approach did. It was NOT used, because using it only for July-August would make the second half of the year look busier purely through better searching. It is the obvious surface for a future pass that re-runs the whole window.",
    "extensionRateRatio": 1.92,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass. luxcapital.com/news was re-read from the top: it is still dated and enumerable and still a curated blog, and it has published NOTHING at all since 2026-05-21 - there are zero posts dated July 2026 or August 2026, and therefore zero investment announcements from the firm's own site in this window (H1 found exactly one in six months). The recorded quarterly-report URL pattern was continued rather than replaced: luxcapital.com/news/lux-q2-2026-report was requested directly and returns 404 - Lux has not published a Q2 2026 report, so that surface is the same one as H1's, simply not extended by the firm. luxcapital.com/companies still gives only a year-granularity 'Lux investment: YYYY' milestone per company, which cannot resolve a seven-week window and was again used only for entity confirmation, not enumeration. Coverage was therefore rebuilt from the FinSMEs Lux Capital tag archive exactly as in H1, walked forward from the top; page 1 reaches back to 2026-06-19 and therefore fully covers 2026-07-01 onward, and every in-window item was opened and its company-description and investor sentences copied verbatim. No new enumeration surface was added. ASSEMBLY-STAGE CROSS-FILL, APPLIED EXACTLY AS IN THE JANUARY-JUNE PASS so the two halves are built the same way: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and B had no row for that company and date, a row was created for B from the SAME source - same URL, same date, same verbatim quote, machine-re-checked to name both B and the company. 1 of this firm's July-August rows arrived this way: Cambridge Aerospace (2026-08-10). Their role is null by design, the same treatment H1 used, because deriving lead-vs-participant programmatically is inference.",
    "extensionMethodChanged": false,
    "extensionNote": "Lux Capital's own site announced nothing in this window - luxcapital.com/news has no post of any kind dated July 2026 or August 2026, its most recent entry being the Q1 2026 report of 2026-05-21, and the expected next instalment at luxcapital.com/news/lux-q2-2026-report does not exist (404). Completeness therefore rests entirely on press enumeration that cannot be shown exhaustive, and FinSMEs' Lux tag is provably lossy - the H1 proof still stands, since Stord's 2026-05-26 Series F names 'Lux' in its investor list yet does not appear under that tag. AUGUST TAIL: August 2026 is the thin month on every Lux surface. The FinSMEs Lux tag holds only 2 in-window August items (2026-08-05 and 2026-08-06) against 5 for July, and nothing at all between 2026-08-07 and 2026-08-20 - a two-week unpopulated stretch immediately before the collection date; the firm's own news page is empty for July AND August; and there is no Q2 2026 report to backfill either month. Entity confirmation: every row returned here quotes the source naming 'Lux Capital' in full, so unlike H1 no row in this slice rests on a bare 'Lux' mention and none required checking against luxcapital.com/companies to rule out Lux Research or Lux Industries. WindBorne Systems (2026-08-05) is shared with Khosla Ventures and is taken from the same article and the same verbatim sentence for both firms; Lux is named there in the explicit 'with participation from' clause, so its role is participant. No in-window item was dropped for failing the verbatim both-parties evidence rule.",
    "extensionRateRatio": 1.54,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "same as the January-June pass: re-checked all four nea.com surfaces - /news/press-releases (still client-side rendered behind a 'Show More' control, so the listing itself is unreadable), /insights, /portfolio, and a full enumeration of nea.com/sitemap.xml to recover every press-release URL the site publishes. Then ran the same per-month press searches the H1 pass ran (FinSMEs, PR Newswire, BusinessWire, GlobeNewswire, TechCrunch tag page, citybiz, distillintelligence.com/news/new-enterprise-associates, MedCity News, plus the AlleyWatch monthly largest-round tables continued forward to the July 2026 global and US editions) and opened each candidate to verify a contiguous quote naming both firm and company. No cross-fill was performed in this slice: the H1 assembly-stage cross-fill happens after all firms are researched, so any July/August rounds where NEA is named only inside another firm's source will be added at merge, not here. ASSEMBLY-STAGE CROSS-FILL, APPLIED EXACTLY AS IN THE JANUARY-JUNE PASS so the two halves are built the same way: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and B had no row for that company and date, a row was created for B from the SAME source - same URL, same date, same verbatim quote, machine-re-checked to name both B and the company. 3 of this firm's July-August rows arrived this way: Databricks (2026-08-13); Singularity (2026-07-14); TwelveLabs (2026-07-01). Their role is null by design, the same treatment H1 used, because deriving lead-vs-participant programmatically is inference.",
    "extensionMethodChanged": false,
    "extensionNote": "NEA's own site still publishes nothing per-investment. nea.com/sitemap.xml is unchanged from H1 - every press-release URL on it is a personnel appointment/promotion or a fund close, not one is a portfolio financing; /insights carries no dated investment announcements in the window; /portfolio still carries the disclaimer 'Portfolio companies displayed are for illustrative purposes only and provide an example of certain investments made by NEA as of September 2023', so participation cannot be enumerated from it. All 8 rows therefore come from press search, which cannot be shown to be exhaustive for a firm of NEA's deal volume, and NEA is very often named only as one participant deep inside another investor's release. MISSING/PARTIAL SURFACES: the AlleyWatch monthly tables for AUGUST 2026 DO NOT YET EXIST - https://alleywatch.com/2026/09/global-startup-funding-top-largest-august-2026-vc/ returns 404 because that edition is published in early September - so 2026-08-01 to 2026-08-20 has no monthly aggregator cross-check at all and rests on press search alone; distillintelligence.com/news/new-enterprise-associates also shows nothing after 2026-07-29. DROPPED FOR LACK OF USABLE EVIDENCE: Databricks' $5B strategic round at a $190B valuation (announced 2026-08-13) names NEA in its existing-investor list, but no contiguous passage in either the Databricks newsroom release or FinSMEs' write-up names both NEA and Databricks, so the row is not usable. NOT COUNTED AS NEW: CuspAI's Series B, which H1 flagged as '2026-07 outside the window' - the H1 set already carries an NEA/CuspAI Series B row dated 2026-06-22 from the same financing, and the July items (Distill, 2026-07-22) are re-reports of that same round, not a separately announced extension. Inkitt's Ironblood launch (2026-07-16), which NEA promoted, is a product launch and not a financing.",
    "extensionRateRatio": 4.52,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass, re-run over 2026-07-01 to 2026-08-20 with no added surfaces. Disambiguation was again the whole job: the target is Neo (neo.com), Ali Partovi's San Francisco venture firm and community. Explicitly excluded, as in H1, the NEO cryptocurrency token, Neo Financial (Canadian fintech), the Peak XV-backed Indian wealth-management startup Neo, and 1X's NEO humanoid robot. Firm site re-checked and unchanged: neo.com is a client-rendered app with /companies and /vc but no /news, no /blog and no dated posts, and neo.com/sitemap.xml still resolves to the homepage rather than an XML sitemap. There is still no firm-published dated list of any kind. Enumeration therefore came, exactly as in H1, from press used only as a lead generator plus a cross-reference of the rows already in this dataset. TechCrunch's neo tag page was walked in full and treated as leads only, never as evidence, because it mixes all the homonyms; its single in-window item (2026-07-01, 'Indian tech tycoon bets $30M of his own money to build AI alternative to Microsoft Office') was opened and rejected - it is Bhavin Turakhia's separate company called Neo, self-funded with no external investor list and no announced financing. TechCrunch's ali-partovi tag was walked in full (nothing after 2026-02-19) and FinSMEs full-text search on \"Ali Partovi\" was run (nothing in 2026 at all). The cross-reference against the sibling July-August files in this dataset (117 rows across six files) was scanned for 'Neo' standing alone in another firm's coInvestors list, which produced the one surviving candidate. That candidate was then confirmed by the H1 test and by nothing weaker: the announcement names 'Neo' inside an investor list alongside other venture firms (Kleiner Perkins, Sequoia, Andreessen Horowitz, Tiger Global, Bain Capital Ventures, Primary, Stripes, Positive Sum, Blackstone).",
    "extensionMethodChanged": false,
    "extensionNote": "Not complete, and still the least complete of the four. JULY 2026 IS EMPTY: no July row survived on any surface. Named explicitly - techcrunch.com/tag/neo/ has exactly one July item and it is a different Neo (Turakhia's bootstrapped office-suite company, rejected above); techcrunch.com/tag/ali-partovi/ has no item after 2026-02-19; the FinSMEs \"Ali Partovi\" search has no 2026 item at all; and neo.com publishes nothing dated, so it cannot populate July or August either. August yielded the single row here, Etched (2026-08-19), and it came from the dataset cross-reference rather than from any Neo-specific surface - the same structural bias flagged in H1, where all three H1 rows arrived the same way. That bias means this slice is skewed toward rounds large enough that a big co-investor also announced them; Neo's typical early-stage cheque goes into rounds too small to be picked up this way, so the real July-August count is near-certainly higher than one. Two surfaces degraded this run and should be recorded: neo.com/companies returned only page metadata rather than the rendered company list (H1 read it through a text-extraction proxy; no such extraction was available here), so it could not be used even as a weak confirmation this time, and neo.com/sitemap.xml still does not serve a sitemap. The name remains unusable as a search key - full-text search for 'Neo' returns overwhelming homonym noise - so the ordinary press sweep that works for Elad Gil and Bloomberg Beta still cannot be run for this firm at all. Excluded on purpose and worth naming so it is not re-found later: the 2026-07-20 'Neo Launches with $100M to Secure AI Software Across the Enterprise' release is a COMPANY named Neo raising a round (backed by a16z, Bessemer Venture Partners, Craft Ventures and Merlin Ventures), not this firm investing, and is the same different-Neo item H1 flagged. Nothing was dropped for failing the both-parties-verbatim rule.",
    "extensionRateRatio": 0.59,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass: entity confirmed as Radical Ventures, the Toronto AI firm at radical.vc (Jordan Jacobs / Fei-Fei Li / Rob Toews); Radical Partners, Mark Cuban's Radical Investments and Radicle excluded. radical.vc has no /news page, so /archive - which lists every post the site has published, newest first, grouped by month - was walked for the July 2026 and August 2026 groups, cross-checked against /perspectives and /post-sitemap.xml, and every post in those two groups was opened. July 2026 group: 'Putting Frontier Drug Design in Every Researcher's Hands' (2026-07-20, a product launch for Latent-Y, no financing and no contiguous passage naming Radical and the company, so no row), 'Prime Intellect: Owning the Learning Loop' (2026-07-13, the firm's post on its lead investment in the $130M Series A announced 2026-07-08), an outbound TechCrunch link to the same Prime Intellect round, and 'The Future of AI Inference' (essay). August 2026 group: 'Our Investment in Discovery Loop' (2026-08-05), 'Radical Reads: Jeff Dean on Launching Discovery Loop' (2026-08-09), 'Applying RSI to the Organization, Not Just the Model', 'A Functional Taxonomy of World Models' and 'Teaching AI to Ask the Right Questions' (2026-08-17) - the last three are essays announcing no financing. /post-sitemap.xml was scanned for 'invest'-type slugs and surfaced no investment post beyond those already walked. Two new financings therefore, matching the H1 finding that this firm announces roughly one every month or two. The Prime Intellect row is dated to the round's announcement date (2026-07-08, the date carried by both the TechCrunch piece Radical itself links and Intel Capital's release), not to Radical's 2026-07-13 post date; its evidence quote is from Radical's own post. ASSEMBLY-STAGE CROSS-FILL, APPLIED EXACTLY AS IN THE JANUARY-JUNE PASS so the two halves are built the same way: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and B had no row for that company and date, a row was created for B from the SAME source - same URL, same date, same verbatim quote, machine-re-checked to name both B and the company. 1 of this firm's July-August rows arrived this way: TwelveLabs (2026-07-01). Their role is null by design, the same treatment H1 used, because deriving lead-vs-participant programmatically is inference.",
    "extensionMethodChanged": false,
    "extensionNote": "radical.vc publishes an 'Investing in X' / 'Our Investment in X' post for only a subset of its deals and the /portfolio pages carry no dates or round information, so the firm's own site cannot enumerate its participation; two rows for July-August is a floor, consistent with the one row H1 produced across six months. SURFACE STATE BY MONTH: /archive was populated for both months (July group 4 items, August group 5 items) and is the surface the counts rest on. /perspectives was PARTIAL - it surfaced only the two most recent August items (2026-08-09 and 2026-08-17) and NO July 2026 items at all, so it would have missed the Prime Intellect post entirely had /archive not been the primary surface. TechCrunch's radical-ventures tag page still carries no 2026 entries, so independent cross-checking was again not possible. The Discovery Loop row is deliberately thin: Radical's own 2026-08-05 announcement states only that it 'is co-leading an investment', with no round name, no amount and no other investor named, so round is null and coInvestors is empty. The follow-up 2026-08-09 'Radical Reads' post reproduces Jeff Dean's own thread, which adds that Radical Ventures and Khosla Ventures were selected to lead, with participation from Lightspeed, Kleiner Perkins, Doerr Capital (John Doerr) and Alphabet (Google), and that the seed round was still to be closed 'over the next few weeks' - that detail is recorded here rather than in the row because it comes from a different URL than the announcement, and it is worth noting that this round may be re-announced, with a size, after the 2026-08-20 cut.",
    "extensionRateRatio": 3.55,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass in substance: entity confirmed as Ribbit Capital, the Palo Alto fintech specialist at ribbitcap.com. ribbitcap.com was re-fetched and is unchanged - a single-page brand manifesto ('the future belongs to the rebels') whose only internal links are 'meet the rebels' and 'disclaimers'; there is still NO news page, NO blog, NO dated portfolio index and NO press-release surface, so there is nothing on the firm's own site to enumerate. Ribbit LEAP was again treated as out of scope. Coverage therefore came entirely from press: TechCrunch's ribbit-capital tag page was walked in full. DECLARED METHOD CHANGE: the tag page yielded nothing in the window (see note), so to follow up the one in-window lead the H1 pass had itself already recorded - its exclusion list names 'Enigma's $71M (2026-07-27, outside the window)' - I fetched TechCrunch's date archive https://techcrunch.com/2026/07/27/ to locate that specific article, then opened it. That date archive is a surface the H1 pass did not use; it was used only to resolve an article H1 had already identified, not to enumerate new candidates, and no other date archive was fetched. The Enigma article yields a contiguous passage naming both Ribbit Capital and the company and is recorded as a lead (co-led with Index Ventures). ASSEMBLY-STAGE CROSS-FILL, APPLIED EXACTLY AS IN THE JANUARY-JUNE PASS so the two halves are built the same way: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and B had no row for that company and date, a row was created for B from the SAME source - same URL, same date, same verbatim quote, machine-re-checked to name both B and the company. 1 of this firm's July-August rows arrived this way: Base Power (2026-08-04). Their role is null by design, the same treatment H1 used, because deriving lead-vs-participant programmatically is inference.",
    "extensionMethodChanged": true,
    "extensionNote": "Ribbit has no public announcement surface at all, so completeness cannot be established from the firm and every count is a floor. SURFACE STATE BY MONTH: the whole method for this firm is TechCrunch's ribbit-capital tag page, and on 2026-08-20 that page is UNPOPULATED for the window - its most recent item is dated 2025-03-19 and it lists no 2026 articles whatsoever, meaning it surfaced nothing for July 2026 and nothing for August 2026 (and, on this fetch, does not even contain the Slash 2026-04-16 article the H1 pass took from it). The tag page is demonstrably not a reliable index of Ribbit's activity: H1 already showed the Mach Industries round Ribbit co-led was absent from it. AUGUST IS EMPTY FOR THIS FIRM and that emptiness is a property of the surface, not evidence that Ribbit did nothing: with no firm surface and a tag page that has stopped indexing, there is no August surface for Ribbit at all. The single row is July; it was recovered only because the H1 pass had already named the article, and nothing equivalent exists to recover August from.",
    "extensionRateRatio": 0.65,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass, on the same surfaces and in the same order. (1) sequoiacap.com home and the news story category (sequoiacap.com/?story_category=news) were fetched and every 'Partnering with ...' article on them opened one by one for its publication date, round language and co-investors; /our-companies and the XML sitemap were re-checked and are still not enumerable (the news index renders only a handful of recent items with no pagination and no dates, /news 404s, and the sitemap carries company, people and tag URLs but no article URLs). (2) Because that surface cannot be walked month by month, the same per-month press and press-release searches were run for July and for August ('led by Sequoia', 'with participation from Sequoia Capital', month names, round labels), together with the same candidate lists the first pass used: AlleyWatch monthly largest-round tables (US and global), Crunchbase News investor-activity pieces, and the revli.com Sequoia portfolio tracker. (3) Every candidate was then opened at its actual announcement - company press release, PR Newswire/Business Wire/GlobeNewswire, Fortune, TechCrunch, TNW, FinSMEs or the company's own newsroom - and kept only where a contiguous verbatim passage names Sequoia as an investor in that specific round. IDENTITY BOUNDARY, unchanged: this record is Sequoia Capital (US/Europe) only. Peak XV Partners and HongShan are separate firms and are never recorded as Sequoia; 'Sequoia Global Equities' (SCGE) is likewise a distinct entity - it is named alongside Sequoia in Rillet's 2026-08-19 Series C and is carried only as a co-investor there, not as a second Sequoia row. Excluded per the brief: Sequoia's own $7B fund, EDX Markets' 2026-07-08 Series C (the revli tracker attributes it to Sequoia as a standing holder but the announcement names SBI Holdings as the investor and does not name Sequoia in the round), and Scanner, whose Sequoia-led Series A was announced 2026-03-12, before this slice. ASSEMBLY-STAGE CROSS-FILL, APPLIED EXACTLY AS IN THE JANUARY-JUNE PASS so the two halves are built the same way: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and B had no row for that company and date, a row was created for B from the SAME source - same URL, same date, same verbatim quote, machine-re-checked to name both B and the company. 1 of this firm's July-August rows arrived this way: Senra Systems (2026-07-15). Their role is null by design, the same treatment H1 used, because deriving lead-vs-participant programmatically is inference.",
    "extensionMethodChanged": true,
    "extensionNote": "METHOD CHANGE, DECLARED: two things were done differently from the recorded January-June surfaces and both added rows. (a) Crunchbase News's weekly 'The Week's 10 Biggest Funding Rounds' articles were used as candidate lists; the first pass recorded only Crunchbase News's monthly most-active-investor pieces. Glow (2026-07-22), Cathedral (2026-07-23) and Neros Technologies (2026-08-11) were first surfaced there. (b) FinSMEs was queried site-scoped ('finsmes.com 2026/07 Sequoia', 'finsmes.com 2026/08 Sequoia') rather than only turning up incidentally in general press search; the first pass used FinSMEs but did not record it as a surface. Corma, Form Energy, Trajectory and Rillet came through that query. Treat July-August Sequoia volume as searched at least as hard as January-June, not less. SURFACE STATE FOR THIS WINDOW: AlleyWatch published both a US and a global table for JULY 2026 and both were used. There is NO AlleyWatch table for AUGUST 2026 - the monthly tables appear in the following month, and alleywatch.com/2026/09/us-startup-funding-top-largest-august-2026-vc/ returns 404 as of 2026-08-20 - so August has no monthly aggregator behind it at all and is under-covered for that reason. Crunchbase News's weekly roundup likewise stops at the week of 2026-08-08 to 2026-08-14, so 2026-08-15 to 2026-08-20 rests on press search alone. The crescendo.ai AI-funding tracker used in the first pass has not been updated past 2026-07-03 and contributed nothing here. DROPPED ON THE EVIDENCE RULE, and recoverable: Preview, a real Sequoia-led seed round posted on Sequoia's own site on 2026-08-12 (sequoiacap.com/article/partnering-with-preview-lights-inference-action) - the post says 'We are thrilled to partner with Stefan and Veljko and to lead their seed round' and never writes the word 'Sequoia' in body prose, and no press announcement of the round could be found, so no contiguous passage names both parties. The same first-person phrasing appears in the Sable, Corma, Etched and Bunkerhill Health posts; those four survived only because press or press-release coverage named Sequoia explicitly. Volume is still too high to establish completeness: Sequoia writes a 'Partnering with ...' post for only a fraction of its deals, there is no dated enumerable archive, and small seed rounds rarely reach the monthly round-ups. Every count is a FLOOR. The 12 rows here are July 6, August 6.",
    "extensionRateRatio": 1.55,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass, on the same surfaces, with the same entity boundary. visionfund.com navigation and sitemap.xml were re-walked; group.softbank/en/news and /en/news/press were walked for July and August 2026; TechCrunch tag pages /tag/softbank/, /tag/softbank-vision-fund/ and /tag/vision-fund/ were walked in full; AlleyWatch's monthly largest-global-round table was continued forward to the July 2026 edition (https://www.alleywatch.com/2026/08/global-startup-funding-top-largest-july-2026-vc/) and its full 19-row investor lists were scanned for SoftBank / Vision Fund / SBIA. No candidate naming SoftBank Vision Fund, SoftBank Vision Fund 2, SoftBank Investment Advisers or SoftBank Group as an investor in a portfolio financing surfaced in the 2026-07-01 to 2026-08-20 slice, so no FinSMEs per-company lookups were triggered. Entity boundary applied unchanged: the 2026-07-02 'SB Neo' formation (SoftBank Corp. + SoftBank Group Corp., a corporate/operating vehicle) was excluded; the 2026-07-29 corporate bonds and 2026-07-30 stock-acquisition-rights notices are IR items, not financings by the firm; the 2026-08-17 SB Energy / NVIDIA / OpenAI 'PORTS-Pike Technology Campus' release is an infrastructure project, not a venture round; TechCrunch's 2026-08-17 'Nvidia investing $1.5B in SoftBank data center developer' is SoftBank RECEIVING investment, not making one. Per the H1 treatment, OpenAI is recorded ONCE on its 2026-02-27 announcement, so the 2026-07-01 'Execution of Follow-on Investment (Second Tranche) in OpenAI' release was deliberately NOT made into a separate row. As in H1, no month-by-month keyword press search was run - that was not part of the recorded method and adding it now would have made July/August searched harder than January.",
    "extensionMethodChanged": false,
    "extensionNote": "Not complete, and this slice (2026-07-01 to 2026-08-20) returns ZERO rows. That zero is what the recorded surfaces yield; no extra source was reached for to avoid it. (1) The H1 finding about visionfund.com STILL HOLDS, re-verified on 2026-08-20: the site publishes NO dated news, press or investment feed at all. Its navigation is Portfolio / Team / Sozo Insights / Work With Us only; https://visionfund.com/news still returns 404; /presentations is still gated; sitemap.xml still enumerates ~700 URLs that are insights posts, Sozo Pulse survey pages, team profiles and 500+ UNDATED portfolio-company pages, with no /news, /press or /announcements path and no date hierarchy. The portfolio index remains undated and lists no rounds. So the firm's own site again cannot enumerate the window. (2) The H1 finding about group.softbank ALSO STILL HOLDS: its July/August 2026 press feed carries only corporate and IR releases (SB Neo, corporate bonds, stock acquisition rights, Q1 FY2026 earnings, the SB Energy/NVIDIA/OpenAI Ohio campus) plus the OpenAI second-tranche execution - no portfolio rounds. (3) MONTH/SURFACE GAPS: AUGUST 2026 has NO AlleyWatch table - https://www.alleywatch.com/2026/09/global-startup-funding-top-largest-august-2026-vc/ returns 404 because that edition publishes in early September - and group.softbank/en/news/press listed NO August 2026 press releases at all as of 2026-08-20. August is therefore covered only by the two firm sites (both structurally undated) and the TechCrunch tag pages. JULY 2026 is covered by the AlleyWatch global July table, which exists and was fully scanned, but that table lists only the ~19 largest global rounds of the month, so any smaller SVF participation in July is invisible to this method. (4) The three TechCrunch tag pages carry nothing about the fund since 2024. Treat 0 as a floor for this slice, not as evidence that SVF did nothing.",
    "extensionRateRatio": 0.71,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass, on the same surfaces. Entity re-confirmed as Spark Capital of Boston/San Francisco (sparkcapital.com); Spark Growth, Spark Ventures, SparkLabs, Spark Microsystems, Genspark and Wavemaker/WPP's Spark remain excluded as name collisions. Enumeration ran the same way round as in H1: sparkcapital.com/companies was taken as the candidate list and each name was looked up in FinSMEs for a round announced in the slice, cross-checked against techcrunch.com/tag/spark-capital/ walked in full, and against AlleyWatch's monthly largest-round table continued forward to the July 2026 global edition, whose full investor lists were scanned for 'Spark Capital'. Every kept row required a contiguous verbatim passage naming both Spark Capital and the company. Portfolio names looked up individually for this slice: Kalshi, Ramp, MatX, Lightmatter, Snap, Plaid, Zeromatter Technologies, Mercury, Edison Scientific, Enfabrica, Base Power. As in H1, no month-by-month keyword press search was run. ASSEMBLY-STAGE CROSS-FILL, APPLIED EXACTLY AS IN THE JANUARY-JUNE PASS so the two halves are built the same way: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and B had no row for that company and date, a row was created for B from the SAME source - same URL, same date, same verbatim quote, machine-re-checked to name both B and the company. 2 of this firm's July-August rows arrived this way: Convex (2026-08-05); Neros Technologies (2026-08-11). Their role is null by design, the same treatment H1 used, because deriving lead-vs-participant programmatically is inference.",
    "extensionMethodChanged": false,
    "extensionNote": "Not complete. 2 rows in this slice, both July; ZERO in August. (1) The H1 finding about sparkcapital.com STILL HOLDS: the site has only About / Team / Companies, the portfolio index is undated and carries no rounds, amounts or dates, and there is still no news, press or announcements page and no working sitemap - so there remains NO enumerable surface on the firm's own site. (2) SURFACE CHANGE WORTH FLAGGING: on 2026-08-20 sparkcapital.com/companies rendered only ELEVEN companies (Kalshi, Inc.; Ramp; MatX; Lightmatter; Snap; Plaid; Zeromatter Technologies, Inc.; Mercury; Edison Scientific; Enfabrica; Base Power) where the H1 pass read 45 off the same URL. Same URL, same fetch method - the page itself returned fewer entries, most likely a client-side rendering or rotation change. The candidate list this pass could work was therefore about a quarter the size of H1's, which mechanically depresses July/August relative to January-June. This is a real, declared asymmetry between the halves and should be treated as such. (3) MONTH/SURFACE GAPS: AUGUST 2026 has NO AlleyWatch table - https://www.alleywatch.com/2026/09/global-startup-funding-top-largest-august-2026-vc/ returns 404, confirmed by fetch on 2026-08-20, because that edition publishes in early September. No substitute aggregator was used in its place. August is therefore covered only by the (shrunken) portfolio candidate list plus techcrunch.com/tag/spark-capital/, which carried no Spark Capital funding story in July or August 2026 (its only in-slice item is the 2026-07-10 Oratomic story). JULY 2026 is covered by the AlleyWatch global July table, which exists and lists 19 rounds; both July rows came from it. (4) DROPPED / CORRECTLY ABSENT: Base Power's Series D ($1B at $13B, announced 2026-08-04, https://www.finsmes.com/2026/08/base-power-raises-1-billion-in-series-d-funding.html) - Base Power is on Spark's own portfolio index, but the announcement names Ribbit, Addition, Valor Equity Partners, JPMorganChase's Strategic Investment Group, Altimeter, D1 Capital Partners, Sands Capital, Coatue, Layer Global, Energy Impact Partners, Thrive Capital, a16z, Lightspeed, Trust Ventures and CapitalG, and NOT Spark Capital, so no row was created. Kalshi, Ramp, MatX, Lightmatter, Snap, Plaid, Mercury, Edison Scientific and Enfabrica had no round announced between 2026-07-01 and 2026-08-20; Zeromatter Technologies returns no FinSMEs results at all. (5) Structurally this method still misses seed and Series A rounds, exactly the stage Spark is most active at, because crawlable largest-round indexes do not carry them. Treat the count as a floor.",
    "extensionRateRatio": 1.48,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass, on the same surfaces. tcv.com/news and /news/category/portfolio-news were re-read and tcv.com/sitemap.xml -> sitemap-0.xml was re-walked, using the sitemap's reverse-chronological ORDERING as a candidate generator exactly as in H1; each candidate above the independently-dated onX Maps post was then looked up in FinSMEs, in the company's own announcement, and in techcrunch.com/tag/tcv/ to find the real announcement date and a contiguous verbatim passage naming both TCV and the company. Cross-checked against AlleyWatch's monthly largest-round table continued forward to the July 2026 global edition, and against finsmes.com/?s=TCV. The brief's exclusion of secondary and pre-IPO transactions was applied; both rows here are primary financings. As in H1, no month-by-month keyword press search was run.",
    "extensionMethodChanged": false,
    "extensionNote": "Not complete. 2 rows in this slice, both July; ZERO in August. (1) The H1 finding about tcv.com STILL HOLDS, re-verified on 2026-08-20: /news does post one article per new investment ('Our Investment in X'), but the listing shows NO dates anywhere, the article bodies are still client-rendered and unfetchable, and every lastmod in sitemap-0.xml is still the single bulk 2026-08-12T23:43:36 migration timestamp, so the sitemap still cannot be date-filtered. Ordering still only bounds a post's date; it never establishes one. (2) The news list is UNCHANGED at the top since the H1 pass - 'Onyx Security: A Secure Control Plane for the Agentic Era' is still the newest post, with 'Entering the Inference Era: Our Investment in Fireworks' second - i.e. TCV published no new investment post between the two reads, so the firm's own surface generated no new candidates for August at all. Both rows here were dated and evidenced from OUTSIDE tcv.com (the Fireworks company blog and FinSMEs), because TCV's own post carries no date. (3) MONTH/SURFACE GAPS: AUGUST 2026 has NO AlleyWatch table - https://www.alleywatch.com/2026/09/global-startup-funding-top-largest-august-2026-vc/ returns 404, confirmed by fetch on 2026-08-20, because that edition publishes in early September - and tcv.com posted nothing new, and finsmes.com/?s=TCV shows no TCV-named round in July or August 2026 (its most recent TCV item remains onX, 2025-11-03), and techcrunch.com/tag/tcv/ carries no TCV funding story in the slice. Every August surface for TCV is therefore empty or absent. JULY 2026 is covered by the AlleyWatch global July table (exists, 19 rounds, TCV named once, in Fireworks). (4) STILL UNDATEABLE, carried forward from H1 and re-checked: 'Pennylane: Building the Financial Operating System for European SMEs' and 'Neara: Building the AI-Native Digital Twin for Critical Infrastructure'. Both sit inside the Nov-2025-to-Aug-2026 ordering band and are live candidates for this window, but FinSMEs' most recent Pennylane round is still 2024-02-09 (Series C, EUR 40M) and its most recent Neara round is still 2024-10-30 (Series C, US$31M), and TechCrunch still has nothing since 2024. Neither could be dated or evidenced, so neither is returned. If either is in fact in-window, this record is short by a row. (5) Fireworks is dated 2026-07-15 from the company's own announcement (fireworks.ai/blog/series-d-announcement), not the 2026-07-16 FinSMEs write-up, following the H1 precedent of preferring the company's own post where it exists (as was done for Mercury). Treat the count as a floor.",
    "extensionRateRatio": 2.03,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass: entity confirmed as Threshold Ventures (threshold.vc), the former DFJ venture practice run by Josh Stein and Heidi Roizen; Draper Associates, Draper Fisher Jurvetson, DFJ Growth, Draper Esprit / Molten Ventures and every other Draper-family entity excluded. The same three surfaces were worked in the same order. (1) threshold.vc/portfolio was re-walked for companies tagged 'Year Invested 2026' to regenerate the candidate set: it returns exactly the same six as in H1 - Bluefish, Core Automation, Enclave, Interia, Sequen and Veritus - with no company added for July or August, so no new candidate to chase. (2) threshold.vc/content, the firm's only dated feed, was re-walked in full: it still carries just three 2026 items and its most recent entry is the Bluefish Series B of 2026-04-14, i.e. nothing dated July or August 2026. (3) TechCrunch's threshold-ventures tag page was re-walked in full: its only 2026 item remains the 2026-02-11 Inertia Enterprises piece, nothing in July or August. No in-window candidate was produced by any of the three surfaces, so no rows were opened and no rows are recorded. No additional source was reached for to avoid a zero.",
    "extensionMethodChanged": false,
    "extensionNote": "ZERO rows for 2026-07-01 to 2026-08-20, and that is what these surfaces yield rather than a failure to look. SURFACE STATE BY MONTH: threshold.vc/content is UNPOPULATED for both July 2026 and August 2026 - its newest item is 2026-04-14, so the firm's only dated feed has published nothing for over four months and gives no July or August surface at all; TechCrunch's threshold-ventures tag page is likewise UNPOPULATED for July and August 2026 (newest 2026 item 2026-02-11); threshold.vc/portfolio is undated by construction - it carries a 'Year Invested' year but no round, no date and no announcement link, so it cannot place a participation inside a seven-week window, and it added no new 2026-tagged company in July or August. The three companies tagged 'Year Invested 2026' that H1 could not date - Core Automation, Enclave and Veritus - are still undated and unlocated; any of them could have been announced inside this window and the portfolio page would not say. Note again that the company Threshold's portfolio spells 'Interia' is spelled 'Inertia Enterprises' in its funding announcement.",
    "extensionRateRatio": 0.0,
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
    "extendedTo": "2026-08-20",
    "extensionComparable": false,
    "extensionMethod": "Same as the January-June pass in shape: ycombinator.com/blog was re-checked across July and August 2026 and, as before, it is not an enumeration surface for the included category - its most recent posts are batch/program news and partner appointments (the newest is 'Diana Hu Is YC's Newest Managing Partner', 2026-06-11) and it never announces YC's participation in a portfolio company's priced round. Coverage therefore again rests entirely on press and press-release search: the AlleyWatch monthly largest-round tables continued forward on the same URL pattern, Crunchbase News investor-activity pieces, the crescendo.ai AI-funding deal tracker, TechCrunch/Fortune/BetaKit funding coverage, and PR Newswire / Business Wire / FinSMEs round announcements searched for 'Y Combinator' inside the investor list. Each candidate was opened at its actual announcement and kept only where a contiguous verbatim passage names Y Combinator as an investor in that specific round. ASSEMBLY-STAGE CROSS-FILL, APPLIED EXACTLY AS IN THE JANUARY-JUNE PASS so the two halves are built the same way: after all firms were researched independently, every row's coInvestors list was scanned for the other 23 firms in this set. Where firm B was named as a co-investor in a round researched for firm A, and B had no row for that company and date, a row was created for B from the SAME source - same URL, same date, same verbatim quote, machine-re-checked to name both B and the company. 2 of this firm's July-August rows arrived this way: Emergent (2026-07-20); Singularity (2026-07-14). Their role is null by design, the same treatment H1 used, because deriving lead-vs-participant programmatically is inference.",
    "extensionMethodChanged": true,
    "extensionNote": "SPECIAL RULE RESTATED, UNCHANGED, and it defines what 'complete' means here. The standard YC batch investment - the cheque YC writes into every company in every batch, several hundred a year - is EXCLUDED entirely, as are press mentions that merely describe a company as 'YC-backed', a 'Y Combinator grad', 'YC S23' or 'YC W26' without naming YC as an investor in the round being announced. Only follow-on investments and named participation in a company's announced priced or seed round are included. `complete: false` therefore refers to completeness of that included category ONLY; it says nothing about YC's overall investing, which is dominated by the excluded batch cheques. Dropped on that rule in this slice: Vector Legal's 2026-07-30 $5.19M seed (YC named only as the accelerator the company went through, Base10 Partners led) and Corgi (described as 'Y Combinator's latest unicorn' with YC absent from the investor list; its TCV-led round is also May 2026, outside this slice). Orthogonal's $4.3M seed, which does name Y Combinator, was announced 2026-06-25 and falls before this slice. METHOD CHANGE, DECLARED, and it matters for period-over-period comparison: FinSMEs was queried SITE-SCOPED for this window ('finsmes.com 2026/07 Y Combinator', 'finsmes.com 2026/08 Y Combinator') rather than being left to surface incidentally through general press search. FinSMEs supplied 3 of the 14 January-June YC rows but was never recorded as a YC surface, and site-scoping it exposed a dense tail of small YC-participating seed and Series A rounds that the January-June pass would not have reached the same way: 16 of the 18 rows here came from that query (Proception.AI, Finto, Hadrius, Vorflux, Scape, telli, Centralize, Healia, Dili, HappyRobot, Naïve, Discovered Materials, Axle, Blacksmith, River Markets, Hypercubic); only Bunkerhill Health and Terminal came from the Business Wire / PR Newswire searches the first pass recorded. July-August YC volume is consequently NOT comparable like-for-like with January-June: the first half is under-counted relative to this slice, not the other way round. SURFACE STATE FOR THIS WINDOW: the AlleyWatch monthly tables were continued forward as instructed - the JULY 2026 US table (12 rounds) and JULY 2026 global table (19 rounds) both exist and were read, and neither names Y Combinator in any round. There is NO AlleyWatch table for AUGUST 2026: alleywatch.com/2026/09/us-startup-funding-top-largest-august-2026-vc/ returns 404 as of 2026-08-20, because the monthly table is published in the following month. Naming it: the August 2026 AlleyWatch monthly surface does not exist yet. The crescendo.ai AI-funding tracker, a core January-June surface, has not been updated past 2026-07-03 and contributed no rows. Crunchbase News's July investor-activity piece says 'Y Combinator was by far the busiest backer by deal count' but names no portfolio companies, so it works only as a signal that this set is a small fraction of YC's July activity. Within the included category the set still cannot be shown to be exhaustive: YC publishes no list of its follow-on participations, and many round announcements omit the full investor list. Every count is a FLOOR. The 18 rows here are July 11, August 7.",
    "extensionRateRatio": 5.58,
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
   Multi-valued on purpose. Kept separate from SECTOR_MAP so adding
   a deal label can never change which firms appear on an SEO page. */
const DEAL_SECTOR_MAP = {
  "AI": [
    "ai"
  ],
  "AI Agent Infrastructure": [
    "ai",
    "developer-tools"
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
  "AI Inference Hardware": [
    "ai",
    "hardware"
  ],
  "AI Inference Platform": [
    "ai",
    "developer-tools"
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
  "AI Sales Automation": [
    "ai",
    "enterprise-software"
  ],
  "AI Sales Enablement": [
    "ai",
    "enterprise-software"
  ],
  "AI Security": [
    "ai",
    "cybersecurity"
  ],
  "AI Simulation": [
    "ai",
    "deep-tech"
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
  "AI for Science": [
    "ai",
    "deep-tech"
  ],
  "Accounting AI": [
    "ai",
    "fintech"
  ],
  "Accounting Automation": [
    "fintech",
    "enterprise-software"
  ],
  "Advanced Manufacturing": [
    "industrial-tech"
  ],
  "Advanced Materials": [
    "deep-tech"
  ],
  "Advertising Technology": [
    "enterprise-software"
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
  "Battery Technology": [
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
  "Climate GeoAI": [
    "climate",
    "ai"
  ],
  "Cloud Data Infrastructure": [
    "developer-tools"
  ],
  "Cloud Infrastructure": [
    "developer-tools"
  ],
  "Compliance Software": [
    "enterprise-software"
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
  "Construction": [
    "industrial-tech"
  ],
  "Construction Compliance": [
    "enterprise-software",
    "industrial-tech"
  ],
  "Construction Materials Commerce": [
    "industrial-tech",
    "marketplaces"
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
  "Counter-Drone Defense": [
    "defense-tech"
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
  "Customer Communications": [
    "enterprise-software"
  ],
  "Customer Service AI": [
    "ai",
    "enterprise-software"
  ],
  "Cyber Warfare": [
    "defense-tech",
    "cybersecurity"
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
  "Data and AI": [
    "ai",
    "developer-tools"
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
  "Defense Cybersecurity": [
    "defense-tech",
    "cybersecurity"
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
  "Distributed Energy": [
    "climate"
  ],
  "E-commerce Personalization": [
    "consumer",
    "enterprise-software"
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
  "Energy Storage": [
    "climate",
    "hardware"
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
  "Enterprise Security": [
    "cybersecurity",
    "enterprise-software"
  ],
  "Enterprise Service Management": [
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
  "Financial Software": [
    "fintech"
  ],
  "Fintech": [
    "fintech"
  ],
  "Fintech Infrastructure": [
    "fintech"
  ],
  "Fire Safety Tech": [
    "industrial-tech"
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
  "Gaming Commerce": [
    "consumer",
    "marketplaces"
  ],
  "Gene Therapy": [
    "healthcare"
  ],
  "Generative Media": [
    "ai",
    "consumer"
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
  "Health Benefits": [
    "healthcare",
    "fintech"
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
  "Healthcare Technology": [
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
  "Industrial AI": [
    "ai",
    "industrial-tech"
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
  "Materials Science AI": [
    "ai",
    "deep-tech"
  ],
  "Messaging Infrastructure": [
    "developer-tools"
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
  "News Media": [
    "consumer"
  ],
  "Nuclear Energy": [
    "climate"
  ],
  "Payments": [
    "fintech"
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
  "Preventive Health": [
    "healthcare"
  ],
  "Preventive Healthcare": [
    "healthcare"
  ],
  "Private Credit Software": [
    "fintech"
  ],
  "Process Intelligence": [
    "enterprise-software"
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
  "Sales Intelligence": [
    "enterprise-software"
  ],
  "Sales Software": [
    "enterprise-software"
  ],
  "Satellite Manufacturing": [
    "space",
    "hardware"
  ],
  "Satellites": [
    "space"
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
  "Semiconductor Design AI": [
    "ai",
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
  "Sovereign Infrastructure": [
    "deep-tech"
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
  "Sports Media AI": [
    "ai",
    "consumer"
  ],
  "Stablecoin Infrastructure": [
    "crypto",
    "fintech"
  ],
  "Synthetic Biology": [
    "healthcare",
    "deep-tech"
  ],
  "Telematics Data Infrastructure": [
    "mobility",
    "developer-tools"
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

/* Verbatim co-investor string (lower-cased) -> firm slug. Only
   exact matches against a board firm's own name or short name are
   added automatically, so a near-miss never silently becomes an
   edge in the co-investment graph. */
const COINVESTOR_ALIASES = {
  "500 global": "500-global",
  "645 ventures": "645-ventures",
  "8vc": "8vc",
  "a16z": "a16z",
  "accel": "accel",
  "acrew capital": "acrew-capital",
  "addition": "addition",
  "afore capital": "afore-capital",
  "air street capital": "air-street-capital",
  "aix ventures": "aix-ventures",
  "alumni ventures": "alumni-ventures",
  "amplify partners": "amplify-partners",
  "andreessen horowitz": "a16z",
  "andreessen horowitz (a16z)": "a16z",
  "arch venture partners": "arch-venture-partners",
  "atomico": "atomico",
  "b capital": "b-capital-group",
  "bain capital ventures": "bain-capital-ventures",
  "balderton": "balderton-capital",
  "balderton capital": "balderton-capital",
  "base10 partners": "base10-partners",
  "basis set ventures": "basis-set-ventures",
  "battery ventures": "battery-ventures",
  "bayern kapital": "bayern-kapital",
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
  "cherry ventures": "cherry-ventures",
  "cisco investments": "cisco-investments",
  "citi ventures": "citi-ventures",
  "collaborative fund": "collaborative-fund",
  "construct capital": "construct-capital",
  "conviction": "conviction",
  "costanoa ventures": "costanoa-ventures",
  "cowboy ventures": "cowboy-ventures",
  "craft ventures": "craft-ventures",
  "creandum": "creandum",
  "crv": "crv",
  "cyberstarts": "cyberstarts",
  "dcm ventures": "dcm-ventures",
  "dcvc": "dcvc",
  "dcvc bio": "dcvc",
  "dell technologies capital": "dell-technologies-capital",
  "draper associates": "draper-associates",
  "elad gil": "elad-gil",
  "elaia": "elaia-partners",
  "emergence capital": "emergence-capital",
  "energy impact partners": "energy-impact-partners",
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
  "foresite capital": "foresite-capital",
  "foundation capital": "foundation-capital",
  "founders fund": "founders-fund",
  "gaingels": "gaingels",
  "general catalyst": "general-catalyst",
  "gradient ventures": "gradient-ventures",
  "greenoaks": "greenoaks-capital",
  "greycroft": "greycroft",
  "greylock": "greylock",
  "greylock partners": "greylock",
  "gv": "gv",
  "harlem capital": "harlem-capital",
  "haun ventures": "haun-ventures",
  "haystack": "haystack",
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
  "kima ventures": "kima-ventures",
  "kindred ventures": "kindred-ventures",
  "kleiner perkins": "kleiner-perkins",
  "lakestar": "lakestar",
  "lightspeed": "lightspeed",
  "lightspeed venture partners": "lightspeed",
  "liquid 2": "liquid2-ventures",
  "liquid 2 ventures": "liquid2-ventures",
  "localglobe": "localglobe",
  "lowercarbon capital": "lowercarbon-capital",
  "lux": "lux-capital",
  "lux capital": "lux-capital",
  "m13": "m13",
  "madrona": "madrona",
  "makers fund": "makers-fund",
  "matrix partners": "matrix-partners",
  "mayfield": "mayfield",
  "menlo ventures": "menlo-ventures",
  "monashees": "monashees",
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
  "plural": "plural",
  "point72 ventures": "point72-ventures",
  "polychain": "polychain-capital",
  "qed investors": "qed-investors",
  "qualcomm ventures": "qualcomm-ventures",
  "quiet capital": "quiet-capital",
  "ra capital management": "ra-capital-management",
  "radical ventures": "radical-ventures",
  "redalpine": "redalpine",
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
  "slow ventures": "slow-ventures",
  "softbank vision fund": "softbank-vision-fund",
  "softbank vision fund 2": "softbank-vision-fund",
  "soma capital": "soma-capital",
  "south park commons": "south-park-commons",
  "spark": "spark-capital",
  "spark capital": "spark-capital",
  "storm ventures": "storm-ventures",
  "susa ventures": "susa-ventures",
  "sutter hill ventures": "sutter-hill-ventures",
  "sv angel": "sv-angel",
  "tcv": "tcv",
  "techstars": "techstars",
  "the fintech fund": "the-fintech-fund",
  "threshold ventures": "threshold-ventures",
  "thrive": "thrive-capital",
  "thrive capital": "thrive-capital",
  "tiger global": "tiger-global",
  "tiger global management": "tiger-global",
  "toyota ventures": "toyota-ventures",
  "tribe capital": "tribe-capital",
  "true ventures": "true-ventures",
  "uncork capital": "uncork-capital",
  "union square ventures": "union-square-ventures",
  "upfront ventures": "upfront-ventures",
  "usv": "union-square-ventures",
  "uvc partners": "uvc-partners",
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
