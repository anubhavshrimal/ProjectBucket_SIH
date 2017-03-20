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
            'rating': 245,
            'thumbnail': 'https://avatars3.githubusercontent.com/u/17249362?v=3&u=2a1bc326e43e6fdee5102494672de0758c6d083f&s=400',
            'profile': 'https://github.com/anubhavshrimal'
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