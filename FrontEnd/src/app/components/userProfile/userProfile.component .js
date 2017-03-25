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
var UserProfileComponent = (function () {
    function UserProfileComponent() {
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
        this.loggedin = true;
        this.user = {
            'rating': 245,
            'thumbnail': '',
            'profile': '',
            'bio': 'i\'m Mohit, I\'m the gratest, I\'m the best, I\'m Artistxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx',
        };
    }
    UserProfileComponent.prototype.addInterests = function () {
        if (this.interest.length != 0) {
            for (var i in this.interests) {
                if (this.interests[i] === this.interest)
                    return;
            }
            this.interests.push(this.interest);
            this.interest = "";
        }
    };
    UserProfileComponent.prototype.removeInterests = function (interest) {
        _.remove(this.interests, function (n) {
            return n === interest;
        });
    };
    UserProfileComponent.prototype.login = function () {
        this.loggedin = true;
        return this.loggedin;
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'user-profile',
            templateUrl: './userProfile.component.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=userProfile.component .js.map