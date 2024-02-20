export declare class OrderToken {
    private readonly token;
    private expires;
    private checkoutUrl;
    /**
     * Order token object
     *
     * @param token string - The token
     */
    constructor(token: string);
    setCheckoutUrl(url: string): OrderToken;
    setExpires(expires: Date): OrderToken;
    getToken(): string;
    getExpires(): Date;
    getCheckoutUrl(): string;
}
