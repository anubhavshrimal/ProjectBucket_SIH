import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {settings} from '../pages/settings/settings';
import {logout} from '../pages/logout/logout';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {userprofile} from '../pages/userprofile/userprofile';
import {help} from '../pages/help/help';
import {Project} from '../pages/userprofile/Project';
import {TopRatedUser} from '../pages/TopRatedUser/TopRatedUser';
import {LoginSection} from '../pages/LoginSection/LoginSection';
//import {AddProject}  from '../pages/AddProject/AddProject';
//import {QuestionForum} from '../pages/QuestionForum/QuestionForum';
 @Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Page1 },
      {title: 'Profile',component:userprofile},
       {title: 'TopRatedUser',component:TopRatedUser},
        //{title: 'QuestionForum',component:QuestionForum},
      {title:'Settings',component:settings},
       {title:'Logout',component:logout},
       {title:'Help',component:help},
      { title: 'Page Two', component: Page2 }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
