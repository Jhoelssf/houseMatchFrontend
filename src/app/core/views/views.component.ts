import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { Module, Role, RoleView, View, ViewSecondLevel } from '../../api/houseMatch.api';
import { ViewsServiceApi } from './api/api-views.service';
import { AssignViewToRolComponent } from './assign-view-to-rol/assign-view-to-rol.component';
import { IAddView, IAssignView } from './models/view.model';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';

@Component({
    selector: 'app-views',
    templateUrl: './views.component.html',
    styleUrls: ['./views.component.scss'],
    providers: [DialogService, MessageService],
})
export class ViewsComponent implements OnInit, OnDestroy {
    modules: Module[] = [];
    filterForm: FormGroup = new FormGroup({
        moduleSelect: new FormControl(),
        rolSelect: new FormControl(),
    });
    ref: DynamicDialogRef = new DynamicDialogRef();
    unsubscribe$: Subject<any> = new Subject<any>();
    views: ViewSecondLevel[] = [];
    roles: Role[] = [];
    originalListViews: ViewSecondLevel[] = [];
    roleViews: RoleView[] = [];
    constructor(private dialogService: DialogService, private viewsServiceApi: ViewsServiceApi) {}
    get moduleSelect(): FormControl {
        return this.filterForm.get('moduleSelect') as FormControl;
    }
    get rolSelect(): FormControl {
        return this.filterForm.get('rolSelect') as FormControl;
    }
    ngOnDestroy(): void {
        this.unsubscribe$.next(null);
        this.unsubscribe$.complete();
    }

    ngOnInit(): void {
        this.moduleSelect.valueChanges.subscribe((idModule) => {
            this.views = this.showViews(idModule);
        });
        this.rolSelect.valueChanges.subscribe((idRole) => {
            this.views = this.showViews(this.moduleSelect.value, idRole);
        });
        this.viewsServiceApi.roles$.pipe<Role[]>(takeUntil(this.unsubscribe$)).subscribe((roles) => {
            this.roles = roles ?? [];
        });
        this.viewsServiceApi.views$.pipe(takeUntil(this.unsubscribe$)).subscribe((views) => {
            this.originalListViews = views ?? [];
        });
        this.viewsServiceApi.roleViews$.pipe(takeUntil(this.unsubscribe$)).subscribe((roleViews) => {
            this.roleViews = roleViews ?? [];
        });
        this.viewsServiceApi.modules$.pipe(takeUntil(this.unsubscribe$)).subscribe((modules) => {
            this.modules = modules ?? [];
            this.moduleSelect.setValue(this.modules[0]?.id);
        });
        this.viewsServiceApi.getViews();
        this.viewsServiceApi.getModules();
        this.viewsServiceApi.getRoleViews();
        this.viewsServiceApi.getRoles();
    }

    showViews(idModule?: string, idRole?: string): View[] {
        let views: View[] = [];
        if (idModule && idRole) {
            views = this.originalListViews.filter((cur) => this.roleViews.find((rv) => rv.view?.id === cur.id));
        } else if (idModule) {
            views = this.originalListViews.filter((curView) => curView.module?.id === idModule);
        }
        return views;
    }

    onOpenDialogView(view?: View): void {
        const moduleSelectedId = this.moduleSelect.value;
        this.ref = this.dialogService.open(ViewDialogComponent, {
            header: `${view ? 'Actualizar' : 'Crear'} vista`,
            modal: true,
            width: '80vw',
            draggable: true,
            resizable: true,
            keepInViewport: true,
            contentStyle: { 'max-height': '500px', overflow: 'auto' },
            baseZIndex: 10000,
            data: {
                moduleId: moduleSelectedId,
                view,
            } as IAddView,
        });
        this.ref.onClose.pipe(takeUntil(this.unsubscribe$)).subscribe((message: string) => {
            if (message === 'success') {
                this.viewsServiceApi.getViews();
            }
        });
    }

    onAssignViewToRole() {
        this.ref = this.dialogService.open(AssignViewToRolComponent, {
            header: `Asignar vista a un rol`,
            modal: true,
            width: '80vw',
            draggable: true,
            resizable: true,
            keepInViewport: true,
            contentStyle: { 'max-height': '500px', overflow: 'auto' },
            baseZIndex: 10000,
            data: {
                rolId: this.rolSelect.value,
                unassignedViews: this.views.filter((cur) => this.roleViews.find((rv) => rv.view?.id !== cur.id)),
            } as IAssignView,
        });
        this.ref.onClose.pipe(takeUntil(this.unsubscribe$)).subscribe((message: string) => {
            if (message === 'success') {
                this.viewsServiceApi.getViews();
            }
        });
    }

    onDeleteView(view: View) {
        view.id && this.viewsServiceApi.deleteView(view.id);
    }
}
