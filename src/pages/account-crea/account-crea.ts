import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { AddCardPage } from '../add-card/add-card';

/**
 * Generated class for the AccountCreaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-crea',
  templateUrl: 'account-crea.html',
  })
  
export class AccountCreaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountCreaPage');
  }

  openLogin() {
    console.log("ici tu peux créer ton compte mon ami");
    this.navCtrl.push(LoginPage);
  }

  openAddCard() {
    console.log('ajoutes ta CB');
     this.navCtrl.push(AddCardPage);
  }


}
