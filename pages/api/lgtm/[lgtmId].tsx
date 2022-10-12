import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer-core";
import chrome from "chrome-aws-lambda";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const lgtmId = req.query.lgtmId;
  let browser: puppeteer.Browser | undefined = undefined;
  try {
    browser = await puppeteer.launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    });
  } catch (err) {
    throw new Error(`${err}`);
  }

  const page = await browser?.newPage();
  await page?.setViewport({
    width: 320,
    height: 1000,
  });
  await page?.goto(`${process.env.CLIENT_BASE_URL}/lgtm/${lgtmId}`, {
    waitUntil: "load",
  });
  const selector = await page?.$("#target");
  const buffer = await selector?.screenshot({
    path: "page-ss.png",
  });
  await browser?.close();
  res.setHeader("Content-Type", "image/png");
  res.end(buffer, "binary");
};

export default handler;
