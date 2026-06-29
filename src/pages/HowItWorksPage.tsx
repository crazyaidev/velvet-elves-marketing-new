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
    name: 'Drop in the contract',
    text: 'Upload the executed contract or forward the email. Velvet Elves reads it and extracts the parties, property, price, and every contractual date for you to confirm.',
  },
  {
    name: 'Velvet Elves builds the transaction',
    text: 'From the contract it assembles a deadline-aware task plan, a document checklist, organized contacts, and a clear client timeline, kept current as the deal moves.',
  },
  {
    name: 'You approve, it executes',
    text: 'Every reply and reminder is drafted for your review. You approve, and Velvet Elves sends it, updates the client, and checks off the task, with a complete audit trail.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <Seo
        title="How Velvet Elves Works: From Contract to Close"
        description="Three steps: drop in the contract, Velvet Elves builds the transaction, and you approve while it executes. See how Velvet Elves runs a deal from contract to close."
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
        title={<>From contract to close.</>}
        subtitle="No setup, no new system to learn. Drop in the contract and the elves turn it into an organized transaction you stay in control of: a task plan, the documents, and a clear client timeline."
        sourcePage="/how-it-works"
        account="create"
        mock={<ProductShot src="/screens/screen-transactions.png" alt="The Velvet Elves dashboard" priority />}
      />

      <SectionShell className="bg-white">
        <AnswerBlock
          kicker="How does Velvet Elves work?"
          answer="You upload the contract or forward the transaction email. Velvet Elves reads it and assembles the deal: a deadline-aware task plan, a document checklist, organized contacts, and a clear client timeline. Then it drafts the routine replies and reminders, and you approve before anything is sent. Three steps, no chaos."
        />
      </SectionShell>

      <ElfBand
        eyebrow="Step 01"
        title="Drop in the contract."
        description="Upload the executed contract or forward the email. Velvet Elves reads it and extracts the parties, property, price, and every contractual date, no migration and no template to build first."
        bullets={['Upload a PDF or forward the transaction email', 'AI extracts parties, property, price, and dates', 'You confirm what it found, no data entry']}
        visual={<ProductShot src="/screens/screen-wizard.png" alt="The Velvet Elves AI intake reading a contract" />}
      />
      <ElfBand
        eyebrow="Step 02"
        title="It builds the transaction."
        description="From the contract, the elves assemble the whole file and keep it current as the deal moves toward closing."
        bullets={['A deadline-aware task plan, generated from the contract', 'Document checklist with disclosures tracked', 'Contacts organized and a clear client timeline']}
        visual={<ProductShot src="/screens/screen-transactions.png" alt="The assembled transaction and task plan in the Velvet Elves app" />}
        reverse
        bg="bg"
      />
      <ElfBand
        eyebrow="Step 03"
        title="You approve, it executes."
        description="Every reply and reminder is drafted for your review. Approve it and the elves carry it out, nothing leaves without your sign-off."
        bullets={['One-click approval on every drafted reply', 'The elves send, update the client, and check it off', 'Complete audit trail and role-based access']}
        visual={<ProductShot src="/screens/screen-transactions.png" alt="An AI-drafted action awaiting approval in the Velvet Elves app" />}
      />

      <RoleCards />

      <FinaleCta
        title="Watch the three steps in action."
        subtitle="See a full transaction move from contract to close: read, built, and approved."
        sourcePage="/how-it-works"
        account="create"
      />
    </>
  )
}
