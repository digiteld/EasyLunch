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


  private getBooking()
  {
    this.rest.getCommandWithIdUser(1) .subscribe(
        _booking => {
            this.booking = _booking;
            console.log(_booking)


        },
        error => this.errorMessage = <any>error);
  }


  openDetail(i)
  {
      console.log("Je suis censé ouvrir la commande "+i)
      this.booking.find(item =>
          item.id === 2

      )
  }





}
