import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Question, Answer } from '../../classTemplates/question/question';
import { Info } from '../../classTemplates/project/project';
import { BackendUrlService } from '../backendUrl.service';

@Injectable()
export class QuestionsService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private createUrl = BackendUrlService.url + '/questions/insert';
    private forumUrl = BackendUrlService.url + '/homepage/forum/pulkit';
    constructor(private http: Http) {}

    create(question: Question): Promise<Question> {
        return this.http
            .post(this.createUrl, JSON.stringify(question), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Question)
            .catch(this.handleError);
    }

    update(question: Question): Promise<string> {
        question.username = "pulkit";
        const updateUrl = BackendUrlService.url + '/questions/'+question.id;
        return this.http
            .put(updateUrl, JSON.stringify(question), {headers: this.headers})
            .toPromise()
            .then(res => res.json().message)
            .catch(this.handleError);
    }

    getQuestionById(id: string): Promise<Question> {
        const getUrl = BackendUrlService.url + '/questions/'+id;

        return this.http
            .get(getUrl)
            .toPromise()
            .then(res => res.json() as Question)
            .catch(this.handleError);
    }

    insertAnswer(answer: string, questionId: string): Promise<Answer> {
        const insertAnswerUrl = BackendUrlService.url + '/questions/'+questionId+'/answer';
        return this.http
            .post(insertAnswerUrl, JSON.stringify({"answer": answer}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Answer)
            .catch(this.handleError);
    }

    deleteAnswer(answer: Answer, questionId: string): Promise<string> {
        const deleteAnswerUrl = BackendUrlService.url + '/questions/'+questionId+'/answer/delete';

        return this.http
            .post(deleteAnswerUrl, JSON.stringify(answer), {headers: this.headers})
            .toPromise()
            .then(res => res.json().message)
            .catch(this.handleError);
    }

    getForumFeed(): Promise<Array<Question>> {
        return this.http
            .get(this.forumUrl)
            .toPromise()
            .then(res => res.json() as Array<Question>)
            .catch(this.handleError);
    }

    upvote(questionId: string): Promise<Info> {
        const upvoteUrl = '/questions/' + questionId + '/upvote';

        return this.http
            .put(upvoteUrl, JSON.stringify({}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Info)
            .catch(this.handleError);
    }

    downvote(questionId: string): Promise<Info> {
        const downvote = '/questions/' + questionId + '/downvote';

        return this.http
            .put(downvote, JSON.stringify({}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Info)
            .catch(this.handleError);
    }

    upvoteAnswer(questionId: string, username: string): Promise<Info> {
        const upvoteUrl = '/questions/' + questionId + '/' + username + '/upvote';

        return this.http
            .put(upvoteUrl, JSON.stringify({}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Info)
            .catch(this.handleError);
    }

    downvoteAnswer(questionId: string, username: string): Promise<Info> {
        const downvote = '/questions/' + questionId + '/' + username + '/downvote';

        return this.http
            .put(downvote, JSON.stringify({}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Info)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}