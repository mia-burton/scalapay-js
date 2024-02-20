import { BaseError } from "./base.error";
export declare class CaptureOrderError extends BaseError {
    constructor(message: string, data: Record<string, any>);
}
