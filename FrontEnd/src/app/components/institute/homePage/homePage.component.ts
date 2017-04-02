import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { InstituteQuestionsService } from '../../../services/institute/institute_question.service';
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
    providers: [QuestionsService, InstituteQuestionsService]
})
export class InstituteHomePageComponent implements OnInit {
    tabs: Array<Object>;
    questions: Array<Question>;
    labelList: Array<Object>;
    checkboxes: Object;
    filteredQue: Array<Question>;
    quesGroup: Object;

    ngOnInit(): void {
        this.getDepartments();
    }

    constructor(
        private questionsService: QuestionsService,
        private instituteQuestionsService: InstituteQuestionsService,
        private router: Router
    ) {
        this.labelList = ['All'];
        this.checkboxes = { 'All': true };
        this.questions = [
            // {
            //     id: "dfdhfvkdvksdb324235233",
            //     username: "anubhav",
            //     title: "How to solve water scarcity problems in jaipur",
            //     description: "We have huge scarcity of water in jaipur",
            //     tags: ["Array<string>"],
            //     date: 23423423423423,
            //     department: "Dept. of CS",
            //     upvotes: ["anubhav", "pulkit"],
            //     downvotes: ["anubhav", "pulkit"],
            //     url: "string",
            //     url_title: "string",
            //     answers: [{
            //         username: "anubhav",
            //         answer: "hello tesitng ans",
            //         date: 23423423423423,
            //         upvotes: ["anubhav", "pulkit"],
            //         downvotes: ["anubhav", "pulkit"]
            //     }],
            // },
            // {
            //     id: "dfdhfvkdvksdb324235233",
            //     username: "anubhav",
            //     title: "How to solve water scarcity problems in jaipur",
            //     description: "We have huge scarcity of water in jaipur",
            //     tags: ["Array<string>"],
            //     date: 23423423423423,
            //     department: "Dept. of EC",
            //     upvotes: ["anubhav", "pulkit"],
            //     downvotes: ["anubhav", "pulkit"],
            //     url: "string",
            //     url_title: "string",
            //     answers: [{
            //         username: "anubhav",
            //         answer: "hello tesitng ans",
            //         date: 23423423423423,
            //         upvotes: ["anubhav", "pulkit"],
            //         downvotes: ["anubhav", "pulkit"]
            //     }],
            // }
        ];
    }

    filter(checkboxes: Object) {
        let filteredQue: Array<Question> = [];
        let quesGroup = this.quesGroup;
        let questions = this.questions;
        let keys = _.keys(checkboxes)
        _.forEach(keys, function (k) {
            if (k == 'All' && checkboxes[k]) {
                filteredQue = questions;
                return false;
            }
            if (checkboxes[k]) {
                if (quesGroup[k])
                    filteredQue = _.concat(filteredQue, quesGroup[k])
            }
        })
        console.log(filteredQue)
        this.filteredQue = filteredQue;
    }

    getDepartments(): void {
        this.instituteQuestionsService.getDepartments()
            .then(departments => {
                console.log(departments)
                let labelList = this.labelList;
                this.labelList = _.concat(labelList, departments);
                this.getForumFeed();
            })
    }

    gotoQuestion(id: string, url_title: string): void {
        this.router.navigate([`/questions`, id, url_title]);
    }

    gotoUserProfile(username: string): void {
        this.router.navigate([`/user-profile`, username]);
    }

    getForumFeed(): void {
        this.instituteQuestionsService.getForumFeed()
            .then(forumFeed => {
                console.log(forumFeed)
                this.questions = forumFeed
                this.quesGroup = _.groupBy(this.questions, 'department[0]')
                this.filter(this.checkboxes);
                this.checkboxes = {};
            })
    }

    upvote(project: Question): void {
        this.questionsService.upvote(project.id, "mit")
            .then(res => {
                project.upvotes = res.upvotes
                project.downvotes = res.downvotes
            });
    }

    downvote(project: Question): void {
        this.questionsService.downvote(project.id, "mit")
            .then(res => {
                project.upvotes = res.upvotes
                project.downvotes = res.downvotes
            });
    }
}