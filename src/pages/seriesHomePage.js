import {Page, expect} from "@playwright/test"
import logger from "../utils/LoggerUtil"
import { error } from "console";

export default class HomePage {
    constructor(page){
        this.page = page;
        this.verifySuccessLogin = page.locator(`//*[contains(.,'Swag Labs') and @class='app_logo']`);
        this.addToCartBtn = page.locator(`#add-to-cart-sauce-labs-backpack`);
        this.verifyItemAdded = page.locator(`#remove-sauce-labs-backpack`);
        this.loginButton = page.locator('#login-button');
        this.cartIcon = page.locator(`a[data-test="shopping-cart-link"]`);
    }

    async clickLoginButton(){
        await this.loginButton.first().click().catch((error) => {
        logger.error(`Error clicking login button: ${error}`);
        }).then(()=>logger.info("Step2: Clicked login button"));
        // const homePage = new HomePage(this.page);
        // return homePage;
    }

    async verifyLoginSuccess(locator){
        await expect(locator).toBeVisible({timeout:10000}).catch((error)=>{
            logger.error(`Error Missing Swag Labs: ${error}`);
            throw error;
        }).then(()=>{
            logger.info("Swag Labs is visile")
        })
    }

    async addToCart(){
        await this.addToCartBtn.first().click().catch((error)=>{
            logger.error(`Error clicking addToCart: ${error}`);
            throw error
        }).then(()=>logger.info(`Clicked addToCart`));
        await expect(this.verifyItemAdded).toBeVisible({timeout:10000});
        logger.info(`Step3: Item has been added to the cart.`)
        await expect(this.cartIcon).toBeVisible({timeout:10000});
    }
}