import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserServiceApi } from '../../core/users/api/user-service.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
    formRegister: FormGroup = new FormGroup({});
    unsubscribe$: Subject<any> = new Subject<any>();
    onSaveSubject: Subject<string> = new Subject<string>();
    constructor(private userApiService: UserServiceApi, private router: Router) {}
    ngOnDestroy(): void {
        this.unsubscribe$.next(null);
        this.unsubscribe$.complete();
    }

    ngOnInit(): void {
        this.userApiService.createUser$.pipe(takeUntil(this.unsubscribe$)).subscribe((user) => {
            this.router.navigate(['/auth/login']);
        });
    }

    onRegister() {
        this.onSaveSubject.next('success');
    }
}
