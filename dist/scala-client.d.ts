import { ClientInterface } from "./client.interface";
import { OrderDetailResponse, OrderDetail, OrderToken, OrderRefund, RefundResponse, Configuration } from "./models";
export declare class ScalaClient implements ClientInterface {
    private readonly PRODUCTION_URI;
    private readonly SANDBOX_URI;
    private readonly apiKey;
    private readonly expireIn;
    private readonly sandbox;
    private restClient;
    /**
     * Create a ScalaPay client
     * @param apiKey string - Api key given from ScalaPay
     * @param redirectConfirmUrl string - Redirection url to confirm payment
     * @param redirectCancelUrl string - REdirection url to calcel payment
     * @param sandbox boolean - Enable sandbox env
     * @param expireIn number - Number of seconds in wich complete payment
     */
    constructor(apiKey: string, sandbox?: boolean, expireIn?: number);
    /**
     * Return the configuration avaiable for your account
     *
     * @returns Promise<Configuration>
     */
    configuration(): Promise<Configuration>;
    /**
     * Used to create order to ScalaPay.
     * Recive an order-token to use as well as the redirectUrl to send the customer to Scalapay to authorize the payment
     * @param orderDetail- OrderDetail object
     * @returns Promise<OrderToken>
     */
    createOrder(orderDetail: OrderDetail, confirmUrl: string, cancelUrl: string): Promise<OrderToken>;
    /**
     * Merchant captures the payment and funds are deducted from user account and transferred to merchant account.
     *
     * @param token string - Order token
     * @param reference string - Unique order reference from the merchant platform
     * @returns Promise<string> - The capture order status
     */
    capture(token: string, reference?: string): Promise<string>;
    /**
     * Merchant refund a payment.
     * The funds will be reversed from the merchant account, and then refunded to the customer.
     * @param token string - The Scalapay order token
     * @param refund OrderRefund - The order to refund data
     */
    refund(token: string, refund: OrderRefund): Promise<RefundResponse>;
    /**
     * @param token string - The Scalapay order token
     */
    getOrder(token: string): Promise<OrderDetailResponse>;
    private initAxios;
}
