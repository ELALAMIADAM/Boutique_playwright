import { Page } from "@playwright/test";
import { Form } from "./form.page";

export class Products extends Form {
    constructor(page:Page){
        super(page)
    }

    elements_5 = {
        message_check : ()=> this.page.locator("span[data-testid=\"alert-message\"]")
    }

    getMessage_alert(){
        return this.elements_5.message_check();
    }

}