import { Money } from "./money.model";
export declare class OrderRefund {
    private amount;
    private reference;
    /**
     * OrderRefund object
     *
     * @param refundAmount Money - Amount to refund
     * @param reference string - Unique order reference from the merchant platform
     */
    constructor(refundAmount: Money, reference: string);
    getAmount(): Money;
    rgetReference(): string;
}
