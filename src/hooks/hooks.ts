
import { Before,After,setDefaultTimeout,Status} from '@cucumber/cucumber';

import {chromium,Browser,Page} from '@playwright/test';

setDefaultTimeout(60000);

export let browser: Browser;
export let page: Page;

Before(async function() 
 {

      browser = await chromium.launch
        ({
            headless: false
        });

      const context = await browser.newContext();

       page = await context.newPage();
 });

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED && page) {
    const screenshot = await page.screenshot({
      fullPage: true
    });

    await this.attach(screenshot, 'image/png');
  }

  // Keep your existing browser cleanup here,
  // after capturing the screenshot.
});
