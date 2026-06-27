import { Sparkles, CheckCircle2, Clock, CalendarClock } from 'lucide-react'
import { StatusPill } from '@/components/ui/StatusPill'
import { cn } from '@/lib/utils'

/**
 * Coded "transaction command center" mockup for the hero, the product's own
 * ve-* design language so it reads as native, but cleaner than the real app
 * (the "ideal state" the Visual Direction Guide asks for). Honestly captioned
 * "Prototype screen". Fictional data; not a live app capture.
 */
const TASKS = [
  { label: 'Inspection report requested', state: 'done' as const },
  { label: 'Buyer update sent', state: 'done' as const },
  { label: 'Confirm closing date with title', state: 'due' as const, due: 'Due in 7 days' },
]

export function TransactionCommandCenterMock({ className }: { className?: string }) {
  return (
    <figure className={cn('overflow-hidden rounded-2xl border border-ve-border bg-white shadow-float', className)}>
      {/* Header */}
      <div className="border-b border-ve-border px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <p className="font-serif text-[17px] font-semibold text-ve-text-primary">Johnson Purchase</p>
          <StatusPill status="good">On track</StatusPill>
        </div>
        <div className="mt-1 flex items-center gap-2 text-[12.5px] text-ve-text-muted">
          <span>312 Maple Ave</span>
          <span className="text-ve-border">·</span>
          <span className="inline-flex items-center gap-1">
            <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" /> Closing in 12 days
          </span>
        </div>
      </div>

      {/* AI suggestion */}
      <div className="m-4 rounded-xl border border-ve-orange-border bg-ve-orange-soft p-4">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-4 w-4 text-ve-orange" aria-hidden="true" />
          <span className="font-mono text-[11.5px] uppercase tracking-[1.2px] text-ve-orange-xdark">Velvet suggests</span>
        </div>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-ve-text-secondary">
          Request the updated loan commitment from the lender before Friday&rsquo;s inspection deadline.
        </p>
      </div>

      {/* Tasks */}
      <ul className="divide-y divide-ve-border px-4 pb-2">
        {TASKS.map((t) => (
          <li key={t.label} className="flex items-center gap-3 py-3">
            {t.state === 'done' ? (
              <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-ve-green" aria-hidden="true" />
            ) : (
              <Clock className="h-[18px] w-[18px] shrink-0 text-ve-amber" aria-hidden="true" />
            )}
            <span className={cn('flex-1 text-[13.5px]', t.state === 'done' ? 'text-ve-text-muted line-through decoration-ve-border' : 'text-ve-text-primary')}>
              {t.label}
            </span>
            {t.state === 'done' ? (
              <span className="text-[12px] font-medium text-ve-green-text">Handled</span>
            ) : (
              <span className="text-[12px] text-ve-text-muted">{t.due}</span>
            )}
          </li>
        ))}
      </ul>

      <figcaption className="border-t border-ve-border bg-ve-surface-2 px-5 py-2.5 text-[11.5px] italic text-ve-text-muted">
        Prototype screen
      </figcaption>
    </figure>
  )
}
