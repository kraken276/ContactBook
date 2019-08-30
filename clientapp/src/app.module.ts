import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { TableComponent } from './components/table.component';
import { AppComponent } from './components/app.component';
import { ChangeContactComponent } from './components/changeContact.component';
import { ChangeTelephoneComponent } from './components/changeTelephones.component';
import { AddContactComponent } from './components/addContact.component';
import { AddTelephoneComponent } from './components/addTelephone.component';
import { DataService } from './data.service';

const appRoutes: Routes = [
    { path: '', component: TableComponent },
    { path: 'changeContact', component: ChangeContactComponent },
    { path: 'changeNumbers', component: ChangeTelephoneComponent },
    { path: 'addContact', component: AddContactComponent },
    { path: 'addNumber', component: AddTelephoneComponent }
];

@NgModule({
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

export class AppModule { }