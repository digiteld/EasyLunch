import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import CryptoJS from 'crypto-js';
import {LoginPage} from '../login/login';
import {AddCardPage} from '../add-card/add-card';
import {RestProvider} from "../../providers/rest/rest";

/**
 * Generated class for the AccountCreaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-account-crea',
    templateUrl: 'account-crea.html',

})

export class AccountCreaPage {

    name: string;
    email: string;
    phone: string;
    password: string;

    errorMail: boolean;
    mailExist : boolean;
    errorPass: boolean;
    errorName : boolean;
    errorPhone : boolean;


    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
        this.errorMail = false;
        this.errorPass = false;
        this.errorName = false;
        this.errorPhone = false;
        this.mailExist = false;
        this.email="";
        this.name="";
        this.phone="";
        this.password="";
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AccountCreaPage');
    }

    openLogin() {
        console.log("ici tu peux créer ton compte mon ami");
        this.navCtrl.push(LoginPage);
    }

    openAddCard() {
        console.log('ajoutes ta CB');
        console.log("NAME --> " + this.name)
        console.log("MAIL --> " + this.email)
        console.log("PHONE --> " + this.phone)
        console.log("PASSWORD --> " + this.password)
        this.validateName();
        this.validateEmail();
        this.validatePassword();
        this.validatePhone();

        if (!this.errorMail && !this.errorPhone && !this.errorName && !this.errorPass) {
            this.rest.createUser(
                {
                    name: this.name,
                    password:  CryptoJS.SHA256(this.password),
                    mail: this.email,
                    phone: this.phone,
                }
            ).subscribe(
                result => {

                    console.log("RESULT CREATE USER --> " + JSON.stringify(result));
                    if (result['code'] === 0) {

                        console.log("USER ALREADY EXIST")
                        if(this.errorMail === true){
                            this.errorMail = false;
                            this.mailExist = true;
                        }else{
                            this.mailExist = true;
                        }
                    }
                    else {
                        /*this.navCtrl.push(AddCardPage);*/
                        this.navCtrl.push(LoginPage);
                        console.log("IT'S GOOD !!!");
                    }
                },
                error => console.log('ERROR REQUEST CREATE USER --> ' + <any>error));
        }
    }

    goBack() {
        this.navCtrl.pop();
    }

    validateEmail() {
        console.log("AAAAAA")
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.email.match(mailformat)) {

            if (this.errorMail === true) {
                this.errorMail = false;
                }

                return true;

        } else {
            console.log("You have entered an invalid email address!");
            this.errorMail = true;
            return false;
        }
    }

    validatePhone() {
        if (this.phone.length > 0 && this.phone.length === 10 && parseInt(this.phone) < 1000000000 && !Number.isNaN(parseInt(this.phone))){
            if(this.errorPhone === true){
                this.errorPhone = false;
            }
            return true;
        } else{
            this.errorPhone = true;
            return false;
        }

    }

    validateName() {
        console.log(this.name);
        if (this.name.length > 0){
            console.log("condition length ici" );
            if(this.errorName === true){

                this.errorName = false;
            }

            return true;

        } else{
            console.log("condition else ici" );
            this.errorName = true;
            return false;
        }
    }

    validatePassword() {
        if (this.password.length >= 8){
            if(this.errorPass === true){
                this.errorPass = false;
            }
            return true;

        } else {
            this.errorPass = true;
            return false;
        }
    }

}
