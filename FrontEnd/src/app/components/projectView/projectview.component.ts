import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ProjectsService } from '../../services/projects/projects.service';
import  { Project, Comment } from '../../classTemplates/project/project';
import * as _ from "lodash";

@Component({
  selector: 'project-view',
  templateUrl: './projectview.component.html',
  moduleId: module.id,
  providers: [ProjectsService]
})
export class ProjectViewComponent implements OnInit { 
  project: Project;
  comment: string;
  ngOnInit() : void {
    this.getProject()
  }

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
    ) {
      this.project= {};
    }

  getProject(): void {
    this.route.params
        .switchMap((params: Params) => this.projectsService.getProjectById(params['id']))
        .subscribe(project => this.project = project);
  }

  insertComment() : void {
    this.projectsService.insertComment(this.comment, this.project.id)
      .then(comment => {
        if(comment.comment != 'error' && comment.username) {
          this.comment = "";
          this.project.comments.splice(0, 0, comment);
        }
        else {
          
        }
      })
  }
}
