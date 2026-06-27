import { Phone, MessageSquare } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { RoleHero } from '@/components/role/RoleHero'
import { SectionShell } from '@/components/ui/SectionShell'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ElfBand } from '@/components/product/ElfBand'
import { ProductShot } from '@/components/product/ProductShot'
import { TrustBand } from '@/components/home/TrustBand'
import { FinaleCta } from '@/components/sections/FinaleCta'
import { softwareApplicationJsonLd } from '@/lib/seo'

export default function ProductPage() {
  return (
    <>
      <Seo
        title="The Velvet Elves Platform: AI Transaction OS"
        description="A team of AI elves runs the busywork between contract and close: inbox triage with approval-before-send, deadline and compliance tracking, a client portal, and a complete audit trail."
        path="/product"
        jsonLd={[
          softwareApplicationJsonLd({
            description:
              'AI-powered real estate transaction management. Inbox triage with approval-before-send, deadline and compliance tracking, client portal, and a complete audit trail.',
            featureList: [
              'AI inbox triage and reply drafting with approval-before-send',
              'Deadline, disclosure, and compliance tracking from contract to close',
              'Document organization and checklists',
              'Client portal with role-based access',
              'Complete, exportable audit trail',
            ],
          }),
        ]}
      />

      <RoleHero
        eyebrow="The platform"
        title={<>A team that handles the busywork. You keep control.</>}
        subtitle="Velvet Elves is an AI transaction OS for real estate. It does the repetitive work between contract and close: and waits for your approval on every action."
        sourcePage="/product"
        account="create"
        mock={<ProductShot src="/screens/screen-transactions.png" alt="The Velvet Elves agent dashboard" priority />}
      />

      <SectionShell className="bg-white">
        <AnswerBlock
          kicker="What is Velvet Elves?"
          answer="Velvet Elves is AI-powered real estate transaction management software. A team of specialized 'elves' triages your email, tracks deadlines and disclosures, organizes documents, and keeps clients updated from contract to close, while you approve every action and keep a complete audit trail."
        />
      </SectionShell>

      <ElfBand
        eyebrow="Inbox Elf · live"
        title="Your inbox, triaged and drafted."
        description="Transaction email is read, sorted, and answered as drafts, so the thread stops being a second job."
        bullets={[
          'Reads and sorts transaction email by what needs your attention',
          'Drafts on-point replies in your voice',
          'Nothing is ever sent without your one-click approval',
        ]}
        visual={<ProductShot src="/screens/screen-wizard.png" alt="AI-suggested actions in the Velvet Elves app, each awaiting approval" />}
      />

      <ElfBand
        eyebrow="Compliance Elf · live"
        title="Every deadline tracked, every file audit-ready."
        description="Contingencies, disclosures, and checklist items are tracked from contract to close, so nothing slips because you were busy."
        bullets={[
          'Tracks key dates and required disclosures automatically',
          'Surfaces what needs attention before it becomes a problem',
          'Keeps a complete, exportable audit trail of every action',
        ]}
        visual={<ProductShot src="/screens/screen-transactions.png" alt="An active transaction tracked from contract to close in the Velvet Elves app" />}
        reverse
        bg="bg"
      />

      {/* Honest roadmap band, Voice + SMS are not shipped (plan §1A/F1). */}
      <SectionShell className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4">On the roadmap</Eyebrow>
          <h2 className="font-serif text-title font-semibold text-ve-text-primary">Two more elves are on the way.</h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-ve-text-secondary">
            We only show you what is real today. These are coming next, and we will tell you the moment they land.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              { icon: Phone, name: 'Voice Elf', body: 'Transcribe voicemails and calls and surface the details that matter.' },
              { icon: MessageSquare, name: 'SMS Elf', body: 'Send timely text updates to clients, co-agents, and vendors from the right context.' },
            ].map((e) => (
              <div key={e.name} className="rounded-2xl border border-dashed border-ve-border bg-ve-bg p-6 text-left">
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ve-surface-3 text-ve-text-muted">
                    <e.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-ve-neutral-bg px-2.5 py-0.5 text-[12px] font-semibold text-ve-neutral-text">Coming soon</span>
                </div>
                <h3 className="font-serif text-[19px] font-semibold text-ve-text-secondary">{e.name}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ve-text-secondary">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <TrustBand />

      <FinaleCta
        title="See the whole platform in motion."
        subtitle="Watch a transaction move from contract to close, with the elves doing the work and you making the calls."
        sourcePage="/product"
        account="create"
      />
    </>
  )
}
