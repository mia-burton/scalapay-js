"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDetails = exports.Transaction = exports.Payout = exports.PayoutResponse = void 0;
class PayoutResponse {
    constructor(page, total, hasMore) {
        this._page = page + 1;
        this._total = total;
        this._hasMore = hasMore || false;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    get page() {
        return this._page;
    }
    get total() {
        return this._total;
    }
    get hasMore() {
        return this._hasMore;
    }
}
exports.PayoutResponse = PayoutResponse;
class Payout {
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get date() {
        return this._date;
    }
    set date(value) {
        this._date = value;
    }
    get amount() {
        return this._amount;
    }
    set amount(value) {
        this._amount = value;
    }
    get transactions() {
        return this._transactions;
    }
    set transactions(value) {
        this._transactions = value;
    }
}
exports.Payout = Payout;
class Transaction {
    get orderStatus() {
        return this._orderStatus;
    }
    set orderStatus(value) {
        this._orderStatus = value;
    }
    get merchantReference() {
        return this._merchantReference;
    }
    set merchantReference(value) {
        this._merchantReference = value;
    }
    get captureStatus() {
        return this._captureStatus;
    }
    set captureStatus(value) {
        this._captureStatus = value;
    }
    get captureAmount() {
        return this._captureAmount;
    }
    set captureAmount(value) {
        this._captureAmount = value;
    }
    get details() {
        return this._details;
    }
    set details(value) {
        this._details = value;
    }
    get orderTokenLast4() {
        return this._orderTokenLast4;
    }
    set orderTokenLast4(value) {
        this._orderTokenLast4 = value;
    }
    get date() {
        return this._date;
    }
    set date(value) {
        this._date = value;
    }
    get refundAmount() {
        return this._refundAmount;
    }
    set refundAmount(value) {
        this._refundAmount = value;
    }
}
exports.Transaction = Transaction;
class TransactionDetails {
    get grossAmount() {
        return this._grossAmount;
    }
    set grossAmount(value) {
        this._grossAmount = value;
    }
    get netAmount() {
        return this._netAmount;
    }
    set netAmount(value) {
        this._netAmount = value;
    }
    get totalFeeAmount() {
        return this._totalFeeAmount;
    }
    set totalFeeAmount(value) {
        this._totalFeeAmount = value;
    }
    get feeAmount() {
        return this._feeAmount;
    }
    set feeAmount(value) {
        this._feeAmount = value;
    }
    get feeTaxAmount() {
        return this._feeTaxAmount;
    }
    set feeTaxAmount(value) {
        this._feeTaxAmount = value;
    }
    get otherFeeAmount() {
        return this._otherFeeAmount;
    }
    set otherFeeAmount(value) {
        this._otherFeeAmount = value;
    }
    get otherFeeTaxAmount() {
        return this._otherFeeTaxAmount;
    }
    set otherFeeTaxAmount(value) {
        this._otherFeeTaxAmount = value;
    }
}
exports.TransactionDetails = TransactionDetails;
