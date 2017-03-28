import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div *ngIf="!loggedIn">
    <signin (childEvent)="loggedIn=$event"></signin>
  </div>
  <div [hidden]="!loggedIn">
    <navbar></navbar>
    <router-outlet></router-outlet>
    <footer></footer>
  </div>
`,
  moduleId: module.id
})
export class AppComponent  {
  loggedIn: Boolean;

  constructor() {
    this.loggedIn = false;
  }
}
