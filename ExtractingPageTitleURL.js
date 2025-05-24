const { chromium } = require('playwright');

12345
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to a website
  await page.goto('https://example.com');
  
  // Get page title and URL
  const title = await page.title();
  const url = page.url();
  
  console.log(`Title: ${title}`);
  console.log(`URL: ${url}`);
  
  await browser.close();
})();
