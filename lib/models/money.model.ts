export class Money {
  private readonly amount: number
  private readonly currency: string

  constructor(amount: number, currency: string = 'EUR') {
    this.amount = amount
    this.currency = currency
  }

  public getAmount(): number {
    return this.amount
  }

  public getCurrency(): string {
    return this.currency
  }
}