import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-card-view-comparator',
    templateUrl: './card-view-comparator.component.html',
    styleUrls: ['./card-view-comparator.component.scss'],
})
export class CardViewComparatorComponent implements OnInit {
    @Input() title: string = '';
    constructor(private router: Router) {}

    ngOnInit(): void {}

    onGoToDetailsProperty(): void {
        this.router.navigate([`./details/${1}`]);
    }
}
