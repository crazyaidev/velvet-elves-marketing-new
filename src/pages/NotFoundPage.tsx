import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'

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
    </div>
  )
}
