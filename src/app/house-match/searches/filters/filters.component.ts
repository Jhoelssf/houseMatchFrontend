import { Component } from '@angular/core';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
    propertyType = [];
    filteredLocations = [];
    buySellOpts = [
        {
            name: 'Venta',
            value: 1,
        },
        {
            name: 'Alquiler',
            value: 2,
        },
    ];
    selectedType = null;
    locationValue = null;
    selectedOpt = 1;
    selected: string | undefined;

    priceRange: number[] = [50000, 600000];
    areaRange: number[] = [1000, 4000];

    dormValue = 0;

    increaseItems = [
        {
            title: 'Dormitorios',
            value: 3,
        },
        {
            title: 'Banos',
            value: 2,
        },
        {
            title: 'Cocheras',
            value: 2,
        },
    ];

    constructor() {}

    select(type: string) {
        this.selected = type;
    }
}
