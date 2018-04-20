import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

import { ConfirmPage } from '../confirm/confirm';

import {Storage} from '@ionic/storage';
import {RestProvider} from "../../providers/rest/rest";


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
    total:number;
user:any;

    formatExpire: string;
    Expire: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public rest:RestProvider,private toastCtrl: ToastController) {

        this.init()

    }


    init() {

        this.Expire = "08/18";
        this.formatExpire = null;

        this.showValidation=true;
        if(this.navParams.get('param'))
            this.showValidation = false;
        this.nbCarte=4111111111111111;

        this.formatCardNumber()

        this.nbExpire = "08/18";
        this.nameCard = "Cersei Lannister";
        this.ccv=737
        this.storage.get("total").then(
            data=> {if(data!=null)
                this.total=data
            },
            error=>console.log("err --> "+error)
        )
        this.storage.get("user").then(
            data => {
                console.log("USER DATA --> "+data)
                if(data!=null)
                this.user=data
            },
            error =>{
                console.log("Err When i load get user "+error)
            }
        )


        // this.storage.get("nbCarte").then(
        //
        //     data=> {
        //         console.log("NB CARTE --> "+data);
        //         if(data!==null)
        //         {
        //         this.nbCarte=data;
        //         this.formatCardNumber()
        //         }
        //         },
        //     error=>console.log("err --> "+error)
        // )



        // this.storage.get("ccv").then(
        //     data=> {if(data!=null)
        //         this.ccv=data
        //     },
        //     error=>console.log("err --> "+error)
        // )
        //

        //
        // this.storage.get("nbExpire").then(
        //     data=> {if(data!=null)
        //         this.nbExpire=data
        //     },
        //     error=>console.log("err --> "+error)
        // )
        //
        // this.storage.get("nameCard").then(
        //     data=> {if(data!=null)
        //         this.nameCard=data
        //     },
        //     error=>console.log("err --> "+error)
        // )



    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddCardPage');

    }

    openConfirm() {
        // this.storage.set("ccv",this.ccv)
        // this.storage.set("nbCarte",this.nbCarte)
        // this.storage.set("nbExpire",this.nbExpire)
        // this.storage.set("nameCard",this.nameCard)

        //
        // this.navCtrl.push(ConfirmPage);

        this.validateCardNumber();
        this.validateCcv();

        this.rest.postPayment(
            {
                nbCard:this.nbCarte,
                expire:this.nbExpire,
                ccv:this.ccv,
                name:this.nameCard,
                total:this.total,
                userId:this.user.data.id
            }
        ).subscribe(data =>{
            console.log("DATA --> "+JSON.stringify(data))
            if(data.data.resultCode==="Error")
            {
                console.log("Payment Refused")

            }
            if(data.data.resultCode==="Authorised")
            {
                    console.log("Payment Accepted")
                    this.navCtrl.push(ConfirmPage, {idPayment:data.idPayment});

            }
            if(data.data.resultCode==="Refused")
            {
                console.log("Payment Refused")
            }
        },
            error => console.log("ERR in request Payment --> "+<any>error))

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

    validateCardNumber(){
        let cardString = this.nbCarte.toString();
        if(this.nbCarte > 0 && cardString.length === 16){
            console.log("Numéro de carte valide");
            return true;
        }else{
            console.log("Numéro de carte invalide");
            return false;
        }
    }

    validateCcv(){
        let ccvString = this.ccv.toString();
        if(this.ccv > 0 && ccvString.length === 3){
            console.log("Numéro CCV valide");
            return true;
        }else{
            console.log("Numéro CCV invalide");
            return false;
        }
    }

    validateExpire() {
        console.log("Expire ---->" + this.nbExpire);
        this.nbExpire = this.Expire;


    }


    goBack() {
        this.navCtrl.pop()
    }

}
