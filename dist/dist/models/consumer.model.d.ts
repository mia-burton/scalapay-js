export var __esModule: boolean;
export var Consumer: typeof Consumer | undefined;
/**
 * Class Consumer
 *
 */
declare class Consumer {
    /**
     * Consumer object
     *
     * @param name string - Name of consumer
     * @param surname string - Last name of consumer
     * @param email string - Email of consumer
     */
    constructor(name: any, surname: any, email: any);
    givenNames: any;
    email: any;
    surname: any;
    setPhoneNumber(number: any): Consumer;
    phoneNumber: any;
    getPhoneNumber(): any;
    getGivenNames(): any;
    getSurname(): any;
    getEmail(): any;
}
export {};
