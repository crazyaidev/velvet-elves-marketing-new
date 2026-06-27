import type { ReactNode } from 'react'
import { Check } from 'lucide-react'
import { SectionShell } from '@/components/ui/SectionShell'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { cn } from '@/lib/utils'

interface ElfBandProps {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  visual: ReactNode
  reverse?: boolean
  bg?: 'white' | 'bg'
}

/** Alternating copy + product-visual band for the product page. */
export function ElfBand({ eyebrow, title, description, bullets, visual, reverse, bg = 'white' }: ElfBandProps) {
  return (
    <SectionShell className={bg === 'white' ? 'bg-white' : 'bg-ve-bg'}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={cn(reverse && 'lg:order-2')}>
          <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
          <h2 className="font-serif text-[26px] font-semibold text-ve-text-primary md:text-[30px]">{title}</h2>
          <p className="mt-3 text-lead text-ve-text-secondary">{description}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ve-green-bg text-ve-green">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-[14.5px] leading-relaxed text-ve-text-secondary">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={cn(reverse && 'lg:order-1')}>{visual}</div>
      </div>
    </SectionShell>
  )
}
