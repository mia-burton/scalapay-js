import { Money } from "./money.model";

export class OrderDetailResponse {
  private token: string
  private totalAmount: Money
  private status: string

  /**
   * Refund response object
   * @param token string - Order token
   * @param amount  string - Amount refound
   * @param status string - Scalapay order status.
   */
  constructor(token: string, amount: Money, status: string) {
    this.token = token
    this.totalAmount = amount
    this.status = status
  }

  public getToken(): string {
    return this.token
  }

  public getAmount(): Money {
    return this.totalAmount
  }

  public getStatus(): string {
    return this.status
  }
}

