"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRefund = void 0;
class OrderRefund {
    /**
     * OrderRefund object
     *
     * @param refundAmount Money - Amount to refund
     * @param reference string - Unique order reference from the merchant platform
     */
    constructor(refundAmount, reference) {
        this.amount = refundAmount;
        this.reference = reference;
    }
    getAmount() {
        return this.amount;
    }
    rgetReference() {
        return this.reference;
    }
}
exports.OrderRefund = OrderRefund;
