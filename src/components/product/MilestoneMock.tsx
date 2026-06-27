import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Stage {
  label: string
  state: 'done' | 'current' | 'upcoming'
  meta?: string
}

interface MilestoneMockProps {
  /** Title shown in the mock header (e.g. "Your home purchase"). */
  title: string
  subtitle?: string
  stages: Stage[]
  /** Optional friendly "next step" line shown beneath the header. */
  nextStep?: string
}

/**
 * A calm client/FSBO progress mockup (the "ideal state" of clarity). Coded in
 * ve-* tokens, honestly captioned. Fictional data; not a live app capture.
 */
export function MilestoneMock({ title, subtitle, stages, nextStep }: MilestoneMockProps) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-ve-border bg-white shadow-float">
      <div className="border-b border-ve-border px-5 py-4">
        <p className="font-serif text-[17px] font-semibold text-ve-text-primary">{title}</p>
        {subtitle && <p className="mt-0.5 text-[12.5px] text-ve-text-muted">{subtitle}</p>}
      </div>

      {nextStep && (
        <div className="m-4 rounded-xl border border-ve-orange-border bg-ve-orange-soft px-4 py-3">
          <p className="font-mono text-[11px] uppercase tracking-[1.2px] text-ve-orange-xdark">Next step</p>
          <p className="mt-1 text-[13.5px] font-medium text-ve-text-primary">{nextStep}</p>
        </div>
      )}

      <ol className="px-5 pb-5 pt-1">
        {stages.map((s, i) => {
          const last = i === stages.length - 1
          return (
            <li key={s.label} className="flex gap-3.5">
              <div className="flex flex-col items-center">
                <span
                  className={cn(
                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2',
                    s.state === 'done' && 'border-ve-green bg-ve-green text-white',
                    s.state === 'current' && 'border-ve-orange bg-ve-orange-soft text-ve-orange-dark',
                    s.state === 'upcoming' && 'border-ve-border bg-white text-ve-text-ghost',
                  )}
                >
                  {s.state === 'done' ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}
                </span>
                {!last && <span className={cn('w-0.5 flex-1', s.state === 'done' ? 'bg-ve-green/40' : 'bg-ve-border')} />}
              </div>
              <div className={cn('pb-5', last && 'pb-0')}>
                <p className={cn('text-[14px] font-medium', s.state === 'upcoming' ? 'text-ve-text-muted' : 'text-ve-text-primary')}>{s.label}</p>
                {s.meta && <p className="mt-0.5 text-[12px] text-ve-text-muted">{s.meta}</p>}
              </div>
            </li>
          )
        })}
      </ol>

      <figcaption className="border-t border-ve-border bg-ve-surface-2 px-5 py-2.5 text-[11.5px] italic text-ve-text-muted">
        Prototype screen
      </figcaption>
    </figure>
  )
}
