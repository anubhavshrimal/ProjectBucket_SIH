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
var questions_service_1 = require('../../../services/questions/questions.service');
var InstituteHomePageComponent = (function () {
    function InstituteHomePageComponent(questionsService, router) {
        this.questionsService = questionsService;
        this.router = router;
        this.checkboxes = { 1: true };
        this.labelList = [
            {
                id: 1,
                name: 'All'
            },
            {
                id: 2,
                name: 'Dept. of CS'
            },
            {
                id: 3,
                name: 'Dept. of EC'
            },
            {
                id: 4,
                name: 'Dept. of EE'
            },
            {
                id: 5,
                name: 'Dept. of Civil'
            },
        ];
        this.questions = [
            {
                id: "dfdhfvkdvksdb324235233",
                username: "anubhav",
                title: "How to solve water scarcity problems in jaipur",
                description: "We have huge scarcity of water in jaipur",
                tags: ["Array<string>"],
                date: 23423423423423,
                department: "Dept. of CS",
                upvotes: ["anubhav", "pulkit"],
                downvotes: ["anubhav", "pulkit"],
                url: "string",
                url_title: "string",
                answers: [{
                        username: "anubhav",
                        answer: "hello tesitng ans",
                        date: 23423423423423,
                        upvotes: ["anubhav", "pulkit"],
                        downvotes: ["anubhav", "pulkit"]
                    }],
            },
            {
                id: "dfdhfvkdvksdb324235233",
                username: "anubhav",
                title: "How to solve water scarcity problems in jaipur",
                description: "We have huge scarcity of water in jaipur",
                tags: ["Array<string>"],
                date: 23423423423423,
                department: "Dept. of EC",
                upvotes: ["anubhav", "pulkit"],
                downvotes: ["anubhav", "pulkit"],
                url: "string",
                url_title: "string",
                answers: [{
                        username: "anubhav",
                        answer: "hello tesitng ans",
                        date: 23423423423423,
                        upvotes: ["anubhav", "pulkit"],
                        downvotes: ["anubhav", "pulkit"]
                    }],
            }
        ];
    }
    InstituteHomePageComponent.prototype.ngOnInit = function () {
        // this.getForumFeed();
    };
    InstituteHomePageComponent.prototype.gotoQuestion = function (id, url_title) {
        this.router.navigate(["/questions", id, url_title]);
    };
    InstituteHomePageComponent.prototype.gotoUserProfile = function (username) {
        this.router.navigate(["/user-profile", username]);
    };
    InstituteHomePageComponent.prototype.getForumFeed = function () {
        var _this = this;
        this.questionsService.getForumFeed()
            .then(function (forumFeed) {
            console.log(forumFeed);
            _this.questions = forumFeed;
        });
    };
    InstituteHomePageComponent.prototype.upvote = function (project) {
        this.questionsService.upvote(project.id)
            .then(function (res) {
            project.upvotes = res.upvotes;
            project.downvotes = res.downvotes;
        });
    };
    InstituteHomePageComponent.prototype.downvote = function (project) {
        this.questionsService.downvote(project.id)
            .then(function (res) {
            project.upvotes = res.upvotes;
            project.downvotes = res.downvotes;
        });
    };
    InstituteHomePageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'institute-home',
            templateUrl: './homePage.component.html',
            styles: [
                "a {\n            color: teal; \n            text-decoration:none\n        }"
            ],
            providers: [questions_service_1.QuestionsService]
        }), 
        __metadata('design:paramtypes', [questions_service_1.QuestionsService, router_1.Router])
    ], InstituteHomePageComponent);
    return InstituteHomePageComponent;
}());
exports.InstituteHomePageComponent = InstituteHomePageComponent;
//# sourceMappingURL=homePage.component.js.map