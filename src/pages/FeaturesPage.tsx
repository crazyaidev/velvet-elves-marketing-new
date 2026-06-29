import { Link } from 'react-router-dom'
import {
  Sparkles, ArrowRight, Workflow, ListChecks, CalendarClock, Network, ShieldCheck,
  ScrollText, KeyRound, FileSignature, FolderCheck, Library, MessageSquare, Phone, Send,
  CreditCard, Receipt, Banknote, Lightbulb, BarChart3, GraduationCap, MessagesSquare, Share2,
  Home, Scale, User, Users, Plug, GitCompare, ClipboardList, FileSearch, Wand2,
} from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { ProductShot } from '@/components/product/ProductShot'
import { ElfBand } from '@/components/product/ElfBand'
import { FeaturePillar } from '@/components/features/FeaturePillar'
import { FinaleCta } from '@/components/sections/FinaleCta'
import { WatchDemoButton } from '@/components/demo/WatchDemoButton'
import { softwareApplicationJsonLd } from '@/lib/seo'
import { REGISTER_URL } from '@/lib/config'

export default function FeaturesPage() {
  return (
    <>
      <Seo
        title="Features: The Velvet Elves Real Estate Transaction OS"
        description="Everything Velvet Elves does, from AI contract intake and a deadline-aware task plan to documents and e-signature, AI email drafting, a vendor bench, payments, a client portal, and a complete audit trail."
        path="/features"
        jsonLd={[
          softwareApplicationJsonLd({
            description:
              'AI real estate transaction management. AI contract intake, transaction workspace, deadline-aware tasks, documents and e-signature, AI email drafting with approval, vendors, payments, client portal, analytics, and a complete audit trail.',
            featureList: [
              'AI contract intake and transaction workspace',
              'Deadline-aware task plan generated from the contract',
              'Document checklist, e-signature, and a fillable-PDF template library',
              'AI inbox triage and reply drafting with approval-before-send',
              'Closing calendar and key-date tracking',
              'Vendor directory and proposals',
              'Invoices, payments, and commission payouts',
              'Client portal with role-based access',
              'AI suggestions, analytics, and a complete audit trail',
            ],
          }),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink px-6 pb-20 pt-32 md:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ve-sidebar via-[#14213a] to-ink" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-ve-orange/20 blur-[120px]" />
        <div className="relative mx-auto max-w-content">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="light" mark className="mb-5">The whole platform</Eyebrow>
            <h1 className="font-serif text-display font-semibold leading-[1.05] text-white text-balance">
              Everything it takes to run a deal, in one place.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lead text-white/70">
              Velvet Elves is a complete transaction OS: AI intake, a deadline-aware plan, documents and e-signature,
              email handled, vendors, payments, and a client portal, with you approving every step.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <WatchDemoButton sourcePage="/features" size="lg" />
              <Button href={REGISTER_URL} external variant="ghost-light" size="lg">
                Create an account
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <Reveal className="relative mx-auto mt-14 max-w-5xl" y={30}>
            <div aria-hidden="true" className="absolute -inset-4 rounded-[20px] bg-gradient-to-tr from-ve-orange/15 to-transparent blur-2xl" />
            <ProductShot src="/screens/screen-dashboard.png" alt="The Velvet Elves agent command center: pipeline KPIs, an AI briefing, the closing week, and portfolio health" priority className="relative" />
            <p className="mt-5 text-center text-[12px] text-white/55">The Velvet Elves app · sample data</p>
          </Reveal>
        </div>
      </section>

      {/* ── Transactions (flagship screenshots) ─────────────────────────── */}
      <div id="transactions" className="scroll-mt-24">
        <ElfBand
          eyebrow="Transactions · AI intake"
          title="Drop in the contract. It reads everything."
          description="Upload the executed contract or forward the email. Velvet Elves parses the parties, property, price, and every contractual date, then builds the deal for you to confirm."
          bullets={[
            'Parses parties, property, price, and dates from the PDF',
            'Builds the transaction and its timeline automatically',
            'You confirm what it found, no data entry',
          ]}
          visual={<ProductShot src="/screens/screen-wizard.png" alt="The Velvet Elves AI intake reading a contract and extracting its parties and key dates" />}
        />
        <ElfBand
          eyebrow="Transactions · Pipeline"
          title="Every deal in one calm command center."
          description="Active, pending, and closed, each with its milestone tracker, days-to-close, tasks, and documents. Sort by urgency and see what needs attention before it bites."
          bullets={[
            'Milestone tracker and days-to-close on every deal',
            'Filter by overdue, due today, needs attention, closing soon',
            'A conversational AI agent rides along inside each transaction',
          ]}
          visual={<ProductShot src="/screens/screen-transactions.png" alt="The Velvet Elves Active Transactions pipeline with milestone trackers and days-to-close" />}
          reverse
          bg="bg"
        />
        <ElfBand
          eyebrow="Transactions · AI agent"
          title="A conversational AI agent inside every deal."
          description="Open a transaction and the agent briefs you, flags what's at risk, and proposes the next action, drafted and ready. You approve or dismiss; the deal's tabs update from canonical data, never a claim in chat."
          bullets={[
            'Surfaces blockers and deadlines before they bite',
            'Proposes actions (like an email draft) for one-click approval',
            'Every approval writes to the timeline and the audit trail',
          ]}
          visual={<ProductShot src="/screens/screen-workspace.png" alt="The Velvet Elves transaction workspace: the AI agent proposing a drafted follow-up for approval beside the deal timeline" />}
        />
      </div>

      {/* ── Tasks ───────────────────────────────────────────────────────── */}
      <FeaturePillar
        id="tasks"
        bg="white"
        eyebrow="Tasks & deadlines"
        heading="A deadline-aware plan, built from the contract."
        intro="The task engine turns contract dates into an ordered, dependency-aware plan, so nothing slips because you were busy."
        features={[
          { icon: Wand2, title: 'Generated from the contract', body: 'Key dates become a structured task plan the moment the deal is created.' },
          { icon: ListChecks, title: 'My Task Queue', body: 'Everything due across every deal in one prioritized list, by urgency and severity.' },
          { icon: Workflow, title: 'Dependencies & float', body: 'Tasks understand what comes before them and how much slack each date has.' },
          { icon: ClipboardList, title: 'Templates & playbooks', body: 'Standardize your workflow once; every new transaction follows it.' },
          { icon: CalendarClock, title: 'Reminders before they bite', body: 'Follow-up cadence scales with how critical and how close each deadline is.' },
          { icon: Sparkles, title: 'One-click complete', body: 'Resolve a task and the timeline, documents, and client view update together.' },
        ]}
      />

      {/* ── Documents ───────────────────────────────────────────────────── */}
      <FeaturePillar
        id="documents"
        eyebrow="Documents"
        heading="Every document filed, checklisted, and audit-ready."
        features={[
          { icon: FolderCheck, title: 'All Documents', body: 'A single checklist per deal: what is in, what is missing, and what needs review.' },
          { icon: FileSearch, title: 'Missing-doc radar', body: 'Required disclosures and forms are tracked, so gaps surface before closing.' },
          { icon: FileSignature, title: 'E-signature', body: 'Send for signature and track status without leaving the transaction (DocuSign).' },
          { icon: Library, title: 'Template library', body: 'Upload your own fillable PDFs, map the fields once, and generate filled forms.' },
          { icon: Wand2, title: 'Generate from template', body: 'Produce a completed, flattened form from the deal data in a click.' },
          { icon: ScrollText, title: '"Cleared today" ledger', body: 'See exactly what was resolved today across the whole portfolio.' },
        ]}
      />

      {/* ── Email & AI communication (flagship screenshot) ──────────────── */}
      <div id="email" className="scroll-mt-24">
        <ElfBand
          eyebrow="Email & AI · live"
          title="The inbox, triaged and drafted for you."
          description="Transaction email is read, sorted, and answered as drafts. Every reply waits for your one-click approval, so the thread stops being a second job."
          bullets={[
            'AI drafts on-point replies in your voice',
            'Confidence-scored, with the source it used',
            'Nothing sends without your approval',
          ]}
          visual={<ProductShot src="/screens/screen-email.png" alt="The Velvet Elves AI Email Review queue with AI-drafted replies awaiting one-click approval" />}
        />
        <FeaturePillar
          id="email-more"
          bg="bg"
          eyebrow="Email & AI communication"
          heading="More in Email &amp; AI."
          features={[
            { icon: FileSignature, title: 'Email templates', body: 'Reusable, on-brand templates for the messages you send on every deal.' },
            { icon: ScrollText, title: 'Full thread history', body: 'Every message is logged to the transaction and the audit trail.' },
            { icon: Phone, title: 'Voice Elf', body: 'Transcribe voicemails and calls and surface the details that matter.', soon: true },
            { icon: MessageSquare, title: 'SMS Elf', body: 'Timely text updates to clients and vendors, never from your personal number.', soon: true },
            { icon: Send, title: 'Autopilot send', body: 'Approved cadences that send the routine updates on schedule.', soon: true },
          ]}
        />
      </div>

      {/* ── Calendar ────────────────────────────────────────────────────── */}
      <FeaturePillar
        id="calendar"
        eyebrow="Calendar"
        heading="Every key date, front and center."
        features={[
          { icon: CalendarClock, title: 'Closing calendar', body: 'Inspection, appraisal, financing, and closing dates across all deals, month or agenda view.' },
          { icon: Sparkles, title: 'Pulled from the contract', body: 'Dates flow in from intake automatically, no manual calendar entry.' },
          { icon: Plug, title: 'Calendar sync', body: 'Push key dates to Google or Outlook so they live where you already work.' },
        ]}
      />

      {/* ── Vendors (flagship screenshot) ───────────────────────────────── */}
      <div id="vendors" className="scroll-mt-24">
        <ElfBand
          eyebrow="Vendors"
          title="Your vendor bench, organized."
          description="Title, lenders, inspectors, appraisers, and more, with preferred picks, categories, and contact details, ready to drop into any deal."
          bullets={[
            'Preferred vendors and categories at a glance',
            'Search and filter your whole bench in one place',
            'Inbound proposals you can accept or counter, and a vendor portal',
          ]}
          visual={<ProductShot src="/screens/screen-vendors.png" alt="The Velvet Elves vendor directory with categories, preferred picks, and contact details" />}
        />
      </div>

      {/* ── Payments ────────────────────────────────────────────────────── */}
      <FeaturePillar
        id="payments"
        bg="white"
        eyebrow="Payments"
        heading="Invoices, payments, and payouts, handled."
        features={[
          { icon: Receipt, title: 'Invoices', body: 'Create and send invoices tied to the transaction.' },
          { icon: CreditCard, title: 'Pay links', body: 'Clients pay online from a secure link, no login required.' },
          { icon: Banknote, title: 'Commission payouts', body: 'Track and trigger commission splits and payouts.' },
        ]}
      />

      {/* ── Intelligence ────────────────────────────────────────────────── */}
      <FeaturePillar
        id="intelligence"
        eyebrow="Intelligence"
        heading="The AI that watches the whole portfolio."
        features={[
          { icon: Lightbulb, title: 'AI Suggestions', body: 'Proactive, ranked next-best-actions across all your deals, with confidence.' },
          { icon: BarChart3, title: 'Analytics & reports', body: 'Pipeline value, closings, and per-user performance, exportable.' },
          { icon: GitCompare, title: 'Deal health scoring', body: 'A health read on every transaction so risk surfaces early.' },
          { icon: GraduationCap, title: 'AI Coach', body: 'Daily coaching, lead-gen prompts, and scripts grounded in your pipeline.', soon: true },
        ]}
      />

      {/* ── Client experience ───────────────────────────────────────────── */}
      <FeaturePillar
        id="clients"
        bg="white"
        eyebrow="Client experience"
        heading="A calm, private window for buyers and sellers."
        features={[
          { icon: MessagesSquare, title: 'Client portal', body: 'A concierge home with the timeline, next steps, and updates, no internal notes.' },
          { icon: Share2, title: 'Milestone share links', body: 'Share a clean progress view with anyone, no account needed.' },
          { icon: FileSignature, title: 'Review & sign', body: 'Clients review and sign documents in one place.' },
          { icon: Receipt, title: 'Client invoices', body: 'Buyers and sellers see and pay what they owe, clearly.' },
        ]}
      />

      {/* ── Role workspaces ─────────────────────────────────────────────── */}
      <section id="roles" className="scroll-mt-24 bg-ve-bg px-6 py-section-sm md:py-section">
        <div className="mx-auto max-w-content">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow className="mb-4">Built for your role</Eyebrow>
            <h2 className="font-serif text-title font-semibold text-ve-text-primary text-balance">A tailored workspace for everyone on the deal.</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: User, title: 'Agents', body: "A coordinator's leverage on every deal.", href: '/agents' },
              { icon: Users, title: 'Brokers & Teams', body: 'Pipeline visibility without micromanaging.', href: '/brokers-teams' },
              { icon: Scale, title: 'Attorneys', body: 'Closing matters, handled; judgment stays yours.', href: '/attorneys' },
              { icon: Home, title: 'FSBO sellers', body: "Sell with a professional's structure.", href: '/fsbo' },
            ].map((r) => (
              <Link
                key={r.href}
                to={r.href}
                className="group rounded-2xl border border-ve-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-ve-orange-border hover:shadow-card-hover"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-ve-orange-light text-ve-orange-dark transition-transform duration-300 group-hover:scale-110">
                  <r.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-[18px] font-semibold text-ve-text-primary">{r.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ve-text-secondary">{r.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13.5px] font-semibold text-ve-orange-dark">
                  Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust & oversight ───────────────────────────────────────────── */}
      <FeaturePillar
        id="trust"
        bg="white"
        eyebrow="Trust & oversight"
        heading="Control that doesn't slow you down."
        intro="Nothing is sent or finalized without you, and everything is captured."
        features={[
          { icon: KeyRound, title: 'Role-based access', body: 'Each party sees exactly what is relevant, clients never see internal notes.' },
          { icon: Network, title: 'Team overview', body: 'Team leads see every deal across the brokerage, with shared templates.' },
          { icon: MessageSquare, title: 'Communication audit', body: 'Every message and action is logged and searchable.' },
          { icon: ScrollText, title: 'Audit log', body: 'A complete, exportable, timestamped history of the whole workspace.' },
          { icon: ShieldCheck, title: 'AI governance', body: 'You choose the AI provider; confidence thresholds gate what auto-acts.' },
          { icon: Plug, title: 'Integrations', body: 'Gmail, calendars, and e-signature connect to the work you already do.' },
        ]}
      />

      <FinaleCta
        title="See it run, start to finish."
        subtitle="Watch a complete transaction move from contract to close, with the elves doing the work and you making the calls."
        sourcePage="/features"
        account="create"
      />
    </>
  )
}
