import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { EmailCapture } from '@/components/ui/EmailCapture'

interface DemoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  sourcePage: string
}

/**
 * Honest "demo in production" modal. Built on Radix Dialog (focus trap, escape,
 * scroll lock, aria) so it is immune to the hand-rolled backdrop-close bug
 * (plan §1A/F7). Never embeds a fake video, it captures interest instead.
 */
export function DemoModal({ open, onOpenChange, sourcePage }: DemoModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-ve-sidebar/55 backdrop-blur-sm data-[state=open]:animate-fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[110] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-premium focus:outline-none data-[state=open]:animate-scale-in">
          <Dialog.Close
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-ve-text-muted transition-colors hover:bg-ve-surface-2 hover:text-ve-text-primary"
          >
            <X className="h-[18px] w-[18px]" aria-hidden="true" />
          </Dialog.Close>

          <Eyebrow className="mb-3">Demo in production</Eyebrow>
          <Dialog.Title className="font-serif text-[24px] font-semibold leading-tight text-ve-text-primary">
            We&rsquo;re putting the finishing touches on the demo.
          </Dialog.Title>
          <Dialog.Description className="mt-2.5 text-[15px] leading-relaxed text-ve-text-secondary">
            Leave your email and we&rsquo;ll send it your way the moment it&rsquo;s ready.
          </Dialog.Description>

          <div className="mt-5">
            <EmailCapture interest="demo_waitlist" sourcePage={sourcePage} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
