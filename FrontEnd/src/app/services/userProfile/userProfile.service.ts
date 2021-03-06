import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BackendUrlService } from '../backendUrl.service';
import { User } from '../../classTemplates/user/user';
import { Question } from '../../classTemplates/question/question';
import { Project } from '../../classTemplates/project/project';
import {CookiesService} from '../cookie/cookiesService.service'
import 'rxjs/add/operator/toPromise';
import {promise} from "selenium-webdriver";

@Injectable()
export class UserProfileService {
    private url : string;
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http, private cookiesService: CookiesService){
        this.headers.append('auth_token', this.cookiesService.getSessionId());
        console.log(this.headers);
    }
    userProfile(username:string): Promise<User> {
    this.url = BackendUrlService.url + '/user/profile/'+username;
        return this.http
            .get(this.url, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as User)
            .catch(this.handleError);
    }
    getQuestions(username: string):Promise<Question>{
        this.url = BackendUrlService.url + '/questions/allquestions/'+username;
        return this.http
            .get(this.url, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as User)
            .catch(this.handleError);
    }
    getProjects(username: string):Promise<Project>{
    this.url = BackendUrlService.url + '/projects/user/'+username;
    return this.http
        .get(this.url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as User)
        .catch(this.handleError);
}
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}``