import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FooterHouseMatchComponent } from './footer-house-match/footer-house-match.component';
import { HeaderHouseMatchComponent } from './header-house-match/header-house-match.component';
import { LayoutHouseMatchComponent } from './layout-house-match/layout-house-match.component';

@NgModule({
    declarations: [HeaderHouseMatchComponent, FooterHouseMatchComponent, LayoutHouseMatchComponent],
    imports: [CommonModule, RouterModule, ButtonModule, RippleModule],
    exports: [LayoutHouseMatchComponent],
})
export class LayoutHouseMatchModule {}
