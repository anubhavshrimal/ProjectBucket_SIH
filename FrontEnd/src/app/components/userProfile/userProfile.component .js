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
        /*this.user.name="";
        this.user.bio = "";
        this.user.favourite_tags = "";
        this.user.followers = "";
        this.user.following = "";
        this.user.rating = "";
        this.user.username = "";
        this.user.password = "";
        this.user.gender = "";
        this.user.date = "";
        this.user.category = "";
        this.user.institute = "";
        this.user.contributing = "";
        this.user.contact_information = "";
        this.user.question_answer = "";
        this.user.question_ask = "";*/
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.userProfileService.userProfile(params['username']); })
            .subscribe(function (user) {
            console.log(user);
        });
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'user-profile',
            templateUrl: './userProfile.component.html',
            moduleId: module.id,
            providers: [userProfile_service_1.UserProfileService]
        }), 
        __metadata('design:paramtypes', [userProfile_service_1.UserProfileService, router_1.ActivatedRoute])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=userProfile.component .js.map