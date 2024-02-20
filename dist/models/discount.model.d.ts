import { Money } from "./money.model";
/**
 * Class Discount
 */
export declare class Discount {
    private readonly displayName;
    private readonly amount;
    /**
     * Disount object
     * @param name string- Name of the discunt
     * @param amount Money - Discoutn amount
     */
    constructor(name: string, amount: Money);
    getDisplayName(): string;
    getAmount(): Money;
}
