import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './index.css'

// Self-hosted fonts (no render-blocking CDN). A modern editorial system:
// Fraunces (expressive display serif) for headlines, Inter for body/UI, and
// IBM Plex Mono for small kicker labels.
import '@fontsource-variable/fraunces'
import '@fontsource-variable/fraunces/wght-italic.css'
import '@fontsource-variable/inter'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'

export const createRoot = ViteReactSSG({ routes })
