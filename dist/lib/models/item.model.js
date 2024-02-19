"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
/**
 * Class Item
 *
 */
class Item {
    /**
     * @param name: string
     * @param sku: string
     * @param quantity : number
     * @param price: number
     * @param category: string
     * @param brand: string
     */
    constructor(name, sku, quantity, price, category, brand) {
        this.name = name;
        this.sku = sku;
        this.quantity = quantity;
        this.price = price;
        this.category = category;
        this.brand = brand;
    }
    setSubCategory(categories) {
        this.subCategory = categories;
        return this;
    }
    /**
     * @param gtin Global Trade Item Number. One of [UPC, EAN, JAN, ISBN, ITF-14]
     */
    setGtin(gtin) {
        this.gtin = gtin;
        return this;
    }
    getName() {
        return this.name;
    }
    getSku() {
        return this.sku;
    }
    getQuantity() {
        return this.quantity;
    }
    getPrice() {
        return this.price;
    }
    getCategory() {
        return this.category;
    }
    getSubCategory() {
        return this.subCategory;
    }
    getBrand() {
        return this.brand;
    }
    getGtin() {
        return this.gtin;
    }
}
exports.Item = Item;
