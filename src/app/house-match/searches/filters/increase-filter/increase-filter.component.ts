import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-increase-filter',
    templateUrl: './increase-filter.component.html',
    styleUrls: ['./increase-filter.component.scss'],
})
export class IncreaseFilterComponent implements OnInit {
    @Input() value: number = 0;
    @Input() title: string = '';
    constructor() {}

    ngOnInit(): void {}
}
