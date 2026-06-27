import { Fragment } from 'react'

interface MarqueeProps {
  items: string[]
}

/**
 * A slow, continuous marquee of real capabilities. Pure CSS animation (pauses on
 * hover, halts under prefers-reduced-motion via the global motion guard).
 */
export function Marquee({ items }: MarqueeProps) {
  return (
    <div className="group relative overflow-hidden border-y border-ve-border/70 bg-ve-sidebar py-4">
      {/* edge fades */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ve-sidebar to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ve-sidebar to-transparent" />
      <div className="flex w-max animate-marquee gap-0 group-hover:[animation-play-state:paused]">
        {[0, 1].map((dup) => (
          <Fragment key={dup}>
            {items.map((item, i) => (
              <span key={`${dup}-${i}`} className="flex items-center whitespace-nowrap" aria-hidden={dup === 1}>
                <span className="px-6 font-mono text-[12.5px] uppercase tracking-[1.5px] text-white/70">{item}</span>
                <span className="text-ve-orange" aria-hidden="true">✦</span>
              </span>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
