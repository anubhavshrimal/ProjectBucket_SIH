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
var signin_service_1 = require('../../services/signin/signin.service');
var _ = require("lodash");
var SignupComponent = (function () {
    function SignupComponent(signinService) {
        this.signinService = signinService;
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
        this.interests = [];
        this.signup1 = true;
        this.categories = ["Student", "Teacher", "Industry Professional", "Other"];
    }
    SignupComponent.prototype.addInterests = function () {
        if (this.interest.length != 0) {
            for (var i in this.interests) {
                if (this.interests[i] === this.interest)
                    return;
            }
            this.interests.push(this.interest);
            this.interest = "";
        }
    };
    SignupComponent.prototype.removeInterests = function (interest) {
        _.remove(this.interests, function (n) {
            return n === interest;
        });
    };
    SignupComponent.prototype.category1 = function () {
        if (this.category == 'Student') {
            this.label = 'Institute';
        }
        else if (this.category == 'Teacher') {
            this.label = 'Institute';
        }
        else if (this.category == 'Industry Professional') {
            this.label = 'Company';
        }
        else {
            this.label = 'Profesion';
        }
        this.categorySelected = true;
    };
    SignupComponent.prototype.signUp = function (username, category, label, mobileNo, interest, country, state, city, bio) {
        console.log(username, category, label, mobileNo, interest, country, state, city, bio);
    };
    SignupComponent.prototype.login = function (userName, password) {
        console.log(userName, password);
        this.signinService.login(userName, password).then(function (data) { return console.log(data); });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'signup',
            templateUrl: './signup.component.html',
            moduleId: module.id,
            providers: [signin_service_1.SigninService]
        }), 
        __metadata('design:paramtypes', [signin_service_1.SigninService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map