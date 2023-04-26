import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Subject, takeUntil } from 'rxjs';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { Location, User, UserSecondLevel } from '../../api/houseMatch.api';
import { Product } from '../../demo/api/product';
import { CountryService } from '../../demo/service/country.service';
import { CustomerService } from '../../demo/service/customer.service';
import { ProductService } from '../../demo/service/product.service';
import { UserServiceApi } from './api/user-service.service';
import { IUserDialog } from './models/data-dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

interface expandedRows {
    [key: string]: boolean;
}

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [DialogService, MessageService],
    // providers: [MessageService, ConfirmationService],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit, OnDestroy {
    customers1: Customer[] = [];

    customers2: Customer[] = [];

    customers3: Customer[] = [];
    customerExample: number[] = [];

    selectedCustomers1: Customer[] = [];

    selectedCustomer: Customer = {};

    representatives: Representative[] = [];

    statuses: any[] = [];

    products: Product[] = [];

    rowGroupMetadata: any;

    expandedRows: expandedRows = {};

    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    idFrozen: boolean = false;

    loading: boolean = true;
    display: boolean = false;
    selectedCountryAdvanced: any[] = [];
    filteredCountries: any[] = [];
    countries: any[] = [];
    unsubscribe$: Subject<any> = new Subject();
    users: UserSecondLevel[] = [];
    locations: Location[] = [];
    ref: DynamicDialogRef = new DynamicDialogRef();

    @ViewChild('filter') filter!: ElementRef;

    constructor(
        private customerService: CustomerService,
        private productService: ProductService,
        private countryService: CountryService,
        private userServiceApi: UserServiceApi,
        private dialogService: DialogService
    ) {}
    ngOnDestroy(): void {
        this.unsubscribe$.next(null);
        this.unsubscribe$.complete();
    }

    ngOnInit() {
        this.userServiceApi.users$.subscribe((users) => {
            this.users = users;
        });
        this.userServiceApi.updateUser$.subscribe({
            next: () => {
                this.userServiceApi.getUsers();
            },
        });
        this.userServiceApi.createUser$.subscribe({
            next: () => {
                this.userServiceApi.getUsers();
            },
        });
        this.userServiceApi.deleteUser$.subscribe({
            next: () => {
                this.userServiceApi.getUsers();
            },
        });
        this.userServiceApi.locations$.subscribe({
            next: (locations) => {
                this.locations = locations ?? [];
            },
        });
        this.userServiceApi.getUsers();
        this.userServiceApi.locations();
        // Examples
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
        this.customerService.getCustomersLarge().then((customers) => {
            this.customers1 = customers;
            this.loading = false;

            this.customers1.forEach(
                // @ts-ignore
                (customer) => (customer.date = new Date(customer.date))
            );
        });
        this.customerService.getCustomersMedium().then((customers) => (this.customers2 = customers));
        this.customerService.getCustomersLarge().then((customers) => (this.customers3 = customers));
        let el = [];
        for (let i = 0; i < 40; i++) {
            el.push(i);
        }
        this.customerExample = el;
        this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'XuXue Feng', image: 'xuxuefeng.png' },
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' },
        ];
    }

    // onSort() {
    //     this.updateRowGroupMetaData();
    // }

    // updateRowGroupMetaData() {
    //     this.rowGroupMetadata = {};

    //     if (this.customers3) {
    //         for (let i = 0; i < this.customers3.length; i++) {
    //             const rowData = this.customers3[i];
    //             const representativeName = rowData?.representative?.name || '';

    //             if (i === 0) {
    //                 this.rowGroupMetadata[representativeName] = {
    //                     index: 0,
    //                     size: 1,
    //                 };
    //             } else {
    //                 const previousRowData = this.customers3[i - 1];
    //                 const previousRowGroup = previousRowData?.representative?.name;
    //                 if (representativeName === previousRowGroup) {
    //                     this.rowGroupMetadata[representativeName].size++;
    //                 } else {
    //                     this.rowGroupMetadata[representativeName] = {
    //                         index: i,
    //                         size: 1,
    //                     };
    //                 }
    //             }
    //         }
    //     }
    // }

    expandAll() {
        if (!this.isExpanded) {
            this.products.forEach((product) =>
                product && product.name ? (this.expandedRows[product.name] = true) : ''
            );
        } else {
            this.expandedRows = {};
        }
        this.isExpanded = !this.isExpanded;
    }

    formatCurrency(value: number) {
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }
    filterCountry(event: any) {
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

    onOpenDialogUser(userSecondLevel?: UserSecondLevel): void {
        const userDialogData: IUserDialog = {
            user: {
                id: userSecondLevel?.id,
                person_id: userSecondLevel?.person?.id,
                user: userSecondLevel?.user,
                password: userSecondLevel?.password,
                email: userSecondLevel?.email,
                theme: userSecondLevel?.theme,
            },
            location: this.locations?.find((l) => l.id === userSecondLevel?.person?.location_id),
            person: userSecondLevel?.person,
        };
        this.ref = this.dialogService.open(UserDialogComponent, {
            header: `${userSecondLevel ? 'Actualizar' : 'Crear'} usuario`,
            modal: true,
            width: '80vw',
            draggable: true,
            resizable: true,
            keepInViewport: true,
            contentStyle: { 'max-height': '70vh', overflow: 'auto' },
            baseZIndex: 10000,
            data: userDialogData,
        });
        // this.ref.onDestroy.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {});

        this.ref.onClose.pipe(takeUntil(this.unsubscribe$)).subscribe((message: string) => {
            if (message === 'success') {
            }
        });
    }
    onDeleteUser(user: User) {
        user.id && this.userServiceApi.deleteUser(user.id);
    }
}