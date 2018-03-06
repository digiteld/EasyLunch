import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-participate',
  templateUrl: 'participate.html'
})

export class ParticipatePage {

  restaurant: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider) {

  }

  ionViewDidLoad() {
    console.log("J'ai charger les page")
    this.getRestaurants();
  }

  getRestaurants() {
    this.rest.getRestaurants()
      .subscribe(
      restaurant => {
          this.restaurant = restaurant

      },
      error => this.errorMessage = <any>error);


  }

}