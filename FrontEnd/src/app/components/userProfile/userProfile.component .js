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
var userProfile_service_1 = require('../../services/userProfile/userProfile.service');
var questions_service_1 = require('../../services/questions/questions.service');
require('rxjs/add/operator/switchMap');
var UserProfileComponent = (function () {
    function UserProfileComponent(userProfileService, route) {
        this.userProfileService = userProfileService;
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
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.userProfileService.userProfile(params['username']); })
            .subscribe(function (user) {
            console.log("1");
            console.log(user);
            _this.user = user;
            console.log(user.favourite_tag);
        });
        this.route.params
            .switchMap(function (params) { return _this.userProfileService.getQuestions(params['username']); })
            .subscribe(function (user) {
            console.log("2");
            console.log(user);
        });
        this.route.params
            .switchMap(function (params) { return _this.userProfileService.getProjects(params['username']); })
            .subscribe(function (user) {
            console.log("3");
            console.log(user);
        });
    };
    UserProfileComponent.prototype.getProjects = function () {
        console.log("mohit");
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'user-profile',
            templateUrl: './userProfile.component.html',
            moduleId: module.id,
            providers: [userProfile_service_1.UserProfileService, questions_service_1.QuestionsService]
        }), 
        __metadata('design:paramtypes', [userProfile_service_1.UserProfileService, router_1.ActivatedRoute])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=userProfile.component .js.map