import { Component } from '@angular/core';

@Component({
  selector: 'add-project',
  templateUrl: './addProject.component.html',
  moduleId: module.id
})
export class AddProjectComponent  { 
  licenses: Array<Object>;

  constructor() {
    this.licenses = [
      {
        name: "None",
        text: ""
      },
      {
        name: "MIT",
        text: "MIT open source to all"
      }
    ];
  }
}
