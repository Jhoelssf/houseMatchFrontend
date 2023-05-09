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
        rooms: new FormControl(123),
        bathrooms: new FormControl(123),
        minArea: new FormControl(0),
        maxArea: new FormControl(124),
        typeTransaction: new FormControl(ETransactionType.SALE),
        maxCost: new FormControl(124),
        minCost: new FormControl(0),
        country: new FormControl('123'),
        province: new FormControl('123'),
        district: new FormControl('123'),
    });
    propertyType = [];
    filteredLocations = [];
    buySellOpts = ['Comprar', 'Alquilar'];
    selectedType = null;
    locationValue = null;
    selectedOpt = null;

    constructor(private transactionsApiService: TransactionsApiService) {}

    ngOnInit(): void {
        const transactionFilterInput: TransactionFilterInput = this.formTransaction.value;
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
}
