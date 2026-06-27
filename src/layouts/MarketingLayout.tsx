import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Nav } from '@/components/nav/Nav'
import { Footer } from '@/components/footer/Footer'

/** Sitewide shell: floating nav + page outlet + footer. */
export function MarketingLayout() {
  const { pathname, hash } = useLocation()

  // Land at the top on navigation, unless the URL targets an anchor.
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
