import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateChild,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Token } from '../../api/houseMatch.api';
import { AuthApiService } from '../../authentication/login/api/auth-api.service';

@Injectable({
    providedIn: 'root',
})
export class AuthChildGuard implements CanActivateChild, CanLoad {
    constructor(private router: Router, private authenticationService: AuthApiService) {}
    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.userHasToken();
    }
    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.userHasToken();
    }

    userHasToken(): boolean {
        const currentUser: Token = this.authenticationService.currentUser;
        // const isValidToken = this.authenticationService.isValidToken();
        if (currentUser?.token) {
            return true;
        }
        this.authenticationService.logout();
        this.router.navigate(['/auth/login']);
        return false;
    }
}