import { Component } from '@angular/core';
//import {AddProject}  from '../pages/AddProject/AddProject';
import { NavController } from 'ionic-angular';
 import {AddProject} from '../page1/AddProject';
import {AddQuestion} from '../page1/AddQuestion';
import { Platform, ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
 testRadioOpen: boolean;
  testRadioResult;
  constructor(public navCtrl: NavController, public platform: Platform,
    public actionsheetCtrl: ActionSheetController,public alertCtrl: AlertController) {
    
   }
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Add Project',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Delete clicked');
            this.navCtrl.push(AddProject);
          }
        },
        {
          text: 'Add Question',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
              this.navCtrl.push(AddQuestion);
          },
     },
         {
          text: 'Search',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            {
    let prompt = this.alertCtrl.create({
      title: 'Search',
      message: "Search Projects,Users,Tags",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Go',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
          }
        },
          {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
