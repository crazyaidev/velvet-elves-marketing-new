import { Link } from 'react-router-dom'
import { FOOTER_COLUMNS } from '@/lib/nav'
import { SIGN_IN_URL } from '@/lib/config'
import { EmailCaptureStrip } from './EmailCaptureStrip'

export function Footer() {
  return (
    <footer>
      <EmailCaptureStrip />

      <div className="bg-ve-sidebar text-white">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-10 px-6 pb-12 pt-16 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" aria-label="Velvet Elves, home" className="inline-flex rounded-2xl bg-white p-2.5 shadow-sm">
              <img src="/brand/velvet-elves-logo.png" alt="Velvet Elves" className="h-12 w-auto" />
            </Link>
            <p className="mt-4 max-w-[16rem] text-[14px] leading-relaxed text-white/60">
              A calmer path to closing, for agents, teams, and the clients they serve.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-[12px] uppercase tracking-[1.5px] text-white/45">{col.heading}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-[14px] text-white/75 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row">
            <p className="text-[13px] text-white/55">© {new Date().getFullYear()} Velvet Elves. All rights reserved.</p>
            <a href={SIGN_IN_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-white/75 hover:text-white">
              Sign in to the app →
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
