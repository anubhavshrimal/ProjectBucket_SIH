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
var QuestionViewComponent = (function () {
    function QuestionViewComponent(route, questionsService, snackBar) {
        this.route = route;
        this.questionsService = questionsService;
        this.snackBar = snackBar;
        this.question = {};
    }
    QuestionViewComponent.prototype.ngOnInit = function () {
        // this.getProject()
    };
    QuestionViewComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
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