import { Consumer } from "./consumer.model";
import { Contact } from "./contact.model";
import { Item } from "./item.model";
import { Discount } from "./discount.model";
import { Money } from "./money.model";
/**
 * Class OrderDetail
 *
 */
export declare class OrderDetail {
    private readonly consumer;
    private billing;
    private shipping;
    private items;
    private discounts;
    private readonly totalAmount;
    private taxAmount;
    private shippingAmount;
    private readonly merchantReference;
    /**
     * The order detail to pass at scalpay
     * @param consumer Consumer - The consumer data
     * @param total Money - The amount to pay
     * @param reference string - Unique order reference from the merchant platform
     */
    constructor(consumer: Consumer, total: Money, reference: string);
    setBilling(contact: Contact): OrderDetail;
    setShipping(contact: Contact): OrderDetail;
    setItems(items: Array<Item>): OrderDetail;
    setDiscounts(discounts: Array<Discount>): OrderDetail;
    setTaxAmount(amount: Money): OrderDetail;
    setShipmentAmount(amount: Money): OrderDetail;
    getConsumer(): Consumer;
    getBilling(): Contact;
    getShipping(): Contact;
    getItems(): Array<Item>;
    getDiscounts(): Array<Discount>;
    getTotalAmount(): Money;
    getTaxAmount(): Money;
    getShippingAmount(): Money;
    getReference(): string;
}
