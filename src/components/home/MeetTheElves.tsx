import { Mail, ShieldCheck, Phone, MessageSquare, type LucideIcon } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { Stagger } from '@/components/ui/Stagger'
import { cn } from '@/lib/utils'

interface Elf {
  name: string
  icon: LucideIcon
  description: string
  live: boolean
}

/**
 * Honesty gate (plan §1A/F1 + §10.1): only Inbox + Compliance map to shipped
 * capability. Voice + SMS are backend stubs, so they are shown as "Coming soon",
 * never claimed live.
 */
const ELVES: Elf[] = [
  {
    name: 'Inbox Elf',
    icon: Mail,
    live: true,
    description:
      'Reads, sorts, and flags transaction email, then drafts the replies. Nothing sends without your approval, so the thread stops being a second job.',
  },
  {
    name: 'Compliance Elf',
    icon: ShieldCheck,
    live: true,
    description:
      'Tracks deadlines, required disclosures, and every checklist item from contract to close, so each file stays clean and audit-ready.',
  },
  {
    name: 'Voice Elf',
    icon: Phone,
    live: false,
    description: 'Will transcribe voicemails and calls and surface the details that matter, so nothing slips through a recording you never had time to hear.',
  },
  {
    name: 'SMS Elf',
    icon: MessageSquare,
    live: false,
    description: 'Will send timely text updates to clients, co-agents, and vendors from the right context, never from your personal number.',
  },
]

export function MeetTheElves() {
  return (
    <section className="bg-ve-bg px-6 py-section-sm md:py-section">
      <div className="mx-auto max-w-content">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <Eyebrow mark className="mb-4">Meet the Elves</Eyebrow>
          <h2 className="font-serif text-title font-semibold text-ve-text-primary text-balance">
            You&rsquo;re not buying software. You&rsquo;re hiring a team.
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ELVES.map((elf) => (
            <div
              key={elf.name}
              className={cn(
                'group flex flex-col rounded-2xl border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover',
                elf.live ? 'border-ve-border hover:border-ve-orange-border' : 'border-dashed border-ve-border',
              )}
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110',
                    elf.live ? 'bg-ve-orange-light text-ve-orange-dark' : 'bg-ve-surface-3 text-ve-text-muted',
                  )}
                >
                  <elf.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {!elf.live && (
                  <span className="rounded-full bg-ve-neutral-bg px-2.5 py-0.5 text-[12px] font-semibold text-ve-neutral-text">
                    Coming soon
                  </span>
                )}
              </div>
              <h3 className={cn('font-serif text-[19px] font-semibold', elf.live ? 'text-ve-text-primary' : 'text-ve-text-secondary')}>
                {elf.name}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ve-text-secondary">{elf.description}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
