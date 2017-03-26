import { Component, OnInit } from '@angular/core';
import { LicensesService } from '../../services/licenses/licenses.service';
import * as _ from "lodash";

@Component({
  selector: 'add-project',
  templateUrl: './addProject.component.html',
  moduleId: module.id,
  providers: [LicensesService]
})
export class AddProjectComponent implements OnInit { 
  licenses: Object[];
  tag: string;
  licenseSelected: Object;
  Project: ;
  
  ngOnInit() : void {
    this.licensesService.getLicenses().then(licenses => {
      this.licenses = licenses
      this.licenseSelected = this.licenses[0];
    });
  }

  constructor(private licensesService: LicensesService) {
    this.Project = {
      tags: []
    };
  }

  addTag (): void {
    if(this.tag.length != 0){
      this.tag = this.tag.toLowerCase();
      for(let i in this.Project.tags){
        if(this.Project.tags[i] === this.tag)
          return
      }
      this.Project.tags.push(this.tag);
      this.tag = "";
    }
  }

  removeTag (tag: string): void {
    _.remove(this.Project.tags, function(n) {
      return n === tag;
    });
  }
}
