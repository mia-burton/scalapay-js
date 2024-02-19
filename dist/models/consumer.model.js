"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consumer = void 0;
/**
 * Class Consumer
 *
 */
class Consumer {
    /**
     * Consumer object
     *
     * @param name string - Name of consumer
     * @param surname string - Last name of consumer
     * @param email string - Email of consumer
     */
    constructor(name, surname, email) {
        this.givenNames = name;
        this.email = email;
        this.surname = surname;
    }
    setPhoneNumber(number) {
        this.phoneNumber = number;
        return this;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    getGivenNames() {
        return this.givenNames;
    }
    getSurname() {
        return this.surname;
    }
    getEmail() {
        return this.email;
    }
}
exports.Consumer = Consumer;
