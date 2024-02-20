export var __esModule: boolean;
export var RefundResponse: typeof RefundResponse | undefined;
declare class RefundResponse {
    /**
     * Refund response object
     * @param token string - Order token
     * @param amount  string - Amount refound
     * @param reference string - Unique order reference from the merchant platform
     * @param refundToken string - Refund token
     * @param refundedAt string - Refund date
     */
    constructor(token: any, amount: any, reference: any, refundToken: any, refundedAt: any);
    token: any;
    amount: any;
    reference: any;
    refundToken: any;
    refundedAt: any;
    getToken(): any;
    getAmount(): any;
    getReference(): any;
    getRefundedAt(): any;
    getRefundToken(): any;
}
export {};
