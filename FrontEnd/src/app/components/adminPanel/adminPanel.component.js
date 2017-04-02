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
var AdminPanelComponent = (function () {
    function AdminPanelComponent() {
        var data = '[{"Institute":"Swami Keshvanand Institute Of Technology","rating":"12","solutions":"56","university":"RTU"},{"Institute":"Manipal Institute Of Tech.","rating":"10","solutions":"93","university":"Manipal University"},{"Institute":"SIT","rating":"32","solutions":"36","university":"LPU"},{"Institute":"SKT","rating":"62","solutions":"26","university":"RTU"},{"Institute":"Global Institute Of Tech","rating":"92","solutions":"16","university":"RTU"},{"Institute":"OIT","rating":"78","solutions":"16","university":"DU"}]';
        this.data = JSON.parse(data);
        this.topuser = true;
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
    };
    AdminPanelComponent.prototype.toggel = function () {
        this.topuser = true;
        this.register = false;
    };
    AdminPanelComponent.prototype.addInstitute = function (username, password, university, college, state, city, email, mobile, address) {
        this.topuser = false;
        this.register = true;
        console.log(username, password, state);
        /*this.adminPanel.adminPanel(username, password, university, college, state, city, email, mobile, address).then(data => {

        })*/
    };
    AdminPanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-panel',
            templateUrl: './adminPanel.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());
exports.AdminPanelComponent = AdminPanelComponent;
//# sourceMappingURL=adminPanel.component.js.map