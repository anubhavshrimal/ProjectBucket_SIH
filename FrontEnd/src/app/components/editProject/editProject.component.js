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
var projects_service_1 = require('../../services/projects/projects.service');
var _ = require("lodash");
var EditProjectComponent = (function () {
    function EditProjectComponent(licensesService, projectsService, route, router, snackBar) {
        this.licensesService = licensesService;
        this.projectsService = projectsService;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.project = {};
        this.readmeChecked = false;
    }
    EditProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.licensesService.getLicensesTitles().then(function (licenses) {
            _this.licenses = licenses;
            _this.project.license = String(_this.licenses[0]);
        });
        this.getProject();
    };
    EditProjectComponent.prototype.addTag = function () {
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
    EditProjectComponent.prototype.removeTag = function (tag) {
        _.remove(this.project.tags, function (n) {
            return n === tag;
        });
    };
    EditProjectComponent.prototype.initialiseReadme = function () {
        if (this.readmeChecked = !this.readmeChecked) {
            this.project.readme = "# " + this.project.title;
        }
        else {
            this.project.readme = "";
        }
    };
    EditProjectComponent.prototype.updateProject = function () {
        var _this = this;
        this.projectsService.update(this.project)
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
    EditProjectComponent.prototype.getProject = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.projectsService.getProjectById(params['id']); })
            .subscribe(function (project) {
            console.log(project);
            _this.project = project;
            if (_this.project.readme) {
                _this.readmeChecked = true;
            }
            if (_this.project.comments) {
                _.reverse(_this.project.comments);
            }
        });
    };
    EditProjectComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    EditProjectComponent = __decorate([
        core_1.Component({
            selector: 'edit-project',
            templateUrl: './editProject.component.html',
            moduleId: module.id,
            providers: [licenses_service_1.LicensesService, projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [licenses_service_1.LicensesService, projects_service_1.ProjectsService, router_1.ActivatedRoute, router_1.Router, material_1.MdSnackBar])
    ], EditProjectComponent);
    return EditProjectComponent;
}());
exports.EditProjectComponent = EditProjectComponent;
//# sourceMappingURL=editProject.component.js.map