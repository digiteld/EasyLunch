import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {

    errorMessage: string;
    booking:any;

    constructor(public navCtrl: NavController, public rest: RestProvider) {

        this.getBooking()

  }


  private getBooking() {
    this.rest.getCommandWithIdUser(1) .subscribe(
        _booking => {
            this.booking = _booking;

        },

        error => this.errorMessage = <any>error);
  }


  openDetail(i) {
      console.log("Je suis sensé ouvrir la commande "+i)
      this.booking.find(item =>
          item.id === 2
      )
  }
  
  goHome() {

    // this.tabRef.select(0)
    console.log(this.navCtrl.length())

   // this.navCtrl.setPages(this.navCtrl[0])
    this.navCtrl.popToRoot()
    console.log('FELICITATION !!! Parcours terminé');
}
    

}
