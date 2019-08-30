var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { TableComponent } from './components/table.component';
import { AppComponent } from './components/app.component';
import { ChangeContactComponent } from './components/changeContact.component';
import { ChangeTelephoneComponent } from './components/changeTelephones.component';
import { AddContactComponent } from './components/addContact.component';
import { AddTelephoneComponent } from './components/addTelephone.component';
import { DataService } from './data.service';
var appRoutes = [
    { path: '', component: TableComponent },
    { path: 'changeContact', component: ChangeContactComponent },
    { path: 'changeNumbers', component: ChangeTelephoneComponent },
    { path: 'addContact', component: AddContactComponent },
    { path: 'addNumber', component: AddTelephoneComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
            declarations: [
                TableComponent,
                AppComponent,
                ChangeContactComponent,
                ChangeTelephoneComponent,
                AddContactComponent,
                AddTelephoneComponent
            ],
            bootstrap: [AppComponent],
            providers: [
                { provide: APP_BASE_HREF, useValue: "https://localhost:44364/" },
                DataService
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map