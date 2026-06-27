import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: ReactNode
  /** Champagne accent (default) vs muted, and light variant for dark sections. */
  tone?: 'brand' | 'muted' | 'light'
  /** Prefix the ✦ brand glyph. */
  mark?: boolean
  className?: string
}

/**
 * Mono small-caps kicker (STYLE_GUIDE §3.2). Min 12px per the v2 comfort scale.
 */
export function Eyebrow({ children, tone = 'brand', mark = false, className }: EyebrowProps) {
  const color =
    tone === 'brand' ? 'text-ve-orange' : tone === 'light' ? 'text-white/70' : 'text-ve-text-muted'
  return (
    <p className={cn('font-mono text-kicker uppercase', color, className)}>
      {mark && <span aria-hidden="true">✦ </span>}
      {children}
    </p>
  )
}
