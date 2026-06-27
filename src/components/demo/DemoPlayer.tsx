import { Clapperboard } from 'lucide-react'

interface DemoPlayerProps {
  /** When the real film exists, pass its source and this swaps to a <video>. */
  videoSrc?: string
  poster?: string
}

/**
 * Swap-ready demo surface. Until `videoSrc` exists it shows an honest
 * "in production" placeholder, never a fake video (plan §3.4).
 */
export function DemoPlayer({ videoSrc, poster }: DemoPlayerProps) {
  if (videoSrc) {
    return (
      <video className="aspect-video w-full rounded-2xl shadow-float" controls poster={poster} preload="none">
        <source src={videoSrc} />
      </video>
    )
  }
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-2xl border border-white/15 bg-white/5 text-center shadow-float">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-ve-orange">
        <Clapperboard className="h-7 w-7" aria-hidden="true" />
      </span>
      <div>
        <p className="font-mono text-[11.5px] uppercase tracking-[1.5px] text-ve-orange">Demo in production</p>
        <p className="mt-1.5 max-w-sm px-6 text-[14px] text-white/70">
          We&rsquo;re filming a real transaction from contract to close. Leave your email below and we&rsquo;ll send it your way.
        </p>
      </div>
    </div>
  )
}
