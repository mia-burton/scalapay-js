/**
 * Class Contact
 *
 */
export class Contact
{
  private readonly name: string
  private readonly line1: string
  private line2!: string
  private readonly suburb: string
  private state!: string
  private readonly postcode: string
  private readonly countryCode: string
  private phoneNumber!: string

  constructor(name: string, line1: string, suburb: string, postcode: string, countryCode: string) {
    this.name = name
    this.line1 = line1
    this.suburb = suburb
    this.postcode = postcode
    this.countryCode = countryCode
  }

  public setLine2(line2: string): Contact {
    this.line2 = line2
    return this
  }

  public setState(state: string): Contact {
    this.state = state
    return this
  }

  public setPhoneNumber(number: string): Contact {
    this.phoneNumber = number
    return this
  }

  public getName(): string
  {
    return this.name
  }

  public getLine1(): string
  {
    return this.line1
  }

  public getLine2(): string|null
  {
    return this.line2
  }

  public getSuburb(): string
  {
    return this.suburb
  }

  public getState(): string|null
  {
    return this.state
  }

  public getPostcode(): string
  {
    return this.postcode
  }

  public getCountryCode(): string
  {
    return this.countryCode
  }

  public getPhoneNumber(): string|null
  {
    return this.phoneNumber
  }
}
