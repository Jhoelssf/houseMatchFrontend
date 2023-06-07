import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TransactionFilterInput } from '../../../shared/services/api.model';
import { EPropertyType, ETransactionType } from '../../../shared/services/transaction.model';
import { TransactionsApiService } from '../../../shared/services/transactions-api.service';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
    formTransaction: FormGroup = new FormGroup({
        typeProperty: new FormControl(EPropertyType.HOUSE),
        rooms: new FormControl(1),
        bathrooms: new FormControl(1),
        minArea: new FormControl(0),
        maxArea: new FormControl(999),
        typeTransaction: new FormControl(ETransactionType.SALE),
        maxCost: new FormControl(999),
        minCost: new FormControl(0),
        country: new FormControl('1'),
        province: new FormControl('1'),
        district: new FormControl('1'),
    });
    propertyType = [];
    filteredFilters: any[] = [];
    filters: any[] = [
        {
            id: 1,
            name: 'Peru',
        },
        {
            id: 2,
            name: 'Argentina',
        },
        {
            id: 3,
            name: 'Chile',
        },
    ];
    filteredLocations: any[] = [];
    locations = [
        {
            id: 1,
            name: 'Wanchaq',
        },
        {
            id: 2,
            name: 'Santiago',
        },
        {
            id: 3,
            name: 'San Sebastian',
        },
    ];
    buySellOpts = [
        {
            id: ETransactionType.SALE,
            label: 'Comprar',
        },
        {
            id: ETransactionType.RENT,
            label: 'Alquilar',
        },
        {
            id: ETransactionType.ANTICHRESIS,
            label: 'Anticresis',
        },
    ];
    filteredOrder: any[] = [];
    orders = [
        {
            id: 1,
            name: 'Más baratos',
        },
        {
            id: 2,
            name: 'Más caros',
        },
        {
            id: 3,
            name: 'Más recientes',
        },
        {
            id: 4,
            name: 'Más antiguos',
        },
        {
            id: 5,
            name: 'Más visitados',
        },
    ];
    selectedType = null;
    locationValue = null;
    selectedOpt = null;
    typePropertyOpts = EPropertyType;

    get typeProperty(): FormControl {
        return this.formTransaction.controls['typeProperty'] as FormControl;
    }
    get rooms(): FormControl {
        return this.formTransaction.controls['rooms'] as FormControl;
    }
    get bathrooms(): FormControl {
        return this.formTransaction.controls['bathrooms'] as FormControl;
    }
    get minArea(): FormControl {
        return this.formTransaction.controls['minArea'] as FormControl;
    }
    get maxArea(): FormControl {
        return this.formTransaction.controls['maxArea'] as FormControl;
    }
    get typeTransaction(): FormControl {
        return this.formTransaction.controls['typeTransaction'] as FormControl;
    }
    get maxCost(): FormControl {
        return this.formTransaction.controls['maxCost'] as FormControl;
    }
    get minCost(): FormControl {
        return this.formTransaction.controls['minCost'] as FormControl;
    }
    get country(): FormControl {
        return this.formTransaction.controls['country'] as FormControl;
    }
    get province(): FormControl {
        return this.formTransaction.controls['province'] as FormControl;
    }
    get district(): FormControl {
        return this.formTransaction.controls['district'] as FormControl;
    }
    constructor(private transactionsApiService: TransactionsApiService) {}

    ngOnInit(): void {
        const transactionFilterInput: TransactionFilterInput = this.formTransaction.value;
        // this.typeProperty.setValue(EPropertyType.HOUSE);
        // const transactionFilterInput: TransactionFilterInput = {
        //     typeProperty: ,
        //     rooms: ,
        //     bathrooms: ,
        //     minArea: ,
        //     maxArea: ,
        //     typeTransaction: ,
        //     maxCost: ,
        //     minCost: ,
        //     country: ,
        //     province: ,
        //     district: ,
        // }
        this.transactionsApiService.getTransactionsFilter(transactionFilterInput);
    }

    searchLocations(event: any) {
        this.filteredLocations = this.normalization(event, this.locations);
    }
    searchFilters(event: any) {
        this.filteredFilters = this.normalization(event, this.filters);
    }
    searchOrders(event: any) {
        this.filteredOrder = this.normalization(event, this.orders);
    }

    normalization(event: any, array: any[]) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < array.length; i++) {
            const country = array[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }

    selectPropertyType(type: string) {
        this.typeProperty.setValue(type);
    }
}
