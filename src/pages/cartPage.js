import {Page, expect} from "@playwright/test"
import {CheckoutPage} from "./checkoutPage"

export class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutBtn = page.locator(`#checkout`);

    }

    async verifyCartPageLoaded(){
        await expect(this.checkoutBtn).toBeVisible();
        console.log(`Cart Page loaded`);
    }

    async clickCheckout(){
        await this.checkoutBtn.first().click();
        console.log(`Step5: Click Checkout`);

        const checkoutPage = new CheckoutPage(this.page);
        return checkoutPage;
    }
}