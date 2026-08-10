import { Page } from "@playwright/test";

export class LoginPage{
    page: Page;
    constructor(page: Page){
        this.page=page;
    }

    elements={
        username : () => this.page.locator("[data-testid=\"login-email\"]"),
        password : () => this.page.locator("[data-testid=\"login-password\"]"),
        submit : () => this.page.locator("[data-testid=\"login-submit\"]")
    }

    async Login(usr:string, pw:string){
        await this.elements.username().fill(usr)
        await this.elements.password().fill(pw)
        await this.elements.submit().click()
    }

}