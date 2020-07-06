export class Money {
  private readonly amount: string
  private readonly currency: string

  /**
   * Money object
   *
   * @param amount string - The amount as string
   * @param currency string - The curency (default: EUR)
   */
  constructor(amount: string, currency: string = 'EUR') {
    this.amount = amount
    this.currency = currency
  }

  public getAmount(): string {
    return this.amount
  }

  public getCurrency(): string {
    return this.currency
  }
}