import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {ConfirmPage} from '../confirm/confirm';


/**
 * Generated class for the AddCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-add-card',
    templateUrl: 'add-card.html',
})
export class AddCardPage {

    nbCarte: number;
    nbExpire: string;
    ccv: number;
    nameCard: string;

    nbCarteFormat:string;


    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.init()


    }


    init()
    {




        this.nbCarteFormat = '1234 5678 9123 4567';
        this.nbExpire = "03/19";
        this.ccv = 963;
        this.nameCard = "Cersei Lannister";

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad AddCardPage');
    }

    openConfirm() {
        this.navCtrl.push(ConfirmPage);
        console.log("check point !")
    }

    formatCardNumber()
    {
        console.log(this.nbCarte)
        let string=this.nbCarte.toString()
        console.log("NB STRING --> "+string)
        let formatstring="";
        for(let i=1; i<string.length+1; i++)
        {
            formatstring+=string.charAt(i-1)

            if(i%4===0)
            {
                formatstring+=' '
            }
        }

        console.log("FORMAT --> "+formatstring)
        this.nbCarteFormat=formatstring
    }

}
