import { Component } from '@angular/core';


@Component({
  selector: 'add-project',
  templateUrl: './addProject.component.html',
  moduleId: module.id
})
export class AddProjectComponent  { 
  licenses: Array<Object>;
  tags: Array<string>;
  tag: string;

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
    this.tags = [];
  }

  addTag (): void {
    if(this.tag.length != 0){
      for(let i in this.tags){
        if(this.tags[i] === this.tag)
          return
      }
      this.tags.push(this.tag);
      this.tag = "";
    }
  }

  removeTag (tag: string): void {
    for(let i in this.tags){
        if(this.tags[i] === tag)
          delete this.tags[i];
      }
  }
}
