import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import { decrypt, encrypt } from '../utils/CryptojsUtil';
import { encryptEnvFile, decryptEnvFile } from '../utils/EncryptEnvFile';
import logger from '../utils/LoggerUtil';
import { demoOutput } from '../utils/fakersample';
import { Faker } from '@faker-js/faker';
import { faker } from '../utils/fakersample';
import { exportToCsv, exportToJson, generateTestData } from '../utils/FakerDataUtil';
import testData from "../testdata/testData_en.json"

const authFile = "src/config/auth.json";

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
  // export $SALT=helloSalt
  await loginPage.fillUsername(decrypt(process.env.userid));
  await loginPage.fillPassword(decrypt(process.env.password));

  // Step - 2 : Login
  const homePage = await loginPage.clickLoginButton();
  await expect(homePage.verifySuccessLogin).toBeVisible({ timeout: 10000 });
  await homePage.verifyLoginSuccess(homePage.verifySuccessLogin);
  logger.info(`Login Successful!`)
  await page.context().storageState({path: authFile});
  logger.info(`Auth store is saved.`);

  // Step - 3 : Add To Cart
  await homePage.addToCart();

  // Step - 4 : Go To Cart
  const cartPage = await homePage.clickCartIcon();
  await cartPage.verifyCartPageLoaded();

  const checkoutPage = await cartPage.clickCheckout();
  checkoutPage.verifyCheckoutPageLocaded();
  await checkoutPage.continueBtn.first().waitFor({state:'visible'})
  logger.info(`Test End!`)
});

test.skip("Sample env test", async ({page}) => {
  console.log(process.env.NODE_ENV); // return undefined if NODE_ENV is not set
  console.log(process.env.userid);
  console.log(process.env.password);
})

test.skip("Sample cryptoJS env test", async ({page}) => {
  const plaintext = 'Hello, Mars!';
  // export $SALT=helloSalt
  const encryptedText = encrypt(plaintext);
  console.log(`SALT: ${process.env.SALT}`);
  console.log(`Encrypted: ${encryptedText}`); 
  const decryptedText = decrypt(encryptedText);
  console.log(`Decrypted: ${decryptedText}`);
  encryptEnvFile();
  // decryptEnvFile();
})

test.skip('Demo Faker', async({ page }) =>{
  console.log(demoOutput)
})

test.skip('Faker', async({ page }) => {
  
  // Generate test data
  const testData = generateTestData(20);

  // Export data to JSON file
  exportToJson(testData,'testData_en.json');

  // Export data to csv file
  exportToCsv(testData,'testData_en.csv');
})

// npx playwright codegen --save-storage=auth.json https://www.saucedemo.com/
// test.use({ storageState: 'auth.json' });
// test.use({ storageState: 'src/config/auth.json' });
test.skip('Login withh auth file', async ({ page }) => {
  // const context = await browser.newContext({ storageState: authFile});
  // const page = await context.newPage();
  await page.goto(`https://www.saucedemo.com/inventory.html`)
  await page.locator(`//button[@id='add-to-cart-sauce-labs-backpack']`).first().waitFor({state:'visible',timeout:5000})
  logger.info("Add to cart is visible")
  await page.waitForTimeout(5000)
})

test.skip('test data', async({page})=>{
  console.log(testData);
})
