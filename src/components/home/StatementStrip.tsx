import { SectionShell } from '@/components/ui/SectionShell'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function StatementStrip() {
  return (
    <SectionShell className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow className="mb-5">The reality</Eyebrow>
        <h2 className="font-serif text-title font-semibold text-ve-text-primary text-balance">
          Every deal generates a hundred small jobs. Right now, you&rsquo;re the one doing all of them.
        </h2>
      </div>
    </SectionShell>
  )
}
