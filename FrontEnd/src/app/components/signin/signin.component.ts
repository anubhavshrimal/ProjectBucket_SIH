import { Component } from '@angular/core';
import * as _ from "lodash";

@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    moduleId: module.id
})
export class Signin  {
    licenses: Array<Object>;
    interests: Array<string>;
    interest: string;
    loggedin : boolean;
    // sessionVar : boolean = true;
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
