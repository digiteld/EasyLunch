import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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


  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {

  storage.set( 'entree',navParams.get('entree'))
  storage.set('plat', navParams.get('plat'))
  storage.set('dessert', navParams.get('dessert'))



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecapPage');
  }

  openLogin() {
    console.log("ok commande validé !");
    this.navCtrl.push(LoginPage);
  }

}
