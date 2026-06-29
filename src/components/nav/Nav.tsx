import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu } from 'lucide-react'
import { NAV_GROUPS } from '@/lib/nav'
import { SIGN_IN_URL, REGISTER_URL } from '@/lib/config'
import { Button } from '@/components/ui/Button'
import { MobileSheet } from './MobileSheet'
import { cn } from '@/lib/utils'

/**
 * Full-width frosted header with grouped dropdown mega-menus. Every public page
 * is reachable here. Panels stay mounted (crawlable, links in static HTML) and
 * toggle via hover, click, and keyboard; Escape and outside-click close them.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [open, setOpen] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>()
  const headerRef = useRef<HTMLElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on route change.
  useEffect(() => setOpen(null), [pathname])

  // Escape + outside-click close.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [])

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(label)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 130)
  }

  return (
    <>
      <header
        ref={headerRef}
        role="banner"
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
          scrolled || open
            ? 'border-ve-border/70 bg-cream/90 shadow-[0_1px_0_rgba(20,30,45,0.04)] backdrop-blur-xl'
            : 'border-ve-border/40 bg-cream/80 backdrop-blur-xl',
        )}
      >
        <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-5 md:px-6">
          <Link to="/" aria-label="Velvet Elves home" className="flex shrink-0 items-center gap-2.5">
            <img src="/brand/velvet-elves-logo.png" alt="Velvet Elves" className="h-9 w-auto" />
            <span className="font-serif text-[19px] font-semibold tracking-[-0.01em] text-ve-text-primary">Velvet Elves</span>
          </Link>

          {/* Desktop grouped menus */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
            {NAV_GROUPS.map((group, gi) => {
              const isOpen = open === group.label
              const isActive = group.items.some((it) => pathname === it.href)
              const alignRight = gi >= NAV_GROUPS.length - 1
              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => openMenu(group.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setOpen((o) => (o === group.label ? null : group.label))}
                    className={cn(
                      'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors',
                      isOpen || isActive
                        ? 'bg-black/[0.05] text-ve-text-primary'
                        : 'text-ve-text-secondary hover:bg-black/[0.04] hover:text-ve-text-primary',
                    )}
                  >
                    {group.label}
                    <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', isOpen && 'rotate-180')} aria-hidden="true" />
                  </button>

                  <div
                    role="menu"
                    aria-label={group.label}
                    aria-hidden={!isOpen}
                    className={cn(
                      'absolute top-full z-50 mt-2 w-[304px] rounded-2xl border border-ve-border bg-white p-2 shadow-premium transition-all duration-200',
                      alignRight ? 'right-0' : 'left-0',
                      isOpen
                        ? 'visible translate-y-0 opacity-100'
                        : 'pointer-events-none invisible -translate-y-1 opacity-0',
                    )}
                  >
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        role="menuitem"
                        tabIndex={isOpen ? 0 : -1}
                        onClick={() => setOpen(null)}
                        className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-ve-surface-2"
                      >
                        {item.icon && (
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ve-orange-light text-ve-orange-dark">
                            <item.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                          </span>
                        )}
                        <span className="min-w-0">
                          <span className="block text-[14px] font-semibold text-ve-text-primary">{item.label}</span>
                          {item.description && (
                            <span className="mt-0.5 block text-[12.5px] leading-snug text-ve-text-muted">{item.description}</span>
                          )}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
            <Button href={SIGN_IN_URL} external variant="ghost" size="sm">Sign in</Button>
            <Button href={REGISTER_URL} external variant="primary" size="sm">Create an account</Button>
          </div>

          {/* Mobile */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <Button href={REGISTER_URL} external variant="primary" size="sm">Get started</Button>
            <button
              type="button"
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
