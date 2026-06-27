import { Network, LayoutTemplate, ShieldCheck, Users, Gauge, KeyRound } from 'lucide-react'
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
  { icon: Network, title: 'Pipeline visibility', body: 'See every deal across the team in one place, with health, deadlines, and what needs attention, without chasing status updates.' },
  { icon: LayoutTemplate, title: 'Shared task templates', body: 'Team leads set the standard workflow once. Every new transaction follows it, so quality does not depend on who is running the deal.' },
  { icon: ShieldCheck, title: 'Compliance, brokerage-wide', body: 'Required disclosures and checklist items are tracked on every file, so the brokerage stays audit-ready across all agents.' },
  { icon: Users, title: 'Agents keep their flow', body: 'Each agent works their own deals their own way; the team layer adds oversight without micromanaging.' },
  { icon: Gauge, title: 'Onboard faster', body: 'New agents inherit the team workflow on day one, instead of learning your process from scratch.' },
  { icon: KeyRound, title: 'Role-based access', body: 'Everyone sees exactly what their role should, and every action is captured in a complete audit trail.' },
]

const FAQS: Faq[] = [
  {
    q: 'What does Velvet Elves give a brokerage or team?',
    a: 'It gives team leads pipeline visibility across every transaction, control over the shared task workflow, and brokerage-wide compliance tracking, while each agent keeps running their own deals. You get oversight without micromanaging.',
  },
  {
    q: 'Can a team lead see every transaction?',
    a: 'Yes. Team leads can oversee all team transactions and see status, deadlines, and what needs attention across the whole pipeline. Activity is logged for an audit trail.',
  },
  {
    q: 'Do agents lose their own workflow?',
    a: 'No. Agents keep working their deals their own way. The team layer standardizes templates and adds visibility; it does not take the deal out of the agent’s hands.',
  },
  {
    q: 'How does it help with compliance?',
    a: 'Required disclosures, deadlines, and checklist items are tracked on every file across the team, so the brokerage stays clean and audit-ready instead of depending on each agent to remember.',
  },
]

export default function BrokersTeamsPage() {
  return (
    <>
      <Seo
        title="Velvet Elves for Brokers & Teams: Pipeline Visibility"
        description="Pipeline visibility across every deal, shared task templates, and brokerage-wide compliance, without micromanaging a single agent."
        path="/brokers-teams"
        jsonLd={[faqPageJsonLd(FAQS)]}
      />

      <RoleHero
        eyebrow="For brokers & teams"
        title={<>Pipeline visibility, without micromanaging.</>}
        subtitle="See every deal across your team, standardize the workflow, and keep the whole brokerage audit-ready, while each agent keeps their own flow."
        sourcePage="/brokers-teams"
        account="create"
        mock={<ProductShot src="/screens/screen-transactions.png" alt="The Velvet Elves pipeline view across a team's active transactions" priority />}
      />

      <SectionShell className="bg-white">
        <AnswerBlock
          kicker="What does Velvet Elves do for a team?"
          answer="It gives team leads a live view of every transaction across the brokerage, control over the shared task workflow, and compliance tracking on every file, while each agent keeps running their own deals. You get oversight and consistency without micromanaging."
        />
      </SectionShell>

      <FeatureGrid eyebrow="What you get" heading="Run a tighter brokerage, with a lighter touch." features={FEATURES} />

      <FaqAccordion faqs={FAQS} heading="Brokers & teams questions, answered" />

      <FinaleCta
        title="See your whole pipeline in one place."
        subtitle="Watch how a team runs every deal to the same standard, without anyone hovering over an agent's shoulder."
        sourcePage="/brokers-teams"
        account="create"
      />
    </>
  )
}
