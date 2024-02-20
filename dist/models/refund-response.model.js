"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundResponse = void 0;
class RefundResponse {
    /**
     * Refund response object
     * @param token string - Order token
     * @param amount  string - Amount refound
     * @param reference string - Unique order reference from the merchant platform
     * @param refundToken string - Refund token
     * @param refundedAt string - Refund date
     */
    constructor(token, amount, reference, refundToken, refundedAt) {
        this.token = token;
        this.amount = amount;
        this.reference = reference;
        this.refundToken = token;
        this.refundedAt = refundedAt;
    }
    getToken() {
        return this.token;
    }
    getAmount() {
        return this.amount;
    }
    getReference() {
        return this.reference;
    }
    getRefundedAt() {
        return this.refundedAt;
    }
    getRefundToken() {
        return this.refundToken;
    }
}
exports.RefundResponse = RefundResponse;
