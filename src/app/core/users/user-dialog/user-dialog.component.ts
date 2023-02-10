import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-user-dialog',
    templateUrl: './user-dialog.component.html',
    styleUrls: ['./user-dialog.component.scss'],
})
export class UserDialogComponent implements OnInit {
    formUser: FormGroup = new FormGroup({
        username: new FormControl(null),
        password: new FormControl(null),
        email: new FormControl(null),
        theme: new FormControl(null),
    });
    get username(): FormControl {
        return this.formUser.get('username') as FormControl;
    }
    get password(): FormControl {
        return this.formUser.get('password') as FormControl;
    }
    get email(): FormControl {
        return this.formUser.get('email') as FormControl;
    }
    get theme(): FormControl {
        return this.formUser.get('theme') as FormControl;
    }
    constructor(public dynamicDialogRef: DynamicDialogRef, public config: DynamicDialogConfig) {}

    ngOnInit(): void {}

    onCloseDialog() {
        this.dynamicDialogRef.destroy();
    }

    onSaveRole(response: any) {
        this.dynamicDialogRef.close(response);
    }
}
