import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-comparator',
    templateUrl: './comparator.component.html',
    styleUrls: ['./comparator.component.scss'],
})
export class ComparatorComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    onGoToCompare(): void {
        this.router.navigate(['./comparator']);
    }
}
