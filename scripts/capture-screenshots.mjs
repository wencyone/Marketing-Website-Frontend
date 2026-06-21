import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

mkdirSync('docs/screenshots', { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
await page.waitForTimeout(1200)

const shots = [
  { name: 'hero', selector: null },
  { name: 'features', selector: '#features' },
  { name: 'marketplace', selector: '#marketplace' },
  { name: 'testimonials', selector: '#testimonials' },
]

for (const shot of shots) {
  if (shot.selector) {
    const el = page.locator(shot.selector)
    await el.scrollIntoViewIfNeeded()
    await page.waitForTimeout(600)
    await el.screenshot({ path: `docs/screenshots/${shot.name}.png` })
  } else {
    await page.screenshot({ path: `docs/screenshots/${shot.name}.png` })
  }
}

await browser.close()
console.log('Done: docs/screenshots/')
