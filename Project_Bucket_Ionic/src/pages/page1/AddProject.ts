import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';
@Component({
  selector: 'AddProject',
  templateUrl: 'AddProject.html'
})
export class AddProject{
 
Licences:string [];
 items: Array<{title: string, text: string}>;

  constructor(public alertCtrl: AlertController) {
    
  }

} 
 


   




