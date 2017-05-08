import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { ProjectsFeedComponent } from './components/projects-feed/projects-feed.component';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { ForumComponent } from './components/forum/forum.component';
import { SigninComponent } from './components/signin/signin.component';
import { QuestionViewComponent } from './components/question-view/question-view.component';
import { InstituteHomePageComponent } from './components/institute/institute-home-page/institute-home-page.component';
import { InstituteProfileComponent } from './components/institute/institute-profile/institute-profile.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
    canActivate: [LoggedInGuard]
  },
  {
    path: 'home',
    component: InstituteHomePageComponent
  },
  // old Routings
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
  },
  {
    path: 'questions/update/:id/:title',
    component: EditQuestionComponent
  },
  {
    path: 'institute-profile/:name',
    component: InstituteProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }