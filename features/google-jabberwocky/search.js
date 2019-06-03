const { assert } = require('assert')
const { Given, When, Then } = require('cucumber')
const { join } = require('path')
const { screenshotPath } = require('../../webdriver-config/wdio.conf').config
const getScreenshotPath = (name) => join(screenshotPath, `${browser.desiredCapabilities.browserName}.${name}.png`)

Given(/^the Google search page loaded$/, async () => {
  await browser.url('https://www.google.com')
  await browser.saveScreenshot(getScreenshotPath('GIVEN'))
})

When(/^I search for '(.*)'$/, async (search_term) => {
  await browser.setValue('[name=q]', search_term + '\n')
  await browser.saveScreenshot(getScreenshotPath('WHEN'))
})

Then(/^I should see '(.*)' in the search results$/, async (result_text) => {
  // await browser.waitForEnabled('#navcnt')
  const result_links = await browser.elements('div.r')
  await browser.waitUntil(async () => {
      const title = await browser.getTitle()
      return title
    }, 3000);
  // result_links.waitForExist(5000)
  await browser.saveScreenshot(getScreenshotPath('THEN'))
  result_links.value.forEach( (link) => {
    const text = link.getText()
    console.log(text)
    if (text.search(result_text) != -1) {
      return true
    }
  })
  return false
})
