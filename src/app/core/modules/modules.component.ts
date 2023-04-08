import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { Module } from '../../api/houseMatch.api';
import { ModulesApiService } from './api/modules-api.service';
import { ModuleDialogComponent } from './module-dialog/module-dialog.component';

@Component({
    selector: 'app-modules',
    templateUrl: './modules.component.html',
    styleUrls: ['./modules.component.scss'],
    providers: [DialogService, MessageService],
})
export class ModulesComponent implements OnInit, OnDestroy {
    modules: Module[] = [];
    ref: DynamicDialogRef = new DynamicDialogRef();
    unsubscribe$: Subject<any> = new Subject<any>();
    constructor(private modulesApiService: ModulesApiService, private dialogService: DialogService) {}
    ngOnDestroy(): void {
        this.unsubscribe$.next(null);
        this.unsubscribe$.complete();
    }
    ngOnInit(): void {
        this.modulesApiService.modules$.subscribe((modules) => {
            this.modules = modules;
        });
        this.modulesApiService.deleteModule$.subscribe((resp) => {
            console.log('Delete ok');
        });
        this.modulesApiService.getModules();
    }
    onOpenDialogModule(module?: Module) {
        this.ref = this.dialogService.open(ModuleDialogComponent, {
            header: `${module ? 'Actualizar' : 'Crear'} modulo`,
            modal: true,
            width: '50vw',
            draggable: true,
            resizable: true,
            keepInViewport: true,
            contentStyle: { 'max-height': '500px', overflow: 'auto' },
            baseZIndex: 10000,
            data: module,
        });
        this.ref.onClose.pipe(takeUntil(this.unsubscribe$)).subscribe((message: string) => {
            if (message === 'success') {
                this.modulesApiService.getModules();
            }
        });
    }
    onDeleteModule(module: Module) {
        module?.id && this.modulesApiService.deleteModule(module.id);
    }
}
