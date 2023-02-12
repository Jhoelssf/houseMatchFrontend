import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { CarouselHouseMatchComponent } from './home/carousel-house-match/carousel-house-match.component';
import { HomeComponent } from './home/home.component';
import { HouseMatchRoutingModule } from './house-match-routing.module';
import { ShowMediaSectionComponent } from './home/show-media-section/show-media-section.component';
import { InfoSellBuyComponent } from './home/info-sell-buy/info-sell-buy.component';
@NgModule({
    declarations: [HomeComponent, CarouselHouseMatchComponent, ShowMediaSectionComponent, InfoSellBuyComponent],
    imports: [
        CommonModule,
        HouseMatchRoutingModule,
        SelectButtonModule,
        FormsModule,
        DropdownModule,
        CarouselModule,
        AutoCompleteModule,
        ButtonModule,
        ImageModule,
        GalleriaModule,
    ],
})
export class HouseMatchModule {}
