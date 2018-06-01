import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

name:any;
mail:any;
phone:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {

    storage.get('user').then(data=>{

      console.log("INFO USER --> "+JSON.stringify(data))
this.mail=data.data.mail
        this.name=data.data.name
        this.phone=data.data.phone



    })



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

}
