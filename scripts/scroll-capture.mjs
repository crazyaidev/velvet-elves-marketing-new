// Verifies the scrollytelling section by scrolling to it and capturing frames.
import CDP from 'chrome-remote-interface'
import { writeFileSync } from 'node:fs'

const BASE = process.env.URL || 'http://localhost:4196'
const OUT = process.env.OUT || '.'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const client = await CDP({ port: 9223 })
const { Page, Emulation, Runtime } = client
await Page.enable()
await Runtime.enable()
await Emulation.setDeviceMetricsOverride({ width: 1440, height: 900, deviceScaleFactor: 1, mobile: false })
await Page.navigate({ url: BASE })
await Page.loadEventFired()
await sleep(3000)

const { result } = await Runtime.evaluate({
  expression: `(()=>{const els=[...document.querySelectorAll('section')];const s=els.find(e=>/Three steps/.test(e.textContent||''));return s?Math.round(s.getBoundingClientRect().top+window.scrollY):0})()`,
  returnByValue: true,
})
const top = result.value
console.log('how-it-works top =', top)

const frames = [
  ['hiw-step1', top + 250],
  ['hiw-step2', top + 250 + 540],
  ['hiw-step3', top + 250 + 1080],
]
for (const [name, y] of frames) {
  await Runtime.evaluate({ expression: `window.scrollTo(0, ${y})` })
  await sleep(1400)
  const { data } = await Page.captureScreenshot({ format: 'png' })
  writeFileSync(`${OUT}/${name}.png`, Buffer.from(data, 'base64'))
  console.log(name, '@', y)
}
await client.close()
process.exit(0)
