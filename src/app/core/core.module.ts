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

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { RoleDialogComponent } from './roles/role-dialog/role-dialog.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { ViewsComponent } from './views/views.component';

@NgModule({
    declarations: [UsersComponent, ViewsComponent, RolesComponent, RoleDialogComponent],
    imports: [
        CommonModule,
        CoreRoutingModule,
        ButtonModule,
        DialogModule,
        ToggleButtonModule,
        TableModule,
        FormsModule,
        FloatlabelDemoRoutingModule,
        AutoCompleteModule,
        MultiSelectModule,
        InputTextModule,
        ReactiveFormsModule,
        InputNumberModule,
        SharedModule,
        CheckboxModule,
        SelectButtonModule,
    ],
})
export class CoreModule {}
