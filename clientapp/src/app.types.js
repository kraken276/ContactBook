var Contact = /** @class */ (function () {
    function Contact(id, firstName, lastName, patronymic, address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;
        this.address = address;
        this.telephones = [];
    }
    return Contact;
}());
export { Contact };
var Telephone = /** @class */ (function () {
    function Telephone(id, phoneNumber, contactId) {
        this.id = id;
        this.phoneNumber = phoneNumber;
        this.contactId = contactId;
    }
    Telephone.prototype.Str = function () {
        return "+" + this.phoneNumber.toString().substr(0, 1) + "("
            + this.phoneNumber.toString().substr(1, 3) + ")" + this.phoneNumber.toString().substr(4, 3) + "-"
            + this.phoneNumber.toString().substr(7, 2) + "-" + this.phoneNumber.toString().substr(9, 2);
    };
    return Telephone;
}());
export { Telephone };
//# sourceMappingURL=app.types.js.map