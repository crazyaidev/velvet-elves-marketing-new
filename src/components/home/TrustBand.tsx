import { ScrollText, KeyRound, BadgeCheck, type LucideIcon } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'

interface Pillar {
  title: string
  body: string
  icon: LucideIcon
}

const PILLARS: Pillar[] = [
  { title: 'Audit trail', icon: ScrollText, body: 'Every action is logged and timestamped. Your transaction keeps a complete, exportable paper trail.' },
  { title: 'Role-based access', icon: KeyRound, body: 'Each party sees exactly what is relevant to them, clients never see your internal notes.' },
  { title: 'You approve everything', icon: BadgeCheck, body: 'The elves do the work; every send and decision still waits for your sign-off. You stay in control.' },
]

export function TrustBand() {
  return (
    <section className="bg-gradient-to-b from-[#16243A] to-ve-sidebar px-6 py-section-sm md:py-section">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Eyebrow tone="light" className="mb-4">Built for trust</Eyebrow>
          <h2 className="font-serif text-title font-semibold text-white">Control that doesn&rsquo;t slow you down.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center md:items-start md:text-left">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-ve-orange">
                <p.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-[20px] font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/65">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
