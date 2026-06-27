import { Eye, Bell, FileText, MessagesSquare, Lock, CalendarClock } from 'lucide-react'
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
  { icon: Eye, title: 'See what is happening', body: 'A simple timeline shows what just happened and what comes next, no more wondering or waiting for a callback.' },
  { icon: Bell, title: 'Gentle, timely nudges', body: 'Clients get a heads-up when something needs them, so deadlines never sneak up.' },
  { icon: FileText, title: 'Documents in one place', body: 'Everything to review or sign sits in one calm place, not scattered across email.' },
  { icon: MessagesSquare, title: 'Ask anytime', body: 'Clients can ask a question or request info without hunting for the right contact.' },
  { icon: Lock, title: 'They only see their own', body: 'Role-based access means clients see their transaction and nothing internal, ever.' },
  { icon: CalendarClock, title: 'Key dates, front and center', body: 'Inspection, closing, and milestones are always visible, so everyone is aligned.' },
]

const FAQS: Faq[] = [
  {
    q: 'What is the Velvet Elves client portal?',
    a: 'It is a calm, private view of a real estate transaction for buyers and sellers. Clients see a clear timeline of what has happened and what is next, review and sign documents in one place, and can ask questions, without seeing any internal notes.',
  },
  {
    q: 'Do clients have to create an account or pay?',
    a: 'No. Clients are invited by their agent and never pay. The portal is part of how an agent runs the transaction; clients simply get a clearer, more reassuring experience.',
  },
  {
    q: 'What can a client see and do?',
    a: 'Clients can view milestones and key dates, see and upload documents, flag a document for attention, ask questions, and control their notifications. They cannot edit tasks, delete documents, or see internal notes.',
  },
  {
    q: 'Is their information private?',
    a: 'Yes. Role-based access ensures each party sees only what is relevant to them, and every action is logged in an audit trail.',
  },
]

export default function ClientPortalPage() {
  return (
    <>
      <Seo
        title="Velvet Elves Client Portal: Clarity for Buyers & Sellers"
        description="Give buyers and sellers a calm, clear view of their real estate transaction: a simple timeline, documents in one place, and answers when they need them."
        path="/client-portal"
        jsonLd={[faqPageJsonLd(FAQS)]}
      />

      <RoleHero
        eyebrow="Client portal"
        title={<>Your clients always know what&rsquo;s next.</>}
        subtitle="Give buyers and sellers a calm, private view of their transaction: a clear timeline, documents in one place, and a way to ask without chasing you down."
        sourcePage="/client-portal"
        account="create"
        mock={<ProductShot src="/screens/screen-transactions.png" alt="The Velvet Elves app showing a transaction's documents and status" priority />}
      />

      <SectionShell className="bg-white">
        <AnswerBlock
          kicker="What is the client portal?"
          answer="It is a simple, private window into a real estate transaction for the buyer or seller. They see a clear timeline of what has happened and what comes next, review and sign documents in one place, and can ask a question anytime, while internal notes stay internal."
        />
      </SectionShell>

      <FeatureGrid eyebrow="The client experience" heading="The reassurance clients remember you for." features={FEATURES} />

      <FaqAccordion faqs={FAQS} heading="Client portal questions, answered" />

      <FinaleCta
        title="Make every client feel handled."
        subtitle="Watch how the portal turns a stressful closing into a calm, guided experience."
        sourcePage="/client-portal"
        account="create"
      />
    </>
  )
}
