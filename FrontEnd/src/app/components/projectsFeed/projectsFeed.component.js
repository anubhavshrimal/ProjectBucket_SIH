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
var projects_service_1 = require('../../services/projects/projects.service');
var ProjectsFeedComponent = (function () {
    function ProjectsFeedComponent(projectsService, router) {
        this.projectsService = projectsService;
        this.router = router;
        this.projects = [];
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
    ProjectsFeedComponent.prototype.ngOnInit = function () {
        this.getProjectsFeed();
    };
    ProjectsFeedComponent.prototype.gotoProject = function (id, url_title) {
        this.router.navigate(["/projects", id, url_title]);
    };
    ProjectsFeedComponent.prototype.gotoUserProfile = function (username) {
        this.router.navigate(["/user-profile", username]);
    };
    ProjectsFeedComponent.prototype.getProjectsFeed = function () {
        var _this = this;
        this.projectsService.getProjectsFeed()
            .then(function (projectsFeed) {
            console.log(projectsFeed);
            _this.projects = projectsFeed;
        });
    };
    ProjectsFeedComponent.prototype.upvote = function (project) {
        this.projectsService.upvote(project.id, "hsharma")
            .then(function (res) {
            project.upvotes = res.upvotes;
            project.downvotes = res.downvotes;
        });
    };
    ProjectsFeedComponent.prototype.downvote = function (project) {
        this.projectsService.downvote(project.id, "hsharma")
            .then(function (res) {
            project.upvotes = res.upvotes;
            project.downvotes = res.downvotes;
        });
    };
    ProjectsFeedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'projects-feed',
            templateUrl: './projectsFeed.component.html',
            styles: [
                "a {\n            color: teal; \n            text-decoration:none\n        }"
            ],
            providers: [projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [projects_service_1.ProjectsService, router_1.Router])
    ], ProjectsFeedComponent);
    return ProjectsFeedComponent;
}());
exports.ProjectsFeedComponent = ProjectsFeedComponent;
//# sourceMappingURL=projectsFeed.component.js.map