import { ArrowRight } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { EmailCapture } from '@/components/ui/EmailCapture'
import { REGISTER_URL } from '@/lib/config'

/** Thin trampoline into the real app sign-up. noindex (plan §8). */
export default function CreateAccountPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-ve-orange-light/60 to-ve-bg px-6 pb-section-sm pt-32">
      <Seo
        title="Create your Velvet Elves account"
        description="Create your Velvet Elves account to start running a clearer transaction from contract to close."
        path="/create-account"
        noindex
      />

      <div className="w-full max-w-md rounded-2xl border border-ve-border bg-white p-8 text-center shadow-card sm:p-10">
        <Eyebrow mark className="mb-4">Create an account</Eyebrow>
        <h1 className="font-serif text-[28px] font-semibold text-ve-text-primary">Start with Velvet Elves.</h1>
        <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-ve-text-secondary">
          It takes about a minute. You&rsquo;ll head to the Velvet Elves app to finish setting up your account.
        </p>

        <div className="mt-7">
          <Button href={REGISTER_URL} external variant="primary" size="lg" className="w-full">
            Continue to the app
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <p className="mt-2.5 text-[13px] text-ve-text-muted">The app opens in a new tab.</p>
        </div>

        <div className="mt-8 border-t border-ve-border pt-8 text-left">
          <p className="text-[14px] font-medium text-ve-text-primary">Prefer an invite instead?</p>
          <p className="mb-3 mt-0.5 text-[13.5px] text-ve-text-secondary">
            Leave your email and we&rsquo;ll send early-access details your way.
          </p>
          <EmailCapture interest="early_access" sourcePage="/create-account" />
        </div>
      </div>
    </div>
  )
}
