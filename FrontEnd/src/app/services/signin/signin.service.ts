import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SigninService {
    private Url = 'http://codeist.mi43ujva9v.us-west-2.elasticbeanstalk.com/webapi/user/login';
    private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

    constructor(private http: Http){

    }
    login(userName: string, password: string): Promise<Object[]> {
        return this.http
            .post(this.Url, JSON.stringify({username: userName, password: password}), {headers: this.headers})
            .toPromise()
            .then(res => console.log(res))
            .catch(this.handleError);

    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}