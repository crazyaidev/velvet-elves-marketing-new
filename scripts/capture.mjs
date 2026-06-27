// Captures real built-UI screenshots from the running velvet-elves-frontend
// (with the MSW screenshot harness) via the Chrome DevTools Protocol.
// Usage: node scripts/capture.mjs  (Chrome must be running with --remote-debugging-port=9222)
import CDP from 'chrome-remote-interface'
import { writeFileSync, mkdirSync } from 'node:fs'

const BASE = process.env.FE_BASE || 'http://localhost:5179'
const W = 1440, H = 880, SCALE = Number(process.env.DPR || 2), WAIT = 8500

const SHOTS = (process.env.SHOTS || 'tasks:/tasks,aiemail:/ai-email-review,aisuggest:/ai-suggestions,calendar:/calendar')
  .split(',')
  .map((s) => { const [n, p] = s.split(':'); return [`screen-${n}`, p] })

mkdirSync('public/screens', { recursive: true })
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const client = await CDP({ port: 9222 })
const { Page, Emulation } = client
await Page.enable()
await Emulation.setDeviceMetricsOverride({ width: W, height: H, deviceScaleFactor: SCALE, mobile: false })

for (const [name, path] of SHOTS) {
  try {
    await Page.navigate({ url: BASE + path })
    await Page.loadEventFired()
    await sleep(WAIT)
    const { data } = await Page.captureScreenshot({ format: 'png', fromSurface: true, captureBeyondViewport: false })
    writeFileSync(`public/screens/${name}.png`, Buffer.from(data, 'base64'))
    console.log(`  ${name} <- ${path}  (${Math.round(Buffer.from(data, 'base64').length / 1024)}KB)`)
  } catch (e) {
    console.log(`  ${name} FAILED: ${e.message}`)
  }
}
await client.close()
console.log('done')
process.exit(0)
