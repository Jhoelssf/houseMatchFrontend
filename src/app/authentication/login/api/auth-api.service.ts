import { Injectable } from '@angular/core';
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
    constructor(private houseMatchApi: HouseMatch) {
        const tokenStr = localStorage.getItem('token');
        const token: Token = tokenStr ? JSON.parse(tokenStr) : { token: '' };
        this.currentUser = token;
        this.currentUser$.next(this.currentUser);
    }

    login(body: Login): void {
        this.houseMatchApi.login(body).subscribe((tokenObj: any) => {
            console.log(tokenObj);
            this.currentUser = tokenObj.token ? tokenObj : { token: '' };
            console.log(this.currentUser);

            if (this.currentUser?.token) {
                localStorage.setItem('token', this.currentUser.token);
                this.currentUser$.next(this.currentUser);
            }
        });
    }

    logout() {
        localStorage.removeItem('token');
        this.currentUser = {
            token: '',
        };
    }
}
