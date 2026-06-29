import { Head } from 'vite-react-ssg'
import { canonical, SITE_NAME, SITE_URL, type PageMeta } from '@/lib/seo'

interface SeoProps extends PageMeta {
  /** JSON-LD objects serialized into <head> (Organization, FAQPage, HowTo, …). */
  jsonLd?: object[]
}

/**
 * Renders title/description/canonical/OpenGraph/Twitter + optional JSON-LD into
 * the prerendered <head>. Verified by checking view-source of each built page.
 */
export function Seo({ title, description, path, noindex, jsonLd }: SeoProps) {
  const url = canonical(path)
  // Per-page 1200x630 raster OG image (full Twitter/Slack/LinkedIn support).
  // Indexable routes have a matching /og/<slug>.png; noindex/utility routes fall
  // back to the brand default. Slug must match scripts that generate /og/*.png.
  const slug = path === '/' ? 'home' : path.replace(/^\//, '').replace(/\//g, '-')
  const ogImage = noindex ? `${SITE_URL}/og-default.png` : `${SITE_URL}/og/${slug}.png`
  const ogAlt = 'Velvet Elves, the AI transaction OS for real estate.'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        {noindex && <meta name="robots" content="noindex, follow" />}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={ogAlt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={ogAlt} />
      </Head>
      {/* JSON-LD is valid in the body and is reliably serialized into the
          prerendered HTML this way (unhead's Head drops dangerouslySetInnerHTML). */}
      {jsonLd?.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </>
  )
}
