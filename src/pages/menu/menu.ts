import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetailsPage } from '../details/details';
import { RecapPage } from '../recap/recap';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openDetail() {
    this.navCtrl.push(DetailsPage);
    console.log("well done tu as ouvert la page detail");
  }

  openRecap() {
    this.navCtrl.push(RecapPage);
    console.log("yeeeah this is your recap my friend !");
  }

}
