export class BaseError extends Error {
  public data: Record<string, any>

  constructor(message: string, data: Record<string, any>) {
    super(message)
    this.data = data
  }
}