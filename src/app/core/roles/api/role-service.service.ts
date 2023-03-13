import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BoolOutput, HouseMatch, IdOutput, Role, RoleInput } from '../../../api/houseMatch.api';

@Injectable({
    providedIn: 'root',
})
export class RoleServiceApi {
    roles$: Subject<Role[] | any> = new Subject<Role[] | any>();
    updateRole$: Subject<BoolOutput | any> = new Subject<BoolOutput | any>();
    createRole$: Subject<IdOutput | any> = new Subject<IdOutput | any>();
    deleteRole$: Subject<BoolOutput | any> = new Subject<BoolOutput | any>();
    constructor(private houseMatchApi: HouseMatch) {}

    getRoles(): void {
        this.houseMatchApi.getRoles().subscribe((roles) => {
            this.roles$.next(roles);
        });
    }
    updateRole(id: string, body: RoleInput): void {
        this.houseMatchApi.updateRole(id, body).subscribe((role) => {
            this.updateRole$.next(role);
        });
    }
    createRole(body: RoleInput): void {
        this.houseMatchApi.createRole(body).subscribe((role) => {
            this.createRole$.next(role);
        });
    }
    deleteRole(id: string): void {
        this.houseMatchApi.deleteRole(id).subscribe((role) => {
            this.deleteRole$.next(role);
        });
    }
}
