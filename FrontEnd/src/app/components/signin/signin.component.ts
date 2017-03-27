import { Component } from '@angular/core';
import { SigninService } from '../../services/signin/signin.service';

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

    constructor(private signinService : SigninService) {
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

    signUp1(){
        this.signup1 = false;
        this.signup2 = true;
        return this.signup1;
    }

    login(userName:string, password:string){
        console.log(userName, password);
        this.signinService.login(userName,password).then(data => console.log(data));
    }
}
