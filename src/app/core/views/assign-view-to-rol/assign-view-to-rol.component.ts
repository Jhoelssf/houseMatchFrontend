import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RoleViewInput } from '../../../api/houseMatch.api';
import { ViewsServiceApi } from '../api/api-views.service';
import { IAssignView } from '../models/view.model';

@Component({
    selector: 'app-assign-view-to-rol',
    templateUrl: './assign-view-to-rol.component.html',
    styleUrls: ['./assign-view-to-rol.component.scss'],
})
export class AssignViewToRolComponent implements OnInit {
    assignViewForm: FormGroup = new FormGroup({
        unassignedView: new FormControl(null),
        order: new FormControl(null),
        position: new FormControl(null),
    });
    assignViewData: IAssignView;
    constructor(
        public dynamicDialogRef: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private viewsServiceApi: ViewsServiceApi
    ) {
        this.assignViewData = config.data as IAssignView;
    }

    ngOnInit(): void {
        console.log();
    }

    onAssignViewToRol() {
        const body: RoleViewInput = {
            role_id: this.assignViewData.rolId,
            view_id: this.assignViewForm.get('unassignedView')?.value,
            viewOrder: this.assignViewForm.get('viewOrder')?.value,
            viewPosition: this.assignViewForm.get('position')?.value,
        };
        this.viewsServiceApi.assignViewToRol(body);
    }
    onCloseDialog() {
        this.dynamicDialogRef.destroy();
    }
}
