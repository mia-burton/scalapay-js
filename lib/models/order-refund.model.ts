import { Money } from "./money.model";

export class OrderRefund {
  private amount: Money
  private reference: string

  /**
   * OrderRefund object
   *
   * @param refundAmount Money - Amount to refund
   * @param reference string - Unique order reference from the merchant platform
   */
  constructor(refundAmount: Money, reference: string )
  {
    this.amount = refundAmount
    this.reference = reference
  }

  public getAmount()
  {
    return this.amount
  }

  public rgetReference()
  {
    return this.reference
  }
}