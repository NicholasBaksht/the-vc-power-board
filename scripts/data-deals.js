/* ============================================================
   DATA-DEALS.JS  —  dated, sourced investment records

   Deal-level data for the Power Alerts engine. Every row is one
   firm's participation in one financing, carrying the date, the
   source URL, and a verbatim quote naming the firm and the
   portfolio company.

   140 rows across 24 firms, assembled from two research batches
   (2026-08-14). Batch 2 firms were chosen because each already
   appeared as a co-investor in batch 1, so the co-investment
   graph closes on contact rather than after many more batches.

   HOW THIS WAS SAMPLED - AND WHAT THAT FORBIDS
     Each firm contributed its MOST RECENT SOURCEABLE deals in the
     window, capped at 6. Two consequences bind every metric here:

       1. NO TIME TRENDS. The rows skew hard to recent months. That
          is an artifact of taking the most recent N - not evidence
          that investing accelerated. Never compute a year-over-year
          or period-over-period rate from this file.

       2. NO CROSS-FIRM VOLUME COMPARISON. Firms are capped at the
          same number of rows, so counting rows per firm measures
          the cap. Deal CADENCE is unsafe for a further reason: the
          firms with no usable news page cluster at the bottom, so
          cadence largely measures press-office practice.

     What IS safe is a presence claim with an explicit denominator:
     "N of the M firms with deal coverage have a disclosed
     investment in sector X." That is a floor, never a total.

   ROWS REJECTED DURING MERGE (kept out deliberately)
     neo/Espa Labs      single law-firm client post by Neo's own
                        outside counsel, no corroborating source.
     sequoia/Cathedral  Reuters citing "three sources with knowledge
                        of the matter" - reporting, not an
                        announcement, and no round name stated.
     intel-capital/OXMIQ Labs
                        the release calls Intel Capital "a strategic
                        IP partner", never an investor. The quote
                        does not support an investment claim.
     a16z deep-tech tag (batch 1) was likewise withheld from the
     firm sector tags: its only basis was "Travis Kalanick's
     robotics company, Atoms".

   CORRECTIONS APPLIED
     bloomberg-beta/Bluesky  dated 2025-04 (the round date its own
       quote states) rather than 2026-03-19, the date of the blog
       post that restated it. Using the disclosure date would let a
       year-old round count as recent.
     lightspeed/Andera  co-investor "A*" removed - it came from a
       page byline, not from any investor sentence.
     neo/Casa  an editorial annotation was stripped from the
       evidence field so the field holds only quotation.

   FIELD NOTES
     announcedDate   ISO. datePrecision says how much of it is real
                     ("day" | "month" | "year"). Never padded.
     sector          the researcher's free-text label, kept verbatim.
                     DEAL_SECTOR_MAP below rolls it up into the
                     canonical taxonomy.js buckets.
     sectorEvidence  a quote describing what the COMPANY does. It is
                     never taken from the firm's stated focus.
     role            "lead" | "participant" | null. null means the
                     source did not say.
     coInvestors     [] means the source named none, not that there
                     were none. Strings are VERBATIM and deliberately
                     un-normalised: "Nvidia" / "NVIDIA" / "Nvidia
                     Ventures" / "NVentures" all appear. Anything
                     joining on these needs an alias table first.
     evidence        verbatim quote. A few rows join two fragments
                     from the SAME source with "..." where no single
                     sentence named both parties.

   FIRM SITES THAT WERE UNUSABLE AS A DEAL SOURCE: ribbitcap.com,
   visionfund.com, eladgil.com, delltechnologiescapital.com,
   sparkcapital.com, khoslaventures.com, bloombergbeta.com,
   neo.com (use neo.substack.com), nea.com, radical.vc.
   ============================================================ */

const FIRM_DEALS = [
  {
    firmSlug: "elad-gil", company: "NavigateAI",
    announcedDate: "2026-05-26", datePrecision: "day", round: "seed round",
    sector: "Construction Tech",
    sectorEvidence: "NavigateAI is building the trusted AI copilot for the physical world. NavigateAI puts an AI partner in the hands of every worker in the field, providing real-time upskilling, automating quality control, and helping teams build faster and cheaper.",
    role: "lead",
    coInvestors: ["Khosla Ventures", "Fifth Wall", "Lennar", "Tishman Speyer", "Helix Electric", "Zach Frankel", "Dallas Tanner", "Marcus Ridgway", "Winston Weinberg", "Gary Beasley", "Jesse Zhang", "Apoorva Mehta", "Tony Xu", "Logan Green", "Brian Armstrong"],
    sourceUrl: "https://www.globenewswire.com/news-release/2026/05/26/3301425/0/en/navigateai-launches-to-build-the-ai-copilot-for-the-physical-world.html", sourceType: "press-release",
    evidence: "The $25mm seed round was led by Elad Gil with participation from Khosla Ventures, Lennar, Tishman Speyer, and Helix Electric alongside angels including Zach Frankel (Ramp), Dallas Tanner (Invitation Homes), Winston Weinberg (Harvey.ai), Jesse Zhang (Decagon), Tony Xu (DoorDash), and others."
  },
  {
    firmSlug: "elad-gil", company: "Frame Security",
    announcedDate: "2026-05-11", datePrecision: "day", round: null,
    sector: "Cybersecurity",
    sectorEvidence: "Frame is building what it describes as a 'human risk security' platform designed to help companies defend against increasingly sophisticated phishing, impersonation and deepfake attacks generated using artificial intelligence.",
    role: "participant",
    coInvestors: ["Index Ventures", "Team8", "Picture Capital", "Assaf Rappaport", "Cerca Partners", "Tesonet"],
    sourceUrl: "https://www.calcalistech.com/ctechnews/article/s1idmmtabx", sourceType: "reputable-press",
    evidence: "Frame Security, a startup focused on protecting organizations from AI-powered social engineering attacks, has emerged from stealth with a $50 million funding round led by Index Ventures, Team8 and Picture Capital. ... The round also included participation from Wiz CEO Assaf Rappaport and technology investor Elad Gil, who initially invested as an angel investor and later through his fund, Gil Capital."
  },
  {
    firmSlug: "elad-gil", company: "Applied Compute",
    announcedDate: "2026-04-08", datePrecision: "day", round: null,
    sector: "Enterprise AI",
    sectorEvidence: "Applied Compute, a developer of custom artificial intelligence models for enterprises, announced it has raised US$80 million in new financing at a US$1.3 billion post-money valuation.",
    role: "participant",
    coInvestors: ["Kleiner Perkins", "Lux", "Greenoaks", "Neo", "Hanabi"],
    sourceUrl: "https://www.lw.com/en/news/2026/04/latham-represents-applied-compute-in-fundraise", sourceType: "reputable-press",
    evidence: "Applied Compute, a developer of custom artificial intelligence models for enterprises, announced it has raised US$80 million in new financing at a US$1.3 billion post-money valuation. The funding round was led by Kleiner Perkins with participation from Elad Gil, Lux, Greenoaks, Neo, Hanabi, and more."
  },
  {
    firmSlug: "elad-gil", company: "Eon",
    announcedDate: "2025-12-02", datePrecision: "day", round: "Series D",
    sector: "Cloud Data Infrastructure",
    sectorEvidence: "Eon is a trusted partner for enterprises seeking to unify, protect, and activate structured and unstructured data across multi-cloud environments.",
    role: "lead",
    coInvestors: ["Sequoia Capital", "Lightspeed Venture Partners", "Greenoaks", "BOND", "Affinity", "Omri Casspi", "Vine Ventures"],
    sourceUrl: "https://www.eon.io/news-and-events/series-d-funding", sourceType: "company-announcement",
    evidence: "Eon, the first to unlock cloud data backups for enterprise AI, today announced that it has raised a $300 million Series D funding round led by Elad Gil of Gil Capital."
  },
  {
    firmSlug: "elad-gil", company: "Infisical",
    announcedDate: "2025-06-06", datePrecision: "day", round: "Series A",
    sector: "Developer Security",
    sectorEvidence: "Infisical is a secrets management platform for developers and companies, offering the tech to securely store, change, and retrieve vital credentials.",
    role: "lead",
    coInvestors: ["Y Combinator", "Gradient", "Dynamic Fund", "Olivier Pomel", "Antonio Gracias"],
    sourceUrl: "https://fortune.com/2025/06/06/infisical-raises-16-million-series-a-led-by-elad-gil-to-safeguard-secrets/", sourceType: "reputable-press",
    evidence: "Founded in 2022 by Matsiiako with Tony Dang and Maidul Islam, Infisical's now raised a $16 million Series A, led by Elad Gil."
  },
  {
    firmSlug: "elad-gil", company: "Abridge",
    announcedDate: "2025-02-17", datePrecision: "day", round: "Series D",
    sector: "Healthcare AI",
    sectorEvidence: "Abridge, a seven-year-old company focusing on improving doctors' clinical documentation workflows with AI, now has new mission fuel.",
    role: "lead",
    coInvestors: ["IVP", "Bessemer Venture Partners", "CapitalG", "Lightspeed Venture Partners", "K. Ventures", "NVentures", "SV Angel", "Redpoint Ventures", "Spark Capital", "California Healthcare Foundation", "CVS Ventures"],
    sourceUrl: "https://fortune.com/2025/02/17/exclusive-abridge-raises-250-million-series-d-led-by-elad-gil-and-ivp/", sourceType: "reputable-press",
    evidence: "Exclusive: Abridge raises $250 million Series D led by Elad Gil and IVP ... The Pittsburgh, Pa.-based company has raised a $250 million Series D, co-led by tech entrepreneur Elad Gil and VC firm IVP, valuing the startup at $2.75 billion post-money."
  },
  {
    firmSlug: "a16z", company: "Vals AI",
    announcedDate: "2026-08-13", datePrecision: "day", round: "Series A",
    sector: "AI Evaluation",
    sectorEvidence: "AI evaluation startup Vals AI has secured $40 million in a Series A round valuing the company at $400 million, led by Andreessen Horowitz.",
    role: "lead",
    coInvestors: ["8VC", "Pear VC", "Bloomberg Beta", "HRT Ventures", "Next Ladder"],
    sourceUrl: "https://cryptobriefing.com/vals-ai-40m-series-a-a16z/", sourceType: "reputable-press",
    evidence: "AI evaluation startup Vals AI has secured $40 million in a Series A round valuing the company at $400 million, led by Andreessen Horowitz."
  },
  {
    firmSlug: "a16z", company: "Volta",
    announcedDate: "2026-08-04", datePrecision: "day", round: "Series A",
    sector: "AI Infrastructure",
    sectorEvidence: "Volta is building a new and different kind of AI infrastructure company, combining cloud operations with project finance to unlock new sources of compute.",
    role: "lead",
    coInvestors: [],
    sourceUrl: "https://a16z.com/announcement/investing-in-volta/", sourceType: "firm-announcement",
    evidence: "We believe that Volta is building a new and different kind of AI infrastructure company, combining cloud operations with project finance to unlock new sources of compute. ... That's why a16z is excited to co-lead its Series A."
  },
  {
    firmSlug: "a16z", company: "HappyRobot",
    announcedDate: "2026-08-04", datePrecision: "day", round: "Series C",
    sector: "Enterprise AI Agents",
    sectorEvidence: "HappyRobot, the company putting AI agents to work across complex enterprise operations",
    role: "participant",
    coInvestors: ["Prysm Capital", "Eurazeo", "Base10", "Y Combinator", "Koch Disruptive Technologies", "Orange", "T.Capital (Deutsche Telekom)", "Bankinter", "Endeavor Catalyst", "Kfund", "Wave-X"],
    sourceUrl: "https://www.businesswire.com/news/home/20260804192350/en/HappyRobot-Raises-$150-Million-Series-C-to-Build-Enterprise-Superintelligence", sourceType: "press-release",
    evidence: "HappyRobot, the company putting AI agents to work across complex enterprise operations, today announced it has raised $150 million in Series C funding led by Prysm Capital and co-led by Eurazeo. ... Existing investors a16z, Base10, Y Combinator are doubling down with participation from strategics like Koch Disruptive Technologies (KDT), Orange, and T.Capital (Deutsche Telekom), Bankinter, Endeavor Catalyst, Kfund and Wave-X."
  },
  {
    firmSlug: "a16z", company: "Convex",
    announcedDate: "2026-08-04", datePrecision: "day", round: "Series B",
    sector: "Developer Infrastructure",
    sectorEvidence: "Convex, a San Francisco, CA-based reactive backend platform",
    role: "participant",
    coInvestors: ["Insight Partners", "Etna Labs", "Spark Capital", "Justin Kan"],
    sourceUrl: "https://www.finsmes.com/2026/08/convex-raises-57m-in-series-b-funding.html", sourceType: "reputable-press",
    evidence: "Convex, a San Francisco, CA-based reactive backend platform, raised $57M in Series B financing. The round was led by Insight Partners with participation from Etna Labs, a16z, and Spark Capital."
  },
  {
    firmSlug: "a16z", company: "Atoms",
    announcedDate: "2026-07-22", datePrecision: "day", round: null,
    sector: "Robotics",
    sectorEvidence: "Travis Kalanick's robotics company, Atoms",
    role: "lead",
    coInvestors: ["Bain Capital", "Fifth Wall", "Uber"],
    sourceUrl: "https://techcrunch.com/2026/07/22/travis-kalanicks-robotics-company-raises-1-7b-led-by-a16z/", sourceType: "reputable-press",
    evidence: "Travis Kalanick's robotics company, Atoms, has raised $1.7 billion in a funding round led by Andreessen Horowitz."
  },
  {
    firmSlug: "a16z", company: "Neo",
    announcedDate: "2026-07-20", datePrecision: "day", round: "Seed",
    sector: "Cybersecurity",
    sectorEvidence: "Neo gives SecOps teams the inventory, posture intelligence, attribution, and policy control to manage enterprise-wide agentic transformation and secure AI agents, AI-enabled applications, browsers, identities, and traditional software with newly introduced agentic capabilities.",
    role: "lead",
    coInvestors: ["Bessemer Venture Partners", "Craft Ventures", "Merlin Ventures"],
    sourceUrl: "https://www.neo.ai/news/neo-launches-100m", sourceType: "company-announcement",
    evidence: "Neo, the Agentic Software Control company, today emerged from stealth with $100M in funding from Andreessen Horowitz and Bessemer Venture Partners, with participation from Craft Ventures and Merlin Ventures."
  },
  {
    firmSlug: "ribbit-capital", company: "Enigma",
    announcedDate: "2026-07-27", datePrecision: "day", round: "seed round",
    sector: "Robotics",
    sectorEvidence: "Enigma is launching a large-scale experiment that allows anyone in the world to interact online with more than 100 of its proprietary AI robots.",
    role: "lead",
    coInvestors: ["Index Ventures", "Conviction Partners"],
    sourceUrl: "https://techcrunch.com/2026/07/27/enigma-raises-70m-to-make-controlling-a-robot-as-easy-as-adjusting-the-volume/", sourceType: "reputable-press",
    evidence: "Enigma raised a $71 million seed round led by Index Ventures and Ribbit Capital, with participation from Sarah Guo of Conviction Partners."
  },
  {
    firmSlug: "ribbit-capital", company: "Morpho",
    announcedDate: "2026-06-09", datePrecision: "day", round: null,
    sector: "Crypto / DeFi",
    sectorEvidence: "Morpho, the onchain lending protocol",
    role: "lead",
    coInvestors: ["Paradigm", "a16z crypto", "Apollo Funds", "Circle Ventures", "VanEck"],
    sourceUrl: "https://unchainedcrypto.com/morpho-raises-175-million-co-led-by-paradigm-a16z-crypto-and-ribbit-capital-to-build-open-credit-network/", sourceType: "reputable-press",
    evidence: "Morpho, the onchain lending protocol, raised $175 million in a funding round co-led by Paradigm, a16z crypto, and Ribbit Capital, the Morpho Association announced Tuesday."
  },
  {
    firmSlug: "ribbit-capital", company: "Mach Industries",
    announcedDate: "2026-06-02", datePrecision: "day", round: "Series C",
    sector: "Defense Tech",
    sectorEvidence: "Mach Industries, a leading defense manufacturer building advanced unmanned systems for modern defense, today announced it has raised $300 million in Series C funding.",
    role: "lead",
    coInvestors: ["Infinite Capital", "Bedrock Capital", "Sequoia Capital", "Khosla Ventures"],
    sourceUrl: "https://www.prnewswire.com/news-releases/mach-industries-raises-300-million-in-series-c-funding-302787788.html", sourceType: "press-release",
    evidence: "\"At Ribbit, we partner with teams disrupting the status quo, who see the cracks before anyone else and have the conviction to build something better,\" said Micky Malka, Founder of Ribbit Capital. \"Ethan and the Mach team are building with urgency, increasingly controlling their supply chain, and refusing to wait for incumbents to catch up.\""
  },
  {
    firmSlug: "ribbit-capital", company: "Enter",
    announcedDate: "2026-05-05", datePrecision: "day", round: "Series B",
    sector: "Legal Tech",
    sectorEvidence: "Enter is a São Paulo-based legal-technology company that uses AI agents to handle end-to-end litigation in civil and labor cases, with the EnterOS platform drafting initial petitions, building legal defenses, calculating settlement costs, and even researching contextual data such as weather conditions cited in airline-cancellation lawsuits.",
    role: "participant",
    coInvestors: ["Founders Fund", "Sequoia Capital", "Atlantico", "ONEVC", "Kaszek"],
    sourceUrl: "https://www.riotimesonline.com/enter-brazilian-legal-ai-unicorn-1-2-billion-may-2026/", sourceType: "reputable-press",
    evidence: "The Series B was led by Founders Fund (Peter Thiel) with participation from Sequoia Capital, Ribbit Capital, Atlantico, ONEVC, and Kaszek, and Sequoia and Founders Fund had also co-led Enter's Series A in 2025, signaling continued institutional commitment."
  },
  {
    firmSlug: "ribbit-capital", company: "Slash",
    announcedDate: "2026-04-15", datePrecision: "day", round: "Series C",
    sector: "Fintech",
    sectorEvidence: "Slash Financial, Inc., the banking platform built for modern businesses",
    role: "lead",
    coInvestors: ["Khosla Ventures", "Goodwater Capital", "New Enterprise Associates", "Y Combinator"],
    sourceUrl: "https://www.businesswire.com/news/home/20260415566517/en/Slash-Achieves-Unicorn-Status-Following-$100m-Series-C-Fundraise", sourceType: "press-release",
    evidence: "Slash Financial, Inc., the banking platform built for modern businesses, is now valued at $1.4 billion following a $100m Series C funding round led by Ribbit Capital."
  },
  {
    firmSlug: "ribbit-capital", company: "CoPlane",
    announcedDate: "2025-11-25", datePrecision: "day", round: "seed round",
    sector: "Enterprise Software",
    sectorEvidence: "CoPlane, an AI-native enterprise software company focused on overhauling back-office operations for large organizations",
    role: "lead",
    coInvestors: ["Stripe", "Optum Ventures", "Terrain"],
    sourceUrl: "https://pulse2.com/coplane-14-million-seed-funding/", sourceType: "reputable-press",
    evidence: "CoPlane, an AI-native enterprise software company focused on overhauling back-office operations for large organizations, announced that it has raised a $14 million seed round led by Ribbit, with additional participation from Stripe, Optum Ventures, and Terrain."
  },
  {
    firmSlug: "8vc", company: "Sable",
    announcedDate: "2026-07-16", datePrecision: "day", round: null,
    sector: "Enterprise AI Agents",
    sectorEvidence: "Sable, the first AI employee built to lead customer interactions end-to-end",
    role: "lead",
    coInvestors: ["Sequoia Capital", "BoxGroup", "SV Angel", "Valor Atreides AI Fund", "Sabrina Hahn", "Evan Hahn"],
    sourceUrl: "https://www.newswire.com/news/sable-raises-45m-to-build-the-first-ai-employee-that-can-click-see-and-explain", sourceType: "press-release",
    evidence: "Sable, the first AI employee built to lead customer interactions end-to-end, today announced a $45 million financing round led by Sequoia Capital and 8VC, with participation from BoxGroup, SV Angel, Valor Atreides AI Fund, Sabrina and Evan Hahn."
  },
  {
    firmSlug: "8vc", company: "Generalist AI",
    announcedDate: "2026-06-04", datePrecision: "day", round: null,
    sector: "Robotics",
    sectorEvidence: "Generalist AI, a San Francisco, CA-based developer of embodied robotics intelligence and foundation models",
    role: "participant",
    coInvestors: ["Radical Ventures", "Union Square Ventures", "Hanabi Capital", "NVentures (Nvidia)", "Bezos Expeditions"],
    sourceUrl: "https://www.finsmes.com/2026/06/generalist-ai-raises-400m-in-funding-at-2-billion-valuation.html", sourceType: "reputable-press",
    evidence: "Generalist AI, a San Francisco, CA-based developer of embodied robotics intelligence and foundation models, raised $400m in funding at a $2 billion valuation. The round was led by Radical Ventures, with participation from 8VC, Union Square Ventures, Hanabi Capital, Nvidia's NVentures, and Bezos Expeditions."
  },
  {
    firmSlug: "8vc", company: "Saris AI",
    announcedDate: "2026-05-28", datePrecision: "day", round: "Series A",
    sector: "Fintech",
    sectorEvidence: "Saris meets financial institutions exactly where they are and automates the complex, multi-turn back-office workflows that prior generations of technology couldn't touch.",
    role: "lead",
    coInvestors: ["Audacious Ventures", "Homebrew", "BankTech Ventures", "Service Credit Union"],
    sourceUrl: "https://8vc.com/resources/announcing-our-investment-in-saris-ai", sourceType: "firm-announcement",
    evidence: "Today, Saris announced its $28.8 million Series A led by 8VC, with participation from Audacious Ventures, Homebrew, BankTech Ventures, and Service Credit Union."
  },
  {
    firmSlug: "8vc", company: "PointOne",
    announcedDate: "2026-03-23", datePrecision: "day", round: "Series A",
    sector: "Legal Tech",
    sectorEvidence: "PointOne, the time entry startup",
    role: "lead",
    coInvestors: ["Bessemer Venture Partners", "General Catalyst", "Y Combinator"],
    sourceUrl: "https://www.artificiallawyer.com/2026/03/23/pointone-raises-16m-10xs-revenue/", sourceType: "reputable-press",
    evidence: "PointOne, the time entry startup, has raised a $16m Series A, led by 8VC, with continued participation from Bessemer Venture Partners, General Catalyst, and Y Combinator."
  },
  {
    firmSlug: "8vc", company: "Edra",
    announcedDate: "2026-03-18", datePrecision: "day", round: "Series A",
    sector: "Enterprise AI Agents",
    sectorEvidence: "Edra raises $30M Series A to turn enterprise data into self-improving AI agents",
    role: "participant",
    coInvestors: ["Sequoia Capital", "A*"],
    sourceUrl: "https://tech.eu/2026/03/19/edra-raises-309m-series-a-to-turn-enterprise-data-into-self-improving-ai-agents/", sourceType: "reputable-press",
    evidence: "Today, startup Edra announced $30 million Series A led by Sequoia, which included investment from 8VC and A*z."
  },
  {
    firmSlug: "8vc", company: "Outset",
    announcedDate: "2025-06-11", datePrecision: "day", round: "Series A",
    sector: "Market Research Software",
    sectorEvidence: "Outset, the first AI-moderated research platform providing the scale and speed of a survey with the depth of a one-to-one interview",
    role: "lead",
    coInvestors: ["Future Back Ventures by Bain & Company", "Y Combinator", "Adverb Ventures", "Rebel Fund", "Genius Ventures", "Ritual Capital", "Alt Capital"],
    sourceUrl: "https://www.globenewswire.com/news-release/2025/06/11/3097668/0/en/Startup-Outset-Raises-17M-Series-A-to-Help-Enterprises-Scale-Accelerate-Customer-Research-with-AI-Agent-led-Interviews.html", sourceType: "press-release",
    evidence: "Outset, the first AI-moderated research platform providing the scale and speed of a survey with the depth of a one-to-one interview, announced today that it has raised a $17M Series A round to bring AI-led research to Fortune 500 enterprises. The round was led by 8VC, with participation from new investor Future Back Ventures by Bain & Company and existing investors Y Combinator, Adverb Ventures, Rebel Fund, Genius Ventures, Ritual Capital, and Alt Capital."
  },
  {
    firmSlug: "y-combinator", company: "Lemma",
    announcedDate: "2026-08-13", datePrecision: "day", round: "pre-seed round",
    sector: "AI Observability",
    sectorEvidence: "Lemma, a monitoring tool that helps engineering teams catch silent AI agent failures in production",
    role: "participant",
    coInvestors: ["Matrix", "Liquid 2 Ventures", "Vermilion Cliffs Ventures", "Irregular Expressions", "Cervin Ventures", "Comma Capital", "Position Ventures", "Eight Capital"],
    sourceUrl: "https://www.globenewswire.com/news-release/2026/08/13/3344773/0/en/2-3m-pre-seed-for-lemma-backed-by-matrix-yc-openai-xai-operators-to-fix-silent-ai-agent-failures.html", sourceType: "company-announcement",
    evidence: "Lemma, a monitoring tool that helps engineering teams catch silent AI agent failures in production, today announced a $2.3 million pre-seed round. ... The round includes participation from Matrix, Y Combinator, Liquid 2 Ventures, Vermilion Cliffs Ventures, Irregular Expressions, Cervin Ventures, Comma Capital, Position Ventures, and Eight Capital, plus angels and operators from OpenAI, xAI, Meta, and DoorDash."
  },
  {
    firmSlug: "y-combinator", company: "Blacksmith",
    announcedDate: "2026-08-12", datePrecision: "day", round: "Series B",
    sector: "Developer Tools",
    sectorEvidence: "Blacksmith helps companies build, test, and verify software before it reaches production.",
    role: "participant",
    coInvestors: ["Peak XV Partners", "GV"],
    sourceUrl: "https://techcrunch.com/2026/08/12/blacksmiths-valuation-jumps-10x-to-550m-as-ai-coding-fuels-software-validation/", sourceType: "reputable-press",
    evidence: "The Series B, led by Peak XV Partners, values Blacksmith at $550 million, up from the $60 million valuation it was assigned when it raised a $10 million Series A less than a year ago. Existing investors GV and Y Combinator also participated, bringing the startup's total funding to $58.5 million."
  },
  {
    firmSlug: "y-combinator", company: "Naïve",
    announcedDate: "2026-08-06", datePrecision: "day", round: "Series A",
    sector: "Business Infrastructure",
    sectorEvidence: "Naïve supplies a prompt that developers can provide to tools like Cursor, Claude Code, or Codex, which can connect to the company's API to provision the infrastructure to set up a business.",
    role: "participant",
    coInvestors: ["Nexus Venture Partners", "Zetta", "Liquid 2", "Gokul Rajaram", "Tim Zheng", "JD Sherman"],
    sourceUrl: "https://techcrunch.com/2026/08/06/naive-raises-28-5m-to-automate-the-grunt-work-of-setting-up-and-running-a-company/", sourceType: "reputable-press",
    evidence: "Naïve has now raised $28.5 million in a Series A funding round led by Nexus Venture Partners. ... Y Combinator, Zetta, Liquid 2 and angel investors including Gokul Rajaram, Apollo.io co-founder Tim Zheng, and former HubSpot COO JD Sherman also participated in the Series A."
  },
  {
    firmSlug: "y-combinator", company: "HappyRobot",
    announcedDate: "2026-08-04", datePrecision: "day", round: "Series C",
    sector: "Enterprise AI Agents",
    sectorEvidence: "Its platform enables organizations to build, deploy, and manage AI agents that automate complex operational workflows across voice, email, documents, and the web.",
    role: "participant",
    coInvestors: ["Prysm Capital", "Eurazeo", "a16z", "Base10", "Koch Disruptive Technologies", "Orange", "T.Capital (Deutsche Telekom)", "Bankinter", "Endeavor Catalyst", "Kfund", "Wave-X"],
    sourceUrl: "https://www.businesswire.com/news/home/20260804192350/en/HappyRobot-Raises-$150-Million-Series-C-to-Build-Enterprise-Superintelligence", sourceType: "company-announcement",
    evidence: "HappyRobot, the company putting AI agents to work across complex enterprise operations, today announced it has raised $150 million in Series C funding led by Prysm Capital and co-led by Eurazeo. ... Existing investors a16z, Base10, Y Combinator are doubling down with participation from strategics like Koch Disruptive Technologies (KDT), Orange, and T.Capital (Deutsche Telekom), Bankinter, Endeavor Catalyst, Kfund and Wave-X."
  },
  {
    firmSlug: "y-combinator", company: "Terminal",
    announcedDate: "2026-07-29", datePrecision: "day", round: "Series A",
    sector: "Insurtech",
    sectorEvidence: "Terminal offers a universal application programming interface (API) to connect insurance products and fleet software with telematics data.",
    role: "participant",
    coInvestors: ["Battery Ventures", "Wayfinder Ventures", "Penske Transportation Solutions", "Intact Private Capital"],
    sourceUrl: "https://betakit.com/y-combinator-grad-terminal-raises-20-million-usd-series-a-round/", sourceType: "reputable-press",
    evidence: "Y Combinator and Wayfinder Ventures also returned to invest in the round, while Battery Ventures general partner Marcus Ryu will join Terminal's board."
  },
  {
    firmSlug: "y-combinator", company: "Weave",
    announcedDate: "2026-07-28", datePrecision: "day", round: "Series A",
    sector: "Engineering Analytics",
    sectorEvidence: "Weave, the engineering-intelligence layer for the AI era",
    role: "participant",
    coInvestors: ["Standard Capital", "Moonfire", "Burst Capital", "IrregEx", "the Agent Fund"],
    sourceUrl: "https://www.webwire.com/ViewPressRel.asp?aId=358199", sourceType: "company-announcement",
    evidence: "Weave, the engineering-intelligence layer for the AI era, today announced a $13.5 million Series A led by Standard Capital, along with YCombinator, Moonfire, Burst Capital, IrregEx and the Agent Fund."
  },
  {
    firmSlug: "softbank-vision-fund", company: "Zenity",
    announcedDate: "2026-08-03", datePrecision: "day", round: "Series C",
    sector: "Cybersecurity",
    sectorEvidence: "Zenity, the AI security and governance platform purpose-built for AI agents",
    role: "participant",
    coInvestors: ["Norwest", "Qumra Capital", "Hitachi Ventures", "LG Technology Ventures", "Vertex Ventures", "Third Point Ventures", "DTCP", "Intel Capital"],
    sourceUrl: "https://www.businesswire.com/news/home/20260803963850/en/Zenity-Raises-$125-Million-to-Secure-the-Era-of-1-Billion-AI-Agents", sourceType: "press-release",
    evidence: "Zenity, the AI security and governance platform purpose-built for AI agents, today announced a $125 million Series C led by Norwest. ... New investors Qumra Capital, SoftBank Vision Fund 2, Hitachi Ventures and LG Technology Ventures joined the round, alongside existing investors Vertex Ventures, Third Point Ventures, DTCP and Intel Capital."
  },
  {
    firmSlug: "softbank-vision-fund", company: "Helion",
    announcedDate: "2026-06-04", datePrecision: "day", round: "Series G",
    sector: "Fusion Energy",
    sectorEvidence: "Helion, a Washington-based fusion energy company, announced a $465 million Series G investment round to accelerate commercial deployment of fusion, scale manufacturing capacity, and expand the company's ability to deliver clean electricity to customers.",
    role: "participant",
    coInvestors: ["Thrive Capital", "Alta Park Capital", "Anti Fund", "BoxGroup", "Lux Capital", "Peak XV Partners", "Bill Ford", "Capricorn Technology Impact Funds", "Lightspeed Venture Partners", "Mithril Capital", "Good Ventures Foundation"],
    sourceUrl: "https://www.businesswire.com/news/home/20260604740624/en/Helion-Raises-$465-Million-Series-G-Funding-Round-to-Meet-Surging-Global-Demand-for-Power", sourceType: "press-release",
    evidence: "Helion, a Washington-based fusion energy company, announced a $465 million Series G investment round... The raise was led by Thrive Capital, with participation from additional new investors, including Alta Park Capital, Anti Fund, BoxGroup, Lux Capital, Peak XV Partners, and Ford Motor Company Executive Chairman Bill Ford, plus existing investors, including Capricorn Technology Impact Funds, Lightspeed Venture Partners, Mithril Capital, Dustin Moskovitz through Good Ventures Foundation, SoftBank Vision Fund 2, and a university endowment fund."
  },
  {
    firmSlug: "softbank-vision-fund", company: "OpenAI",
    announcedDate: "2026-02-27", datePrecision: "day", round: null,
    sector: "Artificial Intelligence",
    sectorEvidence: "OpenAI Group PBC operates as a public benefit corporation with the same mission as the OpenAI Foundation-namely, to ensure that artificial general intelligence (AGI) benefits all of humanity.",
    role: null,
    coInvestors: [],
    sourceUrl: "https://group.softbank/en/news/press/20260227", sourceType: "firm-announcement",
    evidence: "Follow-on Investments in OpenAI ... to make follow-on investments of USD 30.0 billion via SoftBank Vision Fund 2 ... Name of the investee: OpenAI Group PBC"
  },
  {
    firmSlug: "softbank-vision-fund", company: "Wayve",
    announcedDate: "2026-02-25", datePrecision: "day", round: "Series D",
    sector: "Autonomous Driving",
    sectorEvidence: "Wayve is the leader in embodied AI for autonomous driving",
    role: "lead",
    coInvestors: ["Eclipse", "Balderton", "Ontario Teachers' Pension Plan", "Baillie Gifford", "British Business Bank", "Icehouse Ventures", "Schroders Capital"],
    sourceUrl: "https://wayve.ai/press/series-d/", sourceType: "company-announcement",
    evidence: "The round was led by Eclipse, Balderton and SoftBank Vision Fund 2, and brings in new investment from Ontario Teachers' Pension Plan, Baillie Gifford, British Business Bank, Icehouse Ventures, Schroders Capital and other global institutional investors."
  },
  {
    firmSlug: "softbank-vision-fund", company: "Emergent",
    announcedDate: "2026-01-20", datePrecision: "day", round: "Series B",
    sector: "AI Software Development",
    sectorEvidence: "The fast-growing AI software creation platform that helps anyone build full-stack, production-ready web and mobile applications",
    role: "lead",
    coInvestors: ["Khosla Ventures", "Prosus", "Lightspeed", "Together", "Y Combinator"],
    sourceUrl: "https://www.businesswire.com/news/home/20260120852493/en/Emergent-Raises-$70M-from-Khosla-Ventures-and-SoftBank-Vision-Fund-2-to-Enable-Anyone-to-Turn-Ideas-into-Monetizable-Software", sourceType: "press-release",
    evidence: "Emergent has raised $70 million in Series B funding from Khosla Ventures and SoftBank Vision Fund 2, with participation from Prosus, Lightspeed, Together, and Y Combinator."
  },
  {
    firmSlug: "softbank-vision-fund", company: "Classiq",
    announcedDate: "2025-07-30", datePrecision: "day", round: "Series C",
    sector: "Quantum Computing",
    sectorEvidence: "a high-level quantum development platform (IDE, compiler and OS) that automates quantum programming",
    role: null,
    coInvestors: ["CDP Venture Capital"],
    sourceUrl: "https://www.globenewswire.com/news-release/2025/07/30/3123970/0/en/SoftBank-Vision-Fund-2-Makes-Strategic-Investment-in-Classiq-Expanding-Series-C.html", sourceType: "press-release",
    evidence: "Classiq announced an investment by SoftBank Vision Fund 2 with participation from CDP Venture Capital, Italy's largest venture capital operator."
  },
  {
    firmSlug: "threshold-ventures", company: "Bluefish",
    announcedDate: "2026-04-14", datePrecision: "day", round: "Series B",
    sector: "Marketing Technology",
    sectorEvidence: "Since its launch in 2024, Bluefish has quickly become the go-to platform for large brands building enterprise-grade Agentic Marketing capabilities to gain visibility and influence over how their products are portrayed to consumers by AI tools like ChatGPT and Google Gemini.",
    role: "lead",
    coInvestors: ["NEA", "Amex Ventures", "TIAA Ventures", "Salesforce Ventures", "Bloomberg Beta"],
    sourceUrl: "https://www.bluefishai.com/blog/bluefish-raises-43-million-series-b-to-power-agentic-marketing-for-the-fortune-500", sourceType: "company-announcement",
    evidence: "Bluefish, the Agentic Marketing Platform (AMP) for Fortune 500 brands, announced the close of $43 million Series B growth financing co-led by Threshold Ventures and NEA with participation from multiple enterprise investors including Amex Ventures, TIAA Ventures, Salesforce Ventures, and continued participation from Bloomberg Beta."
  },
  {
    firmSlug: "threshold-ventures", company: "Sequen",
    announcedDate: "2026-03-17", datePrecision: "day", round: "Series A",
    sector: "Enterprise Software",
    sectorEvidence: "Sequen AI delivers dynamic, in-session personalization for enterprise consumer companies, turning relevance into a revenue engine that drives material business outcomes.",
    role: "lead",
    coInvestors: ["White Star Capital", "Greycroft"],
    sourceUrl: "https://www.businesswire.com/news/home/20260317105541/en/Sequen-Raises-$16M-Series-A-to-Bring-Sub-second-In-session-Personalization-to-Enterprise-Consumer-Companies", sourceType: "press-release",
    evidence: "Sequen today announced a $16 million Series A funding round, bringing total funding to $22 million to bring sub-second in-session personalization and behavior optimization to the enterprise. The round was co-led by White Star Capital and Threshold Ventures, with participation from all existing investors including Greycroft, which led the company's seed round."
  },
  {
    firmSlug: "threshold-ventures", company: "Inertia",
    announcedDate: "2026-02-11", datePrecision: "day", round: "Series A",
    sector: "Fusion Energy",
    sectorEvidence: "Inertia is the commercial fusion energy company.",
    role: "participant",
    coInvestors: ["Bessemer Venture Partners", "GV (Google Ventures)", "Modern Capital", "Neo", "Uncork Capital", "Long Journey Ventures", "WndrCo", "IQT"],
    sourceUrl: "https://www.globenewswire.com/news-release/2026/02/11/3236274/0/en/Inertia-raises-450-million-to-commercialize-the-only-proven-fusion-science.html", sourceType: "press-release",
    evidence: "Inertia raises $450 million to commercialize the only proven fusion science ... The Series A round was led by Bessemer Venture Partners, with participation from additional firms including GV (Google Ventures), Modern Capital, Threshold Ventures, and more."
  },
  {
    firmSlug: "threshold-ventures", company: "Adaption Labs",
    announcedDate: "2026-02-06", datePrecision: "day", round: "Seed",
    sector: "Artificial Intelligence",
    sectorEvidence: "Adaption Labs, a San Francisco, CA-based adaptive intelligence startup",
    role: "participant",
    coInvestors: ["Emergence Capital Partners", "Mozilla Ventures", "Fifty Years", "Alpha Intelligence Capital", "E14 Fund", "Neo"],
    sourceUrl: "https://www.finsmes.com/2026/02/adaption-labs-raises-50m-in-seed-funding.html", sourceType: "reputable-press",
    evidence: "Adaption Labs, a San Francisco, CA-based adaptive intelligence startup, raised $50m in seed funding. The round was led by Emergence Capital Partners with participation from Mozilla Ventures, Fifty Years, Threshold Ventures, Alpha Intelligence Capital, E14 Fund, and Neo."
  },
  {
    firmSlug: "threshold-ventures", company: "Spellbook",
    announcedDate: "2025-10-09", datePrecision: "day", round: "Series B",
    sector: "Legal Tech",
    sectorEvidence: "AI solution for transactional lawyers, serving nearly 4,000 law firms and in-house legal teams across 80 countries",
    role: "participant",
    coInvestors: ["Khosla Ventures", "Inovia Capital", "Bling Capital", "Moxxie Ventures", "Path Ventures", "Jean-Michel Lemieux"],
    sourceUrl: "https://www.lawnext.com/2025/10/spellbook-raises-50m-series-b-to-expand-ai-contract-review-platform.html", sourceType: "reputable-press",
    evidence: "Spellbook, often described as 'Cursor for contracts,' today announced a $50 million USD Series B funding round led by Keith Rabois, Managing Director at Khosla Ventures, with participation from Threshold Ventures, and existing investors Inovia Capital, Bling Capital, Moxxie Ventures, Path Ventures and Jean-Michel Lemieux."
  },
  {
    firmSlug: "threshold-ventures", company: "Attuned Intelligence",
    announcedDate: "2025-10-07", datePrecision: "day", round: "Seed",
    sector: "Healthcare AI",
    sectorEvidence: "Attuned Intelligence enables hospitals and health systems to answer every patient call with up to 70% automation and real-time supervision.",
    role: "lead",
    coInvestors: ["Radical Ventures"],
    sourceUrl: "https://www.finsmes.com/2025/10/attuned-intelligence-raises-13m-in-seed-funding.html", sourceType: "reputable-press",
    evidence: "Attuned Intelligence, an Orlando, FL-based healthcare AI company, raised $13M in Seed funding. The round was led by Radical Ventures and Threshold Ventures."
  },
  {
    firmSlug: "dcvc", company: "Impulse Space",
    announcedDate: "2026-06-02", datePrecision: "day", round: "Series D",
    sector: "Space",
    sectorEvidence: "the in-space mobility leader ... accelerating our future beyond Earth beginning with its fleet of cost-effective, high-performance space vehicles",
    role: "participant",
    coInvestors: [],
    sourceUrl: "https://www.dcvc.com/news-insights/dcvc-2026-q2-update/", sourceType: "firm-announcement",
    evidence: "Impulse Space raised $500 million in a Series D, joined by DCVC, at a $4.26 billion post-money valuation"
  },
  {
    firmSlug: "dcvc", company: "Recursive Superintelligence",
    announcedDate: "2026-05-13", datePrecision: "day", round: null,
    sector: "Artificial Intelligence",
    sectorEvidence: "Recursive Superintelligence raises $650M to build self-improving AI models",
    role: "participant",
    coInvestors: [],
    sourceUrl: "https://www.dcvc.com/news-insights/dcvc-2026-q2-update/", sourceType: "firm-announcement",
    evidence: "Recursive Superintelligence emerged from stealth with $650 million in funding (joined by DCVC)"
  },
  {
    firmSlug: "dcvc", company: "Quantum Motion",
    announcedDate: "2026-05-07", datePrecision: "day", round: "Series C",
    sector: "Quantum Computing",
    sectorEvidence: "Quantum Motion is building utility-scale quantum computers using industry-standard silicon transistors",
    role: "lead",
    coInvestors: ["Kembara", "British Business Bank", "Firgun", "Oxford Science Enterprises", "Inkef", "Bosch Ventures", "Porsche Automobil Holding SE", "Parkwalk Advisors"],
    sourceUrl: "https://www.uktechnews.info/2026/05/07/quantum-motion-secures-117-5-million-series-c-investment-co-led-by-dcvc-and-kembara/", sourceType: "reputable-press",
    evidence: "DCVC led this investment in Quantum Motion because silicon is the foundation that scales, and this team is building on the CMOS advantage to turn quantum from a demonstration into a commercial success story."
  },
  {
    firmSlug: "dcvc", company: "Kanvas Biosciences",
    announcedDate: "2026-05-06", datePrecision: "day", round: "Series A",
    sector: "Computational Biology",
    sectorEvidence: "moving the field beyond descriptive profiling of the microbiome to translating comprehensive biochemical insights into clinically useful products",
    role: "lead",
    coInvestors: [],
    sourceUrl: "https://www.dcvc.com/news-insights/kanvas-makes-the-microbiome-druggable-and-the-implications-are-massive/", sourceType: "firm-announcement",
    evidence: "DCVC is so excited about the cascade of recent developments at Kanvas Biosciences ... DCVC is thrilled to be co-leading [the] $48 million Series A funding round"
  },
  {
    firmSlug: "dcvc", company: "Latus Bio",
    announcedDate: "2026-05-04", datePrecision: "day", round: "Series A",
    sector: "Biotech",
    sectorEvidence: "Latus is a biotechnology company dedicated to addressing devastating CNS and peripheral diseases via innovative and scalable gene therapies.",
    role: "participant",
    coInvestors: ["8VC", "BioAdvance", "Benjamin Franklin Technology Partners", "Modi Ventures", "Gaingels", "Hatch BioFund"],
    sourceUrl: "https://www.biospace.com/press-releases/latus-bio-announces-97-million-series-a-financing-to-expand-the-reach-of-gene-therapy-to-larger-populations", sourceType: "press-release",
    evidence: "Latus Bio, Inc. (Latus), a biotechnology company engineering scalable gene therapies for broader patient populations, today announced the closing of a $97 million Series A financing ... The financing includes a $43 million extension led by 8VC, with participation from existing investors DCVC Bio, BioAdvance, Benjamin Franklin Technology Partners, Modi Ventures, Gaingels, and Hatch BioFund."
  },
  {
    firmSlug: "dcvc", company: "Sidewinder Therapeutics",
    announcedDate: "2026-04-08", datePrecision: "day", round: "Series B",
    sector: "Biotech",
    sectorEvidence: "Sidewinder Therapeutics, a biopharmaceutical company pioneering the development of next-generation bispecific ADCs (antibody-drug conjugates) for the treatment of cancer",
    role: "participant",
    coInvestors: ["Frazier Life Sciences", "Novartis Venture Fund", "OrbiMed", "Life Sciences at Goldman Sachs Alternatives", "Samsara BioCapital", "Longwood Fund", "Astellas Venture Management", "Alexandria Venture Investments"],
    sourceUrl: "https://www.biospace.com/press-releases/sidewinder-therapeutics-announces-137-million-series-b-financing-to-advance-precision-bispecific-adcs-into-clinical-development-for-cancer", sourceType: "press-release",
    evidence: "Sidewinder Therapeutics, a biopharmaceutical company pioneering the development of next-generation bispecific ADCs (antibody-drug conjugates) for the treatment of cancer, today announced the closing of an oversubscribed $137 million Series B financing. The round was co-led by Frazier Life Sciences and Novartis Venture Fund, with participation from the sole Series A investor OrbiMed as well as new investors including Life Sciences at Goldman Sachs Alternatives, DCVC Bio, Samsara BioCapital, Longwood Fund, Astellas Venture Management and Alexandria Venture Investments."
  },
  {
    firmSlug: "initialized-capital", company: "Arcturus",
    announcedDate: "2026-06-30", datePrecision: "day", round: "seed",
    sector: "Advanced Materials",
    sectorEvidence: "Arcturus is developing a new class of metals: copper and aluminum infused with carbon nanomaterials like graphene and carbon nanotubes, using a proprietary laser fabrication process.",
    role: "lead",
    coInvestors: ["Toyota Ventures", "Breakthrough Energy Discovery", "1517", "Wireframe Ventures"],
    sourceUrl: "https://blog.initialized.com/2026/06/the-ai-world-requires-new-materials/", sourceType: "firm-announcement",
    evidence: "That is why I led Initialized's investment in Arcturus, which is emerging from stealth today with $8M in seed funding, joined by Toyota Ventures, Breakthrough Energy Discovery, 1517, and Wireframe Ventures."
  },
  {
    firmSlug: "initialized-capital", company: "Enhanced Radar",
    announcedDate: "2026-05-13", datePrecision: "day", round: null,
    sector: "Aviation Safety",
    sectorEvidence: "the world's most advanced voice models for understanding air traffic control communications",
    role: "lead",
    coInvestors: [],
    sourceUrl: "https://blog.initialized.com/2026/05/initialized-leads-7m-round-for-enhanced-radar/", sourceType: "firm-announcement",
    evidence: "Initialized Leads $7M Round for Enhanced Radar"
  },
  {
    firmSlug: "initialized-capital", company: "10x Science",
    announcedDate: "2026-04-22", datePrecision: "day", round: "seed",
    sector: "Life Sciences AI",
    sectorEvidence: "10x Science, which builds frontier AI for molecular-level protein characterization across the life sciences",
    role: "lead",
    coInvestors: ["Y Combinator", "Civilization Ventures", "Founder Factor"],
    sourceUrl: "https://www.prnewswire.com/news-releases/10x-science-raises-4-8m-seed-to-build-ai-that-understands-proteins-at-the-molecular-level-302750622.html", sourceType: "press-release",
    evidence: "10x Science, which builds frontier AI for molecular-level protein characterization across the life sciences, today announced the closing of its $4.8M seed round led by Initialized Capital."
  },
  {
    firmSlug: "initialized-capital", company: "Alien",
    announcedDate: "2026-04-01", datePrecision: "day", round: "pre-seed",
    sector: "Identity Infrastructure",
    sectorEvidence: "building the trust infrastructure for the agentic economy",
    role: "lead",
    coInvestors: ["Finality", "Mantaray", "Commonmetal", "Scenius", "Lvna Capital", "Pioneer"],
    sourceUrl: "https://siliconangle.com/2026/04/01/alien-raises-7-1m-build-identity-infrastructure-humans-ai-agents/", sourceType: "reputable-press",
    evidence: "Alien's funding round included Initialized Capital, Finality, Mantaray, Commonmetal, Scenius, Lvna Capital, Pioneer and others."
  },
  {
    firmSlug: "initialized-capital", company: "The Bland Company",
    announcedDate: "2026-02", datePrecision: "month", round: "pre-seed",
    sector: "Alternative Proteins",
    sectorEvidence: "turns underused agricultural byproducts (like rice bran) into cost-efficient, high-performance plant proteins for a wide array of use cases",
    role: "lead",
    coInvestors: ["Entrepreneurs First", "Alumni Ventures", "Transpose Platform", "Behind Genius Ventures"],
    sourceUrl: "https://www.greenqueen.com.hk/the-bland-company-functional-plant-proteins-egg-replacer-funding/", sourceType: "reputable-press",
    evidence: "London-based The Bland Company has secured $2.7M in a pre-seed funding round led by Initialized Capital, with participation from Entrepreneurs First, Alumni Ventures, Transpose Platform and Behind Genius Ventures."
  },
  {
    firmSlug: "initialized-capital", company: "Orbital Operations",
    announcedDate: "2025-08-07", datePrecision: "day", round: "seed",
    sector: "Space",
    sectorEvidence: "A high-thrust, cryogenic platform that can loiter on-orbit for years at a time, as a tool for interception and space domain awareness",
    role: "lead",
    coInvestors: ["Harpoon Ventures", "DTX Ventures", "Rebel Fund", "TRAC VC", "Karman Ventures", "Immad Akhund"],
    sourceUrl: "https://payloadspace.com/orbital-operations-raises-8-8m-for-high-thrust-orbital-vehicle/", sourceType: "reputable-press",
    evidence: "After emerging from Y Combinator in the spring, Orbital Operations raised an $8.8M seed round led by Initialized Capital, with participation from Harpoon Ventures, DTX Ventures, Rebel Fund, TRAC VC, Karman Ventures, and investor Immad Akhund."
  },
  {
    firmSlug: "dell-technologies-capital", company: "Skan AI",
    announcedDate: "2026-08-12", datePrecision: "day", round: "Series C",
    sector: "Enterprise AI",
    sectorEvidence: "Process intelligence company Skan AI said today it raised $63 million in a Series C round to help further develop a platform that records how enterprise work actually gets done and feeds that record to artificial intelligence agents.",
    role: "lead",
    coInvestors: ["Cathay Innovation", "Citi Ventures", "Bloomberg Beta", "State Farm Ventures", "Wipro Ventures"],
    sourceUrl: "https://www.prnewswire.com/news-releases/skan-ai-raises-63-million-to-give-enterprise-ai-the-context-its-missing-how-work-actually-gets-done-302849114.html", sourceType: "press-release",
    evidence: "Skan AI, the context graph of work for enterprise AI, today announced $63 million in funding co-led by Cathay Innovation and Dell Technologies Capital, with participation from Citi Ventures, Bloomberg Beta, State Farm Ventures®, and Wipro Ventures."
  },
  {
    firmSlug: "dell-technologies-capital", company: "Fly.io",
    announcedDate: "2026-07-24", datePrecision: "day", round: "Series D",
    sector: "AI Infrastructure",
    sectorEvidence: "Fly.io builds computers for agents - connected infrastructure designed for AI agents and the applications they build. Unlike disposable execution environments, Fly.io gives agents real computers that have durable disk drives, secure connectivity to other systems, and the ability to scale to millions of instances to power production AI applications.",
    role: "lead",
    coInvestors: ["Intel Capital", "Andreessen Horowitz", "EQT", "Geodesic", "Y Combinator"],
    sourceUrl: "https://www.intelcapital.com/fly-io-doubles-down-on-computers-for-agents-with-25m-to-deliver-the-next-generation-of-ai-infrastructure/", sourceType: "press-release",
    evidence: "To accelerate this opportunity, Fly.io also announced $25 million in Series D funding co-led by Dell Technologies Capital and Intel Capital, with participation from Andreessen Horowitz, EQT, Geodesic, and YC."
  },
  {
    firmSlug: "dell-technologies-capital", company: "Prime Intellect",
    announcedDate: "2026-07-08", datePrecision: "day", round: "Series A",
    sector: "AI Training Infrastructure",
    sectorEvidence: "Prime Intellect, a San Francisco, California-based developer of an open-source decentralized AI training and reinforcement learning infrastructure platform",
    role: "participant",
    coInvestors: ["Radical Ventures", "NVIDIA Ventures", "Intel Capital", "Iconiq"],
    sourceUrl: "https://techcrunch.com/2026/07/08/prime-intellect-raises-130m-series-a-to-help-enterprises-build-their-own-ai-agents/", sourceType: "reputable-press",
    evidence: "The massive round was led by Radical Ventures, with participation from Nvidia Ventures, Intel Capital, Dell Technologies Capital, Iconiq, and a long list of angel investors who are founders of notable companies, including Aravind Srinivas (Perplexity), Aaron Levie (Box), Winston Weinberg (Harvey), Jeff Wang (Cognition), and Brendan Foody (Mercor)."
  },
  {
    firmSlug: "dell-technologies-capital", company: "Bland",
    announcedDate: "2026-06-16", datePrecision: "day", round: "Series C",
    sector: "Voice AI",
    sectorEvidence: "Bland is a voice AI platform for deploying production-grade AI agents across phone, SMS, and chat, enabling companies to automate customer interactions.",
    role: "lead",
    coInvestors: ["HubSpot Ventures", "Archerman Capital", "Tribeca Venture Partners", "Emergence Capital", "Upfront Ventures", "Scale Venture Partners", "Y Combinator"],
    sourceUrl: "https://fortune.com/2026/06/16/voice-ai-bland-50-million-after-being-rejected-by-180-investors/", sourceType: "reputable-press",
    evidence: "Bland, the San Francisco voice AI company Granet co-founded in 2023 with Sobhan Nejad, closed a $50 million Series C led by Dell Technologies Capital, Fortune learned exclusively."
  },
  {
    firmSlug: "dell-technologies-capital", company: "Limitless Labs",
    announcedDate: "2026-06-16", datePrecision: "day", round: "Series A",
    sector: "Manufacturing Software",
    sectorEvidence: "Limitless Labs (formerly LimitlessCNC), the world's first Agentic Physical AI platform for CAD/CAM (Computer-Aided Design and Computer-Aided Manufacturing) in mechanical manufacturing",
    role: "lead",
    coInvestors: ["Square Peg", "Grove Ventures", "Meron Capital", "Kinetica"],
    sourceUrl: "https://ca.finance.yahoo.com/news/limitless-labs-raises-20m-series-130000187.html", sourceType: "press-release",
    evidence: "Limitless Labs (formerly LimitlessCNC), the world's first Agentic Physical AI platform for CAD/CAM (Computer-Aided Design and Computer-Aided Manufacturing) in mechanical manufacturing, today announced a $20 million Series A round co-led by Dell Technologies Capital and Square Peg, with participation from Grove Ventures, Meron Capital, and Kinetica."
  },
  {
    firmSlug: "dell-technologies-capital", company: "Distyl AI",
    announcedDate: "2025-09-23", datePrecision: "day", round: null,
    sector: "Enterprise AI",
    sectorEvidence: "Distyl works with Fortune 500 leaders in healthcare, telecommunications, insurance, manufacturing, and financial services to deliver measurable outcomes today while preparing them to re-architect their business models for the AI era.",
    role: "participant",
    coInvestors: ["Lightspeed Venture Partners", "Khosla Ventures", "DST Global", "Coatue"],
    sourceUrl: "https://www.prnewswire.com/news-releases/distyl-ai-raises-175-million-at-1-8-billion-valuation-to-help-global-enterprises-become-ai-native-302564270.html", sourceType: "press-release",
    evidence: "Distyl AI, the startup helping blue-chip leaders worldwide build the AI-native enterprises of the future, today announced a $175 million funding round at a $1.8 billion valuation, with participation from Lightspeed Venture Partners, Khosla Ventures, DST Global, Coatue, and Dell Technologies Capital."
  },
  {
    firmSlug: "tcv", company: "Onyx Security",
    announcedDate: "2026-07-29", datePrecision: "day", round: "Series B",
    sector: "Cybersecurity",
    sectorEvidence: "Onyx Security, the AI control company, announced a $113 million Series B funding round led by Bessemer Venture Partners",
    role: "participant",
    coInvestors: ["Bessemer Venture Partners", "Cyberstarts", "Conviction", "FirstMark", "Vintage", "QuantumLight", "G Squared"],
    sourceUrl: "https://www.businesswire.com/news/home/20260729713522/en/", sourceType: "press-release",
    evidence: "Onyx Security, the AI control company, announced a $113 million Series B funding round led by Bessemer Venture Partners, with participation from Cyberstarts, TCV, Conviction, FirstMark, Vintage, QuantumLight and G Squared."
  },
  {
    firmSlug: "tcv", company: "Fireworks",
    announcedDate: "2026-07-16", datePrecision: "day", round: "Series D",
    sector: "AI Infrastructure",
    sectorEvidence: "Fireworks, the platform for specialized intelligence, enabling companies like Uber and Shopify to train and serve custom models",
    role: "lead",
    coInvestors: ["Atreides Management", "Index Ventures", "Evantic", "Lightspeed Venture Partners", "NVIDIA", "20VC", "Bessemer Venture Partners", "Insight Partners", "Lone Pine Capital", "Menlo Ventures", "Operator Collective", "Ontario Teachers' Pension Plan", "Original Capital", "Prysm Capital", "Quantum Capital", "TIME Ventures"],
    sourceUrl: "https://finance.yahoo.com/technology/ai/articles/fireworks-raises-1-5-billion-130000636.html", sourceType: "press-release",
    evidence: "Fireworks, the platform for specialized intelligence, enabling companies like Uber and Shopify to train and serve custom models, today announced a $1.505 billion Series D round at a $17.5 billion valuation. The round was led by Atreides Management, Index Ventures, and TCV, with participation from existing investors Evantic, Lightspeed Venture Partners, and NVIDIA."
  },
  {
    firmSlug: "tcv", company: "ICEYE",
    announcedDate: "2026-06-09", datePrecision: "day", round: "Series F",
    sector: "Space",
    sectorEvidence: "ICEYE, the world leader in sovereign intelligence from space",
    role: "participant",
    coInvestors: ["General Atlantic", "Solidium", "Tesi", "Varma", "Ilmarinen", "Lifeline Ventures", "Nokia", "Qatar Investment Authority"],
    sourceUrl: "https://www.iceye.com/newsroom/press-releases/iceye-leads-a-new-era-of-sovereign-intelligence-from-space-with-1b-funding-round", sourceType: "company-announcement",
    evidence: "ICEYE, the world leader in sovereign intelligence from space, has raised EUR 450 million (USD 520 million) in a primary Series F funding round led by General Atlantic, at a valuation of over EUR 10 billion (USD 12 billion). Additional investors include Solidium, Tesi, Varma, Ilmarinen, Lifeline Ventures, as well as Nokia, from Finland, Qatar Investment Authority (QIA) and TCV."
  },
  {
    firmSlug: "tcv", company: "Corgi",
    announcedDate: "2026-05-28", datePrecision: "day", round: "Series B1",
    sector: "Insurtech",
    sectorEvidence: "Corgi is a full-stack insurance platform focused on rebuilding insurance and financial infrastructure. The company provides full-stack underwriting, claims handling, and embedded insurance solutions designed to make commercial coverage faster, more flexible, and operationally efficient.",
    role: "lead",
    coInvestors: ["Prime Capital", "Zone 2 Ventures", "Oliver Jung", "Leblon Capital", "Kindred Ventures", "Quadri Ventures", "First Order Fund", "Vocal Ventures", "Nordstar", "GSBackers", "Repeat Ventures", "8188 Capital"],
    sourceUrl: "https://www.corgi.insure/press-releases/series-b1", sourceType: "company-announcement",
    evidence: "Today, Corgi announced a $106 million Series B1 round, led by TCV with participation from Prime Capital, Zone 2 Ventures, Oliver Jung, Leblon Capital, Kindred Ventures, Quadri Ventures, First Order Fund, Vocal Ventures, Nordstar, GSBackers, Repeat Ventures, 8188 Capital, and other strategic investors."
  },
  {
    firmSlug: "tcv", company: "Mercury",
    announcedDate: "2026-05-20", datePrecision: "day", round: "Series D",
    sector: "Fintech",
    sectorEvidence: "Mercury, the technology company providing radically different banking*",
    role: "lead",
    coInvestors: ["Andreessen Horowitz", "Coatue", "CRV", "Sapphire Ventures", "Sequoia Capital", "Spark Capital"],
    sourceUrl: "https://www.businesswire.com/news/home/20260520511817/en/Mercury-Raises-$200-Million-Series-D-at-$5.2B-Valuation", sourceType: "press-release",
    evidence: "Mercury, the technology company providing radically different banking*, today announced a $200 million Series D at a $5.2B valuation, led by TCV."
  },
  {
    firmSlug: "tcv", company: "Corgi",
    announcedDate: "2026-05-06", datePrecision: "day", round: "Series B",
    sector: "Insurtech",
    sectorEvidence: "Corgi announced today it has raised $160 million in Series B funding at a $1.3 billion valuation, advancing its mission to build the first AI-native, full-stack insurance platform for startups.",
    role: "lead",
    coInvestors: ["Oliver Jung", "Leblon Capital", "Kindred Ventures", "Repeat VC", "Zone 2 Ventures", "Audeo Ventures", "Quadri Ventures", "First Order Fund", "Vocal Ventures", "Maiora Ventures", "Nordstar", "Seven Stars Ventures", "Hexa Capital", "Alpha Square Group", "GSBackers", "OurCrowd", "Alumni Ventures", "Global Growth Fund"],
    sourceUrl: "https://finance.yahoo.com/sectors/technology/articles/corgi-raises-160-million-series-160000034.html", sourceType: "press-release",
    evidence: "Corgi announced today it has raised $160 million in Series B funding at a $1.3 billion valuation... The round was led by TCV, with participation from both existing and new investors including Oliver Jung, Leblon Capital, Kindred Ventures, Repeat VC, Zone 2 Ventures, Audeo Ventures, Quadri Ventures, First Order Fund, Vocal Ventures, Maiora Ventures, Nordstar, Seven Stars Ventures, Hexa Capital, Alpha Square Group, GSBackers, OurCrowd, Alumni Ventures, Global Growth Fund, and other strategic investors."
  },
  {
    firmSlug: "kleiner-perkins", company: "K2 Space",
    announcedDate: "2026-07-30", datePrecision: "day", round: "Series D",
    sector: "Space",
    sectorEvidence: "K2 Space, the leading manufacturer of big, high-power satellites, announced today a $500 million Series D funding round at a $6.8 billion valuation.",
    role: "lead",
    coInvestors: ["ICONIQ", "CapitalG", "Lightspeed", "Altimeter", "Spark Capital", "Sands Capital", "ARK Invest", "T. Rowe Price Associates"],
    sourceUrl: "https://www.prnewswire.com/news-releases/k2-space-raises-500m-series-d-at-6-8b-valuation-to-scale-large-high-power-satellites-302838793.html", sourceType: "press-release",
    evidence: "K2 Space, the leading manufacturer of big, high-power satellites, announced today a $500 million Series D funding round at a $6.8 billion valuation. Kleiner Perkins and ICONIQ led the round, with participation from CapitalG, Lightspeed, Altimeter, Spark Capital, Sands Capital, ARK Invest, T. Rowe Price Associates, Inc., and other existing investors."
  },
  {
    firmSlug: "kleiner-perkins", company: "CuspAI",
    announcedDate: "2026-07-20", datePrecision: "day", round: "Series B",
    sector: "AI for Materials Discovery",
    sectorEvidence: "CuspAI has raised $450 million in Series B funding to expand its artificial intelligence platform for discovering new materials.",
    role: "lead",
    coInvestors: ["New Enterprise Associates", "Bezos Expeditions", "Glade Brook Capital Partners", "Lux Capital", "AMD Ventures", "Tru Arrow Partners", "StepStone", "UK Sovereign AI Venture Fund", "Invest-NL", "John Doerr", "Temasek", "Basis Set Ventures", "Giant Ventures", "Touring Capital", "Prosus", "Phoenix Court", "Northzone"],
    sourceUrl: "https://pulse2.com/cuspai-raises-450-million-series-b-at-2-6-billion-valuation-to-discover-new-materials/", sourceType: "reputable-press",
    evidence: "CuspAI has raised $450 million in Series B funding to expand its artificial intelligence platform for discovering new materials. The financing values the British startup at approximately $2.6 billion. Kleiner Perkins and New Enterprise Associates co-led the round, with significant participation from Jeff Bezos' investment firm, Bezos Expeditions."
  },
  {
    firmSlug: "kleiner-perkins", company: "TerraFirma",
    announcedDate: "2026-07-14", datePrecision: "day", round: "Series A",
    sector: "Construction Robotics",
    sectorEvidence: "TerraFirma is a tech-enabled, vertically integrated construction company initially focused on robotic earthworks and site operations.",
    role: "lead",
    coInvestors: ["Bain Capital Ventures", "Glade Brook Capital Partners", "BANNER VC", "Saga Ventures", "Trust Ventures", "Definition", "PEAK6", "Magnetar Capital", "Ravelin Capital"],
    sourceUrl: "https://www.businesswire.com/news/home/20260714397606/en/TerraFirma-Raises-$115M-to-Accelerate-Construction-on-Earth-and-Beyond", sourceType: "press-release",
    evidence: "TerraFirma, a tech-enabled, vertically integrated construction company focused on critical infrastructure, today announced it has raised approximately $115 million, including a $100 million Series A led by Kleiner Perkins, with participation from Bain Capital Ventures, Glade Brook Capital Partners, BANNER VC, Saga Ventures, Trust Ventures, Definition, PEAK6, Magnetar Capital, and Ravelin Capital."
  },
  {
    firmSlug: "kleiner-perkins", company: "Sail Research",
    announcedDate: "2026-06-25", datePrecision: "day", round: "Series A",
    sector: "AI Infrastructure",
    sectorEvidence: "Sail Research, the infrastructure company purpose-built for long-horizon AI agents, today announced it has raised $80 million in Seed and Series A funding at a $450 million valuation.",
    role: "lead",
    coInvestors: ["Sequoia", "Redpoint Ventures", "Theory Ventures", "Vine Ventures", "CRV", "A*", "Abstract Ventures"],
    sourceUrl: "https://www.prnewswire.com/news-releases/sail-research-raises-80-million-to-build-max-efficiency-infrastructure-for-ai-agents-302810497.html", sourceType: "press-release",
    evidence: "Backed by Kleiner Perkins, Sequoia, Redpoint, Theory Ventures, Vine Ventures, CRV, A*, and Abstract Ventures, Sail is Building the First Infrastructure Platform Purpose-Built for Long-Horizon AI Agents"
  },
  {
    firmSlug: "kleiner-perkins", company: "Mirendil",
    announcedDate: "2026-06-24", datePrecision: "day", round: "seed round",
    sector: "AI Research",
    sectorEvidence: "Mirendil Inc., a startup developing artificial intelligence models for scientists, has raised $200 million in funding at a $1 billion valuation.",
    role: "participant",
    coInvestors: ["Andreessen Horowitz", "Nvidia"],
    sourceUrl: "https://siliconangle.com/2026/06/25/mirendil-raises-200m-speed-scientific-research-ai/", sourceType: "reputable-press",
    evidence: "The seed round was led by Andreessen Horowitz. Mirendil stated in its Wednesday funding announcement that Kleiner Perkins, Nvidia Corp. and several other investors contributed as well."
  },
  {
    firmSlug: "kleiner-perkins", company: "Trovy",
    announcedDate: "2026-06-24", datePrecision: "day", round: "Series A",
    sector: "Consumer Fintech",
    sectorEvidence: "Trovy is a consumer fintech platform that gives homeowners a smarter way to access and leverage their home equity.",
    role: "participant",
    coInvestors: ["Left Lane Capital", "DCM Ventures", "Camber Creek"],
    sourceUrl: "https://www.prnewswire.com/news-releases/trovy-raises-25-million-in-total-funding-to-turn-every-home-into-a-financial-asset-302808712.html", sourceType: "press-release",
    evidence: "Trovy, the consumer fintech replacing high-interest debt with home equity-powered financing, today announced a $15 million Series A led by Left Lane Capital, bringing total funding to $25 million. Existing seed investors Kleiner Perkins, DCM Ventures, and Camber Creek also participated."
  },
  {
    firmSlug: "sequoia", company: "Preview",
    announcedDate: "2026-08-12", datePrecision: "day", round: "seed round",
    sector: "AI Video Software",
    sectorEvidence: "An AI-native video creation and production platform built for professional creators, Preview combines a video timeline with an infinite canvas for ideation into one collaborative multiplayer workspace.",
    role: "lead",
    coInvestors: [],
    sourceUrl: "https://sequoiacap.com/article/partnering-with-preview-lights-inference-action/", sourceType: "firm-announcement",
    evidence: "Partnering with Preview: Lights, Inference, Action | Sequoia Capital ... We are thrilled to partner with Stefan and Veljko and to lead their seed round."
  },
  {
    firmSlug: "sequoia", company: "Neros Technologies",
    announcedDate: "2026-08-11", datePrecision: "day", round: "Series C",
    sector: "Defense Tech",
    sectorEvidence: "Neros is building a new era of credible deterrence for America and its allies by establishing a domestic drone industrial base in the United States.",
    role: "lead",
    coInvestors: ["American Strategic Technology Fund (ASTF)", "Interlagos", "Valor Equity Partners", "Allen & Company", "Thiel Capital", "Spark Capital", "Dylan Field"],
    sourceUrl: "https://www.prnewswire.com/news-releases/neros-raises-250m-series-c-at-2-5b-valuation-to-scale-autonomous-and-interceptor-drone-programs-302848736.html", sourceType: "press-release",
    evidence: "Sequoia Capital and American Strategic Technology Fund (ASTF) co-led the $250M Series C for Neros Technologies, which will accelerate production of autonomous drone systems including the Archer AI platform and Bandit interceptor."
  },
  {
    firmSlug: "sequoia", company: "Corma",
    announcedDate: "2026-08-10", datePrecision: "day", round: "Seed",
    sector: "Cybersecurity",
    sectorEvidence: "a startup emerging from stealth today with $60 million in seed funding to build AI models for defensive cybersecurity",
    role: "lead",
    coInvestors: ["Khosla Ventures", "Coatue"],
    sourceUrl: "https://fortune.com/2026/08/10/exclusive-corma-raises-60-million-from-sequoia-for-ai-trained-to-defend-against-cyberattacks/", sourceType: "reputable-press",
    evidence: "That's where Corma comes in, a startup emerging from stealth today with $60 million in seed funding to build AI models for defensive cybersecurity, led by Sequoia Capital, along with Khosla Ventures and Coatue."
  },
  {
    firmSlug: "sequoia", company: "Valar Atomics",
    announcedDate: "2026-08-04", datePrecision: "day", round: "Series B",
    sector: "Nuclear Energy",
    sectorEvidence: "Valar was founded with the following ethos: to bring manufacturing economics to nuclear through a vertically integrated business model and unwavering prioritization of hardware.",
    role: "lead",
    coInvestors: ["Apandion", "Atreides Management", "Conviction", "Dream Ventures", "HOF Capital", "Point72", "Riot Ventures", "Snowpoint Ventures", "Valor Equity Partners"],
    sourceUrl: "https://www.valaratomics.com/docs/Announcing-our-1B-Series-B-Led-By-Sequoia", sourceType: "company-announcement",
    evidence: "Valar Atomics is excited to announce the closing of a $1 billion Series B financing led by Sequoia Capital."
  },
  {
    firmSlug: "sequoia", company: "Glow",
    announcedDate: "2026-07-22", datePrecision: "day", round: "Series A",
    sector: "Cybersecurity",
    sectorEvidence: "endpoint security platform that helps enterprises monitor and control the software, AI agents, and developer tools running on employee devices",
    role: "lead",
    coInvestors: ["Cyberstarts", "Greenoaks", "Redpoint Ventures", "Index Ventures", "Swish Ventures", "Lux Capital", "Operator Collective", "Holly Ventures"],
    sourceUrl: "https://techcrunch.com/2026/07/22/glow-emerges-from-stealth-at-1-2b-valuation-to-challenge-endpoint-security-in-the-ai-era/", sourceType: "reputable-press",
    evidence: "Sequoia Capital, Cyberstarts, Greenoaks, and Redpoint Ventures, alongside participation from Index Ventures, Swish Ventures, Lux Capital, Operator Collective, and Holly Ventures. ... The investment made Glow one of the latest cybersecurity startups to achieve unicorn status"
  },
  {
    firmSlug: "lightspeed", company: "Nirva",
    announcedDate: "2026-07-09", datePrecision: "day", round: "Seed",
    sector: "Consumer Hardware",
    sectorEvidence: "an AI wearable, worn as a necklace or bracelet, designed to listen only to your voice throughout the day, turning it into a life journal, coach, and companion.",
    role: null,
    coInvestors: [],
    sourceUrl: "https://lsvp.com/stories/why-we-partnered-with-nirva/", sourceType: "firm-announcement",
    evidence: "That is why we are thrilled to announce our partnership with Nirva in their 8M Seed round. ... For Lightspeed, Nirva is a declaration that we think the next iconic consumer device worth caring about will look like something you'd actually choose to wear, and it will know you better than any device before it."
  },
  {
    firmSlug: "lightspeed", company: "Pie",
    announcedDate: "2026-06-30", datePrecision: "day", round: "Series A",
    sector: "Small Business Software",
    sectorEvidence: "Pie is the AI-powered growth platform for small businesses. Through Growth, AI Search and Front Desk, Pie helps local merchants get discovered, bring in more customers and convert demand into revenue",
    role: "lead",
    coInvestors: ["Capital One Ventures", "Max Levchin's SciFi VC", "F-Prime", "Commerce Ventures", "WEX Venture Capital"],
    sourceUrl: "https://www.businesswire.com/news/home/20260630636582/en/Pie-Raises-$23.7M-to-Bring-AI-Powered-Growth-to-Main-Street-Businesses", sourceType: "press-release",
    evidence: "Led by Lightspeed Venture Partners, Pie's $19.5M Series A brings total funding to $23.7M"
  },
  {
    firmSlug: "lightspeed", company: "Andera",
    announcedDate: "2026-06-17", datePrecision: "day", round: "Series A",
    sector: "Enterprise Software",
    sectorEvidence: "the company building the AI-native platform to automate internal audit",
    role: "lead",
    coInvestors: ["Bain Capital Ventures"],
    sourceUrl: "https://lsvp.com/stories/audits-moment-has-arrived-why-we-invested-in-andera/", sourceType: "firm-announcement",
    evidence: "We're thrilled to announce that Lightspeed is leading a $37M Series A in Andera, the company building the AI-native platform to automate internal audit."
  },
  {
    firmSlug: "lightspeed", company: "Sandstone",
    announcedDate: "2026-06-09", datePrecision: "day", round: "Series A",
    sector: "Legal Tech",
    sectorEvidence: "Sandstone, the platform for managing every legal relationship",
    role: "lead",
    coInvestors: ["Mantis VC", "SV Angel", "Operator Partners", "Kearny Jackson", "Daybreak Ventures", "Litquidity Ventures"],
    sourceUrl: "https://sandstone.com/blog/sandstone-raises-series-a", sourceType: "company-announcement",
    evidence: "Sandstone, the platform for managing every legal relationship, today announced it has closed $30 million in Series A financing led by Lightspeed Venture Partners, with participation from existing investors from the January seed round, including Mantis VC, SV Angel, Operator Partners, Kearny Jackson, Daybreak Ventures, Litquidity Ventures, and others."
  },
  {
    firmSlug: "lightspeed", company: "A Security",
    announcedDate: "2026-06-08", datePrecision: "day", round: null,
    sector: "Cybersecurity",
    sectorEvidence: "A Security, the platform fortifying organizations against weaponized AI by discovering and remediating real attack paths",
    role: "participant",
    coInvestors: ["Cyberstarts", "Assaf Rapaport", "Yotam Segev", "Cerca Partners"],
    sourceUrl: "https://www.globenewswire.com/news-release/2026/06/08/3308079/0/en/A-Security-Emerges-from-Stealth-with-37M-in-Funding-to-Outpace-Weaponized-AI.html", sourceType: "press-release",
    evidence: "A Security, the platform fortifying organizations against weaponized AI by discovering and remediating real attack paths, today emerged from stealth with $37 million in funding from Lightspeed Venture Partners, Cyberstarts and notable angel investors including Wiz CEO Assaf Rapaport, Cyera CEO Yotam Segev and Cerca Partners."
  },
  {
    firmSlug: "lightspeed", company: "Reactor",
    announcedDate: "2026-05-28", datePrecision: "day", round: "Series A",
    sector: "AI Infrastructure",
    sectorEvidence: "Reactor, the developer platform for real-time generative video",
    role: "lead",
    coInvestors: ["WndrCo", "Amplify Partners", "Sky9 Capital", "FPV Ventures"],
    sourceUrl: "https://www.prnewswire.com/news-releases/reactor-emerges-from-stealth-with-59m-to-build-the-platform-for-real-time-ai-worlds-302783715.html", sourceType: "press-release",
    evidence: "Reactor, the developer platform for real-time generative video, today emerged from stealth with $59 million in funding led by Lightspeed Venture Partners."
  },
  {
    firmSlug: "khosla-ventures", company: "Corma",
    announcedDate: "2026-08-10", datePrecision: "day", round: "seed",
    sector: "Cybersecurity",
    sectorEvidence: "Corma trains its AI models to specialize in qualities related to defensive cybersecurity, most of which 'doesn't have anything to do with coding,' instead focusing on 'looking at logs, audits, [and] finding the needle in a haystack.'",
    role: "participant",
    coInvestors: ["Sequoia Capital", "Coatue"],
    sourceUrl: "https://fortune.com/2026/08/10/exclusive-corma-raises-60-million-from-sequoia-for-ai-trained-to-defend-against-cyberattacks/", sourceType: "reputable-press",
    evidence: "That's where Corma comes in, a startup emerging from stealth today with $60 million in seed funding to build AI models for defensive cybersecurity, led by Sequoia Capital, along with Khosla Ventures and Coatue."
  },
  {
    firmSlug: "khosla-ventures", company: "Mariana Minerals",
    announcedDate: "2026-08-03", datePrecision: "day", round: "Series B",
    sector: "Critical Minerals",
    sectorEvidence: "Mariana engineers, builds, and operates mines and refineries using its proprietary MarianaOS platform, which integrates capital project execution (CapitalProjectOS), refinery operations (PlantOS), and mine management (MineOS) into a single AI and machine learning stack.",
    role: "lead",
    coInvestors: ["Andreessen Horowitz (a16z)", "Breakthrough Energy Ventures", "Greenoaks", "Halo Fund", "Pax Ventures", "StepStone Group", "BHP Ventures", "Washington Harbour Partners", "Greycroft", "General Innovation Capital Partners", "Mitsubishi Corporation", "In-Q-Tel (IQT)", "Earthshot Ventures"],
    sourceUrl: "https://www.prnewswire.com/news-releases/mariana-minerals-raises-310-million-series-b-led-by-khosla-ventures-to-accelerate-critical-minerals-production-302840889.html", sourceType: "press-release",
    evidence: "Mariana Minerals Raises $310 Million Series B Led by Khosla Ventures to Accelerate Critical Minerals Production ... The round was led by Khosla Ventures, with continued support from Andreessen Horowitz (a16z) and Breakthrough Energy Ventures, and new participation from Greenoaks, Halo Fund, Pax Ventures, StepStone Group, BHP Ventures, Washington Harbour Partners, Greycroft, General Innovation Capital Partners, Mitsubishi Corporation, In-Q-Tel (IQT), and Earthshot Ventures, with a number of additional strategic capital partners joining the round."
  },
  {
    firmSlug: "khosla-ventures", company: "Dili",
    announcedDate: "2026-07-30", datePrecision: "day", round: "Series A",
    sector: "Construction Compliance",
    sectorEvidence: "The platform automates prevailing wage and apprenticeship monitoring, Davis-Bacon compliance, certified payroll review, and audit-ready reporting, checking 100% of project data in real time.",
    role: "lead",
    coInvestors: ["Y Combinator's Garry Tan", "Allianz", "Brick and Mortar Ventures' Darren Bechtel", "Rebel Fund"],
    sourceUrl: "https://www.globenewswire.com/news-release/2026/07/30/3336377/0/en/dili-raises-21-7m-from-khosla-ventures-to-bring-ai-powered-assurance-to-america-s-infrastructure-boom.html", sourceType: "press-release",
    evidence: "Dili announced $21.7 million in total funding, including a $15 million Series A led by Khosla Ventures."
  },
  {
    firmSlug: "khosla-ventures", company: "Twenty",
    announcedDate: "2026-07-20", datePrecision: "day", round: null,
    sector: "Defense Tech",
    sectorEvidence: "The company builds AI-enabled, end-to-end systems for the U.S. military and Intelligence Community, giving warfighters the speed and scale required to deter and defeat adversaries in cyberspace.",
    role: null,
    coInvestors: [],
    sourceUrl: "https://www.prnewswire.com/news-releases/americas-first-vc-backed-cyber-warfare-startup-raises-additional-30m-from-khosla-ventures-at-1-2b-valuation-302829778.html", sourceType: "press-release",
    evidence: "ARLINGTON, Va., July 20, 2026 /PRNewswire/ -- Twenty, America's first VC-backed cyber warfare startup, today announced an additional $30 million investment from Khosla Ventures at a $1.2 billion valuation."
  },
  {
    firmSlug: "khosla-ventures", company: "Emergent",
    announcedDate: "2026-07-17", datePrecision: "day", round: "Series C",
    sector: "AI Software Development",
    sectorEvidence: "Emergent, the fast-growing AI software creation platform that enables founders and business owners to build full-stack, production-ready web and mobile applications",
    role: "participant",
    coInvestors: ["Creaegis", "MNI Ventures - Claypond Capital", "Sentinel Global", "SoftBank Vision Fund 2", "Lightspeed", "Y Combinator"],
    sourceUrl: "https://www.prnewswire.com/news-releases/emergent-raises-series-c-at-1-5-billion-valuation-becomes-unicorn-in-a-year-of-launch-302828600.html", sourceType: "press-release",
    evidence: "Emergent, the fast-growing AI software creation platform that enables founders and business owners to build full-stack, production-ready web and mobile applications, today announced a $130 million Series C funding. ... The round was led by Creaegis, with MNI Ventures - Claypond Capital and Sentinel Global as co-lead investors, and participation from Khosla Ventures, SoftBank Vision Fund 2, Lightspeed, and Y Combinator."
  },
  {
    firmSlug: "khosla-ventures", company: "Bunkerhill Health",
    announcedDate: "2026-07-16", datePrecision: "day", round: "Series B",
    sector: "Healthcare AI",
    sectorEvidence: "Bunkerhill's platform, Carebricks, lets hospitals and health systems turn their own ideas into AI agents that work across clinical, operational, and administrative domains, from reviewing cardiology imaging for early signs of heart disease and identifying patients who need follow-up care to navigating prior authorizations and automating registry management.",
    role: "lead",
    coInvestors: ["Sequoia Capital", "Felicis", "Optum Ventures", "Y Combinator"],
    sourceUrl: "https://www.bunkerhillhealth.com/resources/series-b-announcement", sourceType: "company-announcement",
    evidence: "SAN FRANCISCO - July 16, 2026 - Bunkerhill Health, the agentic AI platform health systems use to turn their best ideas into reality, today announced the close of its Series B funding round, led by Khosla Ventures, with continued participation from Sequoia Capital, Felicis, Optum Ventures, and Y Combinator."
  },
  {
    firmSlug: "bessemer", company: "Flagler Health",
    announcedDate: "2026-08-11", datePrecision: "day", round: "Series B",
    sector: "Healthcare",
    sectorEvidence: "Flagler Health, an AI-native platform for musculoskeletal (MSK) healthcare",
    role: "lead",
    coInvestors: ["SignalFire", "Alumni Ventures", "Streamlined", "186 Ventures", "Proof VC", "Tribeca Venture Partners", "Offscript"],
    sourceUrl: "https://www.timesargus.com/news/business/flagler-health-raises-50-million-series-b-to-build-the-ai-operating-system-for-musculoskeletal/article_969053ea-b6e3-5da9-8e3f-e93c090c70e8.html", sourceType: "press-release",
    evidence: "Flagler Health, an AI-native platform for musculoskeletal (MSK) healthcare, today announced it raised a $50 million Series B, bringing total funding raised to $63 million. ... The financing was led by Bessemer Venture Partners, with participation from SignalFire, Alumni Ventures, Streamlined, 186 Ventures, Proof VC, Tribeca Venture Partners, and Offscript."
  },
  {
    firmSlug: "bessemer", company: "Onyx Security",
    announcedDate: "2026-07-29", datePrecision: "day", round: "Series B",
    sector: "Cybersecurity",
    sectorEvidence: "Onyx Security, the AI control company",
    role: "lead",
    coInvestors: ["Cyberstarts", "TCV", "Conviction", "FirstMark", "Vintage", "QuantumLight", "G Squared"],
    sourceUrl: "https://www.businesswire.com/news/home/20260729713522/en/Onyx-Security-Raises-$113M-Series-B-to-Control-Advanced-AI-Quadrupling-Revenue-since-Stealth-Launch-Four-Months-Ago", sourceType: "press-release",
    evidence: "Onyx Security, the AI control company, announced a $113 million Series B funding round led by Bessemer Venture Partners, with participation from Cyberstarts, TCV, Conviction, FirstMark, Vintage, QuantumLight and G Squared."
  },
  {
    firmSlug: "bessemer", company: "Act Security",
    announcedDate: "2026-07-28", datePrecision: "day", round: "seed round",
    sector: "Cybersecurity",
    sectorEvidence: "Act Security, an action-centric cloud security company, today emerged from stealth with $60 million in total funding and the launch of its cloud security platform.",
    role: "lead",
    coInvestors: ["Team8", "Hetz Ventures", "Claltech", "Notable Capital", "Startpoint Capital", "SVCI"],
    sourceUrl: "https://www.prnewswire.com/news-releases/act-security-launches-action-centric-cloud-security-platform-with-60-million-in-funding-302836148.html", sourceType: "press-release",
    evidence: "Act Security, an action-centric cloud security company, today emerged from stealth with $60 million in total funding and the launch of its cloud security platform. ... Since its founding in 2025, Act has raised a $20 million seed round led by Team8 and Bessemer Venture Partners with participation from Hetz Ventures and Claltech, and a $40 million Series A led by Notable Capital with participation from Startpoint Capital and SVCI."
  },
  {
    firmSlug: "bessemer", company: "30 Sundays",
    announcedDate: "2026-07-21", datePrecision: "day", round: "Series A",
    sector: "Travel",
    sectorEvidence: "30 Sundays is an AI-native, full-stack journey planner, owning planning across the discovery and booking stages while providing an on-trip concierge.",
    role: "lead",
    coInvestors: ["Info Edge Ventures", "Eximius Ventures"],
    sourceUrl: "https://www.tribuneindia.com/news/business/30-sundays-raises-rs-61-crore-series-a-led-by-bessemer-venture-partners-to-scale-its-ai-native-travel-platform/amp", sourceType: "press-release",
    evidence: "30 Sundays, an AI-native holiday planning and booking platform, has raised Rs. 61 crore (~$6.7 million) in its Series A, led by Bessemer Venture Partners"
  },
  {
    firmSlug: "bessemer", company: "Neo",
    announcedDate: "2026-07-20", datePrecision: "day", round: "Series A",
    sector: "Cybersecurity",
    sectorEvidence: "Neo, the Agentic Software Control company",
    role: "lead",
    coInvestors: ["Andreessen Horowitz", "Craft Ventures", "Merlin Ventures"],
    sourceUrl: "https://www.neo.ai/news/neo-launches-100m", sourceType: "company-announcement",
    evidence: "Neo, the Agentic Software Control company, today emerged from stealth with $100M in funding from Andreessen Horowitz and Bessemer Venture Partners"
  },
  {
    firmSlug: "bessemer", company: "Fireworks",
    announcedDate: "2026-07-16", datePrecision: "day", round: "Series D",
    sector: "AI Infrastructure",
    sectorEvidence: "Fireworks is a platform that helps companies own the intelligence powering their products and operations.",
    role: "participant",
    coInvestors: ["Atreides Management", "Index Ventures", "TCV", "Evantic Capital", "Lightspeed Venture Partners", "Nvidia", "20VC", "Menlo Ventures"],
    sourceUrl: "https://fireworks.ai/blog/series-d-announcement", sourceType: "company-announcement",
    evidence: "Today, Fireworks announced a $1.505 billion Series D at a $17.5 billion valuation, led by Atreides Management, Index Ventures, and TCV, with participation from Evantic Capital, Lightspeed Venture Partners, Nvidia, 20VC, Bessemer Venture Partners, Menlo Ventures, and others."
  },
  {
    firmSlug: "spark-capital", company: "Neros Technologies",
    announcedDate: "2026-08-11", datePrecision: "day", round: "Series C",
    sector: "Defense Tech",
    sectorEvidence: "Neros is building a new era of credible deterrence for America and its allies by establishing a domestic drone industrial base in the United States.",
    role: "participant",
    coInvestors: ["Sequoia Capital", "American Strategic Technology Fund (ASTF)", "Interlagos", "Valor Equity Partners", "Allen & Company", "Thiel Capital", "Dylan Field"],
    sourceUrl: "https://www.prnewswire.com/news-releases/neros-raises-250m-series-c-at-2-5b-valuation-to-scale-autonomous-and-interceptor-drone-programs-302848736.html", sourceType: "press-release",
    evidence: "NEROS RAISES $250M SERIES C AT $2.5B VALUATION TO SCALE AUTONOMOUS AND INTERCEPTOR DRONE PROGRAMS ... The round was co-led by Sequoia Capital and American Strategic Technology Fund (ASTF) with participation by Interlagos, Valor Equity Partners, Allen & Company, Thiel Capital, Spark Capital, and Dylan Field."
  },
  {
    firmSlug: "spark-capital", company: "Lumilens",
    announcedDate: "2026-08-06", datePrecision: "day", round: "Series C",
    sector: "Semiconductors",
    sectorEvidence: "Lumilens, the connectivity platform for AI infrastructure, today emerged from stealth, having been founded to solve the growing networking bottlenecks limiting AI scale.",
    role: "lead",
    coInvestors: ["Addition", "Aiconic", "Alkeon", "Atreides Capital", "Bain Capital Ventures", "EDBI", "Harbourvest", "J.P. Morgan Private Capital", "Lingotto", "Mayfield", "Meritech", "MVP Ventures", "Peak XV", "Qualcomm Ventures", "Redpoint Ventures", "Seifdune", "Seligman Ventures", "Thomvest Ventures"],
    sourceUrl: "https://www.businesswire.com/news/home/20260806444241/en/Lumilens-Emerges-from-Stealth-with-More-Than-$900-Million-in-Funding-to-Break-AIs-Connectivity-Bottlenecks-in-the-Data-Center", sourceType: "press-release",
    evidence: "James Kuklinski, General Partner at Spark Capital ... We first partnered with Lumilens by leading the Series B in early 2025 and are thrilled to have doubled down to co-lead the Series C financing, given the team's rapid execution, vast ambition, and the scale of the market opportunity ahead."
  },
  {
    firmSlug: "spark-capital", company: "Cadence",
    announcedDate: "2026-06-23", datePrecision: "day", round: "Series C",
    sector: "Healthcare",
    sectorEvidence: "Cadence, the clinical AI company managing chronic care for older adults, announced a $100 million Series C, amid adoption of its AI-powered care model across the nation's leading health systems.",
    role: "lead",
    coInvestors: ["Thrive Capital", "General Catalyst", "Coatue", "B Capital", "Corewell Health Ventures", "Memorial Hermann", "Duke Health"],
    sourceUrl: "https://www.businesswire.com/news/home/20260623072271/en/Cadence-Raises-$100M-Series-C-Led-by-Spark-Capital-to-Automate-Chronic-Care", sourceType: "press-release",
    evidence: "Cadence Raises $100M Series C Led by Spark Capital to Automate Chronic Care"
  },
  {
    firmSlug: "spark-capital", company: "Latent",
    announcedDate: "2026-03", datePrecision: "month", round: "Series A",
    sector: "Healthcare AI",
    sectorEvidence: "Latent, the clinical-AI company accelerating access to life-saving medications, has raised an $80M Series A co-led by Spark Capital and Transformation Capital, with participation from Conviction, McKesson Ventures, General Catalyst, and Y Combinator.",
    role: "lead",
    coInvestors: ["Transformation Capital", "Conviction", "McKesson Ventures", "General Catalyst", "Y Combinator"],
    sourceUrl: "https://www.businesswire.com/news/home/20260330515802/en/Latent-Raises-$80M-to-Close-the-Gap-Between-Diagnosis-and-Treatment", sourceType: "press-release",
    evidence: "Latent, the clinical-AI company accelerating access to life-saving medications, has raised an $80M Series A co-led by Spark Capital and Transformation Capital, with participation from Conviction, McKesson Ventures, General Catalyst, and Y Combinator."
  },
  {
    firmSlug: "spark-capital", company: "MatX",
    announcedDate: "2026-02-24", datePrecision: "day", round: "Series B",
    sector: "Semiconductors",
    sectorEvidence: "MatX, a chip startup founded by two former Google hardware engineers, has raised a $500 million Series B led by Jane Street and Situational Awareness, an investment fund formed by former OpenAI researcher Leopold Aschenbrenner. The company's goal is to make its processors 10 times better at training LLMs and delivering results than Nvidia's GPUs.",
    role: "participant",
    coInvestors: ["Jane Street", "Situational Awareness", "Marvell Technology", "NFDG", "Patrick Collison", "John Collison"],
    sourceUrl: "https://techcrunch.com/2026/02/24/nvidia-challenger-ai-chip-startup-matx-raised-500m/", sourceType: "reputable-press",
    evidence: "MatX, a chip startup founded by two former Google hardware engineers, has raised a $500 million Series B led by Jane Street and Situational Awareness ... Other investors in the round include Marvell Technology, NFDG, Spark Capital, and Stripe co-founders Patrick Collison and John Collison, the startup's founder and CEO Reiner Pope announced Tuesday in a post on LinkedIn."
  },
  {
    firmSlug: "spark-capital", company: "Tigris",
    announcedDate: "2025-10-09", datePrecision: "day", round: "Series A",
    sector: "Cloud Infrastructure",
    sectorEvidence: "Tigris, founded by the team that developed Uber's storage platform, is building a network of localized data storage centers that it claims can meet the distributed compute needs of modern AI workloads.",
    role: "lead",
    coInvestors: ["Andreessen Horowitz"],
    sourceUrl: "https://techcrunch.com/2025/10/09/this-distributed-data-storage-startup-wants-to-take-on-big-cloud/", sourceType: "reputable-press",
    evidence: "Tigris recently raised a $25 million Series A round that was led by Spark Capital and saw participation from existing investors, which include Andreessen Horowitz, TechCrunch has exclusively learned."
  },
  {
    firmSlug: "index-ventures", company: "Intelligence",
    announcedDate: "2026-08-03", datePrecision: "day", round: "seed",
    sector: "AI Benchmarking",
    sectorEvidence: "Intelligence, a San Francisco, California-based developer of a crowdsourced benchmarking platform for AI-generated visual design operating as Design Arena, raised $7.9m in seed funding.",
    role: "lead",
    coInvestors: ["Conviction", "A*", "Valkyrie"],
    sourceUrl: "https://www.finsmes.com/2026/08/intelligence-raises-7-9m-in-seed-funding.html", sourceType: "reputable-press",
    evidence: "Intelligence, a San Francisco, California-based developer of a crowdsourced benchmarking platform for AI-generated visual design operating as Design Arena, raised $7.9m in seed funding. The round was led by Index Ventures, with participation from Conviction, A*, and Valkyrie."
  },
  {
    firmSlug: "index-ventures", company: "Simile",
    announcedDate: "2026-07-30", datePrecision: "day", round: "Series B",
    sector: "Enterprise AI",
    sectorEvidence: "turning generative agents into a way for the world's biggest enterprises to test decisions before making them",
    role: "participant",
    coInvestors: ["Greenoaks", "Hanabi", "Bain Capital Ventures", "A*", "Factory", "CVS Health Ventures", "Definition"],
    sourceUrl: "https://www.indexventures.com/perspectives/simulating-society-at-scale-our-investment-in-similes-200m-series-b/", sourceType: "firm-announcement",
    evidence: "Today we're thrilled to double down on our investment in Simile as they announce their $200 million Series B."
  },
  {
    firmSlug: "index-ventures", company: "Enigma",
    announcedDate: "2026-07-27", datePrecision: "day", round: "seed",
    sector: "Robotics",
    sectorEvidence: "Enigma is launching a large-scale experiment that allows anyone in the world to interact online with more than 100 of its proprietary AI robots.",
    role: "lead",
    coInvestors: ["Ribbit Capital", "Sarah Guo of Conviction Partners"],
    sourceUrl: "https://techcrunch.com/2026/07/27/enigma-raises-70m-to-make-controlling-a-robot-as-easy-as-adjusting-the-volume/", sourceType: "reputable-press",
    evidence: "Enigma raised a $71 million seed round led by Index Ventures and Ribbit Capital, with participation from Sarah Guo of Conviction Partners."
  },
  {
    firmSlug: "index-ventures", company: "Chai Discovery",
    announcedDate: "2026-07-14", datePrecision: "day", round: "Series C",
    sector: "Biotech",
    sectorEvidence: "Chai's models are designed to reason about biological structure and function, generate new molecular designs from scratch, and help pharma teams pursue targets that traditional discovery methods have struggled to reach.",
    role: "lead",
    coInvestors: ["Kleiner Perkins", "Sequoia Capital", "Dimension", "Bain Capital Ventures", "Battery Ventures", "Baillie Gifford", "BDT & MSD", "Sapphire Ventures", "Avra Capital", "Thrive Capital", "OpenAI", "Oak HC/FT", "Menlo Ventures", "General Catalyst", "Glade Brook", "Avenir", "Lachy Groom", "Yosemite"],
    sourceUrl: "https://www.biospace.com/press-releases/chai-discovery-announces-400m-series-c-to-advance-ai-driven-molecular-design", sourceType: "press-release",
    evidence: "Chai Discovery Announces $400M Series C to Advance AI-Driven Molecular Design ... The round, which values the company at $3.8B, was led by Index Ventures alongside Kleiner Perkins, Sequoia Capital and Dimension."
  },
  {
    firmSlug: "index-ventures", company: "fomo",
    announcedDate: "2026-06-22", datePrecision: "day", round: "Series B",
    sector: "Fintech",
    sectorEvidence: "a trading platform designed to simplify access to on-chain markets for everyone",
    role: "lead",
    coInvestors: ["Union Square Ventures", "Benchmark"],
    sourceUrl: "https://www.globenewswire.com/news-release/2026/06/22/3315279/0/en/fomo-raises-75-million-series-b-led-by-index-ventures-to-scale-global-consumer-trading-app.html", sourceType: "press-release",
    evidence: "fomo, a trading platform designed to simplify access to on-chain markets for everyone, today announced an $75 million Series B led by Index Ventures with strong participation from Union Square Ventures and existing investor Benchmark."
  },
  {
    firmSlug: "index-ventures", company: "Uncovr",
    announcedDate: "2026-06-10", datePrecision: "day", round: "seed",
    sector: "Healthcare AI",
    sectorEvidence: "Uncovr, the surgical AI company transforming how surgery is analyzed, documented, coded, and learned",
    role: "lead",
    coInvestors: ["Seedcamp", "Frst", "No Label Ventures", "Sequoia Scout", "Entrepreneurs First"],
    sourceUrl: "https://www.indexventures.com/perspectives/uncovr-raises-7-million-in-seed-funding-to-build-the-system-of-record-for-surgery/", sourceType: "firm-announcement",
    evidence: "Uncovr, the surgical AI company transforming how surgery is analyzed, documented, coded, and learned, has raised $7 million in seed funding led by Index Ventures."
  },
  {
    firmSlug: "lux-capital", company: "Cambridge Aerospace",
    announcedDate: "2026-08-10", datePrecision: "day", round: "Series C",
    sector: "Defense Tech",
    sectorEvidence: "Cambridge, which already has several U.K. government contracts, is developing low-cost interceptor systems for both drones and cruise missiles.",
    role: "participant",
    coInvestors: ["DFJ Growth", "Accel", "Lakestar", "Never Lift", "Ora Global", "Elad Gil"],
    sourceUrl: "https://www.axios.com/2026/08/10/anti-drone-defense-cambridge-aerospace", sourceType: "reputable-press",
    evidence: "Cambridge Aerospace, a British air defense tech startup, raised $300 million in Series C funding at a $3.4 billion post-money valuation led by DFJ Growth. ... Other investors in the round included Lux Capital, Accel, Lakestar, Never Lift, Ora Global, and Elad Gil."
  },
  {
    firmSlug: "lux-capital", company: "Hadrian",
    announcedDate: "2026-08-06", datePrecision: "day", round: "Series D",
    sector: "Advanced Manufacturing",
    sectorEvidence: "Hadrian, the advanced manufacturing company building highly automated factories for America, today announced $1.37 billion in new equity financing.",
    role: "participant",
    coInvestors: ["WCM Investment Management", "Washington Harbour Partners", "Valor Equity Partners", "137 Ventures", "Baillie Gifford", "JPMorganChase Strategic Investment Group", "1789 Capital", "Morgan Stanley Wealth Management", "funds managed by Apollo", "accounts advised by T. Rowe Price Associates, Inc.", "CapitalG", "Andreessen Horowitz", "Founders Fund", "Altimeter", "Construct Capital"],
    sourceUrl: "https://www.prnewswire.com/news-releases/hadrian-raises-1-37b-series-d-to-build-highly-automated-factories-to-accelerate-americas-industrial-renewal-302844408.html", sourceType: "press-release",
    evidence: "Hadrian, the advanced manufacturing company building highly automated factories for America, today announced $1.37 billion in new equity financing. ... The round also included major participation by 1789 Capital, as well as participation from Morgan Stanley Wealth Management, funds managed by Apollo, accounts advised by T. Rowe Price Associates, Inc., CapitalG, Andreessen Horowitz, Founders Fund, Lux Capital, Altimeter, Construct Capital, and existing investors."
  },
  {
    firmSlug: "lux-capital", company: "WindBorne Systems",
    announcedDate: "2026-08-05", datePrecision: "day", round: "Series B",
    sector: "Weather Intelligence",
    sectorEvidence: "WindBorne Systems, the weather intelligence company building the world's largest atmospheric sensing network and the AI models it powers, today announced $37 million in Series B funding",
    role: "participant",
    coInvestors: ["Khosla Ventures", "Galvanize", "Translink Capital", "Biprogy"],
    sourceUrl: "https://windbornesystems.com/blog/windborne-systems-raises-37-million-to-build-the-worlds-weather-intelligence-infrastructure", sourceType: "company-announcement",
    evidence: "WindBorne Systems, the weather intelligence company building the world's largest atmospheric sensing network and the AI models it powers, today announced $37 million in Series B funding ... The oversubscribed round was co-led by Khosla Ventures and Galvanize, with participation from Translink Capital, Biprogy, Lux Capital, and existing investors."
  },
  {
    firmSlug: "lux-capital", company: "Glow",
    announcedDate: "2026-07-22", datePrecision: "day", round: null,
    sector: "Cybersecurity",
    sectorEvidence: "Glow gives security teams control over everything that runs on the endpoint. Specialized AI agents continuously map the environment, analyze risk in real time, and enforce policies automatically",
    role: "participant",
    coInvestors: ["Sequoia", "Cyberstarts", "Greenoaks", "Redpoint Ventures", "Index Ventures", "Swish Ventures", "Operator Collective", "Holly Ventures"],
    sourceUrl: "https://www.glow.io/news/glow-emerges-from-stealth-with-180-million", sourceType: "company-announcement",
    evidence: "Glow, the AI-powered endpoint security company, today emerged from stealth with $180 million in funding at a $1.2 billion valuation ... The round was led by Sequoia, Cyberstarts, Greenoaks, and Redpoint Ventures, with participation from Index Ventures, Swish Ventures, Lux Capital, Operator Collective, and Holly Ventures."
  },
  {
    firmSlug: "lux-capital", company: "SkyPilot",
    announcedDate: "2026-07-21", datePrecision: "day", round: "seed funding",
    sector: "AI Infrastructure",
    sectorEvidence: "SkyPilot turns fragmented clouds, clusters, and accelerators into one unified AI supercomputer.",
    role: "lead",
    coInvestors: ["Amplify Partners", "Coatue Management", "Foundation Capital", "Race Capital", "The House Fund", "Ali Ghodsi", "Jeff Dean", "Guillermo Rauch", "Amjad Masad", "Clem Delangue", "Tristan Handy"],
    sourceUrl: "https://www.hpcwire.com/bigdatawire/this-just-in/skypilot-launches-with-20m-to-accelerate-custom-intelligence-for-frontier-ai-teams/", sourceType: "press-release",
    evidence: "SkyPilot today announced it has launched from stealth with $20 million in seed funding. ... The funding round was led by Lux Capital, with participation from Amplify Partners, Coatue Management, Foundation Capital, Race Capital, The House Fund, and leading technology operators including Ali Ghodsi, CEO of Databricks; Jeff Dean, Chief Scientist at Google; Guillermo Rauch, CEO of Vercel; Amjad Masad, CEO of Replit; Clem Delangue, CEO of Hugging Face; and Tristan Handy, CEO of dbt Labs."
  },
  {
    firmSlug: "lux-capital", company: "Genius AI",
    announcedDate: "2026-07-21", datePrecision: "day", round: "Series D",
    sector: "Vertical SaaS",
    sectorEvidence: "Genius AI, the technology platform for in-person service businesses, today announced $44 million in Series D financing at a $1.15 billion valuation.",
    role: "lead",
    coInvestors: ["Bessemer Venture Partners", "Imaginary Ventures", "L Catterton Growth", "2048 Ventures", "StepStone Private Ventures"],
    sourceUrl: "https://www.eznewswire.com/newsroom/genius-ai-glossgenius-series-d-valuation", sourceType: "press-release",
    evidence: "Genius AI, the technology platform for in-person service businesses, today announced $44 million in Series D financing at a $1.15 billion valuation. ... The round was led by Lux Capital, with participation from Bessemer Venture Partners, Imaginary Ventures, L Catterton Growth, 2048 Ventures, StepStone Private Ventures, and other existing investors."
  },
  {
    firmSlug: "neo", company: "Engram",
    announcedDate: "2026-06-23", datePrecision: "day", round: null,
    sector: "Enterprise AI",
    sectorEvidence: "Engram trains models to study an organization's world and anticipate its questions in advance, forming a compact, continuously improving memory (also known as an 'engram', a neuroscience term meaning the trace of memory in the brain) that's unique to each customer.",
    role: "participant",
    coInvestors: ["General Catalyst", "Kleiner Perkins", "Sequoia Capital", "Factory", "Modern", "Amplify Partners", "Assaf Rappaport", "Andrej Karpathy", "Pieter Abbeel"],
    sourceUrl: "https://www.prnewswire.com/news-releases/engram-launches-with-98m-to-build-ai-that-actually-knows-your-organization-302807126.html", sourceType: "company-announcement",
    evidence: "Today, Engram, the company building the learned memory layer for AI, emerged from stealth with $98M in funding from General Catalyst, Kleiner Perkins, Sequoia Capital, Factory, Modern, Amplify Partners, Neo and notable angels and advisors including Assaf Rappaport, co-founder and CEO of Wiz, Andrej Karpathy, co-founder of OpenAI, and Pieter Abbeel, AI and robotics pioneer and co-director of the Berkeley AI Research Lab."
  },
  {
    firmSlug: "neo", company: "Altara",
    announcedDate: "2026-05-05", datePrecision: "day", round: "seed funding",
    sector: "Scientific R&D Software",
    sectorEvidence: "Altara, which just secured $7 million in seed funding, says it has built an AI layer designed to bridge these data gaps and bring fragmented technical information into a single platform.",
    role: "participant",
    coInvestors: ["Greylock", "BoxGroup", "Liquid 2 Ventures", "Jeff Dean"],
    sourceUrl: "https://techcrunch.com/2026/05/05/altara-secures-7m-to-bridge-the-data-gap-thats-slowing-down-physical-sciences/", sourceType: "reputable-press",
    evidence: "Altara, which just secured $7 million in seed funding, says it has built an AI layer designed to bridge these data gaps and bring fragmented technical information into a single platform. ... The round was led by Greylock, with participation from Neo, BoxGroup, Liquid 2 Ventures, and Jeff Dean."
  },
  {
    firmSlug: "neo", company: "Casa",
    announcedDate: "2026-04-30", datePrecision: "day", round: null,
    sector: "Proptech",
    sectorEvidence: "Casa is a home services platform providing homeowners with ongoing maintenance, repair, and concierge support.",
    role: "participant",
    coInvestors: ["Forerunner Ventures", "Adverb Ventures", "Maven", "True Ventures"],
    sourceUrl: "https://www.siliconlegal.com/sls-client-neo-joins-casas-27mm-round/", sourceType: "firm-announcement",
    evidence: "Silicon Legal represented Neo as they joined Casa's $27 million Round."
  },
  {
    firmSlug: "neo", company: "Amperos Health",
    announcedDate: "2026-04-22", datePrecision: "day", round: "Series A",
    sector: "Healthcare Revenue Cycle",
    sectorEvidence: "Amperos Health, the first insurance revenue recovery partner capable of working denials end-to-end entirely with AI",
    role: "participant",
    coInvestors: ["Bessemer Venture Partners", "Uncork Capital"],
    sourceUrl: "https://www.amperos.com/blog/series-a-announcement", sourceType: "company-announcement",
    evidence: "Amperos Health, the first insurance revenue recovery partner capable of working denials end-to-end entirely with AI, announced today that it has closed a $16 million Series A funding round, led by Bessemer Venture Partners, with participation from Uncork Capital and Neo."
  },
  {
    firmSlug: "neo", company: "Liquid",
    announcedDate: "2026-04-21", datePrecision: "day", round: "Series Seed",
    sector: "Fintech",
    sectorEvidence: "Liquid is the platform where traders can act on opportunities in real time, without being constrained by market hours, platforms, or complexity.",
    role: "lead",
    coInvestors: ["Left Lane Capital", "Haun Ventures", "K5 Global", "SV Angel", "AntiFund", "Sunflower Capital", "Paradigm", "General Catalyst"],
    sourceUrl: "https://www.prnewswire.com/news-releases/247-trading-platform-liquid-closes-18-million-funding-round-302754621.html", sourceType: "company-announcement",
    evidence: "NEW YORK, April 21, 2026 /PRNewswire/ -- Liquid, a platform building the future of trading, today announced the successful closing of an $18 million Series Seed funding round. ... The fundraise was co-led by Neo and Left Lane Capital, with participation from Haun Ventures, K5 Global, SV Angel, AntiFund, and Sunflower Capital, in addition to existing investors Paradigm and General Catalyst."
  },
  {
    firmSlug: "bloomberg-beta", company: "Antares Labs",
    announcedDate: "2026-07-28", datePrecision: "day", round: "Seed",
    sector: "Real Estate Technology",
    sectorEvidence: "Antares Labs, a San Francisco, CA-based provider of an AI platform for real estate operations, raised $7.25M in Seed funding.",
    role: "participant",
    coInvestors: ["Fifth Wall", "Base10 Partners", "Sandwith Ventures"],
    sourceUrl: "https://www.finsmes.com/2026/07/antares-labs-raises-7-25m-in-seed-funding.html", sourceType: "reputable-press",
    evidence: "Antares Labs, a San Francisco, CA-based provider of an AI platform for real estate operations, raised $7.25M in Seed funding. ... Backers included Fifth Wall, Base10 Partners, Bloomberg Beta, and Sandwith Ventures."
  },
  {
    firmSlug: "bloomberg-beta", company: "Corca Research",
    announcedDate: "2026-06-10", datePrecision: "day", round: null,
    sector: "Software",
    sectorEvidence: "Corca Research, Inc., a New York-based software company building a collaborative workspace for mathematics",
    role: "participant",
    coInvestors: ["NEA", "Daft Capital", "NVentures"],
    sourceUrl: "https://www.finsmes.com/2026/06/corca-research-raises-7-8m-in-funding.html", sourceType: "reputable-press",
    evidence: "Corca Research, Inc., a New York-based software company building a collaborative workspace for mathematics, raised $7.8M in funding. ... The round was led by NEA, with participation from Bloomberg Beta, Daft Capital, and NVentures, NVIDIA's venture capital arm."
  },
  {
    firmSlug: "bloomberg-beta", company: "Bluefish",
    announcedDate: "2026-04-14", datePrecision: "day", round: "Series B",
    sector: "Marketing Technology",
    sectorEvidence: "Bluefish, the Agentic Marketing Platform (AMP) for Fortune 500 brands",
    role: "participant",
    coInvestors: ["Threshold Ventures", "NEA", "Amex Ventures", "TIAA Ventures", "Salesforce Ventures", "Crane Venture Partners", "Laconia", "Swift Ventures"],
    sourceUrl: "https://www.prnewswire.com/news-releases/bluefish-raises-43-million-series-b-to-power-agentic-marketing-for-the-fortune-500-302741124.html", sourceType: "press-release",
    evidence: "Bluefish, the Agentic Marketing Platform (AMP) for Fortune 500 brands, announced the close of $43 million Series B growth financing co-led by Threshold Ventures and NEA with participation from multiple enterprise investors including Amex Ventures, TIAA Ventures, Salesforce Ventures, and continued participation from Bloomberg Beta."
  },
  {
    firmSlug: "bloomberg-beta", company: "Stedi",
    announcedDate: "2026-03-24", datePrecision: "day", round: "Series C",
    sector: "Healthcare Software",
    sectorEvidence: "Stedi is a healthcare clearinghouse.",
    role: "participant",
    coInvestors: ["Addition", "Stripe", "Ribbit", "USV", "First Round", "BoxGroup", "Tobi Lutke", "Charlie Songhurst", "Guillermo Rauch", "Karim Atiyeh", "Max Mullen", "Jack Altman"],
    sourceUrl: "https://www.stedi.com/blog/series-c", sourceType: "company-announcement",
    evidence: "Today, I'm thrilled to announce Stedi's $50 million Series C, led by Addition with participation from Stripe, Ribbit, USV, First Round, BoxGroup, and Bloomberg Beta, along with angel investors including Tobi Lutke (founder/CEO, Shopify), Charlie Songhurst, Guillermo Rauch (founder/CEO, Vercel), Karim Atiyeh (founder/CTO, Ramp), Max Mullen (founder, Instacart), Jack Altman, and more."
  },
  {
    firmSlug: "bloomberg-beta", company: "Bluesky",
    announcedDate: "2025-04", datePrecision: "month", round: "Series B",
    sector: "Social Media",
    sectorEvidence: "Bluesky is an initiative to transition the social web from platforms to protocols.",
    role: "participant",
    coInvestors: ["Bain Capital Crypto", "Alumni Ventures", "Anthos Capital", "Knight Foundation", "True Ventures"],
    sourceUrl: "https://bsky.social/about/blog/03-19-2026-series-b", sourceType: "company-announcement",
    evidence: "In April 2025, Bluesky raised $100 million in Series B funding led by Bain Capital Crypto, with participation from Alumni Ventures, Anthos Capital, Bloomberg Beta, Knight Foundation and True Ventures."
  },
  {
    firmSlug: "bloomberg-beta", company: "Fortastra",
    announcedDate: "2025-12-11", datePrecision: "day", round: "seed",
    sector: "Space and Defense",
    sectorEvidence: "A new startup out of California-called Fortastra-today announced it closed an $8M seed round to develop spacecraft aiming to provide physical security to government and commercial sats for when that day inevitably comes.",
    role: "participant",
    coInvestors: ["Upfront Ventures", "Generational Partners", "Forward Deployed Venture Capital", "Wave Function Ventures"],
    sourceUrl: "https://payloadspace.com/fortastra-lands-8m-seed-to-develop-orbital-defense-sats/", sourceType: "reputable-press",
    evidence: "A new startup out of California-called Fortastra-today announced it closed an $8M seed round to develop spacecraft aiming to provide physical security to government and commercial sats for when that day inevitably comes. ... The round was led by Upfront Ventures, with further participation from Generational Partners, Forward Deployed Venture Capital, Bloomberg Beta, and Wave Function Ventures."
  },
  {
    firmSlug: "nea", company: "Horizon3",
    announcedDate: "2026-08-03", datePrecision: "day", round: "Series E",
    sector: "Cybersecurity",
    sectorEvidence: "Horizon3, the AI-Native Proactive Security Company behind NodeZero®, shifts the advantage from attackers to defenders by giving organizations the power to fight AI with AI.",
    role: "lead",
    coInvestors: ["NightDragon", "Acrew Capital", "Blue Cloud Ventures", "Demeter Group", "EDBI (Singapore)", "PSG", "SAIC", "Sapphire Ventures", "Craft Ventures", "Prosperity7 Ventures", "Qualcomm Ventures", "Ridge Ventures", "SignalFire"],
    sourceUrl: "https://www.businesswire.com/news/home/20260803793896/en/Horizon3-Raises-$250M-Series-E-at-$2B-Valuation-to-Lead-the-AI-vs.-AI-Cybersecurity-Era", sourceType: "press-release",
    evidence: "Horizon3 Raises $250M Series E at $2B+ Valuation to Lead the \"AI vs. AI\" Cybersecurity Era ... The oversubscribed round was co-led by existing investors NightDragon and NEA, with participation from seven new investors and five returning backers."
  },
  {
    firmSlug: "nea", company: "P-1 AI",
    announcedDate: "2026-07-29", datePrecision: "day", round: "Series A",
    sector: "Engineering AI",
    sectorEvidence: "P-1 AI is building an AI engineer for the physical world.",
    role: "lead",
    coInvestors: ["Cameron McCord", "Nick Marwell", "Jo Zhu Kennedy"],
    sourceUrl: "https://www.globenewswire.com/news-release/2026/07/29/3335235/0/en/engineering-ai-startup-p-1-ai-announces-its-series-a-financing-led-by-nea-adding-jeff-immelt-to-the-company-s-board.html", sourceType: "press-release",
    evidence: "P-1 AI, Inc., the company building Archie, an AI mechanical and electrical engineer for industrial teams, today announced the initial closing of its Series A financing round led by New Enterprise Associates (NEA)."
  },
  {
    firmSlug: "nea", company: "CuspAI",
    announcedDate: "2026-07-20", datePrecision: "day", round: "Series B",
    sector: "AI for Materials Discovery",
    sectorEvidence: "CuspAI's mission is to accelerate the discovery of new materials that do not yet exist. The company provides a search engine platform called MIRA, which enables partners to input desired physical properties to generate and validate new chemical compositions.",
    role: "lead",
    coInvestors: ["Kleiner Perkins", "Bezos Expeditions", "Glade Brook Capital Partners", "Lux Capital", "AMD Ventures", "Tru Arrow Partners", "StepStone", "Britain's Sovereign AI Venture Fund", "Invest-NL", "John Doerr", "Temasek", "Basis Set Ventures", "Giant Ventures", "Touring Capital", "Prosus", "Phoenix Court", "Northzone"],
    sourceUrl: "https://www.thesaasnews.com/news/cuspai-raises-450m-series-b/", sourceType: "reputable-press",
    evidence: "CuspAI Raises $450M Series B ... The round was led by Kleiner Perkins and NEA, with participation from Bezos Expeditions."
  },
  {
    firmSlug: "nea", company: "Valarian",
    announcedDate: "2026-07-13", datePrecision: "day", round: "Series A",
    sector: "Infrastructure Software",
    sectorEvidence: "Valarian provides workload-level governance across the environments where critical applications, AI systems and operational workloads run.",
    role: "lead",
    coInvestors: ["Lightbank", "XTX Ventures", "Litquidity Ventures", "Sequel", "Gokul Rajaram", "Nikesh Arora"],
    sourceUrl: "https://www.businesswire.com/news/home/20260713784977/en/Valarian-Raises-$50-Million-Series-a-Led-by-NEA-to-Deliver-the-Sovereign-Infrastructure-Layer-for-High-Consequence-Operations-and-AI-Driven-Systems", sourceType: "press-release",
    evidence: "Valarian, the company building the sovereign infrastructure layer for high-consequence operations and AI-driven systems, today announced $50 million in series A funding led by New Enterprise Associates (NEA)."
  },
  {
    firmSlug: "nea", company: "Databento",
    announcedDate: "2026-07-09", datePrecision: "day", round: "Series B",
    sector: "Market Data",
    sectorEvidence: "Databento is the market data platform for modern finance.",
    role: "lead",
    coInvestors: ["DRW Venture Capital", "Redpoint Ventures", "Tribe Capital"],
    sourceUrl: "https://www.prnewswire.com/news-releases/databento-raises-97-million-series-b-led-by-nea-302821464.html", sourceType: "press-release",
    evidence: "Databento, the market data platform for modern finance, today announced a $97 million Series B financing led by New Enterprise Associates (NEA)."
  },
  {
    firmSlug: "nea", company: "TwelveLabs",
    announcedDate: "2026-07-01", datePrecision: "day", round: "Series B",
    sector: "Video AI",
    sectorEvidence: "TwelveLabs is the world's most powerful video intelligence platform, that enables machines to perceive, understand, and reason about video the way humans do.",
    role: "lead",
    coInvestors: ["NAVER Ventures", "Amazon", "Radical Ventures", "Korea Investment Partners", "Index Ventures", "Quadrille Capital", "Red Bull Ventures"],
    sourceUrl: "https://www.globenewswire.com/news-release/2026/07/01/3320545/0/en/twelvelabs-raises-100-million-in-series-b-funding-to-build-video-superintelligence.html", sourceType: "press-release",
    evidence: "TwelveLabs Raises $100 Million in Series B Funding to Build Video Superintelligence ... The round was co-led by NEA and NAVER Ventures with participation from Amazon, Radical Ventures, Korea Investment Partners, Index Ventures, Quadrille Capital, and Red Bull Ventures."
  },
  {
    firmSlug: "radical-ventures", company: "Discovery Loop",
    announcedDate: "2026-08-05", datePrecision: "day", round: "seed round",
    sector: "AI Research Automation",
    sectorEvidence: "Discovery Loop is focused on automating this process. Instead of humans running experiments in series, the Discovery Loop team is building AI systems that run thousands of experiments in parallel.",
    role: "lead",
    coInvestors: ["Khosla Ventures", "Kleiner Perkins", "Lightspeed", "Doerr Capital"],
    sourceUrl: "https://radical.vc/our-investment-in-discovery-loop/", sourceType: "firm-announcement",
    evidence: "Radical Ventures is very proud to co-lead the seed round of Discovery Loop founded by Jeff Dean, Sanjay Ghemawat, Oriol Vinyals and Quoc Le."
  },
  {
    firmSlug: "radical-ventures", company: "Prime Intellect",
    announcedDate: "2026-07-08", datePrecision: "day", round: "Series A",
    sector: "AI Infrastructure",
    sectorEvidence: "The startup has developed what it calls a 'full stack' for AI agent development, which includes compute access, a reinforcement learning framework, and evaluation tools.",
    role: "lead",
    coInvestors: ["Nvidia Ventures", "Intel Capital", "Dell Technologies Capital", "Iconiq", "Aravind Srinivas", "Aaron Levie", "Winston Weinberg", "Jeff Wang", "Brendan Foody"],
    sourceUrl: "https://techcrunch.com/2026/07/08/prime-intellect-raises-130m-series-a-to-help-enterprises-build-their-own-ai-agents/", sourceType: "reputable-press",
    evidence: "Prime Intellect raises $130M Series A to help enterprises build their own AI agents ... The massive round was led by Radical Ventures, with participation from Nvidia Ventures, Intel Capital, Dell Technologies Capital, Iconiq, and a long list of angel investors who are founders of notable companies, including Aravind Srinivas (Perplexity), Aaron Levie (Box), Winston Weinberg (Harvey), Jeff Wang (Cognition), and Brendan Foody (Mercor)."
  },
  {
    firmSlug: "radical-ventures", company: "Mosaic",
    announcedDate: "2026-04-22", datePrecision: "day", round: "Series A",
    sector: "Fintech",
    sectorEvidence: "Mosaic automates and standardizes fundamental analyses, such as LBOs and DCFs, using deterministic, rules-based calculations combined with AI-powered ingestion and agentic workflows.",
    role: "lead",
    coInvestors: [],
    sourceUrl: "https://www.prnewswire.com/news-releases/mosaic-raises-18m-series-a-to-build-ai-driven-operating-system-for-deal-makers-302749611.html", sourceType: "press-release",
    evidence: "Mosaic, the AI-driven deal modeling platform built for private markets, today announced it has raised an $18 million Series A led by Radical Ventures."
  },
  {
    firmSlug: "radical-ventures", company: "OffDeal",
    announcedDate: "2025-07-29", datePrecision: "day", round: "Series A",
    sector: "Fintech",
    sectorEvidence: "OffDeal has raised a $12M Series A led by Radical Ventures to build the world's first AI-native investment bank.",
    role: "lead",
    coInvestors: ["Y Combinator", "Rebel Fund", "Centre Street Partners"],
    sourceUrl: "https://offdeal.io/news/offdeal-series-a-funding-radical-ventures-2025", sourceType: "company-announcement",
    evidence: "OffDeal has raised a $12M Series A led by Radical Ventures to build the world's first AI-native investment bank."
  },
  {
    firmSlug: "radical-ventures", company: "Intrepid Labs",
    announcedDate: "2025-05-12", datePrecision: "day", round: "pre-seed round",
    sector: "Biotech",
    sectorEvidence: "Intrepid Labs is unlocking a new era in drug formulation, in which delivery format, dosing frequency, and patient experience can be intentionally designed from day one.",
    role: "lead",
    coInvestors: ["Propagator Ventures"],
    sourceUrl: "https://betakit.com/biotech-intrepid-labs-exits-stealth-with-funding-from-radical-ventures-and-avant-bio/", sourceType: "reputable-press",
    evidence: "Intrepid is coming off a $7 million USD ($9.8 million CAD) seed round led by life science investor Avant Bio, building on a previously unannounced $4 million USD ($5.6 million) pre-seed round led by Radical Ventures with participation from Propagator Ventures."
  },
  {
    firmSlug: "intel-capital", company: "Zenity",
    announcedDate: "2026-08-03", datePrecision: "day", round: "Series C",
    sector: "Cybersecurity",
    sectorEvidence: "Zenity, the AI security and governance platform purpose-built for AI agents",
    role: "participant",
    coInvestors: ["Norwest", "Qumra Capital", "SoftBank Vision Fund 2", "Hitachi Ventures", "LG Technology Ventures", "Vertex Ventures", "Third Point Ventures", "DTCP"],
    sourceUrl: "https://www.intelcapital.com/zenity-raises-125-million-to-secure-the-era-of-1-billion-ai-agent/", sourceType: "press-release",
    evidence: "NEW YORK, Aug, 3, 2026 - Zenity, the AI security and governance platform purpose-built for AI agents, today announced a $125 million Series C led by Norwest. ... New investors Qumra Capital, SoftBank Vision Fund 2, Hitachi Ventures and LG Technology Ventures joined the round, alongside existing investors Vertex Ventures, Third Point Ventures, DTCP and Intel Capital."
  },
  {
    firmSlug: "intel-capital", company: "Xsight Labs",
    announcedDate: "2026-07-30", datePrecision: "day", round: null,
    sector: "Semiconductors",
    sectorEvidence: "Xsight Labs, a fabless semiconductor company providing intelligent connectivity solutions for next-generation hyperscale, edge, and AI data center networks",
    role: "participant",
    coInvestors: ["Fidelity Management & Research Company", "Aliya Capital Partners", "Atreides Management", "Artisan Partners", "Battery Ventures", "Diagonal Capital", "Key1 Capital", "Maverick Capital", "Sienna", "T. Rowe Price", "Union Group", "Valor Equity Partners"],
    sourceUrl: "https://www.intelcapital.com/xsight-labs-raises-more-than-300-million-at-2-8-billion-valuation-to-power-next-generation-ai-and-cloud-networks/", sourceType: "press-release",
    evidence: "SAN JOSE, Calif. & TEL AVIV, Israel - July 30, 2026 - Xsight Labs, a fabless semiconductor company providing intelligent connectivity solutions for next-generation hyperscale, edge, and AI data center networks, today announced the closing of a $300+ million funding round establishing a $2.8 billion post-money valuation. ... The round was led by Fidelity Management & Research Company with participation from Aliya Capital Partners, Atreides Management, Artisan Partners, Battery Ventures, Diagonal Capital, Intel Capital, Key1 Capital, Maverick Capital, Sienna, T. Rowe Price, Union Group, and Valor Equity Partners."
  },
  {
    firmSlug: "intel-capital", company: "Fly.io",
    announcedDate: "2026-07-24", datePrecision: "day", round: "Series D",
    sector: "AI Infrastructure",
    sectorEvidence: "Fly.io builds computers for agents - connected infrastructure designed for AI agents and the applications they build.",
    role: "lead",
    coInvestors: ["Dell Technologies Capital", "Andreessen Horowitz", "EQT", "Geodesic", "YC"],
    sourceUrl: "https://www.intelcapital.com/fly-io-doubles-down-on-computers-for-agents-with-25m-to-deliver-the-next-generation-of-ai-infrastructure/", sourceType: "press-release",
    evidence: "To accelerate this opportunity, Fly.io also announced $25 million in Series D funding co-led by Dell Technologies Capital and Intel Capital, with participation from Andreessen Horowitz, EQT, Geodesic, and YC."
  },
  {
    firmSlug: "intel-capital", company: "Prime Intellect",
    announcedDate: "2026-07-08", datePrecision: "day", round: "Series A",
    sector: "AI Infrastructure",
    sectorEvidence: "Prime Intellect, a startup that provides computing power and specialized software tools that help companies build AI agents",
    role: "participant",
    coInvestors: ["Radical Ventures", "Nvidia Ventures", "Dell Technologies Capital", "Iconiq"],
    sourceUrl: "https://techcrunch.com/2026/07/08/prime-intellect-raises-130m-series-a-to-help-enterprises-build-their-own-ai-agents/", sourceType: "reputable-press",
    evidence: "Prime Intellect, a startup that provides computing power and specialized software tools that help companies build AI agents, has raised a $130 million Series A ... led by Radical Ventures, with participation from Nvidia Ventures, Intel Capital, Dell Technologies Capital, Iconiq, and a long list of angel investors"
  },
  {
    firmSlug: "intel-capital", company: "Hark",
    announcedDate: "2026-05-21", datePrecision: "day", round: "Series A",
    sector: "Artificial Intelligence",
    sectorEvidence: "Hark is an artificial intelligence company developing highly intelligent, multimodal AI systems and native hardware devices designed to serve as a universal interface between humans and machines.",
    role: "participant",
    coInvestors: ["Parkway Venture Capital", "NVIDIA", "Align Ventures", "AMD Ventures", "ARK Invest", "Brookfield", "Greycroft", "Prime Movers Lab", "Qualcomm Ventures", "Salesforce Ventures", "Tamarack Global"],
    sourceUrl: "https://www.businesswire.com/news/home/20260521171628/en/Hark-Raises-$700M-Series-A-at-a-$6B-Valuation", sourceType: "press-release",
    evidence: "Hark, a new AI lab building advanced personalized intelligence, today announced it has raised over $700 million in Series A funding at a $6 billion post-money valuation. ... The round was oversubscribed and led by Parkway Venture Capital, with participation from NVIDIA, Align Ventures, AMD Ventures, ARK Invest, Brookfield, Greycroft, Intel Capital, Prime Movers Lab, Qualcomm Ventures, Salesforce Ventures, and Tamarack Global."
  },
];

/* Free-text deal sector -> canonical taxonomy.js bucket slugs.
   Multi-valued on purpose: "Healthcare AI" genuinely is both.
   Kept separate from taxonomy.js SECTOR_MAP so that adding a
   deal label can never change which firms appear on an SEO
   landing page. */
const DEAL_SECTOR_MAP = {
  "AI Benchmarking": ["ai"],
  "AI Evaluation": ["ai"],
  "AI Infrastructure": ["ai"],
  "AI Observability": ["ai"],
  "AI Research": ["ai"],
  "AI Research Automation": ["ai"],
  "AI Software Development": ["ai", "developer-tools"],
  "AI Training Infrastructure": ["ai"],
  "AI Video Software": ["ai"],
  "AI for Materials Discovery": ["ai", "deep-tech"],
  "Advanced Manufacturing": ["industrial-tech"],
  "Advanced Materials": ["deep-tech"],
  "Alternative Proteins": ["climate"],
  "Artificial Intelligence": ["ai"],
  "Autonomous Driving": ["mobility"],
  "Aviation Safety": ["mobility"],
  "Biotech": ["healthcare"],
  "Business Infrastructure": ["enterprise-software"],
  "Cloud Data Infrastructure": ["developer-tools"],
  "Cloud Infrastructure": ["developer-tools"],
  "Computational Biology": ["healthcare"],
  "Construction Compliance": ["enterprise-software", "industrial-tech"],
  "Construction Robotics": ["industrial-tech"],
  "Construction Tech": ["industrial-tech"],
  "Consumer Fintech": ["fintech", "consumer"],
  "Consumer Hardware": ["consumer"],
  "Critical Minerals": ["industrial-tech"],
  "Crypto / DeFi": ["crypto"],
  "Cybersecurity": ["cybersecurity"],
  "Defense Tech": ["defense-tech"],
  "Developer Infrastructure": ["developer-tools"],
  "Developer Security": ["cybersecurity"],
  "Developer Tools": ["developer-tools"],
  "Engineering AI": ["ai", "industrial-tech"],
  "Engineering Analytics": ["developer-tools"],
  "Enterprise AI": ["ai"],
  "Enterprise AI Agents": ["ai", "enterprise-software"],
  "Enterprise Software": ["enterprise-software"],
  "Fintech": ["fintech"],
  "Fusion Energy": ["climate"],
  "Healthcare": ["healthcare"],
  "Healthcare AI": ["healthcare", "ai"],
  "Healthcare Revenue Cycle": ["healthcare"],
  "Healthcare Software": ["healthcare"],
  "Identity Infrastructure": ["cybersecurity"],
  "Infrastructure Software": ["enterprise-software"],
  "Insurtech": ["fintech"],
  "Legal Tech": ["enterprise-software"],
  "Life Sciences AI": ["healthcare", "ai"],
  "Manufacturing Software": ["industrial-tech"],
  "Market Data": ["fintech"],
  "Market Research Software": ["enterprise-software"],
  "Marketing Technology": ["enterprise-software"],
  "Nuclear Energy": ["climate"],
  "Proptech": ["consumer"],
  "Quantum Computing": ["deep-tech"],
  "Real Estate Technology": ["enterprise-software"],
  "Robotics": ["deep-tech"],
  "Scientific R&D Software": ["enterprise-software"],
  "Semiconductors": ["deep-tech"],
  "Small Business Software": ["enterprise-software"],
  "Social Media": ["consumer"],
  "Software": ["enterprise-software"],
  "Space": ["deep-tech"],
  "Space and Defense": ["defense-tech", "deep-tech"],
  "Travel": ["mobility"],
  "Vertical SaaS": ["enterprise-software"],
  "Video AI": ["ai"],
  "Voice AI": ["ai"],
  "Weather Intelligence": ["deep-tech"],
};


/* Verbatim co-investor string (lower-cased) -> firm slug.

   coInvestors[] holds names exactly as each source wrote them, which
   is why the same firm appears as "Nvidia" / "NVIDIA" / "Nvidia
   Ventures" / "NVentures". Nothing downstream may join on those raw
   strings; this table is the only sanctioned bridge.

   It deliberately covers ONLY firms that themselves have deal rows.
   A co-investment claim should be checkable from both sides, and
   restricting it here keeps the denominator honest: "N of the M
   firms with deal coverage". Roughly 500 further co-investor names
   appear in the data and are intentionally unmapped - they are real,
   but the firms behind them have no rows of their own yet. */
const COINVESTOR_ALIASES = {
  "sequoia capital": "sequoia",
  "sequoia": "sequoia",
  "lightspeed venture partners": "lightspeed",
  "lightspeed": "lightspeed",
  "khosla ventures": "khosla-ventures",
  "bessemer venture partners": "bessemer",
  "spark capital": "spark-capital",
  "index ventures": "index-ventures",
  "lux capital": "lux-capital",
  "neo": "neo",
  "bloomberg beta": "bloomberg-beta",
  "nea": "nea",
  "new enterprise associates": "nea",
  "radical ventures": "radical-ventures",
  "intel capital": "intel-capital",
  "andreessen horowitz": "a16z",
  "andreessen horowitz (a16z)": "a16z",
  "a16z": "a16z",
  "ribbit capital": "ribbit-capital",
  "ribbit": "ribbit-capital",
  "8vc": "8vc",
  "y combinator": "y-combinator",
  "yc": "y-combinator",
  "y combinator's garry tan": "y-combinator",
  "softbank vision fund": "softbank-vision-fund",
  "softbank vision fund 2": "softbank-vision-fund",
  "threshold ventures": "threshold-ventures",
  "dcvc": "dcvc",
  "dcvc bio": "dcvc",
  "initialized capital": "initialized-capital",
  "dell technologies capital": "dell-technologies-capital",
  "tcv": "tcv",
  "kleiner perkins": "kleiner-perkins",
  "elad gil": "elad-gil"
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FIRM_DEALS: FIRM_DEALS, DEAL_SECTOR_MAP: DEAL_SECTOR_MAP, COINVESTOR_ALIASES: COINVESTOR_ALIASES };
}
