import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Module, ModuleInput } from '../../../api/houseMatch.api';
import { ModulesApiService } from '../api/modules-api.service';

@Component({
    selector: 'app-module-dialog',
    templateUrl: './module-dialog.component.html',
    styleUrls: ['./module-dialog.component.scss'],
})
export class ModuleDialogComponent implements OnInit {
    currentModule: Module;
    formModule: FormGroup = new FormGroup({
        name: new FormControl(''),
        description: new FormControl(''),
        icon: new FormControl(''),
        order: new FormControl(''),
    });
    constructor(
        public dynamicDialogRef: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private modulesApiService: ModulesApiService
    ) {
        this.currentModule = config?.data;
    }

    ngOnInit(): void {
        console.log();
    }
    onSaveModule(message: string) {
        const body: ModuleInput = this.formModule.value;
        if (this.currentModule && this.currentModule.id) {
            this.modulesApiService.updateModule(this.currentModule.id, body);
        } else {
            this.modulesApiService.createModule(body);
        }
        this.dynamicDialogRef.close(message);
    }
    onCloseDialog() {
        this.dynamicDialogRef.destroy();
    }
}
