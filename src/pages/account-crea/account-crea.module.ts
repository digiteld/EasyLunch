import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountCreaPage } from './account-crea';

@NgModule({
  declarations: [
    AccountCreaPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountCreaPage),
  ],
})
export class AccountCreaPageModule {}
