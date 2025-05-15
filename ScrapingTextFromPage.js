const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to a website
  await page.goto('https://example.com');
  
  // Extract text from a specific element (e.g., first <h1>)
  const heading = await page.textContent('h1');
  
  console.log(`Heading: ${heading}`);
  
  await browser.close();
})();
