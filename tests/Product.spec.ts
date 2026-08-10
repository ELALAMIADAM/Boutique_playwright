import { test, expect } from '@playwright/test';
import { Products } from './pages/products.page';

import { img } from './assets/img.jpg'
let pr : Products ;

test.beforeEach("login",async({page}) =>{
    pr = new Products(page);
    await page.goto("https://api.efi-academy.com/e-commerce-test-api/auth/login.php")
    await pr.Login("admin@boutique.qa","Admin123!")
    await expect(page).toHaveURL(/admin/);
})

test('New product', async ({ page }) => {
  
    await pr.addNewProduct()
    await expect(page).toHaveURL(/product_form/);

    let randomPrice = (Math.random()*46 + 10).toFixed(2)
    let randomStock = (Math.floor(Math.random()*11)).toString()
    await pr.NewProduct("watermelon","harry styles",randomPrice,randomStock,img)

    await expect(page).toHaveURL(/products/);
    
    await expect(pr.getMessage_alert()).toHaveText("Produit ajouté avec succès.")

});

