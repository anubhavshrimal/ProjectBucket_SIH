import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MdSnackBar } from '@angular/material';

import { QuestionsService } from '../../services/questions/questions.service';
import  { Question, Answer } from '../../classTemplates/question/question';
import * as _ from "lodash";

@Component({
  selector: 'question-view',
  templateUrl: './questionview.component.html',
  moduleId: module.id,
  providers: [ QuestionsService ]
})
export class QuestionViewComponent implements OnInit { 
  question: Question;
  answer: string;

  ngOnInit() : void {
    this.getQuestion()
  }

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private snackBar: MdSnackBar
    ) {
      this.question= {};
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getQuestion(): void {
    this.route.params
        .switchMap((params: Params) => this.questionsService.getQuestionById(params['id']))
        .subscribe(question => {
          this.question = question;
          if(this.question.answers) {
            _.orderBy(this.question.answers, ['upvotes.length'], ['desc']);
          }
        });
  }

  insertAnswer(): void {
    this.questionsService.insertAnswer(this.answer, this.question.id)
      .then(answer => {
        if(answer.answer != 'error' && answer.username) {
          this.answer = "";
          this.question.answers.push(answer);
          _.orderBy(this.question.answers, ['upvotes.length'], ['desc']);
        }
        else {
          this.openSnackBar("Comment was not added", "Try Again!");
        }
      })
  }

  // deleteAnswer(comment: Comment): void {
  //   this.projectsService.deleteComment(comment, this.question.id)
  //     .then(message => {
  //       if(message == 'success'){
  //         _.remove(this.question.comments, function(c){
  //           return c == comment;
  //         })
  //       }
  //       else {
  //         this.openSnackBar("Comment couldn't be deleted", "Try Again!");
  //       }
  //     });
  // }
}
