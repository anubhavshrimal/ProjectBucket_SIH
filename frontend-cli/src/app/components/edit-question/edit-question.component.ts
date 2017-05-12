import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MdSnackBar } from '@angular/material';

import { QuestionsService } from '../../services/questions/questions.service';
import { Question } from '../../classTemplates/question/question';
import * as _ from "lodash";

@Component({
  selector: 'edit-question',
  templateUrl: './edit-question.component.html',
  styles: [],
  providers: [QuestionsService]
})
export class EditQuestionComponent implements OnInit {
    tag: string;
    question: Question;

    ngOnInit(): void {
        this.getQuestion();
    }

    constructor(
        private questionsService: QuestionsService,
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MdSnackBar
    ) {
        this.question = {};
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

    updateQuestion(): void {
        this.questionsService.update(this.question)
            .then(message => {
                console.log(message);
                if (message == "success") {
                    this.router.navigate([`/questions`, this.question.id, this.question.question_url])
                } else {
                    this.openSnackBar("There was some error", "Try Again!!");
                }
            })
    }

    getQuestion(): void {
        this.route.params
            .switchMap((params: Params) => this.questionsService.getQuestionById(params['id']))
            .subscribe(question => {
                console.log(question)
                this.question = question;
            });
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}

