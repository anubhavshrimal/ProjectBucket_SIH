import { Component } from '@angular/core';
import * as _ from "lodash";

@Component({
    selector: 'user-profile',
    templateUrl: './userProfile.component.html',
    moduleId: module.id
})
export class UserProfileComponent  {
    licenses: Array<Object>;
    interests: Array<string>;
    interest: string;
    loggedin : boolean;
    user : Object;
    constructor() {
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
        this.loggedin = true;
        this.user = {
            'rating': 245,
            'thumbnail': '',
            'profile': '',
            'bio':'i\'m Mohit, I\'m the gratest, I\'m the best, I\'m Artistxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx',

        }
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
    login(){
        this.loggedin = true;
        return this.loggedin;
    }
}
