import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProjectComponent } from './components/addProject/addProject.component';
import { AddQuestionComponent } from './components/addQuestion/addQuestion.component';
import { ProjectsFeedComponent } from './components/projectsFeed/projectsFeed.component';
import {UserProfileComponent } from './components/userProfile/userProfile.component ';
import {EditProfileComponent} from './components/editProfile/editProfile.component';
import { EditProjectComponent } from './components/editProject/editProject.component';
import { ForumComponent } from './components/forum/forum.component';
import { ProjectViewComponent } from './components/projectView/projectview.component';
import { SigninComponent } from './components/signin/signin.component';
import { QuestionViewComponent } from './components/questionView/questionview.component';
import { AdminPanelComponent } from './components/adminPanel/adminPanel.component';

import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
      {
        path: '',
        redirectTo: '/projects-feed',
        pathMatch: 'full',
        canActivate: [LoggedInGuard]
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
        path: 'user-profile/:username',
        component: UserProfileComponent
      },
      {
        path: 'forum',
        component: ForumComponent
      },
      {
        path: 'projects/:id/:title',
        component: ProjectViewComponent
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent
      },
      {
        path: 'login',
        component: SigninComponent
      }, 
      { 
        path: 'projects/update/:id/:title', 
        component: EditProjectComponent 
      },
    {
        path: 'questions/:id/:title',
        component: QuestionViewComponent
    },
    {
        path: 'admin-panel',
        component: AdminPanelComponent
    }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}