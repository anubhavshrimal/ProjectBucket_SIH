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
require('rxjs/add/operator/toPromise');
var backendUrl_service_1 = require('../backendUrl.service');
var InstituteQuestionsService = (function () {
    function InstituteQuestionsService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.forumUrl = backendUrl_service_1.BackendUrlService.url + '/institute/question/mit';
        this.departmentsUrl = backendUrl_service_1.BackendUrlService.url + '/institute/mit/departments';
    }
    InstituteQuestionsService.prototype.getForumFeed = function () {
        return this.http
            .get(this.forumUrl)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    InstituteQuestionsService.prototype.getDepartments = function () {
        return this.http
            .get(this.departmentsUrl)
            .toPromise()
            .then(function (res) { return res.json().departments; })
            .catch(this.handleError);
    };
    InstituteQuestionsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    InstituteQuestionsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], InstituteQuestionsService);
    return InstituteQuestionsService;
}());
exports.InstituteQuestionsService = InstituteQuestionsService;
//# sourceMappingURL=institute_question.service.js.map