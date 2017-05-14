import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { User } from '../../../classTemplates/user/user';
import { InstituteProfileService } from '../../../services/instituteProfile/instituteProfile.service';
import { MdSnackBar } from '@angular/material';
import { QuestionsService } from '../../../services/questions/questions.service';
import  { Question, Answer } from '../../../classTemplates/question/question';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'institute-profile',
    templateUrl: './instituteProfile.component.html',
    moduleId: module.id,
    providers: [InstituteProfileService]
})
export class InstituteProfileComponent implements OnInit {

    licenses: Array<Object>;
    interests: Array<string>;
    public user : User;
    projects = [
        {cols: 2, rows: 1},
        {cols: 2, rows: 1},
        {cols: 2, rows: 1},
        {cols: 2, rows: 1},
    ];
    constructor(private instituteProfileService: InstituteProfileService,     private route: ActivatedRoute) {
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
            .switchMap((params: Params) => this.instituteProfileService.instituteProfile(params['username']))
            .subscribe(user => {
                console.log("1");
                console.log(user);
                this.user=user;
                console.log(user.favourite_tag);
            });

        this.route.params
            .switchMap((params: Params) => this.instituteProfileService.getQuestions(params['username']))
            .subscribe(user => {
                console.log("2");
                console.log(user);
            });
        this.route.params
            .switchMap((params: Params) => this.instituteProfileService.getProjects(params['username']))
            .subscribe(user => {
                console.log("3");
                console.log(user);
            });

    }
}
