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
var ChangeContactComponent = /** @class */ (function () {
    function ChangeContactComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    ChangeContactComponent.prototype.ngOnInit = function () {
        this.contact = this.dataService.getSelectedContact();
        console.log(this.contact);
    };
    ChangeContactComponent.prototype.Submit = function () {
        this.dataService.editContact(this.contact.id, this.firstName, this.lastName, this.patronymic, this.address);
        this.router.navigate([""]);
    };
    ChangeContactComponent.prototype.Cancel = function () {
        this.router.navigate([""]);
    };
    ChangeContactComponent = __decorate([
        Component({
            selector: 'change-contact-component',
            templateUrl: './html/changeContact.component.html'
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], ChangeContactComponent);
    return ChangeContactComponent;
}());
export { ChangeContactComponent };
//# sourceMappingURL=changeContact.component.js.map