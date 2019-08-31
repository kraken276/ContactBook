import { Component, OnInit } from '@angular/core';
import { Telephone } from '../app.types';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'change-telephone-component',
    templateUrl: './html/changeTelephones.component.html'
})

export class ChangeTelephoneComponent implements OnInit {
    telephones: Telephone[];

    constructor(private dataService: DataService, private router: Router) {
    }

    ngOnInit() {
        this.telephones = this.dataService.getSelectedContact().telephones;
    }

    Submit() {
        let exit: boolean = false;
        this.telephones.map(item => {
            console.log(item);
            let phoneNumber = item.phoneNumber;
            if (phoneNumber % 1 != 0 || phoneNumber / 10000000000 > 10 || phoneNumber / 10000000000 < 1) {
                exit = true;
                return;
            }
            this.dataService.editTelephones(item.id, phoneNumber, item.contactId);
        });
        if (exit)
            return;
        this.router.navigate([""]);
    }

    Cancel() {
        this.router.navigate([""]);
    }
}