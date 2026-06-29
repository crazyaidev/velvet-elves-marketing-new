import {
  LayoutGrid,
  Boxes,
  Workflow,
  PlayCircle,
  User,
  Users,
  Home,
  Scale,
  MessagesSquare,
  HelpCircle,
  BookOpen,
  Sparkles,
  Mail,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'

export interface NavItem {
  label: string
  href: string
  /** Short supporting line shown in the dropdown mega-menu. */
  description?: string
  icon?: LucideIcon
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

/**
 * The full top-bar model. Every public page is reachable from the header via
 * one of these grouped dropdowns (the footer mirrors the same set). The panels
 * render in the static HTML, so links are crawlable even with JS off.
 */
export const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Product',
    items: [
      { label: 'Overview', href: '/product', description: 'The AI transaction OS', icon: LayoutGrid },
      { label: 'All features', href: '/features', description: 'Every capability, in depth', icon: Boxes },
      { label: 'How it works', href: '/how-it-works', description: 'Three steps, contract to close', icon: Workflow },
      { label: 'Watch demo', href: '/demo', description: 'See the product in motion', icon: PlayCircle },
    ],
  },
  {
    label: "Who it's for",
    items: [
      { label: 'Agents', href: '/agents', description: 'Win back your evenings', icon: User },
      { label: 'Brokers & Teams', href: '/brokers-teams', description: 'Pipeline visibility, no micromanaging', icon: Users },
      { label: 'FSBO sellers', href: '/fsbo', description: 'Sell with professional structure', icon: Home },
      { label: 'Attorneys', href: '/attorneys', description: 'Closing matters, handled', icon: Scale },
      { label: 'Client portal', href: '/client-portal', description: 'Clarity for buyers and sellers', icon: MessagesSquare },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'FAQ', href: '/faq', description: 'Questions, answered', icon: HelpCircle },
      { label: 'Contract-to-close guide', href: '/guides/contract-to-close', description: 'The 11-stage timeline', icon: BookOpen },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About', href: '/about', description: 'Why we built Velvet Elves', icon: Sparkles },
      { label: 'Contact', href: '/contact', description: 'Get in touch', icon: Mail },
      { label: 'Legal', href: '/legal', description: 'Privacy and terms', icon: ShieldCheck },
    ],
  },
]

export const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Product', href: '/product' },
      { label: 'All features', href: '/features' },
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
