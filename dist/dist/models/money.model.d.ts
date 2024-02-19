export var __esModule: boolean;
export var Money: typeof Money | undefined;
declare class Money {
    /**
     * Money object
     *
     * @param amount string - The amount as string
     * @param currency string - The curency (default: EUR)
     */
    constructor(amount: any, currency?: string);
    amount: any;
    currency: string;
    getAmount(): any;
    getCurrency(): string;
}
export {};
