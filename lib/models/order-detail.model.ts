import { Consumer } from "./consumer.model";
import { Contact } from "./contact.model";
import { Item } from "./item.model";
import { Discount } from "./discount.model";
import { Money } from "./money.model";

/**
 * Class OrderDetail
 *
 */
export class OrderDetail
{
  private readonly consumer: Consumer
  private billing!: Contact;
  private shipping!: Contact;
  private items!: Array<Item>;
  private discounts!: Array<Discount>;
  private readonly totalAmount: Money
  private taxAmount!: Money;
  private shippingAmount!: Money;
  // Unique order reference from the merchant platform
  private readonly reference: string;

  constructor(consumer: Consumer, total: Money, reference: string) {
    this.consumer = consumer
    this.totalAmount = total
    this.reference = reference
  }

  public setBilling(contact: Contact): OrderDetail {
    this.billing = contact
    return this
  }

  public setShipping(contact: Contact): OrderDetail {
    this.shipping = contact
    return this
  }

  public setItems(items: Array<Item>): OrderDetail {
    this.items = items
    return this
  }

  public setDiscounts(discounts: Array<Discount>): OrderDetail {
    this.discounts = discounts
    return this
  }

  public setTaxAmount(amount: Money): OrderDetail {
    this.taxAmount = amount
    return this
  }

  public setShipmentAmount(amount: Money): OrderDetail {
    this.shippingAmount = amount
    return this
  }

  public getConsumer(): Consumer {
    return this.consumer
  }

  public getBilling(): Contact {
    return this.billing
  }

  public getShipping(): Contact {
    return this.shipping
  }

  public getItems(): Array<Item> {
    return this.items
  }

  public getDiscounts(): Array<Discount> {
    return this.discounts
  }

  public getTotalAmount(): Money {
    return this.totalAmount
  }

  public getTaxAmount(): Money {
    return this.taxAmount
  }

  public getShippingAmount(): Money {
    return this.shippingAmount
  }

  public getReference(): string {
    return this.reference
  }
}
