const { test, expect } = require('@playwright/test');

test('LocateMultipleElements', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html')

   /* const links = await page.$$('a');

   for(const link of links) 
   {
    const linktext = await link.textContent();
    console.log(linktext);
   }
   */


   //Locate all the products displayed on home page
   await page.waitForSelector("//div[@id='tbodyid']//h4/a");

   const products = await page.$$("//div[@id='tbodyid']//h4/a")

   for(const product of products) {
    const prodName = await product.textContent();  //doesn't presence in console
    console.log(prodName)
   }
})