/**
 * Sitewide navigation model. Brokers & Teams / Attorneys resolve to real anchors
 * until their own pages exist (post-v1), so there are no dead links.
 */
export const ROLE_LINKS = [
  { label: 'For Agents', href: '/agents' },
  { label: 'Brokers & Teams', href: '/brokers-teams' },
  { label: 'FSBO', href: '/fsbo' },
  { label: 'Attorneys', href: '/attorneys' },
] as const

export const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Product', href: '/product' },
      { label: 'How it works', href: '/how-it-works' },
      { label: 'Demo', href: '/demo' },
    ],
  },
  {
    heading: "Who it's for",
    links: [
      { label: 'Agents', href: '/agents' },
      { label: 'Brokers & Teams', href: '/brokers-teams' },
      { label: 'FSBO', href: '/fsbo' },
      { label: 'Attorneys', href: '/attorneys' },
      { label: 'Client Portal', href: '/client-portal' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'Guide', href: '/guides/contract-to-close' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Legal', href: '/legal' },
    ],
  },
] as const
