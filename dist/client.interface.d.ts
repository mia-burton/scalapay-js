import { OrderDetail } from "./models/order-detail.model";
import { OrderToken } from "./models/order-token.model";
import { OrderRefund } from "./models/order-refund.model";
import { RefundResponse } from "./models/refund-response.model";
import { Configuration } from "./models/configuration.model";
export interface ClientInterface {
    configuration(): Promise<Configuration>;
    createOrder(orderDetails: OrderDetail, confirmUrl: string, cancelUrl: string): Promise<OrderToken>;
    capture(token: string, reference?: string): Promise<string>;
    refund(token: string, refound: OrderRefund): Promise<RefundResponse>;
}
