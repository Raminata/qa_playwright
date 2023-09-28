const {test, expect} = require('@playwright/test')

test('Frames', async ({page}) => {

await page.goto('https://ui.vision/demo/webtest/frames/');

//total frames
const allFrames = await page.frames();
console.log("Number of frames:", allFrames.length);

//Approach1: using name or URL
//const var = await page.frame('name'); //if name of frame is present
const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
await frame1.fill("[name='mytext1']", 'Hello');


//Approach 2: using frame locator
const inputbox = await page.frameLocator("frame[src='frame_2.html']").locator("[name='mytext2']");
await inputbox.fill('Hi');

await page.waitForTimeout(5000);


});