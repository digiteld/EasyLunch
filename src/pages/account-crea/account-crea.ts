import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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
    phone: number;
    password: string;

    errorMail: boolean;
    errorPass: boolean;
    errorName : boolean;
    errorPhone : boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
        this.errorMail = false;
        this.errorPass = false;
        this.errorName = false;
        this.errorPhone = false;
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
        console.log("MAIL VALIDE --> " + this.validateEmail())
        console.log("phone VALIDE --> " + this.validatePhone())

        if (this.validateEmail() && this.validateEmail() && this.validateName() && this.validatePassword()) {
            this.rest.createUser(
                {
                    name: this.name,
                    password: this.password,
                    mail: this.email,
                    phone: this.phone,
                }
            ).subscribe(
                result => {

                    console.log("RESULT CREATE USER --> " + JSON.stringify(result));
                    if (result['code'] === 0) {
                        console.log("USER ALREADY EXIST")
                    }
                    else {
                        this.navCtrl.push(AddCardPage);
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
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.email.match(mailformat)) {
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

    validatePhone() {
        if (this.phone < 1000000000){
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
        if (this.name.length > 0){
            if(this.errorName === true){
                this.errorName = false;
            }
            return true;

        } else{
            this.errorName = true;
            return false;
        }
    }

    validatePassword() {
        if (this.password.length > 0){
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
