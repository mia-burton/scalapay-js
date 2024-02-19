"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetail = void 0;
/**
 * Class OrderDetail
 *
 */
class OrderDetail {
    /**
     * The order detail to pass at scalpay
     * @param consumer Consumer - The consumer data
     * @param total Money - The amount to pay
     * @param reference string - Unique order reference from the merchant platform
     */
    constructor(consumer, total, reference) {
        this.consumer = consumer;
        this.totalAmount = total;
        this.merchantReference = reference;
    }
    setBilling(contact) {
        this.billing = contact;
        return this;
    }
    setShipping(contact) {
        this.shipping = contact;
        return this;
    }
    setItems(items) {
        this.items = items;
        return this;
    }
    setDiscounts(discounts) {
        this.discounts = discounts;
        return this;
    }
    setTaxAmount(amount) {
        this.taxAmount = amount;
        return this;
    }
    setShipmentAmount(amount) {
        this.shippingAmount = amount;
        return this;
    }
    getConsumer() {
        return this.consumer;
    }
    getBilling() {
        return this.billing;
    }
    getShipping() {
        return this.shipping;
    }
    getItems() {
        return this.items;
    }
    getDiscounts() {
        return this.discounts;
    }
    getTotalAmount() {
        return this.totalAmount;
    }
    getTaxAmount() {
        return this.taxAmount;
    }
    getShippingAmount() {
        return this.shippingAmount;
    }
    getReference() {
        return this.merchantReference;
    }
}
exports.OrderDetail = OrderDetail;
