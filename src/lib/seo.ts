/**
 * SEO/AEO helpers. The <Seo> component (components/seo/Seo.tsx) renders these
 * into the prerendered <head> so every static page ships complete metadata +
 * JSON-LD in view-source. Keep JSON-LD arrays fed from the SAME data as the
 * visible content (e.g. faqs) so structured data never drifts from the page.
 */
export const SITE_URL = 'https://velvetelves.com'
export const SITE_NAME = 'Velvet Elves'

export interface PageMeta {
  title: string
  description: string
  /** Absolute path beginning with a slash, e.g. "/agents". */
  path: string
  noindex?: boolean
}

export function canonical(path: string): string {
  return `${SITE_URL}${path === '/' ? '' : path}`
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    description:
      'AI-powered real estate transaction management and client-portal software for agents, teams, and FSBO sellers.',
  }
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  }
}

export function softwareApplicationJsonLd(opts: {
  description: string
  featureList: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    description: opts.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    publisher: { '@type': 'Organization', name: SITE_NAME },
    featureList: opts.featureList,
  }
}

export interface Faq {
  q: string
  a: string
}

export function faqPageJsonLd(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function howToJsonLd(opts: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

export function breadcrumbListJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
}
