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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var material_1 = require('@angular/material');
var angular2_markdown_1 = require('angular2-markdown');
var navbar_component_1 = require('./components/navbar/navbar.component');
var addProject_component_1 = require('./components/addProject/addProject.component');
var footer_component_1 = require('./components/footer/footer.component');
var addQuestion_component_1 = require('./components/addQuestion/addQuestion.component');
var projectsFeed_component_1 = require('./components/projectsFeed/projectsFeed.component');
var userProfile_component_1 = require('./components/userProfile/userProfile.component ');
var signin_component_1 = require('./components/signin/signin.component');
var signup_component_1 = require('./components/signup/signup.component');
var editProfile_component_1 = require('./components/editProfile/editProfile.component');
var forum_component_1 = require('./components/forum/forum.component');
var projectview_component_1 = require('./components/projectView/projectview.component');
var editProject_component_1 = require('./components/editProject/editProject.component');
var questionview_component_1 = require('./components/questionView/questionview.component');
var editQuestion_component_1 = require('./components/editQuestion/editQuestion.component');
var adminPanel_component_1 = require('./components/adminPanel/adminPanel.component');
var adminNavbar_component_1 = require('./components/adminPanel/adminNavbar/adminNavbar.component');
var homePage_component_1 = require('./components/institute/homePage/homePage.component');
var app_component_1 = require('./app.component');
var cookies_service_1 = require('angular2-cookie/services/cookies.service');
var cookiesService_service_1 = require('./services/cookie/cookiesService.service');
var app_routing_module_1 = require('./app-routing.module');
var backendUrl_service_1 = require('./services/backendUrl.service');
var tabsFilter_pipe_1 = require('./pipes/tabsFilter.pipe');
var checkbox_pipe_1 = require('./pipes/checkbox.pipe');
var angular2_datatable_1 = require("angular2-datatable");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                material_1.MaterialModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                angular2_markdown_1.MarkdownModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                addProject_component_1.AddProjectComponent,
                footer_component_1.FooterComponent,
                addQuestion_component_1.AddQuestionComponent,
                projectsFeed_component_1.ProjectsFeedComponent,
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
                editProfile_component_1.EditProfileComponent,
                userProfile_component_1.UserProfileComponent,
                forum_component_1.ForumComponent,
                projectview_component_1.ProjectViewComponent,
                editProject_component_1.EditProjectComponent,
                tabsFilter_pipe_1.TabsFilterPipe,
                questionview_component_1.QuestionViewComponent,
                editQuestion_component_1.EditQuestionComponent,
                adminPanel_component_1.AdminPanelComponent,
                adminNavbar_component_1.AdminNavbarComponent,
                homePage_component_1.InstituteHomePageComponent,
                checkbox_pipe_1.CheckboxFilterPipe,
                angular2_datatable_1.DataTableModule
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [backendUrl_service_1.BackendUrlService,
                cookies_service_1.CookieService,
                cookiesService_service_1.CookiesService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map