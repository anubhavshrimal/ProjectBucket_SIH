import { Component } from '@angular/core';
import { SignupService } from '../../services/signup/signup.service';
import * as _ from "lodash";

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    moduleId: module.id,
    providers: [SignupService]
})
export class SignupComponent {

    licenses: Array<Object>;
    interests: Array<string>;
    interest: string;
    signup1 : boolean;
    signup2 : boolean;
    categories : Array<string>;
    category : string;
    label : string;
    categorySelected : boolean;

    constructor(private signupService : SignupService) {
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
        this.interests = [];
        this.signup1 = true;
        this.categories = ["Student", "Teacher", "Industry Professional", "Other"];

    }

    addInterests (): void {
        if(this.interest.length != 0){
            for(let i in this.interests){
                if(this.interests[i] === this.interest)
                    return
            }
            this.interests.push(this.interest);
            this.interest = "";
        }
    }
    removeInterests (interest: string): void {
        _.remove(this.interests, function(n) {
            return n === interest;
        });
    }

    category1(){
        if (this.category == 'Student'){
            this.label = 'Institute'
        }
        else if (this.category == 'Teacher'){
            this.label = 'Institute'
        }
        else if (this.category == 'Industry Professional'){
            this.label = 'Company'
        }
        else{
            this.label = 'Profesion'
        }
        this.categorySelected = true;
    }
    signUp(username:string, category:string, label:string, mobileNo:string, interest:string, country:string, state:string, city:string, bio:string){
        console.log(username, category, label, mobileNo, this.interests, country, state, city, bio);
        this.signupService.signup().then(data => console.log(data));
    }
}
