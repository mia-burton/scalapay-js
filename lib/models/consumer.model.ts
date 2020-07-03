/**
 * Class Consumer
 *
 */
export class Consumer
{
  private readonly givenNames: string
  private readonly surname: string
  private readonly email: string
  private phoneNumber!: string

  constructor(names: string, surname: string, email: string) {
    this.givenNames = names
    this.email = email
    this.surname = surname
  }

  public setPhoneNumber(number: string): Consumer
  {
    this.phoneNumber = number
    return this
  }

  public getPhoneNumber(): string
  {
    return this.phoneNumber
  }

  public getGivenNames()
  {
    return this.givenNames
  }

  public getSurname()
  {
      return this.surname
  }

  public getEmail()
  {
    return this.email
  }
}
