export class OrderToken {
  private readonly token: string
  private expires!: Date
  private checkoutUrl!: string

  constructor(token: string) {
    this.token = token
  }

  public setCheckoutUrl(url: string): OrderToken {
    this.checkoutUrl = url
    return this
  }

  public setExpires(expires: Date): OrderToken {
    this.expires = expires
    return this
  }

  public getToken(): string {
    return this.token
  }

  public getExpires(): Date {
    return this.expires
  }

  public getCheckoutUrl(): string {
    return this.checkoutUrl
  }
}