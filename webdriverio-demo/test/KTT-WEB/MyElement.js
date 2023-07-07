// 引入WebdriverIO库
const { remote } = require('webdriverio');

// 定义一个封装元素的函数
async function myElement(selector) {
    const element = await browser.$(selector)

    return {
        clickElement: async function() {
            await element.click()
        },

        setText: async function(value) {
            await element.setValue(value)
        },

        getText: async function() {
            return await element.getText()
        },

        waitForElement: async function(timeout = 5000) {
            await element.waitUntil(async () => await element.isDisplayed(), { timeout: timeout })
        },

        isElementDisplayed: async function() {
            return await element.isDisplayed()
        },

        getElement: async function() {
            return element
        }
    }
}

// 启动WebdriverIO服务并连接到服务
(async () => {
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome'
        }
    })

    // 打开网页并使用封装的元素执行操作
    await browser.url('https://www.example.com')
    const myElementObj = await myElement('#my-element') // 创建封装元素的对象
    await myElementObj.waitForElement() // 等待元素出现
    await myElementObj.clickElement()
    await myElementObj.setText('some text')

    // 关闭WebdriverIO服务
    await browser.deleteSession()
})().catch((e) => console.error(e))
