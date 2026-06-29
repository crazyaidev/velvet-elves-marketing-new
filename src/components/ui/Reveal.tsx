import { useEffect, useRef, type ElementType, type ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  as?: ElementType
  /** Rise distance in px. */
  y?: number
  /** Stagger delay in ms. */
  delay?: number
}

/**
 * Scroll-reveal that is VISIBLE BY DEFAULT. The resting DOM is fully opaque, so
 * the content ships in the prerendered HTML and renders with no JS, the
 * entrance is played transiently via the Web Animations API only when the
 * element scrolls into view (and never under prefers-reduced-motion). This
 * avoids framer-motion baking opacity:0 into the static HTML.
 */
export function Reveal({ children, className, as, y = 24, delay = 0 }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const reduce = usePrefersReducedMotion()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (reduce) return
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined' || !el.animate) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.animate(
            [
              { opacity: 0, transform: `translateY(${y}px)`, filter: 'blur(5px)' },
              { opacity: 1, transform: 'none', filter: 'blur(0)' },
            ],
            { duration: 650, delay, easing: 'cubic-bezier(0.2,0.7,0.2,1)', fill: 'backwards' },
          )
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -80px 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduce, y, delay])

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  )
}
