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
var router_1 = require('@angular/router');
var SigninComponent = (function () {
    function SigninComponent(signinService, router) {
        this.signinService = signinService;
        this.router = router;
        this.childEvent = new core_1.EventEmitter();
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
        this.signup1 = true;
    }
    SigninComponent.prototype.signUp = function (fullName, mailid, password) {
        this.signup1 = false;
        this.signup2 = true;
        console.log(fullName, mailid, password);
        return this.signup1;
    };
    SigninComponent.prototype.login = function (userName, password) {
        var _this = this;
        console.log(userName, password);
        this.signinService.login(userName, password).then(function (data) {
            if (data) {
                _this.childEvent.emit(true);
                _this.router.navigate(['/projects-feed']);
            }
            console.log(data);
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'signin',
            templateUrl: './signin.component.html',
            moduleId: module.id,
            providers: [signin_service_1.SigninService],
            outputs: ["childEvent"]
        }), 
        __metadata('design:paramtypes', [signin_service_1.SigninService, router_1.Router])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map