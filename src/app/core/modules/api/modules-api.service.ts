import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BoolOutput, HouseMatch, IdOutput, Module, ModuleInput } from '../../../api/houseMatch.api';

@Injectable({
    providedIn: 'root',
})
export class ModulesApiService {
    modules$: Subject<Module[] | any> = new Subject<Module[] | any>();
    updateModule$: Subject<BoolOutput | any> = new Subject<BoolOutput | any>();
    createModule$: Subject<IdOutput | any> = new Subject<IdOutput | any>();
    deleteModule$: Subject<BoolOutput | any> = new Subject<BoolOutput | any>();
    constructor(private houseMatchApi: HouseMatch) {}

    getModules(): void {
        this.houseMatchApi.getModules().subscribe((Modules) => {
            this.modules$.next(Modules);
        });
    }
    updateModule(id: string, body: ModuleInput): void {
        this.houseMatchApi.updateModule(id, body).subscribe((Module) => {
            this.updateModule$.next(Module);
        });
    }
    createModule(body: ModuleInput): void {
        this.houseMatchApi.createModule(body).subscribe((Module) => {
            this.createModule$.next(Module);
        });
    }
    deleteModule(id: string): void {
        this.houseMatchApi.deleteModule(id).subscribe((Module) => {
            this.deleteModule$.next(Module);
        });
    }
}
