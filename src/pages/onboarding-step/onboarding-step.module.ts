import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnboardingStepPage } from './onboarding-step';

@NgModule({
  declarations: [
    OnboardingStepPage,
  ],
  imports: [
    IonicPageModule.forChild(OnboardingStepPage),
  ],
})
export class OnboardingStepPageModule {}
