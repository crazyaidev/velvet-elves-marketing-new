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
  // SVG placeholder OG image. TODO(prod): replace with a 1200×630 PNG (satori
  // build step) for full Twitter/Slack/LinkedIn raster support, plan §1A/F8.
  const ogImage = `${SITE_URL}/og-default.svg`
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
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
