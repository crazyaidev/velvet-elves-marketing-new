# Velvet Elves — Marketing Site (new)

The public marketing website for Velvet Elves, built to be **compatible with the base project**: same stack family as `velvet-elves-frontend` (Vite + React + TypeScript + Tailwind), the same `ve-*` design system and fonts (IBM Plex Sans / Lora / IBM Plex Mono), with **static prerendering** (`vite-react-ssg`) for SEO/AEO. It is **decoupled** from the app — it hands off to the real sign-up and never touches the product database.

Built per `velvet-elves-data/MARKETING_SITE_REBUILD_BASE_PROJECT_COMPATIBLE_SUPERIOR_PLAN.md`.

## Stack
- Vite 5 + React 18 + TypeScript, `vite-react-ssg` (one prerendered `.html` per route, hydrated).
- Tailwind 3.4 with the base app's `ve-*` color tokens (champagne/navy) + a marketing display scale and warm editorial neutrals (`cream`/`sand`/`ink`).
- **Type system (landing-specific, by design direction):** **Fraunces Variable** (expressive editorial serif) for headlines, **Inter Variable** for body/UI, IBM Plex Mono for kicker labels — self-hosted via `@fontsource`. This intentionally diverges from the app's IBM Plex/Lora for a more premium marketing feel; the app's own type still shows through the real product screenshots.
- framer-motion (restrained), lucide-react, Radix Dialog/Accordion.
- `@supabase/supabase-js` for the single insert-only lead capture.

## Brand & real product screenshots
- **Logo:** the real brand logo (`public/brand/velvet-elves-logo.png`, copied from `velvet-elves-frontend/public/logo-removebg-preview.png`) is used in the nav, mobile sheet, and footer.
- **Screenshots are real built UI**, not mockups: `public/screens/{screen-transactions,screen-documents,screen-wizard}.png` were captured from the actual running `velvet-elves-frontend` (Active Transactions, All Documents, and the AI New-Transaction intake), presented in a browser frame via `ProductShot`.
- They were captured by temporarily running the frontend with its existing MSW test handlers (a throwaway harness in `main.tsx` + `src/tests/mocks/browser.ts`) and driving Chrome over the DevTools Protocol (`scripts/capture.mjs`). **That harness has been reverted — the base frontend is unmodified.** To refresh screenshots, re-add the MSW browser bootstrap, run `VITE_USE_MSW=1 vite`, then `node scripts/capture.mjs`.

## Commands
```bash
npm install
npm run dev        # local dev server
npm run build      # prebuild generates sitemap.xml + robots.txt, then static export to dist/
npm run preview    # serve dist/ locally (use clean URLs, e.g. /product not /product.html)
npm run verify:rls # prove marketing_leads is anon INSERT-only (needs .env.local)
```

## Environment (`.env.local`, gitignored)
```
VITE_APP_URL=https://app.velvetelves.com         # staging: app.stage.velvetelves.com
VITE_SUPABASE_URL=...                              # marketing-only project
VITE_SUPABASE_ANON_KEY=...                         # safe client-side ONLY because RLS is insert-only
SUPABASE_SERVICE_ROLE_KEY=...                      # verify-rls seed only; never client-side
```
The site builds and runs without Supabase env — `EmailCapture` degrades to a clear error rather than crashing.

## Pages (13)
`/` · `/product` · `/how-it-works` · `/demo` · `/create-account` (noindex) · `/agents` · `/client-portal` · `/fsbo` · `/faq` · `/guides/contract-to-close` · `/about` · `/contact` · `/legal`.

## Key correctness rules baked in
- **Honesty:** only Inbox + Compliance are presented as live; Voice + SMS are labeled "Coming soon" (the backend ships them as `NotImplementedError` stubs). No page claims SMS/voice, and `featureList`/JSON-LD exclude them.
- **Audience-aware CTAs:** Agents/Teams/TC → "Create an account" → `${APP_URL}/register`. FSBO/Attorney/Client → "Watch demo + Join early access" (not yet self-sign-up), never a dead-end register screen.
- **Watch demo:** in-page buttons open the honest "in production" modal; the nav routes to `/demo`.
- **CTA contrast:** primary CTAs use `ve-orange-dark` (#C05A0A) + white (AA at all sizes) — never small white-on-champagne.
- **SSR-safe reveals:** content is visible by default; the scroll entrance is a Web-Animations enhancement, so the static HTML and no-JS users see everything.

## Deployment (decoupled)
Static `dist/` → its **own** S3 bucket + CloudFront distribution, separate from the app. Domains: `velvetelves.com` (prod) / `stage.velvetelves.com` (staging); app stays `app.velvetelves.com`. A marketing deploy can never affect the app.

## Before launch (follow-ups)
1. Apply `supabase/migrations/0001_create_marketing_leads.sql` to the marketing Supabase project; fill `.env.local`; run `npm run verify:rls`.
2. Replace `public/og-default.svg` with a 1200×630 **PNG** (full Twitter/Slack/LinkedIn raster support).
3. Confirm with Jake: About facts, Legal (attorney review), the real contact email (currently `hello@velvetelves.com` placeholder), and whether the activity-video hero is wanted later.
4. Optional app-side change to enable role-prefill (`/register?role=…`) and bring FSBO/Attorney self-sign-up forward.
