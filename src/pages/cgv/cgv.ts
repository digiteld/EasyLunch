import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-cgv',
    templateUrl: 'cgv.html'
})

export class CgvPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CgvPage');
    }

    goBack() {
        this.navCtrl.pop()
    }
}
