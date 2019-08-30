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
var ChangeTelephoneComponent = /** @class */ (function () {
    function ChangeTelephoneComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    ChangeTelephoneComponent.prototype.ngOnInit = function () {
        this.telephones = this.dataService.getSelectedContact().telephones;
    };
    ChangeTelephoneComponent.prototype.Submit = function () {
        var _this = this;
        var exit;
        this.telephones.map(function (item) {
            console.log(item);
            var phoneNumber = item.phoneNumber;
            if (phoneNumber % 1 != 0 || phoneNumber / 10000000000 > 10 || phoneNumber / 10000000000 < 1) {
                exit = true;
                return;
            }
            _this.dataService.editTelephones(item.id, phoneNumber, item.contactId);
        });
        if (exit)
            return;
        this.router.navigate([""]);
    };
    ChangeTelephoneComponent.prototype.Cancel = function () {
        this.router.navigate([""]);
    };
    ChangeTelephoneComponent = __decorate([
        Component({
            selector: 'change-telephone-component',
            templateUrl: './html/changeTelephones.component.html'
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], ChangeTelephoneComponent);
    return ChangeTelephoneComponent;
}());
export { ChangeTelephoneComponent };
//# sourceMappingURL=changeTelephones.component.js.map