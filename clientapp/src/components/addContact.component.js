var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
var AddContactComponent = /** @class */ (function () {
    function AddContactComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    AddContactComponent.prototype.Submit = function () {
        if (typeof this.firstName == "undefined" || typeof this.lastName == "undefined" || typeof this.patronymic == "undefined" || typeof this.address == "undefined")
            return;
        this.dataService.addContact(this.firstName, this.lastName, this.patronymic, this.address);
        this.router.navigate([""]);
    };
    AddContactComponent.prototype.Cancel = function () {
        this.router.navigate([""]);
    };
    AddContactComponent = __decorate([
        Component({
            selector: 'add-contact-component',
            templateUrl: './html/addContact.component.html'
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], AddContactComponent);
    return AddContactComponent;
}());
export { AddContactComponent };
//# sourceMappingURL=addContact.component.js.map