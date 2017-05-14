import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../classTemplates/user/user';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {
    add_new_menu: Array<Object>;
    notifications_menu: Array<Object>;
    trophy_menu: Array<Object>;
    extras_menu: Array<Object>;
    user: User;

    constructor(private router: Router) {
        this.user = {
            'rating': 245,
            'profile_url': 'assets/male_user.png',
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

    gotoUserProfile(): void {
        this.user.username = 'hsharma'
        this.router.navigate(['/user-profile', this.user.username]);
    }
}