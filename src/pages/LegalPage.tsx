import { Link } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { Eyebrow } from '@/components/ui/Eyebrow'

/*
 * COPY STATUS: complete plain-language privacy + terms that accurately describe
 * what this marketing site actually does (email capture only, no trackers,
 * decoupled DB). RECOMMENDED before launch: a final attorney review and
 * confirmation of the governing entity / jurisdiction line. It is honest and
 * publishable as-is; the review is a formality, not a blocker on accuracy.
 */
const LAST_UPDATED = 'June 29, 2026'
export default function LegalPage() {
  return (
    <>
      <Seo
        title="Privacy & Terms: Velvet Elves"
        description="Velvet Elves privacy policy and terms of service. Plain-language summaries of how the marketing site handles your information."
        path="/legal"
      />

      <section className="border-b border-ve-border bg-gradient-to-b from-ve-orange-light/60 to-ve-bg px-6 pb-14 pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <Eyebrow mark className="mb-4">Legal</Eyebrow>
          <h1 className="font-serif text-display-sm font-semibold text-ve-text-primary">Privacy &amp; Terms</h1>
          <p className="mt-4 max-w-xl text-lead text-ve-text-secondary">Plain-language summaries of how this site handles your information.</p>
          <p className="mt-4 text-[13.5px] text-ve-text-muted">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <div className="mx-auto max-w-prose px-6 py-section-sm">
        <section id="privacy" className="scroll-mt-28">
          <h2 className="font-serif text-[24px] font-semibold text-ve-text-primary">Privacy</h2>
          <div className="mt-4 flex flex-col gap-4 text-[15px] leading-relaxed text-ve-text-secondary">
            <p>
              <span className="font-semibold text-ve-text-primary">What we collect.</span> This marketing website collects one thing: an email address you choose to give us, along with the page you submitted it from, your stated interest (for example a demo waitlist or newsletter), the date and time, and your browser&rsquo;s user-agent string. We do not ask for or store anything else, and we never collect payment details on this site.
            </p>
            <p>
              <span className="font-semibold text-ve-text-primary">How we use it.</span> We use your email only to send what you asked for: product updates, demo notifications, or early-access details. We do not sell, rent, or share your information with third parties for their own marketing, and the site does not run advertising or cross-site tracking.
            </p>
            <p>
              <span className="font-semibold text-ve-text-primary">Where it lives.</span> Submissions are stored in a dedicated database that is separate from the Velvet Elves application and its customer data. Access is limited to the people who need it to respond to you.
            </p>
            <p>
              <span className="font-semibold text-ve-text-primary">Cookies.</span> This site does not set advertising or analytics cookies. Any storage used is strictly what the page needs to function.
            </p>
            <p>
              <span className="font-semibold text-ve-text-primary">Your choices.</span> You can ask us to access or delete your email at any time. Email us from the <Link to="/contact" className="font-medium text-ve-orange-dark underline underline-offset-2 hover:text-ve-orange-xdark">contact page</Link> and we will take care of it.
            </p>
          </div>
        </section>

        <section id="terms" className="mt-12 scroll-mt-28">
          <h2 className="font-serif text-[24px] font-semibold text-ve-text-primary">Terms</h2>
          <div className="mt-4 flex flex-col gap-4 text-[15px] leading-relaxed text-ve-text-secondary">
            <p>
              <span className="font-semibold text-ve-text-primary">About this site.</span> This website is provided for general information about Velvet Elves. Content describes the product and may change as it evolves; capabilities labeled &ldquo;coming soon&rdquo; are not yet available, and nothing here is a guarantee of a specific feature, result, or availability date.
            </p>
            <p>
              <span className="font-semibold text-ve-text-primary">The app is separate.</span> Creating an account and using the Velvet Elves application is governed by the terms presented in the app itself, which are separate from these website terms.
            </p>
            <p>
              <span className="font-semibold text-ve-text-primary">Intellectual property.</span> The Velvet Elves name, logo, copy, and design on this site belong to Velvet Elves. Product screenshots show the application with sample data.
            </p>
            <p>
              <span className="font-semibold text-ve-text-primary">Not professional advice.</span> Nothing on this site is legal, financial, tax, or real estate advice. For decisions about a specific transaction, consult the appropriate licensed professional.
            </p>
            <p>
              <span className="font-semibold text-ve-text-primary">Changes.</span> We may update these summaries as the site or our practices change; the date above reflects the latest revision.
            </p>
          </div>
        </section>

        <p className="mt-12 text-[13px] text-ve-text-muted">
          Questions about privacy or these terms? Reach us from the <Link to="/contact" className="font-medium text-ve-text-secondary underline underline-offset-2 hover:text-ve-text-primary">contact page</Link>.
        </p>
      </div>
    </>
  )
}
