import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FileParameter, LocationInput, Property, PropertyLocationCreateInput } from '../../../api/houseMatch.api';
import { LocationApiService } from '../../../shared/services/location-service.service';
import { MediaApiService } from '../../../shared/services/media-api.service';
import { PropertyApiService } from '../api/property-api.service';

@Component({
    selector: 'app-property-dialog',
    templateUrl: './property-dialog.component.html',
    styleUrls: ['./property-dialog.component.scss'],
})
export class PropertyDialogComponent implements OnInit {
    file: any;
    currentProperty: Property;
    formProperty: FormGroup = new FormGroup({
        // TODO: set user id
        user_id: new FormControl('d2c77328-f7fb-11ed-8b15-0242ac110003'),
        formLocation: new FormGroup({
            country: new FormControl(),
            city: new FormControl(),
            province: new FormControl(),
            district: new FormControl(),
            address: new FormControl(),
            lat: new FormControl(),
            long: new FormControl(),
        }),
        // location_id: new FormControl('f302e869-d1d2-11ed-8020-0242ac140003'),
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
    get formLocation(): FormGroup {
        return this.formProperty.controls['formLocation'] as FormGroup;
    }
    constructor(
        public dynamicDialogRef: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private propertyApiService: PropertyApiService,
        private locationApiService: LocationApiService,
        private mediaApiService: MediaApiService
    ) {
        this.currentProperty = config?.data;
    }

    ngOnInit(): void {
        if (this.currentProperty) {
            this.formProperty.patchValue(this.currentProperty);
        }
        // this.locationApiService.createLocation$.subscribe((location) => {
        //     // const property: PropertyInput = this.formProperty.value as PropertyInput;
        //     // property.location_id = location.id;
        //     // this.propertyApiService.createPropertyWithMedia(property);
        //     // this.onCloseDialog('success');
        // });
    }
    onSaveProperty(message: string) {
        if (this.file) {
            const curFile: FileParameter = {
                data: this.file,
                fileName: this.file.name,
            };
            this.mediaApiService.createMedia(curFile).subscribe((media) => {
                if (media?.id) {
                    const property: PropertyLocationCreateInput = this.formProperty
                        .value as PropertyLocationCreateInput;
                    const location: LocationInput = this.formLocation.value as LocationInput;
                    property.location = location;
                    this.propertyApiService.createPropertyWithMedia(property, media.id);
                    this.onCloseDialog(message);
                }
            });
        }
    }
    // onSaveProperty(message: string) {
    //     if (this.file) {
    //         this.mediaApiService.createMediaFoo(this.file).subscribe((media) => {
    //             if (media?.id) {
    //                 const property: PropertyLocationCreateInput = this.formProperty
    //                     .value as PropertyLocationCreateInput;
    //                 const location: LocationInput = this.formLocation.value as LocationInput;
    //                 property.location = location;
    //                 this.propertyApiService.createPropertyWithMedia(property, media.id);
    //                 this.onCloseDialog(message);
    //             }
    //         });
    //     }
    // }
    onCloseDialog(message?: string) {
        this.dynamicDialogRef.close(message);
    }
    onDismissDialog() {
        this.dynamicDialogRef.destroy();
    }
}
