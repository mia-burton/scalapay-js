import { Money, Payout, Transaction, TransactionDetails } from "../models"
import { Payout as ScalaPayout, PayoutDetail as ScalaPayoutDetail } from "../models/payout.interface"

export class PayoutMapper {
  public map(payout: ScalaPayout, items: ScalaPayoutDetail[]): Payout {
    const mapped = new Payout()
    mapped.token = payout.merchantPayoutToken
    mapped.status = payout.status
    mapped.date = new Date(payout.transactionDate)
    mapped.amount = new Money(payout.totalAmount.getAmount(), payout.totalAmount.getCurrency())
    mapped.transactions = items.map((transaction) => {
      const transactionModel = new Transaction()
      transactionModel.orderStatus = transaction.orderStatus
      transactionModel.merchantReference = transaction.merchantReference
      transactionModel.captureStatus = transaction.captureStatus
      transactionModel.captureAmount = transaction.captureAmount ? new Money(transaction.captureAmount.getAmount(), transaction.captureAmount.getCurrency()) : undefined
      transactionModel.details = new TransactionDetails()
      transactionModel.details.grossAmount =
        new Money(transaction.details.grossAmount.getAmount(), transaction.details.grossAmount.getCurrency())
      transactionModel.details.netAmount = new Money(transaction.details.netAmount.getAmount(), transaction.details.netAmount.getCurrency())
      transactionModel.details.totalFeeAmount = new Money(transaction.details.totalFeeAmount.getAmount(), transaction.details.totalFeeAmount.getCurrency())
      transactionModel.details.feeAmount = new Money(transaction.details.scalapayFeeAmount.getAmount(), transaction.details.scalapayFeeAmount.getCurrency())
      transactionModel.details.feeTaxAmount = new Money(transaction.details.scalapayFeeTaxAmount.getAmount(), transaction.details.scalapayFeeTaxAmount.getCurrency())
      transactionModel.details.otherFeeAmount = new Money(transaction.details.otherFeeAmount.getAmount(), transaction.details.otherFeeAmount.getCurrency())
      transactionModel.details.otherFeeTaxAmount = new Money(transaction.details.otherFeeTaxAmount.getAmount(), transaction.details.otherFeeTaxAmount.getCurrency())
      transactionModel.orderTokenLast4 = transaction.orderTokenLast4
      transactionModel.date = new Date(transaction.orderCreatedDate || transaction.createdAt || payout.transactionDate)
      transactionModel.refundAmount = transaction.refundAmount ? new Money(transaction.refundAmount.getAmount(), transaction.refundAmount.getCurrency()) : undefined
      return transactionModel
    })
    return mapped
  }
}