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
var AdminPanelService = (function () {
    function AdminPanelService(http) {
        this.http = http;
        this.url = backendUrl_service_1.BackendUrlService.url + '/adminpanel/name';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    AdminPanelService.prototype.addInstitute = function (login, password, university, college, state, city, email, mobile, address) {
        // this.url = BackendUrlService.url + '/adminpanel/';
        return this.http
            .post(this.url, JSON.stringify({ login: login, password: password, university: university, college: college, state: status, city: city, email: email, mobile: mobile, address: address }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AdminPanelService.prototype.getInstitutes = function () {
        this.url = backendUrl_service_1.BackendUrlService.url + '/adminpanel/name';
        return this.http
            .get(this.url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AdminPanelService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AdminPanelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AdminPanelService);
    return AdminPanelService;
}());
exports.AdminPanelService = AdminPanelService;
//# sourceMappingURL=adminPanel.service.js.map