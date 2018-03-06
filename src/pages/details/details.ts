import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MenuPage } from '../menu/menu';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  valeur:number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.valeur=1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    console.log(this.navParams.get('meal'));

  }

  incremente()
  {
    console.log(this.total)
      this.valeur++;
  }

  decremente()
  {
    if(this.valeur!=0)
      this.valeur--;
  }
  openMenu() {
    let callback=this.navParams.get('callback');
      this.navCtrl.pop();
      let p=this.valeur*this.navParams.get('meal').price;
    callback(p,this.valeur)

    console.log("well play tu as ouvert la page menu");
  }


}
