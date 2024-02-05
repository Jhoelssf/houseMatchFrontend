import { Component } from '@angular/core';

@Component({
    selector: 'app-searches-main-page',
    templateUrl: './searches-main-page.component.html',
    styleUrls: ['./searches-main-page.component.scss'],
})
export class SearchesMainPageComponent {
    comparing = false;
    constructor() {}

    onCompare(e: any) {
        console.log('Comparing');
        this.comparing = !this.comparing;
    }
}
