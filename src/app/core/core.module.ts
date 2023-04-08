import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FloatlabelDemoRoutingModule } from '../demo/components/uikit/floatlabel/floatlabeldemo-routing.module';

import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { ModuleDialogComponent } from './modules/module-dialog/module-dialog.component';
import { ModulesComponent } from './modules/modules.component';
import { RoleDialogComponent } from './roles/role-dialog/role-dialog.component';
import { RolesComponent } from './roles/roles.component';
import { UserDialogComponent } from './users/user-dialog/user-dialog.component';
import { UsersComponent } from './users/users.component';
import { ViewDialogComponent } from './views/view-dialog/view-dialog.component';
import { ViewsComponent } from './views/views.component';
import { AssignViewToRolComponent } from './views/assign-view-to-rol/assign-view-to-rol.component';

@NgModule({
    declarations: [
        UsersComponent,
        ViewsComponent,
        RolesComponent,
        RoleDialogComponent,
        UserDialogComponent,
        ViewDialogComponent,
        ModulesComponent,
        ModuleDialogComponent,
        AssignViewToRolComponent,
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        ButtonModule,
        DropdownModule,
        DialogModule,
        ToggleButtonModule,
        TableModule,
        FormsModule,
        FloatlabelDemoRoutingModule,
        AutoCompleteModule,
        MultiSelectModule,
        InputTextModule,
        ReactiveFormsModule,
        CalendarModule,
        InputNumberModule,
        SharedModule,
        CheckboxModule,
        SelectButtonModule,
    ],
})
export class CoreModule {}
