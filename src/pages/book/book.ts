import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { RecapPage } from "../recap/recap";
import {Storage} from '@ionic/storage';
import {LoginPage} from "../login/login";



@Component({
    selector: 'page-book',
    templateUrl: 'book.html'
})
    
export class BookPage {

    errorMessage: string;
    booking: any;
    date:any;
    tabs: any;
    mapResto: any;
    user:any;
    commandeEncour: boolean;

    constructor(public navCtrl: NavController, public rest: RestProvider, public storage:Storage) {
        this.tabs = navCtrl.parent;
        this.booking =this.booking || [];
        this.user=null

        this.storage.get('user').then(data=>{
            if(data!=null)
            {
                this.user=data
                this.getBooking()
            }


        }, error=>console.log("ERR on get USER IN STORAGE"))

        this.mapResto = new Map();
        this.commandeEncour = false;

    }

    ionViewDidEnter() {
        this.storage.get('user').then(data=>{
            console.log("USER --> "+data)
            if(data!=null)
            {

                this.user=data
                this.getBooking()
            }
            else {
               this.user=null
                this.date=null
                this.commandeEncour=false
                this.booking=null
            }

        }, error=>console.log("ERR on get USER IN STORAGE"))

    }

    private getBooking() {
        this.rest.getCommandWithIdUser(this.user.data.id).subscribe(
            _booking => {
                this.date=_booking.date
                this.booking = _booking.booking;
                console.log(JSON.stringify(this.booking[0]))
                let date = this.booking[0].created_date
                console.log(JSON.stringify(this.booking[0]))
                if (date != null) {
                    if (date.substr(0, 4) == (new Date()).getFullYear()) {
                        if (parseInt(date.substr(5, 2)) - 1 == (new Date()).getMonth()) {
                            if (date.substr(8, 2) == (new Date()).getDate()) {
                                this.commandeEncour = true;
                                console.log(JSON.stringify(this.booking[0]))
                            }
                        }

                    }
                }

                _booking.infoResto.map(resto => {

                    console.log("INFO RESTO --> "+JSON.stringify(resto.name))
                    if (!this.mapResto.has(resto.id))
                    {
                        console.log("J'ADD")
                        this.mapResto.set(resto.id, resto)
                    }

                    console.log("MAP RESTO LENGTH --> "+this.mapResto.size )
                })



            },

            error => this.errorMessage = <any>error);
    }



    openDetail(i) {

        let obj=this.booking[i]
        let objResto=this.mapResto.get(obj.restaurant_id)
        console.log("APAPAPAPAPAP --> "+JSON.stringify(obj))
        let printCode=false
        if(i===0 && this.commandeEncour)
            printCode=true;




        this.navCtrl.push(RecapPage,
            {
                book:true,
                mealId:obj.meal_id,
                menu:obj.menu,
                img:objResto.picture,
                address:objResto.address,
                name:objResto.name,
                desc:objResto.description,
                schedule:obj.schedule,
                nbPers:obj.nb_users,
                restoId:obj.restaurant_id,
                printCode:printCode,
                bookingId:obj.bookingid,
                total:obj.price
            })

    }

    goHome() {

        // this.tabRef.select(0)
        console.log(this.navCtrl.length())

        // this.navCtrl.setPages(this.navCtrl[0])

        this.tabs.select(0)
        console.log('FELICITATION !!! Parcours terminé');
    }

    goLogin()
    {
        this.navCtrl.push(LoginPage,{returnToBack:true})
    }


}
