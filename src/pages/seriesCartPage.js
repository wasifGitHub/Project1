import {test, expect} from "@playwright/test"
import logger from "../utils/LoggerUtil"

export default class SeriesCartPage {
    constructor(page){
        this.page = page;
        this.checkoutBtn = page.locator(`#checkout`);
        this.cartIcon = page.locator(`a[data-test="shopping-cart-link"]`);
    }

    async clickCartIcon(){
        await this.cartIcon.first().click().catch((error)=>{
            logger.error(`Error clicking CartIcon: ${error}`);
            throw error
        }).then(()=>logger.info(`Step4: Clicked Cart Icon`));
        // const cartPage = new CartPage(this.page);
        // return cartPage
    }

    async verifyCartPageLoaded(){
        await expect(this.checkoutBtn).toBeVisible();
        logger.info(`Cart Page loaded`);
    }
}