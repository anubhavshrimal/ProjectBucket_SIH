import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

  <div>
    <navbar *ngIf="userHonor=='c'"></navbar>
    <institute-navbar *ngIf="userHonor=='i'"></institute-navbar>
    <router-outlet></router-outlet>
    <footer></footer>
  </div>
`,
  moduleId: module.id
})
export class AppComponent  {
  loggedIn: Boolean;
  userHonor: string;
  constructor() {
    this.userHonor = "i";
  }
}
