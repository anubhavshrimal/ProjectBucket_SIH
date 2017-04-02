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
var QuestionsService = (function () {
    function QuestionsService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.forumUrl = backendUrl_service_1.BackendUrlService.url + '/homepage/forum/pulkit';
    }
    QuestionsService.prototype.create = function (question, username) {
        var createUrl = backendUrl_service_1.BackendUrlService.url + '/questions/insert/' + username;
        return this.http
            .post(createUrl, JSON.stringify(question), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionsService.prototype.update = function (question) {
        question.username = "pulkit";
        var updateUrl = backendUrl_service_1.BackendUrlService.url + '/questions/' + question.id + '/updatequestion';
        return this.http
            .post(updateUrl, JSON.stringify(question), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().message; })
            .catch(this.handleError);
    };
    QuestionsService.prototype.getQuestionById = function (id) {
        var getUrl = backendUrl_service_1.BackendUrlService.url + '/questions/' + id;
        return this.http
            .get(getUrl)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionsService.prototype.insertAnswer = function (answer, questionId, username) {
        var insertAnswerUrl = backendUrl_service_1.BackendUrlService.url + '/questions/' + questionId + '/answer/' + username;
        return this.http
            .post(insertAnswerUrl, JSON.stringify({ "answer": answer }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionsService.prototype.deleteAnswer = function (username, questionId) {
        var deleteAnswerUrl = backendUrl_service_1.BackendUrlService.url + '/questions/' + questionId + '/' + username + '/deleteans';
        return this.http
            .post(deleteAnswerUrl, JSON.stringify({}), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().message; })
            .catch(this.handleError);
    };
    QuestionsService.prototype.getForumFeed = function () {
        return this.http
            .get(this.forumUrl)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionsService.prototype.upvote = function (questionId, username) {
        var upvoteUrl = backendUrl_service_1.BackendUrlService.url + '/questions/' + questionId + '/upvote/' + username;
        return this.http
            .put(upvoteUrl, JSON.stringify({}), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionsService.prototype.downvote = function (questionId, username) {
        var downvote = backendUrl_service_1.BackendUrlService.url + '/questions/' + questionId + '/downvote/' + username;
        return this.http
            .put(downvote, JSON.stringify({}), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionsService.prototype.upvoteAnswer = function (questionId, username) {
        var upvoteUrl = backendUrl_service_1.BackendUrlService.url + '/questions/' + questionId + '/' + username + '/upvote';
        return this.http
            .put(upvoteUrl, JSON.stringify({}), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionsService.prototype.downvoteAnswer = function (questionId, username) {
        var downvote = backendUrl_service_1.BackendUrlService.url + '/questions/' + questionId + '/' + username + '/downvote';
        return this.http
            .put(downvote, JSON.stringify({}), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    QuestionsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuestionsService);
    return QuestionsService;
}());
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=questions.service.js.map