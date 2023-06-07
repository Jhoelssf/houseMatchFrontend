import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileParameter, HouseMatch, IdOutput } from '../../api/houseMatch.api';

@Injectable({
    providedIn: 'root',
})
export class MediaApiService {
    constructor(private houseMatchApi: HouseMatch) {}

    createMedia(body: FileParameter): Observable<IdOutput> {
        return this.houseMatchApi.uploadMedia(body);
    }
    createMediaFoo(body: File): Observable<any> {
        return this.houseMatchApi.uploadMediaFoo(body);
    }
}
