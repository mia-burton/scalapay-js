"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderError = void 0;
const base_error_1 = require("./base.error");
class CreateOrderError extends base_error_1.BaseError {
    constructor(message, data) {
        super(message, data);
        this.name = "CreateOrderError";
    }
}
exports.CreateOrderError = CreateOrderError;
