import type { SupabaseClient } from '@supabase/supabase-js'

/**
 * Marketing-only Supabase client (decoupled from the product DB).
 * The anon key is safe client-side ONLY because RLS on `marketing_leads` is
 * INSERT-only. Returns null when env is unset so the build and the
 * EmailCapture component degrade gracefully instead of throwing.
 *
 * supabase-js is imported dynamically so it is code-split out of the initial
 * bundle and only fetched when someone actually submits a form.
 */
let clientPromise: Promise<SupabaseClient | null> | undefined

export function getSupabase(): Promise<SupabaseClient | null> {
  if (clientPromise) return clientPromise

  const url = import.meta.env.VITE_SUPABASE_URL
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY

  clientPromise = (async () => {
    if (!url || !key) return null
    const { createClient } = await import('@supabase/supabase-js')
    return createClient(url, key)
  })()

  return clientPromise
}

export interface MarketingLead {
  email: string
  source_page: string
  interest: 'demo_waitlist' | 'newsletter' | 'early_access'
  user_agent?: string | null
}
