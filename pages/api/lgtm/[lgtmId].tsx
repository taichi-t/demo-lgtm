import type { NextApiRequest, NextApiResponse } from "next";
const puppeteer = require("puppeteer");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const lgtmId = req.query.lgtmId;
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`${process.env.CLIENT_BASE_URL}/lgtm/${lgtmId}`, {
    waitUntil: "load",
  });
  const selector = await page.$("#target");
  const buffer = await selector?.screenshot({ path: "page-ss.png" });
  await browser.close();
  res.setHeader("Content-Type", "image/png");
  res.setHeader(
    "Cache-Control",
    "public, immutable, no-transform, s-maxage=31536000, max-age=31536000"
  );
  res.end(buffer, "binary");
};

export default handler;
