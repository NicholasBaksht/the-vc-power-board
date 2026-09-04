/* ============================================================
   DATA-COMPANIES.JS
   Canonical Company entities. 369 companies.

   SHARDED DATA FILE. The records themselves live in
   data-companies-1.js and data-companies-2.js, each of which does
   Object.assign(COMPANIES, {...}). This file must load FIRST.
   Sharded because a single file passed 1MB, which is the limit above
   which the GitHub Contents API returns an empty body and the web
   editor stops being usable. Same reason data-partners is sharded.

   THE ID IS DURABLE, THE NAME IS NOT. companyId never changes once
   assigned, because every other dataset joins on it. The display name
   follows the company. LendingClub is the live example: it renamed to
   Happen on 2026-06-22, so name is "Happen" while companyId stays
   "lendingclub" and "LendingClub" becomes a former name. Renaming the
   id there would have silently orphaned every reference to it.

   Every non-null field carries its own source row naming the field it
   supports. Nulls are deliberate: an unsourced founding year is null,
   never a plausible guess.
   ============================================================ */

const COMPANIES = {};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COMPANIES: COMPANIES };
}
