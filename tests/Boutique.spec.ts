import { test, expect } from '@playwright/test';
import { Boutique } from './pages/boutique,page';

let bt : Boutique;

test.beforeEach("login",async({page}) =>{
    bt = new Boutique(page);
    await page.goto("https://api.efi-academy.com/e-commerce-test-api/auth/login.php")
    await bt.Login("client@boutique.qa","Client123!")
    await expect(page).toHaveURL(/client/);
})

test('Bonjour Farid', { tag: '@Farid' }, async ({ page }) => {
  

  // Expect a title "to contain" a substring.
  await expect(bt.getMessage_alert()).toHaveText("Bienvenue farid !")

});

