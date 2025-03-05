import { Money } from "./money.model";
export declare class PayoutResponse {
    private _items;
    private _page;
    private _total;
    private _hasMore;
    constructor(page: number, total: number, hasMore: boolean);
    get items(): Payout[];
    set items(value: Payout[]);
    get page(): number;
    get total(): number;
    get hasMore(): boolean;
}
export declare class Payout {
    private _token;
    private _status;
    private _date;
    private _amount;
    private _transactions;
    get token(): string;
    set token(value: string);
    get status(): string;
    set status(value: string);
    get date(): Date;
    set date(value: Date);
    get amount(): Money;
    set amount(value: Money);
    get transactions(): Transaction[];
    set transactions(value: Transaction[]);
}
export declare class Transaction {
    private _orderStatus?;
    private _merchantReference;
    private _captureStatus?;
    private _captureAmount?;
    private _details;
    private _orderTokenLast4;
    private _date;
    private _refundAmount?;
    get orderStatus(): string | undefined;
    set orderStatus(value: string | undefined);
    get merchantReference(): string;
    set merchantReference(value: string);
    get captureStatus(): string | undefined;
    set captureStatus(value: string | undefined);
    get captureAmount(): Money | undefined;
    set captureAmount(value: Money | undefined);
    get details(): TransactionDetails;
    set details(value: TransactionDetails);
    get orderTokenLast4(): string;
    set orderTokenLast4(value: string);
    get date(): Date;
    set date(value: Date);
    get refundAmount(): Money | undefined;
    set refundAmount(value: Money | undefined);
}
export declare class TransactionDetails {
    private _grossAmount;
    private _netAmount;
    private _totalFeeAmount;
    private _feeAmount;
    private _feeTaxAmount;
    private _otherFeeAmount;
    private _otherFeeTaxAmount;
    get grossAmount(): Money;
    set grossAmount(value: Money);
    get netAmount(): Money;
    set netAmount(value: Money);
    get totalFeeAmount(): Money;
    set totalFeeAmount(value: Money);
    get feeAmount(): Money;
    set feeAmount(value: Money);
    get feeTaxAmount(): Money;
    set feeTaxAmount(value: Money);
    get otherFeeAmount(): Money;
    set otherFeeAmount(value: Money);
    get otherFeeTaxAmount(): Money;
    set otherFeeTaxAmount(value: Money);
}
