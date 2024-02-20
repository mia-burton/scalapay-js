export var __esModule: boolean;
export var Item: typeof Item | undefined;
/**
 * Class Item
 *
 */
declare class Item {
    /**
     * @param name: string
     * @param sku: string
     * @param quantity : number
     * @param price: number
     * @param category: string
     * @param brand: string
     */
    constructor(name: any, sku: any, quantity: any, price: any, category: any, brand: any);
    name: any;
    sku: any;
    quantity: any;
    price: any;
    category: any;
    brand: any;
    setSubCategory(categories: any): Item;
    subCategory: any;
    /**
     * @param gtin Global Trade Item Number. One of [UPC, EAN, JAN, ISBN, ITF-14]
     */
    setGtin(gtin: any): Item;
    gtin: any;
    getName(): any;
    getSku(): any;
    getQuantity(): any;
    getPrice(): any;
    getCategory(): any;
    getSubCategory(): any;
    getBrand(): any;
    getGtin(): any;
}
export {};
