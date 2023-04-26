import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';

@NgModule({
    declarations: [PropertiesComponent],
    imports: [CommonModule, PropertiesRoutingModule, TableModule, FormsModule, ReactiveFormsModule],
})
export class PropertiesModule {}
