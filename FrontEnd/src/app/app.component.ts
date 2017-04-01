import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

  <div>
    <navbar *ngIf="false"></navbar>
    <admin-navbar *ngIf="true"></admin-navbar>
    <router-outlet></router-outlet>
    <footer></footer>
  </div>
`,
  moduleId: module.id
})
export class AppComponent  {
  loggedIn: Boolean;

  constructor() {

  }
}
