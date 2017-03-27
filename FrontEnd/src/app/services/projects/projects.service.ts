import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project } from '../../classTemplates/project/project';
import { BackendUrlService } from '../backendUrl.service';

@Injectable()
export class ProjectsService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private url = BackendUrlService.url + '/project/insert';

    constructor(private http: Http) {}

    create(project: Project): Promise<Project> {
        return this.http
            .post(this.url, JSON.stringify(project), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Project)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}