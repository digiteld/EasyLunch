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
    idCommand: number;
    mealId: number[]
    nbPers: string
    schedule: string;

    @ViewChild('myTabs') tabRef: Tabs;

    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, private storage: Storage,) {
        this.code = "";
        this.mealId = this.mealId || [];
        this.init()
        this.idCommand = null;
        this.create = null;
        this.nbPers = null;
        this.schedule = null;


    }

    ionViewDidLoad() {

        console.log('ionViewDidLoad ConfirmPage');

    }

    init() {

        this.storage.get('nbPers').then(data => {
            this.nbPers = data
            console.log("DATA NBPER --> " + data)
            this.post()
        }, error => console.error(error))

        this.storage.get('schedule').then(data => {
            this.schedule = data.replace(':', '')
            console.log("DATA SCHEDULE --> " + data)
            this.post()
        }, error => console.error(error))

        this.post()
        this.storage.get('idMeals').then(
            data => {
                this.mealId = data
                console.log("AAA --> "+data)
                this.post()


            }
            ,
            error => console.error(error))
        this.storage.get('create_booking').then(data => {

                this.create = data
                if (!this.create) {
                    this.storage.get('id_command').then(
                        data => {
                            this.idCommand = data

                            this.post()
                            console.log("BOOKING ID --> " + data)
                        }
                        ,
                        error => console.error(error))
                }
                else
                    this.post()


            },
            error => console.error(error))

    }

    post() {

        console.log("TEST --> "+this.create+"  "+this.mealId+"   "+this.idCommand)
        if (this.create != null && this.mealId != null ) {
            console.log("Je rentre dans la premiere STEP ")
            if (this.create) {
                console.log("Je rentre dans la deuxieme STEP ")
                if (this.nbPers != null && this.schedule != null) {
                    console.log("Je rentre dans la troisieme STEP ")
                    console.log("NB USERS --> " + this.nbPers)
                    console.log("schedule --> " + this.schedule)

                    this.postBooking({
                        master_user_id: 1,
                        restaurant_id: 1,
                        nb_users: this.nbPers,
                        schedule: this.schedule,
                        meal_id: this.mealId,
                        payment_id: 2
                    })
                }
            }
            else {
                if(this.idCommand!=null) {
                    console.log("AT INSTANT T --> " + this.idCommand)
                    this.postCommand({
                        user_id: 1,
                        meal_id: this.mealId,
                        payment_id: 2,
                        booking_id: this.idCommand
                    })
                }
            }
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

                    console.log("APAPAPAP --> " + result);


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
