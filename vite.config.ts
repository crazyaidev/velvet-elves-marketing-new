import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Static marketing site for Velvet Elves.
// Built with vite-react-ssg: every route is prerendered to complete static
// HTML (H1 + metadata + JSON-LD in source) and hydrated on the client — the
// SEO/AEO parity the marketing site needs, without leaving the Vite/React
// stack the base project already uses.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  ssr: {
    // framer-motion ships ESM that must be bundled for the SSG render pass.
    noExternal: ['framer-motion'],
  },
})
