import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';

import { HomeComponent } from './home/home.component';
import { HouseMatchRoutingModule } from './house-match-routing.module';
import { CarrouselComponent } from './home/carrousel/carrousel.component';
@NgModule({
    declarations: [HomeComponent, CarrouselComponent],
    imports: [
        CommonModule,
        HouseMatchRoutingModule,
        SelectButtonModule,
        FormsModule,
        DropdownModule,
        AutoCompleteModule,
    ],
})
export class HouseMatchModule {}
