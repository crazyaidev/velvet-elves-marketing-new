import { useState } from 'react'
import { PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { DemoModal } from './DemoModal'

interface WatchDemoButtonProps {
  sourcePage: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'outline' | 'ghost' | 'ghost-light'
  label?: string
  withIcon?: boolean
  className?: string
}

/** In-page "Watch demo" CTA, opens the honest demo modal (the nav link instead
 *  routes to /demo, per plan §1A/F2). */
export function WatchDemoButton({
  sourcePage,
  size = 'lg',
  variant = 'primary',
  label = 'Watch demo',
  withIcon = true,
  className,
}: WatchDemoButtonProps) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant={variant} size={size} onClick={() => setOpen(true)} className={className}>
        {withIcon && <PlayCircle className="h-[18px] w-[18px]" aria-hidden="true" />}
        {label}
      </Button>
      <DemoModal open={open} onOpenChange={setOpen} sourcePage={sourcePage} />
    </>
  )
}
