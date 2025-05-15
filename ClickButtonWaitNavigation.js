const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to a website
  await page.goto('https://example.com');
  
  // Click a link (e.g., "More information..." link on example.com)
  await Promise.all([
    page.waitForNavigation(), // Wait for navigation to complete
    page.click('a[href="https://www.iana.org/domains/example"]')
  ]);
  
  // Log new URL
  console.log(`Navigated to: ${page.url()}`);
  
  await browser.close();
})();
