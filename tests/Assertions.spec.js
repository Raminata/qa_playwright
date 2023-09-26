const {test, expect} = require('@playwright/test')

test('AssentionsTest', async ({page}) => {
//open app url
await page.goto('https://demo.nopcommerce.com/register');

//1) expect(page).toHaveURL() --page has URL
await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

//2) expect(page).toHaveTitle() -Page has title
await expect(page).toHaveTitle('nopCommerce demo store. Register');

//3) expect(locator).toBeVisible() -Element is visible
const logoElement = await page.locator('.header-logo');
await expect(logoElement).toBeVisible(); 

//4) expect(page).toBeEnabled() -Control is enabled
const searchStoreBox = await page.locator('#small-searchterms');
await expect(searchStoreBox).toBeEnabled();

//5) expect(page).toBeChecked() -Radio/Checkbox are checked
//radio button
const femaleRadioButton = await page.locator('#gender-female');
await femaleRadioButton.click(); //select radio button
await expect(femaleRadioButton).toBeChecked();

//checkbox
const newsLetterCheckbox = await page.locator('#Newsletter');
await expect(newsLetterCheckbox).toBeChecked();

//6) expect(page).toHaveAttribute() -Elements has attribute
const registerButton = await page.locator('#register-button');
await expect(registerButton).toHaveAttribute('type', 'submit');

//7) expect(page).toHaveText() -Element matches text
await expect(await  page.locator('.page-title h1')).toHaveText('Register'); //full text

//8) expect(page).toContainText() -Element contains text
await expect(await  page.locator('.page-title h1')).toContainText('Reg'); //partial text

//9) expect(locator).toHaveValue() -Input has a value
const emailInput = await page.locator('#Email');
await emailInput.fill('test@demo.com');
await expect(emailInput).toHaveValue('test@demo.com');

//10) expect(locator).toHaveCount() -List of elements has given lenght
const options = await page.locator('select[name="DateOfBirthMonth"] option');
await expect(options).toHaveCount(13);

})
