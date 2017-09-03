import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { QuestionsService } from '../../services/questions/questions.service';
import { Question } from '../../classTemplates/question/question';

@Component({
    selector: 'forum',
    templateUrl: './forum.component.html',
    styles: [
        `a {
            color: teal; 
            text-decoration:none
        }`
    ],
    providers: [QuestionsService]
})
export class ForumComponent implements OnInit {
    tabs: Array<Object>;
    questions: Array<Question>;

    ngOnInit(): void {
        this.getForumFeed();
    }

    constructor(
        private questionsService: QuestionsService,
        private router: Router
    ) {
        this.questions = [];
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

    gotoQuestion(id: string, url_title: string): void {
        url_title = _.replace(url_title, ' ', '-');
        console.log(id, url_title)
        this.router.navigate([`/questions`, id, url_title]);
    }

    gotoUserProfile(username: string): void {
        this.router.navigate([`/user-profile`, username]);
    }

    getForumFeed(): void {
        this.questionsService.getForumFeed()
            .then(forumFeed => {
                console.log(forumFeed)
                if (forumFeed.loggedin) {
                    this.questions = forumFeed.data;
                }
                else {
                    this.router.navigate([`/login`]);
                }
            })
    }

    upvote(project: Question): void {
        this.questionsService.upvote(project.id)
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

    downvote(project: Question): void {
        this.questionsService.downvote(project.id)
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
