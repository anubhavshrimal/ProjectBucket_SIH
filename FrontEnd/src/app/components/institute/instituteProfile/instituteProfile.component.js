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
var instituteProfile_service_1 = require('../../../services/instituteProfile/instituteProfile.service');
require('rxjs/add/operator/switchMap');
var InstituteProfileComponent = (function () {
    function InstituteProfileComponent(instituteProfileService, route) {
        this.instituteProfileService = instituteProfileService;
        this.route = route;
        this.projects = [
            { cols: 2, rows: 1 },
            { cols: 2, rows: 1 },
            { cols: 2, rows: 1 },
            { cols: 2, rows: 1 },
        ];
        this.licenses = [
            {
                name: "None",
                text: ""
            },
            {
                name: "MIT",
                text: "MIT open source to all"
            }
        ];
        this.user = {};
    }
    InstituteProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.instituteProfileService.instituteProfile(params['username']); })
            .subscribe(function (user) {
            console.log("1");
            console.log(user);
            _this.user = user;
            console.log(user.favourite_tag);
        });
        this.route.params
            .switchMap(function (params) { return _this.instituteProfileService.getQuestions(params['username']); })
            .subscribe(function (user) {
            console.log("2");
            console.log(user);
        });
        this.route.params
            .switchMap(function (params) { return _this.instituteProfileService.getProjects(params['username']); })
            .subscribe(function (user) {
            console.log("3");
            console.log(user);
        });
    };
    InstituteProfileComponent = __decorate([
        core_1.Component({
            selector: 'institute-profile',
            templateUrl: './instituteProfile.component.html',
            moduleId: module.id,
            providers: [InstituteProfileComponent, instituteProfile_service_1.InstituteProfileService]
        }), 
        __metadata('design:paramtypes', [instituteProfile_service_1.InstituteProfileService, router_1.ActivatedRoute])
    ], InstituteProfileComponent);
    return InstituteProfileComponent;
}());
exports.InstituteProfileComponent = InstituteProfileComponent;
//# sourceMappingURL=instituteProfile.component.js.map