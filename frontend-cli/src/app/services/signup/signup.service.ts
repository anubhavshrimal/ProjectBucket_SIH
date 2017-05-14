import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BackendUrlService } from '../backend-url.service';
import { User } from '../../classTemplates/user/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SignupService {
    private url = BackendUrlService.url + '';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){

    }
    signup(user: User): Promise<Object[]> {
        return this.http
            .post(this.url,JSON.stringify({user}),{headers: this.headers})
            .toPromise()
            .then(res => res.json()[0])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}