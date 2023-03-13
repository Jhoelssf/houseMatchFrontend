import { Component } from '@angular/core';
import { LayoutService } from '../../../layout/service/app.layout.service';

@Component({
    selector: 'app-footer-house-match',
    templateUrl: './footer-house-match.component.html',
    styleUrls: ['./footer-house-match.component.scss'],
})
export class FooterHouseMatchComponent {
    constructor(public layoutService: LayoutService) {}
}
