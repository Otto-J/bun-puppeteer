import puppeteer from "puppeteer";
import { sleep } from "bun";

const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });
await page.goto("https://baidu.com");
await sleep(3000);
await page.screenshot({ path: "example.png" });

await browser.close();

console.log("Hello via Bun!");
