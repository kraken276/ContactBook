import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'add-telephone-component',
    templateUrl: './html/addTelephone.component.html'
})

export class AddTelephoneComponent {
    phoneNumber: number;

    constructor(private dataService: DataService, private router: Router) { }

    Submit() {
        let phoneNumber = this.phoneNumber;
        if (phoneNumber % 1 != 0 || phoneNumber / 10000000000 > 10 || phoneNumber /10000000000 < 1)
            return;
        this.dataService.addTelephone(phoneNumber, this.dataService.getSelectedContact().id);
        this.router.navigate([""]);
    }

    Cancel() {
        this.router.navigate([""]);
    }
}