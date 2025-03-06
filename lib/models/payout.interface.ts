export interface Payout {
  merchantPayoutToken: string
  status: string
  totalAmount: Amount
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
  captureAmount?: Amount
  transferId: string
  transactionDate: string
  details: Details
  orderTokenLast4: string
  orderCreatedDate?: string
  refundAmount?: Amount
  createdAt?: string
}

interface Details {
  storeReference?: string | null
  deviceReference?: string | null
  grossAmount: Amount
  netAmount: Amount
  totalFeeAmount: Amount
  scalapayFeeAmount: Amount
  scalapayFeeTaxAmount: Amount
  otherFeeAmount: Amount
  otherFeeTaxAmount: Amount
}

interface Amount {
  amount: string;
  currency: string;
}