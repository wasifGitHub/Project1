import { test, expect, Page } from '@playwright/test';
import SeriesLoginPage from '../pages/seriesLoginPage';
import SeriesHomePage from '../pages/seriesHomePage'
import SeriesCartPage from '../pages/seriesCartPage'
import logger from '../utils/LoggerUtil';

test.describe.configure({mode:'serial'})

let page;

// Define a beforeAll hook to set up the browser context
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    const loginPage = new SeriesLoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername('standard_user');
    await loginPage.fillPassword('secret_sauce');
});

test('Click login and open Homepage', async() => {
    const homePage = new SeriesHomePage(page);
    await homePage.clickLoginButton();
    await homePage.verifyLoginSuccess(homePage.verifySuccessLogin);
    await homePage.addToCart()
})

test('Go to Cart Page', async() => {
    const cartPage = new SeriesCartPage(page)
    await cartPage.clickCartIcon();
    await cartPage.verifyCartPageLoaded();
});

test.afterAll(async () => {
    await page.locator(`//button[contains(.,'Remove')]`).first().waitFor({state:'visible'})
    logger.info(`Test End`)
});