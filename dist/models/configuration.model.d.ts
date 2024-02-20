import { Money } from "./money.model";
export declare class Configuration {
    private readonly minAmount;
    private readonly maxAmount;
    private readonly numberOfPayments;
    /**
     * Configuration object
     *
     * @param minAmount Money - Min amount can be payed
     * @param maxAmount Money - Max amount can be payed
     * @param numberOfPayments number - Number of payments is with the amount will be divided
     */
    constructor(minAmount: Money, maxAmount: Money, numberOfPayments: number);
    getMinAmount(): Money;
    getMaxAmount(): Money;
    getNumberOfPayments(): number;
}
