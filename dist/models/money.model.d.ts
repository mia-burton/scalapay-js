export declare class Money {
    private readonly amount;
    private readonly currency;
    /**
     * Money object
     *
     * @param amount string - The amount as string
     * @param currency string - The curency (default: EUR)
     */
    constructor(amount: string, currency?: string);
    getAmount(): string;
    getCurrency(): string;
}
