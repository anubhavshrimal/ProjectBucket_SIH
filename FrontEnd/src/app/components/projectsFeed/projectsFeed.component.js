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
var ProjectsFeedComponent = (function () {
    function ProjectsFeedComponent() {
        this.projects = [
            { cols: 2, rows: 1 },
            { cols: 2, rows: 1 },
            { cols: 2, rows: 1 },
            { cols: 2, rows: 1 },
        ];
        this.tabs = [
            {
                tabLabel: 'Interesting',
                tabIcon: 'fa fa-heart'
            },
            {
                tabLabel: 'Hot',
                tabIcon: 'fa fa-fire'
            },
            {
                tabLabel: 'Featured',
                tabIcon: 'fa fa-money'
            }
        ];
    }
    ProjectsFeedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'projects-feed',
            templateUrl: './projectsFeed.component.html',
            styles: [
                "a {\n            color: teal; \n            text-decoration:none\n        }"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsFeedComponent);
    return ProjectsFeedComponent;
}());
exports.ProjectsFeedComponent = ProjectsFeedComponent;
//# sourceMappingURL=projectsFeed.component.js.map