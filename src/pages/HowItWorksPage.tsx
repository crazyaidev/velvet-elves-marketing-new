import { Seo } from '@/components/seo/Seo'
import { RoleHero } from '@/components/role/RoleHero'
import { SectionShell } from '@/components/ui/SectionShell'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { ElfBand } from '@/components/product/ElfBand'
import { RoleCards } from '@/components/home/RoleCards'
import { FinaleCta } from '@/components/sections/FinaleCta'
import { ProductShot } from '@/components/product/ProductShot'
import { howToJsonLd } from '@/lib/seo'

const STEPS = [
  {
    name: 'Forward what you have',
    text: 'Send your email, documents, and deadlines to Velvet Elves. There is nothing to set up, drop it in and the elves take it from there.',
  },
  {
    name: 'The elves organize',
    text: 'They sort and track everything: deadlines get flagged, documents get filed, clients get a clear timeline, and routine replies get drafted.',
  },
  {
    name: 'You approve, they execute',
    text: 'Review what matters and make the call. The elves carry it out, sending the approved reply, updating the client, and checking off the task.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <Seo
        title="How Velvet Elves Works: Forward, Organize, Approve"
        description="Three steps: forward what you have, the elves organize the transaction, and you approve while they execute. See how Velvet Elves runs contract to close."
        path="/how-it-works"
        jsonLd={[
          howToJsonLd({
            name: 'How Velvet Elves works',
            description: 'Run a real estate transaction from contract to close in three steps.',
            steps: STEPS,
          }),
        ]}
      />

      <RoleHero
        eyebrow="How it works"
        title={<>Forward. Organize. Approve.</>}
        subtitle="No setup, no new system to learn. Send what you already have, and the elves turn it into an organized transaction you stay in control of."
        sourcePage="/how-it-works"
        account="create"
        mock={<ProductShot src="/screens/screen-transactions.png" alt="The Velvet Elves dashboard" priority />}
      />

      <SectionShell className="bg-white">
        <AnswerBlock
          kicker="How does Velvet Elves work?"
          answer="You forward your transaction email, documents, and deadlines. The elves organize everything, tracking dates, filing documents, updating clients, and drafting routine replies. Then you approve what matters, and they execute. Three steps, no chaos."
        />
      </SectionShell>

      <ElfBand
        eyebrow="Step 01"
        title="Forward what you have."
        description="Email, documents, deadlines, drop them in. There is no migration and no template to build first."
        bullets={['Forward transaction email as it arrives', 'Add documents and key dates', 'No setup or new workflow to learn']}
        visual={<ProductShot src="/screens/screen-wizard.png" alt="Documents organized in the Velvet Elves app" />}
      />
      <ElfBand
        eyebrow="Step 02"
        title="The elves organize."
        description="Everything is sorted and tracked: deadlines flagged, documents filed, clients given a clear timeline."
        bullets={['Deadlines and disclosures tracked automatically', 'Documents filed and checklisted', 'Clients see a calm, clear timeline']}
        visual={<ProductShot src="/screens/screen-transactions.png" alt="The organized task queue in the Velvet Elves app" />}
        reverse
        bg="bg"
      />
      <ElfBand
        eyebrow="Step 03"
        title="You approve, they execute."
        description="Review the draft, make the call, and the elves carry it out, every send waiting for your sign-off."
        bullets={['One-click approval on every reply', 'The elves send, update, and check it off', 'A complete audit trail of every action']}
        visual={<ProductShot src="/screens/screen-transactions.png" alt="AI-suggested actions awaiting approval in the Velvet Elves app" />}
      />

      <RoleCards />

      <FinaleCta
        title="Watch the three steps in action."
        subtitle="See a full transaction move from contract to close: forwarded, organized, and approved."
        sourcePage="/how-it-works"
        account="create"
      />
    </>
  )
}
