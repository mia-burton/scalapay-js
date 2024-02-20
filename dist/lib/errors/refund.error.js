"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundError = void 0;
const base_error_1 = require("./base.error");
class RefundError extends base_error_1.BaseError {
    constructor(message, data) {
        super(message, data);
        this.name = "RefoundError";
    }
}
exports.RefundError = RefundError;
