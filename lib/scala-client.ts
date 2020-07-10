import { ClientInterface } from "./client.interface"
import { OrderDetail } from "./models/order-detail.model"
import axios, { AxiosInstance } from 'axios'
import { OrderToken } from "./models/order-token.model"
import { OrderRefund } from "./models/order-refund.model"
import { RefundResponse } from "./models/refund-response.model"
import { Money } from "./models/money.model"
import { Configuration } from "./models/configuration.model"
import { CaptureOrderError, ConfigurationError, CreateOrderError, RefundError } from "./errors"

export class ScalaClient implements ClientInterface {
  private readonly PRODUCTION_URI = 'https://portal.scalapay.com/v2/'
  private readonly SANDBOX_URI = 'https://staging.api.scalapay.com/v2/'

  private readonly apiKey: string
  private readonly expireIn: number
  private readonly sandbox: boolean
  private restClient: AxiosInstance

  /**
   * Create a ScalaPay client
   * @param apiKey string - Api key given from ScalaPay
   * @param redirectConfirmUrl string - Redirection url to confirm payment
   * @param redirectCancelUrl string - REdirection url to calcel payment
   * @param sandbox boolean - Enable sandbox env
   * @param expireIn number - Number of seconds in wich complete payment
   */
  constructor(apiKey: string, sandbox: boolean = false, expireIn: number = 6000000) {
    this.apiKey = apiKey
    this.expireIn = expireIn
    this.sandbox = sandbox
    this.restClient = this.initAxios()
  }

  /**
   * Return the configuration avaiable for your account
   *
   * @returns Promise<Configuration>
   */
  public async configuration(): Promise<Configuration> {
    try {
      const res = await this.restClient.get('configurations')
      const conf = new Configuration(
        new Money(
          res.data.minimumAmount.amount,
          res.data.minimumAmount.currency,
        ),
        new Money(
          res.data.maximumAmount.amount,
          res.data.maximumAmount.currency,
        ),
        parseInt(res.data.numberOfPayments)
      )
      return conf
    } catch (err) {
      throw new ConfigurationError(err.message)
    }
  }

  /**
   * Used to create order to ScalaPay.
   * Recive an order-token to use as well as the redirectUrl to send the customer to Scalapay to authorize the payment
   * @param orderDetail- OrderDetail object
   * @returns Promise<OrderToken>
   */
  public async createOrder(orderDetail: OrderDetail, confirmUrl: string, cancelUrl: string): Promise<OrderToken> {
    try {
      const body = {
        ...orderDetail,
        orderExpiryMilliseconds: this.expireIn,
        merchant: {
          redirectConfirmUrl: confirmUrl,
          redirectCancelUrl: cancelUrl
        }
      }
      const res = await this.restClient.post('orders', body)
      const token = new OrderToken(res.data.token)
      if (res.data.expires) {
        token.setExpires(res.data.expires)
      }
      if (res.data.checkoutUrl) {
        token.setCheckoutUrl(res.data.checkoutUrl)
      }
      return token
    } catch(err) {
      throw new CreateOrderError(err.message, err.response.data)
    }
  }

  /**
   * Merchant captures the payment and funds are deducted from user account and transferred to merchant account.
   *
   * @param token string - Order token
   * @param reference string - Unique order reference from the merchant platform
   * @returns Promise<string> - The capture order status
   */
  public async capture(token: string, reference?: string): Promise<string> {
    try {
      const body = {
        token,
        merchantReference: reference
      }
      const res = await this.restClient.post('payments/capture', body)
      return res.data.status
    } catch(err) {
      throw new CaptureOrderError(err.message, err.response.data)
    }
  }

  /**
   * Merchant refund a payment.
   * The funds will be reversed from the merchant account, and then refunded to the customer.
   * @param token string - The Scalapay order token
   * @param refund OrderRefund - The order to refund data
   */
  public async refund(token: string, refund: OrderRefund): Promise<RefundResponse> {
    try {
      const body = {
        ...refund
      }
      const res = await this.restClient.post(`payments/${token}/refund`, body)
      const refundRes: RefundResponse = new RefundResponse(
        res.data.token,
        new Money(
          res.data.amount.amount
        ),
        res.data.merchantReference,
        res.data.refundToken,
        res.data.refundedAt
      )
      return refundRes
    } catch(err) {
      throw new RefundError(err.message, err.response.data)
    }
  }

  private initAxios(): AxiosInstance {
    return axios.create({
      baseURL: this.sandbox === true ? this.SANDBOX_URI : this.PRODUCTION_URI,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}