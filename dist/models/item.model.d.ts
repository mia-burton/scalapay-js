import { Money } from "./money.model";
/**
 * Class Item
 *
 */
export declare class Item {
    private readonly name;
    private readonly sku;
    private readonly quantity;
    private readonly price;
    private readonly category;
    private subCategory;
    private readonly brand;
    private gtin;
    /**
     * @param name: string
     * @param sku: string
     * @param quantity : number
     * @param price: number
     * @param category: string
     * @param brand: string
     */
    constructor(name: string, sku: string, quantity: number, price: Money, category: string, brand: string);
    setSubCategory(categories: Array<string>): Item;
    /**
     * @param gtin Global Trade Item Number. One of [UPC, EAN, JAN, ISBN, ITF-14]
     */
    setGtin(gtin: string): Item;
    getName(): string;
    getSku(): string;
    getQuantity(): number;
    getPrice(): Money;
    getCategory(): string;
    getSubCategory(): Array<string> | null;
    getBrand(): string;
    getGtin(): string | null;
}
