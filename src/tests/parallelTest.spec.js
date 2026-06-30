import {test,expect} from "@playwright/test"

test.describe.configure({mode:'parallel'})

test('Parallel Test 1', async({page}) => {
    await page.goto(`https://www.saucedemo.com/`)
    var loginButton = page.locator('#login-button00');
    await expect(loginButton).toBeVisible();
})

test('Parallel Test 2', async({page}) => {
    await page.goto(`https://www.saucedemo.com/`)
    var loginButton = page.locator('#login-button00');
    await expect(loginButton).toBeVisible();
})

test('Parallel Test 3', async({page}) => {
    await page.goto(`https://www.saucedemo.com/`)
    var loginButton = page.locator('#login-button');
    await expect(loginButton).toBeVisible();
})

test('Parallel Test 4', async({page}) => {
    await page.goto(`https://www.saucedemo.com/`)
    var loginButton = page.locator('#login-button');
    await expect(loginButton).toBeVisible();
})