const {test, expect} = require('@playwright/test')

test("Data Picker", async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');

//await page.fill('#datepicker', '09/29/2024');

//date picker
const year="2022";
const month="September";
const date="14";

await page.click('#datepicker'); //opens calender

while(true)
{

    const currentYear = await page.locator('.ui-datepicker-year').textContent();
    const currentMonth = await page.locator('.ui-datepicker-month').textContent();

    if(currentYear == year && currentMonth == month)
    {
        break;
    }

    //await page.locator('[title="Next"]').click(); //will click on the NEXT button
    await page.locator('[title="Prev"]').click(); //Previous

}

const dates=await page.$$("//a[@class='ui-state-default']");

    //date selection using loop
   /* 
   for(const dt of dates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click();
            break;
        }
    } 
    */

    //date selection - without loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`);


await page.waitForTimeout(5000);
    
});