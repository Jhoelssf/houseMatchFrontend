import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-media-section',
    templateUrl: './card-media-section.component.html',
    styleUrls: ['./card-media-section.component.scss'],
})
export class CardMediaSectionComponent implements OnInit {
    @Input() title: string = '';

    constructor() {}

    ngOnInit(): void {}
}
