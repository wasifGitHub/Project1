import {Page} from "@playwright/test"
import logger from "../utils/LoggerUtil";

export default class SeriesLoginPage {
    constructor(page){
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
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
}