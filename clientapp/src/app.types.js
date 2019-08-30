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
        var numb = this.phoneNumber;
        var str = "+";
        str += Math.trunc(numb / 10000000000).toString() + "(";
        numb %= 10000000000;
        str += Math.trunc(numb / 10000000).toString() + ")";
        numb %= 10000000;
        str += Math.trunc(numb / 10000).toString() + "-";
        numb %= 10000;
        str += Math.trunc(numb / 100).toString() + "-" + (numb % 100).toString();
        return str;
    };
    return Telephone;
}());
export { Telephone };
//# sourceMappingURL=app.types.js.map