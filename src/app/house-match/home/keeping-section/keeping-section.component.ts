import { Component } from '@angular/core';

@Component({
    selector: 'app-keeping-section',
    templateUrl: './keeping-section.component.html',
    styleUrls: ['./keeping-section.component.scss'],
})
export class KeepingSectionComponent {
    items: any[] = [
        {
            title: 'BUSCA',
            url: 'assets/layout/images/house-match-home/1-search-g.gif',
        },
        {
            title: 'ENCUENTRA',
            url: 'assets/layout/images/house-match-home/2-encuentra-g.gif',
        },
        {
            title: 'COMPRA',
            url: 'assets/layout/images/house-match-home/3-radio-g.gif',
        },
        {
            title: 'DISFRUTA',
            url: 'assets/layout/images/house-match-home/4-house-g.gif',
        },
    ];

    constructor() {}
}
