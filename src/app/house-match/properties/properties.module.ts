import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PickListModule } from 'primeng/picklist';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../../shared/shared.module';
import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';
import { PropertyDialogComponent } from './property-dialog/property-dialog.component';

@NgModule({
    declarations: [PropertiesComponent, PropertyDialogComponent],
    imports: [
        CommonModule,
        PropertiesRoutingModule,
        TableModule,
        FormsModule,
        DialogModule,
        ReactiveFormsModule,
        SharedModule,
        InputNumberModule,
        RadioButtonModule,
        ButtonModule,
        InputTextModule,
        SidebarModule,
        PickListModule,
    ],
})
export class PropertiesModule {}
