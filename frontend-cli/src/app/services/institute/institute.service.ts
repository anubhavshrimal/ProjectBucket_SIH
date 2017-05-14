import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Question, Answer } from '../../classTemplates/question/question';
import { Info } from '../../classTemplates/project/project';
import { BackendUrlService } from '../backend-url.service';
import  { Response } from '../../classTemplates/assertionResponse/response';

@Injectable()
export class InstituteQuestionsService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private forumUrl = BackendUrlService.url + '/institute/question/mit';
    private departmentsUrl = BackendUrlService.url + '/institute/mit/departments';

    constructor(
        private http: Http,
        ) {}

    getForumFeed(): Promise<Array<Question>> {
        return this.http
            .get(this.forumUrl)
            .toPromise()
            .then(res => res.json() as Array<Question>)
            .catch(this.handleError);
    }

    getDepartments(): Promise<Array<string>> {
        return this.http
            .get(this.departmentsUrl)
            .toPromise()
            .then(res => res.json().departments as Array<string>)
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}