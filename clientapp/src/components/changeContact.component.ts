import { Component, OnInit } from '@angular/core';
import { Contact } from '../app.types';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'change-contact-component',
    templateUrl: './html/changeContact.component.html'
})

export class ChangeContactComponent {
    contact: Contact;
    firstName: string;
    lastName: string;
    patronymic: string;
    address: string;

    constructor(private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.contact = this.dataService.getSelectedContact();
        console.log(this.contact);
    }

    Submit() {
        this.dataService.editContact(this.contact.id, this.firstName, this.lastName, this.patronymic, this.address);
        this.router.navigate([""]);
    }

    Cancel() {
        this.router.navigate([""]);
    }
}