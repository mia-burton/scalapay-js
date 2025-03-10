"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalaClient = void 0;
const axios_1 = require("axios");
const models_1 = require("./models");
const errors_1 = require("./errors");
const mappers_1 = require("./mappers");
class ScalaClient {
    /**
     * Create a ScalaPay client
     * @param apiKey string - Api key given from ScalaPay
     * @param redirectConfirmUrl string - Redirection url to confirm payment
     * @param redirectCancelUrl string - REdirection url to calcel payment
     * @param sandbox boolean - Enable sandbox env
     * @param expireIn number - Number of seconds in wich complete payment
     */
    constructor(apiKey, sandbox = false, expireIn = 6000000) {
        this.PRODUCTION_URI = 'https://api.scalapay.com/';
        this.SANDBOX_URI = 'https://integration.api.scalapay.com/';
        this.apiKey = apiKey;
        this.expireIn = expireIn;
        this.sandbox = sandbox;
        this.restClient = this.initAxios();
    }
    /**
     * Return the configuration avaiable for your account
     *
     * @returns Promise<Configuration>
     */
    configuration() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.restClient.get('configurations');
                const conf = new models_1.Configuration(new models_1.Money(res.data.minimumAmount.amount, res.data.minimumAmount.currency), new models_1.Money(res.data.maximumAmount.amount, res.data.maximumAmount.currency), parseInt(res.data.numberOfPayments));
                return conf;
            }
            catch (err) {
                throw new errors_1.ConfigurationError(err.message);
            }
        });
    }
    /**
     * Used to create order to ScalaPay.
     * Recive an order-token to use as well as the redirectUrl to send the customer to Scalapay to authorize the payment
     * @param orderDetail- OrderDetail object
     * @returns Promise<OrderToken>
     */
    createOrder(orderDetail, confirmUrl, cancelUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = Object.assign(Object.assign({}, orderDetail), { orderExpiryMilliseconds: this.expireIn, merchant: {
                        redirectConfirmUrl: confirmUrl,
                        redirectCancelUrl: cancelUrl
                    } });
                const res = yield this.restClient.post('orders', body);
                const token = new models_1.OrderToken(res.data.token);
                if (res.data.expires) {
                    token.setExpires(res.data.expires);
                }
                if (res.data.checkoutUrl) {
                    token.setCheckoutUrl(res.data.checkoutUrl);
                }
                return token;
            }
            catch (err) {
                throw new errors_1.CreateOrderError(err.message, err.response.data);
            }
        });
    }
    /**
     * Merchant captures the payment and funds are deducted from user account and transferred to merchant account.
     *
     * @param token string - Order token
     * @param reference string - Unique order reference from the merchant platform
     * @returns Promise<string> - The capture order status
     */
    capture(token, reference) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = {
                    token,
                    merchantReference: reference
                };
                const res = yield this.restClient.post('v2/payments/capture', body);
                return res.data.status;
            }
            catch (err) {
                throw new errors_1.CaptureOrderError(err.message, err.response.data);
            }
        });
    }
    /**
     * Merchant refund a payment.
     * The funds will be reversed from the merchant account, and then refunded to the customer.
     * @param token string - The Scalapay order token
     * @param refund OrderRefund - The order to refund data
     */
    refund(token, refund) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = Object.assign({}, refund);
                const res = yield this.restClient.post(`v2/payments/${token}/refund`, body);
                const refundRes = new models_1.RefundResponse(res.data.token, new models_1.Money(res.data.amount.amount), res.data.merchantReference, res.data.refundToken, res.data.refundedAt);
                return refundRes;
            }
            catch (err) {
                throw new errors_1.RefundError(err.message, err.response.data);
            }
        });
    }
    /**
     * @param token string - The Scalapay order token
     */
    getOrder(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.restClient.get(`v2/payments/${token}`);
                const response = new models_1.OrderDetailResponse(res.data.token, new models_1.Money(res.data.totalAmount.amount, res.data.totalAmount.currency), res.data.status);
                return response;
            }
            catch (err) {
                throw new errors_1.ConfigurationError(err.message);
            }
        });
    }
    /**
     * Returns the list of payout for the given period.
     * @param startDate Date - The initial date
     * @param endDate Date - The end date
     * @param page number- The page number
     * @param pageSize number- The number of items to returns
     * @returns PayoutResponse
     */
    payouts(startDate, endDate, page = 1, pageSize = 100) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.restClient.get(`v1/reporting/payouts?startDate=${this.formatDate(startDate)}&endDate=${this.formatDate(endDate)}&page=${page - 1}&size=${pageSize}`);
                const payouts = [];
                const payoutMapper = new mappers_1.PayoutMapper();
                for (const element of res.data.items) {
                    const payoutItems = [];
                    const resOrdersPayout = yield this.restClient.get(`v1/reporting/payouts/${element.merchantPayoutToken}/orders`);
                    payoutItems.push(...resOrdersPayout.data.items);
                    const resRefundsPayout = yield this.restClient.get(`v1/reporting/payouts/${element.merchantPayoutToken}/refunds`);
                    payoutItems.push(...resRefundsPayout.data.items);
                    payouts.push(payoutMapper.map(element, payoutItems));
                }
                const response = new models_1.PayoutResponse(res.data.page, res.data.total, res.data.hasMore);
                response.items = payouts;
                return response;
            }
            catch (err) {
                throw new errors_1.ConfigurationError(err.message);
            }
        });
    }
    initAxios() {
        return axios_1.default.create({
            baseURL: this.sandbox === true ? this.SANDBOX_URI : this.PRODUCTION_URI,
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
    formatDate(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
}
exports.ScalaClient = ScalaClient;
