import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost' | 'ghost-light'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  /** Internal route ("/demo") → react-router Link; external/app URL → <a target=_blank>. */
  href?: string
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  'aria-label'?: string
}

/**
 * The single CTA primitive. Primary uses `bg-ve-orange-dark` (#C05A0A) + white
 * text (~4.6:1, WCAG AA at every size), the deliberate fix for the base app's
 * white-on-#E2680F default button, which only passes AA-large (plan §1A/F6).
 * The lighter `ve-orange` stays reserved for kickers / accents, never a CTA bg
 * with white text.
 */
const VARIANTS: Record<Variant, string> = {
  primary: 'bg-ve-orange-dark text-white shadow-soft hover:bg-ve-orange-xdark',
  outline:
    'border border-ve-border bg-white text-ve-text-primary hover:border-ve-border-strong hover:bg-ve-surface-2',
  ghost: 'text-ve-text-primary hover:bg-ve-surface-2',
  'ghost-light': 'border border-white/35 text-white hover:bg-white/10',
}

const SIZES: Record<Size, string> = {
  sm: 'h-9 px-4 text-[13.5px]',
  md: 'h-11 px-6 text-[15px]',
  lg: 'h-12 px-7 text-[15px] md:text-[16px]',
}

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-lg font-sans font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ve-orange focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  external,
  onClick,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className)
  const isExternal = external || (href ? /^https?:\/\//.test(href) : false)

  if (href && isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {children}
      </a>
    )
  }
  if (href) {
    return (
      <Link to={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
