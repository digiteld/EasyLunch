import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

import { ConfirmPage } from '../confirm/confirm';

import {Storage} from '@ionic/storage';
import {RestProvider} from "../../providers/rest/rest";
import { LoginPage } from '../login/login';

import adyenEncrypt from 'adyen-encryption';
import {Stripe} from "@ionic-native/stripe";


@IonicPage()
@Component({
    selector: 'page-add-card',
    templateUrl: 'add-card.html',
})
export class AddCardPage {

    nbCarte: number;
    ccv: number;
    nameCard: string;

    nbCarteFormat:string;
    showValidation: boolean;
    total:number;
    user:any;

    Expire: string;
    cryptedCard:any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public rest:RestProvider,private toastCtrl: ToastController,private stripe: Stripe) {

        this.init()

    }


    init() {

        this.Expire = "2018-08";
        this.nameCard = "Cersei Lannister";
        this.ccv=737;
        this.nbCarte=4111111111111111;

        this.showValidation=true;

        if(this.navParams.get('param'))
            this.showValidation = false;

        this.formatCardNumber();


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
        console.log("DATE --> "+this.Expire);
        this.testCrypt()
        this.validateCardNumber();
        this.validateCcv();
        // this.navCtrl.push(ConfirmPage);


        console.log("check point !");
    }

    sendRequestPayment()
    {
        console.log("CRYPTCARD --> "+this.cryptedCard)
        this.rest.postPayment(
            {
                cardCrypt:this.cryptedCard,
                total:this.total,
                userId:this.user.data.id
            }
        ).subscribe(data =>{
                console.log("DATA --> "+JSON.stringify(data))

                if(data.data.type==="authorized")
                {
                    console.log("Payment Accepted")
                    this.navCtrl.push(ConfirmPage, {idPayment:data.idPayment});

                }
                else
                {
                    console.log("Payment Refused")
                    this.displayError();
                }

            },
            error => console.log("ERR in request Payment --> "+<any>error))
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

    testCrypt() {


        // pk_test_OroJxJDVZvIhdaAL8Oc2ODV9

        this.stripe.setPublishableKey('pk_test_OroJxJDVZvIhdaAL8Oc2ODV9');

        let card = {
            number: this.nbCarte.toString(),
            expMonth: parseInt(this.Expire.split('-')[1]),
            expYear: parseInt(this.Expire.split('-')[0]),
            cvc: this.ccv.toString()
        };

        this.stripe.createCardToken(card)
            .then(token =>
            {
                console.log(token.id)
                this.cryptedCard=token.id
                        this.sendRequestPayment()
            })
            .catch(error =>
            {console.error(error)

                let toast = this.toastCtrl.create({
                    message: error.message,
                    duration: 3000
                });
                toast.present();
            });

        // var key = "10001|AABEDA463F453CF0263D1181B1F3835C2F23A264F5589995CA0D86EC9AF5E0BFA55E758C7B7D73F3E31E96FBB4E4D09AE1C1B3A723CB2F9338CA82204879203F400AC5BC8639E4ABEA9EA45EA78596CDA7EC4520779ADD441E3B7A9BDC0BCD5A1AB8A9CB96955745269E33D5EFE72D234F608C6E4E20DC4FC35FE81B890923F2591E26A24908532C8900468705E510832EDD03B4F616C40B2EE29B9844653CF504531087ECAFE9E5F8A35848BCFCE911769928AB02BBD290041AE0336E14EF31115C96427A07CC1A1317BF6E382D7393C01725F87529483C996730DD36DF060693385579A1F6DB998A420C4EE98DA78719F8EE2EE12FE4195FFD5BDEA01A8C87";
        //
        // var cardData = {
        //     number: this.nbCarte,
        //     cvc: this.ccv,
        //     holderName: this.nameCard,
        //     expiryMonth: this.Expire.split('-')[1],
        //     expiryYear:this.Expire.split('-')[0],
        //
        // }
        // adyenEncrypt.encrypt(key, cardData)
        //     .then((dataEncrypted)=>{
        //         console.log("DATAENCRYPTED --> "+dataEncrypted)
        //         this.cryptedCard=dataEncrypted
        //         this.sendRequestPayment()
        //     });




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
        console.log("Expire ---->" + this.Expire);
    }

    displayError() {
        let toast = this.toastCtrl.create({
            message: 'Paiement refusé : vérifiez vos identifiants bancaires',
            duration: 3000
        });
        toast.present();
    }

    goBack() {
        this.navCtrl.pop()
    }

}
