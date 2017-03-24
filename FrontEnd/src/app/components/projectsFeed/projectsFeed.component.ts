import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'projects-feed',
    templateUrl: './projectsFeed.component.html',
    styles: [
        `a {
            color: teal; 
            text-decoration:none
        }`
    ]
})
export class ProjectsFeedComponent {
    tabs: Array<Object>;
    projects = [
        {cols: 2, rows: 1},
        {cols: 2, rows: 1},
        {cols: 2, rows: 1},
        {cols: 2, rows: 1},
    ];
    constructor() {
        this.tabs = [
            {
                tabLabel: 'Interesting',
                tabIcon: 'fa fa-heart'
            },
            {
                tabLabel: 'Hot',
                tabIcon: 'fa fa-fire'
            },
            {
                tabLabel: 'Featured',
                tabIcon: 'fa fa-money'
            }
        ]
    }
}