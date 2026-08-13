#!/usr/bin/env python3
"""
crawl-team-snapshot.py  —  Power Alerts, Tier 1

Captures a dated roster of every firm's team page and writes it to
scripts/data-team-snapshots.js. Diffing two snapshots is what produces
partner arrivals and departures with real dates - the only true
time-series the dataset can generate without buying data.

USAGE
    python3 tools/crawl-team-snapshot.py            # crawl + append a snapshot
    python3 tools/crawl-team-snapshot.py --dry-run  # crawl, print, write nothing
    python3 tools/crawl-team-snapshot.py --only boldstart-ventures,neo

THE ONE RULE THAT MATTERS
    A failed scrape must never be recorded as an empty team. If a site
    is down, blocked, or rewritten, every partner would look like they
    departed and the engine would emit a wave of false alerts. So each
    row carries an explicit capture status, and rows that did not
    capture cleanly store people:null - never people:[]. The diff layer
    skips any firm whose either side is not "ok".
"""

import concurrent.futures as cf
import argparse, datetime, hashlib, json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEAM_FILE = os.path.join(ROOT, 'scripts', 'team-pages-data.js')
OUT_FILE = os.path.join(ROOT, 'scripts', 'data-team-snapshots.js')

UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/124.0 Safari/537.36')

# A "name" must look like a personal name and must NOT itself be a role
# label - team pages linearise to alternating name/role lines, and role
# text otherwise gets picked up as a person.
NAME_RE = re.compile(r"^[A-Z][a-zA-Z'À-ɏ\.\-]+(?: (?:van |von |de |del |di |da |la |el )?[A-Z][a-zA-Z'À-ɏ\.\-]+){1,3}$")
ROLE_RE = re.compile(
    r'\b(Managing Partner|General Partner|Founding Partner|Venture Partner|Operating Partner|'
    r'Managing Director|Executive Partner|Talent Partner|Administrative Partner|Partner Emeritus|'
    r'Partner|Principal|Associate|Analyst|Director|Founder|Co-?Founder|Chair(man|woman)?|'
    r'Chief [A-Za-z ]+ Officer|C[EFOTIM]O|President|Vice President|Head of [A-Za-z ]+|'
    r'Investor|Entrepreneur in Residence|EIR|Advisor|Counsel|Controller|Fellow|Scholar)\b', re.I)
# Strings that look like names but are navigation, legal or marketing.
NOISE_RE = re.compile(
    r'\b(Privacy|Terms|Cookie|Contact|Portfolio|Careers|Insights|Newsletter|Sign In|Log In|'
    r'Read More|Learn More|View All|All Rights|Our Team|The Team|Meet The|Load More|'
    r'Skip To|Open Menu|Close Menu|Back To|Home Page|Investor Relations)\b', re.I)


def fetch(url, timeout=20):
    try:
        r = subprocess.run(
            ['curl', '-sL', '--compressed', '--max-time', str(timeout), '-A', UA, url],
            capture_output=True, text=True, timeout=timeout + 8)
        return r.stdout or ''
    except Exception:
        return ''


def linearise(html):
    t = re.sub(r'<script.*?</script>|<style.*?</style>|<!--.*?-->', '', html, flags=re.S | re.I)
    t = re.sub(r'<(br|/p|/div|/li|/h[1-6]|/a|/td|/tr|/span)[^>]*>', '\n', t, flags=re.I)
    t = re.sub(r'<[^>]+>', '\n', t)
    for a, b in (('&amp;', '&'), ('&#039;', "'"), ('&rsquo;', "'"), ('&nbsp;', ' '),
                 ('&mdash;', '-'), ('&ndash;', '-'), ('&quot;', '"'), ('&#38;', '&')):
        t = t.replace(a, b)
    return [x.strip() for x in t.split('\n') if x.strip()]


def extract_people(html):
    """Pair each name-looking line with the nearest following role line."""
    lines = linearise(html)
    out, seen = [], set()
    for i, ln in enumerate(lines):
        if len(ln) > 44 or not NAME_RE.match(ln):
            continue
        # search(), not match(): titles like "Senior Associate" and
        # "Fractional CFO" carry the role word in second position and
        # would otherwise be captured as people.
        if NOISE_RE.search(ln) or ROLE_RE.search(ln):
            continue
        for j in (i + 1, i + 2):
            if j >= len(lines):
                break
            nxt = lines[j]
            # Carrying a role word is the whole test. An earlier
            # "and not NAME_RE.match(nxt)" guard here silently dropped
            # everyone whose title was two capitalised words -
            # "General Partner", "Managing Partner" - which is most
            # of a venture team.
            if len(nxt) < 70 and ROLE_RE.search(nxt):
                key = ln.lower()
                if key not in seen:
                    seen.add(key)
                    out.append({'name': ln, 'title': nxt})
                break
    return out


def load_team_pages():
    src = open(TEAM_FILE, encoding='utf-8').read()
    pages = {}
    for m in re.finditer(r'"([^"]+)"\s*:\s*(?:"([^"]+)"|null)\s*,', src):
        slug, url = m.group(1), m.group(2)
        if url:
            pages[slug] = url
    return pages


def crawl_one(item):
    slug, url = item
    html = fetch(url)
    if not html or len(html) < 500:
        return {'slug': slug, 'url': url, 'capture': 'failed',
                'reason': 'empty or truncated response', 'people': None}
    if re.search(r'<title[^>]*>\s*(404|not found|page not found)', html, re.I):
        return {'slug': slug, 'url': url, 'capture': 'failed',
                'reason': 'page returned a not-found document', 'people': None}
    if re.search(r'Just a moment\.\.\.|Checking your browser|cf-browser-verification', html, re.I):
        return {'slug': slug, 'url': url, 'capture': 'failed',
                'reason': 'bot challenge - needs a rendering crawler', 'people': None}
    people = extract_people(html)
    if len(people) < 2:
        # Almost certainly JS-rendered. Explicitly NOT an empty team.
        return {'slug': slug, 'url': url, 'capture': 'failed',
                'reason': 'no roster in static HTML - likely client-rendered',
                'people': None}
    return {'slug': slug, 'url': url, 'capture': 'ok', 'reason': None,
            'people': people,
            'hash': hashlib.sha1(
                '|'.join(sorted(p['name'].lower() for p in people)).encode()).hexdigest()[:12]}


def js_escape(s):
    return s.replace('\\', '\\\\').replace('"', '\\"')


def render_snapshot(date, rows):
    ok = [r for r in rows if r['capture'] == 'ok']
    lines = ['  {', '    date: "%s",' % date,
             '    captured: %d,' % len(ok),
             '    failed: %d,' % (len(rows) - len(ok)),
             '    rosters: {']
    for r in sorted(rows, key=lambda x: x['slug']):
        if r['capture'] != 'ok':
            lines.append('      "%s": { capture: "failed", reason: "%s", people: null },'
                         % (r['slug'], js_escape(r['reason'] or '')))
            continue
        ppl = ', '.join('{ name: "%s", title: "%s" }' % (js_escape(p['name']), js_escape(p['title']))
                        for p in r['people'])
        lines.append('      "%s": { capture: "ok", hash: "%s", people: [%s] },'
                     % (r['slug'], r['hash'], ppl))
    lines += ['    }', '  },']
    return '\n'.join(lines)


HEADER = '''/* ============================================================
   DATA-TEAM-SNAPSHOTS.JS  —  generated, do not hand-edit

   Dated rosters captured from each firm's own team page by
   tools/crawl-team-snapshot.py. Comparing two snapshots is what
   lets the Power Alerts engine report partner arrivals and
   departures against real dates.

   people: null means THE CAPTURE FAILED, not that the firm has
   no team. The two are never conflated: a failed capture stores
   null and the diff skips that firm entirely, so a site going
   down can never be reported as everybody leaving.

   Regenerate with:  python3 tools/crawl-team-snapshot.py
   ============================================================ */

const TEAM_SNAPSHOTS = [
'''

FOOTER = '''];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TEAM_SNAPSHOTS };
}
'''


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--only', default='')
    ap.add_argument('--workers', type=int, default=10)
    args = ap.parse_args()

    pages = load_team_pages()
    if args.only:
        keep = set(s.strip() for s in args.only.split(','))
        pages = {k: v for k, v in pages.items() if k in keep}
    print('crawling %d team pages...' % len(pages), flush=True)

    rows, done = [], 0
    with cf.ThreadPoolExecutor(max_workers=args.workers) as ex:
        for r in ex.map(crawl_one, sorted(pages.items())):
            rows.append(r)
            done += 1
            if done % 40 == 0:
                print('  %d/%d' % (done, len(pages)), flush=True)

    ok = [r for r in rows if r['capture'] == 'ok']
    people = sum(len(r['people']) for r in ok)
    print('\ncaptured %d/%d firms, %d people' % (len(ok), len(rows), people))
    reasons = {}
    for r in rows:
        if r['capture'] != 'ok':
            reasons[r['reason']] = reasons.get(r['reason'], 0) + 1
    for k, v in sorted(reasons.items(), key=lambda x: -x[1]):
        print('  failed %3d  %s' % (v, k))

    if args.dry_run:
        print('\n--dry-run: nothing written')
        return

    date = datetime.date.today().isoformat()
    block = render_snapshot(date, rows)
    if os.path.exists(OUT_FILE):
        src = open(OUT_FILE, encoding='utf-8').read()
        if ('date: "%s"' % date) in src:
            print('\na snapshot for %s already exists - not appending a duplicate' % date)
            return
        i = src.rindex('];')
        open(OUT_FILE, 'w', encoding='utf-8').write(src[:i] + block + '\n' + src[i:])
        print('\nappended snapshot %s to %s' % (date, OUT_FILE))
    else:
        open(OUT_FILE, 'w', encoding='utf-8').write(HEADER + block + '\n' + FOOTER)
        print('\nwrote baseline snapshot %s to %s' % (date, OUT_FILE))
    print('NOTE: arrivals/departures need two snapshots. Run again next month.')


if __name__ == '__main__':
    main()
