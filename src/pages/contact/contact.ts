import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddCardPage } from "../add-card/add-card";
import { OnboardingPage } from "../onboarding/onboarding";
import { AboutPage } from "../about/about";
import { CguPage } from "../cgu/cgu";
import { CgvPage } from "../cgv/cgv";



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
  
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  // openAddCard() {
  //   this.navCtrl.push(AddCardPage, {
  //     param: true
  //   });
  // }

  openOnBoarding() {
    this.navCtrl.push(OnboardingPage)

  }

  openAbout() {
    this.navCtrl.push(AboutPage)

  }

  openCgu(){
      this.navCtrl.push(CguPage)
  }

    openCgv(){
        this.navCtrl.push(CgvPage)
    }

}
