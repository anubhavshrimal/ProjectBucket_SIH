import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {settings} from '../pages/settings/settings';
import {logout} from '../pages/logout/logout';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {userprofile} from '../pages/userprofile/userprofile';
import {help} from '../pages/help/help';
import { userprofile as ModalBasicPage, ModalContentPage } from '../pages/userprofile/userprofile';
import {Project} from '../pages/userprofile/Project';
import {TopRatedUser} from '../pages/TopRatedUser/TopRatedUser';
//import  {QuestionForum} from '../pages/QuestionForum/QuestionForum';
import {AddProject}  from '../pages/page1/AddProject';
import {AddQuestion}  from '../pages/page1/AddQuestion';
import {LoginSection} from '../pages/LoginSection/LoginSection';
@NgModule({
  declarations: [
    MyApp,
    settings,
    userprofile,
    ModalContentPage,
    logout,
    AddQuestion,
  AddProject,
  LoginSection,
   
    Page1,
    TopRatedUser,
    help,
    Project,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    userprofile,
      ModalContentPage,
    settings,
    help,
AddProject,
AddQuestion,
 LoginSection,
    logout,
    TopRatedUser,
    Project,      
    Page1,
    Page2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
