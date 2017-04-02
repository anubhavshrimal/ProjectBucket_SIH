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
var questions_service_1 = require('../../services/questions/questions.service');
var ForumComponent = (function () {
    function ForumComponent(questionsService, router) {
        this.questionsService = questionsService;
        this.router = router;
        this.questions = [];
        this.tabs = [
            {
                tabLabel: 'Interesting',
                tabIcon: 'fa fa-heart'
            },
            {
                tabLabel: 'Trending',
                tabIcon: 'fa fa-fire'
            },
            {
                tabLabel: 'Featured',
                tabIcon: 'fa fa-money'
            }
        ];
    }
    ForumComponent.prototype.ngOnInit = function () {
        this.getForumFeed();
    };
    ForumComponent.prototype.gotoQuestion = function (id, url_title) {
        this.router.navigate(["/questions", id, url_title]);
    };
    ForumComponent.prototype.gotoUserProfile = function (username) {
        this.router.navigate(["/user-profile", username]);
    };
    ForumComponent.prototype.getForumFeed = function () {
        var _this = this;
        this.questionsService.getForumFeed()
            .then(function (forumFeed) {
            console.log(forumFeed);
            _this.questions = forumFeed;
        });
    };
    ForumComponent.prototype.upvote = function (project) {
        this.questionsService.upvote(project.id)
            .then(function (res) {
            project.upvotes = res.upvotes;
            project.downvotes = res.downvotes;
        });
    };
    ForumComponent.prototype.downvote = function (project) {
        this.questionsService.downvote(project.id)
            .then(function (res) {
            project.upvotes = res.upvotes;
            project.downvotes = res.downvotes;
        });
    };
    ForumComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'forum',
            templateUrl: './forum.component.html',
            styles: [
                "a {\n            color: teal; \n            text-decoration:none\n        }"
            ],
            providers: [questions_service_1.QuestionsService]
        }), 
        __metadata('design:paramtypes', [questions_service_1.QuestionsService, router_1.Router])
    ], ForumComponent);
    return ForumComponent;
}());
exports.ForumComponent = ForumComponent;
//# sourceMappingURL=forum.component.js.map