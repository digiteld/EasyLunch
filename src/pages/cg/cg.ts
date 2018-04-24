import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-cg',
    templateUrl: 'cg.html'
})

export class CgPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CgPage');
    }

    goBack() {
        this.navCtrl.pop()
    }
}
