import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddCardPage } from '../add-card/add-card';
import { AccountCreaPage } from '../account-crea/account-crea';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openAddCard() {
    console.log('ajoutes ta CB');
     this.navCtrl.push(AddCardPage);
  }

  openCrea() {
    console.log("ici tu peux te connecter");
    this.navCtrl.push(AccountCreaPage);
  }

}
