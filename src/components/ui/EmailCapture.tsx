import { useRef, useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { getSupabase } from '@/lib/supabase'
import { CONTACT_EMAIL } from '@/lib/config'
import { cn } from '@/lib/utils'

type Interest = 'demo_waitlist' | 'newsletter' | 'early_access'
type State = 'idle' | 'submitting' | 'success' | 'error'

interface EmailCaptureProps {
  interest: Interest
  sourcePage: string
  className?: string
  /** Dark backgrounds (navy hero/footer) use the inverted field styling. */
  tone?: 'light' | 'dark'
}

/** Submit label adapts to intent (plan §1A/F9). */
const SUBMIT_LABEL: Record<Interest, string> = {
  demo_waitlist: 'Notify me',
  early_access: 'Request invite',
  newsletter: 'Subscribe',
}

/**
 * The ONLY data write on the site: an insert into marketing_leads. Honeypot +
 * disable-on-submit; honest success/failure; degrades to a clear message if the
 * marketing Supabase env is not configured.
 */
export function EmailCapture({ interest, sourcePage, className, tone = 'light' }: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<State>('idle')
  const honeypot = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (honeypot.current?.value) {
      setState('success') // silently absorb bots
      return
    }
    setState('submitting')
    const supabase = await getSupabase()
    if (!supabase) {
      setState('error')
      return
    }
    const { error } = await supabase.from('marketing_leads').insert({
      email,
      source_page: sourcePage,
      interest,
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
    })
    if (error) {
      setState('error')
    } else {
      setState('success')
      setEmail('')
    }
  }

  if (state === 'success') {
    return (
      <div className={cn('flex items-center gap-2.5', className)}>
        <CheckCircle2 className="h-5 w-5 shrink-0 text-ve-green" aria-hidden="true" />
        <span className={cn('text-[15px] font-medium', tone === 'dark' ? 'text-white' : 'text-ve-text-primary')}>
          You&rsquo;re on the list.
        </span>
      </div>
    )
  }

  const submitting = state === 'submitting'

  return (
    <form onSubmit={handleSubmit} className={cn('flex flex-col gap-2', className)} noValidate>
      {/* Honeypot, hidden from people and screen readers. */}
      <input
        ref={honeypot}
        type="text"
        name="company"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
      />
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          required
          disabled={submitting}
          aria-label="Email address"
          className={cn(
            'h-11 min-w-0 flex-1 rounded-lg border px-4 text-[15px] outline-none transition-colors',
            'focus:border-ve-orange focus:ring-2 focus:ring-ve-orange/30',
            'disabled:opacity-60',
            tone === 'dark'
              ? 'border-white/25 bg-white/10 text-white placeholder:text-white/60'
              : 'border-ve-border bg-white text-ve-text-primary placeholder:text-ve-text-muted',
          )}
        />
        <button
          type="submit"
          disabled={submitting}
          className="h-11 shrink-0 rounded-lg bg-ve-orange-dark px-5 text-[15px] font-semibold text-white transition-colors hover:bg-ve-orange-xdark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ve-orange focus-visible:ring-offset-2 disabled:opacity-60"
        >
          {submitting ? 'Sending…' : SUBMIT_LABEL[interest]}
        </button>
      </div>
      {state === 'error' && (
        <p role="alert" className={cn('text-[13px]', tone === 'dark' ? 'text-white/80' : 'text-ve-text-secondary')}>
          That didn&rsquo;t go through. Email us at{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={cn('font-semibold underline underline-offset-2', tone === 'dark' ? 'text-white' : 'text-ve-orange-dark')}
          >
            {CONTACT_EMAIL}
          </a>{' '}
          and we&rsquo;ll take it from there.
        </p>
      )}
    </form>
  )
}
