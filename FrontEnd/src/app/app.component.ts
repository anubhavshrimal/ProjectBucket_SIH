import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div *ngIf="!loggedIn">
    <signin></signin>
  </div>
  <div [hidden]="!loggedIn">
    <router-outlet></router-outlet>
  </div>
`,
  moduleId: module.id
})
export class AppComponent  {
  loggedIn: Boolean;

  constructor() {
    this.loggedIn = true;
  }
}
