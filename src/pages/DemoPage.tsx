import { Seo } from '@/components/seo/Seo'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { EmailCapture } from '@/components/ui/EmailCapture'
import { DemoPlayer } from '@/components/demo/DemoPlayer'
import { RoleCards } from '@/components/home/RoleCards'
import { REGISTER_URL } from '@/lib/config'

const STEPS = [
  { num: '01', title: 'Drop in the contract', body: 'Upload it or forward the email; the elves read it and pull out the parties, dates, and terms.' },
  { num: '02', title: 'It builds the transaction', body: 'A deadline-aware task plan, the document checklist, contacts, and a clear client timeline.' },
  { num: '03', title: 'You approve, it executes', body: 'Review the drafts, make the call, and the elves send, update, and check it off.' },
]

export default function DemoPage() {
  return (
    <>
      <Seo
        title="Watch the Velvet Elves Demo"
        description="See how Velvet Elves organizes a real estate transaction from contract to close, deadlines, updates, documents, and client communication, with you in control."
        path="/demo"
      />

      <section className="bg-gradient-to-b from-ve-sidebar to-[#101b2e] px-6 pb-section-sm pt-32 md:pb-section md:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="light" mark className="mb-4">Watch demo</Eyebrow>
          <h1 className="font-serif text-display-sm font-semibold text-white text-balance">
            See a calm transaction, start to finish.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lead text-white/75">
            We&rsquo;re putting the finishing touches on a full walkthrough, contract to close, without the chaos.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <DemoPlayer />
        </div>

        <div className="mx-auto mt-8 max-w-md text-center">
          <p className="mb-3 text-[14px] text-white/70">Be the first to watch it.</p>
          <EmailCapture interest="demo_waitlist" sourcePage="/demo" tone="dark" />
          <div className="mt-5">
            <Button href={REGISTER_URL} external variant="ghost-light" size="md">
              Or create an account
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-section-sm md:py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-10 text-center font-serif text-title font-semibold text-ve-text-primary">What you&rsquo;ll see</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.num} className="rounded-2xl border border-ve-border bg-white p-6 shadow-soft">
                <span className="font-mono text-[13px] font-semibold text-ve-orange">{s.num}</span>
                <h3 className="mt-2 font-serif text-[19px] font-semibold text-ve-text-primary">{s.title}</h3>
                <p className="mt-1.5 text-[14px] text-ve-text-secondary">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoleCards />
    </>
  )
}
