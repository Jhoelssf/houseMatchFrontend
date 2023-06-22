import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthApiService } from './api/auth-api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent implements OnInit, OnDestroy {
    loading = false;
    formAuth: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });
    unsubscribe$: Subject<any> = new Subject<any>();

    valCheck: string[] = ['remember'];
    get email(): FormControl {
        return this.formAuth.get('email') as FormControl;
    }
    get password(): FormControl {
        return this.formAuth.get('password') as FormControl;
    }

    constructor(public layoutService: LayoutService, private authApiService: AuthApiService) {}
    ngOnDestroy(): void {
        this.unsubscribe$.next(null);
        this.unsubscribe$.complete();
    }
    ngOnInit(): void {
        this.authApiService.currentUser$.pipe(takeUntil(this.unsubscribe$)).subscribe((token) => {
            this.loading = false;
            console.log(token);
        });
    }

    onLogin() {
        this.loading = true;
        this.authApiService.login({
            email: this.validateEmail(this.email.value) ? this.email.value : undefined,
            user: !this.validateEmail(this.email.value) ? this.email.value : undefined,
            password: this.password.value,
        });
    }
    validateEmail(emailStr: string) {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailStr.match(validRegex);
    }
}
