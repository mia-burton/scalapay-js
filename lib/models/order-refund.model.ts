import { Money } from "./money.model";

export class OrderRefund {
  private amount: Money
  private reference: string

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