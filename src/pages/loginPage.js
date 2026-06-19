import {Page} from "@playwright/test"
import {HomePage} from "./homePage"
import logger from "../utils/LoggerUtil"

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
        logger.info(`Step1: Page open: https://www.saucedemo.com/`);
    }
    async fillUsername(username){
        await this.username.fill(username);
        logger.info(`Enter Username`);
    }
    async fillPassword(password){
        await this.password.fill(password);
        logger.info(`Enter password`);
    }
    async clickLoginButton(){
        await this.loginButton.first().click().catch((error) => {
        logger.error(`Error clicking login button: ${error}`);
        }).then(()=>logger.info("Step2: Clicked login button"));

        const homePage = new HomePage(this.page);
        return homePage;
    }
}