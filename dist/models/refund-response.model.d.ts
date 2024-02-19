import { Money } from "./money.model";
export declare class RefundResponse {
    private token;
    private amount;
    private reference;
    private refundToken;
    private refundedAt;
    /**
     * Refund response object
     * @param token string - Order token
     * @param amount  string - Amount refound
     * @param reference string - Unique order reference from the merchant platform
     * @param refundToken string - Refund token
     * @param refundedAt string - Refund date
     */
    constructor(token: string, amount: Money, reference: string, refundToken: string, refundedAt: string);
    getToken(): string;
    getAmount(): Money;
    getReference(): string;
    getRefundedAt(): string;
    getRefundToken(): string;
}
