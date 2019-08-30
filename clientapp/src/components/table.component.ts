import { Component, OnInit } from '@angular/core';
import { Contact, Telephone } from './../app.types';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'table-component',
    templateUrl: './html/table.component.html'
})

export class TableComponent implements OnInit {
    contacts: Contact[];

    constructor(private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.contacts = this.dataService.getContacts();
    }

    changeContact(contact: Contact) {
        this.dataService.selectContact(contact);
        this.router.navigate(["changeContact"]);
    }

    addNumber(contact: Contact) {
        this.dataService.selectContact(contact);
        this.router.navigate(["addNumber"]);
    }

    changeNumbers(contact: Contact) {
        this.dataService.selectContact(contact);
        this.router.navigate(["changeNumbers"]);
    }

    addContact() {
        this.router.navigate(["addContact"]);
    }
}

