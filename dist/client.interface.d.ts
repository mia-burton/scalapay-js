import { OrderDetailResponse, OrderDetail, OrderToken, OrderRefund, RefundResponse, Configuration, PayoutResponse } from "./models";
export interface ClientInterface {
    configuration(): Promise<Configuration>;
    createOrder(orderDetails: OrderDetail, confirmUrl: string, cancelUrl: string): Promise<OrderToken>;
    getOrder(token: string): Promise<OrderDetailResponse>;
    capture(token: string, reference?: string): Promise<string>;
    refund(token: string, refound: OrderRefund): Promise<RefundResponse>;
    payouts(startDate: Date, endDate: Date, page: number, pageSize: number): Promise<PayoutResponse>;
}
