import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * Marketing-only Supabase client (decoupled from the product DB).
 * The anon key is safe client-side ONLY because RLS on `marketing_leads` is
 * INSERT-only. Returns null when env is unset so the build and the
 * EmailCapture component degrade gracefully instead of throwing.
 */
let client: SupabaseClient | null | undefined

export function getSupabase(): SupabaseClient | null {
  if (client !== undefined) return client

  const url = import.meta.env.VITE_SUPABASE_URL
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY

  client = url && key ? createClient(url, key) : null
  return client
}

export interface MarketingLead {
  email: string
  source_page: string
  interest: 'demo_waitlist' | 'newsletter' | 'early_access'
  user_agent?: string | null
}
