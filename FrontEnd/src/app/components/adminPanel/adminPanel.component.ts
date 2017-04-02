import {Component, OnInit} from '@angular/core';
import {AdminPanelService} from '../../services/adminPanel/adminPanel.service'
@Component({
    moduleId: module.id,
    selector: 'admin-panel',
    templateUrl: './adminPanel.component.html'
})
export class AdminPanelComponent implements OnInit {
    topuser: boolean;
    register: boolean;
    ngOnInit(): void {
    }
	public data: Object;

    constructor(/*private adminPanel: AdminPanelService*/) {
    	var data = '[{"Institute":"Swami Keshvanand Institute Of Technology","rating":"12","solutions":"56","university":"RTU"},{"Institute":"Manipal Institute Of Tech.","rating":"10","solutions":"93","university":"Manipal University"},{"Institute":"SIT","rating":"32","solutions":"36","university":"LPU"},{"Institute":"SKT","rating":"62","solutions":"26","university":"RTU"},{"Institute":"Global Institute Of Tech","rating":"92","solutions":"16","university":"RTU"},{"Institute":"OIT","rating":"78","solutions":"16","university":"DU"}]';
		 this.data = JSON.parse(data);
		 this.topuser = true
    }
    toggel(){
        this.topuser=true;
        this.register=false;
    }
    addInstitute(username:string, password: string, university: string, college: string, state: string, city: string, email: string, mobile: string, address: string){
        this.topuser=false;
        this.register=true;
        console.log(username, password, state);
        /*this.adminPanel.adminPanel(username, password, university, college, state, city, email, mobile, address).then(data => {

        })*/
    }
}