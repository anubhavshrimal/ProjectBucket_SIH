import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { User } from '../../classTemplates/user/user';
import { UserProfileService } from '../../services/userProfile/userProfile.service';
import { MdSnackBar } from '@angular/material';
import { QuestionsService } from '../../services/questions/questions.service';
import  { Question, Answer } from '../../classTemplates/question/question';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'user-profile',
    templateUrl: './userProfile.component.html',
    moduleId: module.id,
    providers: [UserProfileService, QuestionsService]
})
export class UserProfileComponent implements OnInit {

    licenses: Array<Object>;
    interests: Array<string>;
    public user : User;
    projects = [
        {cols: 2, rows: 1},
        {cols: 2, rows: 1},
        {cols: 2, rows: 1},
        {cols: 2, rows: 1},
    ];
    constructor(private userProfileService: UserProfileService,     private route: ActivatedRoute) {
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
        this.user = {};
    }
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.userProfileService.userProfile(params['username']))
            .subscribe(user => {
                console.log(user);
                this.user=user;
                console.log(user.favourite_tag);
            });

        this.route.params
            .switchMap((params: Params) => this.userProfileService.getQuestions(params['username']))
            .subscribe(user => {
                console.log(user);
                this.user=user;
            });
        this.route.params
            .switchMap((params: Params) => this.userProfileService.getProjects(params['username']))
            .subscribe(user => {
                console.log(user);
                this.user=user;
            });

    }
    getProjects(){
        console.log("mohit");
    }
}
