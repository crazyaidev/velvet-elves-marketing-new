import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { NAV_GROUPS } from '@/lib/nav'
import { SIGN_IN_URL, REGISTER_URL } from '@/lib/config'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface MobileSheetProps {
  open: boolean
  onClose: () => void
}

export function MobileSheet({ open, onClose }: MobileSheetProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const restoreRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    restoreRef.current = document.activeElement as HTMLElement
    document.body.style.overflow = 'hidden'

    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      )
    focusables()[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const f = focusables()
      if (f.length === 0) return
      const first = f[0]
      const last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      restoreRef.current?.focus?.()
    }
  }, [open, onClose])

  return (
    <div
      className={cn('fixed inset-0 z-[60] lg:hidden', open ? 'pointer-events-auto' : 'pointer-events-none')}
      aria-hidden={!open}
    >
      <div
        className={cn('absolute inset-0 bg-ve-sidebar/40 backdrop-blur-sm transition-opacity duration-300', open ? 'opacity-100' : 'opacity-0')}
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          'absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-premium transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-ve-border px-6 py-4">
          <img src="/brand/velvet-elves-logo.png" alt="Velvet Elves" className="h-9 w-auto" />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ve-text-secondary hover:bg-ve-surface-2"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-5 py-6" aria-label="Mobile">
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="mb-1.5 px-3 font-mono text-[11px] uppercase tracking-[1.5px] text-ve-text-muted">{group.label}</p>
              <div className="flex flex-col">
                {group.items.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors',
                        isActive ? 'bg-ve-orange-light text-ve-orange-dark' : 'text-ve-text-primary hover:bg-ve-surface-2',
                      )
                    }
                  >
                    {item.icon && <item.icon className="h-[18px] w-[18px] text-ve-text-muted" aria-hidden="true" />}
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="flex flex-col gap-3 border-t border-ve-border px-6 py-5">
          <Button href={REGISTER_URL} external variant="primary" size="md" className="w-full">
            Create an account
          </Button>
          <Button href={SIGN_IN_URL} external variant="outline" size="md" className="w-full">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  )
}
