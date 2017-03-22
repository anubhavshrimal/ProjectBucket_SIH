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
  tags: Array<string>;
  tag: string;
  licenseSelected: Object;
  
  ngOnInit() : void {
    this.licensesService.getLicenses().then(licenses => {
      this.licenses = licenses
      this.licenseSelected = this.licenses[0];
    });
  }

  constructor(private licensesService: LicensesService) {
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
    _.remove(this.tags, function(n) {
      return n === tag;
    });
  }
}
