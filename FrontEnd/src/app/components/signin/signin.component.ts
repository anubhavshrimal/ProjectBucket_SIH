import { Component } from '@angular/core';
import { SigninService } from '../../services/signin/signin.service';
import { Router } from '@angular/router';
import {ProjectsFeedComponent} from "../projectsFeed/projectsFeed.component";
import { CookiesService } from '../../services/cookie/cookiesService.service';
@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    moduleId: module.id,
    providers: [SigninService]
})
export class SigninComponent {

    licenses: Array<Object>;
    signup1 : boolean;
    signup2 : boolean;
    userName : string;
    isLoggedin: string;
    sessionid: string;

    constructor(private signinService : SigninService, private router: Router, private cookiesService: CookiesService) {
        this.licenses = [
            {
                name: "None",
                text: ""
            },
            {
                name: "MIT",
                text: "MIT open source to all"
            }
        ];
         this.signup1 = true;
    }

    signUp(fullName: string, mailid: string, password:string){
        this.signup1 = false;
        this.signup2 = true;
        console.log(fullName, mailid, password);
        this.signinService.signup(fullName, mailid, password).then(data=>{
            console.log(data);
            return this.signup1;
        })

    }

    login(userName:string, password:string){
        this.signinService.login(userName,password).then(data =>{
            console.log(data);
            if (data.username ){
                this.userName = data.username;
                this.isLoggedin = data.is_valid;
                this.sessionid = data.session_id;
                this.router.navigate(['/projects-feed']);
                this.cookiesService.setSessionId(this.sessionid);
            }
        });
    }
}

