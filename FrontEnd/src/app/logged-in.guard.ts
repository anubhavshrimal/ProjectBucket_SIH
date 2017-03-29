import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SigninService } from './services/signin/signin.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private signinService: SigninService, private router: Router) {}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        console.log("guard");
        return this.checkLogin(url);
    }
    checkLogin(url: string): boolean {
        if (this.signinService.isLoggedIn) { return true; }
        console.log("guard");
        // Store the attempted URL for redirecting
        this.signinService.redirectUrl = url;

        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }

}