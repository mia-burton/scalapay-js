export var __esModule: boolean;
export var Configuration: typeof Configuration | undefined;
declare class Configuration {
    /**
     * Configuration object
     *
     * @param minAmount Money - Min amount can be payed
     * @param maxAmount Money - Max amount can be payed
     * @param numberOfPayments number - Number of payments is with the amount will be divided
     */
    constructor(minAmount: any, maxAmount: any, numberOfPayments: any);
    numberOfPayments: any;
    maxAmount: any;
    minAmount: any;
    getMinAmount(): any;
    getMaxAmount(): any;
    getNumberOfPayments(): any;
}
export {};
