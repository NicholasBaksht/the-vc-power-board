/* SHARDED DATA FILE. The profiles themselves live in
   data-partners-1.js ... data-partners-6.js, each of which does
   Object.assign(partnerProfiles, {...}). This file must load FIRST.
   The shards are generated from a single canonical file - do not
   hand-edit them; new entries are appended to the last shard. */
const partnerProfiles = {};
