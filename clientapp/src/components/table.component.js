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
var TableComponent = /** @class */ (function () {
    function TableComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    TableComponent.prototype.ngOnInit = function () {
        this.contacts = this.dataService.getContacts();
    };
    TableComponent.prototype.changeContact = function (contact) {
        this.dataService.selectContact(contact);
        this.router.navigate(["changeContact"]);
    };
    TableComponent.prototype.addNumber = function (contact) {
        this.dataService.selectContact(contact);
        this.router.navigate(["addNumber"]);
    };
    TableComponent.prototype.changeNumbers = function (contact) {
        this.dataService.selectContact(contact);
        this.router.navigate(["changeNumbers"]);
    };
    TableComponent.prototype.addContact = function () {
        this.router.navigate(["addContact"]);
    };
    TableComponent = __decorate([
        Component({
            selector: 'table-component',
            templateUrl: './html/table.component.html'
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], TableComponent);
    return TableComponent;
}());
export { TableComponent };
//# sourceMappingURL=table.component.js.map