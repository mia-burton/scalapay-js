import { Money } from "./money.model"

export interface Payout {
  merchantPayoutToken: string
  status: string
  totalAmount: Money
  transactionDate: string
  items: PayoutDetail[]
}

export interface PayoutDetail {
  orderStatus?: string
  channel: string | null
  type: string
  product: string
  merchantReference: string
  captureStatus?: string
  captureAmount?: Money
  transferId: string
  transactionDate: string
  details: Details
  orderTokenLast4: string
  orderCreatedDate?: string
  refundAmount?: Money
  createdAt?: string
}

interface Details {
  storeReference?: string | null
  deviceReference?: string | null
  grossAmount: Money
  netAmount: Money
  totalFeeAmount: Money
  scalapayFeeAmount: Money
  scalapayFeeTaxAmount: Money
  otherFeeAmount: Money
  otherFeeTaxAmount: Money
}
