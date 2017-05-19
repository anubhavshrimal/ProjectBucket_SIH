import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Question, Answer } from '../../classTemplates/question/question';
import { Info } from '../../classTemplates/project/project';
import { BackendUrlService } from '../backend-url.service';
import { SessionService } from '../session.service';
import  { Response } from '../../classTemplates/assertionResponse/response';

@Injectable()
export class InstituteQuestionsService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private forumUrl = BackendUrlService.url + '/institute/question';
    private departmentsUrl = BackendUrlService.url + '/institute/departments';

    constructor(private http: Http, private sessionService: SessionService) {}

    getForumFeed() {
        this.headers.set('sess', this.sessionService.getSession()); 
        return this.http
            .get(this.forumUrl, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    getDepartments() {
        this.headers.set('sess', this.sessionService.getSession()); 
        return this.http
            .get(this.departmentsUrl, {headers: this.headers})
            .toPromise()
            .then(res => res.json().departments)
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}