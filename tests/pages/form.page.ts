import { Page } from "@playwright/test";
import { DashBoard } from "./Dashboard.page";

export class Form extends DashBoard {
    constructor(page:Page){
        super(page)
    }

    elements_4 = {
        nom_product : ()=> this.page.locator("[data-testid=\"product-nom\"]"),
        description_product : ()=> this.page.locator("[data-testid=\"product-description\"]"),
        product_prix : ()=> this.page.locator("[data-testid=\"product-prix\"]"),
        product_stock : ()=> this.page.locator("[data-testid=\"product-stock\"]"),
        product_img : ()=> this.page.locator("[data-testid=\"product-image-file\"]"),
        add_new : () => this.page.locator("[data-testid=\"product-submit\"]")
    }

    async NewProduct(nom:string,desc:string,price:string,stock:string,img:string){
        await this.elements_4.nom_product().fill(nom)
        await this.elements_4.description_product().fill(desc)
        await this.elements_4.product_prix().fill(price)
        await this.elements_4.product_stock().fill(stock)

        await this.elements_4.add_new().click()
        await this.elements_4.product_img().setInputFiles(img)
    }

}