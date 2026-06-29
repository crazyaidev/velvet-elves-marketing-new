import { Seo } from '@/components/seo/Seo'
import { Hero } from '@/components/home/Hero'
import { StatementStrip } from '@/components/home/StatementStrip'
import { MeetTheElves } from '@/components/home/MeetTheElves'
import { HowItWorks } from '@/components/home/HowItWorks'
import { RoleCards } from '@/components/home/RoleCards'
import { TrustBand } from '@/components/home/TrustBand'
import { FinaleCta } from '@/components/sections/FinaleCta'
import { Marquee } from '@/components/ui/Marquee'
import { organizationJsonLd, webSiteJsonLd, softwareApplicationJsonLd } from '@/lib/seo'

const MARQUEE_ITEMS = [
  'AI inbox triage',
  'Reply drafting',
  'Deadline tracking',
  'Compliance checklists',
  'Document intelligence',
  'Client portal',
  'Audit trail',
  'Contract-to-close timeline',
]

export default function HomePage() {
  return (
    <>
      <Seo
        title="Velvet Elves: AI Real Estate Transaction Management"
        description="AI real estate transaction management software. A team of elves runs the busywork between contract and close, and nothing moves without your approval. More control for agents, more clarity for clients."
        path="/"
        jsonLd={[
          organizationJsonLd(),
          webSiteJsonLd(),
          // featureList = live capabilities only (no voicemail/SMS, plan §1A/F1).
          softwareApplicationJsonLd({
            description:
              'AI-powered real estate transaction management and client-portal software, a team of elves that runs the busywork between contract and close, with nothing moving without your approval.',
            featureList: [
              'AI inbox triage and reply drafting with approval-before-send',
              'Deadline, disclosure, and compliance tracking from contract to close',
              'Client portal with role-based access',
              'Complete, exportable audit trail',
            ],
          }),
        ]}
      />
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <StatementStrip />
      <MeetTheElves />
      <HowItWorks />
      <RoleCards />
      <TrustBand />
      <FinaleCta
        title="Ready to see it in action?"
        subtitle="Watch a complete transaction move from contract to close, without a single follow-up email from you."
        sourcePage="/"
      />
    </>
  )
}
