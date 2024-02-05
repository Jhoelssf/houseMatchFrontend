import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SharedModule } from '../../shared/shared.module';
import { HouseMatchModule } from '../house-match.module';
import { CardViewComparatorComponent } from './comparator-view/card-view-comparator/card-view-comparator.component';
import { ComparatorViewDetailsComponent } from './comparator-view/comparator-view-details/comparator-view-details.component';
import { ComparatorViewComponent } from './comparator-view/comparator-view.component';
import { ComparePropertiesRoutingModule } from './compare-properties-routing.module';

@NgModule({
    declarations: [ComparatorViewComponent, CardViewComparatorComponent, ComparatorViewDetailsComponent],
    imports: [
        CommonModule,
        ComparePropertiesRoutingModule,
        ButtonModule,
        CardModule,
        AccordionModule,
        HouseMatchModule,
        SharedModule,
    ],
})
export class ComparePropertiesModule {}
