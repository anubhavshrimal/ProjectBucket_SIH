import { Component } from '@angular/core';
import { SigninService } from '../../services/signin/signin.service';
import { Router } from '@angular/router';
import {ProjectsFeedComponent} from "../projectsFeed/projectsFeed.component";

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
    constructor(private signinService : SigninService, private router: Router) {
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
        console.log(userName, password);
        this.signinService.login(userName,password).then(data =>{
            if (data){
                this.router.navigate(['/projects-feed']);
            }
            console.log(data);
        });
    }
}
