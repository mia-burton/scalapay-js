"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
/**
 * Class Contact
 *
 */
class Contact {
    /**
     * Cosumern contact
     *
     * @param name string
     * @param line1  string
     * @param suburb  string
     * @param postcode  string
     * @param countryCode  string
     */
    constructor(name, line1, suburb, postcode, countryCode) {
        this.name = name;
        this.line1 = line1;
        this.suburb = suburb;
        this.postcode = postcode;
        this.countryCode = countryCode;
    }
    setLine2(line2) {
        this.line2 = line2;
        return this;
    }
    setState(state) {
        this.state = state;
        return this;
    }
    setPhoneNumber(number) {
        this.phoneNumber = number;
        return this;
    }
    getName() {
        return this.name;
    }
    getLine1() {
        return this.line1;
    }
    getLine2() {
        return this.line2;
    }
    getSuburb() {
        return this.suburb;
    }
    getState() {
        return this.state;
    }
    getPostcode() {
        return this.postcode;
    }
    getCountryCode() {
        return this.countryCode;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
}
exports.Contact = Contact;
