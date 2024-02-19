/**
 * Class Consumer
 *
 */
export declare class Consumer {
    private readonly givenNames;
    private readonly surname;
    private readonly email;
    private phoneNumber;
    /**
     * Consumer object
     *
     * @param name string - Name of consumer
     * @param surname string - Last name of consumer
     * @param email string - Email of consumer
     */
    constructor(name: string, surname: string, email: string);
    setPhoneNumber(number: string): Consumer;
    getPhoneNumber(): string;
    getGivenNames(): string;
    getSurname(): string;
    getEmail(): string;
}
