const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to a form page (using a sample site)
  await page.goto('https://www.w3schools.com/html/html_forms.asp');
  
  // Fill form fields
  await page.fill('input[name="firstname"]', 'John');
  await page.fill('input[name="lastname"]', 'Doe');
  
  // Submit form (click submit button if present)
  await page.click('input[type="submit"]');
  
  await browser.close();
})();
