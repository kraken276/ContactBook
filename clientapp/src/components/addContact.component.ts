import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'add-contact-component',
    templateUrl: './html/addContact.component.html'
})

export class AddContactComponent {
    firstName: string;
    lastName: string;
    patronymic: string;
    address: string;

    constructor(private dataService: DataService, private router: Router) { }

    Submit() {
        if (typeof this.firstName == "undefined" || typeof this.lastName == "undefined" || typeof this.patronymic == "undefined" || typeof this.address == "undefined")
            return;
        let letters = /^[A-Za-z]+$/;
        if (!this.firstName.match(letters) || !this.lastName.match(letters) || !this.patronymic.match(letters))
            return;
        this.dataService.addContact(this.firstName, this.lastName, this.patronymic, this.address);
        this.router.navigate([""]);
    }

    Cancel() {
        this.router.navigate([""]);
    }
}