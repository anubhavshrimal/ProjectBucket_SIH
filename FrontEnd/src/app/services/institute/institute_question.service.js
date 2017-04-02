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
        // private createUrl = BackendUrlService.url + '/questions/insert/mit';
        this.forumUrl = backendUrl_service_1.BackendUrlService.url + '/institute/question/mit';
    }
    // create(question: Question): Promise<Response> {
    //     return this.http
    //         .post(this.createUrl, JSON.stringify(question), {headers: this.headers})
    //         .toPromise()
    //         .then(res => res.json() as Response)
    //         .catch(this.handleError);
    // }
    // update(question: Question): Promise<string> {
    //     question.username = "pulkit";
    //     const updateUrl = BackendUrlService.url + '/questions/'+question.id;
    //     return this.http
    //         .put(updateUrl, JSON.stringify(question), {headers: this.headers})
    //         .toPromise()
    //         .then(res => res.json().message)
    //         .catch(this.handleError);
    // }
    // getQuestionById(id: string): Promise<Question> {
    //     const getUrl = BackendUrlService.url + '/questions/'+id;
    //     return this.http
    //         .get(getUrl)
    //         .toPromise()
    //         .then(res => res.json() as Question)
    //         .catch(this.handleError);
    // }
    // insertAnswer(answer: string, questionId: string): Promise<Answer> {
    //     const insertAnswerUrl = BackendUrlService.url + '/questions/'+questionId+'/answer';
    //     return this.http
    //         .post(insertAnswerUrl, JSON.stringify({"answer": answer}), {headers: this.headers})
    //         .toPromise()
    //         .then(res => res.json() as Answer)
    //         .catch(this.handleError);
    // }
    // deleteAnswer(username: string, questionId: string): Promise<string> {
    //     const deleteAnswerUrl = BackendUrlService.url + '/questions/'+questionId+'/answer/delete';
    //     return this.http
    //         .post(deleteAnswerUrl, JSON.stringify({'username': username}), {headers: this.headers})
    //         .toPromise()
    //         .then(res => res.json().message)
    //         .catch(this.handleError);
    // }
    InstituteQuestionsService.prototype.getForumFeed = function () {
        return this.http
            .get(this.forumUrl)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // upvote(questionId: string): Promise<Info> {
    //     const upvoteUrl = '/questions/' + questionId + '/upvote';
    //     return this.http
    //         .put(upvoteUrl, JSON.stringify({}), {headers: this.headers})
    //         .toPromise()
    //         .then(res => res.json() as Info)
    //         .catch(this.handleError);
    // }
    // downvote(questionId: string): Promise<Info> {
    //     const downvote = '/questions/' + questionId + '/downvote';
    //     return this.http
    //         .put(downvote, JSON.stringify({}), {headers: this.headers})
    //         .toPromise()
    //         .then(res => res.json() as Info)
    //         .catch(this.handleError);
    // }
    // upvoteAnswer(questionId: string, username: string): Promise<Info> {
    //     const upvoteUrl = '/questions/' + questionId + '/' + username + '/upvote';
    //     return this.http
    //         .put(upvoteUrl, JSON.stringify({}), {headers: this.headers})
    //         .toPromise()
    //         .then(res => res.json() as Info)
    //         .catch(this.handleError);
    // }
    // downvoteAnswer(questionId: string, username: string): Promise<Info> {
    //     const downvote = '/questions/' + questionId + '/' + username + '/downvote';
    //     return this.http
    //         .put(downvote, JSON.stringify({}), {headers: this.headers})
    //         .toPromise()
    //         .then(res => res.json() as Info)
    //         .catch(this.handleError);
    // }
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