"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptureOrderError = void 0;
const base_error_1 = require("./base.error");
class CaptureOrderError extends base_error_1.BaseError {
    constructor(message, data) {
        super(message, data);
        this.name = "CaptureOrderError";
    }
}
exports.CaptureOrderError = CaptureOrderError;
