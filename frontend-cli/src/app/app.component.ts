import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: Boolean;
  userHonor: string;
  constructor() {
    this.userHonor = "c";
  }
}
