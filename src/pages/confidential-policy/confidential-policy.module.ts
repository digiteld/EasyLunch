import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfidentialPolicyPage } from './confidential-policy';

@NgModule({
  declarations: [
    ConfidentialPolicyPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfidentialPolicyPage),
  ],
})
export class ConfidentialPolicyPageModule {}
