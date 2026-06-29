import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './index.css'

// Self-hosted fonts (no render-blocking CDN). A refined editorial system:
// Geist (a precise, modern grotesque) for body/UI, Lora (an elegant
// high-readability serif with clean letterforms) for headlines, and
// IBM Plex Mono for small kicker labels.
import '@fontsource-variable/geist'
// Only the Lora faces actually used: 400 (AnswerBlock body serif), 600 (all
// headings, which are font-semibold), and 600-italic (the hero rotating word).
import '@fontsource/lora/latin-400.css'
import '@fontsource/lora/latin-600.css'
import '@fontsource/lora/latin-600-italic.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'

export const createRoot = ViteReactSSG({ routes })
