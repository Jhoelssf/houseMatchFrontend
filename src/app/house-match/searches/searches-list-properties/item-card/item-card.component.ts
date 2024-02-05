import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-item-card',
    templateUrl: './item-card.component.html',
    styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
    @Output() compareItem: EventEmitter<boolean> = new EventEmitter();
    constructor() {}

    ngOnInit(): void {}
}
