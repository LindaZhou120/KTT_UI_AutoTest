const { remote } = require('webdriverio');

(async () => {
  const browser = await remote({
    capabilities: {
      browserName: 'chrome'
    }
  });

  await browser.url('https://www.baidu.com');
  console.log(await browser.getTitle()); // 打印页面标题

//   await browser.deleteSession();
})();