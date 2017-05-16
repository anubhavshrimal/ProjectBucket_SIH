import { Component, OnInit } from '@angular/core';
import { AdminPanelService } from '../../services/admin-panel/admin-panel.service'
import { Router } from '@angular/router';

@Component({
    selector: 'admin-panel',
    templateUrl: './admin-panel.component.html',
    styles: [],
    providers: [AdminPanelService]
})
export class AdminPanelComponent implements OnInit {
    topuser: boolean;
    register: boolean;
    public data: Object;

    constructor(
        private adminPanel: AdminPanelService,
        private router: Router
    ) {
        this.topuser = true
    }
    ngOnInit(): void {
        this.adminPanel.getInstitutes().then(data => {
            if (data.loggedin) {
                this.data = data;
            }
            else {
                this.router.navigate([`/login`]);
            }
        });
    }
    toggel() {
        this.topuser = true;
        this.register = false;
    }
    addInstitute(username: string, password: string, university: string, college: string, state: string, city: string, email: string, mobile: string, address: string) {
        this.topuser = false;
        this.register = true;
        console.log(username, password, state);
        this.adminPanel.addInstitute(username, password, university, college, state, city, email, mobile, address).then(data => {

        });
    }

}
