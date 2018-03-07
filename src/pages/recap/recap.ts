import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

/**
 * Generated class for the RecapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recap',
  templateUrl: 'recap.html',
})
export class RecapPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log("Entree --> "+JSON.stringify(navParams.get('entree')))
    console.log("Plat --> "+JSON.stringify(navParams.get('plat')))
    console.log("Dessert --> "+JSON.stringify(navParams.get('dessert')))

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecapPage');
  }

  openLogin() {
    console.log("ok commande validé !");
    this.navCtrl.push(LoginPage);
  }

}
