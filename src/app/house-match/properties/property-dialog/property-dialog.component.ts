import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Property, PropertyInput } from '../../../api/houseMatch.api';
import { PropertyApiService } from '../api/property-api.service';

@Component({
    selector: 'app-property-dialog',
    templateUrl: './property-dialog.component.html',
    styleUrls: ['./property-dialog.component.scss'],
})
export class PropertyDialogComponent implements OnInit {
    currentProperty: Property;
    formProperty: FormGroup = new FormGroup({
        user_id: new FormControl('a7c32c08-d1d4-11ed-8020-0242ac140003'),
        location_id: new FormControl('f302e869-d1d2-11ed-8020-0242ac140003'),
        description: new FormControl(),
        type: new FormControl(),
        length: new FormControl(),
        width: new FormControl(),
        area: new FormControl(),
        floor: new FormControl(),
        number_of_floor: new FormControl(),
        rooms: new FormControl(),
        bathrooms: new FormControl(),
        yard: new FormControl(),
        terrace: new FormControl(),
        living_room: new FormControl(),
        laundry_room: new FormControl(),
        kitchen: new FormControl(),
        garage: new FormControl(),
    });
    constructor(
        public dynamicDialogRef: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private propertyApiService: PropertyApiService
    ) {
        this.currentProperty = config?.data;
    }

    ngOnInit(): void {
        if (this.currentProperty) {
            this.formProperty.patchValue(this.currentProperty);
        }
    }
    onSaveProperty(message: string) {
        const property: PropertyInput = this.formProperty.value as PropertyInput;
        this.propertyApiService.createProperty(property);
        this.onCloseDialog(message);
    }
    onCloseDialog(message?: string) {
        this.dynamicDialogRef.close(message);
    }
    onDismissDialog() {
        this.dynamicDialogRef.destroy();
    }
}
