import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { QuestionsService } from '../../services/questions/questions.service';
import { Question } from '../../classTemplates/question/question';

import * as _ from "lodash";

@Component({
    moduleId: module.id,
    selector: 'add-question',
    templateUrl: './addQuestion.component.html',
    providers: [QuestionsService]
})
export class AddQuestionComponent {
    question: Question;
    tag: string;


    constructor(
        private questionsService: QuestionsService,
        private router: Router,
        private snackBar: MdSnackBar
    ) {
        this.question = {};
        this.question.tags = [];
        this.question.images = [];
    }

    addQuestion(): void {
        this.questionsService.create(this.question, "pulkit")
            .then(question => {
                if (question.upsertedId) {
                    // this.router.navigate([`/questions`, question.upsertedId, question.message]);
                    console.log('added question')
                }
                else {
                    this.openSnackBar("Question couldn't be added!", "Try Again!");
                }
            })
    }

    addTag(): void {
        if (this.tag.length != 0) {
            this.tag = this.tag.toLowerCase();
            for (let i in this.question.tags) {
                if (this.question.tags[i] === this.tag)
                    return
            }
            this.question.tags.push(this.tag);
            this.tag = "";
        }
    }

    removeTag(tag: string): void {
        _.remove(this.question.tags, function (n) {
            return n === tag;
        });
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}