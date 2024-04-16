import { Money } from "./money.model";
export declare class OrderDetailResponse {
    private token;
    private totalAmount;
    private status;
    /**
     * Refund response object
     * @param token string - Order token
     * @param amount  string - Amount refound
     * @param status string - Scalapay order status.
     */
    constructor(token: string, amount: Money, status: string);
    getToken(): string;
    getAmount(): Money;
    getStatus(): string;
}
