import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import type { Faq } from '@/lib/seo'

/** Bare FAQ accordion list (no section chrome), reused by FaqAccordion and the
 *  grouped /faq page. */
export function FaqList({ faqs, idBase = 'faq' }: { faqs: Faq[]; idBase?: string }) {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-ve-border border-y border-ve-border">
      {faqs.map((faq, i) => (
        <Accordion.Item key={i} value={`${idBase}-${i}`}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left">
              <span className="text-[16px] font-semibold text-ve-text-primary">{faq.q}</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-ve-text-muted transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-fade-in">
            <p className="pb-5 pr-9 text-[15px] leading-relaxed text-ve-text-secondary">{faq.a}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
