import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-recover',
    templateUrl: 'pass-recover.html',
})
export class PassRecoverPage {

    mail:any;
    errorMessage:any;
    errorResult:boolean
    successResult:boolean


    constructor(public navCtrl: NavController, public navParams: NavParams, public rest:RestProvider) {
    this.errorResult=false;
    this.successResult=false


    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Pass recover');
    }


    goBack() {
        this.navCtrl.pop()
    }

    sendPasswordRecoveryMail()
    {

        console.log(this.mail)
        this.rest.postRecoveryPassword({user:this.mail})

            .subscribe(
                data => {
                console.log(data)

                    if(data.code===0)
                    {
                        this.errorResult=true
                        this.successResult=false
                    }
                    else if(data.code===1)
                    {
                        this.successResult=true
                        this.errorResult=false
                    }

                },
                error =>
                {
                    console.log(error)
                    this.errorMessage = <any>error});
    }

}
