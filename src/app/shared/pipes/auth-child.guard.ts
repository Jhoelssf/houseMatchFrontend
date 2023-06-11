import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Token } from '../../api/houseMatch.api';
import { AuthApiService } from '../../authentication/login/api/auth-api.service';

@Injectable({
    providedIn: 'root',
})
export class AuthChildGuard  {
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
        console.log(123);

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
