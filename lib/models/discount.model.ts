import { Money } from "./money.model";

/**
 * Class Discount
 */
export class Discount
{
  private readonly displayName: string
  private readonly amount: Money

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
