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
import { InfoSellBuyComponent } from './home/info-sell-buy/info-sell-buy.component';
import { KeepingSectionComponent } from './home/keeping-section/keeping-section.component';
import { ShowMediaSectionComponent } from './home/show-media-section/show-media-section.component';
import { HouseMatchRoutingModule } from './house-match-routing.module';
@NgModule({
    declarations: [
        HomeComponent,
        CarouselHouseMatchComponent,
        ShowMediaSectionComponent,
        InfoSellBuyComponent,
        KeepingSectionComponent,
    ],
    imports: [
        CommonModule,
        HouseMatchRoutingModule,
        SelectButtonModule,
        AutoCompleteModule,
        FormsModule,
        DropdownModule,
        CarouselModule,
        ButtonModule,
        ImageModule,
        GalleriaModule,
    ],
})
export class HouseMatchModule {}
