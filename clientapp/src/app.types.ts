
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
    phoneNumber: number;
    contactId: number

    constructor(id: number, phoneNumber: number, contactId: number) {
        this.id = id;
        this.phoneNumber = phoneNumber;
        this.contactId = contactId;
    }

    Str(): string {
        let numb = this.phoneNumber;
        let str = "+";
        str += Math.trunc(numb / 10000000000).toString() + "(";
        numb %= 10000000000;
        str += Math.trunc(numb / 10000000).toString() + ")";
        numb %= 10000000;
        str += Math.trunc(numb / 10000).toString() + "-";
        numb %= 10000;
        str += Math.trunc(numb / 100).toString() + "-" + (numb % 100).toString();
        return str;
    }
}