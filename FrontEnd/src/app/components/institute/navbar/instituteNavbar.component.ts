import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Institute } from '../../../classTemplates/institute/institute';

@Component({
    moduleId: module.id,
    selector: 'institute-navbar',
    templateUrl: './instituteNavbar.component.html',
})
export class InstituteNavbarComponent {
    add_new_menu: Array<Object>;
    notifications_menu: Array<Object>;
    trophy_menu: Array<Object>;
    extras_menu: Array<Object>;
    institute: Institute;

    constructor(private router: Router) {
        this.institute = {
            'rating': 245,
            'profile_url': 'app/assets/male_user.png',
        }
        
        this.add_new_menu = [
            {
                name: 'Add new Project or Idea',
                link: '/add-project'
            },
            {
                name: 'Post a new Problem',
                link: '/add-question'
            }
        ]

        this.notifications_menu = [
            {
                name: 'Mohit Sharma liked you project',
                link: '/sih2017'
            }
        ]

        this.trophy_menu = [
            {
                name: 'Newbie',
                link: '/noobielink'
            }
        ]

        this.extras_menu = [
            {
                name: 'Settings',
                link: '/settings'
            },
            {
                name: 'Help',
                link: '/help'
            },
            {
                name: 'Logout',
                link: '/logout'
            }
        ]
    }

    gotoInstituteProfile(): void {
        this.institute.username = 'mit'
        this.router.navigate(['/institute-profile', this.institute.username]);
    }
}