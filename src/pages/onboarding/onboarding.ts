import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { OnboardingStepPage } from "../onboarding-step/onboarding-step";

@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingPage');
  }

  goStep() {
    this.navCtrl.push(OnboardingStepPage); 
  }

  goHome() {
    this.navCtrl.popToRoot();
  }

}


