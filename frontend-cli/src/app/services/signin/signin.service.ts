import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BackendUrlService } from '../backend-url.service';
import 'rxjs/add/operator/toPromise';
import {User} from "../../classTemplates/user/user";

@Injectable()
export class SigninService {
    private url = BackendUrlService.url + '/user/login';
    private headers = new Headers({'Content-Type': 'application/json'});
    isLoggedIn: boolean = false;
    redirectUrl: string;
    constructor(private http: Http){
        this.isLoggedIn = !!localStorage.getItem('auth_token');
    }
    login(userName: string, password: string): Promise<User> {
        return this.http
            .post(this.url,JSON.stringify({username: userName, password: password}),{headers: this.headers})
            .toPromise()
            .then(res => res.json() as User)
            .catch(this.handleError);
    }
    signup(name: string, mailid: string, password: string): Promise<User> {
        this.url = BackendUrlService.url + '/user/signup';
        return this.http
            .post(this.url,JSON.stringify({name: name, emailid: mailid, password: password}),{headers: this.headers})
            .toPromise()
            .then(res => res.json() as User)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}