import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
    BoolOutput,
    HouseMatch,
    IdOutput,
    Property,
    PropertyInput,
    PropertyLocationCreateInput,
} from '../../../api/houseMatch.api';

@Injectable({
    providedIn: 'root',
})
export class PropertyApiService {
    properties$: Subject<Property[] | any> = new Subject<Property[] | any>();
    updateProperty$: Subject<BoolOutput | any> = new Subject<BoolOutput | any>();
    createProperty$: Subject<IdOutput | any> = new Subject<IdOutput | any>();
    deleteProperty$: Subject<BoolOutput | any> = new Subject<BoolOutput | any>();
    constructor(private houseMatchApi: HouseMatch) {}

    getProperties(): void {
        this.houseMatchApi.getProperties().subscribe((properties) => {
            this.properties$.next(properties);
        });
    }
    updateProperty(id: string, body: PropertyInput): void {
        this.houseMatchApi.updateProperty(id, body).subscribe((Property) => {
            this.updateProperty$.next(Property);
        });
    }
    createProperty(body: PropertyInput): void {
        this.houseMatchApi.createProperty(body).subscribe((Property) => {
            this.createProperty$.next(Property);
        });
    }
    createPropertyWithMedia(body: PropertyLocationCreateInput, mediasId: string): void {
        this.houseMatchApi.createCompleteProperty(body, mediasId).subscribe((Property) => {
            this.createProperty$.next(Property);
        });
    }
    deleteProperty(id: string): void {
        this.houseMatchApi.deleteProperty(id).subscribe((Property) => {
            this.deleteProperty$.next(Property);
        });
    }
}
