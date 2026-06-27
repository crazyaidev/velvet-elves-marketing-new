import { FileStack, GitCompare, CalendarCheck, ShieldCheck, ScrollText, Gavel } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { RoleHero } from '@/components/role/RoleHero'
import { SectionShell } from '@/components/ui/SectionShell'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { FeatureGrid } from '@/components/role/FeatureGrid'
import { FaqAccordion } from '@/components/role/FaqAccordion'
import { FinaleCta } from '@/components/sections/FinaleCta'
import { ProductShot } from '@/components/product/ProductShot'
import { faqPageJsonLd, type Faq } from '@/lib/seo'

const FEATURES = [
  { icon: FileStack, title: 'Packet intake & indexing', body: 'Title commitments, settlement statements, affidavits, and recording packets land in one place, indexed and ready to review.' },
  { icon: GitCompare, title: 'Settlement deltas surfaced', body: 'AI highlights changes and discrepancies across documents, so you review the differences instead of re-reading every page.' },
  { icon: CalendarCheck, title: 'Recording & disbursement checkpoints', body: 'Release timing and recording milestones are tracked, so nothing is missed on attorney-closing matters.' },
  { icon: Gavel, title: 'Approval-first releases', body: 'Every send or release waits for your approval. The AI prepares; you decide and sign off.' },
  { icon: ScrollText, title: 'A complete audit trail', body: 'Every approval and action writes to communication history and the audit log, automatically.' },
  { icon: ShieldCheck, title: 'Legal judgment stays with you', body: 'The AI never makes legal-equivalence decisions or final packet releases. Those always remain the attorney’s call.' },
]

const FAQS: Faq[] = [
  {
    q: 'Is there an attorney experience in Velvet Elves?',
    a: 'An attorney workspace is on the roadmap: it handles packet intake and indexing, surfaces settlement deltas and title objections, and tracks recording and disbursement checkpoints, with approval-first releases. Self-serve attorney sign-up is rolling out; join early access to be notified.',
  },
  {
    q: 'Does the AI make legal decisions?',
    a: 'No. The AI prepares packet indexing, comparisons, and draft request notes. Legal judgment, legal-equivalence decisions, and final packet release always stay with the attorney, never the AI.',
  },
  {
    q: 'What does it actually do for a closing matter?',
    a: 'It centralizes the packet, highlights what changed across documents, tracks release timing and recording checkpoints, and records every approval to the audit trail, so the busywork is handled and you focus on judgment.',
  },
  {
    q: 'How do I get started?',
    a: 'The attorney workspace is being finalized. Watch the demo to see the approach, and join early access to be notified the moment you can create your account.',
  },
]

export default function AttorneysPage() {
  return (
    <>
      <Seo
        title="Velvet Elves for Attorneys: Closing Matters, Handled"
        description="An attorney workspace for real estate closings: packet intake, settlement deltas, recording checkpoints, and approval-first releases. Legal judgment always stays with the attorney."
        path="/attorneys"
        jsonLd={[faqPageJsonLd(FAQS)]}
      />

      <RoleHero
        eyebrow="For attorneys"
        title={<>The closing busywork, handled. The judgment, yours.</>}
        subtitle="An attorney workspace for real estate closings: packet intake, settlement deltas, and recording checkpoints, with every release waiting for your approval."
        sourcePage="/attorneys"
        account="early-access"
        mock={<ProductShot src="/screens/screen-attorney.png" alt="The Velvet Elves attorney workspace, showing matters needing legal judgment, approval blockers, and per-state closing rules" priority />}
      />

      <SectionShell className="bg-white">
        <AnswerBlock
          kicker="What is Velvet Elves for attorneys?"
          answer="It is a workspace for attorney-closing matters: it intakes and indexes the closing packet, surfaces settlement deltas and title objections, and tracks recording and disbursement checkpoints. Every release waits for your approval, and legal judgment always stays with you, never the AI."
        />
      </SectionShell>

      <FeatureGrid eyebrow="What it handles" heading="Less re-reading. More deciding." features={FEATURES} />

      <FaqAccordion faqs={FAQS} heading="Attorney questions, answered" />

      <FinaleCta
        title="See the attorney workspace."
        subtitle="Watch how the packet busywork gets handled while every legal decision stays in your hands."
        sourcePage="/attorneys"
        account="early-access"
      />
    </>
  )
}
