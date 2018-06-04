import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import CryptoJS from 'crypto-js';
import {AddCardPage} from '../add-card/add-card';
import {AccountCreaPage} from '../account-crea/account-crea';
import {RestProvider} from "../../providers/rest/rest";
import {PassRecoverPage} from "../pass-recover/pass-recover";


import {Storage} from "@ionic/storage";


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

    mail: string;
    password: string;
    errorMail: boolean;
    errorPass: boolean;


    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, private storage: Storage) {
        this.errorMail = false;
        this.errorPass = false;
        this.mail = "";
        this.password = "";
    }



    ionViewDidLoad() {

        console.log('ionViewDidLoad LoginPage');
    }

    openAddCard() {
        this.validateEmail();
        this.validatePassword();

        console.log('ajoutes ta CB');
        if (!this.errorMail && !this.errorPass) {
            var hash= CryptoJS.SHA256(this.password);
            this.rest.getUser("?mail=" + this.mail + "&pass=" + hash)
                .subscribe(
                    result => {
                        console.log("RESULT --> " + JSON.stringify(result))
                        if (result['code'] === 1) {
                            this.storage.set("isConnected",true)
                            this.storage.set("user",result)

                            if(this.navParams.get('returnToBack')===true)
                                this.navCtrl.pop()
                            else
                            this.navCtrl.push(AddCardPage);
                        }
                        else {
                            console.log("Identifiant invalide")
                            this.errorPass=true;
                        }
                    },
                    error => console.log("ERR --> " + <any>error));
        }
    }

    openCrea() {
        console.log("ici tu peux te connecter");
        this.navCtrl.push(AccountCreaPage);
    }

    openRecover(){
        this.navCtrl.push(PassRecoverPage);
    }

    goBack() {
        this.navCtrl.pop()
    }


    validateEmail() {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.mail.match(mailformat)) {

            if(this.errorMail === true){
                this.errorMail = false;
            }

            return true;
        }
        else {
            console.log("You have entered an invalid email address!");
            this.errorMail = true;
            return false;
        }
    }

    validatePassword() {
        if (this.password.length > 0) {
            if(this.errorPass === true){
                this.errorPass = false;
            }
            return true;
        }
        else
            this.errorPass = true;
            return false;
    }

}
