import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styles: [
        `.fill-remaining-space {
        flex: 1 1 auto;
        }`
    ]
})
export class NavbarComponent {
    add_new_menu: Array<Object>;
    notifications_menu: Array<Object>;
    trophy_menu: Array<Object>;
    extras_menu: Array<Object>;
    user: Object;

    constructor() {
        this.user = {
            'rating': 245
        }
        
        this.add_new_menu = [
            {
                name: 'Add new project',
                link: '/addproject'
            },
            {
                name: 'Ask new question',
                link: '/addquestion'
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


}