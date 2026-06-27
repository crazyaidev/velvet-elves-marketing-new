import { Seo } from '@/components/seo/Seo'
import { Eyebrow } from '@/components/ui/Eyebrow'

/*
 * COPY STATUS: DRAFT, pending Jake's review and ATTORNEY review before launch.
 * The data-practice description below is accurate to what the site actually does
 * (email capture only). Do not publish without legal sign-off.
 */
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
          <p className="mt-4 rounded-lg border border-ve-amber-border bg-ve-amber-bg px-4 py-3 text-[13.5px] text-ve-amber-text">
            Draft, these policies are being finalized and reviewed before launch.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-prose px-6 py-section-sm">
        <section id="privacy" className="scroll-mt-28">
          <h2 className="font-serif text-[24px] font-semibold text-ve-text-primary">Privacy</h2>
          <div className="mt-4 flex flex-col gap-4 text-[15px] leading-relaxed text-ve-text-secondary">
            <p>
              This marketing website collects one thing: an email address you choose to give us, along with the page you submitted it from, your stated interest (for example a demo waitlist or newsletter), and your browser&rsquo;s user-agent string. That is all.
            </p>
            <p>
              We use it only to send what you asked for, product updates, demo notifications, or early-access details. We do not sell your information, and the site does not run advertising trackers.
            </p>
            <p>
              That information is stored in a dedicated database, separate from the Velvet Elves application. You can ask us to remove your email at any time via the contact page.
            </p>
          </div>
        </section>

        <section id="terms" className="mt-12 scroll-mt-28">
          <h2 className="font-serif text-[24px] font-semibold text-ve-text-primary">Terms</h2>
          <div className="mt-4 flex flex-col gap-4 text-[15px] leading-relaxed text-ve-text-secondary">
            <p>
              This website is provided for general information about Velvet Elves. Content here describes the product and may change as the product evolves; capabilities labeled &ldquo;coming soon&rdquo; are not yet available.
            </p>
            <p>
              Creating an account and using the Velvet Elves application is governed by the terms presented in the app itself, which are separate from these website terms.
            </p>
            <p>
              Nothing on this site is legal, financial, or real estate advice. For decisions about a specific transaction, consult the appropriate licensed professional.
            </p>
          </div>
        </section>

        <p className="mt-12 text-[13px] text-ve-text-muted">Last updated: draft. Final dated version to follow at launch.</p>
      </div>
    </>
  )
}
