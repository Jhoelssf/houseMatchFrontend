import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Subject, takeUntil } from 'rxjs';
import { Customer, Representative } from '../../demo/api/customer';
import { Product } from '../../demo/api/product';
import { CustomerService } from '../../demo/service/customer.service';
import { ProductService } from '../../demo/service/product.service';
import { RoleDialogComponent } from './role-dialog/role-dialog.component';
interface expandedRows {
    [key: string]: boolean;
}

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.scss'],
    providers: [DialogService, MessageService],
})
export class RolesComponent implements OnInit {
    customers1: Customer[] = [];

    customers2: Customer[] = [];

    customers3: Customer[] = [];

    selectedCustomers1: Customer[] = [];

    selectedCustomer: Customer = {};

    representatives: Representative[] = [];

    statuses: any[] = [];

    products: Product[] = [];

    rowGroupMetadata: any;

    expandedRows: expandedRows = {};

    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    idFrozen: boolean = true;

    loading: boolean = true;

    display: boolean = false;
    ref: DynamicDialogRef = new DynamicDialogRef();
    unsubscribe$: Subject<any> = new Subject<any>();

    @ViewChild('filter') filter!: ElementRef;

    constructor(
        private customerService: CustomerService,
        private productService: ProductService,
        private dialogService: DialogService
    ) {}

    ngOnInit() {
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

    onSort() {
        this.updateRowGroupMetaData();
    }

    onOpenDialogRole(rol?: any): void {
        this.ref = this.dialogService.open(RoleDialogComponent, {
            header: `${rol ? 'Actualizar' : 'Crear'} rol`,
            modal: true,
            width: '80vw',
            draggable: true,
            resizable: true,
            keepInViewport: true,
            contentStyle: { 'max-height': '500px', overflow: 'auto' },
            baseZIndex: 10000,
        });
        // this.ref.onDestroy.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {});

        this.ref.onClose.pipe(takeUntil(this.unsubscribe$)).subscribe((message: string) => {
            if (message === 'success') {
                console.log('algo');
            }
        });
    }

    updateRowGroupMetaData() {
        this.rowGroupMetadata = {};

        if (this.customers3) {
            for (let i = 0; i < this.customers3.length; i++) {
                const rowData = this.customers3[i];
                const representativeName = rowData?.representative?.name || '';

                if (i === 0) {
                    this.rowGroupMetadata[representativeName] = {
                        index: 0,
                        size: 1,
                    };
                } else {
                    const previousRowData = this.customers3[i - 1];
                    const previousRowGroup = previousRowData?.representative?.name;
                    if (representativeName === previousRowGroup) {
                        this.rowGroupMetadata[representativeName].size++;
                    } else {
                        this.rowGroupMetadata[representativeName] = {
                            index: i,
                            size: 1,
                        };
                    }
                }
            }
        }
    }

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
}