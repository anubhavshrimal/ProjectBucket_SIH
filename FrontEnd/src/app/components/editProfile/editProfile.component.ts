import { Component } from '@angular/core';
import { User } from '../../classTemplates/user/user';
import { EditProfileService } from '../../services/editProfile/editProfile.service';

@Component({
    selector: 'edit-profile',
    templateUrl: './editProfile.component.html',
    moduleId: module.id,
    providers: [EditProfileService]
})
export class EditProfileComponent{

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
}