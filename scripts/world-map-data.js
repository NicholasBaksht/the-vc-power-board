/**
 * WORLD-MAP-DATA.JS
 * Real latitude/longitude coordinates for every unique HQ location
 * currently in data-firms.js, plus a region classifier used for the
 * region breakdown sidebar. Kept in its own file so the map's
 * geographic data stays separate from the map's rendering logic -
 * adding a new firm in a brand-new city just means adding one line
 * here, not touching any rendering code.
 *
 * A few near-duplicate HQ strings representing the same real city
 * (e.g. "Montreal, Canada" vs "Montreal, Quebec, Canada") are mapped
 * to identical coordinates on purpose, so they cluster into one pin
 * rather than showing as two separate nearby markers.
 */

const CITY_COORDS = {
  "San Francisco, CA": { lat: 37.7749, lng: -122.4194 },
  "San Francisco Bay Area, CA": { lat: 37.7749, lng: -122.4194 },
  "Menlo Park, CA": { lat: 37.4530, lng: -122.1817 },
  "Silicon Valley, CA": { lat: 37.3875, lng: -122.0575 },
  "Palo Alto, CA": { lat: 37.4419, lng: -122.1430 },
  "Mountain View, CA": { lat: 37.3861, lng: -122.0839 },
  "Santa Clara, CA": { lat: 37.3541, lng: -121.9552 },
  "San Mateo, CA": { lat: 37.5630, lng: -122.3255 },
  "Portola Valley, CA": { lat: 37.3838, lng: -122.2352 },
  "Redwood City, CA": { lat: 37.4852, lng: -122.2364 },
  "Foster City, CA": { lat: 37.5586, lng: -122.2711 },
  "Oakland, CA": { lat: 37.8044, lng: -122.2712 },
  "Belmont, CA": { lat: 37.5202, lng: -122.2758 },
  "Los Altos, CA": { lat: 37.3852, lng: -122.1141 },
  "San Jose, CA": { lat: 37.3382, lng: -121.8863 },
  "San Diego, CA": { lat: 32.7157, lng: -117.1611 },
  "Los Angeles, CA": { lat: 34.0522, lng: -118.2437 },
  "Santa Monica, CA": { lat: 34.0195, lng: -118.4912 },
  "Manhattan Beach, CA": { lat: 33.8847, lng: -118.4109 },
  "New York, NY": { lat: 40.7128, lng: -74.0060 },
  "Boston, MA": { lat: 42.3601, lng: -71.0589 },
  "Cambridge, MA": { lat: 42.3736, lng: -71.1097 },
  "Seattle, WA": { lat: 47.6062, lng: -122.3321 },
  "Kirkland, WA": { lat: 47.6769, lng: -122.2060 },
  "Chicago, IL": { lat: 41.8781, lng: -87.6298 },
  "Austin, TX": { lat: 30.2672, lng: -97.7431 },
  "Houston, TX": { lat: 29.7604, lng: -95.3698 },
  "Washington, D.C.": { lat: 38.9072, lng: -77.0369 },
  "Washington, DC": { lat: 38.9072, lng: -77.0369 },
  "Arlington, VA": { lat: 38.8816, lng: -77.0910 },
  "Alexandria, VA": { lat: 38.8048, lng: -77.0469 },
  "Boulder, CO": { lat: 40.0150, lng: -105.2705 },
  "Greenwich, CT": { lat: 41.0262, lng: -73.6282 },
  "Princeton, NJ": { lat: 40.3573, lng: -74.6672 },
  "Philadelphia, PA": { lat: 39.9526, lng: -75.1652 },
  "Fulton, MD": { lat: 39.1665, lng: -76.8983 },
  "Burlington, VT": { lat: 44.4759, lng: -73.2121 },
  "Jackson, WY": { lat: 43.4799, lng: -110.7624 },
  "Montreal, Canada": { lat: 45.5019, lng: -73.5674 },
  "Montreal, Quebec, Canada": { lat: 45.5019, lng: -73.5674 },
  "Toronto, Canada": { lat: 43.6532, lng: -79.3832 },
  "London, UK": { lat: 51.5074, lng: -0.1278 },
  "Oxford, UK": { lat: 51.7520, lng: -1.2577 },
  "Paris, France": { lat: 48.8566, lng: 2.3522 },
  "Berlin, Germany": { lat: 52.5200, lng: 13.4050 },
  "Munich, Germany": { lat: 48.1351, lng: 11.5820 },
  "Bonn, Germany": { lat: 50.7374, lng: 7.0982 },
  "Stuttgart, Germany": { lat: 48.7758, lng: 9.1829 },
  "Stockholm, Sweden": { lat: 59.3293, lng: 18.0686 },
  "Amsterdam, Netherlands": { lat: 52.3676, lng: 4.9041 },
  "Zurich, Switzerland": { lat: 47.3769, lng: 8.5417 },
  "Beijing, China": { lat: 39.9042, lng: 116.4074 },
  "Shanghai, China": { lat: 31.2304, lng: 121.4737 },
  "Singapore": { lat: 1.3521, lng: 103.8198 },
  "Tokyo, Japan": { lat: 35.6762, lng: 139.6503 },
  "Seoul, South Korea": { lat: 37.5665, lng: 126.9780 },
  "Bengaluru, India": { lat: 12.9716, lng: 77.5946 },
  "Kuala Lumpur, Malaysia": { lat: 3.1390, lng: 101.6869 },
  "Sydney, Australia": { lat: -33.8688, lng: 151.2093 },
  "Tel Aviv, Israel": { lat: 32.0853, lng: 34.7818 },
  "Herzliya, Israel": { lat: 32.1624, lng: 34.8447 },
  "Jerusalem, Israel": { lat: 31.7683, lng: 35.2137 },
  "Dubai, UAE": { lat: 25.2048, lng: 55.2708 },
  "Abu Dhabi, UAE": { lat: 24.4539, lng: 54.3773 },
  "Nairobi, Kenya": { lat: -1.2921, lng: 36.8219 },
  "Lagos, Nigeria": { lat: 6.5244, lng: 3.3792 },
  "Abuja, Nigeria": { lat: 9.0765, lng: 7.3986 },
  "Kigali, Rwanda": { lat: -1.9441, lng: 30.0619 },
  "Port Louis, Mauritius": { lat: -20.1609, lng: 57.5012 },
  "São Paulo, Brazil": { lat: -23.5505, lng: -46.6333 },
  "Buenos Aires, Argentina": { lat: -34.6037, lng: -58.3816 },
  "Cayman Islands (registered office; no single operating HQ disclosed)": { lat: 19.3133, lng: -81.2546 }
};

// Classifies a firm's HQ into one of seven broad regions, used for
// the Region Breakdown sidebar. Deliberately based on the country
// named in the HQ string rather than lat/long math, since a few
// borderline cases (e.g. Israel, UAE) sit geographically in Asia
// but are conventionally grouped as "Middle East" in this kind of
// breakdown - matching how most real VC ecosystem reports do it.
function classifyRegion(hq) {
  /* Same null-HQ guard as getCountryFromHQ below. This one only surfaced
     after that fix let execution reach the world map at all - it takes the
     raw hq string, not a country, so it needed its own guard. Returns null
     so the region breakdown can skip the firm instead of inventing a
     "North America" for a firm whose location is simply unknown. */
  if (typeof hq !== 'string' || !hq) return null;
  const h = hq.toLowerCase();
  if (h.includes('israel') || h.includes('uae') || h.includes('dubai') || h.includes('abu dhabi')) return 'Middle East';
  if (h.includes('kenya') || h.includes('nigeria') || h.includes('rwanda') || h.includes('mauritius')) return 'Africa';
  if (h.includes('brazil') || h.includes('argentina')) return 'South America';
  if (h.includes('australia')) return 'Oceania';
  if (
    h.includes('china') || h.includes('singapore') || h.includes('japan') ||
    h.includes('korea') || h.includes('india') || h.includes('malaysia')
  ) return 'Asia';
  if (
    h.includes('uk') || h.includes('france') || h.includes('germany') ||
    h.includes('sweden') || h.includes('netherlands') || h.includes('switzerland')
  ) return 'Europe';
  if (h.includes('canada')) return 'North America';
  if (h.includes('cayman')) return 'Other';
  return 'North America'; // remaining entries are all US states
}
// Extracts a real country name from an HQ string for the stats bar's
// "Countries" count. Handles US states explicitly since HQ strings
// store them as ", CA" / ", NY" etc rather than spelling out
// "United States" - everything else falls back to whatever follows
// the last comma, which covers the rest of the dataset correctly.
const US_STATE_SUFFIXES = ['CA', 'NY', 'MA', 'WA', 'IL', 'TX', 'CO', 'CT', 'NJ', 'PA', 'MD', 'VT', 'WY', 'VA', 'DC'];
function getCountryFromHQ(hq) {
  /* A firm may legitimately have no HQ on file. Illuminate Ventures does not
     publish one, so the dataset stores null rather than inventing a city, and
     this function was calling .includes() straight through it - which threw and
     took renderScaleBar, the world map and the relationship graph down with it.

     null is returned rather than a placeholder string: an unknown HQ is not a
     country, and callers that count or compare countries must not treat it as
     one. Call sites that build a country count filter it out. */
  if (typeof hq !== 'string' || !hq) return null;
  if (hq.includes('Cayman')) return 'Cayman Islands';
  if (hq.includes('Washington, D.C.')) return 'United States';
  if (US_STATE_SUFFIXES.some(st => hq.endsWith(', ' + st))) return 'United States';
  if (hq === 'Silicon Valley, CA' || hq === 'San Francisco Bay Area, CA') return 'United States';
  if (hq === 'Singapore') return 'Singapore';
  const parts = hq.split(',');
  return parts[parts.length - 1].trim();
}
