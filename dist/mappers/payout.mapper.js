"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutMapper = void 0;
const models_1 = require("../models");
class PayoutMapper {
    map(payout, items) {
        const mapped = new models_1.Payout();
        mapped.token = payout.merchantPayoutToken;
        mapped.status = payout.status;
        mapped.date = new Date(payout.transactionDate);
        mapped.amount = new models_1.Money(payout.totalAmount.amount, payout.totalAmount.currency);
        mapped.transactions = items.map((transaction) => {
            const transactionModel = new models_1.Transaction();
            transactionModel.orderStatus = transaction.orderStatus;
            transactionModel.merchantReference = transaction.merchantReference;
            transactionModel.captureStatus = transaction.captureStatus;
            transactionModel.captureAmount = transaction.captureAmount ? new models_1.Money(transaction.captureAmount.amount, transaction.captureAmount.currency) : undefined;
            transactionModel.details = new models_1.TransactionDetails();
            transactionModel.details.grossAmount =
                new models_1.Money(transaction.details.grossAmount.amount, transaction.details.grossAmount.currency);
            transactionModel.details.netAmount = new models_1.Money(transaction.details.netAmount.amount, transaction.details.netAmount.currency);
            transactionModel.details.totalFeeAmount = new models_1.Money(transaction.details.totalFeeAmount.amount, transaction.details.totalFeeAmount.currency);
            transactionModel.details.feeAmount = new models_1.Money(transaction.details.scalapayFeeAmount.amount, transaction.details.scalapayFeeAmount.currency);
            transactionModel.details.feeTaxAmount = new models_1.Money(transaction.details.scalapayFeeTaxAmount.amount, transaction.details.scalapayFeeTaxAmount.currency);
            transactionModel.details.otherFeeAmount = new models_1.Money(transaction.details.otherFeeAmount.amount, transaction.details.otherFeeAmount.currency);
            transactionModel.details.otherFeeTaxAmount = new models_1.Money(transaction.details.otherFeeTaxAmount.amount, transaction.details.otherFeeTaxAmount.currency);
            transactionModel.orderTokenLast4 = transaction.orderTokenLast4;
            transactionModel.date = new Date(transaction.orderCreatedDate || transaction.createdAt || payout.transactionDate);
            transactionModel.refundAmount = transaction.refundAmount ? new models_1.Money(transaction.refundAmount.amount, transaction.refundAmount.currency) : undefined;
            return transactionModel;
        });
        return mapped;
    }
}
exports.PayoutMapper = PayoutMapper;
