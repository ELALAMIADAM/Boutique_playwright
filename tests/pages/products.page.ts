import { Page } from "@playwright/test";
import { Form } from "./form.page";

export class Products extends Form {
    constructor(page: Page) {
        super(page);
    }

    elements_5 = {
        message_check: () => this.page.locator("span[data-testid=\"alert-message\"]"),
    }

    async getFirstRowNumber() {
        const row1 = this.page.locator("tbody tr").nth(0);
        const testIdValue = await row1.getAttribute('data-testid');
        return testIdValue?.match(/\d+$/)?.[0] || '';
    }

    
    getNomProductAdded(rowNumber: string) {
        return this.page.locator(`[data-testid="product-name-${rowNumber}"]`);
    }

    getPrixProductAdded(rowNumber: string) {
        return this.page.locator(`[data-testid="product-price-${rowNumber}"]`);
    }

    getStockProductAdded(rowNumber: string) {
        return this.page.locator(`[data-testid="product-stock-${rowNumber}"]`);
    }



     getMessage_alert(){
        return this.elements_5.message_check();
    }
}