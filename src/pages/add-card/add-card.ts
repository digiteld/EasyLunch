import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConfirmPage } from '../confirm/confirm';
import {LoginPage} from "../login/login";
import {Storage} from '@ionic/storage';


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
    showValidation: boolean;


    constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {

        this.init()

    }


    init() {
        this.showValidation=true
        if(this.navParams.get('param'))
            this.showValidation = false

        this.nbCarteFormat = "";
        this.nbExpire = "";
        this.nameCard = "";

        this.storage.get("ccv").then(
            data=> {if(data!=null)
                this.ccv=data
            },
            error=>console.log("err --> "+error)
        )

        this.storage.get("nbCarte").then(
            data=> {if(data!=null)
                this.nbCarte=data
                this.formatCardNumber()
            },
            error=>console.log("err --> "+error)
        )

        this.storage.get("nbExpire").then(
            data=> {if(data!=null)
                this.nbExpire=data
            },
            error=>console.log("err --> "+error)
        )

        this.storage.get("nameCard").then(
            data=> {if(data!=null)
                this.nameCard=data
            },
            error=>console.log("err --> "+error)
        )



    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddCardPage');
    }

    openConfirm() {
        this.storage.set("ccv",this.ccv)
        this.storage.set("nbCarte",this.nbCarte)
        this.storage.set("nbExpire",this.nbExpire)
        this.storage.set("nameCard",this.nameCard)
        this.navCtrl.push(ConfirmPage);
        console.log("check point !");
    }

    formatCardNumber() {
        console.log(this.nbCarte)
        let string=this.nbCarte.toString()
        console.log("NB STRING --> "+string)
        let formatstring="";
        for (let i = 1; i < string.length + 1; i++) {

            formatstring+=string.charAt(i-1)

            if(i%4===0) {
                formatstring += ' ';
            }
        }

        console.log("FORMAT --> " + formatstring);
        this.nbCarteFormat = formatstring;
    }

}
