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
var NavbarComponent = (function () {
    function NavbarComponent(router) {
        this.router = router;
        this.user = {
            'rating': 245,
            'profile_url': 'app/assets/male_user.png',
        };
        this.add_new_menu = [
            {
                name: 'Add new project',
                link: '/add-project'
            },
            {
                name: 'Ask new question',
                link: '/add-question'
            }
        ];
        this.notifications_menu = [
            {
                name: 'Sign up for SIH 2017',
                link: '/sih2017'
            }
        ];
        this.trophy_menu = [
            {
                name: 'Noobie',
                link: '/noobielink'
            }
        ];
        this.extras_menu = [
            {
                name: 'Settings',
                link: '/settings'
            },
            {
                name: 'Help',
                link: '/help'
            },
            {
                name: 'Logout',
                link: '/logout'
            }
        ];
    }
    NavbarComponent.prototype.gotoUserProfile = function () {
        this.user.username = 'mit';
        this.router.navigate(['/institute-profile', this.user.username]);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'institute-navbar',
            templateUrl: './instituteNavbar.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=instituteNavbar.component.js.map