import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
test('test', async ({ page }) => {
  // Creates an object of LoginPage class:
  // constructor runs
  // locators are created
  // page is stored
  const loginPage = new LoginPage(page);
  // Step - 1 : open page
  await loginPage.navigateToLoginPage();
  // await loginPage.fillUsername('standard_user');
  // await loginPage.fillPassword('secret_sauce');
   await loginPage.fillUsername(process.env.userid);
  await loginPage.fillPassword(process.env.password);

  // Step - 2 : Login
  const homePage = await loginPage.clickLoginButton();
  await expect(homePage.verifySuccessLogin).toBeVisible();
  await homePage.verifyLoginSuccess(homePage.verifySuccessLogin);

  // Step - 3 : Add To Cart
  await homePage.addToCart();

  // Step - 4 : Go To Cart
  const cartPage = await homePage.clickCartIcon();
  await cartPage.verifyCartPageLoaded();

  const checkoutPage = await cartPage.clickCheckout();
  checkoutPage.verifyCheckoutPageLocaded();
  await checkoutPage.continueBtn.first().waitFor({state:'visible'})
  console.log(`Test End!`)
});

test.skip("Sample env test", async ({page}) => {
  console.log(process.env.NODE_ENV); // return undefined if NODE_ENV is not set
  console.log(process.env.userid);
  console.log(process.env.password);
})