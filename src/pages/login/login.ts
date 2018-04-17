import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddCardPage } from '../add-card/add-card';
import { AccountCreaPage } from '../account-crea/account-crea';
import {RestProvider} from "../../providers/rest/rest";

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

  mail:string
  password:string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public rest:RestProvider) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openAddCard() {
    console.log('ajoutes ta CB');

if(this.validateEmail() && this.validatePassword()) {


  this.rest.getUser("?mail="+this.mail+"&pass"+this.password)
      .subscribe(
      result => {
console.log("RESULT --> "+JSON.stringify(result))
      },
      error => console.log("ERR --> "+<any>error));


    this.navCtrl.push(AddCardPage);
}
  }

  openCrea() {
    console.log("ici tu peux te connecter");
    this.navCtrl.push(AccountCreaPage);
  }

  goBack() {
    this.navCtrl.pop()
}


    validateEmail() {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.mail.match(mailformat)) {
            return true;
        }

        else {
            console.log("You have entered an invalid email address!");
            return false;
        }


    }

    validatePassword()
    {
      if(this.password.length >0)
      {
        return true;
      }
      else
        return false;
    }

}
