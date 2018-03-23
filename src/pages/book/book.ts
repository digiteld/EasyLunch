import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {RecapPage} from "../recap/recap";

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {

    errorMessage: string;
    booking:any;
    tabs:any;
    mapResto:any;

    commandeEncour:boolean;

    constructor(public navCtrl: NavController, public rest: RestProvider) {
        this.tabs = navCtrl.parent;
        this.getBooking()
        this.mapResto = new Map();
        this.commandeEncour=false;
  }

    ionViewDidEnter(){

    }
  private getBooking() {
    this.rest.getCommandWithIdUser(1) .subscribe(
        _booking => {
            this.booking = _booking.booking;
            console.log(this.booking[0].created_date)
            let date=this.booking[0].created_date
            if(date.substr(0,4)==(new Date()).getFullYear()) {

                if (parseInt(date.substr(5, 2))-1 == (new Date()).getMonth()) {

                    if (date.substr(8, 2) == (new Date()).getDate()) {

                        this.commandeEncour = true;
                    }
                }

            }

            _booking.infoResto.map(resto=>{

                if(!this.mapResto.has(resto.id))
                    this.mapResto.set(resto.id,resto)
            })


        },

        error => this.errorMessage = <any>error);
  }

    getPictureResto(idResto)
    {
        console.log(idResto)
        console.log(parseInt(this.mapResto.get(idResto)))
    }

    getNameResto(idResto)
    {


    }
  openDetail(i) {
      console.log("Je suis sensé ouvrir la commande "+i)
this.navCtrl.push(RecapPage,
    {

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
