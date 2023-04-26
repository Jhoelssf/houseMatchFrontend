import { Component, OnInit } from '@angular/core';
import { Property } from '../../api/houseMatch.api';

@Component({
    selector: 'app-properties',
    templateUrl: './properties.component.html',
    styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
    properties: Property[] = [];
    constructor() {}

    ngOnInit(): void {
        console.log();
    }
    onOpenDialogProperty(property?: Property) {}
    onDeleteproperty(property: Property) {}
}
