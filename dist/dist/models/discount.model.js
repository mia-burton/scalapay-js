"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discount = void 0;
/**
 * Class Discount
 */
class Discount {
    /**
     * Disount object
     * @param name string- Name of the discunt
     * @param amount Money - Discoutn amount
     */
    constructor(name, amount) {
        this.displayName = name;
        this.amount = amount;
    }
    getDisplayName() {
        return this.displayName;
    }
    getAmount() {
        return this.amount;
    }
}
exports.Discount = Discount;
