import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from '../../../api/houseMatch.api';
import { UserServiceApi } from '../api/user-service.service';

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
    constructor(
        public dynamicDialogRef: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private userService: UserServiceApi
    ) {}

    ngOnInit(): void {
        if (this.config?.data) {
            const data = this.config?.data as User;
            this.formUser.patchValue({
                username: data.user,
                password: data.password,
                email: data.email,
                theme: data.theme,
            });
        }
    }

    onCloseDialog() {
        this.dynamicDialogRef.destroy();
    }

    onSaveUser(response: any) {
        if (this.config?.data) {
            this.userService.updateUser(this.config.data.id, {
                user: this.username.value,
                password: this.password.value,
                email: this.email.value,
                theme: this.theme.value,
            });
        } else {
            this.userService.createUser({
                user: this.username.value,
                password: this.password.value,
                email: this.email.value,
                theme: this.theme.value,
            });
        }
        this.dynamicDialogRef.close(response);
    }
}
