/**
 * TAXONOMY.JS
 * ============================================================
 * Maps the messy, organically-grown raw `sectors` and `hq` strings
 * in data.js into a small set of clean, canonical categories and
 * locations worth building a landing page for.
 *
 * WHY THIS EXISTS: data.js has 122 distinct raw sector strings
 * (many near-duplicates like "Fintech" / "Fintech Infrastructure",
 * or "Healthcare" / "Healthtech" / "Health Tech") because each was
 * written independently when that firm was researched. Building a
 * landing page per raw string would produce dozens of near-empty,
 * near-duplicate pages - exactly the "thin content" / "duplicate
 * content" problem Google penalizes. This file is the single place
 * that resolves that mess into real, page-worthy buckets.
 *
 * MAINTENANCE: when a new firm is added with a sector tag not yet
 * in SECTOR_MAP below, the generator will warn (not fail) and skip
 * mapping that tag - it'll still show up via the firm's OTHER
 * sector tags. Add the new tag to the right bucket below and
 * regenerate.
 * ============================================================
 */

const SECTOR_MAP = {
  'ai': {
    label: 'AI',
    slug: 'ai',
    description: 'artificial intelligence and machine learning',
    rawTags: ['AI', 'AI Infrastructure', 'AI Security', 'AI Services', 'Applied AI', 'AI & Data Infrastructure', 'AI/ML', 'AI-First Vertical Software', 'Data & AI', 'Machine Learning'],
  },
  'fintech': {
    label: 'Fintech',
    slug: 'fintech',
    description: 'financial technology, banking, and payments',
    rawTags: ['Fintech', 'Fintech Infrastructure', 'Banking Infrastructure', 'Lending', 'Insurance', 'Wealth', 'Insurtech'],
  },
  'crypto': {
    label: 'Crypto & Web3',
    slug: 'crypto',
    description: 'cryptocurrency, blockchain, and decentralized finance',
    rawTags: ['Crypto', 'Blockchain', 'DeFi', 'Web3'],
  },
  'healthcare': {
    label: 'Healthcare',
    slug: 'healthcare',
    description: 'healthcare, biotech, and life sciences',
    rawTags: ['Healthcare', 'Health', 'Healthtech', 'Health Tech', 'Healthcare IT', 'Digital Health', 'Biotech', 'Pharmaceuticals', 'Diagnostics', 'Therapeutics', 'Life Sciences', 'Human Health', 'Medical Devices'],
  },
  'climate': {
    label: 'Climate & Energy',
    slug: 'climate',
    description: 'climate technology, clean energy, and sustainability',
    rawTags: ['Climate', 'Clean Energy', 'Energy', 'Carbon Removal', 'Climate Resilience', 'Grid Technology', 'Agriculture', 'Food & Agriculture', 'Agritech'],
  },
  'cybersecurity': {
    label: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'cybersecurity and information security',
    rawTags: ['Cybersecurity', 'Security', 'AI Security', 'Cloud Security', 'National Security'],
  },
  'enterprise-software': {
    label: 'Enterprise Software',
    slug: 'enterprise-software',
    description: 'enterprise software, SaaS, and B2B technology',
    rawTags: ['Enterprise Software', 'Enterprise', 'Enterprise Infrastructure', 'Software', 'Business Software', 'B2B', 'B2B Software', 'Cloud Software', 'SaaS', 'Vertical SaaS', 'Infrastructure Software', 'Ecommerce Infrastructure', 'Future of Work'],
  },
  'consumer': {
    label: 'Consumer',
    slug: 'consumer',
    description: 'consumer internet, media, and direct-to-consumer brands',
    rawTags: ['Consumer', 'Consumer Internet', 'Consumer Tech', 'Media', 'Media Tech', 'Beauty & Personal Care', 'Ecommerce', 'Retail', 'Gaming'],
  },
  'deep-tech': {
    label: 'Deep Tech',
    slug: 'deep-tech',
    description: 'deep technology, semiconductors, and frontier science',
    rawTags: ['Deep Tech', 'Hard Tech', 'Frontier Technologies', 'Semiconductors', 'Semiconductors/Deep Tech', 'Robotics', 'Aerospace', 'New Technology'],
  },
  'defense-tech': {
    label: 'Defense Tech',
    slug: 'defense-tech',
    description: 'defense technology and dual-use systems',
    rawTags: ['Defense', 'Defense Tech', 'Defense & Dual-Use', 'Defense & Security', 'National Security', 'Autonomy'],
  },
  'marketplaces': {
    label: 'Marketplaces',
    slug: 'marketplaces',
    description: 'online marketplaces and commerce platforms',
    rawTags: ['Marketplaces', 'Commerce'],
  },
  'developer-tools': {
    label: 'Developer Tools & Infrastructure',
    slug: 'developer-tools',
    description: 'developer tools, cloud infrastructure, and data platforms',
    rawTags: ['Developer Tools', 'Developer Tooling', 'Cloud Infrastructure', 'Cloud/Infrastructure', 'Cloud', 'Data Infrastructure', 'Data & Analytics', 'Data', 'Infrastructure', 'Infrastructure & Developer Tools', 'Cloud/SaaS'],
  },
  'mobility': {
    label: 'Mobility & Logistics',
    slug: 'mobility',
    description: 'mobility, transportation, and supply chain technology',
    rawTags: ['Mobility', 'Automotive', 'Logistics', 'Supply Chain', 'Travel'],
  },
  'edtech': {
    label: 'Edtech',
    slug: 'edtech',
    description: 'education technology and workforce development',
    rawTags: ['Education', 'Edtech', 'Education Technology', 'Workforce Development'],
  },
  'industrial-tech': {
    label: 'Industrial & Manufacturing Technology',
    slug: 'industrial-tech',
    description: 'industrial technology, manufacturing, and IoT',
    rawTags: ['Manufacturing', 'Industrial Technology', 'IoT', 'Hardware', '5G', 'Industrial Tech'],
  },
};

// Raw sector strings deliberately NOT mapped to any category - these
// are generalist-fund descriptors that got used as sector tags, not
// real sectors. Firms carrying these still appear on any category
// page their OTHER sector tags qualify them for.
const UNMAPPED_DESCRIPTOR_TAGS = new Set([
  'Geographically Broad Early-Stage Investing (Outside Silicon Valley, Boston, and New York)',
  'Post-Seed / Early-Stage Technology (Generalist)',
  'Industry-Agnostic (Enterprise & Consumer Technology)',
  'Diverse Founders',
  'Generalist Early-Stage Technology',
  'Mobile',
  'Early-Stage Software',
  'Seed-Stage',
  'Sector-Agnostic',
  'Pre-Seed',
  'New Markets',
  'Design-Led Early-Stage Software',
  'Midwest Early-Stage Tech',
  'Social-Impact Software',
  'Early-Stage Technology',
  'Technology',
  'Internet',
]);

// Canonical locations. Each maps every raw `hq` string that should
// roll up into it. Order = display priority.
const LOCATION_MAP = {
  'silicon-valley': {
    label: 'Silicon Valley',
    slug: 'silicon-valley',
    description: 'the San Francisco Bay Area technology and venture capital hub',
    rawHQs: ['Menlo Park, CA', 'Palo Alto, CA', 'San Francisco, CA', 'Mountain View, CA', 'Santa Clara, CA',
             'Redwood City, CA', 'San Jose, CA', 'San Mateo, CA', 'Silicon Valley, CA', 'Los Altos, CA',
             'San Francisco Bay Area, CA', 'Belmont, CA', 'Oakland, CA'],
  },
  'new-york': {
    label: 'New York',
    slug: 'new-york',
    description: 'the New York City venture capital and finance ecosystem',
    rawHQs: ['New York, NY'],
  },
  'boston': {
    label: 'Boston',
    slug: 'boston',
    description: 'the Boston and Cambridge biotech and technology corridor',
    rawHQs: ['Boston, MA', 'Cambridge, MA'],
  },
  'los-angeles': {
    label: 'Los Angeles',
    slug: 'los-angeles',
    description: 'the Los Angeles technology and media venture scene',
    rawHQs: ['Los Angeles, CA', 'Santa Monica, CA', 'Manhattan Beach, CA'],
  },
  'europe': {
    label: 'Europe',
    slug: 'europe',
    description: 'European venture capital firms spanning the UK and continental Europe',
    rawHQs: ['London, UK', 'Paris, France', 'Berlin, Germany', 'Zurich, Switzerland', 'Bonn, Germany', 'Stuttgart, Germany'],
  },
  'israel': {
    label: 'Israel',
    slug: 'israel',
    description: 'the Tel Aviv and Israeli technology ecosystem',
    rawHQs: ['Tel Aviv, Israel'],
  },
  'asia-pacific': {
    label: 'Asia-Pacific',
    slug: 'asia-pacific',
    description: 'venture capital firms across Asia and the Pacific',
    rawHQs: ['Bengaluru, India', 'Shanghai, China', 'Tokyo, Japan', 'Kuala Lumpur, Malaysia', 'Singapore'],
  },
  'latin-america': {
    label: 'Latin America',
    slug: 'latin-america',
    description: 'venture capital firms investing across Latin America',
    rawHQs: ['Buenos Aires, Argentina', 'São Paulo, Brazil'],
  },
};

// Works both in Node (the generator script, via require) and in the
// browser (the live app, via a plain <script> tag) - same taxonomy,
// zero risk of the two environments drifting out of sync.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SECTOR_MAP, UNMAPPED_DESCRIPTOR_TAGS, LOCATION_MAP };
}
