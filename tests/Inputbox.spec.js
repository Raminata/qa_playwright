const {test, expect} = require('@playwright/test')

test('handle inputbox', async ({page}) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//Inputbox -username
await expect(await page.locator("//input[@placeholder='Username']")).toBeVisible();
await expect(await page.locator("//input[@placeholder='Username']")).toBeEmpty();
await expect(await page.locator("//input[@placeholder='Username']")).toBeEditable();
await expect(await page.locator("//input[@placeholder='Username']")).toBeEnabled();

await page.locator("//input[@placeholder='Username']").fill("Admin");
//await page.fill("//input[@placeholder='Username']", 'Admin');

await page.locator("//input[@placeholder='Password']").fill("admin123");

await page.locator("//button[normalize-space()='Login']").click();

await page.waitForTimeout(5000); //pausing code



})