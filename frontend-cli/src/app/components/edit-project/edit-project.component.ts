import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MdSnackBar } from '@angular/material';

import { LicensesService } from '../../services/licenses/licenses.service';
import { ProjectsService } from '../../services/projects/projects.service';
import { Project } from '../../classTemplates/project/project'
import * as _ from "lodash";


@Component({
    selector: 'edit-project',
    templateUrl: './edit-project.component.html',
    styles: [],
    providers: [LicensesService, ProjectsService]
})
export class EditProjectComponent implements OnInit {
    licenses: Object[];
    tag: string;
    project: Project;
    readmeChecked: Boolean;

    ngOnInit(): void {
        this.licensesService.getLicensesTitles().then(licenses => {
            this.licenses = licenses;
            this.project.license = String(this.licenses[0]);
        });
        this.getProject();
    }

    constructor(
        private licensesService: LicensesService,
        private projectsService: ProjectsService,
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MdSnackBar
    ) {
        this.project = {};
        this.readmeChecked = false;
    }

    addTag(): void {
        if (this.tag.length != 0) {
            this.tag = this.tag.toLowerCase();
            for (let i in this.project.tags) {
                if (this.project.tags[i] === this.tag)
                    return
            }
            this.project.tags.push(this.tag);
            this.tag = "";
        }
    }

    removeTag(tag: string): void {
        _.remove(this.project.tags, function (n) {
            return n === tag;
        });
    }

    initialiseReadme() {
        if (this.readmeChecked = !this.readmeChecked) {
            this.project.readme = "# " + this.project.title;
        }
        else {
            this.project.readme = "";
        }
    }

    updateProject(): void {
        this.projectsService.update(this.project)
            .then(response => {
                console.log(response.message);
                if (response.loggedin) {
                    if (response.message == "success") {
                        this.router.navigate([`/projects`, this.project.id, this.project.url_title])
                    } else {
                        this.openSnackBar("There was some error", "Try Again!!");
                    }
                }
                else {
                    this.router.navigate([`/login`]);
                }
            })
    }

    getProject(): void {
        this.route.params
            .switchMap((params: Params) => this.projectsService.getProjectById(params['id']))
            .subscribe(project => {
                console.log(project)
                if (project.loggedin) {
                    this.project = project;
                    if (this.project.readme) {
                        this.readmeChecked = true;
                    }
                    if (this.project.comments) {
                        _.reverse(this.project.comments)
                    }
                } else {
                    this.router.navigate([`/login`]);
                }
            });
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}

