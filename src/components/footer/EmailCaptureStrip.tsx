import { EmailCapture } from '@/components/ui/EmailCapture'

/** Soft champagne band above the footer. Newsletter capture. */
export function EmailCaptureStrip() {
  return (
    <div className="border-t border-ve-orange-border/50 bg-ve-orange-light">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-7 px-6 py-14 md:flex-row md:items-center">
        <div className="max-w-md">
          <p className="font-serif text-[22px] font-semibold text-ve-text-primary">Stay in the loop.</p>
          <p className="mt-1 text-[15px] text-ve-text-secondary">
            Occasional product news and new features. No noise.
          </p>
        </div>
        <EmailCapture interest="newsletter" sourcePage="/" className="w-full md:w-auto md:min-w-[360px]" />
      </div>
    </div>
  )
}
