import { BaseError } from "./base.error";
export declare class CreateOrderError extends BaseError {
    constructor(message: string, data: Record<string, any>);
}
