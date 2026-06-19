import {Page, expect} from "@playwright/test"
import {CheckoutPage} from "./checkoutPage"
import logger from "../utils/LoggerUtil";

export class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutBtn = page.locator(`#checkout`);

    }

    async verifyCartPageLoaded(){
        await expect(this.checkoutBtn).toBeVisible();
        logger.info(`Cart Page loaded`);
    }

    async clickCheckout(){
        await this.checkoutBtn.first().click();
        logger.info(`Step5: Click Checkout`);

        const checkoutPage = new CheckoutPage(this.page);
        return checkoutPage;
    }
}