"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailResponse = void 0;
class OrderDetailResponse {
    /**
     * Refund response object
     * @param token string - Order token
     * @param amount  string - Amount refound
     * @param status string - Scalapay order status.
     */
    constructor(token, amount, status) {
        this.token = token;
        this.totalAmount = amount;
        this.status = status;
    }
    getToken() {
        return this.token;
    }
    getAmount() {
        return this.totalAmount;
    }
    getStatus() {
        return this.status;
    }
}
exports.OrderDetailResponse = OrderDetailResponse;
