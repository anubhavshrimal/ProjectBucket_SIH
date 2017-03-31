import { Injectable } from '@angular/core';
import { BackendUrlService } from '../backendUrl.service';
import {CookieService} from 'angular2-cookie/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CookiesService{
    constructor(private cookieService:CookieService){

    }
    getUSerName(){
        return this.cookieService.get('username');
    }
    setUserName(user: string){
        this.cookieService.put('username',user);
    }
    getSessionId(){
        return this.cookieService.get('sessionid');
    }
    setSessionId(sessid: string){
        this.cookieService.put('sessionid',sessid);
    }
}