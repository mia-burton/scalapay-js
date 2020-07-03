import { BaseError } from "./base.error"

export class CreateOrderError extends BaseError {
  constructor(message: string, data: Record<string, any>) {
    super(message, data)
    this.name = "CreateOrderError"
  }
}