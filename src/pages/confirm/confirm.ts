import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import {RestProvider} from "../../providers/rest/rest";
/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {

  code:string;
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider,private storage: Storage) {
    this.code="";


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
      this.postBooking({
          master_user_id:1,
          restaurant_id:1,
          nb_users:1,
          schedule:1200,
          meal_id:[1,2,3],
          payment_id:2
  })
  }

  goHome() {
    this.navCtrl.push(HomePage);
    console.log('FELICITATION !!! Parcours terminé');
  }

    private postBooking(arg) {
        this.rest.postBooking(arg)
            .subscribe(
                code => {
                    this.code = <string>code;
                    console.log(this.code);


                },
                error => this.errorMessage = <any>error);
    }
}
