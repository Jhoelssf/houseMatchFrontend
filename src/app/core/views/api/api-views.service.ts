import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
    BoolOutput,
    HouseMatch,
    IdOutput,
    Role,
    RoleView,
    RoleViewInput,
    View,
    ViewInput,
    ViewSecondLevel,
} from '../../../api/houseMatch.api';

@Injectable({
    providedIn: 'root',
})
export class ViewsServiceApi {
    views$: Subject<ViewSecondLevel[] | any> = new Subject<ViewSecondLevel[] | any>();
    roleViews$: Subject<RoleView[] | any> = new Subject<RoleView[] | any>();
    roles$: Subject<Role[] | any> = new Subject<Role[] | any>();
    error$: Subject<View[] | any> = new Subject<View[] | any>();
    updateView$: Subject<BoolOutput | any> = new Subject<BoolOutput | any>();
    createView$: Subject<View[] | any> = new Subject<View[] | any>();
    deleteView$: Subject<BoolOutput | any> = new Subject<BoolOutput | any>();
    modules$: Subject<BoolOutput | any> = new Subject<BoolOutput | any>();
    assignedViewToRol$: Subject<IdOutput | any> = new Subject<IdOutput | any>();
    constructor(private houseMatchApi: HouseMatch) {}

    getModules(): void {
        this.houseMatchApi.getModules().subscribe({
            next: (views) => this.modules$.next(views),
            error: (error) => this.error$.next(error),
        });
    }
    getRoleViews(): void {
        this.houseMatchApi.getRoleView().subscribe({
            next: (views) => this.roleViews$.next(views),
            error: (error) => this.error$.next(error),
        });
    }
    getRoles(): void {
        this.houseMatchApi.getRoles().subscribe({
            next: (views) => this.roles$.next(views),
            error: (error) => this.error$.next(error),
        });
    }
    assignViewToRol(body: RoleViewInput): void {
        this.houseMatchApi.assignmentRoleView(body).subscribe({
            next: (views) => this.assignedViewToRol$.next(views),
            error: (error) => this.error$.next(error),
        });
    }
    getViews(): void {
        this.houseMatchApi.getViews().subscribe({
            next: (views) => this.views$.next(views),
            error: (error) => this.error$.next(error),
        });
    }
    updateView(id: string, body: ViewInput): void {
        this.houseMatchApi.updateView(id, body).subscribe((views) => {
            this.updateView$.next(views);
        });
    }
    createView(body: ViewInput): void {
        this.houseMatchApi.createView(body).subscribe((views) => {
            this.createView$.next(views);
        });
    }
    deleteView(id: string): void {
        this.houseMatchApi.deleteView(id).subscribe((views) => {
            this.deleteView$.next(views);
        });
    }
}
