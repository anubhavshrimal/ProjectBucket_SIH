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
var licenses_service_1 = require('../../services/licenses/licenses.service');
var projects_service_1 = require('../../services/projects/projects.service');
var _ = require("lodash");
var AddProjectComponent = (function () {
    function AddProjectComponent(licensesService, projectsService, router, snackBar) {
        this.licensesService = licensesService;
        this.projectsService = projectsService;
        this.router = router;
        this.snackBar = snackBar;
        this.project = {};
        this.project.tags = [];
        this.project._private = "no";
        this.project.zip_file = [];
        this.project.images = [];
        this.project.video_url = [];
        this.readmeChecked = false;
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.licensesService.getLicensesTitles().then(function (licenses) {
            _this.licenses = licenses;
            _this.project.license = String(_this.licenses[0]);
        });
    };
    AddProjectComponent.prototype.addTag = function () {
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
    AddProjectComponent.prototype.removeTag = function (tag) {
        _.remove(this.project.tags, function (n) {
            return n === tag;
        });
    };
    AddProjectComponent.prototype.initialiseReadme = function () {
        if (this.readmeChecked = !this.readmeChecked) {
            this.project.readme = "# " + this.project.title;
        }
        console.log(this.readmeChecked);
    };
    AddProjectComponent.prototype.addProject = function () {
        var _this = this;
        this.projectsService.create(this.project, "pulkit")
            .then(function (project) {
            if (project.upsertedId) {
                _this.router.navigate(["/projects", project.upsertedId, project.message]);
            }
            else {
                _this.openSnackBar("Project couldn't be added!", "Try Again!");
            }
        });
    };
    AddProjectComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    AddProjectComponent = __decorate([
        core_1.Component({
            selector: 'add-project',
            templateUrl: './addProject.component.html',
            moduleId: module.id,
            providers: [licenses_service_1.LicensesService, projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [licenses_service_1.LicensesService, projects_service_1.ProjectsService, router_1.Router, material_1.MdSnackBar])
    ], AddProjectComponent);
    return AddProjectComponent;
}());
exports.AddProjectComponent = AddProjectComponent;
//# sourceMappingURL=addProject.component.js.map