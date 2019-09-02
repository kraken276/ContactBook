
export class Contact {
    id: number;
    firstName: string;
    lastName: string;
    patronymic: string;
    address: string;
    telephones: Telephone[];

    constructor(id: number, firstName: string, lastName: string, patronymic: string, address: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;
        this.address = address;
        this.telephones = [];
    }
}

export class Telephone {
    id: number;
    phoneNumber: string;
    contactId: number

    constructor(id: number, phoneNumber: string, contactId: number) {
        this.id = id;
        this.phoneNumber = phoneNumber;
        this.contactId = contactId;
    }

    Str(): string {
        return "+" + this.phoneNumber.toString().substr(0, 1) + "("
            + this.phoneNumber.toString().substr(1, 3) + ")" + this.phoneNumber.toString().substr(4, 3) + "-"
            + this.phoneNumber.toString().substr(7, 2) + "-" + this.phoneNumber.toString().substr(9, 2);
    }
}