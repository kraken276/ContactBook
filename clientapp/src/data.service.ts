import { Contact, Telephone } from './app.types';

export class DataService {

    private contacts: Contact[];
    private selectedContact: Contact;

    constructor() {
        this.contacts = [];
        this.getContactsFromDb();
    }

    selectContact(contact: Contact) {
        this.selectedContact = contact;
    }

    getSelectedContact(): Contact {
        return this.selectedContact;
    }

    getContacts(): Contact[] {
        return this.contacts;
    }

    getContactsFromDb() {
        let _type: string = 'GET';
        let _url: string = 'Contact/GetContacts';
        let self = this;
        $.ajax({
            type: _type,
            url: _url,
            success: function (response) {
                response.map((item: { id: number; firstName: string; lastName: string; patronymic: string; address: string; }) => {
                    let contact: Contact = new Contact(item.id, item.firstName, item.lastName, item.patronymic, item.address);
                    self.getTelephones(contact);
                })
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    getTelephones(contact: Contact) {
        let _type: string = 'GET';
        let _url: string = 'Telephone/GetTelephones?contactId=' + contact.id;
        let self = this;
        $.ajax({
            type: _type,
            url: _url,
            success: function (response) {
                response.map((item: { id: number, phoneNumber: number, contactId: number }) => {
                    let telephone: Telephone = new Telephone(item.id, item.phoneNumber, item.contactId);
                    contact.telephones.push(telephone);
                });
                self.contacts.push(contact);
            },
            error: function (error) {
                console.log(error);
            }
        })
    };

    addContact(firstName: string, lastName: string, patronymic: string, address: string) {
        let _type: string = 'GET';
        let _url: string = 'Contact/Create?firstName=' + firstName + ' &lastName=' + lastName
            + '&patronymic=' + patronymic + '&address=' + address;
        let self = this;
        $.ajax({
            type: _type,
            url: _url,
            success: function (response) {
                let contact: Contact = new Contact(response, firstName, lastName, patronymic, address);
                self.contacts.push(contact);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    editContact(id: number, firstName: string, lastName: string, patronymic: string, address: string) {
        let _type: string = 'GET';
        let _url: string = 'Contact/Edit?id=' + id + '&firstName=' + firstName + '&lastName=' + lastName
            + '&patronymic=' + patronymic + '&address=' + address;
        let self = this;
        $.ajax({
            type: _type,
            url: _url,
            success: function () {
                let contact = self.getContacts().find(x => x.id == id);
                if (typeof firstName != "undefined")
                    contact.firstName = firstName;
                if (typeof lastName != "undefined")
                    contact.lastName = lastName;
                if (typeof patronymic != "undefined")
                    contact.patronymic = patronymic;
                if (typeof address != "undefined")
                    contact.address = address;
                self.contacts[self.contacts.indexOf(self.contacts.find((x: { id: number; }) => x.id == id))] = contact;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    addTelephone(phoneNumber: number, contactId: number) {
        let _type: string = 'GET';
        let _url: string = 'Telephone/Create?phoneNumber=' + phoneNumber + '&contactId=' + contactId;
        let self = this;
        $.ajax({
            type: _type,
            url: _url,
            success: function (response) {
                let telephone: Telephone = new Telephone(response, phoneNumber, contactId)
                self.contacts.find((x: { id: number; }) => x.id == contactId).telephones.push(telephone);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    editTelephones(id: number, phoneNumber: number, contactId: number) {
        let _type: string = 'GET';
        let _url: string = 'Contact/Edit?id=' + id + '&phoneNumber=' + phoneNumber;
        let self = this;
        $.ajax({
            type: _type,
            url: _url,
            success: function () {
                let telephone: Telephone = new Telephone(id, phoneNumber, contactId);
                let finded = self.contacts.find((x: { id: number }) => x.id == contactId);
                finded.telephones[finded.telephones.indexOf(finded.telephones.find((x: { id: number; }) => x.id == id))] = telephone;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}
