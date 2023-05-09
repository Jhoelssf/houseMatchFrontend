import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { TransactionThirdLevel } from '../../../api/houseMatch.api';
import { Product } from '../../../demo/api/product';
import { ProductService } from '../../../demo/service/product.service';
import { TransactionsApiService } from '../../../shared/services/transactions-api.service';

@Component({
    selector: 'app-searches-list-properties',
    templateUrl: './searches-list-properties.component.html',
    styleUrls: ['./searches-list-properties.component.scss'],
})
export class SearchesListPropertiesComponent implements OnInit {
    products: Product[] = [];
    transactions: TransactionThirdLevel[] = [];
    sortField: string = '';
    sortOrder: number = 0;
    sortOptions: SelectItem[] = [];

    constructor(private productService: ProductService, private transactionsApiService: TransactionsApiService) {}
    ngOnInit(): void {
        this.transactionsApiService.transactionsFilter$.subscribe((res) => {
            this.transactions = res;
        });
        this.productService.getProducts().then((data) => (this.products = data));
        this.sortOptions = [
            { label: 'Price High to Low', value: '!price' },
            { label: 'Price Low to High', value: 'price' },
        ];
    }

    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
    onFilter(dv: DataView, event: Event) {
        dv.filter((event.target as HTMLInputElement).value);
    }
}
