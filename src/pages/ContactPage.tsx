import { Link } from 'react-router-dom'
import { Mail, ArrowRight } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { EmailCapture } from '@/components/ui/EmailCapture'
import { CONTACT_EMAIL } from '@/lib/config'

const ROLE_LINKS = [
  { label: 'For agents', href: '/agents' },
  { label: 'For FSBO sellers', href: '/fsbo' },
  { label: 'Client portal', href: '/client-portal' },
  { label: 'Read the FAQ', href: '/faq' },
]

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Velvet Elves"
        description="Get in touch with Velvet Elves, or sign up for product updates. We're happy to help you find the right starting point."
        path="/contact"
      />

      <section className="border-b border-ve-border bg-gradient-to-b from-ve-orange-light/60 to-ve-bg px-6 pb-14 pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow mark className="mb-4">Contact</Eyebrow>
          <h1 className="font-serif text-display-sm font-semibold text-ve-text-primary">Let&rsquo;s talk.</h1>
          <p className="mx-auto mt-4 max-w-xl text-lead text-ve-text-secondary">
            Questions, partnerships, or just curious? Reach out, or leave your email for product news.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-section-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-ve-border bg-white p-7 shadow-soft">
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-ve-orange-light text-ve-orange-dark">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="font-serif text-[20px] font-semibold text-ve-text-primary">Email us</h2>
            <p className="mt-2 text-[14px] text-ve-text-secondary">We read every message and reply quickly.</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-ve-orange-dark hover:text-ve-orange-xdark">
              {CONTACT_EMAIL}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-2xl border border-ve-border bg-white p-7 shadow-soft">
            <h2 className="font-serif text-[20px] font-semibold text-ve-text-primary">Get product updates</h2>
            <p className="mb-4 mt-2 text-[14px] text-ve-text-secondary">Occasional news on new features. No noise.</p>
            <EmailCapture interest="newsletter" sourcePage="/contact" />
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-ve-border bg-ve-bg p-6">
          <p className="mb-3 text-center text-[13px] font-medium uppercase tracking-wide text-ve-text-muted">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-3">
            {ROLE_LINKS.map((l) => (
              <Link key={l.href} to={l.href} className="rounded-full border border-ve-border bg-white px-4 py-2 text-[14px] font-medium text-ve-text-primary shadow-soft hover:border-ve-orange-border">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
