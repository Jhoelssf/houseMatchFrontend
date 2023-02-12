import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../../layout/service/app.layout.service';

@Component({
    selector: 'app-header-house-match',
    templateUrl: './header-house-match.component.html',
    styleUrls: ['./header-house-match.component.scss'],
})
export class HeaderHouseMatchComponent {
    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) {}
}
