import {Page, expect} from "@playwright/test"
import {CartPage} from "./cartPage"

export class HomePage {
    constructor(page){
        this.page = page;
        this.verifySuccessLogin = page.locator(`//*[contains(.,'Swag Labs') and @class='app_logo']`);
        this.addToCartBtn = page.locator(`#add-to-cart-sauce-labs-backpack`);
        this.verifyItemAdded = page.locator(`#remove-sauce-labs-backpack`);
        this.cartIcon = page.locator(`a[data-test="shopping-cart-link"]`);

    }

    async verifyLoginSuccess(locator){
        await expect(locator).toBeVisible({timeout:10000})
        console.log(`Login Successful!`)
    }

    async addToCart(){
        await this.addToCartBtn.first().click();
        await expect(this.verifyItemAdded).toBeVisible({timeout:10000});
        console.log(`Step3: Item has been added to the cart.`)
        await expect(this.cartIcon).toBeVisible({timeout:10000});
    }

    async clickCartIcon(){
        await this.cartIcon.first().click()
        console.log(`Step4: Go to cart`)

        const cartPage = new CartPage(this.page);
        return cartPage
    }
}