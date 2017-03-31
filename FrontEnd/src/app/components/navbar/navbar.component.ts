import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../classTemplates/user/user';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: './navbar.component.html',
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
            'thumbnail': 'app/assets/male_user.png',
            'profile': '/user-profile'
        }
        
        this.add_new_menu = [
            {
                name: 'Add new project',
                link: '/add-project'
            },
            {
                name: 'Ask new question',
                link: '/add-question'
            }
        ]

        this.notifications_menu = [
            {
                name: 'Sign up for SIH 2017',
                link: '/sih2017'
            }
        ]

        this.trophy_menu = [
            {
                name: 'Noobie',
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