import {Component, ViewChild} from '@angular/core';
import {App, IonicPage, NavController, NavParams, Tabs} from 'ionic-angular';
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
    menuID: any;
    menuMealID: any;
    total: number;
    special:any
    user:any;
    restaurantId:any

    @ViewChild('tabs') tabs: Tabs;



    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, private storage: Storage,private app: App) {
        this.code = "";
        this.mealId = this.mealId || [];
        this.init()
        this.idCommand = null;
        this.create = null;
        this.nbPers = null;
        this.schedule = null;
        this.special=null


    }

    ionViewDidLoad() {

        console.log('ionViewDidLoad ConfirmPage');

    }

    init() {
        this.storage.get('user').then(data=>{
            if(data!=null)this.user=data
        }, error=>console.log("ERR on get USER IN STORAGE"))
        this.storage.get('special').then(data=>{

                this.special=data

            },
            error => console.error(error))
        this.storage.get('id_restaurant').then(data =>{

            this.restaurantId=data
        })

        this.storage.get('menuID').then(data => {

            this.menuID = data
            console.log("DATA --> " + data)
        }, error => console.error(error))

        this.storage.get('menuMealID').then(data => {
            console.log("DATA --> " + data)
            this.menuMealID = data
        }, error => console.error(error))

        this.storage.get('total').then(data => {
            this.total = data
            console.log("DATA --> " + data)
        }, error => console.error(error))
        this.storage.get('nbPers').then(data => {
            this.nbPers = data
            console.log("DATA NBPER --> " + data)
            this.post()
        }, error => console.error(error))

        this.storage.get('schedule').then(data => {
            if(data!=null)
            this.schedule = data.replace(':', '')
            console.log("DATA SCHEDULE --> " + data)
            this.post()
        }, error => console.error(error))

        this.post()
        this.storage.get('idMeals').then(
            data => {
                this.mealId = data
                console.log("AAA --> " + data)
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

        if (this.create != null && this.mealId != null) {
            let menu;
            let meal;
            if(this.menuID===null)
                menu=null
            else
                menu='{\"' + this.menuID + '\":[' + this.menuMealID + ']}'

            if(this.mealId.length===0)
                meal=null
            else
                meal=this.mealId


            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let dateTime = date+' '+time;

            if (this.create) {

                if (this.nbPers != null && this.schedule != null ) {
                    this.cleanStorage()

                    console.log("MEAL ID  --> " + this.mealId)

                    console.log("!!! JE CREE UNE RESERVATION !!!")
                    console.log("USER --> "+JSON.stringify(this.user))
                    this.postBooking({
                        master_user_id: this.user.data.id,
                        restaurant_id: this.restaurantId,
                        nb_users: this.nbPers,
                        schedule: this.schedule,
                        meal_id: meal,
                        date:dateTime,
                        payment_id: this.navParams.get('idPayment'),
                        menu: menu,
                        total: this.total,
                        special:this.special
                    })
                }
            }
            else {
                if (this.idCommand != null ) {

                    console.log("TOTAL --> "+this.total)
                    this.cleanStorage()
                    console.log("AT INSTANT T --> " + this.idCommand)
                    this.postCommand({

                        user_id: this.user.data.id,
                        meal_id: meal,
                        payment_id: this.navParams.get('idPayment'),
                        booking_id: this.idCommand,
                        menu: menu,
                        total: this.total,
                        date:dateTime,
                        special:this.special

                    })
                }
            }
        }
    }

    goHome() {

        // this.tabRef.select(0)
        console.log(this.navCtrl.parent.selectedIndex)

        if(this.app.getRootNav().getActiveChildNav().selectedIndex!==0)
        {
            this.app.getRootNav().getActiveChildNav().select(1);

            this.navCtrl.parent.select(0)
        }

        else
        {
            this.navCtrl.popToRoot()
        }

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


    private cleanStorage() {
        console.log("CLEAR STORAGE")
        this.storage.remove('menuID')
        this.storage.remove('menuMealID')
        this.storage.remove('total')
        this.storage.remove('nbPers')
        this.storage.remove('schedule')
        this.storage.remove('idMeals')
        this.storage.remove('id_command')
        this.storage.remove('create_booking')
        this.storage.remove('special')


    }
}
