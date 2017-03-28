import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BackendUrlService } from '../backendUrl.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SigninService {
    private url = BackendUrlService.url + 'user/login';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){

    }
    login(userName: string, password: string): Promise<Object[]> {
        return this.http
            .post(this.url,JSON.stringify({username: userName, password: password}),{headers: this.headers})
            .toPromise()
            .then(res => res.json()[0])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}