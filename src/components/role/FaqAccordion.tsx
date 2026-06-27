import { SectionShell } from '@/components/ui/SectionShell'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { FaqList } from './FaqList'
import type { Faq } from '@/lib/seo'

interface FaqAccordionProps {
  faqs: Faq[]
  heading?: string
  id?: string
}

/** Accessible FAQ accordion. The same `faqs` array also feeds FAQPage JSON-LD
 *  on the page, so structured data never drifts from what is shown. */
export function FaqAccordion({ faqs, heading = 'Questions, answered', id }: FaqAccordionProps) {
  return (
    <SectionShell className="bg-white" id={id}>
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <Eyebrow className="mb-4">FAQ</Eyebrow>
          <h2 className="font-serif text-title font-semibold text-ve-text-primary">{heading}</h2>
        </div>
        <FaqList faqs={faqs} />
      </div>
    </SectionShell>
  )
}
