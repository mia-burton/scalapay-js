export var __esModule: boolean;
export var ScalaClient: typeof ScalaClient | undefined;
declare class ScalaClient {
    /**
     * Create a ScalaPay client
     * @param apiKey string - Api key given from ScalaPay
     * @param redirectConfirmUrl string - Redirection url to confirm payment
     * @param redirectCancelUrl string - REdirection url to calcel payment
     * @param sandbox boolean - Enable sandbox env
     * @param expireIn number - Number of seconds in wich complete payment
     */
    constructor(apiKey: any, sandbox?: boolean, expireIn?: number);
    PRODUCTION_URI: string;
    SANDBOX_URI: string;
    apiKey: any;
    expireIn: number;
    sandbox: boolean;
    restClient: import("axios").AxiosInstance;
    /**
     * Return the configuration avaiable for your account
     *
     * @returns Promise<Configuration>
     */
    configuration(): any;
    /**
     * Used to create order to ScalaPay.
     * Recive an order-token to use as well as the redirectUrl to send the customer to Scalapay to authorize the payment
     * @param orderDetail- OrderDetail object
     * @returns Promise<OrderToken>
     */
    createOrder(orderDetail: any, confirmUrl: any, cancelUrl: any): any;
    /**
     * Merchant captures the payment and funds are deducted from user account and transferred to merchant account.
     *
     * @param token string - Order token
     * @param reference string - Unique order reference from the merchant platform
     * @returns Promise<string> - The capture order status
     */
    capture(token: any, reference: any): any;
    /**
     * Merchant refund a payment.
     * The funds will be reversed from the merchant account, and then refunded to the customer.
     * @param token string - The Scalapay order token
     * @param refund OrderRefund - The order to refund data
     */
    refund(token: any, refund: any): any;
    initAxios(): import("axios").AxiosInstance;
}
export {};
