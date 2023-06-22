import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../../api/houseMatch.api';
import { AuthApiService } from '../../authentication/login/api/auth-api.service';
import { ExternalReq } from '../models/ExternalReq';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authApiService: AuthApiService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.body instanceof ExternalReq) {
            return next.handle(req);
        }

        const viewModel: Token = this.authApiService.currentUser$.value;
        if (viewModel && viewModel.token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${viewModel.token}`,
                },
            });
        }
        return next.handle(req);
    }
}
