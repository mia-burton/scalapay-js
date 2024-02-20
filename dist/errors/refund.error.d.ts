import { BaseError } from "./base.error";
export declare class RefundError extends BaseError {
    constructor(message: string, data: Record<string, any>);
}
