import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {RecapPage} from "../recap/recap";

@Component({
    selector: 'page-book',
    templateUrl: 'book.html'
})
export class BookPage {

    errorMessage: string;
    booking: any;
    tabs: any;
    mapResto: any;

    commandeEncour: boolean;

    constructor(public navCtrl: NavController, public rest: RestProvider) {
        this.tabs = navCtrl.parent;
        this.getBooking()
        this.mapResto = new Map();
        this.commandeEncour = false;
    }

    ionViewDidEnter() {

    }

    private getBooking() {
        this.rest.getCommandWithIdUser(1).subscribe(
            _booking => {
                this.booking = _booking.booking;
                console.log(JSON.stringify(this.booking[0]))
                let date = this.booking[0].created_date
                console.log(JSON.stringify(this.booking[0]))
                if (date != null) {
                    if (date.substr(0, 4) == (new Date()).getFullYear()) {

                        if (parseInt(date.substr(5, 2)) - 1 == (new Date()).getMonth()) {

                            if (date.substr(8, 2) == (new Date()).getDate()) {

                                this.commandeEncour = true;
                            }
                        }

                    }
                }

                _booking.infoResto.map(resto => {

                    if (!this.mapResto.has(resto.id))
                        this.mapResto.set(resto.id, resto)
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


}
