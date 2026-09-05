/* ============================================================
   DATA-COMPANY-ALIASES.JS
   Reviewed company identity decisions. Seed data, version
   controlled, one note per decision.

   WHY THIS FILE EXISTS
   The same company is written several ways across the datasets:
   "LendingClub" and "Lending Club", "athenahealth" and
   "Athenahealth". Normalisation alone cannot decide whether two
   strings are one company, because normalisation also collapses
   genuinely different companies that share a generic word.

   THE RULE
   Nothing here is inferred by a matcher. Every row was looked at
   individually. A row is APPROVED only where the two strings are
   demonstrably one company; where a generic name could plausibly
   belong to two different companies the row is NEEDS_REVIEW and the
   resolver treats it as UNRESOLVED rather than merging.

   Fuzzy matching may propose candidates for this file. It may never
   write an APPROVED row.

   STATUS
     APPROVED      resolver may merge alias into canonical
     NEEDS_REVIEW  resolver must NOT merge; awaiting research
     REJECTED      confirmed to be a different company

   TYPES
     BRAND_NAME     styling the company itself uses
     COMMON_NAME    everyday form of the name
     DOMAIN_VARIANT form taken from the company's domain
     FORMER_NAME    name before a rename
     LEGAL_NAME     registered entity name
     ACQUIRED_NAME  name under an acquirer
     TYPO_VARIANT   misspelling or stray capital
     OTHER
   ============================================================ */

const COMPANY_ALIASES = [
  /* Added 2026-09-02 from company batch 1. The datasets record the bare
     brand "Square"; data-companies.js records the former name as
     "Square, Inc." Those normalise differently, so this row is what
     joins them. Recorded explicitly rather than by stripping legal
     suffixes globally: that heuristic would also merge "Alloy" with
     "Alloy Enterprises", which partner-behavior.js already warns about,
     and it would buy exactly one join. */
  { canonicalCompanyId: "block",              alias: "Square",               normalizedAlias: "square",          aliasType: "FORMER_NAME",     status: "APPROVED",       reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Block",                 note: "Square, Inc. renamed to Block, Inc. on 2021-12-10. Sourced in data-companies.js under companyId block." },
  { canonicalCompanyId: "17live",          alias: "17LIVE",              normalizedAlias: "17live",          aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "17Live",                note: "Same company. Firm materials capitalise the brand; the company styles it 17Live." },
  { canonicalCompanyId: "1x",              alias: "1x",                  normalizedAlias: "1x",              aliasType: "TYPO_VARIANT",    status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "1X",                    note: "1X Technologies, the humanoid robotics company. Case only." },
  { canonicalCompanyId: "athenahealth",    alias: "Athenahealth",        normalizedAlias: "athenahealth",    aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "athenahealth",          note: "The company styles itself lowercase. Sentence-case form is a source's house style." },
  { canonicalCompanyId: "auto1group",      alias: "AUTO1 Group",         normalizedAlias: "auto1group",      aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Auto1 Group",           note: "Same company across three datasets. Case only." },
  { canonicalCompanyId: "begin",           alias: "BEGIN",               normalizedAlias: "begin",           aliasType: "COMMON_NAME",     status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Begin",                 note: "Generic English word. Both mentions are partner rows and could be two unrelated companies. Not merged." },
  { canonicalCompanyId: "bluebirdbio",     alias: "Bluebird Bio",        normalizedAlias: "bluebirdbio",     aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "bluebird bio",          note: "NASDAQ: BLUE. The company styles the name lowercase." },
  { canonicalCompanyId: "brumbrum",        alias: "BrumBrum",            normalizedAlias: "brumbrum",        aliasType: "TYPO_VARIANT",    status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Brumbrum",              note: "Italian used-car marketplace. Internal capital only." },
  { canonicalCompanyId: "cred",            alias: "Cred",                normalizedAlias: "cred",            aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "CRED",                  note: "Indian fintech, styled CRED in the company's own materials." },
  { canonicalCompanyId: "edge",            alias: "EDGE",                normalizedAlias: "edge",            aliasType: "COMMON_NAME",     status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Edge",                  note: "Generic word appearing in BOTH partner and angel data. A collision between two different companies is plausible. Not merged." },
  { canonicalCompanyId: "epic",            alias: "Epic!",               normalizedAlias: "epic",            aliasType: "BRAND_NAME",      status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Epic",                  note: "'Epic!' is the children's reading app; 'Epic' could be Epic Games or Epic Systems. Punctuation here may distinguish real companies. Not merged." },
  { canonicalCompanyId: "fairmoney",       alias: "Fairmoney",           normalizedAlias: "fairmoney",       aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "FairMoney",             note: "Nigerian digital bank. Internal capital only." },
  { canonicalCompanyId: "fiveai",          alias: "Five.AI",             normalizedAlias: "fiveai",          aliasType: "DOMAIN_VARIANT",  status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "FiveAI",                note: "UK autonomous driving company, five.ai. Domain form versus brand form." },
  { canonicalCompanyId: "forescout",       alias: "ForeScout",           normalizedAlias: "forescout",       aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Forescout",             note: "Forescout Technologies. Company dropped the internal capital." },
  { canonicalCompanyId: "getharley",       alias: "Get Harley",          normalizedAlias: "getharley",       aliasType: "COMMON_NAME",     status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "GetHarley",             note: "UK skincare marketplace getharley.com. Spacing only." },
  { canonicalCompanyId: "giphy",           alias: "Giphy",               normalizedAlias: "giphy",           aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "GIPHY",                 note: "Company styles the name in caps." },
  { canonicalCompanyId: "grubhub",         alias: "GrubHub",             normalizedAlias: "grubhub",         aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Grubhub",               note: "Company dropped the internal capital in 2021 rebrand." },
  { canonicalCompanyId: "horizon3ai",      alias: "Horizon 3 AI",        normalizedAlias: "horizon3ai",      aliasType: "DOMAIN_VARIANT",  status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Horizon3.ai",           note: "Security company horizon3.ai. Domain form versus spaced form." },
  { canonicalCompanyId: "hyperscience",    alias: "HyperScience",        normalizedAlias: "hyperscience",    aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Hyperscience",          note: "Document AI company. Internal capital dropped." },
  { canonicalCompanyId: "ipsy",            alias: "Ipsy",                normalizedAlias: "ipsy",            aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "IPSY",                  note: "Three spellings of one beauty subscription company." },
  { canonicalCompanyId: "ipsy",            alias: "ipsy",                normalizedAlias: "ipsy",            aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "IPSY",                  note: "Lowercase form of the same company." },
  { canonicalCompanyId: "jump",            alias: "JUMP",                normalizedAlias: "jump",            aliasType: "COMMON_NAME",     status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Jump",                  note: "Generic word. JUMP Bikes (Uber) and other companies named Jump both exist. Not merged." },
  { canonicalCompanyId: "kayak",           alias: "Kayak",               normalizedAlias: "kayak",           aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "KAYAK",                 note: "Travel search company, styled in caps." },
  { canonicalCompanyId: "lendingclub",     alias: "Lending Club",        normalizedAlias: "lendingclub",     aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "LendingClub",           note: "NYSE: LC. Company writes it as one word." },
  { canonicalCompanyId: "masterclass",     alias: "Masterclass",         normalizedAlias: "masterclass",     aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "MasterClass",           note: "Internal capital only." },
  { canonicalCompanyId: "mimo",            alias: "mimo",                normalizedAlias: "mimo",            aliasType: "COMMON_NAME",     status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Mimo",                  note: "Appears in both partner and angel data. Several unrelated companies use this name. Not merged." },
  { canonicalCompanyId: "mulesoft",        alias: "Mulesoft",            normalizedAlias: "mulesoft",        aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "MuleSoft",              note: "Acquired by Salesforce. Internal capital only." },
  { canonicalCompanyId: "mycotechnology",  alias: "Mycotechnology",      normalizedAlias: "mycotechnology",  aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "MycoTechnology",        note: "Food tech company. Internal capital only." },
  { canonicalCompanyId: "neo",             alias: "NEO",                 normalizedAlias: "neo",             aliasType: "COMMON_NAME",     status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Neo",                   note: "Appears in deals AND partner data. Neo is used by an accelerator, a fintech and others. Not merged." },
  { canonicalCompanyId: "open",            alias: "&Open",               normalizedAlias: "open",            aliasType: "BRAND_NAME",      status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Open",                  note: "'&Open' is an Irish corporate gifting company. 'Open' alone may be a different company entirely. The strings differ by more than case. Not merged." },
  { canonicalCompanyId: "planradar",       alias: "Planradar",           normalizedAlias: "planradar",       aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "PlanRadar",             note: "Austrian construction software. Internal capital only." },
  { canonicalCompanyId: "quillbot",        alias: "Quillbot",            normalizedAlias: "quillbot",        aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "QuillBot",              note: "Writing tool acquired by Course Hero. Internal capital only." },
  { canonicalCompanyId: "robco",           alias: "Robco",               normalizedAlias: "robco",           aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "RobCo",                 note: "German robotics company, appears in deals and partner data. Internal capital only." },
  { canonicalCompanyId: "sennder",         alias: "Sennder",             normalizedAlias: "sennder",         aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "sennder",               note: "Berlin freight company styles the name lowercase." },
  { canonicalCompanyId: "thredup",         alias: "thredUP",             normalizedAlias: "thredup",         aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "ThredUp",               note: "NASDAQ: TDUP. Two stylings of one company." },
  { canonicalCompanyId: "twelvelabs",      alias: "Twelve Labs",         normalizedAlias: "twelvelabs",      aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "TwelveLabs",            note: "Video AI company, appears in deals and partner data. Spacing only." },
  { canonicalCompanyId: "wefox",           alias: "Wefox",               normalizedAlias: "wefox",           aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "wefox",                 note: "German insurtech styles the name lowercase." },
  { canonicalCompanyId: "whoop",           alias: "Whoop",               normalizedAlias: "whoop",           aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "WHOOP",                 note: "Wearables company styles the name in caps." },
  { canonicalCompanyId: "writer",          alias: "WRITER",              normalizedAlias: "writer",          aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Writer",                note: "Enterprise AI writing company writer.com. Appears in partner and angel data." },
  { canonicalCompanyId: "yahoo",           alias: "Yahoo",               normalizedAlias: "yahoo",           aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Yahoo!",                note: "The exclamation mark is part of the registered brand." },
  { canonicalCompanyId: "ziroom",          alias: "自如 (Ziroom)",         normalizedAlias: "自如ziroom",        aliasType: "COMMON_NAME",     status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Ziroom",                note: "Chinese rental platform. One source records the Chinese name with romanisation appended." },
  { canonicalCompanyId: "zoe",             alias: "Zoe",                 normalizedAlias: "zoe",             aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "ZOE",                   note: "Nutrition science company, styled in caps. Appears in partner and angel data." },
  { canonicalCompanyId: "zulily",          alias: "zulily",              normalizedAlias: "zulily",          aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-02",
    canonicalName: "Zulily",                note: "Online retailer. Case only." },

  /* Added 2026-09-03 from company batch 6. Each of these was checked
     against a first-party source AND against the Power Board evidence
     row that produced the variant spelling, because a name matching in
     the abstract is not the same as the two strings in our data being
     one company. The ticker carried on the evidence row is what settled
     three of the five. */
  { canonicalCompanyId: "temporaltechnologies", alias: "Temporal",       normalizedAlias: "temporal",        aliasType: "COMMON_NAME",     status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-03",
    canonicalName: "Temporal Technologies", note: "temporal.io Terms of Service opens 'OFFERED BY TEMPORAL TECHNOLOGIES INC. (\"TEMPORAL\")'. Our rows for the bare name are the 2026-02-17 Series D, described as a durable execution layer, which is the same company." },
  { canonicalCompanyId: "recursion",       alias: "Recursion Pharmaceuticals", normalizedAlias: "recursionpharmaceuticals", aliasType: "LEGAL_NAME", status: "APPROVED", reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-03",
    canonicalName: "Recursion",             note: "SEC EDGAR CIK 0001601830 registrant RECURSION PHARMACEUTICALS, INC., ticker RXRX. Every one of our rows for the long form carries ticker RXRX, so both strings are the entity filed under companyId recursion." },
  { canonicalCompanyId: "planetlabs",      alias: "Planet",              normalizedAlias: "planet",          aliasType: "BRAND_NAME",      status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-03",
    canonicalName: "Planet Labs",           note: "planet.com calls the company Planet throughout and its footer reads Planet Labs PBC, matching SEC registrant Planet Labs PBC, NYSE:PL. Both of our rows for the bare name carry ticker PL, one of them sourced to the company's own Series C announcement." },
  { canonicalCompanyId: "block",           alias: "Square (Block)",      normalizedAlias: "squareblock",     aliasType: "OTHER",           status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-03",
    canonicalName: "Block",                 note: "A disambiguator written into the source, not a second company. SEC EDGAR CIK 0001512673 shows registrant Block, Inc. with former name Square, Inc. Our rows for this string carry ticker XYZ, which is Block's own ticker." },
  { canonicalCompanyId: "block",           alias: "Block (Square)",      normalizedAlias: "blocksquare",     aliasType: "OTHER",           status: "APPROVED",      reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-03",
    canonicalName: "Block",                 note: "The same disambiguator with the two names reversed. Appears twice in data-partners-1.js and is already listed as a block alias in data-company-sectors.js." },

  /* THREE REJECTIONS FROM BATCH 6, DELIBERATELY NOT ROWS.
     Researched, settled, and recorded here rather than in the array,
     because cmpIndex() treats every non-APPROVED status as hold-back:
     it would push both the alias AND the canonical name into `held`,
     and a string with no entity yet would then resolve to
     'held-for-review' instead of the honest 'not in registry'. The
     finding belongs in version control; feeding it to the resolver
     would misreport it.

       TwelveLabs is NOT Twelve.
         TwelveLabs, Inc., twelvelabs.io, San Francisco video AI.
         Twelve is Twelve Benefit Corporation, twelve.co, Berkeley CO2
         electrolysis, formerly Opus 12. Different domain, entity,
         product, founders and city. companyId twelvelabs is already
         reserved by the "Twelve Labs" row above and still needs an
         entity record.

       Snapdocs is NOT Snap.
         Snapdocs, Inc., snapdocs.com, San Francisco mortgage closing
         software. Snap is Snap Inc., NYSE:SNAP. No corporate
         relationship. Snapdocs now has its own entity from batch 6.

       Quo is NOT Quora.
         Nothing shows Quora ever using the name Quo, and our own
         evidence rules it out: Quo appears in three separate portfolio
         listings, and Craft Ventures links its entry to quo.com. Quora
         appears separately under its own name in the same dataset.
         quo.com still needs an entity record. */

  /* Added 2026-09-04 from company batch 7. SIX CONFIRMED COLLISIONS.
     Each of these strings is TWO real operating companies, each
     verified from the investing firm's own portfolio page, and both
     normalise to the same companyId. No suffix was invented and no
     entity was created for either side.

     They are held rather than split because our datasets join on the
     NAME, not on an id. We know which company each individual row
     means - the investor tells us - but a row cannot yet point at one
     of two entities. Until evidence rows carry a companyId, the honest
     state is that the bare string does not resolve. cmpResolve returns
     held-for-review, cmpBuildBackIndex keys these under review: so the
     two companies' investor lists never merge, and no company page is
     published on a name we cannot pin down.

     This is the same machinery already holding EDGE, &Open and Epic!,
     applied to cases that are now proven rather than suspected. */
  { canonicalCompanyId: "paladin",         alias: "Paladin",             normalizedAlias: "paladin",         aliasType: "COMMON_NAME",     status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-04",
    canonicalName: "Paladin",               note: "TWO COMPANIES. Paladin Drones at paladindrones.io, autonomous drones dispatched to 911 calls, Houston, is the Gradient Ventures row reading 'AI for emergency response'. Paladin, PBC at joinpaladin.com, pro bono legal work management, NYC, is the angel row reading 'Legal Tech'. Different domains, entities, founders, cities and sectors. Not merged." },
  { canonicalCompanyId: "casa",            alias: "Casa",                normalizedAlias: "casa",            aliasType: "COMMON_NAME",     status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-04",
    canonicalName: "Casa",                  note: "TWO COMPANIES. Casa at getcasa.com, membership home maintenance, is the 2026-04-30 Proptech deal row; confirmed from lead investor Forerunner's own post, which links the domain and names founders York and Mizrahi. Casa at casa.io, bitcoin self-custody, is the Acrew Capital row tagged Crypto; Acrew led its 21M Series A. Forerunner is in one round and not the other, and Acrew the reverse. Not merged." },
  { canonicalCompanyId: "pie",             alias: "Pie",                 normalizedAlias: "pie",             aliasType: "COMMON_NAME",     status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-04",
    canonicalName: "Pie",                   note: "TWO COMPANIES, and the sector labels would NOT have separated them: an insurer is plausibly Fintech. Decided on investors instead. Pie at getpie.com, AI growth for local merchants, is the 2026-06-30 Series A; Acrew is not in that round. Pie Insurance at pieinsurance.com names Acrew on its own investors page and Acrew co-led its Series C, so the Acrew row is Pie Insurance, which calls itself 'Pie'. Not merged." },
  { canonicalCompanyId: "liquid",          alias: "Liquid",              normalizedAlias: "liquid",          aliasType: "COMMON_NAME",     status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-04",
    canonicalName: "Liquid",                note: "TWO COMPANIES. Liquid at liquid.trade, 24/7 multi-asset trading, legal entity LiquidX AI, Inc., New York, is the 2026-04-21 Fintech deal row. Flourish Ventures' own portfolio page at the slug 'liquid' is a Brazilian real estate credit infrastructure company at beliquid.ai, which is the bare Flourish row. Flourish is not a liquid.trade investor. A third Liquid AI, the MIT liquid-neural-network company, is neither. Not merged." },
  { canonicalCompanyId: "enigma",          alias: "Enigma",              normalizedAlias: "enigma",          aliasType: "COMMON_NAME",     status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-04",
    canonicalName: "Enigma",                note: "TWO COMPANIES. Enigma at enigma.inc, robotic foundation models, entity Enigma AI Labs, Inc., is the 2026-07-27 Robotics seed with Index, Ribbit and Conviction. Kindred Ventures' own company page under the slug 'enigma' is headed 'Enigma Labs', the UAP sightings platform at enigmalabs.io, which is the bare Kindred row; Kindred is not in the robotics round and that company was founded in 2025. Enigma Technologies, the better-known business-data company, is neither row. Not merged." },
  { canonicalCompanyId: "ellis",           alias: "Ellis",               normalizedAlias: "ellis",           aliasType: "COMMON_NAME",     status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-04",
    canonicalName: "Ellis",                 note: "TWO COMPANIES. Ellis at ellis.ai, private credit operations software founded by Ryan Williams, is the 2026-07-31 Seed row. Kindred Ventures' own portfolio page for 'ellis' describes a modern immigration-tech company, which is Ellis at ellis.com, entity Ellis Technologies, Inc. Kindred is not among the ellis.ai seed investors. Not merged." },

  /* Added 2026-09-04 from company batch 8. Two more confirmed
     collisions and one name whose identity could not be established
     at all. Same reasoning as the batch 7 block above: the datasets
     join on the name, so a string that is two companies cannot be
     split into two entities until the evidence rows carry an id. */
  { canonicalCompanyId: "weave",           alias: "Weave",               normalizedAlias: "weave",           aliasType: "COMMON_NAME",     status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-04",
    canonicalName: "Weave",                 note: "TWO COMPANIES, and the ticker settles it. Weave at weaveos.com is a Y Combinator W25 company founded 2024, engineering intelligence, 13.5M Series A on 2026-07-28, no ticker. Weave Communications, Inc. at getweave.com is NYSE:WEAV, SEC CIK 0001609151, Lehi Utah, patient engagement for healthcare practices, listed since 2021. A live NYSE ticker on one row and a 2026 YC Series A on the other cannot be one company. Not merged." },
  { canonicalCompanyId: "hubble",          alias: "Hubble",              normalizedAlias: "hubble",          aliasType: "COMMON_NAME",     status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-04",
    canonicalName: "Hubble",                note: "TWO COMPANIES, and neither is the one we expected. Salesforce Ventures' own portfolio page for Hubble links hubble-docs.com, contract lifecycle SaaS, Tokyo, CEO Shimpei Hayakawa - that is the Salesforce Ventures row. Angel Katie Dunn's own published portfolio links hubble.social, a US expert-consulting marketplace - that is the angel row. Hubble Contacts and the insightsoftware analytics product are ruled out: neither investor's page links them. Not merged." },
  { canonicalCompanyId: "ohana",           alias: "Ohana",               normalizedAlias: "ohana",           aliasType: "COMMON_NAME",     status: "NEEDS_REVIEW",  reviewedBy: "nicholas-baksht", reviewedAt: "2026-09-04",
    canonicalName: "Ohana",                 note: "IDENTITY NOT ESTABLISHED, which is different from the collisions above. Our own row says 'Consumer, menopause consumer brand' and no company of that name in that category could be found; the femtech search surfaced Midi, Alloy, Evernow, Bonafide, Womaness, Omena and Vira Health but never an Ohana. Real companies called Ohana exist (liveohana.ai student housing, joinohana.io, Ohana & Co) but none is a menopause brand. Not merged, and not matched to any of them. NEXT STEP: the sectored row is Nico Berardi at ANIMO Ventures, so ANIMO's own portfolio page should settle it; the bare row is angel Johann Hansmann." },
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COMPANY_ALIASES: COMPANY_ALIASES };
}
