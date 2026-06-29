import { useEffect, useRef, type ElementType, type ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'

interface StaggerProps {
  children: ReactNode
  className?: string
  as?: ElementType
  /** Per-child delay in ms. */
  step?: number
  y?: number
}

/**
 * Reveals its DIRECT children one after another as the group scrolls into view.
 * Visible by default (resting DOM is opaque), so it ships in the static HTML and
 * needs no JS, the staggered entrance is a Web-Animations enhancement that is
 * skipped under prefers-reduced-motion.
 */
export function Stagger({ children, className, as, step = 90, y = 22 }: StaggerProps) {
  const Tag = (as ?? 'div') as ElementType
  const reduce = usePrefersReducedMotion()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (reduce) return
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined' || !el.animate) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        Array.from(el.children).forEach((child, i) => {
          ;(child as HTMLElement).animate(
            [
              { opacity: 0, transform: `translateY(${y}px)` },
              { opacity: 1, transform: 'none' },
            ],
            { duration: 620, delay: i * step, easing: 'cubic-bezier(0.2,0.7,0.2,1)', fill: 'backwards' },
          )
        })
        obs.disconnect()
      },
      { rootMargin: '0px 0px -60px 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduce, step, y])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
