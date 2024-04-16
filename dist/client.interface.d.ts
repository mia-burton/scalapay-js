import { OrderDetailResponse, OrderDetail, OrderToken, OrderRefund, RefundResponse, Configuration } from "./models";
export interface ClientInterface {
    configuration(): Promise<Configuration>;
    createOrder(orderDetails: OrderDetail, confirmUrl: string, cancelUrl: string): Promise<OrderToken>;
    getOrder(token: string): Promise<OrderDetailResponse>;
    capture(token: string, reference?: string): Promise<string>;
    refund(token: string, refound: OrderRefund): Promise<RefundResponse>;
}
