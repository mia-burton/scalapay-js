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
        mapped.amount = new models_1.Money(payout.totalAmount.getAmount(), payout.totalAmount.getCurrency());
        mapped.transactions = items.map((transaction) => {
            const transactionModel = new models_1.Transaction();
            transactionModel.orderStatus = transaction.orderStatus;
            transactionModel.merchantReference = transaction.merchantReference;
            transactionModel.captureStatus = transaction.captureStatus;
            transactionModel.captureAmount = transaction.captureAmount ? new models_1.Money(transaction.captureAmount.getAmount(), transaction.captureAmount.getCurrency()) : undefined;
            transactionModel.details = new models_1.TransactionDetails();
            transactionModel.details.grossAmount =
                new models_1.Money(transaction.details.grossAmount.getAmount(), transaction.details.grossAmount.getCurrency());
            transactionModel.details.netAmount = new models_1.Money(transaction.details.netAmount.getAmount(), transaction.details.netAmount.getCurrency());
            transactionModel.details.totalFeeAmount = new models_1.Money(transaction.details.totalFeeAmount.getAmount(), transaction.details.totalFeeAmount.getCurrency());
            transactionModel.details.feeAmount = new models_1.Money(transaction.details.scalapayFeeAmount.getAmount(), transaction.details.scalapayFeeAmount.getCurrency());
            transactionModel.details.feeTaxAmount = new models_1.Money(transaction.details.scalapayFeeTaxAmount.getAmount(), transaction.details.scalapayFeeTaxAmount.getCurrency());
            transactionModel.details.otherFeeAmount = new models_1.Money(transaction.details.otherFeeAmount.getAmount(), transaction.details.otherFeeAmount.getCurrency());
            transactionModel.details.otherFeeTaxAmount = new models_1.Money(transaction.details.otherFeeTaxAmount.getAmount(), transaction.details.otherFeeTaxAmount.getCurrency());
            transactionModel.orderTokenLast4 = transaction.orderTokenLast4;
            transactionModel.date = new Date(transaction.orderCreatedDate || transaction.createdAt || payout.transactionDate);
            transactionModel.refundAmount = transaction.refundAmount ? new models_1.Money(transaction.refundAmount.getAmount(), transaction.refundAmount.getCurrency()) : undefined;
            return transactionModel;
        });
        return mapped;
    }
}
exports.PayoutMapper = PayoutMapper;
