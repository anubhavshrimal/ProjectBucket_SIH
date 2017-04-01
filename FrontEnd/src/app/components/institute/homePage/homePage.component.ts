import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionsService } from '../../../services/questions/questions.service';
import { Question } from '../../../classTemplates/question/question';

@Component({
    moduleId: module.id,
    selector: 'institute-home',
    templateUrl: './homePage.component.html',
    styles: [
        `a {
            color: teal; 
            text-decoration:none
        }`
    ],
    providers: [QuestionsService]
})
export class InstituteHomePageComponent implements OnInit {
    tabs: Array<Object>;
    questions: Array<Question>;
    labelList: Array<Object>;
    checkboxes = {1: true};
    ngOnInit(): void {
        // this.getForumFeed();
    }

    constructor(
        private questionsService: QuestionsService,
        private router: Router
    ) {
        this.labelList = [
            {
                id: 1,
                name: 'All'
            },
            {
                id: 2,
                name: 'Dept. of CS'
            },
            {
                id: 3,
                name: 'Dept. of EC'
            },
            {
                id: 4,
                name: 'Dept. of EE'
            },
            {
                id: 5,
                name: 'Dept. of Civil'
            },
        ];
        this.questions = [
            {
                id: "dfdhfvkdvksdb324235233",
                username: "anubhav",
                title: "How to solve water scarcity problems in jaipur",
                description: "We have huge scarcity of water in jaipur",
                tags: ["Array<string>"],
                date: 23423423423423,
                department: "Dept. of CS",
                upvotes: ["anubhav", "pulkit"],
                downvotes: ["anubhav", "pulkit"],
                url: "string",
                url_title: "string",
                answers: [{
                    username: "anubhav",
                    answer: "hello tesitng ans",
                    date: 23423423423423,
                    upvotes: ["anubhav", "pulkit"],
                    downvotes: ["anubhav", "pulkit"]
                }],
            },
            {
                id: "dfdhfvkdvksdb324235233",
                username: "anubhav",
                title: "How to solve water scarcity problems in jaipur",
                description: "We have huge scarcity of water in jaipur",
                tags: ["Array<string>"],
                date: 23423423423423,
                department: "Dept. of EC",
                upvotes: ["anubhav", "pulkit"],
                downvotes: ["anubhav", "pulkit"],
                url: "string",
                url_title: "string",
                answers: [{
                    username: "anubhav",
                    answer: "hello tesitng ans",
                    date: 23423423423423,
                    upvotes: ["anubhav", "pulkit"],
                    downvotes: ["anubhav", "pulkit"]
                }],
            }
        ];
    }

    gotoQuestion(id: string, url_title: string): void {
        this.router.navigate([`/questions`, id, url_title]);
    }

    gotoUserProfile(username: string): void {
        this.router.navigate([`/user-profile`, username]);
    }

    getForumFeed(): void {
        this.questionsService.getForumFeed()
            .then(forumFeed => {
                console.log(forumFeed)
                this.questions = forumFeed
            })
    }

    upvote(project: Question): void {
        this.questionsService.upvote(project.id)
            .then(res => {
                project.upvotes = res.upvotes
                project.downvotes = res.downvotes
            });
    }

    downvote(project: Question): void {
        this.questionsService.downvote(project.id)
            .then(res => {
                project.upvotes = res.upvotes
                project.downvotes = res.downvotes
            });
    }
}