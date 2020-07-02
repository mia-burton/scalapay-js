import { Money } from "./money.model";

export class RefundResponse {
  private token: string
  private amount: Money
  private reference: string
  private refundToken: string
  private refundedAt: string

  constructor(token: string, amount: Money, reference: string, refundToken: string, refundedAt: string) {
    this.token = token
    this.amount = amount
    this.reference = reference
    this.refundToken = token
    this.refundedAt = refundedAt
  }

  public getToken(): string {
    return this.token
  }

  public getAmount(): Money {
    return this.amount
  }

  public getReference(): string {
    return this.reference
  }

  public getRefundedAt(): string {
    return this.refundedAt
  }

  public getRefundToken(): string {
    return this.refundToken
  }
}