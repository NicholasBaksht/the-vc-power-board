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
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COMPANY_ALIASES: COMPANY_ALIASES };
}
