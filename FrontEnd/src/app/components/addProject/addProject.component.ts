import { Component, OnInit } from '@angular/core';

import { LicensesService } from '../../services/licenses/licenses.service';
import { ProjectsService } from '../../services/projects/projects.service';
import  { Project } from '../../classTemplates/project/project'
import * as _ from "lodash";

@Component({
  selector: 'add-project',
  templateUrl: './addProject.component.html',
  moduleId: module.id,
  providers: [LicensesService, ProjectsService]
})
export class AddProjectComponent implements OnInit { 
  licenses: Object[];
  tag: string;
  project: Project;
  
  ngOnInit() : void {
    this.licensesService.getLicensesTitles().then(licenses => {
      this.licenses = licenses;
      this.project.license = String(this.licenses[0]);
    });
  }

  constructor(
    private licensesService: LicensesService,
    private projectsService: ProjectsService
    ) {
    this.project = {};
    this.project.tags = [];
    this.project._private = "no";
    this.project.zip_file = [];
    this.project.images = [];
    this.project.video_url = [];
  }

  addTag (): void {
    if(this.tag.length != 0){
      this.tag = this.tag.toLowerCase();
      for(let i in this.project.tags){
        if(this.project.tags[i] === this.tag)
          return
      }
      this.project.tags.push(this.tag);
      this.tag = "";
    }
  }

  removeTag (tag: string): void {
    _.remove(this.project.tags, function(n) {
      return n === tag;
    });
  }

  initialiseReadme(event: Event) {
    if (event.checked) {
      this.project.readme = "# " + this.project.title;
    }
  }

  addProject(): void {
    this.projectsService.create(this.project)
      .then(project => console.log(project))
  }
}
