import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../demo/service/country.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    countries: any[] = [];
    filteredCountries: any[] = [];
    buySellOpts = ['Comprar', 'Alquilar'];
    propertyType = ['Casa', 'Departamento'];
    selectedType = null;
    selectedOpt = null;
    locationValue = null;
    constructor(private countryService: CountryService) {}

    ngOnInit(): void {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
    }

    filterLocation(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        this.filteredCountries = filtered;
    }
}
