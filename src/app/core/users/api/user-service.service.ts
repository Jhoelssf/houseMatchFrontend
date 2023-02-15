import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BoolOutput, HouseMatch, User, UserInput } from '../../../api/houseMatch.api';

@Injectable({
    providedIn: 'root',
})
export class UserServiceApi {
    users$: Subject<User[] | any> = new Subject<User[] | any>();
    usersError$: Subject<User[] | any> = new Subject<User[] | any>();
    updateUser$: Subject<BoolOutput | any> = new Subject<BoolOutput | any>();
    createUser$: Subject<User[] | any> = new Subject<User[] | any>();
    deleteUser$: Subject<BoolOutput | any> = new Subject<BoolOutput | any>();
    constructor(private houseMatchApi: HouseMatch) {}

    getUsers(): void {
        this.houseMatchApi.getUsers().subscribe({
            next: (users) => this.users$.next(users),
            error: (error) => this.usersError$.next(error),
        });
    }
    updateUser(id: string, body: UserInput): void {
        this.houseMatchApi.updateUser(id, body).subscribe((users) => {
            this.updateUser$.next(users);
        });
    }
    createUser(body: any): void {
        this.houseMatchApi.createUser(body).subscribe((users) => {
            this.createUser$.next(users);
        });
    }
    deleteUser(id: string): void {
        this.houseMatchApi.deleteUser(id).subscribe((users) => {
            this.deleteUser$.next(users);
        });
    }
}
