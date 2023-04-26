import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { IUserFormData } from '../../../shared/models/user-form-data.model';
import { UserServiceApi } from '../api/user-service.service';

@Component({
    selector: 'app-user-dialog',
    templateUrl: './user-dialog.component.html',
    styleUrls: ['./user-dialog.component.scss'],
})
export class UserDialogComponent implements OnInit, OnDestroy {
    userData: IUserFormData;
    unsubscribe$: Subject<any> = new Subject<any>();
    onSaveSubject: Subject<string> = new Subject<string>();

    constructor(
        public dynamicDialogRef: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private userService: UserServiceApi
    ) {
        this.userData = config.data;
    }
    ngOnDestroy(): void {
        this.unsubscribe$.next(null);
        this.unsubscribe$.complete();
    }

    ngOnInit(): void {
        this.userService.createUser$.pipe(takeUntil(this.unsubscribe$)).subscribe((user) => {
            this.dynamicDialogRef.close('success');
        });
    }

    onSaveUser(msg: string) {
        this.onSaveSubject.next(msg);
    }

    onCloseDialog() {
        this.dynamicDialogRef.destroy();
    }
}
