import {Component} from '@angular/core';
import * as _ from "lodash";

@Component({
    moduleId: module.id,
    selector: 'add-question',
    templateUrl: './addQuestion.component.html',
})
export class AddQuestionComponent {
    tags: Array<string>;
    tag: string;

    constructor() {
        this.tags = [];
    }

    addTag (): void {
        if(this.tag.length != 0){
            this.tag = this.tag.toLowerCase();
            for(let i in this.tags){
                if(this.tags[i] === this.tag)
                return
            }
            this.tags.push(this.tag);
            this.tag = "";
        }
    }

    removeTag (tag: string): void {
        _.remove(this.tags, function(n) {
        return n === tag;
        });
    }
}