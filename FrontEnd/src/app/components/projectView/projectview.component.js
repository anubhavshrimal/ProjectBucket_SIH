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
var projects_service_1 = require('../../services/projects/projects.service');
var ProjectViewComponent = (function () {
    function ProjectViewComponent(route, projectsService) {
        this.route = route;
        this.projectsService = projectsService;
    }
    ProjectViewComponent.prototype.ngOnInit = function () {
        this.getProject();
    };
    ProjectViewComponent.prototype.getProject = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.projectsService.getProjectById(params['id']); })
            .subscribe(function (project) { return console.log(project); });
    };
    ProjectViewComponent = __decorate([
        core_1.Component({
            selector: 'project-view',
            templateUrl: './projectview.component.html',
            moduleId: module.id,
            providers: [projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, projects_service_1.ProjectsService])
    ], ProjectViewComponent);
    return ProjectViewComponent;
}());
exports.ProjectViewComponent = ProjectViewComponent;
//# sourceMappingURL=projectview.component.js.map