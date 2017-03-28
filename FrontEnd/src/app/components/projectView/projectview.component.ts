import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ProjectsService } from '../../services/projects/projects.service';
import  { Project } from '../../classTemplates/project/project'
import * as _ from "lodash";

@Component({
  selector: 'project-view',
  templateUrl: './projectview.component.html',
  moduleId: module.id,
  providers: [ProjectsService]
})
export class ProjectViewComponent implements OnInit { 
  project: Project;
  
  ngOnInit() : void {
    // this.getProject()
  }

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
    ) {
      this.project= {};
      this.project.title = "NG2"
      this.project.username = "Anubhav"
      // this.project.readme = `# Anubhav`;
      this.project.description = `Angular 2 projects`
      this.project.tags = [
                            "army",
                            "Social",
                            "java",
                            "mongo"
                          ]
    }

  getProject(): void {
    this.route.params
        .switchMap((params: Params) => this.projectsService.getProjectById(params['id']))
        .subscribe(project => this.project = project);
  }
}
