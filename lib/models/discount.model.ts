import { Money } from "./money.model";

/**
 * Class Discount
 */
export class Discount
{
  private readonly displayName: string
  private readonly amount: Money

  /**
   * Disount object
   * @param name string- Name of the discunt
   * @param amount Money - Discoutn amount
   */
  constructor(name: string, amount: Money) {
    this.displayName = name
    this.amount = amount
  }

  public getDisplayName(): string
  {
    return this.displayName
  }

  public getAmount(): Money
  {
    return this.amount;
  }
}
