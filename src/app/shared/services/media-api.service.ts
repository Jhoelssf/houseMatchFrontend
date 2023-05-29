import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HouseMatch, IdOutput } from '../../api/houseMatch.api';

@Injectable({
    providedIn: 'root',
})
export class MediaApiService {
    constructor(private houseMatchApi: HouseMatch) {}

    createMedia(body: any): Observable<IdOutput> {
        return this.houseMatchApi.uploadMedia(body);
    }
    createMediaFoo(body: File): Observable<any> {
        return this.houseMatchApi.uploadMediaFoo(body);
    }
}
