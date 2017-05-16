import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BackendUrlService } from '../backend-url.service';
import { SessionService } from '../session.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdminPanelService {
    private url = BackendUrlService.url + '/adminpanel';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http, private sessionService: SessionService){}

    // TODO: Correct add institutes frontend
    addInstitute(login:string, password: string, university: string, college: string, state: string, city: string, email: string, mobile: string, address: string): Promise<Object> {
        this.headers.append('sess', this.sessionService.getSession()); 
        const createUrl = this.url + '/insert';
        return this.http
            .post(createUrl,JSON.stringify({login:login, password: password, university: university, college: college, state: status, city: city, email: email, mobile: mobile, address: address}),{headers: this.headers})
            .toPromise()
            .then(res => res.json())

            .catch(this.handleError);
    }
    getInstitutes(){
        this.headers.append('sess', this.sessionService.getSession()); 
        const getUrl = this.url + '/institutes';
        return this.http
            .get(getUrl, {headers: this.headers})
            .toPromise()
            .then(res => res.json())

            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}