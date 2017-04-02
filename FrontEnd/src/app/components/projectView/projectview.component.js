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
var projects_service_1 = require('../../services/projects/projects.service');
var _ = require("lodash");
var ProjectViewComponent = (function () {
    function ProjectViewComponent(route, projectsService, snackBar) {
        this.route = route;
        this.projectsService = projectsService;
        this.snackBar = snackBar;
        this.project = {};
    }
    ProjectViewComponent.prototype.ngOnInit = function () {
        this.getProject();
    };
    ProjectViewComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    ProjectViewComponent.prototype.getProject = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.projectsService.getProjectById(params['id']); })
            .subscribe(function (project) {
            console.log(project);
            _this.project = project;
            if (_this.project.comments) {
                _.reverse(_this.project.comments);
            }
        });
    };
    ProjectViewComponent.prototype.insertComment = function () {
        var _this = this;
        this.projectsService.insertComment(this.comment, this.project.id)
            .then(function (comment) {
            if (comment.comment != 'error' && comment.username) {
                _this.comment = "";
                _this.project.comments.splice(0, 0, comment);
            }
            else {
                _this.openSnackBar("Comment was not added", "Try Again!");
            }
        });
    };
    ProjectViewComponent.prototype.deleteComment = function (comment) {
        var _this = this;
        this.projectsService.deleteComment(comment, this.project.id)
            .then(function (comment) {
            console.log(comment);
            if (comment.comment != 'error' && comment.username) {
                _.remove(_this.project.comments, function (c) {
                    return (c.comment == comment.comment && c.username == comment.username && c.date == comment.date);
                });
            }
            else {
                _this.openSnackBar("Comment couldn't be deleted", "Try Again!");
            }
        });
    };
    ProjectViewComponent.prototype.upvote = function () {
        var _this = this;
        this.projectsService.upvote(this.project.id, "pulkit")
            .then(function (res) {
            _this.project.upvotes = res.upvotes;
            _this.project.downvotes = res.downvotes;
        });
    };
    ProjectViewComponent.prototype.downvote = function () {
        var _this = this;
        this.projectsService.downvote(this.project.id, "pulkit")
            .then(function (res) {
            _this.project.upvotes = res.upvotes;
            _this.project.downvotes = res.downvotes;
        });
    };
    ProjectViewComponent = __decorate([
        core_1.Component({
            selector: 'project-view',
            templateUrl: './projectview.component.html',
            moduleId: module.id,
            providers: [projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, projects_service_1.ProjectsService, material_1.MdSnackBar])
    ], ProjectViewComponent);
    return ProjectViewComponent;
}());
exports.ProjectViewComponent = ProjectViewComponent;
//# sourceMappingURL=projectview.component.js.map