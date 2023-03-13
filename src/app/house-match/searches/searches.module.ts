import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FiltersComponent } from './filters/filters.component';
import { SearchesListPropertiesComponent } from './searches-list-properties/searches-list-properties.component';
import { SearchesMainPageComponent } from './searches-main-page/searches-main-page.component';
import { SearchesRoutingModule } from './searches-routing.module';

@NgModule({
    declarations: [FiltersComponent, SearchesMainPageComponent, SearchesListPropertiesComponent],
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
    ],
})
export class SearchesModule {}
