import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import  { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AddProjectComponent } from './components/addProject/addProject.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddQuestionComponent } from './components/addQuestion/addQuestion.component';
import { ProjectsFeedComponent } from './components/projectsFeed/projectsFeed.component';
import {UserProfileComponent } from './components/userProfile/userProfile.component ';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditProfileComponent } from './components/editProfile/editProfile.component';
import { ForumComponent } from './components/forum/forum.component';
import { ProjectViewComponent } from './components/projectView/projectview.component';
import { EditProjectComponent } from './components/editProject/editProject.component';
import { QuestionViewComponent } from './components/questionView/questionview.component';
import { EditQuestionComponent } from './components/editQuestion/editQuestion.component';
import { InstituteHomePageComponent } from './components/institute/homePage/homePage.component';
import { AppComponent }  from './app.component';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import{ CookiesService } from './services/cookie/cookiesService.service'
import { AppRoutingModule } from './app-routing.module';

import { BackendUrlService } from './services/backendUrl.service';
import { TabsFilterPipe } from './pipes/tabsFilter.pipe';


@NgModule({
  imports:      [ 
      BrowserModule, 
      MaterialModule,
      FormsModule,
      AppRoutingModule,
      MarkdownModule.forRoot()
    ],
  declarations: [ 
      AppComponent,
      NavbarComponent,
      AddProjectComponent,
      FooterComponent,
      AddQuestionComponent,
      ProjectsFeedComponent,
      SigninComponent,
      SignupComponent,
      EditProfileComponent,
      UserProfileComponent,
      ForumComponent,
      ProjectViewComponent,
      EditProjectComponent,
      TabsFilterPipe,
      QuestionViewComponent,
      EditQuestionComponent,
      InstituteHomePageComponent
    ],
  bootstrap:    [ AppComponent ],
  providers: [ BackendUrlService,
               CookieService,
               CookiesService
  ]
})
export class AppModule { }
