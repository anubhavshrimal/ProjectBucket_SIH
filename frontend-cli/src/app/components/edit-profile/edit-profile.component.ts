import { Component, OnInit } from '@angular/core';
import { User } from '../../classTemplates/user/user';
import { EditProfileService } from '../../services/edit-profile/edit-profile.service';
import * as _ from "lodash";

@Component({
    selector: 'edit-profile',
    templateUrl: './edit-profile.component.html',
    styles: [],
    providers: [EditProfileService]
})
export class EditProfileComponent implements OnInit {

    interest: string;
    user: User;
    categories: Array<string>;
    label: string;
    categorySelected: boolean;
    constructor(private editProfileService: EditProfileService) {
        this.categories = [
            "Student",
            "Teacher",
            "Industry Professional",
            "Other"
        ];

    }
    update() {
        // this.editProfileService.updateProfile().then(data => console.log(data));
    }

    ngOnInit() {
    }

    addInterest(): void {
        if (this.interest.length != 0) {
            this.interest = this.interest.toLowerCase();
            for (let i in this.user.favourite_tag) {
                if (this.user.favourite_tag[i] === this.interest)
                    return
            }
            this.user.favourite_tag.push(this.interest);
            this.interest = "";
        }
    }

    removeInterest(interest: string): void {
        _.remove(this.user.favourite_tag, function (n) {
            return n === interest;
        });
    }

    category1() {
        if (this.user.category == 'Student') {
            this.label = 'Institute'
        }
        else if (this.user.category == 'Teacher') {
            this.label = 'Institute'
        }
        else if (this.user.category == 'Industry Professional') {
            this.label = 'Company'
        }
        else {
            this.label = 'Profesion'
        }
        this.categorySelected = true;
    }

}
