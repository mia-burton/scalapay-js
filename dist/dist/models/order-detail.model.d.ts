export var __esModule: boolean;
export var OrderDetail: typeof OrderDetail | undefined;
/**
 * Class OrderDetail
 *
 */
declare class OrderDetail {
    /**
     * The order detail to pass at scalpay
     * @param consumer Consumer - The consumer data
     * @param total Money - The amount to pay
     * @param reference string - Unique order reference from the merchant platform
     */
    constructor(consumer: any, total: any, reference: any);
    consumer: any;
    totalAmount: any;
    merchantReference: any;
    setBilling(contact: any): OrderDetail;
    billing: any;
    setShipping(contact: any): OrderDetail;
    shipping: any;
    setItems(items: any): OrderDetail;
    items: any;
    setDiscounts(discounts: any): OrderDetail;
    discounts: any;
    setTaxAmount(amount: any): OrderDetail;
    taxAmount: any;
    setShipmentAmount(amount: any): OrderDetail;
    shippingAmount: any;
    getConsumer(): any;
    getBilling(): any;
    getShipping(): any;
    getItems(): any;
    getDiscounts(): any;
    getTotalAmount(): any;
    getTaxAmount(): any;
    getShippingAmount(): any;
    getReference(): any;
}
export {};
