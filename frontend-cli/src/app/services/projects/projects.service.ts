import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project, Comment, Info } from '../../classTemplates/project/project';
import  { Response } from '../../classTemplates/assertionResponse/response';
import { BackendUrlService } from '../backend-url.service';
import { SessionService } from '../session.service';

@Injectable()
export class ProjectsService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private projectsFeedUrl = BackendUrlService.url + '/homepage/projects-feed';
    constructor(private http: Http, private sessionService: SessionService) {}

    create(project: Project): Promise<Response> {
        this.headers.append('sess', this.sessionService.getSession()); 
        const createUrl = BackendUrlService.url + '/projects/insert';
        return this.http
            .post(createUrl, JSON.stringify(project), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Response)
            .catch(this.handleError);
    }

    update(project: Project): Promise<Response> {
        this.headers.append('sess', this.sessionService.getSession()); 
        const updateUrl = BackendUrlService.url + '/projects/'+project.id;
        return this.http
            .put(updateUrl, JSON.stringify(project), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Response)
            .catch(this.handleError);
    }

    getProjectById(id: string): Promise<Project> {
        this.headers.append('sess', this.sessionService.getSession()); 
        const getUrl = BackendUrlService.url + '/projects/'+id;

        return this.http
            .get(getUrl, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Project)
            .catch(this.handleError);
    }

    insertComment(comment: string, projectId: string): Promise<Comment> {
        this.headers.append('sess', this.sessionService.getSession()); 
        const insertCommentUrl = BackendUrlService.url + '/projects/'+projectId+'/comment';
        return this.http
            .post(insertCommentUrl, JSON.stringify({"comment": comment}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Comment)
            .catch(this.handleError);
    }

    deleteComment(comment: Comment, projectId: string): Promise<Comment> {
        this.headers.append('sess', this.sessionService.getSession()); 
        const deleteCommentUrl = BackendUrlService.url + '/projects/'+projectId+'/comment/delete';

        return this.http
            .post(deleteCommentUrl, JSON.stringify(comment), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Comment)
            .catch(this.handleError);
    }

    getProjectsFeed() {
        this.headers.append('sess', this.sessionService.getSession()); 
        console.log(this.headers);
        return this.http
            .get(this.projectsFeedUrl, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    upvote(projectId: string): Promise<Info> {
        this.headers.append('sess', this.sessionService.getSession()); 
        const upvoteUrl = BackendUrlService.url + '/projects/' + projectId + '/upvote';
        return this.http
            .put(upvoteUrl, JSON.stringify({}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Info)
            .catch(this.handleError);
    }

    downvote(projectId: string): Promise<Info> {
        this.headers.append('sess', this.sessionService.getSession()); 
        const downvote =  BackendUrlService.url + '/projects/' + projectId + '/downvote';

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