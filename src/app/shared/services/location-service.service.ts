import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BoolOutput, HouseMatch, IdOutput, Location, LocationInput } from '../../api/houseMatch.api';

@Injectable({
    providedIn: 'root',
})
export class LocationApiService {
    locations$: Subject<Location[]> = new Subject<Location[]>();
    updateLocation$: Subject<BoolOutput> = new Subject<BoolOutput>();
    createLocation$: Subject<IdOutput> = new Subject<IdOutput>();
    deleteLocation$: Subject<BoolOutput> = new Subject<BoolOutput>();

    constructor(private houseMatchApi: HouseMatch) {}

    getLocations(): void {
        this.houseMatchApi.getLocations().subscribe((locations) => {
            this.locations$.next(locations);
        });
    }
    updateLocation(id: string, body: LocationInput): void {
        this.houseMatchApi.updateLocation(id, body).subscribe((location) => {
            this.updateLocation$.next(location);
        });
    }
    createLocation(body: LocationInput): void {
        this.houseMatchApi.createLocation(body).subscribe((location) => {
            this.createLocation$.next(location);
        });
    }
    createLocationObs(body: LocationInput): Observable<IdOutput> {
        return this.houseMatchApi.createLocation(body);
    }
    deleteLocation(id: string): void {
        this.houseMatchApi.deleteLocation(id).subscribe((location) => {
            this.deleteLocation$.next(location);
        });
    }
}
