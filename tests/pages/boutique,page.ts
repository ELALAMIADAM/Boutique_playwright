import { Page } from "@playwright/test";
import { LoginPage } from "./login.page";

export class Boutique extends LoginPage {
    constructor(page:Page){
        super(page)
    }

    elements_2 = {
        message_check : ()=> this.page.locator("span[data-testid=\"alert-message\"]")
    }

    getMessage_alert(){
        return this.elements_2.message_check();
    }

}