import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { WatchDemoButton } from '@/components/demo/WatchDemoButton'
import { REGISTER_URL } from '@/lib/config'

interface RoleHeroProps {
  eyebrow: string
  title: ReactNode
  subtitle: string
  sourcePage: string
  /** 'create' → real /register; 'early-access' → no account CTA in hero (FSBO/Attorney/Client, §1A/F4). */
  account?: 'create' | 'early-access'
  mock?: ReactNode
}

/** Light hero for role/sub pages. The nav is the solid pill here (not transparent),
 *  so the hero sits on a warm tint with top padding to clear it. */
export function RoleHero({ eyebrow, title, subtitle, sourcePage, account = 'create', mock }: RoleHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ve-border bg-gradient-to-b from-cream to-white px-6 pb-16 pt-32 md:pb-20 md:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-ve-orange/10 blur-[100px]" />
      <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow mark className="mb-4">{eyebrow}</Eyebrow>
          <h1 className="font-serif text-display-sm font-semibold text-ve-text-primary text-balance">{title}</h1>
          <p className="mt-5 max-w-xl text-lead text-ve-text-secondary">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <WatchDemoButton sourcePage={sourcePage} size="lg" />
            {account === 'create' && (
              <Button href={REGISTER_URL} external variant="outline" size="lg">
                Create an account
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            )}
          </div>
        </div>
        {mock && <div className="lg:pl-4">{mock}</div>}
      </div>
    </section>
  )
}
