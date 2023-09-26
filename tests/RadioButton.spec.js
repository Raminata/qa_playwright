const {test, expect} = require('@playwright/test')

test('handle radio button', async ({page}) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.locator("//input[@placeholder='Username']").fill("Admin");


await page.locator("//input[@placeholder='Password']").fill("admin123");

await page.locator("//button[normalize-space()='Login']").click();


await page.locator("//span[normalize-space()='My Info']").click();

//radio button
await page.locator("//label[normalize-space()='Male']").check();
//await page.check("//label[normalize-space()='Male']");
await expect(await page.locator("//label[normalize-space()='Male']")).toBeChecked();

//male
await expect(await page.locator("//label[normalize-space()='Male']").isChecked()).toBeTruthy();

//female
await expect(await page.locator("//label[normalize-space()='Female']").isChecked()).toBeFalsy();


await page.waitForTimeout(5000); //pausing code

})