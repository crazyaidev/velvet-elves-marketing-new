import { Seo } from '@/components/seo/Seo'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { FaqList } from '@/components/role/FaqList'
import { EmailCapture } from '@/components/ui/EmailCapture'
import { faqPageJsonLd, type Faq } from '@/lib/seo'

interface Group {
  id: string
  heading: string
  faqs: Faq[]
}

const GROUPS: Group[] = [
  {
    id: 'general',
    heading: 'General',
    faqs: [
      { q: 'What is Velvet Elves?', a: 'Velvet Elves is AI-powered real estate transaction management software. A team of specialized "elves" runs the busywork between contract and close, triaging email, tracking deadlines and disclosures, organizing documents, and keeping clients updated, while you approve every action.' },
      { q: 'Who is it for?', a: 'Agents, brokers and teams, and FSBO sellers, plus the buyers and sellers they serve through a client portal. Attorney and transaction-coordinator experiences are on the way.' },
      { q: 'Does the AI act on its own?', a: 'No. The AI drafts, organizes, and tracks, but nothing is sent or finalized without your approval. You stay in control of every decision.' },
      { q: 'How much does Velvet Elves cost?', a: 'Pricing is being finalized. Tell us your role on the contact page or join early access, and we will share current pricing and help you get started.' },
    ],
  },
  {
    id: 'agents',
    heading: 'For agents',
    faqs: [
      { q: 'Does Velvet Elves replace a transaction coordinator?', a: 'It handles the repetitive coordination work, chasing documents, tracking dates, drafting routine updates, keeping the file audit-ready. Solo agents often use it instead of hiring; teams use it so coordinators can focus on judgment calls.' },
      { q: 'Which capabilities are live today?', a: 'AI inbox triage and reply drafting with approval-before-send, deadline and compliance tracking, document organization, the client portal, and a complete audit trail. Voice and SMS assistants are on the roadmap and clearly labeled as coming soon.' },
    ],
  },
  {
    id: 'teams',
    heading: 'Brokers & teams',
    faqs: [
      { q: 'Can a whole team use Velvet Elves?', a: 'Yes. Team leads can control shared task templates and see every transaction across the team, while each agent keeps their own workflow. A dedicated Brokers & Teams experience is coming soon.' },
    ],
  },
  {
    id: 'fsbo',
    heading: 'FSBO sellers',
    faqs: [
      { q: 'Can I use Velvet Elves to sell my own home?', a: 'Yes. FSBO sellers get a guided, deadline-aware path from accepted offer to closing, professional structure without hiring an agent. Self-serve FSBO sign-up is rolling out; join early access to be notified.' },
      { q: 'Does it give legal or pricing advice?', a: 'No. It helps you organize and track the transaction. For legal questions, work with an attorney or title company, and the platform helps keep that organized.' },
    ],
  },
  {
    id: 'portal',
    heading: 'Client portal',
    faqs: [
      { q: 'Do clients pay or create an account?', a: 'No. Clients are invited by their agent and never pay. They get a calm, private view of their transaction, a timeline, documents, and a way to ask questions.' },
      { q: 'What can clients see?', a: 'Their milestones, key dates, and documents. Role-based access means they never see internal notes, and every action is logged in an audit trail.' },
    ],
  },
  {
    id: 'demo',
    heading: 'The demo',
    faqs: [
      { q: 'Can I watch a demo?', a: 'Yes. The demo page has an interactive walkthrough of a real transaction from contract to close, on the actual product. A full cinematic video is also in production; leave your email on the demo page and we will send it the moment it is ready.' },
    ],
  },
  {
    id: 'trust',
    heading: 'Trust & security',
    faqs: [
      { q: 'How is my data handled?', a: 'Every action is logged in a complete, exportable audit trail, and role-based access ensures each party sees only what is relevant to them.' },
      { q: 'Do I keep control of communications?', a: 'Yes. Drafts and suggestions are prepared for you, but every send waits for your approval.' },
    ],
  },
  {
    id: 'attorneys',
    heading: 'Attorneys',
    faqs: [
      { q: 'Is there an attorney experience?', a: 'An attorney workspace, for reviewing title objections, settlement deltas, and recording checkpoints, with approval-first releases, is on the roadmap. Legal judgment and final packet release always stay with the attorney, never the AI. Watch the demo and join early access to be notified.' },
    ],
  },
]

const ALL_FAQS = GROUPS.flatMap((g) => g.faqs)

export default function FaqPage() {
  return (
    <>
      <Seo
        title="Velvet Elves FAQ: Real Estate Transaction Management"
        description="Answers about Velvet Elves: what it does, which capabilities are live today, how the client portal works, and how you stay in control of every action."
        path="/faq"
        jsonLd={[faqPageJsonLd(ALL_FAQS)]}
      />

      <section className="border-b border-ve-border bg-gradient-to-b from-ve-orange-light/60 to-ve-bg px-6 pb-14 pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow mark className="mb-4">FAQ</Eyebrow>
          <h1 className="font-serif text-display-sm font-semibold text-ve-text-primary">Questions, answered.</h1>
          <p className="mx-auto mt-4 max-w-xl text-lead text-ve-text-secondary">
            What Velvet Elves does, what is live today, and how you stay in control.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-section-sm">
        <div className="flex flex-col gap-12">
          {GROUPS.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-28">
              <h2 className="mb-4 font-serif text-[22px] font-semibold text-ve-text-primary">{g.heading}</h2>
              <FaqList faqs={g.faqs} idBase={g.id} />
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-ve-border bg-ve-bg p-6 text-center">
          <p className="font-serif text-[20px] font-semibold text-ve-text-primary">Still have a question?</p>
          <p className="mb-4 mt-1 text-[14px] text-ve-text-secondary">Get product updates, or reach us from the contact page.</p>
          <div className="mx-auto max-w-md">
            <EmailCapture interest="newsletter" sourcePage="/faq" />
          </div>
        </div>
      </div>
    </>
  )
}
