import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProjectComponent } from './components/addProject/addProject.component';
import { AddQuestionComponent } from './components/addQuestion/addQuestion.component';
import { ProjectsFeedComponent } from './components/projectsFeed/projectsFeed.component';
import {UserProfileComponent } from './components/userProfile/userProfile.component ';
import { ForumComponent } from './components/forum/forum.component';

const routes: Routes = [
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
      },
      {
        path: 'forum',
        component: ForumComponent
      }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}