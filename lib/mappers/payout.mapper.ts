import { Money, Payout, Transaction, TransactionDetails } from "../models"
import { Payout as ScalaPayout, PayoutDetail as ScalaPayoutDetail } from "../models/payout.interface"

export class PayoutMapper {
  public map(payout: ScalaPayout, items: ScalaPayoutDetail[]): Payout {
    const mapped = new Payout()
    mapped.token = payout.merchantPayoutToken
    mapped.status = payout.status
    mapped.date = new Date(payout.transactionDate)
    mapped.amount = new Money(payout.totalAmount.amount, payout.totalAmount.currency)
    mapped.transactions = items.map((transaction) => {
      const transactionModel = new Transaction()
      transactionModel.orderStatus = transaction.orderStatus
      transactionModel.merchantReference = transaction.merchantReference
      transactionModel.captureStatus = transaction.captureStatus
      transactionModel.captureAmount = transaction.captureAmount ? new Money(transaction.captureAmount.amount, transaction.captureAmount.currency) : undefined
      transactionModel.details = new TransactionDetails()
      transactionModel.details.grossAmount =
        new Money(transaction.details.grossAmount.amount, transaction.details.grossAmount.currency)
      transactionModel.details.netAmount = new Money(transaction.details.netAmount.amount, transaction.details.netAmount.currency)
      transactionModel.details.totalFeeAmount = new Money(transaction.details.totalFeeAmount.amount, transaction.details.totalFeeAmount.currency)
      transactionModel.details.feeAmount = new Money(transaction.details.scalapayFeeAmount.amount, transaction.details.scalapayFeeAmount.currency)
      transactionModel.details.feeTaxAmount = new Money(transaction.details.scalapayFeeTaxAmount.amount, transaction.details.scalapayFeeTaxAmount.currency)
      transactionModel.details.otherFeeAmount = new Money(transaction.details.otherFeeAmount.amount, transaction.details.otherFeeAmount.currency)
      transactionModel.details.otherFeeTaxAmount = new Money(transaction.details.otherFeeTaxAmount.amount, transaction.details.otherFeeTaxAmount.currency)
      transactionModel.orderTokenLast4 = transaction.orderTokenLast4
      transactionModel.date = new Date(transaction.orderCreatedDate || transaction.createdAt || payout.transactionDate)
      transactionModel.refundAmount = transaction.refundAmount ? new Money(transaction.refundAmount.amount, transaction.refundAmount.currency) : undefined
      return transactionModel
    })
    return mapped
  }
}