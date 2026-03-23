import {Page} from "@playwright/test"
import {HomePage} from "./homePage"

export default class LoginPage {
    constructor(page){
        // Stores the Playwright page object inside the class.
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async navigateToLoginPage(){
        await this.page.goto(`https://www.saucedemo.com/`)
        // await this.page.goto(`/`)
        console.log(`Step1: Page open: https://www.saucedemo.com/`);
    }
    async fillUsername(username){
        await this.username.fill(username);
        console.log(`Enter Username`);
    }
    async fillPassword(password){
        await this.password.fill(password);
        console.log(`Enter password`);
    }
    async clickLoginButton(){
        await this.loginButton.first().click()
        console.log(`Step2: Login`);

        const homePage = new HomePage(this.page);
        return homePage;
    }
}