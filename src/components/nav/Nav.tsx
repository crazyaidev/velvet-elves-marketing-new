import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { ROLE_LINKS } from '@/lib/nav'
import { SIGN_IN_URL } from '@/lib/config'
import { Button } from '@/components/ui/Button'
import { MobileSheet } from './MobileSheet'
import { cn } from '@/lib/utils'

/** Floating frosted pill nav: detached at top, locks to a full-width bar on
 *  scroll. Kept light in all states so the real logo (navy wordmark) reads. */
export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'pointer-events-none fixed inset-x-0 top-0 z-50 transition-[padding] duration-300',
          scrolled ? 'px-0 pt-0' : 'px-4 pt-4',
        )}
        role="banner"
      >
        <div
          className={cn(
            'pointer-events-auto mx-auto flex items-center justify-between transition-all duration-300',
            scrolled
              ? 'max-w-none border-b border-ve-border/70 bg-cream/85 px-5 py-2.5 backdrop-blur-xl md:px-8'
              : 'max-w-content rounded-2xl border border-black/5 bg-white/75 px-4 py-2 shadow-[0_8px_30px_-12px_rgba(20,30,45,0.25)] backdrop-blur-xl',
          )}
        >
          <Link to="/" aria-label="Velvet Elves home" className="flex items-center gap-2.5">
            <img src="/brand/velvet-elves-logo.png" alt="Velvet Elves" className="h-10 w-auto" />
            <span className="font-serif text-[20px] font-semibold tracking-[-0.01em] text-ve-text-primary">Velvet Elves</span>
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main">
            {ROLE_LINKS.map((r) => (
              <NavLink
                key={r.href}
                to={r.href}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors',
                    isActive
                      ? 'bg-ve-orange-light text-ve-orange-dark'
                      : 'text-ve-text-secondary hover:bg-black/[0.04] hover:text-ve-text-primary',
                  )
                }
              >
                {r.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 md:flex">
            <Button href={SIGN_IN_URL} external variant="ghost" size="sm">Sign in</Button>
            <Button href="/demo" variant="primary" size="sm">Watch demo</Button>
          </div>

          <div className="flex items-center gap-2.5 md:hidden">
            <Button href="/demo" variant="primary" size="sm">Watch demo</Button>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ve-text-primary transition-colors hover:bg-black/[0.04]"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileSheet open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
