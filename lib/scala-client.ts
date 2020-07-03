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
  private readonly redirectConfirmUrl: string
  private readonly redirectCancelUrl: string
  private readonly expireIn: number
  private readonly sandbox: boolean
  private restClient: AxiosInstance

  constructor(apiKey: string, redirectConfirmUrl: string, redirectCancelUrl: string, sandbox: boolean = false, expireIn: number = 6000000) {
    this.apiKey = apiKey
    this.redirectCancelUrl = redirectCancelUrl
    this.redirectConfirmUrl = redirectConfirmUrl
    this.expireIn = expireIn
    this.sandbox = sandbox
    this.restClient = this.initAxios()
  }

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

  public async createOrder(orderDetails: OrderDetail): Promise<OrderToken> {
    try {
      const body = {
        ...orderDetails,
        orderExpiryMilliseconds: this.expireIn
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