/**
 * Class Contact
 *
 */
export declare class Contact {
    private readonly name;
    private readonly line1;
    private line2;
    private readonly suburb;
    private state;
    private readonly postcode;
    private readonly countryCode;
    private phoneNumber;
    /**
     * Cosumern contact
     *
     * @param name string
     * @param line1  string
     * @param suburb  string
     * @param postcode  string
     * @param countryCode  string
     */
    constructor(name: string, line1: string, suburb: string, postcode: string, countryCode: string);
    setLine2(line2: string): Contact;
    setState(state: string): Contact;
    setPhoneNumber(number: string): Contact;
    getName(): string;
    getLine1(): string;
    getLine2(): string | null;
    getSuburb(): string;
    getState(): string | null;
    getPostcode(): string;
    getCountryCode(): string;
    getPhoneNumber(): string | null;
}
