import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { SharedModule } from '../../shared/shared.module';
import { HouseMatchModule } from '../house-match.module';
import { DetailsPropertyRoutingModule } from './details-property-routing.module';
import { DetailsPropertyComponent } from './details-property/details-property.component';

@NgModule({
    declarations: [DetailsPropertyComponent],
    imports: [
        CommonModule,
        DetailsPropertyRoutingModule,
        SharedModule,
        TabViewModule,
        RadioButtonModule,
        FormsModule,
        ReactiveFormsModule,
        HouseMatchModule,
    ],
})
export class DetailsPropertyModule {}
