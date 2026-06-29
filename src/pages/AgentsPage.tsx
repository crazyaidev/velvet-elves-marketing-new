import { Inbox, ShieldCheck, MessageCircle, FolderCheck, ScrollText, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { RoleHero } from '@/components/role/RoleHero'
import { SectionShell } from '@/components/ui/SectionShell'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { FeatureGrid } from '@/components/role/FeatureGrid'
import { FaqAccordion } from '@/components/role/FaqAccordion'
import { FinaleCta } from '@/components/sections/FinaleCta'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ProductShot } from '@/components/product/ProductShot'
import { faqPageJsonLd, type Faq } from '@/lib/seo'

const FEATURES = [
  { icon: Inbox, title: 'Inbox triage, drafted for you', body: 'Transaction email is read, sorted, and replied to as drafts. Every send waits for your one-click approval.' },
  { icon: Clock, title: 'Never miss a deadline', body: 'Contingencies, disclosures, and key dates are tracked from contract to close, with reminders before they bite.' },
  { icon: MessageCircle, title: 'Clients stay in the loop', body: 'Buyers and sellers get a clear, calm view of what just happened and what comes next, through their own portal.' },
  { icon: FolderCheck, title: 'Documents organized', body: 'Files land in the right place, labeled and checklisted, instead of buried in an email thread.' },
  { icon: ShieldCheck, title: 'Audit-ready, always', body: 'Required items are tracked so each file stays compliant and clean, nothing slips because you were busy.' },
  { icon: ScrollText, title: 'A complete paper trail', body: 'Every action is logged and timestamped, and the full history is exportable whenever you need it.' },
]

const FAQS: Faq[] = [
  {
    q: 'What is Velvet Elves for agents?',
    a: 'Velvet Elves is an AI transaction assistant that runs the busywork between contract and close, triaging email, drafting replies, tracking deadlines and disclosures, and keeping clients updated, while you approve every action. It gives you the leverage of a transaction coordinator without hiring one.',
  },
  {
    q: 'Do I lose control if AI handles my email?',
    a: 'No. The AI drafts and organizes, but nothing is sent without your sign-off. You review the draft, make the call, and the elves carry it out. You stay in control without being in the weeds.',
  },
  {
    q: 'Does it replace a transaction coordinator?',
    a: 'It handles the repetitive coordination work a TC would: chasing documents, tracking dates, drafting routine updates, and keeping the file audit-ready. Many solo agents use it instead of hiring; teams use it to let their coordinators focus on judgment calls.',
  },
  {
    q: 'Which tasks does it actually handle today?',
    a: 'Today: AI inbox triage and reply drafting (with approval-before-send), deadline and compliance tracking, document organization, client-portal updates, and a complete audit trail. Voice and SMS assistants are on the roadmap and are clearly marked as coming soon.',
  },
  {
    q: 'Can my whole team use it?',
    a: 'Yes. Team leads can control shared task templates and see every transaction across the team. A dedicated Brokers & Teams experience is on the way; in the meantime teams are fully supported.',
  },
]

export default function AgentsPage() {
  return (
    <>
      <Seo
        title="Velvet Elves for Agents: AI Transaction Assistant"
        description="Win back your evenings and give clients a five-star experience. Velvet Elves triages email, tracks deadlines, and keeps clients updated, while you approve everything."
        path="/agents"
        jsonLd={[faqPageJsonLd(FAQS)]}
      />

      <RoleHero
        eyebrow="For agents"
        title={<>More five-star closings. Fewer late nights.</>}
        subtitle="Velvet Elves runs the contract-to-close busywork so you can focus on clients and deals, with every action waiting for your approval."
        sourcePage="/agents"
        account="create"
        mock={<ProductShot src="/screens/screen-transactions.png" alt="The Velvet Elves Active Transactions view, tracking a deal from contract to close" priority />}
      />

      <SectionShell className="bg-white">
        <AnswerBlock
          kicker="What does Velvet Elves do for an agent?"
          answer="It is an AI assistant for real estate transactions: it triages your email, drafts replies, tracks every deadline and disclosure, organizes documents, and keeps your clients updated, all from contract to close. You approve each action, so you get a coordinator's leverage without giving up control."
        />
      </SectionShell>

      <FeatureGrid eyebrow="What you get" heading="A coordinator's leverage, on every deal." features={FEATURES} />

      {/* Cross-link to the dedicated Brokers & Teams page. */}
      <SectionShell className="bg-ve-sidebar">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="light" className="mb-4">On a team?</Eyebrow>
          <h2 className="font-serif text-title font-semibold text-white">Velvet Elves works for brokerages, too.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lead text-white/70">
            Team leads get pipeline visibility across every deal and control of the shared workflow, without micromanaging a single agent.
          </p>
          <Link
            to="/brokers-teams"
            className="mt-7 inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-3 text-[15px] font-semibold text-ve-text-primary shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
          >
            Explore Brokers &amp; Teams
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </SectionShell>

      <FaqAccordion faqs={FAQS} heading="Agent questions, answered" />

      <FinaleCta
        title="See your next closing run itself."
        subtitle="Watch a complete transaction move from contract to close, without a single follow-up email from you."
        sourcePage="/agents"
        account="create"
      />
    </>
  )
}
