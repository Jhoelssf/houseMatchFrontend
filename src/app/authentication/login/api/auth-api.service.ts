import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HouseMatch, Login, View, ViewSecondLevel } from '../../../api/houseMatch.api';

@Injectable({
    providedIn: 'root',
})
export class AuthApiService {
    login$: Subject<ViewSecondLevel[] | any> = new Subject<ViewSecondLevel[] | any>();
    error$: Subject<View[] | any> = new Subject<View[] | any>();
    constructor(private houseMatchApi: HouseMatch) {}

    login(body: Login): void {
        this.houseMatchApi.login(body).subscribe({
            next: (views) => this.login$.next(views),
            error: (error) => this.error$.next(error),
        });
    }
}
