import { test, expect } from '@playwright/test';
import { Products } from './pages/products.page';

const imagePath = './tests/assets/img.jpg';

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

    let nom_product = "watermelon"
    let desc_product = "harry styles"
    let randomPrice = (Math.random()*46 + 10).toFixed(2)
    let randomStock = (Math.floor(Math.random()*11))
    let randomStock_str = randomStock.toString()
    await pr.NewProduct(nom_product,desc_product,randomPrice,randomStock_str,imagePath)

    

    const rowNumber = await pr.getFirstRowNumber();
    console.log('Row number:', rowNumber);
    

    await expect(page).toHaveURL(/products/);
    
    console.log(await pr.getMessage_alert().textContent());
    console.log(await pr.getNomProductAdded(rowNumber).textContent());
    console.log(await pr.getPrixProductAdded(rowNumber).textContent());
    console.log(await pr.getStockProductAdded(rowNumber).textContent());
    

    randomPrice = randomPrice +" €"
    randomPrice= randomPrice.replace(".",",")

    if(randomStock === 0 ) { 
        randomStock_str = "Rupture"
    } else if( randomStock <= 5 ){
        randomStock_str = randomStock_str+ "\n(faible)\n"
    }
    await expect(pr.getMessage_alert()).toHaveText("Produit ajouté avec succès.");
    await expect(pr.getNomProductAdded(rowNumber)).toHaveText(nom_product);
    await expect(pr.getPrixProductAdded(rowNumber)).toHaveText(randomPrice);
    await expect(pr.getStockProductAdded(rowNumber)).toHaveText(randomStock_str);
});

