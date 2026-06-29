import { Wind, ShieldCheck, Eye } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionShell } from '@/components/ui/SectionShell'
import { FinaleCta } from '@/components/sections/FinaleCta'

/*
 * COPY STATUS: launch-ready, written to make only verifiable claims (no team
 * size, funding, customer counts, or awards). OPTIONAL for Jake: add concrete
 * specifics (founder name, brokerage, location, founding year) if he wants them;
 * the page reads as finished without them.
 */
const PRINCIPLES = [
  { icon: Wind, title: 'Calm', body: 'Real estate is stressful enough. The product, and this company, work to take the chaos down, not add to it.' },
  { icon: Eye, title: 'Control', body: 'The AI does the work; you make the decisions. Nothing is sent or finalized without a human approval.' },
  { icon: ShieldCheck, title: 'Honesty', body: 'We show only what is real today. Roadmap features are labeled, and we never invent proof.' },
]

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Velvet Elves"
        description="Velvet Elves was built inside a working brokerage to take the chaos out of real estate transactions, with a simple rule: the AI does the work, and you stay in control."
        path="/about"
      />

      <section className="border-b border-ve-border bg-gradient-to-b from-ve-orange-light/60 to-ve-bg px-6 pb-14 pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow mark className="mb-4">About</Eyebrow>
          <h1 className="font-serif text-display-sm font-semibold text-ve-text-primary text-balance">
            Built inside a real brokerage.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lead text-ve-text-secondary">
            Velvet Elves comes from the daily reality of running transactions, not a whiteboard.
          </p>
        </div>
      </section>

      <SectionShell className="bg-white">
        <div className="mx-auto max-w-prose">
          <div className="flex flex-col gap-5 text-[16px] leading-relaxed text-ve-text-secondary">
            <p>
              Every real estate deal generates a hundred small jobs between contract and close: emails to answer, deadlines to track, documents to chase, clients to reassure. Done well, that work is invisible. Done late, it costs deals and sleep.
            </p>
            <p>
              Velvet Elves was built to handle that work, a team of tireless &ldquo;elves&rdquo; that runs the busywork in the background. The name is the promise: invisible help, not a mascot. There are no costumes here, just fewer things falling through the cracks.
            </p>
            <p>
              The one rule the product never breaks: <span className="font-semibold text-ve-text-primary">you approve everything</span>. The AI drafts, organizes, and tracks; you make the calls. That is what lets it move fast without ever moving without you.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-ve-bg">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Eyebrow className="mb-4">What we believe</Eyebrow>
          <h2 className="font-serif text-title font-semibold text-ve-text-primary">Three principles, no exceptions.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="rounded-2xl border border-ve-border bg-white p-6 shadow-soft">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-ve-orange-light text-ve-orange-dark">
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-[19px] font-semibold text-ve-text-primary">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ve-text-secondary">{p.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <FinaleCta
        title="See what handled feels like."
        subtitle="Watch a transaction run from contract to close, with the elves doing the work and you in control."
        sourcePage="/about"
        account="create"
      />
    </>
  )
}
