import { Map, ClipboardCheck, FileText, ShieldCheck, CalendarClock, HelpCircle } from 'lucide-react'
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
  { icon: Map, title: 'A guided path to close', body: 'A clear, ordered roadmap from accepted offer to closing day, so you always know the next step.' },
  { icon: CalendarClock, title: 'Deadlines tracked for you', body: 'Inspection, appraisal, and contingency dates are tracked and surfaced before they become a problem.' },
  { icon: FileText, title: 'Documents organized', body: 'Keep disclosures, the contract, and every signed page in one place, not buried in your inbox.' },
  { icon: ClipboardCheck, title: 'Nothing forgotten', body: 'A checklist of what a transaction actually needs, so you do not miss a required step.' },
  { icon: ShieldCheck, title: 'An audit-ready record', body: 'Every action is logged and timestamped, a complete, exportable history of your sale.' },
  { icon: HelpCircle, title: 'Clarity, not jargon', body: 'Plain-language guidance through the parts of closing that usually require an agent to explain.' },
]

const FAQS: Faq[] = [
  {
    q: 'What is Velvet Elves for FSBO sellers?',
    a: 'It is a self-guided way to run the transaction side of selling your own home. Velvet Elves gives you a structured path from accepted offer to closing, tracking deadlines, organizing documents, and keeping a clean record, so you get professional structure without hiring an agent.',
  },
  {
    q: 'Can it give me legal or pricing advice?',
    a: 'No. Velvet Elves helps you organize and track the transaction; it does not provide legal advice or set your price. For legal questions, work with an attorney or title company, and the platform helps you keep all of that organized.',
  },
  {
    q: 'What does it actually do today?',
    a: 'It provides a guided transaction roadmap, deadline and milestone tracking, document organization, and a complete audit trail. Roadmap items that are not yet live are clearly labeled, so you always know what is real.',
  },
  {
    q: 'How do I get started?',
    a: 'Self-serve FSBO sign-up is rolling out soon. Watch the demo to see how it works, and join early access to be notified the moment you can create your account.',
  },
]

export default function FsboPage() {
  return (
    <>
      <Seo
        title="Velvet Elves for FSBO Sellers: Sell With Structure"
        description="Selling your own home? Velvet Elves gives you a guided, deadline-aware path from accepted offer to closing, professional structure without hiring an agent."
        path="/fsbo"
        jsonLd={[faqPageJsonLd(FAQS)]}
      />

      <RoleHero
        eyebrow="For FSBO sellers"
        title={<>Sell your home with a professional&rsquo;s structure.</>}
        subtitle="Velvet Elves gives you a guided, deadline-aware path from accepted offer to closing, so you can sell on your own without losing the plot."
        sourcePage="/fsbo"
        account="early-access"
        mock={<ProductShot src="/screens/screen-transactions.png" alt="The Velvet Elves app showing an active transaction from contract to close" priority />}
      />

      <SectionShell className="bg-white">
        <AnswerBlock
          kicker="What is Velvet Elves for FSBO?"
          answer="It is a self-guided transaction manager for people selling their own home. It lays out the path from accepted offer to closing, tracks every deadline and milestone, organizes your documents, and keeps an audit-ready record, the structure an agent would provide, without hiring one."
        />
      </SectionShell>

      <FeatureGrid eyebrow="What you get" heading="The safety of structure, on your own terms." features={FEATURES} />

      <FaqAccordion faqs={FAQS} heading="FSBO questions, answered" />

      <FinaleCta
        title="Sell with confidence, not guesswork."
        subtitle="Watch how Velvet Elves turns the closing process into a clear, guided path."
        sourcePage="/fsbo"
        account="early-access"
      />
    </>
  )
}
