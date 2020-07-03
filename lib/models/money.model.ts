export class Money {
  private readonly amount: string
  private readonly currency: string

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