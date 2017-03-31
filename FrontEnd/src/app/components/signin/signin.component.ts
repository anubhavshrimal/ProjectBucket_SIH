import { Component } from '@angular/core';
import { SigninService } from '../../services/signin/signin.service';
import { Router } from '@angular/router';
import {ProjectsFeedComponent} from "../projectsFeed/projectsFeed.component";
import {CookieService} from 'angular2-cookie/core';
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
    usernameCookie: string = 'username';
    constructor(private signinService : SigninService, private router: Router, private cookieService:CookieService) {
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
        return this.signup1;
    }

    login(userName:string, password:string){
        this.signinService.login(userName,password).then(data =>{
            if (data.username ){
                this.userName = data.username;
                this.router.navigate(['/projects-feed']);
                this.cookieService.put(this.usernameCookie, userName);
            }
        });
        console.log("cookie    ",this.cookieService.get(this.usernameCookie));
    }
}
