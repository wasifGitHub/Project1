import {test,expect} from "../fixtures/loginFixture"

test("Fixture test", async({homePage}) => {
    await expect(homePage.verifySuccessLogin).toBeVisible();
})