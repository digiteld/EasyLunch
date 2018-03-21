import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailMenuPage } from './detail-menu';

@NgModule({
  declarations: [
    DetailMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailMenuPage),
  ],
})
export class DetailMenuPageModule {}
