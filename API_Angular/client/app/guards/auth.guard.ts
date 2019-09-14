import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _authService: AuthService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;

        return this.checkLogin(url);
    }

    private checkLogin(url: string): boolean {
        if (this._authService.isLoggedIn) {
            return true;
        }

        this._authService.redirectUrl = url;
        this._router.navigate(['admin/login']);
        return false;
    }
}