import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { User } from '../../classTemplates/user/user';
import { UserProfileService } from '../../services/userProfile/userProfile.service';

@Component({
    selector: 'user-profile',
    templateUrl: './userProfile.component.html',
    moduleId: module.id,
    providers: [UserProfileService]
})
export class UserProfileComponent implements OnInit {

    licenses: Array<Object>;
    interests: Array<string>;
    user : User;
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
        /*this.user.name="";
        this.user.bio = "";
        this.user.favourite_tags = "";
        this.user.followers = "";
        this.user.following = "";
        this.user.rating = "";
        this.user.username = "";
        this.user.password = "";
        this.user.gender = "";
        this.user.date = "";
        this.user.category = "";
        this.user.institute = "";
        this.user.contributing = "";
        this.user.contact_information = "";
        this.user.question_answer = "";
        this.user.question_ask = "";*/
    }
    ngOnInit(): void {
        console.log("ddddddddddddddddd");
        this.route.params
            .switchMap((params: Params) => this.userProfileService.userProfile(params['username']))
            .subscribe(user => {
                console.log(user);
            });
    }
}
