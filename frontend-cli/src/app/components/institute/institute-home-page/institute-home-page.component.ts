import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { InstituteQuestionsService } from '../../../services/institute/institute.service';
import { QuestionsService } from '../../../services/questions/questions.service';
import { Question } from '../../../classTemplates/question/question';

@Component({
    selector: 'app-institute-home-page',
    templateUrl: './institute-home-page.component.html',
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
                if (departments.loggedin) {
                    let labelList = this.labelList;
                    this.labelList = _.concat(labelList, departments.data);
                    this.getForumFeed();
                }
                else {
                    this.router.navigate([`/login`]);
                }
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
                if (forumFeed.loggedin) {
                    this.questions = forumFeed.data;
                    this.quesGroup = _.groupBy(this.questions, 'department[0]')
                    this.filter(this.checkboxes);
                    this.checkboxes = {};
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