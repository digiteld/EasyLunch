import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NgSwitch } from '@angular/common';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  })
  
export class DetailsPage {
  valeur: number;
  special:string
  // tabBarElement: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.valeur = 1;

    // if (document.querySelector('.tabbar')) {
    //   this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    //   if (document.querySelector('.scroll-content')) {
    //   }
    // }



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    console.log(this.navParams.get('meal'));

  }
  
  // ionViewWillEnter() {
  //   if (this.tabBarElement) {
  //     this.tabBarElement.style.display = 'none';
  //   }

  // }

  // ionViewWillLeave() {
  //   if (this.tabBarElement) {
  //     this.tabBarElement.style.display = 'flex';
  //   }
  // }

  goBack() {
    this.navCtrl.pop();
  }

  incremente() {
      this.valeur++;
  }

  decremente() {
    if (this.valeur != 0)
        this.valeur--;
  }

  openMenu() {
    let callback = this.navParams.get('callback');
    console.log("SPECIAL --> "+this.special)
      this.navCtrl.pop();
      let p = ((this.valeur)*(this.navParams.get('meal').price*100))/100;
      console.log()
    callback(p, this.valeur,this.special)

  }


}
