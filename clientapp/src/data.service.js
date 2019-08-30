import { Contact, Telephone } from './app.types';
var DataService = /** @class */ (function () {
    function DataService() {
        this.contacts = [];
        this.getContactsFromDb();
    }
    DataService.prototype.selectContact = function (contact) {
        this.selectedContact = contact;
    };
    DataService.prototype.getSelectedContact = function () {
        return this.selectedContact;
    };
    DataService.prototype.getContacts = function () {
        return this.contacts;
    };
    DataService.prototype.getContactsFromDb = function () {
        var _type = 'GET';
        var _url = 'Contact/GetContacts';
        var self = this;
        $.ajax({
            type: _type,
            url: _url,
            success: function (response) {
                response.map(function (item) {
                    var contact = new Contact(item.id, item.firstName, item.lastName, item.patronymic, item.address);
                    self.getTelephones(contact);
                });
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    DataService.prototype.getTelephones = function (contact) {
        var _type = 'GET';
        var _url = 'Telephone/GetTelephones?contactId=' + contact.id;
        var self = this;
        $.ajax({
            type: _type,
            url: _url,
            success: function (response) {
                response.map(function (item) {
                    var telephone = new Telephone(item.id, item.phoneNumber, item.contactId);
                    contact.telephones.push(telephone);
                });
                self.contacts.push(contact);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    ;
    DataService.prototype.addContact = function (firstName, lastName, patronymic, address) {
        var _type = 'GET';
        var _url = 'Contact/Create?firstName=' + firstName + ' &lastName=' + lastName
            + '&patronymic=' + patronymic + '&address=' + address;
        var self = this;
        $.ajax({
            type: _type,
            url: _url,
            success: function (response) {
                var contact = new Contact(response, firstName, lastName, patronymic, address);
                self.contacts.push(contact);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    DataService.prototype.editContact = function (id, firstName, lastName, patronymic, address) {
        var _type = 'GET';
        var _url = 'Contact/Edit?id=' + id + '&firstName=' + firstName + '&lastName=' + lastName
            + '&patronymic=' + patronymic + '&address=' + address;
        var self = this;
        $.ajax({
            type: _type,
            url: _url,
            success: function () {
                var contact = self.getContacts().find(function (x) { return x.id == id; });
                if (typeof firstName != "undefined")
                    contact.firstName = firstName;
                if (typeof lastName != "undefined")
                    contact.lastName = lastName;
                if (typeof patronymic != "undefined")
                    contact.patronymic = patronymic;
                if (typeof address != "undefined")
                    contact.address = address;
                self.contacts[self.contacts.indexOf(self.contacts.find(function (x) { return x.id == id; }))] = contact;
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    DataService.prototype.addTelephone = function (phoneNumber, contactId) {
        var _type = 'GET';
        var _url = 'Telephone/Create?phoneNumber=' + phoneNumber + '&contactId=' + contactId;
        var self = this;
        $.ajax({
            type: _type,
            url: _url,
            success: function (response) {
                var telephone = new Telephone(response, phoneNumber, contactId);
                self.contacts.find(function (x) { return x.id == contactId; }).telephones.push(telephone);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    DataService.prototype.editTelephones = function (id, phoneNumber, contactId) {
        var _type = 'GET';
        var _url = 'Contact/Edit?id=' + id + '&phoneNumber=' + phoneNumber;
        var self = this;
        $.ajax({
            type: _type,
            url: _url,
            success: function () {
                var telephone = new Telephone(id, phoneNumber, contactId);
                var finded = self.contacts.find(function (x) { return x.id == contactId; });
                finded.telephones[finded.telephones.indexOf(finded.telephones.find(function (x) { return x.id == id; }))] = telephone;
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map