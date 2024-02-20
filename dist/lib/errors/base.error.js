"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
class BaseError extends Error {
    constructor(message, data) {
        super(message);
        this.data = data;
    }
}
exports.BaseError = BaseError;
