import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-comparator-view-details',
    templateUrl: './comparator-view-details.component.html',
    styleUrls: ['./comparator-view-details.component.scss'],
})
export class ComparatorViewDetailsComponent implements OnInit {
    @Input() headerTitle: string = '';
    @Input() infoCompare: any[] = [];
    constructor() {}

    ngOnInit(): void {}
}
