import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from '@/lib/utils'

interface SectionShellProps {
  children: ReactNode
  className?: string
  /** Inner max-width container; pass false to lay out full-bleed. */
  contained?: boolean
  id?: string
  'aria-label'?: string
}

/** Section wrapper with a calm, SSR-safe scroll reveal (visible by default). */
export function SectionShell({
  children,
  className,
  contained = true,
  id,
  'aria-label': ariaLabel,
}: SectionShellProps) {
  return (
    <section id={id} aria-label={ariaLabel} className={cn('px-6 py-section-sm md:py-section', className)}>
      <Reveal className={cn(contained && 'mx-auto w-full max-w-content')}>{children}</Reveal>
    </section>
  )
}
