import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { ROLE_LINKS } from '@/lib/nav'
import { SIGN_IN_URL } from '@/lib/config'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface MobileSheetProps {
  open: boolean
  onClose: () => void
}

export function MobileSheet({ open, onClose }: MobileSheetProps) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div
      className={cn(
        'fixed inset-0 z-[60] md:hidden',
        open ? 'pointer-events-auto' : 'pointer-events-none',
      )}
      aria-hidden={!open}
    >
      <div
        className={cn('absolute inset-0 bg-ve-sidebar/40 backdrop-blur-sm transition-opacity duration-300', open ? 'opacity-100' : 'opacity-0')}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          'absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-white shadow-premium transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-ve-border px-6 py-4">
          <img src="/brand/velvet-elves-logo.png" alt="Velvet Elves" className="h-10 w-auto" />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ve-text-secondary hover:bg-ve-surface-2"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-4 py-5" aria-label="Mobile">
          {ROLE_LINKS.map((r) => (
            <NavLink
              key={r.href}
              to={r.href}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-3 text-[16px] font-medium',
                  isActive ? 'bg-ve-orange-light text-ve-orange-dark' : 'text-ve-text-primary hover:bg-ve-surface-2',
                )
              }
            >
              {r.label}
            </NavLink>
          ))}
          <Link onClick={onClose} to="/product" className="rounded-lg px-3 py-3 text-[16px] font-medium text-ve-text-primary hover:bg-ve-surface-2">
            Product
          </Link>
          <Link onClick={onClose} to="/how-it-works" className="rounded-lg px-3 py-3 text-[16px] font-medium text-ve-text-primary hover:bg-ve-surface-2">
            How it works
          </Link>
          <Link onClick={onClose} to="/faq" className="rounded-lg px-3 py-3 text-[16px] font-medium text-ve-text-primary hover:bg-ve-surface-2">
            FAQ
          </Link>
        </nav>

        <div className="flex flex-col gap-3 border-t border-ve-border px-6 py-5">
          <Button href="/demo" variant="primary" size="md" className="w-full">
            Watch demo
          </Button>
          <Button href={SIGN_IN_URL} external variant="outline" size="md" className="w-full">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  )
}
