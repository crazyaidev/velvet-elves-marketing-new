/**
 * The real Velvet Elves app. Every "Create an account" / "Sign in" routes
 * through this constant, never hardcode the URL inline.
 * Override per environment with VITE_APP_URL (staging → app.stage.velvetelves.com).
 */
export const APP_URL =
  import.meta.env.VITE_APP_URL?.replace(/\/$/, '') || 'https://app.velvetelves.com'

/** The app sign-up screen. v1 links here directly (no ?role=, RegisterPage reads none yet). */
export const REGISTER_URL = `${APP_URL}/register`

/** Sign-in lands on the app root. */
export const SIGN_IN_URL = APP_URL
