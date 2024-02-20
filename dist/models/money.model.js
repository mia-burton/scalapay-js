"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = void 0;
class Money {
    /**
     * Money object
     *
     * @param amount string - The amount as string
     * @param currency string - The curency (default: EUR)
     */
    constructor(amount, currency = 'EUR') {
        this.amount = amount;
        this.currency = currency;
    }
    getAmount() {
        return this.amount;
    }
    getCurrency() {
        return this.currency;
    }
}
exports.Money = Money;
