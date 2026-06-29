import { useEffect, useState } from 'react'

/**
 * SSR-safe `prefers-reduced-motion` hook. Replaces framer-motion's
 * `useReducedMotion` so the marketing bundle no longer ships framer-motion.
 * Returns `false` (motion allowed) on the server and the first client paint,
 * then syncs to the media query after mount, so the static HTML is unaffected.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduce(mq.matches)
    const onChange = () => setReduce(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduce
}
