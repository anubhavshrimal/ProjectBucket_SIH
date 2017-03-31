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
require('rxjs/add/operator/switchMap');
var material_1 = require('@angular/material');
var questions_service_1 = require('../../services/questions/questions.service');
var _ = require("lodash");
var QuestionViewComponent = (function () {
    function QuestionViewComponent(route, questionsService, snackBar) {
        this.route = route;
        this.questionsService = questionsService;
        this.snackBar = snackBar;
        this.question = {};
    }
    QuestionViewComponent.prototype.ngOnInit = function () {
        this.getQuestion();
    };
    QuestionViewComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    QuestionViewComponent.prototype.getQuestion = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.questionsService.getQuestionById(params['id']); })
            .subscribe(function (question) {
            _this.question = question;
            if (_this.question.answers) {
                _.orderBy(_this.question.answers, ['upvotes.length'], ['desc']);
            }
        });
    };
    QuestionViewComponent.prototype.insertAnswer = function () {
        var _this = this;
        this.questionsService.insertAnswer(this.answer, this.question.id)
            .then(function (answer) {
            if (answer.answer != 'error' && answer.username) {
                _this.answer = "";
                _this.question.answers.push(answer);
                _.orderBy(_this.question.answers, ['upvotes.length'], ['desc']);
            }
            else {
                _this.openSnackBar("Answer was not added", "Try Again!");
            }
        });
    };
    QuestionViewComponent.prototype.deleteAnswer = function (username) {
        var _this = this;
        this.questionsService.deleteAnswer(username, this.question.id)
            .then(function (message) {
            if (message == 'success') {
                _.remove(_this.question.answers, function (c) {
                    return c.username == username;
                });
            }
            else {
                _this.openSnackBar("Answer couldn't be deleted", "Try Again!");
            }
        });
    };
    QuestionViewComponent = __decorate([
        core_1.Component({
            selector: 'question-view',
            templateUrl: './questionview.component.html',
            moduleId: module.id,
            providers: [questions_service_1.QuestionsService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, questions_service_1.QuestionsService, material_1.MdSnackBar])
    ], QuestionViewComponent);
    return QuestionViewComponent;
}());
exports.QuestionViewComponent = QuestionViewComponent;
//# sourceMappingURL=questionview.component.js.map