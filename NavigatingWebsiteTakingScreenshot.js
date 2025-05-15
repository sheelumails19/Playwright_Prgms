const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to a website
  await page.goto('https://example.com');
  
  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png' });
  
  // Close browser
  await browser.close();
})();
