import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, forkJoin, takeUntil } from 'rxjs';
import { Property, TransactionInput } from '../../api/houseMatch.api';
import { ECurrency, ETransactionType } from '../../shared/services/transaction.model';
import { TransactionsApiService } from '../../shared/services/transactions-api.service';
import { PropertyApiService } from './api/property-api.service';
import { PropertyDialogComponent } from './property-dialog/property-dialog.component';

@Component({
    selector: 'app-properties',
    templateUrl: './properties.component.html',
    styleUrls: ['./properties.component.scss'],
    providers: [DialogService, MessageService],
})
export class PropertiesComponent implements OnInit, OnDestroy {
    noSellingProperties: Property[] = [];
    currentSellingProperties: Property[] = [];
    visibleSideBar!: boolean;
    properties: Property[] = [];
    ref: DynamicDialogRef = new DynamicDialogRef();
    unsubscribe$ = new Subject();
    constructor(
        private propertyApiService: PropertyApiService,
        private dialogService: DialogService,
        private transactionApi: TransactionsApiService
    ) {}
    ngOnDestroy(): void {
        this.unsubscribe$.next(null);
        this.unsubscribe$.complete();
    }

    ngOnInit(): void {
        this.propertyApiService.getProperties();
        this.propertyApiService.properties$.pipe(takeUntil(this.unsubscribe$)).subscribe((res) => {
            this.properties = res ?? [];
            if (this.properties) {
                this.noSellingProperties = this.properties.map((cp) => ({ ...cp }));
            }
        });
        this.propertyApiService.createProperty$.pipe(takeUntil(this.unsubscribe$)).subscribe((res) => {
            this.propertyApiService.getProperties();
        });
    }
    onOpenDialogProperty(property?: Property) {
        this.ref = this.dialogService.open(PropertyDialogComponent, {
            header: `${property ? 'Actualizar' : 'Crear'} propiedad`,
            modal: true,
            width: '70vw',
            draggable: true,
            resizable: true,
            keepInViewport: true,
            contentStyle: { 'max-height': '500px', overflow: 'auto' },
            baseZIndex: 10000,
            data: property,
        });
        this.ref.onClose.pipe(takeUntil(this.unsubscribe$)).subscribe((message: string) => {
            if (message === 'success') {
            }
        });
    }
    onDeleteproperty(property: Property) {}
    onMoveToTarget(ev: any) {
        const sources = ev?.items?.map((curItem: Property) => {
            const transaction: TransactionInput = {
                property_id: curItem.id,
                cost: 4,
                currency: ECurrency.SOLES,
                date_vip: new Date().toISOString(),
                date_post: new Date().toISOString(),
                date_update: new Date().toISOString(),
                available: true,
                type: ETransactionType.SALE,
                date_start: new Date().toISOString(),
                date_end: new Date().toISOString(),
            };
            return this.transactionApi.createTransactionObs(transaction);
        });
        forkJoin(sources).subscribe((curSource) => {
            console.log(curSource);
        });
    }
}
