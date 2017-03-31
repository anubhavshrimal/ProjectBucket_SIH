import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project, Comment, Info } from '../../classTemplates/project/project';
import { BackendUrlService } from '../backendUrl.service';

@Injectable()
export class ProjectsService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private createUrl = BackendUrlService.url + '/projects/insert';
    private projectsFeedUrl = BackendUrlService.url + '/homepage/projects-feed/pulkit';
    constructor(private http: Http) {}

    create(project: Project): Promise<Project> {
        return this.http
            .post(this.createUrl, JSON.stringify(project), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Project)
            .catch(this.handleError);
    }

    update(project: Project): Promise<string> {
        project.username = "pulkit";
        const updateUrl = BackendUrlService.url + '/projects/'+project.id;
        return this.http
            .put(updateUrl, JSON.stringify(project), {headers: this.headers})
            .toPromise()
            .then(res => res.json().message)
            .catch(this.handleError);
    }

    getProjectById(id: string): Promise<Project> {
        const getUrl = BackendUrlService.url + '/projects/'+id;

        return this.http
            .get(getUrl)
            .toPromise()
            .then(res => res.json() as Project)
            .catch(this.handleError);
    }

    insertComment(comment: string, projectId: string): Promise<Comment> {
        const insertCommentUrl = BackendUrlService.url + '/projects/'+projectId+'/comment';
        return this.http
            .post(insertCommentUrl, JSON.stringify({"comment": comment}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Comment)
            .catch(this.handleError);
    }

    deleteComment(comment: Comment, projectId: string): Promise<Comment> {
        const deleteCommentUrl = BackendUrlService.url + '/projects/'+projectId+'/comment/delete';

        return this.http
            .post(deleteCommentUrl, JSON.stringify(comment), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Comment)
            .catch(this.handleError);
    }

    getProjectsFeed(): Promise<Array<Project>> {
        return this.http
            .get(this.projectsFeedUrl)
            .toPromise()
            .then(res => res.json() as Array<Project>)
            .catch(this.handleError);
    }

    upvote(projectId: string): Promise<Info> {
        const upvoteUrl = BackendUrlService.url + '/projects/' + projectId + '/upvote';
        return this.http
            .get(upvoteUrl)
            .toPromise()
            .then(res => res.json() as Info)
            .catch(this.handleError);
    }

    downvote(projectId: string): Promise<Info> {
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