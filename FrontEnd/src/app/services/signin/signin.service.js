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
var http_1 = require('@angular/http');
var backendUrl_service_1 = require('../backendUrl.service');
require('rxjs/add/operator/toPromise');
var SigninService = (function () {
    function SigninService(http) {
        this.http = http;
        this.url = backendUrl_service_1.BackendUrlService.url + 'user/login';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    SigninService.prototype.login = function (userName, password) {
        return this.http
            .post(this.url, JSON.stringify({ username: userName, password: password }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json()[0]; })
            .catch(this.handleError);
    };
    SigninService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    SigninService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SigninService);
    return SigninService;
}());
exports.SigninService = SigninService;
//# sourceMappingURL=signin.service.js.map