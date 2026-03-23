import {Page, expect} from "@playwright/test"

export class CheckoutPage{
    constructor(page){
        this.page = page;
        this.firstName = page.locator(`#first-name`);
        this.continueBtn = page.locator(`#continue`);
    }

    async verifyCheckoutPageLocaded(){
        await expect(this.firstName).toBeVisible();
        console.log(`Checkout Page loaded`);
    }
}