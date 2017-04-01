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
var licenses_service_1 = require('../../services/licenses/licenses.service');
var questions_service_1 = require('../../services/questions/questions.service');
var _ = require("lodash");
var EditQuestionComponent = (function () {
    function EditQuestionComponent(licensesService, questionsService, route, router, snackBar) {
        this.licensesService = licensesService;
        this.questionsService = questionsService;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.project = {};
        this.readmeChecked = false;
    }
    EditQuestionComponent.prototype.ngOnInit = function () {
        // this.getProject();
    };
    EditQuestionComponent.prototype.addTag = function () {
        if (this.tag.length != 0) {
            this.tag = this.tag.toLowerCase();
            for (var i in this.project.tags) {
                if (this.project.tags[i] === this.tag)
                    return;
            }
            this.project.tags.push(this.tag);
            this.tag = "";
        }
    };
    EditQuestionComponent.prototype.removeTag = function (tag) {
        _.remove(this.project.tags, function (n) {
            return n === tag;
        });
    };
    EditQuestionComponent.prototype.initialiseReadme = function () {
        if (this.readmeChecked = !this.readmeChecked) {
            this.project.readme = "# " + this.project.title;
        }
        else {
            this.project.readme = "";
        }
    };
    EditQuestionComponent.prototype.updateProject = function () {
        var _this = this;
        this.questionsService.update(this.project)
            .then(function (message) {
            console.log(message);
            if (message == "success") {
                _this.router.navigate(["/projects", _this.project.id, _this.project.url_title]);
            }
            else {
                _this.openSnackBar("There was some error", "Try Again!!");
            }
        });
    };
    // getProject(): void {
    //     this.route.params
    //         .switchMap((params: Params) => this.questionsService.getProjectById(params['id']))
    //         .subscribe(project => {
    //             console.log(project)
    //             this.project = project;
    //             if (this.project.readme) {
    //                 this.readmeChecked = true;
    //             }
    //             if (this.project.comments) {
    //                 _.reverse(this.project.comments)
    //             }
    //         });
    // }
    EditQuestionComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    EditQuestionComponent = __decorate([
        core_1.Component({
            selector: 'edit-question',
            templateUrl: './editQuestion.component.html',
            moduleId: module.id,
            providers: [questions_service_1.QuestionsService]
        }), 
        __metadata('design:paramtypes', [licenses_service_1.LicensesService, questions_service_1.QuestionsService, router_1.ActivatedRoute, router_1.Router, material_1.MdSnackBar])
    ], EditQuestionComponent);
    return EditQuestionComponent;
}());
exports.EditQuestionComponent = EditQuestionComponent;
//# sourceMappingURL=editQuestion.component.js.map