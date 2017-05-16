import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MdSnackBar } from '@angular/material';

import { ProjectsService } from '../../services/projects/projects.service';
import { Project, Comment } from '../../classTemplates/project/project';
import * as _ from "lodash";

@Component({
  selector: 'project-view',
  templateUrl: './project-view.component.html',
  styles: [],
  providers: [ProjectsService]
})
export class ProjectViewComponent implements OnInit {
  project: Project;
  comment: string;
  ngOnInit(): void {
    this.getProject()
  }

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private snackBar: MdSnackBar,
    private router: Router
  ) {
    this.project = {};
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
        if (project.loggedin) {
          this.project = project;
          if (this.project.comments) {
            _.reverse(this.project.comments)
          }
        }
        else {
          this.router.navigate([`/login`]);
        }
      });
  }

  insertComment(): void {
    this.projectsService.insertComment(this.comment, this.project.id)
      .then(comment => {
        if (comment.loggedin) {
          if (comment.comment != 'error' && comment.username) {
            this.comment = "";
            this.project.comments.splice(0, 0, comment);
          }
          else {
            this.openSnackBar("Comment was not added", "Try Again!");
          }
        }
        else {
          this.router.navigate([`/login`]);
        }
      })
  }

  deleteComment(comment: Comment): void {
    this.projectsService.deleteComment(comment, this.project.id)
      .then(comment => {
        console.log(comment)
        if (comment.loggedin) {
          if (comment.comment != 'error' && comment.username) {
            _.remove(this.project.comments, function (c) {
              return (c.comment == comment.comment && c.username == comment.username && c.date == comment.date);
            });
          }
          else {
            this.openSnackBar("Comment couldn't be deleted", "Try Again!");
          }
        }
        else {
          this.router.navigate([`/login`]);
        }
      });
  }

  upvote(): void {
    this.projectsService.upvote(this.project.id)
      .then(res => {
        if (res.loggedin) {
          this.project.upvotes = res.upvotes
          this.project.downvotes = res.downvotes
        }
        else {
          this.router.navigate([`/login`]);
        }
      });
  }

  downvote(): void {
    this.projectsService.downvote(this.project.id)
      .then(res => {
        if (res.loggedin) {
          this.project.upvotes = res.upvotes
          this.project.downvotes = res.downvotes
        }
        else {
          this.router.navigate([`/login`]);
        }
      });
  }
}
