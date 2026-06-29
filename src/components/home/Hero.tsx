import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles, Check, ShieldCheck, ScrollText } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { WatchDemoButton } from '@/components/demo/WatchDemoButton'
import { ProductShot } from '@/components/product/ProductShot'
import { REGISTER_URL } from '@/lib/config'
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'

// The rotator words (plan §1A/F3). "skydiving" renders server-side. Kept short
// and uniform so each fits on one line; SIZER below reserves the line's height.
const WORDS = ['skydiving', 'on the lake', 'hiking', 'golfing', 'making dinner', 'at the game', 'asleep']
// The widest phrase. Rendered invisibly to lock the rotator line's footprint so
// a longer word can never wrap and shove the buttons below it (the old bug).
const SIZER = 'making dinner.'
const ROTATE_MS = 3200

const TRUST = [
  { icon: Check, label: 'You approve everything' },
  { icon: ScrollText, label: 'Complete audit trail' },
  { icon: ShieldCheck, label: 'Role-based access' },
]

export function Hero() {
  const reduce = usePrefersReducedMotion()
  const [mounted, setMounted] = useState(false)
  const [i, setI] = useState(0)

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    if (!mounted || reduce) return
    const id = setInterval(() => setI((n) => (n + 1) % WORDS.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [mounted, reduce])

  const rotate = mounted && !reduce
  const word = WORDS[i]

  return (
    <section aria-label="Hero" className="relative overflow-hidden bg-ink">
      {/* ambient animated depth (calm, slow aurora) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ve-sidebar via-[#14213a] to-ink" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-32 h-[34rem] w-[34rem] animate-aurora-1 rounded-full bg-ve-orange/25 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-40 h-[34rem] w-[34rem] animate-aurora-2 rounded-full bg-ve-charcoal/40 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/3 top-1/4 h-72 w-72 animate-aurora-1 rounded-full bg-ve-blue/20 blur-[110px] [animation-delay:-7s]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)' }}
      />

      <div className="relative mx-auto grid max-w-content items-center gap-14 px-6 pb-24 pt-36 md:pt-44 lg:grid-cols-[1.02fr_1.18fr] lg:gap-12 lg:pb-28">
        {/* Left, message */}
        <div>
          <Eyebrow tone="light" mark className="mb-5">The AI transaction OS for real estate</Eyebrow>

          <h1 className="font-serif text-display font-semibold leading-[1.05] text-white">
            <span className="block text-balance">Your transaction keeps moving while you&rsquo;re</span>
            {/* The rotating word sits on its own line. An invisible sizer holds
                the widest phrase so the line height is fixed: the word can swap
                freely without ever pushing the CTAs below it. */}
            <span className="relative mt-1.5 grid">
              <span aria-hidden="true" className="invisible col-start-1 row-start-1 italic">
                {SIZER}
              </span>
              {rotate ? (
                // `key` remounts the span each tick so the CSS enter animation
                // replays; the sizer above keeps the line height fixed (no shift).
                <span key={word} className="col-start-1 row-start-1 animate-rotate-word italic text-ve-orange">
                  {word}.
                </span>
              ) : (
                <span className="col-start-1 row-start-1 italic text-ve-orange">skydiving.</span>
              )}
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lead text-white/70">
            More control for agents. More clarity for clients. A calmer path to closing.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <WatchDemoButton sourcePage="/" size="lg" />
            <Button href={REGISTER_URL} external variant="ghost-light" size="lg">
              Create an account
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5">
            {TRUST.map((t) => (
              <li key={t.label} className="flex items-center gap-2 text-[13.5px] text-white/65">
                <t.icon className="h-4 w-4 text-ve-orange/90" aria-hidden="true" />
                {t.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Right, real product shot with a floating AI insight card */}
        <Reveal className="relative" y={30}>
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[20px] bg-gradient-to-tr from-ve-orange/15 to-transparent blur-2xl" />
            <ProductShot src="/screens/screen-transactions.png" alt="The Velvet Elves app showing an active transaction with its timeline, tasks, and closing date" priority className="relative animate-float" />

            {/* floating status chip (depth, gentle parallax) */}
            <div className="absolute -right-3 -top-3 hidden animate-float-sm items-center gap-2 rounded-full border border-black/5 bg-white px-3.5 py-2 shadow-premium sm:flex">
              <span className="h-2 w-2 rounded-full bg-ve-green" aria-hidden="true" />
              <span className="text-[12.5px] font-semibold text-ve-text-primary">On track · 12 days to close</span>
            </div>

            {/* floating AI insight card (depth, gentle parallax) */}
            <div className="absolute -bottom-6 -left-4 hidden w-64 animate-float-sm rounded-xl border border-black/5 bg-white p-3.5 shadow-premium [animation-delay:-2.5s] sm:block">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-ve-orange" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[1.2px] text-ve-orange-xdark">Velvet suggests</span>
              </div>
              <p className="mt-1.5 text-[12px] leading-relaxed text-ve-text-secondary">
                Request the updated loan commitment before Friday&rsquo;s inspection deadline.
              </p>
            </div>
          </div>
          <p className="mt-7 text-center text-[12px] text-white/55 sm:text-right">The Velvet Elves app · sample data</p>
        </Reveal>
      </div>
    </section>
  )
}
