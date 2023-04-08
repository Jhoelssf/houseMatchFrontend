import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { ViewInput } from '../../../api/houseMatch.api';
import { ViewsServiceApi } from '../api/api-views.service';
import { IAddView } from '../models/view.model';

@Component({
    selector: 'app-view-dialog',
    templateUrl: './view-dialog.component.html',
    styleUrls: ['./view-dialog.component.scss'],
})
export class ViewDialogComponent implements OnInit, OnDestroy {
    viewData: IAddView;
    unsubscribe$: Subject<any> = new Subject<any>();
    formView: FormGroup = new FormGroup({
        name: new FormControl(null),
        description: new FormControl(null),
        url: new FormControl(null),
        // order: new FormControl(null),
        icon: new FormControl(null),
        module_id: new FormControl(null),
    });
    get name(): FormControl {
        return this.formView.get('name') as FormControl;
    }
    get description(): FormControl {
        return this.formView.get('description') as FormControl;
    }
    get icon(): FormControl {
        return this.formView.get('icon') as FormControl;
    }
    get url(): FormControl {
        return this.formView.get('url') as FormControl;
    }
    get moduleId(): FormControl {
        return this.formView.get('module_id') as FormControl;
    }
    constructor(
        public dynamicDialogRef: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private viewServiceApi: ViewsServiceApi
    ) {
        this.viewData = config?.data as IAddView;
    }
    ngOnDestroy(): void {
        this.unsubscribe$.next(null);
        this.unsubscribe$.complete();
    }

    ngOnInit(): void {
        this.moduleId.setValue(this.viewData.moduleId);
        if (this.viewData.view) {
            this.formView.patchValue({
                name: this.viewData.view.name,
                description: this.viewData.view.description,
                url: this.viewData.view.url,
                icon: this.viewData.view.icon,
            });
        }
        this.viewServiceApi.createView$.pipe(takeUntil(this.unsubscribe$)).subscribe((createdId) => {
            this.dynamicDialogRef.close('success');
        });
        this.viewServiceApi.updateView$.pipe(takeUntil(this.unsubscribe$)).subscribe((createdId) => {
            this.dynamicDialogRef.close('success');
        });
    }
    onCloseDialog() {
        this.dynamicDialogRef.destroy();
    }

    onSaveView() {
        const body: ViewInput = this.formView.value;
        if (this.viewData.view) {
            this.viewServiceApi.updateView(this.moduleId.value, body);
        } else {
            this.viewServiceApi.createView(body);
        }
    }
}
