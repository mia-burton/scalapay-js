import { Money } from "./money.model";

export class Configuration {
  private readonly minAmount: Money
  private readonly maxAmount: Money
  private readonly numberOfPayments: number

  /**
   * Configuration object
   *
   * @param minAmount Money - Min amount can be payed
   * @param maxAmount Money - Max amount can be payed
   * @param numberOfPayments number - Number of payments is with the amount will be divided
   */
  constructor(minAmount: Money, maxAmount: Money, numberOfPayments: number) {
    this.numberOfPayments = numberOfPayments
    this.maxAmount = maxAmount
    this.minAmount = minAmount
  }

  public getMinAmount(): Money {
    return this.minAmount
  }

  public getMaxAmount(): Money {
    return this.maxAmount
  }

  public getNumberOfPayments(): number {
    return this.numberOfPayments
  }
}