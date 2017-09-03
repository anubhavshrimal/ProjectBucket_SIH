import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BackendUrlService } from '../backend-url.service';
import 'rxjs/add/operator/toPromise';
import { User } from "../../classTemplates/user/user";
import { Response } from '../../classTemplates/assertionResponse/response';
import { SessionService } from '../../services/session.service';

@Injectable()
export class SignoutService {
    private url = BackendUrlService.url + '/user/login';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    isLoggedIn: boolean = false;
    redirectUrl: string;
    constructor(private http: Http, private sessionService: SessionService) {
        this.isLoggedIn = !!localStorage.getItem('auth_token');
    }
    login(userName: string, password: string): Promise<User> {
        return this.http
            .post(this.url, JSON.stringify({ username: userName, password: password }), { headers: this.headers })
            .toPromise()
            .then(res => res.json() as User)
            .catch(this.handleError);
    }

    logout(): Promise<Response> {
        const logoutUrl = BackendUrlService.url + '/user/logout';
        this.headers.set('sess', this.sessionService.getSession());
        return this.http
            .get(logoutUrl, { headers: this.headers })
            .toPromise()
            .then(res => res.json() as Response)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}