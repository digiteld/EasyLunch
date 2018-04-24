import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {

  answerNumber: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.answerNumber = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

  openAnswer(n){
    this.answerNumber = n;
  }

    goBack() {
        this.navCtrl.pop()
    }
}
