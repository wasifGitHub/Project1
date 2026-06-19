import {Page, expect} from "@playwright/test"
import logger from "../utils/LoggerUtil"

export class CheckoutPage{
    constructor(page){
        this.page = page;
        this.firstName = page.locator(`#first-name`);
        this.continueBtn = page.locator(`#continue`);
    }

    async verifyCheckoutPageLocaded(){
        await expect(this.firstName).toBeVisible();
        logger.info(`Checkout Page loaded`);
    }
}