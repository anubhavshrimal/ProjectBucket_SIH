import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../classTemplates/user/user';
import { SignoutService } from '../../services/signout/signout.service';
import { SessionService } from '../../services/session.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styles: [],
    providers: [SignoutService, SessionService]
})
export class NavbarComponent {
    add_new_menu: Array<Object>;
    notifications_menu: Array<Object>;
    trophy_menu: Array<Object>;
    extras_menu: Array<Object>;
    user: User;

    constructor(
        private router: Router,
        private signout: SignoutService,
        private sess: SessionService
    ) {
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
            }
        ]
    }

    gotoUserProfile(): void {
        this.user.username = 'hsharma'
        this.router.navigate(['/user-profile', this.user.username]);
    }

    logout(): void {
        this.signout.logout()
            .then(response => {
                console.log(response);
                if (response.message == 'success') {
                    this.sess.logoutSession();
                    this.router.navigate([`/login`]);
                }
            })
    }
}