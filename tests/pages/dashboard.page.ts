import { Page } from "@playwright/test";
import { LoginPage } from "./login.page";

export class DashBoard extends LoginPage {
    constructor(page:Page){
        super(page)
    }

    elements_3= {
        add_new_product : ()=> this.page.locator("[data-testid=\"dashboard-add-product\"]")
    }

    async addNewProduct(){
        await this.elements_3.add_new_product().click()
    }
    

}