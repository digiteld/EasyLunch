import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

import {LoginPage} from '../login/login';

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

    entree: boolean;
    plat: boolean;
    dessert: boolean;

    img: any;
    address: string;
    name: string;
    desc: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

        storage.set('entree', navParams.get('entree'))
        storage.set('plat', navParams.get('plat'))
        storage.set('dessert', navParams.get('dessert'))
        this.img = navParams.get('img')
        this.address = navParams.get('address')
        this.name = navParams.get('name')
        this.desc = navParams.get('desc')

        this.entree = false;
        this.plat = false;
        this.dessert = false;


        if (navParams.get('plat').length > 0)
            this.plat = true

        if (navParams.get('entree').length > 0)
            this.entree = true

        if (navParams.get('dessert').length > 0)
            this.dessert = true


    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RecapPage');
    }

    openLogin() {
        console.log("ok commande validé !");
        this.navCtrl.push(LoginPage);
    }

}
