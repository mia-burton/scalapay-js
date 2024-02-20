export declare class BaseError extends Error {
    data: Record<string, any>;
    constructor(message: string, data: Record<string, any>);
}
