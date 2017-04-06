import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(localStorage.getItem('access_token')){
            //loggeg in so return true
            return true;
        }
        
        // not logged in so redirect to login page with the return url
        this._router.navigate(['login']); // not necessary so far , { queryParams: { returnUrl: state.url }});
        return false;

    }

}
