import type { LucideIcon } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { Stagger } from '@/components/ui/Stagger'
import { cn } from '@/lib/utils'

export interface PillarFeature {
  icon: LucideIcon
  title: string
  body: string
  /** Roadmap item — rendered as a dashed "coming soon" card, never claimed live. */
  soon?: boolean
}

interface FeaturePillarProps {
  /** Anchor id for the sticky section nav. */
  id: string
  eyebrow: string
  heading: string
  intro?: string
  features: PillarFeature[]
  bg?: 'white' | 'bg'
}

/** One feature pillar: header + a responsive grid of feature cards. Cards flagged
 *  `soon` get the honest dashed "coming soon" treatment (no screenshot). */
export function FeaturePillar({ id, eyebrow, heading, intro, features, bg = 'bg' }: FeaturePillarProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 px-6 py-section-sm md:py-section', bg === 'white' ? 'bg-white' : 'bg-ve-bg')}>
      <div className="mx-auto max-w-content">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2 className="font-serif text-title font-semibold text-ve-text-primary text-balance">{heading}</h2>
          {intro && <p className="mx-auto mt-4 max-w-xl text-lead text-ve-text-secondary">{intro}</p>}
        </Reveal>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className={cn(
                'group rounded-2xl border bg-white p-6 shadow-soft transition-all duration-300',
                f.soon
                  ? 'border-dashed border-ve-border'
                  : 'border-ve-border hover:-translate-y-1.5 hover:border-ve-orange-border hover:shadow-card-hover',
              )}
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300',
                    f.soon ? 'bg-ve-surface-3 text-ve-text-muted' : 'bg-ve-orange-light text-ve-orange-dark group-hover:scale-110',
                  )}
                >
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {f.soon && (
                  <span className="rounded-full bg-ve-neutral-bg px-2.5 py-0.5 text-[12px] font-semibold text-ve-neutral-text">
                    Coming soon
                  </span>
                )}
              </div>
              <h3 className={cn('font-serif text-[18px] font-semibold', f.soon ? 'text-ve-text-secondary' : 'text-ve-text-primary')}>
                {f.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ve-text-secondary">{f.body}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
