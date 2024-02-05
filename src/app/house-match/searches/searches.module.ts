import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { TagModule } from 'primeng/tag';
import { SharedModule } from '../../shared/shared.module';
import { FiltersComponent } from './filters/filters.component';
import { IncreaseFilterComponent } from './filters/increase-filter/increase-filter.component';
import { ItemCardComponent } from './searches-list-properties/item-card/item-card.component';
import { SearchesListPropertiesComponent } from './searches-list-properties/searches-list-properties.component';
import { SearchesMainPageComponent } from './searches-main-page/searches-main-page.component';
import { SearchesRoutingModule } from './searches-routing.module';

@NgModule({
    declarations: [
        FiltersComponent,
        SearchesMainPageComponent,
        SearchesListPropertiesComponent,
        IncreaseFilterComponent,
        ItemCardComponent,
    ],
    imports: [
        CommonModule,
        SearchesRoutingModule,
        SelectButtonModule,
        AutoCompleteModule,
        DropdownModule,
        FormsModule,
        ButtonModule,
        DataViewModule,
        RatingModule,
        InputTextModule,
        CheckboxModule,
        SliderModule,
        TagModule,
        SharedModule,
    ],
})
export class SearchesModule {}
