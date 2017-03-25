import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import  { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AddProjectComponent } from './components/addProject/addProject.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddQuestionComponent } from './components/addQuestion/addQuestion.component';
import { ProjectsFeedComponent } from './components/projectsFeed/projectsFeed.component';
import {UserProfileComponent } from './components/userProfile/userProfile.component ';
import { SigninComponent } from './components/signin/signin.component';
import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ 
      BrowserModule, 
      MaterialModule,
      FormsModule,
      RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/projects-feed',
        pathMatch: 'full'
      },
      {
        path: 'projects-feed',
        component: ProjectsFeedComponent
      },
      {
        path: 'add-project',
        component: AddProjectComponent
      },
      {
        path: 'add-question',
        component: AddQuestionComponent
      },
      {
        path: 'user-profile',
        component: UserProfileComponent
      }
    ])
    ],
  declarations: [ 
      AppComponent,
      NavbarComponent,
      AddProjectComponent,
      FooterComponent,
      AddQuestionComponent,
      ProjectsFeedComponent,
      SigninComponent,
      UserProfileComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
