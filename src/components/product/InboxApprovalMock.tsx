import { Sparkles, Check, Pencil } from 'lucide-react'

/**
 * Approval-first inbox mockup: an AI-drafted reply that waits for the user's
 * sign-off. Embodies the brand promise ("nothing sends without your approval").
 * Coded in ve-* tokens, honestly captioned. Fictional data.
 */
export function InboxApprovalMock() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-ve-border bg-white shadow-float">
      <div className="border-b border-ve-border px-5 py-3.5">
        <p className="text-[12.5px] text-ve-text-muted">Re: Inspection scheduling, 312 Maple Ave</p>
        <p className="mt-0.5 text-[14px] font-semibold text-ve-text-primary">Buyer&rsquo;s agent · 9:42 AM</p>
      </div>

      <div className="space-y-3 p-5">
        <div className="rounded-xl bg-ve-surface-2 p-3.5 text-[13px] leading-relaxed text-ve-text-secondary">
          &ldquo;Can we confirm the inspection for Thursday at 10am? Buyer would like to attend.&rdquo;
        </div>

        <div className="rounded-xl border border-ve-orange-border bg-ve-orange-soft p-3.5">
          <div className="mb-1.5 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-ve-orange" aria-hidden="true" />
            <span className="font-mono text-[10.5px] uppercase tracking-[1.2px] text-ve-orange-xdark">Drafted reply · awaiting your approval</span>
          </div>
          <p className="text-[13px] leading-relaxed text-ve-text-secondary">
            &ldquo;Thursday at 10am works, I&rsquo;ve confirmed with the inspector and added it to the calendar. The buyer is welcome to attend. I&rsquo;ll send the report as soon as it&rsquo;s in.&rdquo;
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-ve-border px-5 py-3">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-ve-orange-dark px-3 py-1.5 text-[12.5px] font-semibold text-white">
          <Check className="h-3.5 w-3.5" aria-hidden="true" /> Approve &amp; send
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-ve-border px-3 py-1.5 text-[12.5px] font-medium text-ve-text-secondary">
          <Pencil className="h-3.5 w-3.5" aria-hidden="true" /> Edit
        </span>
      </div>

      <figcaption className="border-t border-ve-border bg-ve-surface-2 px-5 py-2.5 text-[11.5px] italic text-ve-text-muted">
        Prototype screen
      </figcaption>
    </figure>
  )
}
