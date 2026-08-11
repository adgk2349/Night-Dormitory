import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const root = process.cwd();
const outDir = path.join(root, 'public/demo');
fs.mkdirSync(outDir, { recursive: true });

const url = process.argv[2] ?? 'http://127.0.0.1:5173/#showcase';
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  recordVideo: {
    dir: outDir,
    size: { width: 1280, height: 720 },
  },
});

const page = await context.newPage();
const errors = [];
const failed = [];
page.on('pageerror', (err) => errors.push(err.message));
page.on('requestfailed', (req) => failed.push(`${req.url()} ${req.failure()?.errorText}`));

await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForSelector('#start button', { timeout: 30000 });
await page.click('#start button');
await page.waitForTimeout(61500);

const video = page.video();
await page.close();
await context.close();
await browser.close();

const sourcePath = await video.path();
const targetPath = path.join(outDir, 'night-dormitory-demo.webm');
if (fs.existsSync(targetPath)) fs.unlinkSync(targetPath);
fs.renameSync(sourcePath, targetPath);

const sizeMb = fs.statSync(targetPath).size / 1024 / 1024;
console.log(JSON.stringify({
  output: targetPath,
  sizeMb: Number(sizeMb.toFixed(2)),
  errors,
  failed: failed.filter((item) => !item.includes('net::ERR_ABORTED')).slice(0, 20),
}, null, 2));
