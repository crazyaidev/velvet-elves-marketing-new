-- Marketing site lead capture — the ONLY table the marketing site touches.
-- Decoupled from the product DB. anon may INSERT only; never select/update/delete.
-- Apply to the marketing-dedicated Supabase project, then run `npm run verify:rls`.

create table if not exists public.marketing_leads (
  id uuid primary key default gen_random_uuid(),
  email text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  source_page text not null default '/',          -- route the signup came from
  interest text,                                   -- 'demo_waitlist' | 'newsletter' | 'early_access'
  user_agent text,
  created_at timestamptz not null default now()
);

alter table public.marketing_leads enable row level security;

-- anon may INSERT only. No select/update/delete policy exists for anon. Ever.
drop policy if exists "anon_insert_only" on public.marketing_leads;
create policy "anon_insert_only" on public.marketing_leads
  for insert to anon with check (true);
