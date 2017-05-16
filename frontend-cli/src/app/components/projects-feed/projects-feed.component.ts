import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectsService } from '../../services/projects/projects.service';
import { Project } from '../../classTemplates/project/project'

@Component({
    selector: 'projects-feed',
    templateUrl: './projects-feed.component.html',
    styles: [
        `a {
            color: teal; 
            text-decoration:none
        }`
    ],
    providers: [ProjectsService]
})
export class ProjectsFeedComponent implements OnInit {
    tabs: Array<Object>;
    projects: Array<Project>;

    ngOnInit(): void {
        this.getProjectsFeed();
    }

    constructor(
        private projectsService: ProjectsService,
        private router: Router
    ) {
        this.projects = [];
        this.tabs = [
            {
                tabLabel: 'Interesting',
                tabIcon: 'fa fa-heart'
            },
            {
                tabLabel: 'Trending',
                tabIcon: 'fa fa-fire'
            },
            {
                tabLabel: 'Featured',
                tabIcon: 'fa fa-money'
            }
        ]
    }

    gotoProject(id: string, url_title: string): void {
        this.router.navigate([`/projects`, id, url_title]);
    }

    gotoUserProfile(username: string): void {
        this.router.navigate([`/user-profile`, username]);
    }

    getProjectsFeed(): void {
        this.projectsService.getProjectsFeed()
            .then(projectsFeed => {
                console.log(projectsFeed)
                if (projectsFeed.loggedin) {
                    this.projects = projectsFeed.data;
                }
                else {
                    this.router.navigate([`/login`]);
                }
            })
    }

    upvote(project: Project): void {
        this.projectsService.upvote(project.id)
            .then(res => {
                if (res.loggedin) {
                    project.upvotes = res.upvotes
                    project.downvotes = res.downvotes
                }
                else {
                    this.router.navigate([`/login`]);
                }
            });
    }

    downvote(project: Project): void {
        this.projectsService.downvote(project.id)
            .then(res => {
                if (res.loggedin) {
                    project.upvotes = res.upvotes
                    project.downvotes = res.downvotes
                }
                else {
                    this.router.navigate([`/login`]);
                }
            });
    }
}