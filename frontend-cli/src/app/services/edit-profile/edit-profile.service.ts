import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BackendUrlService } from '../backend-url.service';
import { SessionService } from '../session.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EditProfileService {
    private url = BackendUrlService.url + '/profile/update';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http, private sessionService: SessionService){}

    updateProfile(/*userName: string, password: string*/): Promise<Object[]> {
        this.headers.append('sess', this.sessionService.getSession()); 
        return this.http
            .put(this.url,JSON.stringify({/*username: userName, password: password*/}),{headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}