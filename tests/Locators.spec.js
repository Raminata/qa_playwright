//const {test, expect} = require('@playwright/test')
import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  //click on login button  -property
  //await page.locator('id=login2').click();
  await page.click("id=login2");

  //provide username -CSS
  //await page.locator('#liginusername').fill("name")
  await page.fill("#loginusername", "pavanol");
  //await page.type('#loginusername', 'pavanol')

  //provide password - CSS
  await page.fill("input[id='loginpassword']", "test@123");

  //click on login button -XPath
  await page.click("//button[normalize-space()='Log in']");

  //verify logout link presence
  const logoutLink = await page.locator("//a[normalize-space()='Log out']");

  //pause
  //await page.waitForTimeout(5000);

  await expect(logoutLink).toBeVisible(); 
  //await expect(page.getByText('Log out')).toBeVisible(); 
  

  await page.close();
});
