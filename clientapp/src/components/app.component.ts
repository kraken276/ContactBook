import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './html/app.component.html'
})
export class AppComponent {
    name: string = "Vasya";
    childAge: number = 24;
}