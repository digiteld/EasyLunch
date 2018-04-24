import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CgPage } from './cg';


@NgModule({
    declarations: [
        CgPage,
    ],
    imports: [
        IonicPageModule.forChild(CgPage),
    ],
})

export class CgPageModule {}