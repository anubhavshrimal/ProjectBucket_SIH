import { Component, OnInit } from '@angular/core';
import { User } from '../../classTemplates/user/user';
import { EditProfileService } from '../../services/edit-profile/edit-profile.service';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styles: [],
  providers: [EditProfileService]
})
export class EditProfileComponent implements OnInit {

 
    licenses: Array<Object>;
    interests: Array<string>;
    user : User;
    constructor(private editProfileService: EditProfileService) {
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

    }
    update(){
        this.editProfileService.updateProfile().then(data => console.log(data));
    }

    ngOnInit() {
    }

}
