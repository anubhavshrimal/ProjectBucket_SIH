import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project, Comment } from '../../classTemplates/project/project';
import { BackendUrlService } from '../backendUrl.service';

@Injectable()
export class ProjectsService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private createUrl = BackendUrlService.url + '/projects/insert';

    constructor(private http: Http) {}

    create(project: Project): Promise<Project> {
        return this.http
            .post(this.createUrl, JSON.stringify(project), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Project)
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

    insertComment(comment: string, projectId: string) {
        const insertCommentUrl = BackendUrlService.url + '/projects/'+projectId+'/comment';
        return this.http
            .post(insertCommentUrl, JSON.stringify({"comment": comment}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Comment)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}