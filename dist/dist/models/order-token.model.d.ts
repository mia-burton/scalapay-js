export var __esModule: boolean;
export var OrderToken: typeof OrderToken | undefined;
declare class OrderToken {
    /**
     * Order token object
     *
     * @param token string - The token
     */
    constructor(token: any);
    token: any;
    setCheckoutUrl(url: any): OrderToken;
    checkoutUrl: any;
    setExpires(expires: any): OrderToken;
    expires: any;
    getToken(): any;
    getExpires(): any;
    getCheckoutUrl(): any;
}
export {};
