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
var _ = require('lodash');
var institute_question_service_1 = require('../../../services/institute/institute_question.service');
var questions_service_1 = require('../../../services/questions/questions.service');
var InstituteHomePageComponent = (function () {
    function InstituteHomePageComponent(questionsService, instituteQuestionsService, router) {
        this.questionsService = questionsService;
        this.instituteQuestionsService = instituteQuestionsService;
        this.router = router;
        this.labelList = ['All'];
        this.checkboxes = { 'All': true };
        this.questions = [];
    }
    InstituteHomePageComponent.prototype.ngOnInit = function () {
        this.getDepartments();
    };
    InstituteHomePageComponent.prototype.filter = function (checkboxes) {
        var filteredQue = [];
        var quesGroup = this.quesGroup;
        var questions = this.questions;
        var keys = _.keys(checkboxes);
        _.forEach(keys, function (k) {
            if (k == 'All' && checkboxes[k]) {
                filteredQue = questions;
                return false;
            }
            if (checkboxes[k]) {
                if (quesGroup[k])
                    filteredQue = _.concat(filteredQue, quesGroup[k]);
            }
        });
        console.log(filteredQue);
        this.filteredQue = filteredQue;
    };
    InstituteHomePageComponent.prototype.getDepartments = function () {
        var _this = this;
        this.instituteQuestionsService.getDepartments()
            .then(function (departments) {
            console.log(departments);
            var labelList = _this.labelList;
            _this.labelList = _.concat(labelList, departments);
            _this.getForumFeed();
        });
    };
    InstituteHomePageComponent.prototype.gotoQuestion = function (id, url_title) {
        this.router.navigate(["/questions", id, url_title]);
    };
    InstituteHomePageComponent.prototype.gotoUserProfile = function (username) {
        this.router.navigate(["/user-profile", username]);
    };
    InstituteHomePageComponent.prototype.getForumFeed = function () {
        var _this = this;
        this.instituteQuestionsService.getForumFeed()
            .then(function (forumFeed) {
            console.log(forumFeed);
            _this.questions = forumFeed;
            _this.quesGroup = _.groupBy(_this.questions, 'department[0]');
            _this.filter(_this.checkboxes);
            _this.checkboxes = {};
        });
    };
    InstituteHomePageComponent.prototype.upvote = function (project) {
        this.questionsService.upvote(project.id, "mit")
            .then(function (res) {
            project.upvotes = res.upvotes;
            project.downvotes = res.downvotes;
        });
    };
    InstituteHomePageComponent.prototype.downvote = function (project) {
        this.questionsService.downvote(project.id, "mit")
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
            providers: [questions_service_1.QuestionsService, institute_question_service_1.InstituteQuestionsService]
        }), 
        __metadata('design:paramtypes', [questions_service_1.QuestionsService, institute_question_service_1.InstituteQuestionsService, router_1.Router])
    ], InstituteHomePageComponent);
    return InstituteHomePageComponent;
}());
exports.InstituteHomePageComponent = InstituteHomePageComponent;
//# sourceMappingURL=homePage.component.js.map