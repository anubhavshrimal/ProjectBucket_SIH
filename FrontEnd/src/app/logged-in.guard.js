"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var signin_service_1 = require('./services/signin/signin.service');
var LoggedInGuard = (function () {
    function LoggedInGuard(signinService, router) {
        this.signinService = signinService;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    LoggedInGuard.prototype.checkLogin = function (url) {
        if (this.signinService.isLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.signinService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    LoggedInGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [signin_service_1.SigninService, router_1.Router])
    ], LoggedInGuard);
    return LoggedInGuard;
}());
exports.LoggedInGuard = LoggedInGuard;
//# sourceMappingURL=logged-in.guard.js.map