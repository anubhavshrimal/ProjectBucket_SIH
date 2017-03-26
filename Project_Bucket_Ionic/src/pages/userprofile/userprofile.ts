import { Component, ViewChild } from '@angular/core';
 //import { Page2 } from '../page2/page2';
 import {Project} from '../userprofile/Project';
 import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
@Component({
  selector: 'userprofile',
  templateUrl: 'userprofile.html',
  

})
export class userprofile {

 constructor(public modalCtrl: ModalController, public navCtrl: NavController ) 
 {
 }
 openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

nextSecction(Ch)
{
 this.navCtrl.push(Project);
}


}



@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
      <ion-item>
        <ion-avatar item-left>
          <img src="{{character.image}}">
        </ion-avatar>
        <h2>{{character.name}}</h2>
        <p>{{character.quote}}</p>
      </ion-item>
<br>
<br>
      <ion-item *ngFor="let item of character['items']">
        {{item.title}}
        <ion-note item-right>
         <h5> {{item.note}} </h5>
        </ion-note>
      </ion-item>
  </ion-list>
</ion-content>
`
})
export class ModalContentPage 
{
  character;
  pages: Array<{component: any}>;
  constructor(
    public platform: Platform,
   public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Prateek Tiwari',
        quote: 'Hey Love Ionic',
        image: 'https://lh3.googleusercontent.com/-ZrquBqiWZno/ViO8qpfKKcI/AAAAAAAAAE8/C-w-SoRnj9gKTVVW4t9hwrCdXAlOnMrggCEw/w139-h140-p/IMG-20141110-WA00222015042608284020150426082925.jpg',
        items: [
          { title: 'Email ', note: 'prateek.tiwari456@gmail.com' },
          { title: 'Github', note: 'prateek7' },
          { title: 'City', note: 'Jaipur' }
        ]
      },
      {
        name: 'Favoites Tags',
        quote: 'Go for Tags ',
        image: 'https://lh3.googleusercontent.com/-ZrquBqiWZno/ViO8qpfKKcI/AAAAAAAAAE8/C-w-SoRnj9gKTVVW4t9hwrCdXAlOnMrggCEw/w139-h140-p/IMG-20141110-WA00222015042608284020150426082925.jpg',
        items: [
          { title: '', note: '' },
          { title: '', note: ' ' },
          { title: '', note: '' }
        ]
      }
    ];
 

    this.character = characters[this.params.get('charNum')];

 
   }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}


