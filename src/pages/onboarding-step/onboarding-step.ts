import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-onboarding-step',
  templateUrl: 'onboarding-step.html',
})
export class OnboardingStepPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingStepPage');
  }

  goStep() {
    this.navCtrl.push(OnboardingStepPage); 
  }

  goHome() {
    this.navCtrl.popToRoot();
  }
  
}
