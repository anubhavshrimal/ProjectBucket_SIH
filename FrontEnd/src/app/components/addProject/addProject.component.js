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
var AddProjectComponent = (function () {
    function AddProjectComponent() {
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
        this.tags = [];
    }
    AddProjectComponent.prototype.addTag = function () {
        if (this.tag.length != 0) {
            for (var i in this.tags) {
                if (this.tags[i] === this.tag)
                    return;
            }
            this.tags.push(this.tag);
            this.tag = "";
        }
    };
    AddProjectComponent.prototype.removeTag = function (tag) {
        for (var i in this.tags) {
            if (this.tags[i] === tag)
                delete this.tags[i];
        }
    };
    AddProjectComponent = __decorate([
        core_1.Component({
            selector: 'add-project',
            templateUrl: './addProject.component.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], AddProjectComponent);
    return AddProjectComponent;
}());
exports.AddProjectComponent = AddProjectComponent;
//# sourceMappingURL=addProject.component.js.map