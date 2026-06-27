/**
 * Proves marketing_leads is anon INSERT-only before any form ships.
 * Run: npm run verify:rls   (needs VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY,
 * and SUPABASE_SERVICE_ROLE_KEY in .env.local).
 *
 * Per plan §1A/F10 it FIRST seeds a row with the service role, so the anon
 * SELECT denial proves RLS rather than an empty table.
 */
import { readFileSync } from 'node:fs'
import { createClient } from '@supabase/supabase-js'

// Minimal .env.local loader (no dotenv dependency).
try {
  for (const line of readFileSync(new URL('../.env.local', import.meta.url), 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
} catch {
  /* no .env.local — rely on the ambient environment */
}

const url = process.env.VITE_SUPABASE_URL
const anon = process.env.VITE_SUPABASE_ANON_KEY
const service = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !anon) {
  console.error('Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY.')
  process.exit(1)
}

const TABLE = 'marketing_leads'
const stamp = Date.now()
let pass = 0
let fail = 0
const ok = (m) => (console.log(`  ✓ ${m}`), pass++)
const ko = (m) => (console.log(`  ✗ ${m}`), fail++)

console.log('\nVerifying RLS on marketing_leads...\n')

// 0. Seed a row via the service role so SELECT-denial != empty table.
if (service) {
  const admin = createClient(url, service, { auth: { persistSession: false } })
  const { error } = await admin.from(TABLE).insert({ email: `seed-${stamp}@velvetelves-test.invalid`, source_page: '/rls-seed', interest: 'newsletter' })
  error ? ko(`service-role seed failed: ${error.message}`) : ok('seeded one row via service role')
} else {
  console.log('  (no SUPABASE_SERVICE_ROLE_KEY — SELECT check proves "no rows to anon", not non-empty)')
}

const db = createClient(url, anon, { auth: { persistSession: false } })
const testEmail = `anon-${stamp}@velvetelves-test.invalid`

// 1. INSERT must succeed.
{
  const { error } = await db.from(TABLE).insert({ email: testEmail, source_page: '/rls-test', interest: 'demo_waitlist' })
  error ? ko(`INSERT should succeed: ${error.message}`) : ok('INSERT allowed for anon')
}
// 2. SELECT must return nothing to anon.
{
  const { data, error } = await db.from(TABLE).select('id').limit(5)
  error || !data?.length ? ok('SELECT blocked (no rows visible to anon)') : ko(`SELECT leaked ${data.length} row(s)`)
}
// 3. UPDATE must fail / affect nothing.
{
  const { data, error } = await db.from(TABLE).update({ interest: 'tampered' }).eq('email', testEmail).select('id')
  error || !data?.length ? ok('UPDATE blocked for anon') : ko('UPDATE unexpectedly affected rows')
}
// 4. DELETE must fail / affect nothing.
{
  const { data, error } = await db.from(TABLE).delete().eq('email', testEmail).select('id')
  error || !data?.length ? ok('DELETE blocked for anon') : ko('DELETE unexpectedly removed rows')
}

console.log(`\n${pass} passed / ${fail} failed\n`)
process.exit(fail > 0 ? 1 : 0)
