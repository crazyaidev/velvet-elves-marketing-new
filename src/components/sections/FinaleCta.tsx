import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { EmailCapture } from '@/components/ui/EmailCapture'
import { WatchDemoButton } from '@/components/demo/WatchDemoButton'
import { REGISTER_URL } from '@/lib/config'
import { cn } from '@/lib/utils'

interface FinaleCtaProps {
  title: string
  subtitle: string
  sourcePage: string
  /**
   * Secondary action. 'create' (self-sign-up roles) → real /register.
   * 'early-access' (FSBO/Attorney/Client, not self-sign-up yet, §1A/F4) →
   * email capture instead of a register screen that excludes them.
   */
  account?: 'create' | 'early-access' | 'none'
  className?: string
}

export function FinaleCta({ title, subtitle, sourcePage, account = 'create', className }: FinaleCtaProps) {
  return (
    <section className={cn('bg-white px-6 py-section-sm md:py-section', className)}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-title font-semibold text-ve-text-primary">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lead text-ve-text-secondary">{subtitle}</p>

        <div className="mt-9 flex flex-col items-center gap-4">
          {/* Reactive Watch demo button, pulse rings (reduced-motion safe). */}
          <div className="relative inline-flex">
            <span className="pointer-events-none absolute inset-0 rounded-lg bg-ve-orange/30 animate-pulse-ring" aria-hidden="true" />
            <span className="pointer-events-none absolute inset-0 rounded-lg bg-ve-orange/30 animate-pulse-ring" style={{ animationDelay: '0.9s' }} aria-hidden="true" />
            <WatchDemoButton sourcePage={sourcePage} size="lg" className="relative z-10" />
          </div>

          {account === 'create' && (
            <Button href={REGISTER_URL} external variant="ghost" size="md">
              Create an account
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          )}
        </div>

        {account === 'early-access' && (
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-ve-border bg-ve-bg p-5 text-left">
            <p className="text-[14px] font-medium text-ve-text-primary">Want in early?</p>
            <p className="mb-3 mt-0.5 text-[13.5px] text-ve-text-secondary">
              Self-serve sign-up for this role is on the way. Leave your email and we&rsquo;ll reach out.
            </p>
            <EmailCapture interest="early_access" sourcePage={sourcePage} />
          </div>
        )}
      </div>
    </section>
  )
}
