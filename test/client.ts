import ScalaClient from '../lib'

import * as chai from 'chai';
import * as nock from 'nock'
import { OrderDetail } from '../lib/models/order-detail.model';
import { Consumer } from '../lib/models/consumer.model';
import { Money } from '../lib/models/money.model';
import { expect } from 'chai';

describe('Scalapay client', () => {
  beforeEach(() => {
    nock('https://staging.api.scalapay.com/v2')
      .get('/configurations')
      .reply(200, {
        "minimumAmount": {
          "amount": "100.00",
          "currency": "EUR"
        },
        "maximumAmount": {
          "amount": "300.00",
          "currency": "EUR"
        },
        "numberOfPayments": "3",
      });

    nock('https://staging.api.scalapay.com/v2')
      .post('/orders')
      .reply(200, {
        "token": "D1K210DDQ6",
        "expires": "2019-10-21T23:45:37.086Z",
        "checkoutUrl": "https://staging.portal.scalapay.com/checkout?token=D1K210DDQ6"
      });

    nock('https://staging.api.scalapay.com/v2')
      .post('/payments/capture')
      .reply(200, {
        "token": token,
        "status": "APPROVED",
        "totalAmount": {
          "amount": 40.7,
          "currency": "EUR"
        }
      });
  });

  const client = new ScalaClient('qhtfs87hjnc12kkos', 'https://staging.portal.scalapay.com/success-url', 'https://staging.portal.scalapay.com/failur-url', true)
  let token = ''

  it('should return configurations' , async () => {
    const conf = await client.configuration()
    expect(conf).to.be.an('object').that.have.property('numberOfPayments').that.is.a('number')
    expect(conf).to.be.an('object').that.have.property('minAmount').that.is.a('object').that.have.property('amount').that.is.a('string')
    expect(conf).to.be.an('object').that.have.property('maxAmount').that.is.a('object').that.have.property('amount').that.is.a('string')
  });

  it('should create order' , async () => {
    const order = new OrderDetail(
      new Consumer(
        'Test',
        'Test',
        'test@test.com'
      ),
      new Money(
        '100'
      ),
      'AAA'
    )
    const tokenResponse = await client.createOrder(order)
    expect(tokenResponse).to.be.an('object').that.have.property('token').that.is.a('string')
    expect(tokenResponse).to.be.an('object').that.have.property('expires').that.is.a('string')
    expect(tokenResponse).to.be.an('object').that.have.property('checkoutUrl').that.is.a('string')
    token = tokenResponse.getToken()
  });

  it('should capture payment' , async () => {
    const res = await client.capture(token, 'AAA')
    expect(res).to.be.an('string').that.to.equal('APPROVED')
  })
});