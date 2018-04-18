import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-cgu',
    templateUrl: 'cgu.html'
})

export class CguPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CguPage');
    }

    goBack() {
        this.navCtrl.pop()
    }
}
