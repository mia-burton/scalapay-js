export var __esModule: boolean;
export var OrderRefund: typeof OrderRefund | undefined;
declare class OrderRefund {
    /**
     * OrderRefund object
     *
     * @param refundAmount Money - Amount to refund
     * @param reference string - Unique order reference from the merchant platform
     */
    constructor(refundAmount: any, reference: any);
    amount: any;
    reference: any;
    getAmount(): any;
    rgetReference(): any;
}
export {};
