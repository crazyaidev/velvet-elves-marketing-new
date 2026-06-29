/**
 * Generates public/sitemap.xml and public/robots.txt from the indexable route
 * table, then Vite copies them into dist/. Run automatically via `prebuild`.
 * (vite-react-ssg has no Next-style sitemap/robots convention — plan §1A/F8.)
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const SITE_URL = 'https://velvetelves.com'
const here = dirname(fileURLToPath(import.meta.url))
const publicDir = resolve(here, '../public')

// Indexable routes only — /create-account is noindex and the 404 is excluded.
const ROUTES = [
  { path: '/', priority: '1.0' },
  { path: '/product', priority: '0.9' },
  { path: '/features', priority: '0.9' },
  { path: '/how-it-works', priority: '0.8' },
  { path: '/demo', priority: '0.8' },
  { path: '/agents', priority: '0.9' },
  { path: '/brokers-teams', priority: '0.8' },
  { path: '/attorneys', priority: '0.7' },
  { path: '/client-portal', priority: '0.8' },
  { path: '/fsbo', priority: '0.8' },
  { path: '/faq', priority: '0.6' },
  { path: '/guides/contract-to-close', priority: '0.7' },
  { path: '/about', priority: '0.5' },
  { path: '/contact', priority: '0.5' },
  { path: '/legal', priority: '0.3' },
]

const today = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((r) => `  <url>\n    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`).join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /
Disallow: /create-account

Host: ${SITE_URL}
Sitemap: ${SITE_URL}/sitemap.xml
`

mkdirSync(publicDir, { recursive: true })
writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap)
writeFileSync(resolve(publicDir, 'robots.txt'), robots)
console.log(`[gen-seo] wrote sitemap.xml (${ROUTES.length} urls) + robots.txt`)
