import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Tabs} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {HomePage} from '../home/home';
import {RestProvider} from "../../providers/rest/rest";
import {TabsPage} from "../tabs/tabs";


/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-confirm',
    templateUrl: 'confirm.html',
})

export class ConfirmPage {

    code: string;
    errorMessage: string;
    create: boolean;
    idCommand:number;
    @ViewChild('myTabs') tabRef: Tabs;
    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, private storage: Storage,) {
        this.code = "";
        storage.get('create_booking').then(data => {
                this.create = data
                if (!this.create) {
                    storage.get('id_command').then(
                        data => {this.idCommand = data
                            this.post()
                            console.log("BOOKING ID --> "+data)}
                        ,
                        error => console.error(error))
                }
                else
                    this.post()
            },
            error => console.error(error))


    }

    ionViewDidLoad() {

        console.log('ionViewDidLoad ConfirmPage');

    }

    post()
    {
        if (this.create) {
            this.postBooking({
                master_user_id: 1,
                restaurant_id: 1,
                nb_users: 1,
                schedule: 1200,
                meal_id: [1, 2, 3],
                payment_id: 2
            })
        }
        else {
            console.log("AT INSTANT T --> "+this.idCommand)
            this.postCommand({
                user_id:1,
                meal_id: [1, 2, 3],
                payment_id: 2,
                booking_id:this.idCommand
            })
        }
    }

    goHome() {

        this.tabRef.select(0)

        // this.navCtrl.push(HomePage);
        console.log('FELICITATION !!! Parcours terminé');
    }

    private postCommand(arg) {
        this.rest.postCommand(arg)
            .subscribe(
                result => {

                    console.log("APAPAPAP --> "+result);


                },
                error => this.errorMessage = <any>error);
    }

    private postBooking(arg) {
        this.rest.postBooking(arg)
            .subscribe(
                code => {
                    this.code = <string>code;
                    console.log(this.code);


                },
                error => this.errorMessage = <any>error);
    }
}
