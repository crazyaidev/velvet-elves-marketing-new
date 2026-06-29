import { useEffect, useRef, useState } from 'react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { ProductShot } from '@/components/product/ProductShot'
import { cn } from '@/lib/utils'

const STEPS = [
  {
    num: '01',
    title: 'Drop in the contract.',
    body: 'Upload the executed contract or forward the email. Velvet Elves reads it and pulls out the parties, property, price, and every contractual date for you to confirm.',
    src: '/screens/screen-wizard.png',
    alt: 'The Velvet Elves AI intake reading a contract and extracting its parties and key dates',
  },
  {
    num: '02',
    title: 'It builds the transaction.',
    body: 'From the contract, the elves assemble the file: a deadline-aware task plan, the document checklist, every contact, and a clear client timeline, all kept current as the deal moves.',
    src: '/screens/screen-transactions.png',
    alt: 'An assembled transaction in the Velvet Elves app with its task plan, timeline, and documents',
  },
  {
    num: '03',
    title: 'You approve, it executes.',
    body: 'Every reply and reminder is drafted for you. Approve it and the elves send it, update the client, and check off the task, with a complete audit trail and role-based access.',
    src: '/screens/screen-transactions.png',
    alt: 'An AI-drafted reply awaiting one-click approval in the Velvet Elves app',
  },
]

export function HowItWorks() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.idx))
        })
      },
      // A step becomes "active" when it sits in the middle band of the viewport.
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    stepRefs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Note: no overflow-hidden on the <section> itself, it would break the sticky
  // media panel. The glow is clipped by its own wrapper instead.
  return (
    <section className="relative bg-ink px-6 py-section-sm md:py-section">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ve-sidebar to-ink" />
        <div className="absolute right-0 top-1/3 h-96 w-96 animate-aurora-2 rounded-full bg-ve-orange/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-content">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <Eyebrow tone="light" className="mb-4">How it works</Eyebrow>
          <h2 className="font-serif text-title font-semibold text-white">Three steps. No chaos.</h2>
        </div>

        {/* Desktop: scrollytelling, steps scroll, the product screen crossfades. */}
        <div className="hidden gap-16 lg:grid lg:grid-cols-2">
          <div>
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                data-idx={i}
                ref={(el) => (stepRefs.current[i] = el)}
                className="flex min-h-[58vh] flex-col justify-center"
              >
                <div
                  className={cn(
                    'border-l-2 pl-6 transition-all duration-500',
                    active === i ? 'border-ve-orange' : 'border-white/10',
                  )}
                >
                  <span
                    className={cn(
                      'font-mono text-[13px] font-semibold transition-colors duration-500',
                      active === i ? 'text-ve-orange' : 'text-white/30',
                    )}
                  >
                    {s.num}
                  </span>
                  <h3
                    className={cn(
                      'mt-2 font-serif text-[30px] font-semibold transition-colors duration-500',
                      active === i ? 'text-white' : 'text-white/35',
                    )}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-3 max-w-md text-[16px] leading-relaxed transition-colors duration-500',
                      active === i ? 'text-white/70' : 'text-white/25',
                    )}
                  >
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky media that crossfades to the active step. */}
          <div>
            <div className="sticky top-24 flex h-[72vh] items-center">
              <div className="relative w-full">
                {STEPS.map((s, i) => (
                  <div
                    key={s.num}
                    className={cn(
                      'transition-all duration-700 ease-out',
                      i === 0 ? 'relative' : 'absolute inset-0',
                      active === i ? 'opacity-100 blur-0' : 'pointer-events-none opacity-0 blur-sm',
                    )}
                  >
                    <ProductShot src={s.src} alt={s.alt} priority />
                  </div>
                ))}
                <p className="mt-5 text-center text-[12px] text-white/55">The Velvet Elves app · sample data</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: stacked steps, each with its own screen. */}
        <div className="flex flex-col gap-14 lg:hidden">
          {STEPS.map((s) => (
            <Reveal key={s.num}>
              <div className="mb-5 border-l-2 border-ve-orange pl-5">
                <span className="font-mono text-[13px] font-semibold text-ve-orange">{s.num}</span>
                <h3 className="mt-1.5 font-serif text-[24px] font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">{s.body}</p>
              </div>
              <ProductShot src={s.src} alt={s.alt} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
