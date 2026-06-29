import { Link } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'

const QUICK_LINKS = [
  { label: 'Product', href: '/product' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'For agents', href: '/agents' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
      <Seo title="Page not found: Velvet Elves" description="The page you were looking for could not be found." path="/404" noindex />
      <p className="font-mono text-kicker uppercase text-ve-orange">404</p>
      <h1 className="font-serif text-display-sm font-semibold text-ve-text-primary">This page wandered off.</h1>
      <p className="max-w-prose text-lead text-ve-text-secondary">
        The link may be broken or the page may have moved. Let&rsquo;s get you back on track.
      </p>
      <Button href="/" variant="primary" size="lg">Back to home</Button>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-2.5">
        {QUICK_LINKS.map((l) => (
          <Link
            key={l.href}
            to={l.href}
            className="rounded-full border border-ve-border bg-white px-4 py-2 text-[14px] font-medium text-ve-text-primary shadow-soft transition-colors hover:border-ve-orange-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ve-orange focus-visible:ring-offset-2"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
