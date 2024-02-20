export var __esModule: boolean;
export var Contact: typeof Contact | undefined;
/**
 * Class Contact
 *
 */
declare class Contact {
    /**
     * Cosumern contact
     *
     * @param name string
     * @param line1  string
     * @param suburb  string
     * @param postcode  string
     * @param countryCode  string
     */
    constructor(name: any, line1: any, suburb: any, postcode: any, countryCode: any);
    name: any;
    line1: any;
    suburb: any;
    postcode: any;
    countryCode: any;
    setLine2(line2: any): Contact;
    line2: any;
    setState(state: any): Contact;
    state: any;
    setPhoneNumber(number: any): Contact;
    phoneNumber: any;
    getName(): any;
    getLine1(): any;
    getLine2(): any;
    getSuburb(): any;
    getState(): any;
    getPostcode(): any;
    getCountryCode(): any;
    getPhoneNumber(): any;
}
export {};
