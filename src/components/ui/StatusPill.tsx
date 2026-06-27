import { cn } from '@/lib/utils'

type Status = 'good' | 'warn' | 'risk' | 'info'

interface StatusPillProps {
  status: Status
  children: React.ReactNode
  /** Show the leading status dot. */
  dot?: boolean
  className?: string
}

/**
 * Paired bg+border+text status triad (STYLE_GUIDE §2.3) for use INSIDE product
 * mockups only, never as site chrome.
 */
const TRIAD: Record<Status, string> = {
  good: 'bg-ve-green-bg border-ve-green-border text-ve-green-text',
  warn: 'bg-ve-amber-bg border-ve-amber-border text-ve-amber-text',
  risk: 'bg-ve-red-bg border-ve-red-border text-ve-red-text',
  info: 'bg-ve-blue-bg border-ve-blue-border text-ve-blue-text',
}
const DOT: Record<Status, string> = {
  good: 'bg-ve-green',
  warn: 'bg-ve-amber',
  risk: 'bg-ve-red',
  info: 'bg-ve-blue',
}

export function StatusPill({ status, children, dot = true, className }: StatusPillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[12px] font-semibold',
        TRIAD[status],
        className,
      )}
    >
      {dot && <span className={cn('h-1.5 w-1.5 rounded-full', DOT[status])} aria-hidden="true" />}
      {children}
    </span>
  )
}
