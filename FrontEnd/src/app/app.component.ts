import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

  <div>
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

  }
}
