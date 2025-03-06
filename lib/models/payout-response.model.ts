import { Money } from "./money.model"

export class PayoutResponse {
  private _items!: Payout[]
  private _page: number
  private _total: number
  private _hasMore: boolean

  constructor (page: number, total: number, hasMore: boolean) {
    this._page = page + 1
    this._total = total
    this._hasMore = hasMore || false
  }

  public get items(): Payout[] {
    return this._items
  }
  public set items(value: Payout[]) {
    this._items = value
  }

  public get page(): number {
    return this._page
  }

  public get total(): number {
    return this._total
  }

  public get hasMore(): boolean {
    return this._hasMore
  }
}

export class Payout {
  private _token!: string
  private _status!: string
  private _date!: Date
  private _amount!: Money
  private _transactions!: Transaction[]

  public get token(): string {
    return this._token
  }
  public set token(value: string) {
    this._token = value
  }

  public get status(): string {
    return this._status
  }
  public set status(value: string) {
    this._status = value
  }

  public get date(): Date {
    return this._date
  }
  public set date(value: Date) {
    this._date = value
  }

  public get amount(): Money {
    return this._amount
  }
  public set amount(value: Money) {
    this._amount = value
  }

  public get transactions(): Transaction[] {
    return this._transactions
  }
  public set transactions(value: Transaction[]) {
    this._transactions = value
  }
}

export class Transaction {
  private _orderStatus?: string
  private _merchantReference!: string
  private _captureStatus?: string
  private _captureAmount?: Money
  private _details!: TransactionDetails
  private _orderTokenLast4!: string
  private _date!: Date
  private _refundAmount?: Money

  public get orderStatus(): string | undefined {
    return this._orderStatus
  }
  public set orderStatus(value: string | undefined) {
    this._orderStatus = value
  }

  public get merchantReference(): string {
    return this._merchantReference
  }
  public set merchantReference(value: string) {
    this._merchantReference = value
  }

  public get captureStatus(): string | undefined {
    return this._captureStatus
  }
  public set captureStatus(value: string | undefined) {
    this._captureStatus = value
  }

  public get captureAmount(): Money | undefined {
    return this._captureAmount
  }
  public set captureAmount(value: Money | undefined) {
    this._captureAmount = value
  }

  public get details(): TransactionDetails {
    return this._details
  }
  public set details(value: TransactionDetails) {
    this._details = value
  }

  public get orderTokenLast4(): string {
    return this._orderTokenLast4
  }
  public set orderTokenLast4(value: string) {
    this._orderTokenLast4 = value
  }

  public get date(): Date {
    return this._date
  }
  public set date(value: Date) {
    this._date = value
  }

  public get refundAmount(): Money | undefined {
    return this._refundAmount
  }
  public set refundAmount(value: Money | undefined) {
    this._refundAmount = value
  }
}

export class TransactionDetails {
  private _grossAmount!: Money
  private _netAmount!: Money
  private _totalFeeAmount!: Money
  private _feeAmount!: Money
  private _feeTaxAmount!: Money
  private _otherFeeAmount!: Money
  private _otherFeeTaxAmount!: Money

  public get grossAmount(): Money {
    return this._grossAmount
  }
  public set grossAmount(value: Money) {
    this._grossAmount = value
  }

  public get netAmount(): Money {
    return this._netAmount
  }
  public set netAmount(value: Money) {
    this._netAmount = value
  }

  public get totalFeeAmount(): Money {
    return this._totalFeeAmount
  }
  public set totalFeeAmount(value: Money) {
    this._totalFeeAmount = value
  }

  public get feeAmount(): Money {
    return this._feeAmount
  }
  public set feeAmount(value: Money) {
    this._feeAmount = value
  }

  public get feeTaxAmount(): Money {
    return this._feeTaxAmount
  }
  public set feeTaxAmount(value: Money) {
    this._feeTaxAmount = value
  }

  public get otherFeeAmount(): Money {
    return this._otherFeeAmount
  }
  public set otherFeeAmount(value: Money) {
    this._otherFeeAmount = value
  }

  public get otherFeeTaxAmount(): Money {
    return this._otherFeeTaxAmount
  }
  public set otherFeeTaxAmount(value: Money) {
    this._otherFeeTaxAmount = value
  }
}