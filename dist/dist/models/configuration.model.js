"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
class Configuration {
    /**
     * Configuration object
     *
     * @param minAmount Money - Min amount can be payed
     * @param maxAmount Money - Max amount can be payed
     * @param numberOfPayments number - Number of payments is with the amount will be divided
     */
    constructor(minAmount, maxAmount, numberOfPayments) {
        this.numberOfPayments = numberOfPayments;
        this.maxAmount = maxAmount;
        this.minAmount = minAmount;
    }
    getMinAmount() {
        return this.minAmount;
    }
    getMaxAmount() {
        return this.maxAmount;
    }
    getNumberOfPayments() {
        return this.numberOfPayments;
    }
}
exports.Configuration = Configuration;
