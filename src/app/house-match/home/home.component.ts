import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    buySellOpts = ['Comprar', 'Alquilar'];
    propertyType = ['1', '2'];
    selectedType = null;
    selectedOpt = null;
    locationValue = null;
    filteredLocations = [];
    constructor() {}

    ngOnInit(): void {
        console.log('');
    }

    filterLocation(event: any) {
        // const filtered: any[] = [];
        // const query = event.query;
        // for (let i = 0; i < this.countries.length; i++) {
        //     const country = this.countries[i];
        //     if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        //         filtered.push(country);
        //     }
        // }
        // this.filteredCountries = filtered;
    }
}
