import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecapPage } from './recap';

@NgModule({
  declarations: [
    RecapPage,
  ],
  imports: [
    IonicPageModule.forChild(RecapPage),
  ],
})
export class RecapPageModule {}
