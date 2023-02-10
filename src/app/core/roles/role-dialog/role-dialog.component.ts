import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-role-dialog',
    templateUrl: './role-dialog.component.html',
    styleUrls: ['./role-dialog.component.scss'],
})
export class RoleDialogComponent implements OnInit {
    formRole: FormGroup = new FormGroup({
        name: new FormControl(''),
        description: new FormControl(''),
        order: new FormControl(null),
        modules: new FormControl([]),
        viewsFormArray: new FormArray([]),
        modulesFormArray: new FormArray([]),
        selectedModule: new FormControl(),
    });
    cities: any = [];
    modulesArray: any = [];

    get name(): FormControl {
        return this.formRole.get('name') as FormControl;
    }
    get description(): FormControl {
        return this.formRole.get('description') as FormControl;
    }
    get order(): FormControl {
        return this.formRole.get('order') as FormControl;
    }
    get modules(): FormControl {
        return this.formRole.get('modules') as FormControl;
    }
    get viewsFormArray(): FormArray {
        return this.formRole.get('viewsFormArray') as FormArray;
    }
    get modulesFormArray(): FormArray {
        return this.formRole.get('modulesFormArray') as FormArray;
    }
    get selectedModule(): FormControl {
        return this.formRole.get('selectedModule') as FormControl;
    }

    constructor(public dynamicDialogRef: DynamicDialogRef, public config: DynamicDialogConfig) {}

    ngOnInit(): void {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ];
        this.modulesArray = [
            { name: 'Module 1' },
            { name: 'Module 2' },
            { name: 'Module 3' },
            { name: 'Module 4' },
            { name: 'Module 5' },
        ];
        this.viewsFormArray.controls.push(
            new FormGroup({
                formControlExample: new FormControl(),
            })
        );
    }

    onCloseDialog() {
        this.dynamicDialogRef.destroy();
    }

    onSaveRole(response: any) {
        this.dynamicDialogRef.close(response);
    }
}
