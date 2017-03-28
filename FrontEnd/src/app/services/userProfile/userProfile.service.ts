import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BackendUrlService } from '../backendUrl.service';
import { User } from '../../classTemplates/user/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserProfileService {
    private url = BackendUrlService.url + '/user/profile';

    constructor(private http: Http){

    }
    userProfile(): Promise<Object[]> {
        return this.http
            .get(this.url)
            .toPromise()
            .then(res => res.json() as User)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}