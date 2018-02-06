import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

// Code qui ne fonctionne pas 
export class AboutPage {

  restaurant: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider) {

  }

  ionViewDidLoad() {
    this.getRestaurant();
  }

  getRestaurant() {
    this.rest.getRestaurant()
       .subscribe(
         restaurant => this.restaurant = restaurant,
         error =>  this.errorMessage = <any>error);
  }

}

// Code qui fonctionne

// export class AboutPage {

//   countries: any;
//   errorMessage: string;

//   constructor(public navCtrl: NavController, public rest: RestProvider) {

//   }

//   ionViewDidLoad() {
//     this.getCountries();
//   }

//   getCountries() {
//     this.rest.getCountries()
//        .subscribe(
//          countries => this.countries = countries,
//          error =>  this.errorMessage = <any>error);
//   }

// }
