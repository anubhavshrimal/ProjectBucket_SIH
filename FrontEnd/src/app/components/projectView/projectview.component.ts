import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {MdSnackBar} from '@angular/material';

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
    private projectsService: ProjectsService,
    private snackBar: MdSnackBar
    ) {
      this.project= {};
    }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getProject(): void {
    this.route.params
        .switchMap((params: Params) => this.projectsService.getProjectById(params['id']))
        .subscribe(project => {
          console.log(project);
          this.project = project;
          if(this.project.comments) {
            _.reverse(this.project.comments)
          }
        });
  }

  insertComment(): void {
    this.projectsService.insertComment(this.comment, this.project.id)
      .then(comment => {
        if(comment.comment != 'error' && comment.username) {
          this.comment = "";
          this.project.comments.splice(0, 0, comment);
        }
        else {
          this.openSnackBar("Comment was not added", "Try Again!");
        }
      })
  }

  deleteComment(comment: Comment): void {
    this.projectsService.deleteComment(comment, this.project.id)
      .then(comment => {
        console.log(comment)
        if(comment.comment != 'error' && comment.username) {
          _.remove(this.project.comments, function(c){
            return (c.comment == comment.comment && c.username == comment.username && c.date == comment.date);
          });
        }
        else {
          this.openSnackBar("Comment couldn't be deleted", "Try Again!");
        }
      });
  }

  upvote(): void {
    this.projectsService.upvote(this.project.id, "pulkit")
        .then(res => {
                this.project.upvotes = res.upvotes
                this.project.downvotes = res.downvotes
            });
  }

  downvote(): void {
    this.projectsService.downvote(this.project.id, "pulkit")
        .then(res => {
                this.project.upvotes = res.upvotes
                this.project.downvotes = res.downvotes
            });
  }
}
