"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderToken = void 0;
class OrderToken {
    /**
     * Order token object
     *
     * @param token string - The token
     */
    constructor(token) {
        this.token = token;
    }
    setCheckoutUrl(url) {
        this.checkoutUrl = url;
        return this;
    }
    setExpires(expires) {
        this.expires = expires;
        return this;
    }
    getToken() {
        return this.token;
    }
    getExpires() {
        return this.expires;
    }
    getCheckoutUrl() {
        return this.checkoutUrl;
    }
}
exports.OrderToken = OrderToken;
