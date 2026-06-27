import { Link } from 'react-router-dom'
import { ChevronRight, Sparkles } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { SectionShell } from '@/components/ui/SectionShell'
import { FaqAccordion } from '@/components/role/FaqAccordion'
import { FinaleCta } from '@/components/sections/FinaleCta'
import { howToJsonLd, breadcrumbListJsonLd, SITE_URL, type Faq } from '@/lib/seo'

interface Stage {
  name: string
  text: string
  elf?: string
}

// Educational; order and timing vary by state and contract.
const STAGES: Stage[] = [
  { name: 'Offer accepted (under contract)', text: 'Both parties sign the purchase agreement. The clock on every contingency and deadline starts here.', elf: 'Velvet Elves logs the contract dates and builds the deadline timeline automatically.' },
  { name: 'Earnest money deposited', text: 'The buyer delivers the good-faith deposit to escrow within the contract window.' },
  { name: 'Inspection period', text: 'The buyer inspects the property and reviews its condition before the inspection deadline.', elf: 'Deadlines are tracked and surfaced before they expire, so the window never lapses.' },
  { name: 'Inspection negotiation', text: 'Buyer and seller negotiate repairs, credits, or price based on inspection findings.' },
  { name: 'Appraisal', text: "The lender orders an appraisal to confirm the home's value supports the loan." },
  { name: 'Loan processing & underwriting', text: "The lender verifies the buyer's finances and processes the mortgage application." },
  { name: 'Title search & commitment', text: 'The title company researches ownership history and issues a title commitment, flagging any liens or objections.', elf: 'Document requests and the title timeline are organized in one place, with nothing lost to email.' },
  { name: 'Contingency removal', text: 'As each condition is satisfied, the corresponding contingency is removed per the contract.' },
  { name: 'Clear to close', text: 'The lender issues final loan approval and the closing disclosure is delivered to the buyer.' },
  { name: 'Final walkthrough', text: 'The buyer confirms the property condition and agreed repairs shortly before closing.', elf: 'The walkthrough and closing dates stay front and center for everyone involved.' },
  { name: 'Closing & recording', text: 'Documents are signed, funds are disbursed, and the deed is recorded, the transaction is complete.' },
]

const FAQS: Faq[] = [
  { q: 'How long does it take to close on a house?', a: 'Most financed transactions close in about 30 to 45 days from accepted offer, though cash deals can be faster and timelines vary by state, lender, and contract terms.' },
  { q: 'What is the difference between under contract and closing?', a: '"Under contract" means the offer is accepted and contingencies are being worked through. "Closing" is the final step where documents are signed, funds disburse, and ownership transfers.' },
  { q: 'What most often delays a closing?', a: 'Financing and appraisal issues, title objections, and missed contingency deadlines are the most common causes, which is exactly why tracking dates and documents matters.' },
]

const BREADCRUMBS = [
  { name: 'Home', url: `${SITE_URL}/` },
  { name: 'Guides', url: `${SITE_URL}/guides/contract-to-close` },
  { name: 'Contract to Close', url: `${SITE_URL}/guides/contract-to-close` },
]

export default function GuideContractToClosePage() {
  return (
    <>
      <Seo
        title="Contract to Close: The Real Estate Transaction Timeline"
        description="A plain-language guide to the real estate closing process, the 11 stages from accepted offer to recording, what happens at each, and what most often causes delays."
        path="/guides/contract-to-close"
        jsonLd={[
          howToJsonLd({ name: 'Contract to close: the real estate transaction timeline', description: 'The stages of a real estate transaction from accepted offer to closing.', steps: STAGES.map((s) => ({ name: s.name, text: s.text })) }),
          breadcrumbListJsonLd(BREADCRUMBS),
        ]}
      />

      <section className="border-b border-ve-border bg-gradient-to-b from-ve-orange-light/60 to-ve-bg px-6 pb-14 pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-[12.5px] text-ve-text-muted">
            <Link to="/" className="hover:text-ve-text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Guides</span>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="font-medium text-ve-text-secondary">Contract to Close</span>
          </nav>
          <Eyebrow mark className="mb-4">Guide</Eyebrow>
          <h1 className="font-serif text-display-sm font-semibold text-ve-text-primary text-balance">
            Contract to close: the transaction timeline.
          </h1>
          <p className="mt-4 max-w-xl text-lead text-ve-text-secondary">
            A plain-language walk through the real estate closing process, from accepted offer to recorded deed, and where things tend to go sideways.
          </p>
        </div>
      </section>

      <SectionShell className="bg-white">
        <AnswerBlock
          kicker="What is the contract-to-close process?"
          answer="It is the sequence of steps a real estate transaction moves through after an offer is accepted: earnest money, inspection, appraisal, financing, title, contingency removals, the final walkthrough, and closing. Order and timing vary by state and contract, but the milestones are consistent."
        />
      </SectionShell>

      <section className="bg-ve-bg px-6 py-section-sm md:py-section">
        <div className="mx-auto max-w-3xl">
          <p className="mb-8 text-center text-[13px] text-ve-text-muted">The 11 stages · order and timing vary by state</p>
          <ol className="flex flex-col gap-4">
            {STAGES.map((s, i) => (
              <li key={s.name} className="rounded-2xl border border-ve-border bg-white p-5 shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ve-sidebar font-mono text-[13px] font-semibold text-white">{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-[19px] font-semibold text-ve-text-primary">{s.name}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-ve-text-secondary">{s.text}</p>
                    {s.elf && (
                      <div className="mt-3 flex items-start gap-2 rounded-xl border border-ve-orange-border bg-ve-orange-soft px-3.5 py-2.5">
                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-ve-orange" aria-hidden="true" />
                        <p className="text-[13px] leading-relaxed text-ve-text-secondary"><span className="font-semibold text-ve-orange-xdark">Where the elves help: </span>{s.elf}</p>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FaqAccordion faqs={FAQS} heading="Closing timeline questions" />

      <SectionShell className="bg-ve-bg">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-[22px] font-semibold text-ve-text-primary">Keep reading</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'How it works', href: '/how-it-works' },
              { label: 'For agents', href: '/agents' },
              { label: 'For FSBO sellers', href: '/fsbo' },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="rounded-full border border-ve-border bg-white px-4 py-2 text-[14px] font-medium text-ve-text-primary shadow-soft hover:border-ve-orange-border">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </SectionShell>

      <FinaleCta
        title="Let the elves track the timeline for you."
        subtitle="Every deadline, document, and milestone: surfaced before it becomes a problem."
        sourcePage="/guides/contract-to-close"
        account="create"
      />
    </>
  )
}
