const Parse_CSV = require('./Parse_CSV');
// console.log('phone');


const { remote } = require('webdriverio');

(async () => {
  const browser = await remote({
    capabilities: {
      browserName: 'chrome'
    }
  });

  await browser.url('https://release.via.market/staff/login?redirectPath=%2F');
  console.log(await browser.getTitle()); // 打印页面标题
//   const element = await browser.$('//*[@id=":r0:"]')
//   await element.setValue('23456789')
  await browser.$('//*[@id=":r0:"]').setValue(phone)
  await browser.$('//*[@id=":r1:"]').setValue(Passcode)
  await browser.$('//*[@id=":r2:"]').click()
  const elementPreview = await browser.$('//*[text()="Preview"]') 
  await elementPreview.waitUntil(async () => await elementPreview.isDisplayed(), { timeout: 5000 })
  await browser.$('//*[text()="Preview"]').click()
//   const element = await browser.$x('//*[@id=":r0:"]')
//   await element.setValue('23456789')
  // await browser.deleteSession();
})();