import { OrderDetail } from "./models/order-detail.model";
import { OrderToken } from "./models/order-token.model";
import { OrderRefund } from "./models/order-refund.model";
import { RefundResponse } from "./models/refund-response.model";

export interface ClientInterface {
  createOrder(orderDetails: OrderDetail): Promise<OrderToken>
  capture(token: string, reference?: string): Promise<string>
  refund(token: string, refound: OrderRefund): Promise<RefundResponse>
}