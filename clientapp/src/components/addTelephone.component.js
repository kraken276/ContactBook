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
var AddTelephoneComponent = /** @class */ (function () {
    function AddTelephoneComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    AddTelephoneComponent.prototype.Submit = function () {
        var phoneNumber = +this.phoneNumber;
        if (phoneNumber % 1 != 0 || phoneNumber / 10000000000 > 10 || phoneNumber / 10000000000 < 1)
            return;
        this.dataService.addTelephone(this.phoneNumber, this.dataService.getSelectedContact().id);
        this.router.navigate([""]);
    };
    AddTelephoneComponent.prototype.Cancel = function () {
        this.router.navigate([""]);
    };
    AddTelephoneComponent = __decorate([
        Component({
            selector: 'add-telephone-component',
            templateUrl: './html/addTelephone.component.html'
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], AddTelephoneComponent);
    return AddTelephoneComponent;
}());
export { AddTelephoneComponent };
//# sourceMappingURL=addTelephone.component.js.map