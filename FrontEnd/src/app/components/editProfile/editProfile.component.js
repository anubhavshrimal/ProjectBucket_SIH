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
var editProfile_service_1 = require('../../services/editProfile/editProfile.service');
var EditProfileComponent = (function () {
    function EditProfileComponent(editProfileService) {
        this.editProfileService = editProfileService;
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
    }
    EditProfileComponent.prototype.update = function () {
        this.editProfileService.updateProfile().then(function (data) { return console.log(data); });
    };
    EditProfileComponent = __decorate([
        core_1.Component({
            selector: 'edit-profile',
            templateUrl: './editProfile.component.html',
            moduleId: module.id,
            providers: [editProfile_service_1.EditProfileService]
        }), 
        __metadata('design:paramtypes', [editProfile_service_1.EditProfileService])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
exports.EditProfileComponent = EditProfileComponent;
//# sourceMappingURL=editProfile.component.js.map