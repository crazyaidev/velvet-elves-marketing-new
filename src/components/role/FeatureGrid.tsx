import type { LucideIcon } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { Stagger } from '@/components/ui/Stagger'

export interface Feature {
  icon: LucideIcon
  title: string
  body: string
}

interface FeatureGridProps {
  eyebrow?: string
  heading: string
  features: Feature[]
  bg?: 'white' | 'bg'
}

export function FeatureGrid({ eyebrow, heading, features, bg = 'bg' }: FeatureGridProps) {
  return (
    <section className={bg === 'white' ? 'bg-white px-6 py-section-sm md:py-section' : 'bg-ve-bg px-6 py-section-sm md:py-section'}>
      <div className="mx-auto max-w-content">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
          <h2 className="font-serif text-title font-semibold text-ve-text-primary text-balance">{heading}</h2>
        </Reveal>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-ve-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-ve-orange-border hover:shadow-card-hover"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-ve-orange-light text-ve-orange-dark transition-transform duration-300 group-hover:scale-110">
                <f.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-[18px] font-semibold text-ve-text-primary">{f.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ve-text-secondary">{f.body}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
