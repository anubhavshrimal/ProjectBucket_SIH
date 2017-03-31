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
var ProjectsService = (function () {
    function ProjectsService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.createUrl = backendUrl_service_1.BackendUrlService.url + '/projects/insert';
        this.projectsFeedUrl = backendUrl_service_1.BackendUrlService.url + '/homepage/projects-feed/pulkit';
    }
    ProjectsService.prototype.create = function (project) {
        return this.http
            .post(this.createUrl, JSON.stringify(project), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProjectsService.prototype.update = function (project) {
        project.username = "pulkit";
        var updateUrl = backendUrl_service_1.BackendUrlService.url + '/projects/' + project.id;
        return this.http
            .put(updateUrl, JSON.stringify(project), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().message; })
            .catch(this.handleError);
    };
    ProjectsService.prototype.getProjectById = function (id) {
        var getUrl = backendUrl_service_1.BackendUrlService.url + '/projects/' + id;
        return this.http
            .get(getUrl)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProjectsService.prototype.insertComment = function (comment, projectId) {
        var insertCommentUrl = backendUrl_service_1.BackendUrlService.url + '/projects/' + projectId + '/comment';
        return this.http
            .post(insertCommentUrl, JSON.stringify({ "comment": comment }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProjectsService.prototype.deleteComment = function (comment, projectId) {
        var deleteCommentUrl = backendUrl_service_1.BackendUrlService.url + '/projects/' + projectId + '/comment/delete';
        return this.http
            .post(deleteCommentUrl, JSON.stringify(comment), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProjectsService.prototype.getProjectsFeed = function () {
        return this.http
            .get(this.projectsFeedUrl)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProjectsService.prototype.upvote = function (projectId) {
        var upvoteUrl = backendUrl_service_1.BackendUrlService.url + '/projects/' + projectId + '/upvote';
        return this.http
            .get(upvoteUrl)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProjectsService.prototype.downvote = function (projectId) {
        var downvote = backendUrl_service_1.BackendUrlService.url + '/projects/' + projectId + '/downvote';
        return this.http
            .put(downvote, JSON.stringify({}), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProjectsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ProjectsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectsService);
    return ProjectsService;
}());
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map