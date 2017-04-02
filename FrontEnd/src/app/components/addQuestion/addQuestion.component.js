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
var material_1 = require('@angular/material');
var questions_service_1 = require('../../services/questions/questions.service');
var _ = require("lodash");
var AddQuestionComponent = (function () {
    function AddQuestionComponent(questionsService, router, snackBar) {
        this.questionsService = questionsService;
        this.router = router;
        this.snackBar = snackBar;
        this.question = {};
        this.question.tags = [];
        this.question.images = [];
    }
    AddQuestionComponent.prototype.addQuestion = function () {
        var _this = this;
        this.questionsService.create(this.question, "pulkit")
            .then(function (question) {
            if (question.upsertedId) {
                // this.router.navigate([`/questions`, question.upsertedId, question.message]);
                console.log('added question');
            }
            else {
                _this.openSnackBar("Question couldn't be added!", "Try Again!");
            }
        });
    };
    AddQuestionComponent.prototype.addTag = function () {
        if (this.tag.length != 0) {
            this.tag = this.tag.toLowerCase();
            for (var i in this.question.tags) {
                if (this.question.tags[i] === this.tag)
                    return;
            }
            this.question.tags.push(this.tag);
            this.tag = "";
        }
    };
    AddQuestionComponent.prototype.removeTag = function (tag) {
        _.remove(this.question.tags, function (n) {
            return n === tag;
        });
    };
    AddQuestionComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    AddQuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-question',
            templateUrl: './addQuestion.component.html',
            providers: [questions_service_1.QuestionsService]
        }), 
        __metadata('design:paramtypes', [questions_service_1.QuestionsService, router_1.Router, material_1.MdSnackBar])
    ], AddQuestionComponent);
    return AddQuestionComponent;
}());
exports.AddQuestionComponent = AddQuestionComponent;
//# sourceMappingURL=addQuestion.component.js.map