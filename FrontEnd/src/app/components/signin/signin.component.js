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
var _ = require("lodash");
var SigninComponent = (function () {
    // sessionVar : boolean = true;
    function SigninComponent() {
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
    SigninComponent.prototype.addInterests = function () {
        if (this.interest.length != 0) {
            for (var i in this.interests) {
                if (this.interests[i] === this.interest)
                    return;
            }
            this.interests.push(this.interest);
            this.interest = "";
        }
    };
    SigninComponent.prototype.removeInterests = function (interest) {
        _.remove(this.interests, function (n) {
            return n === interest;
        });
    };
    SigninComponent.prototype.signUp1 = function () {
        this.signup1 = false;
        this.signup2 = true;
        return this.signup1;
    };
    SigninComponent.prototype.category1 = function () {
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
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'signin',
            templateUrl: './signin.component.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map