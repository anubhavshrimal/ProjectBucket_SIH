import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import  { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AddProjectComponent } from './components/addProject/addProject.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddQuestionComponent } from './components/addQuestion/addQuestion.component';
import { ProjectsFeedComponent } from './components/projectsFeed/projectsFeed.component';
import {UserProfileComponent } from './components/userProfile/userProfile.component ';
import { SigninComponent } from './components/signin/signin.component';
import { ForumComponent } from './components/forum/forum.component';
import { AppComponent }  from './app.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
      BrowserModule, 
      MaterialModule,
      FormsModule,
      AppRoutingModule
    ],
  declarations: [ 
      AppComponent,
      NavbarComponent,
      AddProjectComponent,
      FooterComponent,
      AddQuestionComponent,
      ProjectsFeedComponent,
      SigninComponent,
      UserProfileComponent,
      ForumComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
