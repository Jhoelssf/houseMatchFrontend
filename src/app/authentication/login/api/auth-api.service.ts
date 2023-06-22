import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { HouseMatch, Login, Token } from '../../../api/houseMatch.api';

@Injectable({
    providedIn: 'root',
})
export class AuthApiService {
    currentUser: Token = {
        token: '',
    };
    currentUser$: BehaviorSubject<Token> = new BehaviorSubject<Token>(this.currentUser);
    error$: Subject<Token> = new Subject<Token>();
    constructor(private houseMatchApi: HouseMatch, private router: Router) {
        const tokenStr = localStorage.getItem('token');
        const token: Token = tokenStr ? { token: tokenStr } : { token: '' };
        this.currentUser = token;
        this.currentUser$.next(this.currentUser);
    }

    login(body: Login): void {
        this.houseMatchApi.login(body).subscribe((tokenObj: any) => {
            this.currentUser = tokenObj.token ? tokenObj : { token: '' };
            if (this.currentUser?.token) {
                localStorage.setItem('token', this.currentUser.token);
                this.currentUser$.next(this.currentUser);
                this.router.navigate(['/admin/core']);
            }
        });
    }

    logout() {
        localStorage.removeItem('token');
        this.currentUser = {
            token: '',
        };
        this.currentUser$.next(this.currentUser);
        this.router.navigate(['/home']);
    }
}
