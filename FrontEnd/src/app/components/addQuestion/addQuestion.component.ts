import { Component } from '@angular/core';
import { QuestionsService } from '../../services/questions/questions.service';
import { Question } from '../../classTemplates/question/question';

import * as _ from "lodash";

@Component({
    moduleId: module.id,
    selector: 'add-question',
    templateUrl: './addQuestion.component.html',
})
export class AddQuestionComponent {
    question: Question;
    tag: string;


    constructor(private questionsService: QuestionsService) {
        this.question= {};
    }

    addQuestion(): void {
        this.questionsService.create(this.question)
        .then(question => {
            
        })
    }

    addTag (): void {
    if(this.tag.length != 0){
      this.tag = this.tag.toLowerCase();
      for(let i in this.question.tags){
        if(this.question.tags[i] === this.tag)
          return
      }
      this.question.tags.push(this.tag);
      this.tag = "";
    }
  }

  removeTag (tag: string): void {
    _.remove(this.question.tags, function(n) {
      return n === tag;
    });
  }
}