import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseMatchRoutingModule } from './house-match-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HouseMatchRoutingModule
  ]
})
export class HouseMatchModule { }
